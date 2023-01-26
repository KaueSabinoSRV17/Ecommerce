import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom"
import { Button } from "../components/Button"
import { Input } from "../components/Input"

import { db } from '../../firebase'
import { collection, addDoc } from 'firebase/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'

export interface CadastroForm {
    pessoaTipo: string
    nome: string,
    email: string,
    cpfCnpj: string,
    inscricaoEstadual?: string,
    celular: string,
    dataDeNascimento: string,
    senha: string,
    confirmacaoDeSenha: string,
    cep?: string,
    logradouro: string,
    bairro: string,
    cidade: string,
    estado: string,
    numero: string,
    complemento?: string,
}

function Cadastro() {

    const { register, handleSubmit } = useForm<CadastroForm>()
    const onSubmit: SubmitHandler<CadastroForm> = async data => {
       const cadastroCollection = collection(db, 'cliente')
       await addDoc(cadastroCollection, data)
    }

    return (
        <form className="mx-auto my-20 w-[45%]" onSubmit={handleSubmit(onSubmit)}>
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
                    <input {...register("pessoaTipo")} type="radio" value="fisica" name="pessoaTipo" id="pessoaTipo" />
                    Física
                    <input type="radio" value="juridica" name="pessoaTipo" id="pessoaTipo" />
                    Jurídica
                </label>
                <Input label="nome" register={register} placeholder="Digite seu nome completo/razão social" />
                <Input label="email" register={register} placeholder="Digite seu e-mail" />
                <fieldset className="grid grid-cols-2 gap-4">
                    <Input label="cpfCnpj" register={register} placeholder="Digite seu CPF/CNPJ" />
                    <Input label="inscricaoEstadual" register={register} placeholder="Digite sua Inscrição Estadual" hidden />
                    <Input label="celular" register={register} placeholder="Digite seu celular/telefone" />
                    <Input label="dataDeNascimento" register={register} placeholder="dd/mm/aaaa" type="date" />
                    <Input label="senha" register={register} placeholder="Senha" required />
                    <Input label="confirmacaoDeSenha" register={register} placeholder="Confirme sua senha" />
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
                <Input label="cep" register={register} placeholder="Digite seu CEP" />
                <Input label="logradouro" register={register} placeholder="Digite seu logradouro" required />
                <fieldset className="grid grid-cols-2 gap-4">
                    <Input label="bairro" register={register} placeholder="Digite seu bairro" required />
                    <Input label="cidade" register={register} placeholder="Digite sua cidade" required />
                    <Input label="estado" register={register} placeholder="Digite seu estado" required />
                    <Input label="numero" register={register} placeholder="Digite seu número" required />
                </fieldset>
                <Input label="complemento" register={register} placeholder="Digite seu complemento" />
            </fieldset>
            <label className="flex gap-2 items-center my-12">
                <input  type="checkbox" required />
                Estou de acordo com as políticas da Auto Geral Autopeças
            </label>
            <Button>Criar Conta</Button>
        </form>
    )
}

export default Cadastro