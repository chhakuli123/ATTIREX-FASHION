import { createContext, useReducer, useContext } from "react";

import { cartReducer } from "reducer";
import { useAuth } from "./authContext";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_CART,
  addToCart,
  getCart,
  removeFromCart,
} from "utils";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const { token } = useAuth();

  // Define the initial state for the cart
  const initialState = {
    cart: [],
  };

  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);

  const fetchCart = async () => {
    try {
      const response = await getCart(token);
      const { data } = response;
      cartDispatch({ type: SET_CART, payload: data.cart });
    } catch (error) {
      console.error("Fetch Wishlist Error:", error);
    }
  };

  const addToCartHandler = async (product) => {
    try {
      await addToCart(token, product);
      cartDispatch({
        type: ADD_TO_CART,
        payload: product,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromCartHandler = async (productId) => {
    try {
      await removeFromCart(token, productId);
      cartDispatch({ type: REMOVE_FROM_CART, payload: productId });
    } catch (error) {
      console.log(error);
    }
  };

  // Provide the cartState and cartDispatch to the components in the tree
  return (
    <CartContext.Provider
      value={{
        cartState,
        fetchCart,
        cartDispatch,
        addToCartHandler,
        removeFromCartHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to access the CartContext
const useCart = () => useContext(CartContext);

export { useCart, CartContextProvider };
