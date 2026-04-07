import { useState } from "react";
import ProfilePic from "../../assets/sanju.jpg";

const StatCard = ({ label, value, icon, change, changeColor }) => (
  <div className="bg-[#1e1e2e] rounded-2xl p-4 border border-white/5 flex flex-col items-start">
    <div className="flex items-center gap-2">
      <span className="text-xl">{icon}</span>
      <p className="text-xs text-gray-400">{label}</p>
    </div>
    <p className="text-2xl font-bold text-white mt-1">{value}</p>
    {change && <p className={`text-xs ${changeColor}`}>{change}</p>}
  </div>
);

const WorkoutCard = ({ title, focus, duration, level, bgImage }) => (
  <div className="relative rounded-2xl overflow-hidden h-44 bg-gray-900 shadow-lg">
    <div
      className="absolute inset-0 bg-cover bg-center opacity-40"
      style={{ backgroundImage: `url(${bgImage})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
    <div className="relative p-4 flex flex-col justify-between h-full">
      <div className="flex gap-2">
        <span className="bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
          {level}
        </span>
        <span className="bg-white/10 text-white text-xs font-semibold px-2 py-0.5 rounded-full backdrop-blur-sm border border-white/10">
          {duration}
        </span>
      </div>
      <div>
        <h3 className="text-white font-extrabold text-xl leading-tight mb-0.5">{title}</h3>
        <p className="text-gray-400 text-xs mb-3">{focus}</p>
      </div>
    </div>
  </div>
);

export default function Profile() {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="min-h-screen bg-[#12121c] py-8 px-4 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">My Profile</h1>
        <button
          onClick={() => setEditMode(!editMode)}
          className="text-sm text-blue-400 font-semibold hover:underline"
        >
          {editMode ? "Cancel" : "Edit Profile"}
        </button>
      </div>

      {/* Profile Info */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-blue-500/40 mb-3">
          <img src={ProfilePic} alt="Sanju" className="object-cover w-full h-full" />
        </div>
        <h2 className="text-xl font-bold text-white mb-1">Sanju Gurung</h2>
        <p className="text-gray-400 text-sm">sanju@example.com</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        <StatCard label="Steps Today" value="8,432" icon="👟" change="+12%" changeColor="text-emerald-400" />
        <StatCard label="Calories" value="1,240" icon="🔥" change="+5%" changeColor="text-emerald-400" />
        <StatCard label="Workouts" value="5" icon="💪" change="-1" changeColor="text-red-400" />
      </div>

      {/* Recent Workouts */}
      <div className="mb-6">
        <h3 className="text-white font-bold mb-3 text-sm">Recent Workouts</h3>
        <div className="space-y-3">
          <WorkoutCard
            title="High-Intensity Core & HIIT"
            focus="Explosive Power & Endurance"
            duration="45 Min"
            level="Advanced"
            bgImage="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80"
          />
          <WorkoutCard
            title="Morning Yoga Flow"
            focus="Flexibility & Balance"
            duration="30 Min"
            level="Beginner"
            bgImage="https://images.unsplash.com/photo-1554284126-aa88f22dff7b?w=600&q=80"
          />
        </div>
      </div>

      {/* Edit Profile Form (conditional) */}
      {editMode && (
        <div className="bg-[#1e1e2e] p-4 rounded-2xl border border-white/5">
          <h4 className="text-white font-semibold mb-3 text-sm">Edit Profile</h4>
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