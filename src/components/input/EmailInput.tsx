import { FormHookInput, Input, validacaoDeObrigatorios } from "../Input";
import { z } from 'zod'

export const emailSchema = z.string(validacaoDeObrigatorios)
    .email('Digite um email válido')

export const EmailInput = ({register}: FormHookInput) => (
   <Input
        regexValidation={/[a-z0-9.]+[@][a-z]+([.]{1}[a-z]+){1,}/}
        register={register}
        validationMessage="Digite um email válido"
        registerName="email"
        type="email"
        required
        placeholder="Digite seu e-mail"
    />
)