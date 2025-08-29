folder_Resource ='data/cao_thap';
var kq=0;
function InitCur( page){
SetCursor(page,"bt_lam_lai","pointer");
SetCursor(page,"a","pointer");
SetCursor(page,"b","pointer");
}
function  TaoSo( page)
{
	PlaySound("ID_START");
      SetShowObject(page,"bang_diem",0);
	var x= Random(3)+3;
	var y= Random(3)+3;
	while(x==y)
		y= Random(3)+2;
	x=x*50;
	y=y*50;
      var low = GetTop(page,"chan_de");
      SetRect(page,"tru_0",-1,low-x,-1, x);
      SetRect(page,"tru_1",-1,low-y,-1, y);
	var he= GetHeight(page,"line_0");
	MoveObjectTo(page,"line_0",-1,low-x-he);
	MoveObjectTo(page,"line_1",-1,low-y-he);
	var cao_thap=  Random(2);
	var text= "";
	if(cao_thap==0){
		text= "Bên nào cao hơn?";
		if(x<y) kq= "B";
		else kq= "A";
	}
	else {
		 text="Bên nào thấp hơn?";
		if(x<y) kq= "A";
		else kq= "B";
	}
	SpeakVN("","",text);
	SetText(page,"chan_de",text);
	InvalidateObj(page,"");
}
var tMess=["Đúng rồi!","Giỏi quá!","Quá tuyệt!","Tốt quá!","Giỏi lắm!"];
function  Chonso( Page)
{
 if(GetText("","")==kq)
{
PlaySound("ID_TRUE");
var k= Random(5);
SpeakVN("","",tMess[k]);
SetText(Page,"m_diem",GetText("",""));
SetText(Page,"label",tMess[k]);
SetFontColor(Page,"label","#008000");
SetShowObject(Page,"bang_diem",1);
}
else{
PlaySound("ID_FALSE");
SpeakVN("","","Sai rồi");
SetFontColor(Page,"label","#ff0000");
SetText(Page,"m_diem",GetText("",""));
SetText(Page,"label","Sai rồi!");
SetShowObject(Page,"bang_diem",1);
Delay("SetShowObject('','bang_diem',0)",1000);
}
}
function Page_1()
{
InitCur("Page_1");
TaoSo("Page_1");
  return;
}

function Page_2()
{
InitCur("Page_2");
TaoSo("Page_2");
  return;
}

function Page_3()
{
InitCur("Page_3");
TaoSo("Page_3");
  return;
}

function Page_4()
{
InitCur("Page_4");
TaoSo("Page_4");
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
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
Page_1.add(Page_1_Backrounnd);
var tru_1 = CreText('tru_1',366,188,111,199,"",'#666666','#ffffff','#000000','#ffffff','ID_IMAGE7.GIF',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#666666','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(tru_1);
var line_1 = CreText('line_1',366,94,111,93,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE1.GIF',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(line_1);
var tru_0 = CreText('tru_0',191,189,111,198,"",'#666666','#ffffff','#000000','#ffffff','ID_IMAGE7.GIF',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#666666','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(tru_0);
var line_0 = CreText('line_0',191,94,111,93,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE1.GIF',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(line_0);
var m_diem = CreText('m_diem',207,176,252,141,"8",'rgba(255,255,255,0.98)','#ffffff','#0080ff','#ffffff','',48,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0080ff','rgba(192,192,192,0.98)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(m_diem);
var t_mess = CreText('t_mess',207,176,252,21,"Thông báo",'rgba(0,128,192,0.98)','#ffffff','#ffffff','#ffffff','',12,'Arial','Bold','left','middle',0,'0.00','30','30',1,'#0080ff','rgba(100,205,255,0.98)','4','1','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(t_mess);
var bt_lam_lai = CreText('bt_lam_lai',266,275,125,31,"Tiếp",'#0080c0','#ffffff','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',0,'0.00','30','30',1,'#ffffff','#4fa7ff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_1.add(bt_lam_lai);
var label = CreText('label',206,192,249,39,"Đúng rồi",'rgba(0, 0, 0, 0)','#ffffff','#005500','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#009300','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(label);
var chan_de = CreText('chan_de',31,388,592,49,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','bottom',7,'0.00','9','10',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
chan_de.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var tt= GetText("","");
SpeakVN("","",tt);
  return;
}
 );
Page_1.add(chan_de);
var a = CreText('a',235,392,32,22,"A",'#c0c0c0','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','10',0,'rgba(0, 0, 0, 0)','#ffffff','3','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
a.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Chonso("Page_1");
  return;
}
 );
Page_1.add(a);
var b = CreText('b',408,393,32,22,"B",'#c0c0c0','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','10',0,'rgba(0, 0, 0, 0)','#ffffff','3','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
b.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Chonso("Page_1");
  return;
}
 );
Page_1.add(b);
var bang_diem = new Kinetic.Group({name:'bang_diem',x:0,y:0,width:257,height:145});
bang_diem.add(m_diem);
bang_diem.add(t_mess);
bang_diem.add(bt_lam_lai);
bang_diem.add(label);
Page_1.add(bang_diem);
stage.add(Page_1);

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page_2_Backrounnd = CreText('Page_2_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
Page_2.add(Page_2_Backrounnd);
var tru_1 = CreText('tru_1',382,129,111,199,"",'#666666','#ffffff','#000000','#ffffff','ID_IMAGE5.GIF',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#666666','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(tru_1);
var tru_0 = CreText('tru_0',160,126,111,199,"",'#666666','#ffffff','#000000','#ffffff','ID_IMAGE5.GIF',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#666666','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(tru_0);
var chan_de = CreText('chan_de',30,352,592,90,"",'#009300','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','bottom',7,'0.00','9','10',0,'rgba(0, 0, 0, 0)','#009300','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
chan_de.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","",GetText("",""));
  return;
}
 );
Page_2.add(chan_de);
var line_0 = CreText('line_0',160,34,111,93,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE4.GIF',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(line_0);
var than_1 = CreText('than_1',160,343,111,68,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE12.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(than_1);
var than_0 = CreText('than_0',382,343,111,68,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE12.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(than_0);
var line_1 = CreText('line_1',382,37,111,93,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE4.GIF',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(line_1);
var a = CreText('a',189,416,32,22,"A",'#c0c0c0','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','10',0,'rgba(0, 0, 0, 0)','#ffffff','3','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
a.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Chonso("Page_2");
  return;
}
 );
Page_2.add(a);
var b = CreText('b',413,416,32,22,"B",'#c0c0c0','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','10',0,'rgba(0, 0, 0, 0)','#ffffff','3','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
b.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Chonso("Page_2");
  return;
}
 );
Page_2.add(b);
var m_diem = CreText('m_diem',210,170,252,141,"8",'rgba(255,255,255,0.98)','#ffffff','#0080ff','#ffffff','',48,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0080ff','rgba(192,192,192,0.98)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(m_diem);
var t_mess = CreText('t_mess',210,170,252,21,"Thông báo",'rgba(0,128,192,0.98)','#ffffff','#ffffff','#ffffff','',12,'Arial','Bold','left','middle',0,'0.00','30','30',1,'#0080ff','rgba(100,205,255,0.98)','4','1','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(t_mess);
var bt_lam_lai = CreText('bt_lam_lai',269,269,125,31,"Tiếp",'#0080c0','#ffffff','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',0,'0.00','30','30',1,'#ffffff','#4fa7ff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_2.add(bt_lam_lai);
var label = CreText('label',209,186,249,39,"Đúng rồi",'rgba(0, 0, 0, 0)','#ffffff','#005500','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#009300','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(label);
var bang_diem = new Kinetic.Group({name:'bang_diem',x:0,y:0,width:257,height:145});
bang_diem.add(m_diem);
bang_diem.add(t_mess);
bang_diem.add(label);
bang_diem.add(bt_lam_lai);
Page_2.add(bang_diem);
stage.add(Page_2);

 var Page_3 = new Kinetic.Layer({name: 'Page_3',callback:'Page_3()'});
var Page_3_Backrounnd = CreText('Page_3_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
Page_3.add(Page_3_Backrounnd);
var chan_de = CreText('chan_de',51,384,592,61,"",'#480048','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','bottom',7,'0.00','9','10',0,'rgba(0, 0, 0, 0)','#480048','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
chan_de.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","",GetText("",""));
  return;
}
 );
Page_3.add(chan_de);
var line_0 = CreText('line_0',181,63,69,104,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE8.GIF',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(line_0);
var tru_0 = CreText('tru_0',181,166,69,199,"",'#666666','#ffffff','#000000','#ffffff','ID_IMAGE3.GIF',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#666666','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(tru_0);
var Drawtext_2 = CreText('Draw text_2',181,361,69,23,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE2.GIF',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(Drawtext_2);
var line_1 = CreText('line_1',424,66,69,104,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE8.GIF',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(line_1);
var tru_1 = CreText('tru_1',424,169,69,199,"",'#666666','#ffffff','#000000','#ffffff','ID_IMAGE3.GIF',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#666666','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(tru_1);
var DrawText_3 = CreText('DrawText_3',424,361,69,23,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE2.GIF',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(DrawText_3);
var a = CreText('a',200,394,32,22,"A",'#c0c0c0','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','10',0,'rgba(0, 0, 0, 0)','#ffffff','3','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
a.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Chonso("Page_3");
  return;
}
 );
Page_3.add(a);
var b = CreText('b',441,396,32,22,"B",'#c0c0c0','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','10',0,'rgba(0, 0, 0, 0)','#ffffff','3','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
b.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Chonso("Page_3");
  return;
}
 );
Page_3.add(b);
var m_diem = CreText('m_diem',207,185,252,141,"8",'rgba(255,255,255,0.98)','#ffffff','#0080ff','#ffffff','',48,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0080ff','rgba(192,192,192,0.98)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(m_diem);
var t_mess = CreText('t_mess',207,185,252,21,"Thông báo",'rgba(0,128,192,0.98)','#ffffff','#ffffff','#ffffff','',12,'Arial','Bold','left','middle',0,'0.00','30','30',1,'#0080ff','rgba(100,205,255,0.98)','4','1','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(t_mess);
var bt_lam_lai = CreText('bt_lam_lai',266,284,125,31,"Tiếp",'#0080c0','#ffffff','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',0,'0.00','30','30',1,'#ffffff','#4fa7ff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_3.add(bt_lam_lai);
var label = CreText('label',206,201,249,39,"Đúng rồi",'rgba(0, 0, 0, 0)','#ffffff','#005500','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#009300','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(label);
var bang_diem = new Kinetic.Group({name:'bang_diem',x:0,y:0,width:257,height:145});
bang_diem.add(m_diem);
bang_diem.add(t_mess);
bang_diem.add(bt_lam_lai);
bang_diem.add(label);
Page_3.add(bang_diem);
stage.add(Page_3);

 var Page_4 = new Kinetic.Layer({name: 'Page_4',callback:'Page_4()'});
var Page_4_Backrounnd = CreText('Page_4_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
Page_4.add(Page_4_Backrounnd);
var line_0 = CreText('line_0',174,67,69,104,"|||",'#ffffff','#ffffff','#c0c0c0','#ffffff','ID_IMAGE9.GIF',14,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(line_0);
var line_1 = CreText('line_1',374,65,69,104,"|||",'#ffffff','#ffffff','#ffffff','#ffffff','ID_IMAGE9.GIF',14,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(line_1);
var chan_de = CreText('chan_de',24,363,592,73,"",'#804000','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','bottom',7,'0.00','9','10',0,'rgba(0, 0, 0, 0)','#804000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
chan_de.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","",GetText("",""));
  return;
}
 );
Page_4.add(chan_de);
var DrawText_2 = CreText('DrawText_2',373,361,69,27,"---",'#001c1c','#ffffff','#c0c0c0','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','9','10',2,'#400000','#001c1c','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(DrawText_2);
var DrawText_1 = CreText('DrawText_1',173,361,69,27,"---",'#001c1c','#ffffff','#c0c0c0','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','9','10',2,'#400000','#001c1c','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(DrawText_1);
var tru_1 = CreText('tru_1',374,170,69,194,"",'#e9e9e9','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','9','10',1,'#c0c0c0','#e9e9e9','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(tru_1);
var tru_0 = CreText('tru_0',173,172,69,192,"",'#e9e9e9','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','5','10',1,'#c0c0c0','#e9e9e9','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(tru_0);
var a = CreText('a',186,397,32,22,"A",'#c0c0c0','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','10',0,'rgba(0, 0, 0, 0)','#ffffff','3','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
a.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Chonso("Page_4");
  return;
}
 );
Page_4.add(a);
var b = CreText('b',395,395,32,22,"B",'#c0c0c0','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','10',0,'rgba(0, 0, 0, 0)','#ffffff','3','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
b.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Chonso("Page_4");
  return;
}
 );
Page_4.add(b);
var m_diem = CreText('m_diem',180,181,252,141,"8",'rgba(255,255,255,0.98)','#ffffff','#0080ff','#ffffff','',48,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0080ff','rgba(192,192,192,0.98)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(m_diem);
var t_mess = CreText('t_mess',180,181,252,21,"Thông báo",'rgba(0,128,192,0.98)','#ffffff','#ffffff','#ffffff','',12,'Arial','Bold','left','middle',0,'0.00','30','30',1,'#0080ff','rgba(100,205,255,0.98)','4','1','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(t_mess);
var bt_lam_lai = CreText('bt_lam_lai',239,280,125,31,"Tiếp",'#0080c0','#ffffff','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',0,'0.00','30','30',1,'#ffffff','#4fa7ff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GoToPage("Page_1");
  return;
}
 );
Page_4.add(bt_lam_lai);
var label = CreText('label',179,197,249,39,"Đúng rồi",'rgba(0, 0, 0, 0)','#ffffff','#005500','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#009300','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(label);
var bang_diem = new Kinetic.Group({name:'bang_diem',x:0,y:0,width:257,height:145});
bang_diem.add(m_diem);
bang_diem.add(t_mess);
bang_diem.add(bt_lam_lai);
bang_diem.add(label);
Page_4.add(bang_diem);
stage.add(Page_4);
InitLacVietScript();
};
