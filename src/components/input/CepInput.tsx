import { FormHookInput, Input, validacaoContraStringsEmNumeros } from "../Input";
import { z } from 'zod'

export const cepSchema = 
    z.string(validacaoContraStringsEmNumeros)
        .regex(
            /[0-9]{5}[-]{1}[0-9]{3}/,
            'Digite um cep com 5 números, seguidos por um traço, seguido de 3 números'
        )

export const CepInput = ({register}: FormHookInput) => (
    <Input
        regexValidation={/[0-9]{5}[-][0-9]{3}/}
        validationMessage="Digite um cep válido, com 5 números, seguidos de um traço, seguidos de outros 3 números"
        register={register}
        registerName="cep"
        placeholder="Digite seu CEP"
        maxLength={9}
        minLength={9}
        required
    />
)