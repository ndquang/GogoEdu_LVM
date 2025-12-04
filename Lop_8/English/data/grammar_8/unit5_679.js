let unit = "5";
let title = "Our Customs and Traditions";
let groups = [
	  "Pronunciation",	    
	  "Choose the correct words to complete the following sentence.",
	  "Speaking",
	  "Writing"
]
let  exercises=  [
   {
    "group": 0,
    "question": "Choose the word in each line with the underlined [ng] part pronounced differently.",
    "options": ["A. singer", "B. England", "C. angle", "D. longevity"],
    "answer": "A. singer",
    "explanation": "Phần gạch chân 'ng' trong 'singer' được phát âm là /ŋ/. Trong khi đó, 'ng' trong các từ B, C và 'n' trong D đều có âm /ɡ/ hoặc /dʒ/ đi kèm."
  },
  {    
    "question": "Choose the word in each line with the underlined [n] part pronounced differently.",
    "options": ["A. language", "B. opening", "C. convert", "D. animal"],
    "answer": "B. opening",
    "explanation": "Từ B. opening có âm khác biệt rõ ràng (nguyên âm đôi /əʊ/)."
  },
  {    
    "question": "Choose the word in each line with the underlined [n] part pronounced differently.",
    "options": ["A. morning", "B. thinking", "C. union", "D. ornament"],
    "answer": "B. thinking",
    "explanation": "Từ B. thinking có cách phát âm khác biệt rõ ràng."
  },
  {    
    "question": "Choose the word in each line with the underlined [n] part pronounced differently.",
    "options": ["A. drink", "B. thank", "C. funny", "D. uncle"],
    "answer": "C. funny",
    "explanation": "Phần gạch chân 'n' trong 'funny' được phát âm là /n/. Trong khi đó, các từ còn lại đều có âm /ŋk/."
  },
  {
    "group": 0,
    "question": "Choose the word in each line with the underlined [ng] part pronounced differently.",
    "options": ["A. offering", "B. tradition", "C. young", "D. wrinkle"],
    "answer": "C. young",
    "explanation": "Trong 4 từ, chỉ có young có âm ʌ khác hẳn các từ còn lại."
  },
   {
    "group": 1,
    "question": "In many cultures, a __________ represents youth, beauty, and pleasure.",
    "options": ["A. blooming flower", "B. communal house", "C. bamboo pole", "" ],
    "answer": "A. blooming flower",
    "explanation": "'Blooming flower' (bông hoa nở rộ) thường được dùng làm biểu tượng cho tuổi trẻ, vẻ đẹp và niềm vui trong nhiều nền văn hóa."
  },
  {    
    "question": "__________ such as kumquat trees, peach blossoms, and apricot flowers are popular at Tet.",
    "options": ["A. Blooming flower", "B. Vegetables", "C. Ornamental trees", ""],
    "answer": "C. Ornamental trees",
    "explanation": "'Ornamental trees' (cây cảnh) là danh từ chung phù hợp để miêu tả các loại cây như quất, đào, mai được dùng để trang trí vào dịp Tết."
  },
  {   
    "question": "Traditionally, the __________ in a village is a place for villagers to meet or worship.",
    "options": ["A. festival", "B. market", "C. communal house", ""],
    "answer": "C. communal house",
    "explanation": "'Communal house' (đình làng) là danh từ chỉ một ngôi nhà chung trong làng, nơi mọi người tụ họp hoặc thờ cúng."
  },
  {   
    "question": "Every year, the Bulgarians hold the Surva Festival to chase away __________.",
    "options": ["A. bad spirits", "B. festival goers", "C. martial artists", ""],
    "answer": "A. bad spirits",
    "explanation": "Nhiều lễ hội truyền thống được tổ chức với mục đích xua đuổi 'bad spirits' (tà ma, điều xui xẻo)."
  },
  {   
    "question": "In many Vietnamese villages, people put up a __________ in the yard of the communal house to welcome Tet.",
    "options": ["A. fight", "B. barrier", "C. bamboo pole", ""],
    "answer": "C. bamboo pole",
    "explanation": "'Bamboo pole' (cây nêu) là một vật trang trí truyền thống được dựng lên vào dịp Tết."
  },
  {   
    "question": "During Tet, the Kinh often prepare traditional __________ such as banh chung and boiled chicken to worship their ancestors.",
    "options": ["A. decorative items", "B. food offerings", "C. spirits", ""],
    "answer": "B. food offerings",
    "explanation": "'Food offerings' (lễ vật cúng) là cụm từ chỉ các món ăn được chuẩn bị để thờ cúng tổ tiên."
  },
  {   
    "question": "Last year, thousands of festival __________ participated in the Lim Festival in Tien Du District.",
    "options": ["A. comers", "B. goers", "C. movers",""],
    "answer": "B. goers",
    "explanation": "'Festival goers' (những người đi lễ hội) là cụm từ chính xác và phổ biến để chỉ những người tham gia lễ hội."
  },
  {
    "group": 1,
    "question": "Learning __________ can help build physical strength and improve confidence.",
    "options": ["A. martial arts", "B. physics", "C. chemistry",""],
    "answer": "A. martial arts",
    "explanation": "'Martial arts' (võ thuật) là môn học có thể giúp rèn luyện sức mạnh thể chất và sự tự tin."
  },
    {
    "group": 2,
    "question": "A: What gift should I bring to Jane's house-warming party?\nB: __________",
    "options": ["A. How about buying her an ornamental tree?", "B. Sorry, but I'm busy on Friday.","",""],
    "answer": "A. How about buying her an ornamental tree?",
    "explanation": "'How about...?' là cấu trúc thông dụng để đưa ra lời gợi ý hoặc lời khuyên."
  },
  {    
    "question": "A: Minh keeps making fun of me in class. What should I do?\nB: __________",
    "options": ["A. Oh dear. He's so impolite.", "B. Perhaps you could try talking to him seriously.","",""],
    "answer": "B. Perhaps you could try talking to him seriously.",
    "explanation": "'Perhaps you could try...' là một cách nói lịch sự để đưa ra lời khuyên cho người khác."
  },
  {   
    "question": "A: Mai is always sending messages to me late at night. This wakes me up.\nB: __________",
    "options": ["A. Don't reply to her late messages, and she'll soon stop sending them.", "B. Poor you! You must be very sleepy then.","",""],
    "answer": "A. Don't reply to her late messages, and she'll soon stop sending them.",
    "explanation": "Đây là một lời khuyên trực tiếp và hợp lý để giải quyết vấn đề của A."
  },
  {   
    "question": "A: I'm going to Summer Carnival in Ha Long next week!\nB: __________",
    "options": ["A. That sounds exciting!", "B. It's a good idea to bring a warm coat.","",""],
    "answer": "A. That sounds exciting!",
    "explanation": "'That sounds exciting!' là câu trả lời phù hợp nhất để bày tỏ sự thích thú và hào hứng khi nghe tin tức tốt."
  },
  {
    "group": 2,
    "question": "A: Jack wants to go somewhere for Mid-Autumn Festival.\nB: __________",
    "options": ["A. Tell him to wait for a few minutes.", "B. He should definitely go to Hoi An.","",""],
    "answer": "B. He should definitely go to Hoi An.",
    "explanation": "'He should definitely go to...' là một cách nói đưa ra lời khuyên hoặc gợi ý địa điểm rất thuyết phục."
  }
  ]