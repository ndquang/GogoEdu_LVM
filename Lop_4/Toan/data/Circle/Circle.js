folder_Resource ='data/Circle';

 
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
var Text_1 = CreText('Text_1',221,105,183,183,"Circle Pie",'#00ff00','#00ff00','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','1',2,'#ff6820','#00ff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',534,102,144,144,"",'#ff0000','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',4,'#32cd32','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,Text_1,Text_2);
stage.add(Page_1);
InitLacVietScript();
};
