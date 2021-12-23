import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav-container">
      <div className="left-side">
        <NavLink exact to="/">
          <h1>Earworm Report</h1>
        </NavLink>
      </div>
      <div className="right-side-nav">
        <NavLink exact to="/songs">
          <h3>Songs</h3>
        </NavLink>
        <NavLink to="/songs/trending">
          <h3>Trending</h3>
        </NavLink>
        <NavLink to="/songs/bygenres">
          <h3>Genre</h3>
        </NavLink>
        <NavLink to="/profile">
          <h3>Me</h3>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
