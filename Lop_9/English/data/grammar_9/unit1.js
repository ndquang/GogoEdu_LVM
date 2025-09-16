let unit = "1";
let title = "Local Community";
let exercises =[
    {
      "question": "I don’t know ____ when I visit Hanoi.",
      "options": ["A. where to go", "B. where go", "C. how going", "D. when go"],
      "answer": "A. where to go",
      "explanation": "Sau 'know' dùng question word + to-infinitive → 'where to go'."
    },
    {
      "question": "She asked me ____ to the nearest post office.",
      "options": ["A. how getting", "B. how to get", "C. how get", "D. how gotten"],
      "answer": "B. how to get",
      "explanation": "Cấu trúc 'ask + how + to-infinitive'."
    },
    {
      "question": "They haven’t decided ____ the project yet.",
      "options": ["A. when to start", "B. when start", "C. when starting", "D. when started"],
      "answer": "A. when to start",
      "explanation": "Sau 'decide' dùng 'when to V'."
    },
    {
      "question": "He wonders ____ about his homework.",
      "options": ["A. who to talk to", "B. who talking", "C. who talks", "D. who to talking"],
      "answer": "A. who to talk to",
      "explanation": "Dùng 'wonder + who to V'."
    },
    {
      "question": "She asked me ____ a new school bag.",
      "options": ["A. where buy", "B. where to buy", "C. where buying", "D. where buys"],
      "answer": "B. where to buy",
      "explanation": "Cấu trúc 'ask + where to V'."
    },
    {
      "question": "We should ____ plastic bags to protect the environment.",
      "options": ["A. cut down on", "B. run out of", "C. pass down", "D. go out"],
      "answer": "A. cut down on",
      "explanation": "'cut down on' = giảm bớt."
    },
    {
      "question": "We have ____ sugar, so we can’t make the cake.",
      "options": ["A. cut down on", "B. run out of", "C. passed down", "D. looked after"],
      "answer": "B. run out of",
      "explanation": "'run out of' = hết, cạn kiệt."
    },
    {
      "question": "The tradition has been ____ from generation to generation.",
      "options": ["A. gone out", "B. passed down", "C. cut down on", "D. run out of"],
      "answer": "B. passed down",
      "explanation": "'pass down' = truyền lại."
    },
    {
      "question": "Let’s ____ for dinner tonight instead of cooking at home.",
      "options": ["A. go out", "B. cut down on", "C. pass down", "D. run out of"],
      "answer": "A. go out",
      "explanation": "'go out' = ra ngoài ăn/uống hoặc đi chơi."
    },
    {
      "question": "He doesn’t know ____ the book back to the library.",
      "options": ["A. how returning", "B. how return", "C. how to return", "D. how returned"],
      "answer": "C. how to return",
      "explanation": "Dùng 'know + how to V'."
    },
	  {
      "question": "There is a market in our area where you can buy all kinds of handmade products. It may be the biggest market in our country.",
      "options": ["A. thing", "B. product", "C. handicraft", "D. selling"],
      "answer": "C. handicraft",
      "explanation": "'handmade products' = 'handicrafts'."
    },
    {
      "question": "The Tower of London is one of the top ____ in the UK.",
      "options": ["A. tourist places", "B. tourism places", "C. guided tours", "D. tourist attractions"],
      "answer": "D. tourist attractions",
      "explanation": "Cách nói đúng là 'tourist attractions' (điểm thu hút du khách)."
    },
    {
      "question": "This restaurant serves ____ of Italy such as lasagna and risotto.",
      "options": ["A. speciality dish", "B. speciality food", "C. special dish", "D. special things"],
      "answer": "B. speciality food",
      "explanation": "Cách dùng chuẩn: 'speciality food' (món đặc sản)."
    },
    {
      "question": "This beautiful headband ____ us of our holiday in Greece.",
      "options": ["A. tells", "B. shares", "C. reminds", "D. makes"],
      "answer": "C. reminds",
      "explanation": "Cấu trúc 'remind somebody of something'."
    },
    {
      "question": "The condo is so small and there are not enough ____ for families with young children.",
      "options": ["A. facilities", "B. equipment", "C. tools", "D. space"],
      "answer": "A. facilities",
      "explanation": "'Facilities' = cơ sở vật chất, tiện ích, phù hợp ngữ cảnh căn hộ."
    },
    {
      "question": "They didn’t like the noisy city centre, so they moved to live in a(n) ____ of London.",
      "options": ["A. outskirt", "B. neighbourhood", "C. area", "D. suburb"],
      "answer": "D. suburb",
      "explanation": "'Suburb' = ngoại ô, phù hợp để tránh xa thành phố ồn ào."
    },
    {
      "question": "They don’t know ____ to preserve the natural beauty of their region.",
      "options": ["A. what", "B. who", "C. where", "D. how"],
      "answer": "D. how",
      "explanation": "Sau 'know' + question word + to-infinitive → 'how to preserve'."
    },
    {
      "question": "My classmates didn’t understand ____ to do.",
      "options": ["A. what", "B. who", "C. where", "D. how"],
      "answer": "A. what",
      "explanation": "Cấu trúc: 'understand what to do'."
    },
    {
      "question": "Tell me ____ to press the button.",
      "options": ["A. what", "B. when", "C. who", "D. where"],
      "answer": "B. when",
      "explanation": "Câu đúng: 'Tell me when to press the button'."
    },
    {
      "question": "My neighbour asked me ____ to use the dishwasher.",
      "options": ["A. what", "B. why", "C. how", "D. which"],
      "answer": "C. how",
      "explanation": "Sau 'ask' dùng 'how to' để hỏi cách dùng."
    },
    {
      "question": "The rules didn’t specify ____ to speak to in case of an emergency.",
      "options": ["A. what", "B. who", "C. where", "D. how"],
      "answer": "B. who",
      "explanation": "'who to speak to' = nói chuyện với ai."
    },
    {
      "question": "My parents don’t know ____ to put the big sofa.",
      "options": ["A. what", "B. who", "C. where", "D. how"],
      "answer": "C. where",
      "explanation": "'where to put' = đặt ở đâu."
    },
    {
      "question": "They ran ____ of bread when I went to the local bakery yesterday.",
      "options": ["A. out", "B. down", "C. around", "D. back"],
      "answer": "A. out",
      "explanation": "'run out of' = hết, cạn kiệt."
    },
    {
      "question": "My brother forgot to take an umbrella when he went ____. I hope it won't rain.",
      "options": ["A. out", "B. down", "C. around", "D. back"],
      "answer": "A. out",
      "explanation": "'go out' = ra ngoài."
    },
    {
      "question": "How often do your grandparents come ____ to their hometown?",
      "options": ["A. out", "B. down", "C. around", "D. back"],
      "answer": "D. back",
      "explanation": "'come back' = quay lại."
    },
    {
      "question": "We are encouraging the people in our community to cut ____ on plastic bags.",
      "options": ["A. out", "B. down", "C. around", "D. back"],
      "answer": "B. down",
      "explanation": "'cut down on' = cắt giảm."
    },
	 {
      "question": "Before I visit a place, I usually find ________________ about its history.",
      "options": ["A. out", "B. down", "C. around", "D. back"],
      "answer": "A. out",
      "explanation": "'find out about' = tìm hiểu thông tin."
    },
    {
      "question": "When we went to Sydney, we only had a couple of hours to look ________________.",
      "options": ["A. out", "B. down", "C. around", "D. back"],
      "answer": "C. around",
      "explanation": "'look around' = đi tham quan, ngắm cảnh."
    }
  ]