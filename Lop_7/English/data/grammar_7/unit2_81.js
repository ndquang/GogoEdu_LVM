let unit = "2";
let title = "Healthy Living";
let groups = [
	  "Pronunciation",	
      "Choose the correct answer A, B, C.",	  	  
	  "Speaking",
	  "Writing"
]
let  exercises=  [
  {
    "group": 0,
    "question": "Circle the word with the underlined [gh] part pronounced differently.",
    "options": ["A. cough", "B. enough", "C. through", "D. laugh"],
    "answer": "C. through",
    "explanation": "Phần gạch chân trong 'through' là âm câm. Trong khi đó, 'gh' và 'ough' trong các từ còn lại được phát âm là /f/."
  },
  {    
    "question": "Circle the word with the underlined [ph] part pronounced differently.",
    "options": ["A. dolphin", "B. uphill", "C. earphone", "D. alphabet"],
    "answer": "B. uphill",
    "explanation": "Phần gạch chân 'ph' trong các từ A, C, D được phát âm là /f/. Riêng 'uphill' là một danh từ ghép, 'p' và 'h' được phát âm tách rời là /p/ và /h/."
  },
  {    
    "question": "Circle the word with the underlined [gh] part pronounced differently.",
    "options": ["A. night", "B. tough", "C. flight", "D. high"],
    "answer": "B. tough",
    "explanation": "Phần gạch chân 'gh' trong 'tough' được phát âm là /f/. Trong khi đó, 'gh' trong các từ còn lại là âm câm."
  },
  {    
    "question": "Circle the word with the underlined [a] part pronounced differently.",
    "options": ["A. ate", "B. about", "C. amazing", "D. above"],
    "answer": "A. ate",
    "explanation": "Phần gạch chân 'a' trong 'ate' được phát âm là /eɪ/. Trong khi đó, 'a' trong các từ còn lại được phát âm là /ə/."
  },
  {    
    "question": "Circle the word with the underlined [ear] part pronounced differently.",
    "options": ["A. learn", "B. early", "C. earth", "D. hear"],
    "answer": "D. hear",
    "explanation": "Phần gạch chân 'ear' trong 'hear' được phát âm là /ɪə/. Trong khi đó, 'ear' trong các từ còn lại được phát âm là /ɜː/."
  },
   {   
    "question": "Find the word which has a different [a] sound in the part underlined.",
    "options": ["A. orphanage", "B. patient", "C. agree", "D. about"],
    "answer": "B. patient",
    "explanation": "Phần gạch chân 'a' trong 'patient' được phát âm là /eɪ/. Trong khi đó, 'a' trong các từ còn lại được phát âm là /ə/ (âm schwa)."
  },
  {    
    "question": "Find the word which has a different [er] sound in the part underlined.",
    "options": ["A. verb", "B. herb", "C. never", "D. person"],
    "answer": "C. never",
    "explanation": "Phần gạch chân 'er' trong các từ 'verb', 'herb', 'person' được phát âm là /ɜː/. Riêng 'never' được phát âm là /ˈnevər/ với âm /ə/ ở âm tiết cuối cùng."
  },
  {    
    "question": "Find the word which has a different [f] sound in the part underlined.",
    "options": ["A. leaf", "B. favourite", "C. farm", "D. of"],
    "answer": "D. of",
    "explanation": "Câu hỏi này có lỗi in ấn, nhưng nếu giả định phần gạch chân ở 'of', thì từ này có âm /ɒ/. Các từ còn lại có các âm nguyên âm khác nhau."
  },
  {    
    "question": "Find the word which has a different [ed] sound in the part underlined.",
    "options": ["A. decided", "B. worked", "C. watched", "D. clapped"],
    "answer": "A. decided",
    "explanation": "Phần gạch chân 'ed' trong 'decided' được phát âm là /ɪd/. Trong khi đó, 'ed' trong các từ còn lại được phát âm là /t/."
  },
  {
    "group": 0,
    "question": "Find the word which has a different [ed] sound in the part underlined.",
    "options": ["A. listened", "B. littered", "C. picked", "D. exchanged"],
    "answer": "B. littered",
    "explanation": "Phần gạch chân 'ed' trong 'littered' được phát âm là /ɪd/. Trong khi đó, 'ed' trong các từ còn lại được phát âm là /d/ hoặc /t/."
  },
  {
    "group": 1,
    "question": "Mi __________ playing computer games because it's not good for her eyes.",
    "options": ["A. likes", "B. loves", "C. hates", "D. enjoys"],
    "answer": "C. hates",
    "explanation": "Lý do 'because it's not good for her eyes' cho thấy Mi có cảm xúc tiêu cực với việc chơi game. Do đó, 'hates' (ghét) là động từ phù hợp nhất."
  },
  {    
    "question": "__________ you __________ breakfast every morning? - Yes, I do, but my sister __________.",
    "options": ["A. Are; isn't", "B. Do; don't", "C. Are; does", "D. Do; doesn't"],
    "answer": "D. Do; doesn't",
    "explanation": "Câu hỏi về thói quen dùng 'Do'. 'But' thể hiện sự đối lập, và 'my sister' là chủ ngữ số ít, nên dùng 'doesn't'."
  },
  {   
    "question": "She __________ tired, so she __________ to the nursing home last week.",
    "options": ["A. is; doesn't go", "B. was; didn't go", "C. is; doesn't go", "D. was; didn't went"],
    "answer": "B. was; didn't go",
    "explanation": "'Last week' là dấu hiệu của thì quá khứ đơn. 'Was' và 'didn't go' là các dạng động từ chính xác ở thì này."
  },
  {    
    "question": "What __________ your mother __________ to keep fit? - She __________ jogging.",
    "options": ["A. do; do; goes", "B. do; does; go", "C. does; do; goes", "D. does; does; goes"],
    "answer": "C. does; do; goes",
    "explanation": "Trợ động từ cho câu hỏi với chủ ngữ số ít là 'Does', động từ chính là 'do'. Trong câu trả lời, động từ 'go' phải thêm 's' vì chủ ngữ là 'She'."
  },
  {
    "group": 1,
    "question": "__________ you __________ the football match yesterday? - Yes, I __________.",
    "options": ["A. Did; enjoy; did", "B. Did; enjoyed; did", "C. Do; enjoy; do", "D. Do; enjoyed; do"],
    "answer": "A. Did; enjoy; did",
    "explanation": "'Yesterday' là dấu hiệu của thì quá khứ đơn. Trợ động từ cho câu hỏi là 'Did' và động từ chính ở dạng nguyên mẫu. Câu trả lời ngắn cũng dùng 'did'."
  }
  ] 

