import React from "react";
import "./BasketItem.css";

function BasketItem() {
  return (
    <div className="basketItem">
      <img
        src="https://www.netonnet.se/GetFile/ProductImagePrimary/datorkomponenter/grafikkort/nvidia/gigabyte-geforce-rtx-3080-gaming-oc-10g(1014380)_396632_1_Normal_Large.jpg"
        alt=""
      />
      <div className="basketItem__info">
        <p>Gigabyte Gefore RTX 3080</p>
        <p className="basketItem__price">
          <small>$</small>
          <strong>599.99</strong>
        </p>
        <div className="product__rating">
          <p>⭐</p>
        </div>
        <button>Remove from basket</button>
      </div>
    </div>
  );
}

export default BasketItem;
