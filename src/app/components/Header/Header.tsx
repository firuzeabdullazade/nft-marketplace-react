import "../Header/Header.scss";
import logo from "../../../assets/logo.svg";
import user from "../../../assets/User.svg";
import burgerMenu from "../../../assets/Burger Menu.svg";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isOpen, setisOpen] = useState(false);

  const handleBurgerIsOpen = () => {
    setisOpen(!isOpen);
  };
  console.log("isOpen", isOpen);

  return (
    <header>
      <div className="navigation">
        <img src={logo} alt="nav/logo" />
        <div className="nav-menu">
          <Link to="marketplace" className="nav-link">
            Marketplace
          </Link>
          <Link to="/" className="nav-link">
            Rankings
          </Link>
          <Link to="/" className="nav-link">
            Connect a wallet
          </Link>
          <Link to="create-account" className="link">
            <button>
              <img src={user} alt="user/logo" />
              Sign Up
            </button>
          </Link>
        </div>
        <button onClick={() => handleBurgerIsOpen()} className="burger-menu">
          <img src={burgerMenu} alt="burger menu" />
          <div
            className={isOpen ? "burgerMenuIsVisible" : "burgerMenuIsClosed"}
          >
            <nav>
              <Link to="marketplace" className="nav-link">
                Marketplace
              </Link>
              <Link to="/" className="nav-link">
                Rankings
              </Link>
              <Link to="/" className="nav-link">
                Connect a wallet
              </Link>
            </nav>
          </div>
        </button>
      </div>
    </header>
  );
};
