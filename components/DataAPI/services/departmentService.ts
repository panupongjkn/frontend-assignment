import { getDataRepository } from "../repositories/departmentRepository";
import { DataResponse } from "./types";

export const getDataService: () => Promise<DataResponse | null> = async () => {
  const res = await getDataRepository();
  if (res.status === 200) {
    return res.data.data;
  }
  return null;
};
