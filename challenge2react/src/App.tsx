import React, { useEffect, useState } from 'react';
import Filters from './components/Filters';
import EachFilter from './components/EachFilter';
import Header from './components/Header';
import Footer from './components/Footer'; // Import Footer component
import './App.css';

interface Product {
  name: string;
  price: number;
  gender: string;
  brand: string;
  image: string;
}

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/products.json') // Fetch the JSON data
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setFilteredProducts(data.products); // Display all products initially
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const handleFilter = (filters: { name?: string; gender?: string; brand?: string }) => {
    let filtered = products;

    if (filters.gender) {
      filtered = filtered.filter((product) => product.gender === filters.gender);
    }
    if (filters.brand) {
      filtered = filtered.filter((product) => product.brand === filters.brand);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="App">
      <Header />
      <div className="content">
        <Filters products={products} onFilter={handleFilter} />
        <EachFilter filteredProducts={filteredProducts} />
      </div>
      <Footer /> {/* Add Footer at the bottom of the App */}
    </div>
  );
};

export default App;
