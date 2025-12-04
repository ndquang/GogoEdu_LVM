folder_Resource ='data/reading_9';
var currentObject = {};
var index = 0;
var studentAnswers = []; // mỗi phần tử { index, selected, correct }
var isCheck = false;

function getExerciseByIndex(idx) {
  if (idx < 0 || idx >= exercises.length) return null;
  return exercises[idx];
}

function checkAllResultsText(mode = "single") {
  let correctCount = 0;
  let report = "";

  // Đếm số câu đúng
  studentAnswers.forEach(ans => {
    if (ans.correct) correctCount++;
  });

  // Lọc ra các câu đã trả lời
  var answered = studentAnswers
    .map(ans => ({ ...ans, ex: getExerciseByIndex(ans.index) }))
    .sort((a, b) => a.index - b.index);

  if (answered.length === 0) {
    return "Chưa có câu nào được trả lời.";
  }

  // Trường hợp chỉ lấy 1 câu hiện tại
  if (mode === "single") {
    let current = answered.find(a => a.index === index);
    if (!current) {
      return `Câu ${index + 1} chưa được trả lời.`;
    }

    let { index: idx, selected, correct, ex } = current;
    if (correct) {
      report += `✅ Câu ${idx + 1}: ĐÚNG (${selected})\n`;
    } else {
      report += `❌ Câu ${idx + 1}: SAI (Bạn chọn: ${selected}, Đáp án đúng: ${ex.answer})\n`;
    }
    report += `➔ Giải thích: ${ex.explanation}\n`;
  }

  // Trường hợp lấy 10 câu quanh vị trí hiện tại
  else if (mode === "range") {
    let pos = answered.findIndex(a => a.index === index);
    if (pos === -1) {
      pos = answered.findIndex(a => a.index > index);
      if (pos === -1) pos = answered.length - 1;
    }

    let start = pos, end = pos;
    while ((end - start + 1) < 10 && (start > 0 || end < answered.length - 1)) {
      if (start > 0) start--;
      if ((end - start + 1) < 10 && end < answered.length - 1) end++;
    }

    for (let i = start; i <= end; i++) {
      let { index: idx, selected, correct, ex } = answered[i];
      if (correct) {
        report += `✅ Câu ${idx + 1}: ĐÚNG (${selected})\n`;
      } else {
        report += `❌ Câu ${idx + 1}: SAI (Bạn chọn: ${selected}, Đáp án đúng: ${ex.answer})\n`;
      }
      report += `➔ Giải thích: ${ex.explanation}\n`;
    }
  }

  // Thêm tổng kết
  report += `\nTổng kết: ${correctCount}/${exercises.length} câu đúng.`;
  return report;
}

function getTextAnswers() {
  let report = ""; 
  studentAnswers.forEach(ans => {
   report += `Câu ${ans.index + 1}:(${ans.selected})\n`;
  });
  return report;
}

function LuuKetQua() {
  let correctCount = 0;
  studentAnswers.forEach(ans => {
    var ex = getExerciseByIndex(ans.index);
    if (ans.correct) {
      correctCount++;
    }
  });
  var total = exercises.length;
  var score = ((correctCount / total) * 10).toFixed(2);
  let txtTongKet = `Tổng số câu: ${total}, Trả lời đúng: ${correctCount}\nĐiểm: ${score}/10`;
  UpdateScore(score,txtTongKet,true);
}

function scoresToText() {
  return JSON.stringify(studentAnswers);
}

function textToScores(text) {
  try {
    if (!text || text.trim() === "") {
      return studentAnswers;
    }
    return JSON.parse(text);
  } catch(erro)//()
  {
    return studentAnswers;
  }
}

function getStudentAnswer(index) {
  // Tìm trong mảng studentAnswers
  var found = studentAnswers.find(item => item.index === index);
  // Nếu có thì trả về đáp án, không thì null
  return found ? found.selected : null;
}

function UpdateScreen()
{
	currentObject = getExerciseByIndex(index);
	if(currentObject!=null)
	{
		SetText("","cau_hoi",currentObject.question);
		var _idx = index+1;
		SetText("","cau",_idx + "/" + exercises.length);
		SetText("","id",_idx + ".");
		var userAns = getStudentAnswer(index);
		let lenopt = currentObject.options.length;
		for(i =0 ;i < 4 ; i++)
		SetShowObject("","options_"+i,0);	
		for(i =0 ;i < lenopt ; i++)
		{
			SetText("","options_"+i,currentObject.options[i]);
			if(userAns!=null && GetText("","options_"+i)=== userAns)
			{
				SetColorEx("","options_"+i,"#fdf7d2");
			}
			else SetColorEx("","options_"+i,"#ffffff");
			SetShowObject("","options_"+i,1);
		}
		
		if(isCheck == true)
		SetText("","msg",checkAllResultsText());
		else  SetText("","msg", getTextAnswers());
		if (currentObject.group !== undefined && currentObject.group !== null)
		{
			SetText("","group", groups[currentObject.group]);			
			var text_ = document.getElementById("idContent").textContent.trim();
			var cleaned = text_
			.split("\n")           // tách từng dòng
			.filter(line => line.trim() !== "") // loại bỏ dòng trống
			.join("\n");
			listpassage = cleaned.split("⭐⭐⭐");
			SetText("","passage", listpassage[currentObject.group].trim());
			//AutoHeight("", "passage");
		}
		InvalidateObj("","");
	}
}
// Hàm học sinh chọn câu trả lời
function submitAnswer() {
 
  let userAns = GetText("","");
  var isCorrect = userAns === currentObject.answer;
  var found = studentAnswers.find(item => item.index === index);
  if(found)
  {
	  if(isCheck)
	  {
      SetText("","msg","👉 Câu này bạn đã xem đáp án, chuyển qua câu khác nhé. Sau đó quay lại sửa sau.");	
      InvalidateObj("","");
      return false;
	  }
	  found.selected =  userAns;
	  found.correct = isCorrect;
  }
  else
  {
	  studentAnswers.push({index,selected: userAns,correct: isCorrect});
  }
  UpdateScreen();
  return isCorrect;
}

window.callBackLoadLesson = function callBackLoadLesson(_note)
{
	index = 0;
	if(_note != null && _note !="")
	{
	s_score = _note;
            studentAnswers = textToScores(_note);
	isCheck = true;
	}
	UpdateScreen();
}
function Page_1()
{
SetText("","header",title);
SetText("","unit","Unit " + unit);
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
 height: 850 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var cau_hoi = CreText('cau_hoi',56,439,584,47,"Mi: By the way, we moved to a new house in a ______ last month.",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var header = CreText('header',148,2,493,41,"Local Community",'rgba(0,0,0,0)','#ffffff','#008000','#ffffff','',28,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#009300','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_Check = CreText('bt_Check',65,687,151,34,"Check Answers",'#009300','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#282828','#009300','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_Check.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
isCheck = true;
UpdateScreen();
SaveLesson(scoresToText());
LuuKetQua();
return;
}
 );
var options_0 = CreText('options_0',63,487,543,34,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
options_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
submitAnswer();
  return;
}
 );
var options_1 = CreText('options_1',63,537,543,34,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
options_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
submitAnswer();
  return;
}
 );
var options_2 = CreText('options_2',63,587,543,34,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
options_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
submitAnswer();
  return;
}
 );
var options_3 = CreText('options_3',63,639,543,34,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
options_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
submitAnswer();
  return;
}
 );
var bt_Next = CreText('bt_Next',523,687,77,34,"Next",'#e0e0e0','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#282828','#e5e5e5','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_Next.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
index++;
if(index>=exercises.length)
index = exercises.length-1;
isCheck = false;
UpdateScreen();
  return;
}
 );
var cau = CreText('cau',450,687,74,34,"2/10",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_Prev = CreText('bt_Prev',383,687,65,34,"Prev",'#e0e0e0','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#282828','#e5e5e5','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_Prev.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
index--;
if(index<0)
index = 0;
isCheck = false;
UpdateScreen();
}
 );
var msg = CreText('msg',50,742,563,103,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.70);
var unit = CreText('unit',0,2,106,38,"1",'#009300','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','center','middle',12,'0.00','0','3',3,'#ffffff','#009300','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var id = CreText('id',9,439,44,51,"1.",'rgba(0,0,0,0)','#ffffff','#009300','#ffffff','',16,'Arial','Bold','right','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#009300','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var passage = CreText('passage',30,87,586,337,"",'rgba(216,254,216,0.44)','#ffffff','#000000','#ffffff','',14,'Arial Narrow','Normal','left','middle',3,'0.00','5','0',3,'#98fb98','rgba(216,254,216,0.44)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',5,1.60);
var group = CreText('group',66,56,520,59,"Choose A,B,C or D to complete each sentence.",'#ffffff','#ccffcc','#009300','#ffffff','',18,'Arial','Normal','center','middle',3,'0.00','5','0',2,'#00ff00','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(cau_hoi,header,bt_Check,options_0,options_1,options_2,options_3,bt_Next,cau,bt_Prev,msg,unit,id,passage,group);
stage.add(Page_1);
InitLacVietScript();
};
