let unit = "12";
let title = "English-Speaking Countries";
let groups = [
	  "Pronunciation",	
      "Choose the correct answer A, B, C or D to complete each of the sentences.",	  
	  "Writing",
	  "Speaking"
]
let  exercises=  [
  {
    "group": 0,
    "question": "Choose the word with stress pattern different from the others in each group.",
    "options": ["A. future", "B. traffic", "C. petrol", "D. allow"],
    "answer": "D. allow",
    "explanation": "Các từ 'future' (FU-ture), 'traffic' (TRAF-fic), 'petrol' (PE-trol) có trọng âm rơi vào âm tiết thứ nhất. Riêng từ 'allow' (a-LLOW) có trọng âm rơi vào âm tiết thứ hai."
  },
  {    
    "question": "Choose the word with stress pattern different from the others in each group.",
    "options": ["A. roadster", "B. success", "C. driver", "D. traffic"],
    "answer": "B. success",
    "explanation": "Các từ 'roadster' (ROAD-ster), 'driver' (DRI-ver), 'traffic' (TRAF-fic) có trọng âm rơi vào âm tiết thứ nhất. Riêng từ 'success' (suc-CESS) có trọng âm rơi vào âm tiết thứ hai."
  },
  {   
    "question": "Choose the word with stress pattern different from the others in each group.",
    "options": ["A. popular", "B. teleport", "C. accident", "D. consumption"],
    "answer": "D. consumption",
    "explanation": "Các từ 'popular' (PO-pu-lar), 'teleport' (TE-le-port), 'accident' (AC-ci-dent) có trọng âm rơi vào âm tiết thứ nhất. Riêng từ 'consumption' (con-SUMP-tion) có trọng âm rơi vào âm tiết thứ hai."
  },
  {   
    "question": "Choose the word with stress pattern different from the others in each group.",
    "options": ["A. energy", "B. recycle", "C. expensive", "D. polluting"],
    "answer": "A. energy",
    "explanation": "Các từ 'recycle' (re-CY-cle), 'expensive' (ex-PEN-sive), 'polluting' (po-LLU-ting) có trọng âm rơi vào âm tiết thứ hai. Riêng từ 'energy' (EN-er-gy) có trọng âm rơi vào âm tiết thứ nhất."
  },
  {
    "group": 0,
    "question": "Choose the word with stress pattern different from the others in each group.",
    "options": ["A. dangerous", "B. easily", "C. resources", "D. government"],
    "answer": "C. resources",
    "explanation": "Các từ 'dangerous' (DAN-ge-rous), 'easily' (EA-si-ly), 'government' (GOV-ern-ment) có trọng âm rơi vào âm tiết thứ nhất. Riêng từ 'resources' (re-SOUR-ces) có trọng âm rơi vào âm tiết thứ hai."
  },
   {
    "group": 1,
    "question": "He wants to travel to __________ Australia next year.",
    "options": ["A. a", "B. an", "C. the", "D. Ø"],
    "answer": "D. Ø",
    "explanation": "Với tên quốc gia thông thường (Australia), ta không dùng mạo từ."
  },
  {   
    "question": "__________ Pacific Ocean is the largest and deepest ocean on Earth.",
    "options": ["A. A", "B. An", "C. The", "D. Ø"],
    "answer": "C. The",
    "explanation": "Ta dùng mạo từ 'the' với tên của các đại dương, biển và sông."
  },
  {   
    "question": "English is __________ international language.",
    "options": ["A. a", "B. an", "C. the", "D. Ø"],
    "answer": "B. an",
    "explanation": "Trước danh từ số ít đếm được 'international language' bắt đầu bằng nguyên âm, ta dùng mạo từ 'an'."
  },
  {   
    "question": "London is __________ capital of England.",
    "options": ["A. a", "B. an", "C. the", "D. Ø"],
    "answer": "C. the",
    "explanation": "Ta dùng mạo từ 'the' khi nói về một danh từ xác định và duy nhất ('the capital of...')."
  },
  {   
    "question": "__________ Mount Everest is in Nepal.",
    "options": ["A. A", "B. An", "C. The", "D. Ø"],
    "answer": "D. Ø",
    "explanation": "Ta không dùng mạo từ với tên của các ngọn núi."
  },
  {   
    "question": "Canberra is __________ capital of Australia.",
    "options": ["A. a", "B. an", "C. the", "D. Ø"],
    "answer": "C. the",
    "explanation": "Ta dùng mạo từ 'the' khi nói về một danh từ xác định và duy nhất ('the capital of...')."
  },
  {   
    "question": "The USA is divided into 50 states, and each state has __________ own capital.",
    "options": ["A. a", "B. an", "C. the", "D. Ø"],
    "answer": "B. an",
    "explanation": "Trước danh từ số ít đếm được 'own capital' bắt đầu bằng nguyên âm, ta dùng mạo từ 'an'."
  },
  {   
    "question": "I visited __________ Canada last year.",
    "options": ["A. a", "B. an", "C. the", "D. Ø"],
    "answer": "D. Ø",
    "explanation": "Với tên quốc gia thông thường (Canada), ta không dùng mạo từ."
  },
  {   
    "question": "__________ UK is a popular tourist destination.",
    "options": ["A. A", "B. An", "C. The", "D. Ø"],
    "answer": "C. The",
    "explanation": "Ta dùng mạo từ 'the' với tên các quốc gia có chứa các từ như 'Kingdom', 'Republic', 'States'."
  },
  {   
    "question": "He is planning a trip to __________ New York City.",
    "options": ["A. a", "B. an", "C. the", "D. Ø"],
    "answer": "D. Ø",
    "explanation": "Ta không dùng mạo từ với tên các thành phố."
  },
  {   
    "question": "I would like to visit __________ Great Barrier Reef one day.",
    "options": ["A. a", "B. an", "C. the", "D. Ø"],
    "answer": "C. The",
    "explanation": "Ta dùng mạo từ 'the' với tên các rặng san hô nổi tiếng."
  },
  {   
    "question": "They speak English and French in __________ Canada.",
    "options": ["A. a", "B. an", "C. the", "D. Ø"],
    "answer": "D. Ø",
    "explanation": "Với tên quốc gia thông thường, ta không dùng mạo từ."
  },
  {   
    "question": "__________ official language of Australia is English.",
    "options": ["A. A", "B. An", "C. The", "D. Ø"],
    "answer": "C. The",
    "explanation": "Ta dùng mạo từ 'the' khi nói về một danh từ xác định và duy nhất ('the official language')."
  },
  {   
    "question": "He studies __________ English at university.",
    "options": ["A. a", "B. an", "C. the", "D. Ø"],
    "answer": "D. Ø",
    "explanation": "Với tên các môn học hoặc ngôn ngữ nói chung, ta không dùng mạo từ."
  },
  {   
    "question": "__________ United States of America is a large country.",
    "options": ["A. A", "B. An", "C. The", "D. Ø"],
    "answer": "C. The",
    "explanation": "Ta dùng mạo từ 'the' với tên các quốc gia có chứa từ 'States'."
  },
  {   
    "question": "My dream is to travel to __________ different countries.",
    "options": ["A. a", "B. an", "C. the", "D. Ø"],
    "answer": "D. Ø",
    "explanation": "Ta không dùng mạo từ với danh từ số nhiều không xác định."
  },
  {   
    "question": "This is __________ interesting story about a trip to Scotland.",
    "options": ["A. a", "B. an", "C. the", "D. Ø"],
    "answer": "B. an",
    "explanation": "Trước danh từ số ít đếm được 'interesting story' bắt đầu bằng nguyên âm, ta dùng mạo từ 'an'."
  },
  {   
    "question": "The capital of __________ New Zealand is Wellington.",
    "options": ["A. a", "B. an", "C. the", "D. Ø"],
    "answer": "D. Ø",
    "explanation": "Với tên quốc gia thông thường (New Zealand), ta không dùng mạo từ."
  },
  {    
    "question": "They crossed __________ Thames River in London.",
    "options": ["A. a", "B. an", "C. the", "D. Ø"],
    "answer": "C. The",
    "explanation": "Ta dùng mạo từ 'the' với tên của các con sông."
  },
  {
    "group": 1,
    "question": "He has been living in __________ England for ten years.",
    "options": ["A. a", "B. an", "C. the", "D. Ø"],
    "answer": "D. Ø",
    "explanation": "Với tên quốc gia thông thường, ta không dùng mạo từ."
  },
   {
    "group": 2,
    "question": "Grand Canyon / stunning natural wonder / the USA.",
    "options": ["A. Grand Canyon is stunning natural wonder in the USA.", "B. The Grand Canyon is a stunning natural wonder in the USA.", "C. The Grand Canyon is a stunning natural wonder on the USA.", "D. Grand Canyon is a stunning natural wonder in the USA."],
    "answer": "B. The Grand Canyon is a stunning natural wonder in the USA.",
    "explanation": "Câu này cần mạo từ 'The' trước 'Grand Canyon' và mạo từ 'a' trước 'stunning natural wonder'. Giới từ 'in' được dùng để chỉ vị trí bên trong một quốc gia."
  },
  {
    "question": "Canada / both English / French / mother tongues / about 80% / population.",
    "options": ["A. In Canada, both English and French are mother tongues for about 80% of the population.", "B. Canada has both English and French as mother tongues for about 80% of the population.", "C. In Canada, both English and French is mother tongues for about 80% of the population.", "D. Canada has both English and French as mother tongues for about 80% population."],
    "answer": "A. In Canada, both English and French are mother tongues for about 80% of the population.",
    "explanation": "Câu này sử dụng cấu trúc 'both... and...' với động từ số nhiều 'are'. Cụm 'for about 80% of the population' là cách diễn đạt chính xác."
  },
  {   
    "question": "Australia / home / kangaroos / koalas.",
    "options": ["A. Australia is home to kangaroos and koalas.", "B. Australia is a home for kangaroos and koalas.", "C. Australia is home for kangaroos and koalas.", "D. Australia home to kangaroos and koalas."],
    "answer": "A. Australia is home to kangaroos and koalas.",
    "explanation": "Cụm từ cố định 'be home to' có nghĩa là 'là nơi cư ngụ của'. 'Kangaroos and koalas' là hai ví dụ về động vật."
  },
  {    
    "question": "cities / Bath / Stratford Upon Avon / two famous tourist attractions / England.",
    "options": ["A. Cities of Bath and Stratford Upon Avon are two famous tourist attractions in England.", "B. The cities of Bath and Stratford Upon Avon is two famous tourist attractions in England.", "C. The cities of Bath and Stratford Upon Avon are two famous tourist attractions in England.", "D. The cities of Bath and Stratford Upon Avon are two famous tourist attractions on England."],
    "answer": "C. The cities of Bath and Stratford Upon Avon are two famous tourist attractions in England.",
    "explanation": "Cụm danh từ 'The cities of...' là chủ ngữ số nhiều, nên động từ 'are' là chính xác. Giới từ 'in' được dùng để chỉ vị trí bên trong một quốc gia."
  },
  {
    "group": 2,
    "question": "New Zealand / magical place / amazing natural beauty / friendly people.",
    "options": ["A. New Zealand is a magical place of amazing natural beauty and friendly people.", "B. New Zealand is a magical place with amazing natural beauty and friendly people.", "C. New Zealand is magical place with amazing natural beauty and friendly people.", "D. New Zealand is a magical place with amazing natural beauty and friendly people."],
    "answer": "B. New Zealand is a magical place with amazing natural beauty and friendly people.",
    "explanation": "Mạo từ 'a' được dùng trước 'magical place'. Giới từ 'with' được dùng để liệt kê các đặc điểm mà địa điểm đó có."
  }
  ] 

