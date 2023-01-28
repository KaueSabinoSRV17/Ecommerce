import { FormHookInput, Input, InputProps } from "../Input";

export const EmailInput = ({register}: FormHookInput) => (
   <Input
        regexValidation={/[a-z0-9.]+[@][a-z]+([.]{1}[a-z]+){1,}/}
        register={register}
        validationMessage="Digite um email válido"
        registerName="email"
        type="email"
        placeholder="Digite seu e-mail"
    />
)