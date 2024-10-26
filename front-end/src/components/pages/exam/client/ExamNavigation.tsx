'use client';
import React from 'react';

import Button from '@components/common/Button';
import Timer from '@components/common/Timmer';
import { useExamProvider } from '@components/providers/ExamProvider';

export const ExamNavigation = () => {
  const { data, onDispatchAction, type, answerStore, isReview } = useExamProvider();

  return (
    <div className="shadow p-4 rounded-md bg-white">
      <div className="flex flex-col gap-4">
        {/* TImmer */}

        {!isReview && (
          <>
            <div>
              <p>Remaining Time</p>
              <Timer key={type} start={true} totalTime={data.totalTime} />
            </div>
            <Button
              variant="outline"
              onClick={() =>
                onDispatchAction({
                  type: 'MOVE_TO_NEXT_EXAM'
                })
              }
            >
              Submit Your Test
            </Button>
          </>
        )}

        {/* Skills Navigation */}
        {data.questions.map((question) => {
          if (question.type !== type) return null;
          if (question.parentId === null) {
            return (
              <div key={question.id} className="flex flex-col">
                <h3 className="font-bold text-md">Part {question.order}</h3>
                <div className="flex gap-2 items-center flex-wrap">
                  {data.questions
                    .filter((q) => q.parentId === question.id)
                    .map((childQuestion) => {
                      const answeredQuestion = !!answerStore[childQuestion.id];
                      return (
                        <Button
                          onClick={() =>
                            onDispatchAction({
                              type: 'NAVIGATE_TO_QUESTION',
                              payload: {
                                examType: type,
                                partId: question.id,
                                questionId: childQuestion.id
                              }
                            })
                          }
                          key={childQuestion.id}
                          size="small"
                          variant={answeredQuestion ? 'solid' : 'outline'}
                          color={answeredQuestion ? 'blue' : 'light'}
                        >
                          {childQuestion.order}
                        </Button>
                      );
                    })}
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};
