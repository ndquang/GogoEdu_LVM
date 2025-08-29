folder_Resource ='data/dong_vat_song_trong_rung';
var name="d_";
var i_cur=0;
var diem=0;
function Init()
{
	MoveObjectTo("","",-1,-1,20,5,2);
	for(var i=0; i< 4; i++)
	{
	SetShowObject("","d_"+i,0);
	SetMoveView("","c_"+i,1);
	}
	var i_= Random(4);
	while(i_==i_cur)
		i_= Random(4);
	i_cur=i_;
	name="d_"+i_cur;
	PlayWave("","","ID_SOUND"+i_cur);
	SetShowObject("",name,1);
	MoveObjectTo("",name,300,GetTop("",name),20,5,1);
}

function Nghe()
{
	var aaa= GetName("");
	PlayWave("","","ID_SOUND"+rightStr(aaa,1));
}

function CheckIn(){
	var b= false;
	if(RectInRect("",name,""))
		{
			if(GetText("","")==GetText("",name))
				{
				  var le = GetLeft("",name);
				  var to = GetTop("",name);
				  MoveObjectTo("","",le,to);
				  SetShowObject("",name,0);
				  MoveObjectTo("",name,-1,-1);
				  b = true;
			                  PlaySound("ID_SOUND_CLICK");
				}
		}
	if(!b)
		{
		MoveObjectTo("","",-1,-1,20,5,2);
		PlaySound("ID_SOUND_FALSE");
		}
	else 
	{
		Delay("MoveObjectTo('','',-1,-1,20,5,2)",5000);
		Delay("Init()",5000);
		PlaySound("ID_SOUND_TRUE");
		diem++;
	}
	InvalidateObj("","");
}

var af=[0,0,0,0];
function Init2()
{
	for(var i=0; i< 4; i++)
	{
	af[i]=0;
	SetMoveView("","d_"+i,1);
	MoveObjectTo("","d_"+i,-1,-1,20,5,1);
	}
}

function CheckPage2(){
	var b= false;
	var i=0;
      while(i<4 && !b){
	if(RectInRect("","t_"+i,""))
		{
			if(GetText("","")== GetText("","t_"+i))
				{
				  var le = GetLeft("","t_"+i);
				  var to = GetTop("","t_"+i);
				  MoveObjectTo("","",le,to);
				  b= true;
				  PlaySound("ID_SOUND_CLICK");
				  af[i] = GetText("","");
				}
		}
		i++;
	}
	if(!b)
		{
			MoveObjectTo("","",-1,-1,10,5,2);
			PlaySound("ID_SOUND_FALSE");
		}

	else {
		var xxx= true;
		for(var x=0; x < 4; x++)
		 {
		   if(af[x]==0)
			xxx=false;
		}
		if(xxx == true){
		diem++;	
		Delay("Init2()",5000);
		PlaySound("ID_SOUND_TRUE");
		}
	}
	InvalidateObj("","");
}
function Page_2()
{
diem=0;
GetVer();
Init2();
  return;
}

function Page_3()
{
Init2();
  return;
}

function Page_4()
{
Init2();
  return;
}

function Page_1()
{
Init();
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
 height: 480 
 });

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page_2_Backrounnd = CreText('Page_2_Backrounnd',0,0,800,480,'','#8000ff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#8000ff','0','0','0','','0','0','0','0',0,0,'');
var Text_3 = CreText('Text_3',-1,322,803,164,"",'#400080','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#400080','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var t_1 = CreText('t_1',405,9,183,141,"2",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#009300','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var t_0 = CreText('t_0',222,9,183,141,"1",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#009300','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var t_3 = CreText('t_3',405,150,183,141,"4",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#009300','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var t_2 = CreText('t_2',222,150,183,141,"3",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#009300','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var d_0 = CreText('d_0',15,333,183,141,"4",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_VO2_2.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'#ffffff','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
d_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckPage2();
  return;
}
 );
var d_1 = CreText('d_1',211,333,183,141,"1",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_VO1_1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
d_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckPage2();
  return;
}
 );
var d_2 = CreText('d_2',407,333,183,141,"3",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_VO2_1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'#ffffff','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
d_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckPage2();
  return;
}
 );
var d_3 = CreText('d_3',605,333,183,141,"2",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_VO1_2.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'#ffffff','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
d_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckPage2();
  return;
}
 );
var Text_1 = CreText('Text_1',725,8,76,69,"→",'#ffff00','#ffffff','#000000','#ffffff','',36,'Arial','Bold','center','middle',5,'0.00','35','0',2,'#000000','#ffff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
}
 );
var Text_2 = CreText('Text_2',8,144,183,141,"",'#ffffff','#ffffff','#000000','#ffffff','ID_VO.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',5,'#c0c0c0','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var Text_4 = CreText('Text_4',65,290,68,32,"",'#400080','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',4,'0.00','50','0',0,'rgba(0,0,0,0)','#400080','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_5 = CreText('Text_5',354,292,100,32,"",'#400080','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',7,'0.00','25','25',0,'rgba(0,0,0,0)','#400080','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_2.add(Page_2_Backrounnd,Text_3,t_1,t_0,t_3,t_2,d_0,d_1,d_2,d_3,Text_1,Text_2,Text_4,Text_5);
stage.add(Page_2);

 var Page_3 = new Kinetic.Layer({name: 'Page_3',callback:'Page_3()'});
var Page_3_Backrounnd = CreText('Page_3_Backrounnd',0,0,800,480,'','#009300','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#009300','0','0','0','','0','0','0','0',0,0,'');
var Text_4 = CreText('Text_4',64,301,68,32,"",'#004000','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',4,'0.00','50','0',0,'rgba(0,0,0,0)','#004000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',-2,333,803,164,"",'#004000','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#004000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var t_0 = CreText('t_0',217,87,183,108,"1",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#009300','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var t_1 = CreText('t_1',400,87,183,108,"2",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#009300','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var t_2 = CreText('t_2',217,196,183,108,"3",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#009300','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var t_3 = CreText('t_3',400,196,183,108,"4",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#009300','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var d_0 = CreText('d_0',10,349,183,108,"4",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_HO2_2.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
d_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckPage2();
  return;
}
 );
var d_1 = CreText('d_1',206,349,183,108,"2",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_HO1_2.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
d_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckPage2();
  return;
}
 );
var d_2 = CreText('d_2',402,349,183,108,"1",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_HO1_1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
d_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckPage2();
  return;
}
 );
var d_3 = CreText('d_3',600,349,183,108,"3",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_HO2_1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
d_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckPage2();
  return;
}
 );
var Text_1 = CreText('Text_1',713,10,75,75,"→",'#ffff00','#ffffff','#000000','#ffffff','',36,'Arial','Bold','center','middle',5,'0.00','47','0',2,'#000000','#ffff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
}
 );
var Text_2 = CreText('Text_2',8,194,183,108,"",'#ffffff','#ffffff','#000000','#ffffff','ID_HO.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',3,'#ffffff','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var Text_5 = CreText('Text_5',353,303,100,32,"",'#004000','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',7,'0.00','25','25',0,'rgba(0,0,0,0)','#004000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_6 = CreText('Text_6',16,4,75,75,"←",'#ffff00','#ffffff','#000000','#ffffff','',36,'Arial','Bold','center','middle',5,'0.00','46','0',2,'#000000','#ffff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
}
 );
Page_3.add(Page_3_Backrounnd,Text_4,Text_3,t_0,t_1,t_2,t_3,d_0,d_1,d_2,d_3,Text_1,Text_2,Text_5,Text_6);
stage.add(Page_3);

 var Page_4 = new Kinetic.Layer({name: 'Page_4',callback:'Page_4()'});
var Page_4_Backrounnd = CreText('Page_4_Backrounnd',0,0,800,480,'','#ff8000','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ff8000','0','0','0','','0','0','0','0',0,0,'');
var Text_3 = CreText('Text_3',1,316,800,164,"",'#804000','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#804000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var t_0 = CreText('t_0',224,43,183,122,"1",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#009300','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var t_1 = CreText('t_1',407,43,183,122,"2",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#009300','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var t_2 = CreText('t_2',224,165,183,122,"3",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#009300','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var t_3 = CreText('t_3',407,165,183,122,"4",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#009300','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var d_0 = CreText('d_0',9,339,183,122,"2",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_KH1_2.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
d_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckPage2();
  return;
}
 );
var d_1 = CreText('d_1',205,338,183,122,"1",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_KH1_1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
d_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckPage2();
  return;
}
 );
var d_2 = CreText('d_2',401,339,183,122,"3",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_KH2_1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
d_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckPage2();
  return;
}
 );
var d_3 = CreText('d_3',599,339,183,122,"4",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_KH2_2.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
d_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckPage2();
  return;
}
 );
var Text_1 = CreText('Text_1',720,7,75,75,"→",'#ffff00','#ffff00','#000000','#000000','',36,'Arial','Bold','center','middle',5,'0.00','46','0',2,'#000000','#ffff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
}
 );
var Text_2 = CreText('Text_2',17,163,183,122,"",'#ffffff','#ffffff','#000000','#ffffff','ID_KH.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',3,'#ffffff','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var Text_4 = CreText('Text_4',67,284,68,32,"",'#804000','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',4,'0.00','50','0',0,'rgba(0,0,0,0)','#804000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_5 = CreText('Text_5',356,286,100,32,"",'#804000','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',7,'0.00','25','25',0,'rgba(0,0,0,0)','#804000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_6 = CreText('Text_6',10,6,75,75,"←",'#ffff00','#ffff00','#000000','#000000','',36,'Arial','Bold','center','middle',5,'0.00','47','0',2,'#000000','#ffff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
}
 );
Page_4.add(Page_4_Backrounnd,Text_3,t_0,t_1,t_2,t_3,d_0,d_1,d_2,d_3,Text_1,Text_2,Text_4,Text_5,Text_6);
stage.add(Page_4);

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,800,480,'','#ffffff','','','','ID_IMAGE16.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','2','2','0','','0','0','0','0',0,0,'');
var d_0 = CreText('d_0',-216,103,214,130,"1",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_IMAGE10.PNG',80,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var d_1 = CreText('d_1',-212,77,140,151,"2",'#8b0000','#ffffff','rgba(0,0,0,0)','#ffffff','ID_IMAGE12.PNG',30,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#8b0000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var d_2 = CreText('d_2',-222,100,183,129,"0",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_IMAGE11.PNG',80,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var c_1 = CreText('c_1',37,286,140,151,"2",'#4b0082','#ffffff','rgba(0,0,0,0)','#ffffff','ID_IMAGE9.PNG',30,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#4b0082','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
c_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckIn();
  return;
}
 );
c_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
Nghe();

  return;
}
 );
var c_2 = CreText('c_2',212,298,183,129,"0",'#ffff00','#ffffff','rgba(0,0,0,0)','#ffffff','ID_IMAGE7.PNG',30,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffff00','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
c_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;CheckIn();
  return;
}
 );
c_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
Nghe();

  return;
}
 );
var c_0 = CreText('c_0',406,304,214,130,"1",'#005500','#ffffff','rgba(0,0,0,0)','#ffffff','ID_IMAGE8.PNG',30,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#005500','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
c_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;CheckIn();
  return;
}
 );
c_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
Nghe();

  return;
}
 );
var d_3 = CreText('d_3',-207,91,163,166,"3",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_IMAGE2.PNG',80,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',2,1,798,57,"CHỌN HÌNH GHÉP BÓNG",'rgba(255,255,255,0.44)','#ffffff','#000000','#ffffff','',36,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','rgba(255,255,255,0.44)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c_3 = CreText('c_3',630,270,163,166,"3",'#005500','#ffffff','rgba(0,0,0,0)','#ffffff','ID_IMAGE1.PNG',30,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#005500','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
c_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;CheckIn();
  return;
}
 );
c_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
Nghe();

  return;
}
 );
var Text_6 = CreText('Text_6',9,4,75,75,"←",'#ffff00','#ffff00','#000000','#000000','',36,'Arial','Bold','center','middle',5,'0.00','46','0',2,'#000000','#ffff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpdateScore(diem);
diem=0;
PrevPage();
}
 );
var Text_2 = CreText('Text_2',726,4,75,75,"SAVE",'#ffff00','#ffff00','#000000','#000000','',16,'Arial','Normal','center','middle',5,'0.00','46','0',2,'#000000','#ffff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpdateScore(diem);
GoToPage("Page_2");
diem=0;
}
 );
Page_1.add(Page_1_Backrounnd,d_0,d_1,d_2,c_1,c_2,c_0,d_3,Text_1,c_3,Text_6,Text_2);
stage.add(Page_1);
InitLacVietScript();
};
