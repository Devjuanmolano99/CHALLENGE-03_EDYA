# Challenge 05 & 04 — Pilas y Colas (EDYA)

Proyecto en React + Vite que implementa las estructuras de datos secuenciales **Colas (Queue - FIFO)** y **Pilas (Stack - LIFO)** para la materia **Estructuras de Datos II**.

---

## 🏧 Challenge 05 — Colas: Cajero Automático (ATM)
> **Enunciado:**  
> *"Create and handle new queue of people in one ATM. Every person in the ATM must have its name, withdrawal amount and a random arrival date assigned by the system. Fill the queue with some mock data. Create a new project in react, and implements a new screen with a form to create a new person, then add the person to the queue. Print the queue in screen according to the arrival date."*

### Características implementadas:
1. **Modelo `Queue.js` (FIFO)**:
   - `enqueue(element)`: Añade una persona al final de la fila.
   - `dequeue()`: Atiende y retira a la persona al frente del cajero.
   - `peek()`: Consulta el cliente que está al frente sin retirarlo.
   - `isEmpty()`: Verifica si el cajero está libre.
   - `size()`: Cantidad de clientes esperando.
   - `print()`: Muestra el estado de la cola en consola.
2. **Atributos de cada cliente**:
   - `name`: Nombre de la persona.
   - `withdrawalAmount`: Monto a retirar ($ COP).
   - `arrivalDate`: **Fecha y hora de llegada asignada aleatoriamente por el sistema**.
3. **Formulario interactivo**:
   - Registro de nuevas personas y su monto a retirar.
   - Asignación aleatoria automática de fecha de llegada en el cliente/sistema.
4. **Visualización de la fila**:
   - Muestra la cola en pantalla ordenada cronológicamente por su fecha de llegada.
   - Indicador visual del frente de la fila (atención en ventanilla).
   - Acciones de atención (`dequeue`), consulta (`peek`), carga de mocks y vaciado.

---

## 📚 Challenge 04 — Pilas: Pila de Libros (Stack)
> **Enunciado:**  
> *"Create and handle new stack of books. Every book must have its Name, ISBN, Author and Editorial. Fill the stack with some mock data. Create a new project in react, and implements a new screen with a form to create a new book, then add the book to the stack. Print the books stack in screen."*

### Características implementadas:
1. **Modelo `Stack.js` (LIFO)**:
   - Operaciones `push`, `pop`, `peek`, `size`, `isEmpty`, `print`.
2. **Atributos de cada libro**:
   - `name`, `isbn`, `author`, `editorial`.
3. **Formulario y visualización**:
   - Apilado dinámico en el tope y desapilado (`pop`).

---

## 📁 Estructura del Proyecto

Organizado de forma modular en carpetas bajo `src/`:

```text
src/
├── components/
│   ├── atm/
│   │   ├── AtmHeader.jsx        # Métricas y cabecera del cajero
│   │   ├── PersonForm.jsx       # Formulario para encolar clientes
│   │   └── QueueDisplay.jsx     # Visualización y atención de la fila
│   └── books/
│       ├── BookForm.jsx         # Formulario para apilar libros
│       └── BookStackDisplay.jsx # Visualización de la pila de libros
├── data/
│   ├── atmPeople.js             # Mocks iniciales de clientes del ATM
│   ├── mockBooks.js             # Mocks iniciales de libros
│   ├── songs.js                 # Reto 03 (listas simples)
│   └── visitedPages.js          # Reto 03 (listas dobles)
├── models/
│   ├── Queue.js                 # Clase Cola (FIFO)
│   ├── Stack.js                 # Clase Pila (LIFO)
│   ├── LinkedList.js            # Reto 03 (Lista enlazada)
│   └── DoublyLinkedList.js      # Reto 03 (Lista doblemente enlazada)
├── pages/
│   ├── HomePage.jsx             # Menú principal interactivo
│   ├── AtmQueuePage.jsx         # Pantalla del Cajero ATM (Queue)
│   ├── BooksStackPage.jsx       # Pantalla de la Pila de Libros (Stack)
│   ├── SongsPage.jsx            # Reto 03
│   └── BrowserPage.jsx          # Reto 03
├── utils/
│   └── dateUtils.js             # Generador de fechas aleatorias y formateadores
├── App.css                      # Estilos responsivos
├── App.jsx                      # Enrutador de la aplicación
└── main.jsx                     # Punto de entrada
```

---

## 🚀 Cómo ejecutar el proyecto

1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
3. Abrir la URL indicada por Vite (normalmente `http://localhost:5173/`).
