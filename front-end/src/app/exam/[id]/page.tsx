import Button from '@components/common/Button';
import { Header } from '@components/layouts/Header';
import { ExamNavigation } from '@components/pages/exam/client/ExamNavigation';
import { EXAM_1 } from 'data/examp-1';
import { IExam } from 'types/exam';

export default function Exam() {
  const data = EXAM_1;
  return (
    <>
      <Header />
      <div className="p-4 bg-gray-100">
        <div className="flex flex-col gap-4">
          <h2 className="flex flex-row justify-center items-center gap-2">
            {data?.name}
            <Button size="small" className="text-black hover:text-white" variant="outline" color="red">
              Thoát
            </Button>
          </h2>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-9">
              <div className="shadow bg-white h-full"></div>
            </div>
            <div className="col-span-3 bg-white">
              <ExamNavigation data={data as unknown as IExam} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
