import { FormHookInput, Input, validacaoContraStringsEmNumeros } from "../Input";
import { z } from 'zod'

export const inscricaoEstadualSchema =
    z.coerce.number(validacaoContraStringsEmNumeros)
        .min(11, 'Digite um mínimo de 11 dígitos')
        .positive('Insira apenas números positivos')
        .optional()
        .nullable()
        .nullish()

export const InscricaoEstadualInput = ({register}: FormHookInput) => (
    <Input
        register={register}
        registerName="inscricaoEstadual"
        regexValidation={/[0-9]{14}/}
        validationMessage="Digite uma incrição estadual válida, com pelo menos 14 dígitos"
        maxLength={14}
        placeholder="Digite sua Inscrição Estadual"
    />
)