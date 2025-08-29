folder_Resource ='data/tu_vung_tieng_anh_lop_4';
var size=19;
var a_w=["today","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","zoo","football","play","watch","listen","music","swimming","piano","grandparents","guitar","weekend"];
var a_vn=["hôm nay","thứ hai","thứ ba","thứ tư","thứ năm","thứ sáu","thứ bảy","chủ nhật","sở thú","đá bamh", "xem","nghe","nhạc","bơi lội","đàn piano","ông bà","đàn ghi ta", "cuối tuần"];
var index=0;
var len=0;
var dem=0;
var diem = 0;
var s_title ="";
function setCharAt( str,  index,  chr) {
    if(index > length(str)-1) return str;
	return subString(str,0,index)+chr + subString(str,index+1);
}
function DocTieuDe(){
Speak(s_title,"EN");
}
function Tron( xxx)
{
	len = length(xxx);
	for(var j=0;j<10;j++){
	      var x= Random(len);
      	var y= Random(len);
		while (x==y)
		y= Random(len);
		var tamx= subString(xxx,x,1);
		var tamy= subString(xxx,y,1);
		xxx= setCharAt(xxx,x,tamy);
		xxx= setCharAt(xxx,y,tamx);
	}
	return xxx;
}
function CreateW( idx)
{	
	index=idx;
	SetText("","v",a_vn[index]);
	//SetRsc("","anh",a_w[index]);
	SetText("","w","");
	SpeakEN("","", a_w[index]);
	var text= toLowerCase(a_w[index]);
	text= Tron(text);
	len= length(text);
	for(var i=0;i<len;i++){
	    var char= subString(text,i,1);
	    SetText("","l_"+i,char);
	    SetShowObject("","l_"+i,1);
	    MoveObjectTo("","l_"+i,-1,-1,50,5, Random(10));
	    }
	for(i=len;i<12;i++)
		SetShowObject("","l_"+i,0);
	dem=0;
      SetFontColor("","hits","#000000");
	SetText("","hits","");
      Speak( a_vn[index],"VN");
	InvalidateObj("","");
}
function  NewGame()
{
    var x= index+1;
      if(x>=size)
	x= Random(size);
	CreateW(x);
}
function  EndCallback(){
 Speak( a_vn[index],"VN");
 Delay("NewGame()",5000);
}
function EndGame()
{
if(GetText("","w")== toLowerCase(a_w[index]))
			{
			Speak(a_w[index],"EN","{ pitch: 1, rate: 0.8,onend: EndCallback}");
			SetText("","w",a_w[index]);
			SetFontColor("","hits","#00aa00");
			diem++;
			SetText("","hits","Đúng:" + diem + " điểm.");
			}
		else {
			PlaySound("ID_WRONG");
			SetFontColor("","hits","#ff0000");
			diem--;
			SetText("","hits","Sai:" + diem + " điểm.");
			Delay("CreateW(index)",1000);
			}
UpdateScore(diem);
InvalidateObj("","");
}
function Check()
{
	var leter= GetText("","");
	var tt = GetText("","w")+ leter;
	SetText("","w",tt);
	SetShowObject("","",0);
		if(dem==len){
			Delay("EndGame()",1000);
		 }
}

function HideHelp()
{
  SetText("","hits","");
  InvalidateObj("","");
}
function ShowHelp()
{
SpeakEN("","", a_w[index]);
   SetText("","hits", toLowerCase(a_w[index]));
   InvalidateObj("","");
}
function  ClickLeter(){
	dem=dem+1;
	MoveObjectTo("","", GetLeft("","w")+ GetWidth("","w")/2, GetTop("","w"),50,5,0,"Check()");
}
function Page_1()
{
//var s_title = $("#idTitle").clone().children().remove().end().text();
SetText("","title", s_title);
 DocTieuDe();
index=-1;
  for(var i=0;i<12;i++)
	SetCursor("","l_"+i,"pointer");
NewGame();
 diem = GetVer();
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
 width: 800,
 height: 450 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,800,450,'','#d2b48c','','','','ID_IMAGE2.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#d2b48c','2','2','0','','0','0','0','0',0,0,'');
var w = CreText('w',1,134,797,103,"Hello",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',48,'Arial','Bold','center','middle',11,'0.00','10','0',0,'rgba(0,0,0,0)','rgba(255,255,255,0.44)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
w.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","", a_w[index]);
  return;
}
 );
var v = CreText('v',181,267,447,77,"1000",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Normal','center','middle',3,'0.00','10','0',0,'rgba(0,0,0,0)','rgba(255,255,255,0.44)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
v.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"VN");
  return;
}
 );
var l_0 = CreText('l_0',37,376,46,46,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',36,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
l_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickLeter();
  return;
}
 );
l_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
var l_1 = CreText('l_1',100,376,46,46,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',36,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
l_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickLeter();
  return;
}
 );
l_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
var l_2 = CreText('l_2',163,376,46,46,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',36,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
l_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickLeter();
  return;
}
 );
l_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
var l_3 = CreText('l_3',226,376,46,46,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',36,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
l_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickLeter();
  return;
}
 );
l_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
var l_4 = CreText('l_4',289,376,46,46,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',36,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
l_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickLeter();
  return;
}
 );
l_4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
var l_5 = CreText('l_5',352,376,46,46,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',36,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
l_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickLeter();
  return;
}
 );
l_5.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
var l_6 = CreText('l_6',415,376,46,46,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',36,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
l_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickLeter();
  return;
}
 );
l_6.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
var l_7 = CreText('l_7',478,376,46,46,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',36,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
l_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickLeter();
  return;
}
 );
l_7.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
var l_8 = CreText('l_8',541,376,46,46,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',36,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
l_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickLeter();
  return;
}
 );
l_8.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
var l_9 = CreText('l_9',604,376,46,46,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',36,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
l_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickLeter();
  return;
}
 );
l_9.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
var l_10 = CreText('l_10',667,376,46,46,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',36,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
l_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickLeter();
  return;
}
 );
l_10.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
var l_11 = CreText('l_11',733,376,46,46,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',36,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
l_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickLeter();
  return;
}
 );
l_11.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
var help = CreText('help',638,54,67,67,"help",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',24,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
help.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;

  HideHelp();
  return;
}
 );
help.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
  
 ShowHelp();
  return;
}
 );
var tao = CreText('tao',550,54,67,67,"new",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',24,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tao.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  NewGame();
  return;
}
 );
var Text_1 = CreText('Text_1',727,52,67,67,"↓",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',26,'Arial','Bold','center','middle',2,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  CreateW(index);
  return;
}
 );
Text_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
  
 ShowHelp();
  return;
}
 );
var title = CreText('title',3,1,797,51,"What day is it today?",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','0','1',2,'#ffffff','rgba(255,255,255,0.44)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
title.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
var hits = CreText('hits',165,219,478,47,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',26,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','rgba(192,192,192,0.44)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,w,v,l_0,l_1,l_2,l_3,l_4,l_5,l_6,l_7,l_8,l_9,l_10,l_11,help,tao,Text_1,title,hits);
stage.add(Page_1);
InitLacVietScript();
};
