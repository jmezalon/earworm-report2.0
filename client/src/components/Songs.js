import SongList from "./SongList";
import { useState, useEffect } from "react";

function Songs() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("/songs")
      .then((r) => r.json())
      .then(setSongs);
  }, []);

  return (
    <div className="feed-container">
      <h3>Search by Title</h3>
      <form action="searching">
        <input type="text" name="search" id="" />
        <button>Search</button>
      </form>
      {songs.map((song) => (
        <SongList key={song.id} song={song} />
      ))}
    </div>
  );
}

export default Songs;
