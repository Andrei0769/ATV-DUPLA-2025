import { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormularioCadastro from "../../components/FormularioCadastroPrato";
import MensagemFeedback from "../../components/MensagemFeedback";
import PreviewPrato from "../../components/PreviewPrato";
import useMensagem from "../../hooks/useMensagem";
import "./styles.css";

const BASE_URL = "https://atv-dupla-2025.onrender.com";

export default function Cadastro() {
  const navigate = useNavigate();
  const { id } = useParams();
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

  const carregarPrato = useCallback(async () => {
    try {
      setIsLoading(true);
      limparMensagem();

      const response = await fetch(`${BASE_URL}/pratos/${id}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error('Erro ao carregar o prato');
      }

      setForm({
        ...data,
        preco: data.preco.toString()
      });
    } catch (err) {
      mostrarErro(err.message);
      setTimeout(() => navigate('/cardapio'), 2000);
    } finally {
      setIsLoading(false);
    }
  }, [id, limparMensagem, mostrarErro, navigate]);

  useEffect(() => {
    if (id) {
      carregarPrato();
    }
  }, [id, carregarPrato]);

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    limparMensagem();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    limparMensagem();
    
    try {
      if (!form.nomePrato.trim() || !form.descricao.trim() || !form.preco || !form.urlImagem.trim()) {
        throw new Error('Por favor, preencha todos os campos obrigatórios');
      }

      const url = id 
        ? `${BASE_URL}/pratos/${id}`
        : `${BASE_URL}/pratos`;
      
      const method = id ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...form,
          preco: Number(form.preco)
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `Erro ao ${id ? 'atualizar' : 'cadastrar'} prato`);
      }

      mostrarSucesso(`Prato ${id ? 'atualizado' : 'cadastrado'} com sucesso! Redirecionando...`);
      
      setTimeout(() => {
        navigate("/cardapio");
      }, 2000);
    } catch (err) {
      mostrarErro(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pagina-cadastro-container">
      <div className={`pagina-cadastro ${isLoading ? 'loading' : ''}`}>
        <h2>{id ? 'Editar' : 'Cadastro de'} Prato</h2>
        <MensagemFeedback tipo={mensagem.tipo} texto={mensagem.texto} />
        <div className="cadastro-content">
          <FormularioCadastro 
            form={form} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            isEdit={!!id}
          />
          <PreviewPrato prato={form} />
        </div>
      </div>
    </div>
  );
}
