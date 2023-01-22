import { Link } from "react-router-dom";

export function LowerHeader() {
    return (
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
    )
}