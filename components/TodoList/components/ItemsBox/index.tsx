'use client'

import ItemsBoxView from "./ItemsBoxView";
import { ItemsBoxProps } from "./types";

const ItemsBox: React.FC<ItemsBoxProps> = ({ title, dataList, onUnselectData }) => {
  return <ItemsBoxView title={title} dataList={dataList} onUnselectData={onUnselectData} />;
};

export default ItemsBox;
