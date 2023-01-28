import { FormHookInput, Input, InputProps } from "../Input";

export const NomeInput = ({register}: FormHookInput) => (
    <Input
        regexValidation={/([a-zA-Záéíóúãõà]+[ ]){1,}[a-zA-Z]/}
        validationMessage="Digite ao menos um nome ou sobrenome"
        register={register}
        registerName="nome"
        placeholder="Digite seu nome completo/razão social"
    />
)