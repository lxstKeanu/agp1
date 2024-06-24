/** @format */

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoag from "../../images/agp1.jpg";
import LanguageSelect from "../languageSelect";
import { useTranslation } from "react-i18next";
import "./header.css";

export default function Header() {
  const { t } = useTranslation();

  const [close, setClose] = useState(false);
  const handleOpenMenu = () => {
    setClose(!close);
  };

  return (
    <div>
      <div className="header">
        <div className="logo">
          <div className="logo-ag"></div>
          <NavLink className={"nav-link"} to="/">
            <img
              className="logo-ag-photo"
              src={logoag}
              alt=" logo Alesia AG Photographer"
            />
            <span className="logo-name">Alesia AG Photographer</span>
          </NavLink>
        </div>
        <div className="hamburger-menu" onChange={handleOpenMenu}>
          <input id="menu__toggle" type="checkbox" />
          <label
            className={`${close ? "menu__btn-open" : "menu__btn"}`}
            htmlFor="menu__toggle"
          >
            <span></span>
          </label>
          <div className="header-modal">
            <ul className="menu__box">
              <li>
                <NavLink className="menu__item" to="/faq">
                  <span>{t("Faq")}</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="menu__item" to="/about-me">
                  <span>{t("About me")}</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="menu__item" to="/my-works">
                  <span>{t("My works")}</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <LanguageSelect />
      </div>
    </div>
  );
}
