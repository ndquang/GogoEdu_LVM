let unit = "Unit 8";
let title = "Shopping";
let groups = [
	  "1.  Read the text and decide which answer A, B, C, or D best fills each gap.",
	  "2. Read and decide if the statements are true (T) or false (F).",
	  "3. Read the passage and write the short answers to the following questions."
]
let exercises = [
   {
    "group": 0,
    "question": "A corner shop or a convenience shop is a British tradition. It is a small (1) ______ shop.",
    "options": [
      "A. retail",
      "B. mass",
      "C. wholesale",
      "D. convenient"
    ],
    "answer": "A. retail",
    "explanation": "Cửa hàng góc phố là một loại cửa hàng 'bán lẻ' (retail), nơi hàng hóa được bán trực tiếp cho người tiêu dùng."
  },
  {    
    "question": "The corner shop sells all kinds of household goods and simple food and drinks like snacks, groceries, coffee, soft drinks. It (2) ______ sells newspapers, magazines, and cigarettes.",
    "options": [
      "A. generally",
      "B. finally",
      "C. also",
      "D. too"
    ],
    "answer": "C. also",
    "explanation": "'Also' (cũng) được dùng để thêm một thông tin mới vào danh sách các mặt hàng mà cửa hàng bán."
  },
  {    
    "question": "They are like the British corner shops. The only (3) ______ is that convenience stores are often open 24 hours.",
    "options": [
      "A. good",
      "B. difference",
      "C. benefit",
      "D. thing"
    ],
    "answer": "B. difference",
    "explanation": "Câu này đang chỉ ra điểm khác biệt duy nhất giữa hai loại cửa hàng. Do đó, 'difference' (sự khác biệt) là từ phù hợp nhất."
  },
  {    
    "question": "You can find a convenience store at any residential (4) ______, a filling station, a railway station, or alongside a busy road.",
    "options": [
      "A. land",
      "B. houses",
      "C. community",
      "D. area"
    ],
    "answer": "D. area",
    "explanation": "'Residential area' là một cụm từ phổ biến có nghĩa là 'khu dân cư', nơi bạn có thể tìm thấy các cửa hàng tiện lợi."
  },
  {    
    "question": "Today, there are convenience stores all over the world. Each country has its own (5) ______ of convenience stores as well as the global brand 7-Eleven.",
    "options": [
      "A. brand",
      "B. design",
      "C. demand",
      "D. description"
    ],
    "answer": "A. brand",
    "explanation": "Mỗi quốc gia có những 'thương hiệu' (brand) cửa hàng tiện lợi riêng, bên cạnh thương hiệu toàn cầu như 7-Eleven."
  },
  {
    "group": 0,
    "question": "Both corner shops and convenience stores (6) ______ things at higher prices than the supermarket, but they are much more convenient.",
    "options": [
      "A. are",
      "B. ask",
      "C. sell",
      "D. offer"
    ],
    "answer": "C. sell",
    "explanation": "Chức năng chính của các cửa hàng này là 'bán' (sell) hàng hóa cho khách hàng."
  },
    {
    "group": 1,
    "question": "People working in a butcher shop are quite professional.",
    "options": ["True", "False"],
    "answer": "True",
    "explanation": "Đoạn văn nói rằng họ 'are trained in the meat industry' (được đào tạo trong ngành công nghiệp thịt) và 'know how to cut the meat the right way' (biết cách cắt thịt đúng cách), cho thấy họ rất chuyên nghiệp."
  },
  {   
    "question": "Meat at a butcher shop is usually cheaper than in a supermarket.",
    "options": ["True", "False"],
    "answer": "False",
    "explanation": "Đoạn văn nói rằng mọi người mua thịt ở siêu thị vì 'the price is lower' (giá thấp hơn), ngụ ý thịt ở cửa hàng bán thịt đắt hơn."
  },
  {   
    "question": "In the past, there were bookshops in most towns and cities.",
    "options": ["True", "False"],
    "answer": "True",
    "explanation": "Đoạn văn có câu: 'Years ago, it was easy to find bookshops in any town or city.' (Nhiều năm trước, rất dễ dàng để tìm thấy các hiệu sách ở bất kỳ thị trấn hay thành phố nào)."
  },
  {    
    "question": "Nowadays, paper books have to compete with digital books.",
    "options": ["True", "False"],
    "answer": "True",
    "explanation": "Đoạn văn đề cập rằng các chuỗi nhà sách lớn đang gặp khó khăn vì 'more people are buying books from Amazon as well as digital books' (nhiều người mua sách từ Amazon cũng như sách kỹ thuật số)."
  },
  {
    "group": 1,
    "question": "The passage is about changes in some speciality shops.",
    "options": ["True", "False"],
    "answer": "True",
    "explanation": "Câu đầu tiên của đoạn văn giới thiệu chủ đề chính: 'Some speciality shops are now in danger of disappearing.' (Một số cửa hàng đặc sản hiện đang có nguy cơ biến mất), và cả bài viết tập trung vào sự thay đổi này."
  },
   {
    "group": 2,
    "question": "Where can you find a thrift store?",
    "options": [
      "A. Only in rural areas",
      "B. Throughout cities in many countries",
      "C. Only in America",
      "D. Only in the UK"
    ],
    "answer": "B. Throughout cities in many countries",
    "explanation": "Đoạn văn có câu: 'You can find a thrift store... throughout cities in many countries.' (Bạn có thể tìm thấy cửa hàng tiết kiệm... trên khắp các thành phố ở nhiều quốc gia)."
  },
  {    
    "question": "Where do thrift stores get their goods?",
    "options": [
      "A. From large factories",
      "B. From donations from the public",
      "C. From other countries",
      "D. From supermarkets"
    ],
    "answer": "B. From donations from the public",
    "explanation": "Đoạn văn nói rằng: 'Most of the goods are donations from the public...' (Hầu hết hàng hóa là do công chúng quyên góp...)."
  },
  {    
    "question": "Is thrift store shopping for low-income people only?",
    "options": [
      "A. Yes, it is.",
      "B. No, it isn't.",
      "C. The passage doesn't say.",
      "D. It is for tourists only."
    ],
    "answer": "B. No, it isn't.",
    "explanation": "Đoạn văn giải thích: 'Today thrift store shopping has become a fun and exciting way for many people...' (Ngày nay, mua sắm ở cửa hàng tiết kiệm đã trở thành một cách thú vị và hấp dẫn đối với nhiều người...)."
  },
  {    
    "question": "What is the purpose of thrift stores?",
    "options": [
      "A. To make a large profit for owners",
      "B. To sell expensive goods",
      "C. To raise money for charities",
      "D. To help people save clothes"
    ],
    "answer": "C. To raise money for charities",
    "explanation": "Câu đầu tiên của đoạn hai nêu rõ: 'The purpose of thrift stores is to raise money for charities.' (Mục đích của các cửa hàng tiết kiệm là để quyên tiền cho các tổ chức từ thiện)."
  },
  {
    "group": 2,
    "question": "Who benefits from the money that thrift stores make?",
    "options": [
      "A. The store managers",
      "B. The government",
      "C. Charities like a church, school, or community group",
      "D. The people who donate goods"
    ],
    "answer": "C. Charities like a church, school, or community group",
    "explanation": "Đoạn văn có câu: 'The money you spend at a thrift shop usually benefits a church, school, or community group.' (Số tiền bạn chi tiêu tại một cửa hàng tiết kiệm thường mang lại lợi ích cho một nhà thờ, trường học hoặc nhóm cộng đồng)."
  }
];