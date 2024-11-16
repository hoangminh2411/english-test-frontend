'use client';
import LoadingWrapper from '@components/elements/LoadingWrapper';
import { Header } from '@components/layouts/Header';
import { ReviewContainer } from '@components/pages/exam/client/ReviewContainer';
import { AuthProvider } from '@components/providers/AuthProvider';
import { ExamService } from '@utils/api/exam';
import { ResultService } from '@utils/api/results';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
export default  function Score({params}:any) {
  // Fetch both examData and resultsData concurrently
  const router = useRouter()
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [answerData, setAnswerData] = useState<any>()
  const [scoreData, setScoreData] = useState<any>()
  const [score, setScore] = useState<any>()
  const [exam, setExam] = useState<any>()


  useEffect(()=>{
   const fetchData = async (attemptId:number) => {
    try {
          const [examData, resultsData] = await Promise.all([ExamService.get(1), ResultService.getScoreReport(attemptId)]);

          // Count of questions for each skill
      const questionCounts = { listening: 35, reading: 40, speaking: 3, writing: 2 };
      const rawScores = { listening: 0, reading: 0, speaking: 0, writing: 0 };

        // Process results to calculate scores and gather answer data
        let scoreRes: any = {};
        let answerRes: any = {};
        resultsData?.data?.forEach((result: any) => {
          scoreRes = {
            ...scoreRes,
            [result.questionId]: { selectedAnswer: result.selectedAnswer, score: result.score, feedback: result.feedback }
          };
          answerRes = { ...answerRes, [result.questionId]: result.selectedAnswer };

          const questionType = result.question?.type;
          const resultScore = result.score || 0;

          if (questionType === 'LISTENING' && resultScore === 1) rawScores.listening += 1;
          else if (questionType === 'READING' && resultScore === 1) rawScores.reading += 1;
          else if (questionType === 'SPEAKING') rawScores.speaking += resultScore;
          else if (questionType === 'WRITING') rawScores.writing += resultScore;
        });

      // Calculate final scores with each skill score scaled to 9.0 and rounded to one decimal
      const finalScores = {
        listening: parseFloat(((rawScores.listening / questionCounts.listening) * 9).toFixed(1)),
        reading: parseFloat(((rawScores.reading / questionCounts.reading) * 9).toFixed(1)),
        speaking: parseFloat((rawScores.speaking / questionCounts.speaking).toFixed(1)),
        writing: parseFloat((rawScores.writing / questionCounts.writing).toFixed(1))
      };


      setAnswerData(answerRes)
      setScoreData(scoreRes)
      setScore(finalScores)
      setExam(examData.data)
      setIsFetching(false)
    }catch(err) {
      router.push("/")
    }
   
   }

   if(params.id) fetchData(params.id)

  },[params.id])



  const isValid = answerData&&scoreData&&score&&exam

  return (
    <AuthProvider>
      <LoadingWrapper isLoading={isFetching}>
      <Header />
      {isValid && <ReviewContainer answerData={answerData} score={score} scoreData={scoreData} data={exam} /> }
      </LoadingWrapper>
    </AuthProvider>
  );
}
