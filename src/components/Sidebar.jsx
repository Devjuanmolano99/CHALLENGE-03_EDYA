import SidebarItem from "./SidebarItem";

function Sidebar({ treeRoot, activeNode, onSelectNode }) {
  if (!treeRoot || !treeRoot.children) {
    return <aside className="sidebar">No hay menús disponibles.</aside>;
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <span className="brand-dot"></span>
        <span className="brand-text">Sistema N-Ary Tree</span>
      </div>

      <nav className="sidebar-nav">
        <ul className="root-menu-list">
          {treeRoot.children.map((child, index) => (
            <SidebarItem
              key={`${child.link}-${index}`}
              node={child}
              activeNode={activeNode}
              onSelectNode={onSelectNode}
              level={0}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
