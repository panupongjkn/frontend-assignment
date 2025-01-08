'use client'

import ListInfo from "./components/ListInfo";
import { DepartmentCardViewProps } from "./types";

const DepartmentCardView: React.FC<DepartmentCardViewProps> = (department) => {
  return (
    <div className="border p-4 rounded">
      <p className="font-bold">{department.name}</p>
      <p>{`male: ${department.male}`}</p>
      <p>{`female: ${department.female}`}</p>
      <p>{`ageRange: ${department.ageRange}`}</p>
      <ListInfo
        title="hairs:"
        values={Object.keys(department.hair).map(
          (hairKey) => `${hairKey}: ${department.hair[hairKey]}`
        )}
      />
      <ListInfo
        title="address users:"
        values={Object.keys(department.addressUser).map(
          (addressUserKey) =>
            `${addressUserKey}: ${department.addressUser[addressUserKey]}`
        )}
      />
    </div>
  );
};

export default DepartmentCardView;
