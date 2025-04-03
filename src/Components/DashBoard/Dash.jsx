import React from 'react'
import './Dash.css'
import { Link } from 'react-router-dom'
import "./Dash.css"
import Navbar from '../Navbar/Navbar'
import StudentId from '../Table/StudentId'
import { CiSquarePlus } from "react-icons/ci";
import { ApiTable } from '../Table/ApiTable'

function Dash() {
  return (
    <div>
      <Navbar/>
        <div className='h-screen flex ' id='container'>
            <StudentId/>
            <ApiTable/>
</div>
</div>
)
}

export default Dash;
