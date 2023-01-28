import { FormHookInput, Input } from "../Input";

export const CpfCnpjInput = ({register, registerName}: FormHookInput) => (
    <Input
        register={register}
        registerName="cpfCnpj"
        regexValidation={/[0-9]{11,14}/}
        validationMessage="Digite um CPF ou CNPJ válido, com pelo menos 11 dígitos"
        minLength={11}
        maxLength={14}
        placeholder="Digite seu CPF/CNPJ" 
    />
)