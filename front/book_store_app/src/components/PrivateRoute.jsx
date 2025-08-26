import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"
import Home from "../pages/home/Home";
const PrivateRoute = ({children}) => {
  const token = localStorage.getItem("authUser");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return(
    <>
    <Navbar/>
    {children}
    </>
  )
};


export default PrivateRoute;
