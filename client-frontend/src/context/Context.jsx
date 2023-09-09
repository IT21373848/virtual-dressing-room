// context.jsx

import React, { createContext, useReducer, useContext } from "react";

// Create the CartContext
export const CartContext = createContext();

// Reducer function for handling cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const tempState = state.filter((item) => action.payload._id === item._id);
      if (tempState.length > 0) {
        return state;
      } else {
        return [...state, action.payload];
      }
    case "INCREASE":
      const tempState1 = state.map((item) => {
        if (item._id === action.payload._id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      return tempState1;
    case "DECREASE":
      const tempState2 = state.map((item) => {
        if (item._id === action.payload._id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      return tempState2;
    case "REMOVE":
      const tempState3 = state.filter((item) => item._id !== action.payload._id);
      return tempState3;
    default:
      return state;
  }
};

// Custom hook to use the CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// CartProvider component to wrap your app
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, []);
  const info = { state, dispatch };

  return (
    <CartContext.Provider value={info}>{children}</CartContext.Provider>
  );
};
