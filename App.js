import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div style={{ textAlign: "center" }}>
        <h1>🌐 React Router Navigation Example</h1>

        {/* Navigation Links */}
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ margin: "0 15px" }}>Home</Link>
          <Link to="/about" style={{ margin: "0 15px" }}>About</Link>
          <Link to="/contact" style={{ margin: "0 15px" }}>Contact</Link>
        </nav>

        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
