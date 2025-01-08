'use client'

import { PropsWithChildren } from "react"
import ItemButtonView from "./ItemButtonView"
import { ItemButtonProps } from "./types"

const ItemButton:React.FC<PropsWithChildren<ItemButtonProps>> = ({onClick, children}) => {
    return (
        <ItemButtonView onClick={onClick}>{children}</ItemButtonView>
    )
}
export default ItemButton