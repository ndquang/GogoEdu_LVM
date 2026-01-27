folder_Resource ='/data/bai_toan_chia_cho_so_co_mot_chu_so';
var lstQuestion = ["",""];
var kq = "";
var cntQst = 0;
var _Diem = 0;
var _cDung = 0;
var _cSai = 0;
var _textSpeak="";
var _index = 0;
var lang = "VN";
var _trueColor = "#9dfd14";
var _falseColor = "#ff0000";
var _normalColor = "#0066ff";
var _bTestAndCreat = false;

function  CreateQuestion()
{
      if(_index==cntQst+1)
	{
		SetFontColor("","msg","#F7DC6F");		
		SetText("","msg","Bạn đã hoàn thành bài học này, "+ _Diem + " điểm.");
		SetShowObject("","msg",1);
		InvalidateObj("","");
		return;
	}
       var strCh = lstQuestion[_index];
       var arrayRes = ["","",""];
       arrayRes = strCh .split("|");
       if( Length(arrayRes)>2)
	   {
		 var ch = arrayRes[0];
		 SetText("","_cauhoi",ch);
		 kq  = arrayRes[1];
		var dv = arrayRes[2];
		 SetText("","_dv",dv);
		 _textSpeak = ch;	
	 SetText("","_kq","");
	  AllowEditText("","_kq",1);
	SetShowObject("","msg",0);	
	_bTestAndCreat= false;
             InvalidateObj("","");		
	   }	
}

function  ChamDiem()
{
	var _input = GetText("","_kq");
if(_input=="")
{
 SetText("", "msg", "Bạn chưa nhập kết quả");
SetShowObject("","msg",1);
InvalidateObj("","");
return;
}
		if(_bTestAndCreat)
{
CreateQuestion();
return;
}
	if(_input==kq){
		_cDung++;
        		SetFontColor("", "msg", _trueColor);
       		 SetText("", "msg", "✔   Đúng");
		PlaySound("sound_good");
		
		}
	else{
			_cSai++;
			SetFontColor("","msg",_falseColor);
			PlaySound("sound_bad");
			SetFontColor("", "msg", _falseColor);
		SetText("","msg","Không chính xác: "+kq);
	}
	_index++;
	  _Diem = _cDung - _cSai;
    	SetText("","cau_dung",_cDung);
    	SetText("","cau_sai",_cSai);
    	SetText("","diem",_Diem);
   	UpdateScore(_Diem,_cDung+"|"+_cSai);	
	_bTestAndCreat= true;
	SetText("","btSubmit","Next");	
	SetShowObject("","msg",1);
	InvalidateObj("","");
}

function  GetDataText()
{
//var s_content = $("#idContent").text().trim();
 var s_content ="";
if(lang=="VN")
 s_content = GetTextFromID("ID_TEXT_VN");
else 
  s_content = GetTextFromID("ID_TEXT_EN");
lstQuestion = s_content.match(/[^\r\n]+/g);
cntQst = Length(lstQuestion );
SetDigitEditText("","_kq","number");
CreateQuestion();
InvalidateObj("","");
  return;
}

window.callBackGetVer = function callBackGetVer(_score,_note)
{
	if (_note != "undefined" &&  typeof _score != "undefined" && _note !== null && _note !== "" && _note !== 0)
	{
		_Diem = _score
		let arrNote= _note.split("|");
		_cDung = arrNote[0];
		_cSai = arrNote[1];
	}
	SetText("","cau_dung",_cDung);
    	SetText("","cau_sai",_cSai);
   	SetText("","diem",_Diem);
	SetShowObject("","msg",0);
}

function Page_1_OnKeyDown()
{

var key = GetKeyDown("","");
	if(key == "\r")
	{
		if (textarea) {
			 SetText("","_kq",textarea.value);	 
		}
		ChamDiem();
	}

}


function Page_1()
{
GetVer("callBackGetVer");
GetDataText();
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
 width: 600,
 height: 400 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,600,400,'','#008080','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#008080','0','0','0','','0','0','0','0',0,0,'');
var _dv = CreText('_dv',355,207,185,41,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',24,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',0,-1,599,64,"Bài toán: Chia cho số có một chữ số",'#006464','#ffffff','#fcc82c','#ffffff','',26,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#ffffff','#006464','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _cauhoi = CreText('_cauhoi',22,89,564,117,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',24,'Arial','Normal','left','bottom',0,'0.00','0','0',0,'rgba(0,0,0,0)','#e6e6fa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _kq = CreText('_kq',175,208,172,42,"44",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',24,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffd700','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var btSubmit = CreText('btSubmit',228,331,128,50,"Đồng ý",'#80ff00','#ffffff','#000000','#ffffff','',24,'Arial','Italic','center','middle',3,'0.00','5','0',1,'#7f7f7f','#80ff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
btSubmit.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChamDiem();
  return;
}
 );
var msg = CreText('msg',37,260,513,69,"good job",'rgba(255,255,255,1.02)','#ffffff','#000000','#ffffff','',28,'Arial','Bold Italic','center','middle',11,'0.00','10','0',1,'#ffffff','rgba(255,255,255,1.02)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("","",0);
InvalidateObj("","");		
  return;
}
 );
var sound = CreText('sound',535,3,65,56,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
sound.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(_textSpeak,lang);
  return;
}
 );
var Text_2 = CreText('Text_2',514,348,84,50,"EN",'rgba(0,0,0,0)','#ffffff','#ff0000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if(lang=="VN")
{
     lang = "EN";
     SetText("","","VN");
}
else
{
 lang = "VN";
     SetText("","","EN");
}
GetDataText();
  return;
}
 );
var cau_dung = CreText('cau_dung',442,48,30,30,"",'#ffffff','#c0c0c0','#009300','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#009300','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_sai = CreText('cau_sai',485,47,30,30,"",'#ffffff','#c0c0c0','#ff0000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#ff0000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var diem = CreText('diem',527,49,30,30,"",'#ffffff','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,_dv,Text_1,_cauhoi,_kq,btSubmit,msg,sound,Text_2,cau_dung,cau_sai,diem);
stage.add(Page_1);
InitLacVietScript();
};
