import React from "react";
import Navbar from "../components/pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
