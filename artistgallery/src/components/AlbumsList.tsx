import React from "react";
import { Link } from "react-router-dom";

interface Album {
  albumId: string;
  title: string;
  year: number;
  cover: string; // Filename (e.g., "electric-ladyland")
}

interface AlbumsListProps {
  albums: Album[];
}

const AlbumsList: React.FC<AlbumsListProps> = ({ albums }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {albums.map((album) => (
        <div key={album.albumId} style={{ margin: "1rem", textAlign: "center" }}>
          {/* Wrap the image with Link */}
          <Link to={`/album/${album.albumId}`}>
            <img
              src={require(`./images/albums/${album.cover}.jpg`)} // Correct path
              alt={album.title}
              style={{ width: "150px", borderRadius: "8px", cursor: "pointer" }}
            />
          </Link>
          <h3>{album.title}</h3>
          <p>Year: {album.year}</p>
        </div>
      ))}
    </div>
  );
};

export default AlbumsList;
