let unit = "Unit 10";
let title = "Communication in the future";
let groups = [
	  "1. Read the text and decide which answer A, B, C, or D best fills each gap.",
	  "2. Read the text and decide which answer A, B, C, or D best fills each gap.",
	  "3. Read the passage and write the short answers to the following questions.",
	  "4. Read the text and decide which answer A, B, C, or D best fills each gap."
]
let exercises = [
 {
	group: 0, 
    question: "Trees help remove pollutants from water.",
    options: ["True", "False"],
    answer: "False",
    explanation: "Đoạn văn nói: 'They remove pollutants from the air', không phải từ nước. → False."
  },
  {
    question: "Trees help remove carbon dioxide from the air.",
    options: ["True", "False"],
    answer: "True",
    explanation: "Đoạn văn: 'we could remove two-thirds of all the carbon dioxide created by human activities.' → True."
  },
  {
    question: "There is less flooding thanks to trees.",
    options: ["True", "False"],
    answer: "True",
    explanation: "Đoạn văn: 'trees reduce the runoff of rainwater, so they can reduce flooding.' → True."
  },
  {
    question: "You pay less for air conditioning if you plant trees.",
    options: ["True", "False"],
    answer: "True",
    explanation: "Đoạn văn: 'Trees growing beside a home can cool the roof… Therefore, it reduces air conditioning costs.' → True."
  },
  {
    question: "If everybody plants trees around their homes, it will improve the planet.",
    options: ["True", "False"],
    answer: "True",
    explanation: "Đoạn văn cuối: 'Plant trees around your house. If enough people did that, it would make a big difference.' → True."
  },

  // Điền từ phần b
  {
    question: "Trees are seen as the ________ of the Earth.",
    options: ["lungs", "heart", "friends", "power"],
    answer: "lungs",
    explanation: "Đoạn văn: 'First, trees are the Earth’s lungs.' → Đáp án là 'lungs'."
  },
  {
    question: "Human activities create ________.",
    options: ["pollutants", "oxygen", "trees", "shade"],
    answer: "pollutants",
    explanation: "Đoạn văn: 'all the carbon dioxide created by human activities.' → Đáp án là 'pollutants'."
  },
  {
    question: "Thanks to trees, many different species have good ________.",
    options: ["food", "habitats", "oxygen", "conditions"],
    answer: "habitats",
    explanation: "Đoạn văn: 'trees create habitats for many species of plants and animals.' → Đáp án là 'habitats'."
  },
  {
	group: 0,  
    question: "We can save energy for air conditioning by ________ trees.",
    options: ["cutting", "burning", "planting", "removing"],
    answer: "planting",
    explanation: "Đoạn văn: 'Trees growing beside a home can cool the roof… Therefore, it reduces air conditioning costs.' → planting."
  },
   {
	group: 1,     
    question: "1. In a recent survey, TechNews asked young people to (1) ______ how they will talk to each other in 30 years’ time.",
    options: ["A. expect", "B. predict", "C. check"],
    answer: "B. predict",
    explanation: "Động từ 'predict' (dự đoán) phù hợp khi nói về dự đoán cách giao tiếp trong tương lai."
  },
  {
    question: "2. The results are not (2) ______.",
    options: ["A. surprising", "B. surprised", "C. surprise"],
    answer: "A. surprising",
    explanation: "'Surprising' mô tả tính chất của kết quả, trong khi 'surprised' dùng cho cảm xúc của con người."
  },
  {
    question: "3. Only 10% think people will still send letters and postcards to each other (3) ______ 2050.",
    options: ["A. on", "B. by", "C. for"],
    answer: "B. by",
    explanation: "Cụm 'by 2050' có nghĩa là trước hoặc vào năm 2050."
  },
  {
    question: "4. About 30% think holography and telepathy will allow them to communicate in (4) ______ time with their friends.",
    options: ["A. personal", "B. private", "C. real"],
    answer: "C. real",
    explanation: "'Real time' nghĩa là thời gian thực, đúng với ngữ cảnh công nghệ giao tiếp."
  },
  {
    question: "5. Most people say they will connect through supersmart devices (5) ______ of in person.",
    options: ["A. more", "B. instead", "C. rather"],
    answer: "B. instead",
    explanation: "Cụm 'instead of' có nghĩa là thay vì, phù hợp với ngữ cảnh."
  },
  {
    question: "6. More than half of respondents express their (6) ______ about future communication.",
    options: ["A. concerns", "B. feelings", "C. gratitude"],
    answer: "A. concerns",
    explanation: "'Concerns' (mối lo ngại) phù hợp khi nói về lo lắng cho giao tiếp trong tương lai."
  },
  {
    question: "7. They say if children spend most of their time (7) ______ on the Internet, they may not be able to communicate face to face.",
    options: ["A. interacting", "B. surfing", "C. using"],
    answer: "B. surfing",
    explanation: "'Surfing on the Internet' là cụm quen thuộc, nghĩa là lướt mạng."
  },
  {
	group: 1,
    question: "8. They may also not be able to communicate face to face very well (8) ______ 30 years.",
    options: ["A. for", "B. by", "C. in"],
    answer: "C. in",
    explanation: "'In 30 years' = sau 30 năm nữa, dùng để chỉ mốc thời gian trong tương lai."
  },
   {
	group: 2,   
    "question": "Which advantage belongs to a video conference?",
    "options": [
      "It saves travel time and money.",
      "It may reduce motivation to learn new languages.",
      "It may cause interpreters to lose jobs.",
      "It increases the accuracy of machine translation."
    ],
    "answer": "It saves travel time and money.",
    "explanation": "Video conferences allow people to meet online, saving both time and travel costs."
  },
  {
	group: 3,     
    "question": "Which disadvantage belongs to a video conference?",
    "options": [
      "It requires a stable Internet connection.",
      "It reduces the need for interpreters.",
      "It can translate in real time.",
      "It may reduce people’s interest in other cultures."
    ],
    "answer": "It requires a stable Internet connection.",
    "explanation": "Video conferences need strong Internet to ensure clear sound and images."
  },
  {
    "question": "Which advantage belongs to a translation machine?",
    "options": [
      "It saves money on travel.",
      "It helps people from different countries communicate quickly.",
      "It allows companies to hold meetings outside office hours.",
      "It makes use of webcams."
    ],
    "answer": "It helps people from different countries communicate quickly.",
    "explanation": "Translation machines translate in real time, making international communication easier."
  },
  {
    "question": "Which disadvantage belongs to a translation machine?",
    "options": [
      "It may cause interpreters to lose their jobs.",
      "It needs a webcam.",
      "It requires high-speed Internet.",
      "It saves people’s time."
    ],
    "answer": "It may cause interpreters to lose their jobs.",
    "explanation": "As translation devices become more accurate, interpreters may no longer be needed."
  },
  {
	  group: 2,   
    "question": "Which disadvantage do translation machines bring to language learning?",
    "options": [
      "They may reduce people’s motivation to learn new languages.",
      "They may require employees to work overtime.",
      "They may cost a lot of money to maintain.",
      "They may need strong Internet connections."
    ],
    "answer": "They may reduce people’s motivation to learn new languages.",
    "explanation": "If translation machines can translate instantly, people may feel less need to study languages."
  },
   {
    question: "The passage describes predictions about future smartphones offered by _____.",
    options: ["A. companies", "B. experts", "C. users"],
    answer: "B. experts",
    explanation: "Đoạn văn nói rõ: 'experts are making interesting predictions about smartphones of the future' → là các chuyên gia."
  },
  {
    question: "According to the passage, what can a user do to his/her smartphone by 2035?",
    options: ["A. Change its shape", "B. Wear it as a necklace", "C. Make it into a wallet"],
    answer: "A. Change its shape",
    explanation: "Trong bài: 'by 2035, smartphones will be able to change their shapes' → có thể thay đổi hình dạng."
  },
  {
    question: "According to the passage, future smartphones may use ____ to help their users interact in computer games.",
    options: ["A. sensors", "B. generators", "C. holography"],
    answer: "A. sensors",
    explanation: "Bài viết nêu: 'super strong sensors to read your mind and complete some tasks' → dùng cảm biến."
  },
  {
    question: "Which of the following tasks can a super smartphone NOT do for its users?",
    options: ["A. Check to-do lists", "B. Shop online", "C. Give advice"],
    answer: "C. Give advice",
    explanation: "Đoạn văn chỉ nói smartphone có thể làm to-do list, mua sắm online, cảm nhận tâm trạng… nhưng không có 'give advice'."
  },
  {
    question: "According to the passage, people may treat their future smartphones as ____ in the near future.",
    options: ["A. their servants", "B. their colleagues", "C. their best friends"],
    answer: "C. their best friends",
    explanation: "Trong bài: 'In the near future, many people may consider their smartphones their best friend'."
  },
  // Phần điền từ (b)
  {
    question: "Smartphones of the future can ______ according to their users’ demand.",
    options: ["change their shapes", "exchange holographic pictures", "read their user’s mind"],
    answer: "change their shapes",
    explanation: "Bài viết nói rõ: đến năm 2035 điện thoại có thể thay đổi hình dạng theo nhu cầu."
  },
  {
    question: "Smartphones of the future can exchange ______.",
    options: ["normal photos", "holographic pictures", "emails"],
    answer: "holographic pictures",
    explanation: "Đoạn văn: 'new generations of smartphones can send and receive holographic pictures'."
  },
  {
    question: "Future smartphones may ______ their user’s mind.",
    options: ["read", "control", "ignore"],
    answer: "read",
    explanation: "Trong bài: 'super strong sensors to read your mind' → có thể đọc được suy nghĩ."
  },
  {
    question: "Future smartphones can sense their users’ ______ and play appropriate music.",
    options: ["mood", "voice", "location"],
    answer: "mood",
    explanation: "Đoạn văn: 'They will be able to sense your mood, give advice and play suitable music'."
  },
  {
	group: 3,       
    question: "In the near future, people may interact with their phones more than they do with their ______.",
    options: ["colleagues", "human friends", "teachers"],
    answer: "human friends",
    explanation: "Câu cuối: 'they may interact with them even more than they do with their human friends'."
  }
];