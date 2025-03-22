import Table from "./Table";
const ProductTable = () => {
  const columns = ["Product", "Price", "Stock"];
  const data = [
    { Product: "Laptop", Price: "$1000", Stock: "Available" },
    { Product: "Phone", Price: "$500", Stock: "Out of Stock" },
  ];

=========
import Datas from "../Data/Datas.json"
import Table from "./Table";

 const ProductTable = () => {
//   // const columns = ["Product", "Price", "Stock"];
//   // const data = [
//   //   { Product: "Laptop", Price: "$1000", Stock: "Available" },
//   //   { Product: "Phone", Price: "$500", Stock: "Out of Stock" },
//   // ];

>>>>>>>>> Temporary merge branch 2
  return (
    
    <div>
      <h2>Product Table</h2>
<<<<<<<<< Temporary merge branch 1
      <Table data={data} />
    </div>
  );
};
export default ProductTable;