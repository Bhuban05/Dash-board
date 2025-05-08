import { useState, useEffect } from "react";
import { LuChevronsUpDown } from "react-icons/lu";
import axiosInstance from "../../Intercepter/axiosInstance";
import { toast } from "react-toastify";

const CollegeManage = ({ columns = [], data = [], rowsPerPage = 5 }) => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState(null);
  const [direction, setDirection] = useState("asc");
  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("http://192.168.0.103:8282/api/v1/college/get-all");

        if (response.data.status && response.data.data.content) {
          const transformedData = response.data.data.content.map((college) => {
            const isApproved = college.approvalStatus === "APPROVED";
          
            return {
              id: college.id,
              CollegeName: college.collegeName || "N/A",
              Email: college.contactEmail || "N/A",
              Phone: college.phone || "N/A",
              Address: college.address || "N/A",
              Status: isApproved ? (
                <span className="bg-green-500 px-3 py-2 rounded-4xl text-white">Approved</span>
              ) : (
                <span className="bg-amber-500 px-3 py-2 rounded-4xl text-white">Pending</span>
              ),
              Action: !isApproved ? (
                <button
                  className="rounded py-2 px-3 bg-blue-600 text-white cursor-pointer"
                  onClick={() => handleApprove(college.id)}
                >
                  Approve
                </button>
              ) : (
                null
              ),
              originalData: college
            };
          });
          
          setApiData(transformedData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleApprove = async (collegeId) => {
    try {
      const response = await axiosInstance.put(
        `http://192.168.0.103:8282/api/v1/college/approve?collegeId=${collegeId}`
      );

      if (response.data.status) {
        setApiData((prevData) =>
          prevData.map((college) =>
            college.id === collegeId
              ? {
                  ...college,
                  Status: (
                    <span className="bg-green-500 px-3 py-2 rounded-4xl text-white">
                      Approved
                    </span>
                  ),
                  Action: null,
                }
              : college
          )
        );
        
        toast.success("College approved successfully!")
      }
    } catch (error) {
      console.error("Error approving college:", error);
    toast.message("Error approving college")
    }
  };

  if (columns.length === 0 && apiData.length > 0) {
    columns = Object.keys(apiData[0]).filter(key => key !== "id" && key !== "originalData");
  }

  const filterData = apiData.filter((college) => {
    return (
      college.CollegeName.toLowerCase().includes(search.toLowerCase()) ||
      college.Email.toLowerCase().includes(search.toLowerCase()) ||
      college.Phone.toLowerCase().includes(search.toLowerCase())
    );
  });

  const totalPages = Math.ceil(filterData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedData = filterData.slice(startIndex, startIndex + rowsPerPage);

  const handleSort = (field) => {
    let newDirection = direction === "asc" ? "desc" : "asc";
    const sortedData = [...apiData].sort((a, b) => {
      if (a[field] < b[field]) return newDirection === "asc" ? -1 : 1;
      if (a[field] > b[field]) return newDirection === "asc" ? 1 : -1;
      return 0;
    });

    setSortField(field);
    setDirection(newDirection);
    setApiData(sortedData);
  };

  return (
    <div id="container-table">
      <div id="filter">
        <label className="mr-0.5" id="filter-search">Search: </label>
        <input
          type="text"
          className="border-2 rounded-md"
          value={search}
          placeholder="Search Name or Email"
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      {loading ? (
        <p>Loading data...</p>
      ) : (
        <div id="table">
          {columns.length === 0 || apiData.length === 0 ? (
            <p className="text-red-500">No data available</p>
          ) : (
            <>
              <table border="1">
                <thead>
                  <tr>
                    {columns.map((col) => (
                      <th key={col} onClick={() => handleSort(col)} style={{ cursor: "pointer" }}>
                        {col} {sortField === col ? (
                          <span id="Table-icon"><LuChevronsUpDown /></span>
                        ) : ""}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.map((row, index) => (
                    <tr key={index}>
                      {columns.map((col) => (
                        <td id="Table-data" key={col}>{row[col] ?? "N/A"}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      )}

      <div className="pagination">
        <button
          id="pagination-btn"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          id="pagination-btn"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CollegeManage;