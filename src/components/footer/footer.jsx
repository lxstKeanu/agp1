/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import logoag from "../../images/agp1.jpg";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="logo">
        <div className="logo-ag"></div>
        <NavLink className={"nav-link"} to={"/"}> 
          <img
            className="logo-ag-photo logo-ag-photo-footer"
            src={logoag}
            alt=""
          />
          <span className="footer-logo-name">Alesia AG Photographer</span>
      </NavLink> 
      </div>
      <span className="year-of-creation">©2024</span>
      <a
        className="footer-link"
        href="https://t.me/lxstKeanu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="footer-creator">By lxstKeanu</span>
      </a>
    </footer>
  );
}
export default Footer;
