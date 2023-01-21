import { PropsWithChildren } from "react";

export function FooterColumListItem({ children }: PropsWithChildren) {
    return (
        <li className="my-3 not-italic">{ children }</li>
    )
}