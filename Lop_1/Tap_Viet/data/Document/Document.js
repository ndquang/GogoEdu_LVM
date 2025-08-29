folder_Resource ='data/Document';

 
  window.onload = function() {
 var canvas = document.createElement('canvas');
if (!canvas.getContext) {
alert("Trinh duyet khong ho tro");
return;
} 
 document.getElementById("Doc").textContent = ""; 
 stage = new Kinetic.Stage({
 container: "Doc", 
 width: 800,
 height: 450 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,800,450,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
var Text_1 = CreText('Text_1',183,15,452,366,"C?ng hqwpc[qme[e",'#ffff00','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','top',0,'0.00','0','0',8,'#32cd32','#ffff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Image2 = CreText('Image 2',229,75,363,263,'','rgba(0,0,0,0)','','','','ID_IMAGE1.JPG',0,'','','','',0,'0.00','32','32',2,'#ff0000','','2','2','','0','0','4','1',0,0, '#ffffff');
var Image3 = CreText('Image 3',34,375,42,37,'','rgba(0,0,0,0)','','','','ID_IMAGE2.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0,0,0,0)','','2','2','','0','0','4','1',0,0, '#808080');
Image3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  Print("Text_1");
  return;
}
 );
Page_1.add(Page_1_Backrounnd,Text_1,Image2,Image3);
stage.add(Page_1);
InitLacVietScript();
};
