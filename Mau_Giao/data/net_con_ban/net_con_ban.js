folder_Resource ='data/net_con_ban';
function  ClickNet(){
	var na = GetName("");
	var nu = StringtoNumber(na);
	SetRsc("","image","IM_"+nu);
	SetRsc("","view","F_"+nu);
}
function Page_1()
{
createFlashMarkup('view', 115, 2, 519 , 202 ,'F_0.swf','Page_1');
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
var bt_0 = CreText('bt_0',10,5,38,37,'','rgba(0, 0, 0, 0)','','','','NET_0.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
Page_1.add(bt_0);
var bt_1 = CreText('bt_1',59,5,38,37,'','rgba(0, 0, 0, 0)','','','','NET_1.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
Page_1.add(bt_1);
var bt_2 = CreText('bt_2',59,63,38,37,'','rgba(0, 0, 0, 0)','','','','NET_2.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
Page_1.add(bt_2);
var bt_3 = CreText('bt_3',10,63,38,37,'','rgba(0, 0, 0, 0)','','','','NET_3.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
Page_1.add(bt_3);
var bt_4 = CreText('bt_4',10,121,38,37,'','rgba(0, 0, 0, 0)','','','','NET_4.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
Page_1.add(bt_4);
var bt_5 = CreText('bt_5',59,121,38,37,'','rgba(0, 0, 0, 0)','','','','NET_5.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
Page_1.add(bt_5);
var bt_6 = CreText('bt_6',10,179,38,37,'','rgba(0, 0, 0, 0)','','','','NET_6.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
Page_1.add(bt_6);
var bt_7 = CreText('bt_7',59,237,38,37,'','rgba(0, 0, 0, 0)','','','','NET_7.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
Page_1.add(bt_7);
var bt_8 = CreText('bt_8',12,237,38,37,'','rgba(0, 0, 0, 0)','','','','NET_8.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
Page_1.add(bt_8);
var bt_9 = CreText('bt_9',59,179,38,37,'','rgba(0, 0, 0, 0)','','','','NET_9.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
Page_1.add(bt_9);
var bt_10 = CreText('bt_10',10,298,38,37,'','rgba(0, 0, 0, 0)','','','','NET_10.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
Page_1.add(bt_10);
var bt_11 = CreText('bt_11',59,298,38,37,'','rgba(0, 0, 0, 0)','','','','NET_11.JPG',0,'','','','',0,'0.00','0','0',2,'#7f7f7f','','2','2','','0','0','4','0',0,0, '#808080');
bt_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
Page_1.add(bt_11);
var image = CreText('image',115,201,517,274,'','rgba(0, 0, 0, 0)','','','','IM_0.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(image);
stage.add(Page_1);
InitLacVietScript();
};
