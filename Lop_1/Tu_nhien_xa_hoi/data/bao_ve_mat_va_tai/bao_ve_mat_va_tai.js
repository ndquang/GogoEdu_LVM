folder_Resource ='data/bao_ve_mat_va_tai';
function ClickObj(){
 var tt = GetText("","");
 if(tt!="Đ")
	{
	SetText("","","Đ");
	Speak("Đúng","VN");
}
 else {SetText("","","S");
Speak("Sai","VN");
}
 InvalidateObj("","");
}
var a_kq=["S","Đ","S","Đ","S","Đ"];
function TaoBaiHoc()
{
for(var i=0; i< 6; i++)
{
  SetText("","n_"+i,"");
  SetFontColor("","n_"+i,"#0000ff");
}

SetShowObject("","m_diem",0);
SetShowObject("","cham_diem",1);
InvalidateObj("","");
var tt= GetText("","title");
Speak(tt,"VN");
}
function ChamDiem()
{
var m_diem=0;
for(var i=0; i< 6; i++)
		{
	
		if(GetText("","n_"+i)== a_kq[i]){
		   	m_diem=m_diem+1;
			SetFontColor("","n_"+i,"#00ff00");
			}
		else 
			SetFontColor("","n_"+i,"#ff0000");
	}
var diem = m_diem*10 / 6;
diem = ceil(diem);
SetText("","m_diem",diem+ " điểm.");
Speak("Bạn được "+diem + " điểm","VN");
SetShowObject("","m_diem",1);
SetShowObject("","begin",1);
SetShowObject("","",0);
InvalidateObj("","");
  return;
}
function Page_1()
{
TaoBaiHoc();
  return;
}

function Page_2()
{
  TaoBaiHoc();
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
 height: 580 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page1_Backrounnd = CreText('Page1_Backrounnd',0,0,640,580,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE1.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(0, 0, 0, 0)','2','2','0','','0','0','0','0',0,0,'');
Page_1.add(Page1_Backrounnd);
var n_0 = CreText('n_0',85,290,44,40,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',24,'Arial','Normal','center','middle',0,'0.00','0','0',2,'rgba(0, 0, 255, 255)','rgba(223, 223, 223, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
n_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
Page_1.add(n_0);
var n_1 = CreText('n_1',107,489,44,40,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',24,'Arial','Normal','center','middle',0,'0.00','0','0',2,'rgba(0, 0, 255, 255)','rgba(223, 223, 223, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
n_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
Page_1.add(n_1);
var n_2 = CreText('n_2',377,536,44,40,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',24,'Arial','Normal','center','middle',0,'0.00','0','0',2,'rgba(0, 0, 255, 255)','rgba(223, 223, 223, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
n_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
Page_1.add(n_2);
var n_3 = CreText('n_3',515,439,44,40,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',24,'Arial','Normal','center','middle',0,'0.00','0','0',2,'rgba(0, 0, 255, 255)','rgba(223, 223, 223, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
n_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
Page_1.add(n_3);
var n_4 = CreText('n_4',266,381,44,40,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',24,'Arial','Normal','center','middle',0,'0.00','0','0',2,'rgba(0, 0, 255, 255)','rgba(223, 223, 223, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
n_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
Page_1.add(n_4);
var n_5 = CreText('n_5',502,223,44,40,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',24,'Arial','Normal','center','middle',0,'0.00','0','0',2,'rgba(0, 0, 255, 255)','rgba(223, 223, 223, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
n_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
Page_1.add(n_5);
var title = CreText('title',6,6,626,29,"Viết chữ |Đ| vào ô vuông bên dưới hình vẽ thể hiện việc làm đúng để bảo vệ mắt",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 255, 1.00)','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.80);
title.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
Page_1.add(title);
var begin = CreText('begin',178,534,86,37,"Làm lại",'rgba(255, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','30','30',2,'rgba(255, 255, 255, 255)','rgba(70, 0, 0, 1.00)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
begin.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TaoBaiHoc();
SetShowObject("","",0);
  return;
}
 );
Page_1.add(begin);
var cham_diem = CreText('cham_diem',178,534,86,37,"Điểm",'rgba(255, 104, 32, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 0, 255)','rgba(165, 42, 0, 1.00)','4','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cham_diem.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChamDiem();
  return;
}

 );
Page_1.add(cham_diem);
var m_diem = CreText('m_diem',74,203,307,322,"10 điểm",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE3.PNG',36,'Arial','Bold','center','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','2','2','rgba(255, 255, 255, 255)','0','0','4','1',0,0, 'rgba(0, 0, 0, 0)',10,1.50);
Page_1.add(m_diem);
var name_18 = CreText('name_18',581,532,50,34,"→",'rgba(0, 147, 0, 1.00)','rgba(255, 173, 91, 1.00)','rgba(255, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','',26,'Arial','Bold','center','middle',0,'0.00','0','0',2,'rgba(255, 255, 0, 255)','rgba(0, 147, 0, 1.00)','0','3','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
name_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_1.add(name_18);
stage.add(Page_1);

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page2_Backrounnd = CreText('Page2_Backrounnd',0,0,640,580,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE2.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(0, 0, 0, 0)','2','2','0','','0','0','0','0',0,0,'');
Page_2.add(Page2_Backrounnd);
var title = CreText('title',8,3,624,19,"Viết chữ |Đ| vào ô vuông bên dưới hình vẽ thể hiện việc làm đúng để bảo vệ tai.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 255, 1.00)','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.80);
title.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
Page_2.add(title);
var n_0 = CreText('n_0',128,210,53,52,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',26,'Arial','Normal','center','middle',0,'0.00','0','0',2,'rgba(0, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
n_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
Page_2.add(n_0);
var n_1 = CreText('n_1',35,338,53,52,"Đ",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',26,'Arial','Normal','center','middle',0,'0.00','0','0',2,'rgba(0, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
n_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
Page_2.add(n_1);
var n_2 = CreText('n_2',305,364,53,52,"*",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',26,'Arial','Normal','center','middle',0,'0.00','0','0',2,'rgba(0, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
n_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
Page_2.add(n_2);
var n_3 = CreText('n_3',486,226,53,52,"",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',26,'Arial','Normal','center','middle',0,'0.00','0','0',2,'rgba(0, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
n_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
Page_2.add(n_3);
var n_4 = CreText('n_4',362,520,53,52,"*",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',26,'Arial','Normal','center','middle',0,'0.00','0','0',2,'rgba(0, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
n_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
Page_2.add(n_4);
var n_5 = CreText('n_5',9,449,22,21,"Đ",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',18,'Arial','Normal','center','top',0,'0.00','30','30',1,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
n_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
Page_2.add(n_5);
var begin = CreText('begin',183,548,96,30,"Làm lại",'rgba(255, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','30','30',2,'rgba(255, 255, 255, 255)','rgba(70, 0, 0, 1.00)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
begin.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TaoBaiHoc();
SetShowObject("","",0);
  return;
}
 );
Page_2.add(begin);
var cham_diem = CreText('cham_diem',183,547,96,30,"Điểm",'rgba(255, 104, 32, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 0, 255)','rgba(165, 42, 0, 1.00)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cham_diem.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChamDiem();  return;
}

 );
Page_2.add(cham_diem);
var Home = CreText('Home',7,535,49,34,"←",'rgba(0, 128, 0, 1.00)','rgba(255, 173, 91, 1.00)','rgba(255, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','',26,'Arial','Bold','center','middle',0,'0.00','0','0',2,'rgba(255, 255, 0, 255)','rgba(0, 128, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Home.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;

PrevPage();
  return;
}
 );
Page_2.add(Home);
var m_diem = CreText('m_diem',79,215,307,322,"10 điểm",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE3.PNG',36,'Arial','Bold','center','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','2','2','rgba(255, 255, 255, 255)','0','0','4','1',0,0, 'rgba(0, 0, 0, 0)',10,1.50);
Page_2.add(m_diem);
stage.add(Page_2);
InitLacVietScript();
};
