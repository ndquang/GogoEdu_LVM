
var index=0;
var m_auto= true;
var m_size=6;
var posCau=[0,14.244,14.244,23.418,23.418,32.269,32.269,41.258,41.258,50.247,50.247,60.1];
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
folder_Resource ='/data/Con_duong_cua_be';

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
 height: 450 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page1_Backrounnd = CreText('Page1_Backrounnd',0,0,640,450,'','rgba(255, 255, 255, 1.00)','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','0','0','0','','0','0','0','0',0,0,'');
Page_1.add(Page1_Backrounnd);
var Text_4 = CreText('Text_4',231,179,115,99,"",'rgba(255, 255, 255, 0.78)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE8.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 0.00)','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_4);
var cau_2 = CreText('cau_2',38,195,312,101,"Đường của chú hải quân\r\nMênh mông trên biển cả\r\nTới những vùng đảo xa\r\nVà những bờ biển lạ",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 85, 0, 1.00)','rgba(255, 255, 255, 1.00)','',18,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocCau();
  return;
}
 );
Page_1.add(cau_2);
var Text_8 = CreText('Text_8',509,281,144,120,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE7.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_8);
var Text_7 = CreText('Text_7',516,188,144,102,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE6.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_7);
var Text_6 = CreText('Text_6',518,88,144,102,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE4.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_6);
var Text_5 = CreText('Text_5',206,272,144,139,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE3.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_5);
var Text_3 = CreText('Text_3',227,89,113,95,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE1.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_3);
var cau_1 = CreText('cau_1',39,100,312,89,"Đường của chú phi công\r\nLẫn trong mây cao tít \r\nKhắp những vùng trời xanh \r\nNhững vì sao chi chít",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 85, 0, 1.00)','rgba(255, 255, 255, 1.00)','',18,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocCau();
  return;
}
 );
Page_1.add(cau_1);
var cau_6 = CreText('cau_6',340,298,312,101,"Bà bảo đường của bé\r\nChỉ đi đến trường thôi\r\nBé tìm mỗi sớm mai\r\nCon đường trên trang sách.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 85, 0, 1.00)','rgba(255, 255, 255, 1.00)','',18,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var cau_5 = CreText('cau_5',340,195,312,101,"Và con đường của mẹ\r\nLà ở trên cánh đồng\r\nCó ruộng dâu xanh tốt\r\nThảm lúa vàng ngát hương.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 85, 0, 1.00)','rgba(255, 255, 255, 1.00)','',18,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocCau();
  return;
}
 );
Page_1.add(cau_5);
var title = CreText('title',167,19,351,43,"CON ĐƯỜNG CỦA BÉ",'rgba(0, 147, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',28,'Arial','Bold','center','middle',11,'0.00','10','0',1,'rgba(127, 127, 127, 255)','rgba(0, 147, 0, 1.00)','0','0','rgba(192, 192, 192, 255)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var cau_4 = CreText('cau_4',340,100,312,101,"Còn con đường của bố\r\nĐi trên giàn giáo cao\r\nNhững khung sắt nối nhau\r\nDựng nên bao nhà mới",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 85, 0, 1.00)','rgba(255, 255, 255, 1.00)','',18,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocCau();
  return;
}
 );
Page_1.add(cau_4);
var Text_1 = CreText('Text_1',91,19,73,43,"Bài thơ:",'rgba(0, 147, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',18,'Arial','Normal','center','middle',3,'0.00','11','0',0,'rgba(0, 0, 0, 0)','rgba(0, 147, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_1);
var note_0 = CreText('note_0',408,-4,102,103,"☼",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(255, 104, 32, 1.00)','rgba(255, 255, 255, 1.00)','',72,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(note_0);
var Text_2 = CreText('Text_2',384,398,139,31,"Thanh Thảo",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Italic','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_2);
var cau_3 = CreText('cau_3',41,298,312,101,"Con đường làm bằng sắt\r\nLà của bác lái tầu\r\nChạy dài theo đất nước\r\nĐi song hành bên nhau",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 85, 0, 1.00)','rgba(255, 255, 255, 1.00)','',18,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocCau();
  return;
}
 );
Page_1.add(cau_3);
stage.add(Page_1);
InitLacVietScript();
};
