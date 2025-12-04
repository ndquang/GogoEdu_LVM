let unit = "Unit 11";
let title = "Travelling in the future";
let groups = [
	  "1. Read the passage and choose the best option (A, B, C or D ) to complete each sentence.",	  
	  "2. Read the passage and complete the table.",
	  "3. Read the text and choose the correct answer A, B, C or D to fill each blank.",
	  "4. Read the passage and do the tasks below."
]
let exercises = [
  {
    group: 0,
    question: "As the world's population has grown, and traffic jams have become a ‘nightmare’ in many big cities, scientists are researching and (1)______ new means of transport to solve the problem.",
    options: ["A. developing", "B. combination", "C. convenient", "D. ideas"],
    answer: "A. developing",
    explanation: "Động từ 'developing' (phát triển) đi sau 'researching' (nghiên cứu) để tạo thành một cặp hành động hợp lý trong việc tạo ra các phương tiện mới."
  },
  {    
    question: "Henry Ford was one of the first to think of a (2)______ – a car that can fly – in 1936.",
    options: ["A. hyperloop", "B. bullet trains", "C. flying car", "D. public transport"],
    answer: "C. flying car",
    explanation: "Định nghĩa 'a car that can fly' (một chiếc xe có thể bay) tương ứng chính xác với 'flying car' (ô tô bay)."
  },
  {    
    question: "It is a (3)______ of an airplane and a motorcar.",
    options: ["A. ideas", "B. combination", "C. developing", "D. autopilot function"],
    answer: "B. combination",
    explanation: "Từ 'combination' (sự kết hợp) được dùng để mô tả việc một chiếc xe bay là sự kết hợp giữa máy bay và ô tô."
  },
  {    
    question: "Later, more new (4)______ about cars came about, including cars that have an autopilot function or are driverless.",
    options: ["A. ideas", "B. bullet trains", "C. hyperloop", "D. public transport"],
    answer: "A. ideas",
    explanation: "Cụm từ 'new ideas' (những ý tưởng mới) phù hợp với ngữ cảnh về sự ra đời của các loại xe cải tiến."
  },
  {  
    question: "Scientists have also worked to develop cars that have an (5)______ or are driverless.",
    options: ["A. flying car", "B. convenient", "C. autopilot function", "D. combination"],
    answer: "C. autopilot function",
    explanation: "'Autopilot function' (chức năng tự lái) là một tính năng liên quan trực tiếp đến xe không người lái (driverless)."
  },
  {    
    question: "Scientists have also worked to develop new means of (6)______, and skyTrans is one of their inventions.",
    options: ["A. ideas", "B. public transport", "C. flying car", "D. bullet trains"],
    answer: "B. public transport",
    explanation: "SkyTrans là một dạng hệ thống giao thông công cộng, do đó 'public transport' (giao thông công cộng) là câu trả lời đúng."
  },
  {    
    question: "Scientists have also invented (7)______, which are not much different from traditional trains, but are much faster, safer, and more convenient.",
    options: ["A. hyperloop", "B. flying car", "C. bullet trains", "D. ideas"],
    answer: "C. bullet trains",
    explanation: "Mô tả về một loại tàu nhanh hơn tàu truyền thống phù hợp nhất với 'bullet trains' (tàu cao tốc)."
  },
  {    
    question: "They are much faster, safer, and more (8)______.",
    options: ["A. developing", "B. convenient", "C. combination", "D. ideas"],
    answer: "B. convenient",
    explanation: "Tính từ 'convenient' (tiện lợi) là một đặc điểm tích cực, phù hợp để mô tả các loại tàu cải tiến cùng với 'faster' (nhanh hơn) và 'safer' (an toàn hơn)."
  },
  {
    group: 0,
    question: "They are also working on a (9)______ system, which allows people to travel from one country to another in minutes.",
    options: ["A. public transport", "B. bullet trains", "C. hyperloop", "D. flying car"],
    answer: "C. hyperloop",
    explanation: "'Hyperloop' là một hệ thống giao thông tốc độ cực cao trong tương lai, phù hợp với mô tả 'travel from one country to another in minutes' (di chuyển từ nước này sang nước khác trong vài phút)."
  },
  {
    group: 1,
    question: "In the near future, there (1)______ enough land for the world’s increasing population.",
    options: ["A. will be", "B. won't be", "C. is", "D. was"],
    answer: "B. won't be",
    explanation: "The simple future tense is used for predictions. Based on the context of an 'increasing population,' the negative form 'won't be' is the most logical prediction."
  },
  {   
    question: "Though skyscrapers are getting taller, there (2)______ enough land to house everyone.",
    options: ["A. will be", "B. isn't", "C. wasn't", "D. won't be"],
    answer: "D. won't be",
    explanation: "This continues the prediction from the first sentence. The future negative 'won't be' correctly expresses this idea."
  },
  {   
    question: "Air pollution (3)______ worse and worse.",
    options: ["A. gets", "B. will get", "C. got", "D. is getting"],
    answer: "B. will get",
    explanation: "The simple future 'will get' is used to make a prediction about a future trend."
  },
  {   
    question: "Scientists (4)______ for new opportunities to live on other planets.",
    options: ["A. will look", "B. look", "C. looked", "D. are looking"],
    answer: "A. will look",
    explanation: "This is a prediction about a future action scientists will take in response to the problems mentioned."
  },
  {   
    question: "Mars (5)______ a new place for humans to live.",
    options: ["A. becomes", "B. became", "C. is becoming", "D. will become"],
    answer: "D. will become",
    explanation: "The simple future 'will become' is used for a long-term prediction about Mars."
  },
  {   
    question: "Scientists someday (6)______ a way for us to go to Mars and return quickly.",
    options: ["A. invent", "B. invented", "C. will invent", "D. are inventing"],
    answer: "C. will invent",
    explanation: "The word 'someday' indicates a future time, so the simple future 'will invent' is correct for this prediction."
  },
  {   
    question: "Scientists (7)______ trees on Mars to produce more oxygen.",
    options: ["A. plant", "B. planted", "C. will plant", "D. are planting"],
    answer: "C. will plant",
    explanation: "This is a prediction of a specific action that scientists will perform in the future."
  },
  {   
    question: "Additionally, they (8)______ up hotels for holidays on Mars...",
    options: ["A. build", "B. will build", "C. built", "D. are building"],
    answer: "B. will build",
    explanation: "This is another prediction about a future action, requiring the simple future tense 'will build'."
  },
  {    
    question: "...because there (9)______ many people who want to go there.",
    options: ["A. will be", "B. won't be", "C. are", "D. were"],
    answer: "A. will be",
    explanation: "This clause gives the reason for building hotels, based on a prediction that there 'will be' many interested people in the future."
  },
  {
    group: 1,
    question: "I think it (10)______ a long time for this dream to come true.",
    options: ["A. takes", "B. took", "C. is taking", "D. will take"],
    answer: "D. will take",
    explanation: "The phrase 'I think' is often followed by a prediction using the simple future tense, 'will take'."
  },
   {
    group: 2,
    question: "A hoverboard can bring (1)______ a lot of benefits.",
    options: ["A. owners", "B. riders", "C. players"],
    answer: "B. riders",
    explanation: "Từ 'riders' (người lái) là hợp lý nhất, vì ván trượt mang lại lợi ích cho người sử dụng nó."
  },
  {    
    question: "It is self-balancing so it is safe for (2)______.",
    options: ["A. beginners", "B. professionals", "C. adults"],
    answer: "A. beginners",
    explanation: "Tính năng tự cân bằng làm cho nó an toàn, đặc biệt đối với 'beginners' (người mới bắt đầu)."
  },
  {   
    question: "It is also fun because it connects to a music speaker with a phone, so riders can enjoy music while (3)______ on the road.",
    options: ["A. hovering", "B. running", "C. driving"],
    answer: "A. hovering",
    explanation: "'Hovering' (lướt đi) là động từ mô tả chính xác nhất chuyển động của một chiếc ván trượt."
  },
  {   
    question: "It can also give riders a smooth (4)______.",
    options: ["A. drive", "B. ride", "C. fly"],
    answer: "B. ride",
    explanation: "Danh từ 'ride' (chuyến đi) phù hợp nhất với tính từ 'smooth' (êm ái) để mô tả trải nghiệm khi sử dụng ván trượt."
  },
  {   
    question: "Its run time is 30 minutes but you may have to wait 2 – 3 hours for the battery to (5)______.",
    options: ["A. change", "B. replace", "C. charge"],
    answer: "C. charge",
    explanation: "Khi hết pin, chúng ta cần 'charge' (sạc) nó. 'Change' (thay đổi) hoặc 'replace' (thay thế) không phù hợp trong ngữ cảnh này."
  },
  {   
   group: 2,
    question: "Because hoverboards are safe, easy to use, and inexpensive, they will (6)______ around for long for the children to enjoy.",
    options: ["A. be", "B. live", "C. work"],
    answer: "A. be",
    explanation: "Cụm từ 'will be around' có nghĩa là 'sẽ tồn tại' hoặc 'sẽ phổ biến', phù hợp với dự đoán về tương lai của ván trượt."
  },
   {
    group: 3,
    question: "True or False: The writer’s father is working at a car company.",
    options: ["A. True", "B. False"],
    answer: "B. False",
    explanation: "The passage states, 'My uncle is working at a car company,' not the writer's father."
  },
  {    
    question: "True or False: The car runs on solar energy.",
    options: ["A. True", "B. False"],
    answer: "A. True",
    explanation: "The text mentions the car has 'solar panels' and is 'solar-powered.'"
  },
  {   
    question: "True or False: You can use it in flight mode when roads are crowded.",
    options: ["A. True", "B. False"],
    answer: "A. True",
    explanation: "According to the passage, 'in heavy traffic, you can use the flight mode to avoid traffic.'"
  },
  {   
    question: "True or False: You have to be a very careful and skillful driver to drive this car.",
    options: ["A. True", "B. False"],
    answer: "B. False",
    explanation: "The text says the car has an 'autopilot function, so a driver is not needed.'"
  },
  {
    group: 3,
    question: "True or False: It will be more comfortable than a traditional car.",
    options: ["A. True", "B. False"],
    answer: "A. True",
    explanation: "The passage explicitly states, 'It will also be more comfortable than a traditional car.'"
  },
   {
    group: 4,
    question: "Find the word in the passage that means 'decrease'.",
    options: ["A. provide", "B. reduce", "C. travel", "D. build"],
    answer: "B. reduce",
    explanation: "Đoạn văn có câu: 'This system will help the city reduce traffic congestion.'"
  },
  {   
    question: "Find the word in the passage that means 'more eco-friendly'.",
    options: ["A. greener", "B. faster", "C. comfortable", "D. inexpensive"],
    answer: "A. greener",
    explanation: "Đoạn văn có câu: '...skyTran will provide a greener, less expensive, faster, and more comfortable mode of travel...'"
  },
  {   
    question: "Find the word in the passage that means 'riders'.",
    options: ["A. people", "B. countries", "C. ones", "D. passengers"],
    answer: "D. passengers",
    explanation: "Đoạn văn có câu: 'Passengers can get a pod by using a smartphone app.'"
  },
  {   
    question: "Find the word in the passage that means 'move smoothly'.",
    options: ["A. run", "B. travel", "C. glide", "D. get"],
    answer: "C. glide",
    explanation: "Đoạn văn có câu: 'The pods glide along the rails above to their destination.'"
  },
  {    
    question: "Find the word in the passage that means 'be used instead of something'.",
    options: ["A. help", "B. replace", "C. build", "D. provide"],
    answer: "B. replace",
    explanation: "Đoạn văn có câu: '...a perfect means of transport to replace traditional ones.'"
  },
	 {    
    question: "What is the best title of the passage?",
    options: [
        "A. Future Modes of Travel", 
        "B. SkyTran in the USA and Asian Countries", 
        "C. SkyTran - a Future Mode of Travel"
    ],
    answer: "C. SkyTran - a Future Mode of Travel",
    explanation: "Tiêu đề này là phù hợp nhất vì nó xác định chính xác chủ đề chính của bài đọc (SkyTran) và bối cảnh của nó (một phương thức di chuyển trong tương lai)."
  },
   {      
    question: "One benefit of skyTran is that ______.",
    options: [
      "A. it is more expensive than a taxi trip",
      "B. it makes cities more modern",
      "C. it helps avoid traffic jams"
    ],
    answer: "C. it helps avoid traffic jams",
    explanation: "The passage states that the skyTran system 'will help the city reduce traffic congestion,' which is another way of saying it helps avoid traffic jams."
  },
  {   
    question: "It will be more comfortable and faster than ______.",
    options: [
        "A. a train", 
        "B. a bus", 
        "C. a truck"
    ],
    answer: "B. a bus",
    explanation: "The text explicitly mentions that skyTran will be a 'faster, and more comfortable mode of travel than cars and buses.'"
  },
  {   
    question: "To get a pod, people can ______.",
    options: [
      "A. call it the same way as they call a taxi",
      "B. use an app on their smartphones",
      "C. go to a pod station and wait"
    ],
    answer: "B. use an app on their smartphones",
    explanation: "According to the passage, 'Passengers can get a pod by using a smartphone app.'"
  },
  {   
    question: "The pod glides fast, and the trip is ______.",
    options: [
        "A. smooth", 
        "B. unsafe", 
        "C. tiring"
    ],
    answer: "A. smooth",
    explanation: "The text says that 'passengers will still have a smooth ride' even though the pods travel at high speeds."
  },
  {
    group: 4,
    question: "The system is ______.",
    options: [
        "A. underground", 
        "B. on the ground", 
        "C. above the ground"
    ],
    answer: "C. above the ground",
    explanation: "The passage specifies that 'The system is about 70 m above the ground.'"
  }
];