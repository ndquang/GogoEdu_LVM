folder_Resource ='/data/chia_mot_tong_cho_mot_so';
var kq = 0;
var _trueColor = "#9dfd14";
var _falseColor = "#ff0000";
var _normalColor = "#0066ff";
var _bTestAndCreat = false;
var _Diem = 0;
var _cDung = 0;
var _cSai = 0;

function  CreateQuestion()
{
var sochia = Random(10)+1;

var sobichia1 = (Random(10)+1)*sochia ;
var sobichia2 = (Random(10)+1)*sochia;

var th = Random(2);
var text = "";
if(th == 0 ) 
	{
	text  = "(" + sobichia1 + " + " + sobichia2 + ") : " + sochia + " =";
	kq = (sobichia1 + sobichia2)/sochia ;
	}
else
{ 
       if(sobichia1 < sobichia2 )
	{
		var tem = sobichia1;
		sobichia1 = sobichia2;
		sobichia2 = tem ;
	}
	text  = "(" + sobichia1 + " - "  +  sobichia2 + ") : " + sochia + " =";	
	kq = (sobichia1 - sobichia2)/sochia ;

}
SetText("","ch",text  );
SetText("","input","");
_bTestAndCreat = false;
SetShowObject("","msg",0);	
SetShowObject("","btSubmit",1);		
SetText("","btSubmit","Submit");	       
AllowEditText("","input",1);
InvalidateObj("","");
  return;
}

function   ChamDiem()
{
	if(_bTestAndCreat)
{
CreateQuestion();
return;
}
	var tl = GetText("","input");
	if(tl==="")
	{
		SetText("", "msg", "Bạn chưa nhập kết quả");
		SetShowObject("","msg",1);
	InvalidateObj("","");
		return;
	}
	if(GetText("","input")==kq)
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

function Page_1_OnKeyDown()
{

var key = GetKeyDown("","");
	if(key == "\r")
	{
		if (textarea) {
			 SetText("","input",textarea.value);	 
		}
		ChamDiem();
	}
  return;
}
function Page_1()
{
SetShowObject("","btSubmit",0);	
AllowEditText("","input",1);
SetDigitEditText("","input","number");
SetMoveView("","msg",1);
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
 width: 450,
 height: 320 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,450,320,'','#008040','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#008040','0','0','0','','0','0','0','0',0,0,'');
var Text_3 = CreText('Text_3',-1,-1,452,60,"Chia một tổng, hiệu cho một số",'#006a35','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#006a35','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ch_0 = CreText('ch_0',84,169,87,36,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ch = CreText('ch',3,106,284,56,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',36,'Arial','Normal','right','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var input = CreText('input',299,105,111,56,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',36,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var btSubmit = CreText('btSubmit',170,193,113,35,"OK",'#c0c0c0','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','10','0',1,'#ffffff','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var msg = CreText('msg',50,245,362,50,"good job",'#ffffff','#ffffff','#80ff00','#ffffff','',24,'Arial','Bold Italic','center','middle',12,'0.00','2','2',0,'rgba(0,0,0,0)','#ffffff','0','0','#e6e6fa','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("","",0);
InvalidateObj("","");
  return;
}
 );
var cau_dung = CreText('cau_dung',323,44,30,30,"",'#ffffff','#c0c0c0','#009300','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#009300','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_sai = CreText('cau_sai',366,43,30,30,"",'#ffffff','#c0c0c0','#ff0000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#ff0000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var diem = CreText('diem',408,45,30,30,"",'#ffffff','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,Text_3,ch_0,ch,input,btSubmit,msg,cau_dung,cau_sai,diem);
stage.add(Page_1);
InitLacVietScript();
};
