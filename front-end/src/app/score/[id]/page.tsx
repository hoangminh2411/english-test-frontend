import { Header } from '@components/layouts/Header';
import { ReviewContainer } from '@components/pages/exam/client/ReviewContainer';
import { ANSWER_DATA } from 'data/answer-1';
import { EXAM_1 } from 'data/examp-1';
import { IExam } from 'types/exam';

export default function Score() {
  const data = EXAM_1;
  const answerData = ANSWER_DATA;
  return (
    <>
      <Header />
      <ReviewContainer answerData={answerData} data={data as unknown as IExam} />
    </>
  );
}
