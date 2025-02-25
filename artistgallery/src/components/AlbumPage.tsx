import React from "react";
import { useParams } from "react-router-dom";
import artists from "../db";

const AlbumPage: React.FC = () => {
  const { albumId } = useParams<{ albumId: string }>();

  let album;

  // Find the album by looping through all artists
  for (const artist of artists) {
    album = artist.albums.find((a) => a.albumId === albumId);
    if (album) break;
  }

  if (!album) return <div>Album not found</div>;

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      {/* Album Image */}
      <img
        src={require(`./images/albums/${album.cover}.jpg`)} // Correct path
        alt={album.title}
        style={{ width: "300px", borderRadius: "8px" }}
      />
      <h1>{album.title}</h1>
      <p>
        <strong>Year:</strong> {album.year}
      </p>
      <p>
        <strong>Price:</strong> ${album.price}
      </p>
    </div>
  );
};

export default AlbumPage;
