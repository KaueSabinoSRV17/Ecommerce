import { InputHTMLAttributes } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { LoginData } from "../pages/Login";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, FormHookInput {
    regexValidation: RegExp
    validationMessage: string 
    registerName: Path<any>,
}

export interface FormHookInput {
    register: UseFormRegister<any>
}

export let styles = "italic border-blue-main text-black placeholder:text-blue-main text-[12px] font-medium border-[1px] py-[6px] px-6 h-[3.125rem] rounded-full w-full"

export function Input({ registerName: label, validationMessage, regexValidation, onChange, register, ...props }: InputProps) {

    // Html Props'
    let { type, placeholder, hidden } = props

    const { minLength, maxLength, required } = props

    if (required) {
        placeholder = placeholder?.concat(' *')
    }


    if (hidden) {
        styles = styles + 'opacity-0'
    }

    return (
        <input
            {...register(label)}
            required={required}
            type={type}
            onChange={onChange}
            className={type !== 'checkbox' ? styles : ''}
            placeholder={placeholder} />
    ) 
}