import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { componenteComAcessoAosProdutosProcurados } from "../App";

export function Header({setProdutosProcurados}: componenteComAcessoAosProdutosProcurados) {

  const navigation = useNavigate()

  const goToProductsPage = () => navigation({
    pathname: '/produtos',
  })

  return (
    <>
        <header className="flex-2 flex py-8 justify-evenly items-center bg-blue-main text-white border-white mb-[1px]">
        <Link to="/">
            <img src="" alt="Logo" />
        </Link>
        <nav className="flex justify-between">
            <input
                className="text-black"
                type="text"
                placeholder="Digite o que deseja"
                onChange={(evento) => setProdutosProcurados(evento.target.value)}
            />
        <button 
            onClick={goToProductsPage}
            onPointerDown={goToProductsPage}>Pesquisar</button>
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
                <Link to="/produtos">Categoria</Link>
                <Link to="/produtos">Categoria</Link>
                <Link to="/produtos">Categoria</Link>
                <Link to="/produtos">Categoria</Link>
                <Link to="/produtos">Categoria</Link>
                <Link to="/produtos">Categoria</Link>
                <Link to="/produtos">Categoria</Link>
            </ul>
        </nav>
    </>
  );
}
