folder_Resource ='data/DocumentTest';
function OpenRever()
{
   SetColor("","Text_1" ,-1,-1,-1,"ID_IMAGE1" );
Reverse("Text_1");
}
function CloseRever()
{
SetColor("","Text_1",-1,-1,-1);	
Reverse("Text_1");
}

function OpenObj( nameObj)
{
var l = GetLeft("",nameObj) + GetWidth("",nameObj)/2;
transitionTo("",nameObj,200,l,-1,'{"x":0,"y":1}',0,1,10,"OpenRever()");
  return;
}
function CloseObj( nameObj)
{
var l = GetLeft("",nameObj) + GetWidth("",nameObj)/2;
transitionTo("", nameObj, 200, l, -1, '{"x":0,"y":1}', 0, 1, 10, "CloseRever()");
  return;
}
 
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
var Text_1 = CreText('Text_1',133,48,126,149,"",'#3cb371','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#3cb371','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',127,289,153,56,"Open",'#98fb98','#ffffff','#8b8b00','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#98fb98','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
OpenObj("Text_1");
  return;
}
 );
var Text_3 = CreText('Text_3',385,304,153,56,"Close",'#98fb98','#ffffff','#8b8b00','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#98fb98','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CloseObj("Text_1");
  return;
}
 );
Page_1.add(Page_1_Backrounnd,Text_1,Text_2,Text_3);
stage.add(Page_1);
InitLacVietScript();
};
