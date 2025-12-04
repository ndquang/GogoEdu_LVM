let unit = "5";
let title = "Our Experience";
let groups = [
	  "Pronunciation",
      "Choose the best answers to complete the sentences.",
	  "Choose the option which is CLOSEST in meaning to the [-] word in each sentence.",	  
	  "Choose the correct answers A, B, C, or D to complete each of the sentences",	  
	  "Speaking."
]
let exercises = [
 {
    "group": groups[0],
    "question": "Choose the word with a different stress pattern.",
    "options": ["A. joyful", "B. absent", "C. ideal", "D. common"],
    "answer": "C. ideal",
    "explanation": "Các từ 'joyful' (JOY-ful), 'absent' (AB-sent), 'common' (COM-mon) có trọng âm rơi vào âm tiết thứ nhất. Riêng từ 'ideal' (i-DEAL) có trọng âm rơi vào âm tiết thứ hai."
  },
  {
    "question": "Choose the word with a different stress pattern.",
    "options": ["A. alone", "B. foreign", "C. basic", "D. awesome"],
    "answer": "A. alone",
    "explanation": "Các từ 'foreign' (FOR-eign), 'basic' (BA-sic), 'awesome' (AW-some) có trọng âm rơi vào âm tiết thứ nhất. Riêng từ 'alone' (a-LONE) có trọng âm rơi vào âm tiết thứ hai."
  },
  {   
    "question": "Choose the word with a different stress pattern.",
    "options": ["A. habit", "B. machine", "C. mountain", "D. forum"],
    "answer": "B. machine",
    "explanation": "Các từ 'habit' (HA-bit), 'mountain' (MOUN-tain), 'forum' (FO-rum) có trọng âm rơi vào âm tiết thứ nhất. Riêng từ 'machine' (ma-CHINE) có trọng âm rơi vào âm tiết thứ hai."
  },
  {   
    "question": "Choose the word with a different stress pattern.",
    "options": ["A. exciting", "B. amazing", "C. thrilling", "D. unpleasant"],
    "answer": "C. thrilling",
    "explanation": "Các từ 'exciting' (ex-CIT-ing), 'amazing' (a-MAZ-ing), 'unpleasant' (un-PLEAS-ant) có trọng âm rơi vào âm tiết thứ hai. Riêng từ 'thrilling' (THRILL-ing) có trọng âm rơi vào âm tiết thứ nhất."
  },
  {
    "group": groups[0],
    "question": "Choose the word with a different stress pattern.",
    "options": ["A. parachute", "B. interest", "C. following", "D. exhausted"],
    "answer": "D. exhausted",
    "explanation": "Các từ 'parachute' (PAR-a-chute), 'interest' (IN-ter-est), 'following' (FOL-low-ing) có trọng âm rơi vào âm tiết thứ nhất. Riêng từ 'exhausted' (ex-HAUST-ed) có trọng âm rơi vào âm tiết thứ hai."
  },
    {
    "group": groups[1],
    "question": "It is __________ to mistakenly take someone else's phone.",
    "options": ["A. amazing", "B. helpless", "C. brilliant", "D. embarrassing"],
    "answer": "D. embarrassing",
    "explanation": "Việc vô tình cầm nhầm điện thoại của người khác là một tình huống gây xấu hổ, vì vậy từ phù hợp nhất là 'embarrassing' (đáng xấu hổ)."
  },
  {
    "question": "It is very __________ to have to deal with a rude and disobedient person.",
    "options": ["A. excited", "B. unpleasant", "C. thrilled", "D. enjoyable"],
    "answer": "B. unpleasant",
    "explanation": "Việc phải đối phó với một người thô lỗ và không vâng lời là một điều 'unpleasant' (khó chịu). Các từ khác không phù hợp về mặt ý nghĩa."
  },
  {
    "question": "Riding a bicycle down a slope is so __________. It's dangerous but fun.",
    "options": ["A. unpleasant", "B. embarrassing", "C. thrilling", "D. helpless"],
    "answer": "C. thrilling",
    "explanation": "Câu 'It's dangerous but fun' (Nó nguy hiểm nhưng vui) mô tả một cảm giác mạnh, kích thích. Từ 'thrilling' (hồi hộp, ly kỳ) là lựa chọn chính xác."
  },
  {    
    "question": "The view of the valley was so __________. I took a lot of photos then.",
    "options": ["A. amazing", "B. helpless", "C. tiring", "D. boring"],
    "answer": "A. amazing",
    "explanation": "Một khung cảnh 'amazing' (tuyệt vời, kinh ngạc) sẽ khiến người ta muốn chụp nhiều ảnh. Các đáp án khác không phù hợp với ngữ cảnh này."
  },
  {
    "group": groups[1],
    "question": "I couldn't solve the maths problem, and I felt so __________ when our teacher said time was up.",
    "options": ["A. helpful", "B. happy", "C. pleasant", "D. helpless"],
    "answer": "D. helpless",
    "explanation": "Khi không thể giải được một bài toán và hết thời gian, cảm giác 'helpless' (bất lực, vô vọng) là điều tự nhiên. 'Helpful' (hữu ích) và các từ còn lại đều không đúng."
  },
  {
    "group": groups[2],
    "question": "I attended an interview, and I was so nervous that my mind [went blank].",
    "options": ["A. went empty", "B. became unfocused", "C. turned blush", "D. became exhausted"],
    "answer": "A. went empty",
    "explanation": "Cụm từ 'went blank' là một thành ngữ có nghĩa là đột nhiên không thể nghĩ hoặc nhớ ra điều gì. 'Went empty' là cách diễn đạt gần nhất với nghĩa này."
  },
  {
    "question": "I will never forget that [touching moment] when my dearest friend received an award.",
    "options": ["A. moving moment", "B. moved feelings", "C. worrying feelings", "D. lucky moment"],
    "answer": "A. moving moment",
    "explanation": "'Touching moment' có nghĩa là một khoảnh khắc gây xúc động mạnh. 'Moving moment' là một cụm từ đồng nghĩa hoàn hảo."
  },
  {
    "question": "I learnt history [by rote] and I couldn't pass the test that required me to think.",
    "options": ["A. by heart", "B. mindfully", "C. thinkingly", "D. by accident"],
    "answer": "A. by heart",
    "explanation": "'By rote' có nghĩa là học thuộc lòng bằng cách lặp đi lặp lại mà không cần hiểu. 'By heart' là cụm từ đồng nghĩa phổ biến nhất với ý nghĩa 'học thuộc lòng'."
  },
  {    
    "question": "She felt lucky to have a chance to [explore] a new culture when she went to visit a mountainous area in Viet Nam.",
    "options": ["A. test", "B. tour", "C. learn about", "D. hunt for"],
    "answer": "C. learn about",
    "explanation": "Trong ngữ cảnh này, 'explore a new culture' có nghĩa là tìm hiểu, khám phá về một nền văn hóa mới. 'Learn about' là cụm từ diễn đạt ý nghĩa này một cách chính xác nhất."
  },
  {
    "group": groups[2],
    "question": "I felt like I [grew up] a lot after the trip to Australia without my parents.",
    "options": ["A. stayed up", "B. became much stronger", "C. got up", "D. became more mature"],
    "answer": "D. became more mature",
    "explanation": "'Grew up' ở đây không chỉ sự lớn lên về thể chất mà còn là sự trưởng thành về tinh thần. 'Became more mature' là cụm từ đồng nghĩa hoàn hảo nhất."
  },
    {
    "group": groups[3],
    "question": "I __________ never __________ in such an embarrassing situation before.",
    "options": ["A. had / been", "B. haven't / gone", "C. have / been", "D. hadn't / been"],
    "answer": "C. have / been",
    "explanation": "Dấu hiệu 'before' (trước đây) cho thấy câu này diễn tả một trải nghiệm chưa từng có trong quá khứ, là cách dùng của thì Hiện tại hoàn thành. Cấu trúc phù hợp là 'S + have/has + never + P2'."
  },
  {
    "question": "The student __________ by rote, so he couldn't answer the question.",
    "options": ["A. have learnt", "B. learnt", "C. learn", "D. was learning"],
    "answer": "B. learnt",
    "explanation": "Hành động 'cannot answer the question' (không thể trả lời câu hỏi) xảy ra ở quá khứ. Nguyên nhân dẫn đến hành động này cũng phải ở quá khứ, vì vậy ta dùng thì Quá khứ đơn cho động từ 'learn'."
  },
  {
    "question": "Students in our club __________ many community activities, and they are now ready to help people in need.",
    "options": ["A. experience", "B. will experience", "C. have experienced", "D. experiencing"],
    "answer": "C. have experienced",
    "explanation": "Vế sau của câu 'and they are now ready' (và bây giờ họ đã sẵn sàng) là một kết quả ở hiện tại của một hành động đã xảy ra trong quá khứ. Đây là cách dùng chính của thì Hiện tại hoàn thành."
  },
  {
    "question": "He __________ skydiving last month. It was such an exhilarating experience.",
    "options": ["A. tried", "B. has tried", "C. had tried", "D. was trying"],
    "answer": "A. tried",
    "explanation": "Cụm từ 'last month' (tháng trước) là một mốc thời gian cụ thể trong quá khứ, yêu cầu phải sử dụng thì Quá khứ đơn."
  },
  {
    "group": groups[3],
    "question": "__________ in a photography club? Join us and you will learn how to take wonderful photos.",
    "options": ["A. Do you ever participate", "B. Have you ever participated", "C. Did you participate", "D. Were you participating"],
    "answer": "B. Have you ever participated",
    "explanation": "Đây là câu hỏi về một kinh nghiệm đã từng có trong đời (tham gia câu lạc bộ) mà không có mốc thời gian cụ thể. Vì vậy, ta dùng thì Hiện tại hoàn thành."
  },
   {
    "group": groups[4],
    "question": "Minh: __________\nTeacher: That's okay, Minh. Remember to finish it and send it to me soon.",
    "options": ["A. I'm sorry for not finishing homework, Miss Lan.", "B. I'm sorry for my finishing homework, Miss Lan.", "C. I'm sorry for having sent you the homework, Miss Lan.", "D. I apologise for leaving my textbook home, Miss Lan."],
    "answer": "A. I'm sorry for not finishing homework, Miss Lan.",
    "explanation": "Lời đáp của giáo viên 'That's okay' cho thấy Minh đang xin lỗi vì một việc gì đó. Trong ngữ cảnh này, việc xin lỗi vì chưa hoàn thành bài tập về nhà là phù hợp nhất."
  },
  {    
    "question": "Mai: __________\nAnn: That's alright. You can keep it until you finish it.",
    "options": ["A. What made you choose that book?", "B. Oops, my mistake, Ann. I didn't know this is your book.", "C. Can I borrow another book, please?", "D. I thought you didn't like the author of this book."],
    "answer": "B. Oops, my mistake, Ann. I didn't know this is your book.",
    "explanation": "Câu trả lời 'That's alright' của Ann cho thấy Mai đã xin lỗi vì một lỗi sai nào đó. 'Oops, my mistake...' là lời xin lỗi phù hợp khi vô tình cầm nhầm đồ của người khác."
  },
  {   
    "question": "Nick: I'm very sorry. I didn't know this is your seat.\nMi: __________",
    "options": ["A. That's very careless of you.", "B. Can you give it back to me as soon as possible?", "C. That's okay. I'll sit in another one.", "D. That's alright. You can go now."],
    "answer": "C. That's okay. I'll sit in another one.",
    "explanation": "Nick xin lỗi vì ngồi nhầm chỗ. Lời đáp của Mi nên thể hiện sự chấp nhận lời xin lỗi và giải quyết vấn đề. Câu C là lời đáp lịch sự và thân thiện nhất."
  },
  {   
    "question": "Teacher: Can you write about your trip last week?\nStudent: __________",
    "options": ["A. No, I don't think so, teacher.", "B. That's not a good idea, teacher.", "C. Yes, teacher. How much time do we have?", "D. I know this is hard on you."],
    "answer": "C. Yes, teacher. How much time do we have?",
    "explanation": "Đây là câu hỏi yêu cầu làm bài tập từ giáo viên. Học sinh cần đáp lại một cách tích cực và hợp tác. Câu C thể hiện sự đồng ý và hỏi thêm thông tin, rất lịch sự và phù hợp."
  },
  {
    "group": groups[4],
    "question": "Tom: We apologies for the late delivery, Sir.\nCustomer: __________",
    "options": ["A. Oh, that's alright. Will you give us a discount as a compensation?", "B. I'd love to. But send it to us on another occasion.", "C. Your mistake. I won't do it again.", "D. I'm sorry. We won't do it any more."],
    "answer": "A. Oh, that's alright. Will you give us a discount as a compensation?",
    "explanation": "Khi Tom xin lỗi vì giao hàng muộn, khách hàng chấp nhận lời xin lỗi và có thể yêu cầu bồi thường. Đây là một tình huống giao tiếp phổ biến trong dịch vụ khách hàng."
  }
];