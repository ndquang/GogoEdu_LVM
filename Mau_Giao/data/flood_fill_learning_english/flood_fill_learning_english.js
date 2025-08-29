folder_Resource ='data/flood_fill_learning_english';
var m_color="#ff0000";
function ChonMau()
{
	SetCursor("","Image_1","ID_IMAGE_CUR");
	m_color= GetColor("","","");
	PaintFillColor("","Image_1",m_color);
}
function Page_6()
{
PaintType("","Image_1",10);
SetPaint("","Image_1",1);
PaintFillColor("","Image_1",m_color); 
SetCursor("","Image_1","ID_IMAGE_CUR");
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
 height: 800 
 });

 var Page_6 = new Kinetic.Layer({name: 'Page_6',callback:'Page_6()'});
var Page6_Backrounnd = CreText('Page6_Backrounnd',0,0,640,800,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var Text_1 = CreText('Text_1',1,1,110,796,"",'#c0c0c0','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#282828','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Color_0 = CreText('Color_0',36,550,37,37,"",'#8000ff','#ffe4e1','#ff6820','#ff6820','',14,'Verdana','Bold','left','middle',2,'0.00','33','75',2,'#666666','#8000ff','0','0','rgba(0,0,0,0)','1','1','4','3',2,1,'#ffffff',0,1.50);
Color_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
}




 );
var Color_1 = CreText('Color_1',36,10,37,37,"",'#ff0000','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',2,'0.00','33','75',2,'#666666','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#c0c0c0',0,1.50);
Color_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}

 );
var Color_2 = CreText('Color_2',36,130,37,37,"",'#ffff00','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',2,'0.00','33','75',2,'#666666','#ffff00','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#ffffff',0,1.50);
Color_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}

 );
var Color_3 = CreText('Color_3',36,430,37,37,"",'#0080ff','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',2,'0.00','33','75',2,'#666666','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#ffffff',0,1.50);
Color_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var Color_4 = CreText('Color_4',36,190,37,37,"",'#80ff00','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',2,'0.00','33','75',2,'#666666','#80ff00','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#c0c0c0',0,1.50);
Color_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var Color_5 = CreText('Color_5',36,370,37,37,"",'#00ffff','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',2,'0.00','33','75',2,'#666666','#00ffff','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#ffffff',0,1.50);
Color_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var Color_6 = CreText('Color_6',36,250,37,37,"",'#00ff00','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',2,'0.00','33','75',2,'#666666','#00ff00','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#ffffff',0,1.50);
Color_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var Color_7 = CreText('Color_7',36,70,37,37,"",'#ff8000','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',2,'0.00','33','75',2,'#666666','#ff8000','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#c0c0c0',0,1.50);
Color_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var Color_10 = CreText('Color_10',36,610,37,37,"",'#ff00ff','#000000','#ff6820','#ff6820','',14,'Verdana','Bold','center','middle',2,'0.00','33','75',2,'#666666','#ff00ff','0','0','rgba(0,0,0,0)','2','2','4','3',1,1,'#ffffff',0,1.50);
Color_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
   return;
}

 );
var Color_11 = CreText('Color_11',36,310,37,37,"",'#00ff80','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',2,'0.00','33','75',2,'#666666','#00ff80','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#ffffff',0,1.50);
Color_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var Color_12 = CreText('Color_12',36,490,37,37,"",'#0000ff','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',2,'0.00','33','75',2,'#666666','#0000ff','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#ffffff',0,1.50);
Color_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var Color_13 = CreText('Color_13',36,675,37,37,"",'#ff0080','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',2,'0.00','33','75',2,'#666666','#ff0080','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#ffffff',0,1.50);
Color_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var Color_20 = CreText('Color_20',28,729,74,65,"",'#000000','#ffffff','#ffffff','#ffffff','ID_IMAGE3.PNG',26,'Arial','Normal','center','middle',3,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
Color_20.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SaveID("","object_0","Image_1");
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
var Image_1 = CreText('Image_1',113,13,505,780,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
Page_6.add(Page6_Backrounnd,Text_1,Color_0,Color_1,Color_2,Color_3,Color_4,Color_5,Color_6,Color_7,Color_10,Color_11,Color_12,Color_13,Color_20,Image_1);
stage.add(Page_6);
InitLacVietScript();
};
