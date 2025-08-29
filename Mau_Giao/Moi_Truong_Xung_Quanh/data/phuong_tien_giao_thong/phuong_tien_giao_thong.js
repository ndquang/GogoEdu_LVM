folder_Resource ='data/phuong_tien_giao_thong';
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
		Speak(m_text,"VN");
	}
	else {
	m_text=a_chuEN[name];
	SetText("","text_chu",m_text);
		Speak(m_text,"EN");
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
	InvalidateObj("","");
}
/*---Page Test*/
var m_ban= false;
var arrColor=["","","",""];
function  CreateColor()
{
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
		Speak(m_text,"VN");
	}
	else {
	m_text=a_chuEN[arrColor[m_index]];
	SetText("","text_chu",m_text);
		Speak(m_text,"EN");
	}
	SetShowObject("","Group_1",0);
	InvalidateObj("","");
	m_ban= false;
}

var m_caudung=0;
var m_causai=0;
function  NewGame()
{
GetVer();
m_caudung=0;
m_causai=0;
SetShowObject("","Group_1",0);
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
		UpdateScore(m_caudung);
		PlayWave("","","ID_TEST_RESULT");
		SetText("","cau_dung",m_caudung);
		SetText("","cau_sai",m_causai);
		SetShowObject("","Group_1",1);
		MoveObjectTo("","Group_1",200,150,50,2,7);
		Delay("NewGame()",5000);
		SetText("","so_cau", 0 +"/"+10 );
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
NewGame();
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
 height: 400 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page1_Backrounnd = CreText('Page1_Backrounnd',0,0,640,400,'','#ffffff','','','','ID_IMAGE16.PNG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','2','2','0','','0','0','0','0',0,0,'');
var text_chu = CreText('text_chu',40,331,569,53,"Tàu Ngầm",'#ff8000','#ffffff','#ffffe0','#ffffff','',26,'Arial','Bold','center','middle',0,'0.00','14','0',2,'#ffffff','#ff8000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
text_chu.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var tt = GetText("","");
 if(lang=="VN"){
Speak(tt ,"VN");
} else
{
Speak(tt ,"EN");
}
  return;
}
 );
var Drawtext_1 = CreText('Draw text_1',574,326,64,63,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE3.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
Drawtext_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextItem();
  return;
}
 );
var DrawText_1 = CreText('DrawText_1',14,326,64,63,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE4.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
DrawText_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PreItem();
  return;
}
 );
var obj_true = CreText('obj_true',512,41,133,64,"true",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_IMAGE9.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
obj_true.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
var Image_1 = CreText('Image_1',162,62,281,198,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE11.GIF',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
Image_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var tt = GetText("","text_chu");
 if(lang=="VN"){
Speak(tt ,"VN");
} else
{
Speak(tt ,"EN");
}
  return;
}
 );
var Text_1 = CreText('Text_1',563,2,75,34,"VN",'#ff0000','#ffffff','#ffff00','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 if(lang=="VN"){
SetText("","","EN");
lang = "EN";
Speak("English","EN");
} else
{
SetText("","","VN");
lang = "VN";
Speak("VietNamese","EN");
}
InvalidateObj("","");
  return;
}
 );
Page_1.add(Page1_Backrounnd,text_chu,Drawtext_1,DrawText_1,obj_true,Image_1,Text_1);
stage.add(Page_1);

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page2_Backrounnd = CreText('Page2_Backrounnd',0,0,640,400,'','#ffffff','','','','ID_IMAGE14.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','2','2','0','','0','0','0','0',0,0,'');
var mau_0 = CreText('mau_0',219,62,145,139,"0",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','#c0c0c0','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
mau_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckColor();
  return;
}
 );
var mau_1 = CreText('mau_1',411,62,145,139,"1",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','#c0c0c0','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
mau_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckColor();
  return;
}
 );
var mau_2 = CreText('mau_2',219,200,145,139,"2",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','#c0c0c0','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
mau_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckColor();
  return;
}
 );
var mau_3 = CreText('mau_3',411,199,145,139,"3",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','#c0c0c0','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
mau_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckColor();
  return;
}
 );
var text_chu = CreText('text_chu',217,21,325,39,"Nghe và chọn",'rgba(0,128,192,1.11)','#ffffff','#ffffff','#ffffff','',26,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(0,128,192,1.11)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
text_chu.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateColor();
  return;
}
 );
var so_cau = CreText('so_cau',46,53,117,42,"0/10",'#ffffff','#ffffff','#000000','#ffffff','',36,'Arial','Bold','center','middle',11,'0.00','10','0',2,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var obj_false = CreText('obj_false',25,272,133,64,"true",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_IMAGE8.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var obj_true = CreText('obj_true',29,211,133,64,"true",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_IMAGE9.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var back = CreText('back',12,347,56,54,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE4.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
back.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
var tong_ket = CreText('tong_ket',1,2,258,166,"",'rgba(255,255,224,1.11)','#ffffff','#ffffff','#ff00ff','',20,'Arial','Bold','center','top',0,'0.00','0','0',1,'#000000','rgba(255,255,224,1.11)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_dung = CreText('cau_dung',170,29,70,72,"6",'rgba(0,0,0,0)','#ffffff','#009300','#ffffff','',48,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_sai = CreText('cau_sai',170,102,65,64,"6",'rgba(0,0,0,0)','#ffffff','#ff0000','#ffffff','',48,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var i_true = CreText('i_true',25,39,121,53,"",'#ffffff','#ffffff','#009300','#ffffff','ID_IMAGE9.PNG',36,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var i_false = CreText('i_false',25,105,121,53,"",'#ffffff','#ffffff','#ff0000','#ffffff','ID_IMAGE8.PNG',36,'Arial','Bold','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var titlemsg = CreText('titlemsg',2,2,257,24," Σ Tông kết:",'#ffd700','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#ffffff','#ffd700','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:262,height:170});
Group_1.add(tong_ket,titlemsg,i_true,i_false,cau_sai,cau_dung);
Page_2.add(Page2_Backrounnd,mau_0,mau_1,mau_2,mau_3,text_chu,so_cau,obj_false,obj_true,back,Group_1);
stage.add(Page_2);
InitLacVietScript();
};
