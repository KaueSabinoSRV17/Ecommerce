import { InputHTMLAttributes } from "react";
import { Path } from "react-hook-form";
import { FormHookInput, Input, validacaoContraNumerosEmStrings } from "../Input";
import { z } from 'zod'

export const estadoSchema = 
    z.string(validacaoContraNumerosEmStrings)
        .length(2, 'Digite uma sigla de estado com exatamente 2 dígitos!')

interface EnderecoTextInputProps extends FormHookInput, InputHTMLAttributes<HTMLInputElement> {
    regexValdation: RegExp
    registerName: Path<any>
    validationMessage: string
}

export const EnderecoTextInput = ({register, regexValdation, placeholder, registerName, validationMessage, required}: EnderecoTextInputProps) => (
    <Input
        register={register}
        registerName={registerName}
        regexValidation={regexValdation}
        validationMessage={validationMessage}
        placeholder={placeholder}
        required={required}
    />
)