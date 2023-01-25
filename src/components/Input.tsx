import { InputHTMLAttributes } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { CadastroForm } from "../pages/Cadastro";
import { LoginData } from "../pages/Login";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: Path<any>,
    register: UseFormRegister<any>
}

export let styles = "italic border-blue-main text-black placeholder:text-blue-main text-[12px] font-medium border-[1px] py-[6px] px-6 h-[3.125rem] rounded-full w-full"

export function Input({ placeholder, label, onChange, required = false, type, hidden = false, register }: InputProps) {

    if (required) {
        placeholder = placeholder?.concat(' *')
    }


    if (hidden) {
        styles = styles + 'opacity-0'
    }

    return <input
        {...register(label)}
        required={required}
        type={type}
        onChange={onChange}
        className={type !== 'checkbox' ? styles : ''}
        placeholder={placeholder} />
}