import React, { useState, useRef } from "react";
import otpImage from "../Auth/otp.jpg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { otpcode } from "../Auth/API";  

function OTP() {
  const [otpValues, setOtpValues] = useState(Array(6).fill(""));
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    if (isNaN(value)) return; 

    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
    setOtp(newOtpValues.join("")); 

    if (value && index < 5) {
      inputRefs.current[index + 1].focus(); 
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      inputRefs.current[index - 1].focus(); 
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, 6).replace(/\D/g, "");
    const newOtpValues = pasteData.split("");
    setOtpValues(newOtpValues);
    setOtp(pasteData);
    newOtpValues.forEach((_, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = newOtpValues[index];
      }
    });
  };

  const handleLogin = async () => {
    if (otp.length !== 6) {
      toast.error("Please enter the full 6-digit OTP.");
      return;
    }

    try {
      const email = localStorage.getItem("email"); 
      const otpString = otp; 

     
      const response = await otpcode({ otp: otpString, email });

      if (response.status === 20 && response.data.status === true) {
       
        navigate("/login"); 
        toast.success("OTP verified successfully!");
      } else {
        toast.error(response.data.message || "OTP verification failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4  bg-gray-100">
      <div className="relative flex flex-col md:flex-row bg-white rounded-2xl w-full max-w-4xl overflow-hidden h-130">
        <div className="flex flex-col items-center justify-center p-6 md:p-12 w-full md:w-1/2">
          <h2 className="mb-3 text-3xl md:text-4xl font-bold text-white">Login</h2>
          <p className="text-black font-bold text-2xl text-center mb-4">VERIFICATION CODE</p>
          <p className="text-center mb-6 text-sm md:text-base text-black">
            Your super admin verification code is on its way! <br /> Check your email and get started.
          </p>
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-4">
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={otpValues[index]}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                ref={(el) => (inputRefs.current[index] = el)}
                className="w-10 h-10 md:w-14 md:h-14 text-center text-xl md:text-2xl font-extrabold text-slate-900 border-blue-400 appearance-none rounded-md p-2 md:p-4 outline-blue-700 focus:bg-white border-2"
              />
            ))}
          </div>
          <p className="text-sm text-center mb-4 text-black">
            Didn’t receive the OTP? <span className="text-blue-500 hover:underline cursor-pointer">Resend</span>
          </p>
          <button
            onClick={handleLogin}
            className="cursor-pointer rounded-xl w-full md:w-auto px-40 py-2 md:py-3 font-medium text-white bg-blue-600 transition duration-300"
          >
            Send
          </button>
          {message && <p className="mt-4 text-center text-sm text-red-500">{message}</p>}
        </div>
        <div className="hidden md:block w-1/2">
          <img src={otpImage} alt="Verification" className="w-full h-130 object-cover" />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default OTP;
