'use client'

import { ListInfoViewProps } from "./types";

const ListInfoView: React.FC<ListInfoViewProps> = ({ title, values }) => {
  return (
    <div>
      <p>{title}</p>
      <ul className="list-disc list-inside">
        {values.map((value) => {
          return <li key={value}>{value}</li>;
        })}
      </ul>
    </div>
  );
};

export default ListInfoView;
