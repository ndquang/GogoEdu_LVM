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
var Text_1 = CreText('Text_1',102,141,177,170,"",'#ffff00','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',10,'0.00','40','0',1,'#8b0000','#ffff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',319,29,244,225,"",'#ffff00','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',9,'0.00','54','0',1,'#8b0000','#ffff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',491,251,174,145,"",'#32cd32','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',9,'0.00','10','0',0,'rgba(0,0,0,0)','#32cd32','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,Text_1,Text_2,Text_3);
stage.add(Page_1);
InitLacVietScript();
};
