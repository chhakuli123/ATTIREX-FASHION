import { ADD_TO_CART, REMOVE_FROM_CART, SET_CART } from "utils";

const cartReducer = (state, action) => {
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case ADD_TO_CART:
      const { payload } = action;

      const isAlreadyInCart = state.cart.some(
        (item) => item._id === payload._id
      );

      if (isAlreadyInCart) {
        return state;
      }

      const updatedCart = [...state.cart, payload];

      return {
        ...state,
        cart: updatedCart,
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((product) => product._id !== action.payload),
      };

    default:
      return state;
  }
};

export { cartReducer };
