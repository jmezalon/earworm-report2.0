import { useState } from "react";
import SongList from "./SongList";

function Songs({ songs }) {
  const [search, setSearch] = useState("");
  const filterSong = songs.filter((s) =>
    s.title.toLowerCase().includes(search.toLocaleLowerCase())
  );
  return (
    <div className="feed-container">
      <h3>Search by Title</h3>
      <form action="searching">
        <input
          type="text"
          name="search"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      {filterSong
        .sort((a, b) => b.id - a.id)
        .map((song) => (
          <SongList key={song.id} song={song} />
        ))}
    </div>
  );
}

export default Songs;
