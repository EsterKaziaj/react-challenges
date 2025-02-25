import React from 'react';
import Card from './Card';
import './EachFilter.css';

interface Product {
  name: string;
  price: number;
  gender: string;
  brand: string;
  image: string;
}

interface EachFilterProps {
  filteredProducts: Product[];
}

const EachFilter: React.FC<EachFilterProps> = ({ filteredProducts }) => {
  return (
    <div className="each-filter">
      <div className="bike-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <Card key={`${product.name}-${product.image}-${index}`} bike={product} />
          ))
        ) : (
          <p className="no-results">No bikes found for the selected filter.</p>
        )}
      </div>
    </div>
  );
};


export default EachFilter;
