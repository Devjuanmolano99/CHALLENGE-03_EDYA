function SlideExampleRunner({ onRunExample }) {
  return (
    <div className="card-panel example-card">
      <div className="example-badge">Caso de Prueba · Diapositiva 21</div>
      <h4>Ejemplo oficial del profesor:</h4>
      <pre className="code-snippet">
{`insert("air max", 90)
insert("air force", 95)
insert("air jordan", 85)
insert("adidas boost", 80)

searchTopK("air", 2):
[
  { name: "air force", popularity: 95 },
  { name: "air max", popularity: 90 }
]`}
      </pre>

      <button
        type="button"
        onClick={() => onRunExample("air", 2)}
        className="test-btn"
      >
        ▶ Probar caso de la diapositiva: searchTopK("air", 2)
      </button>
    </div>
  );
}

export default SlideExampleRunner;
