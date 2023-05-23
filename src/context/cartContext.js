import { createContext, useReducer, useContext } from "react";
import { cartReducer } from "reducer";

const CartContext = createContext();

// Define the initial state for the cart
const initialState = {
  cart: [],
};

const CartContextProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);

  // Provide the cartState and cartDispatch to the components in the tree
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to access the CartContext
const useCart = () => useContext(CartContext);

export { useCart, CartContextProvider };
