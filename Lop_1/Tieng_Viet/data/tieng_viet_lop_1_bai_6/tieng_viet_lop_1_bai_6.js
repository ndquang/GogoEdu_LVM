folder_Resource ='data/tieng_viet_lop_1_bai_6';

 
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
var Image_1 = CreText('Image_1',8,6,399,552,'','#00000000','','','','ID_IMAGE1.JPG',0,'','','','',0,'0.00','0','0',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_1);
var Text_1 = CreText('Text_1',10,0,80,48,"BÀI 6",'#fff9d7','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0080ff','#fff9d7','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_1.add(Text_1);
var Text_2 = CreText('Text_2',268,389,35,27,"",'#00000000','#ffffff','#00000000','#ffffff','',72,'Arial','Bold Italic','center','middle',0,'0.00','10','11',0,'#00000000','#ffb9dc','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("bờ e be hỏi bẻ","VN");
  return;
}
 );
Page_1.add(Text_2);
var Text_3 = CreText('Text_3',250,203,50,50,"bẻ",'#ffffff','#ffffff','#000000','#ffffff','',28,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#0080ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("bẻ","VN");
  return;
}
 );
Page_1.add(Text_3);
var Text_4 = CreText('Text_4',307,389,32,27,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("bờ e be ngã bẽ","VN");
  return;
}
 );
Page_1.add(Text_4);
var Text_5 = CreText('Text_5',198,389,35,27,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("bờ e be huyền bè","VN");
  return;
}
 );
Page_1.add(Text_5);
var Text_6 = CreText('Text_6',338,389,35,27,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("bờ e be nặng bẹ","VN");
  return;
}
 );
Page_1.add(Text_6);
var Text_7 = CreText('Text_7',74,360,79,57,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("bờ e be","VN");
  return;
}
 );
Page_1.add(Text_7);
var Text_11 = CreText('Text_11',177,106,100,100,"be",'#ff6820','#ffffff','#ffffff','#ffffff','',48,'Arial','Bold','center','middle',2,'0.00','10','11',0,'#00000000','#ff6820','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("be","VN");
  return;
}
 );
Page_1.add(Text_11);
var Text_13 = CreText('Text_13',96,164,53,53,"bè",'#ffffff','#ffffff','#000000','#ffffff','',28,'Arial','Normal','center','middle',2,'0.00','10','11',2,'#0080ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("bè","VN");
  return;
}
 );
Page_1.add(Text_13);
var Text_14 = CreText('Text_14',136,60,49,49,"bé",'#ffffff','#ffffff','#000000','#ffffff','',28,'Arial','Normal','center','middle',2,'0.00','10','11',2,'#0080ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("bé","VN");
  return;
}
 );
Page_1.add(Text_14);
var Text_15 = CreText('Text_15',233,389,35,27,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("bờ e be sắc bé","VN");
  return;
}
 );
Page_1.add(Text_15);
var Text_16 = CreText('Text_16',163,389,35,27,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("bờ e be","VN");
  return;
}
 );
Page_1.add(Text_16);
var Text_17 = CreText('Text_17',283,95,49,51,"bẹ",'#ffffff','#ffffff','#000000','#ffffff','',28,'Arial','Normal','center','middle',2,'0.00','10','11',2,'#0080ff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("bẹ","VN");
  return;
}
 );
Page_1.add(Text_17);
var Text_20 = CreText('Text_20',83,492,260,35,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_20.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("be. bè. bé. bẻ. bẽ. bẹ","VN");
  return;
}
 );
Page_1.add(Text_20);
var Text_23 = CreText('Text_23',267,360,35,27,"",'#00000000','#ffffff','#00000000','#ffffff','',72,'Arial','Bold Italic','center','middle',0,'0.00','10','11',0,'#00000000','#ffb9dc','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_23.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("dấu hỏi","VN");
  return;
}
 );
Page_1.add(Text_23);
var Text_24 = CreText('Text_24',306,360,32,27,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_24.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("dấu ngã","VN");
  return;
}
 );
Page_1.add(Text_24);
var Text_25 = CreText('Text_25',197,360,35,27,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_25.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("dấu huyền","VN");
  return;
}
 );
Page_1.add(Text_25);
var Text_26 = CreText('Text_26',337,360,35,27,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_26.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("dấu nặng","VN");
  return;
}
 );
Page_1.add(Text_26);
var Text_27 = CreText('Text_27',232,360,35,27,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_27.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("dấu sắc","VN");
  return;
}
 );
Page_1.add(Text_27);
var Image_2 = CreText('Image_2',436,3,392,566,'','#00000000','','','','ID_IMAGE2.JPG',0,'','','','',0,'0.00','0','0',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_2);
var Text_8 = CreText('Text_8',590,241,126,38,"be bé",'#ffffff','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("be bé","VN");
  return;
}
 );
Page_1.add(Text_8);
var Text_9 = CreText('Text_9',633,314,35,27,"be bé",'#00000000','#ffffff','#00000000','#ffffff','',72,'Arial','Bold Italic','center','middle',0,'0.00','10','11',0,'#00000000','#ffb9dc','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("dấu hỏi","VN");
  return;
}
 );
Page_1.add(Text_9);
var Text_10 = CreText('Text_10',673,315,40,27,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("dấu ngã","VN");
  return;
}
 );
Page_1.add(Text_10);
var Text_12 = CreText('Text_12',557,314,35,27,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("dấu huyền","VN");
  return;
}
 );
Page_1.add(Text_12);
var Text_18 = CreText('Text_18',714,314,37,27,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("dấu nặng","VN");
  return;
}
 );
Page_1.add(Text_18);
var Text_19 = CreText('Text_19',593,314,39,27,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("dấu sắc","VN");
  return;
}
 );
Page_1.add(Text_19);
var Text_21 = CreText('Text_21',462,377,81,151,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',1,'#000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_21.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("dê. dế","VN");
  return;
}
 );
Page_1.add(Text_21);
var Text_22 = CreText('Text_22',549,377,81,151,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',1,'#000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_22.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("dưa. dừa","VN");
  return;
}
 );
Page_1.add(Text_22);
var Text_28 = CreText('Text_28',636,377,81,151,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',1,'#000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_28.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("cỏ. cọ","VN");
  return;
}
 );
Page_1.add(Text_28);
var Text_29 = CreText('Text_29',723,377,81,151,"",'#00000000','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',1,'#000000','#fff2aa','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_29.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("vó. võ","VN");
  return;
}
 );
Page_1.add(Text_29);
var Text_30 = CreText('Text_30',424,26,3,551,"",'#00000000','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','10','0',1,'#000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_1.add(Text_30);
var Text_31 = CreText('Text_31',410,11,29,13,"",'#ff0000','#ff0000','#000000','#ffffff','',16,'Arial','Normal','center','middle',12,'90.00','0','2',1,'#000000','#ff0000','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_1.add(Text_31);
stage.add(Page_1);
InitLacVietScript();
};
