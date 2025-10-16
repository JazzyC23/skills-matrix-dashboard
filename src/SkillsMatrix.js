// src/SkillsMatrix.js
import React from "react";
import { team } from "./team";

export default function SkillsMatrix() {
  return (
    <main style={{ padding: "2rem", maxWidth: 1000 }}>
      <h1>Skills Matrix — Team</h1>
      <p>Quick demo list so we can see names on the live site.</p>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left", borderBottom: "1px solid #ddd", padding: "8px" }}>Name</th>
            <th style={{ textAlign: "left", borderBottom: "1px solid #ddd", padding: "8px" }}>Role</th>
          </tr>
        </thead>
        <tbody>
          {team.map((p) => (
            <tr key={p.name}>
              <td style={{ borderBottom: "1px solid #eee", padding: "8px" }}>{p.name}</td>
              <td style={{ borderBottom: "1px solid #eee", padding: "8px" }}>{p.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
