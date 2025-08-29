folder_Resource ='data/tap_viet_so';
function  ClickNet(){
	var na = GetName("");
	var nu = StringtoNumber(na);
	SetRsc("","image","IM_"+nu);
	SetRsc("","view","F_"+nu);
}
function Page_1()
{
createFlashMarkup('view', 115, 2, 519 , 202 ,'.swf','Page_1');
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
Page_1.add(Page_1_Backrounnd);
var image = CreText('image',115,201,498,274,'','rgba(0, 0, 0, 0)','','','','.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(image);
var bt_0 = CreText('bt_0',6,9,45,41,"0",'#e6e6fa','#ffffff','#ff0000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#7f7f7f','#e6e6fa','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
Page_1.add(bt_0);
var bt_1 = CreText('bt_1',6,56,45,41,"1",'#e6e6fa','#ffffff','#ff0000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#7f7f7f','#e6e6fa','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
Page_1.add(bt_1);
var bt_2 = CreText('bt_2',7,103,45,41,"2",'#e6e6fa','#ffffff','#ff0000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#7f7f7f','#e6e6fa','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
Page_1.add(bt_2);
var bt_3 = CreText('bt_3',8,150,45,41,"3",'#e6e6fa','#ffffff','#ff0000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#7f7f7f','#e6e6fa','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
Page_1.add(bt_3);
var bt_4 = CreText('bt_4',8,197,45,41,"4",'#e6e6fa','#ffffff','#ff0000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#7f7f7f','#e6e6fa','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
Page_1.add(bt_4);
var bt_5 = CreText('bt_5',8,244,45,41,"5",'#e6e6fa','#ffffff','#ff0000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#7f7f7f','#e6e6fa','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
Page_1.add(bt_5);
var bt_6 = CreText('bt_6',8,291,45,41,"6",'#e6e6fa','#ffffff','#ff0000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#7f7f7f','#e6e6fa','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
Page_1.add(bt_6);
var bt_7 = CreText('bt_7',8,338,45,41,"7",'#e6e6fa','#ffffff','#ff0000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#7f7f7f','#e6e6fa','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
Page_1.add(bt_7);
var bt_8 = CreText('bt_8',8,385,45,41,"8",'#e6e6fa','#ffffff','#ff0000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#7f7f7f','#e6e6fa','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
Page_1.add(bt_8);
var bt_9 = CreText('bt_9',8,433,45,41,"9",'#e6e6fa','#ffffff','#ff0000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#7f7f7f','#e6e6fa','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
Page_1.add(bt_9);
stage.add(Page_1);
InitLacVietScript();
};
