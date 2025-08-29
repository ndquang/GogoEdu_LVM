folder_Resource ='data/dong_vat';
var name="d_";
var i_cur=0;
function Init()
{
	MoveObjectTo("","",-1,-1,20,5,2);
	for(var i=0; i< 3; i++)
	{
	SetShowObject("","d_"+i,0);
	SetMoveView("","c_"+i,1);
	}
	i_cur= Random(3);
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

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,800,480,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE16.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page_1.add(Page_1_Backrounnd);
var d_0 = CreText('d_0',-216,67,214,130,"1",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE10.PNG',80,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(d_0);
var d_1 = CreText('d_1',-169,60,140,151,"2",'rgba(139, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE12.PNG',30,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(139, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
d_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;CheckIn();
  return;
}
 );
Page_1.add(d_1);
var d_2 = CreText('d_2',-176,66,183,129,"0",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE11.PNG',80,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(d_2);
var c_1 = CreText('c_1',68,276,140,151,"2",'rgba(75, 0, 130, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE9.PNG',30,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(75, 0, 130, 1.00)','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
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
var c_2 = CreText('c_2',315,293,183,129,"0",'rgba(255, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE7.PNG',30,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 0, 1.00)','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
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
var c_0 = CreText('c_0',558,308,214,130,"1",'rgba(0, 85, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE8.PNG',30,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 85, 0, 1.00)','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
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
stage.add(Page_1);
InitLacVietScript();
};
