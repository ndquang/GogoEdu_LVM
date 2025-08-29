
var index=0;
var m_auto= true;
var m_size=18;
var posCau=[0,1.5,1.5,3,3,4.6,4.6,6.4,6.4,8.8,8.8,10.8,10.8,12.8,12.9,14.6,14.6,16.6,16.6,18.6,18.6,20.6,20.6,22.6,23,24.8,25,26.7,26.7,28.6,28.6,30.5,30.5,32.1,32.1,34];
function  ConTro(){
SetCursor("","title","pointer");
for(var i=1;i<=m_size;i++)
{
SetCursor("","cau_"+i,"pointer");
SetCursor("","_"+i,"pointer");
}
SetCursor("","re","pointer");
}
function  SetMau()
{
	SetFontColor("","cau_"+index,"#006600");
	SetFontColor("","_"+index,"#006600");

	if(m_auto==false)
	  return;
	index++;
	if(index>m_size) index=0;
	SetFontColor("","cau_"+index,"#FF00FF");
	SetFontColor("","_"+index,"#FF00FF");
	InvalidateObj("","");
}
function  DocCau()
{
KillTimerPage();
SetFontColor("","cau_"+index,"#006600");
SetFontColor("","_"+index,"#006600");
StopSound();
var name= GetName("");
name= replaceStr(name,"cau_",'');
index=name;
SetFontColor("","cau_"+index,"#FF00FF");
SetFontColor("","_"+index,"#FF00FF");
var tam= (index-1)*2;
PlayFromTo("ID_ALL",posCau[tam],posCau[tam+1]);
InvalidateObj("","");
}
function  EndNghe(){
	SetFontColor("","cau_"+index,"#006600");
	SetFontColor("","_"+index,"#006600");
	if(m_auto==false|| index<m_size)
	  return;
	index=0;
	PlayListSound("EndNghe()","ID_ALL");
}

function  NgheNhac(){
StopSound();
SetFontColor("","cau_"+index,"#006600");
index=0;
PlayListSound("EndNghe()","ID_ALL");
SetTimerPage(1000);
}


function  CallBack( name)
{
	var time= Random(5)+10;
	var xt= Random(640);
	var yt= Random(480);
	var rota= Random(720);
	var t = Transparent("",name);
	if(t==0) t=1; else t=0;
	transitionTo("",name,time*1000,xt,yt,1,rota,t,"CallBack('"+name+"');");

}
function  Animation(){
	for(var i=0; i<=4;i++)
	{
	var time = Random(5)+10;
	var xt= Random(640);
	var yt= Random(480);
	var rota= Random(720);
	var name ="note_"+i;
	transitionTo("",name,time*1000,xt,yt,1,rota,0,"CallBack('"+name+"');");
	}
}
folder_Resource ='/data/cu-li-ban-lam';

function Page_1()
{
 ConTro();
  PlayWave("","","ID_GIOITHIEU");
	if(m_auto== true){
	SetColorEx("","re","","ID_RE");
	}
else {
	SetColorEx("","re","","ID_NO_RE");
	}

Animation();
  return;
}
function Page_1_OnTimer()
{
var posSound = GetPosSound();
var tam= index*2;
if(posSound >= posCau[tam]-0.5 && posSound < posCau[tam+1])
{
	SetMau();
}
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

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page1_Backrounnd = CreText('Page1_Backrounnd',0,0,640,480,'','rgba(255, 255, 255, 1.00)','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','0','0','0','','0','0','0','0',0,0,'');
Page_1.add(Page1_Backrounnd);
var Drawtext_1 = CreText('Draw text_1',279,0,361,232,"",'rgba(255, 255, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE2.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 0.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Drawtext_1);
var cau_1 = CreText('cau_1',87,131,226,26,"Cu Lì bẩn lắm",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 85, 0, 1.00)','rgba(255, 255, 255, 1.00)','',18,'Arial','Normal','left','top',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocCau();
  return;
}
 );
Page_1.add(cau_1);
var cau_6 = CreText('cau_6',87,281,226,26,"Lội đất suốt ngày",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 85, 0, 1.00)','rgba(255, 255, 255, 1.00)','',18,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocCau();
  return;
}
 );
Page_1.add(cau_6);
var note_4 = CreText('note_4',3,1,109,92,"♥",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(255, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',72,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(note_4);
var note_1 = CreText('note_1',522,6,108,105,"♪",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','',72,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(note_1);
var note_2 = CreText('note_2',10,372,117,107,"♫",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','',72,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(note_2);
var note_3 = CreText('note_3',513,371,110,101,"#",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(255, 255, 255, 1.00)','',72,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(note_3);
var note_0 = CreText('note_0',408,-4,102,103,"☼",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(255, 104, 32, 1.00)','rgba(255, 255, 255, 1.00)','',72,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(note_0);
var cau_3 = CreText('cau_3',87,191,226,26,"Quần áo nhớp nhơ",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 85, 0, 1.00)','rgba(255, 255, 255, 1.00)','',18,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocCau();
  return;
}
 );
Page_1.add(cau_3);
var cau_5 = CreText('cau_5',87,251,226,26,"Chân không đi guốc",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 85, 0, 1.00)','rgba(255, 255, 255, 1.00)','',18,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocCau();
  return;
}
 );
Page_1.add(cau_5);
var title = CreText('title',138,72,320,48,"Cu Lì bẩn lắm",'rgba(230, 230, 250, 0.39)','rgba(255, 255, 255, 1.00)','rgba(0, 128, 255, 1.00)','rgba(255, 255, 255, 1.00)','',28,'Arial','Bold','center','middle',3,'0.00','30','30',1,'rgba(127, 127, 127, 255)','rgba(230, 230, 250, 0.00)','0','0','rgba(192, 192, 192, 255)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
KillTimerPage();
NgheNhac();
  return;
}
 );
Page_1.add(title);
var re = CreText('re',577,0,61,54,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_RE.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
re.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  if(m_auto== true){
	m_auto= false;
	SetColorEx("","","","ID_NO_RE");
	}
else {
	m_auto= true;
	SetColorEx("","","","ID_RE");
	}
InvalidateObj("","");
  return;
}
 );
Page_1.add(re);
var cau_4 = CreText('cau_4',87,221,226,26,"Mặt mày nhem nhuốc",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 85, 0, 1.00)','rgba(255, 255, 255, 1.00)','',18,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocCau();
  return;
}
 );
Page_1.add(cau_4);
var cau_2 = CreText('cau_2',87,161,226,26,"Chẳng tắm bao giờ",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 85, 0, 1.00)','rgba(255, 255, 255, 1.00)','',18,'Arial','Normal','left','top',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocCau();
  return;
}
 );
Page_1.add(cau_2);
var cau_7 = CreText('cau_7',87,311,226,26,"Dây mũi ra tay",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 85, 0, 1.00)','rgba(255, 255, 255, 1.00)','',18,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocCau();
  return;
}
 );
Page_1.add(cau_7);
var cau_8 = CreText('cau_8',87,341,226,26,"Không ai yêu cả",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 85, 0, 1.00)','rgba(255, 255, 255, 1.00)','',18,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocCau();
  return;
}
 );
Page_1.add(cau_8);
var cau_9 = CreText('cau_9',87,368,226,26,"Một mình buồn bả",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 85, 0, 1.00)','rgba(255, 255, 255, 1.00)','',18,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocCau();
  return;
}
 );
Page_1.add(cau_9);
var cau_10 = CreText('cau_10',349,131,226,26,"Tha thẩn đi chơi",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 85, 0, 1.00)','rgba(255, 255, 255, 1.00)','',18,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocCau();
  return;
}
 );
Page_1.add(cau_10);
var cau_11 = CreText('cau_11',349,161,226,26,"Ra góc vườn ngồi",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 85, 0, 1.00)','rgba(255, 255, 255, 1.00)','',18,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocCau();
  return;
}
 );
Page_1.add(cau_11);
var cau_12 = CreText('cau_12',349,191,226,26,"Thiu thiu ngủ gật",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 85, 0, 1.00)','rgba(255, 255, 255, 1.00)','',18,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocCau();
  return;
}
 );
Page_1.add(cau_12);
var cau_15 = CreText('cau_15',349,281,226,26,"Có con chim ri",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 85, 0, 1.00)','rgba(255, 255, 255, 1.00)','',18,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocCau();
  return;
}
 );
Page_1.add(cau_15);
var cau_16 = CreText('cau_16',349,311,226,26,"Đi tha hạt cải",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 85, 0, 1.00)','rgba(255, 255, 255, 1.00)','',18,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocCau();
  return;
}
 );
Page_1.add(cau_16);
var cau_17 = CreText('cau_17',349,341,226,26,"Chẳng may đánh vãi",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 85, 0, 1.00)','rgba(255, 255, 255, 1.00)','',18,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocCau();
  return;
}
 );
Page_1.add(cau_17);
var cau_18 = CreText('cau_18',349,368,226,26,"Rớt xuống đầu Lì",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 85, 0, 1.00)','rgba(255, 255, 255, 1.00)','',18,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocCau();
  return;
}
 );
Page_1.add(cau_18);
var cau_13 = CreText('cau_13',349,221,226,26,"Cả nhà quên mất",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 85, 0, 1.00)','rgba(255, 255, 255, 1.00)','',18,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocCau();
  return;
}
 );
Page_1.add(cau_13);
var cau_14 = CreText('cau_14',349,251,226,26,"Không nghỉ đến Lì",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 85, 0, 1.00)','rgba(255, 255, 255, 1.00)','',18,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocCau();
  return;
}
 );
Page_1.add(cau_14);
stage.add(Page_1);
InitLacVietScript();
};
