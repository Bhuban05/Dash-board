import React from 'react'
import './Dash.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faStar } from '@fortawesome/free-solid-svg-icons'

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

        <div className='mt-25' id='Create-board' >

          <h2>Board Management</h2>

          <input type='button' value="Create Board" />
            </div>
            <div>
            {/* <Crm/> */}
           <BoardList/>
            {/* <ProductTable/> */}
            <StudentId/>
           
            </div>
</div>
</div>
)
}

export default Dash;
