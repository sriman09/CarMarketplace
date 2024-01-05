import { atom, selector } from "recoil";
import { Brand, Enquiry, Inventory, Model, User } from "./types";

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

export const enquiryState = atom<Enquiry[]>({
  key: "enquiryState",
  default: [],
});
