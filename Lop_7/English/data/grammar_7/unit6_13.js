let unit = "6";
let title = "A Visit to a School";
let groups = [
	  "Pronunciation",	
      "Choose the correct answer A, B, C or D to complete each of the sentences.",
	  "Find the word/phrase that needs correcting in each of the following sentences.",
	  "Writing"
]
let  exercises=  [
      {
    "group": 0,
    "question": "Find the word which is pronounced differently in the part underlined [s].",
    "options": ["A. treasure", "B. occasion", "C. television", "D. surely"],
    "answer": "D. surely",
    "explanation": "Phần gạch chân 's' trong 'surely' được phát âm là /ʃ/. Trong khi đó, 's' trong các từ còn lại được phát âm là /ʒ/."
  },
  {   
    "question": "Find the word which is pronounced differently in the part underlined. [ch]",
    "options": ["A. kitchen", "B. charity", "C. machine", "D. sandwich"],
    "answer": "C. machine",
    "explanation": "Phần gạch chân 'ch' trong 'machine' được phát âm là /ʃ/. Trong khi đó, 'ch' trong các từ còn lại được phát âm là /tʃ/."
  },
  {
    "question": "Find the word which is pronounced differently in the part underlined [g].",
    "options": ["A. fragile", "B. photograph", "C. arranging", "D. vegetable"],
    "answer": "B. photograph",
    "explanation": "Chỉ photograph là phát âm /ɡ/ khác với /dʒ/ của ba từ còn lại."
  },
  {
    "question": "Find the word which is pronounced differently in the part underlined [or].",
    "options": ["A. torch", "B. forget", "C. inform", "D. torn"],
    "answer": "B. forget",
    "explanation": "Phần gạch chân 'o' trong 'forget' được phát âm là /ə/ (âm schwa). Trong khi đó, 'o' trong các từ còn lại được phát âm là /ɔː/."
  },
  {
    "group": 0,
    "question": "Find the word which is pronounced differently in the part underlined [o].",
    "options": ["A. control", "B. bottle", "C. volunteer", "D. concentrate"],
    "answer": "A. control",
    "explanation": "Phần gạch chân 'o' trong 'control' được phát âm là /ə/ (âm schwa). Trong khi đó, 'o' trong các từ còn lại được phát âm là /ɒ/."
  },
  {
    "group": 1,
    "question": "This painting is prettier, but it is not __________ the other one.",
    "options": ["A. as expensive than", "B. expensive than", "C. as expensive as", "D. much expensive as"],
    "answer": "C. as expensive as",
    "explanation": "Cấu trúc so sánh không bằng 'not as + tính từ + as' là chính xác."
  },
  {   
    "question": "Mozart was one of the most famous composers __________ classical music.",
    "options": ["A. about", "B. of", "C. in", "D. for"],
    "answer": "B. of",
    "explanation": "'Composers of' là cụm từ chính xác để chỉ người sáng tác một loại hình âm nhạc cụ thể."
  },
  {    
    "question": "We guess that there were __________ 10,000 people at the concert last night.",
    "options": ["A. above", "B. like", "C. for", "D. about"],
    "answer": "B. like",
    "explanation": "'Like' và 'about' có thể dùng để diễn tả một con số ước chừng hoặc xấp xỉ."
  },
  {
    "question": "Would you like to have __________ apple juice?",
    "options": ["A. lots", "B. a lot", "C. some", "D. little"],
    "answer": "C. some",
    "explanation": "Trong lời mời hoặc đề nghị lịch sự, 'some' được dùng với danh từ không đếm được."
  },
  {   
    "question": "He bought __________ books and then left for home.",
    "options": ["A. a much more", "B. a few", "C. a lot", "D. a little"],
    "answer": "B. a few",
    "explanation": "'A few' được dùng với danh từ đếm được số nhiều 'books' để chỉ một số lượng nhỏ."
  },
  {   
    "question": "Viet Duc High School in Ha Noi is one of the oldest schools in Viet Nam. They __________ it in 1897.",
    "options": ["A. built", "B. got", "C. made", "D. did"],
    "answer": "A. built",
    "explanation": "'In 1897' là một mốc thời gian cụ thể trong quá khứ. Ta dùng thì quá khứ đơn (Simple Past), và 'built' là dạng quá khứ của 'build'."
  },
  {   
    "question": "Last year, Linh participated in __________ funds for street children.",
    "options": ["A. raising", "B. making", "C. gathering", "D. taking"],
    "answer": "A. raising",
    "explanation": "'Raise funds' (gây quỹ) là cụm từ chính xác và phổ biến trong ngữ cảnh từ thiện. Vì có 'participated in', động từ phải ở dạng V-ing."
  },
  {   
    "question": "The lemonade isn't very sweet. I'll add some more __________.",
    "options": ["A. salt", "B. pepper", "C. sugar", "D. lemon"],
    "answer": "C. sugar",
    "explanation": "'Sugar' (đường) là nguyên liệu để làm ngọt đồ uống."
  },
  {    
    "question": "People say that I am __________ my grandmother.",
    "options": ["A. with", "B. as", "C. from", "D. like"],
    "answer": "D. like",
    "explanation": "'Like' là giới từ phù hợp để so sánh ngoại hình. 'Look like' (trông giống) là cụm từ chính xác."
  },
  {
    "group": 1,
    "question": "__________ is a kilo of beef, please? - It's 300,000 dong.",
    "options": ["A. How much", "B. How many", "C. What money", "D. How high"],
    "answer": "A. How much",
    "explanation": "'How much' được dùng để hỏi về giá cả hoặc số lượng của danh từ không đếm được."
  },
  {
    "group": 2,
    "question": "[Although] this motorbike is [more expensive] [as] that one, many people [prefer to buy it].",
    "options": ["A. Although", "B. more expensive", "C. as", "D. prefer to buy it"],
    "answer": "C. as",
    "explanation": "Cần sửa 'as' thành 'than' để phù hợp với cấu trúc so sánh hơn 'more expensive than'."
  },
  {    
    "question": "Mai [asked me]: “[How are you going] [to school] [every day]?”",
    "options": ["A. asked me", "B. How are you going", "C. to school", "D. every day"],
    "answer": "B. How are you going",
    "explanation": "Cần sửa 'How are you going' thành 'How do you go' vì 'every day' là dấu hiệu của thì hiện tại đơn."
  },
  {    
    "question": "[The English summer course] [will start] [in June 2nd] and finish [in August].",
    "options": ["A. The English summer course", "B. will start", "C. in June 2nd", "D. in August"],
    "answer": "C. in June 2nd",
    "explanation": "Với ngày cụ thể (June 2nd), ta dùng giới từ 'on'. 'In' chỉ dùng với tháng hoặc năm."
  },
  {    
    "question": "[There was] [a lot of people] [trying to enter] the stadium to see [the football match].",
    "options": ["A. There was", "B. a lot of people", "C. trying to enter", "D. the football match"],
    "answer": "A. There was",
    "explanation": "'People' là danh từ số nhiều, nên động từ 'was' phải được sửa thành 'were'."
  },
  {
    "group": 2,
    "question": "[The price of food] [is not as] [low] ơthan] it was last summer.",
    "options": ["A. The price of food", "B. is not as", "C. low", "D. than"],
    "answer": "D. than",
    "explanation": "Cấu trúc so sánh không bằng là 'not as + tính từ + as'. Cần sửa 'than' thành 'as'."
  },
   {
    "group": 1,
    "question": "The school library is __________ the second floor.",
    "options": ["A. in", "B. on", "C. at", "D. from"],
    "answer": "B. on",
    "explanation": "Ta dùng giới từ 'on' với các tầng của một tòa nhà."
  },
  {    
    "question": "The new school year starts __________ September.",
    "options": ["A. in", "B. on", "C. at", "D. by"],
    "answer": "A. in",
    "explanation": "Ta dùng giới từ 'in' với các tháng, năm hoặc mùa."
  },
  {    
    "question": "Classes finish __________ 4:30 p.m. every day.",
    "options": ["A. in", "B. on", "C. at", "D. into"],
    "answer": "C. at",
    "explanation": "Ta dùng giới từ 'at' với một thời điểm cụ thể."
  },
  {    
    "question": "The playground is __________ the school building.",
    "options": ["A. on", "B. at", "C. behind", "D. with"],
    "answer": "C. behind",
    "explanation": "'Behind' là giới từ chỉ nơi chốn, có nghĩa là 'phía sau'."
  },
  {    
    "question": "We have a school meeting __________ the last Friday of the month.",
    "options": ["A. in", "B. on", "C. at", "D. during"],
    "answer": "B. on",
    "explanation": "Ta dùng giới từ 'on' với ngày, thứ trong tuần hoặc một ngày cụ thể."
  },
  {    
    "question": "The teacher is standing __________ the board.",
    "options": ["A. in front of", "B. behind", "C. under", "D. between"],
    "answer": "A. in front of",
    "explanation": "'In front of' là giới từ chỉ nơi chốn, có nghĩa là 'phía trước'."
  },
  {    
    "question": "I usually do my homework __________ the evening.",
    "options": ["A. in", "B. on", "C. at", "D. for"],
    "answer": "A. in",
    "explanation": "Ta dùng giới từ 'in' với các buổi trong ngày (in the morning, in the afternoon, in the evening)."
  },
  {
    "question": "The principal's office is located __________ the ground floor.",
    "options": ["A. at", "B. in", "C. on", "D. beside"],
    "answer": "C. on",
    "explanation": "Ta dùng giới từ 'on' với các tầng của một tòa nhà."
  },
  {    
    "question": "My class starts __________ 7:30 a.m.",
    "options": ["A. in", "B. at", "C. on", "D. of"],
    "answer": "B. at",
    "explanation": "Ta dùng giới từ 'at' với một thời điểm cụ thể."
  },
  {    
    "question": "The students are sitting __________ their desks.",
    "options": ["A. at", "B. in", "C. on", "D. beside"],
    "answer": "A. at",
    "explanation": "Ta dùng giới từ 'at' để chỉ vị trí tại một nơi cụ thể, thường là một điểm hoặc một khu vực nhỏ."
  },
  {
    "question": "The school was built __________ 2010.",
    "options": ["A. in", "B. on", "C. at", "D. since"],
    "answer": "A. in",
    "explanation": "Ta dùng giới từ 'in' với năm."
  },
  {    
    "question": "The cafeteria is __________ the library and the gym.",
    "options": ["A. among", "B. in", "C. at", "D. between"],
    "answer": "D. between",
    "explanation": "'Between' được dùng để chỉ vị trí ở giữa hai người, vật, hoặc nơi chốn."
  },
  {    
    "question": "We have a break __________ noon.",
    "options": ["A. in", "B. on", "C. at", "D. for"],
    "answer": "C. at",
    "explanation": "Ta dùng giới từ 'at' với các thời điểm đặc biệt trong ngày như 'at noon', 'at night'."
  },
  {    
    "question": "The teacher wrote the lesson title __________ the top of the page.",
    "options": ["A. on", "B. in", "C. at", "D. to"],
    "answer": "C. at",
    "explanation": "Ta dùng 'at the top of' để chỉ vị trí ở đỉnh hoặc đầu trang."
  },
  {
    "question": "They arrived __________ school early.",
    "options": ["A. at", "B. in", "C. on", "D. to"],
    "answer": "A. at",
    "explanation": "Ta dùng 'arrive at' để chỉ đến một nơi chốn cụ thể."
  },
  {    
    "question": "The students are playing soccer __________ the school yard.",
    "options": ["A. on", "B. at", "C. in", "D. for"],
    "answer": "C. in",
    "explanation": "Ta dùng 'in the school yard' để chỉ bên trong một không gian kín."
  },
  {    
    "question": "We have an English test __________ Monday.",
    "options": ["A. in", "B. at", "C. on", "D. of"],
    "answer": "C. on",
    "explanation": "Ta dùng giới từ 'on' với các thứ trong tuần."
  },
  {   
    "question": "My class is located __________ the second building.",
    "options": ["A. on", "B. at", "C. in", "D. beside"],
    "answer": "C. in",
    "explanation": "Ta dùng giới từ 'in' để chỉ bên trong một tòa nhà hoặc một không gian lớn."
  },
  {   
    "question": "The school canteen is __________ the right of the main hall.",
    "options": ["A. at", "B. in", "C. on", "D. by"],
    "answer": "C. on",
    "explanation": "Ta dùng 'on the right of' để chỉ vị trí bên phải của một đối tượng."
  },
  {   
    "question": "The graduation ceremony will be held __________ June 5th.",
    "options": ["A. at", "B. on", "C. in", "D. from"],
    "answer": "B. on",
    "explanation": "Ta dùng giới từ 'on' với một ngày cụ thể (có cả tháng và ngày)."
  }
  ] 

