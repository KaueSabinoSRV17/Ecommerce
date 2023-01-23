import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "../components/Button"
import { Input } from "../components/Input"

function Cadastro() {

    function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault()
        const { name, value } = event.target
    }

    return (
        <form className="mx-auto my-20 w-[45%]">
            <header className="flex justify-between">
                <h1>Cadastre-se</h1>
                <span>Já é cadastrado? <Link to="/login">Entrar</Link></span>
            </header>
            <p className="p-2 mt-2 bg-blue-main text-white">
                Bem-vindo a nossa plataforma digital, nós verificamos
                que você ainda não faz parte do nosso mundo, se desejar,
                realize sua inscrição preenchendo os campos abaixo e se
                torne parte da família AutoGeral
            </p>
            <section className="mt-4">
                <h2>Observaçôes</h2>
                <ul>
                    <li>Caso seja uma pessoa jurídica e informe o campo "Inscrição estadual", entenderemos que você </li>é<li> um contribuinte de ICMS. Informá-lo sem pontuação e sem espaços;</li>
                    <li>O endereço de E-mail que você informar será tratado como o principal em nossa plataforma;</li>
                    <li>Para entregas, será possível adicionais mais endereços posteriormente;</li>
                    <li>Será enviado um código no e-mail informado para assegurar a identidade da pessoa que está se cadastrando;</li>
                    <li>Toda a política de uso das informações fornecidas por você estão especificadas no seguinte link: politicas</li>
                    <li>O cadastramento em nossa plataforma exige a idade mínima de 18 anos;</li>
                </ul>
            </section>
            <fieldset className="mt-4 flex flex-col gap-4">
                <legend>
                    Dados Pessoais
                </legend>
                <label htmlFor="pessoaTipo" className="rounded-full bg-white">
                    Pessoa
                </label>
                <label htmlFor="pessoaTipo">
                    <input type="radio" name="pessoaTipo" id="pessoaTipo" />
                    Física
                    <input type="radio" name="pessoaTipo" id="pessoaTipo" />
                    Jurídica
                </label>
                <Input placeholder="Digite seu nome completo/razão social" />
                <Input placeholder="Digite seu e-mail" />
                <fieldset className="grid grid-cols-2 gap-4">
                    <Input placeholder="Digite seu CPF/CNPJ" />
                    <Input placeholder="Digite sua Inscrição Estadual" hidden />
                    <Input placeholder="Digite seu celular/telefone" />
                    <Input placeholder="dd/mm/aaaa" type="date" />
                    <Input placeholder="Senha" required />
                    <Input placeholder="Confirme sua senha" />
                </fieldset>
                <h2>Regras de Senha</h2>
                <ul>
                    <li>Mínimo de 8 caracteres;</li>
                    <li>Máximo de 32 caracteres;</li>
                    <li>Uma letra maiúscula;</li>
                    <li>Uma minúscula;</li>
                    <li>Um número;</li>
                    <li>Um carácter especial;</li>
                </ul>
            </fieldset>
            <fieldset className="mt-4 flex flex-col gap-4">
                <legend>
                    Endereço
                </legend>
                <Input placeholder="Digite seu CEP" />
                <Input placeholder="Digite seu logradouro" required />
                <fieldset className="grid grid-cols-2 gap-4">
                    <Input placeholder="Digite seu bairro" required />
                    <Input placeholder="Digite sua cidade" required />
                    <Input placeholder="Digite seu estado" required />
                    <Input placeholder="Digite seu número" required />
                </fieldset>
                <Input placeholder="Digite seu complemento" />
            </fieldset>
            <label className="flex gap-2 items-center my-12">
                <Input type="checkbox" required />
                Estou de acordo com as políticas da Auto Geral Autopeças
            </label>
            <Button>Criar Conta</Button>
        </form>
    )
}

export default Cadastro