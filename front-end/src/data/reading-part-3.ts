export const READING_PART_3 = [
  {
    id: 29,
    examId: 1,
    parentId: null,
    content: `<div><p><strong>Employment, Underemployment&nbsp;</strong><strong>and Unemployment</strong></p>
        <p>The last few decades have been turbulent for the global employment market, particularly in post-industrial countries. Around one third of the OECD labour force is unemployed, and global unemployment figures reached a historical peak of 185.9 million workers in 2003. Beyond this, a phenomenon known as 'underemployment' is becoming the normative practice in many industries. Once considered a passing aberration, underemployment is now an entrenched and seemingly intractable feature of the economy that involves people scraping by in precarious and temporary forms of work—typically casual, seasonal, or fixed-term work and often on part-time contracts.</p>

        <p>Many scholars have offered their own theorisations of the employment crisis and put forward some possible solutions. Certainly, almost all of these understandings differ over the finer analytical details, but more significantly there is almost no consensus around what anchors the disruptive changes to employment patterns. A majority of theorists stick to traditional models of unemployment, and argue that policy-makers in the West should now focus on finding salvation in the 'knowledge economy', but others find this to be a mythical possibility. Broadly, it is too soon to say who is the closest to being correct, but history is sure to pick a winner.</p>

        <p>One common denominator amongst nearly every scholar is an unwillingness to reflect adequately upon work as an existing social practice, and as such solutions are put forward that are overly-derived from possibilities (that may not even be feasible) further down the track. Andre Gorz, for example, emphasises the need for governments to shift the locus of work away from the abstracted labour that characterises private employment and towards social labour that involves more public activities such as communal childcare, artistic exploration, community work, charities and so on. This, he suggests, strengthens and integrates human relationships while supporting people in finding outlets for their own creative and personal needs. Similarly, Ulrich Beck suggests that global employment markets are now riddled with risk and a precariousness that demands alleviation. The solution, he suggests, is activating paid civil labour within national voluntary sectors while activating this labour internationally as well. Both of these sound like good ideas, but are they plausible given the present constraints upon governments and people? Neither Gorz nor Beck says.</p>

        <p>Another problem with analyses of the crisis tends to be a narrow sectoral focus that fails to problematise existing notions of work and employment. Jeremy Rifkin, for example, argues that the employment crisis is a result of accelerated technological growth that in turn displaces the labour intensitivity of some work practices. This process is not itself unprecedented, he suggests—in the early 20th century, for example, more efficient technologies in agriculture displaced farm labour in the south of the United States. At that time, however, new opportunities in the industrialising north of the country were able to absorb these surpluses. Rifkin's thesis posits that this is no longer happening—technological growth is making labour redundant without new opportunities emerging.</p>

        <p>Gorz builds on this theorisation to advocate policies, not of generating 'new' employment, but rather of distributing employment so that everyone can access a job. In doing so, he suggests, we can use the labour-saving gains of technology to free up time for other more socially meaningful pursuits. The problem with Rifkin's and Gorz's approaches, however, is that they assume the divisions between employment and non-employment are still pertinent and ultimately determinative of working practices. As Hasmet M. Uluorta indicates, however, the employment crisis may not be so much a crisis of jobs (or the number of jobs), technologies or tensions between paid and unpaid work, but rather a crisis of social reproduction—that is, the ways in which we sustain or perpetuate our social structure.</p>

        <p>Whereas most scholars look to a renewed labour market for answers, or suggest that we need to bolster the voluntary sector as a supportive mechanism, Uluorta implores us to return to the drawing board and think about what really constitutes 'work'. It is not, he argues, solely the domain of employment geared towards production and consumption, but is characterised by production in a broader sense for the purposes of social reproduction as well. We should no longer be asking 'How is it possible to generate employment?' but rather 'How is it possible to (re) produce our social existence?' The answers to the crisis, Uluorta argues, are already being constituted as people renegotiate work even in the absence of labour market employment, but legal and institutional mechanisms have yet to respond to these changes.</p>

        <p>We are ultimately left with a situation in which almost everyone agrees that there is a global crisis of employment, but there is widespread divergence of opinions over its nature. For some, the solution requires simply encouraging new forms of employment in the knowledge economy. Others believe that we need to balance employment with increased emphasis on voluntary and civil sector projects. Yet others believe that the crisis has in part come about because of a valorisation of employment over other forms of work, namely the work of social reproduction.</p></div>`,
    document: {
      type: 'IMAGE',
      url: 'https://example.com/image1.jpg',
      metadata: {}
    },
    type: 'READING',
    order: 3,
    answers: [],
    createdBy: { id: 1, name: 'Admin' },
    updatedBy: { id: 1, name: 'Admin' },
    updatedAt: '2024-01-01T00:00:00Z',
    createdAt: '2024-01-01T00:00:00Z'
  },

  ...Array.from({ length: 12 }, (_, i) => ({
    id: i+29,
    examId: 1,
    parentId:29,
    content: `Question content for Reading Part 1 - Question ${i+29}`,
    document: null,
    type: 'READING',
    order: i+29,
    answers: [
      {
        id: i * 4 + 1,
        questionId: i+29,
        isCorrect: i % 2 === 0,
        content: 'Answer A',
        order: 1,
        updatedBy: { id: 1, name: 'Admin' },
        updatedAt: '2024-01-01T00:00:00Z',
        createdAt: '2024-01-01T00:00:00Z',
      },
      {
        id: i * 4 + 2,
        questionId: i+29,
        isCorrect: i % 2 !== 0,
        content: 'Answer B',
        order: 2,
        updatedBy: { id: 1, name: 'Admin' },
        updatedAt: '2024-01-01T00:00:00Z',
        createdAt: '2024-01-01T00:00:00Z',
      },
      {
        id: i * 4 + 3,
        questionId: i+29,
        isCorrect: false,
        content: 'Answer C',
        order: 3,
        updatedBy: { id: 1, name: 'Admin' },
        updatedAt: '2024-01-01T00:00:00Z',
        createdAt: '2024-01-01T00:00:00Z',
      },
      {
        id: i * 4 + 4,
        questionId: i+29,
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