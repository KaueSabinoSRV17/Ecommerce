import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom"
import { Button } from "../components/Button"

import { auth, db } from '../../firebase'
import { collection, addDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { PessoaTipoInput } from "../components/input/PessoaTipoInput";
import { EmailInput } from "../components/input/EmailInput";
import { CpfCnpjInput } from "../components/input/CpfCnpjInput";
import { InscricaoEstadualInput } from "../components/input/InscricaoEstadualInput";
import { CelularInput } from "../components/input/CelularInput";
import { DataDeNascimentoInput } from "../components/input/DataDeNascimento";
import { SenhaInput } from "../components/input/SenhaInput";
import { CepInput } from "../components/input/CepInput";
import { NomeInput } from "../components/input/TextInput";
import { EnderecoTextInput } from "../components/input/EnderecoTextInput";
import { date, number, string, z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'





const CadastroSchema = z.object({
    pessoaTipo: string({required_error: 'Obrigatório', invalid_type_error: 'Digite texto, não números'}).regex(/(fisica|juridica)/, 'O tipo deve ser apenas física ou jurídica'),
    nome: string({required_error: 'Obrigatório', invalid_type_error: 'Digite texto, não números'}).regex(/([^0-9-()&!@#$%¨*+{[\]{}|\\:;?°ºª]+[ ]{1}[^0-9-()&!@#$%¨*+{[\]{}|\\:;?°ºª]+){1,}/, 'Digite ao menos um nome e sobrenome, sem números e caracteres especiais'),
    email: string({required_error: 'Obrigatório', invalid_type_error: 'Digite texto, não números'}).email('Digite um email válido'),
    cpfCnpj: z.coerce.number({required_error: 'Obrigatório', invalid_type_error: 'Digite números, não textos'}).min(11, 'Digite um mínimo de 11 dígitos').positive('Insira apenas números positivos'),
    inscricaoEstadual: z.coerce.number({required_error: 'Obrigatório', invalid_type_error: 'Digite números, não textos'}).min(11, 'Digite um mínimo de 11 dígitos').positive('Insira apenas números positivos').optional().nullable(),
    celular: z.coerce.number({required_error: 'Obrigatório', invalid_type_error: 'Digite números, não textos'}).min(11, 'Digite um mínimo de 11 dígitos').positive('Insira apenas números positivos'),
    dataDeNascimento: z.coerce.date().max(new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDay()), 'Apenas maiores de 18 anos podem se cadastrar!'),
    senha: string({required_error: 'Obrigatório', invalid_type_error: 'Digite texto, não números'}).min(8, 'Digite uma senha com pelo menos 8 digitos').max(32, 'Digite uma senha com até 32 dígitos').regex(/[a-z]/, 'obrigatório letras minúsculas').regex(/[A-Z]/, 'obrigatório letras máiusculas').regex(/[0-9]/, 'obrigatório números').regex(/[!@#$%&*()-=+_.]/, 'obrigatório caracteres especiais'),
    confirmacaoDeSenha: string({required_error: 'Obrigatório', invalid_type_error: 'Digite texto, não números'}).min(8, 'Digite uma senha com pelo menos 8 digitos').max(32, 'Digite uma senha com até 32 dígitos'),
    cep: string({required_error: 'Obrigatório', invalid_type_error: 'Digite texto, não números'}).regex(/[0-9]{5}[-]{1}[0-9]{3}/, 'Digite um cep com 5 números, seguidos por um traço, seguido de 3 números'),
    logradouro: string({required_error: 'Obrigatório', invalid_type_error: 'Digite texto, não números'}).regex(/[^0-9-()&!@#$%¨*+{[\]{}|\\:;?°ºª]+/, 'Não insira números e caracteres especiais'),
    bairro: string({required_error: 'Obrigatório', invalid_type_error: 'Digite texto, não números'}).regex(/[^0-9-()&!@#$%¨*+{[\]{}|\\:;?°ºª]+/, 'Não insira números e caracteres especiais'),
    cidade: string({required_error: 'Obrigatório', invalid_type_error: 'Digite texto, não números'}).regex(/[^0-9-()&!@#$%¨*+{[\]{}|\\:;?°ºª]+/, 'Não insira números e caracteres especiais'),
    estado: string({required_error: 'Obrigatório', invalid_type_error: 'Digite texto, não números'}).length(2, 'Digite uma sigla de estado com exatamente 2 dígitos!'),
    numero: z.coerce.number({required_error: 'Obrigatório', invalid_type_error: 'Digite números, não textos'}).positive('Insira apenas números positivos'),
    complemento: string({required_error: 'Obrigatório', invalid_type_error: 'Digite texto, não números'}).optional()
}).superRefine(({senha, confirmacaoDeSenha}, context) => {

    const passwordRequirements = {
        'Letras Maúsculas': /[a-z]/,
        'Letras Minúsculas': /[A-Z]/,
        'Caracteres Especiais': /[!@#$%&*()-=+_.]/,
        'Números': /[0-9]/
    }

    // Check if a password rule is satisfied, and if is not, adds a new Zod error to the Context
    Object.entries(passwordRequirements).forEach(requirement => {
        const [name, regex] = requirement
        if (!regex.test(senha))  {
            context.addIssue({
                code: 'custom',
                message: `Digite uma senha com ${name}`
            })
        }
    })

    if (senha !== confirmacaoDeSenha) {
        context.addIssue({
            code: 'custom',
            message: 'A confirmação de senha estã diferente da senha'
        })
    }

    
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

    const styledError = (message: string) => <span className="text-pink-button text-xs">{message}</span>

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
                <NomeInput register={register} />
                {styledError(errors.nome?.message || '')}

                <EmailInput register={register} />
                {styledError(errors.email?.message || '')}

                <fieldset className="grid grid-cols-2 gap-4">

                <label>
                    {styledError(errors.cpfCnpj?.message || '')}
                    <CpfCnpjInput register={register} />
                </label>

                    <InscricaoEstadualInput register={register} /> 
                    {styledError(errors.inscricaoEstadual?.message || '')}

                    <CelularInput register={register} />
                    {styledError(errors.celular?.message || '')}

                    <DataDeNascimentoInput register={register} />
                    {styledError(errors.dataDeNascimento?.message || '')}

                    <SenhaInput
                        registerName="senha"
                        register={register}
                        placeholder="Digite uma senha"
                    />
                    {styledError(errors.senha?.message || '')}

                    <SenhaInput
                        registerName="confirmaSenha"
                        register={register}
                        placeholder="Repita sua senha"
                    />
                    {styledError(errors.confirmacaoDeSenha?.message || '')}

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
                <CepInput register={register} />
                {styledError(errors.cep?.message || '')}

                <EnderecoTextInput
                    registerName="logradouro"
                    register={register}
                    regexValdation={/([a-zA-ZáÁéÉíÍóÓãÃõÕúÚçÇ.']+[ ]{1}){1,}/}
                    validationMessage="Digite um logradouro válido, com ao menos 2 palavras, sem traços"
                    placeholder="Digite seu Logradouro"
                    required
                />
                {styledError(errors.logradouro?.message || '')}

                <fieldset className="grid grid-cols-2 gap-4">
                    <EnderecoTextInput
                        register={register}
                        registerName="bairro"
                        regexValdation={/[a-zA-ZáÁéÉíÍóÓúÚãÃõÕ'çÇ. ]+/}
                        validationMessage="Este campo é obrigatório"
                        placeholder="Digite seu Bairro"
                        required
                    />
                    {styledError(errors.bairro?.message || '')}

                    <EnderecoTextInput
                        register={register}
                        registerName="cidade"
                        regexValdation={/[a-zA-ZáÁéÉíÍóÓúÚãÃõÕ'çÇ. ]+/}
                        validationMessage="Este campo é obrigatório"
                        placeholder="Digite sua Cidade"
                        required
                    />
                    {styledError(errors.cidade?.message || '')}

                    <EnderecoTextInput
                        register={register}
                        registerName="estado"
                        regexValdation={/[a-zA-ZáÁéÉíÍóÓúÚãÃõÕ'çÇ. ]+/}
                        validationMessage="Este campo é obrigatório"
                        placeholder="Digite seu Estado"
                        required
                    />
                    {styledError(errors.estado?.message || '')}

                    <EnderecoTextInput
                        register={register}
                        registerName="numero"
                        regexValdation={/[0-9]+/}
                        validationMessage="Este campo é obrigatório"
                        placeholder="Digite seu Número"
                        required
                    />
                    {styledError(errors.numero?.message || '')}

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