import { ApiService } from '.';

export const ResultService = {
  submitExam: async (data: any): Promise<any> => {
    const res = await new ApiService().post('results/submit', data);
    return res;
  },
  getScoreReport: async (attempId:number): Promise<any> => {
    const res = await new ApiService().get(`/results/attempts/${attempId}`);
    return res;
  }
};
