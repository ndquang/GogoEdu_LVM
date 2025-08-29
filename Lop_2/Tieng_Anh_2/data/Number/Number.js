folder_Resource ='data/Number';
var size=30;
var a_w=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventee","Eighteen","Nineteen","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety","One hundred","One thousand"];
var a_i=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,30,40,50,60,70,80,90,100,1000];
var index=0;
var len=0;
var dem=0;
var b_busy=0;
var curDiem=0;
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
	SetText("","v",a_i[index]);
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
	b_busy=0;
	SetText("","hits","");
	curDiem = GetVer();
	InvalidateObj("","");
}
function  NewGame()
{
	var x= Random(30);
	while(x==index)
		x= Random(30);
	CreateW(x);
}
function Check()
{
	var tt = GetText("","w")+ GetText("","");
	SetText("","w",tt);
	SetShowObject("","",0);
	if(dem==len)
		if(GetText("","w")== toLowerCase(a_w[index]))
			{
			curDiem++;
			UpdateScore(curDiem);
			SpeakEN("","",a_w[index]);
			Delay("NewGame()",2000);
			}
		else {
			PlaySound("ID_WRONG");
			CreateW(index);
			}
b_busy=0;
}
function HideHelp()
{
  SetText("","hits","");
  InvalidateObj("","");
}
function ShowHelp()
{
   Speak(a_w[index],"EN","{rate:0.5}");
   SetText("","hits", toLowerCase(a_w[index]));
   InvalidateObj("","");
}

function  ClickLeter(){
	if(b_busy==0)
	{
	b_busy=1;
	transitionTo("","",500,GetLeft("","w")+GetWidth("","w")/2,GetTop("","w"),1,0,1,1,"Check()");
	dem=dem+1;
	}
}
function Page_1()
{
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
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,800,450,'','#d2b48c','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#d2b48c','0','0','0','','0','0','0','0',0,0,'');
var v = CreText('v',4,85,797,99,"1000",'rgba(255,255,224,0.44)','#ffffff','#000000','#ffffff','',48,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,224,0.44)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
v.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Speak(a_w[index],"EN");
  return;
}
 );
var w = CreText('w',80,4,639,81,"Hello",'#4f2700','#ffffff','#ffffff','#ffffff','',48,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#4f2700','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var l_0 = CreText('l_0',33,365,62,63,"A",'#512800','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','#512800','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_1 = CreText('l_1',95,365,62,63,"A",'#512800','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','#512800','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_2 = CreText('l_2',157,365,62,63,"A",'#512800','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','#512800','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_3 = CreText('l_3',219,365,62,63,"A",'#512800','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','#512800','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_4 = CreText('l_4',281,365,62,63,"A",'#512800','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','#512800','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_5 = CreText('l_5',343,365,62,63,"A",'#512800','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','#512800','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_6 = CreText('l_6',405,365,62,63,"A",'#512800','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','#512800','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_7 = CreText('l_7',467,365,62,63,"A",'#512800','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','#512800','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_8 = CreText('l_8',529,365,62,63,"A",'#512800','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','#512800','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_9 = CreText('l_9',591,365,62,63,"A",'#512800','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','#512800','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_10 = CreText('l_10',653,365,62,63,"A",'#512800','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','#512800','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_11 = CreText('l_11',716,365,62,63,"A",'#512800','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','#512800','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var Text_1 = CreText('Text_1',719,4,80,81,"?",'#804000','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#804000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var hits = CreText('hits',10,277,797,81,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',48,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',2,4,77,81,"new",'#804000','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#804000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;

  NewGame()
  return;
}
 );
Page_1.add(Page_1_Backrounnd,v,w,l_0,l_1,l_2,l_3,l_4,l_5,l_6,l_7,l_8,l_9,l_10,l_11,Text_1,hits,Text_2);
stage.add(Page_1);
InitLacVietScript();
};
