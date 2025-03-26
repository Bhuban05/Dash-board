import { useState } from "react";
// import axiosInstance from "../../utils/axiosInstance";  // Import Axios instance
import Navbar from "../../Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../Intercepter/axiosInstance";
import { Navigate, useNavigate } from "react-router-dom";


function AddBoard() {
  const [boardName, setBoardName] = useState("");
  const [description, setDescription] = useState("");
  const [boardType, setBoardType] = useState("NEPAL");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = { 
      name: boardName,
      description: description,
      boardType: boardType,
    };

    try {
        const response = await axiosInstance.post("/board", requestData);

      if (response.status === 200) {
       
        navigate("/")
        toast.success("successfully!");
      } else {
        toast.error("failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to create board.");
    };

    const resquestData = {
      FOREIGN: FOREIGN,

    }
  //   try {
  //     const response  =  await axiosInstance .get("/types") 
      
  //   } catch (error) {
  //     console.log("Error:", error);
  //     toast.error("failed to create  board.")
  //     }

  };

return (
    <section className="h-screen flex items-center justify-center mt-10">
      <div className="h-120 container px-6 py-2 w-130 max-w-4xl rounded-lg flex flex-wrap border-gray-500 shadow-2xl">
        <div>
          <h4 className="font-bold px-30 text-blue-600 text-center flex text-2xl">
            Create New Board
          </h4>

          <input
            type="text"
            placeholder="Board Name"
            value={boardName}
            onChange={(e) => setBoardName(e.target.value)}
            className="block mt-5 px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300"
          />

          <textarea
            maxLength="350"
            rows="6"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-2.5 w-full text-sm mt-6 rounded-lg border border-gray-300"
            placeholder="Description..."
          ></textarea>

          <p className="mt-5 font-semibold text-2xl text-gray-700">Board Type</p>

          <label className="flex items-center space-x-2 cursor-pointer mt-3">
            <input
              type="radio"
              name="board"
              checked={boardType === "NEPAL"}
              onChange={() => setBoardType("NEPAL")}
              className="hidden peer"
            />
            <div className="w-4 h-4 border border-gray-400 rounded-full peer-checked:border-blue-500 peer-checked:bg-blue-500"></div>
            <span className="text-gray-700">NEPAL</span>
          </label>

          <label className="flex items-center space-x-2 cursor-pointer mt-1">
            <input
              type="radio"
              name="board"
              checked={boardType === "FOREIGN"}
              onChange={() => setBoardType("FOREIGN")}
              className="hidden peer"
            />
            <div className="w-4 h-4 border border-gray-400 rounded-full peer-checked:border-blue-500 peer-checked:bg-blue-500"></div>
            <span className="text-gray-700">FOREIGN</span>
          </label>

          <button
            onClick={handleSubmit}
            className="border-2 bg-blue-700 text-white w-full mt-2.5 py-2 rounded-2xl cursor-pointer">
            Create
          </button>
        </div>
      </div>

      <Navbar />
      <ToastContainer />
    </section>
  ); 
}

export default AddBoard;
