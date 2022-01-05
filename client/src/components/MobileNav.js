import { NavLink, useHistory } from "react-router-dom";

function MobileNav({ user, setUser }) {
  const history = useHistory();
  const justifyContent = user ? "space-between" : "space-evenly";
  function handleLogout() {
    fetch("api/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser(null);
        history.push("/songs");
      }
    });
  }
  return (
    <nav className="mobile-nav-container">
      <div className="left-side-nav">
        <NavLink exact to="/">
          <h2>EW</h2>
        </NavLink>
      </div>
      <div
        className="right-side-nav"
        style={{ justifyContent: `${justifyContent}` }}
      >
        {user && (
          <NavLink to="/profile">
            <h4>{user.username}</h4>
          </NavLink>
        )}
        <NavLink exact to="/songs">
          <h4>Songs</h4>
        </NavLink>
        {!user && (
          <NavLink to="/auth">
            <h4 id="login-tab">Login</h4>
          </NavLink>
        )}
        {user && (
          <NavLink exact to="/">
            <h4 onClick={handleLogout}>Logout</h4>
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default MobileNav;
