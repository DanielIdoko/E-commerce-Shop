import React from "react";
import NavBar from "../components/common/NavBar";
import { Outlet } from "react-router-dom";
import BottomNavigation from "../components/common/BottomNavigation";
import ScrollToTop from "../utils/scrollToTop";

const Layout = () => {
  return (
    <div className="w-full h-auto">
      <ScrollToTop />
      <NavBar />
      <BottomNavigation />
      <Outlet />
    </div>
  );
};

export default Layout;
