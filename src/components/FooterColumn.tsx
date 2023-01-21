import { PropsWithChildren } from "react";

export function FooterColumn({ children }: PropsWithChildren) {
    return (
        <section className="px-3">
           { children }
        </section>
    )
}