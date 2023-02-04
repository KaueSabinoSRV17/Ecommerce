import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom"
import { Button } from "../components/Button"
import { auth, db } from '../../firebase'
import { collection, addDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { PessoaTipoInput, pessoaTipoSchema } from "../components/input/PessoaTipoInput";
import { EmailInput, emailSchema } from "../components/input/EmailInput";
import { CpfCnpjInput, cpfCnpjSchema } from "../components/input/CpfCnpjInput";
import { InscricaoEstadualInput, inscricaoEstadualSchema } from "../components/input/InscricaoEstadualInput";
import { CelularInput, celularSchema } from "../components/input/CelularInput";
import { DataDeNascimentoInput, dataDeNascimentoSchema } from "../components/input/DataDeNascimento";
import { SenhaInput, senhaSchema } from "../components/input/SenhaInput";
import { CepInput, cepSchema } from "../components/input/CepInput";
import { NomeInput, nomeSchema } from "../components/input/TextInput";
import { EnderecoTextInput, estadoSchema } from "../components/input/EnderecoTextInput";
import { string, z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { StyledError, textoSemEspeciaisSchema, validacaoContraStringsEmNumeros } from "../components/Input";

const CadastroSchema = z.object({
    pessoaTipo: pessoaTipoSchema,
    nome: nomeSchema,
    email: emailSchema,
    cpfCnpj: cpfCnpjSchema,
    inscricaoEstadual: inscricaoEstadualSchema,
    celular: celularSchema,
    dataDeNascimento: dataDeNascimentoSchema,
    senha: senhaSchema,
    confirmacaoDeSenha: senhaSchema,
    cep: cepSchema,
    logradouro: textoSemEspeciaisSchema,
    bairro: textoSemEspeciaisSchema,
    cidade: textoSemEspeciaisSchema,
    estado: estadoSchema,
    numero: z.coerce.number(validacaoContraStringsEmNumeros).positive('Insira apenas números positivos'),
    complemento: string().optional()
})

type CadastroForm = z.infer<typeof CadastroSchema>

function Cadastro() {

    const { register, handleSubmit, formState } = useForm<CadastroForm>({resolver: zodResolver(CadastroSchema)})
    const onSubmit: SubmitHandler<CadastroForm> = async data => {
        const {email, senha, nome} = data
        const {user} = await createUserWithEmailAndPassword(auth, email, senha)
        await updateProfile(user, { displayName: nome })
       const cadastroCollection = collection(db, 'cliente')
       await addDoc(cadastroCollection, data)
    }

    const { errors } = formState

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
                    <PessoaTipoInput
                        register={register}
                        label="Física"
                        value="fisica"
                    />
                    <PessoaTipoInput
                        register={register}
                        label="Jurídica"
                        value="juridica"
                    />
                </label>

                <StyledError message={errors.nome?.message}  />
                <NomeInput register={register} />

                <StyledError message={errors.email?.message}  />
                <EmailInput register={register} />

                <fieldset className="grid justify-center items-center grid-cols-2 gap-4">

                    <label>
                        <StyledError message={errors.cpfCnpj?.message} />
                        <CpfCnpjInput register={register} />
                    </label>

                    <label>
                        <StyledError message={errors.inscricaoEstadual?.message} />
                        <InscricaoEstadualInput register={register} /> 
                    </label>

                    <label>
                        <StyledError message={errors.celular?.message} />
                        <CelularInput register={register} />
                    </label> 

                    <label>
                        <StyledError message={errors.dataDeNascimento?.message} />
                        <DataDeNascimentoInput register={register} />
                    </label>

                    <label>
                        <StyledError message={errors.senha?.message} />
                        <SenhaInput
                            registerName="senha"
                            register={register}
                            placeholder="Digite uma senha"
                        />
                    </label>

                    <label>
                        <StyledError message={errors.senha?.message} />
                        <SenhaInput
                            registerName="confirmaSenha"
                            register={register}
                            placeholder="Repita sua senha"
                        />
                    </label>

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
            <fieldset className="mt-4 flex justify-center flex-col gap-4">
                <legend>
                    Endereço
                </legend>

                <StyledError message={errors.cep?.message} />
                <CepInput register={register} />

                <StyledError message={errors.logradouro?.message} />
                <EnderecoTextInput
                    registerName="logradouro"
                    register={register}
                    regexValdation={/([a-zA-ZáÁéÉíÍóÓãÃõÕúÚçÇ.']+[ ]{1}){1,}/}
                    validationMessage="Digite um logradouro válido, com ao menos 2 palavras, sem traços"
                    placeholder="Digite seu Logradouro"
                    required
                />

                <fieldset className="grid grid-cols-2 gap-4">

                    <label>
                        <StyledError message={errors.bairro?.message} />
                        <EnderecoTextInput
                            register={register}
                            registerName="bairro"
                            regexValdation={/[a-zA-ZáÁéÉíÍóÓúÚãÃõÕ'çÇ. ]+/}
                            validationMessage="Este campo é obrigatório"
                            placeholder="Digite seu Bairro"
                            required
                        />
                    </label>

                    <label>
                        <StyledError message={errors.cidade?.message} />
                        <EnderecoTextInput
                            register={register}
                            registerName="cidade"
                            regexValdation={/[a-zA-ZáÁéÉíÍóÓúÚãÃõÕ'çÇ. ]+/}
                            validationMessage="Este campo é obrigatório"
                            placeholder="Digite sua Cidade"
                            required
                        />
                    </label>

                    <label>
                        <StyledError message={errors.estado?.message} />
                        <EnderecoTextInput
                            register={register}
                            registerName="estado"
                            regexValdation={/[a-zA-ZáÁéÉíÍóÓúÚãÃõÕ'çÇ. ]+/}
                            validationMessage="Este campo é obrigatório"
                            placeholder="Digite seu Estado"
                            required
                        />
                    </label>

                    <label>
                        <StyledError message={errors.numero?.message} />
                        <EnderecoTextInput
                            register={register}
                            registerName="numero"
                            regexValdation={/[0-9]+/}
                            validationMessage="Este campo é obrigatório"
                            placeholder="Digite seu Número"
                            required
                        />
                    </label>

                </fieldset>

                <EnderecoTextInput
                    register={register}
                    registerName="complemento"
                    regexValdation={/[0-9A-Za-záÁóÓíÍúÚõÕãÃçÇêÊõÕôÔîÎ]+/}
                    validationMessage=""
                    placeholder="Digite um complemento"
                />

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