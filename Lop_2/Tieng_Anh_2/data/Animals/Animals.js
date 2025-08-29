folder_Resource ='data/Animals';
var size=70;
var a_w=["Cat","Dog","Pig","Chick","Duck","Hen","Ant","Rooster","Mouse","Cow","Bull","Bear","Horse","Bird","Butterfly","Panda","Fish","Penguin","Kangaroo","Rabbit","Tiger","Lion","Monkey","Ostrich","Owl","Peacock","Swan","Pelican","Cheetah","Deer","Elephant","Giraffe","Hippopotamus","Lamb","Zebra","Rhinoceros","Sheep","Squirrel","Stag","Frog","Toad","Shark","Starfish","Sea-dog","Turtle","Walrus","Whale","Crocodile","Dolphin","Eagle","Pigeon","Fly","Mosquito","Stork","Shrimp","Cuttle","Crab","Fox","Weasel","Jocko","Goat","Dragon","Dinosaur","Cicada","Mantis","Grasshopper","Buffalo","Parrot","Blackbird","Goose"];
var a_vn=["Con mèo","Con chó","Con lợn","Con gà con","Con vịt","Con gà mái","Con kiến","Con gà trống","Con chuột","Con bò sữa","Con bò đực","Con gấu","Con ngựa","Con chim","Con bướm","Con gấu trúc","Con cá","Chim cánh cụt","Con chuột túi","Con thỏ","Con hổ","Con sư tử","Con khỉ","Con đà điểu","Con cú mèo","Con công","Con thiên nga","Con bồ nông","Con báo","Con hươu","Con voi","Con hươu cao cổ","Con hà mã","Con cừu","Con ngựa vằn","Con tê giác","Con cừu","Con sóc","Con nai","Con ếch","Con cóc","Con cá mập","Con sao biển","Con hải cẩu","Con rùa biển","Con hải mã","Cá voi","Cá sấu","Cá heo","Đại bàng","Chim bồ câu","Con ruồi","Con muỗi","Con cò","Con tôm","Con mực","Con cua","Con cáo","Con chồn","Con tinh tinh","Con dê","Con rồng","Khủng long","Con ve","Bọ ngựa","Châu chấu","Con trâu","Con vẹt","Con sáo","Con ngỗng"];

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
	SetText("","hits","");
	diem=GetVer();
	InvalidateObj("","");
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
SpeakEN("","", a_w[index]);
   SetText("","hits", toLowerCase(a_w[index]));
   InvalidateObj("","");
}

function  ClickLeter(){
	dem=dem+1;
	MoveObjectTo("","", GetLeft("","w")+ GetWidth("","w")/2, GetTop("","w"),100,2,0,"Check()");
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
var w = CreText('w',195,260,416,46,"Hello",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',36,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#4f2700','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var l_0 = CreText('l_0',205,375,59,59,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',48,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_1 = CreText('l_1',270,375,59,59,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',48,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_2 = CreText('l_2',335,375,59,59,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',48,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_3 = CreText('l_3',400,375,59,59,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',48,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_4 = CreText('l_4',465,375,59,59,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',48,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_5 = CreText('l_5',530,375,59,59,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',48,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_6 = CreText('l_6',595,375,59,59,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',48,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_7 = CreText('l_7',10,375,59,59,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',48,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_8 = CreText('l_8',75,375,59,59,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',48,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_9 = CreText('l_9',140,375,59,59,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',48,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_10 = CreText('l_10',660,375,59,59,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',48,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var l_11 = CreText('l_11',727,375,59,59,"A",'rgba(255,255,255,0.67)','#ffffff','#000000','#000000','',48,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var Text_1 = CreText('Text_1',564,108,46,46,"?",'#0080ff','#0080ff','#ffffff','#ffffff','',26,'Arial','Normal','center','middle',2,'0.00','0','0',0,'rgba(0,0,0,0)','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var Text_2 = CreText('Text_2',562,52,46,46,"new",'#0080ff','#0080ff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',0,'rgba(0,0,0,0)','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;

  NewGame()
  return;
}
 );
var anh = CreText('anh',252,44,302,170,"",'#00ff00','#ffffff','#000000','#ffffff','ID_IMAGE2.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff0000','#00ff00','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
anh.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","", a_w[index]);
  return;
}
 );
var hits = CreText('hits',203,312,408,28,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',564,165,46,46,"↓",'#0080ff','#0080ff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',2,'0.00','0','0',0,'rgba(0,0,0,0)','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
Page_1.add(Page_1_Backrounnd,v,w,l_0,l_1,l_2,l_3,l_4,l_5,l_6,l_7,l_8,l_9,l_10,l_11,Text_1,Text_2,anh,hits,Text_3);
stage.add(Page_1);
InitLacVietScript();
};
