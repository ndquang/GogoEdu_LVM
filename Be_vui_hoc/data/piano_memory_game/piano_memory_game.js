folder_Resource ='/data/piano_memory_game'
styteView = 'Ver';
var rangeImage = 7;
var numObject = 0;
var aSound= ["c3","d3","e3","f3","g3","a3","b3","c4","d4","e4","f4","g4","a4","b4","Db3","Eb3","Gb3","Ab3","Bb3","Db4","Eb4","Gb4","Ab4","Bb4"];

var aResult=["","","","","","","","","",""];
var autoClick = false;
var objSelect = "";
var countClick =0;
function  PressDown( i)
{	
	objSelect  =i;
	if(autoClick)
		{
		objSelect = aResult[i];
 		Delay("PressUp("+i+")",300);
		}
	else { //test		
		if(i == aResult[countClick ])
		{
		  countClick++;
		 if(countClick==numObject )
			{
				UpdateScore(numObject);							
				SetText("","Text_5","\r\nTrí nhớ bạn tốt lắm. " + numObject +" điểm" );
				SetText("","playagain","Tiếp tục");
				SetShowObject("","msg",1);
			}	
		}
		else  if(countClick<numObject ) {
			numObject=0;
			SetText("","Text_5","\r\nSai rồi.");
			SetText("","playagain","Chơi lại");
			SetText("","status","");
			SetShowObject("","msg",1);	
		}
		else {
			SetShowObject("","msg",0);	
			SetShowObject("","bt_Start",1);		
			SetText("","status","");	
		}
			
	}
	if(Length(objSelect )==2)
	SetColorEx("",objSelect ,"#FCF806" );
	else SetColorEx("",objSelect ,"#FC1906" );
	 PlaySound("ID_"+objSelect );	
	InvalidateObj("","");
	
}
function PressUp( i)
{
	if(objSelect =="")
		return;
		if(autoClick)
	{					
		i++;
		if(i<numObject)
		{
			Delay("PressDown("+i+")",1000);
		}
		
		else
		{
			autoClick = false;
			countClick =0;
			SetText("","status","Thực hiện lại " + numObject + " nốt");
		}	
	}	
	if(Length(objSelect )==2)
	SetColorEx("",objSelect ,"#ffffff" );
	else SetColorEx("",objSelect ,"#202020" );	
	objSelect = "";	
	InvalidateObj("","");
}
function  myRandom()
{ 
         numObject ++;
         if(numObject > 10)
	{
	SetText("","Text_5","\r\n0.Bạn đã hoàn thành.");
	SetText("","playagain","Chơi lại");
	SetShowObject("","msg",1);
	numObject =1;
	}
          for(var i=0;i<numObject ; i++)
         aResult[i] = aSound[Random(24)];
}
function  Watch()
{
autoClick = true;
SetShowObject("","msg",0);
SetText("","status","Nghe và xem");
PressDown(0);
}
function  UserClickDown()
{
if(autoClick)
return;
var nameOBj = GetName("");
PressDown(nameOBj);
}
function  UserClickDownUp()
{
if(autoClick)
return;
var nameOBj= GetName("");
PressUp(nameOBj);
  return;
}
function Page_1()
{
SetMoveView("","msg",1);
SetShowObject("","bt_Start",0);
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
 height: 430 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()',x:0,y:0});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,800,430,'','#c0c0c0','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#c0c0c0','0','0','0','','0','0','0','0',0,0,'');
var Text_1 = CreText('Text_1',21,31,771,367,"",'#282828','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','top',7,'0.00','5','5',3,'#c0c0c0','#282828','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Tieu_de = CreText('Tieu_de',62,37,322,38,"Piano memory game",'rgba(0,0,0,0)','#ffffff','#00ffff','#ffffff','',24,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ff8000','0','0','rgba(0,0,0,0)','-1','1','4','2',10,10,'rgba(0,0,0,0)',0,1.50);
Tieu_de.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetRsc("","obxxx","ID_IMAGE_1");
  return;
}
 );
var c3 = CreText('c3',43,88,47,279,"Đô\r\nC3",'#ffffff','#008080','#000000','#ffffff','',14,'Verdana','Normal','center','bottom',7,'0.00','50','25',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
c3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UserClickDownUp();
}
 );
c3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
UserClickDown();
}
 );
var d3 = CreText('d3',96,87,47,280,"Rê\r\nD3",'#ffffff','#008080','#000000','#000000','',14,'Verdana','Normal','center','bottom',3,'0.00','3','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
d3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UserClickDownUp();
}
 );
d3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
UserClickDown();
}
 );
var e3 = CreText('e3',148,87,47,280,"Mi\r\nE3",'#ffffff','#008080','#000000','#000000','',14,'Verdana','Normal','center','bottom',3,'0.00','3','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
e3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UserClickDownUp();
}
 );
e3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
UserClickDown();
}
 );
var f3 = CreText('f3',200,87,47,280,"Fa\r\nF3",'#ffffff','#008080','#000000','#000000','',14,'Verdana','Normal','center','bottom',3,'0.00','3','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
f3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UserClickDownUp();
}
 );
f3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
UserClickDown();
}
 );
var g3 = CreText('g3',252,87,47,280,"Sol\r\nG3",'#ffffff','#008080','#000000','#000000','',14,'Verdana','Normal','center','bottom',3,'0.00','3','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
g3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UserClickDownUp();
}
 );
g3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
UserClickDown();
}
 );
var a3 = CreText('a3',304,87,47,280,"La\r\nA3",'#ffffff','#008080','#000000','#000000','',14,'Verdana','Normal','center','bottom',3,'0.00','3','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
a3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UserClickDownUp();
}
 );
a3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
UserClickDown();
}
 );
var Db3 = CreText('Db3',78,87,36,194,"",'#202020','#444444','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',7,'0.00','10','10',1,'#000000','#202020','0','1','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Db3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UserClickDownUp();
}
 );
Db3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
UserClickDown();
}
 );
var b3 = CreText('b3',356,87,47,280,"Si\r\nB3",'#ffffff','#008080','#000000','#000000','',14,'Verdana','Normal','center','bottom',3,'0.00','3','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
b3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UserClickDownUp();
}
 );
b3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
UserClickDown();
}
 );
var Eb3 = CreText('Eb3',128,87,36,194,"",'#202020','#444444','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',7,'0.00','10','10',1,'#000000','#202020','0','1','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Eb3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UserClickDownUp();
}
 );
Eb3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
UserClickDown();
}
 );
var Gb3 = CreText('Gb3',231,87,36,194,"",'#202020','#444444','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',7,'0.00','10','10',1,'#000000','#202020','0','1','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Gb3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UserClickDownUp();
}
 );
Gb3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
UserClickDown();
}
 );
var Ab3 = CreText('Ab3',281,87,36,194,"",'#202020','#444444','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',7,'0.00','10','10',1,'#000000','#202020','0','1','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Ab3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UserClickDownUp();
}
 );
Ab3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
UserClickDown();
}
 );
var Bb3 = CreText('Bb3',332,87,36,194,"",'#202020','#444444','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',7,'0.00','10','10',1,'#000000','#202020','0','1','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Bb3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UserClickDownUp();
}
 );
Bb3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
UserClickDown();
}
 );
var bt_Start = CreText('bt_Start',393,37,120,37,"Kiểm tra",'#80ff00','#ffffff','#000000','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#b1ff64','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_Start.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("","msg",1);	
  return;
}
 );
var c4 = CreText('c4',407,87,47,280,"Đồ\r\nC4",'#ffffff','#008080','#000000','#000000','',14,'Verdana','Normal','center','bottom',3,'0.00','3','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
c4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UserClickDownUp();
}
 );
c4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
UserClickDown();
}
 );
var d4 = CreText('d4',458,87,47,280,"Rê\r\nD4",'#ffffff','#008080','#000000','#000000','',14,'Verdana','Normal','center','bottom',3,'0.00','3','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
d4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UserClickDownUp();
}
 );
d4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
UserClickDown();
}
 );
var e4 = CreText('e4',510,88,47,280,"Mi\r\nE4",'#ffffff','#008080','#000000','#000000','',14,'Verdana','Normal','center','bottom',3,'0.00','3','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
e4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UserClickDownUp();
}
 );
e4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
UserClickDown();
}
 );
var f4 = CreText('f4',562,88,47,280,"Fa\r\nF4",'#ffffff','#008080','#000000','#000000','',14,'Verdana','Normal','center','bottom',3,'0.00','3','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
f4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UserClickDownUp();
}
 );
f4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
UserClickDown();
}
 );
var g4 = CreText('g4',614,88,47,280,"Sol\r\nG4",'#ffffff','#008080','#000000','#000000','',14,'Verdana','Normal','center','bottom',3,'0.00','3','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
g4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UserClickDownUp();
}
 );
g4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
UserClickDown();
}
 );
var a4 = CreText('a4',666,88,47,280,"La\r\nA4",'#ffffff','#008080','#000000','#000000','',14,'Verdana','Normal','center','bottom',3,'0.00','3','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
a4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UserClickDownUp();
}
 );
a4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
UserClickDown();
}
 );
var Db4 = CreText('Db4',441,87,36,194,"",'#202020','#444444','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',7,'0.00','10','10',1,'#000000','#202020','0','1','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Db4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UserClickDownUp();
}
 );
Db4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
UserClickDown();
}
 );
var b4 = CreText('b4',718,88,47,280,"Si\r\nB4",'#ffffff','#008080','#000000','#000000','',14,'Verdana','Normal','center','bottom',7,'0.00','0','50',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
b4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UserClickDownUp();
}
 );
b4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
UserClickDown();}
 );
var Eb4 = CreText('Eb4',491,87,36,194,"",'#202020','#444444','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',7,'0.00','10','10',1,'#000000','#202020','0','1','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Eb4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UserClickDownUp();
}
 );
Eb4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
UserClickDown();
}
 );
var Gb4 = CreText('Gb4',594,87,36,194,"",'#202020','#444444','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',7,'0.00','10','10',1,'#000000','#202020','0','1','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Gb4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UserClickDownUp();
}
 );
Gb4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
UserClickDown();
}
 );
var Ab4 = CreText('Ab4',644,87,36,194,"",'#202020','#444444','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',7,'0.00','10','10',1,'#000000','#202020','0','1','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Ab4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UserClickDownUp();
}
 );
Ab4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
UserClickDown();
}
 );
var Bb4 = CreText('Bb4',695,87,36,194,"",'#202020','#444444','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',7,'0.00','10','10',1,'#000000','#202020','0','1','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Bb4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UserClickDownUp();
}
 );
Bb4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
UserClickDown();
}
 );
var status = CreText('status',530,36,237,37,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
status.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Watch();
  return;
}
 );
var Text_5 = CreText('Text_5',275,119,234,131,"\r\nNghe và nhìn",'rgba(40,40,40,0.89)','#ffffff','#ffffff','#ffffff','',22,'Arial','Bold','center','top',0,'0.00','10','10',1,'#ffffff','rgba(127,127,127,0.89)','4','0','#000000','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PressUp(0);
  return;
}
 );
var title = CreText('title',308,104,169,28,"GAME CHO CON",'rgba(0,0,0,0.89)','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',11,'0.00','10','0',2,'#ffffff','rgba(0,0,0,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var playagain = CreText('playagain',336,201,121,40,"Bắt đầu",'#80ff00','#ffffff','#000000','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','5','5',0,'rgba(0,0,0,0)','#58b000','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
playagain.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PressUp(0);
  return;
}
 );
playagain.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
myRandom();
Watch();
  return;
}
 );
var msg = new Kinetic.Group({name:'msg',x:0,y:0,width:238,height:150});
msg.add(Text_5,playagain,title);
Page_1.add(Page_1_Backrounnd,Text_1,Tieu_de,c3,d3,e3,f3,g3,a3,Db3,b3,Eb3,Gb3,Ab3,Bb3,bt_Start,c4,d4,e4,f4,g4,a4,Db4,b4,Eb4,Gb4,Ab4,Bb4,status,msg);
stage.add(Page_1);
InitLacVietScript();
};
