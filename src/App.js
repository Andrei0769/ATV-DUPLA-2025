// === src/App.js ===
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TelaInicial from "./pages/TelaInicial";
import Cadastro from "./pages/Cadastro";
import Lista from "./pages/Lista";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TelaInicial />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cardapio" element={<Lista />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}