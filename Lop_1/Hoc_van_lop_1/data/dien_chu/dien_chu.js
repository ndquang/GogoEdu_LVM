folder_Resource ='data/dien_chu';
var aX=["Xí nghiệp","Xóa bỏ","Quả xoài","Làng xóm","Xin mời","Xin phép","Xe tải","Xà beng","Xà phòng","Xã hội","Thôn xóm","Xe đạp","Xem phim","Màu xanh","Bánh xèo","Trạm xá","Xâu kim","Xây dựng","Xây nhà","Xe lu","Thợ xẻ","Thợ xây","Thị xã","Xếp hàng","Xi măng","Xi nhan","Thợ xây","Lì xì","Xem xiếc","Xin lỗi","Xấu hổ","Xe buýt","Xe ca","Đua xe","Xe ôtô","Xe lửa","Xe ôm","Xinh đẹp","Xinh tươi","Xinh xắn","Lò xo","Xuất phát","Xung phong","Xung quanh","Xuồng máy","Xuống dốc","Xuống hàng","Xương cá","Cối xay","Phố xá","Lốc Xoáy","Mùa xuân","Xôi vò","xôn xao"];
var aS=["Lò sưởi","Chim sẻ","Chữ số","Ngôi sao","Quyển sách","Ngủ say","Thổi sáo","Sáo sậu","Bờ suối","Cá sấu","Chó sói","Nhà sàn","Sơn ca","Lá sen","Ốc sên","Dòng sông","Con sông","Sóng biển","Bông súng","Sừng hươu","Hoa súng","Buổi sáng","Sườn đồi","Sáng sớm","Sao đêm","Cơn sốt","Sấm sét","Sút bóng","Sứt răng","Con sóc","Bác sĩ","Dậy sớm","Sạch sẽ","Sư tử","Sở thú","Củ sả","Sa Pa","Sân bóng","Soi gương","Sương muối","Ngôi sao","Chữ số","Lò sưởi","Quả sim","San hô"];
var aK=["Đàn kiến","cái kéo","kẻ vở","kỉ niệm","kẽ hở","kì cọ","kẻ ô","kiên nhẫn","cái kẻng","kiềng ba chân","dòng kênh","con kênh","viên kẹo","băng keo","đoàn kết","kết bạn","kênh rạch","cây kem","cái kèn","yếu kém","kéo co","kéo cờ","kéo cưa","kể chuyện","kệ sách","kế toán","kết quả","kỉ luật","kĩ sư","kiềm chế","kiểm điểm","kiểm soát","kiên cường","kiên cố","kiên trì","tìm kiếm","tiết kiệm","kiến thức","kiến trúc sư","kiện cáo","mắt kiếng","cây kim","kí hiệu","kính lúp","kí tự","kì diệu", "vở kịch"];
var aC=["công an","cái yếm","tưới cây","cử tạ","bó cỏ","lò cò","cô giáo","lá cờ","ca nô"," cá thu","chả cá","cụ già","cua bể","cái còi","cây cau","cầu trượt","con cừu","cái cân","sơn ca","biển cả","cào cào","củ gừng","củ riềng","cành cây","cắm cúi","bồ câu","ca hát","bãi cát","cột cờ","cơn sốt","chim cút","cần trục","gốc cây","công việc","ca nhạc","cá diết","cái lược","bánh cuốn","cuốn vở","cắm trại","căn hộ","căng buồm","cầm bút","sâm cầm"," sân cỏ","máy cày","đường cong","cong quẹo","cơm tấm","cơn mưa","cơn dông","coi phim","cua bể","cưa máy","cửa sổ","cưng chiều","cười mỉm","cưỡi ngựa","cưỡng ép","đám cưới","con cừu","cực khổ","cứng cáp","cứu giúp","cú mèo"];
var aNG=["Ngã tư","nằm ngủ","cá ngừ","ngõ nhỏ","tre ngà","ngủ trưa"," nhà ngói","ngà voi"," ngói mới","ngửi mùi","ngày hội","ngày lễ","ngôi sao","ngồi xuống","khen ngợi","ngựa gỗ","ngẩn ngơ","quả ngon","bánh ngọt","sáng ngời","ngày chủ nhật","ngớt mưa","người bạn tốt","ngón út","bát ngát","giấc ngủ","chim ngói","ngọn đuốc","ngà voi","ngây thơ","ngắn gọn","ngắm nhìn","ngặt nghèo","ngăn cấm","ngăn kéo","ngăn nắp","ngâm nước","ngõ cụt","ngoài sân","ngoại ngữ","ngoại ô","ngoặc đơn","ngon miệng","ngọc trai","ngu ngốc","người bệnh","ngược lại","ngôn ngữ","ngựa ô"];
var aNGH=["Nghỉ hè","nghiêng ngả","nghệ sĩ","nghé ọ","suy nghĩ","nghề xẻ gỗ","ý nghĩ","nghỉ lễ","đông nghịt","con nghêu","nghi vấn","nghĩa đen","nghĩa bóng","nghiêm cấm","nghiên cứu","nghiến răng","một nghìn","nghị lực","đùa nghịch","nghe lóm","nghèo khổ","nghẹt thở","nghê gớm","nghẹn lời","nghề nghiệp","nghênh tiếp","con nghiện"];
var aCH=["chó sói","chào mào","chả cá","bút chì","chở cá","chữ số","chó xù","chợ quê","chú ý"," chia quà","đi chợ","cà chua","nải chuối","chào cờ","suối chảy","châu chấu","bà cháu","chịu khó","buổi chiều","con chồn","số chín","chuồn chuồn","châu chấu","chân trời","cái chiêng","quả chuông","cành chanh","cánh chưng","chòm râu","chó đốm","chôm chôm","chim câu","lửa cháy","chồi non","chẻ lạt","che mát","chữ viết","chuột nhắt","đi chợ","chót vót","chuột đồng","tiêm chủng","chênh chếch","chim chích","chúc mừng","cha mẹ","cái chai","chanh chua","chan chứa","chảy máu","chậm chạp","chất béo","chất độc","chật chội","chật hẹp","che bóng","chè sen","chen lấn","chèo thuyền","chê bai","Chiêm bao","chiếc bóng","chiến đấu","chu kỳ","chủ quan"];
var aTR=["trái tim","con trâu","tre ngà","ngủ trưa","tre nứa","trỉa đỗ","trái ổi","bé trai","trưa hè","trò chơi","trĩu quả","trái lựu","mưu trí","con trăn","trên dưới","chân trời","măng tre","vầng trăng","trung thu","cái trống","mây trắng","rừng tràm","quả trám","trái bòng","tăm tre","trường học","trẻ em","trong nhà","trùm khăn","trốn tìm","trái nhót","tránh mưa","trái mít","đẻ trứng","vòng tròn","trắng muốt","trèo cây","cầu trượt","cần trục","tròn vo","trả lời","uống trà","bức tranh","tràn trề","trang sức","tranh luận","trao đổi","trách nhiệm","trại hè","nông trại","trạm xá","một trăm","trăng non","trồng cây","trầu cau","trầy trụa","triều cường","trình bày","trích dẫn","trơn tru","trung bình","trùng lặp","truy hô","truyền hình","truyện cười","trú ẩn","trụ cột","tre trúc","trúng thưởng","trước sau","dấu trừ","trừng phạt","trực lớp","trực thăng","trứng gà"];

var bShowTip= false;
function  KhoiTao(){
	SetMoveView("","obj_s",1);
	SetMoveView("","obj_x",1);
	SetShowObject("","m_diem",0);
	SetShowObject("","toolTip",0);
	SetShowObject("","lam_lai",0);
	SetShowObject("","cham_diem",1);
	SetShowObject("","m_diem",0);
	PlaySound("ID_SOUND1");
	bShowTip = false;
}
/*-----------tạo mảng không trùng nhau từ một số---------*/
var arTam=[0,0,0,0,0];
function  RandomArray( m_size){
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
GetVer();
}
/*---Mảng để lưu kết quả tạo ra*------------*/
var arALL=[0,0,0,0,0];

/*---------------------S vs X-------------------*/
function  NewPage1()
{
 KhoiTao();
    RandomArray(54);
 	for(var i=0;i<5;i++)
	   arALL[i]= toLowerCase(aX[arTam[i]]);	
    RandomArray(45);
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
	  if(indexOf(arALL[s],"s",0)>=0)
		ss= replaceStr(arALL[s],"s","...");
	  else ss= replaceStr(arALL[s],"x","...");
	   SetText("","obj_"+s,ss);
	   SetFontColor("","obj_"+s,"#0000FF");
	}
	InvalidateObj("","");
}
/*---------------------C vs K-------------------*/
function  NewPage2()
{
    KhoiTao();
    RandomArray(47);
 	for(var i=0;i<5;i++)
	   arALL[i]= toLowerCase(aK[arTam[i]]);	
    RandomArray(65);
    for(var j=5;j<10;j++)
	   arALL[j]= toLowerCase(aC[arTam[j-5]]);	
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
	  if(indexOf(arALL[s],"k",0)>=0)
		ss= replaceStr(arALL[s],"k","...");
	  else ss= replaceStr(arALL[s],"c","...");
	   SetText("","obj_"+s,ss);
	   SetFontColor("","obj_"+s,"#0000FF");
	}
	InvalidateObj("","");
}
/*---------------------NG vs NGH-------------------*/
function  NewPage3()
{
     KhoiTao();
    RandomArray(49);
 	for(var i=0;i<5;i++)
	   arALL[i]= toLowerCase(aNG[arTam[i]]);	
    RandomArray(27);
    for(var j=5;j<10;j++)
	   arALL[j]= toLowerCase(aNGH[arTam[j-5]]);	
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
	  if(indexOf(arALL[s],"ngh",0)>=0)
		ss= replaceStr(arALL[s],"ngh","...");
	  else ss= replaceStr(arALL[s],"ng","...");
	   SetText("","obj_"+s,ss);
	   SetFontColor("","obj_"+s,"#0000FF");
	}
	InvalidateObj("","");
}
/*---------------------CH vs TR-------------------*/
function  NewPage4()
{
  	KhoiTao();
    RandomArray(65);
 	for(var i=0;i<5;i++)
	   arALL[i]= toLowerCase(aCH[arTam[i]]);	
    RandomArray(75);
    for(var j=5;j<10;j++)
	   arALL[j]= toLowerCase(aTR[arTam[j-5]]);	
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
	  if(indexOf(arALL[s],"ch",0)>=0)
		ss= replaceStr(arALL[s],"ch","...");
	  else ss= replaceStr(arALL[s],"tr","...");
	   SetText("","obj_"+s,ss);
	   SetFontColor("","obj_"+s,"#0000FF");
	}
	InvalidateObj("","");
}
/*---Sự kiện khi kéo và thả vào ô*------------*/
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
				var ss= replaceStr(wo,"...",ch);	
				Speak(ss,"VN");		
				 SetText("","obj_"+k,ss);
			}
		k++;
	}
	MoveObjectTo("","",-1,-1);
	if(b_exit){
		PlayWave("","","ID_SOUND_FALSE");
		
	}
	InvalidateObj("","");
}

function  ShowTip()
{
	if(!bShowTip)
		return;
	var ii= replaceStr(GetName(""),"obj_",'');
      if(arALL[ii] != GetText("",""))
	{
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
function  ChamDiem()
{
var m_diem=0;
bShowTip = true;
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
SetShowObject("","lam_lai",1);
SetShowObject("","",0);
UpdateScore(diem);
InvalidateObj("","");
if(diem==10){
	 PlayWave("","","ID_SOUND_TRUE");
	 Delay("InitGame()",3000);
	}
else{
      PlayWave("","","ID_SOUND_FALSE");
	//Delay("SetShowObject('','m_diem',0)",2000);
	}
  return;
}
function Home_Page()
{
PlaySound("ID_SOUND_HOME");
  return;
}

function Page_1()
{
NewPage1();
  return;
}

function Page_2()
{
NewPage2();
  return;
}

function Page_3()
{
NewPage3();
  return;
}

function Page_4()
{
NewPage4();
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

 var Home_Page = new Kinetic.Layer({name: 'Home_Page',callback:'Home_Page()'});
var Home_Page_Backrounnd = CreText('Home_Page_Backrounnd',0,0,640,480,'','#ffff00','','','','ID_IMAGE4.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffff00','2','2','0','','0','0','0','0',0,0,'');
var bai1 = CreText('bai1',132,143,413,48,"1. Điền chữ S hay chữ X",'#80ff00','#ffffff','#000000','#000000','',26,'Arial','Normal','left','middle',3,'0.00','9','0',1,'#000000','#b1ff64','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bai1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GoToPage("Page 1");
  return;
}
 );
var bai2 = CreText('bai2',132,202,413,48,"2. Điền chữ C hay chữ K",'#80ff00','#ffffff','#000000','#000000','',26,'Arial','Normal','left','middle',3,'0.00','10','0',1,'#000000','#b1ff64','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bai2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GoToPage("Page 2");
  return;
}
 );
var bai3 = CreText('bai3',132,261,413,48,"3. Điền chữ NG hay chữ NGH",'#80ff00','#ffffff','#000000','#000000','',26,'Arial','Normal','left','middle',3,'0.00','10','0',1,'#000000','#b1ff64','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bai3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GoToPage("Page 3");
  return;
}
 );
var title = CreText('title',170,83,307,44,"ĐIỀN CHỮ",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',36,'Arial','Bold','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','rgba(0,128,255,0.44)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai4 = CreText('bai4',132,322,413,48,"4. Điền chữ CH hay chữ TR",'#80ff00','#ffffff','#000000','#000000','',26,'Arial','Normal','left','middle',3,'0.00','10','0',1,'#000000','#b1ff64','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bai4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GoToPage("Page 4");
  return;
}
 );
Home_Page.add(Home_Page_Backrounnd,bai1,bai2,bai3,title,bai4);
stage.add(Home_Page);

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page1_Backrounnd = CreText('Page1_Backrounnd',0,0,640,480,'','#ffff00','','','','ID_IMAGE4.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffff00','2','2','0','','0','0','0','0',0,0,'');
var help = CreText('help',93,416,508,36,"Hướng dẫn: Kéo thả chữ 'S' hoặc chữ 'X' vào dấu '...' sao cho đúng.",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var title = CreText('title',15,4,313,38,"1. Điền chữ S hay chữ X:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var obj_0 = CreText('obj_0',87,102,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var obj_1 = CreText('obj_1',87,158,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var obj_2 = CreText('obj_2',87,214,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var obj_3 = CreText('obj_3',87,270,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var obj_4 = CreText('obj_4',87,327,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var obj_5 = CreText('obj_5',358,102,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var obj_6 = CreText('obj_6',358,158,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var obj_7 = CreText('obj_7',358,214,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var obj_8 = CreText('obj_8',358,270,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var obj_9 = CreText('obj_9',358,327,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cham_diem = CreText('cham_diem',496,12,129,40,"CHẤM ĐIỂM",'#c9ff93','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',3,'0.00','3','0',1,'#7f7f7f','#80ff00','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cham_diem.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChamDiem();}
 );
var obj_s = CreText('obj_s',266,46,39,34,"s",'#ffffff','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#7f7f7f','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj_s.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DropDown();
  return;
}
 );
var obj_x = CreText('obj_x',331,46,39,34,"x",'#ffffff','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj_x.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DropDown();
  return;
}
 );
var toolTip = CreText('toolTip',-2,41,185,40,"ĐIỂM",'#ffffe0','#ffffff','#009300','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#009300','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var lam_lai = CreText('lam_lai',496,12,129,40,"LÀM LẠI",'#c9ff93','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',3,'0.00','3','0',1,'#7f7f7f','#80ff00','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NewPage1();  return;
}
 );
var Home = CreText('Home',17,417,57,58,'','rgba(0,0,0,0)','','','','ID_IMAGE1.PNG',0,'','','','',0,'0.00','30','30',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
Home.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GoToPage("Home_Page");
  return;
}
 );
var m_diem = CreText('m_diem',185,197,275,80,"10 điểm",'#ffc0cb','#ccffcc','#ff0000','#ffffff','',36,'Comic Sans MS','','center','middle',12,'0.00','2','2',1,'#ff0000','#ffc0cb','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page1_Backrounnd,help,title,obj_0,obj_1,obj_2,obj_3,obj_4,obj_5,obj_6,obj_7,obj_8,obj_9,cham_diem,obj_s,obj_x,toolTip,lam_lai,Home,m_diem);
stage.add(Page_1);

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page2_Backrounnd = CreText('Page2_Backrounnd',0,0,640,480,'','#ffff00','','','','ID_IMAGE4.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffff00','2','2','0','','0','0','0','0',0,0,'');
var help = CreText('help',98,406,518,43,"Hướng dẫn: Kéo thả chữ 'C' hoặc chữ 'K' vào dấu '...' sao cho đúng.",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var title = CreText('title',14,7,313,38,"2. Điền chữ C hay chữ K:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var obj_0 = CreText('obj_0',86,105,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var obj_1 = CreText('obj_1',86,161,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var obj_2 = CreText('obj_2',86,217,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var obj_3 = CreText('obj_3',86,273,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var obj_4 = CreText('obj_4',86,330,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var obj_5 = CreText('obj_5',357,105,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var obj_6 = CreText('obj_6',357,161,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var obj_7 = CreText('obj_7',357,217,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var obj_8 = CreText('obj_8',357,273,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var obj_9 = CreText('obj_9',357,330,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cham_diem = CreText('cham_diem',485,15,141,40,"CHẤM ĐIỂM",'#80ff00','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffff00','#aeff5e','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cham_diem.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChamDiem();}
 );
var obj_s = CreText('obj_s',265,49,39,34,"c",'#ffffff','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj_s.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DropDown();
  return;
}
 );
var obj_x = CreText('obj_x',330,49,39,34,"k",'#ffffff','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj_x.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DropDown();
  return;
}
 );
var lam_lai = CreText('lam_lai',485,15,141,40,"LÀM LẠI",'#80ff00','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffff00','#aeff5e','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NewPage2();  return;
}
 );
var Home = CreText('Home',12,412,57,58,'','rgba(0,0,0,0)','','','','ID_IMAGE1.PNG',0,'','','','',0,'0.00','30','30',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
Home.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GoToPage("Home_Page");
  return;
}
 );
var m_diem = CreText('m_diem',192,200,275,80,"10 điểm",'#ffc0cb','#ccffcc','#ff0000','#ffffff','',36,'Comic Sans MS','','center','middle',12,'0.00','2','2',1,'#ff0000','#ffc0cb','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var toolTip = CreText('toolTip',1,51,185,40,"ĐIỂM",'#ffffe0','#ffffff','#009300','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#009300','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
Page_2.add(Page2_Backrounnd,help,title,obj_0,obj_1,obj_2,obj_3,obj_4,obj_5,obj_6,obj_7,obj_8,obj_9,cham_diem,obj_s,obj_x,lam_lai,Home,m_diem,toolTip);
stage.add(Page_2);

 var Page_3 = new Kinetic.Layer({name: 'Page_3',callback:'Page_3()'});
var Page3_Backrounnd = CreText('Page3_Backrounnd',0,0,640,480,'','#ffff00','','','','ID_IMAGE4.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffff00','2','2','0','','0','0','0','0',0,0,'');
var title = CreText('title',11,2,313,38,"3. Điền chữ NG hay chữ NGH:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var obj_0 = CreText('obj_0',85,104,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var obj_1 = CreText('obj_1',85,160,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var obj_2 = CreText('obj_2',85,216,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var obj_3 = CreText('obj_3',85,272,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var obj_4 = CreText('obj_4',85,329,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var obj_5 = CreText('obj_5',356,104,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var obj_6 = CreText('obj_6',356,160,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var obj_7 = CreText('obj_7',356,216,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var obj_8 = CreText('obj_8',356,272,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var obj_9 = CreText('obj_9',356,329,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cham_diem = CreText('cham_diem',481,11,141,44,"CHẤM ĐIỂM",'#80ff00','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffff00','#b8ff71','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cham_diem.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChamDiem();}
 );
var obj_s = CreText('obj_s',264,48,39,34,"ng",'#ffffff','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj_s.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DropDown();
  return;
}
 );
var obj_x = CreText('obj_x',329,48,51,34,"ngh",'#ffffff','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj_x.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DropDown();
  return;
}
 );
var lam_lai = CreText('lam_lai',481,11,141,44,"LÀM LẠI",'#80ff00','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffff00','#b8ff71','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NewPage3();  return;
}
 );
var Home = CreText('Home',24,408,57,58,'','rgba(0,0,0,0)','','','','ID_IMAGE1.PNG',0,'','','','',0,'0.00','30','30',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
Home.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GoToPage("Home_Page");
  return;
}
 );
var m_diem = CreText('m_diem',189,199,275,80,"10 điểm",'#ffc0cb','#ccffcc','#ff0000','#ffffff','',36,'Comic Sans MS','','center','middle',12,'0.00','2','2',1,'#ff0000','#ffc0cb','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var toolTip = CreText('toolTip',3,47,185,40,"ĐIỂM",'#ffffe0','#ffffff','#009300','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#009300','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
Page_3.add(Page3_Backrounnd,title,obj_0,obj_1,obj_2,obj_3,obj_4,obj_5,obj_6,obj_7,obj_8,obj_9,cham_diem,obj_s,obj_x,lam_lai,Home,m_diem,toolTip);
stage.add(Page_3);

 var Page_4 = new Kinetic.Layer({name: 'Page_4',callback:'Page_4()'});
var Page4_Backrounnd = CreText('Page4_Backrounnd',0,0,640,480,'','#ffff00','','','','ID_IMAGE4.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffff00','2','2','0','','0','0','0','0',0,0,'');
var title = CreText('title',14,5,313,38,"4. Điền chữ CH hay chữ TR:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var obj_0 = CreText('obj_0',88,107,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var obj_1 = CreText('obj_1',88,163,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var obj_2 = CreText('obj_2',88,219,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var obj_3 = CreText('obj_3',88,275,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var obj_4 = CreText('obj_4',88,332,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var obj_5 = CreText('obj_5',359,107,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var obj_6 = CreText('obj_6',359,163,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var obj_7 = CreText('obj_7',359,219,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var obj_8 = CreText('obj_8',359,275,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var obj_9 = CreText('obj_9',359,332,186,39,"",'#f5f5f5','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#f5f5f5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cham_diem = CreText('cham_diem',481,17,141,44,"CHẤM ĐIỂM",'#80ff00','#ffffff','#000000','#000000','',20,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffff00','#adff5b','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cham_diem.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChamDiem();}
 );
var obj_s = CreText('obj_s',267,51,39,34,"ch",'#ffffff','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj_s.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DropDown();
  return;
}
 );
var obj_x = CreText('obj_x',332,51,51,34,"tr",'#ffffff','#ffffff','#0000ff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj_x.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DropDown();
  return;
}
 );
var lam_lai = CreText('lam_lai',481,17,141,44,"LÀM LẠI",'#80ff00','#ffffff','#000000','#000000','',20,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffff00','#adff5b','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NewPage4();  return;
}
 );
var Home = CreText('Home',24,406,57,58,'','rgba(0,0,0,0)','','','','ID_IMAGE1.PNG',0,'','','','',0,'0.00','30','30',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
Home.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GoToPage("Home_Page");
  return;
}
 );
var m_diem = CreText('m_diem',180,202,275,80,"10 điểm",'#ffc0cb','#ccffcc','#ff0000','#ffffff','',36,'Comic Sans MS','','center','middle',12,'0.00','2','2',1,'#ff0000','#ffc0cb','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var toolTip = CreText('toolTip',4,47,185,40,"ĐIỂM",'#ffffe0','#ffffff','#009300','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#009300','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
Page_4.add(Page4_Backrounnd,title,obj_0,obj_1,obj_2,obj_3,obj_4,obj_5,obj_6,obj_7,obj_8,obj_9,cham_diem,obj_s,obj_x,lam_lai,Home,m_diem,toolTip);
stage.add(Page_4);
InitLacVietScript();
};
