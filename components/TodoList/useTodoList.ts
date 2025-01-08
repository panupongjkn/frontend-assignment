import { useRef, useState } from "react";
import { DataType } from "./types";
import dataRaw from "../../data/data.json";

const useTodoList = () => {
  const [dataList, setDataList] = useState<DataType[]>(dataRaw);
  const [fruits, setFruits] = useState<DataType[]>([]);
  const [vegetables, setVegetables] = useState<DataType[]>([]);
  const timeoutRefs = useRef<Record<string, number>>({});

  const onSelectData = (dataSelected: DataType) => {
    const timeoutId = setTimeout(() => {
      if (timeoutRefs.current[dataSelected.name]) {
        onUnselectData(dataSelected);
      }
    }, 5000);
    timeoutRefs.current[dataSelected.name] = timeoutId;
    switch (dataSelected.type) {
      case "Fruit":
        setFruits((fruits) => {
          return [...fruits, dataSelected];
        });
        break;
      case "Vegetable":
        setVegetables((vegetables) => [...vegetables, dataSelected]);
        break;
      default:
        break;
    }
    setDataList((dataList) =>
      dataList.filter((data) => data.name !== dataSelected.name)
    );
  };

  const onUnselectData = (dataUnselected: DataType) => {
    const data = {
      type: dataUnselected.type,
      name: dataUnselected.name,
    };
    clearTimeout(timeoutRefs.current[dataUnselected.name]);
    delete timeoutRefs.current[dataUnselected.name];
    switch (dataUnselected.type) {
      case "Fruit":
        setFruits((fruits) =>
          fruits.filter((fruit) => fruit.name !== dataUnselected.name)
        );
        break;
      case "Vegetable":
        setVegetables((vegetables) =>
          vegetables.filter(
            (vegetable) => vegetable.name !== dataUnselected.name
          )
        );
        break;
      default:
        break;
    }
    setDataList((dataList) => [...dataList, data]);
  };

  return {
    dataList,
    fruits,
    vegetables,
    onSelectData,
    onUnselectData,
  };
};

export default useTodoList
