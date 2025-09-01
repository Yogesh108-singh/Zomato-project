import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Zomato from "./Zomato";
import Login from "./Login";
import Signup from "./Signup";
import { AuthContext } from "./AuthContext";

export default function App() {
  const { user, logout } = useContext(AuthContext);

  return (
    <Router>
      <nav className="nav">
        <Link to="/" className="logo">Zomato</Link>
        <div>
          {user ? (
            <>
              <span style={{ marginRight: "12px" }}>Welcome, {user.email}</span>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" style={{ marginRight: "12px" }}>Login</Link>
              <Link to="/signup">Sign Up</Link>
            </>
          )}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Zomato />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}
