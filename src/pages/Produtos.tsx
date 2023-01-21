import { useSearchParams } from "react-router-dom"
import { ComponenteQueRecebeProdutosProcurados } from "../App"

function Produtos({produtosProcurados}: ComponenteQueRecebeProdutosProcurados) {

    return (
        <h1>{produtosProcurados}</h1>
    )
}

export default Produtos