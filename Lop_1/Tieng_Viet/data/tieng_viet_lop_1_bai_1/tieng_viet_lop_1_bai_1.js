folder_Resource ='/data/tieng_viet_lop_1_bai_1';

 
  window.onload = function() {
 var canvas = document.createElement('canvas');
if (!canvas.getContext) {
alert("Trinh duyet khong ho tro");
return;
} 
 document.getElementById("Doc").textContent = ""; 
 stage = new Kinetic.Stage({
 container: "Doc", 
 width: 860,
 height: 540 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,860,540,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var Image_1 = CreText('Image_1',41,9,372,522,'','rgba(0,0,0,0)','','','','ID_IMAGE1.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var Text_2 = CreText('Text_2',179,206,107,108,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',100,'Arial','Bold','center','middle',2,'0.00','10','11',0,'rgba(0,0,0,0)','#ffb9dc','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("chữ e","VN");
  return;
}
 );
var Text_3 = CreText('Text_3',168,65,98,98,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',2,'0.00','10','11',0,'rgba(0,0,0,0)','#fff2aa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("vở vẽ","VN");
  return;
}
 );
var Text_4 = CreText('Text_4',306,193,98,98,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',2,'0.00','10','11',0,'rgba(0,0,0,0)','#fff2aa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("con ve","VN");
  return;
}
 );
var Text_5 = CreText('Text_5',52,235,98,98,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',2,'0.00','10','11',0,'rgba(0,0,0,0)','#fff2aa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("quả me","VN");
  return;
}
 );
var Text_6 = CreText('Text_6',165,361,98,128,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',2,'0.00','10','11',0,'rgba(0,0,0,0)','#fff2aa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("xe đạp","VN");
  return;
}
 );
var Text_1 = CreText('Text_1',4,1,80,53,"BÀI 1",'#fff9d7','#ffffff','#000000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#00ccff','#fff9d7','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Image_2 = CreText('Image_2',476,10,367,494,'','rgba(0,0,0,0)','','','','ID_IMAGE2.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var Text_7 = CreText('Text_7',424,22,4,520,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','10','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_8 = CreText('Text_8',410,7,29,13,"",'#ff0000','#ff0000','#000000','#ffffff','',16,'Arial','Normal','center','middle',12,'90.00','0','2',1,'#000000','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,Image_1,Text_2,Text_3,Text_4,Text_5,Text_6,Text_1,Image_2,Text_7,Text_8);
stage.add(Page_1);
InitLacVietScript();
};
