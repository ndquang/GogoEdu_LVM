folder_Resource ='/data/thoi_khoa_bieu';
var m_color="";
var obj_down="";
var obj_up="";
var _score = 0;
var _reply = 0;
var array_a=["","✔",""];
//
var array_input=["Tiếng Việt","Tiếng Việt", "Giáo dục thể chất", "Toán","Tự nhiên và Xã hội", "Tự học có hướng dẫn","Thứ Tư", "Thứ Ba và thứ Năm"];
// 
var  array_b=["a_0","a_a","b_1","b_b","c_2","c_c"];
var akq=[0,0,0];

var akq_ch=["tr","Tr","ch","ch","tr","v","d","D","v"];
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
function  ChangeChar( ch1,  ch2)
{
	var curText = GetText("","");
	if(curText == "" || curText ==ch2)
	{
		SetText("","",ch1);
	}
	else
	{
		SetText("","",ch2);

	}
	PlaySound("MOVE_OK");
	InvalidateObj("","");

}
function  InitTracNghiem()
{

	// Bai 1
	for(var i=0;i<10;i++)
	{
		SetText("","ch_"+i,"");
	}
	
	
	// Bai 1
	for(i=0;i<3;i++)
	{
		SetText("","check_"+i,"");
		SetFontColor("","check_"+i,"#000000");
		SetFontColor("","abc"+i,"#000000");
	}
	for(i=0;i<8;i++)
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


function MoveUp3()
{

if(GetMoveView("","")==0)
	return;
var cur_name = GetName("");
var left3 = leftStr(cur_name,3);
if((RectInRect("","gr0","") && left3=="gr0") || (RectInRect("","gr1","") && left3=="gr1"))
	{
	SetMoveView("","",0);
	kq3++;
	PlaySound("MOVE_OK");
	}

else 
	{
	     MoveObjectTo("","",-1,-1);
	     PlaySound("MOVE_ERROR");
	}
}

function StartObj()
{
	var i=0;
	var b_e= false;
	while(i<6 && b_e== false)
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
	while(i<6 && b_e== false)
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
	for(var i=0;i<10;i++)
	{
		if(GetText("","ch_"+i)==akq_ch[i])
		{
		_diem=_diem+0.5;
		SetFontColor("","ch_"+i,"#3b8b26");

		}
		else SetFontColor("","ch_"+i,"#ff0000");
	}

	//bài 1
	var _dunghet = true;
	var chuachon = false;
	for(i=0;i<3;i++)
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
	for(i=0;i<8;i++)
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
var Text_1 = CreText('Text_1',68,493,557,85,"Vân: Thứ mấy lớp mình có tiết Mĩ thuật?\r\nPhương: …………………………\r\nVân: Lớp mình học môn Tự nhiên và Xã hội vào thứ mấy?\r\nPhương: ……………………………………………………",'rgba(0,0,0,0)','#ffffff','#000000','#0080ff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.80);
var Text_7 = CreText('Text_7',115,630,296,84,"Mặt ……ời mọc rồi lặn\r\n……ên đôi ……ân lon ton\r\nHai ……ân ……ời của con\r\nLà mẹ và cô giáo",'rgba(0,0,0,0)','#ffffff','#000000','#0080ff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.80);
var Text_14 = CreText('Text_14',119,745,521,93,"Có con chim …..ành khuyên nhỏ\r\n…..áng trong thật ngoan ngoãn quá\r\nGọi …..ạ, bảo …..âng lễ phép ngoan nhất nhà.",'rgba(0,0,0,0)','#ffffff','#000000','#0080ff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.80);
var Text_13 = CreText('Text_13',62,43,525,51,"Nếu không có thời khóa biểu, em gặp khó khăn gì?",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_16 = CreText('Text_16',64,467,557,22,"Dựa vào thời khóa biểu trong bài đọc, hoàn thiện đoạn hội thoại sau:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,2.30);
var Text_11 = CreText('Text_11',120,3,388,37,"THỜI KHÓA BIỂU",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_12 = CreText('Text_12',37,50,21,21,"1.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',2,832,638,68,"Bạn chưa hoàn thành câu 4",'#c0ffff','#ffffff','#ff0000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#c0ffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var diem = CreText('diem',240,808,155,40,"Chấm Điểm",'#afeeee','#ffffff','#ff0000','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','3','0',1,'#000000','#c0ffff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var Text_3 = CreText('Text_3',42,578,21,21,"4.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var abc_0 = CreText('abc_0',94,95,287,28,"Phải mang tất cả sách vở đến lớp",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var abc_1 = CreText('abc_1',94,129,449,28," Không chủ động được việc chuẩn bị sách vở",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var abc_2 = CreText('abc_2',94,164,287,28,"Không có sách để đi học",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_0 = CreText('check_0',64,95,25,23,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var check_1 = CreText('check_1',64,129,25,23,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var check_2 = CreText('check_2',64,164,25,23,"",'#ffffff','#ffffff','#ff0000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var Text_5 = CreText('Text_5',573,5,59,54,"Thời khóa biểu cho biết thời gian học các môn của từng ngày trong tuần. Thời khóa biểu gồm nhiều cột dọc và nhiều hàng ngang. Các bạn học sinh thường đọc thời khóa biểu theo trình tự thứ - buổi – tiết – môn.",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_IMAGE1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var text = GetText("","");
Speak(text,"VN");
  return;
}
 );
var Image_2 = CreText('Image_2',490,624,0,0,'','rgba(0,0,0,0)','','','','',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var Text_8 = CreText('Text_8',37,202,21,21,"2.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_9 = CreText('Text_9',59,199,595,28,"Dựa vào thời khóa biểu trong bài đọc, viết lại các môn học của ngày thứ Năm",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var input_0 = CreText('input_0',426,277,196,26,"Cậu giỏi quá",'#d7ffff','#d7ffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#c0c0c0','#d7ffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var input_1 = CreText('input_1',426,306,196,26,"Cậu giỏi quá",'#d7ffff','#d7ffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#c0c0c0','#d7ffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var input_2 = CreText('input_2',426,335,196,26,"Cậu giỏi quá",'#d7ffff','#d7ffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#c0c0c0','#d7ffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var input_3 = CreText('input_3',426,364,196,26,"Cậu giỏi quá",'#d7ffff','#d7ffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#c0c0c0','#d7ffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_10 = CreText('Text_10',37,465,21,21,"3.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_15 = CreText('Text_15',369,277,54,114,"Buổi sáng",'#d7ffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#666666','#d7ffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var input_4 = CreText('input_4',426,393,196,26,"Cậu giỏi quá",'#ffffd7','#ffffd7','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#c0c0c0','#ffffd7','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var input_5 = CreText('input_5',426,422,196,26,"Cậu giỏi quá",'#ffffd7','#ffffd7','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#c0c0c0','#ffffd7','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var input_6 = CreText('input_6',131,509,120,20,"Cậu giỏi quá",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',14,'Arial','Normal','left','bottom',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var input_7 = CreText('input_7',138,549,319,20,"Cậu giỏi quá",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',14,'Arial','Normal','left','bottom',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_4 = CreText('Text_4',67,574,519,28,"Chọn a hoặc b",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Image_4 = CreText('Image_4',65,242,298,209,'','rgba(0,0,0,0)','','','','ID_IMAGE6.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var Text_2 = CreText('Text_2',370,393,54,56,"Buổi chiều",'#ffffe0','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#666666','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_6 = CreText('Text_6',369,242,253,33,"THỨ NĂM",'#2b95ff','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#666666','#2b95ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_17 = CreText('Text_17',71,606,247,28,"a. ch hoặc tr",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_18 = CreText('Text_18',75,711,247,28,"b. v hoặc d",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ch_0 = CreText('ch_0',149,627,25,20,"ch",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',14,'Arial','Normal','right','bottom',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeChar("ch","tr");
  return;
}
 );
var ch_1 = CreText('ch_1',120,647,25,20,"ch",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',14,'Arial','Normal','right','bottom',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeChar("Ch","Tr");
  return;
}
 );
var ch_2 = CreText('ch_2',194,647,25,20,"ch",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',14,'Arial','Normal','right','bottom',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeChar("ch","tr");
  return;
}
 );
var ch_3 = CreText('ch_3',146,666,25,20,"ch",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',14,'Arial','Normal','right','bottom',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeChar("ch","tr");
  return;
}
 );
var ch_4 = CreText('ch_4',197,666,25,20,"ch",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',14,'Arial','Normal','right','bottom',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeChar("ch","tr");
  return;
}
 );
var ch_5 = CreText('ch_5',203,742,25,20,"ch",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',14,'Arial','Normal','right','bottom',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeChar("v","d");
  return;
}
 );
var ch_6 = CreText('ch_6',118,763,25,20,"ch",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',14,'Arial','Normal','right','bottom',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeChar("V","D");
  return;
}
 );
var ch_7 = CreText('ch_7',144,782,25,20,"ch",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',14,'Arial','Normal','right','bottom',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeChar("v","d");
  return;
}
 );
var ch_8 = CreText('ch_8',211,782,25,20,"ch",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',14,'Arial','Normal','right','bottom',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ch_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangeChar("v","d");
  return;
}
 );
Page_1.add(Page_1_Backrounnd,Text_1,Text_7,Text_14,Text_13,Text_16,Text_11,Text_12,msg,diem,Image_1,Text_3,abc_0,abc_1,abc_2,check_0,check_1,check_2,Text_5,Image_2,Text_8,Text_9,input_0,input_1,input_2,input_3,Text_10,Text_15,input_4,input_5,input_6,input_7,Text_4,Image_4,Text_2,Text_6,Text_17,Text_18,ch_0,ch_1,ch_2,ch_3,ch_4,ch_5,ch_6,ch_7,ch_8);
stage.add(Page_1);
InitLacVietScript();
};
