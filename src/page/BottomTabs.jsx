import { Home, BarChart2, Utensils, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const BottomTabs = () => {
  const baseStyle =
    "flex flex-col items-center text-xs flex-1 py-2";

  const activeStyle = "text-green-500";
  const inactiveStyle = "text-gray-400";

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around">
      
      <NavLink
        to="/home"
        className={({ isActive }) =>
          `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
        }
      >
        <Home size={20} />
        Home
      </NavLink>

      <NavLink
        to="/activity"
        className={({ isActive }) =>
          `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
        }
      >
        <BarChart2 size={20} />
        Activity
      </NavLink>

      <NavLink
        to="/meals"
        className={({ isActive }) =>
          `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
        }
      >
        <Utensils size={20} />
        Meals
      </NavLink>

      <NavLink
        to="/profile"
        className={({ isActive }) =>
          `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
        }
      >
        <User size={20} />
        Profile
      </NavLink>
    </div>
  );
};

export default BottomTabs;