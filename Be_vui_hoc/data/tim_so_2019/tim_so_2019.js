folder_Resource ='data/tim_so_2019';
var maxSize = 100;
var mSize = 10;
var nextNo = 1;
var myCount = 0;
var comCount = 0;
var timerComputer= 10000;
var lever = 1;
var st = "main(){ClickNo();}";
function CreateGame()
{

var lView = GetLeft("","view");
var tView = GetTop("","view");
var wView = GetWidth("","view");
var hView = GetHeight("","view");
for(var i=1;i<=mSize;i++)
{
	var objName  = "_"+i;		
	var x= Random(wView)+ lView ; 
	var y= Random(hView )+ tView;
	var name = CreateObj("",objName ,2,"",x,y,32,32); 
	SetMoveView("",name ,1);
	SetText("",objName  ,i);
	SetShowObject("",objName ,1);
	SetBorder("",objName,"#ffffff");
	SetScriptObj("",objName ,st,0);	
	SetCursor("",objName, "pointer");
}
var k = 1;
while (k<=mSize)
{
for(var i=k+i;i<=mSize;i++)
	{
	if(i!=k)
	{
		var objI  = "_"+i;	
		var objK  = "_"+k;	
		while(IntersectRect ("",objK , objI ))
		{
			var x= Random(wView)+ lView ; 
			var y= Random(hView )+ tView;
			MoveObjectTo("", objI  , x,y);		
		}
	}	
	}
k++;
}
SetText("","com",0);
SetText("","index",1);
SetText("","you",0);
SetText("","cap_do",lever);
OrderObj("","msg",1);
SetShowObject("","msg",0);
return;
}

function Begin()
{
CreateGame();
SetTimerPage(timerComputer);
myCount=0;
comCount=0;
nextNo = 1;
GetVer();
}


function ClickNo()
{
var text = GetText("","");
if(text==nextNo)
{
PlayWave("","","ID_SOUND_MY","");
SetBorder("","","#2E9BC1",2);
myCount++;
SetText("","you",myCount);
if(nextNo==mSize)
{
	KillTimerPage();	
	if(myCount>=comCount )
	{
		mSize = mSize +10;
		PlaySound("ID_SOUND_TRUE");	
		UpdateScore(lever);
		lever++;
		SetText("","re","Bạn đã chiến thắng.\r\n"+"Cấp độ "+ lever+"?");	
		timerComputer = timerComputer - 800;
	}
	else
		{
		PlaySound("ID_SOUND_STOP");		
		SetText("","re","Bạn đã thua");		
		}
SetShowObject("","msg",1);
return;
}
nextNo++;
SetText("","index",nextNo);
InvalidateObj("","");
}}
function Page_1()
{
SetText("","com","0");
SetText("","you","0");
SetText("","index","1");
PlaySound("ID_SOUND_BG",1);
for(var i=1;i<=maxSize;i++)
{
	var objName  = "_"+i;
	SetShowObject("",objName ,0);
}
SetText("","re","");
SetMoveView("","msg",1);
  return;
}
function Page_1_OnTimer()
{
SetBorder("","_"+nextNo,"#FB1D07",2);
PlayWave("","","ID_SOUND_COM","");
comCount++;
SetText("","com",comCount);
if(nextNo==mSize)
{
	KillTimerPage();	
	if(myCount>=comCount )
	{
		mSize = mSize +10;
		PlaySound("ID_SOUND_TRUE");		
		UpdateScore(lever);
		lever++;
		SetText("","re","Bạn đã chiến thắng.\r\n"+"Cấp độ "+ lever+"?");			timerComputer = timerComputer - 800;	
	}
	else
		{
		PlaySound("ID_SOUND_STOP");		
		SetText("","re","Bạn đã thua");		
		}
	SetShowObject("","msg",1);
	return;
}
nextNo++;
SetText("","index",nextNo);
InvalidateObj("","");
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
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,640,480,'','#ffffff','','','','ID_IMAGE2.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','2','2','0','','0','0','0','0',0,0,'');
var view = CreText('view',61,81,513,356,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var index = CreText('index',288,17,57,49,"6",'rgba(0,0,0,0)','#ffffff','#000000','#008080','',28,'Arial','Bold','center','bottom',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var you = CreText('you',412,18,49,49,"0",'#0080ff','#ffffff','#000000','#008080','',28,'Arial','Bold','center','middle',2,'0.00','0','0',0,'rgba(0,0,0,0)','#00ffff','4','1','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var com = CreText('com',172,19,49,49,"0",'#ff0000','#ffffff','#000000','#008080','',28,'Arial','Bold','center','middle',2,'0.00','0','0',0,'rgba(0,0,0,0)','#ffc0cb','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var re = CreText('re',193,184,287,175,"Bạn đã chiến thắng",'#ffc0cb','#ffffff','#000000','#000000','',22,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#ff0000','#ffc0cb','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bg = CreText('bg',276,301,125,43,"Bắt Đầu",'#ffffff','#ffffff','#000000','#000000','',20,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#000000','#e6e6fa','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Begin();
  return;
}
 );
var Text_2 = CreText('Text_2',470,29,93,32,"Cấp độ",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',22,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cap_do = CreText('cap_do',562,18,49,49,"1",'#ffffff','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',2,'0.00','0','0',3,'#ff6820','#e6e6fa','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',164,184,31,175,"G\r\nA\r\nM\r\nE\r\nC\r\nH\r\nO\r\nC\r\nO\r\nN",'#ff0000','#ffffff','#000000','#000000','',14,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',235,190,180,41,"Game tìm số",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = new Kinetic.Group({name:'msg',x:0,y:0,width:320,height:179});
msg.add(re,Text_1,Text_3,bg);
Page_1.add(Page_1_Backrounnd,view,index,you,com,Text_2,cap_do,msg);
stage.add(Page_1);
InitLacVietScript();
};
