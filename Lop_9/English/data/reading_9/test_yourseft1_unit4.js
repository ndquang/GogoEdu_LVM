let unit = "3";
let title = "Healthy Living for Teens";
let groups = [
	  "I. Read the following passage and choose the letter A, B, C, or D to indicate the correct answer to each of the questions.",
	  "II. Read the following passage and choose the letter A, B, C, or D to indicate the correct word that best fits each of the numbered blanks",
	  "III. Choose the correct answer A, B, C or D to fill in each blank in the following passage.",
	  "IV. Read the passage and choose the best answer A, B, C, or D to each of the questions."
]
let exercises = [
   {
	    "group": 0,
        "question": "What was designed to blend in with the nearby Tower of London?",
        "options": ["A. London Bridge", "B. Bank of England", "C. Tower Bridge", "D. Big Ben"],
        "answer": "C. Tower Bridge",
        "explanation": "Đoạn văn viết: 'However, the most unique bridge is Tower Bridge, which was was designed to blend in with the nearby Tower of London.'"
    },
    {
        "question": "Which area of London is known for its many important financial institutions?",
        "options": ["A. Docklands", "B. West End", "C. The City", "D. Covent Garden"],
        "answer": "C. The City",
        "explanation": "Đoạn văn viết: '...many significant financial organisations such as the Bank of England and the London Stock Exchange. They are located in the area called the City.'"
    },
    {
        "question": "What is the main reason why many people who work in London commute from the suburbs?",
        "options": ["A. Better housing options in the city centre.", "B. Better schools for their children in the suburbs.", "C. Cheaper cost of living in the city centre.", "D. Expensive property prices near the city centre."],
        "answer": "D. Expensive property prices near the city centre.",
        "explanation": "Đoạn văn viết: 'Due to the high cost of housing near the city centre, many people working in London prefer to live in the suburbs and commute to work by train or bus.'"
    },
    {
        "question": "What does the pronoun \"it\" in paragraph 3 refer to?",
        "options": ["A. the globe", "B. the Tube", "C. London", "D. the theatre"],
        "answer": "C. London",
        "explanation": "Trong câu 'Although some people from other parts of Britain view it as very noisy and dirty...', 'it' thay thế cho danh từ chính đang được nhắc đến là London."
    },
    {
		"group": 0,
        "question": "Which of the following is NOT true according to the passage?",
        "options": ["A. London is a thriving commercial and cultural centre.", "B. The Bank of England and the London Stock Exchange are in the West End.", "C. The West End is home to many theatres, cinemas, museums, and shops.", "D. Young people are attracted to the pubs and comedy clubs of Covent Garden."],
        "answer": "B. The Bank of England and the London Stock Exchange are in the West End.",
        "explanation": "Đoạn văn chỉ ra rằng The Bank of England và London Stock Exchange nằm ở 'the City', không phải West End, nên câu này là SAI (NOT TRUE)."
    },
	{
		"group": 1,
        "question": "I live in a small town of Millbrook in the rolling hills of upstate New York. It is a (26) __________ community of just over 1,500 residents.",
        "options": ["A. liveable", "B. living", "C. live", "D. life"],
        "answer": "A. liveable",
        "explanation": "Cần một tính từ (adjective) để bổ nghĩa cho danh từ 'community'. 'Liveable' có nghĩa là 'đáng sống', phù hợp với ngữ cảnh mô tả một cộng đồng tốt."
    },
    {
        "question": "Despite its small size, Millbrook has a rich history and vibrant cultural scene (27) __________ numerous galleries, restaurants, and boutiques on its charming Main street.",
        "options": ["A. For", "B. without", "C. with", "D. of"],
        "answer": "C. with",
        "explanation": "Cần giới từ (preposition) để giới thiệu các yếu tố đi kèm ('numerous galleries...') mà cảnh văn hóa phong phú có được. 'With' (với) là lựa chọn chính xác."
    },
    {
        "question": "It is home to a diverse range of residents, from young families to retirees, and boasts a strong sense of community (28) __________. Every year, residents come together...",
        "options": ["A. mood", "B. attitude", "C. soul", "D. spirit"],
        "answer": "D. spirit",
        "explanation": "Cụm từ cố định và phổ biến là 'community spirit' (tinh thần cộng đồng) để chỉ sự đoàn kết và nhiệt huyết của cộng đồng."
    },
    {
        "question": "Every year, residents come together for events like the Millbrook Farmers Market and the Millbrook Literary Festival, which (29) __________ the town's agricultural heritage and literary tradition.",
        "options": ["A. welcome", "B. celebrate", "C. mention", "D. discuss"],
        "answer": "B. celebrate",
        "explanation": "Các sự kiện, lễ hội được tổ chức nhằm 'celebrate' (tôn vinh/kỷ niệm) di sản và truyền thống của thị trấn. 'Welcome' (chào đón), 'mention' (đề cập), và 'discuss' (thảo luận) không phù hợp về mặt ngữ nghĩa."
    },
    {
		"group": 1,
        "question": "Millbrook is well-connected to nearby cities like Poughkeepsie and New York City, making it an attractive place to live for those seeking (30) __________ peaceful retreat from urban life.",
        "options": ["A. a", "B. the", "C. an", "D. \u2717"],
        "answer": "A. a",
        "explanation": "Cần một mạo từ (article) đứng trước danh từ đếm được số ít ('retreat') chưa xác định. Cụm từ là 'a peaceful retreat' (một nơi nghỉ dưỡng yên bình)."
    },
	  {
		  "group": 2,
        "question": "At that time, most people lived (1) __________ farms.",
        "options": ["A. in", "B. on", "C. for", "D. with"],
        "answer": "B. on",
        "explanation": "Cụm từ đúng là 'live on a farm' (sống ở nông trại), sử dụng giới từ 'on'."
    },
    {
        "question": "Most of the one-room schoolhouses only (2) __________ about fifteen to twenty children.",
        "options": ["A. had", "B. made", "C. founded", "D. promoted"],
        "answer": "A. had",
        "explanation": "Động từ 'had' (có) là phù hợp nhất để chỉ số lượng học sinh trong trường: 'Most of the schoolhouses only had... children'."
    },
    {
        "question": "The teacher also (3) __________ all subjects.",
        "options": ["A. gave", "B. observed", "C. taught", "D. educated"],
        "answer": "C. taught",
        "explanation": "Động từ 'taught' (dạy) là động từ chính xác để mô tả công việc của giáo viên đối với các môn học ('taught all subjects')."
    },
    {
        "question": "Reciting means that they said out loud (4) __________ they learned.",
        "options": ["A. which", "B. how", "C. that", "D. what"],
        "answer": "D. what",
        "explanation": "Cần một đại từ quan hệ thay thế cho sự vật, sự việc và hoạt động như một tân ngữ của động từ 'learned'. 'What' (những gì) là đại từ quan hệ không xác định phù hợp: 'said out loud what they learned'."
    },
    {
		"group": 2,
        "question": "They had to memorise famous (5) __________ and important facts, too.",
        "options": ["A. speeches", "B. words", "C. languages", "D. questions"],
        "answer": "A. speeches",
        "explanation": "Văn cảnh đang nói về việc ghi nhớ các nội dung học thuật, kết hợp với 'memorise poems' và 'important facts', thì 'famous speeches' (các bài diễn văn nổi tiếng) là danh từ phù hợp nhất."
    },
	  {
		  	"group": 3,
        "question": "Which of the following dominates the central area of Edinburgh?",
        "options": ["A. The Royal Mile", "B. Edinburgh Castle", "C. Holyroodhouse", "D. Princess street"],
        "answer": "A. The Royal Mile",
        "explanation": "Đoạn văn viết: 'The medieval Royal Mile... dominates the city's central area.' (Royal Mile chiếm ưu thế ở khu vực trung tâm thành phố.)"
    },
    {
        "question": "The word \"splendid\" in the passage mostly means __________.",
        "options": ["A. communal", "B. basic", "C. magnificent", "D. occupied"],
        "answer": "C. magnificent",
        "explanation": "Từ 'splendid' có nghĩa là lộng lẫy, huy hoàng, tương đương với 'magnificent'."
    },
    {
        "question": "The word \"This\" in the passage refers to __________.",
        "options": ["A. Princess street", "B. Edinburgh", "C. Edinburgh Castle", "D. Princess street Gardens"],
        "answer": "D. Princess street Gardens",
        "explanation": "Câu trước đó nhắc đến Princess Street Gardens, và câu tiếp theo là: 'This is one of the most delightful gardens in Britain.' (Đây là một trong những khu vườn đẹp nhất...)."
    },
    {
        "question": "Which of the following is NOT true, according to the passage?",
        "options": ["A. Edinburgh belonged to the past.", "B. Edinburgh is Scotland’s royal city.", "C. Holyroodhouse is at one end of Royal Mile.", "D. Arts festivals are held in August in Edinburgh."],
        "answer": "A. Edinburgh belonged to the past.",
        "explanation": "Thành phố được mô tả là 'an exciting mix of something traditional and something modern' (một sự pha trộn thú vị giữa truyền thống và hiện đại), không chỉ 'thuộc về quá khứ' (belonged to the past)."
    },
    {
		"group": 3,
        "question": "Where can you find this passage?",
        "options": ["A. In a local guide book.", "B. In a travel journal.", "C. In a student's diary.", "D. In a science report."],
        "answer": "A. In a local guide book.",
        "explanation": "Nội dung bài viết cung cấp thông tin du lịch, địa điểm tham quan nổi bật và ý nghĩa lịch sử của một thành phố, phù hợp nhất với thể loại sách hướng dẫn du lịch hoặc cẩm nang địa phương."
    }
];