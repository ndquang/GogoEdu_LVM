folder_Resource ='data/tieng_viet_lop_1_bai_3';

 
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
 height: 550 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,840,550,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
Page_1.add(Page_1_Backrounnd);
var Image_1 = CreText('Image_1',39,29,373,522,'','#00000000','','','','ID_IMAGE1.JPG',0,'','','','',0,'0.00','0','0',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_1);
var Text_2 = CreText('Text_2',172,174,107,108,"",'#00000000','#ffffff','#00000000','#ffffff','',72,'Arial','Bold Italic','center','middle',2,'0.00','10','11',0,'#00000000','#ffb9dc','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("dấu sắt","VN");
  return;
}
 );
Page_1.add(Text_2);
var Text_3 = CreText('Text_3',50,142,123,121,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("cá","VN");
  return;
}
 );
Page_1.add(Text_3);
var Text_4 = CreText('Text_4',254,274,145,96,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("chó","VN");
  return;
}
 );
Page_1.add(Text_4);
var Text_5 = CreText('Text_5',157,36,133,133,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',2,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("bế","VN");
  return;
}
 );
Page_1.add(Text_5);
var Text_6 = CreText('Text_6',54,273,142,93,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("lá","VN");
  return;
}
 );
Page_1.add(Text_6);
var Text_7 = CreText('Text_7',283,141,115,120,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("khế","VN");
  return;
}
 );
Page_1.add(Text_7);
var Text_8 = CreText('Text_8',162,391,126,75,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("bờ e be, bờ e be sắc bé","VN");
  return;
}
 );
Page_1.add(Text_8);
var Text_1 = CreText('Text_1',17,2,80,51,"BÀI 3",'#fff9d7','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#0080ff','#fff9d7','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_1.add(Text_1);
var Image_2 = CreText('Image_2',463,61,360,476,'','#00000000','','','','ID_IMAGE2.JPG',0,'','','','',0,'0.00','0','0',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_2);
var Text_9 = CreText('Text_9',424,26,3,527,"",'#00000000','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','10','0',1,'#000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_1.add(Text_9);
var Text_10 = CreText('Text_10',410,7,29,13,"",'#ff0000','#ff0000','#000000','#ffffff','',16,'Arial','Normal','center','middle',12,'90.00','0','2',1,'#000000','#ff0000','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_1.add(Text_10);
var Text_11 = CreText('Text_11',567,7,126,60,"bé",'#00000000','#ffffff','#000000','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("bờ e be sắc bé","VN");
  return;
}
 );
Page_1.add(Text_11);
stage.add(Page_1);
InitLacVietScript();
};
