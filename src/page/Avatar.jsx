import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Avatar = () => {
  const [initial, setInitial] = useState("");

  useEffect(() => {
    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData && userData.email) {
      setInitial(userData.nickname[0].toUpperCase()); // First letter of email
    }
  }, []);

  return (
    <Link
      to="/profile"
      className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center text-lg font-bold"
    >
      {initial || "U"} {/* Fallback to 'U' if no user */}
    </Link>
  );
};

export default Avatar;