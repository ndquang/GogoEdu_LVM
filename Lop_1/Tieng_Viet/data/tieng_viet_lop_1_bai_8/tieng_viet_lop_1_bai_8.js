folder_Resource ='data/tieng_viet_lop_1_bai_8';

 
  window.onload = function() {
 var canvas = document.createElement('canvas');
if (!canvas.getContext) {
alert("Trinh duyet khong ho tro");
return;
} 
 document.getElementById("Doc").textContent = ""; 
 stage = new Kinetic.Stage({
 container: "Doc", 
 width: 840,
 height: 580 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,840,580,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
Page_1.add(Page_1_Backrounnd);
var Image_1 = CreText('Image_1',28,40,362,533,'','#00000000','','','','ID_IMAGE1.JPG',0,'','','','',0,'0.00','0','0',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_1);
var Text_16 = CreText('Text_16',116,436,232,27,"lê          lề          lễ",'#ffffff','#ffffff','#ec00ec','#ffffff','',20,'Arial','Bold','left','middle',0,'0.00','0','0',1,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("lờ ê lê, lờ ê lê huyền lề, lờ ê lê ngã lễ. lê lề lễ","VN");
  return;
}
 );
Page_1.add(Text_16);
var Text_1 = CreText('Text_1',10,0,80,58,"BÀI 8",'#fff9d7','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0080ff','#fff9d7','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_1.add(Text_1);
var Text_13 = CreText('Text_13',100,374,56,36,"lê",'#ffffff','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("lờ ê lê","VN");
  return;
}
 );
Page_1.add(Text_13);
var Text_14 = CreText('Text_14',112,39,51,75,"",'#00000000','#ffffff','#00000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("lờ ê lê","VN");
  return;
}
 );
Page_1.add(Text_14);
var Text_17 = CreText('Text_17',310,40,66,73,"bẹ",'#00000000','#ffffff','#00000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',2,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("hờ e he huyền hè","VN");
  return;
}
 );
Page_1.add(Text_17);
var Text_5 = CreText('Text_5',279,372,57,44,"hè",'#ffffff','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("hờ e he huyền hè","VN");
  return;
}
 );
Page_1.add(Text_5);
var Text_6 = CreText('Text_6',115,462,235,27,"he        hè         hẹ",'#ffffff','#ffffff','#ec00ec','#ffffff','',20,'Arial','Bold','left','middle',0,'0.00','0','0',1,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("hờ e he, hờ e he huyền hè, hờ e he nặng hẹ. he hè hẹ","VN");
  return;
}
 );
Page_1.add(Text_6);
var Text_30 = CreText('Text_30',417,23,3,551,"",'#00000000','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','10','0',1,'#000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_1.add(Text_30);
var Text_31 = CreText('Text_31',403,8,29,13,"",'#ff0000','#ff0000','#000000','#ffffff','',16,'Arial','Normal','center','middle',12,'90.00','0','2',1,'#000000','#ff0000','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_1.add(Text_31);
var Image_2 = CreText('Image_2',437,10,396,570,'','#00000000','','','','ID_IMAGE2.JPG',0,'','','','',0,'0.00','0','0',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_2);
var Text_2 = CreText('Text_2',558,295,187,37,"ve ve ve, hè về",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("vờ e ve, vờ e ve, vờ e ve, hờ e he huyền hè, vờ ê vê huyền về. ve ve ve, hè về","VN");
  return;
}
 );
Page_1.add(Text_2);
var Text_3 = CreText('Text_3',586,360,117,34,"le  le",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("lờ e le, lờ e le, le le ","VN");
  return;
}
 );
Page_1.add(Text_3);
stage.add(Page_1);
InitLacVietScript();
};
