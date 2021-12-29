import SongList from "./SongList";
import { useParams, useHistory } from "react-router-dom";
import ToggleButtons from "./ToggleButtons";
import { useState } from "react";

function Users({ songs, user, favorites, setFavorites }) {
  const [isActive, setIsActive] = useState(true);

  const { id } = useParams();
  const history = useHistory();

  const postedSongs = songs.filter((s) => s.user.id === parseInt(id));
  const favSongs = songs.filter((s) =>
    favorites.find((f) => f.user_id === parseInt(id) && f.song_id === s.id)
  );

  return (
    <div>
      <button onClick={history.goBack}>Go back</button>
      <ToggleButtons isActive={isActive} setIsActive={setIsActive} />
      {isActive
        ? postedSongs.map((s) => (
            <SongList
              key={s.id}
              favorites={favorites}
              setFavorites={setFavorites}
              song={s}
              user={user}
            />
          ))
        : favSongs.map((s) => (
            <SongList
              key={s.id}
              setFavorites={setFavorites}
              favorites={favorites}
              song={s}
              user={user}
            />
          ))}
    </div>
  );
}

export default Users;
