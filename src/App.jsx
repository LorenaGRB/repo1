import { useState, useEffect } from "react";
import "./App.css";

function App() {
  async function createClient() {
    const header = new Headers();
    header.append("Content-Type", "application/json");

    const requestOptions = {
      method: "POST",
      headers: header,
      body: JSON.stringify({
        id: id,
        name: name,
        age: age,
      }),
    };

    try {
      const response = await fetch(
        "http://localhost:8000/clients",
        requestOptions
      );
      const result = await response.json();
      console.log(result);

      // Update the clients state with the newly created client
      setClients([...clients, { id, name, age }]);
    } catch (error) {
      console.log("error", error);
    }
  }

  async function getClients() {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://localhost:8000/clients",
        requestOptions
      );
      const result = await response.json();
      console.log(result);
      setClients(result); // Update the clients state with the fetched data
    } catch (error) {
      console.log("error", error);
    }
  }

  const [clients, setClients] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [id, setId] = useState(0);

  function handleSaveClient() {
    createClient();
    setName("");
    setAge(0);
    setId(0);
  }

  useEffect(() => {
    getClients(); // Fetch and set the initial clients data on component mount
  }, []);

  return (
    <>
      <h1>Repositorio de prueba para usar el docker-compose</h1>
      <label>Ingrese id</label>
      <input
        onChange={(e) => setId(e.target.value)}
        style={{ margin: "10px" }}
        value={id}
      />
      <br />
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
        onClick={handleSaveClient}
      >
        Ingrese datos de cliente
      </button>

      <h2>Lista de clientes que ha ingresado</h2>
      <table style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={index}>
              <td>{client.name}</td>
              <td>{client.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
