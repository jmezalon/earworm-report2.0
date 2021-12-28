import SongList from "./SongList";

function Trending({ songs, favorites, setFavorites }) {
  const sortedSongs = songs.sort(
    (a, b) => b.favorites.length - a.favorites.length
  );

  //   console.log(favorites);
  //need to get an update when the favorite count change and re-order the song list
  return (
    <div>
      <h1>Most popular songs</h1>
      {sortedSongs.map((s) => (
        <SongList
          key={s.id}
          song={s}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      ))}
    </div>
  );
}

export default Trending;
