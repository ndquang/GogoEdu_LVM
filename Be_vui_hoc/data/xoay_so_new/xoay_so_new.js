folder_Resource ='data/xoay_so_new';
var rx = 3;
var cx = 3;
var supID ="";
var diem=0;
var p2i=0;
function  SwapObject( objS,  objD)
{
		var sText = GetText("",objS);
		var dText = GetText("",objD);	

		SetText("", objS,dText );
		SetText("", objD,sText );
	
		SetColorEx("", objD, "#",supID +sText );

		if(dText =="")
		SetColorEx("",objS,"-1");
		else
		SetColorEx("", objS, "#",supID +dText );
}

function  FindNextObj( curObjName)
{
var name= curObjName;
name=ltrimStr(name,"_");
var text= GetText("",name);
var nextObj="";
var b=0;
if(text!="")
{
	var row =  leftStr(name,1);
	var col  =  rightStr(name,1);
	var nextCol = col  + 1;	
	if(nextCol <= cx && b==0)
	{
		nextObj= row +"_"+nextCol ;
		if(GetText("",nextObj)=="")
		b=true;
	}
	nextCol = col  - 1;
	if(nextCol >= 0 && b== 0)
	{
		nextObj= row +"_"+nextCol ;
		if(GetText("",nextObj)=="")
		b=true;
	}
	var nextRow= row + 1;	
	if(nextRow<= rx && b == 0)
	{
		nextObj = nextRow+"_"+col ;
		if(GetText("",nextObj)=="")
		b=true;
	}
	nextRow= row - 1;	
	if(nextRow >= 0 && b == 0)
	{
		nextObj = nextRow+"_"+col ;
		if(GetText("",nextObj)=="")
		b=true;
	}
	if(b==true)
	return nextObj;
	}
return "";
}

function  RandomImage()
{	
SwapObject("1_1" ,"0_1");
     var name="";
	for(var k=0; k < 100;k++)
	{
		var i = Random(rx)+1;
		var j = Random(cx)+1;
		name = i+"_"+j;
		var nextObj  = FindNextObj(name);
		if( nextObj !=""){			
		SwapObject(name,nextObj );	
		}
}
}
function ClickImage()
{
var name= GetName("");
var nextObj  = FindNextObj(name);
	if( nextObj !=""){			
		SwapObject(name,nextObj );	
		PlaySound("S_CLICK");
	}
}
  

function  SetPicture( idSupRsc)
{


SetText("","_0_1","");
SetColorEx("","_0_1",-1);

var name="";
for(var i=1;i<=rx;i++)
for(var j=1;j<=cx;j++)
{
var rsc=idSupRsc+i+"_"+j;
name = i+"_"+j;
SetColorEx("",name,"",rsc);
SetText("",name,name);
}
supID = idSupRsc;
SetColorEx("","preview","",supID);
RandomImage();
SetShowObject("","sucess",0);
//diem = GetVer();
  return;
}

function  CheckSucess(){
	var name="";
	for(var i=1;i<=rx;i++)
	for(var j=1;j<=cx;j++)
	{
		name = i+"_"+j;
	if(GetText("",name)!=name)
		return;
	}
	PlaySound("S_OK");
	SetShowObject("","sucess",1);
	//UpdateScore(diem + rx *cx);
}
var bShowText = false;
function  ShowNumber()
{
	var name="";
	for(var i=1;i<=rx;i++)
	for(var j=1;j<=cx;j++)
	{
		name = i+"_"+j;
		if(bShowText==false )
		SetFontColor("",name,"#FF0000");
		else SetFontColor("",name,-1);
	}
	if(!bShowText)
	SetText("","bt_showhide","☒  Ẩn số");
	else SetText("","bt_showhide","☑  Hiện số");

	bShowText = !bShowText ;
	
	InvalidateObj("","");
}
function Page_1()
{
rx = 3;
cx = 3;
SetPicture("IMG_LION");
  return;
}

function Page_2()
{
rx = 6;
cx =4;
SetPicture("P2_"+ p2i);
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
 height: 480 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,600,480,'','#ffffff','','','','ID_IMAGE_BACK_GR.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','2','2','0','','0','0','0','0',0,0,'');
var Text_1 = CreText('Text_1',227,78,305,332,"",'rgba(255,255,255,0.67)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','5',8,'#00b900','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _0_1 = CreText('_0_1',231,83,98,80,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',2,'#c0c0c0','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_0_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;ClickImage();CheckSucess();}
 );
var _1_2 = CreText('_1_2',330,164,98,80,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',2,'#c0c0c0','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'#ff0000',0,1.50);
_1_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;ClickImage();}
 );
var _1_1 = CreText('_1_1',231,164,98,80,"2",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',2,'#c0c0c0','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'#ffffff',0,1.50);
_1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;ClickImage();}
 );
var _3_2 = CreText('_3_2',330,326,98,80,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',2,'#c0c0c0','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'#ffffff',0,1.50);
_3_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;ClickImage();}
 );
var _2_3 = CreText('_2_3',430,245,98,80,"6",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',2,'#c0c0c0','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'#ffffff',0,1.50);
_2_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;ClickImage();}
 );
var _2_2 = CreText('2_2',330,245,98,80,"7",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','',12,'Verdana','Bold','center','middle',3,'0.00','5','0',2,'#c0c0c0','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','1',0,0, '#ffffff',0,1.50);
_2_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;ClickImage();}
 );
var _2_1 = CreText('2_1',231,245,98,80,"4",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',2,'#c0c0c0','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'#ffffff',0,1.50);
_2_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;ClickImage();}
 );
var img_0 = CreText('img_0',117,160,51,47,'','rgba(0,0,0,0)','','','','IMG_CAN.JPG',0,'','','','',0,'0.00','32','32',1,'#ffff00','','2','2','','0','0','4','1',3,2, '#7f7f7f');
img_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;SetPicture("IMG_CAN");}
 );
var img_1 = CreText('img_1',117,220,51,47,'','rgba(0,0,0,0)','','','','IMG_FOG.PNG',0,'','','','',0,'0.00','32','32',1,'#000000','','2','2','','0','0','4','1',2,2, '#7f7f7f');
img_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;SetPicture("IMG_FOG");}
 );
var img_2 = CreText('img_2',117,280,51,47,'','rgba(0,0,0,0)','','','','IMG_BIR.PNG',0,'','','','',0,'0.00','32','32',1,'#ffff00','','2','2','','0','0','4','1',2,2, '#7f7f7f');
img_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;SetPicture("IMG_BIR");}
 );
var img_3 = CreText('img_3',55,160,51,47,'','rgba(0,0,0,0)','','','','IMG_LION.JPG',0,'','','','',0,'0.00','32','32',1,'#ffff00','','2','2','','0','0','4','1',2,2, '#7f7f7f');
img_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;SetPicture("IMG_LION");}

 );
var img_4 = CreText('img_4',55,220,51,47,'','rgba(0,0,0,0)','','','','IMG_ELE.JPG',0,'','','','',0,'0.00','32','32',1,'#ffff00','','2','2','','0','0','4','1',2,2, '#7f7f7f');
img_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;SetPicture("IMG_ELE");}
 );
var img_5 = CreText('img_5',55,280,51,47,'','rgba(0,0,0,0)','','','','IMG_FRUIT.JPG',0,'','','','',0,'0.00','32','32',1,'#ffff00','','2','2','','0','0','4','1',2,2, '#7f7f7f');
img_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;SetPicture("IMG_FRUIT");}
 );
var _1_3 = CreText('_1_3',430,164,98,80,"3",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#c0c0c0','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'#ffffff',0,1.50);
_1_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;ClickImage();}
 );
var _3_1 = CreText('_3_1',231,326,98,80,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',2,'#c0c0c0','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'#ffffff',0,1.50);
_3_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;ClickImage();}
 );
var _3_3 = CreText('_3_3',430,326,98,80,"9",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','5',2,'#c0c0c0','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'#ffffff',0,1.50);
_3_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;ClickImage();}
 );
var preview = CreText('preview',54,62,112,89,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#009100','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var img_6 = CreText('img_6',117,342,51,47,'','rgba(0,0,0,0)','','','','IMG_FISH.PNG',0,'','','','',0,'0.00','32','32',1,'#ffff00','','2','2','','0','0','4','1',2,2, '#7f7f7f');
img_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;SetPicture("IMG_FISH");}
 );
var img_7 = CreText('img_7',55,342,51,47,'','rgba(0,0,0,0)','','','','IMG_HOUSE.JPG',0,'','','','',0,'0.00','32','32',1,'#ffff00','','2','2','','0','0','4','1',2,2, '#7f7f7f');
img_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;SetPicture("IMG_HOUSE");}
 );
var sucess = CreText('sucess',304,219,153,66,'','rgba(0,0,0,0)','','','','ID_ANIMATE_GIF1.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0,0,0,0)','','2','2','','0','0','4','1',0,0, '#808080');
var Text_2 = CreText('Text_2',333,80,197,79,"Game xoay hình",'#009300','#ffffff','#ffffff','#ffffff','',22,'Arial','Bold','center','middle',3,'0.00','5','0',4,'#32cd32','#009300','0','0','#ffff00','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_showhide = CreText('bt_showhide',455,136,75,22,"☑  Hiện số",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_showhide.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowNumber();
  return;
}
 );
var Text_3 = CreText('Text_3',95,395,31,31,"››",'#00a400','#ffffff','#ffffff','#000000','',24,'Arial','Bold','center','middle',2,'0.00','1','0',2,'#ffff00','#00a400','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_1.add(Page_1_Backrounnd,Text_1,_0_1,_1_2,_1_1,_3_2,_2_3,_2_2,_2_1,img_0,img_1,img_2,img_3,img_4,img_5,_1_3,_3_1,_3_3,preview,img_6,img_7,sucess,Text_2,bt_showhide,Text_3);
stage.add(Page_1);

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page_2_Backrounnd = CreText('Page_2_Backrounnd',0,0,600,480,'','#ffffff','','','','ID_IMAGE4.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','2','2','0','','0','0','0','0',0,0,'');
var Text_1 = CreText('Text_1',215,14,293,457,"",'rgba(255,255,255,0.67)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',8,'#00b900','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _1_1 = CreText('1_1',221,84,67,61,"2",'rgba(255,255,255,0.67)','#808080','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','5',1,'#c0c0c0','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',-1,0,'#ffffff',0,1.50);
_1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;ClickImage();}
 );
var _1_2 = CreText('1_2',290,84,67,61,"",'rgba(255,255,255,0.67)','#808080','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','5',1,'#c0c0c0','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',-1,0,'#ffffff',0,1.50);
_1_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;ClickImage();}
 );
var _1_3 = CreText('1_3',359,84,67,61,"3",'rgba(255,255,255,0.67)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','5',1,'#c0c0c0','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',-1,0,'#ffffff',0,1.50);
_1_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;ClickImage();}
 );
var _2_1 = CreText('2_1',221,147,67,61,"5",'rgba(255,255,255,0.67)','#808080','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','5',1,'#c0c0c0','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',-1,0,'#ffffff',0,1.50);
_2_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;ClickImage();}
 );
var _2_2 = CreText('2_2',290,147,67,61,"6",'rgba(255,255,255,0.67)','#808080','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','5',1,'#c0c0c0','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',-1,0,'#ffffff',0,1.50);
_2_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;ClickImage();}
 );
var _2_3 = CreText('2_3',359,147,67,61,"7",'rgba(255,255,255,0.67)','#808080','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','5',1,'#c0c0c0','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',-1,0,'#ffffff',0,1.50);
_2_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;ClickImage();}
 );
var _3_1 = CreText('3_1',221,210,67,61,"9",'rgba(255,255,255,0.67)','#808080','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','5',1,'#c0c0c0','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',-1,0,'#ffffff',0,1.50);
_3_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;ClickImage();}
 );
var _3_2 = CreText('3_2',290,210,67,61,"10",'rgba(255,255,255,0.67)','#808080','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','5',1,'#c0c0c0','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',-1,0,'#ffffff',0,1.50);
_3_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;ClickImage();}
 );
var _3_3 = CreText('3_3',359,210,67,61,"11",'rgba(255,255,255,0.67)','#808080','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','5',1,'#c0c0c0','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',-1,0,'#ffffff',0,1.50);
_3_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;ClickImage();}
 );
var _0_1 = CreText('_0_1',221,21,67,61,"1",'rgba(255,255,255,0.67)','#808080','rgba(0,0,0,0)','#ff0000','',16,'Arial','Normal','center','middle',3,'0.00','5','5',1,'#c0c0c0','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',-1,0,'#ffffff',0,1.50);
_0_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;ClickImage();CheckSucess();}
 );
var preview = CreText('preview',47,64,117,170,'','rgba(0,0,0,0)','','','','P2_2.JPG',0,'','','','',3,'0.00','10','0',2,'#ffffff','','2','2','','0','0','4','1',3,2, '#7f7f7f');
preview.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;SetPicture("ID_CUSTOM5_PAGE2");}
 );
var _4_1 = CreText('4_1',221,273,67,61,"13",'rgba(255,255,255,0.67)','#808080','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','5',1,'#c0c0c0','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',-1,0,'#ffffff',0,1.50);
_4_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;ClickImage();}
 );
var _4_2 = CreText('4_2',290,273,67,61,"14",'rgba(255,255,255,0.67)','#808080','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','5',1,'#c0c0c0','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',-1,0,'#ffffff',0,1.50);
_4_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;ClickImage();}
 );
var _4_3 = CreText('4_3',359,273,67,61,"15",'rgba(255,255,255,0.67)','#808080','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','5',1,'#c0c0c0','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',-1,0,'#ffffff',0,1.50);
_4_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;ClickImage();}
 );
var _5_1 = CreText('5_1',221,336,67,61,"17",'rgba(255,255,255,0.67)','#808080','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','5',1,'#c0c0c0','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',-1,0,'#ffffff',0,1.50);
_5_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;ClickImage();}
 );
var _5_2 = CreText('5_2',290,336,67,61,"18",'rgba(255,255,255,0.67)','#808080','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','5',1,'#c0c0c0','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',-1,0,'#ffffff',0,1.50);
_5_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;ClickImage();}
 );
var _5_3 = CreText('5_3',359,336,67,61,"19",'rgba(255,255,255,0.67)','#808080','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','5',1,'#c0c0c0','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',-1,0,'#ffffff',0,1.50);
_5_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;ClickImage();}
 );
var _1_4 = CreText('1_4',430,84,67,61,"4",'rgba(255,255,255,0.67)','#808080','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','5',1,'#c0c0c0','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',-1,0,'#ffffff',0,1.50);
_1_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;ClickImage();}
 );
var _2_4 = CreText('2_4',430,147,67,61,"8",'rgba(255,255,255,0.67)','#808080','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','5',1,'#c0c0c0','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',-1,0,'#ffffff',0,1.50);
_2_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;ClickImage();}
 );
var _3_4 = CreText('3_4',430,210,67,61,"12",'rgba(255,255,255,0.67)','#808080','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','5',1,'#c0c0c0','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',-1,0,'#ffffff',0,1.50);
_3_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;ClickImage();}
 );
var _4_4 = CreText('4_4',430,273,67,61,"16",'rgba(255,255,255,0.67)','#808080','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','5',1,'#c0c0c0','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',-1,0,'#ffffff',0,1.50);
_4_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;ClickImage();}
 );
var _5_4 = CreText('5_4',430,336,67,61,"20",'rgba(255,255,255,0.67)','#808080','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','5',1,'#c0c0c0','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',-1,0,'#ffffff',0,1.50);
_5_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;ClickImage();}
 );
var Text_2 = CreText('Text_2',96,396,31,31,"«",'#00a400','#ffffff','#ffffff','#000000','',24,'Arial','Bold','center','middle',2,'0.00','1','0',2,'#ffff00','#00a400','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
var btNext = CreText('btNext',50,241,113,28,"«--››",'#00a400','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','center','middle',3,'0.00','4','0',2,'#ffffff','#00a400','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
btNext.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;
p2i++;
if(p2i>10)p2i=0;
SetPicture("P2_"+ p2i);
}
 );
var _6_1 = CreText('_6_1',221,400,67,61,"17",'rgba(255,255,255,0.67)','#808080','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','5',1,'#c0c0c0','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',-1,0,'#ffffff',0,1.50);
_6_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;ClickImage();}
 );
var _6_2 = CreText('_6_2',290,400,67,61,"18",'rgba(255,255,255,0.67)','#808080','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','5',1,'#c0c0c0','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',-1,0,'#ffffff',0,1.50);
_6_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;ClickImage();}
 );
var _6_3 = CreText('_6_3',359,400,67,61,"19",'rgba(255,255,255,0.67)','#808080','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','5',1,'#c0c0c0','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',-1,0,'#ffffff',0,1.50);
_6_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;ClickImage();}
 );
var _6_4 = CreText('_6_4',430,400,67,61,"20",'rgba(255,255,255,0.67)','#808080','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','5',1,'#c0c0c0','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',-1,0,'#ffffff',0,1.50);
_6_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;ClickImage();}
 );
var Text_3 = CreText('Text_3',290,22,208,58,"Game xoay hình",'#009100','#ffffff','#ffffff','#ffffff','',22,'Arial','Bold','center','middle',3,'0.00','5','0',0,'rgba(0,0,0,0)','#009100','0','0','#ffff00','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var sucess = CreText('sucess',285,210,153,66,'','rgba(0,0,0,0)','','','','ID_ANIMATE_GIF1.GIF',0,'','','','',0,'0.00','32','32',0,'rgba(0,0,0,0)','','2','2','','0','0','4','1',0,0, '#808080');
var bt_showhide = CreText('bt_showhide',423,59,75,22,"☑  Hiện số",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_showhide.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowNumber();
  return;
}
 );
Page_2.add(Page_2_Backrounnd,Text_1,_1_1,_1_2,_1_3,_2_1,_2_2,_2_3,_3_1,_3_2,_3_3,_0_1,preview,_4_1,_4_2,_4_3,_5_1,_5_2,_5_3,_1_4,_2_4,_3_4,_4_4,_5_4,Text_2,btNext,_6_1,_6_2,_6_3,_6_4,Text_3,sucess,bt_showhide);
stage.add(Page_2);
InitLacVietScript();
};
