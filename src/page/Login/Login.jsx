import { use, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const { register, handleSubmit ,watch} = useForm();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const email = watch("email");
  const password = watch("password");
  const onSubmit = (data) => {
    if (userEmail === data.email && userPassword === data.password) {
      localStorage.setItem("isLoggedIn", true);
      navigate("/home");
    } else {
      alert("Invalid email or password.please try again");
    }
  };
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      setUserEmail(userData.email);
      setUserPassword(userData.password);
    }
    console.log(userData);
  }, []);
  useEffect(() => {
    console.log("State updated:", userEmail, userPassword);
  }, [userEmail, userPassword]);
  return (
    <div className="h-screen flex w-full items-center justify-center py-6 md:py-20   font-sans">
      <div className="flex flex-col w-full items-center   rounded-lg overflow-hidden  p-6 md:p-0  ">
        <div className="flex items-center gap-2 mb-6 justify-center">
          <div className="size-8 bg-black rounded-full flex items-center justify-center">
            <svg viewBox="0 0 20 20" className="size-6 fill-white">
              <path d="M10 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm0 4c-3 0-6 1.5-6 4v1h2v-1c0-1.1 1.8-2 4-2s4 .9 4 2v1h2v-1c0-2.5-3-4-6-4zm-4 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
            </svg>
          </div>
          <span className="font-semibold text-gray-900 text-2xl">FitHudai</span>
        </div>
        <div className="flex-1 w-full md:p-8  flex flex-col ">
          <h1 className="text-2xl font-bold text-gray-900 mb-1 text-center  ">
            Login to your account
          </h1>
          <p className="text-sm text-gray-500 mb-6 text-center">
            Welcome back! Enter your details to log in to your account.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="text-xs font-medium text-gray-700 mb-2 block">
                Email
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-300 "
              />
            </div>

            <div className="mb-4 relative">
              <label className="text-xs font-medium text-gray-700 mb-2 block">
                Password
              </label>
              <input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-300 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 bottom-0 transform -translate-y-1/2 text-gray-400 text-sm"
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>

            <div className="flex justify-between items-center mb-5 text-xs">
              <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                  className="w-3 h-3 "
                />
                Remember login
              </label>
              <a className=" font-medium hover:underline">Forgot Password?</a>
            </div>
            <button
              className={`w-full py-3 mb-4 flex justify-center items-center text-white rounded-lg font-semibold text-sm active:scale-95 transition
    ${!email || !password ? "bg-gray-400 cursor-not-allowed" : "bg-[#0f0f0f]"}`}
              type="submit"
              disabled={!email || !password} // disables button if email or password is empty
            >
              Login
            </button>
          </form>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-xs text-gray-400 whitespace-nowrap">
              Or continue with
            </span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          <button className="w-full  py-2 mb-3 bg-gray-100 text-gray-800 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-200 transition">
            <svg width="15" height="15" viewBox="0 0 814 1000" fill="#111">
              <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105.8-57.4-155.5-127.4C46 790.8 0 663 0 541.8c0-207 135.4-316.8 268.1-316.8 68.7 0 126 45.1 169.4 45.1 41.8 0 107.6-47.5 183-47.5z" />
            </svg>
            <p className="text-sm pt-1 ">Sign in with Apple</p>
          </button>

          <button className="w-full py-2 bg-gray-100 text-gray-800 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-200 transition">
            <svg width="15" height="15" viewBox="0 0 533.5 544.3">
              <path
                d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                fill="#4285f4"
              />
              <path
                d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                fill="#34a853"
              />
              <path
                d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                fill="#fbbc04"
              />
              <path
                d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                fill="#ea4335"
              />
            </svg>
            <p className="text-sm pt-1 ">Sign in with Google</p>
          </button>

          <p className="text-center text-sm text-gray-400 mt-5">
            New here?{" "}
            <Link
              to="/"
              className="text-gray-900 font-semibold hover:underline cursor-pointer"
            >
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
