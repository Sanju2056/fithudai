import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./page/Login/Login";
import SignUpPage from "./page/SIgnup/Signup";
import Home from "./page/Home/Home";
import Profile from "./page/Profile/Profile";
import AuthLayout from "../AuthLayout";
import AppLayout from "../AppLayout";
import ProtectedRoute from "../ProtectedRoute";
import WorkoutTable from "./page/WorkoutTable/WorkoutTable";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth routes (NO bottom bar) */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<SignUpPage />} />
        </Route>

        {/* App routes (WITH bottom bar) */}
        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/activity" element={<WorkoutTable />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
