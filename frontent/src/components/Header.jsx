import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <h2>VisionaryHub</h2>

      {isLoggedIn ? (
        <>
          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>

          {menuOpen && (
            <div className="sidebar">
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/add-idea" onClick={() => setMenuOpen(false)}>Add Idea</Link>
              <Link to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link>
              <Link to="/messages" onClick={() => setMenuOpen(false)}>Messages</Link>
              <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            </div>
          )}
        </>
      ) : (
        <Link to="/login" className="login-btn">Login</Link>
      )}
    </header>
  );
};

export default Header;
