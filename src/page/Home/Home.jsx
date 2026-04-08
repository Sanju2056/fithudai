import { useEffect, useState } from "react";
import ProfilePic from "../../assets/sanju.jpg";
import { Link } from "react-router";
import QuoteBox from "../QuoteBox";
import { LoginImage } from "../../assets";
import Capture from "../Capture/Capture";
import Avatar from "../Avatar";


const StatCard = ({ icon, label, value, change, changeColor }) => (
  <div className="bg-gray-50 rounded-2xl p-4 shadow-sm border  flex flex-col ">
    <div className="flex items-center justify-between">
      <span className="text-xl">{icon}</span>
      <span className={`text-sm font-semibold ${changeColor}`}>{change}</span>
    </div>
    <p className="text-xs text-gray-400 mt-1">{label}</p>
    <p className="text-2xl font-bold text-gray-900 tracking-tight">{value}</p>
  </div>
);

const WorkoutCard = () => (
  <div className="relative rounded-2xl overflow-hidden h-44 bg-gray-900 shadow-lg">
    <div
      className="absolute inset-0 bg-cover bg-center opacity-50"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80')",
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
    <div className="relative p-4 flex flex-col justify-between h-full">
      <div className="flex gap-2">
        <span className="bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
          Advanced
        </span>
        <span className="bg-white/20 text-white text-xs font-semibold px-2 py-0.5 rounded-full backdrop-blur-sm">
          45 Min
        </span>
      </div>
      <div>
        <h3 className="text-white font-extrabold text-xl leading-tight mb-0.5">
          High-Intensity Core & HIIT
        </h3>
        <p className="text-gray-300 text-xs mb-3">
          Focus: Explosive Power & Endurance
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all text-white text-sm font-semibold px-5 py-2 rounded-full shadow-md">
          Start Session
        </button>
      </div>
    </div>
  </div>
);

const MindfulnessCard = () => (
  <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="w-11 h-11 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 text-xl">
        🧘
      </div>
      <div>
        <p className="font-semibold text-gray-900 text-sm">Box Breathing</p>
        <p className="text-xs text-gray-400">Reduce stress in 2 minutes</p>
      </div>
    </div>
    <button className="w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center shadow hover:bg-gray-700 active:scale-95 transition-all">
      <svg
        className="w-4 h-4 text-white ml-0.5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </button>
  </div>
);

const InsightCard = ({ emoji, title, body, accent }) => (
  <div className={`rounded-2xl p-4 border ${accent} bg-white shadow-sm`}>
    <div className="flex items-start gap-3">
      <span className="text-2xl">{emoji}</span>
      <div>
        <p className="font-semibold text-gray-900 text-sm">{title}</p>
        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{body}</p>
      </div>
    </div>
  </div>
);

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");
  const [userName, setUserName] = useState("");

 useEffect(() => {
    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData && userData.nickname) {
      setUserName(userData.nickname); // First letter of email
    }
  }, []);

  return (
    <div className="min-h-screen  flex justify-center items-start px-2  py-8">
      <div className="w-full  font-sans space-y-4">
        {/* Status bar */}

        {/* Header */}
        <div className="bg-white px-5 pb-4 flex items-start justify-between border-b border-gray-100">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-blue-600 font-extrabold text-2xl tracking-tight">
                FitHudai
              </span>
              <span className="text-gray-800 font-semibold text-base ml-1">
                Hello, {userName}
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-0.5 leading-snug">
              Ramro snga afno workout track garnu hola <br />
              ani strong hudai janu la.
            </p>
          </div>
          <Avatar />
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto max-h-[680px] px-4 space-y-5">
          {/* Stats grid */}
          <Capture/>
      
         
          <div className="grid grid-cols-2 gap-2">
            <StatCard
              icon="👟"
              label="Steps Today"
              value="8,432"
              change="+12%"
              changeColor="text-emerald-500"
            />
            <StatCard
              icon="🔥"
              label="Calories"
              value="1,240"
              change="+5%"
              changeColor="text-emerald-500"
            />
          </div>
          <div className="grid grid-cols-1">
            <StatCard
              icon="⏱️"
              label="Active Minutes"
              value="45/60"
              change="-2%"
              changeColor="text-red-400"
            />
          </div>
 <QuoteBox/>
          {/* Suggested Workout */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-bold text-gray-900">
                Suggested Workout Plan
              </h2>
              <button className="text-xs text-blue-600 font-semibold">
                View All
              </button>
            </div>
            <WorkoutCard />
          </div>

          {/* Mindfulness */}
          <div>
            <h2 className="text-sm font-bold text-gray-900 mb-3">
              Mindfulness Minute
            </h2>
            <MindfulnessCard />
          </div>

          {/* AI Coach Insights */}
          <div>
            <h2 className="text-sm font-bold text-gray-900 mb-3">
              AI Coach Insights
            </h2>
            <div className="space-y-3">
              <InsightCard
                emoji="💡"
                title="Recovery Tip"
                body="Your sleep was below 7h last night. Consider a lighter session today and aim for 8h tonight."
                accent="border-amber-200"
              />
              <InsightCard
                emoji="📈"
                title="Weekly Progress"
                body="You've hit your step goal 5 out of 7 days this week. Keep it up — you're 18% above last week!"
                accent="border-blue-200"
              />
              <InsightCard
                emoji="🥗"
                title="Nutrition Nudge"
                body="You're 260 calories under target today. Add a protein-rich snack before your HIIT session."
                accent="border-emerald-200"
              />
            </div>
          </div>
        </div>

        {/* Bottom nav */}
        {/* <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around py-3 px-2">
          {[
            { id: "home", icon: "🏠", label: "Home", link: '/home' },
            { id: "workouts", icon: "🏋️", label: "Workouts", link: '/workouts' },
            { id: "stats", icon: "📊", label: "Stats", link: '/stats' },
            { id: "profile", icon: "👤", label: "Profile", link: '/profile' },
          ].map((tab) => (
            <Link
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              to={tab.link}
              className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-all ${
                activeTab === tab.id ? "text-blue-600" : "text-gray-400"
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              <span className="text-xs font-medium">{tab.label}</span>
              {activeTab === tab.id && (
                <span className="w-1 h-1 rounded-full bg-blue-600" />
              )}
            </Link>
          ))}
        </div> */}
      </div>
    </div>
  );
}

//Dark theme 
// import { useState } from "react";
// import ProfilePic from "../../assets/sanju.jpg";

// const Avatar = () => (
//   <div className="size-16 rounded-full overflow-hidden  ring-2 ring-blue-500/40">
//     <img src={ProfilePic} alt="Sanju" />
//   </div>
// );

// const StatCard = ({ icon, label, value, change, changeColor }) => (
//   <div className="bg-[#1e1e2e] rounded-2xl p-4 border border-white/5 flex flex-col">
//     <div className="flex items-center justify-between">
//       <span className="text-xl">{icon}</span>
//       <span className={`text-sm font-semibold ${changeColor}`}>{change}</span>
//     </div>
//     <p className="text-xs text-gray-500 mt-1">{label}</p>
//     <p className="text-2xl font-bold text-white tracking-tight">{value}</p>
//   </div>
// );

// const WorkoutCard = () => (
//   <div className="relative rounded-2xl overflow-hidden h-44 bg-gray-900 shadow-lg">
//     <div
//       className="absolute inset-0 bg-cover bg-center opacity-40"
//       style={{
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80')",
//       }}
//     />
//     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
//     <div className="relative p-4 flex flex-col justify-between h-full">
//       <div className="flex gap-2">
//         <span className="bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
//           Advanced
//         </span>
//         <span className="bg-white/10 text-white text-xs font-semibold px-2 py-0.5 rounded-full backdrop-blur-sm border border-white/10">
//           45 Min
//         </span>
//       </div>
//       <div>
//         <h3 className="text-white font-extrabold text-xl leading-tight mb-0.5">
//           High-Intensity Core & HIIT
//         </h3>
//         <p className="text-gray-400 text-xs mb-3">
//           Focus: Explosive Power & Endurance
//         </p>
//         <button className="bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all text-white text-sm font-semibold px-5 py-2 rounded-full shadow-md">
//           Start Session
//         </button>
//       </div>
//     </div>
//   </div>
// );

// const MindfulnessCard = () => (
//   <div className="bg-[#1e1e2e] rounded-2xl p-4 border border-white/5 flex items-center justify-between">
//     <div className="flex items-center gap-3">
//       <div className="w-11 h-11 rounded-xl bg-indigo-500/20 flex items-center justify-center text-xl">
//         🧘
//       </div>
//       <div>
//         <p className="font-semibold text-white text-sm">Box Breathing</p>
//         <p className="text-xs text-gray-500">Reduce stress in 2 minutes</p>
//       </div>
//     </div>
//     <button className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center shadow hover:bg-blue-500 active:scale-95 transition-all">
//       <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M8 5v14l11-7z" />
//       </svg>
//     </button>
//   </div>
// );

// const InsightCard = ({ emoji, title, body, borderColor }) => (
//   <div className={`rounded-2xl p-4 border ${borderColor} bg-[#1e1e2e]`}>
//     <div className="flex items-start gap-3">
//       <span className="text-2xl">{emoji}</span>
//       <div>
//         <p className="font-semibold text-white text-sm">{title}</p>
//         <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{body}</p>
//       </div>
//     </div>
//   </div>
// );

// export default function Home() {
//   const [activeTab, setActiveTab] = useState("home");

//   return (
//     <div className="min-h-screen bg-[#12121c] flex justify-center items-start px-2 py-8">
//       <div className="w-full font-sans space-y-4">

//         <div className="px-5 pb-4 flex items-start justify-between border-b border-white/5">
//           <div>
//             <div className="flex items-center gap-1.5">
//               <span className="text-blue-400 font-extrabold text-2xl tracking-tight">
//                 FitHudai
//               </span>
//               <span className="text-gray-200 font-semibold text-base ml-1">
//                 Hello, Sanju
//               </span>
//             </div>
//             <p className="text-xs text-gray-600 mt-0.5 leading-snug">
//               Ramro snga afno workout track garnu hola <br />
//               ani strong hudai janu la.
//             </p>
//           </div>
//           <Avatar />
//         </div>

//         <div className="overflow-y-auto max-h-screen px-4 space-y-5">

//           <div className="grid grid-cols-2 gap-2">
//             <StatCard icon="👟" label="Steps Today" value="8,432" change="+12%" changeColor="text-emerald-400" />
//             <StatCard icon="🔥" label="Calories" value="1,240" change="+5%" changeColor="text-emerald-400" />
//           </div>
//           <StatCard icon="⏱️" label="Active Minutes" value="45/60" change="-2%" changeColor="text-red-400" />

//           <div>
//             <div className="flex items-center justify-between mb-3">
//               <h2 className="text-sm font-bold text-gray-200">Suggested Workout Plan</h2>
//               <button className="text-xs text-blue-400 font-semibold">View All</button>
//             </div>
//             <WorkoutCard />
//           </div>

//           <div>
//             <h2 className="text-sm font-bold text-gray-200 mb-3">Mindfulness Minute</h2>
//             <MindfulnessCard />
//           </div>

//           <div className="pb-24">
//             <h2 className="text-sm font-bold text-gray-200 mb-3">AI Coach Insights</h2>
//             <div className="space-y-3">
//               <InsightCard
//                 emoji="💡"
//                 title="Recovery Tip"
//                 body="Your sleep was below 7h last night. Consider a lighter session today and aim for 8h tonight."
//                 borderColor="border-amber-500/20"
//               />
//               <InsightCard
//                 emoji="📈"
//                 title="Weekly Progress"
//                 body="You've hit your step goal 5 out of 7 days this week. Keep it up — you're 18% above last week!"
//                 borderColor="border-blue-500/20"
//               />
//               <InsightCard
//                 emoji="🥗"
//                 title="Nutrition Nudge"
//                 body="You're 260 calories under target today. Add a protein-rich snack before your HIIT session."
//                 borderColor="border-emerald-500/20"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="fixed bottom-0 left-0 right-0 bg-[#1a1a27] border-t border-white/5 flex justify-around py-3 px-2">
//           {[
//             { id: "home", icon: "🏠", label: "Home" },
//             { id: "workouts", icon: "🏋️", label: "Workouts" },
//             { id: "stats", icon: "📊", label: "Stats" },
//             { id: "profile", icon: "👤", label: "Profile" },
//           ].map((tab) => (
//             <button
//               key={tab.id}
//               onClick={() => setActiveTab(tab.id)}
//               className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-all ${
//                 activeTab === tab.id ? "text-blue-400" : "text-gray-600"
//               }`}
//             >
//               <span className="text-lg">{tab.icon}</span>
//               <span className="text-xs font-medium">{tab.label}</span>
//               {activeTab === tab.id && (
//                 <span className="w-1 h-1 rounded-full bg-blue-400" />
//               )}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }