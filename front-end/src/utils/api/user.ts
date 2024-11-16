import { ApiService } from '.';

export const UserService = {
  getMe: async (): Promise<any> => {
    const res = await new ApiService().get('/users/me');
    return res;
  }
};
