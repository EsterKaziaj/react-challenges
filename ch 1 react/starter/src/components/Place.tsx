import React from 'react';

interface PlaceProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Place: React.FC<PlaceProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="place" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="place-overlay">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Place;
