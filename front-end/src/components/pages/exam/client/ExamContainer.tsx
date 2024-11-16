'use client';
import React from 'react';

import ExamProvider from '@components/providers/ExamProvider';
import { IExam } from 'types/exam';

import { ExamInteraction } from './ExamInteraction';
import { ExamNavigation } from './ExamNavigation';
import { ExamStepper } from './ExamStepper';

type Props = {
  data: IExam;
  attemptId:number
};
export const ExamContainer = ({attemptId, data }: Props) => {
  return (
    <ExamProvider attemptId={attemptId}  data={data}>
      <div className="p-4 bg-gray-100">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center w-full container mx-auto gap-4">
            <h2 className="flex flex-row justify-center items-center gap-2 font-bold">{data?.name}</h2>
            <ExamStepper />
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
