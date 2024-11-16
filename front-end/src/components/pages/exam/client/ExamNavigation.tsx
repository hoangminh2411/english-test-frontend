'use client';
import React from 'react';

import Button from '@components/common/Button';
import Timer from '@components/common/Timmer';
import { useExamProvider } from '@components/providers/ExamProvider';
import { QuestionType } from 'types/exam';

export const ExamNavigation = () => {
  const { data, onDispatchAction, type, answerStore, isReview } = useExamProvider();

  // Function to handle navigation to specific questions
  const navigateToQuestion = (examType: QuestionType, partId: number, questionId: number) => {
    onDispatchAction({
      type: 'NAVIGATE_TO_QUESTION',
      payload: {
        examType,
        partId,
        questionId
      }
    });
  };

  // Function to handle test submission
  const submitTest = () => {
    onDispatchAction({
      type: 'MOVE_TO_NEXT_EXAM'
    });
  };
  let currentOrder = 1; // Initialize the starting question order
  return (
    <div className="shadow p-4 rounded-md bg-white">
      <div className="flex flex-col gap-4">
        {/* Timer */}
        {!isReview && (
          <div className="flex flex-col gap-2">
            <div>
              <p>Remaining Time</p>
              <Timer start={true} totalTime={data.totalTime} />
            </div>
            <Button variant="outline" onClick={submitTest}>
              Submit Your Test
            </Button>
          </div>
        )}

        {/* Skills Navigation */}
        {data.questions
          .filter((question) => question.type === type && question.parentId === null)
          .map((partQuestion, index: number) => {
            const partStartOrder = currentOrder; // Track the starting order for this part
            const childQuestions = data.questions.filter((q) => q.parentId === partQuestion.id);
            currentOrder += childQuestions.length; // Update the current order for the next part

            return (
              <div key={partQuestion.id} className="flex flex-col">
                <h3 className="font-bold text-md">Part {index + 1}</h3>
                <div className="flex gap-2 items-center flex-wrap">
                  {childQuestions.map((childQuestion, index) => {
                    const isAnswered = !!answerStore[childQuestion.id];
                    const questionOrder = partStartOrder + index; // Calculate sequential order for each question
                    return (
                      <Button
                        onClick={() => navigateToQuestion(type, partQuestion.id, childQuestion.id)}
                        key={childQuestion.id}
                        size="small"
                        variant={isAnswered ? 'solid' : 'outline'}
                        color={isAnswered ? 'blue' : 'light'}
                      >
                        {questionOrder}
                      </Button>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
