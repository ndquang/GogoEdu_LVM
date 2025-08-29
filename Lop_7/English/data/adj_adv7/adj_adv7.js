folder_Resource ='data/adj_adv7';
var sentences = [
  "Lan cao hơn Nam.",
  "Con mèo nhanh hơn con chó.",
  "Ngôi nhà này to hơn ngôi nhà kia.",
  "Hôm nay trời nóng hơn hôm qua.",
  "Tôi chạy chậm hơn bạn ấy.",
  "Quyển sách này rẻ hơn nhưng hấp dẫn hơn quyển sách kia.",
  "Hoa hồng đẹp hơn nhưng cũng đắt hơn hoa cúc.",
  "Bức tranh này ít màu sắc hơn bức tranh trong phòng khách.",
  "Tôi hát không hay bằng chị gái.",
  "Cô ấy học chăm chỉ hơn tôi, nhưng kết quả thi lại thấp hơn.",
  "Càng học nhiều, bạn sẽ càng thông minh hơn.",
  "Đây là bài toán khó nhất mà tôi từng làm.",
  "Cô giáo giảng bài rõ ràng nhất trong số tất cả các giáo viên.",
  "Tôi thấy việc học ngoại ngữ quan trọng hơn nhiều so với trước đây.",
  "Con đường này ngày càng đông đúc hơn, khiến việc đi lại trở nên khó khăn hơn bao giờ hết."
];
var scoreArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var isChecked = 0; //0 check, 1 bussy, 2 creat
var s_score= "";
var i_index = 0;

function  getSentence() {
		
	let minValue = Math.min(...scoreArray);
	let minIndex = scoreArray.indexOf(minValue);
	i_index = minIndex;
	var i_cau = i_index+1;
	SetText("","cau","Câu "+ i_cau + ":");
            return sentences[minIndex];
	
}

function   validateInput( inputText) {
    var minLength = 10;
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
	var cau_hoi = getSentence();	
	SetText("","strVietNamese",cau_hoi);
	SetText("","strEnglish","");
	SetText("","strAIDap","");
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
	scoreArray[i_index] = extractScore(aiFeedback);
	var scoreText = scoreArray.join(",");
	let total = scoreArray.reduce((sum, value) => sum + value, 0);
	let doneScores = scoreArray.filter(score => score > 0);
	let average = doneScores.length > 0 
              ? (doneScores.reduce((sum, v) => sum + v, 0) / doneScores.length) 
              : 0;
	SetText("","s_average",average);
	UpdateScore(average,scoreText, true);
	SetText("","s_scores",scoreText);
	isChecked = 2;
	SetText("","bt_Check","Câu tiếp");
	InvalidateObj("","");
}

window.callBackGetVer = function callBackGetVer(_score,_note)
{
	if(_note != null)
	{
	SetText("","s_scores",_note);
	let arrNote  = _note.split(",");
	for (let i = 0; i < scoreArray.length && i < arrNote.length; i++) {
  	  if (arrNote[i] !== 0) {
        	scoreArray[i] = arrNote[i];
   	 }}
	scoreArray = scoreArray.map(v => Number(v));
	let doneScores = scoreArray.filter(score => score > 0);
	let average = doneScores.length > 0 
              ? (doneScores.reduce((sum, v) => sum + v, 0) / doneScores.length) 
              : 0;
	SetText("","s_average",average);
	}
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
 height: 550 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,740,550,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var strAIDap = CreText('strAIDap',41,170,693,342,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','1','0',1,'#666666','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',5,1.70);
var Text_1 = CreText('Text_1',28,1,693,40,"Comparative adjectives and adverbs (Tính từ và trạng từ so sánh)",'rgba(0,0,0,0)','#ffffff','#009300','#ffffff','',18,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',27,35,703,27,"✍️   Bây giờ bạn thử dịch câu này sang tiếng Anh nhé:\r\n",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',41,130,612,33,"Bạn thử dịch xem nào. Đừng lo nếu sai, mình sẽ giúp chỉnh sửa.",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var strVietNamese = CreText('strVietNamese',116,60,613,29,"|Em thường dậy muộn vào cuối tuần.|\r\n",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var strEnglish = CreText('strEnglish',41,97,687,28,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_Check = CreText('bt_Check',629,130,104,33,"Gửi",'#04aa6d','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','10','0',2,'#008000','#04aa6d','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var s_scores = CreText('s_scores',114,515,620,27,"",'rgba(0,0,0,0)','#ffffff','#ff0000','#ff0000','',14,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#666666','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau = CreText('cau',29,60,82,29,"Câu 15: ",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var s_average = CreText('s_average',41,515,70,27,"",'rgba(0,0,0,0)','#ffffff','#ff0000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#666666','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,strAIDap,Text_1,Text_2,Text_3,strVietNamese,strEnglish,bt_Check,s_scores,cau,s_average);
stage.add(Page_1);
InitLacVietScript();
};
