import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { logo } from "../assets/images/images";
import LoginSignupModal from "./login";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart } from "../store/productSlice";

const Header1 = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isLoginMode, setLoginMode] = useState(true);
  const cartItems = useSelector(selectCart); // Get cart items from the store

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

  return (
    <header className="flex justify-between items-center py-4 px-8 bg-white shadow-sm relative z-100">
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-black">
          <GiHamburgerMenu />
        </button>
      </div>

      <div
        className="flex-grow flex justify-center items-center"
        style={{ marginLeft: "250px" }}
      >
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>
      </div>

      <div className="flex items-center space-x-6">
        <button className="text-gray-600 hover:text-black transition">
          About
        </button>
        <button className="text-gray-600 hover:text-black transition">
          FAQs
        </button>
        <button
          className="text-gray-600 hover:text-black transition"
          onClick={openLogin}
        >
          Login
        </button>
        <button
          onClick={openSignup}
          className="text-gray-600 hover:text-black transition  py-2 px-4 rounded-full"
        >
          Sign Up
        </button>
        <Link to="/cart">
          <button className="relative text-gray-600 hover:text-black transition py-2 px-4 rounded-full">
            <FaShoppingCart />
            {/* Badge for cart item count */}
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </button>
        </Link>
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
