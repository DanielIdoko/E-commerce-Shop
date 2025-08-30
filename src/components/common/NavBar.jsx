import React from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <header className="navbar">
      <Link
        to="/"
        className="text-small-size text-accent rounded-full font-f-family-1 font-normal"
      >
        Flix Shop
      </Link>

      <nav className="w-[270px] h-full hidden md:flex items-center justify-around gap-5 md:ml-4 lg:ml-40">
        <NavLink to="/" className="navbar-navlink" style={({isActive}) => ({
          color: isActive ? "#DD8B26" : "#555"
        })}>
          Home
        </NavLink>
        <NavLink to="/about" className="navbar-navlink" style={({isActive}) => ({
          color: isActive ? "#DD8B26" : "#555"
        })}>
          About
        </NavLink>
        <NavLink to="/products" className="navbar-navlink" style={({isActive}) => ({
          color: isActive ? "#DD8B26" : "#555"
        })}>
          Store
        </NavLink>
        <NavLink to="/deals" className="navbar-navlink" style={({isActive}) => ({
          color: isActive ? "#DD8B26" : "#555"
        })}>
          What's New
        </NavLink>
      </nav>
      <div className="h-fit w-56 md:w-[100px] lg:w-[300px] flex justify-center items-center relative">
        <input
          type="search"
          placeholder="Search..."
          className="bg-transparent w-full h-full p-2 rounded-full text-accent focus:outline-1 font-f-family-2 text-small-size"
        />
        <FiSearch className="text-small-size text-accent relative right-8 md:right-0 lg:right-8 cursor-pointer hover:text-gray-500 transition duration-300 ease-in-out" />
      </div>
      <div className="hidden md:flex items-center justify-center w-fit h-full">
        <Link
          to="/cart"
          className="text-small-size flex items-center justify-center gap-2 cursor-pointer hover:text-gray-700"
        >
          <FiShoppingCart />
          Cart
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
