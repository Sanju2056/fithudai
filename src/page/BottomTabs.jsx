import { Home, BarChart2, Utensils, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const BottomTabs = () => {
  const baseStyle =
    "flex flex-col items-center text-xs flex-1 py-4";

  const activeStyle = "text-gray-800";
  const inactiveStyle = "text-gray-400";

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around">
      
      <NavLink
        to="/home"
        className={({ isActive }) =>
          `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
        }
      >
        <Home size={24} />
        <p className="text-sm mt-1 font-semibold">

        Home
        </p>
      </NavLink>

      <NavLink
        to="/activity"
        className={({ isActive }) =>
          `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
        }
      >
        <BarChart2 size={24} />
        <p className="text-sm mt-1 font-semibold">Activity</p>
      </NavLink>

      <NavLink
        to="/meals"
        className={({ isActive }) =>
          `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
        }
      >
        <Utensils size={24} />
        <p className="text-sm mt-1 font-semibold">Meals</p>
      </NavLink>

      <NavLink
        to="/profile"
        className={({ isActive }) =>
          `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
        }
      >
        <User size={24} />
        <p className="text-sm mt-1 font-semibold">Profile</p>
      </NavLink>
    </div>
  );
};

export default BottomTabs;