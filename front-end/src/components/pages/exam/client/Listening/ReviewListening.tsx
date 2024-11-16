'use client';
import React, { useEffect, useMemo, useState } from 'react';

import Chip from '@components/common/Chip';
import RawHTML from '@components/common/RawHtml';
import { useExamProvider } from '@components/providers/ExamProvider';
import { IQuestion } from 'types/exam';

import ReviewQuestion from '../Question/ReviewQuestion';

export const ReviewListening = () => {
  const { data, selectedQuestion } = useExamProvider();
  const allListeningParts = useMemo(() => {
    return data?.questions?.filter((val) => val.type === 'LISTENING' && !val.parentId) || [];
  }, [data]);
  const [activePart, setActivePart] = useState<number>(allListeningParts?.[0]?.id ?? '');
  const [startingOrder, setStartingOrder] = useState<number[]>([]);
  useEffect(() => {
    if (selectedQuestion?.examType == 'LISTENING') {
      setActivePart(selectedQuestion?.partId);
    }
  }, [selectedQuestion?.partId, selectedQuestion?.questionId, selectedQuestion?.examType]);


    // Calculate starting order numbers for each part
    useEffect(() => {
      const orders = [];
      let currentOrder = 1;
      for (const part of allListeningParts) {
        orders.push(currentOrder);
        const partQuestions = data?.questions?.filter((val) => val.parentId === part.id) || [];
        currentOrder += partQuestions.length;
      }
      setStartingOrder(orders);
    }, [data]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-2 p-4">
        {allListeningParts.map((part, index: number) => {
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

      {allListeningParts.map((part,index) => {
        if (part.id !== activePart) return;
        const childQuestions = data?.questions?.filter((val) => val.parentId == part.id);
        return <ListeningPart questions={childQuestions} data={part} key={part.id}  startingOrder={startingOrder[index]}/>;
      })}
    </div>
  );
};

type ListeningPartProps = {
  data: IQuestion;
  questions: IQuestion[];
  startingOrder: number;
};
const ListeningPart = ({ data, questions, startingOrder }: ListeningPartProps) => {
  return (
    <div className="grid grid-cols-12 gap-4 p-4 pt-0">
      <div className="col-span-6 p-4  bg-neutral-50 overflow-y-scroll max-h-[calc(100vh-350px)] border border-gray-200">
        <RawHTML>{data.content}</RawHTML>
      </div>
      <div className="col-span-6">
        <div className="flex flex-col gap-2 overflow-y-scroll max-h-[calc(100vh-350px)]  border border-gray-200 p-4">
          {questions.map((question,i) => (
            <ReviewQuestion key={question.id} question={question} questionNumber={startingOrder + i} />
          ))}
        </div>
      </div>
    </div>
  );
};
