let unit = "2";
let title = "Life in the Countryside";
let groups = [
	  "Pronunciation",	
      "Choose the noun (A, B, C, or D) that does NOT go with the given verb.",
	  "Choose the correct words to complete the following sentence.",
	  "Speaking",
	  "Writing"
]
let  exercises=  [
 {
    "group": 0,
    "question": "Find the word having a different sound in the [i] part. Say them aloud.",
    "options": ["A. activity", "B. sick", "C. think", "D. city"],
    "answer": "A. activity",
    "explanation": "Activity đọc là /æ/ các từ còn lại đọc là /ɪ/."
  },
  {    
    "question": "Find the word having a different sound in the [u] part. Say them aloud.",
    "options": ["A. busy", "B. picturesque", "C. support", "D. campus"],
    "answer": "A. busy",
    "explanation": "Phần gạch chân 'u' trong 'busy' được phát âm là /ɪ/. Trong khi đó, 'u' trong các từ còn lại được phát âm là /ə/."
  },
  {
    "question": "Find the word having a different sound in the [a] part. Say them aloud.",
    "options": ["A. orange", "B. village", "C. buffalo", "D. cabbage"],
    "answer": "B. village",
    "explanation": "Câu hỏi này có lỗi vì tất cả các từ có phần gạch chân 'a' phát âm khác nhau. Tuy nhiên, 'village' là từ có âm tiết cuối cùng phát âm khác so với các từ còn lại."
  },
  {    
    "question": "Find the word having a different sound in the [e] part. Say them aloud.",
    "options": ["A. begin", "B. women", "C. harvest", "D. entertainment"],
    "answer": "D. entertainment",
    "explanation": "Phần gạch chân 'e' trong 'entertainment' được phát âm là /ə/. Trong khi đó, 'e' trong các từ còn lại được phát âm là /ɪ/."
  },
  {
    "group": 0,
    "question": "Find the word having a different sound in the [o] part. Say them aloud.",
    "options": ["A. police", "B. cover", "C. collect", "D. combine"],
    "answer": "B. cover",
    "explanation": "Phần gạch chân 'o' trong 'cover' được phát âm là /ʌ/. Trong khi đó, 'o' trong các từ còn lại được phát âm là /ə/."
  },
  {
    "group": 1,
    "question": "to ride ...",
    "options": ["A. a buffalo", "B. a bicycle", "C. a ship", "D. a horse"],
    "answer": "C. a ship",
    "explanation": "Ta có thể cưỡi (ride) một con trâu, xe đạp hoặc ngựa. Ta dùng động từ 'sail' (chèo thuyền) hoặc 'travel by' (đi bằng) với 'ship'."
  },
  {    
    "question": "to collect ...",
    "options": ["A. wood", "B. water", "C. eggs", "D. chickens"],
    "answer": "B. water",
    "explanation": "Ta có thể thu gom (collect) củi, trứng hoặc gà. Ta thường dùng động từ 'fetch' (lấy) hoặc 'get' (lấy) với nước."
  },
  {    
    "question": "to pick ...",
    "options": ["A. plants", "B. flowers", "C. tomatoes", "D. grapes"],
    "answer": "A. plants",
    "explanation": "Ta có thể hái (pick) hoa, cà chua hoặc nho. Ta thường dùng 'dig up' (đào lên) hoặc 'uproot' (nhổ tận gốc) với cây (plants)."
  },
  {    
    "question": "to herd ...",
    "options": ["A. fish", "B. horses", "C. buffaloes", "D. cows"],
    "answer": "A. fish",
    "explanation": "Ta có thể chăn (herd) ngựa, trâu hoặc bò. Ta không chăn cá, mà dùng 'catch' (bắt) hoặc 'fish' (đánh bắt cá)."
  },
  {
    "group": 1,
    "question": "to catch ...",
    "options": ["A. fish", "B. fruits", "C. mice", "D. rabbits"],
    "answer": "B. fruits",
    "explanation": "Ta có thể bắt (catch) cá, chuột hoặc thỏ. Ta không dùng 'catch' với trái cây, mà dùng 'pick' (hái)."
  },
   {
    "group": 2,
    "question": "The workers are __________ a truck with timber.",
    "options": ["A. unloading", "B. loading", "C. taking", "D. filling"],
    "answer": "B. loading",
    "explanation": "Cụm từ 'loading a truck' có nghĩa là 'chất hàng lên xe tải', phù hợp với ngữ cảnh công nhân đang vận chuyển gỗ."
  },
  {    
    "question": "He often __________ holes in his garden to plant trees.",
    "options": ["A. ploughs", "B. picks", "C. digs", "D. collects"],
    "answer": "C. digs",
    "explanation": "Động từ 'digs holes' có nghĩa là 'đào các lỗ', là hành động cần thiết để trồng cây."
  },
  {   
    "question": "My uncle hired extra workers to help at harvest __________.",
    "options": ["A. time", "B. point", "C. period", "D. season"],
    "answer": "A. time",
    "explanation": "'Harvest time' (vào mùa thu hoạch) là một cụm từ cố định và phổ biến trong tiếng Anh."
  },
  {    
    "question": "From the hilltop, we can see row after row of orange trees __________ to the horizon.",
    "options": ["A. running", "B. expanding", "C. enlarging", "D. stretching"],
    "answer": "D. stretching",
    "explanation": "'Stretching to the horizon' (trải dài đến tận chân trời) là cụm từ phù hợp nhất để miêu tả một cảnh quan rộng lớn."
  },
  {
    "group": 2,
    "question": "People in my village grow rice in vast __________ fields.",
    "options": ["A. corn", "B. wheat", "C. pad", "D. paddy"],
    "answer": "D. paddy",
    "explanation": "'Paddy fields' (cánh đồng lúa) là cụm từ chính xác để chỉ nơi trồng lúa."
  },
   {
    "group": 3,
    "question": "A: You look nice today.\nB: __________",
    "options": ["A. Do you really think so?", "B. I don't think so.", "C. I beg your pardon.", "D. I'm fine, thank you."],
    "answer": "A. Do you really think so?",
    "explanation": "Đây là câu trả lời lịch sự và phổ biến để đáp lại một lời khen, vừa thể hiện sự ngạc nhiên vừa chấp nhận lời khen."
  },
  {    
    "question": "A: I've had a very enjoyable summer holiday with my family.\nB: __________",
    "options": ["A. I'm jealous of your holiday.", "B. I envy you.", "C. That's great, thanks.", "D. No, I don't envy you."],
    "answer": "C. That's great, thanks.",
    "explanation": "'That's great!' là câu trả lời phù hợp để thể hiện sự vui mừng hoặc quan tâm đến trải nghiệm tích cực của người khác."
  },
  {   
    "question": "A: Ooh, what a great tie! Where did you get it?\nB: __________",
    "options": ["A. Oh, thank you! I got it at a shop in Le Loi Street.", "B. Don't mention it. I bought it at a shop in Ha Noi.", "C. No, it doesn't look great at all.", "D. Yes, I like it very much."],
    "answer": "A. Oh, thank you! I got it at a shop in Le Loi Street.",
    "explanation": "Đây là câu trả lời đầy đủ và lịch sự nhất, vừa cảm ơn lời khen vừa cung cấp thông tin được hỏi."
  },
  {    
    "question": "A: Why do you like living in the countryside?\nB: __________",
    "options": ["A. Because there's a great sense of community there.", "B. Because I like the excitement of the city.", "C. Because life in the countryside is boring.", "D. Because I don't like the public transport here."],
    "answer": "A. Because there's a great sense of community there.",
    "explanation": "Câu hỏi là về lý do, vì vậy câu trả lời phải là một lý do hợp lý. Câu A đưa ra một lý do thuyết phục để thích sống ở nông thôn."
  },
  {
    "group": 3,
    "question": "A: Let me congratulate you on your cake!\nB: __________",
    "options": ["A. That's my strong point!", "B. Making cakes is not my forte.", "C. Why do you say that?", "D. That's very kind of you!"],
    "answer": "D. That's very kind of you!",
    "explanation": "'That's very kind of you!' là một câu nói lịch sự và phù hợp để đáp lại lời chúc mừng hoặc khen ngợi."
  }
  ]