'use client';
import React from 'react';

import { useExamProvider } from '@components/providers/ExamProvider';

import { ExamListening } from './Listening/ExamListening';
import { ReviewListening } from './Listening/ReviewListening';
import { ExamReading } from './Reading/ExamReading';
import { ReviewReading } from './Reading/ReviewReading';
import { ExamSpeaking } from './Speaking/ExamSpeaking';
import { ReviewSpeaking } from './Speaking/ReviewSpeaking';
import { ExamWriting } from './Writing/ExamWriting';
import { ReviewWriting } from './Writing/ReviewWriting';

export const ExamInteraction = () => {
  const { type, isReview } = useExamProvider();
  return (
    <div className="h-full shadow bg-white rounded-md">
      {type == 'READING' && !isReview && <ExamReading />}
      {type == 'READING' && isReview && <ReviewReading />}
      {type == 'LISTENING' && !isReview && <ExamListening />}
      {type == 'LISTENING' && isReview && <ReviewListening />}
      {type == 'SPEAKING' && !isReview && <ExamSpeaking />}
      {type == 'SPEAKING' && isReview && <ReviewSpeaking />}
      {type == 'WRITING' && !isReview && <ExamWriting />}
      {type == 'WRITING' && isReview && <ReviewWriting />}
    </div>
  );
};
