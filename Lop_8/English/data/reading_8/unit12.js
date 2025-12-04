let unit = "Unit 12";
let title = "Life on other planets";
let groups = [
	  "1. Choose the correct answer A, B, or C to fill in each blank in the following passage",
	  "2. Read the passage about life on other planets and choose the correct answer A, B, C, or D to each of the questions.",
	  "3. Read the passage about UFOs and tick (✓) T (True) or F (False) for each sentence."
]
let exercises = [
 {
    "group": 0,
    "question": "Venus is more like Earth in some ways (1) ______ any other planet.",
    "options": ["A. that", "B. than", "C. as"],
    "answer": "B. than",
    "explanation": "Cấu trúc so sánh hơn 'more... than' được sử dụng ở đây để so sánh Sao Kim với các hành tinh khác."
  },
  {    
    "question": "It is a similar distance (2) ______ the Sun compared to the other planets.",
    "options": ["A. of", "B. to", "C. from"],
    "answer": "C. from",
    "explanation": "Cụm từ 'distance from' được dùng để chỉ khoảng cách từ một điểm nào đó. Ở đây là khoảng cách từ Mặt Trời."
  },
  {    
    "question": "It is made mostly of rock and has an atmosphere (gases that (3) ______ a planet).",
    "options": ["A. surround", "B. move", "C. circle"],
    "answer": "A. surround",
    "explanation": "Bầu khí quyển là lớp khí 'bao quanh' (surround) một hành tinh."
  },
  {    
    "question": "Venus has flat plains and high places, just (4) ______ Earth.",
    "options": ["A. like", "B. as", "C. about"],
    "answer": "A. like",
    "explanation": "'Like' được dùng để so sánh sự giống nhau giữa Sao Kim và Trái Đất."
  },
  {   
    "question": "Meteorites crashing into the planet made the big (5) ______.",
    "options": ["A. spaces", "B. hills", "C. craters"],
    "answer": "C. craters",
    "explanation": "Thiên thạch va vào hành tinh tạo ra các 'hố va chạm' (craters)."
  },
  {   
    "question": "In other ways, Venus is not (6) ______ all like Earth.",
    "options": ["A. in", "B. at", "C. for"],
    "answer": "B. at",
    "explanation": "Cụm từ 'not at all' được dùng để nhấn mạnh sự phủ định, có nghĩa là 'hoàn toàn không'."
  },
  {   
    "question": "It is made (7) ______ mainly of a gas called carbon dioxide.",
    "options": ["A. up", "B. with", "C. by"],
    "answer": "A. up",
    "explanation": "Cụm động từ 'be made up of' có nghĩa là 'được cấu tạo từ'."
  },
  {   
    "question": "The clouds are filled with (8) ______ of acid “rain”...",
    "options": ["A. amounts", "B. falls", "C. drops"],
    "answer": "C. drops",
    "explanation": "'Drops of rain' là một cụm từ thông thường, có nghĩa là 'những giọt mưa'."
  },
  {    
    "question": "...acid “rain” that (9) ______ eat through your clothes and through you.",
    "options": ["A. should", "B. would", "C. must"],
    "answer": "B. would",
    "explanation": "'Would' được sử dụng ở đây để mô tả một kết quả giả định hoặc có thể xảy ra trong một tình huống nhất định."
  },
  {
    "group": 0,
    "question": "The atmosphere is so thick that its weight would (10) ______ you.",
    "options": ["A. crush", "B. press", "C. break"],
    "answer": "A. crush",
    "explanation": "Sức nặng của bầu khí quyển dày đặc sẽ 'đè bẹp' (crush) bạn."
  },
   {
    "group": 1,
    "question": "The best title for the passage could be ______.",
    "options": [
      "A. “The Search for Alien Life”",
      "B. “The Search for a New Planet”",
      "C. “A Promising Planet Supporting Life”",
      "D. “Evidence of Life on Other Planets”"
    ],
    "answer": "A. “The Search for Alien Life”",
    "explanation": "Tiêu đề này bao quát toàn bộ nội dung bài viết, từ việc xác định các điều kiện cần thiết cho sự sống, các phương pháp tìm kiếm (tàu thăm dò không gian, kính thiên văn vô tuyến) cho đến kết quả hiện tại."
  },
  {   
    "question": "Most scientists believe that a life supporting planet must be ______.",
    "options": [
      "A. somewhat similar to Earth",
      "B. exactly the same Earth",
      "C. in our solar systems",
      "D. at a good distance from Earth"
    ],
    "answer": "A. somewhat similar to Earth",
    "explanation": "Câu đầu tiên của đoạn văn nói rằng một hành tinh phải 'be similar to Earth in several ways' (tương tự Trái Đất ở một vài khía cạnh)."
  },
  {   
    "question": "The phrase “Space probes” most likely means ______.",
    "options": [
      "A. “vehicles that travel in space, carrying spacecraft”",
      "B. “spacecraft that collect information about the conditions of the Sun”",
      "C. “vehicles that travel in space, carrying people”",
      "D. “spacecraft without people on them that collect information about a planet”"
    ],
    "answer": "D. “spacecraft without people on them that collect information about a planet”",
    "explanation": "Tàu thăm dò không gian (Space probes) là những thiết bị không người lái được gửi vào không gian để thu thập dữ liệu về các hành tinh, phù hợp với mô tả trong đoạn văn là chúng 'have searched for traces of bacteria... on Mars'."
  },
  {    
    "question": "The scientists use radio telescopes in order to ______.",
    "options": [
      "A. search for traces of bacteria or other tiny living things",
      "B. catch signals from creatures on other planets",
      "C. search for planets that are an ideal distance from their suns",
      "D. discover planets that are roughly the size of Earth"
    ],
    "answer": "B. catch signals from creatures on other planets",
    "explanation": "Đoạn văn có câu: 'Using radio telescopes, they hope to capture signals from intelligent aliens.' (Sử dụng kính thiên văn vô tuyến, họ hy vọng thu được tín hiệu từ những người ngoài hành tinh thông minh)."
  },
  {
    "group": 1,
    "question": "Which of the following is NOT true according to the passage?",
    "options": [
      "A. Planets need water and air to support life.",
      "B. If a sun is the right distance from a planet, the planet could support life.",
      "C. Scientists have looked at the possibility of life only in our solar system.",
      "D. Space probes capture signals from intelligent aliens."
    ],
    "answer": "D. Space probes capture signals from intelligent aliens.",
    "explanation": "Câu này không đúng. Đoạn văn nói rằng các nhà khoa học sử dụng 'radio telescopes' (kính thiên văn vô tuyến) để thu tín hiệu, chứ không phải 'space probes' (tàu thăm dò không gian)."
  },
   {
    "group": 2,
    "question": "All of the UFO sightings were later identified as ordinary objects like planes, satellites, etc.",
    "options": ["True", "False"],
    "answer": "False",
    "explanation": "Đoạn văn nói rằng 'More than nine-tenths of them' (Hơn chín phần mười trong số chúng) được xác định là vật thể thông thường, không phải tất cả. Ngoài ra, còn có 701 trường hợp không được xác định trong Dự án Blue Book."
  },
  {    
    "question": "People also call UFOs of any shape flying saucers.",
    "options": ["True", "False"],
    "answer": "True",
    "explanation": "Đoạn văn có câu: 'Since then, UFOs of any shape are often called flying saucers.' (Kể từ đó, UFO ở bất kỳ hình dạng nào cũng thường được gọi là đĩa bay)."
  },
  {   
    "question": "The Air Force took the reports of UFO sightings seriously because they believed in visitors from outer space.",
    "options": ["True", "False"],
    "answer": "False",
    "explanation": "Đoạn văn nói rằng các quan chức Không quân 'did not necessarily believe in visitors from outer space' (không nhất thiết tin vào các vị khách từ ngoài không gian). Họ điều tra vì muốn chắc chắn rằng UFO không phải là một mối đe dọa, ví dụ như máy bay của đối phương."
  },
  {   
    "question": "Project Blue Book was one of the Air Force's programs.",
    "options": ["True", "False"],
    "answer": "True",
    "explanation": "Đoạn văn nêu rõ: 'Project Blue Book was the Air Force's program for investigating UFOs.' (Dự án Sách Xanh là chương trình của Không quân để điều tra UFO)."
  },
  {
    "group": 2,
    "question": "The Air Force concluded that UFOs were not a threat to the US.",
    "options": ["True", "False"],
    "answer": "True",
    "explanation": "Câu cuối cùng của đoạn văn khẳng định: 'The Air Force concluded that UFOs were no threat.' (Không quân kết luận rằng UFO không phải là mối đe dọa)."
  }
];