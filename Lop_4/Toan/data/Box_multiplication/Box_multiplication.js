folder_Resource ='/data/Box_multiplication';
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
	var so1 = Random(90) +10;
	var so2 = Random(90)+10;	
	kq = so1*so2;
	SetText("","ch1", so1 );
	SetText("","ch2", so2);
	var dv1 = so1%10;
	var ch1 = so1  -  dv1;
	SetText("","so1", ch1 + " + " +  dv1);
	var dv2 = so2%10;
	var ch2 = so2  -  dv2;
	SetText("","so2", ch2 + "\r\n+\r\n" +  dv2);
	SetText("","box0", ch1*ch2);
	SetText("","box1", ch2*dv1);
	SetText("","box2", ch1*dv2);
	SetText("","box3", dv1*dv2);
	SetText("","kq2","");
	SetText("","kq1","");
	SetText("","kq3","");
	SetText("","btSubmit","OK");	
	SetShowObject("","msg",0);	
    InvalidateObj("","");
	_bTestAndCreat= false;
}

function  ChamDiem()
{

	if(_bTestAndCreat)
	{
		CreateQuestion();
		return;
	}

	var kq1 = GetText("","box0") +  GetText("","box1") ;
	var kq2 = GetText("","box2") +  GetText("","box3") ;
	
	var tl = GetText("","kq3");
	if(tl=="")
	{
		SetText("", "msg", "Bạn chưa nhập câu trả lời.");
		SetShowObject("","msg",1);
		InvalidateObj("","");
		return;
	}

	if((GetText("","kq1") == kq1) && ( GetText("","kq2") == kq2) && (tl==kq) ){
		_cDung++;
        SetFontColor("", "msg", _trueColor);
        SetText("", "msg", "✔  Đúng");
        PlaySound("sound_good");
		}
	else{
		SetFontColor("","msg","#ff3300");
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
	CreateQuestion();
	InvalidateObj("","");
}

function Page_1_OnKeyDown()
{

var key = GetKeyDown("","");
	if(key == "\r")
	{
		if (textarea) {
			 SetText("","kq3",textarea.value);	 
		}
		ChamDiem();
	}
}


function Page_1()
{
SetDigitEditText("","kq1","number");
SetDigitEditText("","kq2","number");
SetDigitEditText("","kq3","number");
AllowEditText("","kq1",1);
AllowEditText("","kq2",1);
AllowEditText("","kq3",1);
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
 width: 600,
 height: 420 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,600,420,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var ch1 = CreText('ch1',196,39,81,50,"58",'rgba(0,0,0,0)','#ffffff','#0080c0','#000000','',28,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_12 = CreText('Text_12',60,93,496,275,"Tính tổng theo hàng, rồi cộng các tổng này lại",'#ffffff','#ffffff','#00008b','#ffffff','',20,'Arial','Normal','center','top',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',10,1.50);
var Text_10 = CreText('Text_10',329,274,152,4,"",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',24,'Arial','Normal','center','middle',0,'0.00','1','0',1,'#000000','#e6e6fa','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var kq1 = CreText('kq1',330,178,149,31,"",'#ffffff','#ffffff','#000000','#000000','',24,'Arial','Normal','right','middle',0,'0.00','0','0',1,'#666666','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var btSubmit = CreText('btSubmit',259,328,131,36,"Đồng ý",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e4e4e4','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
btSubmit.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChamDiem();
  return;
}
 );
var Text_1 = CreText('Text_1',10,3,578,37,"Sử dụng phương pháp hộp để tính:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',24,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so1 = CreText('so1',207,130,108,33,"10 + 7",'rgba(0,0,0,0)','#ffffff','#0080c0','#000000','',24,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#e6e6fa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so2 = CreText('so2',160,171,45,106,"60\r\n+\r\n8",'rgba(0,0,0,0)','#ffffff','#ff6820','#000000','',24,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#e6e6fa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var box0 = CreText('box0',208,170,54,53,"600",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',24,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var box1 = CreText('box1',261,170,54,53,"600",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',24,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var box2 = CreText('box2',208,223,54,53,"600",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',24,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var box3 = CreText('box3',261,223,54,53,"600",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',24,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq2 = CreText('kq2',386,232,93,31,"",'#ffffff','#ffffff','#000000','#000000','',24,'Arial','Normal','right','middle',0,'0.00','0','0',1,'#666666','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq3 = CreText('kq3',330,287,149,31,"",'#ffffff','#ffffff','#000000','#000000','',24,'Arial','Normal','right','middle',0,'0.00','0','0',1,'#666666','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_11 = CreText('Text_11',340,222,25,24,"+",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',24,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',101,178,420,88,"good job",'#ffffff','#ffffff','#000000','#ffffff','',28,'Arial','Bold Italic','center','middle',11,'0.00','10','0',1,'#7f7f7f','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("","",0);
InvalidateObj("","");
  return;
}
 );
var ch2 = CreText('ch2',289,39,81,50,"62",'rgba(0,0,0,0)','#ffffff','#ff6820','#000000','',28,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',242,39,81,50,"x",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',28,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_4 = CreText('Text_4',351,39,81,50,"= ?",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',28,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_dung = CreText('cau_dung',255,380,30,30,"",'#ffffff','#c0c0c0','#009300','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#009300','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_sai = CreText('cau_sai',298,379,30,30,"",'#ffffff','#c0c0c0','#ff0000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#ff0000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var diem = CreText('diem',340,381,30,30,"",'#ffffff','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,ch1,Text_12,Text_10,kq1,btSubmit,Text_1,so1,so2,box0,box1,box2,box3,kq2,kq3,Text_11,msg,ch2,Text_3,Text_4,cau_dung,cau_sai,diem);
stage.add(Page_1);
InitLacVietScript();
};
