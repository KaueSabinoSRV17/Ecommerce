import { FormHookInput, Input } from "../Input";

export const CepInput = ({register}: FormHookInput) => (
    <Input
        regexValidation={/[0-9]{5}[-][0-9]{3}/}
        validationMessage="Digite um cep válido, com 5 números, seguidos de um traço, seguidos de outros 3 números"
        register={register}
        registerName="cep"
        placeholder="Digite seu CEP"
        maxLength={9}
        minLength={9}
        required
    />
)