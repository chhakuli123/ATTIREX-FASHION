import { createContext, useReducer, useContext } from "react";
import { wishlistReducer } from "reducer";

const WishlistContext = createContext();

const WishlistContextProvider = ({ children }) => {
  // Set the initial state for the wishlist context
  const initialState = {
    wishlist: [],
  };

  // Use the wishlistReducer and initialState with useReducer to manage the state
  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducer,
    initialState
  );

  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Custom hook to consume the WishlistContext
const useWishlist = () => useContext(WishlistContext);

export { useWishlist, WishlistContextProvider };
