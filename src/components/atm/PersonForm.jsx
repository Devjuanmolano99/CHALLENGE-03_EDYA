import { useState } from "react";
import { generateRandomArrivalDate, formatCurrency } from "../../utils/dateUtils";

function PersonForm({ onAddPerson }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [feedback, setFeedback] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const numAmount = parseFloat(amount);

    if (!trimmedName) {
      setFeedback({ type: "error", message: "Ingresa el nombre de la persona." });
      return;
    }

    if (isNaN(numAmount) || numAmount <= 0) {
      setFeedback({
        type: "error",
        message: "Ingresa un monto de retiro válido mayor a 0.",
      });
      return;
    }

    // El sistema asigna automáticamente una fecha y hora aleatoria de llegada
    const randomArrivalDate = generateRandomArrivalDate({ min: 1, max: 30 });

    const newPerson = {
      id: "p-" + Date.now(),
      name: trimmedName,
      withdrawalAmount: numAmount,
      arrivalDate: randomArrivalDate,
    };

    onAddPerson(newPerson);

    setFeedback({
      type: "success",
      message: `¡${trimmedName} se formó en la fila con un retiro de ${formatCurrency(numAmount)}!`,
    });

    setName("");
    setAmount("");

    // Ocultar mensaje tras 4 segundos
    setTimeout(() => {
      setFeedback(null);
    }, 4000);
  };

  return (
    <div className="card-panel">
      <h3>➕ Formar nueva persona en la fila</h3>
      <p className="card-description">
        Ingresa los datos del cliente. El sistema le asignará automáticamente una{" "}
        <strong>fecha y hora de llegada aleatoria</strong>.
      </p>

      <form onSubmit={handleSubmit} className="atm-form">
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="person-name">Nombre de la persona</label>
            <input
              id="person-name"
              type="text"
              placeholder="Ej: Sofía Herrera"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label htmlFor="withdrawal-amount">Monto a retirar ($ COP)</label>
            <input
              id="withdrawal-amount"
              type="number"
              min="10000"
              step="10000"
              placeholder="Ej: 200000"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="input-field"
            />
          </div>
        </div>

        <div className="system-assigned-badge">
          <span className="badge-icon">🕒</span>
          <span>
            <strong>Fecha de llegada:</strong> Asignada aleatoriamente por el sistema al enviar (método <code>enqueue</code>).
          </span>
        </div>

        <button type="submit" className="btn primary btn-full">
          📥 Enqueue (Agregar a la Cola)
        </button>

        {feedback && (
          <div className={`feedback-alert ${feedback.type}`}>
            {feedback.message}
          </div>
        )}
      </form>
    </div>
  );
}

export default PersonForm;
