folder_Resource ='data/tieng_viet_lop_1_bai_5';

 
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
 height: 640 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,840,640,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
Page_1.add(Page_1_Backrounnd);
var Image_1 = CreText('Image_1',7,26,427,526,'','#00000000','','','','ID_IMAGE1.JPG',0,'','','','',0,'0.00','0','0',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_1);
var Text_1 = CreText('Text_1',10,0,80,47,"BÀI 5",'#fff9d7','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0080ff','#fff9d7','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_1.add(Text_1);
var Text_2 = CreText('Text_2',297,266,83,62,"",'#00000000','#ffffff','#00000000','#ffffff','',72,'Arial','Bold Italic','center','middle',0,'0.00','10','11',0,'#00000000','#ffb9dc','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("cụ","VN");
  return;
}
 );
Page_1.add(Text_2);
var Text_4 = CreText('Text_4',280,291,106,95,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("võ","VN");
  return;
}
 );
Page_1.add(Text_4);
var Text_5 = CreText('Text_5',153,37,133,133,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',2,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("bế","VN");
  return;
}
 );
Page_1.add(Text_5);
var Text_6 = CreText('Text_6',183,363,95,87,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("dấu ngã","VN");
  return;
}
 );
Page_1.add(Text_6);
var Text_7 = CreText('Text_7',68,294,97,93,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("vẽ","VN");
  return;
}
 );
Page_1.add(Text_7);
var Text_8 = CreText('Text_8',125,580,65,49,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','11','1',2,'#ff00ff','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("bờ e be","VN");
  return;
}
 );
Page_1.add(Text_8);
var Text_9 = CreText('Text_9',190,580,65,49,"bè",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','11','1',2,'#ff00ff','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("bờ e be huyền bè","VN");
  return;
}
 );
Page_1.add(Text_9);
var Text_10 = CreText('Text_10',256,580,65,49,"bẽ",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','11','11',2,'#ff00ff','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("bờ e be ngã bẽ","VN");
  return;
}
 );
Page_1.add(Text_10);
var Text_11 = CreText('Text_11',197,117,83,83,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("dấu huyền","VN");
  return;
}
 );
Page_1.add(Text_11);
var Text_12 = CreText('Text_12',125,531,65,49,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','11','1',2,'#ff00ff','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_1.add(Text_12);
var Text_13 = CreText('Text_13',89,161,106,85,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("mèo","VN");
  return;
}
 );
Page_1.add(Text_13);
var Text_14 = CreText('Text_14',93,57,81,83,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("dừa","VN");
  return;
}
 );
Page_1.add(Text_14);
var Text_15 = CreText('Text_15',291,166,86,76,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("gà","VN");
  return;
}
 );
Page_1.add(Text_15);
var Text_16 = CreText('Text_16',297,139,46,53,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("thỏ","VN");
  return;
}
 );
Page_1.add(Text_16);
var Text_17 = CreText('Text_17',292,66,87,88,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("cò","VN");
  return;
}
 );
Page_1.add(Text_17);
var Text_18 = CreText('Text_18',256,531,65,49,"~",'#00000000','#ffffff','#00008b','#ffffff','',48,'Arial','Bold','center','middle',0,'0.00','11','10',2,'#ff00ff','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("dấu ngã","VN");
  return;
}
 );
Page_1.add(Text_18);
var Text_20 = CreText('Text_20',277,431,106,95,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_20.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("võng","VN");
  return;
}
 );
Page_1.add(Text_20);
var Text_21 = CreText('Text_21',93,438,106,95,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_21.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("gỗ","VN");
  return;
}
 );
Page_1.add(Text_21);
var Text_22 = CreText('Text_22',219,545,5,20,"",'#ff00ff','#ffffff','#00000000','#ffffff','',26,'Arial','Bold','center','middle',0,'-39.81','0','0',0,'#00000000','#ff00ff','0','0','#00000000','0','0','4','2',0,0,'#00000000',0,1.50);
Page_1.add(Text_22);
var Text_19 = CreText('Text_19',190,531,65,49,"",'#00000000','#ffffff','#ff00ff','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','11','0',2,'#ff00ff','#fff2aa','0','0','#ff00ff','0','0','4','1',0,0,'#00000000',0,1.50);
Text_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("dấu huyền","VN");
  return;
}
 );
Page_1.add(Text_19);
var Text_23 = CreText('Text_23',441,32,3,606,"",'#00000000','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','10','0',1,'#000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_1.add(Text_23);
var Text_24 = CreText('Text_24',428,9,29,13,"",'#ff0000','#ff0000','#000000','#ffffff','',16,'Arial','Normal','center','middle',12,'90.00','0','2',1,'#000000','#ff0000','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_1.add(Text_24);
var Image_2 = CreText('Image_2',458,158,362,354,'','#00000000','','','','ID_IMAGE3.JPG',0,'','','','',0,'0.00','0','0',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_2);
var Text_25 = CreText('Text_25',544,27,126,38,"bè",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_25.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("bờ e be huyền bè","VN");
  return;
}
 );
Page_1.add(Text_25);
stage.add(Page_1);
InitLacVietScript();
};
