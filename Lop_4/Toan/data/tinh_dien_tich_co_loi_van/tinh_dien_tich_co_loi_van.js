folder_Resource ='/data/tinh_dien_tich_co_loi_van';
var kq = "";
var _trueColor = "#ffffff";
var _falseColor = "#ff0000";
var _normalColor = "#0066ff";
var _bTestAndCreat = false;
var _Diem = 0;
var _cDung = 0;
var _cSai = 0;
var _textSpeak="";
var  _cauhoi ="";
function  CreateQuestion()
{
	kq = Random(97)+3;
	var canhviengach = (Random(9)+1)*10;         
	while((kq*canhviengach)%100!=0)
	{
		kq = Random(97)+3;
		canhviengach = (Random(9)+1)*10;
	}
	var S = kq*canhviengach/100;
	var str1 = replaceStr(_cauhoi,"...",S,0,1);
	var str2 = replaceStr(str1 ,"...",canhviengach,0,1);
	_textSpeak = str2;
	SetText("","lbQuetion", _textSpeak);
	Speak(_textSpeak,"VN");
	SetText("","_kq","");
	SetText("","btSubmit","OK");	
	AllowEditText("","_kq",1);
	SetShowObject("","msg",0);	
	_bTestAndCreat = false;
    InvalidateObj("","");
}
function  ChamDiem()
{
	if(_bTestAndCreat)
	{
		CreateQuestion();
		return;
	}
	var tl = GetText("","_kq");
if(tl=="")
	{
		SetText("", "msg", "Bạn chưa nhập câu trả lời.");
		SetShowObject("","msg",1);
		InvalidateObj("","");
		return;
	}
	if(tl==kq)
	{
		   _cDung++;
        SetFontColor("", "msg", _trueColor);
        SetText("", "msg", "✔  Đúng");
        PlaySound("sound_good");

	}
	else
	{
	  SetFontColor("", "msg", _falseColor);
        PlaySound("sound_bad");
        SetText("", "msg", "❌ Sai → " + kq);
            _cSai++;

	}
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
	AllowEditText("","_kq",1);
	CreateQuestion();
	InvalidateObj("","");
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
 _cauhoi = GetTextFromID("ID_TEXT_DATA");
SetDigitEditText("","_kq","number");
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
 height: 340 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,640,340,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var lbQuetion = CreText('lbQuetion',1,1,638,94,"Để lát nền một căn phòng có diện tích là ...m² ta cần bao nhiên viên gạch hình vuông có cạnh là ... cm, biết diện tích phần mạch vữa không đáng kể?\r\n",'#0080c0','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#000000','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',5,1.50);
lbQuetion.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(_textSpeak,"VN");
  return;
}
 );
var _kq = CreText('_kq',192,119,203,50,"44",'#ffffff','#ffffff','#000000','#ffffff','',36,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',130,199,434,88,"good job",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Bold Italic','center','middle',11,'0.00','10','0',1,'#7f7f7f','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("","",0);
InvalidateObj("","");
  return;
}
 );
var btSubmit = CreText('btSubmit',398,119,128,50,"Đồng ý",'#c0c0c0','#ffffff','#000000','#ffffff','',24,'Arial','Italic','center','middle',3,'0.00','5','0',1,'#000000','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
btSubmit.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChamDiem();
  return;
}
 );
var cau_dung = CreText('cau_dung',502,80,30,30,"",'#ffffff','#c0c0c0','#009300','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#009300','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_sai = CreText('cau_sai',550,80,30,30,"",'#ffffff','#c0c0c0','#ff0000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#ff0000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var diem = CreText('diem',598,78,30,30,"",'#ffffff','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,lbQuetion,_kq,msg,btSubmit,cau_dung,cau_sai,diem);
stage.add(Page_1);
InitLacVietScript();
};
