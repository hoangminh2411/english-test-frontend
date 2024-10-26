'use client';
import React from 'react';

import { useExamProvider } from '@components/providers/ExamProvider';

import { ExamListening } from './Listening/ExamListening';
import { ExamReading } from './Reading/ExamReading';
import { ExamSpeaking } from './Speaking/ExamSpeaking';
import { ExamWriting } from './Writing/ExamWriting';

export const ExamInteraction = () => {
  const { type } = useExamProvider();
  return (
    <div className="h-full shadow bg-white rounded-md">
      {type == 'READING' && <ExamReading />}
      {type == 'LISTENING' && <ExamListening />}
      {type == 'SPEAKING' && <ExamSpeaking />}
      {type == 'WRITING' && <ExamWriting />}
    </div>
  );
};
