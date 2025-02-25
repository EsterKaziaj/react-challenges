import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ArtistsList from "./components/ArtistsList";
import ArtistPage from "./components/ArtistPage";
import AlbumPage from "./components/AlbumPage";
import "./App.css"; // Import App.css for styling

const App: React.FC = () => (
  <div className="app-container"> {/* Container for the entire app */}
    <Navbar />
    <Routes>
      <Route path="/" element={<ArtistsList />} />
      <Route path="/artist/:id" element={<ArtistPage />} />
      <Route path="/album/:albumId" element={<AlbumPage />} /> {/* Route for album details */}
    </Routes>
  </div>
);

export default App;
