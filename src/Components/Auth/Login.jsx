import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import log from "../Auth/login.jpg";
import { Signin } from "../Auth/API.js";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setIsChecked(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fullfill  the  fields.");
      return;
    }

    try {
      const response = await Signin(
        { email, password })
     
      const data = await response.data

      const accessToken = data?.data?.access_token;
      if (accessToken) {
        localStorage.setItem("accessToken", accessToken);
        toast.success("Login successful!");
      } else {
        throw new Error("No access token received.");
      }

      if (isChecked) {
        localStorage.setItem("rememberedEmail", email);
      } else {
        localStorage.removeItem("rememberedEmail");
      }

      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
       setError(error.response.data.message);
    }
  };

  return (
    <section className="h-screen  bg-gray-100  flex items-center justify-center">
      <div className="h-130 container px-6 py-2 w-full max-w-4xl rounded-lg flex  flex-wrap">
        <div className="hidden lg:block w-1/2">
          <img src={log} className="w-full h-full bg-white " alt="Login" />
        </div>

        <div className="lg:w-1/2 px-6 bg-white">
          <h2 className="text-2xl font-semibold text-center mb-6 mt-5">Login</h2>

          <div className="relative mb-4">
            <div className="relative">
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block mt-15 px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                placeholder=" "
              />
              <label className="bg-white absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 mx-1">
                Email
              </label>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block mt-7 px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                placeholder=" "
              />
              <label className="absolute bg-white text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 mx-1">
                Password
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
            <Link to="/forget" className="text-blue-500 hover:underline">
              Forgot password?
            </Link>
          </div>
          <button
            onClick={handleLogin}
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition cursor-pointer"
          >
            Sign in
          </button>

          <p className="text-center mt-4">
            Don’t have an account?{" "}
            <Link to="/sign-up" className="text-blue-500">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;