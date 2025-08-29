folder_Resource ='data/tieng_viet_lop_1_bai_10';

 
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
var Image_1 = CreText('Image_1',39,43,386,531,'','#00000000','','','','ID_IMAGE3.JPG',0,'','','','',0,'0.00','0','0',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_1);
var Text_16 = CreText('Text_16',125,440,232,27,"hô          hồ          hổ",'#ffffff','#ffffff','#ec00ec','#ffffff','',20,'Arial','Bold','left','middle',0,'0.00','0','0',1,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("hờ ô hô. hờ ô hô huyền hồ. hờ ô hô hỏi hổ, hô hồ hổ","VN");
  return;
}
 );
Page_1.add(Text_16);
var Text_1 = CreText('Text_1',10,0,94,72,"BÀI 10",'#fff9d7','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0080ff','#fff9d7','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_1.add(Text_1);
var Text_13 = CreText('Text_13',126,358,56,36,"cô",'#ffffff','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("cô","VN");
  return;
}
 );
Page_1.add(Text_13);
var Text_14 = CreText('Text_14',123,37,68,75,"",'#00000000','#ffffff','#00000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("ô cờ ô cô","VN");
  return;
}
 );
Page_1.add(Text_14);
var Text_17 = CreText('Text_17',300,43,66,73,"bẹ",'#00000000','#ffffff','#00000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',2,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("ơ cờ ơ cơ huyền cờ.","VN");
  return;
}
 );
Page_1.add(Text_17);
var Text_5 = CreText('Text_5',311,349,65,44,"cờ",'#ffffff','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("cờ","VN");
  return;
}
 );
Page_1.add(Text_5);
var Text_6 = CreText('Text_6',126,467,235,27,"bơ         bờ         bở",'#ffffff','#ffffff','#ec00ec','#ffffff','',20,'Arial','Bold','left','middle',0,'0.00','0','0',1,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("bờ ơ bơ. bờ ơ bơ huyền bờ. bờ ở bơ hỏi bở. bơ bờ bở","VN");
  return;
}
 );
Page_1.add(Text_6);
var Text_30 = CreText('Text_30',415,25,3,551,"",'#00000000','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','10','0',1,'#000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_1.add(Text_30);
var Text_31 = CreText('Text_31',401,10,29,13,"",'#ff0000','#ff0000','#000000','#ffffff','',16,'Arial','Normal','center','middle',12,'90.00','0','2',1,'#000000','#ff0000','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_1.add(Text_31);
var Image_2 = CreText('Image_2',433,16,396,551,'','#00000000','','','','ID_IMAGE4.JPG',0,'','','','',0,'0.00','0','0',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_2);
var Text_2 = CreText('Text_2',573,237,160,37,"bé có vở vẽ",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("bờ e be sắc bé. cờ o co sắc có. vờ ơ vơ hỏi vở. vờ e ve ngã vẽ. bé có vở vẽ.","VN");
  return;
}
 );
Page_1.add(Text_2);
var Text_3 = CreText('Text_3',600,300,117,34,"bờ hồ",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("bờ ơ bơ huyền bờ. hờ ô hô huyền hồ. bờ hồ.","VN");
  return;
}
 );
Page_1.add(Text_3);
stage.add(Page_1);
InitLacVietScript();
};
