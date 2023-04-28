import "../Header/Header.scss";
import logo from "../../../assets/logo.svg";
import user from "../../../assets/User.svg";
import burgerMenu from "../../../assets/Burger Menu.svg";
import React, { useState } from "react";

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
          <a href="#" className="nav-link">
            Marketplace
          </a>
          <a href="#" className="nav-link">
            Rankings
          </a>
          <a href="#" className="nav-link">
            Connect a wallet
          </a>
          <button>
            <img src={user} alt="user/logo" />
            Sign Up
          </button>
        </div>
        <button onClick={() => handleBurgerIsOpen()} className="burger-menu">
          <img src={burgerMenu} alt="burger menu" />
        <div className={isOpen ? "burgerMenuIsVisible" : "burgerMenuIsClosed"}>
          <nav>
          <a href="#" className="nav-link">
            Marketplace
          </a>
          <a href="#" className="nav-link">
            Rankings
          </a>
          <a href="#" className="nav-link">
            Connect a wallet
          </a>
          </nav>
        </div>
        </button>
      </div>
    </header>
  );
};
