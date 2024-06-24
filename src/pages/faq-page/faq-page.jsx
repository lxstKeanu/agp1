/** @format */

import React, { useState, useEffect } from "react";
import Header from "../../components/heder/heder";
import PriceList from "../../components/price-list/price-list";
import MainInfo from "../../components/main-info/main-info";
import Footer from "../../components/footer/footer";
import { ReactComponent as Telegram } from "../../images/telegram.svg";
import { ReactComponent as Instagram } from "../../images/instagram.svg";
import { ReactComponent as Whatsapp } from "../../images/whatsapp.svg";
import { useTranslation } from "react-i18next";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./faq-page.css";
import "./media.css";

function FaqPage() {
  const { t } = useTranslation();

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isSmallScreen = width < 1024;

  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 2 },
  };

  const items = [
    <div className="item" data-value="1" key="1">
      <PriceList
        cardName={t("LifeStyle")}
        cardDescription={t("card-text")}
        price="150 €"
        cardText1={t("card-lifestyle-description-1")}
        cardText2={t("card-lifestyle-description-2")}
        cardText3={t("card-lifestyle-description-3")}
        cardText4={t("card-lifestyle-description-4")}
        cardText5={t("card-lifestyle-description-5")}
        cardText6={t("card-lifestyle-description-6")}
        cardText7={t("card-lifestyle-description-7")}
      />
    </div>,
    <div className="item" data-value="2" key="2">
      <PriceList
        cardName={t("Studio")}
        cardDescription={t("card-text")}
        price="100 €"
        cardText1={t("card-studio-description-1")}
        cardText2={t("card-studio-description-2")}
        cardText3={t("card-studio-description-3")}
        cardText4={t("card-studio-description-4")}
        cardText5={t("card-studio-description-5")}
        cardText6={t("card-studio-description-6")}
        cardText7={t("card-studio-description-7")}
      />
    </div>,
  ];

  return (
    <div>
      <Header />
      <div className="wrapper-card container">
        {isSmallScreen ? (
          <AliceCarousel
            mouseTracking={isSmallScreen}
            items={items}
            responsive={responsive}
            controlsStrategy="responsive"
            disableButtonsControls={true}
            keyboardNavigation={!isSmallScreen}
          />
        ) : (
          items?.map((item) => <div key={item.key}>{item}</div>)
        )}
      </div>
      <div className="container">
        <div className="upper-text-description">
          <span className="upper-text-info-main">{t("main-thanks")}</span>
          <div className="main-block-text">
            <span className="upper-text-info">
              {t("main-thanks-description")}
            </span>
            <span className="upper-text-info">
              {t("main-thanks-description-1")}
            </span>
          </div>
          <a
            href="https://instagram.com/alesia__ag/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link d-inline"
          >
            <div className="btn-insta">
              <div className="btn-insta-text">{t("btn-1")}</div>
            </div>
          </a>
        </div>
        <MainInfo />
        <div className="bottom-information">
          <span className="bottom-information-text">{t("footer-text")}</span>
          <div className="btn-social">
            <div className="btn-social-text">{t("footer-btn-text")}</div>
            <div className="btn-social-icons">
              <a
                href="https://t.me/alesia_ag"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Telegram />
              </a>
              <a
                href="https://instagram.com/alesia__ag/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Instagram />
              </a>
              <a
                href="https://wa.me/+380957628437"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Whatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FaqPage;
