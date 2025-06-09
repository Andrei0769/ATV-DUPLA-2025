import { Link } from "react-router-dom";
import "./styles.css";
import logo from "../../assets/images/logo.png";

export default function TelaInicial() {
  return (
    <div className="home-container">
      <img src={logo} alt="Logo Restaurante" className="home-logo" />
      <h1 className="home-title">Bem-vindo ao Restaurante</h1>
      <div className="home-buttons">
        <Link to="/cadastro" className="btn-cadastro">Cadastrar Prato</Link>
        <Link to="/cardapio" className="btn-cardapio">Ver Cardápio</Link>
      </div>
    </div>
  );}