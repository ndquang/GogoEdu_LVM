let unit = "8";
let title = "Tourism";
let groups = [
	  "Pronunciation",
	  "Choose the correct answers A,B,C, or D to complete each of the sentences",
      "Writing",
	  "Choose the sentence that is best written from the words/phrases given.",	  	  
	  "Speaking."
]
let exercises = [
  {
    "group": groups[0],
    "question": "Choose the word which has a different stress pattern.",
    "options": ["A. authentic", "B. amazing", "C. consistent", "D. generous"],
    "answer": "D. generous",
    "explanation": "Các từ 'authentic' (au-THEN-tic), 'amazing' (a-MA-zing), 'consistent' (con-SIS-tent) có trọng âm rơi vào âm tiết thứ hai. Riêng từ 'generous' (GE-ne-rous) có trọng âm rơi vào âm tiết thứ nhất."
  },
  {    
    "question": "Choose the word which has a different stress pattern.",
    "options": ["A. natural", "B. delicious", "C. chaotic", "D. excited"],
    "answer": "A. natural",
    "explanation": "Các từ 'delicious' (de-LI-cious), 'chaotic' (cha-O-tic), 'excited' (ex-CI-ted) có trọng âm rơi vào âm tiết thứ hai. Riêng từ 'natural' (NA-tu-ral) có trọng âm rơi vào âm tiết thứ nhất."
  },
  {    
    "question": "Choose the word which has a different stress pattern.",
    "options": ["A. surprising", "B. luxurious", "C. dangerous", "D. domestic"],
    "answer": "C. dangerous",
    "explanation": "Các từ 'surprising' (sur-PRI-sing), 'luxurious' (lux-U-ri-ous), 'domestic' (do-MES-tic) có trọng âm rơi vào âm tiết thứ hai. Riêng từ 'dangerous' (DAN-ge-rous) có trọng âm rơi vào âm tiết thứ nhất."
  },
  {   
    "question": "Choose the word which has a different stress pattern.",
    "options": ["A. popular", "B. ruinous", "C. favourite", "D. ambitious"],
    "answer": "D. ambitious",
    "explanation": "Các từ 'popular' (PO-pu-lar), 'ruinous' (RU-i-nous), 'favourite' (FA-vou-rite) có trọng âm rơi vào âm tiết thứ nhất. Riêng từ 'ambitious' (am-BI-tious) có trọng âm rơi vào âm tiết thứ hai."
  },
  {
	"group": groups[0],
    "question": "Choose the word which has a different stress pattern.",
    "options": ["A. electric", "B. personal", "C. hilarious", "D. convenient"],
    "answer": "B. personal",
    "explanation": "Các từ 'electric' (e-LEC-tric), 'hilarious' (hi-LA-ri-ous), 'convenient' (con-VE-nient) có trọng âm rơi vào âm tiết thứ hai. Riêng từ 'personal' (PER-so-nal) có trọng âm rơi vào âm tiết thứ nhất."
  },
   {
    "group": groups[1],
    "question": "Look at the __________. We'll visit Notre-Dame in the morning and take a cruise on the Seine River in the afternoon.",
    "options": ["A. map", "B. itinerary", "C. app", "D. brochure"],
    "answer": "B. itinerary",
    "explanation": "'Itinerary' (lịch trình) là danh từ chỉ một kế hoạch chi tiết cho một chuyến đi, phù hợp với việc liệt kê các hoạt động cụ thể theo thời gian."
  },
  {    
    "question": "The ancient town of Hoi An is a well-known destination for __________.",
    "options": ["A. travel agents", "B. tour guides", "C. holidaymakers", "D. event organisers"],
    "answer": "C. holidaymakers",
    "explanation": "'Holidaymakers' (khách du lịch) là từ phù hợp nhất để chỉ những người đi du lịch, đặc biệt là du lịch nghỉ dưỡng."
  },
  {
    "question": "Music __________ is becoming popular. People travel to watch performances of their favourite singers or bands.",
    "options": ["A. event", "B. competition", "C. tendency", "D. tourism"],
    "answer": "D. tourism",
    "explanation": "'Music tourism' (du lịch âm nhạc) là một loại hình du lịch chuyên biệt, nơi du khách di chuyển đến các địa điểm khác nhau để tham dự các buổi biểu diễn âm nhạc."
  },
  {
    "question": "We stayed in a __________ which was very comfortable and convenient since we could cook and wash our clothes.",
    "options": ["A. homestay", "B. hotel", "C. bed and breakfast", "D. caravan"],
    "answer": "A. homestay",
    "explanation": "'Homestay' là loại hình lưu trú tại nhà dân, nơi du khách thường được sử dụng các tiện nghi như nhà bếp và máy giặt, phù hợp với mô tả trong câu."
  },
  {
    "question": "You can use __________ to buy tickets and book accommodation on your own.",
    "options": ["A. online programmes", "B. tour guides", "C. travel agencies", "D. travel apps"],
    "answer": "D. travel apps",
    "explanation": "'Travel apps' (ứng dụng du lịch) là thuật ngữ chính xác để chỉ các ứng dụng di động giúp người dùng tự đặt vé và chỗ ở một cách dễ dàng."
  },
    {   
    "question": "Big Ben, __________ is the most photographed place in London, is a cultural landmark.",
    "options": ["A. which", "B. who", "C. whose", "D. it"],
    "answer": "A. which",
    "explanation": "'Big Ben' là danh từ chỉ vật. Ta dùng đại từ quan hệ 'which' để bổ sung thông tin cho danh từ này."
  },
  {
    "question": "The postcard of Niagara Falls is from my sister, __________ is now on her vacation in Canada.",
    "options": ["A. which", "B. who", "C. whose", "D. she"],
    "answer": "B. who",
    "explanation": "'My sister' là danh từ chỉ người. Ta dùng đại từ quan hệ 'who' để bổ sung thông tin cho danh từ này."
  },
  {
    "question": "Most countries in Southeast Asia have floating markets, __________ attract western visitors.",
    "options": ["A. they", "B. who", "C. whose", "D. which"],
    "answer": "D. which",
    "explanation": "'Floating markets' (chợ nổi) là danh từ chỉ vật, cần đại từ quan hệ 'which' để thay thế và làm chủ ngữ cho mệnh đề quan hệ."
  },
  {    
    "question": "Could you recommend me a local tour guide __________ has good knowledge about the places?",
    "options": ["A. which", "B. who", "C. he", "D. whose"],
    "answer": "B. who",
    "explanation": "'A local tour guide' là danh từ chỉ người, cần đại từ quan hệ 'who' để bổ sung thông tin và làm chủ ngữ cho mệnh đề quan hệ."
  },
  {
    "group": groups[1],
    "question": "We plan to visit Paris, __________ Eiffel Tower is world-famous.",
    "options": ["A. which", "B. its", "C. whose", "D. who"],
    "answer": "C. whose",
    "explanation": "'Whose' là đại từ quan hệ sở hữu, dùng để chỉ sự sở hữu của danh từ đứng trước nó (Paris) đối với danh từ đứng sau (Eiffel Tower)."
  },
    {
    "group": groups[4],
    "question": "Alice: It's important to check the time of your flight the day before you fly.\nTrang: __________",
    "options": ["A. I always do that.", "B. What's the time?", "C. I've never flown.", "D. Are you flying anywhere?"],
    "answer": "A. I always do that.",
    "explanation": "Đây là câu trả lời trực tiếp và phù hợp nhất, cho thấy Trang đã biết và thực hiện lời khuyên đó rồi."
  },
  {
    "question": "A: You must not touch the exhibits in the museum.\nB: __________",
    "options": ["A. What exhibits?", "B. I don't like this art museum.", "C. I know. Thank you.", "D. I love arts."],
    "answer": "C. I know. Thank you.",
    "explanation": "'I know. Thank you.' là câu trả lời lịch sự để thể hiện rằng người B đã hiểu rõ quy tắc."
  },
  {
    "question": "A: We need to plan our tour carefully.\nB: __________",
    "options": ["A. What's your plan?", "B. I agree.", "C. What's the problem?", "D. Let's look at the brochure."],
    "answer": "D. Let's look at the brochure.",
    "explanation": "Lời đáp này vừa thể hiện sự đồng tình vừa đưa ra một hành động cụ thể để bắt đầu việc lập kế hoạch, rất phù hợp trong hội thoại."
  },
  {    
    "question": "A: You must strictly follow the guide's instructions.\nB: __________",
    "options": ["A. There are a lot of instructions.", "B. Can I?", "C. Got it. Thank you.", "D. I like this tour guide."],
    "answer": "C. Got it. Thank you.",
    "explanation": "'Got it.' là một cách nói ngắn gọn, thân mật để thể hiện sự hiểu rõ, và 'Thank you' thể hiện sự lịch sự."
  },
  {
    "group": groups[4],
    "question": "A: __________\nB: Thank you for informing me.",
    "options": ["A. What information do you need?", "B. Do you fancy visiting Peru?", "C. Sure. The information centre is 200 metres ahead, on the right.", "D. It's a rule here that you don't wear shorts in a pagoda."],
    "answer": "C. Sure. The information centre is 200 metres ahead, on the right.",
    "explanation": "Lời đáp của người B 'Thank you for informing me.' cho thấy người A vừa cung cấp một thông tin hữu ích nào đó. Câu C là một câu cung cấp thông tin phù hợp nhất với ngữ cảnh."
  },
    {
    "group": groups[2],
    "question": "Choose the correct sentence.",
    "options": ["A. Find someone whose can show US to the information centre.", "B. Finding someone who can show to the information centre.", "C. Find someone who can show us the way to the information centre.", "D. Find someone whose way to the information centre."],
    "answer": "C. Find someone who can show us the way to the information centre.",
    "explanation": "'Who' là đại từ quan hệ dùng cho người. Cấu trúc 'show us the way to...' là cách nói chính xác và tự nhiên để chỉ đường."
  },
  {   
    "question": "Choose the correct sentence.",
    "options": ["A. Please download this app which helps you navigate a new place.", "B. Please download apps which helps you navigate a new place.", "C. Please download this app which helps you navigating a new place.", "D. Please download this app which help you navigate new places."],
    "answer": "A. Please download this app which helps you navigate a new place.",
    "explanation": "Đại từ quan hệ 'which' thay thế cho danh từ số ít 'this app', do đó động từ theo sau là 'helps'. Ngoài ra, động từ 'navigate' đứng sau 'helps' ở dạng nguyên thể."
  },
  {   
    "question": "Choose the correct sentence.",
    "options": ["A. A mobile phone is extremely useful for any traveller.", "B. A mobile phone is extremely useful for any traveller.", "C. Mobile phones extremely useful for any traveller.", "D. A mobile phone is extreme useful for any traveller."],
    "answer": "A. A mobile phone is extremely useful for any traveller.",
    "explanation": "Câu A có cấu trúc ngữ pháp hoàn toàn chính xác: 'A + danh từ số ít + is + trạng từ + tính từ'."
  },
  {    
    "question": "Choose the correct sentence.",
    "options": ["A. Orchard Road is the centre of tour in Singapore.", "B. Orchard Road the centre of tourism in Singapore.", "C. Orchard Road is the centre of tourism in Singapore.", "D. Orchard Road the centre of tourism in Singapore."],
    "answer": "C. Orchard Road is the centre of tourism in Singapore.",
    "explanation": "Câu này cần động từ 'is' và danh từ không đếm được 'tourism' (ngành du lịch) để diễn tả chính xác ý nghĩa."
  },
  {
    "group": groups[2],
    "question": "Choose the correct sentence.",
    "options": ["A. Cherry blossom is one of the greatest attractions of Japan.", "B. Cherry blossoms are one of the greatest attracts of Japan.", "C. Cherry blossoms are one great attraction of Japan.", "D. Cherry blossoms are one of the greatest attractions of Japan."],
    "answer": "D. Cherry blossoms are one of the greatest attractions of Japan.",
    "explanation": "Cấu trúc 'one of the + so sánh nhất + danh từ số nhiều' là chính xác. 'Cherry blossoms' là chủ ngữ số nhiều, đi với động từ 'are', và 'attractions' là danh từ số nhiều."
  }
];