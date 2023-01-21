import { Link } from "react-router-dom";
import { FooterColumListItem } from "./FooterColumListItem";
import { FooterColumnTitle } from "./FooterColumTitle";

export interface LinkItem {
    name: string,
    link: string
}

export function FooterLinkList({ listOfLinks, title }: { listOfLinks: Array<LinkItem>, title: string }) {
    return (
       <>
            <FooterColumnTitle title={title} />
            <nav>
                <ul>
                   {listOfLinks.map(link => {
                        return (
                            <FooterColumListItem>
                                <Link to={link.link}>{link.name}</Link>
                            </FooterColumListItem>
                        )
                    })}
                </ul>
            </nav>
       </> 
    )
}