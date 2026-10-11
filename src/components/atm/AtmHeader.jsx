import { formatCurrency } from "../../utils/dateUtils";

function AtmHeader({ queueSize, totalWithdrawal, currentPerson }) {
  return (
    <div className="atm-header-banner">
      <div className="atm-brand">
        <span className="atm-icon">🏧</span>
        <div>
          <h2>Cajero Automático · EDYA Express</h2>
          <p className="atm-sub">Sistema de Gestión de Cola (Queue FIFO)</p>
        </div>
      </div>

      <div className="atm-metrics">
        <div className="metric-box">
          <span className="metric-label">Personas en Fila</span>
          <span className="metric-value">{queueSize}</span>
        </div>
        <div className="metric-box">
          <span className="metric-label">Total a Retirar</span>
          <span className="metric-value">{formatCurrency(totalWithdrawal)}</span>
        </div>
        <div className="metric-box highlight">
          <span className="metric-label">Frente de Fila (Peek)</span>
          <span className="metric-value name-peek">
            {currentPerson ? currentPerson.name : "Nadie en fila"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default AtmHeader;
