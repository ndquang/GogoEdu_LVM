folder_Resource ='data/Document1';

 
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
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,800,450,'','#8b0000','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#8b0000','0','0','0','','0','0','0','0',0,0,'');
Page_1.add(Page_1_Backrounnd);
var Text_1 = CreText('Text_1',134,164,453,145,"Bài 1: Phép chia hai chữ số cho một chữ số(không dư)",'#00ff00','#ffffff','#000000','#ffffff','',36,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#ffd700','#00ff00','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_1);
var Text_3 = CreText('Text_3',134,164,453,145,"Bài 1: Phép chia hai chữ số cho một chữ số(không dư)",'#ff0000','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','top',0,'90.00','0','0',1,'#ffd700','#ff0000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_3);
stage.add(Page_1);
InitLacVietScript();
};
