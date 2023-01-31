import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";
import { FormHookInput, InputProps, validacaoContraNumerosEmStrings } from "../Input";
import { z } from 'zod'

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

export const pessoaTipoSchema = 
    z.string(validacaoContraNumerosEmStrings)
        .regex(/(fisica|juridica)/, 'O tipo deve ser apenas física ou jurídica')