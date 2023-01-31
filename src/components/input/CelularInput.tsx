import { FormHookInput, Input, validacaoContraStringsEmNumeros } from "../Input";
import { z } from 'zod'

export const celularSchema = 
    z.coerce.number(validacaoContraStringsEmNumeros)
        .min(11, 'Digite um mínimo de 11 dígitos')
        .positive('Insira apenas números positivos')

export const CelularInput = ({register}: FormHookInput) => (
    <Input
        regexValidation={/[0-9]{11,}/}
        validationMessage="Digite um telefone com pelo menos 14 dígito"
        registerName="celular"
        register={register}
        required
        placeholder="Digite seu celular/telefone" 
    />
)