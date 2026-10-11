import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AtmQueuePage from "./pages/AtmQueuePage";
import BooksStackPage from "./pages/BooksStackPage";
import SongsPage from "./pages/SongsPage";
import BrowserPage from "./pages/BrowserPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/atm" element={<AtmQueuePage />} />
        <Route path="/books" element={<BooksStackPage />} />
        <Route path="/songs" element={<SongsPage />} />
        <Route path="/browser" element={<BrowserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
