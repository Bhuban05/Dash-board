import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../Intercepter/axiosInstance";

const CourseList = () => {
  const [allSubCourses, setAllSubCourses] = useState([]);
  const [page, setPage] = useState(0);
  const pageSize = 4;

  const fetchCourses = async () => {
    try {
      const res = await axiosInstance.get(`/course`);
      const courses = res.data.data.content || [];
      const subCourses = courses.flatMap(course => course.courseResponses || []);
      setAllSubCourses(subCourses);
    } catch (err) {
      console.error("Error fetching courses:", err);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const totalPages = Math.ceil(allSubCourses.length / pageSize);
  const paginatedCourses = allSubCourses.slice(page * pageSize, (page + 1) * pageSize);

  const handlePrevious = () => {
    if (page > 0) setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (page < totalPages - 1) setPage((prev) => prev + 1);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Available Courses</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {paginatedCourses.map((subCourse) => (
          <div
            key={subCourse.id}
            className="bg-gray-200 hover:bg-gray-300 rounded-xl p-4 shadow-md flex flex-col transition-all duration-300"
          >
            <img
              src={subCourse.image}
              alt={subCourse.name}
              className="w-full h-40 object-cover rounded mb-3"
            />
            <h2 className="text-lg font-semibold text-center">{subCourse.name}</h2>
            <p className="text-sm text-gray-500 text-center">{subCourse.level}</p>
            <p
              className="text-sm mt-2 text-center"
              dangerouslySetInnerHTML={{ __html: subCourse.description }}
            />
            <p className="text-sm text-center mt-2">Duration: {subCourse.duration} weeks</p>
            <div className="mt-4 text-center">
              <Link
                to={`/details/${subCourse.id}`}
                className="text-blue-600 hover:text-blue-800 underline"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={handlePrevious}
          disabled={page === 0}
          className={`px-4 py-2 rounded ${
            page === 0
              ? "bg-blue-600 text-white cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={page === totalPages - 1}
          className={`px-4 py-2 rounded ${
            page === totalPages - 1
              ? "bg-blue-600 text-white cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CourseList;
