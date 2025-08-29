folder_Resource ='data/net_con_ban';
function  ClickNet(){
	var na = GetName("");
	var nu = StringtoNumber(na);
	SetRsc("","image","IM_"+nu);
	SetRsc("","view","F_"+nu);
}
function Page_1()
{
createFlashMarkup('view', 131, 8, 486 , 202 ,'F_0.swf','Page_1');
SetRsc("","image","IM_0");
SetRsc("","view","F_0");
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
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var print = CreText('print',116,3,518,469,"\r\n                              \r\n\r\n          Trường    :\r\n          Lớp         :\r\n          Họ và tên :",'rgba(0,0,0,0)','#ff0000','#0000ff','#ffffff','',18,'Verdana','Normal','left','top',0,'0.00','0','0',2,'#32cd32','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',3,1,111,479,"\r\ngamechocon.com",'#8080c0','#ffffff','#000000','#ffffff','ID_IMAGE2.JPG',12,'Arial','Normal','center','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#8080c0','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var bt_0 = CreText('bt_0',10,41,38,37,'','rgba(0,0,0,0)','','','','NET_0.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_1 = CreText('bt_1',59,41,38,37,'','rgba(0,0,0,0)','','','','NET_1.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_2 = CreText('bt_2',59,99,38,37,'','rgba(0,0,0,0)','','','','NET_2.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_3 = CreText('bt_3',10,99,38,37,'','rgba(0,0,0,0)','','','','NET_3.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_4 = CreText('bt_4',10,157,38,37,'','rgba(0,0,0,0)','','','','NET_4.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_5 = CreText('bt_5',59,157,38,37,'','rgba(0,0,0,0)','','','','NET_5.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_6 = CreText('bt_6',10,215,38,37,'','rgba(0,0,0,0)','','','','NET_6.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_7 = CreText('bt_7',59,273,38,37,'','rgba(0,0,0,0)','','','','NET_7.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_8 = CreText('bt_8',12,273,38,37,'','rgba(0,0,0,0)','','','','NET_8.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_9 = CreText('bt_9',59,215,38,37,'','rgba(0,0,0,0)','','','','NET_9.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_10 = CreText('bt_10',10,334,38,37,'','rgba(0,0,0,0)','','','','NET_10.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_11 = CreText('bt_11',59,334,38,37,'','rgba(0,0,0,0)','','','','NET_11.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var image = CreText('image',120,201,509,270,'','rgba(0,0,0,0)','','','','IM_0.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var bt_0 = CreText('bt_0',10,41,38,37,'','rgba(0,0,0,0)','','','','NET_0.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_1 = CreText('bt_1',59,41,38,37,'','rgba(0,0,0,0)','','','','NET_1.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_2 = CreText('bt_2',59,99,38,37,'','rgba(0,0,0,0)','','','','NET_2.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_3 = CreText('bt_3',10,99,38,37,'','rgba(0,0,0,0)','','','','NET_3.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_4 = CreText('bt_4',10,157,38,37,'','rgba(0,0,0,0)','','','','NET_4.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_5 = CreText('bt_5',59,157,38,37,'','rgba(0,0,0,0)','','','','NET_5.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_6 = CreText('bt_6',10,215,38,37,'','rgba(0,0,0,0)','','','','NET_6.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_7 = CreText('bt_7',59,273,38,37,'','rgba(0,0,0,0)','','','','NET_7.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_8 = CreText('bt_8',12,273,38,37,'','rgba(0,0,0,0)','','','','NET_8.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_9 = CreText('bt_9',59,215,38,37,'','rgba(0,0,0,0)','','','','NET_9.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_10 = CreText('bt_10',10,334,38,37,'','rgba(0,0,0,0)','','','','NET_10.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_11 = CreText('bt_11',59,334,38,37,'','rgba(0,0,0,0)','','','','NET_11.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_0 = CreText('bt_0',10,41,38,37,'','rgba(0,0,0,0)','','','','NET_0.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_1 = CreText('bt_1',59,41,38,37,'','rgba(0,0,0,0)','','','','NET_1.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_2 = CreText('bt_2',59,99,38,37,'','rgba(0,0,0,0)','','','','NET_2.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_3 = CreText('bt_3',10,99,38,37,'','rgba(0,0,0,0)','','','','NET_3.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_4 = CreText('bt_4',10,157,38,37,'','rgba(0,0,0,0)','','','','NET_4.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_5 = CreText('bt_5',59,157,38,37,'','rgba(0,0,0,0)','','','','NET_5.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_6 = CreText('bt_6',10,215,38,37,'','rgba(0,0,0,0)','','','','NET_6.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_7 = CreText('bt_7',59,273,38,37,'','rgba(0,0,0,0)','','','','NET_7.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_8 = CreText('bt_8',12,273,38,37,'','rgba(0,0,0,0)','','','','NET_8.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_9 = CreText('bt_9',59,215,38,37,'','rgba(0,0,0,0)','','','','NET_9.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_10 = CreText('bt_10',10,334,38,37,'','rgba(0,0,0,0)','','','','NET_10.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_11 = CreText('bt_11',59,334,38,37,'','rgba(0,0,0,0)','','','','NET_11.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var Text_29 = CreText('Text_29',331,18,198,31,"https://gamechocon.com",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',33,394,61,56,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE4.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Print("print");
  return;
}
 );
Page_1.add(Page_1_Backrounnd,print,Text_1,bt_0,bt_1,bt_2,bt_3,bt_4,bt_5,bt_6,bt_7,bt_8,bt_9,bt_10,bt_11,image,bt_0,bt_1,bt_2,bt_3,bt_4,bt_5,bt_6,bt_7,bt_8,bt_9,bt_10,bt_11,bt_0,bt_1,bt_2,bt_3,bt_4,bt_5,bt_6,bt_7,bt_8,bt_9,bt_10,bt_11,Text_29,Text_2);
stage.add(Page_1);
InitLacVietScript();
};
