folder_Resource ='data/Listening_9';
var i_mode = 0; // 0 = Xem, 1 = Nhập, 2 = Tạo mới
var currentObject = {};
// Mảng tiến độ + pending index
let progress = [];
let pending = exercises.map((_, i) => i);
let valueRate = 1;
function normalize(str) {
  return str.trim().toLowerCase();
}

// Lấy câu tiếp theo (1 câu duy nhất)
function getNextExercise() {
  if (pending.length === 0) return null;
  var idx = pending[0];
  return { index: idx, ...exercises[idx] };
}

function validateInput(inputText) {
    var minLength = 2;
    var maxLength = 200;
    var str_len = length(inputText);
    if (str_len == 0) {
        return "Vui lòng không để trống.";
    }

    if (str_len < minLength) {
        return "Vui lòng nhập ít nhất " +minLength +   " ký tự.";
    }

    if (str_len > maxLength) {
        return "Vui lòng không nhập quá "+maxLength +" ký tự.";
    }
    return ""; // 
}
// ✅ Cập nhật progress không trùng index
function updateProgress(index, input, correct) {
  var existing = progress.find(p => p.index === index);
  if (existing) {
    existing.input = input;
    existing.correct = correct;
    existing.attempts += 1;
  } else {
    progress.push({ index, input, correct, attempts: 1 });
  }
}
// Kiểm tra câu trả lời
function checkAnswer(userInput) {
  var isCorrect = currentObject.answers.some(ans => normalize(ans) === normalize(userInput));
  updateProgress(currentObject.index, userInput, isCorrect);
  if (isCorrect) {
    pending.shift(); // bỏ khỏi pending
  } else {
    pending.push(pending.shift()); // quay lại sau
  }
  return isCorrect;
}


function scoresToText() {
  return JSON.stringify(progress);
}

function textToScores(text) {
  try {
    if (!text || text.trim() === "") {
      return progress;
    }
    return JSON.parse(text);
  } catch(erro){
    return progress;
  }
}

function OpenRever()
{
	if(currentObject!=null)
	{
		SetText("","text",currentObject.text);
		SetText("","bt_Check","Check Answers");
		SetText("","answers","");
		var cau = currentObject.index +1;
		SetText("","id",cau + ".");
		AllowEditText("","answers",1);	
		SetText("","msg","");
		i_mode = 1;
	}
	else
	{
		SetText("","text","");
		SetShowObject("","bt_Check",0);
		SetShowObject("","text",0);
		SetShowObject("","answers",0);
		SetShowObject("","sound",0);
		SetShowObject("","id",0);
		SetShowObject("","word",0);
		SetText("","msg","🎉 All exercises completed!");
	}
	Reverse("text");
}

// 🔄 Hàm restore lại pending từ progress
function restorePending() {
  var solved = new Set(
    progress.filter(p => p.correct).map(p => p.index)
  );
  pending = exercises
    .map((_, i) => i)
    .filter(i => !solved.has(i)); // chỉ giữ lại index chưa đúng
}

function printReport() {
  let report = "";
  exercises.forEach((ex, idx) => {
    var rec = progress.find(p => p.index === idx);
    if (rec) {
      var status = rec.correct ? "✅" : "❌";	  
      report += `${status} ${idx + 1}: ${rec.input}; `;      
    } 
  });
  return report.trim();
}

function calculateScore() {
  var total = exercises.length;
  var correctCount = progress.filter(p => p.correct).length;
  var wrongCount = progress.filter(p => !p.correct && p.attempts > 0).length;
  var notDone = total - (correctCount + wrongCount);
  var percent = Math.round((correctCount / total) * 100);
  return { total, correctCount, wrongCount, notDone, percent };
}

function  AnimationObj()
{
var center = GetTop("","text") + GetHeight("","text")/2;
transitionTo("","text",200,-1,0,'{"x":1,"y":0}',0,1,10,"OpenRever()");
}

function WhenClickAndEnter()
{
if(i_mode == 0) // view
	{
		currentObject = getNextExercise();
		AnimationObj();
	}
else if(i_mode == 1) 
	{
		var _strInput = GetText("","answers");
		var  _str = validateInput(_strInput);
		if(_str!="")
		{
		SetText("","msg",_str);
		InvalidateObj("","");
		return false;
		}
		AllowEditText("","answers",0);
		if (checkAnswer(_strInput)) {			
			SetText("","msg","✅ Correct!");
			var testspeak = currentObject.text.replace("______", currentObject.answers[0]);
			SetText("","text",testspeak);
		} else {
			SetText("","msg","❌ Wrong! Try again later");
		}			
		
		SetText("","str_Score",printReport());
		var score = calculateScore();
		var report = printReport();
		UpdateScore(score.percent, report);
		// Save to database
		var s_score  = scoresToText();
		SaveLesson(s_score);
		
		i_mode = 0;
		SetText("","bt_Check","Next sentence");
		InvalidateObj("","");
	}
}

window.callBackLoadLesson = function callBackLoadLesson(_note)
{
	if(_note != null)
	{
	s_score = _note;
    progress = textToScores(_note);
	restorePending();
	SetText("","str_Score",printReport());
	}
	i_mode = 0;
	WhenClickAndEnter();
}
function Page_1_OnKeyDown()
{
	var key = GetKeyDown("","");
	if(key == "\r")
	{
		if (textarea) {
			 SetText("","answers",textarea.value);	 
		}
		WhenClickAndEnter();
	}
}
function Page_1()
{
SetText("","header",title);
SetText("","unit",unit);
LoadLesson("callBackLoadLesson")
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
 width: 640,
 height: 320 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,640,320,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var text = CreText('text',45,101,552,43,"Mi: By the way, we moved to a new house in a ______ last month.",'#cce6ff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#cce6ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var header = CreText('header',129,2,509,56,"Local Community",'#f79323','#ffffff','#ffffff','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#f79323','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var unit = CreText('unit',1,2,127,56,"Unit 1",'#006bcc','#ffffff','#ffffff','#ffffff','',24,'Arial Black','Normal','center','middle',0,'0.00','0','0',3,'#ffffff','#53adff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var title_ = CreText('title_',19,61,505,34,"Gap-fill (Nghe và điền từ còn thiếu)",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var answers = CreText('answers',86,159,397,42,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var sound = CreText('sound',598,101,41,43,"🎧",'#ffffff','#c0c0c0','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
sound.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var testspeak = currentObject.text.replace("______", currentObject.answers[0]);
Speak(testspeak, "EN", "{pitch:1,rate: " + valueRate + "}");
  return;
}
 );
var msg = CreText('msg',86,212,550,41,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_Check = CreText('bt_Check',488,159,151,43,"Check Answers",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#282828','#28b9ff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_Check.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
WhenClickAndEnter();
  return;
}
 );
var str_Score = CreText('str_Score',46,258,590,58,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.70);
var id = CreText('id',4,101,41,43,"1.",'#8cc6ff','#c0c0c0','#000000','#ffffff','',18,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#000000','#8cc6ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var word = CreText('word',41,159,41,43,"🎧",'#ffffff','#c0c0c0','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
word.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(currentObject.answers[0], "EN");
  return;
}
 );
Page_1.add(Page_1_Backrounnd,text,header,unit,title_,answers,sound,msg,bt_Check,str_Score,id,word);
stage.add(Page_1);
InitLacVietScript();
};
