import { useState } from "react";

function AddProductForm({ onAddProduct }) {
  const [name, setName] = useState("");
  const [popularity, setPopularity] = useState(85);
  const [feedback, setFeedback] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setFeedback({ type: "error", message: "Ingresa el nombre del producto." });
      return;
    }

    const pop = Number(popularity);
    if (isNaN(pop) || pop < 0 || pop > 100) {
      setFeedback({
        type: "error",
        message: "El puntaje debe estar entre 0 y 100.",
      });
      return;
    }

    onAddProduct(name.trim(), pop);
    setFeedback({
      type: "success",
      message: `¡"${name.trim()}" agregado correctamente!`,
    });

    setName("");
    setPopularity(85);

    setTimeout(() => setFeedback(null), 3000);
  };

  return (
    <div className="card-panel">
      <h3>Agregar producto</h3>
      <p className="card-desc">
        Ingresa un nuevo producto y asígnale su nivel de popularidad.
      </p>

      <form onSubmit={handleSubmit} className="form-layout">
        <div className="form-group">
          <label htmlFor="prod-name">Nombre:</label>
          <input
            id="prod-name"
            type="text"
            placeholder="Ej: air pegasus"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="form-group">
          <div className="pop-label-row">
            <label htmlFor="prod-pop">Popularidad:</label>
            <span className="pop-val-badge">{popularity} pts</span>
          </div>
          <input
            id="prod-pop"
            type="range"
            min="0"
            max="100"
            value={popularity}
            onChange={(e) => setPopularity(Number(e.target.value))}
            className="range-input"
          />
        </div>

        <button type="submit" className="submit-btn">
          Guardar producto
        </button>

        {feedback && (
          <div className={`alert-box ${feedback.type}`}>{feedback.message}</div>
        )}
      </form>
    </div>
  );
}

export default AddProductForm;
