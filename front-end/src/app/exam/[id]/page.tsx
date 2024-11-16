'use client';

import LoadingWrapper from '@components/elements/LoadingWrapper';
import { Header } from '@components/layouts/Header';
import { ExamContainer } from '@components/pages/exam/client/ExamContainer';
import { AuthProvider } from '@components/providers/AuthProvider';
import { FetchError } from '@utils/api';
import { ExamService } from '@utils/api/exam';
import { ExamAttemptServices } from '@utils/api/exam-attempt';
import { useEffect, useState } from 'react';
import { IExam } from 'types/exam';

export default  function Exam({params}:any) {
  const [examData, setExamData] = useState<any>(null)
  const [attemptId, setAttemptId] = useState<any>()
  const [isFetching, setIsFetching] = useState<boolean>(true);
  // const examData = await ExamService.get(1);
  useEffect(() => {
    const fetchExams = async (examId:number) => {
      try {
        const exampAttemptResponse = await ExamAttemptServices.join(examId)

        if(exampAttemptResponse?.data?.examId) {
          const response = await ExamService.get(exampAttemptResponse?.data?.examId);
          if (response && response.data) {
            setExamData(response.data)
            setAttemptId(exampAttemptResponse.data.id)
          } 
          setIsFetching(false)
        }
      
      } catch (error: any) {
        setIsFetching(false);
        if (error instanceof FetchError) {
          const errorMessage = error.responseBody?.error?.error || error.responseBody?.message || 'An unexpected error occurred';

          console.log("errorMessage",errorMessage)
          // Display error message in the UI
          setIsFetching(false);
        } else {
          console.error('Unexpected error:', error);
          setIsFetching(false);
        }
      }
    };
    if(params?.id)fetchExams(params?.id)
  }, [params?.id]);
  return (
    <AuthProvider>
      <Header />
      <LoadingWrapper isLoading={isFetching}>
        {examData && attemptId&&<ExamContainer attemptId={attemptId} data={examData as unknown as IExam} />}
      </LoadingWrapper>
    </AuthProvider>
  );
}
