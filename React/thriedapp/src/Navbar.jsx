import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link style={styles.link} to="/">Home</Link>
      <Link style={styles.link} to="/about">About</Link>
      <Link style={styles.link} to="/services">Services</Link>
      <Link style={styles.link} to="/products">Products</Link>
      <Link style={styles.link} to="/blog">Blog</Link>
      <Link style={styles.link} to="/contact">Contact</Link>
      <Link style={styles.link} to="/login">Login</Link>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    gap: "20px",
    padding: "15px 30px",
    backgroundColor: "#1e293b",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
  },
};

export default Navbar;
