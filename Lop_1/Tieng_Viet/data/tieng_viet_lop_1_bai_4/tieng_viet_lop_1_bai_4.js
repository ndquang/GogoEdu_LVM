folder_Resource ='data/tieng_viet_lop_1_bai_4';

 
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
var Image_1 = CreText('Image_1',34,16,373,522,'','#00000000','','','','ID_IMAGE1.JPG',0,'','','','',0,'0.00','0','0',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_1);
var Text_1 = CreText('Text_1',10,0,80,72,"BÀI 4",'#fff9d7','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',0,'#00000000','#fff9d7','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_1.add(Text_1);
var Text_2 = CreText('Text_2',296,248,83,62,"",'#00000000','#ffffff','#00000000','#ffffff','',72,'Arial','Bold Italic','center','middle',0,'0.00','10','11',0,'#00000000','#ffb9dc','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("cụ","VN");
  return;
}
 );
Page_1.add(Text_2);
var Text_3 = CreText('Text_3',202,194,70,67,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("nụ","VN");
  return;
}
 );
Page_1.add(Text_3);
var Text_4 = CreText('Text_4',272,326,81,62,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("ngựa","VN");
  return;
}
 );
Page_1.add(Text_4);
var Text_5 = CreText('Text_5',152,23,133,133,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',2,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("bế","VN");
  return;
}
 );
Page_1.add(Text_5);
var Text_6 = CreText('Text_6',108,248,74,67,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("quạ","VN");
  return;
}
 );
Page_1.add(Text_6);
var Text_7 = CreText('Text_7',130,326,82,64,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("cọ","VN");
  return;
}
 );
Page_1.add(Text_7);
var Text_8 = CreText('Text_8',161,431,49,37,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("bờ e be","VN");
  return;
}
 );
Page_1.add(Text_8);
var Text_9 = CreText('Text_9',222,429,49,37,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("bờ e be hỏi bẻ","VN");
  return;
}
 );
Page_1.add(Text_9);
var Text_10 = CreText('Text_10',278,429,49,37,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("bờ e be nặng bẹ","VN");
  return;
}
 );
Page_1.add(Text_10);
var Text_11 = CreText('Text_11',206,116,70,67,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("dấu hỏi","VN");
  return;
}
 );
Page_1.add(Text_11);
var Text_12 = CreText('Text_12',207,269,70,67,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("dấu nặng","VN");
  return;
}
 );
Page_1.add(Text_12);
var Text_13 = CreText('Text_13',118,129,64,54,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("khỉ","VN");
  return;
}
 );
Page_1.add(Text_13);
var Text_14 = CreText('Text_14',138,61,56,40,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("giỏ","VN");
  return;
}
 );
Page_1.add(Text_14);
var Text_15 = CreText('Text_15',214,41,68,53,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("hổ","VN");
  return;
}
 );
Page_1.add(Text_15);
var Text_16 = CreText('Text_16',296,125,46,53,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("thỏ","VN");
  return;
}
 );
Page_1.add(Text_16);
var Text_17 = CreText('Text_17',300,61,46,53,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("mỏ","VN");
  return;
}
 );
Page_1.add(Text_17);
var Text_18 = CreText('Text_18',214,398,56,31,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("dấu hỏi","VN");
  return;
}
 );
Page_1.add(Text_18);
var Text_19 = CreText('Text_19',276,397,59,31,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("dấu nặng","VN");
  return;
}
 );
Page_1.add(Text_19);
var Text_20 = CreText('Text_20',426,25,3,527,"",'#00000000','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','10','0',1,'#000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_1.add(Text_20);
var Text_21 = CreText('Text_21',413,6,29,13,"",'#ff0000','#ff0000','#000000','#ffffff','',16,'Arial','Normal','center','middle',12,'90.00','0','2',1,'#000000','#ff0000','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_1.add(Text_21);
var Image_2 = CreText('Image_2',466,45,330,467,'','#00000000','','','','ID_IMAGE2.JPG',0,'','','','',0,'0.00','0','0',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_2);
var Text_22 = CreText('Text_22',547,13,126,38,"bẻ",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_22.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("bờ e be hỏi bẻ","VN");
  return;
}
 );
Page_1.add(Text_22);
var Text_23 = CreText('Text_23',473,52,126,232,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_23.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("bẻ cổ áo","VN");
  return;
}
 );
Page_1.add(Text_23);
var Text_24 = CreText('Text_24',629,54,156,146,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_24.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("bẻ ngô","VN");
  return;
}
 );
Page_1.add(Text_24);
var Text_25 = CreText('Text_25',538,309,197,155,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_25.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("bẻ bánh đa","VN");
  return;
}
 );
Page_1.add(Text_25);
stage.add(Page_1);
InitLacVietScript();
};
