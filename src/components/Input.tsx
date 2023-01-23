import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export let styles = "italic border-blue-main text-black placeholder:text-blue-main text-[12px] font-medium border-[1px] py-[6px] px-6 h-[3.125rem] rounded-full w-full"

export function Input({ placeholder, name, onChange, required = false, type, hidden = false }: InputProps) {

    if (required) {
        placeholder = placeholder?.concat(' *')
    }


    if (hidden) {
        styles = styles + 'opacity-0'
    }

    return <input 
        required={required}
        type={type}
        onChange={onChange}
        name={name}
        className={type !== 'checkbox' ? styles : ''}
        placeholder={placeholder} />
}