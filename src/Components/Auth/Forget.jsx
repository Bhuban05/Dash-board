import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; 
import { toast } from "react-toastify";
import forget from "../Auth/forget.png";

function Forget() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleClick = async () => {
    try {
      
      const response = await axios.post(
        `http://192.168.0.101:8282/api/v1/auth/forgot-password?email=${email}`
      );
      
      console.log("Response:", response.data);

     
      toast.success("Reset password link sent to your email!");

     
      navigate("/reset-password");
    } catch (error) {
      
      toast.error("Failed to send reset password request. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <section className="h-screen flex items-center justify-center w-full">
      <div className="h-130 container px-6 py-12 w-full max-w-4xl bg-white rounded-lg flex flex-wrap">
        <div className="hidden lg:block w-1/2 rounded-2xl bg-white">
          <img src={forget} className="rounded-2xl w-full" alt="Forgot Password" />
        </div>

        <div className="w-full h-full lg:w-1/2 px-6 py-0">
          <h2 className="text-2xl font-semibold text-center mt-10 mb-6">
            Forgot your password?
          </h2>
          <p className="text-sm md:text-base">
            Enter your email address to reset your password.
          </p>

          <div className="relative mb-4 mt-10">
            <label htmlFor="email" className="text-gray-600">
              Email
            </label>
            <div className="relative">
              <input
                type="email" 
                id="email"
                className="w-full p-2 border border-gray-300 rounded mt-1 pr-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            onClick={handleClick}
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Reset Password
          </button>

          <p className="text-center mt-4">
            <Link to="/login" className="text-blue-500">
              Back to login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Forget;