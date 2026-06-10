import { useState } from "react";

export default function App() {
  const [tab, setTab] = useState("home");

  return (
    <div className="app">

      {/* SCREEN (animated switch) */}
      <div className="screen fade">

        {tab === "home" && <Home setTab={setTab} />}
        {tab === "age" && <Age />}
        {tab === "password" && <Password />}
        {tab === "word" && <Word />}
        {tab === "percent" && <Percent />}
        {tab === "calc" && <Calc />}

      </div>

      {/* DOCK */}
      <div className="dock">
        <DockButton icon="🏠" active={tab === "home"} onClick={() => setTab("home")} />
        <DockButton icon="🎂" active={tab === "age"} onClick={() => setTab("age")} />
        <DockButton icon="🔐" active={tab === "password"} onClick={() => setTab("password")} />
        <DockButton icon="📝" active={tab === "word"} onClick={() => setTab("word")} />
        <DockButton icon="🧮" active={tab === "calc"} onClick={() => setTab("calc")} />
      </div>

    </div>
  );
}

/* DOCK BUTTON (ACTIVE ANIMATION) */
function DockButton({ icon, onClick, active }) {
  return (
    <button
      onClick={onClick}
      className={`dock-btn ${active ? "active" : ""}`}
    >
      {icon}
    </button>
  );
}

/* HOME */
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

/* AGE */
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

/* PASSWORD */
function Password() {
  const [pass, setPass] = useState("");

  const gen = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$!";
    let p = "";
    for (let i = 0; i < 12; i++) {
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

/* WORD */
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

/* PERCENT */
function Percent() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");

  const res = a && b ? ((a / b) * 100).toFixed(2) : "";

  return (
    <div className="page">
      <h2>Percentage</h2>
      <input onChange={(e) => setA(e.target.value)} placeholder="Value" />
      <input onChange={(e) => setB(e.target.value)} placeholder="Total" />
      <h3>{res && res + "%"}</h3>
    </div>
  );
}

/* CALC */
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
