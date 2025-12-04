let unit = "2";
let title = "City Life";
let groups = [
	  "I. Choose the correct answer A, B, C, or D to fill in each blank in the following passage.",
	  "II. Fill in each blank with a suitable word from the box to complete a passage about a community helper.",
	  "III. Read a passage do the exercises."
]
let exercises = [
   {
	"group" : 0,
    "question": "The local newspaper carried out a survey with city dwellers about how to make the city a more (1) __________ place.",
    "options": ["A. lifelong", "B. living", "C. lively", "D. liveable"],
    "answer": "D. liveable",
    "explanation": "Cần một tính từ mang nghĩa 'đáng sống' để chỉ một thành phố được cải thiện, phù hợp với ngữ cảnh 'a more liveable place' (một nơi đáng sống hơn)."
  },
  {
    "question": "First, they wanted stricter traffic (2) __________ to stop drivers from ignoring traffic lights and breaking speed limits.",
    "options": ["A. jams", "B. laws", "C. lights", "D. safety"],
    "answer": "B. laws",
    "explanation": "Cần một danh từ số nhiều đi sau 'stricter traffic' (giao thông nghiêm ngặt hơn) và có thể 'stop drivers from breaking speed limits'. 'Traffic laws' (luật giao thông) là cụm từ chính xác."
  },
  {
    "question": "In addition, they hoped their city would improve its (3) __________ system.",
    "options": ["A. public transport", "B. underground", "C. amenity", "D. parking"],
    "answer": "A. public transport",
    "explanation": "Toàn bộ đoạn văn sau đó nói về 'bus lanes' và 'public transport' (giao thông công cộng), cho thấy đây là hệ thống cần cải thiện."
  },
  {
    "question": "There should be bus lines that reach almost all areas in the city, so it would be easy for people to (4) __________.",
    "options": ["A. go away", "B. move in", "C. get around", "D. come out"],
    "answer": "C. get around",
    "explanation": "Cần một cụm động từ mang nghĩa 'đi lại' hoặc 'di chuyển' trong thành phố. 'Get around' là cụm từ phù hợp nhất ('di chuyển xung quanh')."
  },
  {
    "question": "They said that good public transport could also (5) __________ the city money.",
    "options": ["A. earn", "B. make", "C. save", "D. spend"],
    "answer": "C. save",
    "explanation": "Các dự án giao thông công cộng thường giúp 'save the city money' (tiết kiệm tiền cho thành phố) bằng cách giảm nhu cầu xây dựng cơ sở hạ tầng tốn kém cho xe cá nhân."
  },
  {
    "question": "The local authority wouldn’t need to construct new parking lots and (6) __________ roads to cater for the increasing number of private cars.",
    "options": ["A. narrow", "B. widen", "C. reduce", "D. block"],
    "answer": "B. widen",
    "explanation": "Hành động ngược lại với xây bãi đỗ xe là xây dựng hoặc 'widen roads' (mở rộng đường) để đối phó với xe cá nhân. 'Widen' phù hợp với ngữ cảnh tránh xây dựng."
  },
  {
    "question": "Finally, the survey (7) __________ suggested the local authority build traffic apps.",
    "options": ["A. participants", "B. people", "C. government", "D. police"],
    "answer": "A. participants",
    "explanation": "Chủ thể thực hiện việc 'suggested' (đề xuất) phải là người tham gia khảo sát ('The local newspaper carried out a survey with city dwellers...'). 'Participants' (người tham gia) là từ chính xác."
  },
  {
	"group" : 0,
    "question": "The apps could recommend to drivers the best routes to avoid traffic (8) __________.",
    "options": ["A. signs", "B. flow", "C. accidents", "D. congestion"],
    "answer": "D. congestion",
    "explanation": "Ứng dụng giao thông thường giúp người lái xe tránh 'traffic congestion' (tắc nghẽn giao thông/ùn tắc). 'Congestion' là danh từ phù hợp nhất trong ngữ cảnh này."
  },
  {
	"group" : 1,  
    "question": "Who sometimes doesn't cook?",
    "options": ["A. Gina", "B. Olivia", "C. Hoai", "D. None of the above"],
    "answer": "B. Olivia",
    "explanation": "Olivia nói: 'When I'm too busy to cook, I pick up prepared meals in the supermarket.' (Khi tôi quá bận để nấu ăn, tôi mua đồ ăn chế biến sẵn ở siêu thị)."
  },
  {
    "question": "Who praises Vancouver for being perfect for her family to live in?",
    "options": ["A. Gina", "B. Olivia", "C. Hoai", "D. None of the above"],
    "answer": "C. Hoai",
    "explanation": "Hoài nói: 'Vancouver is a perfect place for family life.' (Vancouver là một nơi hoàn hảo cho cuộc sống gia đình)."
  },
  {
    "question": "Who describes the Vancouver's nature?",
    "options": ["A. Gina", "B. Olivia", "C. Hoai", "D. None of the above"],
    "answer": "A. Gina",
    "explanation": "Gina nói: 'I fell in love with Vancouver's natural habitats. I can go hiking in the summer and snowboarding in the winter...' (Tôi yêu môi trường tự nhiên của Vancouver. Tôi có thể đi bộ đường dài vào mùa hè và trượt tuyết vào mùa đông...)."
  },
  {
    "question": "Who compliments Vancouver on its convenience?",
    "options": ["A. Gina", "B. Olivia", "C. Hoai", "D. None of the above"],
    "answer": "B. Olivia",
    "explanation": "Olivia mở đầu: 'Life in Vancouver is convenient.' (Cuộc sống ở Vancouver rất tiện lợi)."
  },
  {
    "question": "Who loves outdoor activities?",
    "options": ["A. Gina", "B. Olivia", "C. Hoai", "D. None of the above"],
    "answer": "A. Gina",
    "explanation": "Gina liệt kê các hoạt động ngoài trời: 'I can go hiking in the summer and snowboarding in the winter.'."
  },
  {
	"group" : 1,  
    "question": "Who lives in Vancouver with her children?",
    "options": ["A. Gina", "B. Olivia", "C. Hoai", "D. None of the above"],
    "answer": "C. Hoai",
    "explanation": "Hoài nói: 'At weekends, I take my daughters to the mind-blowing museum...' (Vào cuối tuần, tôi đưa các con gái đến bảo tàng...), ngụ ý cô ấy sống cùng các con."
  },
   {
	"group" : 2,     
    "question": "What is the passage mainly about?",
    "options": [
      "A. The reasons for moving to the suburbs.",
      "B. The disadvantages of city life.",
      "C. The high cost of living in cities.",
      "D. The causes of pollution in cities."
    ],
    "answer": "B. The disadvantages of city life.",
    "explanation": "Toàn bộ bài đọc tập trung vào các khía cạnh tiêu cực của cuộc sống ở các thành phố lớn ('many people are reluctant to make such a move' và liệt kê các vấn đề như chi phí cao, ô nhiễm, tiếng ồn, và thiếu không gian xanh), phù hợp nhất với 'The disadvantages of city life'."
  },
  {
    "question": "Why does the author mention “accommodation, petrol, food, and drinks” in paragraph 2?",
    "options": [
      "A. To give examples of high living costs.",
      "B. To explain how convenient city life is.",
      "C. To describe what city people often lack.",
      "D. To suggest city people save money."
    ],
    "answer": "A. To give examples of high living costs.",
    "explanation": "Đoạn 2 bắt đầu bằng câu 'The high cost of living is the first disadvantage.' (Chi phí sinh hoạt cao là bất lợi đầu tiên). Sau đó, nó liệt kê các chi phí cụ thể như 'Accommodation and petrol are expensive. Food and drinks are also pricey.' để chứng minh cho chi phí cao."
  },
  {
    "question": "What does the word “them” in paragraph 2 refer to?",
    "options": ["A. bad effects", "B. stress levels", "C. city people", "D. construction sites"],
    "answer": "C. city people",
    "explanation": "Trong câu: '...stress, making them suffer from breathing problems.' (gây ra căng thẳng, khiến họ phải chịu đựng các vấn đề về hô hấp). Từ 'them' ở đây chỉ những người bị ảnh hưởng bởi ô nhiễm và tiếng ồn, tức là 'city people' (người dân thành phố)."
  },
  {
    "question": "According to the passage, teenagers often hang out at shopping malls because __________.",
    "options": [
      "A. they find shopping malls interesting",
      "B. they have few places outdoor to play",
      "C. they prefer them to entertainment complexes",
      "D. their houses are too small"
    ],
    "answer": "B. they have few places outdoor to play",
    "explanation": "Bài đọc nêu rõ: 'City life lacks spaces for outdoor activities; therefore, teenagers often hang out at shopping malls... instead of doing sports outdoors.' (Cuộc sống thành phố thiếu không gian cho các hoạt động ngoài trời; do đó, thanh thiếu niên thường tụ tập ở trung tâm mua sắm... thay vì chơi thể thao ngoài trời)."
  },
  {
	"group" : 2,     
    "question": "Which of the following is NOT mentioned about city authorities?",
    "options": [
      "A. They are trying to find solutions to city problems.",
      "B. They all want to solve problems for all the world's cities.",
      "C. They hope to lower the costs of living in cities.",
      "D. They reduced pollution levels in cities by half last year."
    ],
    "answer": "D. They reduced pollution levels in cities by half last year.",
    "explanation": "Thông tin trong bài: (A) 'The cities' authorities are trying to overcome these problems.' (Chính quyền đang cố gắng khắc phục); (C) '...reduce living costs and pollution...' (mục tiêu giảm chi phí sinh hoạt). Phương án D không được đề cập và không có cơ sở trong bài đọc."
  }  
];