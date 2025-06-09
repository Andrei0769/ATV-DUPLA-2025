// === src/pages/Lista/index.jsx ===
import { useEffect, useState } from "react";
import ListaComponent from "../../components/ListaPratos";
import "./styles.css";

export default function Lista() {  const [pratos, setPratos] = useState([]);

  useEffect(() => {
    fetch("https://atv-dupla-2025.onrender.com/pratos")
      .then(res => res.json())
      .then(data => setPratos(data));
  }, []);

  const handleDelete = (id) => {
    setPratos(pratos => pratos.filter(prato => prato.id !== id));
  };

  return (
    <div className="pagina-lista">
      <h2>Cardápio</h2>
      <ListaComponent pratos={pratos} onDelete={handleDelete} />
    </div>
  );
}
