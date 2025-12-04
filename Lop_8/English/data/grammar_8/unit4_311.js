let unit = "4";
let title = "Test YourSelf & Ethnic groups of Viet Nam";
let groups = [
	  "Pronunciation",	    
	  "Choose the correct words to complete the following sentence.",
	  "Speaking",
	  "Writing"
]
let  exercises=  [
  {
    "group": 0,
    "question": "Choose the word which has a different sound in the part underlined [oo].",
    "options": ["A. choose", "B. look", "C. spoon", "D. food"],
    "answer": "B. look",
    "explanation": "Phần gạch chân 'oo' trong 'look' được phát âm là /ʊ/. Trong khi đó, các từ 'choose', 'spoon', 'food' đều được phát âm là /uː/."
  },
  {
    "question": "Choose the word which has a different sound in the part underlined [u].",
    "options": ["A. truth", "B. June", "C. cushion", "D. conclusion"],
    "answer": "C. cushion",
    "explanation": "Phần gạch chân 'u' trong 'cushion' được phát âm là /ʊ/. Các từ 'truth', 'June', 'conclusion' đều được phát âm là /uː/."
  },
  {
    "question": "Choose the word which has a different sound in the part underlined [a].",
    "options": ["A. again", "B. company", "C. woman", "D. villager"],
    "answer": "B. company",
    "explanation": "company → a ở âm tiết nhấn → /ʌ/ → khác biệt. Các từ còn lại → a nằm ở âm tiết nhẹ → /ə/."
  },
  {    
    "question": "Choose the word which has a different sound in the part underlined [ure].",
    "options": ["A. mixture", "B. leisure", "C. lure", "D. lecture"],
    "answer": "C. lure",
    "explanation": "Phần gạch chân 'u' trong 'lure' được phát âm là /ʊə/. Trong khi đó, 'u' trong các từ còn lại đều được phát âm là /ə/."
  },
    {   
    "question": "Circle the word with the underlined part pronounced differently in each group. [c]",
    "options": ["A. receive", "B. staircase", "C. communal", "D. culture"],
    "answer": "A. receive",
    "explanation": "Rõ ràng A. receive khác hẳn (âm /iː/), trong khi các từ còn lại có nguyên âm ngắn hoặc đôi khác nhau."
  },
  {   
    "question": "Circle the word with the underlined part pronounced differently in each group. [ch]",
    "options": ["A. school", "B. chemistry", "C. chaotic", "D. children"],
    "answer": "D. children",
    "explanation": "Phần gạch chân 'ch' trong 'children' được phát âm là /tʃ/. Trong khi đó, 'ch' trong các từ còn lại được phát âm là /k/."
  },
  {  
    "question": "Circle the word with the underlined part pronounced differently in each group. [k]",
    "options": ["A. keep", "B. know", "C. kitchen", "D. keen"],
    "answer": "B. know",
    "explanation": "Phần gạch chân 'k' trong 'know' là âm câm, nên từ này được phát âm là /nəʊ/. Các từ còn lại đều có 'k' phát âm là /k/."
  },
  {   
    "question": "Circle the word with the underlined part pronounced differently in each group. [g]",
    "options": ["A. guest", "B. tiger", "C. age", "D. gathering"],
    "answer": "C. age",
    "explanation": "Phần gạch chân 'g' trong 'age' được phát âm là /dʒ/. Trong khi đó, 'g' trong các từ còn lại được phát âm là /ɡ/."
  },
  {    
    "question": "Circle the word with the underlined part pronounced differently in each group. [g]",
    "options": ["A. girl", "B. village", "C. game", "D. garden"],
    "answer": "A. girl",
    "explanation": "Câu hỏi này có lỗi vì các từ có âm gạch chân khác nhau. 'Girl' có âm /ɜː/, 'village' có âm /ɪ/, 'game' có âm /eɪ/, và 'garden' có âm /ɑː/. Tuy nhiên, 'girl' thường được chọn là đáp án."
  },
  {
    "group": 0,
    "question": "Choose the word which has a different sound in the part underlined [oi].",
    "options": ["A. choice", "B. join", "C. going", "D. noise"],
    "answer": "C. going",
    "explanation": "Phần gạch chân 'oi' trong các từ A, B, D được phát âm là /ɔɪ/. Riêng từ 'going' được phát âm là /ˈɡəʊɪŋ/ với 'oi' không tạo thành một âm."
  },
  {
    "group": 1,
    "question": "In his free time, my younger brother is __________ on taking photos and doing puzzles.",
    "options": ["A. fond", "B. keen", "C. interested", "D. crazy"],
    "answer": "B. keen",
    "explanation": "'Keen on' là cụm từ cố định có nghĩa là 'thích thú, say mê' một việc gì đó."
  },
  {    
    "question": "What are you interested __________ doing at weekends?",
    "options": ["A. into", "B. on", "C. about", "D. in"],
    "answer": "D. in",
    "explanation": "'Interested in' là cụm từ cố định có nghĩa là 'quan tâm đến, thích thú với'."
  },
  {   
    "question": "How often do you __________ notifications on Facebook? - Once a day.",
    "options": ["A. upload", "B. browse", "C. connect", "D. check"],
    "answer": "D. check",
    "explanation": "'Check notifications' (kiểm tra thông báo) là cụm từ phổ biến và phù hợp nhất với ngữ cảnh."
  },
  {    
    "question": "Be quiet, please! I'm trying to __________ on my homework.",
    "options": ["A. concentrate", "B. log", "C. advise", "D. bully"],
    "answer": "A. concentrate",
    "explanation": "'Concentrate on' (tập trung vào) là cụm từ cố định, phù hợp với ngữ cảnh 'tập trung làm bài tập về nhà'."
  },
    {    
    "question": "Khmer men teach their children how to __________ fish at an early age.",
    "options": ["A. do", "B. catch", "C. raise", "D. eat"],
    "answer": "B. catch",
    "explanation": "'Catch fish' (bắt cá) là cụm từ chính xác và phổ biến nhất, phù hợp với ngữ cảnh dạy kỹ năng cho trẻ em."
  },
  {   
    "question": "The elders often pass on their __________ to the young through stories and activities.",
    "options": ["A. traditions", "B. rules", "C. legends", "D. music"],
    "answer": "A. traditions",
    "explanation": "'Traditions' (truyền thống) là danh từ chung phù hợp nhất để chỉ những giá trị văn hóa được truyền lại. 'Pass on their traditions' là một cụm từ cố định."
  },
  {   
    "question": "The mountain people in the Central Highlands use natural __________ to build a Rong house.",
    "options": ["A. trees", "B. posts", "C. leaves", "D. materials"],
    "answer": "D. materials",
    "explanation": "'Materials' (vật liệu) là danh từ chung phù hợp nhất để chỉ các loại nguyên liệu tự nhiên được sử dụng để xây nhà."
  },
  {   
    "question": "Minority women often go to the mountains to __________ plants for food and medicine.",
    "options": ["A. collect", "B. see", "C. look", "D. raise"],
    "answer": "A. collect",
    "explanation": "'Collect plants' (thu thập cây) là cụm từ phù hợp nhất để diễn tả việc đi vào rừng để tìm và thu hái cây cỏ."
  },
  {    
    "question": "Many minority groups __________ cows and buffaloes for a living.",
    "options": ["A. feed", "B. herd", "C. raise", "D. milk"],
    "answer": "B. herd",
    "explanation": "'Herd' (chăn dắt) là hành động chăn nuôi, di chuyển một bầy động vật, là một hoạt động mưu sinh phổ biến của nhiều dân tộc thiểu số."
  },  
  {   
    "question": "It's __________ time, so the villagers are busy cutting and gathering their crops.",
    "options": ["A. festival", "B. growing", "C. harvest", "D. planting"],
    "answer": "C. harvest",
    "explanation": "'Harvest time' (mùa thu hoạch) là cụm từ chỉ thời điểm người dân thu hoạch hoa màu, rất phù hợp với hành động 'cutting and gathering their crops'."
  },
    {
   
    "question": "The Tay serve this kind of cake with __________.",
    "options": ["A. a lot of honey", "B. some honeys", "C. a honey", "D. honeys"],
    "answer": "A. a lot of honey",
    "explanation": "'Honey' (mật ong) là danh từ không đếm được, vì vậy ta dùng cụm từ 'a lot of' để chỉ số lượng."
  },
  {   
    "question": "The air __________ thinner when you go higher up the mountains.",
    "options": ["A. become", "B. becomes", "C. became", "D. becoming"],
    "answer": "B. becomes",
    "explanation": "'The air' là danh từ số ít, nên động từ ở thì hiện tại đơn phải chia ở dạng số ít ('becomes')."
  },
  {   
    "question": "In our area, __________ not much land for growing crops.",
    "options": ["A. there are", "B. it has", "C. it is", "D. there is"],
    "answer": "D. there is",
    "explanation": "'Not much land' là một cụm danh từ không đếm được. Cấu trúc 'there is' được dùng để diễn tả sự tồn tại của danh từ không đếm được."
  },
  {    
    "question": "__________ provide free Khmer language classes.",
    "options": ["A. Those temples", "B. The temple", "C. A temple", "D. A few temple"],
    "answer": "A. Those temples",
    "explanation": "Động từ 'provide' không chia ở số ít, vì vậy chủ ngữ phải là danh từ số nhiều. 'Those temples' là cụm danh từ số nhiều phù hợp."
  },
  {
    "group": 1,
    "question": "Do you have __________ about ethnic minority groups in Viet Nam?",
    "options": ["A. a few books", "B. a lot of books", "C. any books", "D. any book"],
    "answer": "C. any books",
    "explanation": "Trong câu hỏi, ta thường dùng 'any' để hỏi về sự tồn tại của một thứ gì đó. 'Books' là danh từ đếm được số nhiều, nên 'any books' là chính xác."
  },
   {
    "group": 2,
    "question": "A: Mountain girls help their mothers with housework when they are five or six.\nB: __________",
    "options": ["A. Do they?", "B. Are they?", "C. I agree.", "D. Should they?"],
    "answer": "A. Do they?",
    "explanation": "'Do they?' là câu hỏi ngắn để thể hiện sự ngạc nhiên, tò mò và xác nhận thông tin vừa được nghe."
  },
  {   
    "question": "A: The Tay in Viet Nam and the Thai in Thailand speak similar languages.\nB: __________",
    "options": ["A. Are they?", "B. I like the Tay.", "C. The same language.", "D. Wow! I didn't know that."],
    "answer": "D. Wow! I didn't know that.",
    "explanation": "Đây là câu trả lời phù hợp nhất để thể hiện sự ngạc nhiên và tiếp nhận thông tin mới."
  },
  {  
    "question": "A: Visiting one another is a type of entertainment among mountain peoples.\nB: __________",
    "options": ["A. It's the same in my village.", "B. We don't visit them.", "C. It's my favourite entertainment.", "D. I have no idea."],
    "answer": "A. It's the same in my village.",
    "explanation": "Câu trả lời này thể hiện sự đồng cảm và chia sẻ kinh nghiệm tương tự từ nơi sống của người B."
  },
  {    
    "question": "A: Lahu boys generally get married at 16.\nB: __________",
    "options": ["A. I don't know what it means.", "B. I think it's too early to get married at that age.", "C. I think they have to help their family.", "D. They don't agree with me."],
    "answer": "B. I think it's too early to get married at that age.",
    "explanation": "Đây là câu trả lời thể hiện quan điểm cá nhân, phù hợp để đáp lại một sự thật văn hóa có thể gây ngạc nhiên."
  },
  {
    "group": 2,
    "question": "A: Mountain peoples treat one another as extended family members.\nB: __________",
    "options": ["A. It's a good idea.", "B. I like to go to the mountains.", "C. I love it.", "D. I don't know."],
    "answer": "A. It's a good idea.",
    "explanation": "'It's a good idea.' là câu trả lời thể hiện sự đồng tình và đánh giá cao đối với truyền thống tốt đẹp này."
  },
   {
    "group": 3,
    "question": "Stilt house / appear / different size / and style.",
    "options": ["A. A stilt house appear in a different size and style.", "B. A stilt house appear in different sizes and styles.", "C. Stilt houses appear in a different size and style.", "D. Stilt houses appear in different sizes and styles."],
    "answer": "D. Stilt houses appear in different sizes and styles.",
    "explanation": "'Stilt houses' là danh từ số nhiều, nên động từ 'appear' cũng ở dạng số nhiều. 'Different sizes and styles' cũng là một cụm danh từ số nhiều."
  },
  {   
    "question": "Terraced field / attract / lot / visitor.",
    "options": ["A. Terraced fields attract a lot of visitors.", "B. A terraced field attracts a lot visitor.", "C. Terraced fields attract lot visitors.", "D. Terraced field attracted a lot of visitors."],
    "answer": "A. Terraced fields attract a lot of visitors.",
    "explanation": "'Terraced fields' là chủ ngữ số nhiều, đi với động từ 'attract' ở dạng số nhiều. 'A lot of visitors' là cụm từ chỉ số lượng chính xác."
  },
  {   
    "question": "The Jrai / decorate / house / dead / with / wooden statues.",
    "options": ["A. The Jrai decorate the houses for dead with wooden statues.", "B. The Jrai decorating the houses for the dead with wooden statues.", "C. The Jrai decorate houses for the dead with wooden statues.", "D. Jrai decorate houses for the dead with wooden statues."],
    "answer": "C. The Jrai decorate houses for the dead with wooden statues.",
    "explanation": "Câu C được viết đúng ngữ pháp: 'The Jrai' là chủ ngữ số nhiều, 'decorate' là động từ số nhiều. Cụm từ 'for the dead' cũng được sử dụng chính xác."
  },
  {    
    "question": "What / the Hoa / wear / special occasion?",
    "options": ["A. What do the Hoa wear on special occasions?", "B. What do the Hoa wear on special occasion?", "C. What do the Hoa wear special occasions?", "D. What do the Hoa wear on special occasions?"],
    "answer": "A. What do the Hoa wear on special occasions?",
    "explanation": "Đây là câu hỏi đúng ngữ pháp, sử dụng trợ động từ 'do' cho chủ ngữ số nhiều và cụm giới từ 'on special occasions' là chính xác."
  },
  {
    "group": 3,
    "question": "How much / time / minority children / spend / do housework?",
    "options": ["A. How much time do minority children spend doing housework?", "B. How much time do minority children spend do housework?", "C. How much time do minority children spend doing housework?", "D. How much time do minority children spend doing housework?"],
    "answer": "A. How much time do minority children spend doing housework?",
    "explanation": "Cấu trúc 'How much time do... spend doing...?' là cách hỏi chính xác và tự nhiên về khoảng thời gian dành cho một hoạt động."
  }
  ]