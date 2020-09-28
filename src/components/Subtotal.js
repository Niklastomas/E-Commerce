import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import BasketItem from "./BasketItem";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  const calculateTotalPrice = () => {
    let totalPrice = 0;

    basket.map((item) => (totalPrice += Number(item.price)));

    return Number(totalPrice.toFixed(2));
  };

  const totalPrice = calculateTotalPrice();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items)
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={totalPrice}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button
        disabled={basket.length < 1 && "true"}
        className={basket.length < 1 ? "button__disable" : "button__active"}
        onClick={() => history.push("/payment")}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
