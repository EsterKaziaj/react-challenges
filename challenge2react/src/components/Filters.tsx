import React, { useState } from 'react';
import './Filters.css';

interface Product {
  name: string;
  price: number;
  gender: string;
  brand: string;
  image: string;
}

interface FiltersProps {
  products: Product[];
  onFilter: (filters: { name?: string; gender?: string; brand?: string }) => void;
}

const Filters: React.FC<FiltersProps> = ({ products, onFilter }) => {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const handleFilter = () => {
    onFilter({
      gender: selectedGender || undefined,
      brand: selectedBrand || undefined,
    });
  };

  const uniqueGenders = Array.from(new Set(products.map((product) => product.gender)));
  const uniqueBrands = Array.from(new Set(products.map((product) => product.brand)));

  return (
    <div className="filters">
      <h2>Bikes</h2>
      <button
        className="filter-button"
        onClick={() => {
          setSelectedGender(null);
          setSelectedBrand(null);
          handleFilter();
        }}
      >
        Show All <span className="filter-count">{products.length}</span>
      </button>
      <div className="filter-section">
        <h3>Gender</h3>
        <ul>
          {uniqueGenders.map((gender) => (
            <li
              key={gender}
              className={selectedGender === gender ? 'selected' : ''}
              onClick={() => {
                setSelectedGender(gender);
                handleFilter();
              }}
            >
              {gender} <span className="filter-badge">{products.filter((product) => product.gender === gender).length}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="filter-section">
        <h3>Brand</h3>
        <ul>
          {uniqueBrands.map((brand) => (
            <li
              key={brand}
              className={selectedBrand === brand ? 'selected' : ''}
              onClick={() => {
                setSelectedBrand(brand);
                handleFilter();
              }}
            >
              {brand} <span className="filter-badge">{products.filter((product) => product.brand === brand).length}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filters;
