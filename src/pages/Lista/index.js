import { useEffect, useState } from "react";
import ListaComponent from "../../components/ListaPratos";
import "./styles.css";

export default function Lista() {
  const [pratos, setPratos] = useState([]);

  useEffect(() => {
    async function carregarPratos() {
      try {
        const response = await fetch("https://atv-dupla-2025.onrender.com/pratos");
        const text = await response.text();
        const data = text ? JSON.parse(text) : [];

        setPratos(data);
      } catch (error) {
        console.error("Erro ao carregar pratos:", error);
      }
    }

    carregarPratos();
  }, []);

  const handleDelete = (id) => {
    setPratos((prevPratos) => prevPratos.filter((prato) => prato.id !== id));
  };

  return (
    <div className="pagina-lista">
      <h2>Cardápio</h2>
      <ListaComponent pratos={pratos} onDelete={handleDelete} />
    </div>
  );
}
