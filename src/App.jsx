import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app">
      <div className="topbar">⚡ Quick Tools</div>

      {page === "home" && (
        <div className="grid">
          <div className="card" onClick={() => setPage("age")}>🎂 Age Calculator</div>
          <div className="card" onClick={() => setPage("password")}>🔐 Password Generator</div>
          <div className="card" onClick={() => setPage("word")}>📝 Word Counter</div>
          <div className="card" onClick={() => setPage("percent")}>📊 Percentage</div>
          <div className="card" onClick={() => setPage("calc")}>🧮 Calculator</div>
        </div>
      )}

      {page !== "home" && (
        <div className="page">
          <button onClick={() => setPage("home")}>← Back</button>
          <h2>{page.toUpperCase()}</h2>
          <p className="hint">Tool coming soon...</p>
        </div>
      )}
    </div>
  );
}
