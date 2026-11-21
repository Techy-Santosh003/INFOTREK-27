export const proposedDays = [
  { number: 1, label: 'Day 1', date: '2027-02-12', displayDate: 'Friday, 12 February 2027', accent: 'cyan' },
  { number: 2, label: 'Day 2', date: '2027-02-13', displayDate: 'Saturday, 13 February 2027', accent: 'violet' },
  { number: 3, label: 'Day 3', date: '2027-02-14', displayDate: 'Sunday, 14 February 2027', accent: 'lime' },
]

const proposedTimeSlots = [
  '9:00 AM – 11:00 AM',
  '11:30 AM – 1:30 PM',
  '2:30 PM – 4:30 PM',
]

const proposedVenue = 'Barn Hall, NIT Tiruchirappalli'
const proposedPrizeStructure = [
  'Winner: Trophy, certificate and prize goodies.',
  'Runner-up: Certificate and prize goodies.',
  'Second runner-up: Certificate and prize goodies.',
  'Participation certificates for participants, subject to organizer approval.',
]
const proposedRegistration = 'Proposed registration: Online registration through the official INFOTREK registration channel. Registration link, fee and opening date will be announced after organizer confirmation.'

const eventRecords = [
  {
    number: '01',
    id: 'algorithmia',
    title: 'Algorithmia',
    visual: 'prism',
    day: 1,
    description: 'Put your problem-solving skills to the test through algorithmic challenges that reward logical thinking, efficiency and creativity.',
    details: {
      aboutEvent: 'A proposed competitive programming event built around coding challenges. Participants would translate problem statements into logical approaches, design algorithms, check correctness, and consider time and memory efficiency.',
      objective: 'Encourage clear algorithmic thinking and effective implementation of correct, efficient solutions.',
      proposedFormat: [
        'Individual coding competition using problems prepared for the event.',
        'Solutions would be assessed against the requirements and constraints provided with each challenge.',
      ],
      proposedRounds: [
        'Preliminary problem-solving round.',
        'Advanced coding round for participants progressing from the preliminary round.',
      ],
      suggestedEligibility: 'PROPOSED — Subject to organizer confirmation: Open to students with an interest in programming, algorithms and computational problem-solving.',
      suggestedTeamSize: 'Individual participation (suggested).',
      proposedRules: [
        'Participants would submit original solutions that follow each problem’s stated input, output, and resource constraints.',
        'Collaboration and outside assistance would not be allowed during individual rounds.',
        'Only tools and programming languages permitted by the organizers would be used; permitted options are to be announced.',
        'Organizers would clarify challenge statements and resolve submission issues during the event.',
      ],
      suggestedEvaluationCriteria: ['Correctness', 'Time complexity', 'Implementation efficiency', 'Completion time'],
      suggestedSkills: ['Logical reasoning', 'Algorithm design', 'Programming', 'Complexity analysis', 'Debugging'],
      venue: proposedVenue,
      prizes: proposedPrizeStructure,
      registration: proposedRegistration,
    },
  },
  {
    number: '02',
    id: 'rooks-last-stand',
    title: "Rook's Last Stand",
    visual: 'signal',
    day: 1,
    description: 'Test your strategic thinking, plan your moves carefully and outsmart your opponent in a battle of tactics.',
    details: {
      aboutEvent: 'A proposed chess strategy challenge focused on rook endgames and tactical decision-making. Participants would analyze endgame positions, identify useful plans, and solve tactical puzzles involving rooks.',
      objective: 'Develop and assess accurate calculation, practical endgame planning, and sound tactical choices.',
      proposedFormat: [
        'Individual event centered on supplied rook endgame positions and tactical puzzles.',
        'Participants would record a solution or explain the strategic idea for each position.',
      ],
      proposedRounds: [
        'Rook-endgame puzzle qualifier.',
        'Practical strategy challenge for participants progressing from the qualifier.',
      ],
      suggestedEligibility: 'PROPOSED — Subject to organizer confirmation: Open to students interested in chess, strategic thinking and tactical problem-solving.',
      suggestedTeamSize: 'Individual participation (suggested).',
      proposedRules: [
        'Use the board positions and instructions supplied for each challenge.',
        'Chess engines, outside assistance, and collaboration would not be allowed during individual rounds.',
        'Solutions should follow the position constraints and response instructions provided by organizers.',
        'Any extra rules for practical play would be shared before that round begins.',
      ],
      suggestedEvaluationCriteria: ['Accuracy of solutions', 'Quality of strategic decisions', 'Clarity and quality of reasoning'],
      suggestedSkills: ['Chess fundamentals', 'Rook endgame knowledge', 'Tactical calculation', 'Strategic planning', 'Position visualization'],
      venue: proposedVenue,
      prizes: proposedPrizeStructure,
      registration: proposedRegistration,
    },
  },
  {
    number: '03',
    id: 'knights-logic',
    title: "Knight's Logic",
    visual: 'orbit',
    day: 1,
    description: 'Challenge your reasoning and pattern-recognition skills through mind-bending logical problems and strategic puzzles.',
    details: {
      aboutEvent: 'A proposed puzzle event inspired by knight movements and chessboard patterns. Challenges would invite participants to reason about movement, recognize patterns, visualize spaces, and solve connected logic problems.',
      objective: 'Assess structured reasoning and the ability to recognize and solve spatial and logical patterns.',
      proposedFormat: [
        'Individual event featuring logic problems and chessboard-inspired puzzles.',
        'A timed qualifier would lead into more advanced puzzle challenges.',
      ],
      proposedRounds: [
        'Timed logic qualifier.',
        'Advanced puzzle challenges for participants progressing from the qualifier.',
      ],
      suggestedEligibility: 'PROPOSED — Subject to organizer confirmation: Open to students interested in logical reasoning, puzzles and pattern recognition.',
      suggestedTeamSize: 'Individual participation (suggested).',
      proposedRules: [
        'Solve each puzzle using the instructions and conditions supplied with it.',
        'Outside assistance and collaboration would not be allowed during individual rounds.',
        'Answers would be submitted in the format announced by organizers.',
        'Clarifications and any scoring details would be shared before the relevant round.',
      ],
      suggestedEvaluationCriteria: ['Answer accuracy', 'Quality of reasoning', 'Completion time'],
      suggestedSkills: ['Logical reasoning', 'Pattern recognition', 'Spatial thinking', 'Problem-solving', 'Careful attention to constraints'],
      venue: proposedVenue,
      prizes: proposedPrizeStructure,
      registration: proposedRegistration,
    },
  },
  {
    number: '04',
    id: 'the-meme-gambit',
    title: 'The Meme Gambit',
    visual: 'prism',
    day: 2,
    description: 'Combine humour, creativity and technical culture to create memes that make the tech community laugh.',
    details: {
      aboutEvent: 'A proposed technology-themed meme creation competition. Participants would respond to an event prompt with original work that brings together humour, creativity, and recognizable technology culture.',
      objective: 'Celebrate inventive, original humor and creative communication around technology.',
      proposedFormat: [
        'Individual or two-person team participation (suggested).',
        'Participants would create a meme in response to a theme or prompt shared by organizers.',
        'Entries would be reviewed by judges after submission.',
      ],
      proposedRounds: [
        'Theme or prompt announcement and meme creation.',
        'Submission review and judging.',
      ],
      suggestedEligibility: 'PROPOSED — Subject to organizer confirmation: Open to students interested in creativity, humour, memes and technology.',
      suggestedTeamSize: 'Individual or a team of two (suggested).',
      proposedRules: [
        'Entries should respond to the prompt and be the original work of the participant or team.',
        'Submissions should be respectful and avoid discriminatory, harassing, or otherwise harmful content.',
        'Any rules for source material, attribution, format, and submission limits would be announced by organizers.',
        'Judging should use the announced criteria consistently across entries.',
      ],
      suggestedEvaluationCriteria: ['Creativity', 'Originality', 'Humor', 'Relevance to the technology theme'],
      suggestedSkills: ['Creative thinking', 'Visual communication', 'Humor', 'Awareness of technology culture'],
      venue: proposedVenue,
      prizes: proposedPrizeStructure,
      registration: proposedRegistration,
    },
  },
  {
    number: '05',
    id: 'bishops-reflex',
    title: "Bishop's Reflex",
    visual: 'signal',
    day: 2,
    description: 'Test your speed, accuracy and ability to make smart decisions under pressure.',
    details: {
      aboutEvent: 'A proposed rapid chess tactics and visual decision-making challenge. Participants would quickly recognize tactical patterns in supplied positions and choose accurate responses under time pressure.',
      objective: 'Measure quick tactical recognition while maintaining accuracy and sound decisions.',
      proposedFormat: [
        'Individual challenge using a series of chess tactical positions.',
        'Responses would be recorded within time limits announced by organizers.',
      ],
      proposedRounds: [
        'Rapid tactical recognition qualifier.',
        'Advanced tactical challenge for participants progressing from the qualifier.',
      ],
      suggestedEligibility: 'PROPOSED — Subject to organizer confirmation: Open to students interested in chess tactics, visual recognition and quick decision-making.',
      suggestedTeamSize: 'Individual participation (suggested).',
      proposedRules: [
        'Evaluate the supplied position and respond using the required notation or answer format.',
        'Chess engines, outside assistance, and collaboration would not be allowed during individual rounds.',
        'Participants would follow the response window and instructions announced for each round.',
        'Any position-specific conditions would be provided with the challenge.',
      ],
      suggestedEvaluationCriteria: ['Accuracy', 'Response time', 'Tactical understanding'],
      suggestedSkills: ['Chess tactics', 'Visual pattern recognition', 'Fast calculation', 'Concentration', 'Decision-making under pressure'],
      venue: proposedVenue,
      prizes: proposedPrizeStructure,
      registration: proposedRegistration,
    },
  },
  {
    number: '06',
    id: 'treasure-hunt',
    title: 'Treasure Hunt',
    visual: 'orbit',
    day: 2,
    description: 'Follow clues, solve puzzles and work your way through a series of challenges to uncover the hidden treasure.',
    details: {
      aboutEvent: 'A proposed team-based clue-solving challenge across permitted campus areas. Teams would solve riddles and logical puzzles at checkpoints before attempting a final treasure challenge.',
      objective: 'Encourage teamwork, careful clue interpretation, and safe problem-solving across a multi-stage hunt.',
      proposedFormat: [
        'Team event for three or four participants (suggested).',
        'Teams would follow a sequence of clues and checkpoint challenges before the final discovery stage.',
      ],
      proposedRounds: [
        'Initial clue to begin the hunt.',
        'Checkpoint challenges with riddles or logical puzzles.',
        'Final treasure discovery challenge.',
      ],
      suggestedEligibility: "PROPOSED — Subject to organizer confirmation: Open to students participating in registered teams. All team members must follow the event's campus safety instructions.",
      suggestedTeamSize: 'Teams of three or four (suggested).',
      proposedRules: [
        'Remain within areas explicitly permitted by organizers; do not enter restricted spaces or interrupt classes or campus activities.',
        'Do not run, damage or move campus property, or disturb people, facilities, or the environment.',
        'Follow campus safety instructions and any directions from event staff.',
        'Teams should solve clues fairly and not interfere with another team’s progress or materials.',
        'The organizers would announce how hints, checkpoints, and ties are handled before the hunt.',
      ],
      suggestedEvaluationCriteria: ['Correctly solved clues', 'Checkpoint completion', 'Total completion time'],
      suggestedSkills: ['Teamwork', 'Riddle solving', 'Logical reasoning', 'Observation', 'Navigation and time management'],
      venue: 'Barn Hall, NIT Tiruchirappalli is the proposed starting and finishing point. Any campus exploration route will require organizer approval.',
      prizes: proposedPrizeStructure,
      registration: proposedRegistration,
    },
  },
  {
    number: '07',
    id: 'terminal-zero',
    title: 'Terminal Zero',
    visual: 'prism',
    day: 3,
    description: 'Explore the command line, apply your technical knowledge and solve challenges using logical thinking.',
    details: {
      aboutEvent: 'A proposed Linux and command-line technical challenge. Participants would use terminal commands, file operations, and debugging to work through practical command-line problems.',
      objective: 'Build confidence with command-line problem-solving and assess accurate, efficient use of a terminal.',
      proposedFormat: [
        'Individual or two-person team participation (suggested).',
        'Challenges would be completed in an environment and using tools designated by organizers.',
      ],
      proposedRounds: [
        'Basic terminal qualifier.',
        'Advanced command-line challenges for participants progressing from the qualifier.',
      ],
      suggestedEligibility: 'PROPOSED — Subject to organizer confirmation: Open to students interested in Linux, command-line tools, debugging and technical problem-solving.',
      suggestedTeamSize: 'Individual or a team of two (suggested).',
      proposedRules: [
        'Use commands only within the environment and scope provided for the challenge.',
        'Do not access, alter, or disrupt systems, accounts, files, or networks outside the designated challenge environment.',
        'Avoid destructive or unauthorized commands; ask event staff if an instruction is unclear.',
        'Submit results as directed and do not share challenge answers with other participants during a round.',
      ],
      suggestedEvaluationCriteria: ['Correctness', 'Command efficiency', 'Completion time'],
      suggestedSkills: ['Linux fundamentals', 'Terminal commands', 'File operations', 'Debugging', 'Command-line problem-solving'],
      venue: proposedVenue,
      prizes: proposedPrizeStructure,
      registration: proposedRegistration,
    },
  },
  {
    number: '08',
    id: 'the-world-gambit',
    title: 'The World Gambit',
    visual: 'signal',
    day: 3,
    description: 'Put your strategic planning and decision-making skills to the test in a challenge inspired by global strategy.',
    details: {
      aboutEvent: 'A proposed global strategy simulation in which teams analyze a scenario, manage limited resources, consider negotiations, and adapt decisions as conditions change.',
      objective: 'Explore how teams plan, weigh trade-offs, communicate, and adapt in a changing strategic scenario.',
      proposedFormat: [
        'Team simulation for three or four participants (suggested).',
        'Teams would receive a scenario and make decisions using the information and resources supplied for the activity.',
      ],
      proposedRounds: [
        'Scenario briefing and review of the available information.',
        'Strategy and negotiation round.',
        'Final decision presentation.',
      ],
      suggestedEligibility: 'PROPOSED — Subject to organizer confirmation: Open to students interested in strategy, teamwork, resource management and decision-making.',
      suggestedTeamSize: 'Teams of three or four (suggested).',
      proposedRules: [
        'Base decisions on the scenario, constraints, and resources provided to participants.',
        'Keep negotiations respectful and ensure all decisions are made within the activity’s stated rules.',
        'Teams should present their own reasoning and not disrupt other teams.',
        'Scenario-specific information, decision windows, and presentation instructions would be announced by organizers.',
      ],
      suggestedEvaluationCriteria: ['Strategic reasoning', 'Teamwork', 'Quality of decisions', 'Adaptability'],
      suggestedSkills: ['Strategic planning', 'Resource management', 'Negotiation', 'Scenario analysis', 'Team communication', 'Adaptability'],
      venue: proposedVenue,
      prizes: proposedPrizeStructure,
      registration: proposedRegistration,
    },
  },
  {
    number: '09',
    id: 'destinite',
    title: 'Destinite',
    visual: 'orbit',
    day: 3,
    description: 'Step into an unpredictable challenge where creativity, adaptability and quick thinking shape your journey.',
    details: {
      aboutEvent: 'A proposed mystery-based, multi-stage problem-solving challenge. Teams would discover clues, respond to changing situations, and combine creative ideas with logical reasoning to solve a final mystery.',
      objective: 'Encourage adaptable, collaborative thinking when participants face unfamiliar clues and unexpected developments.',
      proposedFormat: [
        'Team event for two or three participants (suggested).',
        'Teams would progress through connected clues and challenges toward a final mystery-solving stage.',
      ],
      proposedRounds: [
        'Clue discovery.',
        'Intermediate problem-solving challenges.',
        'Final mystery-solving stage.',
      ],
      suggestedEligibility: 'PROPOSED — Subject to organizer confirmation: Open to students interested in puzzles, mysteries, creative thinking and adaptability.',
      suggestedTeamSize: 'Teams of two or three (suggested).',
      proposedRules: [
        'Use the clues and materials supplied for the challenge and follow the order or conditions given by organizers.',
        'Teams should work fairly and not interfere with other participants or their materials.',
        'Do not enter restricted areas, disturb campus property, or disregard safety instructions.',
        'Any hint policy, answer format, or tie-breaking process would be announced before the event.',
      ],
      suggestedEvaluationCriteria: ['Accuracy', 'Creativity', 'Reasoning', 'Completion time'],
      suggestedSkills: ['Creative thinking', 'Logical reasoning', 'Adaptability', 'Observation', 'Team problem-solving'],
      venue: proposedVenue,
      prizes: proposedPrizeStructure,
      registration: proposedRegistration,
    },
  },
]

const positionsByDay = new Map()
const events = eventRecords.map((event) => {
  const slotPosition = positionsByDay.get(event.day) ?? 0
  positionsByDay.set(event.day, slotPosition + 1)
  const day = proposedDays.find((proposedDay) => proposedDay.number === event.day)

  return {
    ...event,
    details: {
      ...event.details,
      dateAndTime: {
        day: day.label,
        date: day.displayDate,
        time: proposedTimeSlots[slotPosition],
      },
    },
  }
})

export default events
