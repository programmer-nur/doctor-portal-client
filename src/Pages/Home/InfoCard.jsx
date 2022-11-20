import React from "react";

const InfoCard = ({ card }) => {
  const { bgClass, icon, name, des } = card;

  return (
    <div
      className={`card card-side rounded-xl text-white px-3  shadow-xl ${bgClass}`}
    >
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{des}</p>
      </div>
    </div>
  );
};

export default InfoCard;
