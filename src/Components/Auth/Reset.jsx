import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import man from "../Auth/man.png";
// import AuthUser from "./AuthUser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Reset() {
  //  const { http } = AuthUser();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    return () => {
      if (previewURL) URL.revokeObjectURL(previewURL);
    };
  }, [previewURL]);

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setPreviewURL(URL.createObjectURL(uploadedFile));
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (!name || !address || !email || !file) {
      toast.error("please fillfull the all inputs");
      
      return;
    }

  const formData = new FormData();
    formData.append("collegeName", name);
    formData.append("collegeAddress", address);
    formData.append("adminEmail", email);
    formData.append("collegePAN", file);

    try {
      const response = await fetch("http://10.10.10.27:8282/api/v1/college/request", {
        body: formData,
        method: "POST",
      });
          
      const data = await response.json();

      console.log("Success:", data);
    
    
      if (!data.status) {
        toast.error(data.error?.details);
      } else {
        localStorage.setItem("email", email)
        navigate("/OTP");
      }      
    } catch (error) {
      console.error("Error submitting form:", error);
      const errorMessage = error.message || "An error occurred";
      toast.error(errorMessage);
    }
  };

  return (
    <section className="h-screen flex items-center justify-center">
      <div className="container px-6 py-2 w-full max-w-4xl flex flex-wrap bg-white rounded-2xl">
        <div className="hidden lg:block w-1/2 rounded-2xl overflow-hidden">
          <img src={man} alt="Man" className="h-full w-full" />
        </div>

        <div className="w-full lg:w-1/2 px-6">
          <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <form onSubmit={submitForm}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="College Name"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                placeholder="College Address"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                placeholder="Admin Email"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-xl font-semibold text-gray-700 mb-2">
                Upload College PAN (Image)
              </label>
              <div className="relative flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6">
                <input
                  type="file"
                  name="collegePAN"
                  accept="image/*"
                  className="sr-only"
                  id="file"
                  onChange={handleFileUpload}
                />
                <label htmlFor="file" className="cursor-pointer text-center block">
                  {previewURL ? (
                    <img
                      src={previewURL}
                      alt="Preview"
                      className="w-full h-48 object-cover rounded-md"
                    />
                  ) : (
                    <span className="block text-gray-500">
                      Drop files here or click to upload
                    </span>
                  )}
                </label>
              </div>
            </div>

            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                className="mr-2"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <p className="text-gray-600">
                I agree to the <span className="text-blue-500">terms of use</span>
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 cursor-pointer transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Reset;
