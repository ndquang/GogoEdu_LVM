folder_Resource ='data/Colour';
var size=12;
var a_w=["Blue","Green","Red","Orange","Yellow","Pink","White","Black","Purple","Brown","Gray","Turquoise"];
var a_i=["#0000FF","#008000","#FF0000","#FFA500","#FFFF00","#FFC0CB","#FFFFFF","#000000","#800080","#A52A2A","#808080","#40E0D0"];
var a_vn=["Màu xanh dương","Màu xanh lá cây","Màu đỏ","Màu da cam","Màu vàng","Màu hồng","Màu trắng","Màu đen","Màu tím","Màu nâu","Màu xám","Màu ngọc lam"];

var index=0;
var len=0;
var dem=0;
var diem=0;
function setCharAt( str,  index,  chr) {
    if(index > length(str)-1) return str;
	return subString(str,0,index)+chr + subString(str,index+1);
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
	SetColor("","v",a_i[index]);
	SetText("","w","");
	SpeakEN("","", a_w[index]);
	var text= toLowerCase(a_w[index]);
	text= Tron(text);
	len= length(text);
	for(var i=0;i<len;i++){
	    var char= subString(text,i,1);
	    SetText("","l_"+i,char);
	    SetShowObject("","l_"+i,1);
	    MoveObjectTo("","l_"+i,-1,-1,20,2, Random(10));
	    }
	for(i=len;i<12;i++)
		SetShowObject("","l_"+i,0);
	dem=0;
	SetText("","hits","");
	InvalidateObj("","");
	diem=GetVer();
}
function  NewGame()
{
	var x= Random(size);
	while(x==index)
		x= Random(size);
	CreateW(x);
	PlaySound("ID_NEWGAME");

}
function EndGame()
{
if(GetText("","w")== toLowerCase(a_w[index]))
			{
			diem++;
			UpdateScore(diem);
			SpeakEN("","",a_w[index]);
			Delay("NewGame()",2000);
			}
		else {
			PlaySound("ID_WRONG");
			CreateW(index);
			}
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
   SetText("","hits", toLowerCase(a_w[index]));
SpeakEN("","", a_w[index]);

   InvalidateObj("","");
}

function  ClickLeter(){
	dem=dem+1;
	MoveObjectTo("","", GetLeft("","w")+ GetWidth("","w")/2, GetTop("","w"),200,2,0,"Check()");
}
function Page_1()
{
  for(var i=0;i<12;i++)
	SetCursor("","l_"+i,"pointer");
NewGame();
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
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,800,450,'','#d2b48c','','','','ID_IMAGE3.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#d2b48c','2','2','0','','0','0','0','0',0,0,'');
var v = CreText('v',186,75,430,173,"1000",'#804000','#ffffff','#ffffff','#ffffff','',26,'Arial','Bold','center','middle',3,'0.00','10','0',0,'rgba(0,0,0,0)','#804000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
v.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","", a_w[index]);
  return;
}
 );
var w = CreText('w',182,260,438,46,"Hello",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',36,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#4f2700','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var l_0 = CreText('l_0',207,375,58,58,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',36,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_1 = CreText('l_1',271,375,58,58,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',36,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_2 = CreText('l_2',335,375,58,58,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',36,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_3 = CreText('l_3',399,375,58,58,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',36,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_4 = CreText('l_4',463,375,58,58,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',36,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_5 = CreText('l_5',527,375,58,58,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',36,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_6 = CreText('l_6',591,375,58,58,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',36,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_7 = CreText('l_7',15,375,58,58,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',36,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_8 = CreText('l_8',79,375,58,58,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',36,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_9 = CreText('l_9',143,375,58,58,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',36,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_10 = CreText('l_10',655,375,58,58,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',36,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_11 = CreText('l_11',727,375,58,58,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',36,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var Text_1 = CreText('Text_1',563,139,46,46,"?",'#0080ff','#0080ff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#ffffff','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;

  HideHelp();
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
var hits = CreText('hits',187,194,427,53,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',563,84,46,46,"new",'#0080ff','#0080ff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#ffffff','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;

  NewGame()
  return;
}
 );
var Text_3 = CreText('Text_3',563,194,46,46,"↓",'#0080ff','#0080ff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#ffffff','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  CreateW(index);
  return;
}
 );
Text_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
  
 ShowHelp();
  return;
}
 );
Page_1.add(Page_1_Backrounnd,v,w,l_0,l_1,l_2,l_3,l_4,l_5,l_6,l_7,l_8,l_9,l_10,l_11,Text_1,hits,Text_2,Text_3);
stage.add(Page_1);
InitLacVietScript();
};
