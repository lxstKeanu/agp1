/** @format */

import React from "react";
import { ReactComponent as IconSakura } from "../../images/sakura-svg.svg";
import { useTranslation } from "react-i18next";
import "./main-info.css";

function MainInfo() {
  const { t } = useTranslation();
  return (
    <div className="text-viewer">
      <div className=" text-widget">
        <div className="icon">
          <IconSakura className="iconSakura" />
          <h2 className="text-widget-main">{t("widget-card-main-1")}</h2>
        </div>
        <h2 className="text-widget-description">
          {t("widget-card-description-1-1")}
        </h2>
        <h2 className="text-widget-description">
          {t("widget-card-description-1-2")}
        </h2>
        <h2 className="text-widget-description">
          {t("widget-card-description-1-3")}
        </h2>
      </div>
      <div className=" text-widget">
        <div className="icon">
          <IconSakura className="iconSakura" />
          <h2 className="text-widget-main">{t("widget-card-main-2")}</h2>
        </div>
        <h2 className="text-widget-description">
          {t("widget-card-description-2-1")}
        </h2>
        <h2 className="text-widget-description">
          {t("widget-card-description-2-2")}
        </h2>
        <h2 className="text-widget-description">
          {t("widget-card-description-2-3")}
        </h2>
      </div>
      <div className=" text-widget">
        <div className="icon">
          <IconSakura className="iconSakura" />
          <h2 className="text-widget-main">{t("widget-card-main-3")}</h2>
        </div>
        <h2 className="text-widget-description">
          {t("widget-card-description-3-1")}
        </h2>
        <h2 className="text-widget-description">
          {t("widget-card-description-3-2")}
        </h2>
      </div>
      <div className=" text-widget">
        <div className="icon">
          <IconSakura className="iconSakura" />
          <h2 className="text-widget-main">{t("widget-card-main-4")}</h2>
        </div>
        <h2 className="text-widget-description">
          {t("widget-card-description-4-1")}
        </h2>
      </div>
      <div className=" text-widget">
        <div className="icon">
          <IconSakura className="iconSakura" />
          <h2 className="text-widget-main">{t("widget-card-main-5")}</h2>
        </div>
        <h2 className="text-widget-description">
          {t("widget-card-description-5-1")}
        </h2>
        <h2 className="text-widget-description">
          {t("widget-card-description-5-2")}
        </h2>
      </div>
      <div className=" text-widget">
        <div className="icon">
          <IconSakura className="iconSakura" />
          <h2 className="text-widget-main">{t("widget-card-main-6")}</h2>
        </div>
        <h2 className="text-widget-description">
          {t("widget-card-description-6-1")}
        </h2>
        <h2 className="text-widget-description">
          {t("widget-card-description-6-2")}
        </h2>
      </div>
      <div className=" text-widget">
        <div className="icon">
          <IconSakura className="iconSakura" />
          <h2 className="text-widget-main">{t("widget-card-main-7")}</h2>
        </div>
        <h2 className="text-widget-description">
          {t("widget-card-description-7-1")}
        </h2>
        <h2 className="text-widget-description">
          {t("widget-card-description-7-2")}
        </h2>
      </div>
      <div className=" text-widget">
        <div className="icon">
          <IconSakura className="iconSakura" />
          <h2 className="text-widget-main">{t("widget-card-main-8")}</h2>
        </div>
        <h2 className="text-widget-description">
          {t("widget-card-description-8-1")}
        </h2>
        <h2 className="text-widget-description">
          {t("widget-card-description-8-2")}
        </h2>
        <h2 className="text-widget-description">
          {t("widget-card-description-8-3")}
        </h2>
      </div>
      <div className=" text-widget">
        <div className="icon">
          <IconSakura className="iconSakura" />
          <h2 className="text-widget-main">{t("widget-card-main-9")}</h2>
        </div>
        <h2 className="text-widget-description">
          {t("widget-card-description-9-1")}
        </h2>
      </div>
      <div className=" text-widget">
        <div className="icon">
          <IconSakura className="iconSakura" />
          <h2 className="text-widget-main">{t("widget-card-main-10")}</h2>
        </div>
        <h2 className="text-widget-description">
          {t("widget-card-description-10-1")}
        </h2>
      </div>
    </div>
  );
}
export default MainInfo;
