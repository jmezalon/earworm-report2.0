import { NavLink, useHistory } from "react-router-dom";

function Navbar({ user, setUser }) {
  const history = useHistory();

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser(null);
        history.push("/list/songs");
      }
    });
  }
  return (
    <nav className="nav-container">
      <div className="left-side-nav">
        <NavLink exact to="/">
          <h1>Earworm Report</h1>
        </NavLink>
      </div>
      <div className="right-side-nav">
        <NavLink exact to="/list/songs">
          <h3>Songs</h3>
        </NavLink>
        <NavLink to="/list/songs/trending">
          <h3>Trending</h3>
        </NavLink>
        <NavLink to="/list/songs/bygenres">
          <h3>Genre</h3>
        </NavLink>
        {user && (
          <NavLink to="/profile">
            <h3>{user.username}</h3>
          </NavLink>
        )}
        {user && (
          <NavLink to="/">
            <h3 onClick={handleLogout}>Logout</h3>
          </NavLink>
        )}
        {!user && (
          <NavLink to="/auth">
            <h3>Login</h3>
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
