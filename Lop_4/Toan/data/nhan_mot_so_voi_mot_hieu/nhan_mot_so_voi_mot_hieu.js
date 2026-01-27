folder_Resource ='/data/nhan_mot_so_voi_mot_hieu';
var kq = "";
var _trueColor = "#ffffff";
var _falseColor = "#ff0000";
var _normalColor = "#0066ff";
var _bTestAndCreat = false;
var _Diem = 0;
var _cDung = 0;
var _cSai = 0;

function  CreateQuestion()
{
	var so1 = Random(200) +10;
	var so2 = (Random(9)+1)*10; 
	var soLon =  Random(100-so2) + so2;         
	var soBe =  soLon -  so2;     

	var str2 =  so1 + " x " + soLon + " - " + so1 + " x " + soBe + " = ";
            kq = so1*so2;
	   SetText("","_cauhoi", str2 );
	
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
SetDigitEditText("","_kq","number");
SetMoveView("","msg",1);	
GetVer("callBackGetVer");
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
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,640,340,'','#ffe4e1','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffe4e1','0','0','0','','0','0','0','0',0,0,'');
var _cauhoi = CreText('_cauhoi',5,75,348,40,"145 x 2 + 145 x 98 = ",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',24,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#e6e6fa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _kq = CreText('_kq',356,75,121,40,"44",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',24,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var btSubmit = CreText('btSubmit',480,76,100,38,"Đồng ý",'#ffffff','#ffffff','#000000','#ffffff','',24,'Arial','Italic','center','middle',3,'0.00','5','0',1,'#7f7f7f','#c0c0c0','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
btSubmit.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChamDiem();
  return;
}
 );
var Text_1 = CreText('Text_1',1,0,639,37,"Áp dụng tính chất nhân một số với một hiệu để tính",'#ffc0cb','#ffffff','#000000','#ffffff','',24,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#282828','#ffc0cb','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',80,140,513,88,"good job",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Bold Italic','center','middle',11,'0.00','10','0',1,'#7f7f7f','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateQuestion();
  return;
}
 );
var cau_dung = CreText('cau_dung',267,300,30,30,"",'#ffffff','#c0c0c0','#009300','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#009300','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_sai = CreText('cau_sai',310,299,30,30,"",'#ffffff','#c0c0c0','#ff0000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#ff0000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var diem = CreText('diem',352,301,30,30,"",'#ffffff','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,_cauhoi,_kq,btSubmit,Text_1,msg,cau_dung,cau_sai,diem);
stage.add(Page_1);
InitLacVietScript();
};
