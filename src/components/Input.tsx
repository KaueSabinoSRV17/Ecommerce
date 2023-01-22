import { InputHTMLAttributes } from "react";

export function Input({ placeholder, name, onChange }: InputHTMLAttributes<HTMLInputElement>) {
    return <input 
        onChange={onChange}
        name={name}
        type="text" 
        className="border-blue-main placeholder:text-blue-main text-[12px] font-medium border-[1px] py-[6px] px-6 h-[3.125rem] rounded-full w-full"
        placeholder={placeholder} />
}