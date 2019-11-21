import React, { FC, MouseEvent } from "react"
import Button from "@material-ui/core/Button";


export interface MaterialUiButtonProps {
    children?: React.ReactNode
    onClick(e: MouseEvent<HTMLElement>): void
}



export const MaterialUiButton: FC<MaterialUiButtonProps> = ({ children }) => (<Button
    type="submit"
    variant="contained"
    color="primary"
    onClick={() => alert("redirect")}
>{children}</Button>)