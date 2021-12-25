import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";

function SongList({ song, onDeleteSong }) {
  const { url } = useRouteMatch();
  const [favs, setFavs] = useState(song.favorites);
  const [comments, setcomment] = useState([]);

  useEffect(() => {
    fetch("/comments")
      .then((r) => r.json())
      .then(setcomment);
  }, []);

  const commentDisplay = comments.filter(
    (comment) => comment.song_id === song.id
  );

  function findMyFavorite() {
    return !!favs.find((f) => f.user_id === 1);
  }

  function handleLike(id) {
    fetch(`/favorites`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id: 1, song_id: id }),
    })
      .then((r) => r.json())
      .then((newFav) => setFavs([newFav, ...favs]));
    findMyFavorite();
  }

  function handleDeleteLike(id) {
    let favId = favs.find((f) => f.song_id === id);
    fetch(`/favorites/${favId.id}`, {
      method: "DELETE",
    }).then(() => setFavs(favs.filter((f) => f.id !== favId.id)));
    findMyFavorite();
  }

  function handleDeleteSong() {
    fetch(`/songs/${song.id}`, { method: "DELETE" }).then(() =>
      onDeleteSong(song.id)
    );
  }

  return (
    <div className="song-card">
      <img src={song.img_url} alt="" />
      <div className="song-content">
        <div className="title-section">
          <div className="left-side">
            <h3>{song.title}</h3>
          </div>
          <div className="right-side">
            <p>{favs.length} favorites</p>
            {!findMyFavorite() ? (
              <button onClick={() => handleLike(song.id)}>like</button>
            ) : (
              <button onClick={() => handleDeleteLike(song.id)}>unlike</button>
            )}
          </div>
        </div>
        <div className="comment-feed">
          <ul id="comment-ul">
            {commentDisplay.map((c) => (
              <div key={c.id}>
                <li>{c.comment_body}</li>
                <span> - {c.user.username}</span>
              </div>
            ))}
          </ul>

          <form>
            <input type="text" name="comment" />
            <button>add comment</button>
          </form>
        </div>
        {url === "/songs" && song.user.id !== 1 && (
          <p id="posted-by">posted by: {song.user.username}</p>
        )}
        {url === "/profile" && song.user.id === 1 && (
          <button onClick={handleDeleteSong} style={{ color: "red" }}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

export default SongList;
