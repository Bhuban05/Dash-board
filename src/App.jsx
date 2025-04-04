import "./App.css";
import Dash from "./Components/DashBoard/Dash";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Auth/Login";
import OTP from "./Components/Auth/OTP";
import Forget from "./Components/Auth/Forget";
import { ToastContainer } from "react-toastify";
import ResetPassword from './Components/Auth/resetPassword'
import Table from './Components/Table/Table'
import Course from './Components/Education-management/Course/Course'
import AddBoard from "./Components/Education-management/Board/addBoard";
import { BoardList } from "./Components/Education-management/Board/BoardList/BoardList";
import SignUp from "./Components/Auth/SignUp";



function App() {

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/" element={<Dash/>} />
            <Route path="/otp" element={<OTP/>} />
            <Route path="/forget" element={<Forget/>} />
            <Route path="/table" element={<Table/>} />
            <Route path="/course" element={<Course/>} />
            <Route path="/Board" element={<BoardList/>} />
            <Route path="/Addboard" element={<AddBoard/>} />
            <Route path="/reset-password" element={<ResetPassword/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
