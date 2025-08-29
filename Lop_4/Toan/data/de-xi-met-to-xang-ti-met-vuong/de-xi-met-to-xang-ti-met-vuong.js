folder_Resource ='data/de-xi-met-to-xang-ti-met-vuong';
var keyOldValue="";
var keyNewValue="";
var objectShowKey="";
var name_keyboard="Group_1";
var m_limit= 100000;
var _diem =0;

function GetString(pageName, objName) {
     var curObject = FindShape(pageName, objName);
     if (curObject === null || typeof curObject === undefined) 	return null;
     return curObject.getText();
    }
function GetKeyBoNumber(){
	// keyNewValue =  GetString("","") + GetString("",objectShowKey);
	keyNewValue =  GetString("",objectShowKey) +  GetString("","");
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
var kq =0;
function  CreateGame()
{
	
	SetShowObject("","check",0);
	var so0 = Random(100)+1;
              	var x = Random(3);
	var y = Random(2);

	if(x==0) // m=>dm
		{		
		if(y==0)
		{
		SetText("","so0",so0 + "m² ");
		SetText("","so1", "dm² ");
		kq=so0*100;
		}
		else
		{
			kq=so0;
			so0=so0*100;
			SetText("","so0",so0 + "dm² ");
			SetText("","so1", "m² ");
		}
	}
	else if(x==1) //m => cm

		{
			if(y==0)
			{
				SetText("","so0",so0 + "m² ");
				SetText("","so1", "cm² ");
				kq=so0*1000;
			}
			else
			{
				kq=so0;
				so0=so0*1000;
				SetText("","so0",so0 + "cm² ");
				SetText("","so1", "m² ");			
			}

		}
	else // dm = cm
	{
		if(y==0)
		{
			SetText("","so0",so0 + "dm² ");
			SetText("","so1", "cm² ");
			kq=so0*100;
		}
		else
		{
		  	kq=so0;
			so0=so0*100;
			SetText("","so0",so0 + "cm² ");
			SetText("","so1", "dm² ");	
		}
	}
	SetText("","so2","");
	_diem = GetVer();
	SetShowObject("","Group_1",0);
	SetShowObject("","msg",0);
	SetFontColor("","so2","#0000FF");
	InvalidateObj("","");
}
function  CheckKQ()
{	
		if(GetText("","so2")==kq)
			{	
			_diem++;
			SetText("","m_diem",_diem+" điểm, Đúng");
			SetColor("","m_diem","#99ff33");
			SetFontColor("","so2","#00ff00");		
			//Speak("Đúng","VN");
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
		InvalidateObj("","");
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
 height: 250 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,550,250,'','#a4ffd1','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#a4ffd1','0','0','0','','0','0','0','0',0,0,'');
var Text_3 = CreText('Text_3',258,75,83,32,"",'#ffffff','#ffffff','#000000','#ffffff','',28,'Arial','Normal','right','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var so0 = CreText('so0',76,75,151,32,"123456",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',26,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#e5e5e5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so1 = CreText('so1',356,75,79,32,"4",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',26,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#e5e5e5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dau = CreText('dau',224,75,32,32,"=",'rgba(0,0,0,0)','#ffffff','#0000ff','#000000','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#e5e5e5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so2 = CreText('so2',258,75,83,32,"123",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',26,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var title = CreText('title',10,35,306,27,"Nhập số thích hợp vào ô trống",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',-1,0,551,30,"Đổi m² sang dm²  và cm²",'#008040','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#ffffff','#008040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var _9 = CreText('_9',56,65,27,22,"9",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',2,0, 'rgba(0,0,0,0)',0,1.50);
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
var check = CreText('check',414,74,89,35,"Kiểm tra",'#ff6820','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#ff0000','#a52a00','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckKQ();
  return;
}
 );
var m_diem = CreText('m_diem',130,60,254,141,"Sai.",'rgba(0,128,64,1.02)','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffff00','rgba(0,128,64,1.02)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_lam_lai = CreText('bt_lam_lai',212,164,96,30,"Tiếp",'#c0c0c0','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#000000','#e5e5e5','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateGame();
  return;
}
 );
var Text_2 = CreText('Text_2',130,60,254,24,"https://gamechocon.com",'#c0c0c0','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#e5e5e5','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = new Kinetic.Group({name:'msg',x:0,y:0,width:258,height:146});
msg.add(m_diem,Text_2,bt_lam_lai);
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:89,height:112});
Group_1.add(clear_one,clear_all,ok,_0,huy,_9,_8,_7,_6,_5,_4,_3,_2,_1);
Page_1.add(Page_1_Backrounnd,Text_3,so0,so1,dau,so2,title,Text_1,check,msg,Group_1);
stage.add(Page_1);
InitLacVietScript();
};
