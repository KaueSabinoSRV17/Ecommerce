import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {

  const [pesquisa, setPesquisa] = useState<string>("");

  return (
    <>
        <header className="flex-2 flex py-8 justify-evenly items-center bg-blue-main text-white border-white mb-[1px]">
        <Link to="/">
            <img src="" alt="Logo" />
        </Link>
        <nav className="flex justify-between">
            <input
                type="text"
                placeholder="Digite o que deseja"
                onChange={(evento) => setPesquisa(evento.target.value)}
            />
        <button>Pesquisar</button>
        </nav>
        <nav>
            <ul className="flex items-center justify-center gap-4">
            <li>
                <Link to="/login">Entrar</Link>
            </li>
            <li>
                <Link to="/carrinho">Carrinho</Link>
            </li>
            </ul>
        </nav>
        </header>
        <nav className="bg-blue-main flex justify-center items-center py-10 text-white">
            <ul className="flex gap-10 w-screen justify-center">
                <li>Categoria</li>
                <li>Categoria</li>
                <li>Categoria</li>
                <li>Categoria</li>
                <li>Categoria</li>
                <li>Categoria</li>
                <li>Categoria</li>
            </ul>
        </nav>
    </>
  );
}
