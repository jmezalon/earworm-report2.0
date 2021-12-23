import SongList from "./SongList";
import NewSongForm from "./NewSongForm";
import { useState } from "react";

function Profile({ songs, genres, onAddSong, onAddGenre }) {
  const [genreClick, setGenreClick] = useState(false);
  const [genre_name, setGenre_name] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    img_url: "",
    genre_id: null,
    user_id: 1,
  });

  function onHandleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleAddSong(e) {
    e.preventDefault();
    fetch("/songs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then(onAddSong);
    setFormData({
      title: "",
      img_url: "",
      genre_id: null,
      user_id: 1,
    });
  }

  function handleAddGenre() {
    fetch("/genres", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ genre_name }),
    })
      .then((r) => r.json())
      .then(onAddGenre);
    setGenreClick(false);
  }

  return (
    <div>
      <h3>Sample User</h3>
      <NewSongForm
        handleAddGenre={handleAddGenre}
        handleAddSong={handleAddSong}
        formData={formData}
        setFormData={setFormData}
        onHandleChange={onHandleChange}
        genreClick={genreClick}
        setGenreClick={setGenreClick}
        genre_name={genre_name}
        setGenre_name={setGenre_name}
        genres={genres}
      />
      {songs.map((s) => (
        <SongList key={s.id} song={s} />
      ))}
    </div>
  );
}

export default Profile;
