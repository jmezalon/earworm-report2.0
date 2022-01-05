import { useState } from "react";
import { Link } from "react-router-dom";
import SongList from "./SongList";
import NoUserSongList from "./NoUserSongList";

function Songs({ songs, user, favorites, setFavorites }) {
  const [search, setSearch] = useState("");
  const filterSong = songs.filter((s) =>
    s.title.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div className="feed-container">
      <h3>Search by Title</h3>
      <form id="search-form" action="searching">
        <input
          type="text"
          name="search"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <div className="mobile-trending">
        <h4>
          see who's <Link to="/trending">trending</Link> ...
        </h4>
      </div>
      {filterSong
        .sort((a, b) => b.id - a.id)
        .map((song) =>
          user ? (
            <SongList
              key={song.id}
              favorites={favorites}
              setFavorites={setFavorites}
              song={song}
              user={user}
            />
          ) : (
            <NoUserSongList key={song.id} song={song} />
          )
        )}
    </div>
  );
}

export default Songs;
