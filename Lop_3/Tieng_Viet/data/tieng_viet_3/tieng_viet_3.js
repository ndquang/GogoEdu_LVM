folder_Resource ='data/tieng_viet_3';
var isChecked = 0; //0 check, 1 bussy, 2 creat
var a_score= [0,0];
let a_lessons = [];
let i_index = 0 ;
let i_section = 0 ; // 0 Doc 1 Viet

function validateInput(inputText) {
  var min = 5, max = 1000;  
  var len = inputText.length;
  let msg =
    len === 0 ? "Vui lòng không để trống." :
    len < min ? `Vui lòng nhập ít nhất ${min} ký tự.` :
    len > max ? `Vui lòng không nhập quá ${max} ký tự.` :
    "";
  if (msg) {
    SetText("", "msg", msg);
    InvalidateObj("", "");
    return false;
  }
  return true;
}


function ParseAllLessons() {
  var el = document.getElementById("idContent");
  if (!el) return [];

  var text = String(el.innerText || el.textContent || "").replace(/\r\n/g, "\n");
  var sections = text.split(/\n(?=[IVXL]+\.)/); // tách theo I., II., ...

  var lessons = [];

  for (var sec of sections) {
    var rawLines = sec.split("\n");
    // loại bỏ header/trailing rác
    while (rawLines.length && rawLines[0].trim() === "") rawLines.shift();
    while (rawLines.length && rawLines[rawLines.length - 1].trim() === "") rawLines.pop();
    if (!rawLines.length) continue;

    var sectionLine = rawLines.shift().trim(); // I. ĐỌC ...
    // next non-empty line is TITLE (explicit rule)
    let title = "";
    while (rawLines.length) {
      var l = rawLines.shift();
      if (l.trim() === "") continue;
      title = l.trim();
      break;
    }

    // collect passage until question marker
    var passageLines = [];
    var questions = [];
    let inQuestions = false;
    for (var l of rawLines) {
      var t = l.trim();
      if (!inQuestions && (t === "❓" || t === "?")) {
        inQuestions = true;
        continue;
      }
      if (!inQuestions) {
        passageLines.push(l);
      } else {
        if (t !== "") questions.push({ question: t, answer: "" });
      }
    }

    // trim leading/trailing blank lines in passage
    while (passageLines.length && passageLines[0].trim() === "") passageLines.shift();
    while (passageLines.length && passageLines[passageLines.length - 1].trim() === "") passageLines.pop();

    // extract author if last line is "(Name)"+
    let author = "";
    if (passageLines.length) {
      var last = passageLines[passageLines.length - 1].trim();
      var m = last.match(/^\(([^)]+)\)$/);
      if (m) {
        author = m[1].trim();
        passageLines.pop();
      }
    }

    var passage = passageLines.join("\n").trim();
    lessons.push({ section: sectionLine, title, passage, author, questions });
  }
  return lessons;
}

function SetTextPassage(passage)
{
	let parts = passage.split("|"); // kiêm tra nếu là bài thơ chia ra làm 2 đoạn
	if (parts.length > 1)
	{
		SetText("","passage",parts[0].trim());
		SetText("","passage1",parts[1].trim());
	}
	else 
	{
		SetText("","passage",passage);
		SetText("","passage1","");
	}
}

function CreateQuestion()
{
    let titleText = document.title;
	titleText = titleText.split("-")[1].trim();
	let strUnit = titleText.split(":");
	titleText = strUnit[1].trim();
	let iunit = StringtoNumber(strUnit[0].trim());
	SetText("","bai",iunit);
	SetText("","header",titleText);
	a_lessons = ParseAllLessons();
	let passage = a_lessons[i_section].passage;
	SetTextPassage(passage);	
	SetText("","section1",a_lessons[0].section);
	SetText("","section2",a_lessons[1].section);
	
	SetText("","author",a_lessons[0].author);	
	AllowEditText("","answer",1);	
	SetShowObject("","bt_Check",0);	
	let title = a_lessons[i_section].title;
	SetText("","title",title);
	let strPassage = a_lessons[i_section].passage;
	SpeakAI(title +".\r\n"+strPassage,false);
	UpdateScreen();
	isChecked = 0;
}

function clearLessonAnswers(lesson) {
  if (!lesson || !Array.isArray(lesson.questions)) return lesson;
  lesson.questions.forEach(q => q.answer = "");
  AllowEditText("","answer",1);
  SetShowObject("","bt_Check",0);
  i_index = 0;
  isChecked = 0;
  SetText("","answer","");
  document.getElementById("aiFeedback").innerHTML = "";
  UpdateScreen();
  return lesson;
}

function UpdateScreen()
{
	SetText("", "question", a_lessons[i_section].questions[i_index].question);
	let ans = a_lessons[i_section].questions[i_index].answer ?? "";
	SetText("", "answer", ans);
	let cau = i_index+1;
	SetText("", "id", cau + ".");
	let lenque = a_lessons[i_section].questions.length;
	if(cau == lenque)
		SetShowObject("","bt_Check",1);
	SetText("", "cau", cau+"/"+lenque);
	SetText("", "msg", "");
	InvalidateObj("","");
}

function  SelectSection()
{
	
	let strPassage = a_lessons[i_section].passage;
	let title = a_lessons[i_section].title;
	SetText("", "title", title);
	SpeakAI(title +".\r\n"+strPassage,false);
	
	if(a_lessons[i_section].section.includes("🔊"))
	{
		var spellingListenWriteInstructionText = 
		"Bài tập Nghe – Viết chính tả:\n"+
		"Bấm vào nút 🔊 Nghe để nghe đoạn chính tả.\n"+
		"Khi nghe xong, bấm ⏸ Dừng và viết lại nội dung vừa nghe.\n"+
		"Sau khi viết xong, bấm 🔊 Nghe lại để kiểm tra bài của em.\n"+ 
		"Lưu ý: phần nghe KHÔNG hiển thị văn bản — em phải tập trung nghe và viết thật cẩn thận.";		
		SetTextPassage(spellingListenWriteInstructionText);
	}
	else
	{		
		SetTextPassage(strPassage);
	}
	SetText("","btnPlay","🔊");
	SetText("", "author", a_lessons[i_section].author);	
	SetText("","answer","");
	SetShowObject("","bt_Check",0);
	document.getElementById("aiFeedback").innerHTML = "";	
	UpdateScreen();
}

 audioSpeakVN.onended = function () {
                SetText("","btnPlay","🔊");
				InvalidateObj("","");
            };

function  NextQuestion()
{
	let strAnswer = GetText("","answer");
	if(validateInput(strAnswer))
	{
		a_lessons[i_section].questions[i_index].answer = strAnswer;
		i_index++;
		if(i_index>=a_lessons[i_section].questions.length)
		i_index = a_lessons[i_section].questions.length-1;	
		isCheck = false;
		UpdateScreen();
	}
}

function  PrevQuestion()
{
	let strAnswer = GetText("","answer");
	if(validateInput(strAnswer))
	{
		a_lessons[i_section].questions[i_index].answer = strAnswer;
		i_index--;
		if(i_index<0)
		i_index = 0;
		isCheck = false;
		UpdateScreen();
	}
}

function buildGradingPrompt(lesson) {
  if (!lesson) return "";

  let prompt = `
Bạn là giáo viên Tiếng Việt lớp 3.  
Dưới đây là một bài đọc hiểu, kèm các câu hỏi và câu trả lời của học sinh.  
Hãy chấm điểm từng câu hỏi theo thang 0–10 điểm, nhận xét ngắn gọn (1–2 câu),  
và nếu học sinh trả lời sai hoặc chưa đủ, hãy gợi ý đáp án đúng.

Đầu ra của bạn là JSON theo mẫu:
[
  {
    "question": "...",+
    "student_answer": "...",+
    "score": 0–10,+
    "comment": "...",+
    "suggestion": "..."+
  }
]

Bài làm:
---
Tiêu đề: ${lesson.title || ""}
Đoạn đọc: ${lesson.passage || ""}

Câu hỏi và trả lời của học sinh:
`;

  if (lesson.questions && lesson.questions.length > 0) {
    lesson.questions.forEach((q, i) => {
      prompt += `
${i + 1}. Câu hỏi: ${q.question || ""}
Trả lời: ${q.answer || ""}
`;
    });
  } else {
    prompt += "Không có câu hỏi nào.\n";
  }

  prompt += "---";
  return prompt.trim();
}

function buildFullSpellingAndPunctuationPrompt(lesson) {
  if (!lesson) return "";

  let prompt = `
Bạn là **giáo viên Tiếng Việt lớp 3**, chấm bài **nghe – viết** của học sinh.  
Hãy **so sánh đoạn văn gốc** với **bài học sinh viết lại** để kiểm tra toàn diện.

### Nhiệm vụ của bạn:
1. So sánh nội dung học sinh viết với đoạn gốc trong "Đoạn đọc".
2. Phát hiện **tất cả lỗi**, bao gồm:
   - Lỗi **chính tả** (âm, vần, dấu, từ sai)
   - Lỗi **viết thiếu / dư từ / nhầm từ**
   - Lỗi **dấu câu** (thiếu dấu chấm, phẩy, hỏi, than, hoặc dùng sai)
   - Lỗi **viết hoa** (chữ đầu câu, tên riêng, sau dấu chấm)
3. Ghi rõ lỗi phát hiện được trong trường **"comment"**.
4. Cho điểm chính tả theo thang **0–10**:
   - 10 điểm nếu hoàn toàn đúng
   - Trừ điểm tùy mức độ sai
5. Trường **"suggestion"** là **nhận xét, lời phê tổng thể của giáo viên**, ví dụ:
   - “Bài viết còn nhiều lỗi dấu câu, em cần chú ý khi ngắt câu.”  
   - “Em viết đúng chính tả, trình bày sạch đẹp.”  
   - “Cần chú ý viết hoa đầu câu và tên riêng.”  

### Đầu ra JSON:
[
  {
    "question": "...",+
    "student_answer": "...",+
    "score": 0–10,+
    "comment": "liệt kê lỗi chính tả, dấu câu, viết hoa, thiếu/dư",+
    "suggestion": "nhận xét, lời phê của giáo viên"+
  }
]

### Bài kiểm tra nghe – viết:
---
Tiêu đề: ${lesson.title || ""}
Đoạn đọc gốc (bài mẫu):
${lesson.passage || ""}

Bài viết lại của học sinh:
`;

  if (lesson.questions && lesson.questions.length > 0) {
    lesson.questions.forEach((q, i) => {
      prompt += `
	${i + 1}. Câu hỏi: ${q.question || ""}
	Bài học sinh viết: ${q.answer || ""}
`;
    });
  } else {
    prompt += "Không có bài học sinh nào.\n";
  }

  prompt += "---";
  return prompt.trim();
}

window.fetchData = function fetchData(aiFeedback)
{
	 let data;
  // Nếu đầu vào là chuỗi JSON thì parse nó
  if (typeof aiFeedback === "string") {
    try {
      data = JSON.parse(aiFeedback);
    } catch(erro) {
      return "❌ Lỗi: Dữ liệu GPT trả về không phải JSON hợp lệ.";
    }
  } else {
    data = aiFeedback;
  }

  if (!Array.isArray(data) || data.length === 0) {
    return "Không có kết quả chấm điểm nào.";
  }
  let totalScore = 0;
  let count = 0;	
  let output = "📘 KẾT QUẢ CHẤM ĐIỂM TIẾNG VIỆT LỚP 3\n";
  output += `${a_lessons[i_section].section}\n`
  data.forEach((item, i) => {
    output += `Câu ${i + 1}: ${item.question || ""}\n`;
    output += `Trả lời của học sinh: ${item.student_answer || ""}\n`;
    output += `Điểm: ${item.score ?? "?"}/10\n`;
    output += `Nhận xét: ${item.comment || ""}\n`;
    output += item.suggestion ? `Gợi ý: ${item.suggestion}\n` : "";
    output += `----------------------------------------\n`;
	if (typeof item.score === "number") {
    totalScore += item.score;
    count++;
	}
  });
	
    output = output.trim();
	document.getElementById("aiFeedback").style.whiteSpace = "pre-line";
	document.getElementById("aiFeedback").innerHTML = output;
	let average  = count > 0 ? (totalScore / count).toFixed(1) : "?";
	a_score[i_section] = average;
	isChecked = 2;
	let sum = 0;	
	for (let i = 0; i < a_lessons.length; i++) {
		  let score = Number(a_score[i]);   // ép sang kiểu số
		  if (isNaN(score)) score = 0;      // nếu không phải số thì cho = 0
		  sum += score;
	}	
	let dataToSave = { note: a_lessons.map((x, i) => `${x.section}: ${a_score[i] ?? 'NA'} điểm`).join(', '),score: a_score};
	SetText("","score",dataToSave.note);
	UpdateScore(sum, JSON.stringify(dataToSave),true);
	SetText("","bt_Check","Viết Lại");
	AllowEditText("","answer",0);
	InvalidateObj("","");
}

window.callBackGetVer = function callBackGetVer(_score,_note)
{
	if(_score)
	{		
		let restored = JSON.parse(_note);
		a_score = restored.score;
		SetText("","score",restored.note);
	}
}
function Page_1_OnKeyDown()
{
  return;
}
function Page_1()
{
CreateQuestion();
GetVer("callBackGetVer");
  return;
}
 
  window.onload = function() {
 var canvas = document.createElement('canvas');
if (!canvas.getContext) {
alert("Trinh duyet khong ho tro");
return;
} 
 document.getElementById("Doc").textContent = ""; 
 stage = new Kinetic.Stage({
 container: "Doc", 
 width: 740,
 height: 780 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});

var msg = CreText('msg',34,727,455,28,"",'rgba(0,0,0,0)','#ffffff','#ff0000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var question = CreText('question',50,525,685,34,"",'rgba(0,0,0,0)','#ffffff','#004080','#ffffff','',18,'Segoe UI','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var answer = CreText('answer',23,562,682,153,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',1,'#00ccff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',5,1.70);
var bt_Check = CreText('bt_Check',390,727,97,28,"Nộp bài",'#40e0d0','#ffffff','#282828','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','3','0',1,'#ff0000','#c0ffff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_Check.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if(isChecked === 0)
	{
		let strAnswer = GetText("","answer");
		if(validateInput(strAnswer))
		{
			a_lessons[i_section].questions[i_index].answer = strAnswer;
			let strPrompt = "";
			if(a_lessons[i_section].section.includes("🔊"))
			{
				strPrompt = buildFullSpellingAndPunctuationPrompt(a_lessons[i_section]);
			}
			else strPrompt = buildGradingPrompt(a_lessons[i_section]);			
			isChecked  = 1;
			SetText("","bt_Check","Đợi chút ...");
			AllowEditText("","answer",0);
			InvalidateObj("","");
			AskGpt(strPrompt,"fetchData");
		}
	}
else if(isChecked === 2){
	clearLessonAnswers(a_lessons[i_section]);	
}
}
 );
var header = CreText('header',62,10,654,76,"Title",'rgba(0,0,0,0)','#ffffff','#ff6820','#ffffff','',28,'Arial','Bold','center','middle',12,'0.00','0','2',4,'#ff6820','#009300','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var passage = CreText('passage',23,169,682,336,"",'#eaffff','#fffaf9','#000000','#ffffff','',14,'Arial','Normal','left','top',3,'0.00','5','0',1,'#00ccff','#eaffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',15,1.70);
var unit = CreText('unit',26,7,79,81,"Bài",'#ff6820','#ff6820','#ffffff','#ffffff','',16,'Arial Black','Bold','center','top',2,'0.00','0','3',0,'rgba(0,0,0,0)','#ff6820','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',3,1.50);
var bai = CreText('bai',24,8,78,79,"1 ",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',45,'Arial Unicode MS','Bold','center','bottom',2,'0.00','0','3',0,'rgba(0,0,0,0)','#ff6820','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var author = CreText('author',508,490,184,31,"tác gia",'#e8ffff','#ffffff','#000000','#ffffff','',14,'Arial','Italic','center','middle',3,'0.00','5','0',1,'#33cccc','#e8ffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_Next = CreText('bt_Next',639,727,74,28,"Next",'#e0e0e0','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#282828','#e5e5e5','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_Next.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextQuestion();
  return;
}
 );
var cau = CreText('cau',566,727,97,28,"2/10",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_Prev = CreText('bt_Prev',511,727,74,28,"Prev",'#e0e0e0','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#282828','#e5e5e5','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_Prev.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevQuestion();
}
 );
var section1 = CreText('section1',25,102,120,35,"I. ĐỌC",'#c0ffff','#ffe4e1','#008080','#ffffff','',14,'Arial','Bold','center','middle',12,'0.00','0','1',2,'#388e8e','#c0ffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
section1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
i_section = 0;	
i_index = 0;
SelectSection();
  return;
}
 );
var id = CreText('id',21,525,30,34,"1.",'rgba(0,0,0,0)','#ffffff','#ff0000','#ffffff','',20,'Arial','Bold','center','middle',2,'0.00','0','0',0,'rgba(0,0,0,0)','#009300','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var section2 = CreText('section2',159,102,200,35,"II. NGHE VÀ VIẾT",'#c0ffff','#ffe4e1','#008080','#ffffff','',14,'Arial','Bold','center','middle',12,'0.00','2','1',2,'#388e8e','#c0ffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
section2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
i_section = 1;	
i_index = 0;
SelectSection();
  return;
}
 );
var score = CreText('score',376,102,364,35,"",'rgba(0,0,0,0)','#ffffff','#666666','#ffffff','',16,'Arial','Italic','left','bottom',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',5,1.70);
var passage1 = CreText('passage1',367,168,337,336,"",'rgba(0,0,0,0)','#fffaf9','#000000','#ffffff','',14,'Arial','Normal','left','top',3,'0.00','5','0',0,'rgba(0,0,0,0)','#eaffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',15,1.70);
var btnPlay = CreText('btnPlay',293,490,110,31,"🔊",'#ffffff','#ffffff','#0080c0','#ffffff','',16,'Arial Unicode MS','Normal','center','bottom',3,'0.00','10','0',1,'#00ccff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',5,1.70);
btnPlay.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 if (audioSpeakVN.paused) {
    audioSpeakVN.play();
    SetText("","btnPlay","⏸")
  } else {
    audioSpeakVN.pause();
    SetText("","btnPlay","🔊")
  }
InvalidateObj("","");
  return;
}
 );
var title = CreText('title',76,151,576,35,"1 ",'#ffffff','#ccffcc','#ff6820','#ffffff','',18,'Arial','Bold','center','middle',12,'0.00','2','2',1,'#00ccff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(msg,question,answer,bt_Check,header,passage,unit,bai,author,bt_Next,cau,bt_Prev,section1,id,section2,score,passage1,btnPlay,title);
stage.add(Page_1);
InitLacVietScript();
};
