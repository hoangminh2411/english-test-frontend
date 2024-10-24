export const EXAM_1 = {
  id: 1,
  name: 'IELTS Exam - Dummy Data',
  note: 'This is a dummy exam for practice.',
  totalTime: 3600,
  questions: [
    // Reading Section
    {
      id: 1,
      examId: 1,
      parentId: null,
      content: '<h2>Reading Passage 1</h2><p>This is a sample reading passage content for part 1.</p>',
      document: {
        type: 'IMAGE',
        url: 'https://example.com/image1.jpg',
        metadata: {}
      },
      type: 'READING',
      order: 1,
      answers: [],
      createdBy: { id: 1, name: 'Admin' },
      updatedBy: { id: 1, name: 'Admin' },
      updatedAt: '2024-01-01T00:00:00Z',
      createdAt: '2024-01-01T00:00:00Z'
    },
    {
      id: 2,
      examId: 1,
      parentId: 1,
      content: 'What is the main idea of the passage?',
      document: null,
      type: 'READING',
      order: 1,
      answers: [
        {
          id: 3,
          questionId: 2,
          isCorrect: true,
          content: 'Main idea A',
          order: 1,
          updatedBy: { id: 1, name: 'Admin' },
          updatedAt: '2024-01-01T00:00:00Z',
          createdAt: '2024-01-01T00:00:00Z'
        },
        {
          id: 4,
          questionId: 2,
          isCorrect: false,
          content: 'Main idea B',
          order: 2,
          updatedBy: { id: 1, name: 'Admin' },
          updatedAt: '2024-01-01T00:00:00Z',
          createdAt: '2024-01-01T00:00:00Z'
        }
      ],
      createdBy: { id: 1, name: 'Admin' },
      updatedBy: { id: 1, name: 'Admin' },
      updatedAt: '2024-01-01T00:00:00Z',
      createdAt: '2024-01-01T00:00:00Z'
    },
    {
      id: 12,
      examId: 1,
      parentId: 1,
      content: 'What is the main idea of the passage?',
      document: null,
      type: 'READING',
      order: 2,
      answers: [
        {
          id: 6,
          questionId: 12,
          isCorrect: true,
          content: 'Main idea A',
          order: 1,
          updatedBy: { id: 1, name: 'Admin' },
          updatedAt: '2024-01-01T00:00:00Z',
          createdAt: '2024-01-01T00:00:00Z'
        },
        {
          id: 7,
          questionId: 12,
          isCorrect: false,
          content: 'Main idea B',
          order: 2,
          updatedBy: { id: 1, name: 'Admin' },
          updatedAt: '2024-01-01T00:00:00Z',
          createdAt: '2024-01-01T00:00:00Z'
        }
      ],
      createdBy: { id: 1, name: 'Admin' },
      updatedBy: { id: 1, name: 'Admin' },
      updatedAt: '2024-01-01T00:00:00Z',
      createdAt: '2024-01-01T00:00:00Z'
    },
    // Add more parts/questions for Reading
    {
      id: 3,
      examId: 1,
      parentId: null,
      content: '<h2>Reading Passage 2</h2><p>This is a sample reading passage content for part 2.</p>',
      document: {
        type: 'IMAGE',
        url: 'https://example.com/image2.jpg',
        metadata: {}
      },
      type: 'READING',
      order: 2,
      answers: [
        {
          id: 5,
          questionId: 3,
          isCorrect: true,
          content: 'Answer C',
          order: 1,
          updatedBy: { id: 1, name: 'Admin' },
          updatedAt: '2024-01-01T00:00:00Z',
          createdAt: '2024-01-01T00:00:00Z'
        },
        {
          id: 6,
          questionId: 3,
          isCorrect: false,
          content: 'Answer D',
          order: 2,
          updatedBy: { id: 1, name: 'Admin' },
          updatedAt: '2024-01-01T00:00:00Z',
          createdAt: '2024-01-01T00:00:00Z'
        }
      ],
      createdBy: { id: 1, name: 'Admin' },
      updatedBy: { id: 1, name: 'Admin' },
      updatedAt: '2024-01-01T00:00:00Z',
      createdAt: '2024-01-01T00:00:00Z'
    },
    {
      id: 4,
      examId: 1,
      parentId: 3,
      content: 'What is the purpose of the passage?',
      document: null,
      type: 'READING',
      order: 1,
      answers: [
        {
          id: 7,
          questionId: 4,
          isCorrect: true,
          content: 'Purpose A',
          order: 1,
          updatedBy: { id: 1, name: 'Admin' },
          updatedAt: '2024-01-01T00:00:00Z',
          createdAt: '2024-01-01T00:00:00Z'
        },
        {
          id: 8,
          questionId: 4,
          isCorrect: false,
          content: 'Purpose B',
          order: 2,
          updatedBy: { id: 1, name: 'Admin' },
          updatedAt: '2024-01-01T00:00:00Z',
          createdAt: '2024-01-01T00:00:00Z'
        }
      ],
      createdBy: { id: 1, name: 'Admin' },
      updatedBy: { id: 1, name: 'Admin' },
      updatedAt: '2024-01-01T00:00:00Z',
      createdAt: '2024-01-01T00:00:00Z'
    },
    // Continue to add Listening, Speaking, Writing with parts and questions similarly
    // Listening Section
    {
      id: 5,
      examId: 1,
      parentId: null,
      content: '<h2>Listening Part 1</h2><p>This is a sample listening content for part 1.</p>',
      document: {
        type: 'AUDIO',
        url: 'https://example.com/audio1.mp3',
        metadata: {}
      },
      type: 'LISTENING',
      order: 1,
      answers: [
        {
          id: 9,
          questionId: 5,
          isCorrect: true,
          content: 'Answer E',
          order: 1,
          updatedBy: { id: 1, name: 'Admin' },
          updatedAt: '2024-01-01T00:00:00Z',
          createdAt: '2024-01-01T00:00:00Z'
        },
        {
          id: 10,
          questionId: 5,
          isCorrect: false,
          content: 'Answer F',
          order: 2,
          updatedBy: { id: 1, name: 'Admin' },
          updatedAt: '2024-01-01T00:00:00Z',
          createdAt: '2024-01-01T00:00:00Z'
        }
      ],
      createdBy: { id: 1, name: 'Admin' },
      updatedBy: { id: 1, name: 'Admin' },
      updatedAt: '2024-01-01T00:00:00Z',
      createdAt: '2024-01-01T00:00:00Z'
    },
    // Continue adding more Listening questions
    {
      id: 6,
      examId: 1,
      parentId: null,
      content: '<h2>Speaking Part 1</h2><p>This is a sample speaking content for part 1.</p>',
      document: {
        type: 'IMAGE',
        url: 'https://example.com/image3.jpg',
        metadata: {}
      },
      type: 'SPEAKING',
      order: 1,
      answers: [
        {
          id: 11,
          questionId: 6,
          isCorrect: true,
          content: 'Answer G',
          order: 1,
          updatedBy: { id: 1, name: 'Admin' },
          updatedAt: '2024-01-01T00:00:00Z',
          createdAt: '2024-01-01T00:00:00Z'
        }
      ],
      createdBy: { id: 1, name: 'Admin' },
      updatedBy: { id: 1, name: 'Admin' },
      updatedAt: '2024-01-01T00:00:00Z',
      createdAt: '2024-01-01T00:00:00Z'
    }
  ],
  totalExamies: 1,
  totalQuestions: 12,
  totalSkills: 4,
  createdBy: { id: 1, name: 'Admin' },
  updatedBy: { id: 1, name: 'Admin' },
  updatedAt: '2024-01-01T00:00:00Z',
  createdAt: '2024-01-01T00:00:00Z'
};
