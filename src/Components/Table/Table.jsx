import "./Table.css";
import { useState } from "react";
import { LuChevronsUpDown } from "react-icons/lu";

const Table = ({ columns = [], data = [], rowsPerPage = 5 }) => {
  const [search, setSearch] = useState(""); // Filtering useState

  const [currentPage, setCurrentPage] = useState(1); // Pagination useState

  const [daata, setDaata] = useState([...data]); // Sorting useState
  const [sortField, setSortField] = useState(null);
  const [direction, setDirection] = useState("asc");

  // filtering logic
  let filterData = [];
  try {
    if (!Array.isArray(data)) throw new Error("Invalid data format. Expected an array.");

    if (!Array.isArray(columns) || columns.length === 0) {
      columns = data.length > 0 ? Object.keys(data[0]) : [];
    }

    filterData = daata.filter((datas) => {
      const name = datas?.Name?.toLowerCase() || "";
      const course = datas?.Course?.toLowerCase() || "";
      const product = datas?.Product?.toLowerCase() || "";
      return name.includes(search.toLowerCase()) || course.includes(search.toLowerCase()) || product.includes(search.toLowerCase());
    });
  } catch (error) {
    console.error("Error filtering data:", error);
    filterData = [];
  }

  // pagination logic
  const totalPages = Math.ceil(filterData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedData = filterData.slice(startIndex, startIndex + rowsPerPage);

  // sorting function
  const handleSort = (field) => {
    let newDirection = "asc";
    if (sortField === field && direction === "asc") {
      newDirection = "desc";
    }
    const sortedData = [...daata].sort((a, b) => {
      if (a[field] < b[field]) return newDirection === "asc" ? -1 : 1;
      if (a[field] > b[field]) return newDirection === "asc" ? 1 : -1;
      return 0;
    });

    setSortField(field);
    setDirection(newDirection);
    setDaata(sortedData);
  };

  return (
    <div id="container-table">
      <div id="filter">
        <label className="mr-0.5" id="filter-search">Search </label>
        <input
          type="text"
          className="border-2 rounded-md"
          value={search}
          placeholder="Search Name or Course"
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      <div id="table">
        {columns.length === 0 || data.length === 0 ? (
          <p className="text-red-500">No data available</p>
        ) : (
          <>
            <table border="1">
              <thead>
                <tr>
                  {columns.map((col) => (
                    <th key={col} onClick={() => handleSort(col)} style={{ cursor: "pointer" }}>
                      {col} {sortField === col ? (direction === "asc" ? <span id="Table-icon"><LuChevronsUpDown /></span>: <span id="Table-icon"><LuChevronsUpDown /></span>) : ""}
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

export default Table;