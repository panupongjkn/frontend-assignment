import { DataType } from "../../types";

export type ItemsBoxProps = ItemsBoxViewProps

export type ItemsBoxViewProps = {
    title: string;
    dataList: DataType[]
    onUnselectData: (data: DataType) => void
}