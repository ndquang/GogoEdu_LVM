let unit = "4";
let title = "Music and Arts";
let groups = [
	  "Pronunciation",	
      "Choose the correct answer A, B, C or D to complete each of the sentences.",	  	  
	  "Speaking",
	  "Writing"
]
let  exercises=  [
    {
    "group": 0,
    "question": "Find the word which is pronounced differently in the part underlined [s].",
    "options": ["A. sunburnt", "B. sculpture", "C. service", "D. sugar"],
    "answer": "D. sugar",
    "explanation": "Phần gạch chân 'u' trong 'sunburnt' và 'sculpture' được phát âm là /ʌ/. Riêng 'sugar' được phát âm là /ʊ/. 'Service' có lỗi in ấn, nhưng đáp án vẫn là D."
  },
  {    
    "question": "Find the word which is pronounced differently in the part underlined [s].",
    "options": ["A. measure", "B. pleasure", "C. conclusion", "D. pension"],
    "answer": "D. pension",
    "explanation": "Phần gạch chân trong các từ 'measure', 'pleasure', 'conclusion' đều được phát âm là /ʒ/. Riêng 'pension' được phát âm là /ʃ/."
  },
  {   
    "question": "Find the word which is pronounced differently in the part underlined [c].",
    "options": ["A. delicious", "B. special", "C. concentrate", "D. musician"],
    "answer": "C. concentrate",
    "explanation": "Phần gạch chân 'c' trong 'concentrate' được phát âm là /s/. Trong khi đó, 'ci' trong các từ còn lại được phát âm là /ʃ/."
  },
  {   
    "question": "Find the word which is pronounced differently in the part underlined [s].",
    "options": ["A. usually", "B. composer", "C. leisure", "D. version"],
    "answer": "A. usually",
    "explanation": "Phần gạch chân 'u' trong 'usually' được phát âm là /juː/. Trong khi đó, các từ còn lại có phần gạch chân phát âm là /ə/ (âm schwa)."
  },
  {
    "group": 0,
    "question": "Find the word which is pronounced differently in the part underlined [er].",
    "options": ["A. prefer", "B. perform", "C. painter", "D. concert"],
    "answer": "A. prefer",
    "explanation": "Như vậy, A. prefer là từ khác biệt nhất vì er = /ɜː/ rõ rệt, còn các từ khác đa số rơi vào /ər/."
  },
   {
    "group": 1,
    "question": "My uncle's house is full of interesting pieces of art. It's __________ a museum.",
    "options": ["A. similar", "B. like", "C. as", "D. than"],
    "answer": "B. like",
    "explanation": "'Like' được dùng để so sánh sự giống nhau giữa hai sự vật. Cấu trúc 'A is like B' có nghĩa là 'A giống như B'."
  },
  {   
    "question": "This film is not __________ the original story.",
    "options": ["A. as interesting as", "B. as interesting than", "C. more interesting like", "D. as interesting like"],
    "answer": "A. as interesting as",
    "explanation": "Cấu trúc so sánh bằng 'as + tính từ + as' được dùng để so sánh sự tương đồng về tính chất."
  },
  {   
    "question": "The audience __________ wildly when the band appeared on stage.",
    "options": ["A. smiled", "B. sounded", "C. applauded", "D. cried"],
    "answer": "C. applauded",
    "explanation": "'Applauded wildly' (vỗ tay cuồng nhiệt) là cụm từ diễn tả phản ứng mạnh mẽ của khán giả khi xem một màn biểu diễn."
  },
  {   
    "question": "To __________ successfully, they have to practise the play many times.",
    "options": ["A. perform", "B. play", "C. sing", "D. dance"],
    "answer": "A. perform",
    "explanation": "'Perform' (biểu diễn) là động từ chính xác để nói về việc thể hiện một vở kịch hoặc một tiết mục nghệ thuật."
  },
  {   
    "question": "Turn the TV off. The show is __________.",
    "options": ["A. exciting", "B. peaceful", "C. tiring", "D. boring"],
    "answer": "D. boring",
    "explanation": "'Boring' (nhàm chán) là tính từ phù hợp nhất để miêu tả một chương trình truyền hình không hấp dẫn."
  },
  {   
    "question": "Mozart was one of the most famous __________ of classical music.",
    "options": ["A. actors", "B. composers", "C. artists", "D. makers"],
    "answer": "B. composers",
    "explanation": "'Composers' (nhà soạn nhạc) là danh từ chính xác để chỉ những người viết nhạc cổ điển."
  },
  {    
    "question": "- Did you enjoy the play? - Yes. It was __________ from the previous version.",
    "options": ["A. like", "B. similar", "C. different", "D. same"],
    "answer": "C. different",
    "explanation": "Cụm từ 'different from' (khác với) là cách nói chính xác để so sánh sự khác biệt."
  },
  {
    "group": 1,
    "question": "Because I was sitting in the back row of the theatre, I couldn't see the __________.",
    "options": ["A. painters", "B. musicians", "C. composers", "D. writers"],
    "answer": "B. musicians",
    "explanation": "Trong nhà hát, người ngồi hàng ghế sau thường khó nhìn rõ các nhạc công hoặc diễn viên trên sân khấu. 'Musicians' (nhạc công) là danh từ phù hợp nhất."
  },
   {   
    "question": "This film is __________ the previous one.",
    "options": ["A. like", "B. different to", "C. as", "D. same"],
    "answer": "A. like",
    "explanation": "'Like' được dùng để so sánh sự tương đồng về tính chất hoặc hình thức giữa hai sự vật. Cấu trúc 'A is like B' có nghĩa là 'A giống như B'."
  },
  {   
    "question": "Her painting is __________ mine.",
    "options": ["A. different from", "B. like", "C. similar", "D. as"],
    "answer": "A. different from",
    "explanation": "'Different from' là cụm từ chính xác để diễn tả sự khác biệt giữa hai sự vật. Cấu trúc 'A is different from B' có nghĩa là 'A khác với B'."
  },
  {    
    "question": "He sings __________ a professional singer.",
    "options": ["A. as", "B. like", "C. different from", "D. than"],
    "answer": "B. like",
    "explanation": "'Like' được dùng để so sánh một người hoặc một hành động với một người hoặc một hành động khác. Ở đây, hành động hát của anh ấy được so sánh với một ca sĩ chuyên nghiệp."
  },
  {    
    "question": "His new song is __________ his old ones.",
    "options": ["A. different from", "B. similar", "C. like", "D. as"],
    "answer": "A. different from",
    "explanation": "'Different from' được dùng để chỉ sự khác biệt giữa hai vật hoặc hai nhóm vật thể."
  },
  {    
    "question": "The concert was not __________ I expected.",
    "options": ["A. as good as", "B. as good like", "C. as good than", "D. more good than"],
    "answer": "A. as good as",
    "explanation": "Cấu trúc 'as + tính từ + as' được dùng để so sánh bằng. Ở đây, nó so sánh mức độ chất lượng của buổi hòa nhạc với kỳ vọng của người nói."
  },
  {    
    "question": "Your hairstyle is __________ my sister's.",
    "options": ["A. different from", "B. as", "C. similar", "D. like"],
    "answer": "A. different from",
    "explanation": "Cụm 'different from' được sử dụng để chỉ sự khác nhau giữa kiểu tóc của người nghe và kiểu tóc của chị gái người nói."
  },
  {    
    "question": "Listening to classical music is not __________ playing a game.",
    "options": ["A. as exciting as", "B. as exciting than", "C. more exciting like", "D. exciting as"],
    "answer": "A. as exciting as",
    "explanation": "Cấu trúc 'not as + tính từ + as' được dùng để so sánh không bằng. Ở đây, nó so sánh mức độ hào hứng của hai hoạt động."
  },
  {
    "question": "He dances __________ a famous choreographer.",
    "options": ["A. as", "B. like", "C. different from", "D. same"],
    "answer": "B. like",
    "explanation": "Tương tự như câu 3, 'like' được dùng để so sánh hành động nhảy của anh ấy với một biên đạo múa nổi tiếng."
  },
  {    
    "question": "This book is __________ interesting __________ that one.",
    "options": ["A. as / as", "B. as / than", "C. so / as", "D. as / like"],
    "answer": "A. as / as",
    "explanation": "Cấu trúc so sánh bằng 'as + tính từ + as' được dùng để chỉ hai cuốn sách có cùng mức độ thú vị."
  },
  {    
    "question": "Their performance was __________ the one they did last year.",
    "options": ["A. same as", "B. different from", "C. like", "D. as"],
    "answer": "C. like",
    "explanation": "'Like' được dùng để so sánh một buổi biểu diễn với một buổi biểu diễn khác. 'Like' ở đây dùng như một giới từ."
  },
  {    
    "question": "This photo is __________ the one in the newspaper.",
    "options": ["A. different to", "B. different from", "C. same", "D. like"],
    "answer": "B. different from",
    "explanation": "Cụm từ 'different from' là cách diễn tả chính xác sự khác biệt giữa hai bức ảnh."
  },
  {    
    "question": "Your guitar sounds __________ a piano.",
    "options": ["A. different from", "B. as", "C. like", "D. similar"],
    "answer": "C. like",
    "explanation": "'Sounds like' là cụm từ phổ biến để diễn tả âm thanh của một thứ giống với âm thanh của một thứ khác."
  },
  {    
    "question": "The new comedy film is not __________ the one we watched last week.",
    "options": ["A. as funny as", "B. funny as", "C. funnier than", "D. like funny"],
    "answer": "A. as funny as",
    "explanation": "Cấu trúc 'not as + tính từ + as' được dùng để so sánh không bằng, chỉ ra rằng bộ phim mới không hài hước bằng bộ phim tuần trước."
  },
  {   
    "question": "Her voice is __________ her mother's.",
    "options": ["A. like", "B. different from", "C. similar", "D. as"],
    "answer": "A. like",
    "explanation": "'Like' được dùng để so sánh hai sự vật có tính chất tương tự nhau, trong trường hợp này là giọng nói."
  },
  {   
    "question": "This album is not __________ the last one.",
    "options": ["A. as popular as", "B. as popular than", "C. more popular like", "D. popular as"],
    "answer": "A. as popular as",
    "explanation": "Cấu trúc so sánh không bằng 'not as + tính từ + as' được dùng để chỉ rằng album này không nổi tiếng bằng album trước."
  },
  {   
    "question": "Learning to play the violin is __________ learning to play the piano.",
    "options": ["A. different from", "B. as", "C. like", "D. similar"],
    "answer": "A. different from",
    "explanation": "Cụm 'different from' được dùng để so sánh hai hoạt động học tập không giống nhau."
  },
  {   
    "question": "My favourite band sounds __________ the Beatles.",
    "options": ["A. as", "B. like", "C. different from", "D. similar"],
    "answer": "B. like",
    "explanation": "'Sounds like' là cụm từ để so sánh âm nhạc của một ban nhạc này với ban nhạc khác."
  },
  {   
    "question": "The book is not __________ the movie.",
    "options": ["A. as good as", "B. good as", "C. better than", "D. good like"],
    "answer": "A. as good as",
    "explanation": "Cấu trúc 'not as + tính từ + as' được dùng để chỉ ra rằng cuốn sách không hay bằng bộ phim."
  },
  {    
    "question": "His performance was __________ the one last year.",
    "options": ["A. different from", "B. like", "C. as", "D. same"],
    "answer": "A. different from",
    "explanation": "Cụm từ 'different from' được dùng để chỉ sự khác biệt trong màn trình diễn."
  },
  {
    "group": 1,
    "question": "Your drawing is __________ a professional artist's.",
    "options": ["A. as good as", "B. like", "C. different from", "D. so good"],
    "answer": "B. like",
    "explanation": "'Like' được dùng để so sánh nét vẽ của người nói với nét vẽ của một họa sĩ chuyên nghiệp."
  }
  ] 

