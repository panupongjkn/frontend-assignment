'use client'

import ItemButton from "../ItemButton";
import { ItemsBoxViewProps } from "./types";

const ItemsBoxView: React.FC<ItemsBoxViewProps> = ({
  title,
  dataList,
  onUnselectData,
}) => {
  return (
    <div className="h-full w-full border border-300">
      <p className="text-center font-bold bg-gray-100 py-2 border-b border-300">
        {title}
      </p>
      <div className="p-3 space-y-3">
        {dataList.map((data) => {
          return (
            <ItemButton key={data.name} onClick={() => onUnselectData(data)}>
              {data.name}
            </ItemButton>
          );
        })}
      </div>
    </div>
  );
};

export default ItemsBoxView;
