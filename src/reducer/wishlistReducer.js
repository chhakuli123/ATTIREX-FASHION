import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, SET_WISHLIST } from "utils";

const wishlistReducer = (state, action) => {
  switch (action.type) {
    case SET_WISHLIST:
      return {
        ...state,
        wishlist: action.payload,
      };

    case ADD_TO_WISHLIST:
      const { payload } = action;

      const isAlreadyInWishlist = state.wishlist.some(
        (item) => item._id === payload._id
      );

      if (isAlreadyInWishlist) {
        return state;
      }

      const updatedWishlist = [...state.wishlist, payload];

      return {
        ...state,
        wishlist: updatedWishlist,
      };

    case REMOVE_FROM_WISHLIST:
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
