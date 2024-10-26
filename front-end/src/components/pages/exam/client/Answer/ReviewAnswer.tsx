import React from 'react';

import { IconCheck } from 'assets/img/icons/CheckIcon';
import { IconCLose } from 'assets/img/icons/CloseIcon';
import { IAnswer } from 'types/exam';

type ReviewAnswerProps = {
  answer: IAnswer;
  questionId: number;
  selectedAnswerId?: number;
};

const ReviewAnswer: React.FC<ReviewAnswerProps> = ({ answer, questionId, selectedAnswerId }) => {
  const isSelected = selectedAnswerId === answer.id;
  return (
    <div className="form-check flex items-center mb-2">
      <input
        disabled={true}
        data-type="question-answer"
        className="form-check-input mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        data-qid={questionId}
        type="radio"
        // name={`question-${questionId}`}
        id={`question-${questionId}-${answer.id}`}
        value={answer.content}
        checked={isSelected || answer.isCorrect}
      />
      <label
        style={{
          color: isSelected ? (answer.isCorrect ? 'green' : 'red') : answer.isCorrect ? 'green' : 'gray'
        }}
        className="form-check-label text-gray-700"
        htmlFor={`question-${questionId}-${answer.id}`}
      >
        {answer.content}
      </label>
      {(isSelected || answer.isCorrect) && <>{answer.isCorrect ? <IconCheck /> : <IconCLose />}</>}
    </div>
  );
};

export default ReviewAnswer;
