import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faShoppingCart,
  faAngleDown,
  faQuestion,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/img/logos.png";

function Header(props) {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu">
        <div className="search">
          <input
            type="text"
            placeholder="search for kitchen utensils"
            name="search"
          />
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="menu-bar">
          <FontAwesomeIcon icon={faUser} />
          <div className="user-access">
            <div>
              <Link to="/"> Sign in</Link>
            </div>
            <div>
              <Link to="/">Sign up</Link>
            </div>
          </div>
        </div>
        <div className="menu-bar">
          <FontAwesomeIcon icon={faQuestion} />
          <div className="menu-link">
            <Link to="/">Help</Link>
          </div>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
        <div className="menu-bar mobile">
          <FontAwesomeIcon icon={faShoppingCart} />
          <div className="menu-link">
            <Link to="/">Cart</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
