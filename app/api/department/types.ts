export type ResultType = {
  [key: string]: Department & { minAge?: number; maxAge?: number };
};

export type DataResponse = {
  [key: string]: Department;
};

type Department = {
  male: number;
  female: number;
  ageRange: string;
  hair: Hair;
  addressUser: AddressUser;
};

type Hair = {
  [key: string]: number;
};

type AddressUser = {
 [key: string]: string;
};

export type DataAPIResponse = {
  limit: number;
  skip: number;
  total: number;
  users: UserAPI[];
};

type UserAPI = {
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
  hair: HairAPI;
  address: AddressAPI;
  company: CompanyAPI;
};

type CompanyAPI = {
  department: string;
};

type HairAPI = {
  color: string;
  type: string;
};
type AddressAPI = {
  postalCode: string;
};
