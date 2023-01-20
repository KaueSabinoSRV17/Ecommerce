import { useSearchParams } from "react-router-dom"
import { ComponenteQueRecebeProdutosProcurados } from "../App"

export function Produtos({produtosProcurados}: ComponenteQueRecebeProdutosProcurados) {

    return (
        <h1>{produtosProcurados}</h1>
    )
}