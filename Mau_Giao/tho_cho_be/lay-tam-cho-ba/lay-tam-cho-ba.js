
var index=0;
var m_auto= true;
var m_size=6;
var posCau=[3,6.1,6.4,10.2,10.5,14,14.5,18.5,19.1,22.1,22.5,28];
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
StopSound();
SetFontColor("","cau_"+index,"#006600");
SetFontColor("","_"+index,"#006600");
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
folder_Resource ='/data/lay-tam-cho-ba';

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
var cau_1 = CreText('cau_1',98,146,453,34,"Cô giáo  dạy cháu về nhà",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 85, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Normal','center','top',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocCau();
  return;
}
 );
Page_1.add(cau_1);
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
var cau_3 = CreText('cau_3',98,214,453,34,"Nhưng bà đã rụng hết răng",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 85, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Normal','center','top',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocCau();
  return;
}
 );
Page_1.add(cau_3);
var cau_6 = CreText('cau_6',98,318,453,34,"Chè thơm hương tỏa khắp nhà vui vui",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 85, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Normal','center','top',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocCau();
  return;
}
 );
Page_1.add(cau_6);
var title = CreText('title',155,75,320,48,"Lấy tăm cho bà",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(255, 0, 255, 1.00)','rgba(255, 255, 255, 1.00)','',28,'Arial','Bold','center','middle',3,'0.00','30','30',1,'rgba(127, 127, 127, 255)','rgba(230, 230, 250, 0.00)','0','0','rgba(192, 192, 192, 255)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
KillTimerPage();
NgheNhac();
  return;
}
 );
Page_1.add(title);
var re = CreText('re',580,18,58,51,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_RE.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
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
var cau_4 = CreText('cau_4',98,248,453,34,"Cháu không còn được lấy tăm cho bà",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 85, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Normal','center','top',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocCau();
  return;
}
 );
Page_1.add(cau_4);
var cau_2 = CreText('cau_2',98,180,453,34,"Ăn xong nhớ lấy cho bà cái tăm",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 85, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Normal','center','top',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocCau();
  return;
}
 );
Page_1.add(cau_2);
var Drawtext_1 = CreText('Draw text_1',405,382,151,40," Định Hải",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',18,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Drawtext_1);
var cau_5 = CreText('cau_5',98,282,453,34,"Em đi rót nước bưng ra",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 85, 0, 1.00)','rgba(255, 255, 255, 1.00)','',22,'Arial','Normal','center','top',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocCau();
  return;
}
 );
Page_1.add(cau_5);
stage.add(Page_1);
InitLacVietScript();
};
