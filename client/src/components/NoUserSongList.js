import { useEffect, useState } from "react";

function NoUserSongList({ song }) {
  const [comments, setcomment] = useState([]);

  useEffect(() => {
    fetch("/comments")
      .then((r) => r.json())
      .then(setcomment);
    return () => {
      setcomment([]); // This worked for me
    };
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
          </div>
        </div>
        <div className="comment-feed">
          <ul id="comment-ul">
            {commentDisplay
              .sort((a, b) => b.id - a.id)
              .map((c) => (
                <div key={c.id}>
                  <li>{c.comment_body}</li>
                  <span> - {c.user.username}</span>
                </div>
              ))}
          </ul>
          <p>sign up to leave comments</p>
          <p id="posted-by">posted by: {song.user.username}</p>
        </div>
      </div>
    </div>
  );
}

export default NoUserSongList;
