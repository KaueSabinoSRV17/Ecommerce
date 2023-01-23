import { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
    color?: 'pink-button'
    extraStyles?: string
}

export function Button({children, color = 'pink-button', extraStyles = ''}: ButtonProps) {
    return (
        <button type="submit" className={"italic px-3 py-[14px] bg-pink-button text-white text-sm rounded-full w-40 uppercase" + extraStyles}>{children}</button>
    )
}