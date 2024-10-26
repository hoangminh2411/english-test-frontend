'use client';
import { createContext, ReactNode, useContext, useReducer, useMemo, useCallback } from 'react';

import { useRouter } from 'next/navigation';

import { IExam, QuestionType } from 'types/exam';

// Define action types
type ActionType =
  | { type: 'MOVE_TO_NEXT_EXAM' }
  | { type: 'SELECT_ANSWER'; payload: { questionId: number; answer: any } }
  | { type: 'NAVIGATE_TO_QUESTION'; payload?: SelectedQuestion }
  | { type: 'RESET_SELECTED_QUESTION' };
type SelectedQuestion = {
  partId: number;
  questionId: number;
  examType: QuestionType;
};

type ExamContextType = {
  data: IExam;
  type: QuestionType;
  answerStore: Record<number, any>;
  onDispatchAction: (action: ActionType) => void;
  selectedQuestion?: SelectedQuestion;
};

const examContext = createContext<ExamContextType | undefined>(undefined);

interface ExamProviderProps {
  children: ReactNode;
  data: IExam;
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
    default:
      return state;
  }
};

const getNextExamType = (currentType: QuestionType): QuestionType => {
  switch (currentType) {
    case 'READING':
      return 'LISTENING';
    case 'LISTENING':
      return 'WRITING';
    case 'WRITING':
      return 'SPEAKING';
    case 'SPEAKING':
      return 'SPEAKING';
    default:
      return 'READING';
  }
};

export default function ExamProvider({ children, data }: ExamProviderProps) {
  const router = useRouter();
  const [state, dispatch] = useReducer(examReducer, {
    examType: 'READING',
    answerStore: {},
    selectedQuestion: undefined
  });

  const onSubmitExam = useCallback(() => {
    alert('Bạn đã hoàn tất bài thi');
    router.push('/');
  }, [router]);

  const onDispatchAction = useCallback(
    (action: ActionType) => {
      if (action.type === 'MOVE_TO_NEXT_EXAM' && state.examType === 'SPEAKING') {
        onSubmitExam();
      } else {
        dispatch(action);
      }
    },
    [onSubmitExam, state.examType]
  );

  const contextValue = useMemo(
    () => ({
      data,
      type: state.examType,
      answerStore: state.answerStore,
      selectedQuestion: state.selectedQuestion,
      onDispatchAction
    }),
    [data, state.examType, state.answerStore, state.selectedQuestion, onDispatchAction]
  );

  return <examContext.Provider value={contextValue}>{children}</examContext.Provider>;
}

export const useExamProvider = () => {
  const context = useContext(examContext);
  if (!context) throw new Error('useExamProvider must be used within ExamProvider');
  return context;
};
