folder_Resource ='data/lat_am_thanh_giong_nhau';
var arrValue =[];
var rangeImage = 7;
var numObject = 2;


function CheckClick()
{
}

function  myRandom()
{}

function PressDown( i)
{
	 SetColorEx("","o_"+i,"#E5E5E5" );
}
function PressUp( i)
{
	 SetColorEx("","o_"+i,"#ffffff" );
	 PlaySound("S_"+i);
}

function SetLever( count)
{
    numObject  = count;
    myRandom();
}
function Page_1()
{
myRandom();
SetMoveView("","msg",1);
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
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,640,480,'','#b96c33','','','','ID_IMAGE_BG.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#b96c33','2','2','0','','0','0','0','0',0,0,'');
var Tieu_de = CreText('Tieu_de',159,26,322,38,"Lật hình giống nhau",'rgba(0,0,0,0)','#ffffff','#ff0000','#ffffff','',24,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ff8000','0','0','#ffff00','0','0','4','2',10,10,'rgba(0,0,0,0)',0,1.50);
Tieu_de.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetRsc("","obxxx","ID_IMAGE_1");
  return;
}
 );
var o_0 = CreText('o_0',150,109,47,280,"",'#ffffff','#008080','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',3,'0.00','3','0',1,'#000000','#ffffff','0','0','#ffff00','2','4','4','0',2,2,'#c0c0c0',0,1.50);
o_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PressUp(0);
  return;
}
 );
o_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
PressDown(0);
  return;
}
 );
var o_1 = CreText('o_1',202,109,47,280,"1",'#ffffff','#008080','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',3,'0.00','3','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PressUp(1);
  return;
}
 );
o_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
PressDown(1);
  return;
}
 );
var o_2 = CreText('o_2',254,109,47,280,"2",'#ffffff','#008080','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',3,'0.00','3','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PressUp(2);
  return;
}
 );
o_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
PressDown();
  return;
}
 );
var o_3 = CreText('o_3',306,109,47,280,"3",'#ffffff','#008080','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',3,'0.00','3','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PressUp(3);
  return;
}
 );
o_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
PressDown();
  return;
}
 );
var o_4 = CreText('o_4',358,109,47,280,"4",'#ffffff','#008080','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',3,'0.00','3','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PressUp(4);
  return;
}
 );
o_4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
PressDown();
  return;
}
 );
var o_5 = CreText('o_5',410,109,47,280,"5",'#ffffff','#008080','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',3,'0.00','3','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PressUp(5);
  return;
}
 );
o_5.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
PressDown();
  return;
}
 );
var o_6 = CreText('o_6',185,108,36,194,"",'#000000','#008080','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',3,'0.00','0','0',1,'#000000','#666666','4','1','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var o_7 = CreText('o_7',462,109,47,280,"6",'#ffffff','#008080','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',3,'0.00','3','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PressUp(6);
  return;
}
 );
o_7.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
PressDown();
  return;
}
 );
var Text_5 = CreText('Text_5',-257,179,234,131,"\r\nBạn làm tốt lắm",'#8b0000','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','top',0,'0.00','0','0',3,'#ffffff','#ff0000','4','0','#000000','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var s_3 = CreText('s_3',-233,230,34,29,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE_SAO.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var s_1 = CreText('s_1',-153,230,34,29,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE_SAO.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var s_0 = CreText('s_0',-193,230,34,29,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE_SAO.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var s_2 = CreText('s_2',-113,230,34,29,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE_SAO.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var s_4 = CreText('s_4',-72,230,34,29,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE_SAO.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var playagain = CreText('playagain',-182,270,86,31,"Chơi Lại",'#80ff00','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','9','0',0,'rgba(0,0,0,0)','#58b000','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
playagain.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if(numObject == 0)
      numObject  =6;
else if(numObject == 6)
      numObject  =12;
else if(numObject == 12)
      numObject  =20;
else if(numObject == 20)
      numObject  =28;
myRandom();
  return;
}
 );
var title = CreText('title',-224,164,169,28,"GAME CHO CON",'#ffff00','#ffffff','#000000','#ffffff','',16,'Arial','Bold','center','middle',11,'0.00','10','0',0,'#ffff00','#ffff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = new Kinetic.Group({name:'msg',x:0,y:0,width:253,height:169});
msg.add(Text_5,playagain,s_3,s_0,s_1,s_2,s_4,title);
var Text_3 = CreText('Text_3',235,108,36,194,"",'#000000','#008080','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',3,'0.00','0','0',1,'#000000','#666666','4','1','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_4 = CreText('Text_4',338,108,36,194,"",'#000000','#008080','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',3,'0.00','0','0',1,'#000000','#666666','4','1','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_6 = CreText('Text_6',388,108,36,194,"",'#000000','#008080','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',3,'0.00','0','0',1,'#000000','#666666','4','1','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_7 = CreText('Text_7',439,108,36,194,"",'#000000','#008080','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',3,'0.00','0','0',1,'#000000','#666666','4','1','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,Tieu_de,o_0,o_1,o_2,o_3,o_4,o_5,o_6,o_7,Text_5,s_3,s_1,s_0,s_2,s_4,playagain,title,msg,Text_3,Text_4,Text_6,Text_7);
stage.add(Page_1);
InitLacVietScript();
};
