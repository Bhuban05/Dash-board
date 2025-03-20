import Table from "./Table";
import Datas from "../Data/Datas.json"

const ProductTable = () => {
  const columns = ["Product", "Price", "Stock"];
  const data = [
    { Product: "Laptop", Price: "$1000", Stock: "Available" },
    { Product: "Phone", Price: "$500", Stock: "Out of Stock" },
  ];

  return (
    
    <div>
      <h2>Product Table</h2>
      <Table columns={columns} data={data} />
    </div>
  );
};
export default ProductTable;