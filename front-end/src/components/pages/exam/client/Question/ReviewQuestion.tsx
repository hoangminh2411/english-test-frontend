'use client';
import React, { useEffect, useRef } from 'react';

import RawHTML from '@components/common/RawHtml';
import { useExamProvider } from '@components/providers/ExamProvider';
import { IQuestion } from 'types/exam';

import ReviewAnswer from '../Answer/ReviewAnswer';

type ReviewQuestionProps = {
  question: IQuestion;
  questionNumber:number
};

const ReviewQuestion: React.FC<ReviewQuestionProps> = ({ question, questionNumber=0 }) => {
  const { answerStore, onDispatchAction, selectedQuestion } = useExamProvider();
  const questionRef = useRef<HTMLDivElement>(null);

  const selectedAnswerContent = answerStore[question.id];
  const selectedQuestionId = selectedQuestion?.questionId;

  useEffect(() => {
    if (selectedQuestionId === question.id && questionRef.current) {
      questionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      onDispatchAction({ type: 'RESET_SELECTED_QUESTION' });
    }
  }, [selectedQuestionId, question.id]);


  //debug
  console.log("QUESTION DATA", question.content,selectedAnswerContent )
  return (
    <div ref={questionRef} className="flex flex-row gap-2 p-2" data-qid={question.id} id={`question-wrapper-${question.id}`}>
      <div
        className="mb-2  font-semibold flex items-center justify-center w-4 h-4 p-4 bg-blue-50 rounded-full text-blue-800"
        data-qid={question.id}
        data-markable="true"
      >
        <strong>{questionNumber}</strong>
      </div>

      <div className="text-gray-800 mb-4">
        <div className="text-gray-800 mb-4">
          <RawHTML>{question.content || ''}</RawHTML>
        </div>

        <div className="flex flex-col gap-2">
          {question.answers?.map((answer, index: number) => (
            <ReviewAnswer key={index} answer={answer} questionId={question.id} selectedAnswerContent={selectedAnswerContent} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewQuestion;
