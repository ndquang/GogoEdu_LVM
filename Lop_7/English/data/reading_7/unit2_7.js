let unit = "Unit 2";
let title = "Healthy Living";
let groups = [
	  "1. Read the health tips and complete each statement(1-6) with one word from the text",
	  "2. Read the passage about some of the health benefits of being active and do the exercises.",
	  "3. Read the passage and do the exercises."
]
let exercises = [
    {
    "group": 0,
    "question": "Eating a lot of salt or sugar can lead to ______ disease.",
    "options": [
      "A. Lung",
      "B. Heart",
      "C. Kidney",
      "D. Skin"
    ],
    "answer": "B. Heart",
    "explanation": "Đoạn văn có câu: 'Eat less salt and sugar. They put us at the risk of heart disease.' (Ăn ít muối và đường. Chúng khiến chúng ta có nguy cơ mắc bệnh tim)."
  },
  {    
    "question": "Drink only ______ water.",
    "options": [
      "A. Bottled",
      "B. Cold",
      "C. Safe",
      "D. Mineral"
    ],
    "answer": "C. Safe",
    "explanation": "Lời khuyên trong bài là: 'Make sure that the water you are drinking is safe.' (Hãy chắc chắn rằng nước bạn uống là an toàn)."
  },
  {   
    "question": "Doing housework is also a type of ______ activity.",
    "options": [
      "A. Physical",
      "B. Mental",
      "C. Relaxing",
      "D. Social"
    ],
    "answer": "A. Physical",
    "explanation": "Đoạn văn viết: 'Do more physical activities like sport and housework.' (Thực hiện nhiều hoạt động thể chất hơn như thể thao và việc nhà)."
  },
  {
    "question": "Stand up every hour and do some ______ to reduce sitting time.",
    "options": [
      "A. Homework",
      "B. Reading",
      "C. Simple exercise",
      "D. Deep breaths"
    ],
    "answer": "C. Simple exercise",
    "explanation": "Lời khuyên là: 'Stand up every hour and do some simple exercise or walk around.' (Hãy đứng dậy mỗi giờ và tập một vài bài tập đơn giản hoặc đi lại xung quanh)."
  },
  {
    "question": "Your mind works well if you get enough good ______.",
    "options": [
      "A. Food",
      "B. Sleep",
      "C. Rest",
      "D. Water"
    ],
    "answer": "B. Sleep",
    "explanation": "Đoạn văn nêu rõ: 'Get seven to eight hours of good sleep each night. This helps both your mind and body work well.' (Ngủ đủ bảy đến tám tiếng mỗi đêm. Điều này giúp cả trí óc và cơ thể bạn hoạt động tốt)."
  },
  {
    "group": 0,
    "question": "______ regularly to prevent some diseases.",
    "options": [
      "A. Handwash",
      "B. Exercise",
      "C. Eat",
      "D. Meditate"
    ],
    "answer": "A. Handwash",
    "explanation": "Lời khuyên cuối cùng là: 'Handwash regularly with soap and water.' (Rửa tay thường xuyên bằng xà phòng và nước) để ngăn ngừa bệnh tật."
  },
   {
    "group": 1,
    "question": "My grandparents live in the countryside... they teach me a lot of things about (1) ______.",
    "options": [
      "A. Health",
      "B. Vegetables",
      "C. Exercise"
    ],
    "answer": "B. Vegetables",
    "explanation": "Ngữ cảnh của đoạn văn là về khu vườn của ông bà, vì vậy họ dạy tác giả về 'rau củ' (vegetables)."
  },
  {    
    "question": "Vegetables come in different shapes, sizes, and (2) ______.",
    "options": [
      "A. Colours",
      "B. Prices",
      "C. Weight"
    ],
    "answer": "A. Colours",
    "explanation": "Rau củ có nhiều hình dạng, kích cỡ và 'màu sắc' (colours) khác nhau."
  },
  {    
    "question": "Carrots and potatoes grow (3) ______ the ground.",
    "options": [
      "A. Above",
      "B. On",
      "C. Under"
    ],
    "answer": "C. Under",
    "explanation": "Cà rốt và khoai tây là những loại củ mọc 'dưới' (under) mặt đất."
  },
  {    
    "question": "Some kinds of beans (4) ______ a high net to grow.",
    "options": [
      "A. Need",
      "B. Provide",
      "C. Have"
    ],
    "answer": "A. Need",
    "explanation": "Các loại đậu 'cần' (need) một cái giàn cao để leo lên và phát triển."
  },
  {    
    "question": "My grandfather says that coloured vegetables are very good for health (5) ______ they provide a lot of natural vitamins.",
    "options": [
      "A. And",
      "B. Because",
      "C. So"
    ],
    "answer": "B. Because",
    "explanation": "Mệnh đề sau giải thích lý do cho mệnh đề trước (tốt cho sức khỏe VÌ cung cấp vitamin), vì vậy 'because' (bởi vì) là từ nối phù hợp."
  },
  {   
    "question": "White cauliflower is (6) ______ in vitamin C.",
    "options": [
      "A. Rich",
      "B. Poor",
      "C. Low"
    ],
    "answer": "A. Rich",
    "explanation": "Cụm từ cố định 'rich in' có nghĩa là 'giàu' một chất dinh dưỡng nào đó."
  },
  {    
    "question": "(7) ______ have vitamins A, B, C, and E.",
    "options": [
      "A. Chicken",
      "B. Fish",
      "C. Pumpkins"
    ],
    "answer": "C. Pumpkins",
    "explanation": "Trong ba lựa chọn, 'Bí ngô' (Pumpkins) là loại rau củ được trồng trong vườn và chứa nhiều loại vitamin được liệt kê."
  },
  {
    "group": 1,
    "question": "My grandfather also says that gardening is a good way of (8) ______. It helps him keep fit and strong.",
    "options": [
      "A. Resting",
      "B. Relaxing",
      "C. Exercising"
    ],
    "answer": "C. Exercising",
    "explanation": "Câu tiếp theo 'Nó giúp ông giữ dáng và khỏe mạnh' cho thấy làm vườn được coi là một hình thức 'tập thể dục' (exercising)."
  },
  {
	"group": 2,
    question: "In 2019, Spain was number ________ in health.",
    options: [
      "A. One",
      "B. Two",
      "C. Ten"
    ],
    answer: "A. One",
    explanation: "Năm 2019, Tây Ban Nha được xếp hạng là quốc gia khỏe mạnh nhất thế giới – tức là đứng số 1."
  },
  {
    question: "The Mediterranean diet includes ________.",
    options: [
      "A. Lots of vegetables",
      "B. Red meat",
      "C. Potato soup"
    ],
    answer: "B. Red meat",
    explanation: "Chế độ ăn Địa Trung Hải tập trung vào chất béo và protein lành mạnh, gồm nhiều rau, hải sản và súp cà chua lạnh – không phải thịt đỏ."
  },
  {
    question: "Spanish people ________.",
    options: [
      "A. Have more diseases than the rest of the world",
      "B. Have fewer diseases than the rest of the world",
      "C. Do not have diseases"
    ],
    answer: "B. have fewer diseases than the rest of the world",
    explanation: "Do chế độ ăn lành mạnh, người Tây Ban Nha mắc ít bệnh hơn so với phần còn lại của thế giới."
  },
  {
    question: "Beautiful ________ makes the Spanish happy.",
    options: [
      "A. Beaches",
      "B. Houses",
      "C. Weather"
    ],
    answer: "C. Weather",
    explanation: "Đoạn văn nói rằng thời tiết đẹp quanh năm là một trong những lý do chính khiến người Tây Ban Nha hạnh phúc."
  },
  {
    question: "The Spanish enjoy ________.",
    options: [
      "A. Good food",
      "B. Simple pleasures",
      "C. Good education"
    ],
    answer: "B. Simple pleasures",
    explanation: "Người Tây Ban Nha thích những niềm vui giản dị trong cuộc sống — “the simple pleasures of life”."
  }
];