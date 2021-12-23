import { useState } from "react";
import SongList from "./SongList";

function Genres({ songs, genres }) {
  const [genreId, setGenreId] = useState("");

  const filteredSongs = songs.filter(
    (song) => song.genre_id === parseInt(genreId)
  );
  return (
    <div>
      <h1>Filter by your favorite genre:</h1>
      <select name="genreId" onChange={(e) => setGenreId(e.target.value)}>
        <option value=""></option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.genre_name}
          </option>
        ))}
      </select>
      {filteredSongs.length === 0 && <h3>Please select a genre</h3>}
      {filteredSongs.map((s) => (
        <SongList key={s.id} song={s} />
      ))}
    </div>
  );
}

export default Genres;
