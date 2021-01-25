import "./sidebar.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import firebase from "firebase";
export default function Sidebar() {
  const [w, setW] = useState(window.innerWidth);
  const [e, setE] = useState("");

  const handleResize = () => {
    setW(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);
  useEffect(() => {
    if (w < 800) {
      setE("");
    } else {
      setE("h");
    }
  }, [w]);
  const [xPosition, setX] = React.useState(-300);
  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
    } else {
      setX(-150);
    }
  };

  React.useEffect(() => {
    setX(-150);
  }, []);

  return (
    <React.Fragment>
      <div
        style={{
          transform: `translatex(${xPosition}px)`,
        }}
        className={`sidebar ${e}`}
      >
        <button
          onClick={() => toggleMenu()}
          className="toggle-menu"
          style={{
            transform: `translate(300px, 80px)`,
          }}
        ></button>
        <div className="content">
          <NavLink exact to="/" activeClassName="activeSide">
            Home
          </NavLink>
          <NavLink exact to="/Clothes" activeClassName="activeSide">
            Clothes
          </NavLink>
          <NavLink exact to="/Shoes" activeClassName="activeSide">
            Shoes
          </NavLink>
          <NavLink exact to="/Accessories" activeClassName="activeSide">
            Accessories
          </NavLink>
          <NavLink exact to="/AccountInformation" activeClassName="activeSide">
            Profile
          </NavLink>
          <NavLink exact to="/ShoppingCart" activeClassName="activeSide">
            Shopping Cart
          </NavLink>
          <NavLink exact to="/Favorites" activeClassName="activeSide">
            Favorites
          </NavLink>
        </div>
      </div>
    </React.Fragment>
  );
}
