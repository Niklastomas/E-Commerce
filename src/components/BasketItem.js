import React from "react";
import { useStateValue } from "../StateProvider";
import "./BasketItem.css";

function BasketItem({ id, name, price, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: {
        id,
      },
    });
  };

  const getRating = (rating) => {
    let ratings = [];
    for (let i = 0; i < rating; i++) {
      ratings.push(<p>⭐</p>);
    }
    return ratings;
  };

  return (
    <div className="basketItem">
      <img src={image} alt="" />
      <div className="basketItem__info">
        <p>{name}</p>
        <p className="basketItem__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">{getRating(rating)}</div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default BasketItem;
