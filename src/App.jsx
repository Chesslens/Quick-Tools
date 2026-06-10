import { useState } from "react";

export default function App() {
  const [tab, setTab] = useState("home");

  return (
    <div className="app">

      {/* CONTENT */}
      <div className="screen">

        {tab === "home" && <Home setTab={setTab} />}
        {tab === "age" && <Age setTab={setTab} />}
        {tab === "password" && <Password setTab={setTab} />}
        {tab === "word" && <Word setTab={setTab} />}
        {tab === "percent" && <Percent setTab={setTab} />}
        {tab === "calc" && <Calc setTab={setTab} />}

      </div>

      {/* DOCK (iOS STYLE) */}
      <div className="dock">
        <button onClick={() => setTab("home")}>🏠</button>
        <button onClick={() => setTab("age")}>🎂</button>
        <button onClick={() => setTab("password")}>🔐</button>
        <button onClick={() => setTab("word")}>📝</button>
        <button onClick={() => setTab("calc")}>🧮</button>
      </div>

    </div>
  );
}

/* ---------------- HOME ---------------- */
function Home({ setTab }) {
  return (
    <div className="page">
      <h1 className="title">Quick Tools</h1>

      <div className="grid">
        <div className="card" onClick={() => setTab("age")}>Age</div>
        <div className="card" onClick={() => setTab("password")}>Password</div>
        <div className="card" onClick={() => setTab("word")}>Word</div>
        <div className="card" onClick={() => setTab("percent")}>%</div>
        <div className="card" onClick={() => setTab("calc")}>Calc</div>
      </div>
    </div>
  );
}

/* ---------------- AGE ---------------- */
function Age() {
  const [dob, setDob] = useState("");

  const age = dob
    ? new Date().getFullYear() - new Date(dob).getFullYear()
    : "";

  return (
    <div className="page">
      <h2>Age Calculator</h2>
      <input type="date" onChange={(e) => setDob(e.target.value)} />
      <h3>{age && `Age: ${age}`}</h3>
    </div>
  );
}

/* ---------------- PASSWORD ---------------- */
function Password() {
  const [pass, setPass] = useState("");

  const gen = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$";
    let p = "";
    for (let i = 0; i < 10; i++) {
      p += chars[Math.floor(Math.random() * chars.length)];
    }
    setPass(p);
  };

  return (
    <div className="page">
      <h2>Password Generator</h2>
      <button onClick={gen}>Generate</button>
      <h3>{pass}</h3>
    </div>
  );
}

/* ---------------- WORD ---------------- */
function Word() {
  const [text, setText] = useState("");
  const count = text.trim() ? text.trim().split(/\s+/).length : 0;

  return (
    <div className="page">
      <h2>Word Counter</h2>
      <textarea onChange={(e) => setText(e.target.value)} />
      <h3>Words: {count}</h3>
    </div>
  );
}

/* ---------------- PERCENT ---------------- */
function Percent() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");

  const res = a && b ? ((a / b) * 100).toFixed(2) : "";

  return (
    <div className="page">
      <h2>Percentage</h2>
      <input placeholder="Value" onChange={(e) => setA(e.target.value)} />
      <input placeholder="Total" onChange={(e) => setB(e.target.value)} />
      <h3>{res && res + "%"}</h3>
    </div>
  );
}

/* ---------------- CALC ---------------- */
function Calc() {
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [r, setR] = useState("");

  return (
    <div className="page">
      <h2>Calculator</h2>

      <input onChange={(e) => setX(e.target.value)} placeholder="A" />
      <input onChange={(e) => setY(e.target.value)} placeholder="B" />

      <div className="row">
        <button onClick={() => setR(Number(x) + Number(y))}>+</button>
        <button onClick={() => setR(Number(x) - Number(y))}>-</button>
        <button onClick={() => setR(Number(x) * Number(y))}>×</button>
        <button onClick={() => setR(Number(x) / Number(y))}>÷</button>
      </div>

      <h3>Result: {r}</h3>
    </div>
  );
}
