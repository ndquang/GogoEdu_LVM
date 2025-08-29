folder_Resource ='data/luyen-tap1';
var m_curent="";
var m_color="#ff0000";
var diem = 0 ;

function CheckResultPage1(){
	for(var i=0;i<10;i++)
	{
		if(GetText("","obj"+i)=="")
			return false;
	}
	return true;
}
function  ClickObject()
{
	if(GetText("","")=="")
	{
		var type= ShapeType("","");
		if(diem<0)diem=0;
		if(m_curent=="")
		{
			m_curent= type;
			SetColorEx("","",m_color);
			SetText("","",1);
			diem++;
		}
		else if(m_curent==type)
		{
			SetColorEx("","",m_color);
			SetText("","",1);
			diem++;
		}
		else  {
			PlayWave("","","ID_SOUND_FALSE");
			diem--;
			return;
		}	
		PlayWave("","","ID_SOUND_TRUE");
		if(CheckResultPage1()==true)
		{
			SetText("","lbScore",diem);
			SetShowObject("","grMessage",1);
			UpdateScore(diem);
		}
		InvalidateObj("","");
	}
}
function  InitPage1(){
diem =0;
for(var i=0;i<10;i++)
{
	SetText("","obj"+i,"");
	SetColorEx("","obj"+i,"#ffffff");
}
GetVer();
SetColorEx("","cur_color",m_color);
SetShowObject("","grMessage",0);
InvalidateObj("","");
}


function ChonMau()
{
	m_color= GetColor("","","");
      SetColorEx("","cur_color",m_color);
	InvalidateObj("","");
	m_curent="";
}
function InitPage2()
{
for(var i=0;i<8;i++){
SetText("","obj"+i,"");
}
SetMoveView("","obj0",1);
SetMoveView("","obj1",1);
SetShowObject("","grMsg",0);
GetVer();
}
function  Quay()
{
  var r = Number(GetRotateObj("",""));
  r = r + 90;
  RotateObj("","",r%360);
  InvalidateObj("","");
  return;
}
function CheckResultPage2(){
	for(var i=0;i<8;i++)
	{
		if(GetText("","k"+i)=="")
			return false;
	}
	return true;
}
function  CheckObject()
{
	var i=0;
	var b_exit= false;
	while(i< 8 && !b_exit)
	{
		if(RectInRect("","","k"+i))
			{
				if(ShapeType("","")==ShapeType("","k"+i) && GetRotateObj("","")== GetRotateObj("","k"+i))
				   {
					SetColorEx("","k"+i,GetColor("","",""));
					SetText("","k"+i,1);
					b_exit= true;
					PlayWave("","","ID_SOUND_TRUE");
				   }
			}
		i++;
	}
	if(b_exit)
	{
		PlayWave("","","ID_SOUND_FALSE");
		if(CheckResultPage2()==true)
		{
			UpdateScore(10);
			SetShowObject("","grMsg",1);
			
		}
	}
	MoveObjectTo("","",-1,-1);
	InvalidateObj("","");	
}
function Page_1()
{
InitPage1();
  return;
}

function Page_2()
{
InitPage2();
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
var Page1_Backrounnd = CreText('Page1_Backrounnd',0,0,640,480,'','#e6e6fa','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#e6e6fa','0','1','0','','0','0','0','0',0,0,'');
var title = CreText('title',1,0,638,37,"1. Tô màu các hình: cùng hình dạng thì cùng một màu.",'#ff80ff','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#ffffff','#ff80ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var obj0 = CreText('obj0',74,72,97,86,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObject();
  return;
}
 );
var obj1 = CreText('obj1',209,126,97,86,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',4,'0.00','50','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObject();
  return;
}
 );
var obj2 = CreText('obj2',314,54,86,86,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObject();
  return;
}
 );
var obj3 = CreText('obj3',481,75,86,86,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',0,'48.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObject();
  return;
}
 );
var obj4 = CreText('obj4',356,193,60,61,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObject();
  return;
}
 );
var obj5 = CreText('obj5',129,302,65,56,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObject();
  return;
}
 );
var obj6 = CreText('obj6',506,230,82,60,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',4,'28.00','50','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObject();
  return;
}
 );
var obj7 = CreText('obj7',241,281,95,88,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',0,'10.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObject();
  return;
}
 );
var obj8 = CreText('obj8',66,188,68,69,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObject();
  return;
}
 );
var obj9 = CreText('obj9',393,300,97,86,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',4,'0.00','23','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObject();
  return;
}
 );
var Color_0 = CreText('Color_0',520,428,45,36,"",'#005500','#ffe4e1','#ff6820','#ff6820','',14,'Verdana','Bold','left','middle',0,'0.00','32','32',2,'#ffffff','#005500','0','0','rgba(0,0,0,0)','1','1','4','3',2,1,'#ffffff',0,1.50);
Color_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
}




 );
var Color_5 = CreText('Color_5',457,428,45,36,"",'#00ff00','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',0,'0.00','32','32',2,'#ffffff','#00ff00','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#ffffff',0,1.50);
Color_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var Color_6 = CreText('Color_6',127,428,45,36,"",'#ff0000','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',0,'0.00','32','32',2,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#ffffff',0,1.50);
Color_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var Color_8 = CreText('Color_8',289,428,45,36,"",'#000000','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',0,'0.00','32','32',2,'#ffffff','#000000','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#ffffff',0,1.50);
Color_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var Color_9 = CreText('Color_9',73,428,45,36,"",'#0000ff','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0000ff','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#ffffff',0,1.50);
Color_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var Color_10 = CreText('Color_10',343,428,45,36,"",'#ff6820','#000000','#ff6820','#ff6820','',14,'Verdana','Bold','center','middle',0,'0.00','32','32',2,'#ffffff','#ff6820','0','0','rgba(0,0,0,0)','2','2','4','3',1,1,'#ffffff',0,1.50);
Color_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
   return;
}

 );
var Color_11 = CreText('Color_11',181,428,45,36,"",'#4b0082','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',0,'0.00','32','32',2,'#ffffff','#4b0082','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#ffffff',0,1.50);
Color_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var Color_12 = CreText('Color_12',235,428,45,36,"",'#ffff00','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',0,'0.00','32','32',2,'#ffffff','#ffff00','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#ffffff',0,1.50);
Color_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var Color_13 = CreText('Color_13',397,428,45,36,"",'#d2b48c','#ffffff','#000000','#ffffff','',18,'Verdana','Normal','center','middle',0,'0.00','32','32',2,'#ffffff','#d2b48c','0','0','rgba(0,0,0,0)','0','0','4','1',1,1,'#ffffff',0,1.50);
Color_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var Color_14 = CreText('Color_14',580,428,45,36,"",'#ff00ff','#ffe4e1','#ff6820','#ff6820','',14,'Verdana','Bold','left','middle',0,'0.00','32','32',2,'#ffffff','#ff00ff','0','0','rgba(0,0,0,0)','1','1','4','3',2,1,'#ffffff',0,1.50);
Color_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ChonMau();
return;   

}




 );
var cur_color = CreText('cur_color',5,419,54,56,"",'#8b0000','#ffffff','#ffffff','#ffffff','',18,'Verdana','Bold','center','middle',2,'0.00','0','0',4,'#ffffff','#8b0000','0','0','rgba(0,0,0,0)','0','0','4','2',1,1,'#ffffff',0,1.50);
cur_color.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMau();
  return;
}
 );
var lbScore = CreText('lbScore',182,164,256,129,"8",'#ffc0cb','#ffffff','#ff0000','#ffffff','',48,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#ffc0cb','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var lbCaption = CreText('lbCaption',182,164,256,19,"gamechocon",'#ff00ff','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#ff00ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var btPlay = CreText('btPlay',269,255,85,27,"Bài 2",'#ff00ff','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','6','0',1,'#ffffff','#ff00ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
btPlay.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
var grMessage = new Kinetic.Group({name:'grMessage',x:0,y:0,width:260,height:133});
grMessage.add(lbScore,lbCaption,btPlay);
Page_1.add(Page1_Backrounnd,title,obj0,obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9,Color_0,Color_5,Color_6,Color_8,Color_9,Color_10,Color_11,Color_12,Color_13,Color_14,cur_color,lbScore,lbCaption,btPlay,grMessage);
stage.add(Page_1);

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page2_Backrounnd = CreText('Page2_Backrounnd',0,0,640,480,'','#e6e6fa','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#e6e6fa','0','1','0','','0','0','0','0',0,0,'');
var Drawtext_1 = CreText('Draw text_1',18,312,167,84,"Nhấn nhanh chuột 2 lần để xoay hình, rồi kéo thả vào vị trí tương ứng.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Italic','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','rgba(255,255,224,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Drawtext_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"VN");
  return;
}
 );
var k0 = CreText('k0',305,56,97,86,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var k1 = CreText('k1',402,56,89,86,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var k3 = CreText('k3',369,199,89,86,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var k2 = CreText('k2',284,200,87,85,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',4,'270.00','100','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var k4 = CreText('k4',457,199,86,86,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',4,'180.00','100','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var k6 = CreText('k6',361,342,89,85,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var k5 = CreText('k5',276,342,85,86,"",'#ffffff','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',4,'0.00','100','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var k7 = CreText('k7',450,341,85,86,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',4,'180.00','100','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var a = CreText('a',240,50,30,27,"a)",'rgba(0,0,0,0)','#ffffff','#000000','#ffff00','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c = CreText('c',240,335,30,27,"c)",'rgba(0,0,0,0)','#ffffff','#000000','#ffff00','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var b = CreText('b',241,181,30,27,"b)",'rgba(0,0,0,0)','#ffffff','#000000','#ffff00','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var obj0 = CreText('obj0',51,62,82,86,"",'#ff00ff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#ff00ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckObject();
  return;
}
 );
obj0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
	ll= GetLeft("","");
	tt= GetTop("","");
  return;
}
 );
var obj1 = CreText('obj1',46,161,82,86,"",'#ff00ff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',4,'0.00','100','0',1,'#ffffff','#ff00ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckObject();
  return;
}
 );
obj1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
	ll= GetLeft("","");
	tt= GetTop("","");

  return;
}
 );
obj1.on('dblclick',function(evt)
{
m_pgObjCaller = this;
Quay();
  return;
}
 );
var title = CreText('title',1,0,638,37,"2. Xếp hình",'#ff80ff','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#ffffff','#ff80ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',80,271,33,29,"ↄ",'#c0c0c0','#ffffff','#000000','#ffffff','',28,'Arial','Normal','center','middle',3,'0.00','6','0',2,'#ffffff','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Quay();
}
 );
var lbScore = CreText('lbScore',186,174,256,129,"Bạn đã hoàn thành bài học này.",'#ffc0cb','#ffffff','#000000','#000000','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#ffc0cb','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var lbCaption = CreText('lbCaption',186,174,256,19,"gamechocon",'#ff00ff','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#ff00ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var btPlay = CreText('btPlay',273,265,85,27,"Chơi Lại",'#ff00ff','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','6','0',1,'#ffffff','#ff00ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
btPlay.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
var grMsg = new Kinetic.Group({name:'grMsg',x:0,y:0,width:260,height:133});
grMsg.add(lbScore,btPlay,lbCaption);
Page_2.add(Page2_Backrounnd,Drawtext_1,k0,k1,k3,k2,k4,k6,k5,k7,a,c,b,obj0,obj1,title,Text_1,lbScore,lbCaption,btPlay,grMsg);
stage.add(Page_2);
InitLacVietScript();
};
