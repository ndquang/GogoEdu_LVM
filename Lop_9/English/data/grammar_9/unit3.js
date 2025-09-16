let unit = "2";
let title = "City Life";
let groups = [
	  "Pronunciation",
      "Choose A, B, C or D to complete each sentence.",
	  "Speaking.",
	  "Choose A, B, C, or D to indicate the word that differs from the other three in the position of primary stress.",
	  "Choose A, B, C, or D to indicate the correct answer to each of the following questions.",
	  "Choose the option which is CLOSEST in meaning to the [-] word in each sentence.",
	  "Choose the option which is OPPOSITE in meaning to the [-] word in each sentence."
]
let exercises = [
  {
    "group": groups[0],	 
    "question": "Find the word having a different sound in [h].",
    "options": ["A. house", "B. healthy", "C. happiness", "D. honest"],
    "answer": "A. house",
    "explanation": "'house' has the /aʊ/ sound, while 'healthy', 'happiness', and 'honest' have the /h/ sound."
  },
  {
    "group": groups[0],	 
    "question": "Find the word having a different sound in [r].",
    "options": ["A. several", "B. regularly", "C. iron", "D. environment"],
    "answer": "C. iron",
    "explanation": "'iron' has the /aɪə/ sound, while 'several', 'regularly', and 'environment' share the /e/ vowel sound."
  },
  {
    "group": groups[0],	 
    "question": "Find the word having a different sound in [r].",
    "options": ["A. kangaroo", "B. word", "C. range", "D. aerobic"],
    "answer": "B. word",
    "explanation": "'word' has the /ɜː/ vowel, while 'kangaroo', 'range', and 'aerobic' have different vowel sounds (/æ/, /eɪ/, /əʊ/)."
  },
  {
    "group": groups[0],	 
    "question": "Find the word having a different sound in [h].",
    "options": ["A. horror", "B. hologram", "C. honour", "D. honey"],
    "answer": "B. hologram",
    "explanation": "'hologram' starts with /həʊ/, while 'horror', 'honour', and 'honey' have /hɒ/ or /hʌ/."
  },
  {
    "group": groups[0],	 
    "question": "Find the word having a different sound in [r].",
    "options": ["A. remind", "B. agree", "C. forum", "D. turn"],
    "answer": "B. agree",
    "explanation": "'agree' begins with the unstressed schwa /ə/, while 'remind', 'forum', and 'turn' have stressed vowel sounds."
  },
   {
    "group": groups[1],
    "question": "The sports teachers are trying to help develop the __________ well-being of their students.",
    "options": ["A. mental", "B. intellectual", "C. emotional", "D. physical"],
    "answer": "D. physical",
    "explanation": "'physical well-being' means relating to the body and health. Other options do not collocate naturally with 'well-being'."
  },
  {
    "group": groups[1],
    "question": "When working outside, the farmers should dress __________ for the weather.",
    "options": ["A. acceptably", "B. correctly", "C. appropriately", "D. smartly"],
    "answer": "C. appropriately",
    "explanation": "'dress appropriately' is the correct collocation when referring to dressing suitably for the weather."
  },
  {
    "group": groups[1],
    "question": "Children normally feel a lot of __________ about their first day at school.",
    "options": ["A. anxiety", "B. calm", "C. hurry", "D. suffering"],
    "answer": "A. anxiety",
    "explanation": "'feel anxiety' means to feel nervous or worried, which fits the context of the first day at school."
  },
  {
    "group": groups[1],
    "question": "Before you ask him, wait until he’s in a better __________.",
    "options": ["A. emotion", "B. opinion", "C. feeling", "D. mood"],
    "answer": "D. mood",
    "explanation": "The phrase 'in a better mood' is the correct collocation, meaning in a better emotional state."
  },
  {
    "group": groups[1],
    "question": "It takes a lot of __________ effort to understand these ideas.",
    "options": ["A. bodily", "B. mental", "C. physical", "D. emotional"],
    "answer": "B. mental",
    "explanation": "'mental effort' is the correct collocation, referring to the use of the mind to understand something difficult."
  },
  {
    "group": groups[2],
    "question": "B: Sorry, could you repeat the question? ____________________________.",
    "options": [
      "A. I didn’t catch what you said",
      "B. I quite followed what you asked me",
      "C. I didn’t know for sure",
      "D. I didn’t think so"
    ],
    "answer": "A. I didn’t catch what you said",
    "explanation": "Câu lịch sự để yêu cầu lặp lại là 'I didn’t catch what you said'."
  },
  {
    "group": groups[2],
    "question": "A: I need some assistance, please. \nB: ____________________________",
    "options": [
      "A. Yes, please. I’d love to.",
      "B. Sure. How can I help you?",
      "C. Thanks. That would be great.",
      "D. Don’t worry. I’ll do it myself."
    ],
    "answer": "B. Sure. How can I help you?",
    "explanation": "Câu đáp lịch sự khi có người nhờ giúp là 'Sure. How can I help you?'."
  },
  {
    "group": groups[2],
    "question": "Shop assistant: Can I help you? \nCustomer: ____________________________",
    "options": [
      "A. Yes, please, but I think I can manage it",
      "B. No, thank you. I’m just looking",
      "C. Yes, please. I’m just browsing",
      "D. No, thanks. I’d like to buy some pork"
    ],
    "answer": "B. No, thank you. I’m just looking",
    "explanation": "Khách hàng thường đáp 'No, thank you. I’m just looking' khi chỉ xem hàng."
  },
  {
    "group": groups[2],
    "question": "A: Hi, can you tell me more about the benefits of exercise? \nB: ____________________________",
    "options": [
      "A. Pardon my asking you.",
      "B. Excuse me, could you let me through?",
      "C. No problem. I couldn’t agree more.",
      "D. I beg your pardon?"
    ],
    "answer": "D. I beg your pardon?",
    "explanation": "Đáp án phù hợp trong hội thoại này là 'I beg your pardon?' để yêu cầu nhắc lại."
  },
  {
    "group": groups[2],
    "question": "A: First you should underline the keywords. Then locate them in the reading text.\n B: ____________________________",
    "options": [
      "A. Yes, I don’t know their meaning.",
      "B. Can you do that again?",
      "C. Can you say that again?",
      "D. I don’t know what to do."
    ],
    "answer": "C. Can you say that again?",
    "explanation": "Câu lịch sự nhất để yêu cầu lặp lại hướng dẫn là 'Can you say that again?'."
  },
  
   {
    "group": groups[3],
    "question": "__________",
    "options": ["A. tourist", "B. suburb", "C. metro", "D. outdoors"],
    "answer": "D. outdoors",
    "explanation": "'outdoors' có trọng âm rơi vào âm thứ 2, các từ còn lại có trọng âm ở âm thứ nhất."
  },
  {
    "group": groups[3],
    "question": "__________",
    "options": ["A. priority", "B. competition", "C. electrician", "D. entertainment"],
    "answer": "A. priority",
    "explanation": "'priority' có trọng âm rơi vào âm thứ 2, các từ còn lại vào âm thứ 3."
  },
  {
    "group": groups[0],
    "question": "Choose the letter A, B, C, or D to indicate the word [e] differs from the other three in pronunciation.",
    "options": ["A. better", "B. elegant", "C. speciality", "D. congested"],
    "answer": "C. speciality",
    "explanation": "'speciality' có âm /ʃ/, các từ còn lại có âm /t/ hoặc /g/ khác."
  },
  {
    "group": groups[0],
    "question": "Choose the letter A, B, C, or D to indicate the word whose [ou] differs from the other three in pronunciation.",
    "options": ["A. country", "B. council", "C. countable", "D. mountain"],
    "answer": "D. mountain",
    "explanation": "'mountain' có âm /n/ cuối bị lược, khác với cách phát âm đầy đủ của các từ khác."
  },
  {
    "group": groups[4],
    "question": "If you train harder in three months, you __________ run a marathon.",
    "options": ["A. must", "B. might not", "C. can", "D. should not"],
    "answer": "C. can",
    "explanation": "'can run a marathon' mang ý nghĩa khả năng có được sau khi tập luyện chăm chỉ."
  },
  {
    "group": groups[4],
    "question": "The longer the talk about the matter is, __________.",
    "options": ["A. the situation seems worse", "B. the worse seem the situation", "C. the worse the situation seems", "D. the situation seems the worse"],
    "answer": "C. the worse the situation seems",
    "explanation": "Cấu trúc so sánh kép: 'The + comparative ..., the + comparative ...'."
  },
  {
    "group": groups[4],
    "question": "There is a big __________ site near my house, so it’s very noisy.",
    "options": ["A. construction", "B. construct", "C. constructing", "D. constructed"],
    "answer": "A. construction",
    "explanation": "'construction site' = công trường xây dựng."
  },
  {
    "group": groups[4],
    "question": "The committee has __________ a survey of parking problems in residential areas.",
    "options": ["A. cut down", "B. come around", "C. worked out", "D. carried out"],
    "answer": "D. carried out",
    "explanation": "'carry out a survey' = tiến hành khảo sát."
  },
  {
    "group": groups[4],
    "question": "Altdorf is a __________ city with a huge number of foreigners, traders, adventurers, etc.",
    "options": ["A. quiet", "B. peaceful", "C. bustling", "D. tranquil"],
    "answer": "C. bustling",
    "explanation": "'bustling city' = thành phố nhộn nhịp."
  },
  {
    "group": groups[4],
    "question": "The facilities which are available to everybody in an area like parks, schools, shopping centres, etc. are public __________.",
    "options": ["A. services", "B. amenities", "C. features", "D. offices"],
    "answer": "B. amenities",
    "explanation": "'public amenities' = tiện ích công cộng."
  },
  {
    "group": groups[4],
    "question": "We’d better get an __________ to check the wiring before we start decorating.",
    "options": ["A. engineer", "B. architect", "C. electrician", "D. artist"],
    "answer": "C. electrician",
    "explanation": "Người kiểm tra hệ thống điện là 'electrician'."
  },
  {
    "group": groups[4],
    "question": "The government __________ their objective of reducing violent crime.",
    "options": ["A. succeeded", "B. managed", "C. accomplished", "D. got"],
    "answer": "C. accomplished",
    "explanation": "'accomplished their objective' = hoàn thành mục tiêu."
  },
  {
    "group": groups[4],
    "question": "Our teacher agreed to extend the __________ by two weeks.",
    "options": ["A. finish", "B. deadline", "C. limit", "D. allotment"],
    "answer": "B. deadline",
    "explanation": "'extend the deadline' = gia hạn thời hạn."
  },
  {
    "group": groups[4],
    "question": "Their house is within easy reach of schools and sports __________.",
    "options": ["A. facilities", "B. means", "C. systems", "D. tools"],
    "answer": "A. facilities",
    "explanation": "'school and sports facilities' = cơ sở vật chất."
  },
   {
	"group": groups[5],   
    "question": "Peter was always [optimistic], even when things were at their worst.",
    "options": [
      "A. negative",
      "B. positive",
      "C. pessimistic",
      "D. gloomy"
    ],
    "answer": "B. positive",
    "explanation": "'Optimistic' nghĩa là lạc quan → từ gần nghĩa nhất là 'positive'."
  },
  {
	"group": groups[5],     
    "question": "You need a good level of [physical] fitness for this sport.",
    "options": [
      "A. natural",
      "B. real",
      "C. mental",
      "D. bodily"
    ],
    "answer": "D. bodily",
    "explanation": "'Physical' (thể chất) từ gần nghĩa nhất là 'bodily'."
  },
  {
    "group": groups[6],    
    "question": "People once went into local government because they cared about [public] amenities and service.",
    "options": [
      "A. private",
      "B. common",
      "C. popular",
      "D. shared"
    ],
    "answer": "A. private",
    "explanation": "'Public' (công cộng) có từ trái nghĩa là 'private' (riêng tư)."
  },
  {
	"group": groups[6],
    "question": "Every effort will be made to [minimise] inconvenience to customers while work is in progress.",
    "options": [
      "A. optimise",
      "B. decrease",
      "C. reduce",
      "D. maximise"
    ],
    "answer": "D. maximise",
    "explanation": "'Minimise' (giảm thiểu) trái nghĩa với 'maximise' (tăng tối đa)."
  },
  {
	"group": groups[1],  
    "question": "'May I give you a hand?' – '__________'",
    "options": [
      "A. Yes, I’d love to.",
      "B. Thank you. You are so kind.",
      "C. Yes, give me.",
      "D. I’m not sure."
    ],
    "answer": "B. Thank you. You are so kind.",
    "explanation": "Câu đề nghị giúp đỡ → đáp lại lịch sự là 'Thank you. You are so kind.'"
  },
  {
	"group": groups[1],    
    "question": "'Could you help me move this table, please?' – '__________'",
    "options": [
      "A. I promise.",
      "B. No, not yet.",
      "C. Sure, I’d be glad to help.",
      "D. You’re welcome!"
    ],
    "answer": "C. Sure, I’d be glad to help.",
    "explanation": "Được nhờ giúp đỡ → câu trả lời hợp lý là 'Sure, I’d be glad to help.'"
  }
];


