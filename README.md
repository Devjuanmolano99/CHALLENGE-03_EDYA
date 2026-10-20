# Challenge — Pilas: Pila de Libros (Stack)

Proyecto en React + Vite que implementa la estructura de datos secuencial **Pila (Stack - LIFO)** para la materia **Estructuras de Datos II**.

---

## 📚 Enunciado
> *"Create and handle new stack of books. Every book must have its Name, ISBN, Author and Editorial. Fill the stack with some mock data. Create a new project in react, and implements a new screen with a form to create a new book, then add the book to the stack. Print the books stack in screen."*

---

## ⚙️ Características Implementadas

1. **Modelo `Stack.js` (LIFO)**:
   - `push(element)`: Apila un nuevo libro en la cima.
   - `pop()`: Desapila y remueve el libro de la cima.
   - `peek()`: Consulta el libro en la cima sin removerlo.
   - `isEmpty()`: Verifica si la pila está vacía.
   - `size()`: Retorna la cantidad actual de libros en la pila.
   - `print()`: Muestra el estado de la pila en consola.

2. **Atributos de cada libro**:
   - `name`: Nombre o título del libro.
   - `isbn`: Código ISBN único.
   - `author`: Autor del libro.
   - `editorial`: Editorial encargada.

3. **Formulario Interactivo (`BookForm.jsx`)**:
   - Registro de nuevos libros con validación de campos.
   - Inserción directa en la cima de la pila (`push`).

4. **Visualización de la Pila (`BookStackDisplay.jsx`)**:
   - Representación gráfica de los libros apilados uno sobre otro.
   - Indicador visual del tope de la pila (`TOP`).
   - Acciones interactivas para desapilar (`pop`), recargar libros iniciales y vaciar la pila.

---

## 📁 Estructura

```text
src/
├── components/
│   └── books/
│       ├── BookForm.jsx         # Formulario para registrar y apilar libros
│       └── BookStackDisplay.jsx # Visualización gráfica de la pila y acciones LIFO
├── data/
│   └── mockBooks.js             # Mocks iniciales de libros
├── models/
│   └── Stack.js                 # Clase Pila (LIFO)
├── pages/
│   └── BooksStackPage.jsx       # Pantalla principal de la Pila de Libros
├── App.css                      # Estilos responsivos
├── App.jsx                      # Componente raíz
└── main.jsx                     # Punto de entrada
```

---

## 🚀 Cómo Ejecutar

```bash
npm install
npm run dev
```

Abre `http://localhost:5173/` en el navegador.
