import SongList from "./SongList";
import { Link } from "react-router-dom";
import NoUserSongList from "./NoUserSongList";

function Trending({ songs, user, favorites, setFavorites }) {
  const sortedSongs = songs.sort(
    (a, b) => b.favorites.length - a.favorites.length
  );

  return (
    <div className="feed-container">
      <h1>Most popular songs</h1>
      <div className="mobile-trending">
        <h4>
          search by <Link to="/list/songs/bygenres">genres</Link> ...
        </h4>
      </div>
      {sortedSongs.map((s) =>
        user ? (
          <SongList
            user={user}
            key={s.id}
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

export default Trending;
