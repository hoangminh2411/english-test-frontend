'use client';
import React, { useState } from 'react';

import Chip from '@components/common/Chip';
import RawHTML from '@components/common/RawHtml';
import { useExamProvider } from '@components/providers/ExamProvider';
import { IQuestion } from 'types/exam';

export const ExamWriting = () => {
  const { data } = useExamProvider();
  const allWringParts = data?.questions?.filter((val) => val.type == 'WRITING' && !val.parentId) || [];
  const [activePart, setActivePart] = useState<number>(allWringParts?.[0]?.id ?? '');
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-2 p-4">
        {allWringParts.map((part, index: number) => {
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

      {allWringParts.map((part, index: number) => {
        if (part.id !== activePart) return;
        return <WritingPart questionNumber={index + 1} data={part} key={part.id} />;
      })}
    </div>
  );
};

type WritingPartProps = {
  data: IQuestion;
  questionNumber: number;
};
const WritingPart = ({ data, questionNumber }: WritingPartProps) => {
  const { answerStore, onDispatchAction } = useExamProvider();
  const [wordCount, setWordCount] = useState(0);

  const handleEssayChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    onDispatchAction({
      type: 'SELECT_ANSWER',
      payload: {
        questionId: data.id,
        answer: text
      }
    });

    // Count words by splitting text based on spaces and filtering out empty strings
    const words = text.trim().split(/\s+/);
    setWordCount(words.filter((word) => word.length > 0).length);
  };

  const essay = answerStore[data.id];
  return (
    <div className="grid grid-cols-12 gap-4 p-4 pt-0">
      <div className="col-span-6 p-4  bg-neutral-50 overflow-y-auto max-h-[calc(100vh-350px)]">
        <RawHTML>{data.content}</RawHTML>
      </div>
      <div className="col-span-6">
        <div className="flex flex-col gap-2 overflow-y-auto max-h-[calc(100vh-350px)]">
          <div className="flex gap-2 items-center">
            <div
              className="mb-2  font-semibold flex items-center justify-center w-4 h-4 p-4 bg-blue-50 rounded-full text-blue-800"
              data-qid={data.id}
              data-markable="true"
            >
              <strong>{questionNumber}</strong>
            </div>
            <label htmlFor="message" className="block mb-2 font-bold  text-gray-900 ">
              Write Essay Here
            </label>
          </div>

          <textarea
            value={essay}
            id="message"
            rows={30}
            className="block p-2.5 w-full  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Write Essay Here.."
            onChange={handleEssayChange}
          ></textarea>
          <div className="text-right text-gray-500">Word count: {wordCount}</div>
        </div>
      </div>
    </div>
  );
};
