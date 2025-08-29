folder_Resource ='data/ve_bieu_do_san_luong_ca';
var name_select="";
function StartObj()
{
	SetPaint("","",1);
	name_select= GetName("");
}
function EndObj()
{
     SetPaint("",name_select,0);
}
function Page_1()
{
SetPaint("","obj_bg",1);
PaintColor("","obj_bg","#13b2f0"); 
PaintFillColor("","obj_bg","#7fd5f7")
PaintWidth("","obj_bg",7); 
PaintType("","obj_bg",3); 
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
 width: 640,
 height: 480 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page1_Backrounnd = CreText('Page1_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var obj_bg = CreText('obj_bg',91,77,473,332,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE1.PNG',22,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
obj_bg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
EndObj();
  return;
}
 );
Page_1.add(Page1_Backrounnd,obj_bg);
stage.add(Page_1);
InitLacVietScript();
};
