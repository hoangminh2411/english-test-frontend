import React from 'react';

import { IAnswer } from 'types/exam';

type AnswerProps = {
  answer: IAnswer;
  questionId: number;
  onSelect: (answerId: number) => void;
  selectedAnswerId?: number;
};

const ExamAnswer: React.FC<AnswerProps> = ({ answer, questionId, onSelect, selectedAnswerId }) => {
  return (
    <div className="form-check flex items-center mb-2">
      <input
        data-type="question-answer"
        className="form-check-input mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        data-qid={questionId}
        type="radio"
        name={`question-${questionId}`}
        id={`question-${questionId}-${answer.id}`}
        value={answer.content}
        checked={selectedAnswerId === answer.id}
        onChange={() => onSelect(answer.id)}
      />
      <label className="form-check-label text-gray-700" htmlFor={`question-${questionId}-${answer.id}`}>
        {answer.content}
      </label>
    </div>
  );
};

export default ExamAnswer;
