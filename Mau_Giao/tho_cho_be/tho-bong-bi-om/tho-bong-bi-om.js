
var m_auto = true;
var m_play= false;
function  ConTro(){
SetCursor("","next","pointer");
SetCursor("","pre","pointer");
SetCursor("","play","pointer");
SetCursor("","title","pointer");
SetCursor("","re","pointer");
}
function  DocTruyen(){
m_play = false;
SetText("","play","☻");
InvalidateObj("","");
 if(m_auto == true)
   NextPage();
}
function DocTho( id)
{
  if(!m_play){
  PlayListSound("DocTruyen()",id,"ID_CLICK");
  m_play= true;
  SetText("","play","☺");
  }
if(m_auto== true){
	SetColorEx("","re","","ID_RE");
	SetShowObject("","next",0);
	SetShowObject("","pre",0);
}
else  {
SetColorEx("","re","","ID_NO_RE");
SetShowObject("","next",1);
SetShowObject("","pre",1);
}
InvalidateObj("","");
  return;
}

function DungLai()
{
  if(m_auto== true){
	m_auto= false;
	SetColorEx("","","","ID_NO_RE");
	SetShowObject("","next",1);
	SetShowObject("","pre",1);
	}
else {
	m_auto= true;
	SetColorEx("","","","ID_RE");
	SetShowObject("","next",0);
	SetShowObject("","pre",0);
	}
InvalidateObj("","");
  return;
}
folder_Resource ='/data/tho-bong-bi-om';

function Page_1()
{
 ConTro();
PlaySound("ID_INIT");
 if(m_auto== true){
	SetColorEx("","re","","ID_RE");
	}
else {
	SetColorEx("","re","","ID_NO_RE");
	}
  return;
}

function Page_2()
{
ConTro();
DocTho("ID_BAI2");
  return;
}

function Page_3()
{
ConTro();
DocTho("ID_BAI3");  return;
}


function Page4()
{
ConTro();
DocTho("ID_BAI4");  return;
}


function Page5()
{
ConTro();
DocTho("ID_BAI5");
SetCursor("","home","pointer");
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
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,640,480,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE1.PNG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(0, 0, 0, 0)','2','2','0','','0','0','0','0',0,0,'');
Page_1.add(Page_1_Backrounnd);
var title = CreText('title',12,365,204,110,"Thỏ Bông bị ốm\r\nMiệng cứ xuýt xoa\r\nChốc chốc kêu la\r\nMẹ ơi, đau quá!",'rgba(255, 255, 224, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 0, 255, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Bold','left','top',3,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 1.00)','0','0','rgba(255, 255, 255, 255)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTho("ID_BAI1");
  return;
}
 );
Page_1.add(title);
var re = CreText('re',575,5,58,51,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_RE.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
re.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DungLai();
  return;
}
 );
Page_1.add(re);
var play = CreText('play',51,311,56,56,"☻",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 0, 255, 1.00)','rgba(255, 255, 255, 1.00)','',36,'Arial','Normal','center','middle',2,'0.00','37','-24',1,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
play.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTho("ID_BAI1");
}

 );
Page_1.add(play);
var next = CreText('next',602,220,38,52,"►",'rgba(128, 0, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',28,'Arial','Normal','center','middle',0,'0.00','50','-31',2,'rgba(255, 255, 255, 255)','rgba(128, 0, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
next.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}

 );
Page_1.add(next);
stage.add(Page_1);

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page2_Backrounnd = CreText('Page2_Backrounnd',0,0,640,480,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE2.PNG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(0, 0, 0, 0)','2','2','0','','0','0','0','0',0,0,'');
Page_2.add(Page2_Backrounnd);
var title = CreText('title',14,214,172,142,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','left','top',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTho("ID_BAI2");
  return;
}
 );
Page_2.add(title);
var play = CreText('play',141,205,51,55,"☻",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',28,'Arial','Normal','center','middle',1,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
play.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  DocTho("ID_BAI2");
}

 );
Page_2.add(play);
var pre = CreText('pre',0,161,38,52,"◄",'rgba(128, 0, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',24,'Arial','Normal','center','middle',0,'0.00','30','30',1,'rgba(255, 255, 255, 255)','rgba(128, 0, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
pre.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}

 );
Page_2.add(pre);
var re = CreText('re',574,4,58,51,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_RE.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
re.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DungLai();
  return;
}
 );
Page_2.add(re);
var next = CreText('next',602,161,38,52,"►",'rgba(128, 0, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',28,'Arial','Normal','center','middle',0,'0.00','50','-31',2,'rgba(255, 255, 255, 255)','rgba(128, 0, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
next.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}

 );
Page_2.add(next);
stage.add(Page_2);

 var Page_3 = new Kinetic.Layer({name: 'Page_3',callback:'Page_3()'});
var Page3_Backrounnd = CreText('Page3_Backrounnd',0,0,640,480,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE3.PNG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(0, 0, 0, 0)','2','2','0','','0','0','0','0',0,0,'');
Page_3.add(Page3_Backrounnd);
var title = CreText('title',435,300,212,179,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',18,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  DocTho("ID_BAI3");
}
 );
Page_3.add(title);
var play = CreText('play',584,277,46,53,"►",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(255, 0, 255, 1.00)','rgba(255, 255, 255, 1.00)','',28,'Arial','Normal','center','middle',1,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 0, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
play.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  DocTho("ID_BAI3");
  return;
}

 );
Page_3.add(play);
var re = CreText('re',567,6,58,51,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_RE.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
re.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DungLai();
  return;
}
 );
Page_3.add(re);
var next = CreText('next',600,191,38,52,"►",'rgba(128, 0, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',28,'Arial','Normal','center','middle',0,'0.00','50','-31',2,'rgba(255, 255, 255, 255)','rgba(128, 0, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
next.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}

 );
Page_3.add(next);
var pre = CreText('pre',2,191,38,52,"◄",'rgba(128, 0, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',24,'Arial','Normal','center','middle',0,'0.00','30','30',1,'rgba(255, 255, 255, 255)','rgba(128, 0, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
pre.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}

 );
Page_3.add(pre);
stage.add(Page_3);

 var Page4 = new Kinetic.Layer({name: 'Page4',callback:'Page4()'});
var Page4_Backrounnd = CreText('Page4_Backrounnd',0,0,640,480,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE5.PNG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(0, 0, 0, 0)','2','2','0','','0','0','0','0',0,0,'');
Page4.add(Page4_Backrounnd);
var play = CreText('play',572,319,53,53,"►",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(255, 0, 255, 1.00)','rgba(255, 255, 255, 1.00)','',28,'Arial','Normal','center','middle',1,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 0, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
play.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  DocTho("ID_BAI4");
  return;
}

 );
Page4.add(play);
var title = CreText('title',449,342,197,143,"Thỏ Bông thều thào:\r\nĂn me với sấu...\r\nUống nước không nấu\r\nMúc ở ngoài ao\r\nBụng sôi ào ào\r\nRuột đau như cắt",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(174, 215, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTho("ID_BAI4");
  return;
}
 );
Page4.add(title);
var re = CreText('re',567,4,58,51,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_RE.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
re.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DungLai();
  return;
}
 );
Page4.add(re);
var next = CreText('next',601,223,38,52,"►",'rgba(128, 0, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',28,'Arial','Normal','center','middle',0,'0.00','50','-31',2,'rgba(255, 255, 255, 255)','rgba(128, 0, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
next.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}

 );
Page4.add(next);
var pre = CreText('pre',1,223,38,52,"◄",'rgba(128, 0, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',24,'Arial','Normal','center','middle',0,'0.00','30','30',1,'rgba(255, 255, 255, 255)','rgba(128, 0, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
pre.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}

 );
Page4.add(pre);
stage.add(Page4);

 var Page5 = new Kinetic.Layer({name: 'Page5',callback:'Page5()'});
var Page5_Backrounnd = CreText('Page5_Backrounnd',0,0,640,480,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE5.PNG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(0, 0, 0, 0)','2','2','0','','0','0','0','0',0,0,'');
Page5.add(Page5_Backrounnd);
var Home = CreText('Home',10,1,81,80,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE8.PNG',0,'','','','',0,'0.00','30','30',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, 'rgba(128, 128, 128, 255)');
Home.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GoToPage("Page_1");
  return;
}
 );
Page5.add(Home);
var title = CreText('title',427,360,229,116,"Bác sỹ gật gật\r\nĐặt chiếc ống nghe\r\nKhám xong liền ghi:\r\nĐau vì ăn bậy",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Bold','center','middle',3,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(213, 241, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTho("ID_BAI5");
  return;
}
 );
Page5.add(title);
var play = CreText('play',578,324,46,52,"►",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(255, 0, 255, 1.00)','rgba(255, 255, 255, 1.00)','',28,'Arial','Normal','center','middle',1,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 0, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
play.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  DocTho("ID_BAI5");

  return;
}

 );
Page5.add(play);
var re = CreText('re',577,6,58,51,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_RE.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
re.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DungLai();
  return;
}
 );
Page5.add(re);
stage.add(Page5);
InitLacVietScript();
};
