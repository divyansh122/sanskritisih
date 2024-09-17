import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categoriesslice";
import cardsReducer from "./cardSlice";
import stateCardsReducer from "./stateCardSlice";
import productReducer from "./productSlice"; // Add the product slice

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    cards: cardsReducer,
    stateCards: stateCardsReducer,
    products: productReducer, // Add product reducer
  },
  devTools: process.env.NODE_ENV !== "production",
});
