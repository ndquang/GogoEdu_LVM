
var aEN=["Blue","Green","Red","Orange","Yellow","Pink","White","Black","Purple","Brown","Gray","Turquoise"];
var aVN=["Màu xanh dương","Màu xanh lá cây","Màu đỏ","Màu da cam","Màu vàng","Màu hồng","Màu trắng","Màu đen","Màu tím","Màu nâu","Màu xám","Màu ngọc lam"];
var aCL=["#0000ff","#008000","#ff0000","#FFA500","#FFFF00","#FF00FF","#ffffff","#000000","#800080","#A52A2A","#808080","#40E0D0"];
var lang="VN";
var m_index=0;
function  ChangeLang(){
	PlayWave("","","ID_CLICK");
	if(lang=="VN")
	{
      	lang	= "EN";
		SetRsc("","lang_vn","ID_VN_OFF");
		SetRsc("","lang_en","ID_EN_ON");
		SetText("","colorobj",aEN[m_index]);
		PlaySound("ID_EN"+m_index);
	}
	else {
		lang	= "VN";
		SetRsc("","lang_vn","ID_VN_ON");
		SetRsc("","lang_en","ID_EN_OFF");
		SetText("","colorobj",aVN[m_index]);
		PlaySound("ID_VN"+m_index);
	}
	InvalidateObj("","");
}

function  ClickColor(){
var i = GetText("","");
SetColor("","colorobj",aCL[i]);
if(lang=="VN"){
	PlaySound("ID_VN"+i);
      SetText("","text_xx",aVN[i]);
}
else {
	PlaySound("ID_EN"+i);
	SetText("","text_xx",aEN[i]);
}
m_index=i;
InvalidateObj("","");
}
var m_ban= false;
var arrColor=["","","",""];
function  CreateColor()
{
	PlayWave("","","ID_TEST_START");
	SetShowObject("","obj_true",0);
	SetShowObject("","obj_false",0);
	MoveObjectTo("","Group_1",0,0,50,2,7);
   var Count = 0;
   for (var i = 0; i < 4 ; i++)
   {
    var bb = true;
    var iNN ;
    while (bb)
    {
    iNN = Random(12);
    for (var j = 0 ; j < Count;j++)
    { 
      if (arrColor[j] == iNN)
       {
         break;
       }
     }
    if (j >= Count)
       bb = false;
    }
    arrColor[Count] =iNN;
    Count++;
  } // tao so ngau nhien khong trung

	for(var h=0;h<4;h++)
		SetColor("","mau_"+h,aCL[arrColor[h]]);
	m_index=Random(4);
	if(lang=="VN"){
	PlaySound("ID_VN"+arrColor[m_index]);
      SetText("","chu",aVN[arrColor[m_index]]);
	}
	else {
	PlaySound("ID_EN"+arrColor[m_index]);
	SetText("","chu",aEN[arrColor[m_index]]);
	}
	SetShowObject("","Group_1",0);
	InvalidateObj("","");
	m_ban= false;
}

var m_caudung=0;
var m_causai=0;
function  CheckColor(){
	if(m_ban== false){
	if(GetText("","")==m_index){
		PlayWave("","","ID_TEST_TRUE");
		MoveObjectTo("","obj_true",GetLeft("","mau_"+m_index),GetTop("","mau_"+m_index));
		SetShowObject("","obj_true",1);
		m_caudung++;
		}
	else {
		PlayWave("","","ID_TEST_FALSE");
		MoveObjectTo("","obj_true",GetLeft("","mau_"+m_index),GetTop("","mau_"+m_index));
		SetShowObject("","obj_true",1);
		var sai_= "mau_"+ GetText("","");
		MoveObjectTo("","obj_false", GetLeft("", sai_), GetTop("", sai_));
		SetShowObject("","obj_false",1);
		m_causai++;
	}
	var tong_so= m_caudung+m_causai;
	SetText("","so_cau", tong_so +"/"+10 );
	InvalidateObj("","");
	if(tong_so==10)
	{
		PlayWave("","","ID_TEST_RESULT");
		SetText("","cau_dung",m_caudung);
		SetText("","cau_sai",m_causai);
		SetShowObject("","Group_1",1);
		MoveObjectTo("","Group_1",200,150,50,2,7);
		Delay("CreateColor()",5000);
		SetText("","so_cau", 0 +"/"+10 );
		m_caudung=0;
		m_causai=0;
	}
	else Delay("CreateColor()",3000);
	m_ban= true;
	}
}
folder_Resource ='/data/be_hoc_mau_sac';

function Page_1()
{
PlaySound("ID_START");
  return;
}

function Page_2()
{
CreateColor();
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
var Page1_Backrounnd = CreText('Page1_Backrounnd',0,0,640,480,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE3.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(0, 0, 0, 0)','2','2','0','','0','0','0','0',0,0,'');
Page_1.add(Page1_Backrounnd);
var Image_1 = CreText('Image_1',582,333,52,38,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE2.PNG',0,'','','','',0,'0.00','30','30',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, 'rgba(128, 128, 128, 255)');
Image_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_1.add(Image_1);
var colorobj = CreText('colorobj',174,45,290,205,"",'rgba(0, 0, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',36,'Arial','Normal','center','middle',8,'0.00','33','75',2,'rgba(192, 192, 192, 255)','rgba(0, 0, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
colorobj.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;

if(lang=="VN")
	PlaySound("ID_VN"+m_index);
else
	PlaySound("ID_EN"+m_index);
  return;
}
 );
Page_1.add(colorobj);
var cl0 = CreText('cl0',40,382,41,41,"0",'rgba(0, 0, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','30','30',2,'rgba(255, 255, 255, 255)','rgba(0, 0, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cl0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickColor();
  return;
}
 );
Page_1.add(cl0);
var cl1 = CreText('cl1',145,382,41,41,"1",'rgba(0, 147, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','30','30',2,'rgba(255, 255, 255, 255)','rgba(0, 147, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cl1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickColor();
  return;
}
 );
Page_1.add(cl1);
var cl2 = CreText('cl2',250,382,41,41,"2",'rgba(255, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','30','30',2,'rgba(255, 255, 255, 255)','rgba(255, 0, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cl2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickColor();
  return;
}
 );
Page_1.add(cl2);
var cl3 = CreText('cl3',355,382,41,41,"3",'rgba(255, 104, 32, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','30','30',2,'rgba(255, 255, 255, 255)','rgba(255, 104, 32, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cl3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickColor();
  return;
}
 );
Page_1.add(cl3);
var cl4 = CreText('cl4',460,382,41,41,"4",'rgba(255, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','30','30',2,'rgba(255, 255, 255, 255)','rgba(255, 255, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cl4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickColor();
  return;
}
 );
Page_1.add(cl4);
var cl5 = CreText('cl5',560,382,41,41,"5",'rgba(255, 62, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','30','30',2,'rgba(255, 255, 255, 255)','rgba(255, 62, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cl5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickColor();
  return;
}
 );
Page_1.add(cl5);
var cl6 = CreText('cl6',41,430,41,41,"6",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','30','30',2,'rgba(40, 40, 40, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cl6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickColor();
  return;
}
 );
Page_1.add(cl6);
var cl7 = CreText('cl7',146,430,41,41,"7",'rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','30','30',2,'rgba(255, 255, 255, 255)','rgba(0, 0, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cl7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickColor();
  return;
}
 );
Page_1.add(cl7);
var cl8 = CreText('cl8',250,430,41,41,"8",'rgba(128, 0, 128, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','30','30',2,'rgba(255, 255, 255, 255)','rgba(128, 0, 128, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cl8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickColor();
  return;
}
 );
Page_1.add(cl8);
var cl9 = CreText('cl9',355,430,41,41,"9",'rgba(128, 64, 64, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','30','30',2,'rgba(255, 255, 255, 255)','rgba(128, 64, 64, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cl9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickColor();
  return;
}
 );
Page_1.add(cl9);
var cl10 = CreText('cl10',460,430,41,41,"10",'rgba(121, 121, 121, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','30','30',2,'rgba(255, 255, 255, 255)','rgba(121, 121, 121, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cl10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickColor();
  return;
}
 );
Page_1.add(cl10);
var cl11 = CreText('cl11',560,430,41,41,"11",'rgba(0, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','30','30',2,'rgba(255, 255, 255, 255)','rgba(0, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cl11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickColor();
  return;
}
 );
Page_1.add(cl11);
var lang_vn = CreText('lang_vn',538,14,35,35,'','rgba(0, 0, 0, 0)','','','','ID_VN_ON.PNG',0,'','','','',0,'0.00','30','30',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, 'rgba(128, 128, 128, 255)');
lang_vn.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeLang();
  return;
}
 );
Page_1.add(lang_vn);
var lang_en = CreText('lang_en',585,16,35,35,'','rgba(0, 0, 0, 0)','','','','ID_EN_OFF.PNG',0,'','','','',0,'0.00','30','30',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, 'rgba(128, 128, 128, 255)');
lang_en.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeLang();
  return;
}
 );
Page_1.add(lang_en);
var text_xx = CreText('text_xx',196,260,253,39,"Màu xanh dương",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(255, 255, 255, 1.00)','',26,'Arial','Bold','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(192, 192, 192, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
text_xx.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if(lang=="VN")
	PlaySound("ID_VN"+m_index);
else
	PlaySound("ID_EN"+m_index);
  return;
}

 );
Page_1.add(text_xx);
stage.add(Page_1);

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page2_Backrounnd = CreText('Page2_Backrounnd',0,0,640,480,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE3.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(0, 0, 0, 0)','2','2','0','','0','0','0','0',0,0,'');
Page_2.add(Page2_Backrounnd);
var lang_vn = CreText('lang_vn',528,11,35,35,'','rgba(0, 0, 0, 0)','','','','ID_VN_ON.PNG',0,'','','','',0,'0.00','30','30',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, 'rgba(128, 128, 128, 255)');
lang_vn.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeLang();
  return;
}
 );
Page_2.add(lang_vn);
var lang_en = CreText('lang_en',575,13,35,35,'','rgba(0, 0, 0, 0)','','','','ID_EN_OFF.PNG',0,'','','','',0,'0.00','30','30',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, 'rgba(128, 128, 128, 255)');
lang_en.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeLang();
  return;
}
 );
Page_2.add(lang_en);
var mau_0 = CreText('mau_0',204,69,92,93,"0",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','30','30',2,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(192, 192, 192, 255)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
mau_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckColor();
  return;
}
 );
Page_2.add(mau_0);
var mau_1 = CreText('mau_1',356,70,92,93,"1",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','30','30',2,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(192, 192, 192, 255)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
mau_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckColor();
  return;
}
 );
Page_2.add(mau_1);
var mau_2 = CreText('mau_2',204,170,92,93,"2",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','30','30',2,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(192, 192, 192, 255)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
mau_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckColor();
  return;
}
 );
Page_2.add(mau_2);
var mau_3 = CreText('mau_3',356,167,92,93,"3",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',2,'0.00','30','30',2,'rgba(255, 255, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(192, 192, 192, 255)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
mau_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckColor();
  return;
}
 );
Page_2.add(mau_3);
var chu = CreText('chu',198,274,253,39,"Màu da cam",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(255, 255, 255, 1.00)','',26,'Arial','Bold','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(192, 192, 192, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
chu.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateColor();
  return;
}
 );
Page_2.add(chu);
var so_cau = CreText('so_cau',272,32,92,27,"0/10",'rgba(128, 64, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','center','middle',3,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(128, 64, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(so_cau);
var obj_false = CreText('obj_false',294,393,133,64,"true",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE_SAI.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(obj_false);
var obj_true = CreText('obj_true',170,394,133,64,"true",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE_DUNG.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(obj_true);
var Drawtext_1 = CreText('Draw text_1',11,417,56,36,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE5.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Drawtext_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page_2.add(Drawtext_1);
var tong_ket = CreText('tong_ket',-1,3,309,199,"TỔNG KẾT",'rgba(255, 255, 224, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 0, 0, 1.00)','rgba(255, 0, 255, 1.00)','',20,'Arial','Bold','center','top',0,'0.00','0','0',2,'rgba(255, 255, 0, 255)','rgba(255, 255, 224, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tong_ket.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  NewGame();
  return;
}
 );
Page_2.add(tong_ket);
var cau_dung = CreText('cau_dung',183,37,86,84,"6",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 85, 0, 1.00)','rgba(255, 255, 255, 1.00)','',48,'Arial','Bold','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(255, 255, 255, 255)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(cau_dung);
var cau_sai = CreText('cau_sai',188,121,85,76,"6",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(255, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',48,'Arial','Bold','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(255, 255, 255, 255)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(cau_sai);
var Drawtext_2 = CreText('Draw text_2',34,34,159,68,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 147, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE_DUNG.PNG',36,'Arial','Bold','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Drawtext_2);
var DrawText_1 = CreText('DrawText_1',34,125,159,68,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE_SAI.PNG',36,'Arial','Bold','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(DrawText_1);
var Text_1 = CreText('Text_1',0,3,307,26,"TỔNG KẾT",'rgba(255, 255, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_1);
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:313,height:203});
Group_1.add(tong_ket);
Group_1.add(Text_1);
Group_1.add(Drawtext_2);
Group_1.add(DrawText_1);
Group_1.add(cau_sai);
Group_1.add(cau_dung);
Page_2.add(Group_1);
stage.add(Page_2);
InitLacVietScript();
};
