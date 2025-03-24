import Table from "./Table";
const ProductTable = () => {
  const columns = ["Product", "Price", "Stock"];
  const data = [
    { Product: "Laptop", Price: "$1000", Stock: "Available" },
    { Product: "Phone", Price: "$500", Stock: "Out of Stock" },
    { Product: "Tablet", Price: "$300", Stock: "Available" },
    { Product: "Smartwatch", Price: "$200", Stock: "Available" },
    { Product: "Gaming PC", Price: "$1500", Stock: "Limited Stock" },
    { Product: "Monitor", Price: "$250", Stock: "Available" },
    { Product: "Keyboard", Price: "$50", Stock: "Available" },
    { Product: "Mouse", Price: "$40", Stock: "Out of Stock" },
    { Product: "Headphones", Price: "$80", Stock: "Available" },
    { Product: "Speaker", Price: "$120", Stock: "Available" },
    { Product: "Printer", Price: "$180", Stock: "Available" },
    { Product: "Scanner", Price: "$220", Stock: "Limited Stock" },
    { Product: "External HDD", Price: "$90", Stock: "Available" },
    { Product: "USB Flash Drive", Price: "$20", Stock: "Available" },
    { Product: "Webcam", Price: "$70", Stock: "Available" },
    { Product: "Router", Price: "$110", Stock: "Out of Stock" },
    { Product: "Modem", Price: "$130", Stock: "Available" },
    { Product: "Microphone", Price: "$60", Stock: "Available" },
    { Product: "Tripod", Price: "$45", Stock: "Available" },
    { Product: "VR Headset", Price: "$400", Stock: "Limited Stock" },,
    { Product: "Drone", Price: "$600", Stock: "Available" },
    { Product: "Smart TV", Price: "$700", Stock: "Out of Stock" },
    { Product: "Graphics Card", Price: "$800", Stock: "Limited Stock" },
    { Product: "Motherboard", Price: "$300", Stock: "Available" },
    { Product: "Processor", Price: "$450", Stock: "Available" },
    { Product: "RAM 16GB", Price: "$150", Stock: "Available" },
    { Product: "RAM 32GB", Price: "$250", Stock: "Available" },
    { Product: "Power Supply", Price: "$100", Stock: "Available" },
    { Product: "Cooling Fan", Price: "$30", Stock: "Available" },
    { Product: "Smart Lock", Price: "$200", Stock: "Out of Stock" },
    { Product: "Security Camera", Price: "$300", Stock: "Available" },
    { Product: "Projector", Price: "$350", Stock: "Available" },
    { Product: "E-Reader", Price: "$180", Stock: "Limited Stock" },
    { Product: "Wireless Charger", Price: "$50", Stock: "Available" },
    { Product: "Electric Scooter", Price: "$500", Stock: "Available" },
    { Product: "Fitness Tracker", Price: "$100", Stock: "Out of Stock" },
    { Product: "Smart Glasses", Price: "$250", Stock: "Limited Stock" },
    { Product: "Streaming Device", Price: "$60", Stock: "Available" },
    { Product: "Noise Cancelling Headphones", Price: "$200", Stock: "Available" },
    { Product: "Bluetooth Speaker", Price: "$90", Stock: "Available" },
    { Product: "Mechanical Keyboard", Price: "$120", Stock: "Available" },
    { Product: "Gaming Chair", Price: "$250", Stock: "Available" },
    { Product: "Drawing Tablet", Price: "$300", Stock: "Limited Stock" },
    { Product: "Smart Home Hub", Price: "$150", Stock: "Available" },
    { Product: "Action Camera", Price: "$400", Stock: "Available" },
    { Product: "Car Dash Cam", Price: "$130", Stock: "Out of Stock" },
    { Product: "3D Printer", Price: "$700", Stock: "Limited Stock" },
    { Product: "Laser Printer", Price: "$250", Stock: "Available" },
    { Product: "Portable Monitor", Price: "$180", Stock: "Available" },
  ];

  return (
    
    <div>
      <Table data={data} />
    </div>
  );
};
export default ProductTable;;;