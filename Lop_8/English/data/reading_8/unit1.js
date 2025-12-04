let unit = "Init 1";
let title = "Local Community";
let groups = [
	  "I. Choose the correct answer A, B, C, or D to complete Trang's email to her new friend, Elena.",
	  "II. Fill in each blank with a suitable word from the box to complete a passage about a community helper.",
	  "III. Read a passage about Sardinia and do the exercises that follow."
]
let exercises = [
 {
	 "group": 0,
    "question": "I'm so happy to receive your email. Now I'm going to (1) ______ you about my leisure activities.",
    "options": [
        "A. tell",
        "B. doing",
        "C. become",
        "D. best"
    ],
    "answer": "A. tell",
    "explanation": "Cấu trúc 'tell somebody about something' có nghĩa là 'kể cho ai đó về điều gì đó'."
  },
  {
    "question": "It may sound strange, but the leisure activity I like (2) ______ is volunteering.",
    "options": [
        "A. neighbourhood",
        "B. elderly",
        "C. best",
        "D. what"
    ],
    "answer": "C. best",
    "explanation": "Cụm từ 'like something best' có nghĩa là 'thích cái gì nhất'."
  },
  {
    "question": "There is a volunteer club in my (3) ______. Last year I took part in one of its programmes.",
    "options": [
        "A. doing",
        "B. neighbourhood",
        "C. books",
        "D. tell"
    ],
    "answer": "B. neighbourhood",
    "explanation": "Từ 'neighbourhood' (khu phố) phù hợp với ngữ cảnh 'a volunteer club in my neighbourhood' (một câu lạc bộ tình nguyện trong khu phố của tôi)."
  },
  {
    "question": "I really enjoyed the activities, so I decided to (4) ______ a member.",
    "options": [
        "A. best",
        "B. what",
        "C. doing",
        "D. become"
    ],
    "answer": "D. become",
    "explanation": "Sau 'decided to' cần một động từ nguyên thể. 'Become a member' có nghĩa là 'trở thành một thành viên'."
  },
  {
    "question": "Our volunteer club mostly helps the (5) ______ in our neighbourhood.",
    "options": [
        "A. elderly",
        "B. neighbourhood",
        "C. books",
        "D. become"
    ],
    "answer": "A. elderly",
    "explanation": "Mạo từ 'the' cộng với một tính từ (elderly - lớn tuổi) để chỉ một nhóm người. 'The elderly' có nghĩa là 'người cao tuổi'."
  },
  {
    "question": "We also talk and read (6) ______ to them.",
    "options": [
        "A. tell",
        "B. books",
        "C. best",
        "D. doing"
    ],
    "answer": "B. books",
    "explanation": "Dựa vào ngữ cảnh, hành động 'read' (đọc) sẽ đi với danh từ 'books' (sách). 'Read books to them' có nghĩa là 'đọc sách cho họ nghe'."
  },
  {
    "question": "Besides volunteering, I also love drawing and (7) ______ DIY.",
    "options": [
        "A. become",
        "B. tell",
        "C. doing",
        "D. elderly"
    ],
    "answer": "C. doing",
    "explanation": "Cụm từ cố định 'do DIY' có nghĩa là 'làm đồ tự chế'. Ở đây dùng dạng V-ing 'doing' để song hành với 'drawing'."
  },
  {
	  "group": 0,
    "question": "(8) ______ about you? What do you like doing in your free time? Tell me.",
    "options": [
        "A. What",
        "B. Best",
        "C. Tell",
        "D. Books"
    ],
    "answer": "A. What",
    "explanation": "Cấu trúc 'What about you?' là một câu hỏi thông dụng để hỏi lại người khác về ý kiến hoặc tình hình của họ."
  },
   {
	"group": 1,
    "question": "There are a lot of pastimes that young people like, and one of (1) __________ is mountain climbing.",
    "options": [
      "A. them",
      "B. they",
      "C. theirs",
      "D. their"
    ],
    "answer": "A. them",
    "explanation": "Đáp án đúng là 'them'. Đại từ tân ngữ 'them' được dùng để thay thế cho danh từ 'pastimes' đã được nhắc đến trước đó. Cấu trúc 'one of them' có nghĩa là 'một trong số chúng'."
  },
  {
    "question": "If you go climbing outdoors, it is a great way to (2) __________ your strength and enjoy nature at the same time.",
    "options": [
      "A. decrease",
      "B. reduce",
      "C. increase",
      "D. raise"
    ],
    "answer": "C. increase",
    "explanation": "Đáp án đúng là 'increase'. Leo núi là một hoạt động giúp tăng cường sức mạnh. 'Increase' (tăng lên) là từ phù hợp nhất về nghĩa trong ngữ cảnh này."
  },
  {
    "question": "You can even set up your own climbing wall in your backyard or (3) __________ your home.",
    "options": [
      "A. indoor",
      "B. inside",
      "C. within",
      "D. among"
    ],
    "answer": "B. inside",
    "explanation": "Đáp án đúng là 'inside'. Đây là một giới từ chỉ vị trí, có nghĩa là 'bên trong'. 'Inside your home' có nghĩa là 'bên trong nhà của bạn'."
  },
  {
    "question": "This way you don't have to go out and still can (4) __________ fit and enjoy the activity.",
    "options": [
      "A. keep",
      "B. stay",
      "C. go",
      "D. give"
    ],
    "answer": "B. stay",
    "explanation": "Đáp án đúng là 'stay'. Cụm từ 'stay fit' có nghĩa là 'giữ dáng, giữ cho cơ thể khỏe mạnh', phù hợp với ngữ cảnh duy trì trạng thái khỏe mạnh dù không ra ngoài."
  },
  {
    "question": "Many people take a class to learn how to climb and use their equipment (5) __________.",
    "options": [
      "A. effective",
      "B. effect",
      "C. effectively",
      "D. effectiveness"
    ],
    "answer": "C. effectively",
    "explanation": "Đáp án đúng là 'effectively'. Chúng ta cần một trạng từ để bổ nghĩa cho động từ 'use'. 'Effectively' (một cách hiệu quả) là trạng từ phù hợp."
  },
  {	
    "question": "If you are an active person and like outdoor activities, (6) __________ don't you try this activity?",
    "options": [
      "A. what",
      "B. when",
      "C. how",
      "D. why"
    ],
    "answer": "D. why",
    "explanation": "Đáp án đúng là 'why'. Cấu trúc 'Why don't you...?' được dùng để đưa ra một lời gợi ý hoặc đề nghị."
  }
];