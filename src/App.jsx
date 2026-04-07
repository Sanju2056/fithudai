import LoginPage from "./page/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./page/SIgnup/Signup";
import Home from "./page/Home/Home";
import BottomTabs from "./page/BottomTabs";
import Profile from "./page/Profile/Profile";

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}  />
          <Route path="/signup" element={<SignUpPage />}  />
          <Route path="/home" element={<Home />}  />
          <Route path="/profile" element={<Profile />}  />
        </Routes>
        <BottomTabs />
      </BrowserRouter>
    </div>
  );
};

export default App;
