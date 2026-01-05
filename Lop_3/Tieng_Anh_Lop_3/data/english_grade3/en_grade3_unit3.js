const lessonObject = {
  "unit": 3,
  "title": "Our friends",
  
  // Khai báo giọng đọc (speaker names)
  "voice_config": {
    "An": {
      "gender": "Female"
    },
    "Mai": {
      "gender": "Female"
    },
    "Mr Long": {
      "gender": "Male"
    },
    "Ms Hoa": {
      "gender": "Female" // Ms Hoa không nói nhưng cần voice_config nếu ứng dụng cần biết giới tính của nhân vật được nhắc đến
    }
  },
  
  "conversation": [
    {
      "speaker": "An", // An giới thiệu người bạn đang đứng gần (This is...)
      "en": "Hi Mai! This is my friend, Mr Long.",
      "vn": "Chào Mai! Đây là bạn của tớ, thầy Long."
    },
    {
      "speaker": "Mai",
      "en": "Hello, Mr Long. Nice to meet you.",
      "vn": "Chào thầy Long. Rất vui được gặp thầy."
    },
    {
      "speaker": "Mr Long",
      "en": "Nice to meet you too, Mai. You're a new student, right?",
      "vn": "Thầy cũng rất vui được gặp em, Mai. Em là học sinh mới, đúng không?"
    },
    {
      "speaker": "Mai",
      "en": "Yes, it is.",
      "vn": "Vâng, đúng vậy ạ."
    },
    {
      "speaker": "An", // An chỉ vào người đứng xa (That's...)
      "en": "Mai, look over there. That's Ms Hoa.",
      "vn": "Mai, nhìn đằng kia kìa. Kia là cô Hoa."
    },
    {
      "speaker": "Mai", // Mai hỏi An để xác nhận (Is that...?)
      "en": "Is that a teacher?",
      "vn": "Kia có phải là giáo viên không?"
    },
    {
      "speaker": "An",
      "en": "No, it isn't. She's a nurse.",
      "vn": "Không, không phải. Cô ấy là y tá."
    },
    {
      "speaker": "Mai",
      "en": "Oh, thank you, An!",
      "vn": "Ồ, cảm ơn bạn, An!"
    }
  ]
};