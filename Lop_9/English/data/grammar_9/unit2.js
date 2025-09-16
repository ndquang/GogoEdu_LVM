let unit = "2";
let title = "City Life";
let groups = [
      "Choose A, B, C or D to complete each sentence.",
	  "Choose the option which is CLOSEST in meaning to the [-] word / phrase in each sentence.",
	  "Choose the option which is OPPOSITE in meaning to the [-] word / phrase in each sentence.",
	  "Choose the most suitable response A, B, C, or D to complete each of the following exchanges.",
	  "Pronunciation",
	  "Choose the best option A, B, C, or D which has the same meaning as the original sentence."
]
let  exercises=  [
	 {
    "group": groups[4],
    "question": "Choose the word that is pronounced differently from the others. [ear]",
    "options": ["A. bear", "B. near", "C. wear", "D. pear"],
    "answer": "B. near",
    "explanation": "'bear', 'wear', 'pear' phát âm /eə/, trong khi 'near' phát âm /ɪə/."
  },
  {
    "group": groups[4],
    "question": "Choose the word that is pronounced differently from the others. [ow]",
    "options": ["A. slowly", "B. downtown", "C. power", "D. crowded"],
    "answer": "A. slowly",
    "explanation": "'slowly' có âm /əʊ/, còn các từ còn lại có /aʊ/."
  },
  {
    "group": groups[4],
    "question": "Choose the word that is pronounced differently from the others. [oa]",
    "options": ["A. coast", "B. upload", "C. abroad", "D. roadside"],
    "answer": "C. abroad",
    "explanation": "'abroad' có âm /ɔː/, còn các từ khác có /əʊ/."
  },
  {
    "group": groups[4],
    "question": "Choose the word that is pronounced differently from the others. [o]",
    "options": ["A. home", "B. shopping", "C. comb", "D. locate"],
    "answer": "B. shopping",
    "explanation": "'shopping' có âm /ɒ/, trong khi các từ còn lại có âm /əʊ/."
  },
  {
    "group": groups[4],
    "question": "Choose the word that is pronounced differently from the others. [ou]",
    "options": ["A. double", "B. council", "C. southeast", "D. thousand"],
    "answer": "A. double",
    "explanation": "'double' có nguyên âm /ʌ/, các từ còn lại có nguyên âm /aʊ/."
  },
    {
	"group": groups[0],
      "question": "The city is now a big __________ site with many half-finished buildings.",
      "options": ["A. waste", "B. tourist", "C. storage", "D. construction"],
      "answer": "D. construction",
      "explanation": "'construction site' = công trường xây dựng."
    },
    {
      "question": "The town is overcrowded and lacks public __________.",
      "options": ["A. health", "B. amenities", "C. education", "D. places"],
      "answer": "B. amenities",
      "explanation": "'public amenities' = tiện ích công cộng."
    },
    {
      "question": "I used to live in the __________ area, but I moved to a quiet suburb two years ago.",
      "options": ["A. downtown", "B. underground", "C. outskirts", "D. village"],
      "answer": "A. downtown",
      "explanation": "'downtown area' = trung tâm thành phố."
    },
    {
      "question": "The __________ system runs underground, so it doesn’t encounter road congestion.",
      "options": ["A. bus", "B. coach", "C. metro", "D. taxi"],
      "answer": "C. metro",
      "explanation": "'metro system' = tàu điện ngầm."
    },
    {
      "question": "This city looks like a __________ jungle with ugly buildings and almost no parks.",
      "options": ["A. green", "B. loveable", "C. tropical", "D. concrete"],
      "answer": "D. concrete",
      "explanation": "'concrete jungle' = khu đô thị chật chội, bê tông hóa."
    },
    {
      "question": "I live in a __________ street which is full of people and vehicles moving around all day.",
      "options": ["A. quiet", "B. bustling", "C. calm", "D. empty"],
      "answer": "B. bustling",
      "explanation": "'bustling street' = con phố nhộn nhịp, đông đúc."
    },
    {
      "question": "Bangkok has an excellent __________ system which runs on a railway above the ground.",
      "options": ["A. sky train", "B. underground", "C. ferry", "D. taxi"],
      "answer": "A. sky train",
      "explanation": "'sky train' = tàu điện trên cao."
    },
    {
	  "group": groups[0],	
      "question": "Many people compliment Ha Noi on being a __________ tourist destination.",
      "options": ["A. dusty", "B. noisy", "C. safe", "D. polluted"],
      "answer": "C. safe",
      "explanation": "Hà Nội thường được khen là điểm đến 'an toàn' (safe)."
    },

    {
	  "group": groups[1],
      "question": "She browsed the shop but didn’t buy anything. She found it a bit [pricey].",
      "options": ["A. crowded", "B. modern", "C. attractive", "D. expensive"],
      "answer": "D. expensive",
      "explanation": "'pricey' = expensive."
    },
    {
	  "group": groups[1],
      "question": "The underground was [packed with] people. I couldn’t find a seat.",
      "options": ["A. full on", "B. empty of", "C. full of", "D. convenient for"],
      "answer": "C. full of",
      "explanation": "'packed with' = đầy ắp, chật kín."
    },
    {
	  "group": groups[1],
      "question": "Her team is [carrying out] a project to recycle food waste.",
      "options": ["A. running", "B. proposing", "C. funding", "D. aiming"],
      "answer": "A. running",
      "explanation": "'carry out' = thực hiện, tiến hành."
    },

    {
	  "group": groups[2],	
      "question": "Neither Lan nor Hoa [stayed home alone] last weekend. They went to the shopping mall together.",
      "options": ["A. hung out with one another", "B. came down with one another", "C. got rid of one another", "D. looked up to one another"],
      "answer": "A. hung out with one another",
      "explanation": "'stayed home alone' (ở nhà một mình) trái nghĩa với 'hung out with one another' (ra ngoài cùng nhau)."
    },
    {
	  "group": groups[2],	
      "question": "Hoa: I never use buses when getting around. They are always late.\nJack: Well, it’s not that bad. They are [reliable] now.",
      "options": ["A. on time", "B. late", "C. timely", "D. terrible"],
      "answer": "A. on time",
      "explanation": "'reliable' (đáng tin cậy) trái nghĩa với 'late' → đáp án đúng: 'on time'."
    },
	  {
    "group": groups[3],
    "question": "Minh: I can lend you this book if you are interested in reading it.\nPeter: ________________________________",
    "options": [
      "A. You did a great job!",
      "B. Thanks. I prefer going by bus.",
      "C. I didn’t know you like reading books.",
      "D. Thanks. I’ll take good care of it."
    ],
    "answer": "D. Thanks. I’ll take good care of it.",
    "explanation": "Peter nhận sách nên đáp lại lời đề nghị bằng cách cảm ơn và hứa sẽ giữ gìn."
  },
  {
   "group": groups[3],
    "question": "Hoa: Ms Mai won’t come back until noon. Would you like me to leave a note for her?\nMs Hoai: ________________________________",
    "options": [
      "A. Sorry. I can’t find my notes.",
      "B. That’s great. Thanks for your help.",
      "C. Why would you like to leave?",
      "D. How about leaving her alone?"
    ],
    "answer": "B. That’s great. Thanks for your help.",
    "explanation": "Lời đề nghị giúp đỡ → đáp lại bằng sự đồng ý và cảm ơn."
  },
  {
    "group": groups[3],
    "question": "Harry: Oh no! I missed the bus to the underground.\nMr. Lam: ________________________________",
    "options": [
      "A. You’re excellent. Congratulations!",
      "B. Your friends will miss you a lot.",
      "C. The underground is much faster than the bus.",
      "D. Don’t worry. I can take you to the station."
    ],
    "answer": "D. Don’t worry. I can take you to the station.",
    "explanation": "Harry gặp rắc rối → Mr. Lam an ủi và đưa ra giải pháp."
  },
  {
    "group": groups[3],
    "question": "James: ________________________________\nChloe: Yes, please. That’s so kind of you.",
    "options": [
      "A. Excuse me. Can I sit here?",
      "B. Do you commute to work every day?",
      "C. I can show you how this smart card works.",
      "D. Would you mind taking this book to Ms Hoa’s office?"
    ],
    "answer": "D. Would you mind taking this book to Ms Hoa’s office?",
    "explanation": "Chloe nói 'Yes, please. That’s so kind of you' → phù hợp khi James nhờ giúp chuyển sách."
  },
  {
    "group": groups[3],
    "question": "Ann: ________________________________\nHoang: Would you like me to get a taxi for you?",
    "options": [
      "A. The tram is late today.",
      "B. The Melbourne tram is great.",
      "C. The sky train is always on time.",
      "D. A taxi can get stuck in traffic congestion."
    ],
    "answer": "A. The tram is late today.",
    "explanation": "Ann than phiền về việc tram trễ → Hoang mới đề nghị gọi taxi."
  },
   {
    "group": groups[5],
    "question": "People say that air pollution is the biggest problem in this city.",
    "options": [
      "A. It is said that air pollution is the biggest problem in this city.",
      "B. They are said air pollution is the biggest problem in this city.",
      "C. Air pollution says to be the biggest problem in this city.",
      "D. People told that air pollution is the biggest problem in this city."
    ],
    "answer": "A. It is said that air pollution is the biggest problem in this city.",
    "explanation": "Cấu trúc bị động với 'People say that...' → 'It is said that...'."
  },
  {
    "question": "The last time I visited my grandparents was two years ago.",
    "options": [
      "A. I have visited my grandparents for two years.",
      "B. I haven't visited my grandparents for two years.",
      "C. I didn't visit my grandparents two years ago.",
      "D. I visited my grandparents for two years."
    ],
    "answer": "B. I haven't visited my grandparents for two years.",
    "explanation": "Cấu trúc: 'The last time ... was ... ago' → 'I haven't ... for ...'."
  },
  {
    "question": "He started working here three months ago.",
    "options": [
      "A. He has worked here since three months.",
      "B. He has worked here for three months.",
      "C. He works here three months ago.",
      "D. He worked here since three months."
    ],
    "answer": "B. He has worked here for three months.",
    "explanation": "Quá khứ tiếp diễn đến hiện tại: 'started ... ago' → 'has worked for...'."
  },
  {
    "question": "They will build a new bridge across the river next year.",
    "options": [
      "A. A new bridge will be built across the river next year.",
      "B. A new bridge is built across the river next year.",
      "C. A new bridge is being built across the river next year.",
      "D. A new bridge was built across the river next year."
    ],
    "answer": "A. A new bridge will be built across the river next year.",
    "explanation": "Câu bị động thì tương lai đơn: 'will + be + V3'."
  },
  {
	"group": groups[5],
    "question": "Despite his age, he runs very fast.",
    "options": [
      "A. Although he is old, he runs very fast.",
      "B. Although he runs very fast, he is old.",
      "C. He runs very fast, but he is young.",
      "D. Because he is old, he runs very fast."
    ],
    "answer": "A. Although he is old, he runs very fast.",
    "explanation": "'Despite + N' tương đương với 'Although + S + V'."
  }
  ] 

