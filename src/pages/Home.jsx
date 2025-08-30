import React, {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
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
import { products, bestSellers } from "../data/products";
import {
  categoriesData,
  discounts,
  bestCategories,
  brands,
} from "../data/common";
import { heroImage } from "../assets/images";

// Deal component
const Deal = ({ deal }) => {
  return (
    <div className="w-40 h-88 md:w-55 lg:w-90 rounded-md p-1.5 bg-white relative cursor-pointer transition duration-200 ease-in">
      <img
        src={deal.deal_photo}
        alt={deal.deal_title}
        className="w-full h-42 pb-1 object-contain"
      />
      <span className="text-x-small-size text-accent bg-orange-200 p-1 rounded-md absolute top-1 left-1">
        {deal.deal_badge ? deal.deal_badge : "10% off"}
      </span>
      {/* Text container */}
      <div className="w-full h-fit pt-2">
        <h3 className="text-medium-size text-accent font-f-family-2">
          {deal.deal_title.length > 15
            ? deal.deal_title.slice(0, 20) + "..."
            : deal.deal_title}
        </h3>
        <p className="text-small-size text-gray-500">
          {deal.deal_price.amount + deal.deal_price.currency}
        </p>
        <span className="text-x-small-size text-green-600 ">
          {deal.deal_state ? deal.deal_state : "OUT OF STOCK"}
        </span>
      </div>
      <button className="bg-transparent text-accent border-1 border-accent flex items-center justify-center p-1 pl-2 pr-2 w-full lg:w-fit rounded-full mt-3 cursor-pointer hover:bg-primary hover:border-primary hover:text-white transition duration-150 ease-in">
        Add to Cart
      </button>
    </div>
  );
};

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
    <div className="w-44 h-70 md:w-50 md:h-86 lg:w-2xs lg:h-86 p-0 md:p-0 rounded-xl bg-orange-50 md:bg-orange-100 cursor-pointer transfrom hover:scale-100 transition duration-300">
      <div className="h-[40%] w-full p-2">
        <p className="text-small-size md:text-x-medium-size font-bold font-f-family-2">
          Save
        </p>
        <p className="text-medium-size md:text-large-size font-bold text-green-800 pl-1 pt-1">
          ${discount_data.price}
        </p>
        <p className="text-gray-600 text-x-small-size font-bold font-f-family-2 pt-2 md:pt-1">
          {discount_data.title}
        </p>
      </div>
      <img
        src={discount_data.image}
        className="h-[60%] w-full rounded-bl-xl rounded-br-xl"
        alt={discount_data.title}
      />
    </div>
  );
};

const Home = () => {
  const [deals, setDeals] = useState([]);
  // Filter category states
  const [loading, setIsloading] = useState(true);
  const [filterCategory, setFilterCategory] = useState("Software");
  const [filterData, setFilterData] = useState([]);

  // code to filter categories
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
        </div>
        <div className="hero-image-container">
          <img src={heroImage} alt="" />
        </div>
      </div>

      {/* Categories section */}
      <section className="categories-section">
        <h2 className="text-medium-size font-f-family-2 p-3 md:pl-10">
          Explore our Categories
        </h2>
        <div className="w-full h-fit p-3 lg:p-10 grid grid-cols-4 grid-rows-2 md:grid-rows-2 md:grid-cols-3 lg:grid-cols-5 lg:grid-rows-2 gap-4 md:gap-2">
          {categoriesData.map((category) => (
            <Category key={category.id} categoryData={category} />
          ))}
        </div>
      </section>
      {/* End of category section */}
      {/* Best deals section */}
      <section className="best-deals-section">
        <h2 className="text-medium-size font-f-family-2 pb-4 md:pl-10">
          Today's best deals for you
        </h2>
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
              {products.map((deal) => (
                <SwiperSlide key={deal.product_asin}>
                  {/* <Link to={deal.deal_url} target="blank"> */}
                  <Deal deal={deal} />
                  {/* </Link> */}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Suspense>
      </section>
      {/* End of deals section */}
      {/* Brands_container */}
      <section className="brands-container">
        <h3 className="text-medium-size font-f-family-2 pb-4 md:pl-10">
          Choose By Brands
        </h3>
        <div className="brands-list">
          {brands.map((brand) => (
            <Brand brand={brand} key={brand.id} />
          ))}
        </div>
      </section>
      {/* End of brands */}
      {/* Discount section starts */}
      <section className="discount-section">
        <h3 className="text-medium-size font-f-family-2 pb-4">
          Get up to 60% off
        </h3>
        <div className="discounts-row">
          {discounts.map((discount) => (
            <Discount discount_data={discount} key={discount.id} />
          ))}
        </div>
      </section>
      {/* End of discount section */}
      <section className="best-sellers-section">
        <h3 className="text-medium-size font-f-family-2 pb-2">Best Sellers</h3>
        <nav>
          {bestCategories.map((category) => (
            <button
              className="p-2 bg-transparent text-accent border-1 border-gray-400 font-bold font-f-family-2 text-x-small-size md:text-small-size cursor-pointer rounded-full"
              style={{
                backgroundColor: category.title === filterCategory && "#0b0b0b",
                color: category.title === filterCategory && "#fff",
                border: category.title === filterCategory && "#0b0b0b",
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

        {/* main content */}
        <div className="w-full h-full grid grid-cols-2 md:-grid-cols-4 lg:grid-cols-4 gap-2 pt-10">
          {filterData.map((Fdata) => (
            <div
              className="w-40 h-88 md:w-55 lg:w-80 rounded-md bg-none relative cursor-pointer transition duration-200 ease-in"
              key={Fdata.asin}
            >
              <img
                src={
                  Fdata.product_photo
                    ? Fdata.product_photo
                    : "../assets/images/PosterImage.png"
                }
                alt={Fdata.product_title + " image"}
                className="w-full h-42 pb-1 object-cover"
              />
              <span className="text-small-size text-accent bg-orange-200 p-1 pl-3 pr-3 rounded-md absolute top-1 left-10">
                {Fdata.rank ? Fdata.rank : 20}
              </span>
              {/* Text container */}
              <div className="w-full h-fit pt-2 md:p-2">
                <h3 className="text-medium-size text-accent font-f-family-2 font-bold p-1">
                  {Fdata.product_title.length > 15
                    ? Fdata.product_title.slice(0, 25) + "..."
                    : Fdata.product_title.length}
                </h3>

                <div className="w-full h-fit p-1 flex items-center justify-start gap-2">
                    <p className="text-small-size md:text-medium-size text-gray-500 flex-1">
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
                <button className="bg-transparent text-accent border-1 border-accent flex items-center justify-center p-1 pl-2 pr-2 w-full lg:w-fit rounded-full mt-3 ml-2 md:ml-3 cursor-pointer hover:bg-primary hover:border-primary hover:text-white transition duration-150 ease-in">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
