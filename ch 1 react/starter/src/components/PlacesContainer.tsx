import React, { useState, useEffect } from 'react';
import Place from './Place'; // Ensure correct import
import './PlacesContainer.css';

interface PlaceData {
  id: number;
  place: string;
  desc: string;
  img: string;
}

const PlacesContainer: React.FC = () => {
  const [places, setPlaces] = useState<PlaceData[]>([]);

  useEffect(() => {
    console.log'Test';
    const fetchPlaces = async () => {
      try {
        const response = await fetch('http://localhost:5002/places'); // Ensure this is the correct URL
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        setPlaces(data);
      } catch (error) {
        console.error('Error fetching places:', error);
      }
    };

    fetchPlaces();
  }, []);

  return (
    <div className="places-container">
      {places.length > 0 ? (
        places.map(place => (
          <Place key={place.id} title={place.place} description={place.desc} imageUrl={place.img} />
        ))
      ) : (
        <p>No places available</p>
      )}
    </div>
  );
};

export default PlacesContainer;
