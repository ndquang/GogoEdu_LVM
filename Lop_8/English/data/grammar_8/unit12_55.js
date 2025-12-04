let unit = "12";
let title = "Life on other planets";
let groups = [
	  "Pronunciation",	    
	  "Choose the correct answer A, B, C, or D to complete the following sentence.",
	  "Circle A, B, C, or D to indicate the sentence that is closest in meaning to the sentence given.",	  
	  "Speaking",
	  "Writing"
]
let  exercises=  [
	  {
    "group": 1,
    "question": "We tried to __________ the aliens and managed to stop them from invading our planet.",
    "options": ["A. oppose", "B. support", "C. strike", "D. struggle"],
    "answer": "A. oppose",
    "explanation": "'Oppose' (chống lại, phản đối) là động từ phù hợp nhất để diễn tả hành động ngăn chặn cuộc xâm lăng."
  },
  {    
    "question": "Animals are living ___________; therefore, we should not hurt them needlessly.",
    "options": ["A. types", "B. aliens", "C. creatures", "D. breeds"],
    "answer": "C. creatures",
    "explanation": "'Creatures' (sinh vật) là danh từ phù hợp nhất để chỉ các loài động vật, thể hiện sự sống của chúng."
  },
  {   
    "question": "There is a strong __________ that it will rain this afternoon.",
    "options": ["A. possibility", "B. occasion", "C. trace", "D. opportunity"],
    "answer": "A. possibility",
    "explanation": "'Possibility' (khả năng) là danh từ phù hợp để diễn tả rằng có một khả năng cao trời sẽ mưa."
  },
  {   
    "question": "It's exciting to discover __________ of earlier civilizations.",
    "options": ["A. chances", "B. opportunities", "C. possibilities", "D. traces"],
    "answer": "D. traces",
    "explanation": "'Traces' (dấu vết) là danh từ phù hợp để chỉ những gì còn sót lại của các nền văn minh cổ đại."
  },
  {    
    "question": "What is the most __________ planet for life in our solar system?",
    "options": ["A. encouraging", "B. promising", "C. habitable", "D. possible"],
    "answer": "C. habitable",
    "explanation": "'Habitable' (có thể sống được) là tính từ chính xác để miêu tả một hành tinh có điều kiện thích hợp cho sự sống."
  },
   {    
    "question": "Nick isn't here at the moment. Can I __________ a message?",
    "options": ["A. take", "B. get", "C. leave", "D. give"],
    "answer": "C. leave",
    "explanation": "Cụm từ 'leave a message' (để lại lời nhắn) là cấu trúc chính xác khi muốn nhắn lại cho ai đó."
  },
  {    
    "question": "We watched a __________ broadcast of the president's speech.",
    "options": ["A. live", "B. living", "C. liveable", "D. alive"],
    "answer": "A. live",
    "explanation": "'Live broadcast' (truyền hình trực tiếp) là cụm từ chính xác để miêu tả một chương trình được phát sóng cùng lúc với sự kiện."
  },
  {    
    "question": "The scientists said that they were searching for a habitable planet __________.",
    "options": ["A. at the moment", "B. now", "C. then", "D. at present"],
    "answer": "C. then",
    "explanation": "Trong câu tường thuật, các trạng từ chỉ thời gian như 'now' phải được đổi thành 'then' khi động từ tường thuật ở quá khứ."
  },
  {    
    "question": "We use face __________ systems to identify people in photos, videos, and in real time.",
    "options": ["A. identification", "B. recognition", "C. reminder", "D. confirmation"],
    "answer": "B. recognition",
    "explanation": "'Face recognition' (nhận dạng khuôn mặt) là thuật ngữ chính xác để chỉ công nghệ xác định danh tính con người qua khuôn mặt."
  },
  {    
    "question": "I think we will find another habitable planet __________ 15 years.",
    "options": ["A. on", "B. for", "C. by", "D. in"],
    "answer": "D. in",
    "explanation": "Giới từ 'in' được dùng để chỉ một khoảng thời gian trong tương lai, có nghĩa là 'sau 15 năm nữa'."
  },
  {    
    "question": "Your name comes right after __________ on the list.",
    "options": ["A. me", "B. my", "C. mine", "D. I"],
    "answer": "C. mine",
    "explanation": "'Mine' là đại từ sở hữu, dùng để thay thế cho 'my name' và đứng một mình trong câu."
  },
  {    
    "question": "The teacher __________ me that I should spend more time studying science subjects.",
    "options": ["A. said", "B. told", "C. asked", "D. spoke"],
    "answer": "B. told",
    "explanation": "Động từ 'told' là động từ tường thuật phù hợp nhất, có thể đi kèm với tân ngữ 'me' để diễn tả lời khuyên."
  },
  {
    "group": 1,
    "question": "They did a series of laboratory __________ on human sleep patterns in 1960s.",
    "options": ["A. experiments", "B. assignments", "C. examinations", "D. discoveries"],
    "answer": "A. experiments",
    "explanation": "'Laboratory experiments' (các thí nghiệm trong phòng thí nghiệm) là cụm danh từ chính xác, phù hợp với ngữ cảnh nghiên cứu."
  },
   {
    "group": 3,
    "question": "A: Do you think your brother will follow a career in business?\nB: __________",
    "options": ["A. I doubt it. He has a romantic view of life.", "B. Never mind, he will follow it.", "C. He doesn't know for sure.", "D. I think so. He is too unrealistic for it."],
    "answer": "A. I doubt it. He has a romantic view of life.",
    "explanation": "'I doubt it.' là cách diễn đạt sự hoài nghi về một dự đoán. Câu sau đưa ra lý do hợp lý cho nhận định đó."
  },
  {
    "question": "A: Manchester United are going to be the champions this year.\nB: __________",
    "options": ["A. You're very good at that. Congratulations!", "B. You're kidding. They lost all the matches these last two months.", "C. I don't know for sure. It looks like you put a lot of work into this.", "D. It's very unlikely. Nothing can stop them now."],
    "answer": "B. You're kidding. They lost all the matches these last two months.",
    "explanation": "'You're kidding.' là cách nói thể hiện sự không tin. Câu sau đưa ra bằng chứng xác đáng để phản bác lại dự đoán."
  },
  {   
    "question": "A: Do you think we will live on another planet in the future?\nB: __________",
    "options": ["A. That's all right. We will live on another planet in the near future.", "B. I doubt it. There aren't any other planets that can support human life.", "C. Yes, there's a possibility that aliens may visit our planet one day.", "D. No, do you have evidence that UFOs landed on our planet?"],
    "answer": "B. I doubt it. There aren't any other planets that can support human life.",
    "explanation": "'I doubt it.' là cách nói trực tiếp thể hiện sự hoài nghi. Câu sau đưa ra lý do khoa học để ủng hộ quan điểm đó."
  },
  {    
    "question": "A: We lost almost all of our property in the flood last week.\nB: __________",
    "options": ["A. I thought you might.", "B. Good luck next time!", "C. I couldn't agree more.", "D. Oh, I'm sorry to hear that."],
    "answer": "D. Oh, I'm sorry to hear that.",
    "explanation": "'Oh, I'm sorry to hear that.' là cách diễn đạt sự cảm thông phù hợp nhất khi nghe tin xấu."
  },
  {   
    "question": "A: Will our football team win this afternoon?\nB: __________",
    "options": ["A. I'm not sure that he can play after his serious injury.", "B. I'm convinced that they will win after all the practice they did.", "C. I doubt it because our team played very well recently.", "D. I very much doubt it. They have many very good players now."],
    "answer": "B. I'm convinced that they will win after all the practice they did.",
    "explanation": "'I'm convinced that...' là cách nói thể hiện sự tin tưởng vào một dự đoán. Câu sau đưa ra lý do hợp lý để củng cố niềm tin đó."
  },
    {    
    "question": "A: Everyone must be here at 11:00 a.m. for the party, and ...\nB: __________",
    "options": ["A. That's great news. I think we should have a party.", "B. Sorry to interrupt, but I think we should be here earlier.", "C. I couldn't help talking about having a party."],
    "answer": "B. Sorry to interrupt, but I think we should be here earlier.",
    "explanation": "'Sorry to interrupt, but...' là cách ngắt lời lịch sự để đưa ra ý kiến hoặc đề xuất khác."
  },
  {   
    "question": "A: I've won a scholarship to the US.\nB: __________",
    "options": ["A. I'm certain about it. You worked very hard last month.", "B. Hold on. How can I get one too?", "C. Congratulations. That's very good news."],
    "answer": "C. Congratulations. That's very good news.",
    "explanation": "'Congratulations.' là lời chúc mừng phù hợp nhất khi nghe tin tức tốt lành và thành công của người khác."
  },
  {   
    "question": "A: Do you think that Ann will become the president of our country?\nB: __________",
    "options": ["A. I'm not sure. We have to wait for the election results.", "B. I doubt it. She will definitely win the elections.", "C. Yes, definitely. I'm uncertain that she will win the elections."],
    "answer": "A. I'm not sure. We have to wait for the election results.",
    "explanation": "'I'm not sure' là cách trả lời trung lập và hợp lý khi chưa có đủ thông tin để đưa ra phán đoán."
  },
  {    
    "question": "A: Turn off the electricity and remove the light bulb. Then, ...\nB: __________",
    "options": ["A. Excuse me! I didn't see you there.", "B. Hold on. Can you repeat that, please?", "C. Pardon? Can you spell that again, please?"],
    "answer": "B. Hold on. Can you repeat that, please?",
    "explanation": "'Hold on. Can you repeat that, please?' là cách nói lịch sự để yêu cầu người khác nhắc lại lời hướng dẫn hoặc thông tin."
  },
  {
    "group": 3,
    "question": "A: Is yoga hard for beginners?\nB: __________",
    "options": ["A. No, it's a piece of cake.", "B. Yes, it's a piece of cake for beginners.", "C. Well, it's definitely a piece of cake."],
    "answer": "A. No, it's a piece of cake.",
    "explanation": "'Is it hard?' là câu hỏi về độ khó. 'No, it's a piece of cake.' (Không, nó rất dễ) là câu trả lời trực tiếp và phù hợp nhất."
  }
]