import React, { useState } from "react";
import "./new-card.css";
import CardBox from "../cardBox/CardBox";
import { Link } from "react-router-dom";
import { cards } from "../cardBox/data";

export default function NewCard() {
  const [activeCard, setActiveCard] = useState("bitcoin");

  const handleCardClick = (type) => {
    setActiveCard(type);
  };

  return (
    <div className="card">
      <div className="container">
        <h2>E-Wallet</h2>
        <div className="content">
          <p>ACTIVE CARD</p>
          {cards.map((card, index) => (
            <CardBox
              key={index}
              type={card.type}
              isActive={activeCard === card.type}
              onClick={() => handleCardClick(card.type)}
              index={index}
            />
          ))}
        </div>
        <Link to={"/add-card"}>
          <button className="white-btn">ADD A NEW CARD</button>
        </Link>
      </div>
    </div>
  );
}
