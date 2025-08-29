folder_Resource ='data/dien_van_uu_uou';
var aX=["chú cừu","mưu trí,","trái lựu","bưu điện","cấp cứu","cửu chương","hưu trí","hữu ích","lưu ban","mưu mẹo","phiêu lưu","sưu tầm","cưu mang","bưu thiếp","cựu học sinh"];
var aS=["bướu cổ","chai rượu","hươu sao","ốc bươu","hươu cao cổ","con khướu","rượu bia","rượu nếp","rượu nho","rượu gạo","con hươu","nướu răng"];
function InitCur(){
SetMoveView("","obj_s",1);
SetMoveView("","obj_x",1);
SetShowObject("","m_diem",0);
SetShowObject("","toolTip",0);
SetShowObject("","lam_lai",0);
}
var arTam=[0,0,0,0,0];
function  CreateTu( m_size){
   var Count = 0;
   for (var i = 0; i < 5 ; i++)
   {
    var bb = true;
    var iNN ;
    while (bb)
    {
    iNN = Random(m_size);
    for (var j = 0 ; j < Count;j++)
    { 
      if (arTam[j] == iNN)
         break;
    }
    if (j >= Count)
       bb = false;
    }
    arTam[Count] =iNN;
    Count++;
  } 
}
var arALL=[0,0,0,0,0];
var abool=[1,1,1,1,1,1,1,1,1,1];
var aVan0=["ươu","ướu","ườu","ưởu","ưỡu","ượu"];
var aVan1=["ưu","ứu","ừu","ửu","ữu","ựu"];
var aDau=["...",".´..",".`..",". ̉..",".˜..","..̣."];
function  NewGame()
{
  SetShowObject("","lam_lai",0);
  SetShowObject("","cham_diem",1);
  SetShowObject("","m_diem",0);
PlaySound("ID_SOUND_NEW");
    CreateTu(15);
 	for(var i=0;i<5;i++)
	   arALL[i]= toLowerCase(aX[arTam[i]]);	
    CreateTu(12);
    for(var j=5;j<10;j++)
	   arALL[j]= toLowerCase(aS[arTam[j-5]]);	
     for(var k=0;k<30;k++)
	{
		var x= Random(10);
		var y= Random(10);
		var tam= arALL[x];
		arALL[x]=arALL[y];
		arALL[y]=tam;
	}
	for(var s=0;s<10;s++)
	{
	     var ss= "";
	     var j=0;
	     var e= false;
	     while(j<6 && !e)
		{
			if(indexOf(arALL[s],aVan0[j],0)>=0){
			  ss= replaceStr(arALL[s],aVan0[j],aDau[j]);
			  e= true;
			  break;
			}
			j++;
		}
	   if(e==false){
		j=0;
	   while(j<6 && !e)
		{
			if(indexOf(arALL[s],aVan1[j],0)>=0){
			  ss= replaceStr(arALL[s],aVan1[j],aDau[j]);
			  e= true;
			  break;
			}
			j++;
		}
		}
	   SetText("","obj_"+s,ss);
	   SetFontColor("","obj_"+s,"#0000FF");
	  abool[s]=1;
	}
	GetVer();
	InvalidateObj("","");
}

function ThayTu( source)
{
	if(indexOf(source,"...",0)>=0)
	   return 0;
	if(indexOf(source,".´..",0)>=0)
	   return 1;
	if(indexOf(source,".`..",0)>=0)
	   return 2;
	if(indexOf(source,". ̉..",0)>=0)
	   return 3;
	if(indexOf(source,".˜..",0)>=0)
	   return 4;
	if(indexOf(source,"..̣.",0)>=0)
	   return 5;
}
function  DropDown()
{

	var k=0;
	var b_exit= false;
	while(k<10 && !b_exit)
	{
		if(RectInRect("","","obj_"+k))
			{
				var ch= GetText("","");
				var wo= GetText("","obj_"+k);
                        var ix= ThayTu(wo);
				var kqnew="";
				if(ch==aVan1[0])
					kqnew= aVan1[ix];
				else if(ch==aVan0[0])
					kqnew= aVan0[ix];
				var ss= replaceStr(wo,aDau[ix],kqnew);
				 SetText("","obj_"+k,ss);
				Speak(ss,"VN");
			}
		k++;
	}
	MoveObjectTo("","",-1,-1);
	if(b_exit){
		PlayWave("","","ID_SOUND_FALSE");
	}
	InvalidateObj("","");
	
}
function InitGame()
{
NewGame();
InvalidateObj("","");
}
function  ShowTip()
{
	var ii= replaceStr(GetName(""),"obj_",'');
      if(abool[ii]==0){
		SetText("","toolTip",arALL[ii]);
		
		var ll = GetCursorPos("x",1);
		var tt = GetCursorPos("k",2);
		MoveObjectTo("","toolTip",ll,tt);
		SetShowObject("","toolTip",1);
	}
}
function  HideTip()
{
SetShowObject("","toolTip",0);
InvalidateObj("","");
}
function Page_1()
{
InitCur();
PlaySound("ID_SOUND_HOME");
InitGame();
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
var Page1_Backrounnd = CreText('Page1_Backrounnd',0,0,640,480,'','#ffffff','','','','ID_IMAGE2.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','2','2','0','','0','0','0','0',0,0,'');
var title = CreText('title',17,10,313,38,"1. Điền vần ưu hay vần ươu:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var obj_0 = CreText('obj_0',89,108,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj_0.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
ShowTip();
  return;
}
 );
obj_0.on('mouseout ',function(evt)
{
m_pgObjCaller = this;
HideTip();
  return;
}
 );
var obj_1 = CreText('obj_1',89,164,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj_1.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
ShowTip();
  return;
}
 );
obj_1.on('mouseout ',function(evt)
{
m_pgObjCaller = this;
HideTip();
  return;
}
 );
var obj_2 = CreText('obj_2',89,220,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj_2.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
ShowTip();
  return;
}
 );
obj_2.on('mouseout ',function(evt)
{
m_pgObjCaller = this;
HideTip();
  return;
}
 );
var obj_3 = CreText('obj_3',89,276,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj_3.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
ShowTip();
  return;
}
 );
obj_3.on('mouseout ',function(evt)
{
m_pgObjCaller = this;
HideTip();
  return;
}
 );
var obj_4 = CreText('obj_4',89,333,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj_4.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
ShowTip();
  return;
}
 );
obj_4.on('mouseout ',function(evt)
{
m_pgObjCaller = this;
HideTip();
  return;
}
 );
var obj_5 = CreText('obj_5',360,108,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj_5.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
ShowTip();
  return;
}
 );
obj_5.on('mouseout ',function(evt)
{
m_pgObjCaller = this;
HideTip();
  return;
}
 );
var obj_6 = CreText('obj_6',360,164,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj_6.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
ShowTip();
  return;
}
 );
obj_6.on('mouseout ',function(evt)
{
m_pgObjCaller = this;
HideTip();
  return;
}
 );
var obj_7 = CreText('obj_7',360,220,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj_7.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
ShowTip();
  return;
}
 );
obj_7.on('mouseout ',function(evt)
{
m_pgObjCaller = this;
HideTip();
  return;
}
 );
var obj_8 = CreText('obj_8',360,276,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowTip();
  return;
}
 );
obj_8.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
ShowTip();
  return;
}
 );
obj_8.on('mouseout ',function(evt)
{
m_pgObjCaller = this;
HideTip();
  return;
}
 );
var obj_9 = CreText('obj_9',360,333,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj_9.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
ShowTip();
  return;
}
 );
obj_9.on('mouseout ',function(evt)
{
m_pgObjCaller = this;
HideTip();
  return;
}
 );
var obj_s = CreText('obj_s',329,48,60,34,"ươu",'#ffffe0','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj_s.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DropDown();
  return;
}
 );
var obj_x = CreText('obj_x',239,49,65,34,"ưu",'#ffffe0','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj_x.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DropDown();
  return;
}
 );
var cham_diem = CreText('cham_diem',268,396,121,28,"Chấm Điểm",'#80ff00','#ffffff','#000000','#000000','',14,'Arial','Bold','center','middle',3,'0.00','0','0',2,'#ffffff','#c1ff84','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cham_diem.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var m_diem=0;
for(var i=0; i< 10; i++)
		{
		if(GetText("","obj_"+i)== arALL[i])
		{
		   	m_diem=m_diem+1;
			SetFontColor("","obj_"+i,"#008000");
			abool[i]=1;
		}
		else {
			SetFontColor("","obj_"+i,"#ff0000");
			abool[i]=0;
			}
	}
var diem = m_diem*10 / 10;
diem = ceil(diem);
SetText("","m_diem",diem+ " điểm.");
SetShowObject("","m_diem",1);
SetShowObject("","lam_lai",1);
SetShowObject("","",0);
UpdateScore(diem);
InvalidateObj("","");
if(diem==10){
	 PlayWave("","","ID_SOUND_TRUE");
	}
else{
      PlayWave("","","ID_SOUND_FALSE");
	}
  return;
}
 );
var lam_lai = CreText('lam_lai',268,395,121,28,"Làm Lại",'#80ff00','#ffffff','#000000','#000000','',14,'Arial','Bold','center','middle',3,'0.00','0','0',2,'#ffffff','#c1ff84','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitGame(); 
 return;
}
 );
var m_diem = CreText('m_diem',181,207,327,68,"10 điểm",'#ffc0cb','#ffffff','#ff0000','#ffffff','',36,'Comic Sans MS','','center','middle',12,'0.00','2','2',1,'#ff0000','#ffc0cb','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var toolTip = CreText('toolTip',667,172,185,40,"ĐIỂM",'#ffffe0','#ffffff','#009300','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#009300','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
toolTip.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var m_diem=0;
for(var i=0; i< 10; i++)
		{
		if(GetText("","obj_"+i)== arALL[i])
		{
		   	m_diem=m_diem+1;
			SetFontColor("","obj_"+i,"#008000");
		}
		else {
			SetFontColor("","obj_"+i,"#ff0000");
			}
	}
var diem = m_diem*10 / 10;
diem = ceil(diem);
SetText("","m_diem",diem+ " điểm.");
SetShowObject("","m_diem",1);
InvalidateObj("","");
if(diem==10){
	 PlayWave("","","ID_SOUND_DUNG_KT");
	 Delay("InitGame()",3000);
	}
else{
      PlayWave("","","ID_SOUND_SAI_KT");
	Delay("SetShowObject('','m_diem',0)",2000);
	}
  return;
}
 );
Page_1.add(Page1_Backrounnd,title,obj_0,obj_1,obj_2,obj_3,obj_4,obj_5,obj_6,obj_7,obj_8,obj_9,obj_s,obj_x,cham_diem,lam_lai,m_diem,toolTip);
stage.add(Page_1);
InitLacVietScript();
};
