import "./Table.css"
import { useState } from "react";

const Table = ({ columns, data }) => {
  const [search,setSearch] = useState("");

  const filterData = data.filter(datas=>
    datas.Name.toLowerCase().includes(search.toLowerCase()) ||
    datas.Course.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <div id="filter">
      <label className="mr-0.5" id="filter-search">Search </label>
      <input type="text" className="border-2 rounded-md" 
      value={search}
      placeholder="Search Name or course"
      onChange={(e)=> setSearch(e.target.value)}
      />
      </div>
    <div id="table">
    <table border="1">
      <thead>
        <tr>

          {columns.map((col) => (
            <th key={col}>{col}</th>
          ))}

        </tr>
      </thead>
      <tbody>

        {filterData.map((row, index) => (
          <tr key={index}>
            {columns.map((col) => (
              <td key={col}>{row[col]}</td>
            ))}
          </tr>
        ))}

      </tbody>
    </table>
    </div>
    </div>
  );
}

export default Table;