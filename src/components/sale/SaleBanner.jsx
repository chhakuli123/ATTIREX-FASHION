import React from "react";
import "./salebanner.css";
import { useNavigate } from "react-router-dom";
import { useFilter } from "context";

const SaleBanner = () => {
  const {dispatch}=useFilter()
  const navigate=useNavigate()
  return (
    <div class="sale">
      <div class="sale-title">
        <h2> SALE</h2>
      </div>
      <div class="sale-block-note">The most awaiting sale is here to elevate your wardrobe.</div>
      <div class="sale-image-grid">
        <img
          src="https://res.cloudinary.com/dptfwcnro/image/upload/v1683903022/E-comm%20ATTIREX/Sale-Banner-1_mzj7ko.gif"
          alt="Sale-Banner-1"
          onClick={() => {
            dispatch({ type: "CLEAR_FILTERS" });
            navigate("/products");
          }}
        />
        <img
          src="https://res.cloudinary.com/dptfwcnro/image/upload/v1683903949/E-comm%20ATTIREX/Sale-Banner-2_rifmbx.jpg"
          alt="Sale-Banner-2"
          onClick={() => {
            dispatch({ type: "CLEAR_FILTERS" });
            navigate("/products");
          }}
        />
        <img
          src="https://res.cloudinary.com/dptfwcnro/image/upload/v1683903950/E-comm%20ATTIREX/Sale-Banner-3_si788m.jpg"
          alt="Sale-Banner-3"
          onClick={() => {
            dispatch({ type: "CLEAR_FILTERS" });
            navigate("/products");
          }}
        />
      </div>
    </div>
  );
};

export { SaleBanner };
