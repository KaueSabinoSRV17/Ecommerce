import { FormHookInput, Input } from "../Input";

export const DataDeNascimentoInput = ({register}: FormHookInput) => (
    <Input
        register={register}
        registerName="dataDeNascimento"
        regexValidation={/\d{4}[-]{1}\d{2}[-]{1}\d{2}/}
        validationMessage="Digite uma data válida, com dias (2 dígitos), meses (2 dígitos), e anos (4 dígitos)"
        placeholder="dd/mm/aaaa"
        type="date" 
        required
    />
)