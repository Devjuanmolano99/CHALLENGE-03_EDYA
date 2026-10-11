function CityFilter({ cities, selectedCity, onSelectCity, peopleInCity }) {
  return (
    <div className="card-panel">
      <h3>🏙️ Personas por Ciudad</h3>
      <p className="card-desc">
        Selecciona una ciudad para consultar quiénes viven allí (método{" "}
        <code>getPeopleInCity</code>):
      </p>

      <div className="city-selector">
        <label htmlFor="city-select">Filtrar por ciudad:</label>
        <select
          id="city-select"
          value={selectedCity}
          onChange={(e) => onSelectCity(e.target.value)}
          className="select-input"
        >
          {cities.map((city) => (
            <option key={city.id} value={city.id}>
              {city.name}
            </option>
          ))}
        </select>
      </div>

      <div className="results-container">
        <div className="results-header">
          <span>
            Habitantes en <strong>{selectedCity}</strong>:
          </span>
          <span className="count-badge">{peopleInCity.length} personas</span>
        </div>

        {peopleInCity.length === 0 ? (
          <p className="empty-text">No hay personas registradas en esta ciudad.</p>
        ) : (
          <ul className="people-list">
            {peopleInCity.map((person) => (
              <li key={person.id} className="person-item">
                <div className="person-avatar">👤</div>
                <div className="person-details">
                  <span className="person-name">{person.name}</span>
                  <span className="person-age">{person.age} años</span>
                </div>
                <span className="city-tag">{person.city}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default CityFilter;
