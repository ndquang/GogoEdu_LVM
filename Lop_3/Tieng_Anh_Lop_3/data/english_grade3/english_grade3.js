folder_Resource ='/data/english_grade3';
var bReading = false;
var bWriting = false;
var bRecording = false;
var valueRate=0.8;
var indexSpeak=0;
var iTypeWork = 0; // 0 init, 1 listen; 2 write, 3 read
var curentDiem =0;

function  ShowHideUI( str_msg,  show) {
    SetText("", "msg", str_msg);
    SetShowObject("", "en_2", show);
    SetShowObject("", "vn_2", show);
    SetShowObject("", "check_2", show);
   }

function UpdateUI(str_msg)
{
	let _t = getIndex();
    let _p = "";
	if(iTypeWork === 1)
	{
		ShowHideUI(str_msg,1);
	}
    else if (iTypeWork === 2) {
        _p = scoresWrite[indexSpeak];
		ShowHideUI(str_msg,0);
		    }
	else if (iTypeWork === 3) {
        _p = scoresRead[indexSpeak];
		ShowHideUI(str_msg,1);
		    }
    // Chỉ hiển thị điểm khi _p > 0
    let scoreText = (_p > 0) ? ` → ${_p} %` : "";
    let _cau = `Question ${_t}${scoreText}`;
    SetText("", "score", _cau);
	InvalidateObj("", "");
}

let scoresWrite = Array(lessonObject.conversation.length).fill(null);
let scoresRead = Array(lessonObject.conversation.length).fill(null);
var voiceConfig = lessonObject.voice_config;
function Score2Text() {
  var scoresData = {write: scoresWrite,read: scoresRead};
  return JSON.stringify(scoresData);
}

function Text2Score(saved) {
 if (saved) 
 {
    var data = JSON.parse(saved);
    scoresWrite = data.write ?? [];
    scoresRead  = data.read  ?? [];
 }
}

function calculateTotalScore(scores) {
    var total = scores.reduce(
        (sum, s) => sum + (s ?? 0),+
        0
    );
    return Math.ceil(total / scores.length);
}

function getProgress(scores) {
	if (!Array.isArray(scores)) {
        return `0`;
    }
    var done = scores.filter(s => s !== null).length;
    return `${done}`;
}

function getIndex() {
    return `${indexSpeak+1}/${lessonObject.conversation.length}`;
}

function UpdatePoint() {
    let pointWrite = calculateTotalScore(scoresWrite);
	let pointRead =  calculateTotalScore(scoresRead);
	let strMessage = `Writing: ${pointWrite} points (${getProgress(scoresWrite)} questions) | Reading: ${pointRead} points (${getProgress(scoresRead)} questions)`;
	SetText("","total_score",strMessage);
	let sumScore = pointWrite+pointRead;
	if(sumScore>curentDiem)
	{
		UpdateScore(pointWrite+pointRead ,strMessage, true);
		let _strScore = Score2Text();
		SaveLesson(_strScore);
		curentDiem = sumScore;
	}
}

var recognizer = new SpeechRecognizer({ lang: "en-US",  timeout: 8000});
recognizer.onResult((text) => {
	SetText("", "en_2", text);
    InvalidateObj("", "");
});

recognizer.onEnd((finalText) => {
    
	SetText("","check_2","🗣️");
	var result = similarity(finalText, GetText("", "en_1"));
    scoresRead[indexSpeak] = result.score;
	UpdatePoint();
	if(!result?.wrongWords?.length)
	UpdateUI("Excellent job!👏");
	else
	UpdateUI("❌ Incorrect words: "+result.wrongWords);
            bRecording = false;
	PlaySound("ID_SOUND_ALERT");
});

recognizer.onError((err) => {
    console.warn("Speech error:", err);
});

function StartStopRecord()
{
	if(!bRecording)
	{
	recognizer.start();
	SetText("","check_2","🔴");
	PlaySound("ID_SOUND_END_RECORD");
	SetText("","en_2","");
	SetText("","vn_2","");
	}
	else
	{
		recognizer.stop();
	}
	bRecording = !bRecording;
	InvalidateObj("", "");
}

function similarity(expectedText, studentText) {

    var normalize = (text) =>
        text
            .toLowerCase()
            .replace(/[.,!?]/g, "")
            .replace(/\s+/g, " ")
            .trim();

    var expectedWords = normalize(expectedText).split(" ");
    var studentWords  = normalize(studentText).split(" ");

    let correct = 0;
    var wrongWords = [];

    var minLen = Math.min(expectedWords.length, studentWords.length);

    // So sánh theo vị trí
    for (let i = 0; i < minLen; i++) {
        if (expectedWords[i] === studentWords[i]) {
            correct++;
        } else {
            wrongWords.push(expectedWords[i]);
        }
    }

    // Nếu thiếu từ
    if (studentWords.length < expectedWords.length) {
        for (let i = studentWords.length; i < expectedWords.length; i++) {
            wrongWords.push(expectedWords[i]);
        }
    }

  var score = Math.round(
      (correct / expectedWords.length) * 100
  );

    return {
        score,        // % điểm
        wrongWords    // danh sách từ sai / thiếu
    };
}

window.callBackGetVer = function callBackGetVer(_score,_note)
{
	if(_note != null)
	{
	SetText("","total_score",_note);
	InvalidateObj("","");
	}
}
window.callBackLoadLesson = function callBackLoadLesson(_note)
{
	if(_note)
	{
	Text2Score(_note);
	let pointWrite = calculateTotalScore(scoresWrite);
	let pointRead =  calculateTotalScore(scoresRead);
	curentDiem = pointWrite + pointRead;
	}
}

function  UpdateColorBtn()
{
	for(var i =1;i<4;i++)
	{
		if(i==iTypeWork)
			SetFontColor("","_"+i,"#F54927");
		else
			SetFontColor("","_"+i,"#00C8C8");
	}
}
function  EmtryText()
{
	SetText("","en_1","");
	SetText("","en_2","");
	SetText("","vn_1","");
	SetText("","vn_2","");
}

function  KhoiTao(){
	
	SetMoveView("","btSlide","sliderRect");	
	SetText("","title",lessonObject.title);
	SetText("","unit",lessonObject.unit);
	GetVer("callBackGetVer");
	LoadLesson("callBackLoadLesson");
	EmtryText();
	iTypeWork  =1;
}

function  DocNamNu()
{
	let textEN =lessonObject.conversation[indexSpeak].en;
	let textVN =lessonObject.conversation[indexSpeak].vn;
	let speaker = lessonObject.conversation[indexSpeak].speaker;
	var speakerVoice = voiceConfig[speaker];
	var gender = speakerVoice ? speakerVoice.gender : "EN";
	SetText("","btPlay","⏸");
	if(iTypeWork == 1) // read
	{
		bReading = true;
		if (indexSpeak % 2 == 0) 
		{
			SetText("","en_1",textEN );
			SetText("","vn_1",textVN);
			SetText("","check_1",speaker);
			SetText("","check_2","");
			SetText("","en_2","");
			SetText("","vn_2","");
			Speak(textEN, gender, `{"pitch": 1, "rate": ${valueRate}, "onend": "EndCallbackSpeak"}`);
		}
		else
		{
			SetText("","en_2",textEN );
			SetText("","vn_2",textVN);
			SetText("","check_2",speaker);
			Speak(textEN , gender, `{"pitch": 1, "rate": ${valueRate}, "onend": "EndCallbackSpeak"}`);
			
		}
		UpdateUI("🎧 Listen to the conversation.");
	}
	else if(iTypeWork == 2) // write
	{
		bWriting = true;
		EmtryText();
		Speak(textEN, gender, `{"pitch": 1, "rate": ${valueRate}, "onend": "EndCallbackSpeak"}`);
		UpdateUI("⌨️ Listen and type the sentence.");
	}
	else if(iTypeWork == 3) // write
	{
		SetText("","en_1",textEN );
		SetText("","vn_1",textVN);
		SetText("","check_1",speaker);
		SetText("","en_2","");
		SetText("","vn_2","");
		Speak(textEN, gender, `{"pitch": 1, "rate": ${valueRate}, "onend": "EndCallbackSpeak"}`);
		UpdateUI("🎤 Listen & Repeat");
	}
}

function  NextClick()
{
	indexSpeak++;
	if(indexSpeak>=lessonObject.conversation.length)
		indexSpeak = lessonObject.conversation.length-1;
	DocNamNu();
}

function  PrevClick()
{
	indexSpeak--;
	if(indexSpeak<0)
	indexSpeak = 0;
	DocNamNu();
}

function  InitReading()
{

if(bRecording){
recognizer.stop();
}

iTypeWork  = 1;
UpdateColorBtn();
StopSound();
EmtryText();
SetText("","score", "");
indexSpeak = 0;
bReading = false;
PlaySound("ID_SOUND_START");
DocNamNu();
}
//
function  EndCallbackSpeak()
{
	SetText("","btPlay","🔊");
	if(iTypeWork ==1)
	{
		indexSpeak++;
		if(bReading == false ||  indexSpeak >= lessonObject.conversation.length)
		{
			indexSpeak = lessonObject.conversation.length-1;
			bReading = false;
		}
		else
		DocNamNu();
	}
	else if(iTypeWork ==2)
	{
		SetText("","btPlay","🔊");
	}
	else if(iTypeWork ==3)
	{
		StartStopRecord();
	}
	InvalidateObj("", "");
}

function  InitWrite()
{
KhoiTao();
iTypeWork  = 2;
UpdateColorBtn();
indexSpeak= 0;
AllowEditText("","en_1",1);
bWriting = true;
if(bRecording){
recognizer.stop();
}
PlaySound("ID_SOUND_KEY_TYPE");
DocNamNu();
}

function  CheckWrite()
{
 if(bWriting)
 {
	 var studentInput = GetText("","en_1");
	 if(!studentInput)
	 {
		 SetText("","msg", "Vui lòng không để trống.");
		 InvalidateObj("","");
		 return;
	 }
	let expectedText = lessonObject.conversation[indexSpeak].en;
	var result = similarity(expectedText ,studentInput);
	if(scoresWrite[indexSpeak]==null || scoresWrite[indexSpeak]<result.score)
	{
		scoresWrite[indexSpeak] = result.score;
		UpdatePoint();
	}
	if(!result?.wrongWords?.length)
	UpdateUI("Excellent job!👏");
	else
	UpdateUI("❌ Incorrect words: "+result.wrongWords);
	PlaySound("ID_SOUND_ALERT");
	bWriting = false;
 }
 else
 {
	 NextClick();
 }
 InvalidateObj("","");
}

// Recording 
function  InitRecord()
{
iTypeWork  = 3;
UpdateColorBtn();
indexSpeak= 0;
StopSound();
SetText("","score", "" );
SetText("","msg", "🎤 Listen & Repeat");
SetText("","check_2","🗣️");
SetText("","en_2","");
AllowEditText("","en_1",0);
bRecording = false;
DocNamNu();
}
function Page_1_OnKeyDown()
{
	var key = GetKeyDown("","");
	if(key == "\r" && iTypeWork==2)
	{
		if (textarea) {
			 SetText("","en_1",textarea.value);	 
		}
		CheckWrite();
	}
}
function Page_1()
{
KhoiTao();
InitReading();
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
 width: 500,
 height: 480 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,500,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var vn_2 = CreText('vn_2',79,265,406,43,"",'rgba(0,0,0,0)','#ffffff','#c0c0c0','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var vn_1 = CreText('vn_1',78,176,407,35,"",'rgba(0,0,0,0)','#ffffff','#c0c0c0','#ffffff','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var sliderRect = CreText('sliderRect',195,461,136,17,"Slow                           Fast",'#c0ffff','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#009393','4','1','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _3 = CreText('_3',333,70,118,36,"Speak  ",'rgba(0,0,0,0)','#ffffff','#00c8c8','#ffffff','',22,'Segoe UI Black','Normal','center','middle',11,'0.00','10','0',1,'#00c8c8','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitRecord();
  return;
}
 );
var _2 = CreText('_2',202,70,118,36,"Write  ",'rgba(0,0,0,0)','#ffffff','#00c8c8','#ffffff','',22,'Segoe UI Black','Normal','center','middle',11,'0.00','10','0',1,'#00c8c8','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitWrite();
}
 );
var _1 = CreText('_1',71,70,118,36,"Listen  ",'rgba(0,0,0,0)','#ffffff','#00c8c8','#ffffff','',22,'Segoe UI Black','Normal','center','middle',11,'0.00','10','0',1,'#00c8c8','#00c8c8','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitReading();
}

 );
var btSlide = CreText('btSlide',257,461,18,17,"|",'#c0c0c0','#ffffff','#ff0000','#ffffff','',14,'Arial','Normal','center','bottom',0,'0.00','1','1',1,'#c0c0c0','#f4f4f4','4','1','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
btSlide.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var wCenterBt = GetWidth("", "") / 2;
var leftSlide = GetLeft("", "sliderRect") + wCenterBt;
var posRect = GetLeft("", "") + wCenterBt - leftSlide;
valueRate = posRect * 1.5 / (GetWidth("", "sliderRect") - wCenterBt*2);
  return;
}
 );
var Text_5 = CreText('Text_5',-3,1,71,54,"Unit",'rgba(0,0,0,0)','#ffffff','#00c8c8','#ffffff','',18,'Showcard Gothic','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#00c8c8','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_1 = CreText('check_1',23,122,57,49,"Ami",'rgba(0,0,0,0)','#ffffff','#00c8c8','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#00c8c8','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if(iTypeWork==2)
{
    CheckWrite();
}
}
 );
var check_2 = CreText('check_2',23,214,56,49,"Ben",'rgba(0,0,0,0)','#ffffff','#00c8c8','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#00c8c8','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if(iTypeWork==3)
{
StartStopRecord();
}
}

 );
var title = CreText('title',86,1,392,54,"Hello",'#ffffff','#ffffff','#ff6820','#ffffff','',36,'Segoe UI Black','Bold','center','middle',12,'0.00','0','2',2,'#00c8c8','#ffffff','0','0','#7f7f7f','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
title.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
var unit = CreText('unit',58,1,55,54,"1",'#00c8c8','#ffffff','#ffffff','#ffffff','',36,'Showcard Gothic','Bold','center','middle',2,'0.00','0','0',0,'rgba(0,0,0,0)','#00c8c8','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',26,325,459,99,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#00c8c8','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var score = CreText('score',118,311,275,28,"",'#ffffff','#ffffff','#00c8c8','#ffffff','',12,'Arial','Bold','center','middle',12,'0.00','2','2',1,'#00c8c8','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_next = CreText('bt_next',334,311,27,28,"▶",'rgba(0,0,0,0)','#ffffff','#00c8c8','#00c8c8','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','#000000','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bt_next.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextClick();
  return;
}
 );
var bt_pre = CreText('bt_pre',137,311,27,28,"◀",'rgba(0,0,0,0)','#ffffff','#00c8c8','#00c8c8','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','#282828','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bt_pre.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevClick()
  return;
}
 );
var btPlay = CreText('btPlay',53,303,41,41,"🎧",'#ffffff','#ffffff','#e6e6fa','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#00c8c8','#ffffff','0','0','#282828','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
btPlay.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if(bReading == false)
DocNamNu();
else
{
bReading = false;
Stop("","");
SetText("","btPlay","🔊");
InvalidateObj("","");
}
  return;
}
 );
var total_score = CreText('total_score',26,425,458,31,"",'rgba(0,0,0,0)','#ffffff','#00c8c8','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var en_1 = CreText('en_1',80,122,405,49,"characters 1",'#ffffff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#00c8c8','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var en_2 = CreText('en_2',79,214,406,49,"characters 2",'#ffffff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#00c8c8','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,vn_2,vn_1,sliderRect,_3,_2,_1,btSlide,Text_5,check_1,check_2,title,unit,msg,score,bt_next,bt_pre,btPlay,total_score,en_1,en_2);
stage.add(Page_1);
InitLacVietScript();
};
