folder_Resource ='data/Flashcards_English9';
var i_mode = 0; // 0 = Xem, 1 = Nhập, 2 = Tạo mới
var currentObject = {};
var learned = [];
function getRandomUnlearnedVocab() {
  var unlearned = VOCABS.filter(item => !learned.includes(item.en));
  if (unlearned.length === 0) {
	  SetText("","msg","👍 tất cả đã học");
      return null;
  }
  var randomIndex = Math.floor(Math.random() * unlearned.length);
  currentObject = unlearned[randomIndex];
 SpeakAI(currentObject.en);
  return currentObject;
}
function validateInput(inputText) {
    var minLength = 3;
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

// Kiểm tra học sinh nhập đúng từ không
function checkAnswer(userInput) {
  if (userInput.trim().toLowerCase() === currentObject.en.toLowerCase()) {
    if (!learned.includes(currentObject.en)) {
      learned.push(currentObject.en);
    }
    return true;
  }
  return false;
}

function scoresToText() {
  return JSON.stringify(learned);
}

function textToScores(text) {
  try {
    if (!text || text.trim() === "") {
      return learned;
    }
    return JSON.parse(learned);
  } catch(erro)//(erro){
    return learned;
  }
}

function OpenRever()
{
	if(i_mode == 0){
	SetColorEx("","card","#0080c0");
	SetText("","msg","("+currentObject.pos+")");
	SetText("","strEnglish",currentObject.en);
	SetText("","bt_Check","Đã nhớ");
	AllowEditText("","strEnglish", 0);
	}
	else if(i_mode == 1){
	SetColorEx("","card","#005d8d");
	SetText("","msg","Gõ từ tiếng anh:");
	SetText("","strEnglish","");
	SetText("","bt_Check","Kiểm tra");
	AllowEditText("","strEnglish", 1);
	}
	SetShowObject("","bt_Back",0);
	SetText("","strVietNamese",currentObject.vi);
	Reverse("gr_card");
}


function  AnimationObj()
{
var center = GetLeft("","card") + GetWidth("","card")/2;
transitionTo("","gr_card",200,center,-1,'{"x":0,"y":1}',0,1,10,"OpenRever()");
}

function WhenClickAndEnter()
{
if(i_mode == 0) // view
	{
		// Đang xem -> chuyển sang nhập
		i_mode = 1;
		AnimationObj();
	}
else if(i_mode == 1) 
	{
		var _strInput = GetText("","strEnglish");
		var  _str = validateInput(_strInput);
		if(_str!="")
		{
		SetText("","msg",_str);
		InvalidateObj("","");
		return false;
		}
		AllowEditText("","strEnglish",0);
		if (checkAnswer(_strInput)) {
			var s_score = scoresToText();
			SetText("","str_Score",s_score);
			UpdateScore(learned.length,s_score);
			SetText("","msg","✅ eg: " + currentObject.eg);
			SetText("","bt_Check","Câu tiếp");
		} else {
			SetText("","msg","❌ Sai mất rồi, từ đúng là: " + currentObject.en);
			SetText("","bt_Check","Bỏ qua");
			SetShowObject("","bt_Back",1);
		}
		i_mode = 2;
	}
  else if (i_mode == 2)
  {
	  currentObject = getRandomUnlearnedVocab();
	  i_mode = 0;
	 AnimationObj();
  }
else if (i_mode == 3) // xem lai khong tao cau mơi
  {
	  i_mode = 0;
	 AnimationObj();
  }
}

window.callBackGetVer = function callBackGetVer(_score,_note)
{
	if(_note != null)
	{
	s_score = _note;
    	learned = textToScores(_note);
	SetText("","str_Score",_note);
	}
	i_mode = 2;
	WhenClickAndEnter();
}
function Page_1_OnKeyDown()
{
	var key = GetKeyDown("","");
	if(key == "\r")
	{
		if (textarea) {
			 SetText("","strEnglish",textarea.value);	 
		}
		WhenClickAndEnter();
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
 width: 640,
 height: 450 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,640,450,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var header = CreText('header',1,1,638,72,"     UNIT            LOCAL COMMUNITY",'#f79323','#ffffff','#ffffff','#ffffff','',28,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#f79323','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var unit = CreText('unit',127,7,57,57,"1",'#006bcc','#ffffff','#ffffff','#ffffff','',36,'Arial Black','Bold','center','middle',2,'0.00','0','0',3,'#ffffff','#53adff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var title_ = CreText('title_',70,72,505,34,"✍️  Từ vựng – Flashcards",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var card = CreText('card',131,107,383,208,"",'#0080c0','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','10','0',1,'#666666','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var strEnglish = CreText('strEnglish',188,154,271,42,"ENGLISG",'#ffffff','#ffffff','#0000ff','#ffffff','',24,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var sound = CreText('sound',460,154,41,43,"🎧",'rgba(0,0,0,0)','#ffffff','#ffff00','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
sound.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakAI(currentObject.en);
  return;
}
 );
var msg = CreText('msg',139,203,372,60,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var strVietNamese = CreText('strVietNamese',139,118,372,30,"",'rgba(0,0,0,0)','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_Check = CreText('bt_Check',266,273,112,31,"Đã nhớ",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',2,'#c0c0c0','#ebebeb','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_Check.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
WhenClickAndEnter();
  return;
}
 );
var str_Score = CreText('str_Score',18,345,613,99,"",'rgba(0,0,0,0)','#ffffff','#009300','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_back = CreText('bt_back',388,273,112,31,"Xem lại",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',2,'#c0c0c0','#ebebeb','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_back.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
i_mode = 3;
WhenClickAndEnter();
  return;
}
 );
var Text_1 = CreText('Text_1',17,315,171,32,"Các từ đã học:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var gr_card = new Kinetic.Group({name:'gr_card',x:0,y:0,width:387,height:212});
gr_card.add(card,strEnglish,sound,msg,strVietNamese,bt_Check,bt_back);
Page_1.add(Page_1_Backrounnd,header,unit,title_,str_Score,Text_1,gr_card);
stage.add(Page_1);
InitLacVietScript();
};
