folder_Resource ='/data/nhan_mot_so_voi_11';
var kq = "";
var _Diem = 0;
var _cDung = 0;
var _cSai = 0;
var _trueColor = "#00cc00";
var _falseColor = "#ff0000";
var _normalColor = "#0066ff";
var _bTestAndCreat = false;

function  CreateQuestion()
{
	var so1 = Random(90) +10;	
	var str2 =  so1 + " x " + 11 + " = ";
            kq = so1*11;
	   SetText("","_cauhoi", str2 );	
	 SetText("","_kq","");
	SetText("","btSubmit","OK");	
	  AllowEditText("","_kq",1);
	SetShowObject("","msg",0);	
	_bTestAndCreat = false;
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
	CreateQuestion();
}


function  ChamDiem()
{
	if(_bTestAndCreat)
{
CreateQuestion();
return;
}
	AllowEditText("","_kq",0);
	if(GetText("","_kq")==kq){
			_cDung++;
        		SetFontColor("", "msg", _trueColor);
       		 SetText("", "msg", "✔  Đúng");
        		PlaySound("sound_good");
		}
	else{
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
	_bTestAndCreat = true;
	SetText("","btSubmit","Next");	
	SetShowObject("","msg",1);
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
  return;
}
function Page_1()
{
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
 width: 540,
 height: 340 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,540,340,'','#804000','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#804000','0','0','0','','0','0','0','0',0,0,'');
var _cauhoi = CreText('_cauhoi',5,112,255,41,"72 x 11  = ",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',36,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#e6e6fa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _kq = CreText('_kq',272,112,149,41,"44",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',36,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var btSubmit = CreText('btSubmit',428,111,106,41,"Đồng ý",'#c0c0c0','#ffffff','#000000','#ffffff','',24,'Arial','Italic','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
btSubmit.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChamDiem();
  return;
}
 );
var Text_1 = CreText('Text_1',0,0,540,50,"Nhân nhẩm số có hai chữ số với 11",'#663300','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#663300','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',57,153,452,88,"good job",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Bold Italic','center','middle',11,'0.00','10','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateQuestion();
  return;
}
 );
var cau_dung = CreText('cau_dung',411,35,30,30,"",'#ffffff','#c0c0c0','#009300','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#009300','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_sai = CreText('cau_sai',454,34,30,30,"",'#ffffff','#c0c0c0','#ff0000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#ff0000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var diem = CreText('diem',496,36,30,30,"",'#ffffff','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,_cauhoi,_kq,btSubmit,Text_1,msg,cau_dung,cau_sai,diem);
stage.add(Page_1);
InitLacVietScript();
};
