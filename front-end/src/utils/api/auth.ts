import { ApiService } from '.';

export const AuthService = {
  login: async (data: any): Promise<any> => {
    const res = await new ApiService().post('auth/login', data);
    return res;
  }
};
