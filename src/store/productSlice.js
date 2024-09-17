import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [], // Initial product state
  cart: [], // Cart to hold selected products
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    addToCart(state, action) {
      state.cart.push(action.payload); // Add product to cart
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id); // Remove product from cart
    },
    clearCart(state) {
      state.cart = []; // Clear all products from cart
    },
  },
});

export const { setProducts, addToCart, removeFromCart, clearCart } =
  productSlice.actions;
export const selectProducts = (state) => state.products.products;
export const selectCart = (state) => state.products.cart;
export default productSlice.reducer;
