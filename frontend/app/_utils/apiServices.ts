import { toast } from "react-toastify";
import jwtInterceptor from "./jwtInterceptor";
import { ModelPayload, User, UserPayload } from "./types";

export const modelServices = {
  getModels: async (page: number) => {
    try {
      const response = await jwtInterceptor.get(`/get-models?&page=${page}`);
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
};
