import { useState } from "react";
import ProfilePic from "../../assets/sanju.jpg";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

const StatCard = ({ label, value, icon, change, changeColor }) => (
  <div className=" rounded-2xl px-3 py-2 border border-gray-300 flex flex-col items-start">
    <div className="flex items-center gap-2">
      <p className="text-xs text-gray-900">{label}</p>
    </div>
    <p className="text-2xl font-bold text-gray-600 mt-1">{value}</p>
    {/* {change && <p className={`text-xs ${changeColor}`}>{change}</p>} */}
  </div>
);

export default function Profile() {
  const [editMode, setEditMode] = useState(false);
const navigate = useNavigate();
  return (
    <div className="min-h-screen py-8 px-4 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3 ">
          <ArrowLeft
            onClick={() => {
              window.history.back();
            }}
            className="size-5"
          />
          <h1 className="text-lg font-bold text-gray-800">My Profile</h1>
        </div>
        <button
          onClick={() => setEditMode(!editMode)}
          className="text-sm  font-semibold hover:underline"
        >
          {editMode ? "Cancel" : "Edit Profile"}
        </button>
      </div>

      {/* Profile Info */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 rounded-full overflow-hidden  mb-3">
          <img
            src={ProfilePic}
            alt="Sanju"
            className="object-cover w-full h-full"
          />
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-1">Sanju Gurung</h2>
        <p className="text-gray-400 text-sm">sanju@example.com</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <StatCard
          label="Steps Today"
          value="8,432"
          change="+12%"
          changeColor="text-emerald-400"
        />
        <StatCard
          label="Calories"
          value="1,240"
          change="+5%"
          changeColor="text-emerald-400"
        />
        <StatCard
          label="Workouts"
          value="5"
          change="-1"
          changeColor="text-red-400"
        />
      </div>
      <button
        onClick={() => {
          localStorage.removeItem("userData");
          navigate("/login");
          console.log("removed", localStorage.getItem("userData"));
        }}
        type="submit"
        className="w-full py-3 mb-4 bg-[#f3ebeb] flex items-center justify-center  rounded-lg font-semibold text-sm  active:scale-95 transition"
      >
        Log out
      </button>
      {editMode && (
        <div className=" p-4 rounded-2xl border border-white/5">
          <h4 className="text-white font-semibold mb-3 text-sm">
            Edit Profile
          </h4>
          <div className="mb-3">
            <label className="text-xs text-gray-300 mb-1 block">Name</label>
            <input
              type="text"
              defaultValue="Sanju Gurung"
              className="w-full px-3 py-2 text-sm border border-white/10 rounded-lg bg-[#12121c] text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-3">
            <label className="text-xs text-gray-300 mb-1 block">Email</label>
            <input
              type="email"
              defaultValue="sanju@example.com"
              className="w-full px-3 py-2 text-sm border border-white/10 rounded-lg bg-[#12121c] text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="w-full py-3 mt-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-500 active:scale-95 transition">
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
}
