import { ApiService } from '.';

export const ExamAttemptServices = {
  join: async (examId: number): Promise<any> => {
    const res = await new ApiService().post('exam-attempt', {
      examId
    });
    return res;
  },
  getAllAttemptsForUser:  async (userId: number): Promise<any> => {
    const res = await new ApiService().get(`exam-attempt/users/${userId}`);
    return res;
  },
};
