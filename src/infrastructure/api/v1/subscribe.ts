import { api } from "./config/api";

export const subscribeFromApi = async (email: string): Promise<any> => {
  try {
    //this function simulates a lazy server
    return new Promise((resolve) => setTimeout(resolve, 8000));
  } catch (error) {
    console.log(error);
    return null;
  }
};
