folder_Resource ='/data/Translate_English7';
var str_topic = "gia_dinh";
var isChecked = 0; //0 check, 1 bussy, 2 creat
var currentIndex = -1;

var allScores = {};

function initAllScores() {
  for (var topic in topics) {
    allScores[topic] = new Array(topics[topic].length).fill(0);
  }
}

function getAverageScore() {
  let sum = 0;
  let count = 0;

  for (let topic in allScores) {
    if (Array.isArray(allScores[topic])) {
      for (let score of allScores[topic]) {
        if (Number.isFinite(score) && score > 0) {
          sum += score;
          count++;
        }
      }
    }
  }
  return count > 0 ? sum / count : 0;
}

function scoresToText() {
  return JSON.stringify(allScores);
}

function textToScores(text) {
  try {
    if (!text || text.trim() === "") {
      return allScores;
    }
    return JSON.parse(text);
  } catch(erro){
    return allScores;
  }
}

function getRandomSentence(topic) {
  let scores = allScores[topic];
  let minScore = Math.min(...scores);
  let candidates = [];

  scores.forEach((s, i) => {
    if (s === minScore) candidates.push(i);
  });
  currentIndex = candidates[Math.floor(Math.random() * candidates.length)];
  str_topic = topic;
  return topics[topic][currentIndex];
}

function updateAllScore(newScore) {
  if (str_topic && currentIndex >= 0) {
    allScores[str_topic][currentIndex] = newScore;
  }
}

function   validateInput( inputText) {
    var minLength = 5;
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

function  CreateQuestion()
{
	var cau_hoi = getRandomSentence(str_topic);
	SetText("","strVietNamese",cau_hoi);
	SetText("","strEnglish","");
	SetText("","strAIDap","");
	SetText("","bt_Check","Gửi");
        	isChecked = false;
	AllowEditText("","strEnglish",1);
	InvalidateObj("","");
}

function  ChonChuDe( in_topic)
{
str_topic = in_topic;
for(var i =0 ;i <10;i++)
SetColorEx("","top_"+i,"#f5f5f5");
SetColorEx("","","#04aa6d");
CreateQuestion();
InvalidateObj("","");
}

function  getChatMessages() {
    var cauGoc = GetText("", "strVietNamese");
    var cauDich = GetText("", "strEnglish");
    var msg  = validateInput(cauDich);
    if(msg!="")
	{
	SetText("","strAIDap",msg);
	InvalidateObj("","");
	return "";
	}
  
    return [
        {role: "system",content: "Bạn là giáo viên tiếng Anh lớp 7. Hãy chấm điểm cho phần dịch tiếng Anh của học sinh lớp 7. Yêu cầu: Chấm theo thang điểm 10. Góp ý nếu có lỗi sai ngữ pháp, từ vựng, hoặc cấu trúc câu. Cung cấp bản dịch gợi ý chính xác."}, {role: "user",content: `Câu gốc (Tiếng Việt): ${cauGoc}\nHọc sinh dịch (Tiếng Anh): ${cauDich}`
        }
    ];

}


window.fetchData = function fetchData(aiFeedback)
{
	SetText("","strAIDap",aiFeedback);
	var i_score = extractScore(aiFeedback);
	updateAllScore(i_score);
	var average_score = getAverageScore();
	var s_score = scoresToText();
	UpdateScore(average_score,s_score,true);
	SetText("","str_avr",average_score);
	SetText("","str_Score",s_score);
	isChecked = 2;
	SetText("","bt_Check","Câu tiếp");
	InvalidateObj("","");
}

window.callBackGetVer = function callBackGetVer(_score,_note)
{
	i_score = _score;
	if(_note != null)
	s_score = _note;
            allScores = textToScores(_note);
	var average_score = getAverageScore();
	var s_score = scoresToText();
	SetText("","str_avr",average_score);
	SetText("","str_Score",s_score);
	CreateQuestion();

}

function extractScore(inputText) {
    if (!inputText || typeof inputText !== "string") return null;
    inputText = inputText.trim();
    var match = inputText.match(/(?:Điểm:\s*)?(\d+(\.\d+)?)\s*\/\s*\d+/i);
    return match ? Number(match[1]) : null;
}

function Page_1_OnKeyDown()
{
var key = GetKeyDown("","");
if(key == "\r")
{

if (textarea) {
     SetText("","strEnglish",textarea.value);
 }

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
HoiChatGpt(lstMessage,"fetchData");
}
else if(isChecked == 2)
CreateQuestion();
  return;

   }
}


function Page_1()
{
AllowEditText("","strEnglish",1);
for(var i =0 ;i <10;i++)
SetColorEx("","top_"+i,"#f5f5f5");
SetColorEx("","top_0","#04aa6d");
initAllScores();
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
 height: 640 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,740,640,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var strAIDap = CreText('strAIDap',50,276,680,259,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',1,'#666666','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.60);
var Text_15 = CreText('Text_15',482,7,120,28,"Chọn Chủ Đề",'#04aa6d','#ccffcc','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','4','0',2,'#025d3b','#04aa6d','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',28,2,477,40,"📕 Bài học dịch tiếng Việt sang tiếng Anh – Lớp 7 ",'rgba(0,0,0,0)','#ffffff','#009300','#ffffff','',18,'Segoe UI','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',51,131,680,27,"✍️   Bạn thử dịch câu này sang tiếng Anh nhé, đừng lo nếu sai mình sẽ sửa\r\n",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var strVietNamese = CreText('strVietNamese',51,165,680,29,"|Em thường dậy muộn vào cuối tuần.|\r\n",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var strEnglish = CreText('strEnglish',51,203,680,28,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#666666','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_Check = CreText('bt_Check',622,237,108,33,"Gửi",'#04aa6d','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','10','0',2,'#008000','#04aa6d','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
HoiChatGpt(lstMessage,"fetchData");
}
else if(isChecked == 2)
CreateQuestion();
  return;
}
 );
var top_0 = CreText('top_0',46,51,121,27,"Gia đình",'#f5f5f5','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7171ff','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
top_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonChuDe("gia_dinh");
  return;
}
 );
var top_1 = CreText('top_1',47,86,121,27,"Trường học",'#f5f5f5','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7171ff','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
top_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonChuDe("truong_hoc");
  return;
}
 );
var top_2 = CreText('top_2',329,51,121,27,"Sở thích",'#f5f5f5','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7171ff','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
top_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonChuDe("so_thich");
  return;
}
 );
var top_3 = CreText('top_3',330,86,121,27,"Sức khỏe",'#f5f5f5','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7171ff','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
top_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonChuDe("suc_khoe");
  return;
}
 );
var top_4 = CreText('top_4',463,51,121,27,"Mua sắm",'#f5f5f5','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7171ff','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
top_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonChuDe("mua_sam");
  return;
}
 );
var top_5 = CreText('top_5',463,86,121,27,"Du lịch",'#f5f5f5','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7171ff','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
top_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonChuDe("du_lich");
  return;
}
 );
var top_6 = CreText('top_6',591,51,121,27,"Môi trường",'#f5f5f5','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7171ff','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
top_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonChuDe("moi_truong");
  return;
}
 );
var top_7 = CreText('top_7',591,86,121,27,"Công nghệ",'#f5f5f5','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7171ff','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
top_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonChuDe("cong_nghe");
  return;
}
 );
var top_8 = CreText('top_8',183,51,121,27,"Bạn bè",'#f5f5f5','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7171ff','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
top_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonChuDe("ban_be");
  return;
}
 );
var top_9 = CreText('top_9',184,86,121,27,"Thời gian biểu",'#f5f5f5','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7171ff','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
top_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonChuDe("thoi_gian_bieu");
  return;
}
 );
var str_Score = CreText('str_Score',51,540,683,91,"11",'rgba(0,0,0,0)','#ffffff','#666666','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#666666','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.60);
var str_avr = CreText('str_avr',186,238,135,32,"10",'rgba(0,0,0,0)','#ffffff','#ff0000','#ffffff','',18,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.60);
var Text_3 = CreText('Text_3',54,239,134,29,"Điểm trung bình:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,strAIDap,Text_15,Text_1,Text_2,strVietNamese,strEnglish,bt_Check,top_0,top_1,top_2,top_3,top_4,top_5,top_6,top_7,top_8,top_9,str_Score,str_avr,Text_3);
stage.add(Page_1);
InitLacVietScript();
};
