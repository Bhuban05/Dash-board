import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import forget from "../Auth/forget.png";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const Click = () => {
    navigate('/otp');
  };

  return (
    <section className=" h-screen  flex items-center justify-center w-full ">
      <div className="  h-130  container px-6 py-12 w-full max-w-4xl bg-white rounded-lg flex flex-wrap">
        <div className="hidden lg:block w-1/2 rounded-2xl bg-white  ">
          <img src={forget} className=" rounded-2xl w-full" />
        </div>
        <div className="w-full h-full lg:w-1/2 px-6 py-0 ">
          <h2 className="text-2xl font-semibold text-center mt-10  mb-6">Forget your password?</h2>
          <p className="text-sm md:text-base ">
            Enter your email address to reset your password.
            </p>

        <div className="relative mb-4 mt-10">
              <label htmlFor="password" className="text-gray-600">
              Email
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full p-2 border border-gray-300 rounded mt-1 pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                
                  type="button"
                  className="absolute right-3 top-3"
                  onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </button>
              </div>
            </div>
    <button onClick={Click}
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
            Reset Password
            </button>

          
            <p className="text-center mt-4">
              <Link to="/login" className="text-blue-500">
              Back to login
              </Link>
            </p>
          {/* </form> */}
        </div>
      </div>
    </section>
  );
}

export default Login;
