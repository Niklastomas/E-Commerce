import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import "./Header.css";
import { auth } from "../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

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

        <i className="fas fa-search"></i>
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuth} className="header__option">
            <span>Hello {user ? user.email : "Guest"}</span>

            <h3>{user ? "Sign Out" : "Sign In"}</h3>
          </div>
        </Link>

        <div className="header__option">
          <Link to="/orders">
            <span>returns</span>
            <h3>& Orders</h3>
          </Link>
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
