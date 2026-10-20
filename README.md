# Challenge — Colas: Cajero Automático (ATM)

Proyecto en React + Vite que implementa la estructura de datos secuencial **Cola (Queue - FIFO)** para la materia **Estructuras de Datos II**.

---

## 🏧 Enunciado
> *"Create and handle new queue of people in one ATM. Every person in the ATM must have its name, withdrawal amount and a random arrival date assigned by the system. Fill the queue with some mock data. Create a new project in react, and implements a new screen with a form to create a new person, then add the person to the queue. Print the queue in screen according to the arrival date."*

---

## ⚙️ Características Implementadas

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
   - `arrivalDate`: Fecha y hora de llegada asignada aleatoriamente por el sistema.

3. **Formulario Interactivo (`PersonForm.jsx`)**:
   - Registro de nuevas personas y su monto a retirar.
   - Asignación aleatoria automática de fecha de llegada en el sistema (`dateUtils.js`).

4. **Visualización de la Fila (`QueueDisplay.jsx` & `AtmHeader.jsx`)**:
   - Muestra la cola en pantalla ordenada cronológicamente por su fecha de llegada.
   - Indicador visual del frente de la fila (atención en ventanilla).
   - Acciones de atención (`dequeue`), consulta (`peek`), recarga de mocks y vaciado.

---

## 📁 Estructura

```text
src/
├── components/
│   └── atm/
│       ├── AtmHeader.jsx        # Métricas y cabecera del cajero
│       ├── PersonForm.jsx       # Formulario para encolar clientes
│       └── QueueDisplay.jsx     # Visualización y atención de la fila
├── data/
│   └── atmPeople.js             # Mocks iniciales de clientes del ATM
├── models/
│   └── Queue.js                 # Clase Cola (FIFO)
├── pages/
│   └── AtmQueuePage.jsx         # Pantalla principal del Cajero ATM
├── utils/
│   └── dateUtils.js             # Generador de fechas aleatorias y formateadores
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
