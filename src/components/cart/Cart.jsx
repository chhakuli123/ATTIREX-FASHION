import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "./cart.css";
import { AddShoppingCartRoundedIcon } from "assets";

import { useCart } from "context";
import { CartItem, CartSummary, CouponModal } from "components";

const Cart = () => {
  // State variables
  const [quantity, setQuantity] = useState(1); 
  const [coupon, setCoupon] = useState(); 
  const [isCouponApplied, setIsCouponApplied] = useState(false); 
  const [showCouponModal, setShowCouponModal] = useState(false); 

  // Other variables
  const navigate = useNavigate();
  const { cartState } = useCart();
  const { cart } = cartState;

  // Apply the coupon and update the state
  const handleApplyCoupon = () => {
    setIsCouponApplied(true);
    setShowCouponModal(false);
    toast.success("Coupon applied successfully!");
  };

  // Close the coupon modal
  const closeCouponModal = () => {
    setShowCouponModal(false);
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">My Cart</h2>
      {cart.length === 0 ? (
        // Display an empty cart message if the cart is empty
        <div className="cart-empty-message">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-5521508-4610092.png"
            alt=""
          />
          <button
            className="cart-moveto-products"
            onClick={() => navigate("/products")}
          >
            <AddShoppingCartRoundedIcon className="icon" />
            Add Products
          </button>
        </div>
      ) : (
        // Render the cart items and cart summary
        <div className="cart-items-container">
          <div className="cart-items">
            {cart.map(
              (product) =>
                product && (
                  <CartItem
                    key={product._id}
                    product={product}
                    quantity={quantity}
                    setQuantity={setQuantity}
                  />
                )
            )}
          </div>
          <CartSummary
            cart={cart}
            quantity={quantity}
            setShowCouponModal={setShowCouponModal}
            isCouponApplied={isCouponApplied}
            coupon={coupon}
          />
        </div>
      )}

      {/* Render coupon modal */}
      <CouponModal
        showCouponModal={showCouponModal}
        handleApplyCoupon={handleApplyCoupon}
        closeCouponModal={closeCouponModal}
        coupon={coupon}
        setCoupon={setCoupon}
        isCouponApplied={isCouponApplied}
      />
    </div>
  );
};

export { Cart };
