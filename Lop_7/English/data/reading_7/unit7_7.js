let unit = "Unit 7";
let title = "A Visit to a School";
let groups = [
	  "1. Read the passage and fill in each gap with a suitable word or phrase from the box. (Test yourself 2)",	  
	  "2. Read the following passage and choose the correct answer to each question. (Test yourself 2)",
	  "3. Read the following passage and decide whether the statements are true (T) or false (F).",
	  "4. Read the text and decide which answer A, B, C, or D best fills each gap.",
	  "5. Read the passage and put a suitable word or phrase from the box in each of the gaps."
]
let exercises = [
   {
    group: 0,
    question: "Are you fit and (1)______?",
    options: ["A. healthy", "B. slim", "C. shape", "D. advice"],
    answer: "A. healthy",
    explanation: "Tính từ 'healthy' (khỏe mạnh) phù hợp để đi cùng với 'fit' (cân đối)."
  },
  {    
    question: "Maybe you think you are (2)______ and need to go on a diet.",
    options: ["A. a little", "B. overweight", "C. slim", "D. healthy"],
    answer: "B. overweight",
    explanation: "'Overweight' (thừa cân) là lý do hợp lý để cần phải ăn kiêng (go on a diet)."
  },
  {    
    question: "Or maybe you are a bit (3)______ and need to put on weight.",
    options: ["A. overweight", "B. healthy", "C. slim", "D. change"],
    answer: "C. slim",
    explanation: "'Slim' (mảnh mai, gầy) là lý do để cần tăng cân (put on weight)."
  },
  {    
    question: "Here is some (4)______ for you.",
    options: ["A. advice", "B. shape", "C. change", "D. keep fit"],
    answer: "A. advice",
    explanation: "Cụm từ 'some advice' (một vài lời khuyên) là một cấu trúc phổ biến."
  },
  {    
    question: "First, it is important not to do things that are bad for you – so, do not eat (5)______ or go to bed too late.",
    options: ["A. a little", "B. a lot of", "C. too much", "D. slim"],
    answer: "C. too much",
    explanation: "'Too much' (quá nhiều) phù hợp với lời khuyên không nên làm điều xấu cho sức khỏe."
  },
  {   
    question: "If you have an unhealthy lifestyle, try to (6)______ some of the things you do.",
    options: ["A. keep fit", "B. shape", "C. change", "D. advice"],
    answer: "C. change",
    explanation: "Động từ 'change' (thay đổi) phù hợp với cấu trúc 'try to do something' (cố gắng làm gì đó)."
  },
  {    
    question: "Second, make sure you eat a balanced diet, including (7)______ fresh fruit and vegetables.",
    options: ["A. a lot of", "B. too much", "C. a little", "D. healthy"],
    answer: "A. a lot of",
    explanation: "'A lot of' (nhiều) được dùng để chỉ số lượng trái cây và rau củ cần ăn."
  },
  {   
    question: "Do plenty of exercise to (8)______: go running in the morning or join your local gym.",
    options: ["A. change", "B. keep fit", "C. shape", "D. slim"],
    answer: "B. keep fit",
    explanation: "'Keep fit' (giữ dáng) là mục đích của việc tập thể dục."
  },
  {   
    question: "If you are not in (9)______, though, you should start with just a little swimming.",
    options: ["A. advice", "B. change", "C. shape", "D. healthy"],
    answer: "C. shape",
    explanation: "Thành ngữ 'in shape' có nghĩa là có một thân hình cân đối, khỏe mạnh."
  },
  {
    group: 0,
    question: "You should start with just (10)______ swimming.",
    options: ["A. too much", "B. a little", "C. a lot of", "D. slim"],
    answer: "B. a little",
    explanation: "'A little' (một chút) phù hợp với lời khuyên nên bắt đầu một cách từ từ, nhẹ nhàng."
  },
   {
    group: 1,
    question: "What is the first year of school called in Britain?",
    options: [
      "A. The reception",
      "B. The year one",
      "C. The beginners' year",
      "D. The starters' year"
    ],
    answer: "A. The reception",
    explanation: "Đoạn văn có ghi: 'Their first year – the reception – is usually a very happy one for the child.'"
  },
  {    
    question: "Which of the following encourages language development?",
    options: [
      "A. Number work",
      "B. Creative activities",
      "C. Music and singing",
      "D. Movement lessons"
    ],
    answer: "B. Creative activities",
    explanation: "Bài đọc cho biết: 'As they paint, draw, and do other creative activities, they interact with other children and their language skills develop.'"
  },
  {    
    question: "The highlighted word 'interact' in the passage is closest in meaning to ______.",
    options: [
      "A. control",
      "B. study",
      "C. follow",
      "D. communicate"
    ],
    answer: "D. communicate",
    explanation: "Trong ngữ cảnh giao tiếp với những đứa trẻ khác để phát triển kỹ năng ngôn ngữ, 'interact' (tương tác) có nghĩa gần nhất với 'communicate' (giao tiếp)."
  },
  {    
    question: "What types of learning do children take part in before lunch?",
    options: [
      "A. Maths and reading",
      "B. Making parties",
      "C. Making cakes",
      "D. Acting in plays"
    ],
    answer: "A. Maths and reading",
    explanation: "Đoạn văn nói: 'In the morning students have number work and reading skills.' Buổi sáng là thời gian trước bữa trưa, và 'number work' tương đương với 'Maths'."
  },
  {    
    group: 1,
    question: "Which of the following is NOT true, according to the passage?",
    options: [
      "A. Children in Britain start school when they are five.",
      "B. When children interact with each other, their language skills develop.",
      "C. In their music lessons, they try to copy musical notes.",
      "D. Children love dressing up in costumes and acting like adults."
    ],
    answer: "C. In their music lessons, they try to copy musical notes.",
    explanation: "Bài đọc nói rằng trẻ em cố gắng sao chép 'a rhythm' (một nhịp điệu), chứ không phải 'musical notes' (các nốt nhạc), đây là hai kỹ năng khác nhau. Các câu còn lại đều đúng theo nội dung bài đọc."
  },
   {
    group: 2,
    question: "According to the survey, young and inexperienced drivers are the most likely to have an accident.",
    options: ["True", "False"],
    answer: "True",
    explanation: "Đoạn văn bắt đầu bằng câu: 'According to a recent survey, young and inexperienced drivers are the most likely to have an accident.'"
  },
  {    
    question: "Generally, older men are likely to drive fast cars with big engines.",
    options: ["True", "False"],
    answer: "False",
    explanation: "Đoạn văn nói rằng 'Young men' (những người đàn ông trẻ) thường lái xe nhanh, chứ không phải 'older men' (những người đàn ông lớn tuổi)."
  },
  {   
    question: "Passengers have an effect on the driver.",
    options: ["True", "False"],
    answer: "True",
    explanation: "Bài đọc có câu: 'One of the most interesting findings in the survey is that passengers can affect the driver.'"
  },
  {   
    question: "When men have their wives or girlfriends in the car, they drive worse.",
    options: ["True", "False"],
    answer: "False",
    explanation: "Đoạn văn nói điều ngược lại: 'When their wives or girlfriends are in the car, however, their driving improves' (cách lái xe của họ được cải thiện)."
  },
  {
    group: 2,
    question: "When children are in the car, mothers drive more slowly and safely.",
    options: ["True", "False"],
    answer: "True",
    explanation: "Câu cuối cùng của đoạn văn khẳng định: 'However, if their children are riding in the car, they drive more slowly and safely.'"
  },
   {
    group: 3,
    question: "When you are in Hong Kong, you can go about by taxi, by tram, by bus, or (1)______ underground.",
    options: ["A. in", "B. by", "C. on", "D. with"],
    answer: "B. by",
    explanation: "The preposition 'by' is used to indicate a mode of transportation (e.g., by car, by bus, by train)."
  },
  {    
    question: "I prefer the underground (2)______ it is fast, easy and cheap.",
    options: ["A. because", "B. when", "C. so", "D. but"],
    answer: "A. because",
    explanation: "'Because' is used to introduce the reason for the preference mentioned in the first part of the sentence."
  },
  {   
    question: "There are (3)______ trams and buses in Hong Kong, and one cannot drive on the road quickly and without stopping many times.",
    options: ["A. some", "B. a lot", "C. many", "D. few"],
    answer: "C. many",
    explanation: "'Many' is used with countable plural nouns (trams and buses) to indicate a large number."
  },
  {   
    question: "One cannot drive on the road (4)______ and without stopping many times.",
    options: ["A. quick", "B. quicker", "C. quickly", "D. quickest"],
    answer: "C. quickly",
    explanation: "An adverb ('quickly') is needed to describe the verb 'drive'."
  },
  {   
    question: "The underground is therefore usually quicker (5)______ taxis or buses.",
    options: ["A. as", "B. than", "C. so", "D. like"],
    answer: "B. than",
    explanation: "'Than' is used after a comparative adjective ('quicker') to compare two things."
  },
  {   
    question: "If you do not know Hong Kong very well, it is very difficult (6)______ the bus you want.",
    options: ["A. finding", "B. to find", "C. found", "D. to finding"],
    answer: "B. to find",
    explanation: "The structure 'difficult to do something' requires the infinitive form of the verb ('to find')."
  },
  {    
    question: "You can take a taxi, but it is (7)______ expensive than the underground or a bus.",
    options: ["A. more", "B. much", "C. as", "D. too"],
    answer: "A. more",
    explanation: "'More' is used to form the comparative of multi-syllable adjectives ('more expensive')."
  },
  {
    group: 3,
    question: "At the underground you can find good maps that tell you the station names and show you (8)______ to get to them.",
    options: ["A. who", "B. when", "C. what", "D. how"],
    answer: "D. how",
    explanation: "'How' is used to ask about the manner or way something is done ('how to get to them')."
  },
   {
    group: 4,
    question: "It allows a lot of people to (1)______ easily.",
    options: ["A. move around", "B. to work", "C. important", "D. healthier"],
    answer: "A. move around",
    explanation: "The phrase 'move around' fits the context of what transport allows people to do."
  },
  {   
    question: "The term “public transport” covers many different types of (2)______, but most commonly refers to buses and trains.",
    options: ["A. means of travel", "B. vehicles", "C. important", "D. to work"],
    answer: "B. vehicles",
    explanation: "Buses and trains are types of 'vehicles'."
  },
  {   
    question: "For example, good transport can help people go (3)______ every day.",
    options: ["A. move around", "B. healthier", "C. to work", "D. vehicles"],
    answer: "C. to work",
    explanation: "'To work' is a common daily destination that transport facilitates."
  },
  {   
    question: "Public transport is especially (4)______ for people with low income.",
    options: ["A. healthier", "B. important", "C. move around", "D. vehicles"],
    answer: "B. important",
    explanation: "The adjective 'important' describes the value or significance of public transport for this group."
  },
  {    
    question: "Public transport also helps us keep our community greener and (5)______.",
    options: ["A. to work", "B. important", "C. healthier", "D. means of travel"],
    answer: "C. healthier",
    explanation: "'Healthier' is a comparative adjective that creates a parallel structure with 'greener'."
  },
  {
    group: 4,
    question: "By providing an alternative (6)______, public transport also has an important role in reducing carbon emission.",
    options: ["A. vehicles", "B. means of travel", "C. to work", "D. healthier"],
    answer: "B. means of travel",
    explanation: "Public transport is an alternative 'means of travel' compared to private cars."
  }
  
];