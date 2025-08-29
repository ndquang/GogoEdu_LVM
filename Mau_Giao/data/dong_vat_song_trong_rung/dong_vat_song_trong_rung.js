folder_Resource ='data/dong_vat_song_trong_rung';
var name="d_";
var i_cur=0;
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
				  b= true;
			        PlaySound("ID_SOUND_CLICK");
				}
		}
	if(!b) {MoveObjectTo("","",-1,-1,20,5,2);
			PlaySound("ID_SOUND_FALSE");}

	else {
		Delay("MoveObjectTo('','',-1,-1,20,5,2)",5000);
		Delay("Init()",5000);
		PlaySound("ID_SOUND_TRUE");
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
				  af[i]= GetText("","");
				}
		}
		i++;
	}
	if(!b) {
			MoveObjectTo("","",-1,-1,10,5,2);
			PlaySound("ID_SOUND_FALSE");
		}

	else {
		var xxx= true;
		for(var x=0; x< 4; x++)
		 {
		   if(af[x]==0)
			xxx=false;
		}
		if(xxx==true){
		Delay("Init2()",5000);
		PlaySound("ID_SOUND_TRUE");
		}
	}
	InvalidateObj("","");
}
function Page_2()
{
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
var Page_2_Backrounnd = CreText('Page_2_Backrounnd',0,0,800,480,'','rgba(128, 0, 255, 1.00)','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(128, 0, 255, 0)','0','0','0','','0','0','0','0',0,0,'');
Page_2.add(Page_2_Backrounnd);
var Text_3 = CreText('Text_3',-1,322,803,164,"",'rgba(64, 0, 128, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(64, 0, 128, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_3);
var t_1 = CreText('t_1',405,9,183,141,"2",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 147, 0, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(t_1);
var t_0 = CreText('t_0',222,9,183,141,"1",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 147, 0, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(t_0);
var t_3 = CreText('t_3',405,150,183,141,"4",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 147, 0, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(t_3);
var t_2 = CreText('t_2',222,150,183,141,"3",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 147, 0, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(t_2);
var d_0 = CreText('d_0',15,333,183,141,"4",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_VO2_2.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(255, 255, 255, 255)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
d_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckPage2();
  return;
}
 );
Page_2.add(d_0);
var d_1 = CreText('d_1',211,333,183,141,"1",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_VO1_1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
d_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckPage2();
  return;
}
 );
Page_2.add(d_1);
var d_2 = CreText('d_2',407,333,183,141,"3",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_VO2_1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(255, 255, 255, 255)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
d_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckPage2();
  return;
}
 );
Page_2.add(d_2);
var d_3 = CreText('d_3',605,333,183,141,"2",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_VO1_2.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(255, 255, 255, 255)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
d_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckPage2();
  return;
}
 );
Page_2.add(d_3);
var Text_1 = CreText('Text_1',695,208,75,75,"→",'rgba(0, 128, 192, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',36,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 192, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
}
 );
Page_2.add(Text_1);
var Text_2 = CreText('Text_2',8,144,183,141,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_VO.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',5,'rgba(192, 192, 192, 255)','rgba(255, 255, 255, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_2);
var Text_4 = CreText('Text_4',65,290,68,32,"",'rgba(64, 0, 128, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',4,'0.00','50','0',0,'rgba(0, 0, 0, 0)','rgba(64, 0, 128, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_4);
var Text_5 = CreText('Text_5',354,292,100,32,"",'rgba(64, 0, 128, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',7,'0.00','25','25',0,'rgba(0, 0, 0, 0)','rgba(64, 0, 128, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_5);
stage.add(Page_2);

 var Page_3 = new Kinetic.Layer({name: 'Page_3',callback:'Page_3()'});
var Page_3_Backrounnd = CreText('Page_3_Backrounnd',0,0,800,480,'','rgba(0, 147, 0, 1.00)','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(0, 147, 0, 0)','0','0','0','','0','0','0','0',0,0,'');
Page_3.add(Page_3_Backrounnd);
var Text_4 = CreText('Text_4',64,301,68,32,"",'rgba(0, 64, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',4,'0.00','50','0',0,'rgba(0, 0, 0, 0)','rgba(0, 64, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(Text_4);
var Text_3 = CreText('Text_3',-2,333,803,164,"",'rgba(0, 64, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 64, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(Text_3);
var t_0 = CreText('t_0',217,87,183,108,"1",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 147, 0, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(t_0);
var t_1 = CreText('t_1',400,87,183,108,"2",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 147, 0, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(t_1);
var t_2 = CreText('t_2',217,196,183,108,"3",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 147, 0, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(t_2);
var t_3 = CreText('t_3',400,196,183,108,"4",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 147, 0, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(t_3);
var d_0 = CreText('d_0',10,349,183,108,"4",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_HO2_2.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
d_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckPage2();
  return;
}
 );
Page_3.add(d_0);
var d_1 = CreText('d_1',206,349,183,108,"2",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_HO1_2.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
d_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckPage2();
  return;
}
 );
Page_3.add(d_1);
var d_2 = CreText('d_2',402,349,183,108,"1",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_HO1_1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
d_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckPage2();
  return;
}
 );
Page_3.add(d_2);
var d_3 = CreText('d_3',600,349,183,108,"3",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_HO2_1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
d_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckPage2();
  return;
}
 );
Page_3.add(d_3);
var Text_1 = CreText('Text_1',710,229,75,75,"→",'rgba(0, 128, 192, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',36,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 192, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
}
 );
Page_3.add(Text_1);
var Text_2 = CreText('Text_2',8,194,183,108,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_HO.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',3,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(Text_2);
var Text_5 = CreText('Text_5',353,303,100,32,"",'rgba(0, 64, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',7,'0.00','25','25',0,'rgba(0, 0, 0, 0)','rgba(0, 64, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(Text_5);
stage.add(Page_3);

 var Page_4 = new Kinetic.Layer({name: 'Page_4',callback:'Page_4()'});
var Page_4_Backrounnd = CreText('Page_4_Backrounnd',0,0,800,480,'','rgba(255, 128, 0, 1.00)','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 128, 0, 0)','0','0','0','','0','0','0','0',0,0,'');
Page_4.add(Page_4_Backrounnd);
var Text_3 = CreText('Text_3',1,316,800,164,"",'rgba(128, 64, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(128, 64, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(Text_3);
var t_0 = CreText('t_0',224,43,183,122,"1",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 147, 0, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(t_0);
var t_1 = CreText('t_1',407,43,183,122,"2",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 147, 0, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(t_1);
var t_2 = CreText('t_2',224,165,183,122,"3",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 147, 0, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(t_2);
var t_3 = CreText('t_3',407,165,183,122,"4",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 147, 0, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(t_3);
var d_0 = CreText('d_0',9,339,183,122,"2",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_KH1_2.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
d_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckPage2();
  return;
}
 );
Page_4.add(d_0);
var d_1 = CreText('d_1',205,338,183,122,"1",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_KH1_1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
d_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckPage2();
  return;
}
 );
Page_4.add(d_1);
var d_2 = CreText('d_2',401,339,183,122,"3",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_KH2_1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
d_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckPage2();
  return;
}
 );
Page_4.add(d_2);
var d_3 = CreText('d_3',599,339,183,122,"4",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_KH2_2.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
d_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckPage2();
  return;
}
 );
Page_4.add(d_3);
var Text_1 = CreText('Text_1',703,216,75,75,"→",'rgba(0, 128, 192, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',36,'Arial','Bold','center','middle',2,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 192, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
}
 );
Page_4.add(Text_1);
var Text_2 = CreText('Text_2',17,163,183,122,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_KH.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',3,'rgba(255, 255, 255, 255)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(Text_2);
var Text_4 = CreText('Text_4',67,284,68,32,"",'rgba(128, 64, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',4,'0.00','50','0',0,'rgba(0, 0, 0, 0)','rgba(128, 64, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(Text_4);
var Text_5 = CreText('Text_5',356,286,100,32,"",'rgba(128, 64, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',7,'0.00','25','25',0,'rgba(0, 0, 0, 0)','rgba(128, 64, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_4.add(Text_5);
stage.add(Page_4);

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,800,480,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE16.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page_1.add(Page_1_Backrounnd);
var d_0 = CreText('d_0',-216,103,214,130,"1",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE10.PNG',80,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(d_0);
var d_1 = CreText('d_1',-169,96,140,151,"2",'rgba(139, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE12.PNG',30,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(139, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
d_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;CheckIn();
  return;
}
 );
Page_1.add(d_1);
var d_2 = CreText('d_2',-176,102,183,129,"0",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE11.PNG',80,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(d_2);
var c_1 = CreText('c_1',37,286,140,151,"2",'rgba(75, 0, 130, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE9.PNG',30,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(75, 0, 130, 1.00)','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
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
Page_1.add(c_1);
var c_2 = CreText('c_2',212,298,183,129,"0",'rgba(255, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE7.PNG',30,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 0, 1.00)','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
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
Page_1.add(c_2);
var c_0 = CreText('c_0',406,304,214,130,"1",'rgba(0, 85, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE8.PNG',30,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 85, 0, 1.00)','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
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
Page_1.add(c_0);
var d_3 = CreText('d_3',-190,95,163,166,"3",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE2.PNG',80,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(d_3);
var Text_1 = CreText('Text_1',2,1,798,52,"CHỌN HÌNH GHÉP BÓNG",'rgba(0, 85, 0, 0.39)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',36,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 85, 0, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_1);
var c_3 = CreText('c_3',630,270,163,166,"3",'rgba(0, 85, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE1.PNG',30,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 85, 0, 1.00)','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
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
Page_1.add(c_3);
stage.add(Page_1);
InitLacVietScript();
};
