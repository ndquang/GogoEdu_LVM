let unit = "Unit 3";
let title = "Community Service";
let groups = [
	  "1. Read the health tips and complete each statement(1-6) with one word from the text",
	  "2. Read the passage about some of the health benefits of being active and do the exercises.",
	  "3. Read the passage and do the exercises."
]
let exercises = [
  {
    group: 0,
    question: "The activities include donating books to village children, ______ kids in the neighbourhood.",
    options: ["A. tutor", "B. tutored", "C. tutoring"],
    answer: "C. tutoring",
    explanation: "Cần dùng dạng V-ing 'tutoring' để nối song song với 'donating books' (đều là hành động)."
  },
  {    
    question: "Our school started this programme five years ago for the ______.",
    options: ["A. rich", "B. needy", "C. young"],
    answer: "B. needy",
    explanation: "'Needy' nghĩa là 'những người nghèo, khó khăn', phù hợp với nội dung hoạt động tình nguyện."
  },
  {    
    question: "In the beginning, we thought about ______ we should join in these activities.",
    options: ["A. what", "B. when", "C. why"],
    answer: "C. why",
    explanation: "Từ để hỏi phù hợp trong ngữ cảnh 'chúng tôi đã nghĩ về lý do tại sao nên tham gia' là 'why'."
  },
  {    
    question: "We then thought about what ______ we wanted to do.",
    options: ["A. activities", "B. jobs", "C. work"],
    answer: "A. activities",
    explanation: "'Activities' phù hợp vì các em đang nói về 'hoạt động tình nguyện' cụ thể."
  },
  {   
    question: "Those who like reading could choose to collect and donate ______.",
    options: ["A. clothes", "B. books", "C. vegetables"],
    answer: "B. books",
    explanation: "Đọc sách thì liên quan tới việc quyên góp sách ('donate books')."
  },
  {   
    question: "Those who are good at English could ______ primary students.",
    options: ["A. learn", "B. talk", "C. tutor"],
    answer: "C. tutor",
    explanation: "'Tutor' nghĩa là 'dạy kèm', đúng với người giỏi tiếng Anh giúp học sinh tiểu học."
  },
  {    
    question: "Our teachers often encourage us to ______ committed.",
    options: ["A. live", "B. stay", "C. working"],
    answer: "B. stay",
    explanation: "Cụm 'stay committed' nghĩa là 'giữ vững cam kết'."
  },
  {
    group: 0,
    question: "We have a lot of fun and learn many things from ______ the activities.",
    options: ["A. doing", "B. work", "C. playing"],
    answer: "A. doing",
    explanation: "Cụm 'doing the activities' nghĩa là 'thực hiện các hoạt động'."
  },
   {
    group: 1,
    question: "What does 'needy people' mean?",
    options: [
      "A. to link, join things or people together",
      "B. an organisation for helping people in need",
      "C. people who need help, poor people",
      "D. a group of people living in a place",
      "E. liked or enjoyed by a large number of people"
    ],
    answer: "C. people who need help, poor people",
    explanation: "'Needy people' nghĩa là 'những người nghèo, cần được giúp đỡ'."
  },
  {    
    question: "What does 'charity organisation' mean?",
    options: [
      "A. to link, join things or people together",
      "B. an organisation for helping people in need",
      "C. people who need help, poor people",
      "D. a group of people living in a place",
      "E. liked or enjoyed by a large number of people"
    ],
    answer: "B. an organisation for helping people in need",
    explanation: "'Charity organisation' là tổ chức từ thiện giúp đỡ người khó khăn."
  },
  {    
    question: "What does 'popular' mean?",
    options: [
      "A. to link, join things or people together",
      "B. an organisation for helping people in need",
      "C. people who need help, poor people",
      "D. a group of people living in a place",
      "E. liked or enjoyed by a large number of people"
    ],
    answer: "E. liked or enjoyed by a large number of people",
    explanation: "'Popular' nghĩa là 'phổ biến' hoặc 'được nhiều người yêu thích'."
  },
  {    
    question: "What does 'community' mean?",
    options: [
      "A. to link, join things or people together",
      "B. an organisation for helping people in need",
      "C. people who need help, poor people",
      "D. a group of people living in a place",
      "E. liked or enjoyed by a large number of people"
    ],
    answer: "D. a group of people living in a place",
    explanation: "'Community' nghĩa là 'cộng đồng', tức nhóm người sống trong cùng khu vực."
  },
  {    
    question: "What does 'connect' mean?",
    options: [
      "A. to link, join things or people together",
      "B. an organisation for helping people in need",
      "C. people who need help, poor people",
      "D. a group of people living in a place",
      "E. liked or enjoyed by a large number of people"
    ],
    answer: "A. to link, join things or people together",
    explanation: "'Connect' nghĩa là 'kết nối', 'liên kết với người khác'."
  },

  // ----- Part b -----
  {    
    question: "People first used the word 'volunteer' in the 18th century.",
    options: ["A. True", "B. False"],
    answer: "A. True",
    explanation: "Đúng. Từ 'volunteer' được dùng lần đầu năm 1795, tức thế kỷ 18."
  },
  {    
    question: "The YMCA held classes that taught people skills.",
    options: ["A. True", "B. False"],
    answer: "A. True",
    explanation: "Đúng. YMCA tổ chức các lớp dạy kỹ năng cho mọi người."
  },
  {    
    question: "The Red Cross is an American charity organisation.",
    options: ["A. True", "B. False"],
    answer: "B. False",
    explanation: "Sai. Red Cross là tổ chức quốc tế đầu tiên, không riêng của Mỹ."
  },
  {    
    question: "Volunteers work to help and connect with others.",
    options: ["A. True", "B. False"],
    answer: "A. True",
    explanation: "Đúng. Đoạn văn nói rõ rằng tình nguyện viên giúp đỡ và kết nối với người khác."
  },
  {
    group: 1,
    question: "One example of volunteer work is donating clothes.",
    options: ["A. True", "B. False"],
    answer: "A. True",
    explanation: "Đúng. Đoạn văn liệt kê việc quyên góp quần áo là một hoạt động tình nguyện."
  },
   {
    group: 2,
    question: "What is the main idea of the passage?",
    options: [
      "A. There are different types of volunteer activities.",
      "B. What to expect when you do volunteer work.",
      "C. There are some good reasons why you should do volunteer work."
    ],
    answer: "C. There are some good reasons why you should do volunteer work.",
    explanation: "Đoạn văn tập trung vào việc giải thích những lợi ích của việc làm tình nguyện — lý do vì sao bạn nên tham gia hoạt động này."
  },
  {    
    question: "Which is NOT true about volunteers?",
    options: [
      "A. They are the strongest and most active.",
      "B. They are flexible thinkers.",
      "C. They are generally more positive."
    ],
    answer: "A. They are the strongest and most active.",
    explanation: "Đoạn văn không nói rằng tình nguyện viên mạnh mẽ nhất, mà nói rằng họ năng động và linh hoạt."
  },
  {    
    question: "Which is a benefit of doing volunteer work?",
    options: [
      "A. You will have a happier family.",
      "B. You can have more friends.",
      "C. You will never feel unhappy."
    ],
    answer: "B. You can have more friends.",
    explanation: "Đoạn văn nói rằng tình nguyện viên thường làm việc theo nhóm, giúp họ kết bạn nhiều hơn."
  },
  {    
    question: "Why are volunteers often more positive?",
    options: [
      "A. They are the healthiest people in the country.",
      "B. They stay active.",
      "C. They often feel they are luckier than others."
    ],
    answer: "C. They often feel they are luckier than others.",
    explanation: "Tình nguyện viên giúp đỡ người khó khăn nên cảm thấy biết ơn và thấy mình may mắn hơn."
  },
  {    
    question: "How many benefits are mentioned in the passage?",
    options: [
      "A. Two.",
      "B. Three.",
      "C. Four."
    ],
    answer: "B. Three.",
    explanation: "Đoạn văn nêu rõ ba lợi ích: linh hoạt hơn, khỏe mạnh hơn, và có thêm mối quan hệ xã hội."
  },
  {
    group: 2,
    question: "What is the purpose of the passage?",
    options: [
      "A. To tell people not to join volunteer activities if they don't have the time.",
      "B. To encourage people to do some volunteer activities.",
      "C. To explain the steps you should follow when you join volunteer activities."
    ],
    answer: "B. To encourage people to do some volunteer activities.",
    explanation: "Mục tiêu của đoạn văn là khuyến khích người đọc tham gia các hoạt động tình nguyện vì những lợi ích tích cực mà chúng mang lại."
  }
];
