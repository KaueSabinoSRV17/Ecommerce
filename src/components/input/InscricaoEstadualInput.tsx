import { FormHookInput, Input } from "../Input";

export const InscricaoEstadualInput = ({register}: FormHookInput) => (
    <Input
        register={register}
        registerName="inscricaoEstadual"
        regexValidation={/[0-9]{14}/}
        validationMessage="Digite uma incrição estadual válida, com pelo menos 14 dígitos"
        maxLength={14}
        placeholder="Digite sua Inscrição Estadual"
    />
)