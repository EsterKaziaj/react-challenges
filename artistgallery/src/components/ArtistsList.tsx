import React from "react";
import artists from "../db";
import ArtistItem from "./ArtistItem";

const ArtistsList: React.FC = () => (
  <div>
    {artists.map((artist) => (
      <ArtistItem key={artist.id} id={artist.id} name={artist.name} cover={artist.cover} />
    ))}
  </div>
);

export default ArtistsList;
