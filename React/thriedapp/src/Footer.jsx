import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>

        <div style={styles.links}>
          <a href="/privacy" style={styles.link}>Privacy Policy</a>
          <a href="/terms" style={styles.link}>Terms of Service</a>
          <a href="/contact" style={styles.link}>Contact</a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#222",
    color: "#fff",
    padding: "20px 0",
    marginTop: "40px",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center",
  },
  text: {
    margin: "0 0 10px",
    fontSize: "14px",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  link: {
    color: "#aaa",
    textDecoration: "none",
    fontSize: "14px",
  },
};

export default Footer;
