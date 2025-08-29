folder_Resource ='data/flood_fill_learning_english';
var m_color="#ff0000";
var wordEN=["alien","boat","castle","dinosaur","elephant","fish","guitar","helicopter","insect","jungle","kangaroo","lion","monkey","nurse","octopus","parrot","queen","rocket","spider","train","umbrella","violin","whale","x-gray","young","zoo"];

var wordVN= ["người ngoài hành tinh","thuyền","Lâu đài","khủng long","con voi","cá","đàn ghi ta","máy bay trực thăng","côn trùng","rừng nhiệt đới","con chuột túi","con sư tử","con khỉ","y tá","bạch tuộc","con vẹt","nữ hoàng","tên lửa","con nhện","xe lửa","ô(dù)","đàn vi ô lông","cá voi","x xám","trẻ","vườn bách thú"];

function ChonMau()
{	
	m_color= GetColor("","","");
	PaintFillColor("","Image_1",m_color);
}
var index = 0;
function  ChangeImage()
{
	if(index >26)
                 {
	index = 26;
	return;
	}
	if(index <0 )
                 {
	index = 0;
	return;
	}
	var id = "img_"+index ;
	SetColorEx("","Image_1","#",id );	
	SetText("","text_vn",wordVN[index ]);
	InvalidateObj("","");
}
function Page_6()
{
PaintType("","Image_1",10);
SetPaint("","Image_1",1);
PaintFillColor("","Image_1",m_color); 
SetTimerPage("1000");
ChangeImage();
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
 height: 800 
 });

 var Page_6 = new Kinetic.Layer({name: 'Page_6',callback:'Page_6()'});
var Page6_Backrounnd = CreText('Page6_Backrounnd',0,0,640,800,'','#000000','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#282828','4','0','0','','0','0','0','0',0,0,'');
var Color_0 = CreText('Color_0',18,579,73,37,"",'#8000ff','#ffe4e1','#ff6820','#ff6820','',14,'Verdana','Bold','left','middle',3,'0.00','0','0',2,'#666666','#8000ff','0','0','rgba(0,0,0,0)','1','1','4','3',2,1,'#ffffff',0,1.50);
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
var Color_2 = CreText('Color_2',18,222,73,37,"",'#ffff00','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',3,'0.00','0','0',2,'#666666','#ffff00','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#ffffff',0,1.50);
Color_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}

 );
var Color_3 = CreText('Color_3',18,477,73,37,"",'#0080ff','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',3,'0.00','0','0',2,'#666666','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#ffffff',0,1.50);
Color_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var Color_4 = CreText('Color_4',18,273,73,37,"",'#80ff00','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',3,'0.00','0','0',2,'#666666','#80ff00','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#c0c0c0',0,1.50);
Color_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var Color_5 = CreText('Color_5',18,426,73,37,"",'#00ffff','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',3,'0.00','0','0',2,'#666666','#00ffff','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#ffffff',0,1.50);
Color_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var Color_6 = CreText('Color_6',18,324,73,37,"",'#00ff00','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',3,'0.00','0','0',2,'#666666','#00ff00','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#ffffff',0,1.50);
Color_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var Color_7 = CreText('Color_7',18,171,73,37,"",'#ff8000','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',3,'0.00','0','0',2,'#666666','#ff8000','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#c0c0c0',0,1.50);
Color_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var Color_10 = CreText('Color_10',18,630,73,37,"",'#ff00ff','#000000','#ff6820','#ff6820','',14,'Verdana','Bold','center','middle',3,'0.00','0','0',2,'#666666','#ff00ff','0','0','rgba(0,0,0,0)','2','2','4','3',1,1,'#ffffff',0,1.50);
Color_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
   return;
}

 );
var Color_11 = CreText('Color_11',18,375,73,37,"",'#00ff80','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',3,'0.00','0','0',2,'#666666','#00ff80','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#ffffff',0,1.50);
Color_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var Color_12 = CreText('Color_12',18,528,73,37,"",'#0000ff','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',3,'0.00','0','0',2,'#666666','#0000ff','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#ffffff',0,1.50);
Color_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var Color_13 = CreText('Color_13',18,684,73,37,"",'#ff0080','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',3,'0.00','0','0',2,'#666666','#ff0080','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#ffffff',0,1.50);
Color_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var Color_20 = CreText('Color_20',13,741,90,52,"Save",'#00ffff','#ffffff','#000000','#ffffff','',26,'Arial','Bold','center','middle',3,'0.00','3','0',1,'#ffffff','#00ffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var Image_1 = CreText('Image_1',113,13,505,780,"",'#ffffff','#ffffff','#000000','#ffffff','img_21.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
Image_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
Speak(wordEN[index],"EN","{pitch:0.8,rate: 0.8}");
  return;
}
 );
var bt_next = CreText('bt_next',549,27,56,44,"››",'rgba(0,0,0,0)','#80ff00','#008080','#008080','',36,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#0080c0','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_next.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
index++;
ChangeImage();
  return;
}
 );
var bt_pre = CreText('bt_pre',484,27,56,44,"‹‹",'rgba(0,0,0,0)','#80ff00','#008080','#008080','',36,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#0080c0','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_pre.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
index--;
ChangeImage();
  return;
}
 );
var Text_1 = CreText('Text_1',18,120,73,37,"",'#804000','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',3,'0.00','0','0',2,'#666666','#804000','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#ffffff',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var Text_2 = CreText('Text_2',18,69,73,37,"",'#400000','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',3,'0.00','0','0',2,'#666666','#400000','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#ffffff',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var text_vn = CreText('text_vn',464,727,143,61,"",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_6.add(Page6_Backrounnd,Color_0,Color_1,Color_2,Color_3,Color_4,Color_5,Color_6,Color_7,Color_10,Color_11,Color_12,Color_13,Color_20,Image_1,bt_next,bt_pre,Text_1,Text_2,text_vn);
stage.add(Page_6);
InitLacVietScript();
};
