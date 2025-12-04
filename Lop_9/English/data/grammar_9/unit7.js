let unit = "7";
let title = "Vietnamese lifestyle: Then and Now";
let groups = [
	  "Pronunciation",
	  "Choose the correct answers A,B,C, or D to complete each of the sentences",
      "Choose the best answers to complete the sentences.",
	  "Choose the sentence that is best written from the words/phrases given.",	  	  
	  "Speaking."
]
let exercises = [
  {
    "group": groups[0],
    "question": "Choose the word that has a different stress pattern.",
    "options": ["A. admire", "B. explore", "C. visit", "D. support"],
    "answer": "C. visit",
    "explanation": "Các từ 'admire' (ad-MIRE), 'explore' (ex-PLORE), 'support' (sup-PORT) có trọng âm rơi vào âm tiết thứ hai. Riêng từ 'visit' (VIS-it) có trọng âm rơi vào âm tiết thứ nhất."
  },
  {
    "question": "Choose the word that has a different stress pattern.",
    "options": ["A. landscape", "B. possess", "C. flora", "D. carry"],
    "answer": "B. possess",
    "explanation": "Các từ 'landscape' (LAND-scape), 'flora' (FLO-ra), 'carry' (CAR-ry) có trọng âm rơi vào âm tiết thứ nhất. Riêng từ 'possess' (pos-SESS) có trọng âm rơi vào âm tiết thứ hai."
  },
  {
    "question": "Choose the word that has a different stress pattern.",
    "options": ["A. majestic", "B. recognise", "C. encourage", "D. discover"],
    "answer": "B. recognise",
    "explanation": "Các từ 'majestic' (ma-JES-tic), 'encourage' (en-COU-rage), 'discover' (dis-CO-ver) có trọng âm rơi vào âm tiết thứ hai. Riêng từ 'recognise' (RE-cog-nise) có trọng âm rơi vào âm tiết thứ nhất."
  },
  {    
    "question": "Choose the word that has a different stress pattern.",
    "options": ["A. location", "B. paradise", "C. natural", "D. tropical"],
    "answer": "A. location",
    "explanation": "Các từ 'paradise' (PA-ra-dise), 'natural' (NA-tu-ral), 'tropical' (TRO-pi-cal) có trọng âm rơi vào âm tiết thứ nhất. Riêng từ 'location' (lo-CA-tion) có trọng âm rơi vào âm tiết thứ hai."
  },
  {
    "group": groups[0],
    "question": "Choose the word that has a different stress pattern.",
    "options": ["A. magnificent", "B. diversity", "C. sustainable", "D. hesitation"],
    "answer": "D. hesitation",
    "explanation": "Các từ 'magnificent' (mag-NI-fi-cent), 'diversity' (di-VER-si-ty), 'sustainable' (sus-TAIN-a-ble) có trọng âm rơi vào âm tiết thứ hai. Riêng từ 'hesitation' (he-si-TA-tion) có trọng âm rơi vào âm tiết thứ ba (trước hậu tố -tion)."
  },
  {
    "group": groups[1],
    "question": "The major __________ of the Galapagos Islands is its unique and fearless animals, such as sea lions, huge tortoises, and different bird species.",
    "options": ["A. attract", "B. attractive", "C. attraction", "D. attractively"],
    "answer": "C. attraction",
    "explanation": "Vị trí cần một danh từ để làm chủ ngữ cho câu. 'Attraction' (điểm thu hút) là danh từ phù hợp về cả ngữ pháp và ngữ nghĩa."
  },
  {    
    "question": "Every one of us has made a positive __________ to the overall success of the project.",
    "options": ["A. contribute", "B. contribution", "C. contributor", "D. contributing"],
    "answer": "B. contribution",
    "explanation": "Câu này cần một danh từ để đi sau tính từ 'positive'. Cụm từ cố định 'make a contribution to' (đóng góp vào) là chính xác."
  },
  {    
    "question": "My uncle is an active __________ of the local fauna and flora preservation scheme.",
    "options": ["A. supporter", "B. support", "C. supportive", "D. supported"],
    "answer": "A. supporter",
    "explanation": "Cụm từ 'an active...' cần một danh từ chỉ người. 'Supporter' (người ủng hộ) là danh từ phù hợp với ngữ nghĩa của câu."
  },
  {
    "question": "There has been a __________ increase in the number of foreign tourists to Ha Long Bay, Viet Nam.",
    "options": ["A. signify", "B. significantly", "C. significance", "D. significant"],
    "answer": "D. significant",
    "explanation": "Vị trí cần một tính từ để bổ nghĩa cho danh từ 'increase'. 'Significant' (đáng kể) là tính từ phù hợp."
  },
  {	
    "question": "The island has a very beautiful beach, but sadly it is not easily __________.",
    "options": ["A. access", "B. accessible", "C. inaccessible", "D. inaccessibly"],
    "answer": "B. accessible",
    "explanation": "Cấu trúc 'not easily + adj' cần một tính từ. 'Accessible' (có thể tiếp cận) là tính từ phù hợp, mang nghĩa hòn đảo không dễ để tiếp cận."
  },
    {
    
    "question": "Han asked me __________ my mum worked from home those days.",
    "options": ["A. where", "B. when", "C. whether", "D. what"],
    "answer": "C. whether",
    "explanation": "Đây là câu tường thuật cho một câu hỏi Yes/No. Trong câu tường thuật loại này, ta dùng 'whether' để dẫn dắt mệnh đề, thay cho 'if'."
  },
  {
    
    "question": "He looked so funny; we couldn't help __________ at him.",
    "options": ["A. laugh", "B. to laugh", "C. laughed", "D. laughing"],
    "answer": "D. laughing",
    "explanation": "Cấu trúc cố định 'can't help + V-ing' có nghĩa là 'không thể nhịn được, không thể kiềm chế được việc gì đó'."
  },
  {    
    "question": "She __________ slightly before agreeing to go onto the unoccupied island with them.",
    "options": ["A. hesitated", "B. thought", "C. occurred", "D. accessed"],
    "answer": "A. hesitated",
    "explanation": "Động từ 'hesitate' (do dự, ngần ngại) miêu tả hành động tạm dừng hoặc lưỡng lự trước khi đưa ra quyết định."
  },
  {   
    "question": "The project to protect the __________ of this national park will create more jobs for local residents.",
    "options": ["A. diversity", "B. mixture", "C. difference", "D. complex"],
    "answer": "A. diversity",
    "explanation": "Trong ngữ cảnh công viên quốc gia, 'diversity' (sự đa dạng) là từ phù hợp nhất để chỉ sự đa dạng sinh học (đa dạng các loài động thực vật)."
  },
  {    
    "question": "Virtual Reality aims to give us artificial worlds to __________ outside normal space and time.",
    "options": ["A. possess", "B. explore", "C. support", "D. save"],
    "answer": "B. explore",
    "explanation": "Động từ 'explore' (khám phá) rất phù hợp với ngữ cảnh 'thế giới ảo' (artificial worlds) mà công nghệ thực tế ảo mang lại."
  },
  {
    "group" : groups[1],
    "question": "She asked the children __________ listening to her.",
    "options": ["A. if were they", "B. whether they are", "C. if they were", "D. whether we were"],
    "answer": "C. if they were",
    "explanation": "Đây là câu tường thuật. Động từ chính 'asked' ở quá khứ, nên động từ trong mệnh đề sau cũng phải lùi về quá khứ ('were'). 'If they were' là cấu trúc chính xác."
  },
   {
     "group" : groups[4],
    "question": "David: Can I go with you to the Folk Dance Festival?\nHuong: __________",
    "options": ["A. No, never.", "B. Yes. Why don't you?", "C. Sure. Let's go.", "D. Certainly. You can't."],
    "answer": "C. Sure. Let's go.",
    "explanation": "Câu C là một lời đồng ý nhiệt tình và tích cực, phù hợp với lời đề nghị của David."
  },
  {
    "question": "Mai: Can I eat this hamburger, Mum?\nMum: __________",
    "options": ["A. It's still fresh.", "B. No, you can't. It's not cooked yet.", "C. Yes, we can eat it.", "D. This hamburger isn't delicious."],
    "answer": "C. Yes, we can eat it.",
    "explanation": "Đây là một câu hỏi xin phép. Đáp án C là lời đồng ý trực tiếp và đơn giản nhất."
  },
  {
    "question": "Tam: May I go out for a few minutes, teacher?\nTeacher: __________",
    "options": ["A. Sure, you can.", "B. No, you mayn't.", "C. Yes, you should.", "D. No, thanks."],
    "answer": "A. Sure, you can.",
    "explanation": "'May I...' là cách hỏi xin phép lịch sự. 'Sure, you can.' là câu trả lời phổ biến và lịch sự để đồng ý."
  },
  {    
     "group" : groups[4],
    "question": "Students: __________\nTeacher: Sure. It's a UNESCO World Heritage Site.",
    "options": ["A. Can we do a project on the Shilin Stone Forest?", "B. What's the Shilin stone Forest in Kunming?", "C. Where's the Shilin stone Forest?", "D. Do we have to go to the Shilin Stone Forest?"],
    "answer": "A. Can we do a project on the Shilin Stone Forest?",
    "explanation": "Lời đáp 'Sure.' của giáo viên cho thấy đây là một câu hỏi xin phép. Câu A là câu hỏi xin phép phù hợp nhất với lời đáp sau đó của giáo viên."
  },
   {
    "group" : groups[3],
    "question": "you / have / passport / you / now / ?",
    "options": ["A. Are you having your passport with you now?", "B. Do you have your passport with you now?", "C. You have a passport for you now?", "D. Can you have a passport with you now?"],
    "answer": "B. Do you have your passport with you now?",
    "explanation": "Câu hỏi về sự sở hữu ở hiện tại sử dụng cấu trúc 'Do you have...?' là chính xác và phổ biến nhất."
  },
  {    
    "question": "we / go / Mount Fansipan / train / .",
    "options": ["A. I wanted to know whether we could go to Mount Fansipan by train.", "B. We said whether we could go to Mount Fansipan by train.", "C. I wondered where we could go to Mount Fansipan by train.", "D. We asked could we go to Mount Fansipan on a train."],
    "answer": "A. I wanted to know whether we could go to Mount Fansipan by train.",
    "explanation": "Đây là câu tường thuật dạng nghi vấn. Câu A có cấu trúc ngữ pháp 'I wanted to know whether + S + V-past' hoàn toàn chính xác."
  },
  {   
    "question": "hilltop / get / good / view / our village / .",
    "options": ["A. The hilltop can make our village views better.", "B. On the hilltop, our village can be viewed very well.", "C. From the hilltop, we can get a better view of our village.", "D. From the hilltop, our village can get a better view."],
    "answer": "B. On the hilltop, our village can be viewed very well.",
    "explanation": "Câu này được viết theo cấu trúc bị động (passive voice) một cách chính xác, diễn tả rằng ngôi làng có thể được nhìn thấy rất rõ từ trên đỉnh đồi."
  },
  {
    "question": "clown / look / funny / can't help / burst out / laugh / .",
    "options": ["A. The clown looks so funny, so we can't help burst out laughing.", "B. Clowns looked so funny, and we can't help burst out laughing.", "C. The clown looked funny, and we couldn't help bursting out laughing.", "D. A clown looks so funny that we can't help to burst out laughing."],
    "answer": "C. The clown looked funny, and we couldn't help bursting out laughing.",
    "explanation": "Cấu trúc cố định 'couldn't help + V-ing' là chính xác. Cả câu đều được chia ở thì quá khứ đơn một cách hoàn hảo."
  },
  {
    "group" : groups[3],
    "question": "guard / not permit / enter / cave / without / tour guide / .",
    "options": ["A. A guard does not permit you to enter the cave without a tour guide.", "B. The guard does not permit you enter the cave without a tour guide.", "C. The guard did not permit you entering the cave without a tour guide.", "D. The guard will not permit you to enter the cave without a tour guide."],
    "answer": "A. A guard does not permit you to enter the cave without a tour guide.",
    "explanation": "Cấu trúc 'permit + object + to-V' là cấu trúc chuẩn và phổ biến để diễn tả 'cho phép ai đó làm gì'."
  }
];