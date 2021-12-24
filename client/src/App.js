import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Songs from "./components/Songs";
import Trending from "./components/Trending";
import Genres from "./components/Genres";
import { useState, useEffect } from "react";
import Profile from "./components/Profile";

function App() {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch("/songs")
      .then((r) => r.json())
      .then(setSongs);
  }, []);

  useEffect(() => {
    fetch("/genres")
      .then((r) => r.json())
      .then(setGenres);
  }, []);

  function handleAddSong(newSong) {
    setSongs([newSong, ...songs]);
  }

  function handleAddGenre(newGen) {
    setGenres([...genres, newGen]);
  }

  function handleDeleteSong(id) {
    setSongs(songs.filter((s) => s.id !== id));
  }

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/songs">
          <Songs songs={songs} />
        </Route>
        <Route exact path="/songs/trending">
          <Trending songs={songs} />
        </Route>
        <Route exact path="/songs/bygenres">
          <Genres songs={songs} genres={genres} />
        </Route>
        <Route exact path="/profile">
          <Profile
            songs={songs}
            genres={genres}
            onDeleteSong={handleDeleteSong}
            onAddGenre={handleAddGenre}
            onAddSong={handleAddSong}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
