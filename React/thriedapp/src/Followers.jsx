import { useEffect, useState } from "react";
import "./Followers.css";

function Followers() {
  const [followers, setFollowers] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/arun-trainer-softlogic/followers")
      .then(res => res.json())
      .then(data => setFollowers(data));
  }, []);

  return (
    <div className={`followers-page ${darkMode ? "dark" : ""}`}>
      {/* Toggle */}
      <div className="dark-toggle">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* Container */}
      <div className="followers-container">
        <div className="followers-grid">
          {followers.map(f => (
            <div className="flip-card" key={f.id}>
              <div className="flip-card-inner">

                {/* FRONT */}
                <div className="flip-card-front">
                  <img src={f.avatar_url} alt={f.login} />
                  <h3>{f.login}</h3>
                </div>

                {/* BACK */}
                <div className="flip-card-back">
                  <h3>{f.login}</h3>
                  <a href={f.html_url} target="_blank" rel="noreferrer">
                    View Profile
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Followers;
