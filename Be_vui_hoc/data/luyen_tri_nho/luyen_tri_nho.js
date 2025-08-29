folder_Resource ='data/luyen_tri_nho';
var num=16;
var red = 0;
var green= 0;
var blue = 0;
var yellow =0;
var pink = 0;
var m_level = 1;
var b_begin = true;
var diem = 0;
var timer = 3000;


function FinshGame()
{
transitionTo("", "red", 500, -1, -1);
transitionTo("", "green", 500, -1, -1);
transitionTo("", "blue", 500, -1, -1);
transitionTo("", "yellow", 500, -1, -1);
transitionTo("", "pink", 500, -1, -1);
SetText("","message","Bỏ vào đúng vị trí");
SetShowObject("","bt_test",1);
SetShowObject("","bt_result",1);
}


function InitGame()
{
SetShowObject("","bt_test",0);
SetShowObject("","bt_result",0);
SetShowObject("","bt_begin",0);
red =Random(num)+1;
green =Random(num)+1;
blue = Random(num)+1;
yellow = Random(num)+1;
pink = Random(num)+1;
 if(m_level>=1)
 {
 while(red == green || green == blue || blue == red  )
	{
		red =  Random(num)+1;
		green =  Random(num)+1;
		blue  =  Random(num)+1;
	}
 transitionTo("", "red", 500, GetLeft("",red ), GetTop("",red ));
 transitionTo("", "green", 500, GetLeft("",green), GetTop("",green));
 transitionTo("", "blue", 500, GetLeft("",blue), GetTop("",blue ));
 SetShowObject("","yellow",0);
 SetShowObject("","pink",0);
}
 if(m_level>=2)
 {
	  while(yellow == green || yellow == blue || yellow == red)
		  yellow =  Random(num)+1;
	  SetShowObject("","yellow",1);
	  transitionTo("", "yellow", 500, GetLeft("",yellow), GetTop("",yellow));
 }
  if(m_level>=3)
 {
	  while(pink== green || pink== blue || pink== red || pink== yellow)
		  pink=  Random(num)+1;
	  SetShowObject("","pink",1);
	  transitionTo("", "pink", 500, GetLeft("",pink), GetTop("",pink));
 }
 
 Delay("FinshGame()",timer);
 SetText("","message","Bạn cố gắng nhớ nhe...");
 GetVer();
}

function  SetMuc( mili)
{
SetColorEx("","level_1","#00FF00");
SetColorEx("","level_2","#00FF00");
SetColorEx("","level_3","#00FF00");
m_level = mili;
SetColorEx("","","#FFFF00");
}

function MoveUpColor()
{
var i=1;
var b= 0;
while(i<=num && b==0)
	{
	if(RectInRect("",i,""))
		{
            		PlaySound("ID_SOUND_UP");
			var left= GetLeft("",i);
			var top= GetTop("",i);
			MoveObjectTo("","",left,top);	
			b= 1;
		}
	   i++;
	}
	if(b==0)
	MoveObjectTo("","",-1,-1);	
  return;
}

function MessageTrue()
{
	UpdateScore(diem);
	PlaySound("ID_SOUND_TRUE");	
	SetText("","message","Đúng. Bạn làm tốt lắm: " + diem + " điểm");
	SetText("","bt_begin","Tiếp...");
	SetShowObject("","bt_test",0);
	SetShowObject("","bt_result",0);
	SetShowObject("","bt_begin",1);
}
function MessageFalse()
{
	SetText("","message","Sai rồi, làm lại!");
	PlaySound("ID_SOUND_FALSE");
	MoveObjectTo("","red",-1,-1);
	MoveObjectTo("","green",-1,-1);
	MoveObjectTo("","blue",-1,-1);
	MoveObjectTo("","yellow",-1,-1);
	MoveObjectTo("","pink",-1,-1);
}

function Kiemtra()
{ 
if(IntersectRect("", green,"green")&&
   IntersectRect("", blue,"blue")&&
   IntersectRect("", red,"red"))
{
		
	if(m_level==1)
		{
		diem = diem +1;
		MessageTrue();
		}
	else if(m_level == 2 &&  IntersectRect("", yellow,"yellow"))
		{
		diem = diem +2;
		MessageTrue();
		}
	else if(m_level==3 && IntersectRect("", yellow,"yellow") && IntersectRect("", pink,"pink"))
		{
		diem = diem +3;
		MessageTrue();
		}
	else MessageFalse();			
}
else
	{
	MessageFalse();
	}
}


function DapAn()
{
SetText("","message","Bạn cố gắng nhớ nhe...");
 transitionTo("", "red", 500, GetLeft("",red ), GetTop("",red ));
 transitionTo("", "green", 500, GetLeft("",green), GetTop("",green));
 transitionTo("", "blue", 500, GetLeft("",blue), GetTop("",blue ));
 if(m_level>=2)
  transitionTo("", "yellow", 500, GetLeft("",yellow), GetTop("",yellow));
 if(m_level>=3)
  transitionTo("", "pink", 500, GetLeft("",pink), GetTop("",pink));

 Delay("FinshGame()",timer);
 return;
}
function Page_1()
{
SetMuc(1);
SetColorEx("","level_1","#FFFF00");
SetMoveView("","red",1);
SetMoveView("","green",1);
SetMoveView("","blue",1);
SetMoveView("","yellow",1);
SetMoveView("","pink",1);

SetShowObject("","bt_test",0);
SetShowObject("","bt_result",0);
SetShowObject("","bt_begin",1);

SetShowObject("","yellow",0);
SetShowObject("","pink",0);

SetText("","bt_begin","Bắt đầu");
diem = GetVer();
PlaySound("ID_SOUND_BG");
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
 width: 640,
 height: 450 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,640,450,'','#ffffff','','','','ID_IMAGE5.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','2','2','0','','0','0','0','0',0,0,'');
var Drawtext1 = CreText('Draw text 1',216,145,199,195,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','',18,'Verdana','Normal','center','middle',0,'0.00','0','0',5,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'#282828',0,1.50);
var _1 = CreText('1',219,148,46,46,"1",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#7f7f7f','',18,'Times New Roman','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var _2 = CreText('2',268,148,46,46,"2",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#7f7f7f','',18,'Times New Roman','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var _3 = CreText('3',317,148,46,46,"3",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#7f7f7f','',18,'Times New Roman','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var _4 = CreText('4',366,148,46,46,"4",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#7f7f7f','',18,'Times New Roman','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var _5 = CreText('5',219,196,46,46,"5",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#7f7f7f','',18,'Times New Roman','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var _6 = CreText('6',268,196,46,46,"6",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#7f7f7f','',18,'Times New Roman','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var _7 = CreText('7',317,196,46,46,"7",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#7f7f7f','',18,'Times New Roman','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var _8 = CreText('8',366,196,46,46,"8",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#7f7f7f','',18,'Times New Roman','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var _9 = CreText('9',219,243,46,46,"9",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#7f7f7f','',18,'Times New Roman','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var _10 = CreText('10',268,243,46,46,"10",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#7f7f7f','',18,'Times New Roman','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var _11 = CreText('11',317,243,46,46,"11",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#7f7f7f','',18,'Times New Roman','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var _12 = CreText('12',366,243,46,46,"12",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#7f7f7f','',18,'Times New Roman','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var _13 = CreText('13',219,291,46,46,"13",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#7f7f7f','',18,'Times New Roman','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var _14 = CreText('14',268,291,46,46,"14",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#7f7f7f','',18,'Times New Roman','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var _15 = CreText('15',317,291,46,46,"15",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#7f7f7f','',18,'Times New Roman','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var _16 = CreText('16',366,291,46,46,"16",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#7f7f7f','',18,'Times New Roman','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var red = CreText('red',243,87,45,45,"",'#ff0000','#ffffff','#000000','#ffffff','',18,'Times New Roman','Normal','center','middle',2,'0.00','0','0',1,'#000000','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','1',2,2,'rgba(0,0,0,0)',0,1.50);
red.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUpColor();
  return;
}
 );
var green = CreText('green',296,87,45,45,"",'#00ff00','#ffffff','#000000','#ffffff','',18,'Times New Roman','Normal','center','middle',2,'0.00','0','0',1,'#000000','#00ff00','0','0','rgba(0,0,0,0)','0','0','4','1',2,2,'rgba(0,0,0,0)',0,1.50);
green.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUpColor(); return;
}
 );
var blue = CreText('blue',349,87,45,45,"",'#0080c0','#ffffff','#000000','#ffffff','',18,'Times New Roman','Normal','center','middle',2,'0.00','0','0',1,'#000000','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','1',2,2,'rgba(0,0,0,0)',0,1.50);
blue.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUpColor();
  return;
}
 );
var bt_begin = CreText('bt_begin',269,222,97,36,"Bắt đầu",'#80ff00','#afeeee','#000000','#e05a01','',18,'Verdana','Bold','center','middle',3,'0.00','7','32',2,'#009300','#80ff00','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bt_begin.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitGame();
  return;
}
 );
var bt_test = CreText('bt_test',271,369,86,37,"Kiểm tra",'#ffad5b','#afeeee','#000000','#000000','',14,'Verdana','Bold','center','middle',11,'0.00','10','0',2,'#ffffff','#ff5809','4','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bt_test.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Kiemtra();
  return;
}
 );
var bt_result = CreText('bt_result',431,157,86,34," Xem lại",'#ff6820','#afeeee','#000000','#000000','',14,'Verdana','Bold','center','middle',11,'0.00','10','0',2,'#ffffff','#ff6820','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bt_result.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DapAn();
  return;
}
 );
var message = CreText('message',187,344,267,28,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',18,'Arial','Bold Italic','center','middle',0,'0.00','0','0',2,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var level_1 = CreText('level_1',89,289,31,31,"1",'#ffff00','#ffffff','#000000','#000000','',11,'Verdana','Bold','center','middle',2,'0.00','32','32',2,'#ffffff','#ffff00','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
level_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetMuc(1);
InitGame();
  return;
}
 );
var level_2 = CreText('level_2',90,327,31,31,"2",'#00ff00','#ffffff','#000000','#000000','',11,'Verdana','Bold','center','middle',2,'0.00','32','32',2,'#ffffff','#00ff00','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
level_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetMuc(2);
InitGame();
 return;
}
 );
var level_3 = CreText('level_3',90,364,31,31,"3",'#00ff00','#ffffff','#000000','#000000','',11,'Verdana','Bold','center','middle',2,'0.00','32','32',2,'#ffffff','#00ff00','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
level_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetMuc(3);
InitGame();
  return;
}
 );
var title = CreText('title',144,-3,316,45,"Luyện trí nhớ",'rgba(0,0,0,0)','#ffffff','#fed8db','#ffffff','',22,'Arial Unicode MS','Bold','center','middle',0,'0.00','0','0',2,'rgba(0,0,0,0)','#ffffff','0','0','#ff004d','0','5','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var gcc = CreText('gcc',95,48,113,11,"Gamechocon.com",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',10,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var pink = CreText('pink',191,87,45,45,"",'#ff00ff','#ffffff','#000000','#ffffff','',18,'Times New Roman','Normal','center','middle',2,'0.00','0','0',1,'#000000','#ff00ff','0','0','rgba(0,0,0,0)','0','0','4','1',2,2,'rgba(0,0,0,0)',0,1.50);
pink.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUpColor();
  return;
}
 );
var yellow = CreText('yellow',403,87,45,45,"",'#ffff00','#ffffff','#000000','#ffffff','',18,'Times New Roman','Normal','center','middle',2,'0.00','0','0',1,'#000000','#ffff00','0','0','rgba(0,0,0,0)','0','0','4','1',2,2,'rgba(0,0,0,0)',0,1.50);
yellow.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUpColor();
  return;
}
 );
Page_1.add(Page_1_Backrounnd,Drawtext1,_1,_2,_3,_4,_5,_6,_7,_8,_9,_10,_11,_12,_13,_14,_15,_16,red,green,blue,bt_begin,bt_test,bt_result,message,level_1,level_2,level_3,title,gcc,pink,yellow);
stage.add(Page_1);
InitLacVietScript();
};
