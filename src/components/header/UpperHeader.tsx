import { createRef, useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { auth } from "../../../firebase";
import { Input, styles } from "../Input";

export function UpperHeader({setPesquisa}: {setPesquisa: React.Dispatch<React.SetStateAction<string>>}) {
    
    const navigation = useNavigate()
    const input = createRef<HTMLInputElement>()

    const [loggedUser, isLogged] = useAuthState(auth)
    
    function handleForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setPesquisa(input.current?.value || '')
        navigation('/produtos')

        if (input.current?.value !== undefined) {
            input.current.value = ''
        }
    }

    return (
        <header className="flex-2 flex py-8 justify-evenly items-center bg-blue-main text-white border-white mb-[1px]">
            <Link to="/">
                <img src="" alt="Logo" />
            </Link>
            <form className="flex justify-between" onSubmit={handleForm}>
                <input
                    className={styles}
                    ref={input}
                    placeholder="O que Você procura?"
                    name="pesquisa"
                /> 
                <button type="submit">Pesquisar</button>
            </form>
            <nav>
                <ul className="flex items-center justify-center gap-4">
                <li>
                    {!isLogged
                        ? loggedUser?.displayName
                        : <Link to="/login">Entrar</Link>}
                </li>
                <li>
                    <Link to="/carrinho">Carrinho</Link>
                </li>
                </ul>
            </nav>
        </header>
    )
}