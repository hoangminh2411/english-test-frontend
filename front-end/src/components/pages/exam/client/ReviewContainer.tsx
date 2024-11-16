'use client';
import React from 'react';

import ExamProvider from '@components/providers/ExamProvider';
import { IExam } from 'types/exam';

import { ExamInteraction } from './ExamInteraction';
import { ExamNavigation } from './ExamNavigation';
import { ScoreReview } from './ScoreReview';

type Props = {
  data: IExam;
  scoreData: Record<number, { selectedAnswer: string; score: number; feedback: string }>;
  score: Record<'listening' | 'reading' | 'speaking' | 'writing', number>;
  answerData: Record<number, any>;
};
export const ReviewContainer = ({ data, scoreData, score, answerData }: Props) => {
  return (
    <ExamProvider answerData={answerData} scoreData={scoreData} data={data}>
      <div className="p-4 bg-gray-100">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center w-full container mx-auto gap-4">
            <h2 className="flex flex-row justify-center items-center gap-2 font-bold">{data?.name}</h2>
            <ScoreReview score={score} />
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-10">
              <ExamInteraction />
            </div>
            <div className="col-span-2 ">
              <ExamNavigation />
            </div>
          </div>
        </div>
      </div>
    </ExamProvider>
  );
};
