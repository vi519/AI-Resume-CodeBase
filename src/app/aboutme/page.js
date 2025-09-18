import React from "react";

export default function VineetProfileCard() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "20px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
          maxWidth: "600px",
          width: "100%",
          padding: "40px",
          textAlign: "center",
          animation: "fadeIn 0.8s ease-in-out",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "10px", color: "#2d3748" }}>
          Hi, I’m Vineet 👋
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#4a5568", marginBottom: "20px" }}>
          Passionate software developer who loves solving problems, building user-focused
          solutions, and occasionally laughing at the bugs I create (before I fix them).
        </p>

        <div style={{ textAlign: "left", margin: "0 auto", maxWidth: "500px" }}>
          <h2 style={{ fontSize: "1.5rem", color: "#2b6cb0", marginBottom: "10px" }}>
            🚀 What I Do
          </h2>
          <ul style={{ marginBottom: "20px", lineHeight: 1.6 }}>
            <li>Design and develop scalable, maintainable applications</li>
            <li>Debug issues with a structured, detail-oriented approach</li>
            <li>Collaborate with teams to deliver high-quality features on time</li>
          </ul>

          <h2 style={{ fontSize: "1.5rem", color: "#2b6cb0", marginBottom: "10px" }}>
            🛠️ Skills & Strengths
          </h2>
          <ul style={{ marginBottom: "20px", lineHeight: 1.6 }}>
            <li>Proficient in JavaScript, React, Node.js, and modern web technologies</li>
            <li>Strong ability to break complex problems into actionable solutions</li>
            <li>Adept at writing clean, efficient code and improving workflows</li>
          </ul>

          <h2 style={{ fontSize: "1.5rem", color: "#2b6cb0", marginBottom: "10px" }}>
            💡 Work Philosophy
          </h2>
          <p style={{ lineHeight: 1.6 }}>
            I believe in writing code that not only works but is easy to maintain. My
            focus is on delivering value, learning continuously, and helping teams grow
            together.
          </p>
        </div>
      </div>
    </div>
  );
}