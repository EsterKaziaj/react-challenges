import React from 'react';
import './DetailsBlock.css';

interface DetailsBlockProps {
  title: string;
  description: string;
  imageUrl: string;
}

const DetailsBlock: React.FC<DetailsBlockProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="details-block">
      <div className="text-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="image-content">
        <img src={imageUrl} alt={title} />
      </div>
    </div>
  );
};

export default DetailsBlock;
