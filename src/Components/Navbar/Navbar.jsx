import { faBars, faBell, faSortDown} from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import pro from './pro.jpg'  
import Sidebar from '../Sidebar/Sidebar'
import "./Navbar.css"

function Navbar() {
  const[open, setOpen] = useState(false)
  const[visibal, setVisibal] = useState(true)
    const Menus = ["profile","help centre", "post activity", "setting", "your apps", "Signout"];
  return (
    <>
    <nav className=" border-y-1 bg-gray-200  w-full top-0 fixed">
  <div className=" flex items-center justify-between  h-15 ">
    <a className=" items-center space-x-3 ms-8  text-3xl font-bold   text-gray-600">phoenix</a>

        <input type="text" placeholder='  Search'  className='border-1 h-8 rounded-2xl w-95 hidden sm:block ' />
      <ul className="font-medium flex sm:h-8 md:p-1 m-0 md:p-0;rounded-lg   ">

    <li>
          <a className="block py-2 px-3 "> <FontAwesomeIcon icon={faBell} className='text-gray-500' />  </a>
          </li>
        <li>
          <a className="block py-2 px-3" onClick={()=> setVisibal(!visibal)}> <FontAwesomeIcon icon={faBars} className='text-gray-500' />
          </a>
          </li>
        <li>
          <a className="block py-2 px-3 rounded-sm "> <img
          
          onClick={()=> setOpen(!open)} src= {pro} className='h-7  sm:p-1 rounded-4xl sm:w-auto' />

        {open  && (
          <div className=' bg-white p-5 w-60 rounded-2xl shadow-lg absolute  right-1  top-15  '>

            <ul>
              {
                  Menus.map((menu)=>(
                    <li className='   p-2 text-lg cursor-pointer rounded hover:bg-gray-500 -mt-0.5 mr-1.1 border-t-2px solid ' key={menu}>{menu}</li>
                  ))}
            </ul>

          </div>
              )}
          </a>
          </li>
      </ul>
    </div>
   </nav>

    <div id='sideBar' style={{
  transform: visibal ? "translateX(0)" : "translateX(-100%)",
  transition: 'transform 0.5s ease-in-out',
  position: "fixed",
  left: 0, 
  top: 0, 
  height: "100vh",
  width: "15%",
  maxWidth:''
    }}>
    {visibal &&(
    <Sidebar/>)
    }
    </div>
   </>

  )
}
export default Navbar;