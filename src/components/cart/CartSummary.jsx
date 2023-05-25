import React from "react";
import { useNavigate } from "react-router-dom";

import { SellOutlinedIcon } from "assets";

const CartSummary = ({
  cart,
  quantity,
  setShowCouponModal,
  isCouponApplied,
  coupon,
}) => {
  const navigate = useNavigate();

  //total MRP
  const totalMrp = cart.reduce(
    (total, product) => total + product.price * quantity,
    0
  );

  // Calculate the total price with discount and coupon
  const totalPrice = totalMrp - 500 - (isCouponApplied ? coupon : 0);

  // Calculate the discount based on the quantity
  const discountedPrice = 500 + (quantity - 1) * 500;

  const handleCheckout = () => {
    navigate("/checkout", {
      state: {
        quantity,
        totalPrice,
        totalMrp,
        discountedPrice,
        isCouponApplied,
        coupon,
      },
    });
  };
  return (
    <div className="cart-summary">
      <div className="cart-summary-right">
        <div className="coupon-container">
          <button
            className="coupon-apply-btn"
            onClick={() => setShowCouponModal(true)}
          >
            <span className="apply-coupon-icon">
              <SellOutlinedIcon />
            </span>
            Apply Coupon
          </button>
        </div>
        <div className="price-details">
          <p className="price-detail-row">
            <span>Price Details:</span> <span>({cart.length} items)</span>
          </p>
          <p className="price-detail-row">
            <span>Total MRP:</span>
            <span>₹{totalMrp}</span>
          </p>
          <p className="price-detail-row">
            <span>Discount:</span> <span>- ₹{discountedPrice}</span>
          </p>

          {isCouponApplied && (
            <p className="price-detail-row">
              <span>Applied Coupon:</span>
              <span>₹{coupon}</span>
            </p>
          )}

          <p className="price-detail-row">
            <span>Delivery Charges:</span>
            <span className="delivery-charges">Free</span>
          </p>
          <hr />
          <p className="price-detail-row total-amount">
            <span>Total Amount:</span> <span>₹{totalPrice}</span>
          </p>
        </div>

        <button className="checkout-btn" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export { CartSummary };
