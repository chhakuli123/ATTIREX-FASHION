import React from "react";

const PriceDetails = ({
  cart,
  totalMrp,
  discountedPrice,
  isCouponApplied,
  coupon,
  totalPrice,
}) => {
  return (
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
  );
};

export {PriceDetails};
