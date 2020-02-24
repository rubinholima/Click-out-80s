import React from "react";
import "./header.css";

const Header = () => (
  <div className="container">
    <div className="jumbotron bg text-center">
      <h1 className="logo">Arcade Time!</h1>
      <p className="desc">
        Click on a character to earn points, if you click the same character
        twice you lose!
      </p>
    </div>
  </div>
);

export default Header;
