import React from "react";
import useStorage from "./hooks/useStorage";
import "./styles/styles.css";

function App() {
  // Using localStorage
  const [name, setName, removeName] = useStorage("name", "local");

  // Using sessionStorage
  const [age, setAge, removeAge] = useStorage("age", "session");

  return (
    <div className="App">
      <h1>Custom Hook for Storage</h1>

      <div className="storage-container">
        <h2>Local Storage</h2>
        <p>
          <strong>Name:</strong> {name || "No name set"}
        </p>
        <button
          className="btn btn-primary"
          onClick={() => setName("Jaimin Raiyani")}
        >
          Set Name
        </button>
        <button className="btn btn-danger" onClick={removeName}>
          Remove Name
        </button>
      </div>

      <div className="storage-container">
        <h2>Session Storage</h2>
        <p>
          <strong>Age:</strong> {age || "No age set"}
        </p>
        <button className="btn btn-success" onClick={() => setAge(22)}>
          Set Age
        </button>
        <button className="btn btn-danger" onClick={removeAge}>
          Remove Age
        </button>
      </div>
    </div>
  );
}

export default App;
