let unit = "9";
let title = "World Englishes";
let groups = [
	  "Pronunciation",
	  "Choose the correct answers A,B,C, or D to complete each of the sentences",
      "Writing",
	  "Choose the sentence that is best written from the words/phrases given.",	  	  
	  "Speaking."
]
let exercises = [
   {
    "group": groups[0],
    "question": "Choose the word which has a different stress pattern.",
    "options": ["A. collection", "B. energy", "C. finally", "D. equity"],
    "answer": "A. collection",
    "explanation": "Các từ 'energy' (EN-er-gy), 'finally' (FI-nal-ly), 'equity' (E-qui-ty) có trọng âm rơi vào âm tiết thứ nhất. Riêng từ 'collection' (col-LEC-tion) có trọng âm rơi vào âm tiết thứ hai."
  },
  {    
    "question": "Choose the word which has a different stress pattern.",
    "options": ["A. bilingual", "B. concentric", "C. connection", "D. entity"],
    "answer": "D. entity",
    "explanation": "Các từ 'bilingual' (bi-LIN-gual), 'concentric' (con-CEN-tric), 'connection' (con-NEC-tion) có trọng âm rơi vào âm tiết thứ hai. Riêng từ 'entity' (EN-ti-ty) có trọng âm rơi vào âm tiết thứ nhất."
  },
  {
    "question": "Choose the word which has a different stress pattern.",
    "options": ["A. aggression", "B. medical", "C. rarity", "D. confident"],
    "answer": "A. aggression",
    "explanation": "Các từ 'medical' (ME-di-cal), 'rarity' (RA-ri-ty), 'confident' (CON-fi-dent) có trọng âm rơi vào âm tiết thứ nhất. Riêng từ 'aggression' (ag-GRES-sion) có trọng âm rơi vào âm tiết thứ hai."
  },
  {
    "question": "Choose the word which has a different stress pattern.",
    "options": ["A. information", "B. administer", "C. facility", "D. theoretical"],
    "answer": "D. theoretical",
    "explanation": "Từ 'theoretical' (the-o-RE-ti-cal) có trọng âm rơi vào âm tiết thứ ba. Các từ 'information' (in-for-MA-tion), 'administer' (ad-MI-nis-ter), 'facility' (fa-CI-li-ty) có trọng âm rơi vào âm tiết thứ hai."
  },
  {
    "group": groups[0],
    "question": "Choose the word which has a different stress pattern.",
    "options": ["A. photographic", "B. majority", "C. economic", "D. affirmation"],
    "answer": "B. majority",
    "explanation": "Các từ 'photographic' (pho-to-GRA-phic), 'economic' (e-co-NO-mic), 'affirmation' (af-fir-MA-tion) có trọng âm rơi vào âm tiết thứ ba. Riêng từ 'majority' (ma-JO-ri-ty) có trọng âm rơi vào âm tiết thứ hai."
  },
   {
    "group": groups[1],
    "question": "Can you help me to translate this English phrasal verb __________ Vietnamese?",
    "options": ["A. over", "B. in", "C. into", "D. up"],
    "answer": "C. into",
    "explanation": "Cấu trúc cố định để dịch từ ngôn ngữ này sang ngôn ngữ khác là 'translate something into something else'."
  },
  {   
    "question": "The teacher asked his students to copy the new words __________ their notebooks.",
    "options": ["A. over", "B. on", "C. up", "D. into"],
    "answer": "D. into",
    "explanation": "Cụm từ 'copy something into something' (chép cái gì vào cái gì) là cấu trúc chính xác, diễn tả việc chép từ mới vào vở."
  },
  {    
    "question": "She didn't take any English classes, but she still spoke English well. She __________ up the language from other workers.",
    "options": ["A. copied", "B. picked", "C. looked", "D. went"],
    "answer": "B. picked",
    "explanation": "Cụm động từ 'pick up' có nghĩa là 'học lỏm' hoặc 'tiếp thu' một cách tự nhiên, rất phù hợp với ngữ cảnh."
  },
  {   
    "question": "Before any exam, I usually __________ over the grammatical points I have learnt.",
    "options": ["A. look", "B. pick", "C. go", "D. copy"],
    "answer": "A. look",
    "explanation": "Cụm động từ 'look over' có nghĩa là 'xem lại, ôn lại' một cách nhanh chóng, rất phù hợp với ngữ cảnh ôn bài trước khi thi."
  },
  {	
    "question": "When I started learning English, my mother taught me how to __________ up new words in the dictionary?",
    "options": ["A. look", "B. pick", "C. go", "D. copy"],
    "answer": "A. look",
    "explanation": "Cụm động từ 'look up' có nghĩa là 'tra cứu' hoặc 'tìm kiếm thông tin' trong từ điển."
  },
   {   
    "question": "The new film is about a boy __________ can speak several languages.",
    "options": ["A. who", "B. which", "C. whose", "D. what"],
    "answer": "A. who",
    "explanation": "'A boy' là danh từ chỉ người. Ta dùng đại từ quan hệ 'who' để thay thế và làm chủ ngữ cho mệnh đề quan hệ."
  },
  {   
    "question": "Lan is a student __________ English vocabulary is the strongest in our class.",
    "options": ["A. who", "B. which", "C. whose", "D. what"],
    "answer": "C. whose",
    "explanation": "Cần đại từ quan hệ sở hữu 'whose' để chỉ 'English vocabulary' thuộc về 'Lan'."
  },
  {   
    "question": "The English-English dictionary __________ I bought at this store a few days ago is expensive.",
    "options": ["A. who", "B. which", "C. when", "D. whose"],
    "answer": "B. which",
    "explanation": "'The English-English dictionary' là danh từ chỉ vật. Ta dùng đại từ quan hệ 'which' để thay thế."
  },
  {   
    "question": "That's the writer historical fiction __________ I recommended.",
    "options": ["A. who", "B. which", "C. where", "D. whose"],
    "answer": "D. whose",
    "explanation": "'Whose' là đại từ quan hệ sở hữu, dùng để chỉ 'historical fiction' là tác phẩm của 'the writer'."
  },
  {    
    "question": "Nigeria is a country __________ is one of the largest English-speaking countries in the world.",
    "options": ["A. who", "B. which", "C. where", "D. whose"],
    "answer": "B. which",
    "explanation": "'Nigeria' là danh từ chỉ vật (đất nước), cần đại từ quan hệ 'which' để thay thế và làm chủ ngữ cho mệnh đề quan hệ."
  },
  {
    "group": groups[1],
    "question": "That's the man __________ I spoke to at the English Teaching Conference the other day.",
    "options": ["A. who", "B. when", "C. which", "D. whose"],
    "answer": "A. who",
    "explanation": "'The man' là danh từ chỉ người. Đại từ quan hệ 'who' được dùng để thay thế và làm tân ngữ cho mệnh đề quan hệ."
  },
   {
    "group": groups[4],
    "question": "A: Good luck with your final exam.\nB: __________",
    "options": ["A. Thanks. I'll try my best.", "B. No, thank you.", "C. Thanks. I'd love, too.", "D. Yes, I agree with you."],
    "answer": "A. Thanks. I'll try my best.",
    "explanation": "Đây là câu trả lời phổ biến và lịch sự nhất để đáp lại lời chúc may mắn, vừa cảm ơn vừa thể hiện sự quyết tâm."
  },
  {   
    "question": "A: Are you giving a presentation tomorrow? I wish you all the best of luck.\nB: __________",
    "options": ["A. No, I am not.", "B. Yes, I am.", "C. Thank you so much.", "D. Thanks. I'm going with you."],
    "answer": "C. Thank you so much.",
    "explanation": "Mục đích chính của câu nói là để chúc may mắn, do đó đáp lại bằng lời cảm ơn là phù hợp nhất."
  },
  {   
    "question": "A: Son, good luck with your new job.\nB: __________",
    "options": ["A. Yes, I'm doing a new job.", "B. Thanks, Dad. I'll make you proud.", "C. No, I couldn't do it.", "D. Thanks for sharing with me."],
    "answer": "B. Thanks, Dad. I'll make you proud.",
    "explanation": "Câu trả lời này vừa thể hiện sự biết ơn, vừa bày tỏ sự quyết tâm và mong muốn làm cha mẹ tự hào."
  },
  {    
    "question": "A: Best of luck with your new language project.\nB: __________",
    "options": ["A. Yes, I'm learning a new language.", "B. Yes, I can teach you a new language.", "C. Thanks. You can ask another question.", "D. Thanks, I really need it."],
    "answer": "D. Thanks, I really need it.",
    "explanation": "Đây là cách nói phổ biến để cảm ơn một lời chúc may mắn, thể hiện sự khiêm tốn và biết ơn."
  },
  {
    "group": groups[4],
    "question": "A: I know you're applying for the English speaking club. Break a leg!\nB: __________",
    "options": ["A. Thanks. I'll try my best.", "B. Sure. I like that club very much.", "C. Thank you. Welcome to the club.", "D. Yes, I feel better now."],
    "answer": "A. Thanks. I'll try my best.",
    "explanation": "'Break a leg' là một cách nói để chúc may mắn. 'Thanks. I'll try my best.' là câu trả lời trực tiếp và phù hợp nhất."
  },
   {
    "group": groups[2],
    "question": "Singapore is a multilingual country. It has four official languages.",
    "options": ["A. Singapore is a multilingual country which have four official languages.", "B. Singapore is a multilingual country has four official languages.", "C. Singapore is a multilingual country which has four official languages.", "D. Singapore is a multilingual country have four official languages."],
    "answer": "C. Singapore is a multilingual country which has four official languages.",
    "explanation": "'Which' là đại từ quan hệ thay thế cho danh từ số ít 'multilingual country', do đó động từ theo sau phải là 'has' (động từ số ít)."
  },
  {    
    "question": "It is an Expanding Circle country. Its people speak English as a foreign language.",
    "options": ["A. It is an Expanding Circle country whose people speak English as a foreign language.", "B. It is an Expanding Circle country which people speak English as a foreign language.", "C. It is an Expanding Circle country who speak English as a foreign language.", "D. It is an Expanding Circle country whose people speaks English as a foreign language."],
    "answer": "A. It is an Expanding Circle country whose people speak English as a foreign language.",
    "explanation": "'Whose' là đại từ quan hệ sở hữu, dùng để thay thế cho 'Its' và nối hai mệnh đề một cách chính xác."
  },
  {
    "question": "Vietnamese people use English to communicate with foreigners. Foreigners come to Viet Nam to work, study, or visit.",
    "options": ["A. Vietnamese people use English to communicate with foreigners they come to Viet Nam to work, study, or visit.", "B. Vietnamese people use English to communicate with foreigners who come to Viet Nam to work, study, or visit.", "C. Vietnamese people use English to communicate with foreigners which come to Viet Nam to work, study, or visit.", "D. Vietnamese people use English to communicate with foreigners who come to Viet Nam to work, study, or visit."],
    "answer": "B. Vietnamese people use English to communicate with foreigners who come to Viet Nam to work, study, or visit.",
    "explanation": "'Who' là đại từ quan hệ thay thế cho danh từ chỉ người 'foreigners' và làm chủ ngữ cho mệnh đề quan hệ."
  },
  {
    "question": "English is now the most popular language. A lot of people learn it.",
    "options": ["A. English is now the most popular language a lot of people learn it.", "B. English is now the most popular language a lot of people learn.", "C. English is now the most popular language which a lot of people learn.", "D. English is now the most popular language which lot of people learn."],
    "answer": "C. English is now the most popular language which a lot of people learn.",
    "explanation": "'Which' là đại từ quan hệ thay thế cho danh từ chỉ vật 'language'. Cấu trúc câu này là chính xác nhất."
  },
  {
    "group": groups[2],
    "question": "English is a compulsory subject from Grade 3 to Grade 12. Most Vietnamese schools teach it.",
    "options": ["A. English is a compulsory subject from Grade 3 to Grade 12 most Vietnamese schools teach it.", "B. English is a compulsory subject from Grade 3 to Grade 12 which most Vietnamese schools teach it.", "C. English is a compulsory subject from Grade 3 to Grade 12 which most Vietnamese schools teaching.", "D. English is a compulsory subject from Grade 3 to Grade 12 which most Vietnamese schools teach."],
    "answer": "D. English is a compulsory subject from Grade 3 to Grade 12 which most Vietnamese schools teach.",
    "explanation": "'Which' là đại từ quan hệ thay thế cho danh từ 'subject' và làm tân ngữ cho động từ 'teach'. Trong mệnh đề quan hệ này, tân ngữ 'it' của câu gốc được lược bỏ."
  },
  {
    "group": groups[1],
    "question": "Which word has the underlined part pronounced differently from that of the others?",
    "options": ["A. family", "B. natural", "C. travel", "D. destination"],
    "answer": "D. destination",
    "explanation": "Phần gạch chân 'a' trong các từ A, B, C được phát âm là /æ/. Riêng từ 'destination' được phát âm là /eɪ/."
  },
  {    
    "question": "Which word has the underlined part pronounced differently from that of the others?",
    "options": ["A. holidays", "B. positions", "C. tours", "D. models"],
    "answer": "B. positions",
    "explanation": "Từ này có lỗi in ấn, nhưng đáp án phù hợp nhất là 'positions' với âm /ə/. Các từ 'holidays' và 'models' đều có âm /ɒ/, trong khi 'tours' có âm /ʊə/."
  },
  {   
    "question": "Which word has a different stress pattern from that of the others?",
    "options": ["A. music", "B. nation", "C. destroy", "D. visit"],
    "answer": "C. destroy",
    "explanation": "Các từ 'music' (MU-sic), 'nation' (NA-tion), 'visit' (VI-sit) có trọng âm rơi vào âm tiết thứ nhất. Riêng từ 'destroy' (de-STROY) có trọng âm rơi vào âm tiết thứ hai."
  },
  {   
    "question": "Which word has a different stress pattern from that of the others?",
    "options": ["A. traveller", "B. authentic", "C. incurious", "D. correction"],
    "answer": "A. traveller",
    "explanation": "Các từ 'authentic' (au-THEN-tic), 'incurious' (in-CU-ri-ous), 'correction' (cor-REC-tion) có trọng âm rơi vào âm tiết thứ hai. Riêng từ 'traveller' (TRA-vel-ler) có trọng âm rơi vào âm tiết thứ nhất."
  },
  {   
    "question": "Trang asked me if she __________ any natural wonders in America.",
    "options": ["A. I know", "B. you knew", "C. I knew", "D. you know"],
    "answer": "C. I knew",
    "explanation": "Trong câu tường thuật, động từ 'asked' ở quá khứ, vì vậy động từ trong mệnh đề sau cũng phải ở quá khứ. Lựa chọn C là phù hợp nhất."
  },
  {   
    "question": "Nick asked Ann if she __________ on a tour of Hue that weekend.",
    "options": ["A. is going", "B. was going", "C. will go", "D. should go"],
    "answer": "B. was going",
    "explanation": "Động từ 'asked' ở thì quá khứ, nên cần lùi thì của mệnh đề sau. 'Was going' (quá khứ tiếp diễn) được dùng để diễn tả một hành động đã được dự định trong quá khứ."
  },
  {
    "question": "You have to show the man the entrance ticket __________ you have just bought outside the museum.",
    "options": ["A. which", "B. who", "C. whose", "D. what"],
    "answer": "A. which",
    "explanation": "'The entrance ticket' là danh từ chỉ vật. Ta dùng đại từ quan hệ 'which' để thay thế và làm tân ngữ cho động từ 'bought'."
  },
  {
    "question": "Lan: Which tour guide do you prefer?\nMi: I prefer the one __________ has the American accent.",
    "options": ["A. which", "B. who", "C. whose", "D. what"],
    "answer": "B. who",
    "explanation": "'The one' ở đây ám chỉ 'a tour guide' (người). Cần đại từ quan hệ 'who' để thay thế và làm chủ ngữ cho mệnh đề quan hệ."
  },
  {   
    "question": "Phong: Who's that man over there?\nTom: He's the scientist __________ research on the history of English won the first prize last year.",
    "options": ["A. which", "B. who", "C. whose", "D. what"],
    "answer": "C. whose",
    "explanation": "'Whose' là đại từ quan hệ sở hữu, dùng để chỉ 'research' là của 'the scientist'."
  },
  {
    "question": "Whenever I visit a new place, I use __________ to get directions.",
    "options": ["A. trip itinerary", "B. guided tour", "C. package holiday", "D. Google Maps"],
    "answer": "D. Google Maps",
    "explanation": "'Google Maps' là một ứng dụng phổ biến để tìm đường đi, phù hợp với ngữ cảnh của câu."
  },
  {
    "question": "She __________ Italian when she was living in Rome.",
    "options": ["A. picked out", "B. picked on", "C. picked up", "D. picked off"],
    "answer": "C. picked up",
    "explanation": "Cụm động từ 'pick up' có nghĩa là 'học lỏm' hoặc 'tiếp thu' một cách tự nhiên, rất phù hợp với ngữ cảnh."
  },
  {
    "question": "Woods and fields are typical features of the English __________.",
    "options": ["A. landscape", "B. attraction", "C. development", "D. exploration"],
    "answer": "A. landscape",
    "explanation": "'Landscape' (phong cảnh) là từ phù hợp nhất để miêu tả các đặc điểm tự nhiên như rừng và cánh đồng."
  },
  {
    "question": "Lan: Can I borrow your English-English dictionary fora while, Nam?\nNam: __________",
    "options": ["A. Yes, you can.", "B. No, you can't", "C. Sure. Here you are.", "D. Sure. It's useful."],
    "answer": "A. Yes, you can.",
    "explanation": "'Yes, you can.' là câu trả lời đơn giản và lịch sự nhất để đồng ý cho mượn đồ."
  },
  {
   "group": groups[1],
    "question": "Stranger: You must keep quiet in the museum, please.\nAnn: __________",
    "options": ["A. Yes, I agree.", "B. No, I don't agree.", "C. Yes, I think so.", "D. I'm sorry."],
    "answer": "D. I'm sorry.",
    "explanation": "'I'm sorry' là câu trả lời lịch sự để xin lỗi vì đã không tuân thủ quy tắc và thể hiện sự tiếp thu lời nhắc nhở."
  }
];