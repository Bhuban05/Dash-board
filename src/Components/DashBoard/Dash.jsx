import React from 'react'
import './Dash.css'
import { Link } from 'react-router-dom'
import "./Dash.css"
import Navbar from '../Navbar/Navbar'
import StudentId from '../Table/StudentId'
import { BoardList } from '../Education-management/Board/BoardList/BoardList'

function Dash() {
  return (
    <div>
      <Navbar/>
      {/* <Sidebar/> */}
        <div className='h-screen flex ' id='container'>

        <div className='mt-25' id='Create-board' >

          <h2>Board Management</h2>
          <Link to="/Addboard"
          >
          <input type='button' value="Create Board" /></Link>
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
