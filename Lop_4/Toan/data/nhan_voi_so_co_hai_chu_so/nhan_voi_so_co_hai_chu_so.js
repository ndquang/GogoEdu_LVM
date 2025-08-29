folder_Resource ='data/nhan_voi_so_co_hai_chu_so';
var _diem =0;
var so0,so1,kq2,kq3,kq4=0;
function  CreateGame()
{
	var ca = Random(3);
	so0 = Random(90)+10;
	if(ca == 1)
	so0 = Random(900)+100;
	else if(ca == 2)
	so0 = Random(3000)+1000;
	so1 = Random(90)+10;

	SetText("","so0",so0);
	SetText("","so1",so1);
	SetText("","so2","");
	SetText("","so3","");
	SetText("","so4","");
	kq2=rightStr(so1,1)*so0;
	kq3= leftStr(so1,1)*so0;
	kq4= so1*so0;

	_diem = GetVer();
	SetShowObject("","Group_1",0);
	SetShowObject("","msg",0);

	SetFontColor("","so2","#FFFFFF");
	SetFontColor("","so3","#FFFFFF");
	SetFontColor("","so4","#FFFFFF");
	AllowEditText("","so2",1);
	AllowEditText("","so3",1);
	AllowEditText("","so4",1);
	SetShowObject("","check",1);
	InvalidateObj("","");
}
function  CheckKQ()
{	
		if(GetText("","so2")!=kq2)
			SetFontColor("","so2","#ff0000");	
		else SetFontColor("","so2","#00ff00");
		if(GetText("","so3")!=kq3)
			SetFontColor("","so3","#ff0000");	
		else SetFontColor("","so3","#00ff00");		
		if(GetText("","so4")!=kq4)
			SetFontColor("","so4","#ff0000");	
		else SetFontColor("","so4","#00ff00");
		
		if(GetText("","so2")==kq2 && GetText("","so3")==kq3 && GetText("","so4")==kq4)
			{	
			_diem++;
			SetText("","m_diem",so0 + " x " + so1+ " = "+ kq3+" Đúng\r\n"+_diem+" điểm");
			SetColor("","m_diem","#99ff33");				
			Speak("Đúng","VN");
			}
	else {
		
		_diem--;
		if(_diem<0) _diem=0;
		SetText("","m_diem",so0 + " x " + so1+ " = "+ GetText("","so4")+" Sai\r\n"+_diem+" điểm");
		SetColor("","m_diem","#ff9999");
		
		}
		AllowEditText("","so2",0);
	AllowEditText("","so3",0);
	AllowEditText("","so4",0);
	SetShowObject("","check",0);
		UpdateScore(_diem);
		SetShowObject("","msg",1);
}
function Page_1()
{
SetDigitEditText("","so2","number");
SetDigitEditText("","so3","number");
SetDigitEditText("","so4","number");
CreateGame();
SetMoveView("","msg",1);
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
 height: 280 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,400,280,'','#004848','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#004848','0','0','0','','0','0','0','0',0,0,'');
var Text_4 = CreText('Text_4',150,138,98,31,"",'rgba(255,255,255,0.09)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','rgba(255,255,255,0.09)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_5 = CreText('Text_5',150,170,98,29,"",'rgba(255,255,255,0.09)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','rgba(255,255,255,0.09)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',150,108,98,30,"",'rgba(255,255,255,0.09)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','rgba(255,255,255,0.09)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so3 = CreText('so3',146,138,88,31,"123",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',2,1.50);
var so4 = CreText('so4',150,170,98,31,"123",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','1','0',2,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',2,1.50);
var Text_6 = CreText('Text_6',120,131,32,30,"+",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#e5e5e5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so0 = CreText('so0',147,50,102,29,"3456",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so1 = CreText('so1',153,80,94,29,"4",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dau = CreText('dau',149,67,35,34,"x",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#e5e5e5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so2 = CreText('so2',151,108,98,31,"12345",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','1','0',2,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',2,1.50);
var Text_1 = CreText('Text_1',-1,0,401,30,"Nhân số có hai chữ số",'#003c3c','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#ffffff','#003c3c','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check = CreText('check',144,212,110,36,"Kiểm tra",'#80ff00','#ffffff','#000000','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#0080ff','#b0ff62','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckKQ();
  return;
}
 );
var m_diem = CreText('m_diem',72,58,254,141,"Sai.",'rgba(0,128,192,1.02)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#7f7f7f','rgba(0,128,192,1.02)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_lam_lai = CreText('bt_lam_lai',152,163,96,30,"Tiếp",'#c0c0c0','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#000000','#e5e5e5','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateGame();
  return;
}
 );
var Text_2 = CreText('Text_2',71,58,254,24,"https://gamechocon.com",'#c0c0c0','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#000000','#e5e5e5','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = new Kinetic.Group({name:'msg',x:0,y:0,width:258,height:146});
msg.add(m_diem,bt_lam_lai,Text_2);
Page_1.add(Page_1_Backrounnd,Text_4,Text_5,Text_3,so3,so4,Text_6,so0,so1,dau,so2,Text_1,check,msg);
stage.add(Page_1);
InitLacVietScript();
};
