import { faBars, faBell } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import pro from './pro.jpg';
import Sidebar from '../Sidebar/Sidebar';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"; 

function Navbar() {
  const [open, setOpen] = useState(false);
  const [visibal, setVisibal] = useState(true);

  useEffect(() => {
    setTimeout(() => setVisibal(true), 100);
  }, []);

  const dropdownRef = useRef(null);

  const Menus = [
    { name: "Profile", path: "/profile" },
    { name: "Help Center", path: "/help-center" },
    { name: "Post Activity", path: "/post-activity" },
    { name: "Setting", path: "/setting" },
    { name: "Your Apps", path: "/your-apps" },
    { name: "Add account", path: "/sign-up" },
    { name: "Log-out", path: "/login" }
  ];


  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="border-y-1 bg-gray-200 w-full top-0 fixed">
        <div className="flex items-center justify-between h-15">
          <a to="/" className="items-center space-x-3 ms-8 text-3xl font-bold text-gray-600">phoenix</a>

          <input type="text" placeholder="  Search" className="border-1 h-8 rounded-2xl w-95 hidden sm:block" />

          <ul className="font-medium flex sm:h-8 md:p-1 m-0 rounded-lg">
            <li>
              <a className="block py-2 px-3">
                <FontAwesomeIcon icon={faBell} className="text-gray-500" />
              </a>
            </li>
            <li>
              <a className="block py-2 px-3" onClick={() => setVisibal(!visibal)}>
                <FontAwesomeIcon icon={faBars} className="text-gray-500" />
              </a>
            </li>
            <li ref={dropdownRef} className="relative">
              <a className="block py-2 px-3 rounded-sm">
                <img onClick={() => setOpen(!open)} src={pro} className="h-7 sm:p-1 rounded-4xl sm:w-auto cursor-pointer" />
              </a>

              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={open ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`bg-white p-5 w-60 rounded-2xl shadow-lg absolute right-1 top-15 ${open ? "block" : "hidden"}`}
              >
                <ul>
                  {Menus.map((menu, index) => (
                    <Link key={index} to={menu.path}>
                      <li className="p-2 text-lg cursor-pointer rounded hover:bg-gray-500 border-t-2px solid">
                        {menu.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </motion.div>
            </li>
          </ul>
        </div>
      </nav>

      <div
        className={`sidebar ${visibal ? "active" : ""}`}
        // style={{
        //   transform: visibal ? "translateX(0)" : "translateX(-100%)",
        //   transition: "transform 0.5s ease-in-out",
        //   position: "fixed",
        //   left: 0,
        //   top: 0,
        //   height: "100vh",
        //   width: "15%",
        //   willChange: "transform",
        // }}
      >
        <Sidebar />
      </div>
    </>
  );
}

export default Navbar;
