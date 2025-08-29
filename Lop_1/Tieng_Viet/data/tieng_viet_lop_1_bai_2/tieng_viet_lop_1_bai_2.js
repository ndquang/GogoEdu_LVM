folder_Resource ='data/tieng_viet_lop_1_bai_2';


 
  window.onload = function() {
 var canvas = document.createElement('canvas');
if (!canvas.getContext) {
alert("Trinh duyet khong ho tro");
return;
} 
 document.getElementById("Doc").textContent = ""; 
 stage = new Kinetic.Stage({
 container: "Doc", 
 width: 820,
 height: 520 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,820,520,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var Image_1 = CreText('Image_1',77,33,337,479,'','rgba(0,0,0,0)','','','','ID_IMAGE1.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var Text_2 = CreText('Text_2',188,124,107,108,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',100,'Arial','Bold','center','middle',0,'0.00','10','11',0,'rgba(0,0,0,0)','#ffb9dc','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("chữ bờ","VN");
  return;
}
 );
var Text_3 = CreText('Text_3',86,46,103,102,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'rgba(0,0,0,0)','#fff2aa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("em bé","VN");
  return;
}
 );
var Text_4 = CreText('Text_4',289,202,126,119,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'rgba(0,0,0,0)','#fff2aa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("quả bóng","VN");
  return;
}
 );
var Text_5 = CreText('Text_5',284,31,117,121,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'rgba(0,0,0,0)','#fff2aa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("cụ bà","VN");
  return;
}
 );
var Text_6 = CreText('Text_6',78,202,117,120,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'rgba(0,0,0,0)','#fff2aa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("con bê","VN");
  return;
}
 );
var Text_7 = CreText('Text_7',174,345,137,83,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','10','11',0,'rgba(0,0,0,0)','#fff2aa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("e, bờ e be","VN");
  return;
}
 );
var Text_1 = CreText('Text_1',0,-1,80,53,"BÀI 2",'#fff9d7','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#fff9d7','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Image_2 = CreText('Image_2',478,20,305,485,'','rgba(0,0,0,0)','','','','ID_IMAGE2.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var Text_8 = CreText('Text_8',424,26,3,494,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','10','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_9 = CreText('Text_9',410,7,29,13,"",'#ff0000','#ff0000','#000000','#ffffff','',16,'Arial','Normal','center','middle',12,'90.00','0','2',1,'#000000','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,Image_1,Text_2,Text_3,Text_4,Text_5,Text_6,Text_7,Text_1,Image_2,Text_8,Text_9);
stage.add(Page_1);

 var Page_2 = new Kinetic.Layer({name: 'Page_2'});
var Page_2_Backrounnd = CreText('Page_2_Backrounnd',0,0,480,500,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var Image_1 = CreText('Image_1',77,8,305,485,'','rgba(0,0,0,0)','','','','ID_IMAGE2.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_2.add(Page_2_Backrounnd,Image_1);
stage.add(Page_2);
InitLacVietScript();
};
