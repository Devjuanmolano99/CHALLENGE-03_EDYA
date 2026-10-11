import { useEffect, useRef, useState } from "react";
import { Graph } from "react-d3-graph";

function GraphView({ graphData, onNodeClick, selectedNodeInfo }) {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 680, height: 480 });

  useEffect(() => {
    if (containerRef.current) {
      const { clientWidth } = containerRef.current;
      if (clientWidth > 200) {
        setDimensions({
          width: clientWidth - 20,
          height: 480,
        });
      }
    }
  }, []);

  const config = {
    nodeHighlightBehavior: true,
    directed: false,
    automaticRearrangeAfterDropNode: true,
    collapsible: false,
    height: dimensions.height,
    width: dimensions.width,
    d3: {
      gravity: -220,
      linkLength: 100,
    },
    node: {
      color: "#10b981",
      size: 380,
      highlightStrokeColor: "#facc15",
      highlightStrokeWidth: 2,
      labelProperty: "name",
      fontSize: 12,
      fontColor: "#f1f5f9",
      fontWeight: "500",
    },
    link: {
      highlightColor: "#facc15",
      strokeWidth: 2,
    },
  };

  return (
    <div className="card-panel graph-panel" ref={containerRef}>
      <div className="graph-header">
        <div>
          <h3>🕸️ Visualización con react-d3-graph</h3>
          <p className="card-desc">
            Haz clic en cualquier nodo para explorar sus relaciones y detalles.
          </p>
        </div>

        <div className="graph-legend">
          <span className="legend-item">
            <span className="legend-icon city">◆</span> Ciudad
          </span>
          <span className="legend-item">
            <span className="legend-icon person">●</span> Persona
          </span>
          <span className="legend-item">
            <span className="legend-line city-link">―</span> Residencia
          </span>
          <span className="legend-item">
            <span className="legend-line friend-link">―</span> Amistad
          </span>
        </div>
      </div>

      <div className="d3-container">
        {graphData.nodes.length > 0 ? (
          <Graph
            id="friends-cities-graph"
            data={graphData}
            config={config}
            onClickNode={onNodeClick}
          />
        ) : (
          <p>Cargando grafo...</p>
        )}
      </div>

      {selectedNodeInfo && (
        <div className="node-detail-banner">
          <span className="detail-icon">
            {selectedNodeInfo.type === "city" ? "🏙️" : "👤"}
          </span>
          <div className="detail-text">
            <strong>{selectedNodeInfo.name}</strong>
            {selectedNodeInfo.type === "person" ? (
              <span> · {selectedNodeInfo.age} años · Vive en: {selectedNodeInfo.city}</span>
            ) : (
              <span> · Ciudad registrada</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default GraphView;
