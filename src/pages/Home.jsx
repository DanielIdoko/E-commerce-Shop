import React, { lazy, Suspense, useEffect, useState } from "react";
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
import Spinner from "../components/common/Loader/Spinner";
import { Link } from "react-router-dom";
import { dealProducts, bestSellers } from "../data/products";
import {
  categoriesData,
  discounts,
  bestCategories,
  brands,
  faqs,
} from "../data/common";
import { heroImage, cards, faq1, faq2, faq3 } from "../assets/images";
import Footer from "../components/common/Footer";
import { AiOutlineArrowRight } from "react-icons/ai";
// Bring in Deal component
const Deal = lazy(() => import('../components/Deal'))


// Category component
const Category = ({ categoryData }) => {
  return (
    <div onClick={() => {}} className="home-category">
      <img src={categoryData.category_image} alt={categoryData.title} />
      <p>{categoryData.title}</p>
    </div>
  );
};

// Brand component
const Brand = ({ brand }) => {
  return (
    <div className="w-44 h-20 lg:w-74 p-1 lg:p-2 bg-gray-50 rounded-xl flex items-center gap-2 lg:gap-5 hover:border-1 hover:border-accent transition duration-500 ease-in cursor-pointer">
      <img
        src={brand.image_src}
        alt={brand.title}
        className="w-16 h-15 rounded-full object-scale-down"
      />
      <div>
        <h4 className="text-small-size text-accent font-bold font-f-family-2">
          {brand.title}
        </h4>
        <p className="text-gray-600 text-x-small-size font-f-family-2">
          {brand.desc}
        </p>
      </div>
    </div>
  );
};

// Discount component
const Discount = ({ discount_data }) => {
  return (
    <div className="w-44 h-70 md:w-50 md:h-70 lg:w-2xs lg:h-86 p-0 md:p-0 rounded-xl bg-gray-50 cursor-pointer overflow-hidden">
      <div className="h-[40%] w-full p-2">
        <p className="text-small-size text-primary md:text-small-size font-bold font-f-family-2">
          Save
        </p>
        <p className="text-medium-size md:text-x-medium-size font-bold text-accent pl-1 pt-1">
          ${discount_data.price}
        </p>
        <p className="text-gray-900 text-x-small-size md:text-small-size font-f-family-2 pt-2 md:pt-1">
          {discount_data.title}
        </p>
      </div>
      <div className="w-full h-fit overflow-hidden">
        <img
          src={discount_data.image}
          className="h-[60%] w-full rounded-bl-xl rounded-br-xl"
          alt={discount_data.title}
        />
      </div>
    </div>
  );
};

const Home = () => {
  const [deals, setDeals] = useState([]);
  // Filter category states
  const [loading, setIsloading] = useState(true);
  const [filterCategory, setFilterCategory] = useState("Electronics");
  const [filterData, setFilterData] = useState([]);

  // code to filter data by category
  const filterCategories = (category_title) => {
    // Return a new array, store in a variable and set that new fitered data as the new filterData
    if (category_title) {
      const filteredBestSellers = bestSellers.filter(
        (item) => item.product_category === category_title
      );
      setFilterData(filteredBestSellers);
    } else {
      setFilterData(bestSellers);
    }
  };

  // // Load filterData on page load
  useEffect(() => {
    filterCategories(filterCategory);
  }, []);

  return (
    <div className="w-full h-full p-4">
      <div className="hero-section">
        <div className="hero-text-box">
          <h1>Your Everyday Essentials, Made Easy.</h1>
          <p>
            Experience a seamless, personalized, and rewarding way to shop.
            We're building the future of retail, one order at a time.
          </p>
          <Link
            to="/products"
            className="hero-cta-btn bg-primary text-accent flex items-center justify-center gap-2 p-2 px-2 md:p-2 md:px-3.5 w-fit rounded-full mt-5 ml-2 md:ml-3 cursor-pointer transition duration-150 ease-in"
          >
            Shop Now <AiOutlineArrowRight />
          </Link>
        </div>
        <div className="hero-image-container">
          <img src={heroImage} alt="" />
        </div>
      </div>

      {/* Categories section */}
      <section className="categories-section">
        <h2 className="sub-heading">Explore our Categories</h2>
        <div className="w-full h-fit p-3 lg:p-10 grid grid-cols-3 grid-rows-2 md:grid-rows-2 md:grid-cols-3 lg:grid-cols-5 lg:grid-rows-2 gap-4 md:gap-2">
          {categoriesData.map((category) => (
            <Category key={category.id} categoryData={category} />
          ))}
        </div>
      </section>
      {/* End of category section */}
      {/* Best deals section */}
      <section className="best-deals-section">
        <h2 className="sub-heading">Today's best deals for you</h2>
        {/* Deals */}
        <Suspense fallback={<Spinner />}>
          <div className="w-full h-full lg:p-10">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
              spaceBetween={10}
              slidesPerView={2}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              navigation
            >
              {dealProducts.map((deal) => (
                <SwiperSlide key={deal.deal_asin}>
                  <Deal deal={deal} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Suspense>
      </section>
      {/* End of deals section */}
      {/* Brands_container */}
      <section className="brands-container">
        <h3 className="sub-heading">Choose By Brands</h3>
        <div className="brands-list">
          {brands.map((brand) => (
            <Brand brand={brand} key={brand.id} />
          ))}
        </div>
      </section>
      {/* End of brands */}
      {/* Discount section starts */}
      <h3 className="sub-heading">Get up to 60% off</h3>
      <section className="discount-section">
        <div className="discounts-row">
          {discounts.map((discount) => (
            <Discount discount_data={discount} key={discount.id} />
          ))}
        </div>
      </section>
      {/* End of discount section */}

      {/* Best sellers section */}
      <h3 className="sub-heading">Best Sellers</h3>
      <section className="best-sellers-section">
        <nav>
          {bestCategories.map((category) => (
            <button
              className="p-2 md:pl-3 md:pr-3 bg-transparent text-accent font-f-family-2 text-x-small-size md:text-medium-size cursor-pointer rounded-full"
              style={{
                color: category.title === filterCategory && "#ffd620",
                fontWeight: category.title === filterCategory && "bold",
              }}
              key={category.id}
              onClick={() => {
                setFilterCategory(category.title);
                filterCategories(category.title);
              }}
            >
              {category.title}
            </button>
          ))}
        </nav>

        {/* more products section */}
        <div className="w-full h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pt-10">
          {filterData.map((Fdata) => (
            <Link
              to={`/products/${Fdata.product_asin}`}
              state={{ Fdata }}
              className="w-40 h-88 md:w-55 lg:w-80 rounded-md bg-none relative hover:shadow-sm hover:shadow-gray-300 transition duration-300 ease-in cursor-pointer"
              key={Fdata.product_asin}
            >
              <img
                src={
                  Fdata.product_photo
                    ? Fdata.product_photo
                    : "../assets/images/PosterImage.png"
                }
                alt={Fdata.product_title + " image"}
                className="w-full h-42 pb-1 object-contain"
              />
              {/* Text container */}
              <div className="w-full h-fit pt-2 md:p-2 mt-4">
                <h3 className="text-small-size md:text-medium-size text-accent font-f-family-2 font-bold p-1">
                  {Fdata.product_title.length > 15
                    ? Fdata.product_title.slice(0, 15) + "..."
                    : Fdata.product_title.length}
                </h3>

                <div className="w-full h-fit p-1 flex items-center justify-start gap-2">
                  <p className="text-small-size md:text-medium-size text-gray-800 flex-1">
                    {Fdata.product_price}
                  </p>
                  <span className="text-x-small-size md:text-medium-size text-yellow-500">
                    {Fdata.product_star_rating}
                  </span>
                  <span className="text-x-small-size md:text-medium-size text-yellow-700 ">
                    ({Fdata.product_num_ratings})
                  </span>
                </div>
              </div>
              <button className="mt-4 ml-2 md:ml-3 add-to-cart-btn">
                Add to Cart
              </button>
            </Link>
          ))}
        </div>
      </section>
      {/* End of Categories section */}
      {/* Quick Info section */}
      <section className="quick-info-section">
        <div className="text-container">
          <h5>Get 8% Cash Back</h5>
          <p>on Flix.com</p>
          <button className="learn-more-cta">
            Learn More <AiOutlineArrowRight />
          </button>
        </div>
        <div className="img-container">
          <img src={cards} alt="Stack of cards image" />
        </div>
      </section>
      {/* End of quick info section */}
      
      {/* Services/FAQs */}
      <h5 className="sub-heading">Services to help you Shop Better</h5>
      <section className="services">
        {faqs.map((faq) => (
          <div className="service" key={faq.id}>
            <div className="text-content">
              <h5>{faq.title}</h5>
              <p>{faq.desc}</p>
            </div>
            <div className="img-container">
              <img src={faq.image_src} alt={faq.title} />
            </div>
          </div>
        ))}
      </section>
      <Link
        to="/about"
        className="text-accent text-x-small-size md:text-small-size font-bold cursor-pointer pl-3 md:pl-5 flex items-center gap-2"
      >
        Learn More <AiOutlineArrowRight />
      </Link>
      {/* End of Services/FAQs Section */}
      {/* Footer */}
      <Footer />
      {/* End of footer */}
    </div>
  );
};

export default Home;
