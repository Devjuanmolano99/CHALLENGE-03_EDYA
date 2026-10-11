import { formatCurrency, formatDateTime } from "../../utils/dateUtils";

function QueueDisplay({
  people,
  onDequeue,
  onResetMock,
  onClearQueue,
  attendedPerson,
}) {
  // Ordenamos según la fecha de llegada para garantizar visualización cronológica (FIFO)
  const sortedPeople = [...people].sort(
    (a, b) => new Date(a.arrivalDate).getTime() - new Date(b.arrivalDate).getTime()
  );

  return (
    <div className="card-panel">
      <div className="queue-controls-bar">
        <div>
          <h3>📋 Fila de personas en el Cajero ({sortedPeople.length})</h3>
          <p className="card-description">
            Ordenadas estrictamente por su <strong>fecha de llegada (FIFO)</strong>.
          </p>
        </div>

        <div className="actions-cluster">
          <button
            onClick={onDequeue}
            disabled={sortedPeople.length === 0}
            className="btn success"
            title="Atiende y remueve a la primera persona de la fila (FIFO)"
          >
            🏧 Atender en Cajero (Dequeue)
          </button>
          <button
            onClick={onResetMock}
            className="btn secondary"
            title="Recargar datos de prueba"
          >
            🔄 Cargar Mocks
          </button>
          <button
            onClick={onClearQueue}
            disabled={sortedPeople.length === 0}
            className="btn danger"
            title="Vaciar la fila completa"
          >
            🗑️ Vaciar
          </button>
        </div>
      </div>

      {attendedPerson && (
        <div className="attended-notification">
          <span className="notif-icon">✅</span>
          <div>
            <strong>¡Atención completada!</strong> Se atendió a{" "}
            <strong>{attendedPerson.name}</strong> y retiró{" "}
            <strong>{formatCurrency(attendedPerson.withdrawalAmount)}</strong>.
            <div className="arrival-sub">
              Llegó a las: {formatDateTime(attendedPerson.arrivalDate)}
            </div>
          </div>
        </div>
      )}

      {sortedPeople.length === 0 ? (
        <div className="empty-state">
          <span className="empty-icon">📭</span>
          <h4>El cajero está libre</h4>
          <p>No hay personas esperando en la fila. Agrega una nueva persona o carga los datos de prueba.</p>
        </div>
      ) : (
        <div className="queue-list-container">
          <div className="atm-counter-point">
            <span className="counter-badge">🏧 VENTANILLA DEL CAJERO</span>
            <span className="counter-arrow">▼ Turno de atención</span>
          </div>

          <div className="queue-items">
            {sortedPeople.map((person, index) => {
              const isFirst = index === 0;

              return (
                <div
                  key={person.id}
                  className={`queue-card ${isFirst ? "front-person" : ""}`}
                >
                  <div className="queue-position">
                    <span className="pos-number">#{index + 1}</span>
                    {isFirst && <span className="pos-tag">PRIMERO (FRONT)</span>}
                  </div>

                  <div className="queue-info">
                    <h4 className="person-name">{person.name}</h4>
                    <div className="person-meta">
                      <span className="meta-item amount">
                        💵 Retiro: <strong>{formatCurrency(person.withdrawalAmount)}</strong>
                      </span>
                      <span className="meta-item arrival">
                        🕒 Llegada: <strong>{formatDateTime(person.arrivalDate)}</strong>
                      </span>
                    </div>
                  </div>

                  <div className="queue-status">
                    {isFirst ? (
                      <span className="status-badge active">Listo para retiro</span>
                    ) : (
                      <span className="status-badge waiting">En espera</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default QueueDisplay;
