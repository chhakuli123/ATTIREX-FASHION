import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { useCart } from "context";
import { AddressSelection } from "./AddressSelection";
import { OrderDetails } from "./OrderDetails";
import { PriceDetails } from "./PriceDetails";
import { DeliveryDetails } from "./DeliveryDetails ";
import { addresses } from "./addresses";
import { handleCheckout } from "./checkoutLogic";

import "./checkout.css";

const Checkout = () => {
  const { cartState } = useCart();
  const { cart } = cartState;
  const location = useLocation();
  const {
    quantity,
    totalPrice,
    totalMrp,
    discountedPrice,
    isCouponApplied,
    coupon,
  } = location.state;
  

  const [selectedAddress, setSelectedAddress] = useState(addresses[0]);

  const handleAddressChange = (event) => {
    const selectedId = parseInt(event.target.value);
    const address = addresses.find((addr) => addr.id === selectedId);
    setSelectedAddress(address);
  };


  const handleCheckoutClick = () => {
    handleCheckout(selectedAddress, totalPrice);
  };

  return (
    <>
      <div className="checkout-heading">
        <h2>Checkout 🎉</h2>
      </div>
      <div className="checkout-container">
      <AddressSelection
          addresses={addresses}
          selectedAddress={selectedAddress}
          handleAddressChange={handleAddressChange}
        />

        <div className="right-order-container">
        <OrderDetails cart={cart} quantity={quantity} />

        <hr />
        <PriceDetails
            cart={cart}
            totalMrp={totalMrp}
            discountedPrice={discountedPrice}
            isCouponApplied={isCouponApplied}
            coupon={coupon}
            totalPrice={totalPrice}
          />
         <hr />
          <DeliveryDetails selectedAddress={selectedAddress} />

          <div className="place-order-container">
            <button className="place-order-button" onClick={handleCheckoutClick}>
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { Checkout };
