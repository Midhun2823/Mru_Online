import React, { createContext, useState } from "react";
import all_product from "../Data/AllProduct.js";

export const CategoryContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const CategoryContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  
  const addToCart = (ele) => {
    setCartItems((prev) => ({ ...prev, [ele]: prev[ele] + 1 }));
    console.log(cartItems)
  };
  
  const removeToCart = (ele) => {
    setCartItems((prev) => ({ ...prev, [ele]: prev[ele] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount=0;
    for(const item in cartItems) {
      if(cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item))
        totalAmount =totalAmount + itemInfo.new_price * cartItems[item];
        console.log(totalAmount)
      }
      
    }
    return totalAmount;
  }
  
  const getTotalCartItems = () => {
    let totalItem = 0;
    for(const item in cartItems) {
      if(cartItems[item] >0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem
  }
  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeToCart,
  };
  return (
    <CategoryContext.Provider value={contextValue}>
      {props.children}
    </CategoryContext.Provider>
  );
};

export default CategoryContextProvider;
