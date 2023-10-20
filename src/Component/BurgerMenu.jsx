import React from "react";
import { Link } from "react-router-dom";
import logoHeaderDark from "../image/logo-dark.svg";
import crossMenu from "../image/cross-menu.svg";

import "../styles"; 
const BurgerMenu = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="BurgerMenu-container">
          <div className="BurgerMenu-content">
            <div className="header-list">
              <img
                src={logoHeaderDark}
                alt="logo-header"
                className="header-list-li"
              />
              <button onClick={onClose} className="switch-button">
                <img
                  src={crossMenu}
                  alt="cross-menu"
                  style={{ width: "50px" }}
                />
              </button>
            </div>
            <ul>
              <Link to="/" className="link-dropdown-header-menu-list">
                Home
              </Link>
              <Link to="/product" className="link-dropdown-header-menu-list">
                Product
              </Link>
              <Link to="/aboutUs" className="link-dropdown-header-menu-list">
                About
              </Link>
              <Link to="/contact" className="link-dropdown-header-menu-list">
                Contact
              </Link>
              <button className="button-header">Learn More</button>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default BurgerMenu;
