import React from 'react';
import Banner from './components/Banner';
import DetailsBlock from './components/DetailsBlock';
import PlacesContainer from './components/PlacesContainer';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Banner />
      <DetailsBlock 
        title="Stories of Adventure" 
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facere ratione nostrum ea obcaecati suscipit quia magnam!" 
        imageUrl="https://picsum.photos/400/300" 
      />
      <PlacesContainer />
      <DetailsBlock 
        title="Popular Adventures" 
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facere ratione nostrum ea obcaecati suscipit quia magnam!" 
        imageUrl="https://picsum.photos/400/301" 
      />
      <Footer />
    </div>
  );
};

export default App;
