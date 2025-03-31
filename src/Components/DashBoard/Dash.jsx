import React from 'react'
import './Dash.css'
import { Link } from 'react-router-dom'
import "./Dash.css"
import Navbar from '../Navbar/Navbar'
import StudentId from '../Table/StudentId'
import { BoardTable } from '../Table/BoardTable'

function Dash() {
  return (
    <div>
      <Navbar/>
        <div className='h-screen flex ' id='container'>
            <StudentId/>
            <BoardTable/>
</div>
</div>
)
}

export default Dash;
