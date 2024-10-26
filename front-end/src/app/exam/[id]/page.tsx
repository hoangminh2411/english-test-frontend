import { Header } from '@components/layouts/Header';
import { ExamContainer } from '@components/pages/exam/client/ExamContainer';
import { EXAM_1 } from 'data/examp-1';
import { IExam } from 'types/exam';

export default function Exam() {
  const data = EXAM_1;

  return (
    <>
      <Header />
      <ExamContainer data={data as unknown as IExam} />
    </>
  );
}
