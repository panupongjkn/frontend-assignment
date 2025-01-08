'use client'

import DepartmentCardView from "./DepartmentCardView";
import { DepartmentCardProps } from "./types";

const DepartmentCard: React.FC<DepartmentCardProps> = (department) => {
  return <DepartmentCardView {...department} />
};

export default DepartmentCard;
