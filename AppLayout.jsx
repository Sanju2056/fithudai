import { Outlet } from "react-router-dom";
import BottomTabs from "./src/page/BottomTabs";

const AppLayout = () => {
  return (
    <div className="pb-16"> {/* space for tab bar */}
      <Outlet />
      <BottomTabs/>
    </div>
  );
};

export default AppLayout;