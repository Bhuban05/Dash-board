import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Details = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (state) {
    return (
      <div className="text-center mt-10 text-red-500 font-semibold">
        No data found. Please go back and fill the form.
        <button 
          onClick={() => navigate(-1)} 
          className="ml-4 bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
        >
          Go Back
        </button>
      </div>
    );
  }

  const { name, board, description, faculty } = state;

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-xl rounded-lg">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Details</h2>
      <div className="space-y-3">
        <div>
          <span className="font-semibold text-gray-700">Name:</span> {name}
        </div>
        <div>
          <span className="font-semibold text-gray-700">Board:</span> {board}
        </div>
        <div>
          <span className="font-semibold text-gray-700">Faculty:</span> {faculty}
        </div>
        <div>
          <span className="font-semibold text-gray-700">Description:</span>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      <button 
        onClick={() => navigate(-1)} 
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Back
      </button>
    </div>
  );
};

export default Details;