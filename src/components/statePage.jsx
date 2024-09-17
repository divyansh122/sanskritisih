import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import getImage from "../states/imageMapper";
import statesData from "../states/states.json";
import Card from "./Card";
import { selectStateCards } from "../store/stateCardSlice";
import { addToCart } from "../store/productSlice";

const StatePage = () => {
  const { stateId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Use dispatch for Redux actions

  const state = statesData.find((state) => state.id === stateId);
  const stateCards = useSelector(selectStateCards);
  const cardsForState =
    stateCards.find((card) => card.stateId === stateId)?.cards || [];

  if (!state) return <div>State not found</div>;

  const {
    name,
    imageName,
    description,
    capital,
    language,
    area,
    population,
    products,
  } = state;

  const imageUrl = getImage(imageName);

  const handleMapsClick = () => {
    navigate("/maps");
  };

  const handleShopClick = () => {
    window.location.href = "https://shop.sanskriti.pushkarverma.dev/";
  };

  const handleBuyNowClick = (product) => {
    dispatch(addToCart(product)); // Dispatch action to add product to cart
    navigate("/cart"); // Navigate to cart page
  };

  return (
    <div className="w-full">
      <div className="relative w-full h-96 mb-8">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        <h1 className="absolute inset-0 flex items-center justify-center text-7xl font-bold text-white bg-black bg-opacity-50 p-4 rounded-lg">
          {name}
        </h1>
      </div>
      <div className="py-8 px-4 max-w-4xl mx-auto">
        <p className="text-lg mb-4">{description}</p>
        <div className="text-lg mb-2">
          <strong className="textcolor details">Capital:</strong> {capital}
        </div>
        <div className="text-lg mb-2">
          <strong className="textcolor">Language:</strong> {language}
        </div>
        <div className="text-lg mb-2">
          <strong className="textcolor">Area:</strong> {area}
        </div>
        <div className="text-lg mb-8">
          <strong className="textcolor">Population:</strong> {population}
        </div>
        <section className="text-center py-8 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-3xl font-extrabold mb-6 text-gray-800">
            Explore
          </h2>
          <div className="flex justify-center space-x-6">
            <button
              onClick={handleMapsClick}
              className="colorcustom text-white py-3 px-6 rounded-full  transition duration-300 transform hover:scale-105"
            >
              Go to Maps
            </button>
            <button
              onClick={handleShopClick}
              className=" colorcustom2  border-2 py-3 px-6 rounded-full  transition duration-300 transform hover:scale-105"
            >
              Shop
            </button>
          </div>
        </section>
        {/* Main title for cards */}
        <h2 className="text-2xl font-bold mb-6 mt-4 textcolor">
          Heritage Sites
        </h2>

        {/* Render the row of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {cardsForState.map((card, index) => (
            <Card
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              description={card.description}
              link="#"
              className="bg-white p-4 shadow-lg rounded-lg h-64"
            />
          ))}
        </div>

        {/* New Section for Products */}
        <h2 className="text-2xl font-bold mb-6 textcolor">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 shadow-lg rounded-lg">
              <img
                src={getImage(product.image)}
                alt={product.name}
                className="w-full h-40 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-lg mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">{product.price}</span>
                <button
                  onClick={() => handleBuyNowClick(product)} // Pass the product object
                  className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition duration-300 colorcustom"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Inline Buttons */}
      </div>
    </div>
  );
};

export default StatePage;
