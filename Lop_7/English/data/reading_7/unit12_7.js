let unit = "Unit 12";
let title = "English-Speaking Countries";
let groups = [
	  "1. Read the passage and choose the best option (A, B, or C) to complete each sentence.",	  
	  "2. Read the passage and choose the best option (A, B, or C) to complete each word.",
	  "3. Read the passage and complete the summary in the box with the information from the passage."
]
let exercises = [
   {
    group: 0,
    question: "Where does the festival take place?",
    options: [
      "A. In Phoenix, Arizona, the USA.",
      "B. In Albuquerque, New Mexico, the USA.",
      "C. In San Diego, California, the USA.",
      "D. In Mexico City, Mexico."
    ],
    answer: "B. In Albuquerque, New Mexico, the USA.",
    explanation: "The passage states, 'It takes place in Albuquerque, a city in New Mexico, the USA.'"
  },
  {    
    question: "How long does it last?",
    options: [
      "A. It lasts for a weekend.",
      "B. It lasts for nine days.",
      "C. It lasts for one month.",
      "D. It lasts for five days."
    ],
    answer: "B. It lasts for nine days.",
    explanation: "The passage mentions, 'The festival is a nine-day event...'"
  },
  {   
    question: "What do the artists do before the festival?",
    options: [
      "A. They build the balloon baskets from scratch.",
      "B. They spend weeks or even months painting their balloons.",
      "C. They design new shapes for the balloons.",
      "D. They practice flying the balloons."
    ],
    answer: "B. They spend weeks or even months painting their balloons.",
    explanation: "The text says, 'Many artists spend weeks or even months painting their balloons.'"
  },
  {   
    question: "Who goes to the festival?",
    options: [
      "A. Only balloon makers and pilots.",
      "B. Balloon makers, photographers, reporters, and visitors.",
      "C. Just tourists and local residents.",
      "D. Musicians, food vendors, and painters."
    ],
    answer: "B. Balloon makers, photographers, reporters, and visitors.",
    explanation: "The passage lists attendees including '...balloon makers... thousands of photographers, video makers, reporters, and visitors.'"
  },
  {   
    question: "What does the festival help New Mexico show its visitors?",
    options: [
      "A. Its technological advancements.",
      "B. Its culture and history.",
      "C. Its modern art and sculptures.",
      "D. Its natural landscapes and parks."
    ],
    answer: "B. Its culture and history.",
    explanation: "The passage says, 'It is an opportunity for the local people to show their New Mexican culture and history.'"
  },
  {
    group: 0,
    question: "What does the festival bring to the city?",
    options: [
      "A. A lot of traffic and pollution.",
      "B. International recognition for its sports teams.",
      "C. A major source of income.",
      "D. Free entertainment for all residents."
    ],
    answer: "C. A major source of income.",
    explanation: "The passage explains, 'It brings a major source of income to the city and local businesses.'"
  },
    {
    group: 1,
    question: "California is ______ to one of the biggest and most famous entertainment parks in the world – Disneyland.",
    options: [
      "A. show",
      "B. welcome",
      "C. home",
      "D. fast"
    ],
    answer: "C. home",
    explanation: "The idiom 'is home to' means 'is the location of', which fits the context of California hosting Disneyland."
  },
  {   
    question: "Disneyland opened in 1955 with the slogan “The happiest place on ______”, and it soon became very popular.",
    options: [
      "A. home",
      "B. Earth",
      "C. show",
      "D. the"
    ],
    answer: "B. Earth",
    explanation: "“The happiest place on Earth” is Disneyland's famous and long-standing slogan."
  },
  {   
    question: "The number of visitors to the park has gone up very ______.",
    options: [
      "A. fast",
      "B. welcome",
      "C. show",
      "D. home"
    ],
    answer: "A. fast",
    explanation: "The adverb 'fast' correctly modifies the verb phrase 'has gone up', indicating a rapid increase in visitors."
  },
  {   
    question: "In 2018, it attracted nearly 19 million visitors, both ______ and adults.",
    options: [
      "A. they",
      "B. children",
      "C. Earth",
      "D. show"
    ],
    answer: "B. children",
    explanation: "The word 'children' provides a logical contrast to 'adults' to describe the types of visitors."
  },
  {   
    question: "Mickey’s Soundsational Parade is ______ most popular event.",
    options: [
      "A. fast",
      "B. show",
      "C. welcome",
      "D. the"
    ],
    answer: "D. the",
    explanation: "The superlative form 'most popular' requires the definite article 'the' before it."
  },
  {   
    question: "During the parade, well-known Disney characters march along Main Street. ______ dance along with the music...",
    options: [
      "A. Children",
      "B. The",
      "C. They",
      "D. Show"
    ],
    answer: "C. They",
    explanation: "The pronoun 'They' is used to refer back to the 'well-known Disney characters' from the previous sentence."
  },
  {    
    question: "Everybody is ______ to join in the fun.",
    options: [
      "A. welcome",
      "B. fast",
      "C. home",
      "D. show"
    ],
    answer: "A. welcome",
    explanation: "The phrase 'is welcome to' is an idiom that means 'is invited or permitted to'."
  },
  {
    group: 1,
    question: "Another great attraction of the park is its fantastic fireworks ______.",
    options: [
      "A. fast",
      "B. home",
      "C. show",
      "D. welcome"
    ],
    answer: "C. show",
    explanation: "'Fireworks show' is a standard compound noun for an event featuring a fireworks display."
  },
   {
    group: 2,
    question: "According to the passage, English users have a lot of ______.",
    options: [
      "A. problems",
      "B. benefits",
      "C. questions",
      "D. difficulties"
    ],
    answer: "B. benefits",
    explanation: "The first sentence of the passage states that 'The ability to use English brings a lot of benefits to its users.'"
  },
  {    
    question: "Besides communicating when travelling, which is another benefit of knowing English mentioned in the text?",
    options: [
      "A. Getting a higher salary",
      "B. Making friends from English-speaking countries",
      "C. Buying foreign goods cheaper",
      "D. Understanding computer programming"
    ],
    answer: "B. Making friends from English-speaking countries",
    explanation: "The text mentions that English allows you to '...make friends from many English-speaking countries.'"
  },
  {    
    question: "What is another activity the passage says you can do if you know English?",
    options: [
      "A. Write scientific papers",
      "B. Read English books and sing English songs",
      "C. Teach other languages",
      "D. Fix cars with English manuals"
    ],
    answer: "B. Read English books and sing English songs",
    explanation: "The passage says English '...allows you to sing English songs, read English books...'"
  },
  {    
    question: "In the passage, the word 'second' in 'second language' is presented as similar in meaning to ______.",
    options: [
      "A. primary",
      "B. foreign",
      "C. official",
      "D. difficult"
    ],
    answer: "C. official",
    explanation: "The text says, '...English is a second, or official, language', indicating the words are used with a similar meaning in this context."
  },
  {
    question: "Which of the following countries is listed in the passage as a place where English is a second language?",
    options: [
      "A. Thailand",
      "B. The Philippines",
      "C. Vietnam",
      "D. South Korea"
    ],
    answer: "B. The Philippines",
    explanation: "The passage explicitly lists 'the Philippines' as a country where English is a second or official language."
  },
  {
    group: 2,
    question: "Which of these is another country mentioned where English is used at schools and at work?",
    options: [
      "A. Pakistan",
      "B. Indonesia",
      "C. Malaysia",
      "D. Cambodia"
    ],
    answer: "A. Pakistan",
    explanation: "The passage includes 'Pakistan' in its list of countries where English is a second language."
  }
];