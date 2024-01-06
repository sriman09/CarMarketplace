import jwtInterceptor from "./jwtInterceptor";

export const modelServices = {
  getModels: async (page: number) => {
    try {
      const response = await jwtInterceptor.get(`/get-models?&page=${page}`);
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
};

export const inventoryServices = {
  getInventoryForAdmin: async () => {
    try {
      const response = await jwtInterceptor.get(`/get-all-cars`);
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
};
