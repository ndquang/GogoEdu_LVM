let unit = "10";
let title = "Planet Earth";
let groups = [	  
	   "I. Read the following passage 1 and choose the letter A, B, C, or D to complete each sentence.",
	   "II. Read the following passage 2 and decide choose the letter A, B, C, or D to complete each sentence.",
	   "III. Choose the letter A, B, C, or D to complete the passage.",
	   "IV. Read the passage and do the tasks that follow."
	  ]
	  
let exercises = [
  // Câu 17 (T/F): The girl began travelling with her family when she was four years old.
  {
    "group": 0,
    "question": "The girl began travelling with her family when she was four years old.",
    "options": [
      "T (True)",
      "F (False)"
    ],
    "answer": "F (False)",
    "explanation": "Đoạn văn nói: 'I started travelling with them when I was just four months old' (4 tháng tuổi), nên câu này Sai."
  },
  // Câu 18 (T/F): They usually stay in resorts when they travel.
  {    
    "question": "They usually stay in resorts when they travel.",
    "options": [
      "T (True)",
      "F (False)"
    ],
    "answer": "F (False)",
    "explanation": "Đoạn văn nói: 'We normally don't stay in resorts. Instead we stay at homestays...' (thường không ở resort mà ở homestay), nên câu này Sai."
  },
  // Câu 19 (T/F): When they were sitting outside the Sydney Opera House, seagulls took some food from her hands.
  {    
    "question": "When they were sitting outside the Sydney Opera House, seagulls took some food from her hands.",
    "options": [
      "T (True)",
      "F (False)"
    ],
    "answer": "T (True)",
    "explanation": "Đoạn văn xác nhận: 'seagulls took some snacks from my hands when we were sitting outside the Sydney Opera House', nên câu này Đúng."
  },
  // Câu 20 (T/F): Travelling together makes them feel strongly connected.
  {   
    "question": "Travelling together makes them feel strongly connected.",
    "options": [
      "T (True)",
      "F (False)"
    ],
    "answer": "T (True)",
    "explanation": "Đoạn văn nói: 'we can strengthen our bonds' (tăng cường gắn kết), tương đương với 'feel strongly connected', nên câu này Đúng."
  },
  // Câu 21 (MC): What is the passage mainly about?
  {  
    "question": "What is the passage mainly about?",
    "options": [
      "A. The girl's family trip to Hong Kong.",
      "B. The girl's family trip to Sydney.",
      "C. The girl's travel experiences with her family.",
      "D. The girl's feelings about her family's trips."
    ],
    "answer": "C. The girl's travel experiences with her family.",
    "explanation": "Toàn bộ đoạn văn kể về kinh nghiệm du lịch nói chung của cô gái và gia đình, nên đáp án C bao quát nhất."
  },
  // Câu 22 (MC): The word 'them' in paragraph 2 refers to ______.
  {
    "group": 0,
    "question": "The word 'them' in paragraph 2 refers to ______. (Đoạn 2: ...get to know more about the life and culture of the people in those areas. We eat with them, watch them cook...)",
    "options": [
      "A. the resorts",
      "B. the homestays",
      "C. the trips",
      "D. the people"
    ],
    "answer": "D. the people",
    "explanation": "Trong câu 'We eat with them, watch them cook...', từ 'them' thay thế cho 'the people' (người dân địa phương) được nhắc đến ở câu trước."
  },
   // Câu 23: one of the (23) ___ bays on Earth (Dùng so sánh nhất)
  {
    "group": 1,
    "question": "The Harbour of Rio de Janeiro is one of the (23) __________ bays on Earth.",
    "options": [
      "A. large",
      "B. largest",
      "C. larger",
      "D. most large"
    ],
    "answer": "B. largest",
    "explanation": "Cụm 'one of the...' (một trong những...) luôn đi kèm với danh từ số nhiều và hình thức so sánh nhất. 'Largest' là so sánh nhất của 'large'."
  },
  // Câu 24: located in the city of Rio de Janeiro (24) ___ the southeastern coastline
  {    
    "question": "It is located in the city of Rio de Janeiro (24) __________ the southeastern coastline of Brazil.",
    "options": [
      "A. on",
      "B. in",
      "C. at",
      "D. for"
    ],
    "answer": "A. on",
    "explanation": "Giới từ 'on' được dùng để chỉ vị trí nằm trên một đường, một bề mặt, hoặc một bờ biển (on the coastline/on the coast)."
  },
  // Câu 25: The major (25) ___ of this natural wonder is its tropical climate
  {   
    "question": "The major (25) __________ of this natural wonder is its tropical climate.",
    "options": [
      "A. attract",
      "B. attracting",
      "C. attractive",
      "D. attraction"
    ],
    "answer": "D. attraction",
    "explanation": "Sau 'major' (tính từ) cần một danh từ. 'Attraction' (sự thu hút, điểm thu hút) là danh từ phù hợp, ý chỉ 'điểm thu hút chính của kỳ quan thiên nhiên này'."
  },
  // Câu 26: and lush forests (26) ___ provide recreation areas
  {   
    "question": "It also has some beautiful beaches and lush forests (26) __________ provide recreation areas for visitors.",
    "options": [
      "A. what",
      "B. who",
      "C. which",
      "D. whose"
    ],
    "answer": "C. which",
    "explanation": "Đây là mệnh đề quan hệ không xác định, bổ sung ý nghĩa cho 'beaches and lush forests' (vật). Đại từ quan hệ 'which' được dùng cho vật và thay thế cho chủ ngữ trong mệnh đề."
  },
  // Câu 27: the mouth of the harbour is unique (27) ___ it resembles more of a river
  {   
    "question": "Additionally, the mouth of the harbour is unique (27) __________ it resembles more of a river than a bay.",
    "options": [
      "A. because",
      "B. where",
      "C. although",
      "D. if"
    ],
    "answer": "A. because",
    "explanation": "Mối quan hệ ở đây là Nguyên nhân – Kết quả. Cảng độc đáo (kết quả) *vì* nó giống một dòng sông hơn một vịnh (nguyên nhân). Liên từ 'because' (bởi vì) là phù hợp nhất."
  },
  // Câu 28: September and October are the best months to (28) ___ the Harbour
  {
    "group": 1,
    "question": "September and October are the best months to (28) __________ the Harbour of Rio de Janeiro.",
    "options": [
      "A. meet",
      "B. see",
      "C. reach",
      "D. visit"
    ],
    "answer": "D. visit",
    "explanation": "Động từ 'visit' (ghé thăm) là động từ thông dụng nhất khi nói về việc đến một địa điểm du lịch như 'Harbour' (bến cảng)."
  },
   // Câu 1: Plants are the primary (1) ___ (Vai trò của thực vật trong chuỗi thức ăn)
  {
    "group": 2,
    "question": "Plants are the primary (1) __________ and they feed wildlife and humans.",
    "options": [
      "A. eaters",
      "B. consumers",
      "C. producers",
      "D. manufacturers"
    ],
    "answer": "C. producers",
    "explanation": "Trong chuỗi thức ăn, thực vật là sinh vật **sản xuất** ('producers') vì chúng tự tạo ra thức ăn, là nguồn năng lượng sơ cấp."
  },
  // Câu 2: Wildlife, such as insects, birds, and microbes, often (2) ___ on green plants. (Hành động ăn)
  {   
    "question": "Wildlife, such as insects, birds, and microbes, often (2) __________ on green plants.",
    "options": [
      "A. feed",
      "B. survive",
      "C. eat",
      "D. spend"
    ],
    "answer": "A. feed",
    "explanation": "Cụm **'feed on something'** có nghĩa là ăn cái gì đó như thức ăn chính. 'Feed' đi với giới từ 'on' để chỉ việc ăn uống, phù hợp với ngữ cảnh."
  },
  // Câu 3: In turn, these types of (3) ___ become food for larger animals. (Loại sinh vật)
  {   
    "question": "In turn, these types of (3) __________ become food for larger animals.",
    "options": [
      "A. plant",
      "B. insect",
      "C. wildlife",
      "D. animal"
    ],
    "answer": "C. wildlife",
    "explanation": "Từ cần điền thay thế cho 'insects, birds, and microbes'. **'Wildlife'** (động vật hoang dã) là từ bao quát nhất và chính xác nhất trong bối cảnh sinh thái học."
  },
  // Câu 4: Plants help keep the ecosystem in balance. They (4) ___ the air, water, and soil. (Vai trò của thực vật với môi trường)
  {   
    "question": "Plants help keep the ecosystem in balance. They (4) __________ the air, water, and soil.",
    "options": [
      "A. change",
      "B. balance",
      "C. increase",
      "D. produce"
    ],
    "answer": "B. balance",
    "explanation": "Ý nghĩa của câu là thực vật giúp duy trì sự **cân bằng** ('balance') cho không khí, nước và đất, do đó 'balance' là động từ phù hợp nhất."
  },
  // Câu 5: and by (5) ___ seeds. (Hành động của động vật giúp phát tán hạt)
  {    
    "question": "Animals help the environment by carrying pollen from plants to plants, and by (5) __________ seeds.",
    "options": [
      "A. spraying",
      "B. spreading",
      "C. widening",
      "D. increasing"
    ],
    "answer": "B. spreading",
    "explanation": "Hành động động vật giúp môi trường là **phát tán** ('spreading') hạt giống. 'Spreading' seeds là cụm từ chính xác."
  },
  // Câu 6: They also help (6) ___ harmful pests and other plant-eaters. (Hành động của động vật giúp kiểm soát sâu bọ)
  {
    "group": 2,
    "question": "They also help (6) __________ harmful pests and other plant-eaters.",
    "options": [
      "A. kill",
      "B. deal",
      "C. solve",
      "D. control"
    ],
    "answer": "D. control",
    "explanation": "Động vật giúp **kiểm soát** ('control') sâu bọ (pests), giữ cân bằng hệ sinh thái. 'Control' là từ có nghĩa bao hàm và phù hợp nhất."
  },
   // Phần A: Câu hỏi trắc nghiệm (A. Choose the correct answer A, B, C, or D)
  {
    "group": 3,    
    "question": "All of the following are landforms, EXCEPT ________.",
    "options": [
      "A. valleys",
      "B. plateaus",
      "C. glaciers",
      "D. dunes"
    ],
    "answer": "C. glaciers",
    "explanation": "Glaciers (sông băng) là các khối nước đóng băng (bodies of water), không phải là địa hình (landforms). Đoạn văn định nghĩa địa hình là núi, thung lũng, sa mạc, cao nguyên, và cồn cát; còn Glaciers là nước đóng băng."
  },
  {    
    "question": "The landforms ________.",
    "options": [
      "A. are similar in shape and size",
      "B. have the same shape but different size",
      "C. are identical in both size and shape",
      "D. are different in shape and size"
    ],
    "answer": "D. are different in shape and size",
    "explanation": "Câu đầu tiên của đoạn 'Landforms' nói: 'The surface of Earth has different landforms, which **differ in size and shape**'."
  },
  {   
    "question": "Bodies of water include ________.",
    "options": [
      "A. oceans and valleys",
      "B. salty and fresh bodies of water",
      "C. frozen bodies of water and dunes",
      "D. plateaus and fresh bodies of water"
    ],
    "answer": "B. salty and fresh bodies of water",
    "explanation": "Đoạn 'Bodies of Water' nói 'Bodies of water include oceans, seas, lakes, rivers, streams, and glaciers.' và 'most rivers, streams, and lakes have **fresh water**.' đồng thời 'There are five oceans and seven seas and these bodies of water are **salty**...'. Lựa chọn B bao quát được cả nước mặn (oceans/seas) và nước ngọt (rivers/lakes)."
  },
  {   
    "question": "Which of the following is NOT true about bodies of water?",
    "options": [
      "A. They are a small but significant part of Earth’s habitats.",
      "B. They are great sources of food and energy for humans.",
      "C. They play an important role in supporting biodiversity.",
      "D. They playa significant role in transportation of goods."
    ],
    "answer": "A. They are a small but significant part of Earth’s habitats.",
    "explanation": "Câu cuối của đoạn 'Bodies of Water' nói 'Bodies of water form the **largest habitats** on Earth...' làm cho câu A (small part) trở nên sai."
  },

  // Phần B: Câu hỏi Đúng/Sai (b. Read the passages again and tick (✓) T (True) or F (False))
  {    
    "question": "Mountains are formed due to volcanic eruptions or tectonic movements.",
	"options": [
      "T (True)",
      "F (False)"
    ],
    "answer": "T (True)",
    "explanation": "Đúng. Đoạn 'Landforms' có câu: 'Mountains are formed as a result of **earthquakes, volcanic eruptions, and tectonic movements**.'"
  },
  {   
    "question": "Valleys can be V-shaped or U-shaped.",
	"options": [
      "T (True)",
      "F (False)"
    ],
    "answer": "T (True)",
    "explanation": "Đúng. Đoạn 'Landforms' có câu: 'Valleys, which can be **V-shaped or U-shaped**, are low-lying areas between mountains and hills.'"
  },
  {   
    "question": "Plateaus are areas of flat and low-lying lands.",
	"options": [
      "T (True)",
      "F (False)"
    ],
    "answer": "F (False)",
    "explanation": "Sai. Plateaus (cao nguyên) là 'flat areas and **highlands**', không phải 'low-lying lands' (thuộc về Valleys)."
  },
  {   
    "question": "Earth has seven oceans and five seas.",
	 "options": [
      "T (True)",
      "F (False)"
    ],
    "answer": "F (False)",
    "explanation": "Sai. Đoạn 'Bodies of Water' nói: 'There are **five oceans and seven seas** and these bodies of water are salty...'"
  },
  {   
  "group": 3,    
    "question": "Bodies of water provide Earth’s largest habitats for marine life.",
	  "options": [
      "T (True)",
      "F (False)"
    ],
    "answer": "T (True)",
    "explanation": "Đúng. Đoạn 'Bodies of Water' nói: 'Bodies of water form the **largest habitats** on Earth, providing huge living spaces for marine life.'"
  }
];