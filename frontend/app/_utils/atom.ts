import { atom, selector } from "recoil";

export interface Brand {
  _id: string;
  brandName: string;
  logo: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export const brandState = atom<Brand[]>({
  key: "brandState",
  default: [],
});
