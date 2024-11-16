import { ApiService } from '.';

export const ExamService = {
  get: async (id: number): Promise<any> => {
    const res = await new ApiService().get(`exams/${id}`);
    return res;
  },
  getList: async (): Promise<any> => {
    const res = await new ApiService().get('exams');
    return res;
  }
};
