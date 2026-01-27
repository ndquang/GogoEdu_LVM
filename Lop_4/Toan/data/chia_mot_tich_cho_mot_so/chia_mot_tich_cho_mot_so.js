folder_Resource ='/data/chia_mot_tich_cho_mot_so';
var _trueColor = "#9dfd14";
var _falseColor = "#ff0000";
var _normalColor = "#0066ff";
var _bTestAndCreat = false;
var _score = 0;
var _cSubmit = 0;
var a_input=["",""];
var _Diem = 0;
var _cDung = 0;
var _cSai = 0;

function CreateQuestion()
{

var sochia = Random(9)+1;
var sbc1 = (Random(9)+1)*sochia ;
var sbc2 = Random(9)+1;

var tem = Random(2);
if(tem ==0)
{
	tem  = sbc1 ;
	sbc1 = sbc2;
	sbc2  = tem; 
}

 a_input[0] = (sbc1*sbc2)/sochia;


SetText("","ch", " ( " + sbc1+ " x " + sbc2   + " ) " +" : " + sochia + " = ");
SetFontColor("","in_0","#ffffff");
		
		SetText("","in_0","");

_bTestAndCreat = false;
SetShowObject("","msg",0);	
SetShowObject("","btSubmit",1);		
SetText("","btSubmit","Submit");	       
AllowEditText("","in_0",1);
InvalidateObj("","");
  return;
}


function   ChamDiem()
{
	var _input = GetText("","in_0");
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

	if(_input== a_input[0])
	{
			_cDung++;
        		SetFontColor("", "msg", _trueColor);
       		 SetText("", "msg", "✔   Đúng");
		PlaySound("sound_good");


	}
	else
	{
			_cSai++;
			SetFontColor("","msg",_falseColor);
			PlaySound("sound_bad");
			SetFontColor("", "msg", _falseColor);
			SetText("","msg","Không chính xác: "+a_input[0]);

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
			 SetText("","in_0",textarea.value);	 
		}
		ChamDiem();
	}

}

function Page_1()
{
SetDigitEditText("","in_0","number");
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
 width: 450,
 height: 320 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,450,320,'','#ce6700','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ce6700','0','0','0','','0','0','0','0',0,0,'');
var Text_3 = CreText('Text_3',1,0,449,60,"Tính giá trị của biểu thức",'#804000','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#804000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ch = CreText('ch',69,104,236,39,"90 : 8 = ",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','right','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_0 = CreText('in_0',315,104,71,39,"99",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var btSubmit = CreText('btSubmit',175,255,105,37,"OK",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','10','0',1,'#ffffff','#c0c0c0','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var msg = CreText('msg',78,184,340,55,"good job",'rgba(0,0,0,0)','#ffffff','#80ff00','#ffffff','',22,'Arial','Normal','center','middle',12,'0.00','2','2',1,'#ffffff','rgba(128,64,0,1.02)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("","",0);
InvalidateObj("","");
  return;
}
 );
var cau_dung = CreText('cau_dung',317,45,30,30,"",'#ffffff','#c0c0c0','#009300','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#009300','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_sai = CreText('cau_sai',360,44,30,30,"",'#ffffff','#c0c0c0','#ff0000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#ff0000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var diem = CreText('diem',402,46,30,30,"",'#ffffff','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,Text_3,ch,in_0,btSubmit,msg,cau_dung,cau_sai,diem);
stage.add(Page_1);
InitLacVietScript();
};
