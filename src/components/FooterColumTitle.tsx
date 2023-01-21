export function FooterColumnTitle({ title }: {title: string}) {
    return <h4 className="not-italic font-normal mb-4">{ title.toUpperCase() }</h4>
}