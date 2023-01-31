import { InputHTMLAttributes } from "react";
import { Path } from "react-hook-form";
import { FormHookInput, Input, validacaoDeObrigatorios } from "../Input";
import { z } from 'zod'

export const senhaSchema = 
    z.string(validacaoDeObrigatorios)
        .min(8, 'Digite uma senha com pelo menos 8 digitos')
        .max(32, 'Digite uma senha com até 32 dígitos')
        .regex(/[a-z]/, 'obrigatório letras minúsculas')
        .regex(/[A-Z]/, 'obrigatório letras máiusculas')
        .regex(/[0-9]/, 'obrigatório números')
        .regex(/[!@#$%&*()-=+_.]/, 'obrigatório caracteres especiais')

interface SenhaInputProps extends FormHookInput, InputHTMLAttributes<HTMLInputElement> {
    registerName: Path<any>
}

export const SenhaInput = ({register, registerName, placeholder}: SenhaInputProps) => (
    <Input
        regexValidation={/[a-zA-Z0-9!@#$%¨&*()-+.]{8,32}/}
        validationMessage="Digite uma senha válida, que tenha de 8 a 32 dígitos, com letras maúsculas, minúsculas, números e caracteres especiais"
        registerName={registerName}
        register={register}
        maxLength={32}
        minLength={8}
        placeholder={placeholder}
        required
    />
)