
export type DataType = {
    type: string;
    name: string;
  };

export type TodoListViewProps = {
    dataList: DataType[]
    fruits: DataType[]
    vegetables: DataType[]
    onSelectData: (data: DataType) => void
    onUnselectData: (data: DataType) => void
}