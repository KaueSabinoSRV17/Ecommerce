import { FormHookInput, Input, validacaoContraStringsEmNumeros } from "../Input";
import { z } from 'zod'
import { useState } from "react";

export const cepSchema = 
    z.string(validacaoContraStringsEmNumeros)
        .regex(
            /[0-9]{5}[-]{1}[0-9]{3}/,
            'Digite um cep com 5 números, seguidos por um traço, seguido de 3 números'
        )

export const CepInput = ({register}: FormHookInput) => {

    const [cepValue, setCepValue] = useState<string>('')

    function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
        setCepValue(cepValue => {
            const { value } = event.target
            const currentLength = value.length
            const currentValue = value.substring(0,value.length-1)
            const userTypedNonNumber = /[^0-9-]+/.test(value)
            const userTypedDashBeforeTheRightTime = value.length < 6 && value.includes('-')

            if (currentLength > 4 && currentLength <= 9 && !value.includes('-')) {
                return value.substring(0,5) + '-' + value.substring(5)
            }
            if (cepValue.length >= 9 || userTypedNonNumber || userTypedDashBeforeTheRightTime) {
                return currentValue
            }
            return value
        })
    }

    return <Input
        value={cepValue}
        onChange={handleInput}
        regexValidation={/[0-9]{5}[-][0-9]{3}/}
        validationMessage="Digite um cep válido, com 5 números, seguidos de um traço, seguidos de outros 3 números"
        register={register}
        registerName="cep"
        placeholder="Digite seu CEP"
        maxLength={9}
        minLength={9}
        required
    />
}