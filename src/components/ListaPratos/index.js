// === src/components/Lista/index.jsx ===
import { useState } from "react";
import ConfirmacaoDialog from "../ConfirmacaoDialog";
import "./styles.css";

export default function Lista({ pratos, onDelete }) {  const [pratoParaExcluir, setPratoParaExcluir] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const handleDelete = async (id) => {
    try {
      setDeletingId(id);
      const response = await fetch(`https://site-dupla.onrender.com/pratos/${id}`, {
        method: 'DELETE',
      });      if (!response.ok) {
        throw new Error('Erro ao excluir o prato');
      }

      onDelete(id);
      alert('Prato excluído com sucesso!');
    } catch (error) {
      console.error('Erro:', error);
      alert('Não foi possível excluir o prato');
    } finally {
      setDeletingId(null);
      setPratoParaExcluir(null);
    }
  };

  return (
    <>
      <div className="lista">
        {pratos.map(prato => (
          <div key={prato.id} className={`card ${deletingId === prato.id ? 'deleting' : ''}`}>            <div className="card-actions">
              <button 
                className="delete-button" 
                onClick={() => setPratoParaExcluir(prato)}
                disabled={deletingId !== null}
                title="Excluir prato"
              >
                ×
              </button>
            </div>
            <img src={prato.urlImagem} alt={prato.nomePrato} />
            <h3>{prato.nomePrato}</h3>
            <p>{prato.categoria}</p>
            <p>R$ {Number(prato.preco).toFixed(2)}</p>
            <span className={`status ${prato.disponibilidade === 'Em estoque' ? 'em-estoque' : 'esgotado'}`}>
              {prato.disponibilidade}
            </span>
          </div>
        ))}
      </div>

      <ConfirmacaoDialog
        isOpen={pratoParaExcluir !== null}
        message={`Tem certeza que deseja excluir o prato "${pratoParaExcluir?.nomePrato}"?`}
        onConfirm={() => handleDelete(pratoParaExcluir.id)}
        onCancel={() => setPratoParaExcluir(null)}
      />
    </>
  );
}
