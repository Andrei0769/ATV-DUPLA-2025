import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormularioCadastro from "../../components/FormularioCadastroPrato";
import MensagemFeedback from "../../components/MensagemFeedback";
import useMensagem from "../../hooks/useMensagem";
import "./styles.css";

export default function Cadastro() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { mensagem, mostrarSucesso, mostrarErro, limparMensagem } = useMensagem();
  const [form, setForm] = useState({ 
    nomePrato: "", 
    descricao: "", 
    preco: "", 
    categoria: "Entrada", 
    disponibilidade: "Em estoque", 
    urlImagem: "" 
  });
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    limparMensagem();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    limparMensagem();
    
    try {
      const response = await fetch("http://localhost:8080/pratos", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Erro ao cadastrar prato: ${response.status}`);
      }

      const data = await response.json();
      mostrarSucesso("Prato cadastrado com sucesso! Redirecionando...");
      
      // Redireciona para a lista após 2 segundos
      setTimeout(() => {
        navigate("/cardapio");
      }, 2000);    } catch (err) {
      mostrarErro(err.message);
    } finally {
      setIsLoading(false);
    }
  };return (
    <div className="pagina-cadastro-container">
      <div className="pagina-cadastro">        <h2>Cadastro de Prato</h2>
        <MensagemFeedback tipo={mensagem.tipo} texto={mensagem.texto} />
        <FormularioCadastro 
          form={form} 
          handleChange={handleChange} 
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}