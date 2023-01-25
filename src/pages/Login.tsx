import { auth, app } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useMutation } from 'react-query';
import { loginRequest } from '../utils/api/loginRequest';
import { SubmitHandler, useForm } from 'react-hook-form';

export interface LoginData {
    'email': string,
    'password': string
    'error'?: string
}

function Login() {
    
    // Hook Form
    const { register, handleSubmit } = useForm<LoginData>()
    const onSubmit: SubmitHandler<LoginData> = data => mutate(data)

    // Router
    const navigate = useNavigate()

    // React Query
    const { mutate, isLoading, isError, error } = useMutation(loginRequest, {
        onSuccess: () => navigate('..')
    })

    function handleAuthError({message}: ErrorResponse) {
        const messageStart = message.includes('email') ? 'Este E-mail não está cadastrado!' : 'Senha Inválida!'
        return `${messageStart}`
    }
    type ErrorResponse = {message: string}

    return (
        <section className="my-[88px] mx-auto text-blue-main w-[560px]">
            <header className="flex justify-between items-center mb-16">
                <h1 className="font-bold text-2xl">Entrar</h1>
                <span>Não é cadastrado? <Link to="/cadastro" className="font-bold">Cadastre-se</Link></span>
            </header>
            <form action="" className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
                <Input
                    register={register}
                    label="email"
                    placeholder="E-mail" />
                <Input
                    register={register}
                    label="password"
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