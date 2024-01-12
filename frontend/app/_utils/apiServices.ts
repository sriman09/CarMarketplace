import { toast } from "react-toastify";
import jwtInterceptor from "./jwtInterceptor";
import {
  CarPayload,
  ModelPayload,
  SearchPayload,
  User,
  UserPayload,
} from "./types";

export const modelServices = {
  getModels: async (page: number) => {
    try {
      const response = await jwtInterceptor.get(`/get-models?&page=${page}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  getModelsByBrandId: async (brandId: string) => {
    try {
      const response = await jwtInterceptor.get(
        `/get-model-by-brandId/${brandId}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  registerModels: async (payload: ModelPayload) => {
    try {
      const response = await jwtInterceptor.post(`/register-model`, payload);
      toast.success("Model added Successfully", {
        position: "top-right",
        theme: "dark",
      });
      return response.data;
    } catch (error: any) {
      toast.error(error.message, {
        position: "top-right",
        theme: "dark",
      });
    }
  },
  searchModels: async (payload: SearchPayload) => {
    try {
      const response = await jwtInterceptor.post(`/search-models`, payload);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export const brandServices = {
  getBrands: async () => {
    try {
      const response = await jwtInterceptor.get(`/get-brands`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  registerBrands: async (formData: any) => {
    try {
      const response = await jwtInterceptor.post(`/register-brand`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success(response.data.message, {
        position: "top-right",
        theme: "dark",
      });
    } catch (error: any) {
      toast.success(error.data.message, {
        position: "top-right",
        theme: "dark",
      });
    }
  },
  searchBrands: async (payload: SearchPayload) => {
    try {
      const response = await jwtInterceptor.post(`/search-brands`, payload);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export const userServices = {
  getUsers: async () => {
    try {
      const response = await jwtInterceptor.get(`/get-all-users`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  registerUser: async (payload: UserPayload) => {
    try {
      const response = await jwtInterceptor.post(`/register-user`, payload);
      toast.success("User added Successfully", {
        position: "top-right",
        theme: "dark",
      });
      return response.data;
    } catch (error: any) {
      toast.error(error.message, {
        position: "top-right",
        theme: "dark",
      });
    }
  },
  searchUsers: async (payload: SearchPayload) => {
    try {
      const response = await jwtInterceptor.post(`/search-users`, payload);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export const inventoryServices = {
  getInventoryForAdmin: async () => {
    try {
      const response = await jwtInterceptor.get(`/get-all-cars`);
      return response.data;
    } catch (error: any) {
      toast.error(error.message, {
        position: "top-right",
        theme: "dark",
      });
    }
  },
  registerCar: async (payload: CarPayload) => {
    try {
      const response = await jwtInterceptor.post(`/register-car`, payload);
      toast.success("Car added Successfully", {
        position: "top-right",
        theme: "dark",
      });
      return response.data;
    } catch (error: any) {
      toast.error(error.message, {
        position: "top-right",
        theme: "dark",
      });
    }
  },
  searchCars: async (payload: SearchPayload) => {
    try {
      const response = await jwtInterceptor.post(`/search-cars`, payload);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export const enquiryServices = {
  getEnquiry: async () => {
    try {
      const response = await jwtInterceptor.get(`/get-enquiry`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  searchEnquiry: async (payload: SearchPayload) => {
    try {
      const response = await jwtInterceptor.post(`/search-enquiry`, payload);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export const uploadServices = {
  uploadImage: async (formData: any) => {
    try {
      const response = await jwtInterceptor.post(`/upload-image`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
