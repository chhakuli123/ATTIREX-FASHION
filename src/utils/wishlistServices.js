import axios from "axios";

const getWishlist = async (token) => {
  try {
    const response = await axios.get("/api/user/wishlist", {
      headers: {
        authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const addToWishlist = async (token, product) => {
  try {
    const response = await axios.post(
      "/api/user/wishlist",
      { product },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const removeFromWishlist = async (token, productId) => {
  try {
    const response = await axios.delete(`/api/user/wishlist/${productId}`, {
      headers: {
        authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export { getWishlist, addToWishlist, removeFromWishlist };
