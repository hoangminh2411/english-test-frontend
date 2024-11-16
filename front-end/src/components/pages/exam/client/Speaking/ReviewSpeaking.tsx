'use client';
import React, { useState, useCallback } from 'react';
import Chip from '@components/common/Chip';
import RawHTML from '@components/common/RawHtml';
import { useExamProvider } from '@components/providers/ExamProvider';
import { IQuestion } from 'types/exam';

export const ReviewSpeaking = () => {
  const { data } = useExamProvider();
  const allSpeakingParts = data?.questions?.filter((val) => val.type === 'SPEAKING' && !val.parentId) || [];
  const [activePart, setActivePart] = useState<number>(allSpeakingParts?.[0]?.id ?? '');

  return (
    <div className="flex flex-col gap-4">
      {/* Phần điều hướng các Part */}
      <div className="flex flex-row gap-2 p-4">
        {allSpeakingParts.map((part, index) => {
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

      {/* Nội dung từng Part */}
      {allSpeakingParts.map((part) => part.id === activePart && <SpeakingPart data={part} key={part.id} />)}
    </div>
  );
};

type SpeakingPartProps = {
  data: IQuestion;
};

const SpeakingPart = ({ data }: SpeakingPartProps) => {
  const { scoreData = {} } = useExamProvider();

  // Retrieve audio answer, score, and feedback for the question
  const audio = scoreData[data.id]?.selectedAnswer ?? "";
  const score = scoreData[data.id]?.score ?? 0;
  const feedback = scoreData[data.id]?.feedback ?? "";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 pt-0">
      {/* Question Content */}
      <div className="p-4 bg-neutral-50 overflow-y-auto max-h-[calc(100vh-350px)] border border-gray-200 rounded-md">
        <RawHTML>{data.content}</RawHTML>
      </div>

      {/* Audio Answer and Review Section */}
      <div className="flex flex-col gap-4 h-full overflow-y-auto max-h-[calc(100vh-350px)] border border-gray-200 rounded-md p-4 bg-blue-50/30">
        {/* Audio Player */}
        <p>Your Answer</p>
        {audio ? (
          <audio className="w-full" controls>
            <source src={audio} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        ) : (
          <p className="text-gray-500">No audio answer provided.</p>
        )}

        {/* Score Section */}
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h3 className="font-bold text-gray-700">Score</h3>
          <p className="text-xl font-semibold text-green-700">{score} / 9.0</p>
        </div>

        {/* Feedback Section */}
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
