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
Page_1.add(Page_1_Backrounnd);
var o_73 = CreText('o_73',161,182,36,33,"-",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE1.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
o_73.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Message("click");
  return;
}
 );
Page_1.add(o_73);
var Text_1 = CreText('Text_1',225,206,68,48,"xaxax",'#8b0000','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#8b0000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_1);
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:136,height:76});
Group_1.add(Text_1);
Group_1.add(o_73);
Page_1.add(Group_1);
stage.add(Page_1);
InitLacVietScript();
};
