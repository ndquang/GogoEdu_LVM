let unit = "Unit 1";
let title = "Hobbies";
let groups = [
	  "1. Choose the correct answer A, B, C, or D to complete Mi's email to Jane.",
	  "2. Choose the correct answer A, B, or C to fill in each blank in the following passage.",
	  "3. Read the passage and do the exercises."
]
let exercises = [
  {
    "group": 0,
    "question": "I like (1) ______ a pen pal in Australia because I love your country!",
    "options": [
      "A. having",
      "B. being",
      "C. making",
      "D. sending"
    ],
    "answer": "A. having",
    "explanation": "Sau động từ 'like' có thể là một động từ thêm '-ing'. 'having a pen pal' có nghĩa là 'có một người bạn qua thư' là cách diễn đạt tự nhiên nhất."
  },
  {    
    "question": "Thank you for sending me a (2) ______ of your family.",
    "options": [
      "A. letter",
      "B. postcard",
      "C. drawing",
      "D. photo"
    ],
    "answer": "D. photo",
    "explanation": "Cụm từ 'a photo of your family' có nghĩa là 'một bức ảnh của gia đình bạn', phù hợp với ngữ cảnh được gửi qua email."
  },
  {   
    "question": "What do you (3) ______ doing together?",
    "options": [
      "A. like",
      "B. enjoy",
      "C. prefer",
      "D. want"
    ],
    "answer": "A. like",
    "explanation": "Câu hỏi 'What do you like doing?' là một cấu trúc phổ biến để hỏi về sở thích. Từ 'like' có trong hộp từ vựng ban đầu."
  },
  {   
    "question": "We (4) ______ watch many different kinds of films.",
    "options": [
      "A. sometimes",
      "B. usually",
      "C. always",
      "D. never"
    ],
    "answer": "B. usually",
    "explanation": "'Usually' (thường xuyên) là một trạng từ chỉ tần suất, mô tả một thói quen, rất phù hợp trong câu này và có trong hộp từ vựng gốc."
  },
  {   
    "question": "I'm (5) ______ you a photo of my family.",
    "options": [
      "A. sending",
      "B. having",
      "C. showing",
      "D. giving"
    ],
    "answer": "A. sending",
    "explanation": "Cấu trúc thì hiện tại tiếp diễn 'I'm sending' (Tôi đang gửi) được dùng để diễn tả một hành động đang hoặc sắp diễn ra, phù hợp với việc gửi ảnh kèm email."
  },
  {
    "group": 0,
    "question": "I can't wait to read (6) ______ next email!",
    "options": [
      "A. my",
      "B. a",
      "C. your",
      "D. the"
    ],
    "answer": "C. your",
    "explanation": "Tính từ sở hữu 'your' (của bạn) được dùng để chỉ email tiếp theo là của người nhận (Jane)."
  },
   {
    "group": 1,
    "question": "He usually (1) ______ up early, so he can jog before school.",
    "options": [
      "A. gets",
      "B. stays",
      "C. does"
    ],
    "answer": "A. gets",
    "explanation": "Cụm động từ 'gets up' có nghĩa là 'thức dậy', phù hợp với ngữ cảnh buổi sáng."
  },
  {    
    "question": "After school, Mark often (2) ______ a horse at the riding club near his home.",
    "options": [
      "A. cycles",
      "B. drives",
      "C. rides"
    ],
    "answer": "C. rides",
    "explanation": "Động từ 'rides' được sử dụng với 'a horse' trong cụm từ 'rides a horse' (cưỡi ngựa)."
  },
  {   
    "question": "He also (3) ______ music. He goes to choir practice on Wednesday and Saturday evenings.",
    "options": [
      "A. makes",
      "B. loves",
      "C. does"
    ],
    "answer": "B. loves",
    "explanation": "Với sở thích tham gia đội hợp xướng (choir practice), 'loves music' (yêu âm nhạc) là lựa chọn hợp lý nhất."
  },
  {   
    "question": "(4) ______ Saturday mornings, he usually waters the plants and trees in the garden with his mum.",
    "options": [
      "A. On",
      "B. In",
      "C. At"
    ],
    "answer": "A. On",
    "explanation": "Giới từ 'On' được sử dụng trước các ngày trong tuần hoặc các buổi cụ thể của một ngày trong tuần."
  },
  {
    "question": "He seldom watches TV because he likes doing things (5) ______.",
    "options": [
      "A. inside",
      "B. behind",
      "C. outside"
    ],
    "answer": "C. outside",
    "explanation": "Các hoạt động của Mark như chạy bộ, cưỡi ngựa, làm vườn đều diễn ra ở 'bên ngoài' (outside), trái ngược với việc xem TV ở trong nhà."
  },
  {
    "group": 1,
    "question": "He has a lot of friends and he (6) ______ football with them twice a week.",
    "options": [
      "A. is playing",
      "B. plays",
      "C. play"
    ],
    "answer": "B. plays",
    "explanation": "Câu này diễn tả một thói quen (twice a week), nên chúng ta dùng thì hiện tại đơn. Với chủ ngữ là 'he' (ngôi thứ ba số ít), động từ phải thêm 's'."
  },
   {  
"group": 2,   
    "question": "During the lockdown, the author's family reads books and watches the news together.",
    "options": ["True", "False", "No Information"],
    "answer": "False",
    "explanation": "Đoạn văn nói rằng gia đình tác giả đọc sách và xem phim cùng nhau ('reads books and watches films'), không phải xem tin tức ('watches the news')."
  },
  {   
    "question": "Travelling helps the author have more friends.",
    "options": ["True", "False"],
    "answer": "True",
    "explanation": "Tác giả chia sẻ kinh nghiệm du lịch với bạn cùng lớp và nói rằng: 'This way, I have more friends.' (Bằng cách này, tôi có nhiều bạn hơn)."
  },
  {   
    "question": "There is a dancing club in the author's school.",
    "options": ["True", "False", "No Information"],
    "answer": "No Information",
    "explanation": "Đoạn văn chỉ đề cập đến một 'travel group' (nhóm du lịch) trong lớp của tác giả, không có thông tin nào về câu lạc bộ khiêu vũ."
  },
  {    
    "question": "Hobbies can help a person develop new skills.",
    "options": ["True", "False"],
    "answer": "True",
    "explanation": "Đoạn văn có câu: '...a hobby can help you develop new skills.' (...một sở thích có thể giúp bạn phát triển những kỹ năng mới)."
  },
  {
    "group": 2,
    "question": "The author's sister sews clothes for her family members.",
    "options": ["True", "False"],
    "answer": "False",
    "explanation": "Đoạn văn nói rằng chị của tác giả may quần áo cho búp bê ('sew beautiful doll clothes'), không phải cho các thành viên trong gia đình."
  }
];