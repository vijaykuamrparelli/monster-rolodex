import React from 'react';
import './style.css';

import Card from 'component/card/card';
const CardList = ({ mosters }) => {
  return (
    <div className="card-list">
      {mosters.map((moster) => (
        <Card key={moster.id} moster={moster} />
      ))}
    </div>
  );
};
export default CardList;
