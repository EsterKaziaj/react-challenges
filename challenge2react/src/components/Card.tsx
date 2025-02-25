import React from 'react';
import './Card.css';

interface Product {
  name: string;
  price: number;
  gender: string;
  brand: string;
  image: string;
}

const Card: React.FC<{ bike: Product }> = ({ bike }) => {
  return (
    <div className="card">
      <img src={`/images/${bike.image}.png`} alt={bike.name} />
      <div className="card-content">
        <h3>{bike.name}</h3>
        <p>{bike.price} $</p>
      </div>
    </div>
  );
};

export default Card;
