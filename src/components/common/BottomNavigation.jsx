import React from "react";
import { AiFillShop } from "react-icons/ai";
import {
  FiHome,
  FiList,
  FiSearch,
  FiShoppingBag,
  FiStar,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";

const tabs = [
  {
    name: "Home",
    path: "/",
    icon: <FiHome />,
  },
  {
    name: "Store",
    path: "/products",
    icon: <AiFillShop />,
  },
  {
    name: "Search",
    path: "/search",
    icon: <FiSearch />,
  },
  {
    name: "Cart",
    path: "/cart",
    icon: <FiShoppingBag />,
  },
];

const BottomNavigation = () => {
  return (
    <div className="bottom-navigation">
      <nav>
        {tabs.map((tab) => (
          <NavLink
            to={tab.path}
            key={Math.random()}
            className="nav-link"
            style={({ isActive }) => ({
              color: isActive ? "#121212" : "#a9a9a9",
            })}
          >
            {tab.icon}
            {tab.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default BottomNavigation;
