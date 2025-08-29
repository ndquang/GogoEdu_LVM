folder_Resource ='data/be_hoc_mau_sac';
var aEN=["Blue","Green","Red","Orange","Yellow","Pink","White","Black","Purple","Brown","Gray","Turquoise"];
var aVN=["Màu xanh dương","Màu xanh lá cây","Màu đỏ","Màu da cam","Màu vàng","Màu hồng","Màu trắng","Màu đen","Màu tím","Màu nâu","Màu xám","Màu ngọc lam"];
var aCL=["#0000ff","#008000","#ff0000","#FFA500","#FFFF00","#FF00FF","#ffffff","#000000","#800080","#A52A2A","#808080","#40E0D0"];
var lang="VN";
var m_index=0;
var m_caudung=0;
var m_causai=0;
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
           SetText("","colorobj",aVN[i]);
}
else {
	PlaySound("ID_EN"+i);
	SetText("","colorobj",aEN[i]);
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
	if(m_caudung==0 && m_causai ==0)
	{
		GetVer();
	}			
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
		UpdateScore(m_caudung);
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
var Page1_Backrounnd = CreText('Page1_Backrounnd',0,0,640,480,'','#ffffff','','','','ID_IMAGE3.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','2','2','0','','0','0','0','0',0,0,'');
var Image_1 = CreText('Image_1',582,333,52,38,'','rgba(0,0,0,0)','','','','ID_IMAGE2.PNG',0,'','','','',0,'0.00','30','30',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
Image_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
var colorobj = CreText('colorobj',217,76,205,205,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',36,'Arial','Normal','center','middle',2,'0.00','0','0',8,'#c0c0c0','rgba(255,0,0,0.89)','0','0','#000000','0','0','4','0',1,1,'rgba(0,0,0,0)',0,1.50);
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
var cl0 = CreText('cl0',40,382,41,41,"0",'#0000ff','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','30','30',2,'#ffffff','#0000ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cl0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickColor();
  return;
}
 );
var cl1 = CreText('cl1',145,382,41,41,"1",'#009300','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','30','30',2,'#ffffff','#009300','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cl1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickColor();
  return;
}
 );
var cl2 = CreText('cl2',250,382,41,41,"2",'#ff0000','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','30','30',2,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cl2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickColor();
  return;
}
 );
var cl3 = CreText('cl3',355,382,41,41,"3",'#ff6820','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','30','30',2,'#ffffff','#ff6820','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cl3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickColor();
  return;
}
 );
var cl4 = CreText('cl4',460,382,41,41,"4",'#ffff00','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','30','30',2,'#ffffff','#ffff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cl4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickColor();
  return;
}
 );
var cl5 = CreText('cl5',560,382,41,41,"5",'#ff3eff','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','30','30',2,'#ffffff','#ff3eff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cl5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickColor();
  return;
}
 );
var cl6 = CreText('cl6',41,430,41,41,"6",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','30','30',2,'#282828','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cl6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickColor();
  return;
}
 );
var cl7 = CreText('cl7',146,430,41,41,"7",'#000000','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','30','30',2,'#ffffff','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cl7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickColor();
  return;
}
 );
var cl8 = CreText('cl8',250,430,41,41,"8",'#800080','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','30','30',2,'#ffffff','#800080','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cl8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickColor();
  return;
}
 );
var cl9 = CreText('cl9',355,430,41,41,"9",'#804040','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','30','30',2,'#ffffff','#804040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cl9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickColor();
  return;
}
 );
var cl10 = CreText('cl10',460,430,41,41,"10",'#797979','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','30','30',2,'#ffffff','#797979','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cl10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickColor();
  return;
}
 );
var cl11 = CreText('cl11',560,430,41,41,"11",'#00ffff','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','30','30',2,'#ffffff','#00ffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cl11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickColor();
  return;
}
 );
var lang_vn = CreText('lang_vn',538,14,35,35,'','rgba(0,0,0,0)','','','','ID_VN_ON.PNG',0,'','','','',0,'0.00','30','30',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
lang_vn.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeLang();
  return;
}
 );
var lang_en = CreText('lang_en',585,16,35,35,'','rgba(0,0,0,0)','','','','ID_EN_OFF.PNG',0,'','','','',0,'0.00','30','30',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
lang_en.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeLang();
  return;
}
 );
Page_1.add(Page1_Backrounnd,Image_1,colorobj,cl0,cl1,cl2,cl3,cl4,cl5,cl6,cl7,cl8,cl9,cl10,cl11,lang_vn,lang_en);
stage.add(Page_1);

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page2_Backrounnd = CreText('Page2_Backrounnd',0,0,640,480,'','#ffffff','','','','ID_IMAGE3.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','2','2','0','','0','0','0','0',0,0,'');
var lang_vn = CreText('lang_vn',528,11,35,35,'','rgba(0,0,0,0)','','','','ID_VN_ON.PNG',0,'','','','',0,'0.00','30','30',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
lang_vn.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeLang();
  return;
}
 );
var lang_en = CreText('lang_en',575,13,35,35,'','rgba(0,0,0,0)','','','','ID_EN_OFF.PNG',0,'','','','',0,'0.00','30','30',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
lang_en.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeLang();
  return;
}
 );
var mau_0 = CreText('mau_0',204,69,92,93,"0",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#000000','#ffffff','0','0','#c0c0c0','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
mau_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckColor();
  return;
}
 );
var mau_1 = CreText('mau_1',356,70,92,93,"1",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#000000','#ffffff','0','0','#c0c0c0','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
mau_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckColor();
  return;
}
 );
var mau_2 = CreText('mau_2',204,170,92,93,"2",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#000000','#ffffff','0','0','#c0c0c0','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
mau_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckColor();
  return;
}
 );
var mau_3 = CreText('mau_3',356,167,92,93,"3",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#000000','#ffffff','0','0','#c0c0c0','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
mau_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckColor();
  return;
}
 );
var chu = CreText('chu',198,274,253,39,"Màu da cam",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',26,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
chu.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateColor();
  return;
}
 );
var so_cau = CreText('so_cau',272,32,92,27,"0/10",'#804000','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','30','30',0,'rgba(0,0,0,0)','#804000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var obj_false = CreText('obj_false',294,393,133,64,"true",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_IMAGE_SAI.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var obj_true = CreText('obj_true',170,394,133,64,"true",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_IMAGE_DUNG.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var Drawtext_1 = CreText('Draw text_1',11,417,56,36,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE5.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
Drawtext_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
var tong_ket = CreText('tong_ket',-2,1,309,199,"",'#e6e6fa','#ffffff','#ff0000','#ff00ff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#63c600','#e6e6fa','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tong_ket.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  NewGame();
  return;
}
 );
var cau_dung = CreText('cau_dung',61,108,85,76,"6",'rgba(0,0,0,0)','#ffffff','#009300','#ffffff','',48,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_sai = CreText('cau_sai',197,107,85,76,"6",'rgba(0,0,0,0)','#ffffff','#b70000','#ffffff','',48,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var Drawtext_2 = CreText('Draw text_2',1,39,159,68,"",'#ffffff','#ffffff','#009300','#ffffff','ID_IMAGE_DUNG.PNG',36,'Arial','Bold','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var DrawText_1 = CreText('DrawText_1',132,39,159,68,"",'#ffffff','#ffffff','#ff0000','#ffffff','ID_IMAGE_SAI.PNG',36,'Arial','Bold','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',-1,1,307,26,"Kết quả",'#62c400','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#62c400','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:313,height:203});
Group_1.add(tong_ket);
Group_1.add(Text_1);
Group_1.add(Drawtext_2);
Group_1.add(DrawText_1);
Group_1.add(cau_sai);
Group_1.add(cau_dung);
Page_2.add(Page2_Backrounnd,lang_vn,lang_en,mau_0,mau_1,mau_2,mau_3,chu,so_cau,obj_false,obj_true,Drawtext_1,tong_ket,cau_dung,cau_sai,Drawtext_2,DrawText_1,Text_1,Group_1);
stage.add(Page_2);
InitLacVietScript();
};
