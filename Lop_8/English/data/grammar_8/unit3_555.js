let unit = "3";
let title = "Teenagers";
let groups = [
	  "Pronunciation",	    
	  "Choose the correct words to complete the following sentence.",
	  "Speaking",
	  "Choose the best option A, B, C, or D which has the same meaning as the original sentence."
]
let  exercises=  [
  {
    "group": 0,
    "question": "Choose the word in which the [ure] part is pronounced differently.",
    "options": ["A. venture", "B. future", "C. mature", "D. culture"],
    "answer": "C. mature",
    "explanation": "Khác biệt nằm ở C. mature (phát âm /tjʊə/ hoặc /tʊr/, không giống /tʃə/). của các từ còn lại."
  },
  {    
    "question": "Choose the word in which the [our] part is pronounced differently.",
    "options": ["A. tour", "B. scour", "C. hour", "D. sour"],
    "answer": "A. tour",
    "explanation": "Phần gạch chân 'our' trong 'tour' được phát âm là /ʊə/. Trong khi đó, 'our' trong các từ còn lại được phát âm là /aʊər/."
  },
  {   
    "question": "Choose the word in which the [u] part is pronounced differently.",
    "options": ["A. curious", "B. plural", "C. during", "D. pure"],
    "answer": "B. plural",
    "explanation": "Tuy nhiên, trong thực tế, từ B. plural thường được phát âm là /ˈplʊərəl/ hoặc /ˈplɔːrəl/, trong đó nguyên âm có thể khác so với nhóm còn lại."
  },
  {
    "question": "Choose the word in which the [oi] part is pronounced differently.",
    "options": ["A. soil", "B. hoist", "C. choir", "D. voice"],
    "answer": "C. choir",
    "explanation": "Phần gạch chân 'oi' trong 'choir' được phát âm là /aɪər/. Trong khi đó, 'oi' trong các từ còn lại được phát âm là /ɔɪ/."
  },
  {
	"group": 0,  
    "question": "Choose the word in which the [u] part is pronounced differently.",
    "options": ["A. endure", "B. fury", "C. cure", "D. bury"],
    "answer": "D. bury",
    "explanation": "Phần gạch chân 'u' trong 'bury' được phát âm là /e/. Các từ 'endure', 'fury', 'cure' đều được phát âm là /ʊə/."
  },
   {
    "group": 1,
    "question": "upload a(n) __________",
    "options": ["A. a website", "B. a post", "C. an account", "D. a forum"],
    "answer": "B. a post",
    "explanation": "'Upload' (tải lên) thường đi kèm với các danh từ chỉ nội dung như 'a post' (một bài đăng) hoặc 'a photo' (một bức ảnh)."
  },
  {    
    "question": "browse a(n) __________",
    "options": ["A. a post", "B. a picture", "C. a clip", "D. a website"],
    "answer": "D. a website",
    "explanation": "'Browse' (duyệt, lướt) thường được dùng với 'a website' (một trang web) hoặc 'the Internet' (mạng Internet)."
  },
  {    
    "question": "check a(n) __________",
    "options": ["A. a clip", "B. a notification", "C. a picture", "D. a forum"],
    "answer": "B. a notification",
    "explanation": "'Check a notification' (kiểm tra thông báo) là một cụm từ rất thông dụng trong các ứng dụng và mạng xã hội."
  },
  {    
    "question": "log on to a(n) __________",
    "options": ["A. to a school", "B. to a club", "C. to an account", "D. to a password"],
    "answer": "C. to an account",
    "explanation": "Cụm động từ 'log on to' (đăng nhập vào) thường đi kèm với 'an account' (một tài khoản) hoặc 'a website' (một trang web)."
  },
   {   
    "question": "Teenagers need encouragement from their parents, __________ not all parents are willing to encourage their children.",
    "options": ["A. for", "B. and", "C. but", "D. so"],
    "answer": "C. but",
    "explanation": "'But' (nhưng) là liên từ phù hợp nhất để nối hai mệnh đề có ý nghĩa đối lập: 'cần sự động viên' và 'không phải tất cả cha mẹ đều sẵn lòng'."
  },
  {   
    "question": "Many girls worry about their appearance, __________ they often look at themselves in a mirror.",
    "options": ["A. but", "B. so", "C. or", "D. for"],
    "answer": "B. so",
    "explanation": "'So' (vì vậy) là liên từ chỉ kết quả, phù hợp để diễn tả hành động nhìn vào gương là kết quả của việc lo lắng về ngoại hình."
  },
  {   
    "question": "Teenagers should learn to mix with their classmates, __________ they can try to get on with their siblings.",
    "options": ["A. so", "B. for", "C. or", "D. yet"],
    "answer": "A. so",
    "explanation": "'So' (vì vậy) được dùng để diễn tả mục đích hoặc kết quả: Việc học cách hòa đồng với bạn bè sẽ giúp họ hòa hợp với anh chị em hơn."
  },
  {    
    "question": "Social media help teens connect with others; __________, they also cause teens to feel lonely.",
    "options": ["A. however", "B. therefore", "C. otherwise", "D. although"],
    "answer": "A. however",
    "explanation": "'However' (tuy nhiên) là trạng từ nối thể hiện sự đối lập, phù hợp để nối hai mệnh đề có ý nghĩa trái ngược nhau."
  },
  {
    "group": 1,
    "question": "They spend a lot of time surfing the net; __________, they have little time to read books.",
    "options": ["A. however", "B. therefore", "C. although", "D. otherwise"],
    "answer": "A. however",
    "explanation": "'However' (tuy nhiên) là trạng từ nối thể hiện sự đối lập giữa việc dành nhiều thời gian cho mạng xã hội và có ít thời gian đọc sách."
  },
   {
    "group": 2,
    "question": "Tom: How about playing a game of chess?\nMai: __________",
    "options": ["A. No, that's a waste of time.", "B. I'd love to. But I have to finish my homework first.", "C. Chess is interesting to play", "D. I'm sorry. Don't ask me to do that"],
    "answer": "B. I'd love to. But I have to finish my homework first.",
    "explanation": "Đây là một lời từ chối lịch sự với lý do chính đáng, thể hiện sự tiếc nuối nhưng vẫn ưu tiên công việc."
  },
  {
    "question": "Mai: __________?\nAnn: Yes, certainly.",
    "options": ["A. Can I join you in this game", "B. Will I join you in this game", "C. Shall you join us in this game", "D. Should you join us in this game"],
    "answer": "A. Can I join you in this game",
    "explanation": "'Can I...?' là cấu trúc thông dụng để xin phép hoặc đề nghị tham gia. 'Yes, certainly.' là câu trả lời đồng ý rất lịch sự."
  },
  {
    "question": "Nick: Could you tell me how I can deal with a bully?\nMi: __________",
    "options": ["A. That's very kind of you. Thanks", "B. Who's he? I don't know him", "C. You should talk to your parents about him", "D. You shouldn't talk to your parents about him"],
    "answer": "C. You should talk to your parents about him",
    "explanation": "'You should...' là cấu trúc thường dùng để đưa ra lời khuyên. Câu này đưa ra lời khuyên phù hợp và trực tiếp nhất cho vấn đề của Nick."
  },
  {    
    "question": "Teacher: Would you like to discuss the causes of your stress in our forum?\nStudent: __________",
    "options": ["A. No, I wouldn't", "B. That's a good idea", "C. Yes, I would join the forum", "D. That's very kind of you"],
    "answer": "B. That's a good idea",
    "explanation": "'That's a good idea' là câu trả lời tích cực và phù hợp nhất để chấp nhận lời đề nghị của giáo viên."
  },
  {
    "group": 2,
    "question": "Minh: __________?\nTom: Certainly. Go past this building, then turn left. It's right in front of you there.",
    "options": ["A. Would you show me the way to the library, please", "B. Could you show me the way to the library, please", "C. Should you show me the way to the library, please", "D. May you show me the way to the library, please"],
    "answer": "B. Could you show me the way to the library, please",
    "explanation": "'Could you...?' là một cách hỏi lịch sự và thông dụng để nhờ ai đó chỉ đường."
  },
   {
    "group": 3,
    "question": "I'm interested in participating in some club activities.",
    "options": ["A. Joining in some club activities is not my interest.", "B. My interest is to joining in some club activities.", "C. I'm interested in joining in some club activities.", "D. Club activities are what I am interested in."],
    "answer": "C. I'm interested in joining in some club activities.",
    "explanation": "'Interested in' là cấu trúc chính xác để diễn tả sự quan tâm. Câu này dùng 'joining in' thay cho 'participating in' nhưng có cùng ý nghĩa."
  },
  {    
    "question": "I play chess to relax, but I'm now confident enough to enter competitions.",
    "options": ["A. Although I play chess to relax, I'm now confident enough to enter competitions.", "B. Although I play chess to relax, I'm now confident enough to enter competitions.", "C. I'm now confident enough to enter competitions in spite of being relaxed.", "D. I play chess to relax, and I'm now confident enough to enter competitions."],
    "answer": "A. Although I play chess to relax, I'm now confident enough to enter competitions.",
    "explanation": "'Although' và 'but' đều là các liên từ thể hiện sự đối lập. Câu A là cách biến đổi chính xác nhất."
  },
  {
    "question": "Teenagers join the Teen Line forum as they enjoy chatting with other teens.",
    "options": ["A. Teenagers join the Teen Line forum, so they enjoy chatting with other teens.", "B. Teenagers join the Teen Line forum although they enjoy chatting with other teens.", "C. Teenagers join the Teen Line forum, but they enjoy chatting with other teens.", "D. Teenagers join the Teen Line forum because they enjoy chatting with other teens."],
    "answer": "D. Teenagers join the Teen Line forum because they enjoy chatting with other teens.",
    "explanation": "'Because' và 'as' đều là các liên từ chỉ nguyên nhân, giải thích lý do tại sao thanh thiếu niên tham gia diễn đàn."
  },
  {   
    "question": "Although teens don't know how to avoid bullies, they don't want to tell their teachers.",
    "options": ["A. If teens knew how to avoid bullies, they would not tell their teachers.", "B. Teens don't know how to avoid bullies, but they don't want to tell their teachers.", "C. Teens will tell their teachers although they know how to avoid bullies.", "D. Teens know how to avoid bullies; however, they will tell their teachers."],
    "answer": "B. Teens don't know how to avoid bullies, but they don't want to tell their teachers.",
    "explanation": "'But' là liên từ thể hiện sự đối lập, có thể dùng thay thế cho 'although' để nối hai mệnh đề có ý nghĩa tương phản."
  },
  {
    "question": "If you don't stop spending so much time playing video games, you will get addicted.",
    "options": ["A. You should stop spending so much time playing video games; otherwise, you will get addicted.", "B. You should stop spending so much time playing video games; however, you will get addicted.", "C. Stop spending so much time playing video games, so you will get addicted.", "D. Although you stop spending so much time playing video games, you will get addicted."],
    "answer": "A. You should stop spending so much time playing video games; otherwise, you will get addicted.",
    "explanation": "'Otherwise' (nếu không thì) có nghĩa tương đương với cấu trúc câu điều kiện, diễn tả một kết quả tiêu cực nếu hành động ở mệnh đề trước không xảy ra."
  }
  ]