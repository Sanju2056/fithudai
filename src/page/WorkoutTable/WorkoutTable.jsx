import { useForm, useFieldArray } from "react-hook-form";

export default function WorkoutTable() {
  const { control, register, handleSubmit } = useForm({
    defaultValues: {
      exercises: [
        { exercise: "", set1: "", set2: "", set3: "" }
      ]
    }
  });

  const { fields, append } = useFieldArray({
    control,
    name: "exercises"
  });

  const onSubmit = (data) => {
    console.log(data.exercises);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-xl font-semibold mb-4">Workout Tracker</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="overflow-x-auto border rounded-xl">
          <table className="w-full text-base text-left">
            <thead className=" text-gray-500">
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
            onClick={() =>
              append({ exercise: "", set1: "", set2: "", set3: "" })
            }
            className="px-4 py-2 bg-gray-900 text-white rounded-lg  "
          >
            + Add Row
          </button>

          <button
            type="submit"
            className="px-6 py-2.5 bg-gray-900 text-white rounded-lg "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}