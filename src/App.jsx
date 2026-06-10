import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");

  const [dob, setDob] = useState("");
  const [pass, setPass] = useState("");
  const [text, setText] = useState("");
  const [a, setA] = useState("");
  const [b, setB] = useState("");

  const age = dob ? new Date().getFullYear() - new Date(dob).getFullYear() : "";

  const generatePassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$!";
    let p = "";
    for (let i = 0; i < 12; i++) {
      p += chars[Math.floor(Math.random() * chars.length)];
    }
    setPass(p);
  };

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

  const percent = a && b ? ((a / b) * 100).toFixed(2) : "";

  return (
    <div className="app">

      <div className="topbar">⚡ Quick Tools</div>

      {page === "home" && (
        <div className="grid">
          <div className="card" onClick={() => setPage("age")}>🎂 Age</div>
          <div className="card" onClick={() => setPage("password")}>🔐 Password</div>
          <div className="card" onClick={() => setPage("word")}>📝 Word</div>
          <div className="card" onClick={() => setPage("percent")}>📊 %</div>
          <div className="card" onClick={() => setPage("calc")}>🧮 Calc</div>
        </div>
      )}

      {/* AGE */}
      {page === "age" && (
        <div className="page">
          <button onClick={() => setPage("home")}>← Back</button>
          <h2>Age Calculator</h2>
          <input type="date" onChange={(e) => setDob(e.target.value)} />
          <h3>{age ? `Age: ${age}` : ""}</h3>
        </div>
      )}

      {/* PASSWORD */}
      {page === "password" && (
        <div className="page">
          <button onClick={() => setPage("home")}>← Back</button>
          <h2>Password Generator</h2>
          <button onClick={generatePassword}>Generate</button>
          <h3>{pass}</h3>
        </div>
      )}

      {/* WORD */}
      {page === "word" && (
        <div className="page">
          <button onClick={() => setPage("home")}>← Back</button>
          <h2>Word Counter</h2>
          <textarea rows="5" onChange={(e) => setText(e.target.value)} />
          <h3>Words: {wordCount}</h3>
        </div>
      )}

      {/* PERCENT */}
      {page === "percent" && (
        <div className="page">
          <button onClick={() => setPage("home")}>← Back</button>
          <h2>Percentage Calculator</h2>
          <input placeholder="Value" onChange={(e) => setA(e.target.value)} />
          <input placeholder="Total" onChange={(e) => setB(e.target.value)} />
          <h3>{percent ? percent + "%" : ""}</h3>
        </div>
      )}

      {/* CALC */}
      {page === "calc" && <Calculator setPage={setPage} />}
    </div>
  );
}

function Calculator({ setPage }) {
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [res, setRes] = useState("");

  return (
    <div className="page">
      <button onClick={() => setPage("home")}>← Back</button>
      <h2>Calculator</h2>

      <input placeholder="First" onChange={(e) => setX(e.target.value)} />
      <input placeholder="Second" onChange={(e) => setY(e.target.value)} />

      <div>
        <button onClick={() => setRes(Number(x) + Number(y))}>+</button>
        <button onClick={() => setRes(Number(x) - Number(y))}>-</button>
        <button onClick={() => setRes(Number(x) * Number(y))}>×</button>
        <button onClick={() => setRes(Number(x) / Number(y))}>÷</button>
      </div>

      <h3>Result: {res}</h3>
    </div>
  );
}
