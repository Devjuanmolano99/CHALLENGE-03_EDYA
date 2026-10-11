# Challenge 09 — Árboles N-Arios (N-ary Trees)

Proyecto en React que resuelve el **Challenge 09** de la clase de **Estructuras de Datos II** (Árboles N-Arios).

---

## 📌 Enunciado
> *"Create a new project in React*  
> *Fill a N-ary tree with some menus and submenus – Every Menu item will have title, a link and a component.*  
> *Create a sidebar menu in screen by printing the previous tree created."*

---

## 🌳 Implementación del Árbol N-Ario

1. **Modelo `TreeNode.js`**:
   - Cada nodo almacena:
     - `title`: Nombre visible en el menú.
     - `link`: Ruta asociada (ej. `/settings/security`).
     - `component`: Componente de React a renderizar al seleccionar el nodo.
     - `children`: Arreglo de nodos hijos (submenús).
   - Métodos:
     - `addChild(node)`: Conecta un hijo al nodo actual.
     - `isLeaf()`: Comprueba si el nodo es hoja.

2. **Estructura construida (`menuTree.js`)**:
   Basada exactamente en el diseño de la diapositiva 24:
   - `Profile`
   - `Messages`
   - `Settings` (Rama con submenús):
     - `Account`
     - `Profile`
     - `Security & Privacy` (seleccionado por defecto)
     - `Password`
     - `Notification`
   - `Help` (Rama con submenús):
     - `FAQ's`
     - `Submit a Ticket`
     - `Network Status`
   - `Logout`

3. **Renderizado en pantalla (`Sidebar.jsx` & `SidebarItem.jsx`)**:
   - Recorre recursivamente la jerarquía del árbol N-ario para renderizar los niveles y submenús.
   - Permite expandir y contraer las ramas con hijos.
   - Al dar clic en un nodo con componente, este se renderiza en la vista principal.

---

## 🚀 Ejecución del proyecto

```bash
npm install
npm run dev
```

Abre `http://localhost:5173/` en el navegador.
