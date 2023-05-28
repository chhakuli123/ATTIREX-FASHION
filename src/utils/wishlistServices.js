import axios from "axios";

const getWishlist = async (token) => {
  try {
    const response = await axios.get("/api/user/wishlist", {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
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
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
};

const removeFromWishlist = async (token, productId) => {
  try {
    const response = await axios.delete(`/api/user/wishlist/${productId}`, {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
};

export { getWishlist, addToWishlist, removeFromWishlist };
