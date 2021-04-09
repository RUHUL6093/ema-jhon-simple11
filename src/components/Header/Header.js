import React from "react";
import logo from "../../images/logo.png";
import "./header.css";

const Header = () => {
  return (
    <div class="header">
      <img src={logo} alt="" />
      <nav>
        <a href="/shop"> Shop </a>

        <a href="/review"> Manage Review </a>

        <a href="/inventory"> Manage inventory </a>
      </nav>
    </div>
  );
};
export default Header;
