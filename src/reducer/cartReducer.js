import { ADD_TO_CART, REMOVE_FROM_CART } from "utils";

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { payload } = action;

      // Check if the product is already in the cart
      const isAlreadyInCart = state.cart.some(
        (item) => item._id === payload._id
      );

      // If the product is already in the cart, return the current state
      if (isAlreadyInCart) {
        return state;
      }

      // If the product is not in the cart, add it to the cart
      const updatedCart = [...state.cart, payload];

      return {
        ...state,
        cart: updatedCart,
      };

    // Remove the product from the cart based on the payload
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((product) => product._id !== action.payload),
      };

    default:
      // For any other action type, return the current state
      return state;
  }
};

export { cartReducer };
