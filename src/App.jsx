import './App.css'

import Reset from './Components/Auth/Reset'
 //import { Crm } from './Crm/Crm'
import Dash from './Components/DashBoard/Dash'


import { Table } from './Components/Table/Table'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import ProtectRoute from './Components/Auth/ProtectRoute'

import Login from './Components/Auth/Login'

import OTP from './Components/Auth/OTP'
import SignUp from './Components/Auth/Reset'

import Forget from './Components/Auth/Forget'
import { ToastContainer } from "react-toastify";




function App() {
  return (
    <>
      <ToastContainer />
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
            <Route path="/forget" element={<Forget/>} />
             <Route path="/" element={<Dash/>} />
             <Route path="/otp" element={<OTP/>} />
            <Route path="/table" element={<Table />} />
        </Routes>
      </BrowserRouter> 
</>
   
  )
}

export default App;