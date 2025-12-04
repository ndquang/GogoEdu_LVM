let unit = "11";
let title = "Science and Technology";
let groups = [
	  "Pronunciation",	    
	  "Choose the correct answer A, B, C, or D to complete the following sentence.",
	  "Circle A, B, C, or D to indicate the sentence that is closest in meaning to the sentence given.",	  
	  "Speaking",
	  "Writing"
]
let  exercises=  [
	 {
    "group": 0,
    "question": "Choose the word whose stress pattern is different from the others.",
    "options": ["A. referee", "B. pioneer", "C. Vietnamese", "D. committee"],
    "answer": "D. committee",
    "explanation": "Các từ 'referee' (re-fe-REE), 'pioneer' (pi-o-NEER), 'Vietnamese' (Viet-na-MESE) có trọng âm rơi vào âm tiết thứ ba. Riêng từ 'committee' (co-MMI-ttee) có trọng âm rơi vào âm tiết thứ hai."
  },
  {    
    "question": "Choose the word whose stress pattern is different from the others.",
    "options": ["A. alien", "B. rocket", "C. exist", "D. crater"],
    "answer": "C. exist",
    "explanation": "Các từ 'alien' (A-li-en), 'rocket' (RO-cket), 'crater' (CRA-ter) có trọng âm rơi vào âm tiết thứ nhất. Riêng từ 'exist' (ex-IST) có trọng âm rơi vào âm tiết thứ hai."
  },
  {   
    "question": "Choose the word whose stress pattern is different from the others.",
    "options": ["A. gravity", "B. powerful", "C. telescope", "D. unhealthy"],
    "answer": "D. unhealthy",
    "explanation": "Các từ 'gravity' (GRA-vi-ty), 'powerful' (POW-er-ful), 'telescope' (TE-le-scope) có trọng âm rơi vào âm tiết thứ nhất. Riêng từ 'unhealthy' (un-HEALTH-y) có trọng âm rơi vào âm tiết thứ hai."
  },
  {
    "question": "Choose the word whose stress pattern is different from the others.",
    "options": ["A. social", "B. trainee", "C. private", "D. crater"],
    "answer": "B. trainee",
    "explanation": "Các từ 'social' (SO-cial), 'private' (PRI-vate), 'crater' (CRA-ter) có trọng âm rơi vào âm tiết thứ nhất. Riêng từ 'trainee' (trai-NEE) có trọng âm rơi vào âm tiết thứ hai."
  },
  {
    "group": 0,
    "question": "Choose the word whose stress pattern is different from the others.",
    "options": ["A. discovery", "B. unsuitable", "C. habitable", "D. identity"],
    "answer": "C. habitable",
    "explanation": "Các từ 'discovery' (dis-CO-ve-ry), 'unsuitable' (un-SUI-ta-ble), 'identity' (i-DEN-ti-ty) có trọng âm rơi vào âm tiết thứ hai. Riêng từ 'habitable' (HA-bi-ta-ble) có trọng âm rơi vào âm tiết thứ nhất."
  },
   {
    "group": 1,
    "question": "My teacher said that she __________ meet me next week.",
    "options": ["A. can", "B. will", "C. would", "D. must"],
    "answer": "C. would",
    "explanation": "Động từ tường thuật 'said' ở quá khứ, nên động từ trong mệnh đề sau phải lùi thì. 'Will' trong câu trực tiếp sẽ chuyển thành 'would' trong câu gián tiếp."
  },
  {    
    "question": "Minh told me that he often __________ his favourite pictures on Twitter.",
    "options": ["A. shared", "B. will share", "C. share", "D. sharing"],
    "answer": "A. shared",
    "explanation": "Động từ tường thuật 'told' ở quá khứ, nên động từ trong mệnh đề sau cũng cần được lùi thì về quá khứ đơn, 'shared'."
  },
  {   
    "question": "Mai said that she was reading a sci-fi book __________.",
    "options": ["A. at the moment", "B. now", "C. then", "D. yet"],
    "answer": "C. then",
    "explanation": "Trong câu tường thuật, trạng từ chỉ thời gian 'now' (bây giờ) phải được đổi thành 'then' (lúc đó) khi động từ tường thuật ở quá khứ."
  },
  {   
    "question": "All the students told me that they were working on __________ science projects.",
    "options": ["A. their", "B. my", "C. our", "D. them"],
    "answer": "A. their",
    "explanation": "Trong câu tường thuật, tính từ sở hữu 'our' (của chúng tôi) phải được đổi thành 'their' (của họ) để phù hợp với chủ ngữ 'they'."
  },
  {
    "group": 1,
    "question": "Yesterday Tom told me that he uploaded his homework to the link two days __________.",
    "options": ["A. ago", "B. before", "C. ahead", "D. after"],
    "answer": "B. before",
    "explanation": "Trong câu tường thuật, trạng từ chỉ thời gian 'ago' (cách đây) phải được đổi thành 'before' (trước đó)."
  },
   {
    "group": 2,
    "question": "“You will like science after you read this book,” our teacher said.",
    "options": ["A. Our teacher says we will like science after we read this book.", "B. Our teacher said we would like science after we read this book.", "C. Our teacher said we would like science after we read that book.", "D. Our teacher said you would like science after you read this book."],
    "answer": "C. Our teacher said we would like science after we read that book.",
    "explanation": "Trong câu tường thuật, 'will' chuyển thành 'would', và 'this' chuyển thành 'that'. Câu này có đầy đủ các yếu tố thay đổi đúng ngữ pháp."
  },
  {    
    "question": "“Robot ASIMO will retire this year,” said the reporter.",
    "options": ["A. The reporter says robot ASIMO will retire this year.", "B. The reporter said robot ASIMO would retire this year.", "C. The reporter said robot ASIMO could retire that year.", "D. The reporter said robot ASIMO would retire that year."],
    "answer": "D. The reporter said robot ASIMO would retire that year.",
    "explanation": "Trong câu tường thuật, 'will' chuyển thành 'would', và 'this year' chuyển thành 'that year' khi động từ tường thuật ở quá khứ."
  },
  {   
    "question": "“We are developing an emotional robot,” said the engineer.",
    "options": ["A. The engineer said he is developing an emotional robot.", "B. The engineer said he was developing an emotional robot.", "C. The engineer said they are developing an emotional robot.", "D. The engineer said they were developing an emotional robot."],
    "answer": "D. The engineer said they were developing an emotional robot.",
    "explanation": "Trong câu tường thuật, 'We' chuyển thành 'they', và thì hiện tại tiếp diễn (are developing) chuyển thành quá khứ tiếp diễn (were developing)."
  },
  {   
    "question": "“You can have a video conference and upload homework on this platform,” said the teacher.",
    "options": ["A. The teacher said that we can have a video conference and upload homework on that platform.", "B. The teacher said you can have a video conference and upload homework on this platform.", "C. The teacher said we could have a video conference and upload homework on that platform.", "D. The teacher said you could have a video conference and upload homework on this platform."],
    "answer": "C. The teacher said we could have a video conference and upload homework on that platform.",
    "explanation": "Trong câu tường thuật, 'you' chuyển thành 'we', 'can' chuyển thành 'could' và 'this' chuyển thành 'that'."
  },
  {
    "group": 2,
    "question": "“Our school has a large laboratory, and our teachers often conduct experiments there,” said the headmaster.",
    "options": ["A. The headmaster said their school had a large laboratory, and their teachers often conduct experiments there.", "B. The headmaster said their school had a large laboratory, and their teachers often conducted experiments there.", "C. The headmaster said their school had a large laboratory, and their teachers often conduct experiments there.", "D. The headmaster says their school has a large laboratory, and our teachers often conduct experiments there."],
    "answer": "B. The headmaster said their school had a large laboratory, and their teachers often conducted experiments there.",
    "explanation": "Động từ tường thuật 'said' ở quá khứ, nên tất cả các động từ trong câu gián tiếp đều phải lùi về quá khứ: 'has' thành 'had', và 'conduct' thành 'conducted'."
  },
   {
    "group": 3,
    "question": "Minh: Mai, __________ We'll have a new badminton court at our school.",
    "options": ["A. I'm sorry to tell you the news.", "B. guess what?", "C. I'm so glad.", "D. I don't think you want to hear this."],
    "answer": "B. guess what?",
    "explanation": "'Guess what?' là cách nói thông dụng để bắt đầu một cuộc trò chuyện và thông báo một tin tức thú vị."
  },
  {    
    "question": "Tom: __________ We won the chess competition.",
    "options": ["A. Can you believe it?", "B. You can't believe.", "C. Do you believe me?", "D. Don't be shocked!"],
    "answer": "A. Can you believe it?",
    "explanation": "'Can you believe it?' là một câu hỏi tu từ dùng để bày tỏ sự ngạc nhiên khi thông báo tin tức. Nó có nghĩa là 'Bạn có tin được không?'."
  },
  {   
    "question": "Mai: Minh, I have some amazing news! My mum bought me a new calculator.\nMinh: __________",
    "options": ["A. Incredible.", "B. Are you sure?", "C. Congratulations!", "D. I have one too."],
    "answer": "C. Congratulations!",
    "explanation": "'Congratulations!' là một lời chúc mừng lịch sự và phù hợp khi nghe tin tức tốt lành của người khác."
  },
  {    
    "question": "Nick: Our club will have a scientist come to talk about science soon.\nMai: __________",
    "options": ["A. That's weird.", "B. That's too bad.", "C. Are you kidding?", "D. That's great."],
    "answer": "D. That's great.",
    "explanation": "'That's great.' là câu trả lời phù hợp nhất để thể hiện sự vui mừng và đồng tình với thông tin vừa nhận được."
  },
  {
    "group": 3,
    "question": "Student: Our science project attracted the attention of many students at school.\nTeacher: __________",
    "options": ["A. That's fantastic.", "B. Are you telling the truth?", "C. Thanks for your efforts.", "D. Are you sure?"],
    "answer": "A. That's fantastic.",
    "explanation": "'That's fantastic.' là một lời khen ngợi rất phù hợp và tích cực từ giáo viên khi nghe tin tức tốt về dự án của học sinh."
  },
    {
    "group": 2,
    "question": "In STEAM education, students learn science, technology, engineering, the arts, and maths.",
    "options": ["A. The arts, technology, and science are important parts of STEAM education.", "B. STEAM education includes the studies of science, technology, English, the arts, and maths.", "C. STEAM education combines the teaching of science, technology, engineering, the arts, and maths.", "D. STEAM education combines the teaching of science, English, technology, the arts, and maths for students."],
    "answer": "C. STEAM education combines the teaching of science, technology, engineering, the arts, and maths.",
    "explanation": "Câu này diễn tả đầy đủ và chính xác các lĩnh vực học tập trong giáo dục STEAM."
  },
  {   
    "question": "STEAM education is becoming more popular because it is effective.",
    "options": ["A. People like STEAM education because it is popular.", "B. As STEAM education is effective, it is becoming more popular.", "C. As STEAM education is popular, it is becoming more effective.", "D. STEAM education is so popular, so it is becoming more popular."],
    "answer": "B. As STEAM education is effective, it is becoming more popular.",
    "explanation": "'As' và 'because' đều là các liên từ chỉ nguyên nhân, diễn đạt đúng mối quan hệ nhân-quả của câu gốc."
  },
  {   
    "question": "“Students learn to solve problems in STEAM classes,” said Mr Thompson.",
    "options": ["A. Mr Thompson said that students will learn to solve problems in STEAM classes.", "B. Mr Thompson said that students would learn to solve problems in STEAM classes.", "C. Mr Thompson said that students learn to solve problems in STEAM classes.", "D. Mr Thompson said that students learned to solve problems in STEAM classes."],
    "answer": "D. Mr Thompson said that students learned to solve problems in STEAM classes.",
    "explanation": "Động từ tường thuật 'said' ở quá khứ, nên động từ trong câu gián tiếp phải lùi thì về quá khứ đơn ('learned')."
  },
  {    
    "question": "“We can learn many skills from STEAM classes,” said a student.",
    "options": ["A. A student says we can learn many skills from STEAM classes.", "B. A student said they could learn many skills from STEAM classes.", "C. A student said we could learn many skills from STEAM classes.", "D. A student said we could learn many skills from STEAM classes."],
    "answer": "B. A student said they could learn many skills from STEAM classes.",
    "explanation": "Trong câu tường thuật, 'we' chuyển thành 'they', và 'can' chuyển thành 'could' khi động từ tường thuật ở quá khứ."
  },
  {
    "group": 2,
    "question": "“Although this education trend is useful, we can't use it right now,” said a headmaster.",
    "options": ["A. A headmaster said although this education trend is useful, they can't use it right now.", "B. A headmaster said although that education trend was useful, they couldn't use it right then.", "C. A headmaster said although this education trend was useful, they couldn't use it right then.", "D. A headmaster said although this education trend is useful, they couldn't use it right now."],
    "answer": "B. A headmaster said although that education trend was useful, they couldn't use it right then.",
    "explanation": "Trong câu tường thuật, 'this' chuyển thành 'that', 'is' chuyển thành 'was', 'can't' chuyển thành 'couldn't', và 'right now' chuyển thành 'right then' khi động từ tường thuật ở quá khứ."
  }
]