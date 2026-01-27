folder_Resource ='/data/Lattice_multiplication';
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
	var ch1 = (so1  -  dv1)/10;
	SetText("","so1", ch1 + "    " +  dv1);
	var dv2 = so2%10;
	var ch2 = (so2  -  dv2)/10;
	SetText("","so2", ch2 + "\r\n\r\n" +  dv2);

	var cel01= ch1*ch2;
	if(cel01<10)
		cel01 = "0_"+cel01;
	SetText("","box0", leftStr(cel01,1));
	SetText("","box1", rightStr(cel01,1)+" ");

	var cel23= dv1*ch2;
	if(cel23<10)
		cel23= "0_"+cel23;
	SetText("","box2", leftStr(cel23,1));
	SetText("","box3", rightStr(cel23,1)+" ");
	
	var cel45= ch1*dv2;
	if(cel45<10)
		cel45= "0_"+cel45;
	SetText("","box4", leftStr(cel45,1));
	SetText("","box5", rightStr(cel45,1)+" ");
	
	var cel67= dv1*dv2;
	if(cel67<10)
		cel67= "0_"+cel67;
	SetText("","box6", leftStr(cel67,1));
	SetText("","box7", rightStr(cel67,1)+" ");

	SetText("","kq0","");
	SetText("","kq2","");
	SetText("","kq1","");
	SetText("","kq3","");

	SetText("","btSubmit","OK");	
	SetShowObject("","msg",0);	
            InvalidateObj("","");


}

function  ChamDiem()
{
	if(_bTestAndCreat)
	{
		CreateQuestion();
		return;
	}
	var input = GetText("","kq0")*1000 + GetText("","kq1")*100 + GetText("","kq2")*10 + GetText("","kq3");	
	if(input ==kq ){
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
SetDigitEditText("","kq0","number");
SetDigitEditText("","kq1","number");
SetDigitEditText("","kq2","number");
SetDigitEditText("","kq3","number");
AllowEditText("","kq0",1);
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
 height: 450 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,600,450,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var Text_12 = CreText('Text_12',39,43,510,341,"Tính tổng theo đường chéo từ phải sang trái.",'#ffffff','#ffffff','#00008b','#ffffff','',20,'Arial','Normal','center','top',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',10,1.50);
var Text_2 = CreText('Text_2',139,162,252,176,"",'rgba(0,0,0,0)','#ffffff','#0080c0','#ffffff','',24,'Arial','Normal','left','middle',0,'0.00','10','1',1,'#0080c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','2',0,0,'rgba(0,0,0,0)',0,1.50);
var box6 = CreText('box6',272,221,54,53,"5",'#afeeee','#ffffe0','#000000','#000000','',24,'Arial','Normal','left','top',0,'0.00','0','0',1,'#000000','#afeeee','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',6,1.50);
var box4 = CreText('box4',219,221,54,53,"1",'#ffffff','#ffffff','#000000','#000000','',24,'Arial','Normal','left','top',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',6,1.50);
var box2 = CreText('box2',272,167,54,53,"3",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',24,'Arial','Normal','left','top',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',6,1.50);
var box0 = CreText('box0',219,167,54,53,"6",'#e6e6fa','#ffffff','#000000','#000000','',24,'Arial','Normal','left','top',0,'0.00','0','0',1,'#000000','#e6e6fa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',6,1.50);
var ch1 = CreText('ch1',162,77,81,50,"58",'rgba(0,0,0,0)','#ffffff','#0080c0','#000000','',28,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var btSubmit = CreText('btSubmit',215,342,131,36,"Đồng ý",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#c0c0c0','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
btSubmit.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChamDiem();
  return;
}
 );
var Text_1 = CreText('Text_1',10,3,578,37,"Sử dụng phương pháp mạng lưới để tính:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',24,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so1 = CreText('so1',214,133,108,30,"10 + 7",'rgba(0,0,0,0)','#ffffff','#0080c0','#000000','',24,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#e6e6fa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so2 = CreText('so2',332,170,36,106,"60\r\n+\r\n8",'rgba(0,0,0,0)','#ffffff','#ff6820','#000000','',24,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#e6e6fa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var box1 = CreText('box1',218,167,54,53,"6",'#ffffff','#ffffff','#000000','#000000','',24,'Arial','Normal','right','bottom',4,'0.00','100','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var box3 = CreText('box3',272,168,54,53,"3",'#afeeee','#ffffe0','#000000','#000000','',24,'Arial','Normal','right','bottom',4,'0.00','100','0',1,'#000000','#afeeee','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var box5 = CreText('box5',219,221,54,53,"1",'#afeeee','#ffffe0','#000000','#000000','',24,'Arial','Normal','right','bottom',4,'0.00','100','0',1,'#000000','#afeeee','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var box7 = CreText('box7',273,221,54,53,"5",'#ffad5b','#ccffff','#000000','#000000','',24,'Arial','Normal','right','bottom',4,'0.00','100','0',1,'#000000','#ffad5b','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ch2 = CreText('ch2',255,77,81,50,"62",'rgba(0,0,0,0)','#ffffff','#ff6820','#000000','',28,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',208,77,81,50,"x",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',28,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_4 = CreText('Text_4',317,77,81,50,"= ?",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',28,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq3 = CreText('kq3',284,283,32,28,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq2 = CreText('kq2',222,283,32,28,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq1 = CreText('kq1',177,236,32,28,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq0 = CreText('kq0',177,182,32,28,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',79,193,420,88,"good job",'#ffffff','#ffffff','#000000','#ffffff','',24,'Arial','Bold Italic','center','middle',11,'0.00','10','0',1,'#7f7f7f','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("","",0);
InvalidateObj("","");
  return;
}
 );
var Text_5 = CreText('Text_5',362,319,46,40,"►",'rgba(0,0,0,0)','#ffffff','#0080c0','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_6 = CreText('Text_6',116,313,46,40,"▼",'rgba(0,0,0,0)','#ffffff','#0080c0','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_dung = CreText('cau_dung',234,397,30,30,"",'#ffffff','#c0c0c0','#009300','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#009300','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_sai = CreText('cau_sai',277,396,30,30,"",'#ffffff','#c0c0c0','#ff0000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#ff0000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var diem = CreText('diem',319,398,30,30,"",'#ffffff','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,Text_12,Text_2,box6,box4,box2,box0,ch1,btSubmit,Text_1,so1,so2,box1,box3,box5,box7,ch2,Text_3,Text_4,kq3,kq2,kq1,kq0,msg,Text_5,Text_6,cau_dung,cau_sai,diem);
stage.add(Page_1);
InitLacVietScript();
};
