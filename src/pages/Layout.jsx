import React from "react";
import NavBar from "../components/common/NavBar";
import { Outlet } from "react-router-dom";
import BottomNavigation from "../components/common/BottomNavigation";

const Layout = () => {
  return (
    <div className="w-full">
      <NavBar />
      <BottomNavigation />
      <Outlet />
    </div>
  );
};

export default Layout;
