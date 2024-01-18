import { atom, atomFamily, selector, selectorFamily } from "recoil";
import { Brand, Enquiry, Inventory, Model, User } from "./types";
import {
  brandServices,
  enquiryServices,
  inventoryServices,
  modelServices,
  userServices,
} from "./apiServices";

export const brandState = atom<Brand[]>({
  key: "brandState",
  default: selector({
    key: "brandSelector",
    get: ({ get }) => {
      return brandServices.getBrands();
    },
  }),
});

export const userState = atom<User[]>({
  key: "userState",
  default: selector({
    key: "userSelector",
    get: ({ get }) => {
      return userServices.getUsers();
    },
  }),
});

export const modelState = atomFamily<Model[], number>({
  key: "modelState",
  default: selectorFamily({
    key: "modelSelector",
    get:
      (page) =>
      ({ get }) => {
        return modelServices.getModels(page);
      },
  }),
});

export const inventoryState = atom<Inventory[]>({
  key: "inventoryState",
  default: selector({
    key: "inventorySelector",
    get: ({ get }) => {
      return inventoryServices.getInventoryForAdmin();
    },
  }),
});

export const enquiryState = atom<Enquiry[]>({
  key: "enquiryState",
  default: selector({
    key: "enquirySelector",
    get: ({ get }) => {
      return enquiryServices.getEnquiry();
    },
  }),
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
