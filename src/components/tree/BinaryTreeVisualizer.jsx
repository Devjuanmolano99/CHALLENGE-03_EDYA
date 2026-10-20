import React from "react";

function computeLayout(node, x = 450, y = 50, dx = 200) {
  if (!node) return null;
  return {
    key: node.key,
    x,
    y,
    left: computeLayout(node.left, x - dx, y + 80, dx * 0.52),
    right: computeLayout(node.right, x + dx, y + 80, dx * 0.52),
  };
}

function renderEdges(layout) {
  if (!layout) return null;
  const edges = [];

  if (layout.left) {
    edges.push(
      <line
        key={`line-${layout.key}-${layout.left.key}`}
        x1={layout.x}
        y1={layout.y}
        x2={layout.left.x}
        y2={layout.left.y}
        stroke="#4f46e5"
        strokeWidth="2.5"
        strokeDasharray="4 2"
      />
    );
    edges.push(...renderEdges(layout.left));
  }

  if (layout.right) {
    edges.push(
      <line
        key={`line-${layout.key}-${layout.right.key}`}
        x1={layout.x}
        y1={layout.y}
        x2={layout.right.x}
        y2={layout.right.y}
        stroke="#06b6d4"
        strokeWidth="2.5"
        strokeDasharray="4 2"
      />
    );
    edges.push(...renderEdges(layout.right));
  }

  return edges;
}

function renderNodes(layout, highlightedKeys = []) {
  if (!layout) return null;
  const nodes = [];

  const isHighlighted = highlightedKeys.includes(layout.key);

  nodes.push(
    <g key={`node-${layout.key}`} className="tree-svg-node">
      <circle
        cx={layout.x}
        cy={layout.y}
        r="24"
        fill={isHighlighted ? "#10b981" : "#1e1e2f"}
        stroke={isHighlighted ? "#059669" : "#6366f1"}
        strokeWidth="3"
        filter="drop-shadow(0 4px 6px rgba(0,0,0,0.3))"
      />
      <text
        x={layout.x}
        y={layout.y + 6}
        textAnchor="middle"
        fill="#ffffff"
        fontWeight="bold"
        fontSize="16"
        fontFamily="inherit"
      >
        {layout.key}
      </text>
    </g>
  );

  if (layout.left) nodes.push(...renderNodes(layout.left, highlightedKeys));
  if (layout.right) nodes.push(...renderNodes(layout.right, highlightedKeys));

  return nodes;
}

export default function BinaryTreeVisualizer({ root, highlightedKeys = [] }) {
  if (!root) {
    return (
      <div className="empty-tree-state">
        <p>El árbol está vacío. Inserta números para comenzar la estructura.</p>
      </div>
    );
  }

  const layout = computeLayout(root, 450, 60, 200);

  return (
    <div className="tree-canvas-container">
      <svg
        viewBox="0 0 900 450"
        className="tree-svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <g>{renderEdges(layout)}</g>
        <g>{renderNodes(layout, highlightedKeys)}</g>
      </svg>
    </div>
  );
}
