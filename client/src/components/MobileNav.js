import { NavLink, useHistory } from "react-router-dom";

function MobileNav({ user, setUser }) {
  const history = useHistory();

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setUser(null);
        history.push("/");
      }
    });
  }
  return (
    <nav className="mobile-nav-container">
      <div className="left-side">
        <NavLink exact to="/">
          <h2>EW</h2>
        </NavLink>
      </div>
      <div className="right-side-nav">
        <NavLink exact to="/songs">
          <h4>Songs</h4>
        </NavLink>
        {user && (
          <NavLink to="/profile">
            <h4>{user.username}</h4>
          </NavLink>
        )}
        {user && (
          <NavLink exact to="/">
            <h4 onClick={handleLogout}>Logout</h4>
          </NavLink>
        )}
        {!user && (
          <NavLink to="/auth">
            <h4 id="login-tab">Login</h4>
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default MobileNav;
