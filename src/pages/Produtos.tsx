import { useParams, useSearchParams } from "react-router-dom"
import { ComponenteQueRecebeProdutosProcurados, ProdutosProcuradosContext } from "../App"

function Produtos({pesquisa}: {pesquisa: string}) {

    return (
        <h1>{pesquisa}</h1>
    )
}

export default Produtos