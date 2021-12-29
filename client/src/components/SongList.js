import { useEffect, useState } from "react";
import { useRouteMatch, Link } from "react-router-dom";

function SongList({ song, user, favorites, setFavorites, onDeleteSong }) {
  const { url } = useRouteMatch();
  const [comments, setcomment] = useState([]);
  const [commentBody, setCommentBody] = useState("");

  useEffect(() => {
    fetch("/comments")
      .then((r) => r.json())
      .then(setcomment);
  }, []);

  const commentDisplay = comments.filter(
    (comment) => comment.song_id === song.id
  );

  function handleAddComment(e) {
    e.preventDefault();
    fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        song_id: song.id,
        comment_body: commentBody,
      }),
    })
      .then((r) => r.json())
      .then((newComment) => setcomment([...comments, newComment]));
    setCommentBody("");
  }

  function handleDeleteComment(id) {
    fetch(`/comments/${id}`, {
      method: "DELETE",
    }).then(() => setcomment(comments.filter((c) => c.id !== id)));
  }

  function findMyFavorite() {
    // need to update after session is created this and
    // line 101, 123, 126
    return !!favorites.find(
      (f) => f.user_id === user.id && f.song_id === song.id
    );
  }

  const favCount = favorites.filter((f) => f.song_id === song.id);

  function handleLike(id) {
    fetch(`/favorites`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ song_id: id }),
    })
      .then((r) => r.json())
      .then((newFav) => setFavorites([newFav, ...favorites]));
    findMyFavorite();
  }

  function handleDeleteLike(id) {
    let favId = favorites.find((f) => f.song_id === id);
    fetch(`/favorites/${favId.id}`, {
      method: "DELETE",
    }).then(() => setFavorites(favorites.filter((f) => f.id !== favId.id)));
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
            <p>{favCount.length} favorites</p>
            {!findMyFavorite()
              ? user && (
                  <button onClick={() => handleLike(song.id)}>like</button>
                )
              : user && (
                  <button onClick={() => handleDeleteLike(song.id)}>
                    unlike
                  </button>
                )}
          </div>
        </div>
        <div className="comment-feed">
          <ul id="comment-ul">
            {commentDisplay
              .sort((a, b) => b.id - a.id)
              .map((c) => (
                <div key={c.id}>
                  <li>
                    {c.comment_body} -{" "}
                    {c.user.id === user.id && (
                      <span
                        onClick={() => handleDeleteComment(c.id)}
                        style={{ color: "red" }}
                      >
                        delete
                      </span>
                    )}
                  </li>

                  {c.user.id !== user.id && <span> - {c.user.username}</span>}
                </div>
              ))}
          </ul>
          <form onSubmit={handleAddComment}>
            <input
              type="text"
              name="commentBody"
              onChange={(e) => setCommentBody(e.target.value)}
              value={commentBody}
            />
            <button>add comment</button>
          </form>
        </div>
        {url === "/songs" && song.user.id !== user.id && (
          <p id="posted-by">
            posted by:{" "}
            <Link to={`users/${song.user.id}`}>{song.user.username}</Link>
          </p>
        )}
        {url === "/profile" && song.user.id === user.id && (
          <button onClick={handleDeleteSong} style={{ color: "red" }}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

export default SongList;
