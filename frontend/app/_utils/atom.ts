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

export interface Model {
  _id: string;
  modelName: string;
  brandId: string;
  brandName: string;
}

export interface Inventory {
  _id: string;
  variant: string;
  year: number;
  price: number;
  kilometers: number;
  fuelType: string;
  vehicleType: string;
  ownership: string;
  seatingCapacity: number;
  color: string;
  showPrice: boolean;
  sold: boolean;
  modelName: string;
  brandName: string;
}

export const brandState = atom<Brand[]>({
  key: "brandState",
  default: [],
});

export const userState = atom<User[]>({
  key: "userState",
  default: [],
});

export const modelState = atom<Model[]>({
  key: "modelState",
  default: [],
});

export const inventoryState = atom<Inventory[]>({
  key: "inventoryState",
  default: [],
});
