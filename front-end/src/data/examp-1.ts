import { LISTENING_PART_1 } from './listening-part-1';
import { LISTENING_PART_2 } from './listening-part-2';
import { LISTENING_PART_3 } from './listening-part-3';
import { READING_PART_1 } from './reading-part-1';
import { READING_PART_2 } from './reading-part-2';
import { READING_PART_3 } from './reading-part-3';
import { SPEAKING_PART_1 } from './speaking-part-1';
import { SPEAKING_PART_2 } from './speaking-part-2';
import { SPEAKING_PART_3 } from './speaking-part-3';
import { WRITING_PART_1 } from './writing-part-1';
import { WRITING_PART_2 } from './writing-part-2';

export const EXAM_1 = {
  id: 1,
  name: 'IELTS Exam - Dummy Data',
  note: 'This is a dummy exam for practice.',
  totalTime: 3600,
  questions: [
    //Reading Section
    ...READING_PART_2,
    ...READING_PART_1,
    ...READING_PART_3,

    // Continue to add Listening, Speaking, Writing with parts and questions similarly
    // Listening Section
    ...LISTENING_PART_1,
    ...LISTENING_PART_2,
    ...LISTENING_PART_3,

    //WRITE SECTION
    ...WRITING_PART_1,
    ...WRITING_PART_2,

    //SPEAKING SECTION
    ...SPEAKING_PART_1,
    ...SPEAKING_PART_2,
    ...SPEAKING_PART_3
  ],
  totalExamies: 1,
  totalQuestions: 12,
  totalSkills: 4,
  createdBy: { id: 1, name: 'Admin' },
  updatedBy: { id: 1, name: 'Admin' },
  updatedAt: '2024-01-01T00:00:00Z',
  createdAt: '2024-01-01T00:00:00Z'
};
