'use client'

import { useEffect, useState } from "react";
import { getDataService } from "./services/departmentService";
import { DataResponse } from "./services/types";
import DepartmentCard from "./components/DepartmentCard";

const DataAPI = () => {
  const [data, setData] = useState<DataResponse>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getDataService();
    if (data) {
      setData(data);
    }
    setIsLoading(false);
  };

  if (isLoading) return <p className="p-5 text-center">Loading...</p>;
  return (
    <div className="p-5">
      <p className="text-center mb-4">Data</p>
      <div className="grid grid-cols-4 gap-4">
        {Object.keys(data).map((key) => {
          const department = data[key];
          return <DepartmentCard key={key} name={key} {...department} />;
        })}
      </div>
    </div>
  );
};

export default DataAPI;
