let unit = "Unit 4";
let title = "Ethnic groups of Viet Nam";
let groups = [
	  "I. Choose the correct answer A, B, C, or D to complete the passage.",
	  "II. Read the passage about the countryside in Britain and choose the correct answer A, B, C, or D to each of the questions.",
	  "III. Read the passage and fill in each blank with one word from the passage.",
	  "IV. Read the passage about the countryside in Britain and choose the correct answer A, B, C, or D to each of the questions."
]
let exercises = [
    {
    "group": 0,
    "question": "I live in Ha Noi, (1) ______ my home town is Ninh Binh.",
    "options": [
      "A. but",
      "B. so",
      "C. for",
      "D. or"
    ],
    "answer": "A. but",
    "explanation": "Liên từ 'but' (nhưng) được sử dụng để chỉ sự tương phản giữa hai mệnh đề: sống ở Hà Nội và quê ở Ninh Bình."
  },
  {    
    "question": "Every morning, my grandma and I got up early and (2) ______ the pigs and chickens.",
    "options": [
      "A. feed",
      "B. is feeding",
      "C. fed",
      "D. will feed"
    ],
    "answer": "C. fed",
    "explanation": "Câu chuyện được kể ở thì quá khứ đơn (got up early). Do đó, động từ 'feed' cũng phải được chia ở thì quá khứ đơn là 'fed' (đã cho ăn)."
  },
  {   
    "question": "After that, I (3) ______ fishing with my grandpa or helped my grandma with the gardening.",
    "options": [
      "A. could",
      "B. went",
      "C. did",
      "D. played"
    ],
    "answer": "B. went",
    "explanation": "Cụm từ 'go fishing' (đi câu cá) là một cụm từ cố định. Vì câu chuyện ở thì quá khứ nên 'go' được chia thành 'went'."
  },
  {   
    "question": "They taught me to (4) ______ the buffaloes.",
    "options": [
      "A. run",
      "B. get",
      "C. go",
      "D. herd"
    ],
    "answer": "D. herd",
    "explanation": "Động từ 'herd' có nghĩa là chăn, dắt (một đàn gia súc), phù hợp nhất với ngữ cảnh 'the buffaloes' (những con trâu)."
  },
  {
    "group": 0,
    "question": "I'm sending you a photo I took (5) ______ my grandparents' house.",
    "options": [
      "A. for",
      "B. of",
      "C. on",
      "D. next"
    ],
    "answer": "B. of",
    "explanation": "Giới từ 'of' được dùng để chỉ sự sở hữu hoặc nội dung của bức ảnh. 'A photo of my grandparents' house' có nghĩa là một bức ảnh chụp ngôi nhà của ông bà tôi."
  },
   {
    "group": 1,
    "question": "They earn a living by farming, (1) ______, and producing handicraft products.",
    "options": [
      "A. go fishing",
      "B. fishing",
      "C. fish",
      "D. fishes"
    ],
    "answer": "B. fishing",
    "explanation": "Câu này đang liệt kê các hoạt động sinh kế dưới dạng danh động từ (farming, producing). Do đó, 'fishing' là lựa chọn đúng để đảm bảo cấu trúc song song."
  },
  {    
    "question": "The Khmer live harmoniously with other ethnic (2) ______ in the Mekong Delta...",
    "options": [
      "A. groups",
      "B. persons",
      "C. religions",
      "D. nature"
    ],
    "answer": "A. groups",
    "explanation": "Cụm từ 'ethnic groups' (các nhóm dân tộc) là một cụm danh từ cố định và phù hợp nhất trong ngữ cảnh này."
  },
  {   
    "question": "The Khmer are Buddhists. There is a (3) ______ in every village.",
    "options": [
      "A. school",
      "B. cathedral",
      "C. Rong",
      "D. temple"
    ],
    "answer": "D. temple",
    "explanation": "Vì người Khmer theo đạo Phật (Buddhists), nên nơi thờ tự của họ trong mỗi làng sẽ là chùa (temple)."
  },
  {    
    "question": "The temples are not only places for the Khmer to practise (4) ______ religion.",
    "options": [
      "A. the",
      "B. their",
      "C. its",
      "D. a"
    ],
    "answer": "B. their",
    "explanation": "Tính từ sở hữu 'their' (của họ) được dùng để chỉ tôn giáo của người Khmer."
  },
  {    
    "question": "At the age of 12, Khmer boys come to live and (5) ______ in a temple for several years...",
    "options": [
      "A. play",
      "B. help",
      "C. study",
      "D. visit"
    ],
    "answer": "C. study",
    "explanation": "Ngữ cảnh tiếp theo mô tả việc học về đạo Phật và học đọc, viết, vì vậy động từ 'study' (học tập) là phù hợp nhất."
  },
  {    
    "question": "There, they learn about Buddhism, and to read and write the Khmer (6) ______.",
    "options": [
      "A. language",
      "B. letters",
      "C. reports",
      "D. stories"
    ],
    "answer": "A. language",
    "explanation": "Họ học đọc và viết, tức là học về ngôn ngữ Khmer (Khmer language)."
  },
  {    
    "question": "They also learn how to behave towards their grandparents, parents, teachers, old people, and others in their (7) ______.",
    "options": [
      "A. area",
      "B. family",
      "C. community",
      "D. home"
    ],
    "answer": "C. community",
    "explanation": "'Community' (cộng đồng) là từ bao hàm tất cả những người được liệt kê (ông bà, cha mẹ, thầy cô, người lớn tuổi và những người khác)."
  },
  {
    "group": 1,
    "question": "They learn basic knowledge of their traditional culture – folk tales, songs, and (8) ______.",
    "options": [
      "A. singing",
      "B. eating",
      "C. work",
      "D. dances"
    ],
    "answer": "D. dances",
    "explanation": "Câu này đang liệt kê các yếu tố của văn hóa truyền thống. 'Dances' (các điệu múa) là một danh từ phù hợp để đi cùng với 'folk tales' (truyện dân gian) và 'songs' (bài hát)."
  },
   {
    "group": 2,
    "question": "Life in the mountains can be (1) ______.",
    "options": [
      "A. friendly",
      "B. hard",
      "C. peaceful",
      "D. simple"
    ],
    "answer": "B. hard",
    "explanation": "Câu đầu tiên của đoạn văn nói: 'Living in the mountains can be very hard.'"
  },
  {    
    "question": "Three difficulties: - not much (2) ______ for crops",
    "options": [
      "A. air",
      "B. oxygen",
      "C. land",
      "D. houses"
    ],
    "answer": "C. land",
    "explanation": "Đoạn văn có câu: '...there is not enough land to grow crops...'"
  },
  {   
    "question": "Three difficulties: - less oxygen making (3) ______ hard",
    "options": [
      "A. breathing",
      "B. working",
      "C. living",
      "D. travelling"
    ],
    "answer": "A. breathing",
    "explanation": "Đoạn văn có câu: '...there is less oxygen, which makes breathing harder.'"
  },
  {   
    "question": "Three benefits: - less (4) ______",
    "options": [
      "A. oxygen",
      "B. land",
      "C. people",
      "D. pollution"
    ],
    "answer": "D. pollution",
    "explanation": "Đoạn văn có câu: 'Being on the mountaintops allows you to live far from pollution.'"
  },
  {   
    "question": "Three benefits: - fresher (5) ______",
    "options": [
      "A. air",
      "B. life",
      "C. challenges",
      "D. benefits"
    ],
    "answer": "A. air",
    "explanation": "Đoạn văn có câu: 'The air you breathe is fresher.'"
  },
  {
    "group": 2,
    "question": "Three benefits: - (6) ______ life",
    "options": [
      "A. hard",
      "B. active",
      "C. peaceful",
      "D. friendly"
    ],
    "answer": "C. peaceful",
    "explanation": "Câu cuối cùng của đoạn văn là: 'They live a peaceful life.'"
  },
    {
    "group": 3,
    "question": "Bac Ha Sunday Fair is the largest ______ market.",
    "options": [
      "A. local",
      "B. highland",
      "C. city",
      "D. traditional"
    ],
    "answer": "B. highland",
    "explanation": "Câu đầu tiên trong đoạn văn có ghi: 'Bac Ha Sunday Fair in Lao Cai is the largest and most colourful highland market in Viet Nam.'"
  },
  {    
    "question": "Some people go to the market on ______.",
    "options": [
      "A. motorbike",
      "B. car",
      "C. horseback",
      "D. bicycle"
    ],
    "answer": "C. horseback",
    "explanation": "Đoạn văn mô tả: 'They come on foot or on horseback...'"
  },
  {    
    "question": "An example of a minority group at the market is the ______.",
    "options": [
      "A. Kinh",
      "B. Khmer",
      "C. Cham",
      "D. Hmong"
    ],
    "answer": "D. Hmong",
    "explanation": "Đoạn văn liệt kê các dân tộc: 'The Flower Hmong, Tay, Nung, Dao, and other ethnic groups...'"
  },
  {    
    "question": "They sell medicinal ______ they gather from the mountains.",
    "options": [
      "A. plants",
      "B. roots",
      "C. foods",
      "D. drinks"
    ],
    "answer": "A. plants",
    "explanation": "Trong đoạn văn có câu: '...or medicinal plants they gather from the forests and mountains.'"
  },
  {    
    "question": "Thang co is a famous Hmong ______.",
    "options": [
      "A. drink",
      "B. costume",
      "C. food",
      "D. song"
    ],
    "answer": "C. food",
    "explanation": "Đoạn văn giới thiệu về thắng cố: '...thang co, a famous traditional Hmong food from horse meat.'"
  },
  {
    "group": 3,
    "question": "Young people go to the market to look for a ______.",
    "options": [
      "A. friend",
      "B. job",
      "C. horse",
      "D. lover"
    ],
    "answer": "D. lover",
    "explanation": "Câu cuối cùng của đoạn văn viết: 'Young people come there with the hope of finding a lover.'"
  }
  
];