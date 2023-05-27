import React, { createContext, useReducer, useContext } from "react";

import { wishlistReducer } from "reducer";
import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  SET_WISHLIST,
  addToWishlist,
  getWishlist,
  removeFromWishlist,
} from "utils";
import { useAuth } from "./authContext";

const WishlistContext = createContext();

const WishlistContextProvider = ({ children }) => {
  const { token } = useAuth();

  // Set the initial state for the wishlist context
  const initialState = {
    wishlist: [],
  };

  // Use the wishlistReducer and initialState with useReducer to manage the state
  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducer,
    initialState
  );

  const fetchWishlist = async () => {
    try {
      const response = await getWishlist(token);
      const { data } = response;
      wishlistDispatch({ type: SET_WISHLIST, payload: data.wishlist });
    } catch (error) {
      console.error("Fetch Wishlist Error:", error);
    }
  };

  const addToWishlistHandler = async (product) => {
    try {
      await addToWishlist(token, product);
      wishlistDispatch({
        type: ADD_TO_WISHLIST,
        payload: product,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromWishlistHandler = async (productId) => {
    try {
      await removeFromWishlist(token, productId);
      wishlistDispatch({ type: REMOVE_FROM_WISHLIST, payload: productId });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistState,
        fetchWishlist,
        addToWishlistHandler,
        removeFromWishlistHandler,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

// Custom hook to consume the WishlistContext
const useWishlist = () => useContext(WishlistContext);

export { WishlistContextProvider, useWishlist };
