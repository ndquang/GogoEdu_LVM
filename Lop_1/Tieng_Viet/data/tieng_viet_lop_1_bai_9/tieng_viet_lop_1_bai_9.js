folder_Resource ='data/tieng_viet_lop_1_bai_9';

 
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
var Image_1 = CreText('Image_1',32,34,368,532,'','#00000000','','','','ID_IMAGE1.JPG',0,'','','','',0,'0.00','0','0',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_1);
var Text_16 = CreText('Text_16',109,419,232,27,"bo          bò          bó",'#ffffff','#ffffff','#ec00ec','#ffffff','',20,'Arial','Bold','left','middle',0,'0.00','0','0',1,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("bờ o bo, bờ o bo huyền bò, bờ o bo sắc bó. bo bò bó","VN");
  return;
}
 );
Page_1.add(Text_16);
var Text_1 = CreText('Text_1',10,0,80,55,"BÀI 9",'#fff9d7','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0080ff','#fff9d7','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_1.add(Text_1);
var Text_13 = CreText('Text_13',96,346,56,36,"bò",'#ffffff','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("bò","VN");
  return;
}
 );
Page_1.add(Text_13);
var Text_14 = CreText('Text_14',105,37,68,75,"",'#00000000','#ffffff','#00000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("o bờ o bo huyền bò","VN");
  return;
}
 );
Page_1.add(Text_14);
var Text_17 = CreText('Text_17',282,34,66,73,"bẹ",'#00000000','#ffffff','#00000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',2,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("cờ. cờ o co hỏi cỏ","VN");
  return;
}
 );
Page_1.add(Text_17);
var Text_5 = CreText('Text_5',290,343,65,44,"cỏ",'#ffffff','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("cỏ","VN");
  return;
}
 );
Page_1.add(Text_5);
var Text_6 = CreText('Text_6',111,443,235,27,"co          cò          cọ",'#ffffff','#ffffff','#ec00ec','#ffffff','',20,'Arial','Bold','left','middle',0,'0.00','0','0',1,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("cờ o co, cờ o co huyền cò, cờ o co nặng cọ. co cò cọ","VN");
  return;
}
 );
Page_1.add(Text_6);
var Text_30 = CreText('Text_30',408,26,3,551,"",'#00000000','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','10','0',1,'#000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_1.add(Text_30);
var Text_31 = CreText('Text_31',394,11,29,13,"",'#ff0000','#ff0000','#000000','#ffffff','',16,'Arial','Normal','center','middle',12,'90.00','0','2',1,'#000000','#ff0000','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_1.add(Text_31);
var Image_2 = CreText('Image_2',436,9,393,558,'','#00000000','','','','ID_IMAGE2.JPG',0,'','','','',0,'0.00','0','0',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_2);
var Text_2 = CreText('Text_2',575,198,160,37,"bò bê có bó cỏ",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("bờ o bo huyền bò, bờ ê bê, cờ o co sắc có, bờ o bo sắc bó, cờ o co hỏi cỏ. bò bê có bó cỏ.","VN");
  return;
}
 );
Page_1.add(Text_2);
var Text_3 = CreText('Text_3',597,266,117,34,"vó bè",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("vờ o vo sắc vó, bờ e be huyền bè, vó bè","VN");
  return;
}
 );
Page_1.add(Text_3);
stage.add(Page_1);
InitLacVietScript();
};
