folder_Resource ='/data/co_giao_lop_em';
var m_color="";
var obj_down="";
var obj_up="";
var _score = 0;
var _reply = 0;
var array_a=["✔","","","","","","✔"];
//
var array_input=["Vũ Duệ vì nhà nghèo nên không được đi học. Gần nhà có một thầy đồ mở lớp dạy học. Sáng nào, Vũ Duệ cũng cõng em đứng ngoài hiên, chăm chú nghe thầy giảng bài."];
// 
var  array_b=["a_0","a_a","b_1","b_b","c_2","c_c","d_3","d_d"];
var akq=[0,0,0,0];

var akq3=0;
var kq3=0;
function  ClickCheck()
{
	if(GetText("","") != "✔")
	{
		SetText("","","✔");
	}
	else
	{
		SetText("","","");
	}
	PlaySound("MOVE_OK");
	InvalidateObj("","");

}
function FillColor()
{
	var cl = GetBorderWidth("","");
	if(cl==0.0001)
		SetBorder("","","#000000",1);
	else SetBorder("","","#000000",0);
	InvalidateObj("","");
	PlaySound("MOVE_OK");
}
function  InitTracNghiem()
{

	// bai 3
	for(var i=0;i<8;i++)
	{
		var cl = SetBorder("","dong_tu_"+i,"#000000",0);
	}

	// Bài 2
	for(i=0;i<4;i++)
	{
	akq[i]=0;
	}
	SetColorEx("","obj_paint",-1);
	// bai ve keo tha
	for(i=0;i<4;i++)
	akq[i]=0;
	// Bai 1
	for(i=0;i<7;i++)
	{
		SetText("","check_"+i,"");
		SetFontColor("","check_"+i,"#000000");
		SetFontColor("","abc"+i,"#000000");
	}
	for(i=0;i<13;i++)
	{
	AllowEditText("","input_"+i,1);
	SetFontColor("","input_"+i,"#000000");
	SetText("","input_"+i,"");
	}
	SetText("","msg","");
	 _reply =0;
	_score =GetVer();
	SetText("","diem","Chấm Điểm");
	PlaySound("SND_CREATE");
}



function StartObj()
{
	var i=0;
	var b_e= false;
	while(i<8 && b_e== false)
	{
		if(PosInObj(array_b[i]))
		{
			b_e= true;
			 obj_down=array_b[i];	
		}
		i=i+1;
	}
}

function EndObj()
{
	var i=0;
	var b_e= false;
	while(i<8 && b_e== false)
	{
		if(PosInObj(array_b[i]))
		{
			b_e= true;
			obj_up=array_b[i];
		}
		i++;
	}
	if(b_e== true && obj_down !=obj_up)
	{
		var _d = leftStr(obj_down,1);
		var _u = leftStr(obj_up,1);
		var _index = StringtoNumber(obj_down+obj_up);
		if(_d==_u && akq[_index ]==0)
			{
			SaveObject("","obj_paint");
			akq[_index]=1;
			PlaySound("MOVE_OK");
			return;
			}
	}
	PlaySound("MOVE_ERROR");

}
function ChamDiem()
{
	var  _diem =0;
		
	// bài 2
	for(var i=0;i<4;i++)
	{
		if(akq[i]==1)
		{
		 _diem =_diem +0.5;
		}
	}
	for( i=0;i<8;i++)
	{
		var cl = GetBorderWidth("","dong_tu_"+i);
		if(cl>=1)
			_diem=_diem+0.5;
	}

	//bài 1
	var _dunghet = true;
	var chuachon = false;
	for(i=0;i<7;i++)
	{
		var isCheck = GetText("","check_"+i);
		if(isCheck=="✔")
			chuachon = true;
		if(array_a[i]==isCheck)
		{
 		SetFontColor("","check_"+i,"#3b8b26");
		    _diem =_diem +0.5;
		}
		else 
		{
		   SetFontColor("","check_"+i,"#FF0000");
		    _dunghet = false;
		}
		if(array_a[i]=="✔" )
			SetFontColor("","abc"+i,"#3b8b26");
	}
	if(chuachon == false)
		{
		 SetText("","msg","⚠ Bạn chưa hoàn thành bài tâp");
		return;
		}
	// bai nhap text
	for(i=0;i<1;i++)
	{
	var txt = GetText("","input_"+i);
	if(txt == array_input[i])
	{
		  _diem =_diem +0.5;
		SetFontColor("","input_"+i,"#3b8b26");
	}
	else 	{
		SetFontColor("","input_"+i,"#FF0000");
		SetText("","input_"+i,txt +" => " + array_input[i]);		
		}
	}
	
	if(_diem>_score)
	{
	_score = _diem;
	SetText("","msg","✅  Điểm của bạn: "+ _score);
	UpdateScore(_score);
	PlaySound("SND_TRUE");

	}
	else
	{
		PlaySound("SND_FALSE");
		SetText("","msg","❌ Em cần xem lại các bài sai");
	}
	 _reply =1;
	SetText("","diem","Làm lại");

	
}
function Page_1()
{
SetPaint("","obj_paint",1);
PaintType("","obj_paint",5);
PaintWidth("","obj_paint",3);
PaintColor("","obj_paint","#ff0000");
InitTracNghiem();
InvalidateObj("","");
SetTimerPage(500);
  return;
}
function Page_1_OnTimer()
{
InvalidateObj("","");
SetCursor("","obj_paint","ID_PEN");
KillTimerPage();
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
 height: 900 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,640,900,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var Text_13 = CreText('Text_13',57,291,525,51,"Đánh dấu ✔ vào ô trống trước câu thể hiện sự ngạc nhiên của em khi lần đầu tiên được nghe một bạn hát rất hay.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_11 = CreText('Text_11',120,3,388,37,"CÔ GIÁO LỚP EM",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_12 = CreText('Text_12',29,298,21,21,"2.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_28 = CreText('Text_28',29,40,21,21,"1.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_29 = CreText('Text_29',62,36,519,28,"Nối từ ngữ ở cột A với từ ngữ ở cột B để tạo câu nói về cô giáo trong bài đọc.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var a_0 = CreText('a_0',83,110,182,31,"Cô mỉm cười thật tươi",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c_2 = CreText('c_2',83,196,182,31,"Lời cô giảng",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',1,833,638,68,"Bạn chưa hoàn thành câu 4",'#c0ffff','#ffffff','#ff0000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#c0ffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var diem = CreText('diem',239,809,155,40,"Chấm Điểm",'#afeeee','#ffffff','#ff0000','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','3','0',1,'#000000','#c0ffff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
diem.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if( _reply==0)
{
ChamDiem();
}
else
{
InitTracNghiem();
}
 InvalidateObj("","");
}
 );
var Image_1 = CreText('Image_1',521,120,0,0,'','rgba(0,0,0,0)','','','','',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var Text_3 = CreText('Text_3',29,683,21,21,"5.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var abc_0 = CreText('abc_0',97,343,287,28,"Ôi, cậu hát hay quá!",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var abc_1 = CreText('abc_1',97,377,287,28,"Cậu hát đi!",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var abc_2 = CreText('abc_2',313,342,287,28,"Lần nào cậu hát cũng hay",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_0 = CreText('check_0',67,343,25,23,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var check_1 = CreText('check_1',67,377,25,23,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var check_2 = CreText('check_2',283,342,25,23,"",'#ffffff','#ffffff','#ff0000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var Text_5 = CreText('Text_5',573,5,59,54,"Cô giáo lớp em\r\n\r\nSáng nào em đến lớp\r\nCũng thấy cô đến rồi\r\nĐáp lời “Chào cô ạ!|\r\nCô mỉm cười thật tươi.\r\n\r\nCô dạy em tập viết\r\nGió đưa thoảng hương nhài\r\nNắng ghé vào cửa lớp\r\nXem chúng em học bài.\r\n\r\nNhững lời cô giáo giảng\r\nẤm trang vở thơm tho\r\nYêu thương em ngắm mãi\r\nNhững điểm mười cô cho.",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_IMAGE1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var text = GetText("","");
Speak(text,"VN");
  return;
}
 );
var b_1 = CreText('b_1',83,153,183,31,"Cô đến lớp",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var b_b = CreText('b_b',302,109,262,31,"rất sớm",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c_c = CreText('c_c',302,150,262,31,"thật ấm áp",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var d_d = CreText('d_d',301,192,262,31,"tập viết",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Image_2 = CreText('Image_2',490,624,0,0,'','rgba(0,0,0,0)','','','','',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var Text_4 = CreText('Text_4',58,679,519,28,"Viết 2 – 3 câu về nhân vật Vũ Duệ.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var input_0 = CreText('input_0',67,710,535,86,"Cậu giỏi quá",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',1,'#c0c0c0','rgba(230,230,250,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',114,61,36,36,"A",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Bold','center','middle',2,'0.00','0','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_6 = CreText('Text_6',382,61,36,36,"B",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Bold','center','middle',2,'0.00','0','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var d_3 = CreText('d_3',85,240,182,31,"Cô dạy em",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var a_a = CreText('a_a',300,239,262,31,"để đáp lại lời chào của học sinh",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var obj_paint = CreText('obj_paint',59,105,547,177,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'#7f7f7f',0,1.50);
obj_paint.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
EndObj();
SetTimerPage(100);
  return;
}
 );
obj_paint.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
  StartObj();
  return;
}
 );
var abc_3 = CreText('abc_3',312,377,330,28,"Ôi, chào cậu, lâu lắm mới thấy cậu đấy!",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_3 = CreText('check_3',282,377,25,23,"",'#ffffff','#ffffff','#ff0000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var Text_1 = CreText('Text_1',55,421,519,28,"Gạch chân các từ ngữ chỉ hoạt động trong 2 khổ thơ sau:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_7 = CreText('Text_7',29,425,21,21,"3.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_8 = CreText('Text_8',82,457,220,86,"Sáng nào em đến lớp\r\nCũng thấy cô đến rồi.\r\nĐáp lời “Chào cô ạ!”\r\nCô mỉm cười thật tươi",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_9 = CreText('Text_9',337,457,220,86,"Cô dạy em tập viết\r\nGió đưa thoảng hương nhài\r\nNắng ghé vào cửa lớp\r\nXem chúng em học bài.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dong_tu_0 = CreText('dong_tu_0',185,453,61,20,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','1',2,'#0080ff','rgba(255,255,255,0.04)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
dong_tu_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
FillColor();
  return;
}
 );
var dong_tu_3 = CreText('dong_tu_3',81,492,56,20,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','1',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
dong_tu_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
FillColor();
  return;
}
 );
var dong_tu_4 = CreText('dong_tu_4',111,512,70,20,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','1',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
dong_tu_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
FillColor();
  return;
}
 );
var dong_tu_1 = CreText('dong_tu_1',363,455,29,20,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','1',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
dong_tu_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
FillColor();
  return;
}
 );
var dong_tu_2 = CreText('dong_tu_2',423,454,57,20,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','1',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
dong_tu_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
FillColor();
  return;
}
 );
var dong_tu_5 = CreText('dong_tu_5',384,494,29,20,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','1',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
dong_tu_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
FillColor();
  return;
}
 );
var dong_tu_6 = CreText('dong_tu_6',339,511,37,20,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','1',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
dong_tu_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
FillColor();
  return;
}
 );
var dong_tu_7 = CreText('dong_tu_7',453,512,62,20,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','1',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
dong_tu_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
FillColor();
  return;
}
 );
var Text_10 = CreText('Text_10',65,543,525,51,"Vì sao cậu bé Vũ Duệ trong truyện Cậu bé ham học được thầy khen? (đánh dấu ✔ vào ô trống trước đáp án đúng)",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_14 = CreText('Text_14',29,550,21,21,"4.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var abc_4 = CreText('abc_4',123,592,287,28,"Vì Vũ Duệ biết trông em giúp mẹ.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var abc_5 = CreText('abc_5',123,620,332,26,"Vì Vũ Duệ chăm chú nghe thầy giảng bài.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_4 = CreText('check_4',90,599,23,22,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var check_5 = CreText('check_5',90,624,23,22,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var check_6 = CreText('check_6',90,649,23,22,"",'#ffffff','#ffffff','#ff0000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var abc_6 = CreText('abc_6',124,648,332,28,"Vì Vũ Duệ trả lời đúng câu hỏi khó của thầy.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_15 = CreText('Text_15',560,597,59,54,"Cậu bé ham học\r\nVũ Duệ đỗ Trạng nguyên ở triều đại nhà Lê. Ông là người nổi tiếng thông minh, có khí phách, được vua Lê tin dùng, các quan trong triều ai cũng kính nể.\r\nThuở nhỏ, vì nhà nghèo, Vũ Duệ không được đi học, phải ở nhà trông em, lo cơm nước cho bố mẹ đi làm ngoài đồng. Ngày nào cũng vậy, mỗi buổi sáng, khi thầy đồ trong làng bắt đầu dạy học, Vũ Duệ lại cõng em đứng ở ngoài hiên, chăm chú nghe thầy giảng bài.\r\nThầy đồ thấy Vũ Duệ ham học, trong lòng quý mến, muốn thử tài cậu bé. Thầy đặt một câu hỏi “hóc búa” cho cả lớp, không ai trả lời được. Thầy nhìn ra ngoài cửa lớp, bắt gặp ánh mắt sáng ngời của cậu bé đang nhìn mình, ý chừng muốn trả lời câu hỏi thay cho các bạn trong lớp. Thầy đồ bèn hỏi:\r\n- Liệu con có trả lời được câu hỏi của ta không?\r\nCậu bé thưa:\r\n- Dạ, thưa thấy con xin trả lời ạ!\r\nĐược thầy cho phép, Vũ Duệ trả lời câu hỏi trôi chảy, mạch lạc, đầu ra đấy. Thầy đồ gật đầu tán thưởng. Cả lớp thán phục. Thầy bước ra cửa lớp, xoa đầu Vũ Duệ, khen ngợi.\r\nNgay sau buổi học đó, thầy đồ đến tận nhà cậu bé, khuyên cha mẹ cậu cho cậu đi học. Thế là Vũ Duệ được đi học, chính thức bên thầy, bên bạn. Chỉ vài tháng sau, Vũ Duệ đã là trò giỏi nhất lớp.",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_IMAGE1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var text = GetText("","");
Speak(text,"VN");
  return;
}
 );
Page_1.add(Page_1_Backrounnd,Text_13,Text_11,Text_12,Text_28,Text_29,a_0,c_2,msg,diem,Image_1,Text_3,abc_0,abc_1,abc_2,check_0,check_1,check_2,Text_5,b_1,b_b,c_c,d_d,Image_2,Text_4,input_0,Text_2,Text_6,d_3,a_a,obj_paint,abc_3,check_3,Text_1,Text_7,Text_8,Text_9,dong_tu_0,dong_tu_3,dong_tu_4,dong_tu_1,dong_tu_2,dong_tu_5,dong_tu_6,dong_tu_7,Text_10,Text_14,abc_4,abc_5,check_4,check_5,check_6,abc_6,Text_15);
stage.add(Page_1);
InitLacVietScript();
};
