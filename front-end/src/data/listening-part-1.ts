export const LISTENING_PART_1 = [
  {
    id: 41,
    examId: 1,
    parentId: null,
    content: `<h2>PART 1: Questions 1-8</h2>
    <p><strong>Directions:</strong> In this part, you will hear EIGHT short announcements or instructions. There is one question for each announcement or instruction. For each question, choose the right answer A, B, C or D. Then, on the answer sheet, find the number of the question and fill in the space that corresponds to the letter of the answer that you have chosen.</p>

    <p><em>Now, let’s listen to an example. On the recording, you will hear:</em></p>

    <p><strong>Woman:</strong> Hello. This is the travel agency returning your call. You left a message about the holiday you’ve booked, asking which meals are included in the cost during your stay at Sunny Hotel. Lunch and dinner are free but if you wish to have breakfast in the hotel, you will need to pay an extra amount of money, depending on what you order. Let me know if I can help you with any other information. Goodbye.</p>

    <p><em>On the test book, you will read:</em></p>

    <p><strong>Which meal is NOT included in the price of the holiday?</strong></p>
    <ul>
        <li>A. Breakfast</li>
        <li>B. Lunch</li>
        <li>C. Dinner</li>
        <li>D. All meals</li>
    </ul>

    <p><em>The correct answer is A. <strong>Breakfast</strong></em>. Now, let’s begin with the first question.</p>`,
    document: {
      type: 'AUDIO',
      url: 'https://firebasestorage.googleapis.com/v0/b/english-test-ddf9d.appspot.com/o/T1-PART1.mp3?alt=media&token=24d07e15-6748-4a83-962f-7867aada5c32',
      metadata: {}
    },
    type: 'LISTENING',
    order: 1,
    answers: [],
    createdBy: { id: 1, name: 'Admin' },
    updatedBy: { id: 1, name: 'Admin' },
    updatedAt: '2024-01-01T00:00:00Z',
    createdAt: '2024-01-01T00:00:00Z'
  },

  ...Array.from({ length: 8 }, (_, i) => ({
    id: i+42,
    examId: 1,
    parentId: 41,
    content: `Question content for Reading Part 1 - Question ${i+42}`,
    document: null,
    type: 'LISTENING',
    order: i+1,
    answers: [
      {
        id: i * 4 + 1,
        questionId: i+42,
        isCorrect: i % 2 === 0,
        content: 'Answer A',
        order: 1,
        updatedBy: { id: 1, name: 'Admin' },
        updatedAt: '2024-01-01T00:00:00Z',
        createdAt: '2024-01-01T00:00:00Z',
      },
      {
        id: i * 4 + 2,
        questionId: i+42,
        isCorrect: i % 2 !== 0,
        content: 'Answer B',
        order: 2,
        updatedBy: { id: 1, name: 'Admin' },
        updatedAt: '2024-01-01T00:00:00Z',
        createdAt: '2024-01-01T00:00:00Z',
      },
      {
        id: i * 4 + 3,
        questionId:  i+42,
        isCorrect: false,
        content: 'Answer C',
        order: 3,
        updatedBy: { id: 1, name: 'Admin' },
        updatedAt: '2024-01-01T00:00:00Z',
        createdAt: '2024-01-01T00:00:00Z',
      },
      {
        id: i * 4 + 4,
        questionId:  i+42,
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