let unit = "12";
let title = "Career Choices";
let groups = [
	  "Pronunciation",
	  "Choose the correct answers A, B, C, or D to complete each of the sentences",      
	  "Choose the option which is CLOSEST in meaning to the [-] word in each sentence.",
	  "Choose the option which is OPPOSITE in meaning to the [-] word in each sentence.",
	  "Speaking.",
	  "Writing",
	  "Choose the best option A, B, C, or D which has the same meaning as the original sentence."
]
let exercises = [
    {
    "group": groups[0],
    "question": "Choose the word whose stressed pattern is different from that of the other words.",
    "options": ["A. career", "B. passion", "C. training", "D. garment"],
    "answer": "A. career",
    "explanation": "Các từ 'passion' (PAS-sion), 'training' (TRAI-ning), 'garment' (GAR-ment) có trọng âm rơi vào âm tiết thứ nhất. Riêng từ 'career' (ca-REER) có trọng âm rơi vào âm tiết thứ hai."
  },
  {    
    "question": "Choose the word whose stressed pattern is different from that of the other words.",
    "options": ["A. mechanic", "B. bartender", "C. architect", "D. hairdresser"],
    "answer": "A. mechanic",
    "explanation": "Các từ 'bartender' (BAR-ten-der), 'architect' (AR-chi-tect), 'hairdresser' (HAIR-dress-er) có trọng âm rơi vào âm tiết thứ nhất. Riêng từ 'mechanic' (me-CHA-nic) có trọng âm rơi vào âm tiết thứ hai."
  },
  {
    "question": "Choose the word whose stressed pattern is different from that of the other words.",
    "options": ["A. artist", "B. worker", "C. cashier", "D. teacher"],
    "answer": "C. cashier",
    "explanation": "Các từ 'artist' (AR-tist), 'worker' (WOR-ker), 'teacher' (TEA-cher) có trọng âm rơi vào âm tiết thứ nhất. Riêng từ 'cashier' (ca-SHIER) có trọng âm rơi vào âm tiết thứ hai."
  },
  {    
    "question": "Choose the word whose stressed pattern is different from that of the other words.",
    "options": ["A. perform", "B. follow", "C. unique", "D. receive"],
    "answer": "B. follow",
    "explanation": "Các từ 'perform' (per-FORM), 'unique' (u-NIQUE), 'receive' (re-CEIVE) có trọng âm rơi vào âm tiết thứ hai. Riêng từ 'follow' (FOL-low) có trọng âm rơi vào âm tiết thứ nhất."
  },
  {
    "group": groups[0],
    "question": "Choose the word whose stressed pattern is different from that of the other words.",
    "options": ["A. particular", "B. vocational", "C. repetitive", "D. academic"],
    "answer": "D. academic",
    "explanation": "Các từ 'particular' (par-TI-cu-lar), 'vocational' (vo-CA-tion-al), 'repetitive' (re-PE-ti-tive) có trọng âm rơi vào âm tiết thứ hai. Riêng từ 'academic' (a-ca-DE-mic) có trọng âm rơi vào âm tiết thứ ba."
  },
  {
    "group": groups[1],
    "question": "Ms. Hoa is a skillful __________ who makes beautiful and unique dresses.",
    "options": ["A. hairdresser", "B. mechanic", "C. tailor", "D. assembly worker"],
    "answer": "C. tailor",
    "explanation": "'Tailor' (thợ may) là từ phù hợp nhất để chỉ người có kỹ năng may quần áo."
  },
  {    
    "question": "He didn't think much about what __________ he would do when he grew up.",
    "options": ["A. job", "B. career", "C. task", "D. duty"],
    "answer": "B. career",
    "explanation": "'Career' (sự nghiệp) là từ phù hợp nhất để chỉ một công việc hoặc nghề nghiệp lâu dài mà một người sẽ theo đuổi."
  },
  {   
    "question": "A software engineer is a __________ job. You may need to work through the night occasionally.",
    "options": ["A. repetitive", "B. demanding", "C. basic", "D. regular"],
    "answer": "B. demanding",
    "explanation": "'Demanding' (đòi hỏi cao) là tính từ phù hợp để miêu tả một công việc cần nhiều nỗ lực và đôi khi phải làm thêm giờ."
  },
  {    
    "question": "You want to become a surgeon? Are you __________ enough?",
    "options": ["A. fashionable", "B. calm", "C. stressful", "D. well-paid"],
    "answer": "B. calm",
    "explanation": "'Calm' (bình tĩnh) là một phẩm chất cần thiết cho một bác sĩ phẫu thuật để xử lý các tình huống căng thẳng."
  },
  {    
    "question": "She had a successful __________ in education and retired at the age of 58.",
    "options": ["A. employment", "B. occupation", "C. work", "D. career"],
    "answer": "D. career",
    "explanation": "'Career' (sự nghiệp) là từ phù hợp nhất để chỉ con đường công việc lâu dài và thành công."
  },
  {    
    "question": "James can do basic maths and use a cash register, so he can work as a __________.",
    "options": ["A. store cashier", "B. maths teacher", "C. garment worker", "D. software engineer"],
    "answer": "A. store cashier",
    "explanation": "'Store cashier' (nhân viên thu ngân cửa hàng) là nghề nghiệp phù hợp với các kỹ năng được liệt kê."
  },
  {    
    "question": "He received __________ training in healthcare and earned a university degree in it.",
    "options": ["A. informal", "B. basic", "C. formal", "D. lifelong"],
    "answer": "C. formal",
    "explanation": "'Formal training' (đào tạo chính quy) là thuật ngữ phù hợp nhất với việc học tập để lấy bằng đại học."
  },
  { 
	"group": groups[1],
    "question": "Teaching is a __________ job, especially when you see your students grow up and become succeed.",
    "options": ["A. stressful", "B. boring", "C. well-paid", "D. rewarding"],
    "answer": "D. rewarding",
    "explanation": "'Rewarding' (đáng làm, bổ ích) là tính từ miêu tả một công việc mang lại sự hài lòng và cảm giác được đền đáp xứng đáng."
  },
  {
    "group": groups[2],
    "question": "Mr. Toan earns a living by selling dairy products.",
    "options": ["A. lives happily", "B. gains money", "C. earns his life", "D. makes money"],
    "answer": "D. makes money",
    "explanation": "Cụm từ 'earns a living' (kiếm sống) có nghĩa là kiếm tiền để trang trải cuộc sống. 'Makes money' (kiếm tiền) là từ gần nghĩa nhất."
  },
  {    
    "question": "A nail artist needs both hands-on training and knowledge of nail care and products.",
    "options": ["A. theoretical", "B. abstract", "C. practical", "D. understandable"],
    "answer": "C. practical",
    "explanation": "Từ 'hands-on' (thực hành) có nghĩa là học hỏi thông qua việc làm thực tế. Từ đồng nghĩa chính xác nhất là 'practical' (thực tế, thực hành)."
  },
  {
    "group": groups[2],
    "question": "Career orientation programmes help students understand their career choices and the job markets.",
    "options": ["A. guidance", "B. ladder", "C. loss", "D. change"],
    "answer": "A. guidance",
    "explanation": "'Orientation' (định hướng) có nghĩa là quá trình giúp ai đó tìm ra hướng đi. 'Guidance' (sự hướng dẫn) là từ đồng nghĩa chính xác nhất trong cụm từ 'định hướng nghề nghiệp'."
  },
   {
    "group": groups[3],
    "question": "He hates jobs which involve [repetitive] tasks. He likes changes and new things.",
    "options": ["A. same", "B. creative", "C. similar", "D. monotonous"],
    "answer": "D. monotonous",
    "explanation": "Từ 'repetitive' (lặp đi lặp lại) có nghĩa là không có sự thay đổi. 'Monotonous' (đơn điệu, nhàm chán) là từ gần nghĩa nhất."
  },
  {
    "group": groups[3],
    "question": "Mr. Lam is a [decisive] leader. He makes decisions quickly and reasonably.",
    "options": ["A. determined", "B. strong-minded", "C. firm", "D. undecided"],
    "answer": "A. determined",
    "explanation": "Từ 'decisive' (quyết đoán) có nghĩa là có khả năng đưa ra quyết định nhanh chóng và dứt khoát. 'Determined' (kiên quyết) là từ gần nghĩa nhất."
  },
   {
    "group": groups[1],
    "question": "Helen got the job __________ she thought she couldn't get it.",
    "options": ["A. because", "B. and", "C. though", "D. since"],
    "answer": "C. though",
    "explanation": "'Though' (mặc dù) là liên từ phù hợp nhất để nối hai mệnh đề có ý nghĩa đối lập."
  },
  {    
    "question": "She got a pay rise __________ she worked very hard.",
    "options": ["A. so", "B. since", "C. although", "D. however"],
    "answer": "B. since",
    "explanation": "'Since' (vì) là liên từ chỉ nguyên nhân, phù hợp để diễn tả lý do cô ấy được tăng lương."
  },
  {    
    "question": "The road was __________ congested that I arrived at the airport late.",
    "options": ["A. such", "B. too", "C. very", "D. so"],
    "answer": "D. so",
    "explanation": "Cấu trúc 'so + tính từ + that...' được dùng để diễn tả nguyên nhân-kết quả. 'Congested' là một tính từ."
  },
  {    
    "question": "__________ the library was too noisy, she couldn't concentrate on her lesson.",
    "options": ["A. Since", "B. So", "C. Although", "D. But"],
    "answer": "A. Since",
    "explanation": "'Since' (vì) là liên từ chỉ nguyên nhân, phù hợp để diễn tả lý do cô ấy không thể tập trung."
  },
  {
    "question": "Liz felt lucky __________ her aunt gave her invaluable advice on career choice.",
    "options": ["A. although", "B. but", "C. so", "D. because"],
    "answer": "D. because",
    "explanation": "'Because' (bởi vì) là liên từ chỉ nguyên nhân, giải thích lý do Liz cảm thấy may mắn."
  },
  {
    "question": "It was __________ a demanding job that Tim couldn't manage to do it.",
    "options": ["A. such", "B. very", "C. so", "D. too"],
    "answer": "A. such",
    "explanation": "Cấu trúc 'such + a/an + tính từ + danh từ + that...' được dùng để diễn tả nguyên nhân-kết quả. 'A demanding job' là một cụm danh từ."
  },
  {
    "question": "Minh couldn't sleep __________ he was so anxious about his job interview the next day.",
    "options": ["A. although", "B. so", "C. because", "D. however"],
    "answer": "C. because",
    "explanation": "'Because' (bởi vì) là liên từ chỉ nguyên nhân, giải thích lý do Minh không thể ngủ được."
  },
  {
    "group": groups[1],
    "question": "The tailor was __________ rude that almost none of the customers like her.",
    "options": ["A. little", "B. enough", "C. so", "D. such"],
    "answer": "C. so",
    "explanation": "Cấu trúc 'so + tính từ + that...' được dùng để diễn tả nguyên nhân-kết quả. 'Rude' là một tính từ."
  },
    {
   "group": groups[4],
    "question": "Kim: Here you are. The book is a bit thick but it's interesting.\nMinh: __________",
    "options": ["A. I don't think so. It's a great film.", "B. Yeah. Mr Kien wants a thick book.", "C. Thanks. Hopefully, I can finish it.", "D. I agree. A thick book is boring."],
    "answer": "C. Thanks. Hopefully, I can finish it.",
    "explanation": "Câu trả lời này thể hiện sự cảm ơn vì món quà và đồng thời cho thấy Minh đã nghe lời nhận xét về cuốn sách."
  },
  {    
    "question": "Lien: Will you join the field trip next week?\nElena: __________",
    "options": ["A. I hope she will.", "B. Of course, why not?", "C. Thanks for your help.", "D. Let's organise a field trip."],
    "answer": "B. Of course, why not?",
    "explanation": "'Of course, why not?' là một cách trả lời tích cực và nhiệt tình để đồng ý với một lời đề nghị."
  },
  {   
    "question": "Mr. Lam: I have to leave now.\nRon: __________",
    "options": ["A. Will you leave soon?", "B. My pleasure.", "C. Thank you for leaving.", "D. Hope to see you again."],
    "answer": "D. Hope to see you again.",
    "explanation": "'Hope to see you again.' là một cách nói lịch sự và thân thiện để chào tạm biệt."
  },
  {    
    "question": "Sarah: I hope I'll pass the interview and be a club member.\nChloe: __________",
    "options": ["A. You will. I'm sure of it.", "B. Sure, I'll go to the club.", "C. Have you tried interviewing her?", "D. Hopefully, the club members can join."],
    "answer": "A. You will. I'm sure of it.",
    "explanation": "Đây là câu trả lời mang tính động viên và thể hiện sự tin tưởng vào khả năng của Sarah."
  },
  {
    "group": groups[4],
    "question": "Peter: __________\nNick: I hope so, too.",
    "options": ["A. All we can do now is to wait and hope.", "B. The exam went better than she hoped.", "C. I hope they will extend the registration deadline.", "D. The career orientation session takes place this afternoon."],
    "answer": "C. I hope they will extend the registration deadline.",
    "explanation": "Câu C là một lời bày tỏ mong muốn, rất phù hợp để đáp lại bằng 'I hope so, too' (Tôi cũng hy vọng thế)."
  },
   {
    "group": groups[6],
    "question": "Though I love my job, I don't like wearing the uniform.",
    "options": ["A. I hate wearing the uniform because I love my job.", "B. I love my job because of its uniform.", "C. I love my job, but I don't like wearing the uniform.", "D. The uniform is so ugly that I don't like wearing it."],
    "answer": "C. I love my job, but I don't like wearing the uniform.",
    "explanation": "'Though' và 'but' đều là các liên từ thể hiện sự đối lập, nên câu C có cùng ý nghĩa với câu gốc."
  },
  {    
    "question": "It was such a windy day that they had to cancel their rehearsal.",
    "options": ["A. They had to delay the rehearsal because of a windy day.", "B. The day was such windy that they decided to cut down on their rehearsal.", "C. It was so windy that they cancelled their rehearsal flight without notice.", "D. The wind was so strong that they had to call off their rehearsal."],
    "answer": "D. The wind was so strong that they had to call off their rehearsal.",
    "explanation": "Câu D sử dụng 'so strong that' và 'call off', là các cụm từ đồng nghĩa với 'such a windy day that' và 'cancel'."
  },
  {   
    "question": "He wanted to become a journalist although he was talented in dancing.",
    "options": ["A. He was a talented dancer who was working for a local newspaper.", "B. He danced very well, but he dreamt of becoming a journalist.", "C. He was an excellent journalist who wrote about dancing talents.", "D. He was very good at dancing, so he wanted to be a dancer."],
    "answer": "B. He danced very well, but he dreamt of becoming a journalist.",
    "explanation": "Câu B diễn tả đúng ý của câu gốc, đó là mặc dù có tài năng nhảy múa nhưng anh ấy lại muốn làm nhà báo. 'But' tương đương với 'although'."
  },
  {    
    "question": "There were so many customers at the store that I had to work overtime.",
    "options": ["A. Although there were so many customers at the store, I had to work overtime.", "B. I had to work later than usual because of the large number of customers at the store.", "C. The customers at the store asked me to work overtime.", "D. I came home early because there were not many customers at the store."],
    "answer": "B. I had to work later than usual because of the large number of customers at the store.",
    "explanation": "Câu B diễn tả mối quan hệ nhân-quả một cách chính xác. 'Because of' giải thích lý do, và các cụm từ còn lại đồng nghĩa với câu gốc."
  },
  {
    "group": groups[6],
    "question": "Tom will be a good surgeon because he is calm and decisive.",
    "options": ["A. Tom will be a good surgeon thanks to his calmness and decisiveness.", "B. Tom is too calm to become a good surgeon.", "C. Although Tom is calm and decisive, he can't be a good surgeon.", "D. Tom is calm and decisive since he is a good surgeon."],
    "answer": "A. Tom will be a good surgeon thanks to his calmness and decisiveness.",
    "explanation": "'Thanks to' và 'because' đều là các cụm từ thể hiện mối quan hệ nhân-quả một cách chính xác."
  }
];