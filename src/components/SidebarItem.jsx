import { useState } from "react";

// Componente que imprime un nodo del árbol de forma recursiva
function SidebarItem({ node, activeNode, onSelectNode, level = 0 }) {
  const hasChildren = node.children && node.children.length > 0;
  
  // Por defecto mantenemos expandidas las ramas para que coincida con la diapositiva
  const [isOpen, setIsOpen] = useState(true);

  const isSelected = activeNode?.link === node.link;

  const handleClick = (e) => {
    e.preventDefault();
    if (hasChildren) {
      setIsOpen(!isOpen);
    }
    if (node.component) {
      onSelectNode(node);
    }
  };

  return (
    <li className={`menu-node level-${level}`}>
      <div
        className={`menu-item-row ${isSelected ? "selected" : ""} ${hasChildren ? "has-children" : ""}`}
        onClick={handleClick}
      >
        <span className="item-title">{node.title}</span>

        {hasChildren && (
          <span className="toggle-icon">
            {isOpen ? "▲" : "▼"}
          </span>
        )}
      </div>

      {/* Si el nodo tiene hijos en el árbol y está abierto, los imprimimos */}
      {hasChildren && isOpen && (
        <ul className="submenu-list">
          {node.children.map((child, index) => (
            <SidebarItem
              key={`${child.link}-${index}`}
              node={child}
              activeNode={activeNode}
              onSelectNode={onSelectNode}
              level={level + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export default SidebarItem;
