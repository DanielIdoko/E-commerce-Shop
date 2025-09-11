import React, { useState } from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logo } from "../../assets/images";
import useSearchStore from "../../store/SearchStore";


const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const addSearch = useSearchStore((state) => state.addSearch);
  const navigate = useNavigate();

  // Function for search functionality
  const handleSearch = () => {
    if (!searchTerm.trim()) return;

    // Add searchTerm to recent searches
    addSearch(searchTerm);
    navigate(`/search/${encodeURIComponent(searchTerm)}`);
    // set search term state to be empty
    setSearchTerm("");
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    handleSearch()
  }

  return (
    <header className="navbar">
      <Link
        to="/"
        className="text-small-size text-accent md:ml-5 w-fit rounded-full font-f-family-1 font-normal"
      >
        <img
          src={logo}
          alt="Logo image"
          className="w-10 h-10 md:w-13 lg:w-10 rounded-full"
        />
      </Link>

      <nav className="w-[400px] h-full hidden md:flex items-center justify-around md:justify-center gap-5 lg:gap-20 md:gap-10 md:ml-0 lg:ml-40">
        <NavLink
          to="/"
          className="navbar-navlink"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "#555",
            backgroundColor: isActive && "#ffd620"
          })}
          >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className="navbar-navlink"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "#555",
            backgroundColor: isActive && "#ffd620"
          })}
        >
          Store
        </NavLink>
      </nav>
      <form 
        onSubmit={handleSubmit}
        className="h-fit w-72 md:w-[400px] md:p-1 lg:w-[600px] flex justify-center items-center relative">
        <input
          type="search"
          placeholder="Search Products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent w-full h-full p-2 rounded-sm text-accent focus:outline-1 font-f-family-2 text-small-size"
        />
        <FiSearch className="text-x-medium-size p-1 text-accent relative right-8 md:right-0 lg:right-8 cursor-pointer rounded-full hover:text-gray-800 hover:bg-black/10 transition duration-300 ease-in-out" onClick={handleSearch}/>
      </form>
      <div className="hidden md:flex items-center justify-center w-fit h-full md:mr-10 lg:mr-0">
        <Link
          to="/cart"
          className="text-small-size md:text-medium-size flex items-center justify-center gap-2 cursor-pointer hover:text-gray-700"
        >
          <FiShoppingCart />
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
