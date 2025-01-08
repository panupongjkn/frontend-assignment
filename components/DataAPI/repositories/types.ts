export type DataAPIResponse = {
  data: { [key: string]: Department };
  messsage: string
};

export type Department = {
  male: number;
  female: number;
  ageRange: string;
  hair: Hair;
  addressUser: AddressUser;
};

export type Hair = {
  [key: string]: number;
};

export type AddressUser = {
  [key: string]: string;
};
