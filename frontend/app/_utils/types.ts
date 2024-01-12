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
  images: string[];
}

export interface Enquiry {
  _id: string;
  name: string;
  email: string;
  phone: string;
  brand: string;
  model: string;
  year: number;
}

export interface Userinfo {
  name: string;
  accessToken: string;
  email: string;
  type: string;
}

export interface UserPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  type: string;
}

export interface ModelPayload {
  modelName: string;
  brandId: string;
}

export interface CarPayload {
  model: string;
  year: string;
  price: string;
  color: string;
  seatingCapacity: string;
  ownership: string;
  vehicleType: string;
  fuelType: string;
  kilometers: string;
  variant: string;
  images: string[];
}

export interface SearchPayload {
  searchQuery: string;
}
