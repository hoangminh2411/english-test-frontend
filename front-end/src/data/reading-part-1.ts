export const READING_PART_1 = [
  {
    id: 15,
    examId: 1,
    parentId: null,
    content: `<div><p><strong>Clutter Bugs Beware</strong></p>
      <p>Having an abundance of stuff is a symptom of 21st Century materialism—people are conditioned by society to think that more is better—but take heed: it can suck your energy and your time. An unruly assortment of stuff littering your room or your home can be both annoying and unsettling. Precious items and anything with real sentimental value should be stored carefully, of course, but clutter such as old receipts, outdated invitations, catalogues, your collection of trashy magazines and unwanted gifts should be disposed of. If you added up the time spent looking for misplaced objects or sifting through unnecessary papers to find what you need, what would that amount to? There is a lot to be said for the old adage: a place for everything and everything in its place.</p>

      <p>This ancient organising truism can help you get your life in order and be free from clutter forever. Firstly, develop a system with a restricted series of options. Put all incoming material into your 'inbox' at work, or whatever the equivalent is at home, then deal with the tasks one by one. Either do them immediately or prioritise them into A, B or C tasks ensuring that the 'A' tasks take precedence over all others.</p>

      <p>Another simple tip: find a home for everything. Before you toss something down on the countertop or sofa, ask yourself, 'Is that where it belongs?' If it does not have a home, designate a place for that object and use the same spot every time. Label boxes and containers, drawers and cupboards and, remember, procrastination is to be avoided at all costs. Stow belongings and equipment in their assigned places straight away. Get into the habit—concentrate your energy on it until it becomes automatic. Clear off all flat surfaces like the desk in your office, the bench top in the kitchen or the bed in the bedroom.</p>

      <p>Be aware of transition stages, when you are moving from one task to another, and exploit this phase productively to clean and clear up. It is a good idea to have an evaluation now and then to review your organising system and make adjustments. Perhaps there is more to de-clutter or perhaps you need to rearrange items, for example, if they are stored in one room but you use them in another. Clutter is also categorized as anything that is not finished so, if you have incomplete projects, make time to get them over and done with. Once you are clutter-free and well-organised, your life may change for the better.</p>

      <p>Feng shui principles discourage the accumulation of clutter as 'chi' or energy cannot move freely around masses of material, causing stagnation and a breeding ground for negative energy. For harmony and productivity, chi has to be free flowing and unrestricted. (Interestingly, the word 'clutter' comes from an Old English word which means 'to cause to become blocked or obscured'.) Apparently, hoarding creates excessive 'yin' energy which interferes with the natural flow and causes imbalance. Some of the consequences of this are purported to be poor concentration, stress, resentfulness and a lowered immune system. Clutter is stuck energy that affects people on all levels: physically, mentally, emotionally, and spiritually. Clutter traps people in the past. It also shapes their self-image and others'&nbsp;perception of them—perhaps as neglected, unworthy, disorganised or ignored, if it is true that your surroundings reflect your inner self, then cleaning up clutter must surely bring positive change into your life.<br>
      Call it feng shui or call it common sense: on a practical level, the accumulation of junk hinders cleaning and fosters dirt and bacteria. It creates chaos, obstructs new opportunities, takes up physical space and harms relationships in your life. So, why do people hoard?</p>

      <p>There have been many reasons posited as to why people collect and hang on to junk. Psychologists used to say it sprang from an impoverished childhood with a scarcity of food and material possessions but more recently it has been argued that it arises from an adolescence deprived of emotional support and comfort. Fear obviously has a great deal to do with it, too: fear of not having enough; fear of letting go of the memories associated with the objects; or fear of loss of control or security. Perhaps egotism has a part to play in that people buy and accumulate material objects as a demonstration of their personal power. Others may do it as a form of self compensation to conceal unresolved emotional problems.</p>

      <p>Whatever the reason for it, it is said that clutter in your home and in your life is disempowering, that it undermines your energy, erodes your spirit and holds you in the past. It also thwarts financial prosperity. Aim for a harmonious and balanced flow of 'chi' in your home and you may reap the rewards of a cleaner, more attractive, safer and nurturing place that is not only more comfortable but will allow you to pursue more effectively and successfully your true goals in life. Clean up and enjoy better health, wealth and happiness.</p></div>`,
    document: {
      type: 'IMAGE',
      url: 'https://example.com/image1.jpg',
      metadata: {}
    },
    type: 'READING',
    order: 2,
    answers: [],
    createdBy: { id: 1, name: 'Admin' },
    updatedBy: { id: 1, name: 'Admin' },
    updatedAt: '2024-01-01T00:00:00Z',
    createdAt: '2024-01-01T00:00:00Z'
  },

  ...Array.from({ length: 13 }, (_, i) => ({
    id: i + 16,
    examId: 1,
    parentId: 15,
    content: `Question content for Reading Part 1 - Question ${i + 16}`,
    document: null,
    type: 'READING',
    order: i + 16,
    answers: [
      {
        id: i * 4 + 1,
        questionId: i + 16,
        isCorrect: i % 2 === 0,
        content: 'Answer A',
        order: 1,
        updatedBy: { id: 1, name: 'Admin' },
        updatedAt: '2024-01-01T00:00:00Z',
        createdAt: '2024-01-01T00:00:00Z'
      },
      {
        id: i * 4 + 2,
        questionId: i + 16,
        isCorrect: i % 2 !== 0,
        content: 'Answer B',
        order: 2,
        updatedBy: { id: 1, name: 'Admin' },
        updatedAt: '2024-01-01T00:00:00Z',
        createdAt: '2024-01-01T00:00:00Z'
      },
      {
        id: i * 4 + 3,
        questionId: i + 16,
        isCorrect: false,
        content: 'Answer C',
        order: 3,
        updatedBy: { id: 1, name: 'Admin' },
        updatedAt: '2024-01-01T00:00:00Z',
        createdAt: '2024-01-01T00:00:00Z'
      },
      {
        id: i * 4 + 4,
        questionId: i + 16,
        isCorrect: false,
        content: 'Answer D',
        order: 4,
        updatedBy: { id: 1, name: 'Admin' },
        updatedAt: '2024-01-01T00:00:00Z',
        createdAt: '2024-01-01T00:00:00Z'
      }
    ],
    createdBy: { id: 1, name: 'Admin' },
    updatedBy: { id: 1, name: 'Admin' },
    updatedAt: '2024-01-01T00:00:00Z',
    createdAt: '2024-01-01T00:00:00Z'
  }))
];
