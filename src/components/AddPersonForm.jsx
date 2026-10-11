import { useState } from "react";

function AddPersonForm({ cities, allPeople, onAddPerson }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState(cities[0]?.id || "Cali");
  const [friendWith, setFriendWith] = useState("");
  const [msg, setMsg] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !age) {
      setMsg({ type: "error", text: "Por favor completa nombre y edad." });
      return;
    }

    const newPerson = {
      name: name.trim(),
      age: parseInt(age, 10),
      city,
      friendWith: friendWith || null,
    };

    onAddPerson(newPerson);

    setMsg({
      type: "success",
      text: `¡${name.trim()} agregado al grafo en ${city}!`,
    });

    setName("");
    setAge("");
    setFriendWith("");

    setTimeout(() => setMsg(null), 3000);
  };

  return (
    <div className="card-panel">
      <h3>➕ Agregar Persona al Grafo</h3>
      <p className="card-desc">
        Crea un nuevo nodo de persona, conéctalo a su ciudad y opcionalmente a un amigo.
      </p>

      <form onSubmit={handleSubmit} className="form-layout">
        <div className="form-row">
          <div className="input-group">
            <label>Nombre:</label>
            <input
              type="text"
              placeholder="Ej: Daniel"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-input"
            />
          </div>

          <div className="input-group">
            <label>Edad:</label>
            <input
              type="number"
              min="1"
              max="120"
              placeholder="Ej: 22"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="text-input"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="input-group">
            <label>Ciudad de residencia:</label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="select-input"
            >
              {cities.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div className="input-group">
            <label>Amigo inicial (opcional):</label>
            <select
              value={friendWith}
              onChange={(e) => setFriendWith(e.target.value)}
              className="select-input"
            >
              <option value="">-- Ninguno --</option>
              {allPeople.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Agregar al Grafo
        </button>

        {msg && <div className={`alert-box ${msg.type}`}>{msg.text}</div>}
      </form>
    </div>
  );
}

export default AddPersonForm;
