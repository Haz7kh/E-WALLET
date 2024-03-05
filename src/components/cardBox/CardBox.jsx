import React from "react";
import { cards } from "./data";

const CardBox = ({ type, isActive, onClick, index }) => {
  const card = cards.find((card) => card.type === type);

  const getTopPosition = () => {
    const baseTop = 18;
    const step = 3;

    return isActive ? "10px" : `${baseTop + index * step}rem`;
  };

  return (
    <div
      className={`card-box ${isActive ? "active" : ""} ${type}`}
      onClick={onClick}
      style={{ top: getTopPosition() }}
    >
      <div className="card-content">
        <div className="logo-content">
          <img src={card.sim} alt="Sim" />
          <img src={card.logo} alt={`${type} logo`} />
        </div>
        <div className="card-number">
          <span style={{ color: card.color }}>{card.number}</span>
        </div>
        <div className="card-info">
          <div className="card-info-title" style={{ color: card.color }}>
            <span>cardholder name</span>
            <span>Valid thru</span>
          </div>
          <div className="card-info-content" style={{ color: card.color }}>
            <span>{card.holder}</span>
            <span>{card.expirationDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBox;
