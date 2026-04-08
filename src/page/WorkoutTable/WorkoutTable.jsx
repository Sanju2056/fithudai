import { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";

export default function WorkoutTable() {
  const { control, register, handleSubmit, reset } = useForm({
    defaultValues: {
      exercises: [{ exercise: "", set1: "", set2: "", set3: "" }]
    }
  });

  const { fields, append } = useFieldArray({
    control,
    name: "exercises"
  });

  // State to hold saved workouts for display in cards
  const [savedWorkouts, setSavedWorkouts] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("workoutData"));
    if (savedData && savedData.length) {
      reset({ exercises: savedData });
      setSavedWorkouts(savedData); // populate cards on load
    }
  }, [reset]);

  const onSubmit = (data) => {
    localStorage.setItem("workoutData", JSON.stringify(data.exercises));
    setSavedWorkouts(data.exercises);
    alert("Workout saved successfully!");
  };

  // Delete a single workout
  const handleDelete = (index) => {
    const updatedWorkouts = savedWorkouts.filter((_, i) => i !== index);
    setSavedWorkouts(updatedWorkouts);
    localStorage.setItem("workoutData", JSON.stringify(updatedWorkouts));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-xl font-semibold mb-4">Workout Tracker</h1>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="overflow-x-auto border rounded-xl">
          <table className="w-full text-base text-left">
            <thead className="text-gray-500">
              <tr>
                <th className="p-3">Exercise</th>
                <th className="p-3">Set 1</th>
                <th className="p-3">Set 2</th>
                <th className="p-3">Set 3</th>
              </tr>
            </thead>
            <tbody>
              {fields.map((item, index) => (
                <tr key={item.id} className="border-t">
                  <td className="p-3">
                    <input
                      {...register(`exercises.${index}.exercise`)}
                      placeholder="Bench Press"
                      className="w-full px-2 py-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      {...register(`exercises.${index}.set1`)}
                      placeholder="35 * 8"
                      className="w-full px-2 py-3 border rounded-md"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      {...register(`exercises.${index}.set2`)}
                      placeholder="35 * 8"
                      className="w-full px-2 py-3 border rounded-md"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      {...register(`exercises.${index}.set3`)}
                      placeholder="35 * 8"
                      className="w-full px-2 py-3 border rounded-md"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={() => append({ exercise: "", set1: "", set2: "", set3: "" })}
            className="px-4 py-2 bg-gray-900 text-white rounded-lg"
          >
            + Add Row
          </button>

          <button
            type="submit"
            className="px-6 py-2.5 bg-gray-900 text-white rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Display saved workouts as cards */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {savedWorkouts.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition relative"
          >
            <h2 className="font-semibold text-lg mb-2">{item.exercise || "No Exercise Name"}</h2>
            <p>Set 1: {item.set1 || "-"}</p>
            <p>Set 2: {item.set2 || "-"}</p>
            <p>Set 3: {item.set3 || "-"}</p>
            
            {/* Delete button */}
            <button
              onClick={() => handleDelete(index)}
              className="absolute top-2 right-2 text-red-600 font-bold hover:text-red-800"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}