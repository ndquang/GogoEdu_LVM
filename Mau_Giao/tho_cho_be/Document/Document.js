
folder_Resource ='/data/Document';

 
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
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,800,450,'','rgba(255, 255, 255, 1.00)','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(0, 0, 0, 0)','0','0','0','','0','0','0','0',0,0,'');
Page_1.add(Page_1_Backrounnd);
var Text_1 = CreText('Text_1',156,128,411,148,"Nguyeen Dinh QUang",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_1);
stage.add(Page_1);
InitLacVietScript();
};
