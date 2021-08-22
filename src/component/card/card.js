import React from 'react';
import './style.css';

const Card = ({ moster }) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${moster.id}?set=set2&size=180x180`}
        alt="img"
      />
      <h2>{moster.name}</h2>
      <p>{moster.email}</p>
    </div>
  );
};
export default Card;
