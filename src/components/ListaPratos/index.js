// === src/components/Lista/index.jsx ===
import "./styles.css";

export default function Lista({ pratos }) {
  return (
    <div className="lista">
      {pratos.map(prato => (
        <div key={prato.id} className="card">
          <img src={prato.urlImagem} alt={prato.nomePrato} />
          <h3>{prato.nomePrato}</h3>
          <p>{prato.categoria}</p>
          <p>R$ {Number(prato.preco).toFixed(2)}</p>
          <span>{prato.disponibilidade}</span>
        </div>
      ))}
    </div>
  );
}
