import React from "react";
import "./Header.scss";
import logo from "./../../img/Logo.svg";

const Header = () => {
  return (
    <div className="Header">
      <img src={logo} alt="logo" />
      <nav>
        <ul>
          <li>
            <a className="btn" href="">
              Users
            </a>
          </li>
          <li>
            <a className="btn" href="">
              Sign up
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
