'use client';
import React, { useState } from 'react';

import Chip from '@components/common/Chip';
import RawHTML from '@components/common/RawHtml';
import { useExamProvider } from '@components/providers/ExamProvider';
import { IQuestion } from 'types/exam';

export const ReviewWriting = () => {
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
  const { scoreData = {} } = useExamProvider();

  // Get the answer, score, and feedback from the scoreData for the specific question
  const essay = scoreData[data.id]?.selectedAnswer ?? "";
  const score = scoreData[data.id]?.score ?? 0;
  const feedback = scoreData[data.id]?.feedback ?? "";
  const wordCount = essay.trim().split(/\s+/).filter((word) => word.length > 0).length;

  return (
    <div className="grid grid-cols-12 gap-4 p-4 pt-0">
      {/* Question Content */}
      <div className="col-span-6 p-4 bg-neutral-50 overflow-y-auto max-h-[calc(100vh-350px)] border border-gray-200 rounded-md">
        <RawHTML>{data.content}</RawHTML>
      </div>

      {/* Answer and Review Section */}
      <div className="col-span-6 flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <div
            className="mb-2 font-semibold flex items-center justify-center w-4 h-4 p-4 bg-blue-50 rounded-full text-blue-800"
            data-qid={data.id}
            data-markable="true"
          >
            <strong>{questionNumber}</strong>
          </div>
          <label htmlFor="message" className="block mb-2 font-bold text-gray-900">
            Your Answer
          </label>
        </div>

        {/* Answer Display */}
        <textarea
          disabled
          value={essay}
          id="message"
          rows={10}
          className="block p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Your answer will appear here..."
        ></textarea>
        <div className="text-right text-gray-500">Word count: {wordCount}</div>

        {/* Score and Feedback Section */}
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h3 className="font-bold text-gray-700">Score</h3>
          <p className="text-xl font-semibold text-green-700">{score} / 9.0</p>
        </div>

        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h3 className="font-bold text-gray-700">Feedback</h3>
          {feedback ? (
            <p className="text-gray-800">{feedback}</p>
          ) : (
            <p className="text-gray-500">No feedback provided.</p>
          )}
        </div>
      </div>
    </div>
  );
};
