folder_Resource ='data/giao_thong';
var a_chuVN=["Máy bay","Xe cứu thương","Xe nôi","Xe đạp","Thuyền","Xe buýt","Ca nô","Xe hơi","Diều lượn","Máy bay trực thăng","Xe jíp","Máy bay phản lực","Xuồng máy","Xe đua","Tên lửa","Thuyền buồm","Xe trượt trẻ em","Xe buýt chở học sinh","Ván trượt","Giầy trượt tuyết","Tàu con thoi","Tàu ngầm","Xe tăng","Xe tải kéo","Máy kéo","Đèn giao thông","Xe tải","Đĩa bay","Xe đạp một bánh","Xe tải chở khách","Xe goòng","Xe cút kít", "Xe lăn"];
var a_chuEN=["Airplane","Ambulance","Baby carriage","Bicycle","Boat","Bus","Canoe","Car","Hang-gliding","Helicopter","Jeep","Jet","Motorboat","Racecar","Rocket","Sailboat","Scooter","Schoolbus","Skateboard","Snowshoes","Space shuttle","Submarine","Tank","Towtruck","Tractor","Traffic light","Truck","UFO","Unicycle","Van","Wagon","Wheelbarrow","Wheelchair"];
var a_SVN=[1];
var lang="VN";
var m_index=0;
function  ShowItem( name)
{
      if(name <0 || name >33)
		return;
	var m_text = "";
	if(lang=="VN"){
	m_text=a_chuVN[name];
	SetText("","text_chu",m_text);
	PlayWave("","","S_VN_"+name);
	}
	else {
	m_text=a_chuEN[name];
	SetText("","text_chu",m_text);
	PlayWave("","","S_EN"+name);
	}
	SetRsc("","Image_1","ID_"+a_chuEN[name]);
	InvalidateObj("","");
}
function  EndMove(){
	ShowItem(m_index);
	MoveObjectTo("","Image_1",-1,-1,100,5,8);
}
function  NextItem(){
	var l= GetWidth("","Image_1");
      var t= GetTop("","Image_1");
	m_index++;
	MoveObjectTo("","Image_1",-l,t,10,5,5,"EndMove()");
}
function  PreItem(){
	var l= GetLeft("","Image_1")+500;
      var t= GetTop("","Image_1");
	m_index--;
	MoveObjectTo("","Image_1",l,t,10,5,5,"EndMove()");
}


function  ClickNumber(){
	var name= GetName("");
      name= replaceStr(name,"_",'');
	m_index=name;
	var l= GetWidth("","Image_1");
      var t= GetTop("","Image_1");
	MoveObjectTo("","Image_1",-l,t,10,5,5,"EndMove()");
}

function  InitGame(){
	PlayWave("","","ID_START");
	SetCursor("","text_so","pointer");
	SetCursor("","text_chu","pointer");
	SetCursor("","lang_vn","pointer");
	SetCursor("","lang_en","pointer");
	SetCursor("","Image_1","pointer");
	for(var i=0;i<3;i++){
	SetCursor("","_"+i,"pointer");
	SetColor("","_"+i,-1,-1,-1,"ID_"+a_chuEN[i]);
	}
	SetMoveView("","Group_1",2);
	SetCursor("","Group_1","pointer");
	InvalidateObj("","");
}
/*---Page Test*/
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
    iNN = Random(33);
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
		SetColor("","mau_"+h,-1,-1,-1,"ID_"+a_chuEN[arrColor[h]]);

	m_index=Random(4);
	var m_text = "";
	if(lang=="VN"){
	m_text=a_chuVN[arrColor[m_index]];
	SetText("","text_chu",m_text);
	PlayWave("","","S_VN_"+ arrColor[m_index]);
	}
	else {
	m_text=a_chuEN[arrColor[m_index]];
	SetText("","text_chu",m_text);
	PlayWave("","","S_EN"+arrColor[m_index]);
	}
	SetShowObject("","Group_1",0);
	InvalidateObj("","");
	m_ban= false;
}
var m_caudung=0;
var m_causai=0;
function  NewGame(){
m_caudung=0;
m_causai=0;
CreateColor();
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
InitGame();
ShowItem(Random(32));
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
var Page1_Backrounnd = CreText('Page1_Backrounnd',0,0,640,480,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE5.PNG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page_1.add(Page1_Backrounnd);
var text_chu = CreText('text_chu',78,234,493,51,"Tàu Ngầm",'rgba(255, 255, 255, 0.39)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',26,'Arial','Bold','center','middle',3,'0.00','14','0',1,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
text_chu.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PlayWave("","","S_VN_"+m_index);
  return;
}
 );
Page_1.add(text_chu);
var Image_1 = CreText('Image_1',195,8,236,201,'','rgba(0, 0, 0, 0)','','','','ID_SUBMARINE.PNG',0,'','','','',0,'0.00','30','30',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, 'rgba(128, 128, 128, 255)');
Image_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PlayWave("","","S_VN_"+m_index);
  return;
}
 );
Page_1.add(Image_1);
var _0 = CreText('_0',10,300,50,50,"0",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',36,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(255, 255, 255, 255)',0,1.50);
_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_0);
var _1 = CreText('_1',66,300,50,50,"0",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',36,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(255, 255, 255, 255)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickNumber();
  return;
}
 );
Page_1.add(_1);
var Drawtext_1 = CreText('Draw text_1',567,226,64,63,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE3.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Drawtext_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextItem();
  return;
}
 );
Page_1.add(Drawtext_1);
var DrawText_1 = CreText('DrawText_1',14,227,64,63,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE4.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
DrawText_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PreItem();
  return;
}
 );
Page_1.add(DrawText_1);
var obj_true = CreText('obj_true',498,7,133,64,"true",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE9.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
obj_true.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_1.add(obj_true);
stage.add(Page_1);

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page2_Backrounnd = CreText('Page2_Backrounnd',0,0,640,480,'','rgba(255, 255, 255, 1.00)','','','','ID_IMAGE1.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(255, 255, 255, 0)','2','2','0','','0','0','0','0',0,0,'');
Page_2.add(Page2_Backrounnd);
var mau_0 = CreText('mau_0',242,91,145,135,"0",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(192, 192, 192, 255)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
mau_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckColor();
  return;
}
 );
Page_2.add(mau_0);
var mau_1 = CreText('mau_1',418,91,145,135,"1",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(192, 192, 192, 255)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
mau_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckColor();
  return;
}
 );
Page_2.add(mau_1);
var mau_2 = CreText('mau_2',239,261,145,135,"2",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(192, 192, 192, 255)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
mau_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckColor();
  return;
}
 );
Page_2.add(mau_2);
var mau_3 = CreText('mau_3',415,262,145,135,"3",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(192, 192, 192, 255)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
mau_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckColor();
  return;
}
 );
Page_2.add(mau_3);
var text_chu = CreText('text_chu',204,37,347,39,"Màu da cam",'rgba(0, 82, 164, 0.71)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',26,'Arial','Bold','center','middle',0,'0.00','30','30',2,'rgba(255, 255, 255, 255)','rgba(0, 82, 164, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
text_chu.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateColor();
  return;
}
 );
Page_2.add(text_chu);
var so_cau = CreText('so_cau',9,10,110,110,"0/10",'rgba(0, 64, 128, 0.59)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',36,'Arial','Bold','center','middle',2,'0.00','30','30',2,'rgba(255, 255, 255, 255)','rgba(0, 64, 128, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(so_cau);
var obj_false = CreText('obj_false',292,425,133,64,"true",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE8.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(obj_false);
var obj_true = CreText('obj_true',168,426,133,64,"true",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','ID_IMAGE9.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(obj_true);
var Drawtext_1 = CreText('Draw text_1',13,415,56,54,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE4.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(0, 0, 0, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Drawtext_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page_2.add(Drawtext_1);
var tong_ket = CreText('tong_ket',3,2,309,199,"TỔNG KẾT",'rgba(0, 128, 255, 0.59)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 0, 255, 1.00)','',20,'Arial','Bold','center','top',0,'0.00','0','0',2,'rgba(255, 255, 255, 255)','rgba(0, 128, 255, 0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tong_ket.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  NewGame();
  return;
}
 );
Page_2.add(tong_ket);
var cau_dung = CreText('cau_dung',172,36,86,84,"6",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 147, 0, 1.00)','rgba(255, 255, 255, 1.00)','',48,'Arial','Bold','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(255, 255, 255, 255)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(cau_dung);
var cau_sai = CreText('cau_sai',177,120,85,76,"6",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(255, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',48,'Arial','Bold','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(255, 255, 255, 255)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(cau_sai);
var Drawtext_2 = CreText('Draw text_2',23,33,159,68,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 147, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE9.PNG',36,'Arial','Bold','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Drawtext_2);
var DrawText_1 = CreText('DrawText_1',23,124,159,68,"",'rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','ID_IMAGE8.PNG',36,'Arial','Bold','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(DrawText_1);
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:313,height:203});
Group_1.add(cau_dung);
Group_1.add(cau_sai);
Page_2.add(Group_1);
stage.add(Page_2);
InitLacVietScript();
};
