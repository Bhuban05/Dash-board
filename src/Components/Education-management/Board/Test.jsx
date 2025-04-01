// import { useEffect, useState } from "react";
// import axios from "axios";

// const Test = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch Data from API
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://your-api.com/users"); // Replace with your API
//         setUsers(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="container mx-auto mt-10">
//       <h2 className="text-xl font-bold text-center mb-4">User List</h2>

//       {loading ? (
//         <p className="text-center">Loading...</p>
//       ) : (
//         <table className="w-full border-collapse border border-gray-300">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="border p-2">Email</th>
//               <th className="border p-2">College Name</th>
//               <th className="border p-2">Address</th>
//               <th className="border p-2">Status</th>
//               <th className="border p-2">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user.id} className="text-center">
//                 <td className="border p-2">{user.email}</td>
//                 <td className="border p-2">{user.college_name}</td>
//                 <td className="border p-2">{user.address}</td>
//                 <td className="border p-2">
//                   <span
//                     className={`px-2 py-1 rounded ${
//                       user.status === "Active" ? "bg-green-200" : "bg-red-200"
//                     }`}
//                   >
//                     {user.status}
//                   </span>
//                 </td>
//                 <td className="border p-2">
//                   <button className="bg-blue-500 text-white px-3 py-1 rounded mx-1">
//                     Edit
//                   </button>
//                   <button className="bg-red-500 text-white px-3 py-1 rounded">
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default Test;
