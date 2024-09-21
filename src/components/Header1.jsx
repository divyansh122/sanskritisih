import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { logo } from "../assets/images/images";
import LoginSignupModal from "./login";
import { Link } from "react-router-dom";
//import { useSelector } from "react-redux";
//import { selectCart } from "../store/productSlice";

const Header1 = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isLoginMode, setLoginMode] = useState(true);

  const openLogin = () => {
    setLoginMode(true);
    setModalVisible(true);
  };

  const openSignup = () => {
    setLoginMode(false);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleShopClick = () => {
    window.location.href = "https://shop.sanskriti.pushkarverma.dev/";
  };

  return (
    <header className="flex justify-between items-center py-4 px-8 bg-white relative z-100 bgcolor">
      {/* Left Side: Hamburger Menu */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-black">
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Center: Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>
      </div>

      {/* Right Side: Buttons */}
      <div className="flex items-center space-x-6">
        <button className="text-gray-600 hover:text-black transition textcolor">
          About
        </button>
        <button className="text-gray-600 hover:text-black transition textcolor">
          FAQs
        </button>
        <button
          className="text-gray-600 hover:text-black transition textcolor"
          onClick={openLogin}
        >
          Login
        </button>
        <button
          onClick={openSignup}
          className="text-gray-600 hover:text-black transition textcolor  rounded-full"
        >
          Sign Up
        </button>

        {/* Shop Button */}
        <button
          onClick={handleShopClick}
          className="border border-gray-300 text-gray-600 hover:text-black transition py-2 px-4 rounded-full textcolor"
        >
          Shop
        </button>

        {/* Uncomment and update the cart button */}
        {/* <Link to="/cart">
          <button className="relative text-gray-600 hover:text-black transition py-2 px-4 rounded-full">
            <FaShoppingCart />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </button>
        </Link> */}
      </div>

      <LoginSignupModal
        isVisible={isModalVisible}
        onClose={closeModal}
        isLoginMode={isLoginMode}
      />
    </header>
  );
};

export default Header1;
