'use client';
import React from 'react';

import { useExamProvider } from '@components/providers/ExamProvider';

import { ExamListening } from './Listening/ExamListening';
import { ReviewListening } from './Listening/ReviewListening';
import { ExamReading } from './Reading/ExamReading';
import { ReviewReading } from './Reading/ReviewReading';
import { ExamSpeaking } from './Speaking/ExamSpeaking';
import { ExamWriting } from './Writing/ExamWriting';

export const ExamInteraction = () => {
  const { type, isReview } = useExamProvider();
  return (
    <div className="h-full shadow bg-white rounded-md">
      {type == 'READING' && !isReview && <ExamReading />}
      {type == 'READING' && isReview && <ReviewReading />}
      {type == 'LISTENING' && !isReview && <ExamListening />}
      {type == 'LISTENING' && isReview && <ReviewListening />}
      {type == 'SPEAKING' && <ExamSpeaking />}
      {type == 'WRITING' && <ExamWriting />}
    </div>
  );
};
