import { FormHookInput, Input, validacaoContraStringsEmNumeros } from "../Input";
import { z } from 'zod'

export const cpfCnpjSchema = 
    z.coerce.number(validacaoContraStringsEmNumeros)
        .min(11, 'Digite um mínimo de 11 dígitos')
        .positive('Insira apenas números positivos')

export const CpfCnpjInput = ({register}: FormHookInput) => (
    <Input
        register={register}
        registerName="cpfCnpj"
        regexValidation={/[0-9]{11,14}/}
        validationMessage="Digite um CPF ou CNPJ válido, com pelo menos 11 dígitos"
        minLength={11}
        maxLength={14}
        placeholder="Digite seu CPF/CNPJ" 
    />
)