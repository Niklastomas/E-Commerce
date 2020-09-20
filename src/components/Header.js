import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <i className="fas fa-store"></i>
        <h2>E-Commerce</h2>
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
          <i class="fas fa-shopping-cart">
            <span>0</span>
          </i>
        </div>
      </div>
    </div>
  );
}

export default Header;
