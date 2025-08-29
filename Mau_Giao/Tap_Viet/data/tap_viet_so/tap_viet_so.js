folder_Resource ='data/tap_viet_so';
function  ClickNet(){
	var na = GetName("");
	var nu = StringtoNumber(na);
	SetRsc("","image","IM_"+nu);
	SetRsc("","view","F_"+nu);
		SpeakVN("","","số " + nu);

}
function Page_1()
{
createFlashMarkup('view', 155, 11, 477 , 160 ,'.swf','Page_1');
SetRsc("","image","IM_0");
SetRsc("","view","F_0");
InvalidateObj("","");
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
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,640,480,'','#ffb0ff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffb0ff','0','0','0','','0','0','0','0',0,0,'');
var print = CreText('print',146,0,494,479,"\r\n           \r\n\r\n          Trường    :\r\n          Lớp         :\r\n          Họ và tên :",'#ffffff','#ff0000','#0000ff','#ffffff','',18,'Verdana','Normal','left','top',0,'0.00','0','0',2,'#32cd32','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_0 = CreText('bt_0',16,61,50,47,"0",'#e6e6fa','#ffffff','#ff0000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#7f7f7f','#e6e6fa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_1 = CreText('bt_1',75,61,50,47,"1",'#e6e6fa','#ffffff','#ff0000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#7f7f7f','#e6e6fa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_2 = CreText('bt_2',16,123,50,47,"2",'#e6e6fa','#ffffff','#ff0000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#7f7f7f','#e6e6fa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_3 = CreText('bt_3',75,123,50,47,"3",'#e6e6fa','#ffffff','#ff0000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#7f7f7f','#e6e6fa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_4 = CreText('bt_4',16,185,50,47,"4",'#e6e6fa','#ffffff','#ff0000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#7f7f7f','#e6e6fa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_5 = CreText('bt_5',75,185,50,47,"5",'#e6e6fa','#ffffff','#ff0000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#7f7f7f','#e6e6fa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_6 = CreText('bt_6',16,247,50,47,"6",'#e6e6fa','#ffffff','#ff0000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#7f7f7f','#e6e6fa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_7 = CreText('bt_7',75,247,50,47,"7",'#e6e6fa','#ffffff','#ff0000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#7f7f7f','#e6e6fa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_8 = CreText('bt_8',16,310,50,47,"8",'#e6e6fa','#ffffff','#ff0000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#7f7f7f','#e6e6fa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var bt_9 = CreText('bt_9',75,310,50,47,"9",'#e6e6fa','#ffffff','#ff0000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#7f7f7f','#e6e6fa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNet();
  return;
}
 );
var image = CreText('image',141,182,485,292,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE_IM_0.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var Text_30 = CreText('Text_30',37,376,61,56,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_30.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Print("print");
  return;
}
 );
var Text_29 = CreText('Text_29',322,18,198,31,"https://gamechocon.com",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',20,12,103,40,"Tập viết số",'#80ff00','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#80ff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,print,bt_0,bt_1,bt_2,bt_3,bt_4,bt_5,bt_6,bt_7,bt_8,bt_9,image,Text_30,Text_29,Text_1);
stage.add(Page_1);
InitLacVietScript();
};
