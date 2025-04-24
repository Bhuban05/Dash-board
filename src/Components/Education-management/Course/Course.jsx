import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import axiosInstance from "../../Intercepter/axiosInstance";
import { Editor } from "@tinymce/tinymce-react";
import Select from "react-select";

const Course = () => {
  const navigate = useNavigate();
  const editorRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    level: "",
    duration: "",
    discipline: [],
    board: "",
    image: null,
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [previewURL, setPreviewURL] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [educationLevels, setEducationLevels] = useState([]);
  const [disciplines, setDisciplines] = useState([]);
  const [board, setBoardType] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      const validTypes = ["image/jpeg", "image/png", "image/gif"];

      if (!validTypes.includes(uploadedFile.type)) {
        setErrors((prev) => ({
          ...prev,
          image: "Please upload a valid image",
        }));
        return;
      }

      if (uploadedFile.size > 2 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          image: "",
        }));
        return;
      }

      setFormData((prev) => ({
        ...prev,
        image: uploadedFile,
      }));
      setPreviewURL(URL.createObjectURL(uploadedFile));

      if (errors.image) {
        setErrors((prev) => ({
          ...prev,
          image: null,
        }));
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Course name is required";
    }
    if (!formData.discipline) {
      newErrors.discipline = "Discipline is required";
    }

    if (!formData.educationLevels) {
      newErrors.educationLevels = "Level is required";
    }

    if (!formData.duration) {
      newErrors.duration = "Duration is required";
    } else if (!/^\d+$/.test(formData.duration)) {
      newErrors.duration = "Duration must be a number";
    }

    if (!formData.level) {
      newErrors.level = "Level is required";
    }
    

    if (!formData.board) {
      newErrors.board = "Board Type is required";
    }

    if (!formData.image) {
      newErrors.image = "Course image is required";
    }

    if (!isChecked) {
      newErrors.terms = "You must accept the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!validateForm()) {
    //   toast.error("Please fix the errors in the form");
    //   return;
    // }

    try {
      setLoading(true);

      const description = editorRef.current
        ? editorRef.current.getContent()
        : formData.description;

      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("level", formData.level);
      formDataToSend.append("duration", formData.duration);
      formDataToSend.append("discipline", formData.discipline);
      formDataToSend.append("board", formData.board);
      formDataToSend.append("description", description);
      formDataToSend.append("image", formData.image);

      const response = await axiosInstance.post("/course", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.message) {
       

        toast.success("Course created successfully!");
        navigate("/course-list");
      } else {
        throw new Error(response.data.message || "Failed to create course");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || err.message || "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchEducationData = async () => {
      try {
        setLoading(true);

        const disciplinesResponse = await axiosInstance.get(
          "/course/disciplines"
        );

        if (disciplinesResponse.data.status) {
          setDisciplines(disciplinesResponse.data.data);
        } else {
          setDisciplines([]);
        }

        const levelsResponse = await axiosInstance.get("/college/level");
        if (levelsResponse.data.status) {
          setEducationLevels(levelsResponse.data.data);
        } else {
          setEducationLevels([]);
        }

        const boardResponse = await axiosInstance.get("/board");
        const boardData = boardResponse.data?.data?.content;
        
        if (boardResponse.data.status && Array.isArray(boardData)) {
          setBoardType(boardData);
        } else {
          setBoardType([]);
        }
      } catch (err) {
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEducationData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <motion.div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-700 to-blue-600 px-6 py-5">
            <h2 className="text-2xl font-bold text-white text-center">
              Create New Course
            </h2>
            <p className="text-indigo-100 mt-1 text-center">
              Fill in the course details below
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Course Name <span className="text-blue-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter course name"
                  className={`w-full px-4 py-2.5 rounded-lg border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200`}
                />
                {errors.name && (
                  <p name="mt-1 text-sm text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
  <label className="block text-sm font-medium text-gray-700 mb-1">
    Discipline <span className="text-blue-500">*</span>
  </label>
  <Select
    isMulti
    options={disciplines.map((d) => ({ value: d, label: d }))}
    value={formData.discipline.map((d) => ({
      value: d,
      label: d,
    }))}
    onChange={(selected) =>
      setFormData((prev) => ({
        ...prev,
        discipline: selected ? selected.map((option) => option.value) : [],
      }))
    }
    className={`basic-multi-select ${
      errors.discipline ? "border-red-500 rounded-lg" : ""
    }`}
    classNamePrefix="select"
    placeholder="Select disciplines..."
    closeMenuOnSelect={false}
    isSearchable
    noOptionsMessage={() => "No disciplines found"}
    styles={{
      control: (base) => ({
        ...base,
        minHeight: '44px',
        borderColor: errors.discipline ? '#ef4444' : '#d1d5db',
        '&:hover': {
          borderColor: errors.discipline ? '#ef4444' : '#9ca3af'
        },
        boxShadow: 'none'
      }),
      menu: (base) => ({
        ...base,
        zIndex: 9999
      })
    }}
  />
  {errors.discipline && (
    <p className="mt-1 text-sm text-red-600">{errors.discipline}</p>
  )}
</div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  levels <span className="text-blue-500">*</span>
                </label>
                
<select
  name="level"
  value={formData.level}  
  onChange={handleChange}
  className={`w-full px-4 py-2.5 rounded-lg border ${
    errors.level ? "border-red-500" : "border-gray-300"  
  } focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200`}
>
  <option value="">Select Levels</option>
  {Array.isArray(educationLevels) &&
    educationLevels.map((level, index) => (
      <option key={index} value={level}>
        {level}
      </option>
    ))}
</select>
{errors.level && ( 
  <p className="mt-1 text-sm text-red-600">
    {errors.level}
  </p>
)}
                
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Duration (years) <span className="text-blue-500">*</span>
                </label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  placeholder="e.g. 4"
                  className={`w-full px-4 py-2.5 rounded-lg border ${
                    errors.duration ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200`}
                />
                {errors.duration && (
                  <p className="mt-1 text-sm text-red-600">{errors.duration}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Board  <span className="text-blue-500">*</span>
                </label>
                <select
                  name="board"
                  value={formData.board}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 rounded-lg border ${
                    errors.board ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200`}
                >
                  <option value="">Select board </option>
                  {board.map((board, index) => (
                    <option key={index} value={board.id}>
                      {board.name}
                    </option>
                  ))}
                </select>
                {errors.board && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.board}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Course Image <span className="text-blue-500">*</span>
                </label>
                <div className="flex items-center space-x-4">
                  <label className="flex flex-col items-center justify-center w-full px-4 py-6 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition duration-200 border-gray-300">
                    <div className="flex flex-col items-center justify-center">
                      <p className="text-sm text-gray-500 mt-2">
                        <span className="font-semibold">Choose image</span> or
                        drag & drop
                      </p>
                    </div>
                    <input
                      type="file"
                      name="image"
                      onChange={handleFileUpload}
                      className=""
                      accept="image/*"
                    />
                  </label>
                  {previewURL && (
                    <img src={previewURL} alt="Preview" className="hidden" />
                  )}
                </div>
                {errors.image && (
                  <p className="mt-1 text-sm text-red-600">{errors.image}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description <span className="text-blue-500">*</span>
              </label>
              <Editor
                apiKey="elpppmbrzh3hm7yumypsfxh90ycma8r9bov4194yg0gn6djg"
                value={formData.description}
                onEditorChange={(newValue) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: newValue,
                  }))
                }
                init={{
                  height: 300,
                  menubar: false,
                  plugins: [
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table contextmenu paste code help wordcount",
                  ],
                  toolbar:
                    "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                }}
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.description}
                </p>
              )}
            </div>

            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                  className="form-checkbox h-4 w-4 text-indigo-600 transition duration-200"
                />
                <span className="ml-2 text-sm text-gray-700">
                  I accept the terms and conditions
                </span>
              </label>
              {errors.terms && (
                <p className="mt-1 text-sm text-red-600">{errors.terms}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-blue-800 w-full p-2 rounded hover:bg-blue-700 cursor-pointer text-white"
              onClick={handleSubmit}
            >
              {loading ? "Creating..." : "Create Course"}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Course;
