import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");


  const navigate  = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();


    if (username === "admin" && password === "1234") {
      navigate("/dashboard");
    } else {
      setMessage("❌ Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleLogin}>
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

        {message && <p className="login-message">{message}</p>}
      </form>
    </div>
  );
}

export default Login;
