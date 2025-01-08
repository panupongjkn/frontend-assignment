'use client'

import ItemButton from "./components/ItemButton";
import ItemsBox from "./components/ItemsBox";
import { TodoListViewProps } from "./types";

const TodoListView: React.FC<TodoListViewProps> = ({
  dataList,
  fruits,
  vegetables,
  onSelectData,
  onUnselectData,
}) => {
  return (
    <div className="grid grid-cols-3 gap-x-4 p-5 min-h-screen">
      <div className="col-span-1 space-y-3">
        {dataList.map((data) => {
          return (
            <ItemButton key={data.name} onClick={() => onSelectData(data)}>
              {data.name}
            </ItemButton>
          );
        })}
      </div>
      <div className="col-span-2 flex space-x-2">
        <ItemsBox
          title="Fruit"
          dataList={fruits}
          onUnselectData={onUnselectData}
        />
        <ItemsBox
          title="Vegetable"
          dataList={vegetables}
          onUnselectData={onUnselectData}
        />
      </div>
    </div>
  );
};

export default TodoListView;
