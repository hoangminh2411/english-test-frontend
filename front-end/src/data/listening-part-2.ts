export const LISTENING_PART_2 = [
  {
    id: 51,
    examId: 1,
    parentId: null,
    content: `<h2>PART 2: Questions 9-20</h2>
    <p><strong>Directions:</strong> In this part, you will hear THREE conversations. The conversations will not be repeated. There are four questions for each conversation. For each question, choose the correct answer A, B, C or D.</p>

    <p><strong>Questions 9 to 12</strong> refer to the following conversation.</p>`,
    document: {
      type: 'AUDIO',
      url: 'https://firebasestorage.googleapis.com/v0/b/english-test-ddf9d.appspot.com/o/T1-PART2.mp3?alt=media&token=8e4c01ea-0434-438e-b366-f7046e28b980',
      metadata: {}
    },
    type: 'LISTENING',
    order: 2,
    answers: [],
    createdBy: { id: 1, name: 'Admin' },
    updatedBy: { id: 1, name: 'Admin' },
    updatedAt: '2024-01-01T00:00:00Z',
    createdAt: '2024-01-01T00:00:00Z'
  },

  ...Array.from({ length: 12 }, (_, i) => ({
    id: i + 52,
    examId: 1,
    parentId: 51,
    content: `Question content for Reading Part 1 - Question ${i + 52}`,
    document: null,
    type: 'LISTENING',
    order: i + 9,
    answers: [
      {
        id: i * 4 + 1,
        questionId: i + 52,
        isCorrect: i % 2 === 0,
        content: 'Answer A',
        order: 1,
        updatedBy: { id: 1, name: 'Admin' },
        updatedAt: '2024-01-01T00:00:00Z',
        createdAt: '2024-01-01T00:00:00Z',
      },
      {
        id: i * 4 + 2,
        questionId: i + 52,
        isCorrect: i % 2 !== 0,
        content: 'Answer B',
        order: 2,
        updatedBy: { id: 1, name: 'Admin' },
        updatedAt: '2024-01-01T00:00:00Z',
        createdAt: '2024-01-01T00:00:00Z',
      },
      {
        id: i * 4 + 3,
        questionId:  i + 52,
        isCorrect: false,
        content: 'Answer C',
        order: 3,
        updatedBy: { id: 1, name: 'Admin' },
        updatedAt: '2024-01-01T00:00:00Z',
        createdAt: '2024-01-01T00:00:00Z',
      },
      {
        id: i * 4 + 4,
        questionId:  i + 52,
        isCorrect: false,
        content: 'Answer D',
        order: 4,
        updatedBy: { id: 1, name: 'Admin' },
        updatedAt: '2024-01-01T00:00:00Z',
        createdAt: '2024-01-01T00:00:00Z',
      },
    ],
    createdBy: { id: 1, name: 'Admin' },
    updatedBy: { id: 1, name: 'Admin' },
    updatedAt: '2024-01-01T00:00:00Z',
    createdAt: '2024-01-01T00:00:00Z',
  })),
]