// === src/components/FormularioCadastro/index.jsx ===
import "./styles.css";

export default function FormularioCadastro({ form, handleChange, handleSubmit, isLoading }) {
  const handlePrecoChange = (e) => {
    const valor = e.target.value;
    if (valor === '' || /^\d*\.?\d{0,2}$/.test(valor)) {
      handleChange(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <div className="form-group">
        <label htmlFor="nomePrato">Nome do Prato</label>
        <input 
          id="nomePrato"
          type="text" 
          name="nomePrato" 
          placeholder="Digite o nome do prato" 
          value={form.nomePrato} 
          onChange={handleChange} 
          minLength={3}
          maxLength={100}
          required 
          disabled={isLoading}
        />
      </div>      <div className="form-group">
        <label htmlFor="descricao">Descrição</label>
        <textarea
          id="descricao"
          name="descricao" 
          placeholder="Descreva o prato detalhadamente" 
          value={form.descricao} 
          onChange={handleChange} 
          minLength={10}
          maxLength={500}
          required 
          disabled={isLoading}
        />
      </div>      <div className="form-group">
        <label htmlFor="preco">Preço (R$)</label>
        <input 
          id="preco"
          type="number" 
          step="0.01" 
          name="preco" 
          placeholder="0,00" 
          value={form.preco} 
          onChange={handlePrecoChange}
          min="0.01"
          max="999999.99"
          required 
          disabled={isLoading}
        />
      </div>      <div className="form-group">
        <label htmlFor="urlImagem">URL da Imagem</label>
        <input 
          id="urlImagem"
          type="url" 
          name="urlImagem" 
          placeholder="https://" 
          value={form.urlImagem} 
          onChange={handleChange}
          pattern="https?://.*"
          title="Insira uma URL válida começando com http:// ou https://"
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
          <option>Entrada</option>
          <option>Prato Principal</option>
          <option>Sobremesa</option>
          <option>Bebida</option>
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
          <option>Em estoque</option>
          <option>Esgotado</option>
        </select>
      </div>      <div className="preview-imagem">
        {form.urlImagem && <img src={form.urlImagem} alt="Preview do prato" />}
      </div>

      <button 
        type="submit" 
        disabled={isLoading || !form.nomePrato || !form.descricao || !form.preco || !form.urlImagem}
        className={isLoading ? 'loading' : ''}
      >
        {isLoading ? 'Cadastrando...' : 'Cadastrar'}</button>
    </form>
  );
}