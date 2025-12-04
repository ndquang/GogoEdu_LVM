let unit = "7";
let title = "Traffic";
let groups = [
	  "Pronunciation",	
      "Choose the correct answer A, B, C or D to complete each of the sentences.",
	  "Find the word/phrase that needs correcting in each of the following sentences.",
	  "Writing"
]
let  exercises=  [
 {
    "group": 0,
    "question": "Choose the word in which the underlined [i] part is pronounced differently.",
    "options": ["A. flight", "B. tricycle", "C. sign", "D. vehicle"],
    "answer": "D. vehicle",
    "explanation": "Phần gạch chân 'i' trong 'vehicle' được phát âm là /ɪ/. Trong khi đó, 'i' trong các từ còn lại được phát âm là /aɪ/."
  },
  {    
    "question": "Choose the word in which the underlined [a] part is pronounced differently.",
    "options": ["A. date", "B. safety", "C. traffic", "D. station"],
    "answer": "C. traffic",
    "explanation": "Phần gạch chân 'a' trong 'traffic' được phát âm là /æ/. Trong khi đó, 'a' trong các từ còn lại được phát âm là /eɪ/."
  },
  {   
    "question": "Choose the word in which the underlined [y] part is pronounced differently.",
    "options": ["A. system", "B. cyclist", "C. crying", "D. style"],
    "answer": "A. system",
    "explanation": "Phần gạch chân 'y' trong 'system' được phát âm là /ɪ/. Trong khi đó, 'y' trong các từ còn lại được phát âm là /aɪ/."
  },
  {   
    "question": "Choose the word in which the underlined [ey] part is pronounced differently.",
    "options": ["A. survey", "B. honey", "C. obey", "D. grey"],
    "answer": "B. honey",
    "explanation": "Phần gạch chân 'ey' trong 'honey' được phát âm là /i/. Trong khi đó, 'ey' trong các từ còn lại được phát âm là /eɪ/."
  },
  {
    "group": 0,
    "question": "Choose the word in which the underlined [ei] part is pronounced differently.",
    "options": ["A. weight", "B. sleigh", "C. eighty", "D. height"],
    "answer": "D. height",
    "explanation": "Phần gạch chân 'ei' và 'eigh' trong các từ 'weight', 'sleigh', 'eighty' đều được phát âm là /eɪ/. Riêng 'height' được phát âm là /aɪ/."
  },
   {
    "group": 1,
    "question": "A: “How did she get here?”\nB: “__________”",
    "options": ["A. She came by train.", "B. She came here last night.", "C. The train was crowded.", "D. Is it far from here?"],
    "answer": "A. She came by train.",
    "explanation": "Câu hỏi 'How...?' yêu cầu câu trả lời về phương tiện di chuyển. 'By train' là câu trả lời chính xác."
  },
  {   
    "question": "My mum __________ the bus to work every morning, but my dad drives.",
    "options": ["A. catches", "B. goes", "C. does", "D. runs"],
    "answer": "A. catches",
    "explanation": "Cụm từ 'catch the bus' (bắt xe buýt) là cách nói chính xác và phổ biến để chỉ việc đi lại bằng xe buýt."
  },
  {   
    "question": "Traffic accidents can be prevented if people __________ the rules.",
    "options": ["A. remember", "B. obey", "C. go after", "D. take care of"],
    "answer": "B. obey",
    "explanation": "'Obey the rules' (tuân theo các quy tắc) là cụm từ chính xác để nói về việc chấp hành luật lệ."
  },
  {   
    "question": "You should look right and left when you go __________ the road.",
    "options": ["A. along", "B. up", "C. down", "D. across"],
    "answer": "D. across",
    "explanation": "'Go across the road' (băng qua đường) là cụm từ chính xác khi đi từ bên này sang bên kia đường."
  },
  {   
    "question": "Hurry up, or we'll __________ the last bus.",
    "options": ["A. lose", "B. avoid", "C. miss", "D. drop"],
    "answer": "C. miss",
    "explanation": "'Miss the bus' (lỡ chuyến xe buýt) là cụm từ phù hợp nhất với ngữ cảnh 'Nhanh lên, nếu không chúng ta sẽ lỡ chuyến xe buýt cuối cùng'."
  },
  {   
    "question": "She's always tired. She __________ go to bed late every night.",
    "options": ["A. wouldn't", "B. shouldn't", "C. mightn't", "D. couldn't"],
    "answer": "B. shouldn't",
    "explanation": "'Shouldn't' (không nên) là trợ động từ dùng để đưa ra lời khuyên hoặc gợi ý hành động không nên làm."
  },
  {    
    "question": "The public __________ in this city is quite good, and it's not expensive.",
    "options": ["A. journey", "B. travel", "C. vehicle", "D. transport"],
    "answer": "D. transport",
    "explanation": "'Public transport' (giao thông công cộng) là cụm từ chính xác để chỉ hệ thống di chuyển trong thành phố."
  },
  {    
    "question": "__________ is not very far from here to the harbour.",
    "options": ["A. There", "B. This", "C. It", "D. That"],
    "answer": "C. It",
    "explanation": "Ta dùng đại từ 'It' để nói về khoảng cách hoặc thời gian, như trong 'It is not very far from here'."
  },
  {
    "question": "What's the best way to get around Ho Chi Minh City?",
    "options": ["A. by boat", "B. by train", "C. by motorbike", "D. by horse"],
    "answer": "C. by motorbike",
    "explanation": "Motorbike (xe máy) là phương tiện giao thông phổ biến và hiệu quả nhất để di chuyển trong các thành phố lớn ở Việt Nam như TP. Hồ Chí Minh."
  },
  {    
    "question": "The children should look both ways before they __________ the street.",
    "options": ["A. cross", "B. run", "C. walk", "D. go"],
    "answer": "A. cross",
    "explanation": "'Cross the street' (băng qua đường) là cụm từ chính xác khi nói về việc đi từ bên này sang bên kia đường."
  },
  {    
    "question": "You should wear a helmet when you ride a __________.",
    "options": ["A. bike", "B. car", "C. bus", "D. train"],
    "answer": "A. bike",
    "explanation": "Helmet (mũ bảo hiểm) là vật dụng bắt buộc phải đội khi đi xe đạp, xe máy để đảm bảo an toàn."
  },
  {    
    "question": "The bus is always full. You have to stand all the way.",
    "options": ["A. crowded", "B. safe", "C. empty", "D. slow"],
    "answer": "A. crowded",
    "explanation": "Từ 'crowded' (đông đúc) có nghĩa là có nhiều người, phù hợp với ngữ cảnh 'bus is always full'."
  },
  {    
    "question": "The students are waiting for the school bus at the bus __________.",
    "options": ["A. stop", "B. station", "C. bridge", "D. light"],
    "answer": "A. stop",
    "explanation": "'Bus stop' (điểm dừng xe buýt) là nơi mọi người chờ xe buýt."
  },
  {    
    "question": "Traffic jams are a big problem in big cities, especially during __________ hour.",
    "options": ["A. peak", "B. busy", "C. rush", "D. fast"],
    "answer": "C. rush",
    "explanation": "'Rush hour' (giờ cao điểm) là khoảng thời gian mà giao thông trở nên rất đông đúc."
  },
  {    
    "question": "What is the __________ for this bike? - It's 2 million dong.",
    "options": ["A. money", "B. fee", "C. cost", "D. price"],
    "answer": "D. price",
    "explanation": "'Price' (giá cả) là từ phù hợp nhất để hỏi về giá tiền của một món đồ."
  },
  {    
    "question": "You __________ turn right when the traffic light is red.",
    "options": ["A. must", "B. mustn't", "C. should", "D. can"],
    "answer": "B. mustn't",
    "explanation": "'Mustn't' (không được) được dùng để diễn tả một điều cấm, trong trường hợp này là không được rẽ phải khi đèn đỏ."
  },
  {    
    "question": "Children should not play with matches. It is a very __________ game.",
    "options": ["A. boring", "B. funny", "C. dangerous", "D. safe"],
    "answer": "C. dangerous",
    "explanation": "'Dangerous' (nguy hiểm) là tính từ phù hợp để miêu tả một trò chơi có thể gây hại."
  },
  {
    "question": "He rides his bike very __________ to school every day.",
    "options": ["A. slowly", "B. slow", "C. quick", "D. fast"],
    "answer": "A. slowly",
    "explanation": "'Slowly' là trạng từ bổ nghĩa cho động từ 'rides', diễn tả cách thức đi xe."
  },
  {   
    "question": "How __________ is it from your house to the school?",
    "options": ["A. long", "B. far", "C. high", "D. near"],
    "answer": "B. far",
    "explanation": "'How far' (bao xa) được dùng để hỏi về khoảng cách."
  },
  {   
    "question": "You should be very careful when you are __________ a bus.",
    "options": ["A. catching", "B. getting off", "C. getting on", "D. B and C are correct"],
    "answer": "D. B and C are correct",
    "explanation": "Khi lên hoặc xuống xe buýt (getting on/getting off), bạn cần phải cẩn thận."
  },
  {    
    "question": "The sign says 'Stop'. We __________ stop here.",
    "options": ["A. have to", "B. don't have to", "C. mustn't", "D. can't"],
    "answer": "A. have to",
    "explanation": "'Have to' (phải) được dùng để diễn tả một nghĩa vụ hoặc quy định cần tuân thủ."
  },
  {    
    "question": "Walking is a good way to improve your health. It's __________.",
    "options": ["A. tired", "B. healthy", "C. unhealthy", "D. boring"],
    "answer": "B. healthy",
    "explanation": "'Healthy' (lành mạnh) là tính từ phù hợp để miêu tả lợi ích của việc đi bộ."
  },
  {   
    "question": "The police told him to __________ his car because it was blocking the traffic.",
    "options": ["A. park", "B. stop", "C. move", "D. start"],
    "answer": "C. move",
    "explanation": "'Move' (di chuyển) là hành động phù hợp khi chiếc xe đang gây cản trở giao thông."
  },
  {    
    "question": "You must __________ the speed limit on this road.",
    "options": ["A. follow", "B. break", "C. ignore", "D. keep"],
    "answer": "A. follow",
    "explanation": "'Follow the speed limit' (tuân thủ giới hạn tốc độ) là cụm từ chính xác."
  },
  {   
    "question": "He got __________ his motorbike and went to the market.",
    "options": ["A. on", "B. in", "C. off", "D. from"],
    "answer": "A. on",
    "explanation": "Ta dùng 'get on' (lên) với xe máy, xe đạp, xe buýt."
  },
  {   
    "question": "You can go straight ahead when the traffic light is __________.",
    "options": ["A. red", "B. yellow", "C. green", "D. blue"],
    "answer": "C. green",
    "explanation": "Đèn xanh (green light) cho phép các phương tiện di chuyển thẳng."
  },
  {   
    "question": "The accident happened because the driver was driving too __________.",
    "options": ["A. slow", "B. fast", "C. safe", "D. good"],
    "answer": "B. fast",
    "explanation": "'Fast' (nhanh) là tính từ phù hợp để chỉ tốc độ lái xe gây ra tai nạn."
  },
  {   
    "question": "You should be careful when you cross the street. You __________ look at the traffic.",
    "options": ["A. shouldn't", "B. have to", "C. don't have to", "D. must"],
    "answer": "D. must",
    "explanation": "'Must' (phải) được dùng để nhấn mạnh sự cần thiết của hành động này."
  }
  ] 

