import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");

  // AGE
  const [dob, setDob] = useState("");

  // PASSWORD
  const [pass, setPass] = useState("");

  // WORD
  const [text, setText] = useState("");

  // PERCENT
  const [a, setA] = useState("");
  const [b, setB] = useState("");

  const generatePassword = () => {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$!";
    let p = "";
    for (let i = 0; i < 10; i++) {
      p += chars[Math.floor(Math.random() * chars.length)];
    }
    setPass(p);
  };

  const ageCalc = () => {
    if (!dob) return "";
    const diff = Date.now() - new Date(dob).getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  };

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

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
          <h3>Age: {ageCalc()}</h3>
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
          <textarea
            rows="5"
            onChange={(e) => setText(e.target.value)}
            placeholder="Type here..."
          />
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
      {page === "calc" && (
        <div className="page">
          <button onClick={() => setPage("home")}>← Back</button>
          <h2>Calculator</h2>
          <p>Simple version</p>
          <Calculator />
        </div>
      )}
    </div>
  );
}

// SIMPLE CALCULATOR
function Calculator() {
  const [v1, setV1] = useState("");
  const [v2, setV2] = useState("");
  const [result, setResult] = useState("");

  return (
    <div>
      <input placeholder="First" onChange={(e) => setV1(e.target.value)} />
      <input placeholder="Second" onChange={(e) => setV2(e.target.value)} />

      <div style={{ marginTop: 10 }}>
        <button onClick={() => setResult(Number(v1) + Number(v2))}>+</button>
        <button onClick={() => setResult(Number(v1) - Number(v2))}>-</button>
        <button onClick={() => setResult(Number(v1) * Number(v2))}>×</button>
        <button onClick={() => setResult(Number(v1) / Number(v2))}>÷</button>
      </div>

      <h3>Result: {result}</h3>
    </div>
  );
          }
