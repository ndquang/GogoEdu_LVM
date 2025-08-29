folder_Resource ='data/Writing_Practice';
var isChecked = 0; //0 check, 1 bussy, 2 creat
var i_score= 0;
var s_score= "";

function   validateInput( inputText) {
    var minLength = 20;
    var maxLength = 500;
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
function  CreateQuestion()
{	
	//var titleText = document.title;
	//SetText("","strVietNamese",titleText);
	SetText("","strEnglish","");
	SetText("","chat_output","");
	SetText("","bt_Check","Gửi");
        	isChecked = false;
	AllowEditText("","strEnglish",1);
	InvalidateObj("","");
}



function  getChatMessages() {
    var cauGoc = GetText("", "strVietNamese");
    var cauDich = GetText("", "strEnglish");
    var msg  = validateInput(cauDich);
    if(msg!="")
	{
	SetText("","chat_output",msg);
	InvalidateObj("","");
	return "";
	}
    
    /*
   SaveLesson(cauDich);
    return [
        {role: "system",content: "Bạn là giáo viên tiếng Anh lớp 7. Hãy chấm điểm cho phần viết của học sinh lớp 7. Yêu cầu: Chấm theo thang điểm 10. Góp ý nếu có lỗi sai ngữ pháp, từ vựng, hoặc cấu trúc câu. Giải thích bằng tiếng việt"}, {role: "user",content: `Đề bài: ${cauGoc}\nHọc sinh viết (Tiếng Anh): ${cauDich}`
        }
    ];
*/
}
/*
window.fetchData = function fetchData(aiFeedback)
{
	SetText("","chat_output",aiFeedback);
	i_score = extractScore(aiFeedback);
	UpdateScore(i_score,aiFeedback);
	isChecked = 2;
	SetText("","bt_Check","Viết Lại");
	AllowEditText("","strEnglish",0);
	InvalidateObj("","");
}

window.callBackGetVer = function callBackGetVer(_score,_note)
{
	i_score = _score;
	if(_note != null)
	s_score = _note;
	SetText("","chat_output",s_score);

}
function extractScore(inputText) {
    if (!inputText || typeof inputText !== "string") return null;
    inputText = inputText.trim();
    var match = inputText.match(/(?:Điểm:\s*)?(\d+(\.\d+)?)\s*\/\s*\d+/i);
    return match ? Number(match[1]) : null;
}
window.loadWriting = function loadWriting (strUserWrite)
{
	if (!strUserWrite || typeof strUserWrite !== "string") return null;
	{
	SetText("","strEnglish",strUserWrite);
	isChecked = 2;
	SetText("","bt_Check","Viết Lại");
	AllowEditText("","strEnglish",0);
	InvalidateObj("","");
	}
}
*/
function Page_1()
{
CreateQuestion();
//GetVer("callBackGetVer");
//LoadLesson("loadWriting");
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
 height: 640 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,740,640,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var strVietNamese = CreText('strVietNamese',28,2,634,40,"Write 4–5 sentences about Tet holiday in Vietnam.",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',18,'Segoe UI','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var strEnglish = CreText('strEnglish',34,49,682,188,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',2,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',5,1.70);
var bt_Check = CreText('bt_Check',585,251,132,33,"Nộp bài",'#0080ff','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','10','0',2,'#008000','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_Check.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if(!isChecked)
{
var lstMessage = getChatMessages();
if(lstMessage == "")
{
SetText("","strAIDap","Vui lòng nhập câu tiếng anh nghiêm túc.");
InvalidateObj("","");
return;
}
isChecked  = 1;
SetText("","bt_Check","Đợi chút ...");
AllowEditText("","strEnglish",0);
InvalidateObj("","");
//HoiChatGpt(lstMessage,"fetchData");
}
else if(isChecked == 2)
CreateQuestion();
  return;
}
 );
var chat_output = CreText('chat_output',34,298,682,329,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',1,'#666666','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',5,1.70);
var Text_2 = CreText('Text_2',34,259,296,32,"Comments, suggestions:",'rgba(0,0,0,0)','#ffffff','#666666','#0000ff','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,strVietNamese,strEnglish,bt_Check,chat_output,Text_2);
stage.add(Page_1);
InitLacVietScript();
};
