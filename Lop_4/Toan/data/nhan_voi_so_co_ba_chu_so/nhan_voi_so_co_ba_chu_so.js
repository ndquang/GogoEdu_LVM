folder_Resource ='data/nhan_voi_so_co_ba_chu_so';
var _diem =0;
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

	_diem = GetVer();
	SetShowObject("","Group_1",0);
	SetShowObject("","msg",0);

	SetFontColor("","so2","#FFFFFF");
	SetFontColor("","so3","#FFFFFF");
	SetFontColor("","so4","#FFFFFF");
	SetFontColor("","so5","#FFFFFF");

	AllowEditText("","so2",1);
	AllowEditText("","so3",1);
	AllowEditText("","so4",1);
	AllowEditText("","so5",1);

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

		if(GetText("","so5")!=kq5)
			SetFontColor("","so5","#ff0000");	
		else SetFontColor("","so5","#00ff00");

		
		if(GetText("","so2")==kq2 && GetText("","so3")==kq3 && GetText("","so4")==kq4 && GetText("","so5")==kq5)
			{	
			_diem++;
			SetText("","m_diem",so0 + " x " + so1+ " = "+ kq5+" Đúng\r\n"+_diem+" điểm");
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
		AllowEditText("","so5",0);
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
 height: 350 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,400,350,'','#800080','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#800080','0','0','0','','0','0','0','0',0,0,'');
var Text_3 = CreText('Text_3',150,108,100,123,"",'rgba(255,255,255,0.09)','#f200f2','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','0','0',1,'#ff06ff','rgba(255,255,255,0.09)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so4 = CreText('so4',150,169,69,30,"123",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','0','0',1,'#ff06ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',2,1.50);
var so3 = CreText('so3',150,139,83,30,"123",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','0','0',1,'#ff06ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',2,1.50);
var so5 = CreText('so5',150,199,100,32,"123",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','1','0',2,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',2,1.50);
var Text_6 = CreText('Text_6',120,143,32,30,"+",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#e5e5e5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so0 = CreText('so0',147,50,102,29,"3456",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so1 = CreText('so1',153,80,94,29,"4",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dau = CreText('dau',149,67,35,34,"x",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#e5e5e5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so2 = CreText('so2',150,108,100,31,"2345",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','1','0',2,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',2,1.50);
var Text_1 = CreText('Text_1',-1,0,401,30,"Nhân số có ba chữ số",'#480048','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#ffffff','#480048','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check = CreText('check',163,258,110,36,"Kiểm tra",'#80ff00','#ffffff','#000000','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#0080ff','#b0ff62','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckKQ();
  return;
}
 );
var m_diem = CreText('m_diem',82,64,254,141,"Sai.",'#c100c1','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#7f7f7f','#c100c1','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_lam_lai = CreText('bt_lam_lai',162,169,96,30,"Tiếp",'#c0c0c0','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#000000','#e5e5e5','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateGame();
  return;
}
 );
var Text_2 = CreText('Text_2',82,64,254,24,"https://gogoedu.vn",'#c0c0c0','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#000000','#e5e5e5','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = new Kinetic.Group({name:'msg',x:0,y:0,width:258,height:145});
msg.add(m_diem,Text_2,bt_lam_lai);
Page_1.add(Page_1_Backrounnd,Text_3,so4,so3,so5,Text_6,so0,so1,dau,so2,Text_1,check,msg);
stage.add(Page_1);
InitLacVietScript();
};
