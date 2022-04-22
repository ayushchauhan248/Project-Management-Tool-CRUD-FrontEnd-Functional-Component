import "./Sidebar.css";
import { Link } from "react-router-dom";
import { MdCreateNewFolder } from "react-icons/md";
import { ImHome } from "react-icons/im";
import { RiLogoutBoxFill } from "react-icons/ri";
import React, { memo } from "react";

const Sidebar = (props) => {
  return (
    <div id="sidebar">
      <div id="uul">
        <Link to="/dashboard" id="llnk" className="doFlex">
          <ImHome id="llii"></ImHome>
          <div id="lli">DASHBOARD</div>
        </Link>

        <Link to="/create" id="llnk" className="doFlex">
          <MdCreateNewFolder id="llii"></MdCreateNewFolder>
          <div id="lli">CREATE</div>
        </Link>

        <Link to="/" id="llnk" className="doFlex">
          <RiLogoutBoxFill id="llii"></RiLogoutBoxFill>
          <div id="lli">LOGOUT</div>
        </Link>
      </div>
    </div>
  );
};
export default memo(Sidebar);
