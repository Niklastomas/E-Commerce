import React from "react";
import "./Product.css";

function Product({ name, price, rating, image }) {
  const getRating = (rating) => {
    let ratings = [];
    for (let i = 0; i < rating; i++) {
      ratings.push(<p>⭐</p>);
    }
    return ratings;
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{name}</p>
        <p className="prodcuts__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">{getRating(rating)}</div>
      </div>

      <img src={image} alt={image} />

      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
