'use client'

import { PropsWithChildren } from "react";
import { ItemButtonViewProps } from "./types";

const ItemButtonView: React.FC<PropsWithChildren<ItemButtonViewProps>> = ({
  onClick,
  children,
}) => {
  return (
    <button
      className="p-3 w-full border border-gray-300 shadow-sm hover:bg-gray-100"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ItemButtonView;
