import { IdName } from './common';

export type QuestionType = 'SPEAKING' | 'LISTENING' | 'READING' | 'WRITING';

type DocumentType = 'IMAGE' | 'AUDIO'; // Định nghĩa loại tài liệu

type Document = {
  type: DocumentType; // Loại tài liệu: IMAGE hoặc AUDIO
  url: string; // Đường dẫn đến tài liệu
  metadata?: { [key: string]: any }; // Metadata tùy chọn (ví dụ: độ dài audio, kích thước ảnh, v.v.)
};

export type IAnswer = {
  id: number;
  questionId: number;
  isCorrect?: boolean;
  content: string;
  order: number;
  updatedBy: IdName;
  updatedAt: string;
  createdAt: string;
};

export type IQuestion = {
  id: number;
  examId: number;
  parentId?: number; //questionId
  content?: string; //html
  document: Document; //data type file
  type: QuestionType;
  order: number;

  answers?: IAnswer[]; //for multilchoice question

  createdBy: IdName;
  updatedBy: IdName;
  updatedAt: string;
  createdAt: string;
};

export type IExam = {
  id: number;
  name: string;
  note: string;
  totalTime: number; // seconds

  questions: IQuestion[];

  totalExamies: number;
  totalQuestions: number;
  totalSkills: number;

  createdBy: IdName;
  updatedBy: IdName;
  updatedAt: string;
  createdAt: string;
};

// Score type for each skill
export interface IScore {
  skill: QuestionType;
  score: number;
  comments?: string; // Optional comments or feedback
}

// User Answer with additional details for review purposes
export interface IUserAnswer {
  questionId: number;
  selectedAnswer: string; // The answer submitted by the user
  isCorrect?: boolean; // Indicates correctness for review purposes
  correctAnswer?: string; // For displaying the correct answer (if available)
  feedback?: string; // Optional feedback for the user's answer
}

// Exam result, now including completed questions and user's answers
export interface IExamResult {
  id: number;
  examId: number;
  userId: number;
  scores: IScore[]; // Array of scores for each skill
  reviewedBy?: IdName; // Reviewer (e.g., ChatGPT for Speaking/Writing)
  review?: string; // General review comments for speaking/writing sections
  completedQuestions: {
    question: IQuestion; // Original question details
    userAnswer: IUserAnswer; // User's submitted answer
  }[]; // Array of questions with user answers for review
  createdAt: string;
  updatedAt: string;
}
