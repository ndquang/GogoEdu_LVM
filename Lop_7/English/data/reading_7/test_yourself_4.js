let unit = "Test 4";
let title = "Test yourself 4";
let groups = [
	  "1. Read and circle the best option (A, B, C, or D) to complete the letter. (2.0 pts)",	  
	  "2. Read the passage and decide if the statements are true (T) or false (F). (1.0 pt)",	 
	  "3. Read the tourist information and match the headings (a - f) with the paragraphs (1 - 6)."
]
let exercises = [
  {
    group: 0,
    question: "We're having ______ great holiday here!",
    options: ["A. a", "B. an", "C. the"],
    answer: "A. a",
    explanation: "Use 'a' before a singular, countable noun ('holiday') that begins with a consonant sound ('great'). It's an indefinite article because the holiday is being introduced for the first time."
  },
  {    
    question: "...we're staying in ______ small hotel in town.",
    options: ["A. a", "B. an", "C. the"],
    answer: "A. a",
    explanation: "Use 'a' for a singular, countable noun ('hotel') mentioned for the first time that begins with a consonant sound ('small')."
  },
  {    
    question: "...staying in a small hotel in ______ town.",
    options: ["A. a", "B. an", "C. the"],
    answer: "C. the",
    explanation: "Use 'the' because it refers to the specific town they are currently in, which is clear from the context of the letter."
  },
  {    
    question: "We went to see ______ castle in the morning...",
    options: ["A. a", "B. an", "C. the"],
    answer: "C. the",
    explanation: "Use 'the' to refer to a specific, unique landmark in a particular place, like 'the castle' of that town."
  },
  {    
    question: "...we visited the beer factory in ______ afternoon.",
    options: ["A. a", "B. an", "C. the"],
    answer: "C. the",
    explanation: "'In the afternoon' is a fixed expression used to talk about a specific part of the day."
  },
  {    
    question: "At ______ moment, we're sitting in an old café...",
    options: ["A. a", "B. an", "C. the"],
    answer: "C. the",
    explanation: "'At the moment' is a fixed idiom that means 'right now'."
  },
  {    
    question: "...we're sitting in ______ old café in the main square.",
    options: ["A. a", "B. an", "C. the"],
    answer: "B. an",
    explanation: "Use 'an' before a singular, countable noun ('café') that begins with a vowel sound ('old'). It's mentioned for the first time."
  },
  {    
    question: "There's ______ old clock in the middle of the square.",
    options: ["A. a", "B. an", "C. the"],
    answer: "B. an",
    explanation: "Use 'an' before a singular, countable noun ('clock') that starts with a vowel sound ('old'). It is being introduced for the first time."
  },
  {    
    question: "...in the middle of ______ square.",
    options: ["A. a", "B. an", "C. the"],
    answer: "C. the",
    explanation: "Use 'the' because it refers to the specific square ('the main square') that was mentioned just before."
  },
  {
    group: 0,
    question: "I think we'll spend ______ hour walking along the river...",
    options: ["A. a", "B. an", "C. the"],
    answer: "B. an",
    explanation: "Use 'an' because the word 'hour' starts with a silent 'h', so its first sound is a vowel sound."
  },
   {
    group: 1,
    question: "We call coal, oil and natural gas non-renewable energy sources.",
    options: ["A. True", "B. False"],
    answer: "A. True",
    explanation: "The passage states this directly: 'We call them non-renewable energy sources...'"
  },
  {   
    question: "It takes thousands of years for fossil fuels to form.",
    options: ["A. True", "B. False"],
    answer: "B. False",
    explanation: "The passage says it takes 'millions of years', not thousands, for fossil fuels to form."
  },
  {   
    question: "We can use energy from the sun, wind and water to replace fossil fuels.",
    options: ["A. True", "B. False"],
    answer: "A. True",
    explanation: "The passage lists sun, wind, and water as 'alternative sources of energy' that scientists are trying to use, implying they are replacements for fossil fuels."
  },
  {    
    question: "Conserving energy is a good way to save fossil fuels.",
    options: ["A. True", "B. False"],
    answer: "A. True",
    explanation: "The text states, 'We can also save fossil fuels by conserving energy.'"
  },
  {
    group: 1,
    question: "To turn off electrical appliances when not using them is one of the two ways to conserve energy.",
    options: ["A. True", "B. False"],
    answer: "B. False",
    explanation: "The passage mentions at least three ways to conserve energy: turning off appliances, turning off lights, and walking or biking instead of driving. Therefore, it is not just one of two ways."
  },
    {   
	group: 2,
    question: "London has many beautiful old buildings and monuments. See Big Ben and the Houses of Parliament, which stand on the River Thames.",
    options: [
      "A. Theatres",
      "B. Shopping",
      "C. Sightseeing",
      "D. Museums & Galleries"
    ],
    answer: "C. Sightseeing",
    explanation: "This paragraph describes seeing famous landmarks like Big Ben and the Houses of Parliament, which is sightseeing."
  },
  {   
    question: "People from all over the world visit the British Museum. The National Gallery has one of the most beautiful collections of paintings.",
    options: [
      "A. Music",
      "B. Sightseeing",
      "C. Restaurants",
      "D. Museums & Galleries"
    ],
    answer: "D. Museums & Galleries",
    explanation: "This paragraph mentions the British Museum and the National Gallery, which are famous museums and art galleries."
  },
  {   
    question: "There are lots of large department stores on Oxford Street. If you like small shops, there is an attractive shopping centre in Covent Garden.",
    options: [
      "A. Shopping",
      "B. Restaurants",
      "C. Theatres",
      "D. Sightseeing"
    ],
    answer: "A. Shopping",
    explanation: "This paragraph talks about department stores, shops, and shopping centres, which are all related to shopping."
  },
  {   
    question: "London is well known for its many theatres. The National Theatre near the Thames is a modern building containing three theatres.",
    options: [
      "A. Music",
      "B. Theatres",
      "C. Museums & Galleries",
      "D. Sightseeing"
    ],
    answer: "B. Theatres",
    explanation: "The paragraph specifically mentions 'theatres' and the 'National Theatre'."
  },
  {    
    question: "If you like classical music, go to a concert at the Royal Albert Hall. You can hear excellent jazz or rock.",
    options: [
      "A. Restaurants",
      "B. Theatres",
      "C. Music",
      "D. Shopping"
    ],
    answer: "C. Music",
    explanation: "Keywords like 'classical music', 'concert', 'jazz', and 'rock' all relate to the topic of music."
  },
  {
    group: 2,
    question: "London also has many excellent restaurants serving food from almost every country in the world. Go to Soho Street and try food from Italy, France, China, India, etc.",
    options: [
      "A. Sightseeing",
      "B. Restaurants",
      "C. Theatres",
      "D. Shopping"
    ],
    answer: "B. Restaurants",
    explanation: "This paragraph describes 'restaurants' and the different types of 'food' available, which relates to dining out."
  }
];