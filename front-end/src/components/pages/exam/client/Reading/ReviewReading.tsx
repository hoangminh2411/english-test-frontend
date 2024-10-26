'use client';

import React, { useEffect, useState } from 'react';

import Chip from '@components/common/Chip';
import RawHTML from '@components/common/RawHtml';
import { useExamProvider } from '@components/providers/ExamProvider';
import { IQuestion } from 'types/exam';

import ReviewQuestion from '../Question/ReviewQuestion';

export const ReviewReading = () => {
  const { data, selectedQuestion } = useExamProvider();
  const allReadingParts = data?.questions?.filter((val) => val.type == 'READING' && !val.parentId) || [];
  const [activePart, setActivePart] = useState<number>(allReadingParts?.[0]?.id ?? '');

  useEffect(() => {
    if (selectedQuestion?.examType == 'READING') {
      setActivePart(selectedQuestion?.partId);
    }
  }, [selectedQuestion?.partId, selectedQuestion?.questionId, selectedQuestion?.examType]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-2 p-4">
        {allReadingParts.map((part, index: number) => {
          const isActive = activePart == part?.id;
          return (
            <Chip
              color={isActive ? 'blue' : 'gray'}
              size="md"
              onClick={() => setActivePart(part.id)}
              active={isActive}
              label={`Part ${index + 1}`}
              key={part.id}
            />
          );
        })}
      </div>

      {allReadingParts.map((part) => {
        if (part.id !== activePart) return;
        const childQuestions = data?.questions?.filter((val) => val.parentId == part.id);
        return <ReviewReadingPart questions={childQuestions} data={part} key={part.id} />;
      })}
    </div>
  );
};

type ReviewReadingPartProps = {
  data: IQuestion;
  questions: IQuestion[];
};
const ReviewReadingPart = ({ data, questions }: ReviewReadingPartProps) => {
  return (
    <div className="grid grid-cols-12 gap-4 p-4 pt-0">
      <div className="col-span-6 p-4  bg-neutral-50 overflow-y-scroll max-h-[calc(100vh-350px)] border border-gray-200">
        <RawHTML>{data.content}</RawHTML>
      </div>
      <div className="col-span-6">
        <div className="flex flex-col gap-2 overflow-y-scroll max-h-[calc(100vh-350px)] border border-gray-200 p-4">
          {questions.map((question) => (
            <ReviewQuestion key={question.id} question={question} />
          ))}
        </div>
      </div>
    </div>
  );
};
