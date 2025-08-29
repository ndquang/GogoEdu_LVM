
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
SetText("","play","☺");
InvalidateObj("","");
 if(m_auto == true)
   NextPage();
}
function DocTho( id)
{
  if(!m_play){
  PlayListSound("DocTruyen()",id,"ID_CLICK");
  m_play= true;
  SetText("","play","☻");
  }
  else SetText("","play","☻");

if(m_auto== true){
	SetColorEx("","re","","ID_RE");
	SetShowObject("","next",0);
	SetShowObject("","pre",0);
}
else {
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
folder_Resource ='/data/Uoc_mo_cua_Ty';

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
DocTho("ID_BAI3");
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
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,640,480,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE10.PNG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(0, 0, 0, 0)','2','2','0','','0','0','0','0',0,0,'');
Page_1.add(Page_1_Backrounnd);
var title = CreText('title',242,54,162,212,"Mẹ! Mẹ ơi! \r\nCon học giỏi \r\nMẹ Tý hỏi: \r\nGiỏi làm gì? \r\nTý thầm nghĩ: \r\nCon sẽ đi \r\nLàm cảnh sát",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','left','middle',3,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 224, 0.00)','0','0','rgba(255, 255, 255, 255)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(title);
var Drawtext_1 = CreText('Draw text_1',232,14,188,39,"Ước mơ của Tý",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Bold','center','middle',3,'0.00','7','0',0,'rgba(0, 0, 0, 0)','rgba(255, 0, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Drawtext_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  PlayListSound("DocTruyen()","ID_BAI1");
  return;
}

 );
Page_1.add(Drawtext_1);
var Drawtext_3 = CreText('Draw text_3',285,48,150,20,"Lưu Thị Ngọc Lễ",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Drawtext_3);
var play = CreText('play',378,60,56,56,"☺",'rgba(255, 255, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',36,'Arial','Normal','center','middle',2,'0.00','37','-24',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','3','rgba(255, 255, 255, 255)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
play.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTho("ID_BAI1");
}

 );
Page_1.add(play);
var next = CreText('next',601,219,38,52,"►",'rgba(128, 0, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',28,'Arial','Normal','center','middle',0,'0.00','50','-31',2,'rgba(255, 255, 255, 255)','rgba(128, 0, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
next.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}

 );
Page_1.add(next);
var re = CreText('re',574,4,58,51,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_RE.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
re.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DungLai();
  return;
}
 );
Page_1.add(re);
stage.add(Page_1);

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page2_Backrounnd = CreText('Page2_Backrounnd',0,0,640,480,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE12.PNG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(0, 0, 0, 0)','2','2','0','','0','0','0','0',0,0,'');
Page_2.add(Page2_Backrounnd);
var Drawtext_1 = CreText('Draw text_1',141,69,172,278,"Con đứng gác \r\nNgã tư đường \r\nĐể người sang \r\nAn toàn mãi \r\nNày dừng lại \r\nĐèn đỏ rồi!\r\nĐi chậm thôi\r\nĐèn vàng đấy!\r\nĐi thoải mái \r\nĐèn xanh mà!",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','left','top',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Drawtext_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DocTho("ID_BAI2");
  return;
}
 );
Page_2.add(Drawtext_1);
var pre = CreText('pre',-1,191,38,52,"◄",'rgba(128, 0, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',24,'Arial','Normal','center','middle',0,'0.00','30','30',1,'rgba(255, 255, 255, 255)','rgba(128, 0, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
pre.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}

 );
Page_2.add(pre);
var next = CreText('next',601,191,38,52,"►",'rgba(128, 0, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',28,'Arial','Normal','center','middle',0,'0.00','50','-31',2,'rgba(255, 255, 255, 255)','rgba(128, 0, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
next.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}

 );
Page_2.add(next);
var re = CreText('re',581,2,58,51,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_RE.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
re.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DungLai();
  return;
}
 );
Page_2.add(re);
var play = CreText('play',136,13,63,61,"☻",'rgba(255, 255, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',48,'Arial','Normal','center','middle',1,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
play.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  DocTho("ID_BAI2");
}

 );
Page_2.add(play);
stage.add(Page_2);

 var Page_3 = new Kinetic.Layer({name: 'Page_3',callback:'Page_3()'});
var Page3_Backrounnd = CreText('Page3_Backrounnd',0,0,640,480,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE13.PNG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(0, 0, 0, 0)','2','2','0','','0','0','0','0',0,0,'');
Page_3.add(Page3_Backrounnd);
var Drawtext_1 = CreText('Draw text_1',238,49,212,179,"Mẹ cười xòa\r\nKhen Tý giỏi\r\nTý phấn khởi\r\n\r\nCười ha ha! \r\nTý sẽ làm\r\nAnh cảnh sát!",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',18,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(Drawtext_1);
var play = CreText('play',314,2,65,68,"►",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',48,'Arial','Normal','center','middle',1,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 0, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
play.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  DocTho("ID_BAI3");
  return;
}

 );
Page_3.add(play);
var re = CreText('re',574,7,58,51,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_RE.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
re.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DungLai();
  return;
}
 );
Page_3.add(re);
var Home = CreText('Home',7,2,81,80,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE8.PNG',0,'','','','',0,'0.00','30','30',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, 'rgba(128, 128, 128, 255)');
Home.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GoToPage("Page_1");
  return;
}
 );
Page_3.add(Home);
stage.add(Page_3);
InitLacVietScript();
};
