import { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
    color: 'pink-button'
}

export function Button({children, color}: ButtonProps) {
    return (
        <button type="submit" className="px-3 py-[14px] bg-pink-button text-white rounded-full w-40">{children}</button>
    )
}