import SongList from "./SongList";
import NewSongForm from "./NewSongForm";
import ToggleButtons from "./ToggleButtons";
import { useState } from "react";
import { useRouteMatch } from "react-router-dom";

function Profile({
  user,
  songs,
  genres,
  favorites,
  setFavorites,
  onDeleteSong,
  onAddSong,
  onAddGenre,
}) {
  const [isActive, setIsActive] = useState(true);
  const [genreClick, setGenreClick] = useState(false);
  const [errors, setErrors] = useState([]);
  const [genre_name, setGenre_name] = useState("");
  const { url } = useRouteMatch();
  const [formData, setFormData] = useState({
    title: "",
    img_url: "",
    genre_id: null,
  });

  function onHandleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleAddSong(e) {
    e.preventDefault();
    fetch("api/songs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then(onAddSong);
        setErrors([]);
        setFormData({
          title: "",
          img_url: "",
          genre_id: null,
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function handleAddGenre() {
    fetch("api/genres", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ genre_name }),
    }).then((r) => {
      if (r.ok) {
        r.json().then(onAddGenre);
        setErrors([]);
        setGenreClick(false);
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  const postedSongs = songs.filter((s) => s.user.id === user.id);
  const favSongs = songs.filter((s) =>
    favorites.find((f) => f.user_id === user.id && f.song_id === s.id)
  );

  return (
    <div className="feed-container">
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
          errors={errors}
        />
      )}
      {isActive
        ? postedSongs.map((s) => (
            <SongList
              key={s.id}
              favorites={favorites}
              setFavorites={setFavorites}
              onDeleteSong={onDeleteSong}
              song={s}
              user={user}
            />
          ))
        : favSongs.map((s) => (
            <SongList
              key={s.id}
              setFavorites={setFavorites}
              favorites={favorites}
              onDeleteSong={onDeleteSong}
              song={s}
              user={user}
            />
          ))}
    </div>
  );
}

export default Profile;
