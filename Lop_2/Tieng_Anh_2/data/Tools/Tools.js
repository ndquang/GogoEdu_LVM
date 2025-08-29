folder_Resource ='data/Tools';
var size=24;
var a_w=["Flashlight","Ladder","Saw","Axe","Hammer","Bolt","Anvil","Chisel","Clamp","Drill","Vice","Circular saw","Jigsaw","Mallet","Blowtorch","Level","Pliers","Screw","Screwdriver","Stepladder","Tape measure","Fire extinguisher","Toolbox","Wrench"];
var a_vn=["Đèn pin","Cái thang","Cái cưa","Cái rìu","Cái búa","Ốc vít","Cái đe","Cái đục","Cái kẹp","Máy khoan","Ê-tô","Máy cưa đĩa","Máy cưa lọng","Cái búa gỗ","Đèn khò","Thước thủy","Cái kìm","Đinh vít","Tua vít","Thang gấp có bậc","Thước dây","Bình cứu hỏa","Hộp công cụ","Mỏ lết"];
var index=0;
var len=0;
var dem=0;
var b_busy=0;
var diem =0;
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
	SetRsc("","anh",a_w[index]);
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
	diem= GetVer();
	SetText("","hits","");
	InvalidateObj("","");
}
function  NewGame()
{
	var x= Random(size);
	while(x==index)
		x= Random(size);
	CreateW(x);
}
function Check()
{
	var tt = GetText("","w")+ GetText("","");
	SetText("","w",tt);
	SetShowObject("","",0);
	b_busy=0;
	if(dem==len)
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
	transitionTo("","",400,GetLeft("","w")+GetWidth("","w")/2,GetTop("","w"),1,0,1,1,"Check()");
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
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,800,450,'','#d2b48c','','','','ID_IMAGE2.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#d2b48c','2','2','0','','0','0','0','0',0,0,'');
var v = CreText('v',186,10,430,238,"1000",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','bottom',3,'0.00','10','0',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var w = CreText('w',224,254,346,63,"Hello",'rgba(0,0,0,0)','#ffffff','#804000','#000000','',48,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#4f2700','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var l_0 = CreText('l_0',274,368,59,59,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',48,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_1 = CreText('l_1',338,368,59,59,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',48,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_2 = CreText('l_2',402,368,59,59,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',48,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_3 = CreText('l_3',466,368,59,59,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',48,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_4 = CreText('l_4',530,368,59,59,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',48,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_5 = CreText('l_5',210,368,59,59,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',48,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_6 = CreText('l_6',594,368,59,59,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',48,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_7 = CreText('l_7',146,368,59,59,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',48,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_8 = CreText('l_8',82,368,59,59,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',48,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_9 = CreText('l_9',658,368,59,59,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',48,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_10 = CreText('l_10',18,368,59,59,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',48,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_11 = CreText('l_11',726,368,59,59,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',48,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var help = CreText('help',581,259,46,46,"?",'rgba(255,255,255,0.44)','#ffffff','#000000','#000000','',26,'Arial','Bold','center','middle',2,'0.00','0','0',0,'rgba(0,0,0,0)','rgba(255,255,255,0.44)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var tao = CreText('tao',177,263,46,46,"new",'rgba(255,255,255,0.44)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',2,'0.00','0','0',0,'rgba(0,0,0,0)','rgba(255,255,255,0.44)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tao.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  NewGame();
  return;
}
 );
var anh = CreText('anh',252,44,302,170,"",'#00ff00','#ffffff','#000000','#ffffff','ID_IMAGE2.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#00ff00','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
anh.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","", a_w[index]);
  return;
}
 );
var hits = CreText('hits',203,312,408,39,"gfhfghfg",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',532,259,46,46,"↓",'rgba(255,255,255,0.44)','#ffffff','#000000','#000000','',26,'Arial','Bold','center','middle',2,'0.00','0','0',0,'rgba(0,0,0,0)','rgba(255,255,255,0.44)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateW(index);
  return;
}
 );
Page_1.add(Page_1_Backrounnd,v,w,l_0,l_1,l_2,l_3,l_4,l_5,l_6,l_7,l_8,l_9,l_10,l_11,help,tao,anh,hits,Text_1);
stage.add(Page_1);
InitLacVietScript();
};
