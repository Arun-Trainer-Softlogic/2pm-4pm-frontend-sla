import React from "react";

function Dashboard() {
  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Dashboard</h1>
        <p style={styles.subtitle}>Welcome back! 👋</p>
      </div>

      {/* Cards Section */}
      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <h3>Total Users</h3>
          <p style={styles.cardValue}>1,245</p>
        </div>

        <div style={styles.card}>
          <h3>Active Sessions</h3>
          <p style={styles.cardValue}>87</p>
        </div>

        <div style={styles.card}>
          <h3>Performance</h3>
          <p style={styles.cardValue}>92%</p>
        </div>
      </div>

      {/* Footer message */}
      <div style={styles.footer}>
        <p>You have successfully logged in 🚀</p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f4f6f8",
    padding: "30px",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "white",
    padding: "30px",
    borderRadius: "12px",
    marginBottom: "30px",
  },
  title: {
    margin: 0,
    fontSize: "32px",
  },
  subtitle: {
    marginTop: "8px",
    opacity: 0.9,
  },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  },
  cardValue: {
    fontSize: "28px",
    fontWeight: "bold",
    marginTop: "10px",
    color: "#667eea",
  },
  footer: {
    marginTop: "40px",
    textAlign: "center",
    color: "#555",
  },
};

export default Dashboard;
