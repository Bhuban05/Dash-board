import React from 'react'
import './Dash.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faStar } from '@fortawesome/free-solid-svg-icons'
import { CollegeList } from '../CollegeList/CollegeList'
import "./Dash.css"
import Navbar from '../Navbar/Navbar'
// import ProductTable from '../Table/ProductTable'
import StudentId from '../Table/StudentId'
//  import Sidebar from "../Sidebar/Sidebar"

function Dash() {
  return (
    <div>
      <Navbar/>
      {/* <Sidebar/> */}
        <div className='h-screen flex ' id='container'>

        <div className='lg:mx-76  h-screen'>

          <h2 className='text-3xl font-bold mt-25'>Board Management</h2>
            </div>
            <div>
            {/* <Crm/> */}
            <CollegeList/>
            {/* <ProductTable/> */}
            <StudentId/>
           
            </div>
</div>
</div>
)
}

export default Dash;
