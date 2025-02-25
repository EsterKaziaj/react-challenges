import React from "react";
import { Link } from "react-router-dom";

interface ArtistItemProps {
  id: number;
  name: string;
  cover: string; // Filename (e.g., "jimi_hendrix")
}

const ArtistItem: React.FC<ArtistItemProps> = ({ id, name, cover }) => {
  return (
    <div style={{ textAlign: "center", margin: "1rem" }}>
      <Link to={`/artist/${id}`} style={{ textDecoration: "none", color: "black" }}>
        <img
          src={require(`./images/covers/${cover}.jpg`)} // Correct path
          alt={name}
          style={{ width: "150px", borderRadius: "8px" }}
        />
        <h3>{name}</h3>
      </Link>
    </div>
  );
};

export default ArtistItem;
