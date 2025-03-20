// import React, { useState } from "react";
// import { college } from "./API"; 

// function College() {
//     const data = [
//         {
//             collegeName: "college1",
//             collegeAddress: "Chabahil, ktm",
//             email: "aadim@123",
//             phoneNumber: "974648597",
//             status: "Pending",
//         },
//         {
//             collegeName: "College 2",
//             collegeAddress: "chabahil,ktm",
//             email: "admin@example.com",
//             phoneNumber: "987654321",
//             status: "Approved",
//         },
//         {
//             collegeName: "College 3",
//             collegeAddress: "chabahil,kt",
//             email: "admin@example.com",
//             phoneNumber: "123456789",
//             status: "Rejected",
//         },
//     ];

//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 1;

//     const totalPages = Math.ceil(data.length / itemsPerPage);

//     const currentData = data.slice(
//         (currentPage - 1) * itemsPerPage,
//         currentPage * itemsPerPage
//     );

//     const handlePageChange = (page) => {
//         setCurrentPage(page);
//      const handleUpdateCollege = async (collegeData) => {
//          try {
//            const response = await college(collegeData); 
//     //         console.log( response.data);
//     //     } catch (error) {
//     //         console.error("Error:", error);
//     //     }
     

//      }

//            const token = localStorage.getItem('token');
    
//             if (!token) {
//                 throw new Error('No token found in local storage');
//             }
    
            
//             const response = await college({
//                 headers: {
//                     'Authorization': `Bearer ${token}`, 
//                 },
//             });
    
            
//             const data = response.data;
//             console.log(data);
//         } catch (error) {
//             console.error('Error fetching data:', error);
    
//             if (error.response) {
               
//                 console.error('Response error:', error.response.data);
             
//             } else if (error.request) {

//                 console.error('No response received:', error.request);
//             } else {
               
//                 console.error('Request setup error:', error.message);
//             }
//         }
//     }


    
   
//     return (
//         <div className="flex items-center justify-center min-h-screen p-4 border-2 ">
//             <div className="relative flex flex-col bg-white rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl p-6">
                
//                 <div className="grid grid-cols-5 gap-4 font-bold text-center">
//                     <div>College Name</div>
//                     <div>College Address</div>
//                     <div>Email</div>
//                     <div>Phone Number</div>
//                     <div>Status</div>
//                 </div>

//                 <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-300 w-full" />

 
//                 {currentData.map((item, index) => (
//                     <div key={index} className="grid grid-cols-5 gap-4 text-center">
//                         <div>{item.collegeName}</div>
//                         <div>{item.collegeAddress}</div>
//                         <div>{item.email}</div>
//                         <div>{item.phoneNumber}</div>
//                         <div>{item.status}</div>
//                         <button
//                             onClick={() => handleUpdateCollege(item)} 
//                             className="col-span-5 px-3 py-1 bg-blue-500 text-white rounded w-20 mx-auto"
//                         >
//                             Update
//                         </button>
//                     </div>
//                 ))}

              
//                 <div className="flex justify-center mt-6">
//                     {Array.from({ length: totalPages }, (_, index) => (
//                         <button
//                             key={index + 1}
//                             onClick={() => handlePageChange(index + 1)}
//                             className={`px-3 py-1 mx-1 rounded ${
//                                 currentPage === index + 1
//                                     ? "bg-blue-500 text-white"
//                                     : "bg-gray-200 text-gray-700"
//                             }`}
//                         >
//                             {index + 1}
//                         </button>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default College;