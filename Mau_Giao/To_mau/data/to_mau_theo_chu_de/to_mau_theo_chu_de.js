folder_Resource ='data/to_mau_theo_chu_de';
var m_color="#ff0000";
function ChonMau()
{	
	m_color= GetColor("","","");
	PaintFillColor("","Image_1",m_color);
}
var index = 0;
function  ChangeImage( topic)
{
	for(var i=0;i<4;i++)
                 {
	var id = topic+"_"+i ;
	SetColorEx("","pre_"+i,"#",id );	
	SetText("","pre_"+i,id );	
                }
	InvalidateObj("","");
}
function Page_6()
{
PaintType("","Image_1",10);
SetPaint("","Image_1",1);
PaintFillColor("","Image_1",m_color); 
SetColorEx("","Image_1","#","Cars_0" );	
SetTimerPage("1000");
ChangeImage("Cars");
InvalidateObj("","");
 return;
}


function Page_6_OnTimer()
{
SetCursor("","Image_1","ID_IMAGE_CUR");
KillTimerPage();
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
 height: 680 
 });

 var Page_6 = new Kinetic.Layer({name: 'Page_6',callback:'Page_6()'});
var Page6_Backrounnd = CreText('Page6_Backrounnd',0,0,640,680,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var Color_0 = CreText('Color_0',18,504,73,37,"",'#8000ff','#ffe4e1','#ff6820','#ff6820','',14,'Verdana','Bold','left','middle',3,'0.00','0','0',2,'#666666','#8000ff','0','0','rgba(0,0,0,0)','1','1','4','3',2,1,'#ffffff',0,1.50);
Color_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
}




 );
var Color_1 = CreText('Color_1',18,18,73,37,"",'#ff0000','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',3,'0.00','0','0',2,'#666666','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#c0c0c0',0,1.50);
Color_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}

 );
var Color_2 = CreText('Color_2',18,126,73,37,"",'#ffff00','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',3,'0.00','0','0',2,'#666666','#ffff00','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#ffffff',0,1.50);
Color_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}

 );
var Color_3 = CreText('Color_3',18,396,73,37,"",'#0080ff','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',3,'0.00','0','0',2,'#666666','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#ffffff',0,1.50);
Color_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var Color_4 = CreText('Color_4',18,180,73,37,"",'#80ff00','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',3,'0.00','0','0',2,'#666666','#80ff00','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#c0c0c0',0,1.50);
Color_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var Color_5 = CreText('Color_5',18,342,73,37,"",'#00ffff','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',3,'0.00','0','0',2,'#666666','#00ffff','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#ffffff',0,1.50);
Color_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var Color_6 = CreText('Color_6',18,234,73,37,"",'#00ff00','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',3,'0.00','0','0',2,'#666666','#00ff00','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#ffffff',0,1.50);
Color_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var Color_7 = CreText('Color_7',18,72,73,37,"",'#ff8000','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',3,'0.00','0','0',2,'#666666','#ff8000','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#c0c0c0',0,1.50);
Color_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var Color_10 = CreText('Color_10',18,558,73,37,"",'#ff00ff','#000000','#ff6820','#ff6820','',14,'Verdana','Bold','center','middle',3,'0.00','0','0',2,'#666666','#ff00ff','0','0','rgba(0,0,0,0)','2','2','4','3',1,1,'#ffffff',0,1.50);
Color_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
   return;
}

 );
var Color_11 = CreText('Color_11',18,288,73,37,"",'#00ff80','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',3,'0.00','0','0',2,'#666666','#00ff80','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#ffffff',0,1.50);
Color_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var Color_12 = CreText('Color_12',18,450,73,37,"",'#0000ff','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',3,'0.00','0','0',2,'#666666','#0000ff','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#ffffff',0,1.50);
Color_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var Color_13 = CreText('Color_13',18,622,73,37,"",'#ff0080','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',3,'0.00','0','0',2,'#666666','#ff0080','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#ffffff',0,1.50);
Color_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var Color_20 = CreText('Color_20',516,617,100,41,"Save",'#ffff4a','#ffffff','#000000','#ffffff','',26,'Arial','Bold','center','middle',3,'0.00','3','0',1,'#000000','#ffd700','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Color_20.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SaveID("","Image_1","Image_1");
  return;
}
 );
Color_20.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SaveObject("","SaveObject");
  return;
}
 );
var Image_1 = CreText('Image_1',113,13,505,441,"",'#ffffff','#ffffff','#000000','#ffffff','Cars_0.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#0080ff','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',-1,0, '#ffffff',0,1.50);
Image_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PlaySound("ID_SOUND1");
  return;
}
 );
var text_vn = CreText('text_vn',464,718,143,61,"",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',123,573,122,38,"Cars",'#7fffd4','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#000000','#c0ffff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeImage(GetText("",""));
  return;
}
 );
var Text_4 = CreText('Text_4',251,573,122,38,"Halloween",'#7fffd4','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#000000','#c0ffff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeImage(GetText("",""));
  return;
}
 );
var Text_5 = CreText('Text_5',379,573,122,38,"Christmas",'#7fffd4','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#000000','#c0ffff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeImage(GetText("",""));
  return;
}
 );
var Text_6 = CreText('Text_6',124,620,122,38,"Dinosaurs",'#7fffd4','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#000000','#c0ffff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeImage(GetText("",""));
  return;
}
 );
var Text_7 = CreText('Text_7',255,620,119,38,"Valentine",'#7fffd4','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#000000','#c0ffff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeImage(GetText("",""));
  return;
}
 );
var Text_8 = CreText('Text_8',508,573,109,38,"Horses",'#7fffd4','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#000000','#c0ffff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeImage(GetText("",""));
  return;
}
 );
var Text_9 = CreText('Text_9',383,620,122,38,"Flowers",'#7fffd4','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#000000','#c0ffff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeImage(GetText("",""));
  return;
}
 );
var pre_0 = CreText('pre_0',122,467,103,87,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
pre_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetColorEx("","Image_1","#",GetText("","") );	
  return;
}
 );
var pre_1 = CreText('pre_1',251,467,103,87,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
pre_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetColorEx("","Image_1","#",GetText("","") );	
  return;
}
 );
var pre_2 = CreText('pre_2',380,467,103,87,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
pre_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetColorEx("","Image_1","#",GetText("","") );	
  return;
}
 );
var pre_3 = CreText('pre_3',509,467,103,87,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
pre_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetColorEx("","Image_1","#",GetText("","") );	
  return;
}
 );
Page_6.add(Page6_Backrounnd,Color_0,Color_1,Color_2,Color_3,Color_4,Color_5,Color_6,Color_7,Color_10,Color_11,Color_12,Color_13,Color_20,Image_1,text_vn,Text_3,Text_4,Text_5,Text_6,Text_7,Text_8,Text_9,pre_0,pre_1,pre_2,pre_3);
stage.add(Page_6);
InitLacVietScript();
};
