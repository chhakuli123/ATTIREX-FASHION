import React from "react";
import { toast } from  "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { useCart, useWishlist } from "context";
import { ADD_TO_WISHLIST, REMOVE_FROM_CART } from "utils";

const CartItem = ({ product, quantity, setQuantity }) => {
  const navigate = useNavigate();
  const { cartDispatch } = useCart();
  const { wishlistState,wishlistDispatch } = useWishlist();
  const { wishlist } = wishlistState;

  // Decrease the quantity of the cart item
  const decreaseQuantity = (e) => {
    e.stopPropagation();
    if (quantity === 1) {
      return; // Do nothing if the quantity is already 1
    }
    setQuantity((prev) => prev - 1);
    toast.success("Quantity Decreased!");
  };
  

  // Increase the quantity of the cart item
  const increaseQuantity = (e) => {
    e.stopPropagation();
    setQuantity((prev) => prev + 1);
    toast.success("Quantity Increased!");
  };

  // Handle the click on the "Wishlist" button
  const handleWishlistClick = (e) => {
    e.stopPropagation();
    if (isProductInWishlist) {
        navigate("/wishlist");
        toast.success("Already in Wishlist");
      } else {
        wishlistDispatch({
          type: ADD_TO_WISHLIST,
          payload: product,
        });
        toast.success("Added to Wishlist");
      }
  };

  // Handle the click on the "Remove" button
  const handleRemoveFromCart = (e) => {
    e.stopPropagation();
    cartDispatch({
      type: REMOVE_FROM_CART,
      payload: product._id,
    });
    toast.success("Item removed from cart");
  };

  const isProductInWishlist = wishlist.some((item) => item._id === product._id);

  return (
    <div
      className="cart-item"
      key={product._id}
      onClick={() => navigate(`/productDetails/${product._id}`)}
    >
      <div className="cart-item-image">
        <img src={product?.image} alt={product?.name} />
      </div>
      <div className="cart-item-details">
        <h3 className="cart-item-name">{product?.name}</h3>
        <div className="cart-price">
          <p className="cart-item-price">₹{product?.price}</p>
          <p className="cart-item-original-price">₹{product?.originalPrice}</p>
        </div>
        <div className="quantity">
          <button onClick={decreaseQuantity}>-</button>
          {quantity}
          <button onClick={increaseQuantity} disabled={quantity === 6}>+</button>
        </div>
        <div className="cart-summary-buttons">
          <button
            className="cart-summary-btn"
            onClick={handleWishlistClick}
          >
            {isProductInWishlist ? "Already In Wishlist" : "Add To Wishlist"}
          </button>
          <button
            className="cart-summary-btn"
            onClick={handleRemoveFromCart}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export { CartItem };
