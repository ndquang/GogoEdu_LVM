let unit = "Unit 9";
let title = "Festivals Around the World";
let groups = [
	  "1. Choose the correct answer A, B, or C to fill in each blank in the following passage.",	  
	  "2. Fill in each blank with a suitable word.",
	  "3. Read the passage about two carnivals and do the exercises."
]
let exercises = [
  {
    group: 0,
    question: "The Edinburg Festival is the biggest arts festival in the world. (1)______ August, thousands of people come to the city to join the festival.",
    options: ["A. On", "B. At", "C. Every"],
    answer: "C. Every",
    explanation: "'Every' is used to indicate that the festival happens each year in August."
  },
  {    
    question: "It (2)______ for three weeks and has a lot of activities.",
    options: ["A. goes", "B. lasts", "C. ends"],
    answer: "B. lasts",
    explanation: "The verb 'lasts' is used to describe the duration of an event."
  },
  {   
    question: "People enjoy music and dance performances in the streets (3)______ early morning until late at night.",
    options: ["A. in", "B. from", "C. between"],
    answer: "B. from",
    explanation: "The preposition 'from' is used to indicate the starting point of a time period ('from... until...')."
  },
  {   
    question: "One of (4)______ most interesting parts of the festival is “Fringe”.",
    options: ["A. the", "B. a", "C. much"],
    answer: "A. the",
    explanation: "The definite article 'the' is used before a superlative adjective ('most interesting')."
  },
  {   
    question: "At this festival, tourists also have a chance to (5)______ new films, plays and listen to famous musicians playing great music.",
    options: ["A. learn", "B. join", "C. see"],
    answer: "C. see",
    explanation: "The verb 'see' is the most appropriate choice for watching films and plays."
  },
  {
    group: 0,
    question: "Although it is the world’s largest arts festival, its tickets (6)______ quite cheap.",
    options: ["A. are", "B. be", "C. will"],
    answer: "A. are",
    explanation: "The subject 'tickets' is plural, so the plural verb 'are' is needed for this present tense statement."
  },
  {
    group: 1,
    question: "Hanukkah is the Jewish Festival of Lights. It lasts (1)______ eight days.",
    options: ["A. for", "B. in", "C. at", "D. on"],
    answer: "A. for",
    explanation: "The preposition 'for' is used to indicate a duration of time."
  },
  {    
    question: "People usually celebrate it (2)______ November or December.",
    options: ["A. on", "B. at", "C. for", "D. in"],
    answer: "D. in",
    explanation: "The preposition 'in' is used for months and years."
  },
  {   
    question: "People light candles at this festival. They light one (3)______ every evening.",
    options: ["A. light", "B. candle", "C. more", "D. bright"],
    answer: "B. candle",
    explanation: "The noun 'candle' is the object being lit each evening."
  },
  {   
    question: "To celebrate the festival, people make special pancakes. They make the (4)______ with potatoes, onions, eggs, flour and oil.",
    options: ["A. doughnuts", "B. dinner", "C. food", "D. pancakes"],
    answer: "D. pancakes",
    explanation: "The sentence refers back to the 'special pancakes' mentioned previously."
  },
  {   
    question: "Jam doughnuts (5)______ also very popular.",
    options: ["A. is", "B. are", "C. was", "D. be"],
    answer: "B. are",
    explanation: "The subject 'doughnuts' is plural, so the plural verb 'are' is required."
  },
  {   
    question: "People (6)______ their family and friends presents and money at Hanukkah.",
    options: ["A. take", "B. get", "C. give", "D. make"],
    answer: "C. give",
    explanation: "The verb 'give' is the correct choice for the action of presenting gifts."
  },
  {    
    question: "Adults give (7)______ chocolate coins.",
    options: ["A. adults", "B. friends", "C. them", "D. children"],
    answer: "D. children",
    explanation: "In the context of festivals and presents, it is most common for adults to give gifts like chocolate coins to children."
  },
  {
    group: 1,
    question: "People also give cards (8)______ others.",
    options: ["A. with", "B. from", "C. to", "D. for"],
    answer: "C. to",
    explanation: "The preposition 'to' is used to indicate the recipient of an action (giving something to someone)."
  },
  {
    group: 2,
    question: "Which carnival lasts for about 14 days?",
    options: [
      "A. New Orleans",
      "B. Rio de Janeiro",
      "C. Both",
      "D. Neither"
    ],
    answer: "A. New Orleans",
    explanation: "The text says the carnival in New Orleans lasts for 'about two weeks,' which is 14 days."
  },
  {    
    question: "Which carnival has people wearing costumes?",
    options: [
      "A. New Orleans",
      "B. Rio de Janeiro",
      "C. Both",
      "D. Neither"
    ],
    answer: "C. Both",
    explanation: "The text mentions 'special costumes' for both New Orleans and Rio de Janeiro."
  },
  {    
    question: "Which carnival has samba competitions?",
    options: [
      "A. New Orleans",
      "B. Rio de Janeiro",
      "C. Both",
      "D. Neither"
    ],
    answer: "B. Rio de Janeiro",
    explanation: "The text states that at the Rio Carnival, tourists enjoy 'competitions between samba ‘schools’ or groups.'"
  },
  {    
    question: "Which carnival is the biggest in the world?",
    options: [
      "A. New Orleans",
      "B. Rio de Janeiro",
      "C. Both",
      "D. Neither"
    ],
    answer: "B. Rio de Janeiro",
    explanation: "The passage explicitly says, 'The carnival in Rio is the biggest in the world.'"
  },
   {    
    question: "How often do people have carnivals?",
    options: [
      "A. Every month",
      "B. Every two years",
      "C. Every year",
      "D. Twice a year"
    ],
    answer: "C. Every year",
    explanation: "The text describes Carnival as an 'annual festival,' which means it happens every year."
  },
  {    
    question: "Do people celebrate carnivals in the same way?",
    options: [
      "A. Yes, all carnivals are the same.",
      "B. No, people celebrate it in different ways.",
      "C. Yes, but only in North and South America.",
      "D. The text does not say."
    ],
    answer: "B. No, people celebrate it in different ways.",
    explanation: "The passage states, 'People celebrate it in different ways.'"
  },
  {    
    question: "What do people on floats throw to the crowd at the New Orleans Carnival?",
    options: [
      "A. Flowers",
      "B. Small gifts",
      "C. Water balloons",
      "D. Candy"
    ],
    answer: "B. Small gifts",
    explanation: "The text about New Orleans says, 'They throw small gifts to the crowd.'"
  },
  {    
    question: "How long does the Rio Carnival last?",
    options: [
      "A. About five days",
      "B. About two weeks",
      "C. The whole month",
      "D. One day"
    ],
    answer: "A. About five days",
    explanation: "The passage states, 'It lasts for about five days.'"
  },
  {
    group: 2,
    question: "How much do samba schools spend preparing?",
    options: [
      "A. A few thousand dollars",
      "B. Millions of dollars",
      "C. Hundreds of dollars",
      "D. The text does not give a number."
    ],
    answer: "B. Millions of dollars",
    explanation: "The text about Rio de Janeiro says, 'These schools can spend millions of dollars preparing every year.'"
  }
];