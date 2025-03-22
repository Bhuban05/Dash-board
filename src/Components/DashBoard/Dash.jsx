import React from 'react'
import './Dash.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faStar } from '@fortawesome/free-solid-svg-icons'
import { CollegeList } from '../CollegeList/CollegeList'
import "./Dash.css"
import Navbar from '../Navbar/Navbar'
import ProductTable from '../Table/ProductTable'
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
            {/* <p className='text-gray-600'>Here’s what’s going on at your business right now</p>
            <div className='sm:flex gap-4'>
            <p className='mt-7 space-x-3'><FontAwesomeIcon icon={faStar}/> <span className='font-bold text-xl '>57 new orders</span> <br />
            <span className='text-xs  ms-7'> Awating processing </span> </p>
            <p className='mt-7 space-x-3'><FontAwesomeIcon icon={faPause}/> <span className='font-bold text-xl '>5 orders</span> <br />
            <span className='text-xs  ms-7'> On hold </span> </p>
            <p className='mt-7 space-x-3'><FontAwesomeIcon icon={faStar}/> <span className='font-bold text-xl '>15 products</span> <br />
            <span className='text-xs ms-9'> Out of stock</span> </p> */}
            {/* </div> */}
            </div>
            <div>
            {/* <Crm/> */}
            <CollegeList/>
            <ProductTable/>
            <StudentId/>
           
            </div>
</div>
</div>
)
}

export default Dash;
