import { atom, selector } from "recoil";

export interface Brand {
  _id: string;
  brandName: string;
  logo: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  type: string;
}

export const brandState = atom<Brand[]>({
  key: "brandState",
  default: [],
});

export const userState = atom<User[]>({
  key: "userState",
  default: [],
});
