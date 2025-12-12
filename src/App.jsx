import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./Button";
import { Routes, Route, Link } from "react-router-dom";
import Learn from "./Learn";
import InputPage from "./InputPage";
import RegistrationForm from "./RegistrationForm";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Navigation links */}
      {/* <nav style={{ marginBottom: "10px" }}>
        <Link to="/" style={{ marginRight: "20px" }}>Home</Link>
        <Link to="/learn" style={{ marginRight: "20px" }}>Learn</Link>
        <Link to="/input">Input Page</Link>
      </nav> */}

      <Routes>
        {/* ---------- HOME PAGE ---------- */}
        <Route
          path="/"
          element={
            <div>
              <a href="https://vite.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>

              <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>

              <h1>Vite + React</h1>

              <div className="card">
                <button onClick={() => setCount((c) => c + 1)}>
                  Count is {count}
                </button>

                <p>
                  Edit <code>src/App.jsx</code> and save to test HMR
                </p>
              </div>

              <h1>My First React App</h1>
              <Button text=" Click me to learn React" to="/learn" /> &nbsp;&nbsp;&nbsp;
              <Button text=" Go to Registration Form" to="/RegistrationForm" />

              <p className="read-the-docs">
                Click on the Vite and React logos to learn more
              </p>
            </div>
          }
        />
        {/* ---------- LEARN PAGE ---------- */}
        <Route path="/learn" element={<Learn />} />

        {/* ---------- INPUT PAGE ---------- */}
        <Route path="/input" element={<InputPage />} />
         {/* ---------- Registration PAGE ---------- */}
         <Route path="/RegistrationForm" element={<RegistrationForm />} />
      </Routes>
    </>
  );
}

export default App;