let unit = "5";
let title = "Food and Drink";
let groups = [
	  "Pronunciation",	
      "Choose the correct answer A, B, C or D to complete each of the sentences.",	  	  
	  "Speaking",
	  "Writing"
]
let  exercises=  [
   {
    "group": 0,
    "question": "Find the word whose underlined part has a different [a] sound.",
    "options": ["A. pan", "B. ham", "C. lamb", "D. plate"],
    "answer": "D. plate",
    "explanation": "Phần gạch chân 'a' trong 'plate' được phát âm là /eɪ/. Trong khi đó, 'a' trong các từ còn lại được phát âm là /æ/."
  },
  {    
    "question": "Find the word whose underlined part has a different [o] sound.",
    "options": ["A. pot", "B. bottle", "C. roll", "D. hot"],
    "answer": "C. roll",
    "explanation": "Phần gạch chân 'o' trong 'roll' được phát âm là /əʊ/. Trong khi đó, 'o' trong các từ còn lại được phát âm là /ɒ/."
  },
  {   
    "question": "Find the word whose underlined part has a different [au] sound.",
    "options": ["A. daughter", "B. sauce", "C. fault", "D. laugh"],
    "answer": "D. laugh",
    "explanation": "Phần gạch chân 'au' trong các từ A, B, C đều được phát âm là /ɔː/. Riêng 'laugh' được phát âm là /lɑːf/ với 'au' có âm /ɑː/."
  },
  {   
    "question": "Find the word whose underlined part has a different [a] sound.",
    "options": ["A. was", "B. walk", "C. water", "D. wall"],
    "answer": "A. was",
    "explanation": "Phần gạch chân 'a' trong 'was' được phát âm là /ɒ/. Trong khi đó, 'a' trong các từ còn lại đều được phát âm là /ɔː/."
  },
  {
    "group": 0,
    "question": "Find the word whose underlined part has a different [o] sound.",
    "options": ["A. morning", "B. forget", "C. pork", "D. fork"],
    "answer": "B. forget",
    "explanation": "Phần gạch chân 'o' trong 'forget' được phát âm là /ə/. Trong khi đó, 'o' trong các từ còn lại được phát âm là /ɔː/."
  },
  {
    "group": 1,
    "question": "We haven't got __________ rice left for breakfast.",
    "options": ["A. some", "B. no", "C. any"],
    "answer": "C. any",
    "explanation": "Trong câu phủ định, ta dùng 'any' với danh từ không đếm được (rice)."
  },
  {    
    "question": "There __________ cans of orange juice in the fridge.",
    "options": ["A. are some", "B. are any", "C. is some"],
    "answer": "A. are some",
    "explanation": "'Cans of orange juice' là danh từ đếm được số nhiều, và đây là câu khẳng định, nên dùng 'are some'."
  },
  {   
    "question": "Ann has __________ dresses. She's always buying new ones.",
    "options": ["A. Lots of", "B. some", "C. any"],
    "answer": "A. Lots of",
    "explanation": "Ngữ cảnh 'luôn mua những cái mới' cho thấy cô ấy có một số lượng lớn váy. 'Lots of' là cụm từ phù hợp nhất để chỉ số lượng lớn."
  },
  {   
    "question": "__________ organic food in the supermarket?",
    "options": ["A. Were there any", "B. Were there some", "C. Was there any"],
    "answer": "C. Was there any",
    "explanation": "'Organic food' là danh từ không đếm được. Trong câu hỏi, ta dùng 'Was there any' để hỏi về sự tồn tại của danh từ không đếm được."
  },
  {
    "question": "This morning he didn't have __________ cup of tea as usual.",
    "options": ["A. some", "B. no", "C. a"],
    "answer": "C. a",
    "explanation": "'Cup' là danh từ đếm được số ít, và mạo từ không xác định 'a' được dùng để chỉ một đối tượng cụ thể."
  },
  {    
    "question": "He can teach me to cook some popular dishes. He has __________ free time today.",
    "options": ["A. any", "B. a lot of", "C. many"],
    "answer": "B. a lot of",
    "explanation": "'Free time' là danh từ không đếm được. 'A lot of' được dùng để chỉ số lượng lớn trong câu khẳng định."
  },
  {   
    "question": "There __________ yogurt in this carton.",
    "options": ["A. isn't any", "B. isn't some", "C. aren't any"],
    "answer": "A. isn't any",
    "explanation": "'Yogurt' là danh từ không đếm được. Ta dùng 'isn't any' để diễn tả sự không có mặt của nó trong câu phủ định."
  },
  {   
    "question": "Did you buy __________ bottle of cooking oil yesterday?",
    "options": ["A. some", "B. a", "C. any"],
    "answer": "B. a",
    "explanation": "'Bottle' là danh từ đếm được số ít. Trong câu hỏi, mạo từ không xác định 'a' được dùng để hỏi về một đối tượng cụ thể."
  },
    {   
    "question": "My mom bought __________ apples from the market.",
    "options": ["A. some", "B. any", "C. much", "D. a few"],
    "answer": "A. some",
    "explanation": "Trong câu khẳng định, 'some' được dùng với danh từ đếm được số nhiều 'apples'."
  },
  {    
    "question": "Is there __________ milk in the fridge?",
    "options": ["A. some", "B. a lot of", "C. any", "D. a little"],
    "answer": "C. any",
    "explanation": "Trong câu hỏi, 'any' được dùng với danh từ không đếm được 'milk'."
  },
  {    
    "question": "We don't have __________ coffee left.",
    "options": ["A. some", "B. any", "C. a lot of", "D. a few"],
    "answer": "B. any",
    "explanation": "Trong câu phủ định, 'any' được dùng với danh từ không đếm được 'coffee'."
  },
  {    
    "question": "There are __________ tomatoes on the table.",
    "options": ["A. some", "B. any", "C. a few", "D. B and C are correct"],
    "answer": "D. B and C are correct",
    "explanation": "Trong câu khẳng định, 'some' và 'a few' đều được dùng với danh từ đếm được số nhiều 'tomatoes'."
  },
  {    
    "question": "We need __________ sugar for this cake.",
    "options": ["A. a lot of", "B. a few", "C. many", "D. an"],
    "answer": "A. a lot of",
    "explanation": "Để chỉ số lượng lớn đường, 'a lot of' là cụm từ phù hợp nhất."
  },
  {    
    "question": "Have you got __________ bottled water?",
    "options": ["A. a", "B. any", "C. some", "D. a little"],
    "answer": "B. any",
    "explanation": "Trong câu hỏi, 'any' được dùng với danh từ không đếm được 'water'."
  },
  {   
    "question": "He has __________ eggs for breakfast every morning.",
    "options": ["A. some", "B. any", "C. a", "D. one"],
    "answer": "A. some",
    "explanation": "Trong câu khẳng định, 'some' được dùng với danh từ đếm được số nhiều 'eggs'."
  },
  {   
    "question": "There is __________ rice in the bowl.",
    "options": ["A. lots of", "B. many", "C. a few", "D. an"],
    "answer": "A. lots of",
    "explanation": "'Lots of' được dùng để chỉ số lượng lớn của danh từ không đếm được 'rice'."
  },
  {    
    "question": "She didn't eat __________ meat at the party.",
    "options": ["A. some", "B. any", "C. a lot", "D. many"],
    "answer": "B. any",
    "explanation": "Trong câu phủ định, 'any' được dùng với danh từ không đếm được 'meat'."
  },
  {    
    "question": "Are there __________ potatoes in the basket?",
    "options": ["A. any", "B. some", "C. many", "D. a little"],
    "answer": "A. any",
    "explanation": "Trong câu hỏi, 'any' được dùng với danh từ đếm được số nhiều 'potatoes'."
  },
  {   
    "question": "We have __________ oranges in the basket.",
    "options": ["A. lots of", "B. a", "C. an", "D. a few"],
    "answer": "A. lots of",
    "explanation": "'Lots of' được dùng để chỉ số lượng lớn của danh từ đếm được 'oranges'."
  },
  {   
    "question": "Can I have __________ bread, please?",
    "options": ["A. some", "B. any", "C. a few", "D. many"],
    "answer": "A. some",
    "explanation": "Trong lời mời hoặc đề nghị lịch sự, 'some' được dùng với danh từ không đếm được 'bread'."
  },
  {   
    "question": "They didn't buy __________ snacks for the trip.",
    "options": ["A. some", "B. a lot of", "C. any", "D. a little"],
    "answer": "C. any",
    "explanation": "Trong câu phủ định, 'any' được dùng với danh từ đếm được số nhiều 'snacks'."
  },
  {   
    "question": "There is __________ oil in the bottle.",
    "options": ["A. some", "B. any", "C. an", "D. a little"],
    "answer": "A. some",
    "explanation": "Trong câu khẳng định, 'some' được dùng với danh từ không đếm được 'oil'."
  },
  {   
    "question": "We had __________ fun cooking together.",
    "options": ["A. some", "B. any", "C. a lot of", "D. many"],
    "answer": "C. a lot of",
    "explanation": "'Fun' là danh từ không đếm được. 'A lot of' được dùng để chỉ số lượng lớn niềm vui."
  },
  {   
    "question": "Did you buy __________ fruit for the party?",
    "options": ["A. some", "B. a lot", "C. any", "D. a few"],
    "answer": "C. any",
    "explanation": "Trong câu hỏi, 'any' được dùng với danh từ không đếm được 'fruit'."
  },
  {   
    "question": "They sold __________ cakes at the school fair.",
    "options": ["A. many", "B. any", "C. lots of", "D. a few"],
    "answer": "C. lots of",
    "explanation": "'Lots of' được dùng để chỉ số lượng lớn bánh đã bán được. 'Many' cũng đúng nhưng 'lots of' tự nhiên hơn trong ngữ cảnh này."
  },
  {   
    "question": "I'd like to have __________ tea, please.",
    "options": ["A. any", "B. some", "C. a", "D. a few"],
    "answer": "B. some",
    "explanation": "Trong lời đề nghị lịch sự, 'some' được dùng với danh từ không đếm được 'tea'."
  },
  {    
    "question": "There aren't __________ eggs in the fridge.",
    "options": ["A. some", "B. lots of", "C. any", "D. much"],
    "answer": "C. any",
    "explanation": "Trong câu phủ định, 'any' được dùng với danh từ đếm được số nhiều 'eggs'."
  },
  {
    "group": 1,
    "question": "They have __________ friends who are vegetarian.",
    "options": ["A. some", "B. any", "C. a few", "D. A and C are correct"],
    "answer": "D. A and C are correct",
    "explanation": "Trong câu khẳng định, 'some' và 'a few' đều được dùng với danh từ đếm được số nhiều 'friends'."
  }
  ] 

