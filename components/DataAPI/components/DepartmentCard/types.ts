import { Department } from "../../services/types";

export type DepartmentCardProps = DepartmentCardViewProps

export type DepartmentCardViewProps = {
  name: string;
} & Department;