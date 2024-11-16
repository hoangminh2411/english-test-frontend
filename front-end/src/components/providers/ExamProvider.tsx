'use client';
import { createContext, ReactNode, useContext, useReducer, useMemo, useCallback, useState } from 'react';

import { useRouter } from 'next/navigation';

import { ResultService } from '@utils/api/results';
import { IExam, QuestionType } from 'types/exam';
import { useAuth } from './AuthProvider';
import LoadingWrapper from '@components/elements/LoadingWrapper';

// Define action types
type ActionType =
  | { type: 'MOVE_TO_NEXT_EXAM' }
  | { type: 'SELECT_ANSWER'; payload: { questionId: number; answer: any } }
  | { type: 'NAVIGATE_TO_QUESTION'; payload?: SelectedQuestion }
  | { type: 'RESET_SELECTED_QUESTION' }
  | { type: 'SELECT_REVIEW_SKILL'; payload?: QuestionType };
type SelectedQuestion = {
  partId: number;
  questionId: number;
  examType: QuestionType;
};

type ExamContextType = {
  data: IExam;
  type: QuestionType;
  isReview?: boolean;
  answerStore: Record<number, any>;
  scoreData?: Record<number, { selectedAnswer: string; score: number; feedback: string }>;
  onDispatchAction: (action: ActionType) => void;
  selectedQuestion?: SelectedQuestion;
};

const examContext = createContext<ExamContextType | undefined>(undefined);

interface ExamProviderProps {
  children: ReactNode;
  answerData?: Record<number, any>;
  scoreData?: Record<number, { selectedAnswer: string; score: number; feedback: string }>;
  data: IExam;
  attemptId?:number
}

const examReducer = (state: any, action: ActionType) => {
  switch (action.type) {
    case 'MOVE_TO_NEXT_EXAM':
      return {
        ...state,
        examType: getNextExamType(state.examType)
      };
    case 'SELECT_ANSWER':
      return {
        ...state,
        answerStore: {
          ...state.answerStore,
          [action.payload.questionId]: action.payload.answer
        }
      };
    case 'NAVIGATE_TO_QUESTION':
      return {
        ...state,
        selectedQuestion: action.payload
      };
    case 'RESET_SELECTED_QUESTION':
      return {
        ...state,
        selectedQuestion: undefined
      };
    case 'SELECT_REVIEW_SKILL':
      return {
        ...state,
        examType: action.payload
      };
    default:
      return state;
  }
};

const getNextExamType = (currentType: QuestionType): QuestionType => {
  switch (currentType) {
    case 'READING':
      return 'WRITING';
    case 'LISTENING':
      return 'READING';
    case 'WRITING':
      return 'SPEAKING';
    case 'SPEAKING':
      return 'SPEAKING';
    default:
      return 'READING';
  }
};

export default function ExamProvider({ children, data, answerData, scoreData, attemptId }: ExamProviderProps) {
  const router = useRouter();
  const {user} = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [state, dispatch] = useReducer(examReducer, {
    examType: 'LISTENING',
    answerStore: answerData ?? {},
    scoreData: scoreData ?? {},
    selectedQuestion: undefined
  });

  const onSubmitExam = useCallback(async () => {
    alert('Bạn đã hoàn tất bài thi');
    setIsLoading(true)
    const formExam: any = {
      userId: user?.id,
      examId: data.id,
      answers: []
    };

    Object.keys(state.answerStore).forEach((questionId) => {
      formExam.answers.push({
        questionId: Number(questionId),
        selectedAnswer: state.answerStore[questionId]
      });
    });

    const results = await ResultService.submitExam({
      attemptId: attemptId,
      submissionData: formExam
    });
    if (results.statusCode) {
      router.push(`/exam-attempt/${attemptId}`);
    }
    // router.push(`/score/${data.id}`);
  }, [router, state, data,attemptId,user]);

  const onDispatchAction = useCallback(
    (action: ActionType) => {
      if (action.type === 'MOVE_TO_NEXT_EXAM' && state.examType === 'SPEAKING') {
        void onSubmitExam();
      } else {
        dispatch(action);
      }
    },
    [onSubmitExam, state.examType]
  );

  const contextValue = useMemo(
    () => ({
      data,
      isReview: !!scoreData,
      type: state.examType,
      answerStore: state.answerStore,
      selectedQuestion: state.selectedQuestion,
      scoreData: state.scoreData,
      onDispatchAction
    }),
    [data, answerData, state.examType, state.answerStore, state.selectedQuestion, onDispatchAction]
  );

  return <examContext.Provider value={contextValue}>
        <LoadingWrapper isLoading={isLoading}> {children}</LoadingWrapper>     
    </examContext.Provider>;
}

export const useExamProvider = () => {
  const context = useContext(examContext);
  if (!context) throw new Error('useExamProvider must be used within ExamProvider');
  return context;
};
