let unit = "8";
let title = "Films";
let groups = [
	  "Pronunciation",	
      "Choose the correct answer A, B, C or D to complete each of the sentences.",
	  "Find the word/phrase that needs correcting in each of the following sentences.",
	  "Writing"
]
let  exercises=  [
   {
    "group": 1,
    "question": "Choose the word in which the underlined part is pronounced differently.",
    "options": ["A. hear", "B. near", "C. fear", "D. care"],
    "answer": "D. care",
    "explanation": "Phần gạch chân 'ea' trong 'care' được phát âm là /eə/. Trong khi đó, các từ còn lại đều có âm /ɪə/."
  },
  {   
    "question": "Choose the word in which the underlined part is pronounced differently.",
    "options": ["A. cheer", "B. clear", "C. pear", "D. pier"],
    "answer": "C. pear",
    "explanation": "Phần gạch chân 'ea' trong 'pear' được phát âm là /eə/. Trong khi đó, các từ còn lại đều có âm /ɪə/."
  },
  {   
    "question": "Choose the word in which the underlined part is pronounced differently.",
    "options": ["A. square", "B. hair", "C. clear", "D. share"],
    "answer": "C. clear",
    "explanation": "Phần gạch chân 'ea' trong 'clear' được phát âm là /ɪə/. Trong khi đó, các từ còn lại đều có âm /eə/."
  },
  {   
    "question": "Choose the word in which the underlined part is pronounced differently.",
    "options": ["A. there", "B. where", "C. here", "D. fare"],
    "answer": "C. here",
    "explanation": "Phần gạch chân 'ere' trong 'here' được phát âm là /ɪə/. Trong khi đó, các từ còn lại đều có âm /eə/."
  },
  {   
    "question": "Choose the word in which the underlined part is pronounced differently.",
    "options": ["A. nightmare", "B. stair", "C. chair", "D. year"],
    "answer": "D. year",
    "explanation": "Phần gạch chân 'ea' trong 'year' được phát âm là /ɪə/. Trong khi đó, các từ còn lại đều có âm /eə/."
  },
  {   
    "question": "Choose the word in which the underlined part is pronounced differently.",
    "options": ["A. dear", "B. bear", "C. fear", "D. tear (nước mắt)"],
    "answer": "B. bear",
    "explanation": "Phần gạch chân 'ea' trong 'bear' được phát âm là /eə/. Trong khi đó, các từ còn lại đều có âm /ɪə/."
  },
  {   
    "question": "Choose the word in which the underlined part is pronounced differently.",
    "options": ["A. hair", "B. chair", "C. stair", "D. career"],
    "answer": "D. career",
    "explanation": "Phần gạch chân 'are' trong 'career' được phát âm là /ɪə/. Trong khi đó, các từ còn lại đều có âm /eə/."
  },
  {   
    "question": "Choose the word in which the underlined part is pronounced differently.",
    "options": ["A. atmosphere", "B. seat", "C. here", "D. clear"],
    "answer": "B. seat",
    "explanation": "Phần gạch chân 'ea' trong 'seat' được phát âm là /iː/. Trong khi đó, các từ còn lại đều có âm /ɪə/."
  },
  {    
    "question": "Choose the word in which the underlined part is pronounced differently.",
    "options": ["A. pair", "B. share", "C. take", "D. stare"],
    "answer": "C. take",
    "explanation": "Phần gạch chân 'a' trong 'take' được phát âm là /eɪ/. Trong khi đó, các từ còn lại đều có âm /eə/."
  },
  {
    "group": 0,
    "question": "Choose the word in which the underlined part is pronounced differently.",
    "options": ["A. mean", "B. gear", "C. near", "D. dear"],
    "answer": "A. mean",
    "explanation": "Phần gạch chân 'ea' trong 'mean' được phát âm là /iː/. Trong khi đó, các từ còn lại đều có âm /ɪə/."
  },
    {
    "group": 1,
    "question": "Tom Cruise, Penélope Cruz and Cameron Diaz __________ in the film Vanilla Sky.",
    "options": ["A. direct", "B. star", "C. make"],
    "answer": "B. star",
    "explanation": "'Star' (đóng vai chính) là từ phù hợp nhất để miêu tả vai trò của các diễn viên nổi tiếng trong một bộ phim."
  },
  {   
    "question": "The film begins with a terrible disaster, but it has a happy __________.",
    "options": ["A. ending", "B. acting", "C. setting"],
    "answer": "A. ending",
    "explanation": "'Happy ending' (kết thúc có hậu) là cụm từ đối lập với một khởi đầu tồi tệ."
  },
  {   
    "question": "The film received positive __________, Most critics say it's a must-see.",
    "options": ["A. reviews", "B. reports", "C. summaries"],
    "answer": "A. reviews",
    "explanation": "'Reviews' (đánh giá, phê bình) là từ phù hợp nhất để chỉ ý kiến của các nhà phê bình về một bộ phim."
  },
  {    
    "question": "Most people say the film is a must-see - the acting is excellent and the __________ is gripping.",
    "options": ["A. character", "B. style", "C. plot"],
    "answer": "C. plot",
    "explanation": "'Plot' (cốt truyện) là từ phù hợp để đi kèm với 'gripping' (hấp dẫn, lôi cuốn)."
  },
  {   
    "question": "Jean Dujardin won the best __________ award in 2011 for the film The Artist.",
    "options": ["A. actor", "B. character", "C. writer"],
    "answer": "A. actor",
    "explanation": "'Best actor award' (giải thưởng diễn viên xuất sắc nhất) là cụm từ chính xác để nói về giải thưởng dành cho diễn viên."
  },
  {   
    "question": "Tom Cruise played the leading __________ in the film Mission Impossible.",
    "options": ["A. performance", "B. part", "C. action"],
    "answer": "B. part",
    "explanation": "'Leading part' (vai chính) là cụm từ phù hợp nhất để miêu tả vai trò của một diễn viên trong phim."
  },
  {    
    "question": "A: “Do you like the film?”\nB: “__________”",
    "options": ["A. No, it's too frightening for me.", "B. Sure. What film shall we see?", "C. Who stars in it?"],
    "answer": "A. No, it's too frightening for me.",
    "explanation": "Đây là câu trả lời từ chối lịch sự và có lý do chính đáng cho việc không thích bộ phim."
  },
  {   
    "question": "The film broke box office records and became a __________.",
    "options": ["A. thriller", "B. master", "C. blockbuster"],
    "answer": "C. blockbuster",
    "explanation": "'Blockbuster' (bom tấn) là thuật ngữ chỉ một bộ phim rất thành công về mặt doanh thu."
  },
   {   
    "question": "The film’s main __________ is a young boy who discovers a magical world.",
    "options": ["A. director", "B. character", "C. producer", "D. setting"],
    "answer": "B. character",
    "explanation": "Trong ngữ cảnh này, 'character' (nhân vật) là từ chính xác nhất để chỉ vai diễn trung tâm trong một bộ phim."
  },
  {   
    "question": "The actor won an Oscar for his amazing __________ in the film.",
    "options": ["A. acting", "B. plot", "C. action", "D. role"],
    "answer": "A. acting",
    "explanation": "'Acting' (diễn xuất) là kỹ năng của diễn viên, và là lý do để giành giải Oscar."
  },
  {   
    "question": "The film’s __________ was so boring that I fell asleep.",
    "options": ["A. plot", "B. review", "C. action", "D. trailer"],
    "answer": "A. plot",
    "explanation": "'Plot' (cốt truyện) là yếu tố quyết định tính hấp dẫn của một bộ phim. Nếu cốt truyện nhàm chán, người xem sẽ dễ ngủ gật."
  },
  {   
    "question": "This film has a star-studded __________ of actors, including Leonardo DiCaprio and Brad Pitt.",
    "options": ["A. cast", "B. crew", "C. audience", "D. team"],
    "answer": "A. cast",
    "explanation": "'Cast' (dàn diễn viên) là thuật ngữ chính xác để chỉ nhóm diễn viên trong một bộ phim."
  },
  {   
    "question": "The movie is set in Paris, which provides a beautiful __________.",
    "options": ["A. review", "B. scene", "C. setting", "D. ending"],
    "answer": "C. setting",
    "explanation": "'Setting' (bối cảnh) là từ phù hợp để miêu tả địa điểm và thời gian của một câu chuyện."
  },
  {   
    "question": "I love films that have a happy __________ where the hero and heroine get married.",
    "options": ["A. scene", "B. ending", "C. plot", "D. character"],
    "answer": "B. ending",
    "explanation": "'Happy ending' (kết thúc có hậu) là cụm từ phổ biến để chỉ kết quả tốt đẹp của một bộ phim."
  },
  {   
    "question": "The film received excellent __________ from critics and audiences alike.",
    "options": ["A. comments", "B. reviews", "C. reports", "D. discussions"],
    "answer": "B. reviews",
    "explanation": "'Reviews' (đánh giá, phê bình) là từ chính xác để chỉ ý kiến của mọi người về một bộ phim."
  },
  {   
    "question": "That comedy film was so funny that it made me __________ a lot.",
    "options": ["A. cry", "B. laugh", "C. think", "D. shout"],
    "answer": "B. laugh",
    "explanation": "Một bộ phim hài hước sẽ khiến người xem 'laugh' (cười)."
  },
  {    
    "question": "The film is based on a true story, which makes it even more __________.",
    "options": ["A. boring", "B. terrible", "C. exciting", "D. emotional"],
    "answer": "D. emotional",
    "explanation": "Một bộ phim dựa trên câu chuyện có thật thường gợi lên cảm xúc mạnh mẽ ở người xem. 'Emotional' (cảm động, nhiều cảm xúc) là từ phù hợp nhất."
  },
  {
    "group": 1,
    "question": "The special __________ in this sci-fi movie are incredible!",
    "options": ["A. effects", "B. sounds", "C. scenes", "D. actions"],
    "answer": "A. effects",
    "explanation": "'Special effects' (hiệu ứng đặc biệt) là thuật ngữ chỉ các kỹ xảo trong phim, đặc biệt là phim khoa học viễn tưởng."
  }
  ]