import Table from "./Table";

import Table from "./Table";

const ProductTable = () => {
  const ProductTable = () => {
    const columns = ["Product", "Price", "Stock"];
    const data = [
      { Product: "Laptop", Price: "$1000", Stock: "Available" },
      { Product: "Phone", Price: "$500", Stock: "Out of Stock" },
    ];
//   // const columns = ["Product", "Price", "Stock"];
//   // const data = [
//   //   { Product: "Laptop", Price: "$1000", Stock: "Available" },
//   //   { Product: "Phone", Price: "$500", Stock: "Out of Stock" },
//   // ];

  return (
    
    <div>
      <h2>Product Table</h2>
      <Table data={data} />
    </div>
  );
};
export default ProductTable;