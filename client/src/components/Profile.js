import SongList from "./SongList";
import NewSongForm from "./NewSongForm";
import ToggleButtons from "./ToggleButtons";
import { useState } from "react";
import { useRouteMatch } from "react-router-dom";

function Profile({ songs, genres, onDeleteSong, onAddSong, onAddGenre }) {
  const [isActive, setIsActive] = useState(true);
  const [genreClick, setGenreClick] = useState(false);

  const [genre_name, setGenre_name] = useState("");
  const { url } = useRouteMatch();
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

  const postedSongs = songs.filter((s) => s.user.id === 1);
  const favSongs = songs.filter((s) =>
    s.favorites.find((u) => u.user_id === 1)
  );
  return (
    <div>
      <h3>Sample User</h3>
      <ToggleButtons isActive={isActive} setIsActive={setIsActive} />
      {url === "/profile" && (
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
      )}
      {isActive
        ? postedSongs.map((s) => (
            <SongList key={s.id} onDeleteSong={onDeleteSong} song={s} />
          ))
        : favSongs.map((s) => (
            <SongList key={s.id} onDeleteSong={onDeleteSong} song={s} />
          ))}
    </div>
  );
}

export default Profile;
