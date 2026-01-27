folder_Resource ='/data/chia_mot_co_du';
var _trueColor = "#9dfd14";
var _falseColor = "#ff0000";
var _normalColor = "#0066ff";
var _bTestAndCreat = false;
var _Diem = 0;
var _cDung = 0;
var _cSai = 0;
var a_input=["",""];
function CreateQuestion()
{

var sc = Random(9)+1;
var sobichia = (Random(sc-1)+1)*100 + Random(9 )*10+ Random(9 );
SetText("","ch",sobichia + " : " + sc  + " = ");
SetText("","in_0","");
SetText("","in_1","");
SetFontColor("","in_0","#ffffff");
SetFontColor("","in_1","#ffffff");
a_input[0] = floor(sobichia /sc);
a_input[1] = sobichia %sc;
if(a_input[1]===0)
{
	SetText("","in_1",0);
	SetShowObject("","du",0);	
	SetShowObject("","in_1",0);
}
else
{
SetShowObject("","du",1);	
SetShowObject("","in_1",1);
}

_bTestAndCreat = false;
SetShowObject("","msg",0);	
SetText("","btSubmit","Submit");	       
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

	var kq = true;
	for(var i =0 ; i< 2;i++)
	{
		if(GetText("","in_"+i)===a_input[i])			
			SetFontColor("","in_"+i,"#00ff00");	
		else {
			SetFontColor("","in_"+i,"#ff0000");
			 kq = false;;
		       }
	}

	if(kq == true)
	{
				_cDung++;
        		SetFontColor("", "msg", _trueColor);
       		 SetText("", "msg", "✔  Đúng");
			PlaySound("sound_good");

	}
	else
	{
			_cSai++;
			SetFontColor("","msg",_falseColor);
			PlaySound("sound_bad");
			SetFontColor("", "msg", _falseColor);
			SetText("","msg","Sai, kết quả đúng là:\r\n" + GetText("","ch") +" "+ a_input[0] + " dư " + a_input[1]);
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
		var _in = "in_1";
		if(a_input[1]===0)
			_in = "in_0";
		if (textarea) {
			 SetText("",_in,textarea.value);	 
		}
		ChamDiem();
	}
}

function Page_1()
{
SetDigitEditText("","in_0","number");
SetDigitEditText("","in_1","number");
AllowEditText("","in_0",1);
AllowEditText("","in_1",1);
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
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,450,320,'','#008040','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#008040','0','0','0','','0','0','0','0',0,0,'');
var Text_3 = CreText('Text_3',1,0,449,60,"Chia một số cho số có một chữ số có dư",'#006a35','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#006a35','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ch = CreText('ch',6,114,185,47,"90 : 8 = ",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','right','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var in_0 = CreText('in_0',201,114,71,47,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var btSubmit = CreText('btSubmit',193,253,102,35,"OK",'#c0c0c0','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','10','0',1,'#ffffff','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var in_1 = CreText('in_1',344,114,71,47,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var du = CreText('du',274,114,66,47,"dư",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',61,179,367,62,"good job",'rgba(255,255,255,1.02)','#ffffff','#80ff00','#ffffff','',22,'Arial','Normal','center','middle',12,'0.00','2','2',1,'#ffffff','rgba(255,255,255,1.02)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("","",0);
InvalidateObj("","");
  return;
}
 );
var cau_dung = CreText('cau_dung',323,45,30,30,"",'#ffffff','#c0c0c0','#009300','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#009300','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_sai = CreText('cau_sai',366,44,30,30,"",'#ffffff','#c0c0c0','#ff0000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#ff0000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var diem = CreText('diem',408,46,30,30,"",'#ffffff','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,Text_3,ch,in_0,btSubmit,in_1,du,msg,cau_dung,cau_sai,diem);
stage.add(Page_1);
InitLacVietScript();
};
