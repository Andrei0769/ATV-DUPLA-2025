// === src/components/PaginaInicial/index.jsx ===
import { Link } from "react-router-dom";
import "./styles.css";
import logo from "../../assets/images/logo.png";

export default function PaginaInicial() {
  return (
    <div className="pagina-inicial">
      <img src={logo} alt="Logo Restaurante" className="logo" />
      <h1>Bem-vindo ao Restaurante</h1>
      <div className="botoes">
        <Link to="/cadastro">Cadastrar Prato</Link>
        <Link to="/cardapio">Ver Cardápio</Link>
      </div>
    </div>
  );
}