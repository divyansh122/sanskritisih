// Card.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/productSlice";

const Cart = ({ imageSrc, title, description, id }) => {
  const dispatch = useDispatch();

  const handleBuyNowClick = () => {
    dispatch(addToCart({ id, imageSrc, title, description }));
  };

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button
        onClick={handleBuyNowClick}
        className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition"
      >
        Buy Now
      </button>
    </div>
  );
};

export default Cart;
