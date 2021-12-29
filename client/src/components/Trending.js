import SongList from "./SongList";
import NoUserSongList from "./NoUserSongList";

function Trending({ songs, user, favorites, setFavorites }) {
  const sortedSongs = songs.sort(
    (a, b) => b.favorites.length - a.favorites.length
  );

  //   console.log(favorites);
  //need to get an update when the favorite count change and re-order the song list
  return (
    <div>
      <h1>Most popular songs</h1>
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
