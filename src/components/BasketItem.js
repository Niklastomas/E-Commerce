import React, { forwardRef } from "react";
import { useStateValue } from "../StateProvider";
import "./BasketItem.css";

function BasketItem({ id, name, price, image, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  // const getRating = (rating) => {
  //   let ratings = [];
  //   for (let i = 0; i < rating; i++) {
  //     ratings.push(<p>⭐</p>);
  //   }
  //   return ratings;
  // };

  return (
    <div className="basketItem">
      <img src={image} alt="" />
      <div className="basketItem__info">
        <p>{name}</p>
        <p className="basketItem__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="basketItem__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from basket</button>
        )}
      </div>
    </div>
  );
}

export default BasketItem;
