import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const styles = "border-blue-main text-black placeholder:text-blue-main text-[12px] font-medium border-[1px] py-[6px] px-6 h-[3.125rem] rounded-full w-full"

export function Input({ placeholder, name, onChange }: InputProps) {
    return <input 
        onChange={onChange}
        name={name}
        type="text" 
        className={styles}
        placeholder={placeholder} />
}