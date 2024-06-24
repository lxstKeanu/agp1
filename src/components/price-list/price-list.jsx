/** @format */

import React from "react";
import "./price-list.css";

function PriceList({
  cardName,
  cardDescription,
  price,
  cardText1,
  cardText2,
  cardText3,
  cardText4,
  cardText5,
  cardText6,
  cardText7,
}) {
  return (
    <div className="card">
      <span className="card-name">{cardName}</span>
      <span className="card-description">{cardDescription}</span>
      <span className="card-price">{price}</span>
      <ul className="card-ul">
        <li className="card-ul-text">{cardText1}</li>
        <li className="card-ul-text">{cardText2}</li>
        <li className="card-ul-text">{cardText3}</li>
        <li className="card-ul-text">{cardText4}</li>
        <li className="card-ul-text">{cardText5}</li>
        {/* <li className="card-ul-text">{cardText6}</li> */}
        <li className="card-ul-text">{cardText7}</li>
      </ul>
    </div>
  );
}

export default PriceList;
