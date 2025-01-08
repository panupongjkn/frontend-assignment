"use client";

import ListInfoView from "./ListInfoView";
import { ListInfoProps } from "./types";

const ListInfo: React.FC<ListInfoProps> = (props) => {
  return <ListInfoView {...props} />;
};

export default ListInfo;
