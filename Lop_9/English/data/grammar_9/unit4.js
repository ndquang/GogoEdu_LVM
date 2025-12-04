let unit = "4";
let title = "Remembering the Past";
let groups = [
	  "Pronunciation",
      "Choose the best answers to complete the sentences.",
	  "Choose the correct answers A, B, C, or D to complete each of the sentences",
	  "Circle A, B, C, or D to indicate the sentence that is closest in meaning to the sentence given.",	  
	  "Speaking."
]
let exercises = [
  {
    "group": groups[0],
    "question": "Choose the word that has a different stress pattern.",
    "options": ["A. ancient", "B. basic", "C. observe", "D. structure"],
    "answer": "C. observe",
    "explanation": "'ancient', 'basic', 'structure' có trọng âm ở âm tiết 1, còn 'observe' có trọng âm ở âm tiết 2."
  },
  {
    "question": "Choose the word that has a different stress pattern.",
    "options": ["A. continue", "B. recognise", "C. concentrate", "D. occupy"],
    "answer": "A. continue",
    "explanation": "'continue' có trọng âm rơi vào âm tiết 2, còn 'recognise', 'concentrate', 'occupy' đều nhấn âm tiết 1."
  },
  {
    "question": "Choose the word that has a different stress pattern.",
    "options": ["A. observe", "B. promote", "C. prefer", "D. visit"],
    "answer": "D. visit",
    "explanation": "'visit' có trọng âm ở âm tiết 1, trong khi 'observe', 'promote', 'prefer' đều nhấn âm tiết 2."
  },
  {
    "question": "Choose the word that has a different stress pattern.",
    "options": ["A. communal", "B. monument", "C. heritage", "D. typical"],
    "answer": "A. communal",
    "explanation": "'communal' nhấn ở âm tiết 2, còn 'monument', 'heritage', 'typical' đều nhấn âm tiết 1."
  },
  {
    "group": groups[0],
    "question": "Choose the word that has a different stress pattern.",
    "options": ["A. magnificent", "B. generation", "C. development", "D. activity"],
    "answer": "A. magnificent",
    "explanation": "'magnificent' nhấn ở âm tiết 2, trong khi 'generation', 'development', 'activity' đều nhấn ở âm tiết 3."
  },
   {
	"group": groups[1],   
    "question": "Young people need to be aware of the risks __________ with smoking and taking drugs.",
    "options": ["related", "associated", "maintained", "appeared"],
    "answer": "associated",
    "explanation": "Collocation chuẩn là 'associated with risks' = những rủi ro liên quan tới. 'Related' gần nghĩa nhưng ít dùng trong cấu trúc này."
  },
  {
    "question": "Some parts of the temple are still __________ very well by the local people.",
    "options": ["promoted", "preserved", "celebrated", "observed"],
    "answer": "preserved",
    "explanation": "'Preserved' = được bảo tồn. Các từ khác không phù hợp: promoted (quảng bá), celebrated (ăn mừng), observed (quan sát)."
  },
  {
    "question": "Bai Dinh Pagoda is a large complex which includes many __________ built over a long period of time.",
    "options": ["ingredients", "measures", "patterns", "structures"],
    "answer": "structures",
    "explanation": "'Structures' = công trình kiến trúc. Các từ khác không phù hợp ngữ cảnh."
  },
  {
    "question": "The traditional family with three or four __________ living under one roof still remains in this region.",
    "options": ["customs", "anniversaries", "generations", "performances"],
    "answer": "generations",
    "explanation": "Gia đình truyền thống thường có 3–4 thế hệ (generations) sống chung một mái nhà."
  },
  {
    "question": "A __________ is a large strong building built in the past by kings or queens or other important people.",
    "options": ["castle", "temple", "pagoda", "church"],
    "answer": "castle",
    "explanation": "Castle = lâu đài. Temple, pagoda, church đều là nơi thờ tự, không phù hợp."
  },
  {
	"group": groups[1],
    "question": "This building is no longer __________; nobody lives in it.",
    "options": ["magnificent", "historical", "occupied", "located"],
    "answer": "occupied",
    "explanation": "'Occupied' = có người ở. Câu mang nghĩa: tòa nhà này không còn có người ở nữa."
  },
   {
    "group": groups[2],
    "question": "I wish my mum ________ me eat vegetables.",
    "options": ["A. doesn’t make", "B. didn’t make", "C. isn’t making", "D. wasn’t working"],
    "answer": "B. didn’t make",
    "explanation": "Cấu trúc wish + past simple để diễn tả điều ước trái ngược với hiện tại. => 'didn’t make'."
  },
  {    
    "question": "The kids ________ in the garden while it was still raining.",
    "options": ["A. are playing", "B. played", "C. were playing", "D. was playing"],
    "answer": "C. were playing",
    "explanation": "Quá khứ tiếp diễn (were playing) diễn tả hành động đang xảy ra khi một hành động khác xen vào."
  },
  {
    "question": "While I was washing the dishes, Sam ________ anything.",
    "options": ["A. wasn’t doing", "B. didn’t do", "C. wouldn’t do", "D. shouldn’t do"],
    "answer": "A. wasn’t doing",
    "explanation": "Quá khứ tiếp diễn dùng để mô tả hành động đang diễn ra cùng thời điểm. => 'wasn’t doing'."
  },
  {
    "question": "________ a video last night when I called you?",
    "options": ["A. Were you watching", "B. Did you watch", "C. You watched", "D. You were watching"],
    "answer": "A. Were you watching",
    "explanation": "Câu hỏi ở quá khứ tiếp diễn dùng để hỏi về hành động đang xảy ra tại một thời điểm trong quá khứ."
  },
  {
    "question": "I wish I ________ the history teacher’s question about the Ho Dynasty Citadel.",
    "options": ["A. can answer", "B. could answer", "C. should answer", "D. may answer"],
    "answer": "B. could answer",
    "explanation": "Cấu trúc wish + could (quá khứ của can) để diễn tả điều ước có khả năng làm gì nhưng hiện tại không thể."
  },
  {
    "group": groups[2],
    "question": "My mum wishes buses ________ so overcrowded during the rush hour.",
    "options": ["A. are not", "B. won’t be", "C. were not", "D. cannot"],
    "answer": "C. were not",
    "explanation": "Wish + past simple để diễn tả điều trái ngược với hiện tại. => 'were not so overcrowded'."
  },
   {
    "group": groups[3],
    "question": "I woke up. I saw that it was snowing.",
    "options": ["A. When I woke up, I saw that it was snowing.", "B. If I woke up, I saw that it was snowing.", "C. Seeing that it was snowing, I woke up.", "D. I saw that it was snowing before I woke up."],
    "answer": "A. When I woke up, I saw that it was snowing.",
    "explanation": "Câu này nối hai hành động xảy ra cùng lúc trong quá khứ. 'I woke up' và 'I saw that it was snowing'. Đáp án A sử dụng 'When' để thể hiện hành động 'thức dậy' xảy ra ngay trước hoặc cùng lúc với hành động 'nhìn thấy tuyết rơi'."
  },
  {
    "question": "Because the house was damaged, nobody lived in it.",
    "options": ["A. Nobody wanted to live in the damaged house.", "B. Because nobody lived in the house, it was damaged.", "C. The house was damaged, although it was occupied.", "D. The house was not occupied as it was damaged."],
    "answer": "D. The house was not occupied as it was damaged.",
    "explanation": "Câu này diễn tả mối quan hệ nguyên nhân – kết quả. “Because the house was damaged” là nguyên nhân, “nobody lived in it” là kết quả. Đáp án D phản ánh chính xác mối quan hệ này: 'The house was not occupied' (không có ai ở) vì 'it was damaged' (nó bị hỏng)."
  },
  {
    "question": "My brother wishes he had a sports bike.",
    "options": ["A. My brother once had a sports bike.", "B. A sports bike is what my brother doesn’t like.", "C. At present my brother doesn’t have a sports bike.", "D. At present my brother doesn’t need a sports bike."],
    "answer": "C. At present my brother doesn’t have a sports bike.",
    "explanation": "Cấu trúc 'wish + past simple' được dùng để diễn tả một mong ước không có thật ở hiện tại. Câu gốc 'My brother wishes he had a sports bike' có nghĩa là hiện tại anh trai tôi không có xe đạp thể thao và anh ấy ước có."
  },
  {    
    "question": "It’s a pity that we do not have a long summer holiday.",
    "options": ["A. I wish we have a long summer holiday.", "B. I wish we had a long summer holiday.", "C. Having a long summer holiday is a pity.", "D. Having a long summer holiday is a must."],
    "answer": "B. I wish we had a long summer holiday.",
    "explanation": "Cụm từ 'It’s a pity that...' (Thật đáng tiếc rằng...) thường được thay thế bằng cấu trúc 'I wish...' để thể hiện sự nuối tiếc. Vì đây là điều ước ở hiện tại nên chúng ta dùng 'wish + quá khứ đơn' (had)."
  },
  {
    "group": groups[3],
    "question": "Mai was studying when her mum didn’t want to bother her.",
    "options": ["A. Mai was studying when her mum didn’t want to bother her.", "B. Her mum didn’t want to bother Mai while she was studying.", "C. After Mai was studying, her mum didn’t want to bother her.", "D. Her mum didn’t want to bother Mai but she was studying."],
    "answer": "B. Her mum didn’t want to bother Mai while she was studying.",
    "explanation": "Hai câu có ý nghĩa tương đương nhau. 'When' và 'while' đều được dùng để chỉ hai hành động xảy ra cùng lúc. 'Her mum didn’t want to bother Mai' (mẹ cô ấy không muốn làm phiền) xảy ra trong lúc 'Mai was studying' (Mai đang học)."
  }
];


