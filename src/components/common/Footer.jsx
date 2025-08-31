import React from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import { BiBriefcase } from "react-icons/bi";
import { Link } from "react-router-dom";
import { logo } from "../../assets/images";
import { footerCards } from "../../data/common";

// Card component for payment methods
const Card = ({ card_image, card_name }) => {
  return (
    <div className="border-1 p-2 w-15 h-10 border-gray-400 rounded-xl flex items-center justify-center">
      <img src={card_image} alt={card_name} />
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="w-fit h-full p-3">
        <img
          src={logo}
          alt="Flix Logo"
          className="footer-logo w-12 h-12 rounded-full"
        />
        <span className="text-accent font-bold text-small-size md:text-medium-size font-f-family-1">
          Flix Shop
        </span>
        <p className="pt-6 text-gray-600 font-f-family-1">
          Experience a seamless, personalized, and rewarding way to shop. We're
          building the future of retail, one order at a time.
        </p>
        <p className="footer-heading">Accepted Payments</p>
        <div className="cards-container">
          {footerCards.map((card) => (
            <Card
              card_image={card.card_image}
              card_name={card.card_title}
              key={card.id}
            />
          ))}
        </div>
      </div>
      <div className="h-full w-full md:col-span-2 p-2 md:flex md:justify-start md:gap-5 lg:gap-30">
        <div className="links-container">
          <h6 className="footer-heading">Department</h6>
          <Link to="/products/fashion">Fashion</Link>
          <Link to="">Office Supplies</Link>
          <Link to="">Electronics and Gadgets</Link>
          <Link to="">Travel Accessories</Link>
          <Link to="">Furniture</Link>
          <Link to="">Wears</Link>
          <Link to="">Fitness</Link>
        </div>
        <div className="links-container">
          <h6 className="footer-heading">About Us</h6>
          <Link to="">About ShopCart</Link>
          <Link to="">News and Blog</Link>
          <Link to="">Help</Link>
          <Link to="">Location</Link>
          <Link to="">Contact</Link>
          <Link to="">Press Center</Link>
        </div>
        <div className="links-container">
          <h6 className="footer-heading">Services</h6>
          <Link to="">Shipping and Delivery</Link>
          <Link to="">Order Pickup</Link>
          <Link to="">FAQs</Link>
        </div>
        <div className="links-container">
          <h6 className="footer-heading">Help</h6>
          <Link to="">Track Orders</Link>
          <Link to="">Feedback</Link>
          <Link to="">Orders</Link>
          <Link to="">Returns</Link>
          <Link to="">Report a problem</Link>
        </div>
      </div>
      <div className="final-section">
        <div className="w-auto p-1 flex flex-1 items-center justify-start gap-10 md:gap-5 lg:gap-10 md:pl-3">
          <Link to="">
            <BiBriefcase className="text-primary" />
            Gift Cards
          </Link>
          <Link to="">
            <AiFillQuestionCircle className="text-primary" />
            Help Center
          </Link>
        </div>
            <div className=" p-1 flex items-center justify-start md:justify-around flex-1 gap-10 md:gap-3 lg:gap-10">
          <a
            href=""
            className="text-x-small-size md:text-x-small-size lg:text-small-size text-accent font-f-family-1"
          >
            Terms of Service
          </a>
          <a
            href=""
            className="text-x-small-size md:text-x-small-size lg:text-small-size text-accent font-f-family-1"
          >
            Privacy Policy
          </a>
        </div>
        <div className="w-fit flex-1 items-center justify-around gap-10">
          <Link
            to="https://linkedin.com/in/danielidokodev"
            target="blank"
            className="text-small-size md:text-x-small-size lg:text-small-size font-f-family-2 text-gray-700 md:text-accent lg:text-gray-700 "
          >
            Built with love by Daniel ✨ | 2025
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
