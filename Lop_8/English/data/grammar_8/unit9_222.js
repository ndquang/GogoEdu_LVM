let unit = "9";
let title = "A first-aid course";
let groups = [
	  "Pronunciation",	    
	  "Choose the correct answer A, B, C, or D to complete the following sentence.",
	  "Choose the correct answer A, B, C, or D to complete each sentence.",	  
	  "Speaking",
	  "Writing"
]
let  exercises=  [
 {
    "group": 0,
    "question": "Choose the word that has a different stress pattern from that of the others.",
    "options": ["A. general", "B. property", "C. disaster", "D. fabulous"],
    "answer": "C. disaster",
    "explanation": "Các từ 'general' (GE-ne-ral), 'property' (PRO-per-ty), 'fabulous' (FA-bu-lous) có trọng âm rơi vào âm tiết thứ nhất. Riêng từ 'disaster' (di-SAS-ter) có trọng âm rơi vào âm tiết thứ hai."
  },
  {    
    "question": "Choose the word that has a different stress pattern from that of the others.",
    "options": ["A. yesterday", "B. optional", "C. natural", "D. prediction"],
    "answer": "D. prediction",
    "explanation": "Các từ 'yesterday' (YES-ter-day), 'optional' (OP-tio-nal), 'natural' (NA-tu-ral) có trọng âm rơi vào âm tiết thứ nhất. Riêng từ 'prediction' (pre-DIC-tion) có trọng âm rơi vào âm tiết thứ hai."
  },
  {   
    "question": "Choose the word that has a different stress pattern from that of the others.",
    "options": ["A. glamorous", "B. eruption", "C. volcanic", "D. tornado"],
    "answer": "A. glamorous",
    "explanation": "Các từ 'eruption' (e-RUP-tion), 'volcanic' (vol-CA-nic), 'tornado' (tor-NA-do) có trọng âm rơi vào âm tiết thứ hai. Riêng từ 'glamorous' (GLA-mou-rous) có trọng âm rơi vào âm tiết thứ nhất."
  },
  {   
    "question": "Choose the word that has a different stress pattern from that of the others.",
    "options": ["A. fabulous", "B. volunteer", "C. evening", "D. happening"],
    "answer": "B. volunteer",
    "explanation": "Các từ 'fabulous' (FA-bu-lous), 'evening' (EVE-ning), 'happening' (HAP-pen-ing) có trọng âm rơi vào âm tiết thứ nhất. Riêng từ 'volunteer' (vo-lun-TEER) có trọng âm rơi vào âm tiết thứ ba."
  },
  {
    "group": 0,
    "question": "Choose the word that has a different stress pattern from that of the others.",
    "options": ["A. thunderstorm", "B. prosperous", "C. important", "D. resident"],
    "answer": "C. important",
    "explanation": "Các từ 'thunderstorm' (THUN-der-storm), 'prosperous' (PROS-pe-rous), 'resident' (RE-si-dent) có trọng âm rơi vào âm tiết thứ nhất. Riêng từ 'important' (im-POR-tant) có trọng âm rơi vào âm tiết thứ hai."
  },
   {
    "group": 1,
    "question": "A strong earthquake caused a lot of __________ to eastern Japan last week.",
    "options": ["A. damaged", "B. damages", "C. damaging", "D. damage"],
    "answer": "D. damage",
    "explanation": "'Damage' (thiệt hại) là danh từ không đếm được, phù hợp với cụm từ 'a lot of'."
  },
  {    
    "question": "Two tornadoes struck Florida on Saturday morning and __________ 30 homes.",
    "options": ["A. destroy", "B. destroyed", "C. destruction", "D. destroying"],
    "answer": "B. destroyed",
    "explanation": "Động từ 'struck' được chia ở thì quá khứ đơn, nên động từ thứ hai cũng phải ở thì quá khứ đơn để duy trì cấu trúc song song."
  },
  {   
    "question": "We cannot prevent natural disasters, but can __________ some of them.",
    "options": ["A. damage", "B. destroy", "C. predict", "D. erupt"],
    "answer": "C. predict",
    "explanation": "Động từ 'predict' (dự đoán) phù hợp với ngữ cảnh 'không thể ngăn chặn thảm họa tự nhiên nhưng có thể dự đoán được một số trong chúng'."
  },
  {   
    "question": "__________ from other states came to Oklahoma to help find the survivors.",
    "options": ["A. Scientists", "B. Victims", "C. People", "D. Rescue workers"],
    "answer": "D. Rescue workers",
    "explanation": "'Rescue workers' (nhân viên cứu hộ) là những người phù hợp nhất với hành động 'help find the survivors' (giúp tìm những người sống sót)."
  },
  {
    "group": 1,
    "question": "A __________ can save you in life-threatening situations because its sound can attract people's attention.",
    "options": ["A. whistle", "B. kit", "C. warning", "D. tool"],
    "answer": "A. whistle",
    "explanation": "'Whistle' (còi) là một dụng cụ phát ra âm thanh để thu hút sự chú ý trong tình huống nguy hiểm."
  },
   {
    "group": 2,
    "question": "When I was going to school, I was seeing an old friend.",
    "options": ["A. When", "B. was going to school", "C. was seeing", "D. an old friend"],
    "answer": "C. was seeing",
    "explanation": "Động từ 'see' là động từ chỉ trạng thái, không dùng ở thì tiếp diễn. Cần sửa 'was seeing' thành 'saw'."
  },
  {   
    "question": "I wasn't go for a walk because it was raining.",
    "options": ["A. wasn't go", "B. for a walk", "C. because", "D. it was raining"],
    "answer": "A. wasn't go",
    "explanation": "Cấu trúc thì quá khứ tiếp diễn ở thể phủ định là 'wasn't + V-ing'. Cần sửa 'wasn't go' thành 'wasn't going'."
  },
  {   
    "question": "While we returned home, he was still working.",
    "options": ["A. While", "B. returned", "C. was still", "D. working"],
    "answer": "B. returned",
    "explanation": "Hai hành động xảy ra đồng thời trong quá khứ nên cần dùng thì quá khứ tiếp diễn cho cả hai vế. Cần sửa 'returned' thành 'were returning'."
  },
  {    
    "question": "I listened to the radio, so I didn't hear the fire alarm.",
    "options": ["A. I listened", "B. to the radio", "C. so I didn't hear", "D. the fire alarm"],
    "answer": "A. I listened",
    "explanation": "Trong ngữ cảnh này, hành động 'nghe đài' là một hành động đang diễn ra trong quá khứ, nên cần sửa 'listened' thành 'was listening'."
  },
  {
    "group": 2,
    "question": "What was you doing when the earthquake started?",
    "options": ["A. What was", "B. you doing", "C. when", "D. the earthquake started"],
    "answer": "A. What was",
    "explanation": "Chủ ngữ của câu là 'you', vì vậy động từ 'was' cần được sửa thành 'were' để phù hợp với cấu trúc thì quá khứ tiếp diễn."
  },
   {
    "group": 3,
    "question": "A: The awful earthquake yesterday destroyed their house.\nB: __________",
    "options": ["A. Yes, I know it.", "B. Yes, I don't like it.", "C. That's awful.", "D. They should stay inside."],
    "answer": "C. That's awful.",
    "explanation": "'That's awful.' là cách nói ngắn gọn để bày tỏ sự tiếc nuối và đồng cảm khi nghe tin xấu."
  },
  {    
    "question": "A: The teacher said that I failed the exam again.\nB: __________",
    "options": ["A. I passed it.", "B. I'm sorry to hear that.", "C. Why are you so sad?", "D. I don't agree with you."],
    "answer": "B. I'm sorry to hear that.",
    "explanation": "'I'm sorry to hear that.' là một câu nói tiêu chuẩn để thể hiện sự cảm thông khi người khác gặp chuyện buồn."
  },
  {   
    "question": "A: They lost all of their property in the storm last month.\nB: __________",
    "options": ["A. What awful news! I'm sorry.", "B. No, I'm sorry.", "C. Can you speak louder?", "D. I think they can."],
    "answer": "A. What awful news! I'm sorry.",
    "explanation": "'What awful news! I'm sorry.' là cách nói phù hợp nhất để bày tỏ sự đồng cảm và tiếc nuối khi nghe tin tức tồi tệ."
  },
  {    
    "question": "A: I left my new mobile phone on the bus yesterday.\nB: __________",
    "options": ["A. I didn't know that.", "B. Can you say that again?", "C. I know what you mean.", "D. Oh, I'm sorry to hear that."],
    "answer": "D. Oh, I'm sorry to hear that.",
    "explanation": "'Oh, I'm sorry to hear that.' là cách thể hiện sự cảm thông thông dụng nhất khi nghe về sự cố của người khác."
  },
  {
    "group": 3,
    "question": "A: Our dog got lost last weekend in our neighbourhood.\nB: __________",
    "options": ["A. I don't agree with you.", "B. Sorry, that's awful.", "C. I like your dog.", "D. I love playing with dogs."],
    "answer": "B. Sorry, that's awful.",
    "explanation": "'Sorry, that's awful.' là cách nói phù hợp để bày tỏ sự đồng cảm và tiếc nuối khi nghe tin thú cưng bị mất."
  },
   {
    "group": 4,
    "question": "All / natural disaster / cause / damage / and destruction / humans.",
    "options": ["A. All natural disasters cause damage and destruction for humans.", "B. All natural disaster cause damage and destruction to humans.", "C. All natural disasters cause damage and destruction to humans.", "D. All natural disasters cause damage and destruction with humans."],
    "answer": "C. All natural disasters cause damage and destruction to humans.",
    "explanation": "'Natural disasters' là danh từ số nhiều, đi kèm với động từ 'cause' ở dạng số nhiều. Cụm từ 'cause damage and destruction to humans' là chính xác."
  },
  {   
    "question": "most / common type / natural disasters / the world / are / floods and storms.",
    "options": ["A. The most common types of natural disasters in the world are floods and storms.", "B. The most common type of natural disasters in the world are floods and storms.", "C. The most common common types of natural disasters on the world are floods and storms.", "D. The most common type of natural disasters of the world are floods and storms."],
    "answer": "A. The most common types of natural disasters in the world are floods and storms.",
    "explanation": "'The most common types' là chủ ngữ số nhiều, nên động từ 'are' là chính xác. Cụm từ 'in the world' là cách diễn đạt đúng."
  },
  {   
    "question": "Sometimes / more / one disaster / occur / same time.",
    "options": ["A. Sometimes, more than one disaster occurs the same time.", "B. Sometimes, more than one disaster occur at same time.", "C. Sometimes, more than one disaster occur at the same time.", "D. Sometimes, more than one disaster occurs at the same time."],
    "answer": "D. Sometimes, more than one disaster occurs at the same time.",
    "explanation": "Cụm từ 'more than one disaster' là số ít, nên động từ 'occurs' là chính xác. 'At the same time' là cụm giới từ chỉ thời gian đúng."
  },
  {    
    "question": "Landslide / may / occur / during / severe flooding / and thunderstorm.",
    "options": ["A. A landslide may occur during severe flooding and thunderstorms.", "B. A landslide may occur during severe flooding and thunderstorms.", "C. Landslide may occur during severe flooding and thunderstorm.", "D. Landslides may occurs during severe flooding and thunderstorms."],
    "answer": "A. A landslide may occur during severe flooding and thunderstorms.",
    "explanation": "'A landslide' là danh từ số ít, đi kèm với động từ khiếm khuyết 'may'. 'Thunderstorms' là danh từ số nhiều, phù hợp với 'flooding'."
  },
  {
    "group": 4,
    "question": "Scientist / can / predict / many / the disasters / ahead / time.",
    "options": ["A. A scientist can predict many of the disasters ahead of time.", "B. Scientists can predict many the disasters ahead of time.", "C. Scientists can predict many of the disasters ahead time.", "D. Scientists can predict many of the disasters ahead of time."],
    "answer": "D. Scientists can predict many of the disasters ahead of time.",
    "explanation": "'Scientists' là danh từ số nhiều, đi với động từ 'can predict' là chính xác. 'Many of the disasters' và 'ahead of time' là các cụm từ đúng ngữ pháp."
  }
]