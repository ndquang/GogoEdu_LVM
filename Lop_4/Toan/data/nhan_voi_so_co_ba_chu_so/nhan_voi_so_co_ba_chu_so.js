folder_Resource ='/data/nhan_voi_so_co_ba_chu_so';
var _Diem = 0;
var _cDung = 0;
var _cSai = 0;
var _trueColor = "#00cc00";
var _falseColor = "#ff0000";
var _normalColor = "#0066ff";
var _bTestAndCreat = false;

var so0,so1,kq2,kq3,kq4,kq5=0;
function  CreateGame()
{
	so0 = Random(900)+100;
	so1 = Random(900)+100;

	SetText("","so0",so0);
	SetText("","so1",so1);

	SetText("","so2","");
	SetText("","so3","");
	SetText("","so4","");
	SetText("","so5","");

	kq2=subString(so1,2,1)*so0;
	kq3= subString(so1,1,1)*so0;
	kq4= subString(so1,0,1)*so0;

	kq5= so1*so0;

	SetShowObject("","msg",0);

	SetFontColor("","so2","#FFFFFF");
	SetFontColor("","so3","#FFFFFF");
	SetFontColor("","so4","#FFFFFF");
	SetFontColor("","so5","#FFFFFF");

	AllowEditText("","so2",1);
	AllowEditText("","so3",1);
	AllowEditText("","so4",1);
	AllowEditText("","so5",1);
	SetText("","btSubmit","OK");
	_bTestAndCreat = false;
	InvalidateObj("","");
}
function  CheckKQ()
{	
		if(_bTestAndCreat)
{
CreateGame();
return;
}
		if(GetText("","so2")!=kq2)
			SetFontColor("","so2","#ff0000");	
		else SetFontColor("","so2","#00ff00");

		if(GetText("","so3")!=kq3)
			SetFontColor("","so3","#ff0000");	
		else SetFontColor("","so3","#00ff00");		
		
		if(GetText("","so4")!=kq4)
			SetFontColor("","so4","#ff0000");	
		else SetFontColor("","so4","#00ff00");

		if(GetText("","so5")!=kq5)
			SetFontColor("","so5","#ff0000");	
		else SetFontColor("","so5","#00ff00");

		
		if(GetText("","so2")==kq2 && GetText("","so3")==kq3 && GetText("","so4")==kq4 && GetText("","so5")==kq5)
			{	
			_cDung++;
        		SetFontColor("", "msg", _trueColor);
       		 SetText("", "msg", "✔  Đúng");
			}
		else {		
		SetFontColor("", "msg", _falseColor);
           		SetText("", "msg", "❌ Sai:" + so0 + " x " + so1+ " = "+ kq4);
      		_cSai++;
		}
		_Diem = _cDung - _cSai;
    	SetText("","cau_dung",_cDung);
    	SetText("","cau_sai",_cSai);
    	SetText("","diem",_Diem);
   	UpdateScore(_Diem,_cDung+"|"+_cSai);
	_bTestAndCreat = true;
	SetText("","btSubmit","Next");	
		AllowEditText("","so2",0);
		AllowEditText("","so3",0);
		AllowEditText("","so4",0);
		AllowEditText("","so5",0);
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
	CreateGame();
}

function Page_1_OnKeyDown()
{

 var key = GetKeyDown("","");
	if(key == "\r")
	{
		if (textarea) {
			 SetText("","so5",textarea.value);	 
		}
		CheckKQ();
	}
}
function Page_1()
{
SetDigitEditText("","so2","number");
SetDigitEditText("","so3","number");
SetDigitEditText("","so4","number");
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
 width: 400,
 height: 350 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,400,350,'','#800080','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#800080','0','0','0','','0','0','0','0',0,0,'');
var Text_3 = CreText('Text_3',150,136,100,123,"",'rgba(255,255,255,0.09)','#f200f2','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','0','0',1,'#ff06ff','rgba(255,255,255,0.09)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so4 = CreText('so4',150,197,69,30,"123",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','0','0',1,'#ff06ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',2,1.50);
var so3 = CreText('so3',150,167,83,30,"123",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','0','0',1,'#ff06ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',2,1.50);
var so5 = CreText('so5',150,227,100,32,"123",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','1','0',2,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',2,1.50);
var Text_6 = CreText('Text_6',120,171,32,30,"+",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#e5e5e5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so0 = CreText('so0',147,78,102,29,"3456",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so1 = CreText('so1',153,108,94,29,"4",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dau = CreText('dau',149,95,35,34,"x",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#e5e5e5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so2 = CreText('so2',150,136,100,31,"2345",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','1','0',2,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',2,1.50);
var Text_1 = CreText('Text_1',-1,0,401,52,"Nhân số có ba chữ số",'#480048','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#ffffff','#480048','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var btSubmit = CreText('btSubmit',158,309,110,36,"Kiểm tra",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#0080ff','#e6e6fa','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
btSubmit.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckKQ();
  return;
}
 );
var cau_dung = CreText('cau_dung',270,38,30,30,"",'#ffffff','#c0c0c0','#009300','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#009300','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_sai = CreText('cau_sai',313,37,30,30,"",'#ffffff','#c0c0c0','#ff0000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#ff0000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var diem = CreText('diem',355,39,30,30,"",'#ffffff','#c0c0c0','#000000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',23,265,367,38,"good job",'rgba(255,255,224,0.67)','#ffffff','#000000','#ffffff','',24,'Arial','Bold Italic','center','middle',12,'0.00','2','2',1,'#7f7f7f','rgba(255,255,224,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("","",0);
InvalidateObj("","");
  return;
}
 );
Page_1.add(Page_1_Backrounnd,Text_3,so4,so3,so5,Text_6,so0,so1,dau,so2,Text_1,btSubmit,cau_dung,cau_sai,diem,msg);
stage.add(Page_1);
InitLacVietScript();
};
