import { useEffect, useState } from "react";
import axios from "axios";
import "./Table.css";
import axiosInstance from "../Intercepter/axiosInstance";


const Table = ({ columns = [], rowsPerPage = 5 }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState(null);
  const [direction, setDirection] = useState("asc");
  const [loading, setLoading] = useState(true);


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const res = await axiosInstance.get("/board2");
  //       if (Array.isArray(res.data)) {
  //         setData(res.data);
  //         setFilteredData(res.data);
  //       } else {
  //         console.error("not response ", res.data);
  //       }
  //     } catch (err) {
  //       console.error("Error fetching data:", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    const lowerSearch = search.toLowerCase();
    const filtered = data.filter((item) =>
      columns.some((col) => (item[col]?.toString().toLowerCase() || "").includes(lowerSearch))
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  }, [search, data]);

  // Sorting function
  const handleSort = (field) => {
    const newDirection = sortField === field && direction === "asc" ? "desc" : "asc";
    const sortedData = [...filteredData].sort((a, b) => {
      if (a[field] < b[field]) return newDirection === "asc" ? -1 : 1;
      if (a[field] > b[field]) return newDirection === "asc" ? 1 : -1;
      return 0;
    });

    setSortField(field);
    setDirection(newDirection);
    setFilteredData(sortedData);
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <div id="container-table">
      {/* Search Input */}
      <div id="filter">
        <label id="filter-search">Search:</label>
        <input
          type="text"
          className="border-2 rounded-md"
          value={search}
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div id="table">
        {columns.length === 0 || data.length === 0 ? (
          <p className="text-red-500">No data available</p>
        ) : (
          <table border="1">
            <thead>
              <tr>
                {columns.map((col) => (
                  <th key={col} onClick={() => handleSort(col)} style={{ cursor: "pointer" }}>
                    {col} {sortField === col ? (direction === "asc" ? "🔼" : "🔽") : ""}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((row, index) => (
                <tr key={index}>
                  {columns.map((col) => (
                    <td key={col}>{row[col] ?? "N/A"}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
