let unit = "3";
let title = "Healthy Living for Teens";
let groups = [
	  "I. Read the passage and choose the best answer A, B, C, or D to fill in each blank.",
	  "II. Read the passage and choose the best answer A, B, C, or D to each of the questions.",
	  "III. Choose the correct answer A, B, C or D to fill in each blank in the following passage."	  
]
let exercises = [
    {
		"group": 0,
        "question": "1. I will never forget that terrible day when I was bullied by my classmates. I (1) __________ a book from Mai - one of my peers.",
        "options": ["A. borrowed", "B. gave", "C. bought", "D. lent"],
        "answer": "A. borrowed",
        "explanation": "Theo ngữ cảnh của câu chuyện, 'borrowed' (mượn) là từ phù hợp nhất, vì sau đó có cụm 'the original lender' (người cho mượn ban đầu)."
    },
    {
        "question": "2. Without much (2) __________ I gave the book to Linh, who then gave it back to Mai after finishing it.",
        "options": ["A. listening", "B. looking", "C. worrying", "D. thinking"],
        "answer": "D. thinking",
        "explanation": "Cụm 'Without much thinking' (Không suy nghĩ nhiều) chỉ hành động thiếu thận trọng khi cho Linh mượn sách."
    },
    {
        "question": "3. Mai took the book from Linh but still asked me to (3) __________ it.",
        "options": ["A. keep", "B. return", "C. lend", "D. give away"],
        "answer": "B. return",
        "explanation": "Mai là người cho mượn ban đầu nên cô ấy yêu cầu người mượn phải 'return' (trả lại) sách."
    },
    {
        "question": "4. I felt (4) __________ and almost burst into tears.",
        "options": ["A. helpless", "B. hopeful", "C. amazed", "D. frightened"],
        "answer": "A. helpless",
        "explanation": "Cảm giác tuyệt vọng, không làm được gì ('helpless') là phù hợp với việc sắp khóc ('almost burst into tears') do bị bắt nạt."
    },
    {
        "question": "5. I decided (5) __________ our form teacher.",
        "options": ["A. telling", "B. to tell", "C. tell", "D. told"],
        "answer": "B. to tell",
        "explanation": "Cấu trúc đúng sau động từ 'decided' là 'decided + to V' (quyết định làm gì đó)."
    },
    {
        "question": "6. After listening to my whole story, our form teacher asked Mai: “Mai, do you really want (6) __________ copy of the same book?”.",
        "options": ["A. other", "B. a", "C. another", "D. some"],
        "answer": "C. another",
        "explanation": "Giáo viên hỏi Mai có muốn 'another' (một cái khác) - ý chỉ cô ấy đang đòi cuốn sách đã mượn."
    },
    {
        "question": "7. Mai got it out from her (7) __________ and gave it back to Linh.",
        "options": ["A. backpack", "B. suitcase", "C. wallet", "D. purse"],
        "answer": "A. backpack",
        "explanation": "Học sinh thường mang sách trong 'backpack' (ba lô). 'Wallet' (ví), 'purse' (túi xách nhỏ), và 'suitcase' (va li) không phù hợp."
    },
    {
		"group": 0,
        "question": "8. I could finally return it to Mai, who then felt (8) __________ about her trick.",
        "options": ["A. happy", "B. ashamed", "C. excited", "D. pleased"],
        "answer": "B. ashamed",
        "explanation": "Sau khi bị giáo viên phát hiện thủ đoạn, Mai cảm thấy 'ashamed' (xấu hổ), phù hợp với ngữ cảnh bị kỷ luật gián tiếp."
    },
	 {
		 "group": 1,
        "question": "1. The course __________.",
        "options": ["A. was on the 10th June", "B. lasted 10 days", "C. lasted 15 days", "D. started on the 10th June"],
        "answer": "B. lasted 10 days",
        "explanation": "Đoạn văn mở đầu: 'I went to Singapore on my own for a ten-day summer course.' (Khóa học kéo dài 10 ngày)."
    },
    {
        "question": "2. The author had __________ in Singapore.",
        "options": ["A. a special day", "B. a touring trip", "C. a photo session", "D. English lessons"],
        "answer": "D. English lessons",
        "explanation": "Đoạn văn viết: 'Over the remaining days, we attended English lessons.' (Tác giả đã tham gia các bài học tiếng Anh)."
    },
    {
        "question": "3. In English lessons, the students __________.",
        "options": ["A. learnt grammar and reading", "B. worked on projects", "C. attended formal workshops", "D. learnt about Singapore’s culture"],
        "answer": "B. worked on projects",
        "explanation": "Đoạn văn viết: 'We attended English lessons. We worked on projects and culture workshops.'"
    },
    {
        "question": "4. Which of the following did they NOT do at the Discovery Centre?",
        "options": ["A. Got learning experiences.", "B. Bought souvenirs.", "C. Visited an interactive gallery.", "D. Saw the attraction."],
        "answer": "B. Bought souvenirs.",
        "explanation": "Họ mua quà lưu niệm ở Chinatown, không phải Discovery Centre. Tại Discovery Centre, họ được chiêm ngưỡng 'attraction and interactive gallery' và 'brilliant learning experiences' (A, C, D là có làm)."
    },
    {
        "question": "5. What does the author mean by “leaving my comfort zone”?",
        "options": ["A. getting away from parents", "B. getting to a place that is comfortable", "C. escaping a safe and comfortable situation", "D. experiencing something comfortable"],
        "answer": "A. getting away from parents",
        "explanation": "Trong ngữ cảnh này, 'leaving my comfort zone' (rời khỏi vùng an toàn) ám chỉ việc tự lập đi nước ngoài không có cha mẹ đi kèm ('being able to go without my parents')."
    },
    {
		"group": 1,
        "question": "6. The passage is about __________.",
        "options": ["A. the author's experiences on a summer course", "B. how the author got out of her comfort zone", "C. the author’s English class in Singapore", "D. special team-building activities in Singapore"],
        "answer": "A. the author's experiences on a summer course",
        "explanation": "Đây là tiêu đề bao quát nhất. Cả câu chuyện xoay quanh 'a ten-day summer course' và những trải nghiệm (team-building, học tiếng Anh, tham quan) trong suốt khóa học đó."
    },
	{
	"group": 2,	
    "question": "1. The passage is mainly about __________.",
    "options": [
      "A. the beauty of Ba Vi National Park",
      "B. a camping location at Ba Vi National Park",
      "C. the experience of the author at Ba Vi National Park",
      "D. the nature of Ba Vi National Park"
    ],
    "answer": "C. the experience of the author at Ba Vi National Park",
    "explanation": "Đoạn văn chủ yếu kể lại trải nghiệm của tác giả khi đi cắm trại tại Vườn Quốc gia Ba Vì."
  },
  {
    "question": "2. The teacher chose the location because it is __________.",
    "options": [
      "A. just on the outskirts of Ha Noi",
      "B. to the west of Ha Noi",
      "C. very far from Ha Noi",
      "D. a famous mountainous ecological tourism centre"
    ],
    "answer": "D. a famous mountainous ecological tourism centre",
    "explanation": "Trong đoạn văn có nêu rõ lý do giáo viên chọn địa điểm này là vì nó nổi tiếng là trung tâm du lịch sinh thái miền núi."
  },
  {
    "question": "3. The park is home to hundreds of wildlife species, so students can __________.",
    "options": [
      "A. take a lot of amazing photos",
      "B. explore a real natural habitat",
      "C. avoid pollution",
      "D. see wild animals easily"
    ],
    "answer": "B. explore a real natural habitat",
    "explanation": "Đoạn văn nói rằng công viên là nơi sinh sống của nhiều loài động vật hoang dã, nên học sinh có cơ hội khám phá môi trường sống tự nhiên."
  },
  {
    "question": "4. The students were tired because __________.",
    "options": [
      "A. they didn’t eat breakfast",
      "B. they set off too early",
      "C. the road was a little bumpy and tricky",
      "D. the itinerary was difficult to follow"
    ],
    "answer": "C. the road was a little bumpy and tricky",
    "explanation": "Nguyên văn: 'because the road was a bit bumpy and tricky, we were tired when we arrived.'"
  },
  {
    "question": "5. At the camping site, the students did NOT __________.",
    "options": [
      "A. make a campfire",
      "B. sing and dance together",
      "C. have team-building activities",
      "D. perform a tribal dance"
    ],
    "answer": "D. perform a tribal dance",
    "explanation": "Trong bài có nhắc đến đốt lửa trại, ca hát, nhảy múa và hoạt động team-building, nhưng không hề nhắc đến nhảy múa của bộ tộc."
  },
  {
    "question": "6. How did they go to Thuong Temple?",
    "options": [
      "A. They walked up to the temple.",
      "B. They climbed up the cliff.",
      "C. They went by mountain bike.",
      "D. They rode cable cars."
    ],
    "answer": "A. They walked up to the temple.",
    "explanation": "Trong văn bản: 'On the next day, we went trekking to Thuong Temple' → trekking = đi bộ đường dài."
  }
];