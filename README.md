# Challenge 03 — Listas Enlazadas

Proyecto en React que resuelve el Challenge 03 de la Clase 03 (Estructuras de Datos II):

1. **Lista Enlazada Simple (`LinkedList`)** → reproductor de canciones que avanza en orden.
2. **Lista Doblemente Enlazada (`DoublyLinkedList`)** → historial de navegación tipo navegador, para ir "atrás" y "adelante" entre páginas visitadas.
3. Proyecto en **React** con **2 páginas** (`/songs` y `/browser`), cada una usando su respectiva lista y navegando mediante **botones**.

## Estructura

```
src/
  models/
    LinkedList.js         # Lista enlazada simple (Node, append, peek, size, remove, print)
    DoublyLinkedList.js   # Lista doblemente enlazada (Node con prev/next, append, remove)
  data/
    songs.js              # Datos simulados de canciones
    visitedPages.js        # Datos falsos de páginas visitadas
  pages/
    HomePage.jsx           # Menú principal
    SongsPage.jsx          # Reproductor de canciones (usa LinkedList)
    BrowserPage.jsx        # Historial del navegador (usa DoublyLinkedList)
  App.jsx                  # Rutas de la aplicación
  main.jsx                 # Punto de entrada
```

## Cómo ejecutar el proyecto

```bash
npm install
npm run dev
```

Luego abre la URL que indique Vite (por defecto `http://localhost:5173`).


