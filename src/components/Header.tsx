import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {

  const [pesquisa, setPesquisa] = useState<string>("");

  return (
    <header>
      <Link to="/"><img src="" alt="Logo" /></Link>
      <h1>{pesquisa}</h1>
      <input
        type="text"
        placeholder="Digite o que deseja"
        onChange={(evento) => setPesquisa(evento.target.value)}
      />
      <button>Pesquisar</button>
      <nav>
        <ul>
          <li>
            <Link to="/login">Entrar</Link>
          </li>
          <li>
            <Link to="/carrinho">Carrinho</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
