import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import login from "../Auth/login.jpg";
import { useSearchParams } from "react-router-dom";
import { resetPassword } from "./API";

function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  console.log("Token:", token);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!password || !newPassword) {
      toast.error("Please fill all fields.");
      return;
    } else if (password !== newPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    try {
    const response = await resetPassword({
      otp: token,    
      newPassword: newPassword,
    });
        // body: JSON.stringify({ otp: token, newPassword }),
      

      // const data = await response.json();

      // if (!response.ok) {
      //   throw new Error(data.message || "Password reset failed. Please check your credentials.");
      // }

      toast.success("Password reset successfully!");
      navigate("/login");
    } catch (error) {
       toast.error(error.response.data.message);
    }
  };

  return (
    <section className="h-screen flex items-center justify-center">
      <div className="h-130 container px-6 py-2 w-full max-w-4xl bg-white rounded-lg flex flex-wrap">
        <div className="hidden lg:block w-1/2">
          <img src={login} className="w-full h-full bg-white shadow-blue-200" alt="Login" />
        </div>

        <div className="lg:w-1/2 px-6 bg-white">
          <h2 className="text-2xl font-semibold text-center mb-6 mt-5">
            Reset Password
          </h2>

          <div className="relative mb-4">
            <div className="relative">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block mt-15 px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <label className="bg-white absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 mx-1">
                New password
              </label>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="block mt-7 px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                placeholder=" "
                required
              />
              <label className="absolute bg-white text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 mx-1">
                Confirm New Password
              </label>

              <button
                type="button"
                className="absolute right-3 top-3"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4 mt-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              Remember me
            </label>
          </div>

          <button
            onClick={handleLogin}
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition cursor-pointer"
          >
            Reset
          </button>
        </div>
      </div>
    </section>
  );
}

export default ResetPassword;