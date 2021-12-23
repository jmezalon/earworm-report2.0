import SongList from "./SongList";

function Trending({ songs }) {
  const sortedSongs = songs.sort(
    (a, b) => b.favorites.length - a.favorites.length
  );
  return (
    <div>
      <h1>Most popular songs</h1>
      {sortedSongs.map((s) => (
        <SongList key={s.id} song={s} />
      ))}
    </div>
  );
}

export default Trending;
