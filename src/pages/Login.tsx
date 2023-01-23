import { auth, app } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useMutation } from 'react-query';
import { loginRequest } from '../utils/api/loginRequest';

export interface LoginData {
    'email': string,
    'password': string
    'error'?: string
}

function Login() {

    const { mutate, isLoading, isError, error } = useMutation(loginRequest, {
        onError: error => {
            setLogin(login => {
                const errorMessage = error as string
                const newState = {...login, errorMessage}
                return newState
            })
        }
    })

    type ErrorResponse = {message: string}

    const [login, setLogin] = useState<LoginData>({ 'email': '', 'password': '' })

    async function handleLoginForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        mutate(login)
    }

    function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault()
        const { name, value } = event.target
        setLogin(login => {
            const newValue = { ...login, [name]: value }
            return newValue
        })
    }

    function handleAuthError({message}: ErrorResponse) {
        const messageStart = message.includes('email') ? 'Este E-mail não está cadastrado!' : 'Senha Inválida!'
        return `${messageStart}`
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

                {!isLoading && isError && (handleAuthError(error as ErrorResponse))}

                <footer className="flex justify-between items-center mt-12">
                    <Link to="/redefinicao-senha">Esqueceu a senha?</Link>
                    <Button color="pink-button">{isLoading ? '...' : 'Entrar'}</Button>
                </footer>
            </form>
        </section>
    )
}

export default Login