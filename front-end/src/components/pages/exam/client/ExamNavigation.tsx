import React from 'react';

import Button from '@components/common/Button';
import Timer from '@components/common/Timmer';
import { IExam } from 'types/exam';

type Props = {
  data: IExam;
};
export const ExamNavigation = ({ data }: Props) => {
  return (
    <div className="shadow p-4">
      <div className="flex flex-col gap-4">
        {/* TImmer */}
        <div>
          <p>Thời gian còn lại</p>
          <Timer start={true} totalTime={data.totalTime} />
        </div>
        <Button>Nộp bài</Button>

        {/* Skills Navigation */}
        {data.questions.map((question) => {
          if (question.parentId === null) {
            return (
              <div key={question.id} className="flex flex-col">
                <h3 className="font-bold text-md">Part {question.order}</h3>
                <div className="flex gap-1 items-center">
                  {data.questions
                    .filter((q) => q.parentId === question.id)
                    .map((childQuestion) => (
                      <Button size="small" className="w-fit" variant="outline" color="light" key={childQuestion.id}>
                        {childQuestion.order}
                      </Button>
                    ))}
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};
