import { useMemo, useState } from "react";
import LinkedList from "../models/LinkedList";
import songs from "../data/songs";
import { Link } from "react-router-dom";

function SongsPage() {
  // Creamos la lista enlazada UNA sola vez y la llenamos con datos
  const playlist = useMemo(() => {
    const list = new LinkedList();
    songs.forEach((song) => list.append(song));
    return list;
  }, []);

  // Guardamos en el estado el nodo "current" para forzar el re-render
  const [currentNode, setCurrentNode] = useState(playlist.goToHead());

  const handleNext = () => {
    const next = playlist.goNext();
    setCurrentNode(next);
  };

  const handleRestart = () => {
    const head = playlist.goToHead();
    setCurrentNode(head);
  };

  const currentSong = currentNode?.value;

  return (
    <div className="page">
      <Link to="/" className="back-link">
        ← Volver al inicio
      </Link>

      <h1> Reproductor de canciones</h1>
      <p className="subtitle">
        Implementado con una <strong>Lista Enlazada Simple (LinkedList)</strong>.
        Solo se puede avanzar hacia adelante, nodo por nodo.
      </p>

      <div className="player-card">
        <span className="badge">Reproduciendo</span>
        <h2>{currentSong?.title}</h2>
        <p>{currentSong?.artist}</p>
        <p className="duration">{currentSong?.duration}</p>
      </div>

      <div className="controls">
        <button onClick={handleRestart}>⏮ Reiniciar</button>
        <button onClick={handleNext} className="primary">
          Siguiente ▶
        </button>
      </div>

      <h3>Lista completa ({playlist.size()} canciones)</h3>
      <ol className="list">
        {playlist.toArray().map((song) => (
          <li
            key={song.id}
            className={song.id === currentSong?.id ? "active" : ""}
          >
            {song.title} — {song.artist}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default SongsPage;
