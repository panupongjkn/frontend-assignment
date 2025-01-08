import axios, { AxiosResponse } from "axios";
import { DataAPIResponse } from "./types";

export const getDataRepository: () => Promise<
  AxiosResponse<DataAPIResponse>
> = async () => {
  return await axios.get("/api/department");
};
