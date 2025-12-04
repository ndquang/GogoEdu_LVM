let unit = "6";
let title = "Vietnamese lifestyle: Then and Now";
let groups = [
	  "Pronunciation",
      "Choose the best answers to complete the sentences.",
	  "Choose the option which is CLOSEST/OPPOSITE in meaning to the [-] word in each sentence.",	  
	  "Choose the correct answers A, B, C, or D to complete each of the sentences",	  
	  "Speaking."
]
let exercises = [
  {
    "group": groups[0],
    "question": "Choose the word that differs from the other three in the position of primary stress.",
    "options": ["A. temple", "B. campus", "C. pursue", "D. promise"],
    "answer": "C. pursue",
    "explanation": "Các từ 'temple' (TEM-ple), 'campus' (CAM-pus), 'promise' (PRO-mise) có trọng âm rơi vào âm tiết thứ nhất. Riêng từ 'pursue' (pur-SUE) có trọng âm rơi vào âm tiết thứ hai."
  },
  {    
    "question": "Choose the word that differs from the other three in the position of primary stress.",
    "options": ["A. democratic", "B. relationship", "C. traditional", "D. participate"],
    "answer": "A. democratic",
    "explanation": "Các từ 'relationship' (re-LA-tion-ship), 'traditional' (tra-DI-tion-al), 'participate' (par-TI-ci-pate) có trọng âm rơi vào âm tiết thứ hai. Riêng từ 'democratic' (de-mo-CRA-tic) có trọng âm rơi vào âm tiết thứ ba."
  },
   {
    "question": "Choose the word whose [wh] part differs from the other three in pronunciation.",
    "options": ["A. wheat", "B. whole", "C. wheel", "D. whether"],
    "answer": "B. whole",
    "explanation": "Phần gạch chân 'wh' trong các từ A, C, D đều được phát âm là /w/. Riêng từ 'whole' được phát âm là /hoʊl/ với 'wh' được phát âm là /h/."
  },
  {
    "group": groups[0],
    "question": "Choose the word whose [l] part differs from the other three in pronunciation.",
    "options": ["A. hold", "B. family", "C. celebrate", "D. calm"],
    "answer": "A. hold",
    "explanation": "→ Khác biệt: A. hold (phát âm /oʊ/, còn lại 'a' với các cách khác)."
  },
  {
    "group": groups[2],
    "question": "My grandmother spent her childhood in [various] parts of Viet Nam.",
    "options": ["A. similar", "B. different", "C. difficult", "D. same"],
    "answer": "B. different",
    "explanation": "Từ 'various' có nghĩa là nhiều loại, đa dạng, khác nhau. Trong ngữ cảnh này, 'different' là từ gần nghĩa nhất."
  },
   {    
    "question": "The soldiers had to fight the war to [protect] their country.",
    "options": ["A. develop", "B. defend", "C. attend", "D. struggle"],
    "answer": "B. defend",
    "explanation": "Động từ 'protect' (bảo vệ) gần nghĩa nhất với từ 'defend' (bảo vệ, chống lại sự tấn công) trong ngữ cảnh này."
  },
  {    
    "question": "It is his [practice] to tell stories about his childhood to his children at bedtime.",
    "options": ["A. tradition", "B. behavior", "C. custom", "D. manner"],
    "answer": "C. custom",
    "explanation": "Trong câu này, 'practice' mang nghĩa là 'thói quen' hoặc 'thói quen thường ngày'. 'Custom' (tập quán, thói quen) là từ đồng nghĩa chính xác nhất."
  },
  {
    "question": "I [took notes] in my notebook of the talk on the history of the drums.",
    "options": ["A. liked", "B. learned", "C. understood", "D. wrote down"],
    "answer": "D. wrote down",
    "explanation": "Cụm từ 'took notes' có nghĩa là ghi chú lại. 'Wrote down' (viết xuống) là từ đồng nghĩa chính xác cho hành động này."
  },
  {
    "question": "Children now have fewer [opportunities] to learn about nature than their peers in the past.",
    "options": ["A. chances", "B. time", "C. interests", "D. tools"],
    "answer": "A. chances",
    "explanation": "Từ 'opportunities' có nghĩa là cơ hội. 'Chances' cũng mang nghĩa 'cơ hội' và là từ đồng nghĩa trực tiếp."
  },
  {
    "question": "Students now do not [depend] as much on textbooks as they used to.",
    "options": ["A. want", "B. rely wholly", "C. appreciate", "D. ask for"],
    "answer": "B. rely wholly",
    "explanation": "Động từ 'depend' có nghĩa là phụ thuộc, dựa vào. 'Rely wholly' (phụ thuộc hoàn toàn) là từ đồng nghĩa phù hợp nhất trong ngữ cảnh này."
  },
   {
    "question": "My uncle Martin has a [great love] for cleaning the bathrooms.",
    "options": ["A. access", "B. connection", "C. stress", "D. disgust"],
    "answer": "D. disgust",
    "explanation": "'Great love' (rất yêu thích) là một cảm xúc tích cực mạnh mẽ. Trái nghĩa của nó là 'disgust' (sự kinh tởm, ghê sợ)."
  },
  {
    "question": "People now can entertain from [various] sources like TVs, computers, smartphones, entertainment centres.",
    "options": ["A. rare", "B. few", "C. interesting", "D. many"],
    "answer": "D. many",
    "explanation": "Tương tự câu 1, 'various' nghĩa là nhiều loại, đa dạng. Trong câu này, việc liệt kê nhiều nguồn giải trí cho thấy từ 'many' (nhiều) là từ đồng nghĩa chính xác nhất."
  },
  {    
     "group": groups[2],
    "question": "The college was [far away] from his farmhouse, so his parents bought him a motorbike.",
    "options": ["A. close", "B. mountainous", "C. downtown", "D. extended"],
    "answer": "A. close",
    "explanation": "'Far away' có nghĩa là 'ở xa'. Trái nghĩa trực tiếp và chính xác nhất là 'close' (gần)."
  },
  
  {
	"group": groups[3], 
    "question": "- __________ to your pen pal yet? - Not yet I'm too busy.",
    "options": ["A. Do you write", "B. Are you writing", "C. Did you write", "D. Have you written"],
    "answer": "D. Have you written",
    "explanation": "Từ 'yet' (chưa) là một dấu hiệu nhận biết của thì Hiện tại hoàn thành (Present Perfect), dùng để hỏi về một việc đã hoàn thành hay chưa cho đến hiện tại."
  },
  {
    "question": "__________ farmers used buffalo-driven carts to transport agricultural products.",
    "options": ["A. Tradition", "B. Traditional", "C. Traditionally", "D. Untraditional"],
    "answer": "B. Traditional",
    "explanation": "Câu này cần một tính từ để bổ nghĩa cho danh từ 'farmers'. 'Traditional' (thuộc về truyền thống) là tính từ phù hợp nhất về ngữ pháp và ngữ nghĩa."
  },
  {
    "question": "Do you ever wish you __________ go to England for higher education?",
    "options": ["A. can", "B. could", "C. should", "D. may"],
    "answer": "B. could",
    "explanation": "Cấu trúc 'wish + S + V-past' dùng để diễn tả một mong ước trái ngược với thực tế ở hiện tại. 'Could' là dạng quá khứ của 'can' và được dùng trong trường hợp này."
  },
  {
    "question": "Is there a __________ gap between you and your parents?",
    "options": ["A. generation", "B. age", "C. time", "D. communication"],
    "answer": "A. generation",
    "explanation": "'Generation gap' (khoảng cách thế hệ) là một cụm danh từ cố định trong tiếng Anh để chỉ sự khác biệt về quan điểm, thái độ giữa các thế hệ."
  },
  {
    "question": "The city has an exceptionally rich __________ of historic buildings.",
    "options": ["A. heritage", "B. tradition", "C. custom", "D. culture"],
    "answer": "A. heritage",
    "explanation": "'Heritage' (di sản) là từ phù hợp nhất để chỉ những giá trị lịch sử, văn hóa, kiến trúc được truyền lại từ quá khứ, như các tòa nhà cổ."
  },
  {
    "question": "I wish he __________ complaining about his parents and had a heart-to-heart conversation with them.",
    "options": ["A. will stop", "B. stops", "C. has stopped", "D. stopped"],
    "answer": "D. stopped",
    "explanation": "Cấu trúc 'wish + S + V-past' được dùng để diễn tả một mong muốn trái ngược với sự thật ở hiện tại. 'Stopped' là thì quá khứ đơn, phù hợp với cấu trúc này."
  },
  {
    "question": "It is necessary for young people __________ about our history.",
    "options": ["A. know", "B. to know", "C. knowing", "D. known"],
    "answer": "B. to know",
    "explanation": "Cấu trúc 'It is + adj + for someone + to-V' là cấu trúc cố định để diễn tả một việc cần thiết hoặc quan trọng đối với ai đó."
  },
  {   
    "question": "All of us __________ all day on Saturday because we had to finish the project by Monday.",
    "options": ["A. are working", "B. were working", "C. worked", "D. have worked"],
    "answer": "B. were working",
    "explanation": "Cụm từ 'all day on Saturday' chỉ một hành động đang diễn ra liên tục trong một thời điểm cụ thể ở quá khứ. Đây là dấu hiệu của thì Quá khứ tiếp diễn."
  },
  {
    "question": "Do you mind __________ me to the History Museum, Dad?",
    "options": ["A. take", "B. to take", "C. taking", "D. took"],
    "answer": "C. taking",
    "explanation": "Động từ 'mind' (phiền) luôn được theo sau bởi một động từ ở dạng **V-ing**."
  },
  {    
    "question": "Our beliefs and history have been __________ orally by our people for thousands of years.",
    "options": ["A. shown around", "B. cheered up", "C. passed down", "D. taken off"],
    "answer": "C. passed down",
    "explanation": "Cụm động từ 'passed down' có nghĩa là 'truyền lại' hoặc 'truyền từ đời này sang đời khác'. Trong ngữ cảnh này, đây là cụm từ phù hợp nhất."
  },
   {
    "question": "My grandparents don't believe in a(n) __________ parent-child relationship.",
    "options": ["A. extended", "B. democratic", "C. personal", "D. interesting"],
    "answer": "B. democratic",
    "explanation": "Khái niệm 'democratic relationship' (mối quan hệ dân chủ) là một cụm từ chỉ việc con cái được tham gia vào các quyết định gia đình. Đây là một khái niệm hiện đại, đối lập với quan điểm truyền thống của ông bà."
  },
  {    
    "question": "Children nowadays have more freedom to __________ their interests.",
    "options": ["A. pay for", "B. replace", "C. know", "D. pursue"],
    "answer": "D. pursue",
    "explanation": "Cụm từ 'pursue their interests' là một collocation (cụm từ cố định) trong tiếng Anh, có nghĩa là 'theo đuổi sở thích của họ'."
  },
  {
    "question": "I love living in a(n) __________ family where I can learn about traditional values from my grandparents.",
    "options": ["A. extended", "B. nuclear", "C. large", "D. democratic"],
    "answer": "A. extended",
    "explanation": "Việc nhắc đến 'grandparents' (ông bà) cho thấy đây là một gia đình gồm nhiều thế hệ. 'Extended family' (gia đình đa thế hệ) là cụm từ chính xác nhất."
  },
  {
    "question": "Families used to live in one-room houses and they had little _________.",
    "options": ["A. time", "B. understanding", "C. privacy", "D. opportunity"],
    "answer": "C. privacy",
    "explanation": "Sống trong một căn nhà chỉ có một phòng sẽ không có sự riêng tư. 'Privacy' (sự riêng tư) là từ phù hợp nhất trong ngữ cảnh này."
  },
  {
    "question": "Older people prefer reading the news from newspapers while the younger get news from the Internet. That's an example of a __________.",
    "options": ["A. conflict", "B. an attitude", "C. mass communication", "D. a generation gap"],
    "answer": "D. a generation gap",
    "explanation": "Sự khác biệt về thói quen giữa các thế hệ (người già và người trẻ) là một ví dụ điển hình cho 'a generation gap' (khoảng cách thế hệ)."
  },
   {
    "question": "Do you __________ watching Taylor Swift performing live?",
    "options": ["A. want", "B. decide", "C. agree", "D. fancy"],
    "answer": "D. fancy",
    "explanation": "Động từ **fancy** có nghĩa là 'muốn' hoặc 'thích', và nó luôn được theo sau bởi một động từ ở dạng **V-ing**."
  },
  {
    "question": "My father has __________ to take us on a three-day-trip to some historical places in Hue.",
    "options": ["A. enjoyed", "B. promised", "C. fancied", "D. suggested"],
    "answer": "B. promised",
    "explanation": "Động từ **promise** (hứa) được theo sau bởi một động từ nguyên mẫu có **to** (to-infinitive). Cấu trúc 'has promised to take' là chính xác."
  },
  {
    "question": "After years of delay, the people in my village decided __________ downhill to get better services.",
    "options": ["A. to move", "B. moving", "C. move", "D. moved"],
    "answer": "A. to move",
    "explanation": "Động từ **decide** (quyết định) luôn đi kèm với một động từ nguyên mẫu có **to** (to-infinitive). Cấu trúc 'decide to V' là chính xác."
  },
  {
    "question": "My friend Sue always __________ spending too much time chatting online.",
    "options": ["A. enjoys", "B. promises", "C. avoids", "D. has"],
    "answer": "C. avoids",
    "explanation": "Động từ **avoid** (tránh) luôn được theo sau bởi một động từ ở dạng **V-ing**. Về mặt ngữ nghĩa, 'tránh dành quá nhiều thời gian' là một hành động hợp lý và phổ biến."
  },
  {
    "group": groups[3],
    "question": "None of us has started __________ on our Youth Lifestyle project.",
    "options": ["A. worked", "B. working", "C. work", "D. works"],
    "answer": "B. working",
    "explanation": "Động từ **start** (bắt đầu) có thể được theo sau bởi cả 'to-V' hoặc **V-ing**. Trong trường hợp này, chỉ có **working** là đáp án đúng về mặt cấu trúc."
  },
   {
    "group": groups[4],
    "question": "A: In the past, most people went to work by bike.\nB: __________",
    "options": ["A. Did they?", "B. They love cycling!", "C. Bicycles were expensive then.", "D. That's my favourite bike."],
    "answer": "A. Did they?",
    "explanation": "Đây là một câu hỏi ngắn gọn để thể hiện sự ngạc nhiên, tò mò và xác nhận lại thông tin vừa được nghe. Đây là phản ứng giao tiếp rất tự nhiên."
  },
  {    
    "question": "A: I think children nowadays have more opportunities to pursue their interests than in the past.\nB: __________",
    "options": ["A. Do they study harder?", "B. I totally agree with you.", "C. I do not have many opportunities.", "D. How boring!"],
    "answer": "B. I totally agree with you.",
    "explanation": "Người A đưa ra một quan điểm. Lời đáp của người B thể hiện sự đồng tình hoàn toàn, rất phù hợp để tiếp tục cuộc hội thoại."
  },
  {
    "question": "A: Do you see any differences between life in the past and now?\nB: __________",
    "options": ["A. What was life in the past like?", "B. I don't like life in the past.", "C. What differences are there?", "D. Yes, there are many."],
    "answer": "C. What differences are there?",
    "explanation": "Đây là một câu hỏi mở, mời người A đưa ra các ví dụ cụ thể, giúp cuộc trò chuyện trở nên chi tiết và tương tác hơn."
  },
  {
    "question": "A: I'm giving a presentation about changes in teenagers' fashion over the past five years.\nB: __________",
    "options": ["A. What a promise!", "B. Am I fashionable?", "C. I'd love to hear it.", "D. I'm sorry."],
    "answer": "C. I'd love to hear it.",
    "explanation": "Câu trả lời 'I'd love to hear it.' (Tôi rất muốn nghe) thể hiện sự quan tâm và khuyến khích người nói một cách lịch sự."
  },
   {   
    "question": "A: I'm sorry, Mum. I haven't cooked dinner.\nB: __________ . You can do it now.",
    "options": ["A. OK good", "B. That's alright", "C. Welcome", "D. I haven't either"],
    "answer": "B. That's alright",
    "explanation": "'That's alright' là cách nói lịch sự và thông dụng để chấp nhận lời xin lỗi."
  },
  {    
    "question": "A: I promise not to leave my textbook at home again.\nB: __________",
    "options": ["A. No, you won't forget it.", "B. How can you do it?", "C. You have to remember.", "D. Great! I appreciate it."],
    "answer": "D. Great! I appreciate it.",
    "explanation": "Khi ai đó đưa ra một lời hứa, đáp lại bằng 'Great! I appreciate it.' thể hiện sự ủng hộ và đánh giá cao một cách tích cực."
  },
  {
    "group": groups[4],
    "question": "A: My brother promises to help us with our research on trendy entertainment for teenagers.\nB: __________",
    "options": ["A. It's a good idea.", "B. Great! I really appreciate that.", "C. Why not?", "D. Who's he?"],
    "answer": "B. Great! I really appreciate that.",
    "explanation": "Đây là một tin tốt rằng có người sẽ giúp đỡ. Đáp án B thể hiện sự vui mừng và lòng biết ơn một cách mạnh mẽ, rất phù hợp với ngữ cảnh."
  }
];