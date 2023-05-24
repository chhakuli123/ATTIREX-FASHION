import React from "react";

const OrderDetails = ({ cart, quantity }) => {
  return (
    <>
      <h2 className="section-title">Order Details</h2>
      <div className="order-details-container">
        <div className="ordered-items">
          {cart.map((item) => (
            <div className="order-items" key={item.id}>
              <div className="item-order-details">
                <p className="item-name">Name: {item.name}</p>
                <p className="item-quantity">Quantity: {quantity}</p>
                <p className="item-price">Price: {item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export { OrderDetails };
