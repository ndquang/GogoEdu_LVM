folder_Resource ='/data/On_tap_cac_phep_tinh_trong_pham_vi_100000';
var keyOldValue="";
var keyNewValue="";
var objectShowKey="";
var name_keyboard="Group_1";
var kq=92823;
var a_phep=["+","-","x",":"];
var m_limit= 100000;
var phep="";
var _diem =0;
function GetString(pageName, objName) {
     var curObject = FindShape(pageName, objName);
     if (curObject === null || typeof curObject === undefined) 	return null;
     return curObject.getText();
    }
function    GetKeyBoNumber(){
	if(phep!=":")
	keyNewValue =  GetString("","") + GetString("",objectShowKey);
	else keyNewValue =   GetString("",objectShowKey)+ GetString("","");
	SetText("",objectShowKey,keyNewValue);
	SetShowObject("","check",1);
	InvalidateObj("",objectShowKey);
}

function   ShowKeyNum( namekey)
{
AddObjToCurentPage(name_keyboard);
var x_to= GetLeft("","")+ GetWidth("","")- GetWidth("",namekey);
var y_to= GetTop("","")+ GetHeight("","");
if (GetHeight("", namekey) + y_to > 480)
    y_to= GetTop("","")- GetHeight("",namekey);
if (x_to<0) x_to=1;
MoveObjectTo("",namekey,x_to,y_to);
SetShowObject("",namekey,1);
InvalidateObj("",namekey);
keyOldValue= GetText("","");
objectShowKey= GetName("");
}
function  CreateGame()
{
	SetShowObject("","g_chia",0);
	SetShowObject("","g_cong",0);
	SetShowObject("","check",0);

	phep= a_phep[Random(4)];
	var so0 = Random(90000)+1000;
	var so1 = Random(90000)+1000;
	switch(phep)
	{
		case "+":
		{
		while(so0 +so1 >m_limit)
			{
				so0 = Random(90000)+1000;
				so1 = Random(90000)+1000;
			}
			if(so0<10000 && so1 > 10000)
			{
				var tem= so0;
				so0 = so1;
				so1= tem;
			}
			kq=so0+so1;
		SetShowObject("","g_cong",1);
		break;
		}
		case "-":
		{
			if(so0 - so1 < 0)
			{
				var tem= so0;
				so0 = so1;
				so1= tem;
			}
			kq=so0-so1;
		SetShowObject("","g_cong",1);
		break;
		}
		case "x":
		{
		while(so0 * so1 > m_limit)
			{
				so0 = Random(90000)+1000;
				so1 = Random(10)+1;
			}
			kq=so0*so1;
		SetShowObject("","g_cong",1);
		break;
		}
		case ":":
		{
		while(so0 % so1 != 0)
			{
				so0 = Random(90000)+1000;
				so1 = Random(10)+1;
			}
			kq=so0/so1;
		break;
		}
	}
	if(phep==":")
	{
		SetText("","c0",so0);
		SetText("","c1",so1);
		for(var k=2;k<8;k++)
		SetText("","c"+k,"");
		SetShowObject("","g_chia",1);
	}
	else 
	{
	SetText("","so0",so0);
	SetText("","so1",so1);
	SetText("","so2","");
	SetText("","dau",phep);
	SetShowObject("","g_cong",1);
	}
	_diem = GetVer();
	SetShowObject("","Group_1",0);
	SetShowObject("","msg",0);
	SetFontColor("","so2","#0000FF");
	InvalidateObj("","");
}
function  CheckKQ()
{	
	var userinput = "";
	if(phep==":")
		userinput = GetText("","c2");
	else userinput = GetText("","so2");
	if(userinput == kq)
		{	
			_diem++;
			SetText("","m_diem",_diem+" điểm, Đúng");
			SetColor("","m_diem","#99ff33");
			SetFontColor("","so2","#00ff00");		
			Speak("Đúng","VN");
		}
	else {
		_diem--;
		if(_diem<0) _diem=0;
		SetText("","m_diem","Bạn bị trừ 1 điểm: "+ _diem + "\r\nKết quả là: " +kq);
		SetColor("","m_diem","#ff9999");
		SetFontColor("","so2","#ff0000");		
		}
		UpdateScore(_diem);
		SetShowObject("","msg",1);
}
function Page_1()
{
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
 width: 550,
 height: 300 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var bg_cong = CreText('bg_cong',257,123,98,29,"",'rgba(255,255,255,0.67)','#ffffff','rgba(0,0,0,0)','#ffffff','',36,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bg_cong.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var bg_chia2 = CreText('bg_chia2',279,97,101,29,"",'rgba(255,255,255,0.67)','#ffffff','rgba(0,0,0,0)','#ffffff','',36,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bg_chia2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var bg_chi = CreText('bg_chi',180,97,90,150,"",'rgba(255,255,255,0.67)','#ffffff','rgba(0,0,0,0)','#ffffff','',36,'Arial','Normal','right','middle',0,'0.00','0','0',0,'#666666','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bg_chi.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var so0 = CreText('so0',239,55,115,32,"123456",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',28,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#e5e5e5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so1 = CreText('so1',242,89,113,32,"123456",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',28,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#e5e5e5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dau = CreText('dau',228,71,35,34,"+",'rgba(0,0,0,0)','#ffffff','#0000ff','#000000','',28,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#e5e5e5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so2 = CreText('so2',257,123,98,29,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Normal','right','middle',0,'0.00','1','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var title = CreText('title',90,39,114,27,"Tính:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',-1,1,553,30,"ÔN TẬP CÁC PHÉP TOÁN TRONG PHẠM VI 100000",'#0080c0','#ffffff','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var clear_one = CreText('clear_one',29,-1,27,22,"←",'#ffc0cb','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffe4e1','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
clear_one.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
      keyNewValue = GetText("",objectShowKey);
	keyNewValue =leftStr(keyNewValue ,length(keyNewValue)-1);
	SetText("",objectShowKey,keyNewValue);
	InvalidateObj("",objectShowKey);
  return;
}
 );
var clear_all = CreText('clear_all',56,-1,27,22,"C",'#ffc0cb','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffe4e1','3','1','rgba(0,0,0,0)','0','0','4','0',2,0, 'rgba(0,0,0,0)',0,1.50);
clear_all.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
      keyNewValue = "";
	SetText("",objectShowKey,"");
	InvalidateObj("",objectShowKey);;
  return;
}
 );
var ok = CreText('ok',38,85,45,22,"Đồng ý",'#ffffff','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','0','0',1,'#7f7f7f','#88c4ff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
ok.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
var _0 = CreText('_0',-2,-1,31,22,"0",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var huy = CreText('huy',-2,85,40,22,"Hủy",'#ffc0cb','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffe4e1','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
huy.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetText("",objectShowKey,keyOldValue);
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
var _9 = CreText('_9',56,65,27,22,"9",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',2,0, 'rgba(0,0,0,0)',0,1.50);
_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _8 = CreText('_8',29,65,27,22,"8",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _7 = CreText('_7',-2,65,31,22,"7",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _6 = CreText('_6',56,43,27,22,"6",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',2,0, 'rgba(0,0,0,0)',0,1.50);
_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _5 = CreText('_5',29,43,27,22,"5",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _4 = CreText('_4',-2,43,31,22,"4",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _3 = CreText('_3',56,21,27,22,"3",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',2,0, 'rgba(0,0,0,0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _2 = CreText('_2',29,21,27,22,"2",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _1 = CreText('_1',-2,21,31,22,"1",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:89,height:112});
Group_1.add(clear_one,clear_all,ok,_0,huy,_9,_8,_7,_6,_5,_4,_3,_2,_1);
var check = CreText('check',430,65,110,36,"Kiểm tra",'#80ff00','#ffffff','#000000','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#0080ff','#b0ff62','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckKQ();
  return;
}
 );
var c0 = CreText('c0',180,70,92,29,"12345",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',28,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#e5e5e5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c1 = CreText('c1',279,68,101,29,"5",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',28,'Arial','Normal','left','middle',0,'0.00','10','1',1,'#000000','#e5e5e5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c2 = CreText('c2',279,97,101,29,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Normal','left','middle',0,'0.00','10','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var c3 = CreText('c3',180,98,92,29,"1",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#666666','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var c4 = CreText('c4',180,128,92,29,"1",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#666666','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var c5 = CreText('c5',180,157,92,29,"1",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#666666','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var c6 = CreText('c6',180,187,92,29,"1",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#666666','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var c7 = CreText('c7',180,217,92,29,"1",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#666666','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var g_chia = new Kinetic.Group({name:'g_chia',x:0,y:0,width:205,height:183});
g_chia.add(bg_chia2,bg_chi,c0,c1,c2,c3,c4,c5,c6,c7);
var m_diem = CreText('m_diem',158,104,254,141,"Sai.",'rgba(163,255,70,1.11)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#7f7f7f','rgba(163,255,70,1.11)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_lam_lai = CreText('bt_lam_lai',239,209,96,30,"Tiếp",'#c0c0c0','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#000000','#e5e5e5','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateGame();
  return;
}
 );
var Text_2 = CreText('Text_2',158,104,254,24,"https://gamechocon.com",'#c0c0c0','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#000000','#e5e5e5','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var g_cong = new Kinetic.Group({name:'g_cong',x:0,y:0,width:131,height:101});
g_cong.add(bg_cong,so0,so1,dau,so2);
var msg = new Kinetic.Group({name:'msg',x:0,y:0,width:258,height:145});
msg.add(m_diem,Text_2,bt_lam_lai);
Page_1.add(title,Text_1,Group_1,check,g_chia,g_cong,msg);
stage.add(Page_1);
InitLacVietScript();
};
