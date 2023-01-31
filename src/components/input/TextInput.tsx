import { FormHookInput, Input, InputProps, validacaoContraNumerosEmStrings } from "../Input";
import { z } from 'zod'

export const nomeSchema = z.string(validacaoContraNumerosEmStrings)
    .regex(
        /([^0-9-()&!@#$%¨*+{[\]{}|\\:;?°ºª]+[ ]{1}[^0-9-()&!@#$%¨*+{[\]{}|\\:;?°ºª]+){1,}/,
        'Digite ao menos um nome e sobrenome, sem números e caracteres especiais'
    )

export const NomeInput = ({register}: FormHookInput) => (
    <Input
        regexValidation={/([a-zA-Záéíóúãõà]+[ ]){1,}[a-zA-Z]/}
        validationMessage="Digite ao menos um nome ou sobrenome"
        register={register}
        registerName="nome"
        placeholder="Digite seu nome completo/razão social"
    />
)