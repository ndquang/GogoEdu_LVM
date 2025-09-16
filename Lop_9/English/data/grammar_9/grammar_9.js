folder_Resource ='/data/grammar_9';
var currentObject = {};
var index = 0;
var studentAnswers = []; // mỗi phần tử { index, selected, correct }
var isCheck = false;

function getExerciseByIndex(idx) {
  if (idx < 0 || idx >= exercises.length) return null;
  return exercises[idx];
}

function checkAllResultsText() {
  let correctCount = 0;
  let report = "";

  // Đếm số câu đúng
  studentAnswers.forEach(ans => {
    if (ans.correct) correctCount++;
  });

  // Lọc ra các câu đã trả lời
  var answered = studentAnswers
    .map(ans => ({...ans,ex: getExerciseByIndex(ans.index)})).sort((a, b) => a.index - b.index); 
   // sắp xếp theo thứ tự câu
  if (answered.length === 0) {
    return "Chưa có câu nào được trả lời.";
  }

  // Tìm vị trí gần nhất với index trong mảng đã trả lời
  let pos = answered.findIndex(a => a.index === index);
  if (pos === -1) {
    // nếu index chưa trả lời thì lấy chỗ gần nhất
    pos = answered.findIndex(a => a.index > index);
    if (pos === -1) pos = answered.length - 1; // nếu index lớn hơn tất cả
  }

  // Chọn ra tối đa 10 phần tử quanh vị trí này
  let start = pos;
  let end = pos;

  while ((end - start + 1) < 10 && (start > 0 || end < answered.length - 1)) {
    if (start > 0) start--;
    if ((end - start + 1) < 10 && end < answered.length - 1) end++;
  }

  // Sinh báo cáo
  for (let i = start; i <= end; i++) {
    var { index: idx, selected, correct, ex } = answered[i];
    if (correct) {
      report += `✅ Câu ${idx + 1}: ĐÚNG (${selected})\n`;
    } else {
      report += `❌ Câu ${idx + 1}: SAI (Bạn chọn: ${selected}, Đáp án đúng: ${ex.answer})\n`;
    }
    report += `➔ Giải thích: ${ex.explanation}\n`;
  }

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
		for(i =0 ;i <4 ; i++)
		{
			SetText("","options_"+i,currentObject.options[i]);
			if(userAns!=null && GetText("","options_"+i)=== userAns)
			{
				SetColorEx("","options_"+i,"#25be55");
			}
			else SetColorEx("","options_"+i,"#ffffff");
		}
		
		if(isCheck == true)
		SetText("","msg",checkAllResultsText());
		else  SetText("","msg", getTextAnswers());
		if(currentObject.group)
			SetText("","group", currentObject.group);
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
 height: 800 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var cau_hoi = CreText('cau_hoi',56,111,584,47,"Mi: By the way, we moved to a new house in a ______ last month.",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var header = CreText('header',115,2,526,49,"Local Community",'#00b000','#ffffff','#ffffff','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#00b000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var group = CreText('group',35,60,603,46,"Choose A,B,C or D to complete each sentence.",'rgba(0,0,0,0)','#ffffff','#009300','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_Check = CreText('bt_Check',65,359,151,34,"Check Answers",'#009300','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#282828','#32cd32','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var options_0 = CreText('options_0',63,159,543,34,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
options_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
submitAnswer();
  return;
}
 );
var options_1 = CreText('options_1',63,209,543,34,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
options_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
submitAnswer();
  return;
}
 );
var options_2 = CreText('options_2',63,259,543,34,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
options_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
submitAnswer();
  return;
}
 );
var options_3 = CreText('options_3',63,311,543,34,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
options_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
submitAnswer();
  return;
}
 );
var bt_Next = CreText('bt_Next',523,359,77,34,"Next",'#e0e0e0','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#282828','#e5e5e5','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cau = CreText('cau',450,359,74,34,"2/10",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_Prev = CreText('bt_Prev',383,359,65,34,"Prev",'#e0e0e0','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#282828','#e5e5e5','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var msg = CreText('msg',50,414,563,375,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',12,'Arial Narrow','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.70);
var Text_1 = CreText('Text_1',4,4,85,50,"Unit",'rgba(0,0,0,0)','#ffffff','#009700','#ffffff','',24,'Arial Black','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var unit = CreText('unit',89,2,50,50,"1",'#009300','#ffffff','#ffffff','#ffffff','',26,'Arial Black','Bold','center','middle',2,'0.00','0','0',3,'#ffffff','#009300','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var id = CreText('id',9,111,44,51,"1.",'rgba(0,0,0,0)','#ffffff','#009300','#ffffff','',16,'Arial','Bold','right','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#009300','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(cau_hoi,header,group,bt_Check,options_0,options_1,options_2,options_3,bt_Next,cau,bt_Prev,msg,Text_1,unit,id);
stage.add(Page_1);
InitLacVietScript();
};
