import React, { FC, MouseEvent } from "react"




interface ButtonProps {

    buttonTitle?: string
    children?: React.ReactNode
    onClick(e: MouseEvent<HTMLElement>): void

}


export const Button: FC<ButtonProps> = ({ onClick: handleClick, children }) => (
    <button onClick={handleClick}>
        {children}
    </button>
)

