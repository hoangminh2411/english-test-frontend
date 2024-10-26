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
