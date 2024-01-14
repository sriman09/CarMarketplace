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

export const detailedCarState = atom<Inventory>({
  key: "detailedCarState",
  default: {
    _id: "",
    variant: "",
    year: 0,
    price: 0,
    kilometers: 0,
    fuelType: "",
    vehicleType: "",
    ownership: "",
    seatingCapacity: 0,
    color: "",
    showPrice: true,
    sold: false,
    modelName: "",
    brandName: "",
    images: [],
  },
});
