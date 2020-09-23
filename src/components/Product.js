import React from "react";
import { useStateValue } from "../StateProvider";
import "./Product.css";

function Product({ id, name, price, rating, image }) {
  // const getRating = (rating) => {
  //   let ratings = [];
  //   for (let i = 0; i < rating; i++) {
  //     ratings.push(<p>⭐</p>);
  //   }
  //   return ratings;
  // };

  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        name,
        price,
        rating,
        image,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{name}</p>
        <p className="prodcuts__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt={image} />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
