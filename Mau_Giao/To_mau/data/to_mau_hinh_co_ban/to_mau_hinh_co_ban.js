folder_Resource ='data/to_mau_hinh_co_ban';
var m_color='rgba(255, 0, 0, 0.8)';
var m_width= 30;
function SetConChuot()
{
for(var i=0;i<21;i++){
	SetCursor("","Color_"+i,"pointer");
	}

}
function ChonMau()
{
	m_color= GetColor("","","");
	PaintColor("","object_0",m_color,0.8);
}
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
var achar=["a","ă","â","b","c","d","đ","e","ê","g","h","i","k","l","m","n","o","ô","ơ","p","q","r","s","t","u","ư","v","x","y","0","1","2","3","4","5","6","7","8","9"];
var i_char=0;
function NetBut( w)
{
	m_width=w;
	PaintWidth("","object_0",m_width); 
}

function ClickObj()
{
	var ccc=	GetText("","");
	SetText("","object_0",ccc);
	InvalidateObj("","");
}
function Page_6()
{
SetConChuot();
SetPaint("","object_0",1);

PaintType("","object_0",6);
PaintColor("","object_0",m_color); 
PaintWidth("","object_0",m_width); 
SetCursor("","next_page","pointer");
for(var k=0;k<39;k++){
	SetText("","ch_"+k,achar[k]);
	}
InvalidateObj("","");
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

 var Page_6 = new Kinetic.Layer({name: 'Page_6',callback:'Page_6()'});
var Page6_Backrounnd = CreText('Page6_Backrounnd',0,0,640,480,'','#8000ff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#8000ff','0','0','0','','0','0','0','0',0,0,'');
var object_0 = CreText('object_0',35,102,537,304,"a",'#ffffff','#ffffff','#ffffff','#ffffff','',244,'Comic Sans MS','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','#000000','0','0','4','2',0,0,'rgba(0,0,0,0)',0,1.50);
var tx = CreText('tx',0,411,639,65,"",'#a448ff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',7,'0.00','11','13',1,'#ffffff','#a448ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Color_0 = CreText('Color_0',572,427,37,37,"",'#005500','#ffe4e1','#ff6820','#ff6820','',14,'Verdana','Bold','left','middle',8,'0.00','33','75',1,'#ffffff','#005500','0','0','rgba(0,0,0,0)','1','1','4','3',2,1,'#ffffff',0,1.50);
Color_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
}




 );
var Color_1 = CreText('Color_1',29,427,37,37,"",'#8b0000','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',8,'0.00','33','75',1,'#ffffff','#8b0000','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#c0c0c0',0,1.50);
Color_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}

 );
var Color_2 = CreText('Color_2',160,427,37,37,"",'#804000','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',8,'0.00','33','75',1,'#ffffff','#804000','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#ffffff',0,1.50);
Color_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}

 );
var Color_3 = CreText('Color_3',480,427,37,37,"",'#4b0082','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',8,'0.00','33','75',1,'#ffffff','#4b0082','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#ffffff',0,1.50);
Color_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var Color_4 = CreText('Color_4',115,427,37,37,"",'#ff6820','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',8,'0.00','33','75',1,'#ffffff','#ff6820','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#c0c0c0',0,1.50);
Color_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var Color_5 = CreText('Color_5',525,427,37,37,"",'#00ff00','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',8,'0.00','33','75',1,'#ffffff','#00ff00','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#ffffff',0,1.50);
Color_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var Color_6 = CreText('Color_6',210,427,37,37,"",'#0000ff','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',8,'0.00','33','75',1,'#ffffff','#0000ff','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#ffffff',0,1.50);
Color_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var Color_7 = CreText('Color_7',70,427,37,37,"",'#ff0000','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',8,'0.00','33','75',1,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#c0c0c0',0,1.50);
Color_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var Color_8 = CreText('Color_8',345,427,37,37,"",'#000000','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',8,'0.00','33','75',1,'#ffffff','#000000','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#ffffff',0,1.50);
Color_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var Color_10 = CreText('Color_10',390,427,37,37,"",'#ffff00','#000000','#ff6820','#ff6820','',14,'Verdana','Bold','center','middle',8,'0.00','33','75',1,'#ffffff','#ffff00','0','0','rgba(0,0,0,0)','2','2','4','3',1,1,'#ffffff',0,1.50);
Color_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
   return;
}

 );
var Color_11 = CreText('Color_11',255,427,37,37,"",'#00ffff','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',8,'0.00','33','75',1,'#ffffff','#00ffff','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#ffffff',0,1.50);
Color_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var Color_12 = CreText('Color_12',300,427,37,37,"",'#0080ff','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',8,'0.00','33','75',1,'#ffffff','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#ffffff',0,1.50);
Color_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var Color_13 = CreText('Color_13',435,427,37,37,"",'#ff00ff','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',8,'0.00','33','75',1,'#ffffff','#ff00ff','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#ffffff',0,1.50);
Color_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var mnh = CreText('mnh',7,5,592,92,"",'#8b0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',7,'0.00','11','10',1,'#ffffff','#8b0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ch_0 = CreText('ch_0',36,8,39,25,"a",'#ff0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',6,'0.00','20','37',1,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
var ch_1 = CreText('ch_1',76,8,39,25,"a",'#ff0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',6,'0.00','20','37',1,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
var ch_2 = CreText('ch_2',116,8,39,25,"a",'#ff0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',6,'0.00','20','37',1,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
var ch_3 = CreText('ch_3',156,8,39,25,"a",'#ff0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',6,'0.00','20','37',1,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
var ch_4 = CreText('ch_4',196,8,39,25,"a",'#ff0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',6,'0.00','20','37',1,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
var ch_5 = CreText('ch_5',236,8,39,25,"a",'#ff0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',6,'0.00','20','37',1,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
var ch_6 = CreText('ch_6',276,8,39,25,"a",'#ff0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',6,'0.00','20','37',1,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
var ch_7 = CreText('ch_7',316,8,39,25,"a",'#ff0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',6,'0.00','20','37',1,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
var ch_8 = CreText('ch_8',356,8,39,25,"a",'#ff0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',6,'0.00','20','37',1,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
var ch_9 = CreText('ch_9',396,8,39,25,"a",'#ff0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',6,'0.00','20','37',1,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
var ch_10 = CreText('ch_10',436,8,39,25,"a",'#ff0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',6,'0.00','20','37',1,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
var ch_11 = CreText('ch_11',476,8,39,25,"a",'#ff0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',6,'0.00','20','37',1,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
var ch_12 = CreText('ch_12',517,8,39,25,"a",'#ff0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',6,'0.00','20','37',1,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
var ch_13 = CreText('ch_13',24,38,39,25,"a",'#ff0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',6,'0.00','20','37',1,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
var ch_14 = CreText('ch_14',64,38,39,25,"a",'#ff0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',6,'0.00','20','37',1,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
var ch_15 = CreText('ch_15',104,38,39,25,"a",'#ff0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',6,'0.00','20','37',1,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
var ch_16 = CreText('ch_16',144,38,39,25,"a",'#ff0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',6,'0.00','20','37',1,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
var ch_17 = CreText('ch_17',184,38,39,25,"a",'#ff0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',6,'0.00','20','37',1,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
var ch_18 = CreText('ch_18',224,38,39,25,"a",'#ff0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',6,'0.00','20','37',1,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
var ch_19 = CreText('ch_19',264,38,39,25,"a",'#ff0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',6,'0.00','20','37',1,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
var ch_20 = CreText('ch_20',304,38,39,25,"a",'#ff0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',6,'0.00','20','37',1,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_20.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
var ch_21 = CreText('ch_21',344,38,39,25,"a",'#ff0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',6,'0.00','20','37',1,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_21.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
var ch_22 = CreText('ch_22',384,38,39,25,"a",'#ff0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',6,'0.00','20','37',1,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_22.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
var ch_23 = CreText('ch_23',424,38,39,25,"a",'#ff0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',6,'0.00','20','37',1,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_23.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
var ch_24 = CreText('ch_24',464,38,39,25,"a",'#ff0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',6,'0.00','20','37',1,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_24.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
var ch_25 = CreText('ch_25',505,38,39,25,"a",'#ff0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',6,'0.00','20','37',1,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_25.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
var ch_26 = CreText('ch_26',13,69,39,25,"a",'#ff0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',6,'0.00','20','37',1,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_26.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
var ch_27 = CreText('ch_27',53,69,39,25,"a",'#ff0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',6,'0.00','20','37',1,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_27.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
var ch_28 = CreText('ch_28',93,69,39,25,"a",'#ff0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',6,'0.00','20','37',1,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_28.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
var ch_29 = CreText('ch_29',133,69,39,25,"a",'#ff0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',6,'0.00','20','37',1,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_29.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
var ch_30 = CreText('ch_30',173,69,39,25,"a",'#ff0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',6,'0.00','20','37',1,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_30.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
var ch_31 = CreText('ch_31',213,69,39,25,"a",'#ff0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',6,'0.00','20','37',1,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_31.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
var ch_32 = CreText('ch_32',253,69,39,25,"a",'#ff0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',6,'0.00','20','37',1,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_32.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
var ch_33 = CreText('ch_33',293,69,39,25,"a",'#ff0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',6,'0.00','20','37',1,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_33.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
var ch_34 = CreText('ch_34',333,69,39,25,"a",'#ff0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',6,'0.00','20','37',1,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_34.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
var ch_35 = CreText('ch_35',373,69,39,25,"a",'#ff0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',6,'0.00','20','37',1,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_35.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
var ch_36 = CreText('ch_36',413,69,39,25,"a",'#ff0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',6,'0.00','20','37',1,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_36.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
var Color_14 = CreText('Color_14',572,109,50,50,"●",'#ffff00','#009300','#000000','#ffffff','',16,'Arial','Bold','center','middle',2,'0.00','0','0',0,'rgba(0,0,0,0)','#ffff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'#c0c0c0',0,1.50);
Color_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NetBut(5);
  return;
}
 );
var Color_15 = CreText('Color_15',572,162,50,50,"●",'#ffff00','#ffffff','#000000','#ffffff','',26,'Arial','Bold','center','middle',2,'0.00','0','0',0,'rgba(0,0,0,0)','#ffff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'#c0c0c0',0,1.50);
Color_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NetBut(10);
  return;
}
 );
var Color_16 = CreText('Color_16',572,219,50,50,"●",'#ffff00','#009300','#000000','#ffffff','',36,'Arial','Bold','center','middle',2,'0.00','0','0',0,'rgba(0,0,0,0)','#ffff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'#c0c0c0',0,1.50);
Color_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NetBut(30);
  return;
}
 );
var ch_37 = CreText('ch_37',453,69,39,25,"a",'#ff0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',6,'0.00','20','37',1,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_37.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
var ch_38 = CreText('ch_38',496,69,39,25,"a",'#ff0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',6,'0.00','20','37',1,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_38.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObj();
  return;
}
 );
var Color_18 = CreText('Color_18',573,277,50,50,"█\r\n",'#ffff00','#009300','#ff0000','#ffffff','',14,'Arial','Bold','center','middle',2,'34.00','0','0',0,'rgba(0,0,0,0)','#ffff00','0','0','#000000','0','0','4','1',0,0,'#c0c0c0',0,1.50);
Color_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InvalidateObj("","");
  return;
}
 );
var Color_20 = CreText('Color_20',575,335,50,50,"↓",'#ffff00','#ffffff','#000000','#ffffff','',26,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#ffffff','#ffff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Color_20.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SaveID("","object_0","Image_1");
  return;
}
 );
Color_20.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SaveObject("","SaveObject");
  return;
}
 );
Page_6.add(Page6_Backrounnd,object_0,tx,Color_0,Color_1,Color_2,Color_3,Color_4,Color_5,Color_6,Color_7,Color_8,Color_10,Color_11,Color_12,Color_13,mnh,ch_0,ch_1,ch_2,ch_3,ch_4,ch_5,ch_6,ch_7,ch_8,ch_9,ch_10,ch_11,ch_12,ch_13,ch_14,ch_15,ch_16,ch_17,ch_18,ch_19,ch_20,ch_21,ch_22,ch_23,ch_24,ch_25,ch_26,ch_27,ch_28,ch_29,ch_30,ch_31,ch_32,ch_33,ch_34,ch_35,ch_36,Color_14,Color_15,Color_16,ch_37,ch_38,Color_18,Color_20);
stage.add(Page_6);
InitLacVietScript();
};
