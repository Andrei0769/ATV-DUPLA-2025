// === src/pages/Lista/index.jsx ===
import { useEffect, useState } from "react";
import ListaComponent from "../../components/ListaPratos";
import "./styles.css";

export default function Lista() {
  const [pratos, setPratos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/pratos")
      .then(res => res.json())
      .then(data => setPratos(data));
  }, []);

  return (
    <div className="pagina-lista">
      <h2>Cardápio</h2>
      <ListaComponent pratos={pratos} />
    </div>
  );
}
