import { useEffect, useState } from "react";

function SongList({ song }) {
  const [comments, setcomment] = useState([]);

  useEffect(() => {
    fetch("/comments")
      .then((r) => r.json())
      .then(setcomment);
  }, []);

  const commentDisplay = comments.filter(
    (comment) => comment.song_id === song.id
  );
  return (
    <div className="song-card">
      <img src={song.img_url} alt="" />
      <div className="song-content">
        <div className="title-section">
          <div className="left-side">
            <h3>{song.title}</h3>
          </div>
          <div className="right-side">
            <p>{song.favorites.length} favorites</p>
            <button>like</button>
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
        <p id="posted-by">posted by: {song.user.username}</p>
      </div>
    </div>
  );
}

export default SongList;
