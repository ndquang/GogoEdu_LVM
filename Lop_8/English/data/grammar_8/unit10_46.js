let unit = "10";
let title = "Communication in the future";
let groups = [
	  "Pronunciation",	    
	  "Choose the correct answer A, B, C, or D to complete the following sentence.",
	  "Choose the option which is CLOSEST in meaning to the underlined phrase in each sentence.",	  
	  "Speaking",
	  "Writing"
]
let  exercises=  [
  {
    "group": 0,
    "question": "Choose one word (A, B, C, or D) whose stress pattern is different from the others.",
    "options": ["A. trainee", "B. between", "C. Chinese", "D. seafood"],
    "answer": "D. seafood",
    "explanation": "Các từ 'trainee' (trai-NEE), 'between' (be-TWEEN), 'Chinese' (Chi-NESE) có trọng âm rơi vào âm tiết thứ hai. Riêng từ 'seafood' (SEA-food) là danh từ ghép, trọng âm rơi vào âm tiết thứ nhất."
  },
  {    
    "question": "Choose one word (A, B, C, or D) whose stress pattern is different from the others.",
    "options": ["A. engineer", "B. wonderful", "C. refugee", "D. referee"],
    "answer": "B. wonderful",
    "explanation": "Các từ 'engineer' (en-gi-NEER), 'refugee' (refu-GEE), 'referee' (refer-EE) có trọng âm rơi vào âm tiết cuối cùng. Riêng từ 'wonderful' (WON-der-ful) có trọng âm rơi vào âm tiết thứ nhất."
  },
  {   
    "question": "Choose one word (A, B, C, or D) whose stress pattern is different from the others.",
    "options": ["A. Vietnamese", "B. guarantee", "C. Bhutanese", "D. committee"],
    "answer": "D. committee",
    "explanation": "Các từ 'Vietnamese' (Viet-na-MESE), 'guarantee' (guaran-TEE), 'Bhutanese' (Bhu-ta-NESE) có trọng âm rơi vào âm tiết cuối cùng. Riêng từ 'committee' (co-MMI-ttee) có trọng âm rơi vào âm tiết thứ hai."
  },
  {   
    "question": "Choose one word (A, B, C, or D) whose stress pattern is different from the others.",
    "options": ["A. degree", "B. obese", "C. coffee", "D. Maltese"],
    "answer": "C. coffee",
    "explanation": "Các từ 'degree' (de-GREE), 'obese' (o-BESE), 'Maltese' (Mal-TESE) có trọng âm rơi vào âm tiết thứ hai. Riêng từ 'coffee' (COF-fee) có trọng âm rơi vào âm tiết thứ nhất."
  },
  {
    "group": 0,
    "question": "Choose one word (A, B, C, or D) whose stress pattern is different from the others.",
    "options": ["A. employee", "B. Japanese", "C. Taiwanese", "D. absentee"],
    "answer": "B. Japanese",
    "explanation": "Các từ 'employee' (em-plo-YEE), 'Taiwanese' (Taiwa-NESE), 'absentee' (ab-sen-TEE) có trọng âm rơi vào âm tiết cuối cùng. Riêng từ 'Japanese' (Ja-pa-NESE) có trọng âm rơi vào âm tiết thứ ba."
  },
   {
    "group": 1,
    "question": "Please leave a __________ on my phone if you are unable to reach me.",
    "options": ["A. message", "B. call", "C. letter", "D. note"],
    "answer": "A. message",
    "explanation": "'Leave a message' (để lại lời nhắn) là cụm từ chính xác và phổ biến khi không thể liên lạc với ai đó qua điện thoại."
  },
  {   
    "question": "Many people think __________ will replace human translators in the future.",
    "options": ["A. voice messages", "B. translation machines", "C. dictionaries", "D. emojis"],
    "answer": "B. translation machines",
    "explanation": "'Translation machines' (máy dịch thuật) là công nghệ được nhiều người tin rằng sẽ thay thế con người trong công việc dịch thuật."
  },
  {   
    "question": "Parents should pay due attention to their children's use of __________.",
    "options": ["A. social networking sites", "B. real time", "C. telepathy", "D. holography"],
    "answer": "A. social networking sites",
    "explanation": "'Social networking sites' (mạng xã hội) là môi trường mà cha mẹ cần quan tâm và giám sát khi con cái sử dụng."
  },
  {    
    "question": "We made a(n) __________ to discuss our project.",
    "options": ["A. group call", "B. social network", "C. emoji", "D. family member"],
    "answer": "A. group call",
    "explanation": "'Make a group call' (thực hiện cuộc gọi nhóm) là cách nói phù hợp khi cần thảo luận với nhiều người cùng lúc."
  },
  {    
    "question": "I think there will be no language __________ in the future. People will speak a common language.",
    "options": ["A. use", "B. development", "C. skill", "D. barrier"],
    "answer": "D. barrier",
    "explanation": "'Language barrier' (rào cản ngôn ngữ) là một cụm từ cố định, diễn tả khó khăn trong giao tiếp do không cùng ngôn ngữ."
  },
    {   
    "question": "She sent me a(n) __________ message to ask about the homework.",
    "options": ["A. warning", "B. heartfelt", "C. instant", "D. strong"],
    "answer": "C. instant",
    "explanation": "'Instant message' (tin nhắn tức thời) là cụm từ chỉ một loại tin nhắn được gửi và nhận ngay lập tức."
  },
  {    
    "question": "If __________ becomes popular in the future, it will save communicators a lot of travelling time and money.",
    "options": ["A. private messaging", "B. holography", "C. language barrier", "D. translation"],
    "answer": "B. holography",
    "explanation": "'Holography' (công nghệ ảnh ba chiều) là công nghệ tiềm năng cho phép giao tiếp mà không cần di chuyển, giúp tiết kiệm thời gian và tiền bạc."
  },
  {
    "group": 1,
    "question": "Video conferencing is a technology that allows __________ communication.",
    "options": ["A. private", "B. social", "C. real-time", "D. smartphone"],
    "answer": "C. real-time",
    "explanation": "'Real-time communication' (giao tiếp thời gian thực) là khả năng trò chuyện tức thì, là một đặc điểm cốt lõi của công nghệ hội nghị truyền hình."
  },
    {
    "group": 2,
    "question": "[Hold on!] I think this isn't the right road. Let's turn back.",
    "options": ["A. Continue!", "B. Move back!", "C. Keep to the right!", "D. Wait!"],
    "answer": "D. Wait!",
    "explanation": "'Hold on!' là một cụm từ thông dụng có nghĩa là 'Chờ một chút!'. 'Wait!' là từ đồng nghĩa chính xác."
  },
  {    
    "question": "She can do telepathy? [You're kidding!] It's impossible.",
    "options": ["A. I don't believe it.", "B. You're a kid.", "C. She can do telepathy.", "D. It doesn't work."],
    "answer": "A. I don't believe it.",
    "explanation": "'You're kidding!' là một thành ngữ được dùng để bày tỏ sự không tin hoặc ngạc nhiên. 'I don't believe it.' là câu gần nghĩa nhất."
  },
  {    
    "question": "Learning to speak English is not [a piece of cake]. It requires lots of practice and hard work.",
    "options": ["A. delicious", "B. easy", "C. fun", "D. hard"],
    "answer": "D. hard",
    "explanation": "'Not a piece of cake' là một thành ngữ có nghĩa là 'không dễ dàng'. 'Hard' (khó) là từ gần nghĩa nhất."
  },
  {   
    "question": "The picture is so large that it doesn't fit the computer screen. Can you [zoom out of it]?",
    "options": ["A. make it smaller", "B. make it bigger", "C. make it sharper", "D. make it stronger"],
    "answer": "A. make it smaller",
    "explanation": "'Zoom out' có nghĩa là 'thu nhỏ' một hình ảnh. 'Make it smaller' là câu gần nghĩa nhất."
  },
  {
    "group": 2,
    "question": "Kien is in a bad mood today.\nJack: [That's exactly what I feel]. He got angry with me for nothing this morning.",
    "options": ["A. What do you mean?", "B. Can you repeat it?", "C. He said that to me this morning.", "D. I completely agree with you."],
    "answer": "D. I completely agree with you.",
    "explanation": "'That's exactly what I feel' là cách diễn đạt sự đồng tình mạnh mẽ. 'I completely agree with you' là câu đồng nghĩa chính xác nhất."
  },
    {
    "group": 3,
    "question": "A: Ms Mai is an excellent teacher. Her lessons are always interesting.\nB: __________",
    "options": ["A. I agree with Ms Mai.", "B. That's exactly how I feel.", "C. She teaches us a lot.", "D. I don't think so."],
    "answer": "B. That's exactly how I feel.",
    "explanation": "'That's exactly how I feel.' là cách diễn đạt sự đồng tình mạnh mẽ một cách tự nhiên."
  },
  {    
    "question": "A: We'll turn right at the traffic light and ...\nB: __________",
    "options": ["A. Thank you for your help.", "B. Hold on. Google map says that we must turn left.", "C. I think we should go straight.", "D. Are we going somewhere else?"],
    "answer": "B. Hold on. Google map says that we must turn left.",
    "explanation": "'Hold on' là cụm từ dùng để ngắt lời, và câu này đưa ra thông tin sửa lỗi một cách chính xác và hợp lý."
  },
  {   
    "question": "A: All groups must submit their school fair plan to me by Thursday so I can ...\nB: __________",
    "options": ["A. Sorry for interrupting, but I think the deadline is Friday.", "B. The school fair is a good idea.", "C. I already sent it.", "D. What is a school fair?"],
    "answer": "A. Sorry for interrupting, but I think the deadline is Friday.",
    "explanation": "Đây là cách ngắt lời lịch sự để hỏi lại thông tin về thời hạn nộp bài."
  },
  {    
    "question": "A: Nick is going to be the new class monitor next semester!\nB: __________",
    "options": ["A. You're excellent. Congratulations!", "B. You're kidding. He'll be in America then.", "C. I don't think he's good enough.", "D. I'm happy for him."],
    "answer": "B. You're kidding. He'll be in America then.",
    "explanation": "'You're kidding' được dùng để thể hiện sự ngạc nhiên và không tin. Câu sau đưa ra lý do xác đáng cho sự ngạc nhiên đó."
  },
  {
    "group": 3,
    "question": "A: Is it hard to cook French food?\nB: __________",
    "options": ["A. It's not a piece of cake if you are an inexperienced cook.", "B. Yes, anyone can do it.", "C. It's delicious.", "D. I don't know."],
    "answer": "A. It's not a piece of cake if you are an inexperienced cook.",
    "explanation": "'Not a piece of cake' là thành ngữ có nghĩa là 'không dễ dàng'. Đây là câu trả lời chi tiết và phù hợp nhất cho câu hỏi về độ khó."
  }
]