import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";
import Users from "./components/Users";
import Auth from "./components/Auth";
import Home from "./components/Home";
import Songs from "./components/Songs";
import Trending from "./components/Trending";
import Genres from "./components/Genres";
import { useState, useEffect } from "react";
import Profile from "./components/Profile";

function App() {
  const [user, setUser] = useState(null);
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
      }
    });
  }, []);

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

  function handleLogin(newUser) {
    setUser(newUser);
  }

  return (
    <div className="App">
      <Navbar user={user} setUser={setUser} />
      <MobileNav user={user} setUser={setUser} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/list/songs">
          <Songs
            user={user}
            songs={songs}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        </Route>
        <Route exact path="/list/songs/trending">
          <Trending
            user={user}
            songs={songs}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        </Route>
        <Route exact path="/list/songs/bygenres">
          <Genres
            user={user}
            songs={songs}
            genres={genres}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        </Route>
        <Route exact path="/profile">
          <Profile
            user={user}
            songs={songs}
            genres={genres}
            favorites={favorites}
            setFavorites={setFavorites}
            onDeleteSong={handleDeleteSong}
            onAddGenre={handleAddGenre}
            onAddSong={handleAddSong}
          />
        </Route>
        <Route exact path="/list/users/:id">
          <Users
            user={user}
            songs={songs}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        </Route>
        <Route extact to="/auth">
          <Auth onLogin={handleLogin} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
