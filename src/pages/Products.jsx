import React from "react";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "../css/SwiperCustoms.css";
// Assets import below
import {
  heroImage6,
  heroImage5,
  heroImage4,
  heroImage3,
} from "../assets/images";

const Products = () => {
  return (
    <div>
      {/* Hero section */}
      <section className="store-hero-section">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
        >
          <SwiperSlide>
            <img src={heroImage6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={heroImage5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={heroImage4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={heroImage3} alt="" />
          </SwiperSlide>
        </Swiper>

        {/* Categories container */}
        <div className="products-categories-section">

        </div>
      </section>
      {/* Hero section ends */}
    </div>
  );
};

export default Products;
