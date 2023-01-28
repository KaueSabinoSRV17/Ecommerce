import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";
import { FormHookInput, InputProps } from "../Input";

interface PessoaTipoInputProps extends InputHTMLAttributes<HTMLInputElement>, FormHookInput {
    label: string,
}

export const PessoaTipoInput = ({register, value, label}: PessoaTipoInputProps) => (
   <>
        <input 
            {...register("pessoaTipo", {required: true})}
            type="radio"
            value={value}
            name="pessoaTipo"
            id="pessoaTipo"
            checked
        />
        {label}
   </> 
)