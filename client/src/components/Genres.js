import { useState } from "react";
import NoUserSongList from "./NoUserSongList";
import SongList from "./SongList";

function Genres({ songs, user, favorites, setFavorites, genres }) {
  const [genreId, setGenreId] = useState("");

  const filteredSongs = songs.filter(
    (song) => song.genre_id === parseInt(genreId)
  );
  return (
    <div className="feed-container">
      <h3>Filter by your favorite genre:</h3>
      <select
        className="genre-select"
        name="genreId"
        onChange={(e) => setGenreId(e.target.value)}
      >
        <option value=""></option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.genre_name}
          </option>
        ))}
      </select>
      {filteredSongs.length === 0 && <h3>Please select a genre</h3>}
      {filteredSongs.map((s) =>
        user ? (
          <SongList
            key={s.id}
            user={user}
            song={s}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        ) : (
          <NoUserSongList key={s.id} song={s} />
        )
      )}
    </div>
  );
}

export default Genres;
