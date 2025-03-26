import React from 'react'
import './Dash.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faStar } from '@fortawesome/free-solid-svg-icons'
import { IoMdAdd } from "react-icons/io";

import "./Dash.css"
import Navbar from '../Navbar/Navbar'
// import ProductTable from '../Table/ProductTable'
import StudentId from '../Table/StudentId'
import { BoardList } from '../Education-management/Board/BoardList/BoardList'
//  import Sidebar from "../Sidebar/Sidebar"

function Dash() {
  return (
    <div>
      <Navbar/>
      {/* <Sidebar/> */}
        <div className='h-screen flex ' id='container'>

        <div className='lg:mx-76  h-screen'>

     
          <h2 className='text-3xl  font-bold mt-25'>Board Management

          </h2>
          <p className='ms-290 flex align-item gap-3  bg-blue-700   rounded'> <IoMdAdd className='mt-1.5 space-x-5' />create a board</p>
            </div>
            
     
     

            </div>
            {/* <Crm/> */}
           <BoardList/>
            {/* <ProductTable/> */}
            <StudentId/>
           
          
</div>

)
}

export default Dash;
