'use client';
import React, { useEffect, useRef } from 'react';

import RawHTML from '@components/common/RawHtml';
import { useExamProvider } from '@components/providers/ExamProvider';
import { IQuestion } from 'types/exam';

import ExamAnswer from '../Answer/ExamAnswer';

type ExamQuestionProps = {
  question: IQuestion;
  questionNumber: number;
};

const ExamQuestion: React.FC<ExamQuestionProps> = ({ question, questionNumber }) => {
  const { answerStore, onDispatchAction, selectedQuestion } = useExamProvider();
  const questionRef = useRef<HTMLDivElement>(null);

  const handleAnswerSelect = (answerContent: string) => {
    onDispatchAction({
      type: 'SELECT_ANSWER',
      payload: {
        questionId: question.id,
        answer: answerContent
      }
    });
  };
  const selectedAnswerContent = answerStore[question.id];
  const selectedQuestionId = selectedQuestion?.questionId;

  useEffect(() => {
    if (selectedQuestionId === question.id && questionRef.current) {
      questionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      onDispatchAction({ type: 'RESET_SELECTED_QUESTION' });
    }
  }, [selectedQuestionId, question.id]);

  return (
    <div ref={questionRef} className="flex flex-row gap-2 p-2" data-qid={question.id} id={`question-wrapper-${question.id}`}>
      <div
        className="mb-2  font-semibold flex items-center justify-center w-4 h-4 p-4 bg-blue-50 rounded-full text-blue-800"
        data-qid={question.id}
        data-markable="true"
      >
        <strong>{questionNumber || 0}</strong>
      </div>

      <div className="text-gray-800 mb-4">
        <div className="text-gray-800 mb-4">
          <RawHTML>{question.content || ''}</RawHTML>
        </div>

        <div className="flex flex-col gap-2">
          {question.answers?.map((answer) => (
            <ExamAnswer
              key={answer.id}
              answer={answer}
              questionId={question.id}
              selectedAnswerContent={selectedAnswerContent}
              onSelect={handleAnswerSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExamQuestion;
