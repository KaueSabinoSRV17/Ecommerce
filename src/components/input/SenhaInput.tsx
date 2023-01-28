import { InputHTMLAttributes } from "react";
import { Path } from "react-hook-form";
import { FormHookInput, Input } from "../Input";

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