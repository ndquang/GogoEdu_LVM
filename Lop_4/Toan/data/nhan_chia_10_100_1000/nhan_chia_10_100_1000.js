folder_Resource ='/data/nhan_chia_10_100_1000';
var kq = 0;
var _trueColor = "#ffffff";
var _falseColor = "#ff0000";
var _normalColor = "#0066ff";
var _bTestAndCreat = false;
var _Diem = 0;
var _cDung = 0;
var _cSai = 0;
var tl = "";
function CreateQuestion()
{
var a = Random(999)+1;
if(Random(5)==2)
a = a * 10;

var b = 1;
var n = Random(3)+1;
for(var i =0 ; i< n ; i++)
	b=b*10;

var phep = Random(2);
if(phep == 0) //nhan
{
	var tem = Random(2);
	if(tem ==0) // tron cho vui
	{
	tem  = a;
	a= b;
	b= tem;
	}
kq = a*b;
SetText("","dot","x");
}
else // chia
{
	a= a *b;
	SetText("","dot",":");
	kq = a/b;
}
SetText("","a",a);
SetText("","b",b);
SetText("","c","");
_bTestAndCreat = false;
SetShowObject("","msg",0);
SetText("","btSubmit","Submit");	
SetShowObject("","btSubmit",1);
AllowEditText("","c",1);
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
	AllowEditText("","c",1);
	CreateQuestion();
	InvalidateObj("","");
}

function   ChamDiem()
{
	if(_bTestAndCreat)
	{
		CreateQuestion();
		return;
	}
	var tl = GetText("","c");
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
        SetText("", "msg", "❌ Sai");
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
/*----------------------------------*/
function Page_1_OnKeyDown()
{

var key = GetKeyDown("","");
	if(key == "\r")
	{
		if (textarea) {
			 SetText("","c",textarea.value);	 
		}
		ChamDiem();
	}
}
function Page_1()
{
SetShowObject("","btSubmit",0);	
SetBorder("","c","#0000ff",1);
SetDigitEditText("","c","number");
SetMoveView("","msg",1);	
GetVer("callBackGetVer");
  return;
}
function Page_1_OnTimer()
{
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
 width: 650,
 height: 400 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,650,400,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var Text_3 = CreText('Text_3',-1,-1,654,73,"Nhân với 10, 100, 1000. ...\r\nChia cho 10, 100, 1000, ...",'#0080c0','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var a = CreText('a',95,128,117,33,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var b = CreText('b',251,128,90,33,"135°",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c = CreText('c',377,128,121,33,"90°",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var btSubmit = CreText('btSubmit',391,304,147,35,"OK",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','10','0',1,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
btSubmit.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if(_bTestAndCreat)
CreateQuestion();
else
ChamDiem();
  return;
}
 );
var dot = CreText('dot',218,128,36,33,"x",'rgba(0,0,0,0)','#800080','#000000','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',338,128,36,33,"=",'rgba(0,0,0,0)','#800080','#000000','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',81,166,496,88,"good job",'rgba(0,0,0,0)','#ffffff','#80ff00','#ffffff','',36,'Arial','Bold Italic','center','middle',12,'0.00','2','2',0,'rgba(0,0,0,0)','rgba(0,128,192,0.89)','0','0','#000000','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("","msg",0);
	InvalidateObj("","");

  return;
}
 );
var cau_dung = CreText('cau_dung',493,57,30,30,"",'#ffffff','#c0c0c0','#009300','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#009300','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_sai = CreText('cau_sai',547,57,30,30,"",'#ffffff','#c0c0c0','#ff0000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#ff0000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var diem = CreText('diem',601,55,30,30,"",'#ffffff','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,Text_3,a,b,c,btSubmit,dot,Text_1,msg,cau_dung,cau_sai,diem);
stage.add(Page_1);
InitLacVietScript();
};
