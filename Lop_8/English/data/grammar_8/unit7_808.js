let unit = "7";
let title = "Environmental Protection";
let groups = [
	  "Pronunciation",	    
	  "Vocabulary and grammar",
	  "Choose the correct answer A, B, C, or D to complete the following sentence.",
	  "Speaking",
	  "Circle A, B, C, or D to indicate the sentence that is closest in meaning to each of the following questions."
]
let  exercises=  [
  {
    "group": 0,
    "question": "Choose the word that has a different stress pattern in each line.",
    "options": ["A. species", "B. coral", "C. extinct", "D. product"],
    "answer": "C. extinct",
    "explanation": "Các từ 'species' (SPE-cies), 'coral' (CO-ral), 'product' (PRO-duct) có trọng âm rơi vào âm tiết thứ nhất. Riêng từ 'extinct' (ex-TINCT) có trọng âm rơi vào âm tiết thứ hai."
  },
  {    
    "question": "Choose the word that has a different stress pattern in each line.",
    "options": ["A. protect", "B. reduce", "C. release", "D. notice"],
    "answer": "D. notice",
    "explanation": "Các từ 'protect' (pro-TECT), 'reduce' (re-DUCE), 'release' (re-LEASE) có trọng âm rơi vào âm tiết thứ hai. Riêng từ 'notice' (NO-tice) có trọng âm rơi vào âm tiết thứ nhất."
  },
  {   
    "question": "Choose the word that has a different stress pattern in each line.",
    "options": ["A. disease", "B. household", "C. substance", "D. sewage"],
    "answer": "A. disease",
    "explanation": "Các từ 'household' (HOUSE-hold), 'substance' (SUB-stance), 'sewage' (SEW-age) có trọng âm rơi vào âm tiết thứ nhất. Riêng từ 'disease' (di-SEASE) có trọng âm rơi vào âm tiết thứ hai."
  },
  {   
    "question": "Choose the word that has a different stress pattern in each line.",
    "options": ["A. herbicide", "B. nomadic", "C. poisonous", "D. resident"],
    "answer": "B. nomadic",
    "explanation": "Các từ 'herbicide' (HER-bi-cide), 'poisonous' (POI-son-ous), 'resident' (RE-si-dent) có trọng âm rơi vào âm tiết thứ nhất. Riêng từ 'nomadic' (no-MA-dic) có trọng âm rơi vào âm tiết thứ hai."
  },
  {
    "group": 0,
    "question": "Choose the word that has a different stress pattern in each line.",
    "options": ["A. environment", "B. participate", "C. interaction", "D. conditional"],
    "answer": "C. interaction",
    "explanation": "Các từ 'environment' (en-VI-ron-ment), 'participate' (par-TI-ci-pate), 'conditional' (con-DI-tion-al) có trọng âm rơi vào âm tiết thứ hai. Riêng từ 'interaction' (in-ter-AC-tion) có trọng âm rơi vào âm tiết thứ ba."
  },
   {
    "group": 2,
    "question": "If the temperature __________ rising, the polar ice caps will melt.",
    "options": ["A. kept", "B. keeps", "C. has kept", "D. will keep"],
    "answer": "B. keeps",
    "explanation": "Đây là câu điều kiện loại 1. Mệnh đề 'If' phải ở thì hiện tại đơn (Simple Present), với chủ ngữ số ít nên động từ 'keep' phải thêm 's'."
  },
  {    
    "question": "Because of __________ pollution, the bicycle may someday replace the automobile.",
    "options": ["A. water", "B. air", "C. noise", "D. soil"],
    "answer": "B. air",
    "explanation": "'Air pollution' (ô nhiễm không khí) là vấn đề chính do ô tô gây ra, nên xe đạp được xem là giải pháp thay thế."
  },
  {   
    "question": "Students should learn some practical ways that help to __________ pollution.",
    "options": ["A. save", "B. cure", "C. reduce", "D. shorten"],
    "answer": "C. reduce",
    "explanation": "'Reduce pollution' (giảm thiểu ô nhiễm) là cụm từ chính xác và phổ biến trong tiếng Anh."
  },
  {   
    "question": "__________ she left the party, Jenny said goodbye to the host.",
    "options": ["A. Before", "B. After", "C. As soon as", "D. Until"],
    "answer": "A. Before",
    "explanation": "Hành động 'said goodbye' (nói lời tạm biệt) thường diễn ra trước khi rời đi, do đó 'Before' là liên từ chỉ thời gian phù hợp nhất."
  },
  {   
    "question": "People think that global warming __________ lots of problems in the future.",
    "options": ["A. causes", "B. is causing", "C. will cause", "D. has caused"],
    "answer": "C. will cause",
    "explanation": "'In the future' (trong tương lai) là dấu hiệu cho thấy câu này là một lời dự đoán, nên ta dùng thì tương lai đơn 'will cause'."
  },
  {   
    "question": "We saw many beautiful birds while we __________ in the lake.",
    "options": ["A. fished", "B. would fish", "C. are fishing", "D. were fishing"],
    "answer": "D. were fishing",
    "explanation": "Câu này diễn tả hai hành động xảy ra đồng thời trong quá khứ. Hành động đang diễn ra (Past Continuous) là 'we were fishing'."
  },
  {    
    "question": "Environmental protection refers to activities that __________ or restore the quality of the environment.",
    "options": ["A. maintain", "B. participate", "C. concentrate", "D. involve"],
    "answer": "A. maintain",
    "explanation": "'Maintain' (duy trì) là từ phù hợp để đi cùng với 'restore' (khôi phục), tạo thành một cặp từ có ý nghĩa tương tự."
  },
  {
    "question": "Public education is probably the most important activity in wildlife __________.",
    "options": ["A. conservation", "B. prevention", "C. treatment", "D. stopping"],
    "answer": "A. conservation",
    "explanation": "'Wildlife conservation' (bảo tồn động vật hoang dã) là cụm danh từ cố định, chỉ hoạt động bảo vệ và duy trì động vật hoang dã."
  },
  {   
    "question": "The environment won't help us if we __________ it.",
    "options": ["A. annoy", "B. worry", "C. alarm", "D. disturb"],
    "answer": "D. disturb",
    "explanation": "Đây là câu điều kiện loại 1. Mệnh đề 'if' phải ở thì hiện tại đơn. 'Disturb' (phá hoại) là động từ phù hợp để diễn tả hành động tiêu cực với môi trường."
  },
  {
    "group": 2,
    "question": "__________ by the 3Rs? - They are Reduce, Reuse, and Recycle.",
    "options": ["A. What are they", "B. What do you mean", "C. When do you use", "D. What does it stand"],
    "answer": "A. What are they",
    "explanation": "Câu trả lời định nghĩa '3Rs' là gì, vì vậy câu hỏi phải hỏi về định nghĩa. 'What are they?' là câu hỏi phù hợp nhất."
  },
   {
    "group": 4,
    "question": "If we want to save the environment, we need to stop using so much energy.",
    "options": ["A. We won't save the environment unless we stop using so much energy.", "B. We want to save the environment if we need to stop using so much energy.", "C. Using so much energy, we want to save the environment.", "D. We need to stop using so much energy when we can save the environment."],
    "answer": "A. We won't save the environment unless we stop using so much energy.",
    "explanation": "'Unless' có nghĩa là 'trừ khi' hoặc 'nếu không thì', diễn đạt ý nghĩa tương đương với cấu trúc câu điều kiện phủ định của câu gốc."
  },
  {    
    "question": "It was not until midnight that the noise next door stopped.",
    "options": ["A. The noise next door stopped before it was midnight.", "B. The noise next door only stopped at midnight.", "C. The next-door neighbours made noise after midnight.", "D. I wanted the noise next door to stop before midnight."],
    "answer": "B. The noise next door only stopped at midnight.",
    "explanation": "Cấu trúc 'It was not until... that...' có cùng ý nghĩa với 'only...'. Câu này có nghĩa là tiếng ồn chỉ dừng lại vào lúc nửa đêm."
  },
  {   
    "question": "They travelled across India, and then flew on to Japan.",
    "options": ["A. They travelled across India as soon as they flew on to Japan.", "B. After flying on to Japan, they travelled across India.", "C. They didn't travel across India until they flew on to Japan.", "D. After travelling across India, they flew on to Japan."],
    "answer": "D. After travelling across India, they flew on to Japan.",
    "explanation": "Câu này diễn tả trình tự thời gian của hai hành động một cách chính xác."
  },
  {   
    "question": "My father rides his bike to work every day to help protect the environment.",
    "options": ["A. My father rides his bike to work and to help protect the environment.", "B. My father rides his bike to work by helping protect the environment.", "C. To go to work by bike every day, my father helps protect the environment.", "D. To help protect the environment, my father goes to work by bike every day."],
    "answer": "D. To help protect the environment, my father goes to work by bike every day.",
    "explanation": "Câu này dùng cấu trúc 'To + V, S + V' để diễn tả mục đích, có cùng ý nghĩa với câu gốc. 'To help protect the environment' là lý do cho hành động."
  },
  {
    "group": 4,
    "question": "Forests help release oxygen and absorb carbon dioxide.",
    "options": ["A. It's good when forests release oxygen and absorb carbon dioxide.", "B. Releasing oxygen and absorbing carbon dioxide help forests.", "C. Forests contribute by releasing oxygen and absorbing carbon dioxide.", "D. Without forests, we would have no oxygen and carbon dioxide."],
    "answer": "C. Forests contribute by releasing oxygen and absorbing carbon dioxide.",
    "explanation": "'Contribute by' (đóng góp bằng cách) có cùng ý nghĩa với 'help' (giúp đỡ) trong ngữ cảnh này."
  }
  ]