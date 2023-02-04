import { InputHTMLAttributes } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { LoginData } from "../pages/Login";
import { z } from 'zod'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, FormHookInput {
    regexValidation: RegExp
    validationMessage: string 
    registerName: Path<any>,
}

export interface FormHookInput {
    register: UseFormRegister<any>
}


export type ErrorProps = {message: string | undefined}
export const StyledError = ({message}: ErrorProps) => <span className="text-pink-button text-[10px]">{message}</span>

export const validacaoDeObrigatorios = {required_error: 'Obrigatório'}
export const validacaoContraNumerosEmStrings = {...validacaoDeObrigatorios, invalid_type_error: 'Digite texto, não números'}
export const validacaoContraStringsEmNumeros = {...validacaoDeObrigatorios, invalid_type_error: 'Digite números, não texto'}

export const textoSemEspeciaisSchema = 
    z.string(validacaoContraNumerosEmStrings)
        .regex(
            /[^0-9-()&!@#$%¨*+{[\]{}|\\:;?°ºª]+/,
            'Não insira números e caracteres especiais'
        )

export let styles = "italic border-blue-main text-black placeholder:text-blue-main text-[12px] font-medium border-[1px] py-[6px] px-6 h-[3.125rem] rounded-full w-full"

export function Input({ registerName: label, validationMessage, regexValidation, onChange, register, ...props }: InputProps) {

    // Html Props'
    let { type, placeholder, hidden, value } = props

    const { minLength, maxLength, required } = props

    if (required) {
        placeholder = placeholder?.concat(' *')
    }


    if (hidden) {
        styles = styles + 'opacity-0'
    }

    return (
        <input
            value={value}
            {...register(label)}
            required={required}
            type={type}
            onChange={onChange}
            className={type !== 'checkbox' ? styles : ''}
            placeholder={placeholder} />
    ) 
}