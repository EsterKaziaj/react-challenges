import React from "react";
import { useParams } from "react-router-dom";
import AlbumsList from "./AlbumsList";
import artists from "../db";

const ArtistPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const artist = artists.find((a) => a.id === Number(id));

  if (!artist) return <div>Artist not found</div>;

  return (
    <div style={{ padding: "1rem", textAlign: "center" }}>
      {/* Artist Image */}
      <img
        src={require(`./images/covers/${artist.cover}.jpg`)} // Correct path
        alt={artist.name}
        style={{ width: "200px", borderRadius: "8px" }}
      />
      <h1>{artist.name}</h1>
      <p>{artist.bio}</p>

      {/* Albums List */}
      <AlbumsList albums={artist.albums} />
    </div>
  );
};

export default ArtistPage;
