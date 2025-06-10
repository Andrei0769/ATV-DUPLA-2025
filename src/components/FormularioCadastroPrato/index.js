import React from 'react';
import './styles.css';

export default function FormularioCadastroPrato({ form, handleChange, handleSubmit, isLoading }) {
  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="nomePrato">Nome do Prato</label>
        <input
          type="text"
          id="nomePrato"
          name="nomePrato"
          value={form.nomePrato}
          onChange={handleChange}
          placeholder="Digite o nome do prato"
          required
          disabled={isLoading}
        />
      </div>

      <div className="form-group">
        <label htmlFor="descricao">Descrição</label>
        <textarea
          id="descricao"
          name="descricao"
          value={form.descricao}
          onChange={handleChange}
          placeholder="Digite a descrição do prato"
          required
          disabled={isLoading}
        />
      </div>

      <div className="form-group">
        <label htmlFor="preco">Preço</label>
        <input
          type="number"
          id="preco"
          name="preco"
          value={form.preco}
          onChange={handleChange}
          placeholder="0.00"
          step="0.01"
          min="0"
          required
          disabled={isLoading}
        />
      </div>

      <div className="form-group">
        <label htmlFor="categoria">Categoria</label>
        <select
          id="categoria"
          name="categoria"
          value={form.categoria}
          onChange={handleChange}
          disabled={isLoading}
        >
          <option value="Entrada">Entrada</option>
          <option value="Prato Principal">Prato Principal</option>
          <option value="Sobremesa">Sobremesa</option>
          <option value="Bebida">Bebida</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="disponibilidade">Disponibilidade</label>
        <select
          id="disponibilidade"
          name="disponibilidade"
          value={form.disponibilidade}
          onChange={handleChange}
          disabled={isLoading}
        >
          <option value="Em estoque">Em estoque</option>
          <option value="Esgotado">Esgotado</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="urlImagem">URL da Imagem</label>
        <input
          type="url"
          id="urlImagem"
          name="urlImagem"
          value={form.urlImagem}
          onChange={handleChange}
          placeholder="https://exemplo.com/imagem.jpg"
          required
          disabled={isLoading}
        />
      </div>

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Salvando...' : 'Salvar Prato'}
      </button>
    </form>
  );
}
