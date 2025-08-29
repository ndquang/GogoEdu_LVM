folder_Resource ='data/may_tinh_bo_tui';
var bOF = false;
function   GetKeyBoNumber(){
	if(!bOF)
	return;
	var keyNewValue = "_"+ GetText("","screen") + GetText("","");
	keyNewValue =rightStr(keyNewValue ,length(keyNewValue)-1);
	SetText("","screen",keyNewValue);
	InvalidateObj("","");
}
function  InitCalculatetor()
{
bOF = false;
SetText("","screen","");
SetText("","pheptoan","");

}
function Page_1()
{
InitCalculatetor();
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
 width: 600,
 height: 450 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,600,450,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var bg_key = CreText('bg_key',373,103,184,250,"0",'#0080c0','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',8,'#00ffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _0 = CreText('_0',415,321,29,25,"0",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var clear_all = CreText('clear_all',381,321,29,25,"CE",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
clear_all.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
	SetText("","screen","");
	InvalidateObj("","");;
  return;
}
 );
var _1 = CreText('_1',415,287,29,25,"1",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _2 = CreText('_2',449,287,29,25,"2",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _3 = CreText('_3',483,287,29,25,"3",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _4 = CreText('_4',415,255,29,25,"4",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _5 = CreText('_5',449,255,29,25,"5",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _6 = CreText('_6',483,255,29,25,"6",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _9 = CreText('_9',483,223,29,25,"9",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _8 = CreText('_8',449,223,29,25,"8",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _7 = CreText('_7',415,223,29,25,"7",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_lon = CreText('dau_lon',519,321,29,25,"+",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
dau_lon.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_bang = CreText('dau_bang',519,287,29,25,"-",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
dau_bang.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_be = CreText('dau_be',519,255,29,25,"x",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
dau_be.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var Text_5 = CreText('Text_5',519,223,29,25,"÷",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var Text_2 = CreText('Text_2',483,321,29,25,"=",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var tt = GetText("","screen");
SetText("","pheptoan",tt );
var re = ExecAsThread(GetText("","screen"));
SetText("","screen",re );
InvalidateObj("","");
  return;
}
 );
var Text_3 = CreText('Text_3',381,287,29,25," √",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var Text_4 = CreText('Text_4',449,321,29,25,".",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var Text_1 = CreText('Text_1',381,255,29,25,"%",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
var Text_6 = CreText('Text_6',381,223,29,25,"±",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var cur = GetText("","screen")*-1;
SetText("","screen",cur);
InvalidateObj("","");
  return;
}
 );
var Text_7 = CreText('Text_7',482,194,29,21,"M-",'#eeeeee','#ffffff','#000000','#ffffff','',8,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
var Text_8 = CreText('Text_8',448,194,29,21,"M+",'#eeeeee','#ffffff','#000000','#ffffff','',8,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
var Text_9 = CreText('Text_9',414,194,29,21,"R-CM",'#eeeeee','#ffffff','#000000','#ffffff','',8,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
var Text_10 = CreText('Text_10',518,194,29,21,"OFF",'#eeeeee','#ffffff','#000000','#ffffff','',8,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
Text_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
bOF = false;
SetText("","screen","");
  return;
}
 );
var Text_11 = CreText('Text_11',380,194,29,21,"ON/C",'#eeeeee','#ffffff','#000000','#ffffff','',8,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
Text_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
bOF = true;
SetText("","screen","0");
  return;
}
 );
var screen = CreText('screen',386,117,159,65,"0123456789",'#c0c0c0','#ffffff','#000000','#ffffff','',26,'Arial CE','Bold','center','bottom',0,'0.00','0','0',3,'#ffffff','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var pheptoan = CreText('pheptoan',387,118,153,20,"CASIO",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Bold','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,bg_key,_0,clear_all,_1,_2,_3,_4,_5,_6,_9,_8,_7,dau_lon,dau_bang,dau_be,Text_5,Text_2,Text_3,Text_4,Text_1,Text_6,Text_7,Text_8,Text_9,Text_10,Text_11,screen,pheptoan);
stage.add(Page_1);
InitLacVietScript();
};
