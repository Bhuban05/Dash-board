import "./Table.css"

const Table = ({ columns, data }) => {
  return (
    <div id="table">
      <label className="w-full items-end">Search 
      <input type="text" className="border-2 rounded-md" /></label>
    <table border="1">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((col) => (
              <td key={col}>{row[col]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Table;