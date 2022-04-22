import "./Navbar.css";
import { CgProfile } from "react-icons/cg";
import React from "react";
import { Link } from "react-router-dom";
import { memo } from "react";

const Navbar = (props) => {
  return (
    <div id="nav">
      <div id="left">
        <img
          id="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEMlXG0H88o88hkRIK5vuAgYO57TCcGzczg&usqp=CAU"
          alt="LOGO"
        />
        <span id="brand">PROMAN</span>
      </div>
      <div id="iconDiv">
        <Link to="/myProfile" id="myProfile">
          <CgProfile id="icon"></CgProfile>
        </Link>
      </div>
    </div>
  );
};

export default memo(Navbar);
