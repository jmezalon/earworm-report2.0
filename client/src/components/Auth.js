import { useState } from "react";
import { useHistory } from "react-router-dom";

function Auth({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const history = useHistory();

  function handleLogin(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
        history.push("/songs");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
    setUsername("");
    setPassword("");
  }

  function handleSignup(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
        history.push("/songs");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
    setPassword("");
    setPasswordConfirmation("");
    setUsername("");
  }

  return (
    <div className="login-signup-page">
      {isLogin ? (
        <>
          <form className="login-form" onSubmit={handleLogin}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="submit-login-button">
              {isLoading ? "Loading..." : "Login"}
            </button>
            <>
              {errors.map((err) => (
                <p key={err}>{err}</p>
              ))}
            </>
          </form>
          <p>Don't have an accont?</p>{" "}
          <button
            className="option-last-button"
            onClick={() => setIsLogin(false)}
          >
            Sign up
          </button>
        </>
      ) : (
        <>
          <form className="login-form" onSubmit={handleSignup}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password-confirmation">Confirm</label>
            <input
              type="password"
              name="passwordConfirmation"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            <button className="submit-login-button">
              {isLoading ? "Loading..." : "sign up"}
            </button>
            <>
              {errors.map((err) => (
                <p key={err}>{err}</p>
              ))}
            </>
          </form>
          <p>Already have an account?</p>{" "}
          <button
            className="option-last-button"
            onClick={() => setIsLogin(true)}
          >
            login
          </button>
        </>
      )}
    </div>
  );
}

export default Auth;
