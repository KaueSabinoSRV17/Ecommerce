import { Link } from "react-router-dom";
import { ComponenteComAcessoAosProdutosProcurados } from "../App";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

function Login({ setProdutosProcurados }: ComponenteComAcessoAosProdutosProcurados) {
    setProdutosProcurados('')

    return (
        <section className="my-[88px] mx-auto text-blue-main w-[560px]">
            <header className="flex justify-between items-center mb-16">
                <h1 className="font-bold text-2xl">Entrar</h1>
                <span>Não é cadastrado? <Link to="/cadastro" className="font-bold">Cadastre-se</Link></span>
            </header>
            <form action="" className="flex flex-col gap-6">
                <Input placeholder="E-mail" />
                <Input placeholder="Senha" />
                <footer className="flex justify-between items-center mt-12">
                    <Link to="/redefinicao-senha">Esqueceu a senha?</Link>
                    <Button color="pink-button">Entrar</Button>
                </footer>
            </form>
        </section>
    )
}

export default Login