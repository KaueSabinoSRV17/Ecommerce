import { Link } from "react-router-dom";
import { FooterColumListItem } from "./FooterColumListItem";
import { FooterColumn } from "./FooterColumn";
import { FooterColumnTitle } from "./FooterColumTitle";
import { FooterLinkList, LinkItem } from "./FooterLinkList";

export function Footer() {

    const firstLinkList: Array<LinkItem> = [
        {name: 'Quem somos', link: '/quem-somos'},
        {name: 'Politicas da Loja', link: '/politicas-loja'},
        {name: 'Politicas de Privacidade', link: '/politicas-privacidade'},
        {name: 'Lojas', link: '/lojas'}
    ]

    const secondLinkList: Array<LinkItem> = [
        { name: 'Contato', link: '/contato' },
        { name: 'LGPD', link: '/lgpd' },
        { name: 'Dúvidas Frequentes', link: '/duvidas-frequentes' }
    ]

    return (
        <footer className="flex-2 font-normal bg-blue-main text-white flex flex-col items-center">
            <section className="grid grid-cols-4 mx-20 mt-[64px]">
               <FooterColumn>
                    <img src="" alt="Logo" className="h-20 w-44" />
                    <p className="text-center leading-8 text-sm">
                        Mais de 50 anos de tradição,
                        com um atendimento de qualidade,
                        excelência no serviço e sempre
                        procurando o preço mais justo para o cliente.
                    </p>
               </FooterColumn>
               <FooterColumn>
                    <FooterLinkList 
                        title="Institucional"
                        listOfLinks={firstLinkList}
                    />
               </FooterColumn>
               <FooterColumn>
                   <FooterLinkList
                        title="Serviços"
                        listOfLinks={secondLinkList} 
                    />
               </FooterColumn>
               <FooterColumn>
                    <FooterColumnTitle title="Baixe nosso App"/>
                    <nav className="grid grid-cols-2">
                        <img src="" alt="Play Store" />
                        <img src="" alt="QR Code" />
                        <img src="" alt="App Store" />
                    </nav>
                    <nav>
                        <ul className="flex gap-2 mt-6">
                            <li>social</li>
                            <li>social</li>
                            <li>social</li>
                            <li>social</li>
                        </ul>
                    </nav>
               </FooterColumn>
            </section>
            <hr className="border-black border-1 w-full mt-4"/>
            <section className="pt-4 pb-20">
               <footer className="flex justify-between mx-20 gap-20 text-xs">
                    <span>Todos os direitos reservados Auto Geral Autopeças {new Date().getFullYear()}</span>
                    <span>desenvolvido por Agência Kombi</span>
                </footer> 
            </section>
        </footer>
    )
}