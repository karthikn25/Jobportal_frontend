import React from "react";
import "./Topbar.css";
import logo from "../../Images/JobSearchWebLogo.png";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const navigate = useNavigate();

  const token = sessionStorage.getItem("token")

  
 return (
    <div id="topbar-container">
      <div id="topbar-box">
        <ul id="topbar-details">
          <li id="topbar-logo">
            <img src={logo} alt="logo" />
          </li>
          <li id="topbar-search">
            <input type="text" placeholder="Search" /><i class='bx bx-search-alt-2'></i>
          </li>
          <li id="topbar-nav" onClick={()=>navigate(`/home/${token}`)}>Home</li>
          <li id="topbar-nav" onClick={()=>navigate(`/post/${token}`)}>JobPost</li>
          <li id="mobile-menu"><i class='bx bx-menu' onClick={()=>navigate(`/menu/${token}`)}></i></li>
        </ul>
      </div>
    </div>
  );
}
