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
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,800,450,'','#ff0000','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ff0000','0','0','0','','0','0','0','0',0,0,'');
Page_1.add(Page_1_Backrounnd);
var Text_1 = CreText('Text_1',59,20,257,129,"Get Ver",'#00ff00','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'#00000000','#00ff00','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetVer();
  return;
}
 );
Page_1.add(Text_1);
var Text_2 = CreText('Text_2',276,214,257,129,"Update",'#004040','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'#00000000','#004040','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpDateScore(10);
  return;
}
 );
Page_1.add(Text_2);
stage.add(Page_1);
InitLacVietScript();
};
