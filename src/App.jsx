import { useState } from "react";
import "./App.css";

function App() {
  const [personas, setPersonas] = useState([
    { name: "Lorena", age: 28 },
    { name: "Alvaro", age: 31 },
  ]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  function handleSavePerson() {
    setPersonas((prevState) => [...prevState, { name: name, age: age }]);
    setName("");
    setAge(0);
  }

  return (
    <>
      <h1>Repositorio de prueba para usar el docker-compose</h1>
      <label>Ingrese nombre</label>
      <input
        onChange={(e) => setName(e.target.value)}
        style={{ margin: "10px" }}
        value={name}
      />
      <br />
      <label>Ingrese edad</label>
      <input
        type="number"
        onChange={(e) => setAge(parseInt(e.target.value))}
        style={{ margin: "10px" }}
        value={age}
      />
      <br />
      <button
        type="submit"
        style={{ border: "1px solid black" }}
        onClick={handleSavePerson}
      >
        Ingrese datos de persona
      </button>

      <h2>Lista de personas que ha ingresado</h2>
      <table style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {personas.map((persona, index) => (
            <tr key={index}>
              <td>{persona.name}</td>
              <td>{persona.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
