import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import BasketItem from "./BasketItem";
import { useStateValue } from "../StateProvider";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    basket.map((item) => {
      totalPrice += Number(item.price);
    });
    return totalPrice;
  };

  const totalPrice = calculateTotalPrice();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items)
              <strong> ${totalPrice}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;