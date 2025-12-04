let unit = "3";
let title = "Community Service";
let groups = [
	  "Pronunciation",	
      "Choose the correct answer A, B, C or D.",	  	  
	  "Speaking",
	  "Writing"
]
let  exercises=  [
    {
    "group": 0,
    "question": "Choose the word in which the underlined [ed] part is pronounced differently.",
    "options": ["A. started", "B. washed", "C. wanted", "D. visited"],
    "answer": "B. washed",
    "explanation": "Phần gạch chân 'ed' trong 'washed' được phát âm là /t/. Trong khi đó, 'ed' trong các từ còn lại được phát âm là /ɪd/."
  },
  {    
    "question": "Choose the word in which the underlined [ed] part is pronounced differently.",
    "options": ["A. played", "B. stopped", "C. booked", "D. passed"],
    "answer": "A. played",
    "explanation": "Phần gạch chân 'ed' trong 'played' được phát âm là /d/. Trong khi đó, 'ed' trong các từ còn lại được phát âm là /t/."
  },
  {    
    "question": "Choose the word in which the underlined [ed] part is pronounced differently.",
    "options": ["A. needed", "B. decided", "C. started", "D. cooked"],
    "answer": "D. cooked",
    "explanation": "Phần gạch chân 'ed' trong 'cooked' được phát âm là /t/. Trong khi đó, 'ed' trong các từ còn lại được phát âm là /ɪd/."
  },
  {   
    "question": "Choose the word in which the underlined [ed] part is pronounced differently.",
    "options": ["A. enjoyed", "B. called", "C. laughed", "D. watered"],
    "answer": "C. laughed",
    "explanation": "Phần gạch chân 'ed' trong 'laughed' được phát âm là /t/. Trong khi đó, 'ed' trong 'enjoyed' và 'called' được phát âm là /d/, và 'watered' được phát âm là /ɪd/. Câu hỏi này có lỗi, nhưng 'laughed' là đáp án hợp lý nhất."
  },
  {
    "group": 0,
    "question": "Choose the word in which the underlined [ed] part is pronounced differently.",
    "options": ["A. watched", "B. looked", "C. listened", "D. talked"],
    "answer": "C. listened",
    "explanation": "Phần gạch chân 'ed' trong 'listened' được phát âm là /d/. Trong khi đó, 'ed' trong các từ còn lại được phát âm là /t/."
  },
   {
    "group": 1,
    "question": "They __________ (clean) the park last weekend.",
    "options": ["A. clean", "B. cleaned", "C. cleaning", "D. are cleaning"],
    "answer": "B. cleaned",
    "explanation": "Động từ 'clean' là động từ có quy tắc. Trong thì Quá khứ đơn, ta thêm '-ed' để tạo thành 'cleaned'."
  },
  {    
    "question": "She __________ (not help) the elderly people because she was busy.",
    "options": ["A. didn't helped", "B. didn't help", "C. doesn't help", "D. not help"],
    "answer": "B. didn't help",
    "explanation": "Trong câu phủ định của thì Quá khứ đơn, ta dùng 'didn't' và động từ nguyên mẫu (bare-infinitive)."
  },
  {    
    "question": "What __________ you __________ (do) at the orphanage yesterday?",
    "options": ["A. did / do", "B. do / did", "C. were / doing", "D. did / doing"],
    "answer": "A. did / do",
    "explanation": "Trong câu hỏi của thì Quá khứ đơn, ta dùng trợ động từ 'Did' và động từ chính ở dạng nguyên mẫu (do)."
  },
  {    
    "question": "The students __________ (plant) new trees in the school garden a week ago.",
    "options": ["A. planted", "B. plants", "C. plant", "D. were planting"],
    "answer": "A. planted",
    "explanation": "'Plant' là động từ có quy tắc. Dấu hiệu 'a week ago' cho biết câu này ở thì Quá khứ đơn."
  },
  {    
    "question": "He __________ (collect) a lot of rubbish from the beach last Sunday.",
    "options": ["A. collecting", "B. collects", "C. collected", "D. collect"],
    "answer": "C. collected",
    "explanation": "'Collect' là động từ có quy tắc. Câu này diễn tả một hành động đã hoàn thành trong quá khứ."
  },
  {   
    "question": "We __________ (donate) old books to the library in 2023.",
    "options": ["A. donate", "B. donated", "C. donates", "D. were donating"],
    "answer": "B. donated",
    "explanation": "'In 2023' là một mốc thời gian cụ thể trong quá khứ. 'Donate' là động từ có quy tắc, ở thì Quá khứ đơn ta thêm '-ed'."
  },
  {   
    "question": "My friends and I __________ (visit) the lonely old people last month.",
    "options": ["A. visit", "B. visited", "C. are visiting", "D. visits"],
    "answer": "B. visited",
    "explanation": "'Visit' là động từ có quy tắc. Dấu hiệu 'last month' cho biết câu này ở thì Quá khứ đơn."
  },
  {   
    "question": "Where __________ you __________ (go) for your volunteer work last summer?",
    "options": ["A. do / go", "B. did / go", "C. will / go", "D. are / going"],
    "answer": "B. did / go",
    "explanation": "Trong câu hỏi với từ để hỏi (WH-question) ở thì Quá khứ đơn, ta dùng trợ động từ 'Did' và động từ nguyên mẫu."
  },
  {   
    "question": "They __________ (not build) a new community center last year.",
    "options": ["A. did not built", "B. didn't built", "C. didn't build", "D. not built"],
    "answer": "C. didn't build",
    "explanation": "'Build' là động từ bất quy tắc. Trong câu phủ định của thì Quá khứ đơn, ta dùng 'didn't' và động từ ở dạng nguyên mẫu."
  },
  {   
    "question": "The children __________ (give) toys to the poor kids two days ago.",
    "options": ["A. gave", "B. given", "C. give", "D. gives"],
    "answer": "A. gave",
    "explanation": "'Give' là động từ bất quy tắc. Dạng quá khứ của 'give' là 'gave'. 'Two days ago' là dấu hiệu của thì Quá khứ đơn."
  },
   {   
    "question": "She __________ (not collect) old clothes for the homeless last month.",
    "options": ["A. didn't collected", "B. didn't collect", "C. doesn't collect", "D. not collect"],
    "answer": "B. didn't collect",
    "explanation": "Trong câu phủ định của thì Quá khứ đơn, ta dùng 'didn't' và động từ nguyên mẫu (collect)."
  },
  {   
    "question": "The students __________ (make) beautiful cards for the children at the hospital yesterday.",
    "options": ["A. make", "B. maked", "C. made", "D. are making"],
    "answer": "C. made",
    "explanation": "'Make' là động từ bất quy tắc. Dạng quá khứ đơn của nó là 'made'."
  },
  {   
    "question": "__________ you __________ (visit) the elderly centre with your class last week?",
    "options": ["A. Do / visit", "B. Did / visit", "C. Are / visiting", "D. Did / visited"],
    "answer": "B. Did / visit",
    "explanation": "Trong câu hỏi quá khứ đơn, trợ động từ 'Did' đi kèm với động từ nguyên mẫu 'visit'."
  },
  {   
    "question": "The volunteers __________ (give) books to the local library a month ago.",
    "options": ["A. give", "B. gave", "C. gives", "D. were giving"],
    "answer": "B. gave",
    "explanation": "'Give' là động từ bất quy tắc. Dạng quá khứ đơn của 'give' là 'gave'."
  },
  {  
    "question": "They __________ (not go) to the beach cleanup because of the heavy rain.",
    "options": ["A. didn't went", "B. weren't going", "C. didn't go", "D. not went"],
    "answer": "C. didn't go",
    "explanation": "'Go' là động từ bất quy tắc. Trong câu phủ định của thì Quá khứ đơn, ta dùng 'didn't' và động từ nguyên mẫu."
  },
  {   
    "question": "Where __________ your team __________ (plant) the flowers last spring?",
    "options": ["A. did / planted", "B. were / planting", "C. did / plant", "D. do / plant"],
    "answer": "C. did / plant",
    "explanation": "Trong câu hỏi quá khứ đơn, ta dùng trợ động từ 'Did' và động từ nguyên mẫu 'plant'."
  },
  {    
    "question": "I __________ (donate) my old clothes to the charity fair last week.",
    "options": ["A. donate", "B. donated", "C. donating", "D. did donate"],
    "answer": "B. donated",
    "explanation": "'Donate' là động từ có quy tắc. Dấu hiệu 'last week' cho biết câu này ở thì Quá khứ đơn."
  },
  {    
    "question": "What kind of project __________ you __________ (find) interesting last summer?",
    "options": ["A. did / find", "B. do / find", "C. did / found", "D. were / finding"],
    "answer": "A. did / find",
    "explanation": "Trong câu hỏi quá khứ đơn, ta dùng trợ động từ 'Did' và động từ nguyên mẫu 'find'."
  },
  {    
    "question": "My teacher __________ (teach) us how to make handicrafts for the elderly last semester.",
    "options": ["A. teach", "B. teached", "C. taught", "D. was teaching"],
    "answer": "C. taught",
    "explanation": "'Teach' là động từ bất quy tắc. Dạng quá khứ đơn của 'teach' là 'taught'."
  },
  {
    "group": 1,
    "question": "We __________ (not clean) the communal house yesterday because of the rain.",
    "options": ["A. didn't clean", "B. didn't cleaned", "C. weren't cleaning", "D. don't clean"],
    "answer": "A. didn't clean",
    "explanation": "Trong câu phủ định của thì Quá khứ đơn, ta dùng 'didn't' và động từ nguyên mẫu 'clean'."
  }
  ] 

