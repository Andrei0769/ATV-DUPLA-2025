import React from 'react';
import './styles.css';

export default function PreviewPrato({ prato }) {
  return (
    <div className="preview-container">
      <h3>Preview do Prato</h3>
      <div className="preview-card">
        {prato.urlImagem ? (
          <img src={prato.urlImagem} alt={prato.nomePrato || 'Preview'} />
        ) : (
          <div className="placeholder-image">
            <span>Adicione uma imagem</span>
          </div>
        )}
        <div className="preview-info">
          <h4>{prato.nomePrato || 'Nome do Prato'}</h4>
          <p className="preview-descricao">{prato.descricao || 'Descrição do prato'}</p>
          <div className="preview-details">
            <span className="preview-categoria">{prato.categoria}</span>
            <span className="preview-preco">
              {prato.preco ? `R$ ${Number(prato.preco).toFixed(2)}` : 'R$ 0,00'}
            </span>
          </div>
          <span className={`preview-status ${prato.disponibilidade === 'Em estoque' ? 'em-estoque' : 'esgotado'}`}>
            {prato.disponibilidade}
          </span>
        </div>
      </div>
    </div>
  );
}
