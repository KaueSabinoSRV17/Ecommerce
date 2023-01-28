import { FormHookInput, Input } from "../Input";

export const CelularInput = ({register}: FormHookInput) => (
    <Input
        regexValidation={/[0-9]{11,}/}
        validationMessage="Digite um telefone com pelo menos 14 dígito"
        registerName="celular"
        register={register}
        required
        placeholder="Digite seu celular/telefone" 
    />
)