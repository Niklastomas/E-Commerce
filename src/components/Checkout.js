import React from "react";
import { useStateValue } from "../StateProvider";
import BasketItem from "./BasketItem";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <h2 className="checkout__title">Shopping Basket</h2>
        {basket.length > 0 ? (
          basket.map((item, index) => (
            <BasketItem
              key={index}
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              rating={item.rating}
            />
          ))
        ) : (
          <h3>Your shopping basket is empty</h3>
        )}
      </div>

      <div className="checkout__right">
        <h2 className="checkout__title">The subtotal</h2>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
