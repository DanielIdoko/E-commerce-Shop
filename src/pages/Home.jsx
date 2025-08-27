import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
  heroImage5,
  heroImage6,
} from "../assets/images";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-full p-4">
      <div className="hero-section">
        <div className="hero-text-box">
          <h1>Your Everyday Essentials, Made Easy.</h1>
          <p>
            Experience a seamless, personalized, and rewarding way to shop.
            We're building the future of retail, one order at a time.
          </p>
          <Link to="/products" className="hero-cta">Shop Now</Link>
        </div>
        <div className="hero-image-container">
          <img src={heroImage1} alt="" />
        </div>
      </div>

      {/* Categories section */}
      <section className="categories-section">
        
      </section>
    </div>
  );
};

export default Home;
