let unit = "1";
let title = "Local Community";
let groups = [
	  "I. Choose the correct answer A, B, C, or D to complete Trang's email to her new friend, Elena.",
	  "II. Fill in each blank with a suitable word from the box to complete a passage about a community helper.",
	  "III. Read a passage about Sardinia and do the exercises that follow."
]
let exercises = [
  {
	"group": 0,
    "question": "I live (1) __________ a suburb of Ha Noi.",
    "options": ["A. in", "B. of", "C. on", "D. with"],
    "answer": "A. in",
    "explanation": "Cần một giới từ đi với danh từ chỉ nơi chốn. Cụm từ 'live in a suburb' (sống ở vùng ngoại ô) là cách diễn đạt đúng ngữ pháp."
  },
  {
    "question": "(2) __________ it's a small community, there are enough places of interest.",
    "options": ["A. But", "B. However", "C. Besides", "D. Although"],
    "answer": "D. Although",
    "explanation": "Cần một liên từ chỉ sự nhượng bộ (mặc dù... nhưng...). 'Although' (+ mệnh đề) phù hợp nhất về ngữ nghĩa và ngữ pháp để nối hai mệnh đề trái ngược nhau."
  },
  {
    "question": "Near my house there are two parks with a lot of trees and (3) __________ facilities.",
    "options": ["A. sporty", "B. sportsmen", "C. sports", "D. sportingly"],
    "answer": "C. sports",
    "explanation": "Cần một danh từ/tính từ dùng để bổ nghĩa cho danh từ 'facilities' (cơ sở vật chất). 'Sports facilities' (cơ sở vật chất/thiết bị thể thao) là cụm danh từ cố định."
  },
  {
    "question": "People of all ages go there to (4) __________ the fresh air, do exercise, and play badminton or basketball.",
    "options": ["A. take", "B. enjoy", "C. bring", "D. give"],
    "answer": "B. enjoy",
    "explanation": "Cụm từ 'to enjoy the fresh air' (tận hưởng không khí trong lành) là cách diễn đạt đúng và phù hợp với ngữ cảnh."
  },
  {
    "question": "I also go to these parks to play badminton with my brother. (5) __________ place which people like in our community is the local library.",
    "options": ["A. The others", "B. Others", "C. Another", "D. Other"],
    "answer": "C. Another",
    "explanation": "Cần từ chỉ 'một nơi khác'. 'Another' (+ danh từ số ít) có nghĩa là 'một cái/người/nơi khác' trong số nhiều."
  },
  {
    "question": "In addition, it holds (6) __________ activities for book lovers...",
    "options": ["A. differ", "B. different", "C. differently", "D. differing"],
    "answer": "B. different",
    "explanation": "Cần một tính từ đứng trước danh từ 'activities' để bổ nghĩa. 'Different activities' có nghĩa là 'các hoạt động khác nhau'."
  },
  {
    "question": "When you visit Ha Noi, I'll (7) __________ you to these places.",
    "options": ["A. take", "B. get", "C. bring", "D. give"],
    "answer": "A. take",
    "explanation": "Cụm từ 'take someone to a place' (dẫn/đưa ai đến một nơi nào đó) là cách diễn đạt phù hợp nhất về nghĩa và ngữ pháp."
  },
  {
	"group": 0,
    "question": "Tell me about the places of interest in your area in your (8) __________ email.",
    "options": ["A. other", "B. next", "C. another", "D. last"],
    "answer": "B. next",
    "explanation": "Cần từ chỉ lá thư tiếp theo. 'Next email' (thư điện tử tiếp theo) là cụm từ chuẩn để yêu cầu thông tin trong lần liên lạc sau."
  },
  {
	"group": 1,  
    "question": "Nowadays delivery people are commonly seen in our city. Of all the delivery people who (1) __________ us parcels, our family likes Mr Nam the most.",
    "options": ["A. shares", "B. deliver", "C. told", "D. giving"],
    "answer": "B. deliver",
    "explanation": "Cần một động từ ở dạng nguyên thể để hoàn thành mệnh đề quan hệ ('who deliver us parcels'), mang nghĩa 'người giao hàng giao bưu kiện cho chúng tôi'."
  },
  {
    "question": "Mr Nam is about 40 years old and usually wears a yellow (2) __________ .",
    "options": ["A. uniform", "B. leave", "C. told", "D. giving"],
    "answer": "A. uniform",
    "explanation": "Cần một danh từ đi sau tính từ màu sắc ('yellow') và động từ 'wears' (mặc). 'Uniform' (đồng phục) là từ phù hợp nhất với ngữ cảnh công việc giao hàng."
  },
  {
    "question": "(3) __________ he brings a parcel to our house, he always calls to check if we are at home.",
    "options": ["A. Before", "B. told", "C. shares", "D. deliver"],
    "answer": "A. Before",
    "explanation": "Cần một liên từ chỉ thời gian ở đầu câu. 'Before' (trước khi) phù hợp với ngữ cảnh: 'Trước khi anh ấy mang bưu kiện đến, anh ấy luôn gọi điện kiểm tra'."
  },
  {
    "question": "I still (4) __________ one day when we were in Ho Chi Minh City...",
    "options": ["A. told", "B. remember", "C. leave", "D. shares"],
    "answer": "B. remember",
    "explanation": "Cần một động từ sau chủ ngữ 'I' mang nghĩa 'nhớ'. 'I still remember' (tôi vẫn nhớ) là cách diễn đạt phù hợp."
  },
  {
    "question": "He (5) __________ us that we had a parcel.",
    "options": ["A. told", "B. shares", "C. deliver", "D. leave"],
    "answer": "A. told",
    "explanation": "Cần động từ ở thì quá khứ đơn (vì câu chuyện kể về một ngày đã xảy ra). 'Told' là dạng quá khứ của 'tell', phù hợp với cấu trúc 'told us that...' (nói với chúng tôi rằng...)."
  },
  {
    "question": " ...my father asked him to (6) __________ the parcel with our neighbour.",
    "options": ["A. giving", "B. told", "C. leave", "D. shares"],
    "answer": "C. leave",
    "explanation": "Cần một động từ nguyên mẫu sau 'to'. 'Leave' (để lại) phù hợp với ngữ cảnh: 'cha tôi yêu cầu anh ấy để lại bưu kiện cho hàng xóm'."
  },
  {
    "question": "Mr Nam found our neighbour and called us before (7) __________ the parcel to her.",
    "options": ["A. giving", "B. told", "C. uniform", "D. remember"],
    "answer": "A. giving",
    "explanation": "Cần một động từ ở dạng V-ing sau giới từ 'before'. 'Giving' (trao/giao) là từ phù hợp với ngữ cảnh giao bưu kiện."
  },
  {
	"group": 1,
    "question": "My father sometimes talks to him and he happily (8) __________ about his life and work.",
    "options": ["A. told", "B. deliver", "C. shares", "D. leave"],
    "answer": "C. shares",
    "explanation": "Cần một động từ chia theo ngôi thứ ba số ít ('he') mang nghĩa 'chia sẻ'. 'Shares' (chia sẻ) phù hợp với ngữ cảnh giao tiếp thân mật."
  },
  {
	"group": 2,
    "question": "What does the word 'remarkable' in the passage about Sardinia mean?",
    "options": [
      "A. Made to look attractive",
      "B. Not often done, seen, or happening",
      "C. Unusual or surprising in a way that causes people to take notice",
      "D. Involving using the hands or physical strength"
    ],
    "answer": "C. Unusual or surprising in a way that causes people to take notice",
    "explanation": "Trong ngữ cảnh này, 'remarkable' (đáng chú ý) đồng nghĩa với 'unusual or surprising' (bất thường hoặc đáng ngạc nhiên) và thu hút sự chú ý."
  },
  {
    "question": "The word 'manual' in the context of basket weaving is best defined as:",
    "options": [
      "A. The measurements of something",
      "B. Involving using the hands or physical strength",
      "C. Not done, seen, or happening very often",
      "D. Made to look attractive"
    ],
    "answer": "B. Involving using the hands or physical strength",
    "explanation": "'Manual skills' (kỹ năng thủ công) nghĩa là các kỹ năng 'involving using the hands or physical strength' (liên quan đến việc sử dụng tay hoặc sức mạnh thể chất)."
  },
  {
    "question": "What do 'dimensions' refer to when talking about the baskets?",
    "options": [
      "A. How attractive the baskets look",
      "B. The type of natural materials used",
      "C. Whether the baskets are rare or not",
      "D. Measurements of something in a particular direction, especially its height, length, or width"
    ],
    "answer": "D. Measurements of something in a particular direction, especially its height, length, or width",
    "explanation": "'Dimensions' (kích thước) được định nghĩa là 'measurements of something in a particular direction' (các phép đo của một vật theo một hướng cụ thể)."
  },
  {
    "question": "The word 'decorative' in the phrase 'decorative purposes' means:",
    "options": [
      "A. Made to look attractive",
      "B. Made for storing goods",
      "C. Involving physical strength",
      "D. Passed down through generations"
    ],
    "answer": "A. Made to look attractive",
    "explanation": "'Decorative' (trang trí) có nghĩa là 'made to look attractive' (được làm để trông hấp dẫn/đẹp mắt)."
  },
  {
    "question": "If something is 'rare' in the context of the passage, it means it is:",
    "options": [
      "A. Unusual or surprising",
      "B. Made to be attractive",
      "C. Done by hand",
      "D. Not done, seen, happening, etc. very often"
    ],
    "answer": "D. Not done, seen, happening, etc. very often",
    "explanation": "'Rare' (hiếm) nghĩa là 'not done, seen, happening, etc. very often' (không được thực hiện, nhìn thấy, xảy ra, v.v. rất thường xuyên)."
  },
   {
    "question": "Sardinia is smaller than only one other island in Italy.",
    "options": ["A. True", "B. False"],
    "answer": "A. True",
    "explanation": "Thông tin trong bài: 'Sardinia is the second largest island in Italy.' (Sardinia là hòn đảo lớn thứ hai ở Ý). Điều này có nghĩa là chỉ có một hòn đảo khác lớn hơn nó, suy ra câu này là ĐÚNG."
  },
  {
    "question": "Basket weaving is the only ancient craft on the island.",
    "options": ["A. True", "B. False"],
    "answer": "B. False",
    "explanation": "Thông tin trong bài: '...and a variety of ancient crafts.' (và nhiều loại thủ công cổ xưa khác). Điều này ngụ ý đan lát chỉ là MỘT trong số đó, không phải CÁI DUY NHẤT. Suy ra câu này là SAI."
  },
  {
    "question": "Weaving techniques have been passed down through generations.",
    "options": ["A. True", "B. False"],
    "answer": "A. True",
    "explanation": "Thông tin trong bài: 'They have handed down the techniques from generation to generation.' (Họ đã truyền lại các kỹ thuật từ thế hệ này sang thế hệ khác). Suy ra câu này là ĐÚNG."
  },
  {
    "question": "People use natural materials to make the baskets.",
    "options": ["A. True", "B. False"],
    "answer": "A. True",
    "explanation": "Thông tin trong bài: '...it combines manual skills and natural resources. They use various natural materials such as willow, palm, straw, and hay.' (kết hợp kỹ năng thủ công và tài nguyên thiên nhiên. Họ sử dụng nhiều vật liệu tự nhiên khác nhau như liễu, cọ, rơm và cỏ khô). Suy ra câu này là ĐÚNG."
  },
  {
    "question": "Today people use the baskets only for decorating their homes.",
    "options": ["A. True", "B. False"],
    "answer": "B. False",
    "explanation": "Thông tin trong bài: 'Today the baskets are used in homes or used for decorative purposes.' (Ngày nay giỏ được sử dụng trong nhà HOẶC sử dụng cho mục đích trang trí). Từ 'only' (chỉ) làm cho câu này SAI, vì chúng được sử dụng cho cả mục đích 'trong nhà' và 'trang trí'."
  }
];