/*import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clearCart, selectCart } from "../store/productSlice";
import { emptycart } from "../assets/images/images";

const CartPage = () => {
  const cartItems = useSelector(selectCart);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-full py-8 px-4 max-w-4xl mx-auto">
      {cartItems.length === 0 ? (
        <>
          <h1 className="text-xl font-bold mb-6 text-center">
            Your Cart is empty
          </h1>
          <img
            src={emptycart}
            alt="Empty Cart"
            width="50%"
            className="mx-auto"
          />
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white p-4 shadow-lg rounded-lg">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={handleClearCart}
            className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;*/
