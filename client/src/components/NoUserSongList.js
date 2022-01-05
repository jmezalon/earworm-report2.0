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
      <div className="song-card-img">
        <img
          src={
            song.img_url ||
            "https://www.apple.com/v/apple-music/s/images/shared/og__ckjrh2mu8b2a_image.png"
          }
          alt={song.title}
        />
      </div>
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
          <p style={{ color: "red" }}>log in to leave comments</p>
          <p id="posted-by">posted by: {song.user.username}</p>
        </div>
      </div>
    </div>
  );
}

export default NoUserSongList;
