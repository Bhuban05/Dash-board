import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../Intercepter/axiosInstance";

const CourseList = () => {
  const [allSubCourses, setAllSubCourses] = useState([]);
  const [page, setPage] = useState(0);
  const pageSize = 2;

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
    <div className="p-4  items-center">
      <h1 className="text-2xl font-bold mb-4 flex  ms-105 ">
        Available Courses
      </h1>

      <div className="flex justify-center    ">
        <div className="grid   gap-4  text-cen  justify-center ">
          {paginatedCourses.map((subCourse) => (
            <div
              key={subCourse.id}
              className="bg-gray-100  hover:bg-gray-300 rounded-xl p-4 shadow w-72 mx-auto  "
            >
              <img
                src={subCourse.image}
                alt={subCourse.name}
                className="w-full h-40 object-cover text-center items-center flex rounded"
              />
              <div className="flex justify-center mt-2">
                <h2 className="text-xl font-semibold text-center">
                  {subCourse.name}
                </h2>
              </div>
              <p className="text-sm text-gray-500 text-center">
                {subCourse.level}
              </p>
              <p
                className="text-sm mt-2 text-center"
                dangerouslySetInnerHTML={{ __html: subCourse.description }}
              />
              <p className="text-sm text-center mt-1">
                Duration: {subCourse.duration} weeks
              </p>

              <div className="flex justify-center mt-3">
                <Link to={`/details`} className="text-blue-500 hover:underline hover:text-blue-800 ">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex ms-105 mt-6">
        <div className="flex space-x-2">
          <button
            onClick={handlePrevious}
            disabled={page === 0}
            className={`px-4 py-2 rounded ${
              page === 0
                ? "bg-blue-600 text-white cursor-not-allowed"
                : "bg-blue-600 text-white"
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
                : "bg-blue-600 text-white"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
