import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import "./Header.css";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/" className="header__link">
          <i className="fas fa-store"></i>
          <h2>E-Commerce</h2>
        </Link>
      </div>
      <div className="header__search">
        <input type="text"></input>

        <i class="fas fa-search"></i>
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span>Hello</span>
          <h3>Sign In</h3>
        </div>
        <div className="header__option">
          <span>returns</span>
          <h3>& Orders</h3>
        </div>
        <div className="header__option">
          <Link to="/checkout" className="header__link">
            <i class="fas fa-shopping-cart">
              <span>{basket?.length}</span>
            </i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
