import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "utils";

const wishlistReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      const { payload } = action;

      // Check if the product is already in the wishlist
      const isAlreadyInWishlist = state.wishlist.some(
        (item) => item._id === payload._id
      );

      // If the item is already in the wishlist, return the current state
      if (isAlreadyInWishlist) {
        return state;
      }

      // Add the item to the wishlist
      const updatedWishlist = [...state.wishlist, payload];

      return {
        ...state,
        wishlist: updatedWishlist,
      };

    case REMOVE_FROM_WISHLIST:
      // Remove the item from the wishlist
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (product) => product._id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export { wishlistReducer };
