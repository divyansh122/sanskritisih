import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import CategoriesDropdown from "./CategoriesDropdown";
import TrendingDropdown from "./TrendingDropdown";

const Header2 = () => {
  const [isCategoriesOpen, setCategoriesOpen] = useState(false);
  const [isTrendingOpen, setTrendingOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-3 px-4 bg-white mt-2 bgcolor">
      {/* Left Section: Categories, Trending, Search */}
      <div className="flex items-center space-x-8 flex-grow">
        {/* Increased space-x from 4 to 8 */}
        <div className="flex w-50 z-10  ">
          <CategoriesDropdown
            isOpen={isCategoriesOpen}
            setIsOpen={setCategoriesOpen}
          />
        </div>
        <div className="flex w-50 z-10">
          <TrendingDropdown
            isOpen={isTrendingOpen}
            setIsOpen={setTrendingOpen}
          />
        </div>
        <div className="flex items-center bg-pink-50 py-2 px-4 rounded-full w-44 mr-16 flex-grow">
          {/* Increased w-32 to w-44 for more width and padding */}
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-gray-500 w-full textcolor"
          />
          <FiSearch className="ml-2 text-gray-500" />
        </div>
      </div>

      {/* Right Section: Artists and Blog */}
      <div className="flex space-x-4 ml-8">
        {/* Increased space-x from 4 to 8 for more spacing between buttons */}
        <button className="bg-white py-2 px-6 rounded-full text-gray-500 hover:text-black border border-gray-300 transition w-36 textcolor">
          Artists
        </button>
        <button className="bg-white py-2 px-6 rounded-full text-gray-500 hover:text-black border border-gray-300 transition w-36 textcolor">
          Blog
        </button>
      </div>
    </header>
  );
};

export default Header2;
