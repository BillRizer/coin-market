import { subscribeFromApi } from "../../infrastructure/api/v1/subscribe";

export const subscribeFromService = async (email: string): Promise<any> => {
  return await subscribeFromApi(email);
};
