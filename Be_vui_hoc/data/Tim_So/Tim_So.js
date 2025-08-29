folder_Resource ='data/Tim_So';
var st="main(){GetScriptObj(\"\",\"tam\",0);}";
function Page_2()
{
SetVar("m_index",0);
SetVar("m_count",10);
SetShowObject("","good",0);
GetScriptObj("","Begin",0);
PlayWave("","","ID_SOUND5","");
SetText("","muc",1);
  return;
}

function Page_2_OnTimer()
{
var time= GetText("","time");
time=time-2;
if(time<30)
PlayWave("","","ID_SOUND4");
if(time<0)
{
PlayWave("","","ID_SOUND1");
KillTimerPage();
Message("Hết Giờ...");
GetScriptObj("","Tron",0);
time=200;
}
SetText("","time",time);
SetVar("m_timer",time);
InvalidateObj("","time");
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
 height: 480 
 });

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page2_Backrounnd = CreText('Page2_Backrounnd',0,0,640,480,'','#ffffff','','','','ID_IMAGE9.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','2','2','0','','0','0','0','0',0,0,'');
var Begin = CreText('Begin',30,-43,105,23,"Create",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',16,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#ff6820','#282828','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
Begin.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var count = GetVar("m_count");
var index = GetVar("m_index");
for(var i=index;i<=count;i++)
{
var x= Random(500)+50; 
var y= Random(400)+20; //30

CreateObj("",i,"DRAWTEXT_OBJ","",x,y,40,20); 
SetMoveView("",i,1);
SetText("",i,i);
SetShowObject("",i,1);
var color= Random(65000);
SetFontColor("",i,color);
SetFontSize("",i,18);
//SetFontStyle("",i,"B");
SetScriptObj("",i,st,0);
InvalidateObj("",i);
}
SetText("","time",200);
GetScriptObj("","Tron",0);
  return;
}
 );
var tam = CreText('tam',143,-79,51,23,"chuan",'rgba(0,0,0,0)','#ffffff','#ff0000','#ffffff','',8,'Verdana','Normal','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
tam.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var text = GetText("","");
var index= GetVar("m_index");
var count =GetVar("m_count");

if(text==index)
{
SetShowObject("","",0);
index++;
SetVar("m_index",index);
PlayWave("","","ID_SOUND2","");
SetText("","index",index);
}

if(index==count+1)
{
	KillTimerPage();
	SetText("","index",0);
	SetShowObject("","good",1);
      SpeakVN("","","Chúc mừng bạn");
	SetText("","time",000);	
	SetVar("m_timer",000);
	Delay(2000);
	SetShowObject("","good",0);
	var count = GetVar("m_count");
	count=count+10;
	SetVar("m_count",count);
	GetScriptObj("","Begin",0);
	SetText("","muc",GetText("","muc")+1);
	return;
}
return; 
}
 );
var time = CreText('time',288,20,84,23,"0",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',20,'Verdana','Bold','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#282828','0','1','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var Tron = CreText('Tron',178,12,84,36,"Bắt đầu",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',16,'Verdana','Bold','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#282828','0','1','rgba(0,0,0,0)','1','1','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
Tron.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var count = GetVar("m_count");
KillTimerPage();
for(var h=0;h<=count;h++)
{
var x= Random(500)+50;
var y= Random(400)+20;
MoveObjectTo("",h,x,y);
SetShowObject("",h,1);
}
SetText("","time",200);
SetVar("m_index",0);
SetText("","index",0);
SetTimerPage(2000);
  return;
}
 );
var index = CreText('index',411,21,58,23,"0",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',20,'Verdana','Bold','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#282828','0','1','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var good = CreText('good',224,159,193,162,'','rgba(0,0,0,0)','','','','ID_ANIMATE_GIF1.GIF',0,'','','','',0,'0.00','32','32',2,'rgba(0,0,0,0)','','2','2','','0','0','4','1',5,6, '#666666');
good.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("","good",0);
  return;
}
 );
var Exit = CreText('Exit',50,421,30,30,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE3.GIF',18,'Verdana','Normal','center','middle',0,'0.00','32','32',1,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
Exit.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
OpenFile("Home.lvm","Page 4");
  return;
}


 );
var muc = CreText('muc',302,458,36,23,"1",'rgba(0,0,0,0)','#ffffff','#ff0000','#ffffff','',20,'Verdana','Bold','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#282828','0','1','#000000','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
Page_2.add(Page2_Backrounnd,Begin,tam,time,Tron,index,good,Exit,muc);
stage.add(Page_2);

 var Page_1 = new Kinetic.Layer({name: 'Page_1'});
var Page1_Backrounnd = CreText('Page1_Backrounnd',0,0,640,480,'','#ffffff','','','','ID_IMAGE10.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','2','2','0','','0','0','0','0',0,0,'');
var close_OH = CreText('close_OH',17,433,31,31,"",'#ffffff','#ffffff','#000000','#000000','ID_IMAGE11.GIF',18,'Verdana','Normal','center','middle',0,'0.00','32','32',1,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, 'rgba(0,0,0,0)',0,1.50);
close_OH.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
 // return;
}
 );
var Drawtext_1 = CreText('Draw text_1',166,148,339,149,"- Hãy tìm các số theo thứ tự trong khoảng thời gian quy định để được vào trang kế tiếp.\r\n\r\n- Nhấn vào nút  |Bắt đầu| để tìm lại.\r\n\r\n* Lưu ý: Khi các số nằm chồng lên nhau hãy dùng chuột kéo các số tách rời nhau trước khi tìm số.",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Verdana','Normal','left','middle',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page1_Backrounnd,close_OH,Drawtext_1);
stage.add(Page_1);
InitLacVietScript();
};
