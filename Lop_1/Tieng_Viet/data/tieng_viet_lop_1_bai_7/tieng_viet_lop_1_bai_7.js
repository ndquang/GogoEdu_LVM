folder_Resource ='data/tieng_viet_lop_1_bai_7';

 
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
var Image_1 = CreText('Image_1',49,33,348,514,'','#00000000','','','','ID_IMAGE1.JPG',0,'','','','',0,'0.00','0','0',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_1);
var Text_16 = CreText('Text_16',133,417,188,27,"bê        bề          bế",'#ffffff','#ffffff','#ec00ec','#ffffff','',20,'Arial','Bold','left','middle',0,'0.00','0','0',1,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("bờ ê bê. bờ ê bê huyền bề. bờ ê bê sắc bế. bê bề bế","VN");
  return;
}
 );
Page_1.add(Text_16);
var Text_1 = CreText('Text_1',10,0,80,51,"BÀI 7",'#fff9d7','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0080ff','#fff9d7','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_1.add(Text_1);
var Text_13 = CreText('Text_13',80,353,56,36,"bê",'#ffffff','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("bê","VN");
  return;
}
 );
Page_1.add(Text_13);
var Text_14 = CreText('Text_14',104,34,51,75,"",'#00000000','#ffffff','#00000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("ê. bờ ê bê","VN");
  return;
}
 );
Page_1.add(Text_14);
var Text_17 = CreText('Text_17',292,37,66,73,"bẹ",'#00000000','#ffffff','#00000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',2,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("vờ. vờ e ve","VN");
  return;
}
 );
Page_1.add(Text_17);
var Text_5 = CreText('Text_5',293,352,50,36,"ve",'#ffffff','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("vờ e ve","VN");
  return;
}
 );
Page_1.add(Text_5);
var Text_6 = CreText('Text_6',133,443,189,27,"ve        vè          vẽ",'#ffffff','#ffffff','#ec00ec','#ffffff','',20,'Arial','Bold','left','middle',0,'0.00','0','0',1,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("vờ e ve. vờ e ve huyền vè. vờ e ve ngã vẽ. ve vè vẽ","VN");
  return;
}
 );
Page_1.add(Text_6);
var Image_2 = CreText('Image_2',426,13,399,565,'','#00000000','','','','ID_IMAGE2.JPG',0,'','','','',0,'0.00','0','0',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Image_2);
var Text_2 = CreText('Text_2',573,281,160,37,"bé     vẽ     bê",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("bờ e be sắc bé. vờ e ve ngã vẽ. bờ ê bê. bé vẽ bê","VN");
  return;
}
 );
Page_1.add(Text_2);
var Text_3 = CreText('Text_3',594,337,117,34,"bế    bé",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("bờ ê bê sắc bế. bờ e be sắc bé. bế bé","VN");
  return;
}
 );
Page_1.add(Text_3);
var Text_30 = CreText('Text_30',410,24,3,551,"",'#00000000','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','10','0',1,'#000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_1.add(Text_30);
var Text_31 = CreText('Text_31',396,9,29,13,"",'#ff0000','#ff0000','#000000','#ffffff','',16,'Arial','Normal','center','middle',12,'90.00','0','2',1,'#000000','#ff0000','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_1.add(Text_31);
stage.add(Page_1);
InitLacVietScript();
};
