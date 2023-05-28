import axios from "axios";

const getCart = async (token) => {
  try {
    const response = await axios.get("/api/user/cart", {
      headers: { authorization: token },
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

const addToCart = async (token, product) => {
  try {
    const response = await axios.post("/api/user/cart", product, {
      headers: { authorization: token },
    });
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
};

const removeFromCart = async (token, productId) => {
  try {
    const response = await axios.delete(`/api/user/cart/${productId}`, {
      headers: { authorization: token },
    });
    if (response.status) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
};

export { getCart, addToCart, removeFromCart };
