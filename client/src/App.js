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
  const [favorites, setFavorites] = useState([]);

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

  useEffect(() => {
    fetch("/favorites")
      .then((r) => r.json())
      .then(setFavorites);
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

  // need to create a user page that will be similar to profile

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/songs">
          <Songs
            songs={songs}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        </Route>
        <Route exact path="/songs/trending">
          <Trending
            songs={songs}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        </Route>
        <Route exact path="/songs/bygenres">
          <Genres
            songs={songs}
            genres={genres}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        </Route>
        <Route exact path="/profile">
          <Profile
            songs={songs}
            genres={genres}
            favorites={favorites}
            setFavorites={setFavorites}
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
