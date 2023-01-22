import { auth, app } from '../../firebase'
import { EmailAuthProvider, signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from "react";
import { Link } from "react-router-dom";
import { ComponenteComAcessoAosProdutosProcurados } from "../App";
import { Button } from "../components/Button";
import { Input } from "../components/Input";


function Login({ setProdutosProcurados }: ComponenteComAcessoAosProdutosProcurados) {
    setProdutosProcurados('')
    interface LoginData {
        'email': string,
        'password': string
    }

    const [login, setLogin] = useState<LoginData>({'email': '', 'password': ''})

    async function handleLoginForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const { email, password } = login
        try {
            const response = await signInWithEmailAndPassword(auth, email, password)
            console.log(response)
        } catch (e) {
            const error = e as {code: any, message: any}
            console.log(error.code)
            console.log(error.message)
        }
    }

    function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault()
        const { name, value } = event.target
        setLogin(login => {
            const newValue = {...login, [name]: value}
            return newValue
        })
    }

    return (
        <section className="my-[88px] mx-auto text-blue-main w-[560px]">
            <header className="flex justify-between items-center mb-16">
                <h1 className="font-bold text-2xl">Entrar</h1>
                <span>Não é cadastrado? <Link to="/cadastro" className="font-bold">Cadastre-se</Link></span>
            </header>
            <form action="" className="flex flex-col gap-6" onSubmit={handleLoginForm}>
                <Input
                    onChange={handleInput}
                    name="email"
                    placeholder="E-mail" />
                <Input
                    onChange={handleInput}
                    name="password"
                    placeholder="Senha" />
                <footer className="flex justify-between items-center mt-12">
                    <Link to="/redefinicao-senha">Esqueceu a senha?</Link>
                    <Button color="pink-button">Entrar</Button>
                </footer>
            </form>
        </section>
    )
}

export default Login