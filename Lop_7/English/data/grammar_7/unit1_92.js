let unit = "1";
let title = "Leisure Time";
let groups = [
	  "Pronunciation",	
      "Choose the correct answer A, B, C.",	  	  
	  "Speaking",
	  "Writing"
]
let  exercises=  [
 {
    "group": 0,
    "question": "Choose the word in which the underlined [a] part is pronounced differently.",
    "options": ["A. away", "B. around", "C. classmate"],
    "answer": "C. classmate",
    "explanation": "Phần gạch chân 'a' trong 'away' và 'around' được phát âm là /ə/. Riêng 'a' trong 'classmate' được phát âm là /æ/."
  },
  {    
    "question": "Choose the word in which the underlined [u] part is pronounced differently.",
    "options": ["A. umbrella", "B. focus", "C. under"],
    "answer": "B. focus",
    "explanation": "Phần gạch chân 'u' trong 'focus' được phát âm là /əʊ/. Trong khi đó, 'u' trong 'umbrella' và 'under' được phát âm là /ʌ/."
  },
  {
    "question": "Choose the word in which the underlined [er] part is pronounced differently.",
    "options": ["A. clever", "B. term", "C. germ"],
    "answer": "A. clever",
    "explanation": "Phần gạch chân 'er' trong 'clever' được phát âm là /ər/. Trong khi đó, 'er' trong 'term' và 'germ' được phát âm là /ɜː/."
  },
  {   
    "question": "Choose the word in which the underlined [o] part is pronounced differently.",
    "options": ["A. pronounce", "B. doctor", "C. collection"],
    "answer": "B. doctor",
    "explanation": "Phần gạch chân 'o' trong 'doctor' được phát âm là /ɒ/. Trong khi đó, 'o' trong 'pronounce' và 'collection' được phát âm là /ə/."
  },
  {
    "group": 0,
    "question": "Choose the word in which the underlined [ur] part is pronounced differently.",
    "options": ["A. surprise", "B. Thursday", "C. hurt"],
    "answer": "A. surprise",
    "explanation": "Phần gạch chân 'ur' trong 'surprise' được phát âm là /ə/. Trong khi đó, 'ur' trong 'Thursday' và 'hurt' được phát âm là /ɜː/."
  },
    {
    "group": 1,
    "question": "When water __________, it __________ from a liquid to a gas.",
    "options": ["A. boil; changes", "B. boils; change", "C. boils; changes"],
    "answer": "C. boils; changes",
    "explanation": "Đây là câu điều kiện loại 0, diễn tả một sự thật khoa học. Cả hai vế đều dùng thì hiện tại đơn, và động từ phải chia số ít vì chủ ngữ 'water' và 'it' là số ít."
  },
  {   
    "question": "My father __________ his hobby with me. He teaches me how to grow and take care of the flowers in our garden on Sundays.",
    "options": ["A. share", "B. shares", "C. sharing"],
    "answer": "B. shares",
    "explanation": "Câu này diễn tả một hành động thường xuyên (on Sundays), nên dùng thì hiện tại đơn. Chủ ngữ 'My father' là số ít, nên động từ 'share' phải thêm 's'."
  },
  {   
    "question": "__________ your mother __________ doing yoga?",
    "options": ["A. Do; enjoy", "B. Does; enjoys", "C. Does; enjoy"],
    "answer": "C. Does; enjoy",
    "explanation": "'Does' là trợ động từ đúng cho chủ ngữ số ít 'your mother'. Sau trợ động từ, động từ chính luôn ở dạng nguyên mẫu không chia."
  },
  {   
    "question": "My cooking lesson __________ at 9 a.m. every Saturday.",
    "options": ["A. starts", "B. start", "C. is starting"],
    "answer": "A. starts",
    "explanation": "'Every Saturday' là dấu hiệu của một hành động thường xuyên, có lịch trình. Vì chủ ngữ 'My cooking lesson' là số ít, động từ 'start' phải thêm 's'."
  },
  {
    "group": 1,
    "question": "My parents __________ jogging every day. They only do it three times a week.",
    "options": ["A. go", "B. don't go", "C. doesn't go"],
    "answer": "B. don't go",
    "explanation": "Câu này diễn tả một sự thật phủ định ở thì hiện tại đơn. Chủ ngữ 'My parents' là số nhiều, nên dùng trợ động từ 'don't'."
  },
   {
    "group": 2,
    "question": "Do you enjoy collecting teddy bears?",
    "options": ["A. Yes, I do it every day.", "B. Yes, very much."],
    "answer": "B. Yes, very much.",
    "explanation": "'Yes, very much.' là câu trả lời ngắn gọn, trực tiếp và phù hợp nhất cho câu hỏi về sở thích."
  },
  {    
    "question": "What do you like doing in your free time?",
    "options": ["A. I usually have lunch at 12.", "B. I like building dollhouses."],
    "answer": "B. I like building dollhouses.",
    "explanation": "Câu hỏi là về sở thích lúc rảnh rỗi. 'I like building dollhouses.' là câu trả lời trực tiếp về một sở thích cụ thể."
  },
  {    
    "question": "Do you like making models?",
    "options": ["A. No, I don't. But my brother loves it.", "B. No, I make paper flowers every day."],
    "answer": "A. No, I don't. But my brother loves it.",
    "explanation": "Câu trả lời này vừa phủ định trực tiếp, vừa cung cấp thêm thông tin liên quan, rất tự nhiên trong hội thoại."
  },
  {
    "question": "What does your brother like doing?",
    "options": ["A. He enjoys doing yoga a lot.", "B. He goes to school at 7 a.m."],
    "answer": "A. He enjoys doing yoga a lot.",
    "explanation": "Câu hỏi là về sở thích của anh/em trai. 'He enjoys doing yoga a lot.' là câu trả lời trực tiếp về một sở thích."
  },
  {
    "group": 2,
    "question": "Does your sister cook with you?",
    "options": ["A. Yes, she loves singing.", "B. Yes, she and I cook together in the evening."],
    "answer": "B. Yes, she and I cook together in the evening.",
    "explanation": "Câu trả lời này không chỉ khẳng định 'có' mà còn cung cấp thêm chi tiết về hoạt động, làm cho câu trả lời đầy đủ và tự nhiên hơn."
  }
  ] 

