import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { store } from "../data/products";
import SearchProduct from "../components/SearchProduct";
import useSearchStore from "../store/SearchStore";
import Spinner from "../components/common/Loader/Spinner";
import Footer from "../components/common/Footer";
import { binoculars } from "../assets/images";
import Recommended from "../components/Recommended";
import { BiArrowFromLeft } from "react-icons/bi";

const Search = () => {
  const { term } = useParams();

  const { isLoading } = useSearchStore();
  // Filter products based on search term
  // PS: got the term value/data by using react's useParams() method
  const searchResults = useMemo(() => {
    return store.filter(
      (item) =>
        item.product_title?.toLowerCase().includes(term?.toLowerCase()) ||
        item.product_category?.toLowerCase().includes(term?.toLowerCase())
    );
  }, [store, term]);

  return (
    <div className="w-full h-full p-3 md:p-10 mt-20">
      {/* BreadCrumbs */}
      <span className="py-6 flex items-center gap-3">
        <Link to="/" className="breadcrumb-text">
          Home
        </Link>{" "}
        {" > "}{" "}
        <Link to="/search" className="breadcrumb-text">
          search
        </Link>
        {" > "}
        <Link to={`/search/${term}`} className="breadcrumb-text">
          {term}
        </Link>
      </span>

      {/* Main content */}
      {isLoading ? (
        <Spinner />
      ) : searchResults.length > 0 ? (
        <div className="w-full h-full">
          <p className="text-medium-size md:text-x-medium-size text-accent font-f-family-1 pb-4">
            Search Results for "{term}"
          </p>
          <ul className="w-full p-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
            {searchResults.map((item) => (
              <SearchProduct item={item} key={Math.random()} />
            ))}
          </ul>
        </div>
      ) : (
        <div className="w-full h-full rounded-xl p-3 flex flex-col justify-center items-center">
          <img
            src={binoculars}
            alt="Search Not found image"
            className="w-40 h-40 rounded-full"
          />
          {term ? (
            <div className="w-full h-full rounded-xl p-3 flex flex-col justify-center items-center">
              <p className="text-accent text-small-size md:text-medium-size font-bold pb-3 font-f-family-2">
                There are no results for "{term}"
              </p>
              <p className="text-gray-700 font-f-family-1">
                - Check your spelling for typing errors
              </p>
              <p className="text-gray-700 font-f-family-1">
                - Try searching with short and simple keywords
              </p>
              <p className="text-gray-700 font-f-family-1">
                - Try searching more general terms
              </p>
            </div>
          ) : (
            <p className="text-accent text-small-size md:text-medium-size font-bold pb-3 font-f-family-2">
              Search for Something
            </p>
          )}
        </div>
      )}

      {/* Recommended Searches */}
      {!term && (
        <>
          <Recommended />
          <Link
            to={`/products`}
            className="text-accent text-x-small-size md:text-small-size flex items-center gap-2 px-3 hover:underline"
          >
            See More <BiArrowFromLeft />
          </Link>
        </>
      )}
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Search;
