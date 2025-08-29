folder_Resource ='data/inputTest';

function Page_1()
{
AllowEditText("","txtInput",1);
AllowEditText("","Text_3",1);

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

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,800,450,'','#388e8e','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#388e8e','0','0','0','','0','0','0','0',0,0,'');
var txtInput = CreText('txtInput',104,102,426,174,"InPut",'#ffffff','#ffffff','#ff0000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',1,'#ff0000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',5,1.50);
var Text_1 = CreText('Text_1',89,102,14,174,"\r\n",'#ffff00','#ffffff','#ff0000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',104,88,426,12,"\r\n",'#ffff00','#ffffff','#ffff00','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',89,17,420,44,"Text 2",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ff0000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',5,1.50);
var Text_4 = CreText('Text_4',617,52,117,57,"Text 2",'#3cb371','#ffffff','#009300','#ffffff','',14,'Arial','Normal','center','top',0,'0.00','0','0',1,'#ff0000','#3cb371','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',5,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Message("âsasas");
  return;
}
 );
Page_1.add(Page_1_Backrounnd,txtInput,Text_1,Text_2,Text_3,Text_4);
stage.add(Page_1);
InitLacVietScript();
};
