import { useContext } from "react";
import { createContext, useReducer } from "react";
import { wishlistReducer } from "reducer";

const WishlistContext = createContext();

const initialState = {
  wishlist: [],
};
const WishlistContextProvider = ({ children }) => {
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
const useWishlist = () => useContext(WishlistContext);

export { useWishlist, WishlistContextProvider };
