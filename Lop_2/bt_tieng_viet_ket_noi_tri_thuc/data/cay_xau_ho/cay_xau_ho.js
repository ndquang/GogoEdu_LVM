folder_Resource ='/data/cay_xau_ho';
var m_color="";
var obj_down="";
var obj_up="";
var _score = 0;
var _reply = 0;
var array_a=["✔","","✔","✔",""];

// 
var  array_b=["a_0","a_1","a_2","a_3","a_a","b_4","b_5","b_b","c_6","c_7","c_c"];
var akq=[0,0,0,0,0,0,0,0];


var akq3=[0,1,1,1,0,1,1,0];
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
function ClickPlus()
{
	var tt = GetText("","");
	if(tt ==""||tt==4)
		tt=1;
	else tt++;
	SetText("","",tt);
	PlaySound("MOVE_OK");
	InvalidateObj("","");
}

function  InitTracNghiem()
{

	// Bai 1
	for(var i=1;i<=4;i++)
	{
		SetText("","_"+i,"");
		SetFontColor("","_"+i,"#000000");
	}
	
	// Bài 2
	for(i=0;i<5;i++)
	{
	akq[i]=0;
	}
	SetColorEx("","obj_paint",-1);
	// bai 3
	for(i=0;i<6;i++)
	{
	SetMoveView("","gr0_"+i,1);
	SetMoveView("","gr1_"+i,1);
	MoveObjectTo("","gr0_"+i,-1,-1);
	MoveObjectTo("","gr1_"+i,-1,-1);	
	}
	kq3=0;
	// bai ve keo tha
	for(i=0;i<4;i++)
	akq[i]=0;
	// Bai 4
	for(i=0;i<5;i++)
	{
		SetText("","check_"+i,"");
		SetFontColor("","check_"+i,"#000000");
		SetFontColor("","abc"+i,"#000000");
	}
	AllowEditText("","input_4",1);
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
	while(i<11 && b_e== false)
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
	while(i<11 && b_e== false)
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
	//bai 1
	for(var i=1;i<5;i++)
	{
		if(GetText("","_"+i)==i)
		{
		_diem=_diem+0.5;
		SetFontColor("","_"+i,"#3b8b26");

		}
		else SetFontColor("","_"+i,"#ff0000");
	}

	
	// bài 2
	for(i=0;i<8;i++)
	{
		if(akq[i]==1)
		{
		 _diem =_diem +0.5;
		}
	}
	// bài 3
	   _diem =_diem+ kq3/2;

	//bài 4
	var _dunghet = true;
	var chuachon = false;
	for(i=0;i<5;i++)
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
	// bai 5
	for(i=1;i<5;i++)
	{
		if(GetText("","_"+i)==i)
		{
		_diem=_diem+0.5;
		SetFontColor("","_"+i,"#3b8b26");

		}
		else SetFontColor("","_"+i,"#ff0000");
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
 height: 950 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,640,950,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var gr1 = CreText('gr1',369,489,225,100,"Từ ngữ chỉ đặc điểm",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',20,'Arial','Normal','center','middle',3,'0.00','3','75',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var gr0 = CreText('gr0',110,490,237,98,"Từ ngữ chỉ sự vật",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',20,'Arial','Normal','center','middle',3,'0.00','3','75',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_11 = CreText('Text_11',120,3,388,37,"CÂY XẤU HỔ",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_12 = CreText('Text_12',52,270,21,21,"2.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_13 = CreText('Text_13',85,262,439,35,"Đánh dấu ✔ vào ô trống dưới từ chỉ âm thanh.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_28 = CreText('Text_28',50,56,21,21,"1.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_29 = CreText('Text_29',82,52,519,28,"Dựa vào bài đọc, nối từ ngữ chỉ sự vật với từ ngữ chỉ hoạt động tương ứng.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var a_0 = CreText('a_0',102,86,99,31,"hé mắt nhìn",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c_6 = CreText('c_6',473,86,99,31,"vội bay đi",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var a_1 = CreText('a_1',316,86,148,31,"co rúm mình lại",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',2,881,638,68,"Bạn chưa hoàn thành câu 4",'#c0ffff','#ffffff','#ff0000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#c0ffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var diem = CreText('diem',240,857,155,40,"Chấm Điểm",'#afeeee','#ffffff','#ff0000','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','3','0',1,'#000000','#c0ffff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var Text_3 = CreText('Text_3',51,385,21,21,"3.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_4 = CreText('Text_4',83,381,519,28," Xếp các từ ngữ dưới đây vào nhóm thích hợp.(3đ)",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var gr0_1 = CreText('gr0_1',264,448,92,27,"lóng lánh",'#ffffff','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
gr0_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUp3();
  return;
}
 );
var gr1_1 = CreText('gr1_1',215,413,92,27,"lóng lánh",'#ffffff','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
gr1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUp3();
  return;
}
 );
var gr0_4 = CreText('gr0_4',323,413,142,27,"cành thanh mai",'#ffffff','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
gr0_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUp3();
  return;
}
 );
var gr1_0 = CreText('gr1_0',107,413,92,27,"xanh biếc",'#ffffff','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
gr1_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUp3();
  return;
}
 );
var gr0_2 = CreText('gr0_2',372,448,92,27,"gió",'#ffffff','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
gr0_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUp3();
  return;
}
 );
var gr0_3 = CreText('gr0_3',481,448,92,27,"cây xấu hổ",'#ffffff','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
gr0_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUp3();
  return;
}
 );
var gr0_0 = CreText('gr0_0',107,448,141,27,"con chim xanh",'#ffffff','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
gr0_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUp3();
  return;
}
 );
var a_2 = CreText('a_2',205,202,41,31,"tiếc",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var b_5 = CreText('b_5',99,202,97,31,"xuýt xao",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c_7 = CreText('c_7',412,202,192,31,"đậu trên cành thanh mai",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var abc_0 = CreText('abc_0',106,298,83,52,"xôn xao",'#ccffff','#ccffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',1,'0.00','0','0',1,'#0080ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var abc_1 = CreText('abc_1',207,300,83,52,"lóng lánh",'#ccffff','#ccffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',1,'0.00','0','0',1,'#0080ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var abc_2 = CreText('abc_2',308,300,83,52,"lạt xạt",'#ccffff','#ccffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',1,'0.00','0','0',1,'#0080ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_0 = CreText('check_0',137,337,25,25,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',8,'0.00','33','75',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var check_1 = CreText('check_1',234,339,25,25,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',8,'0.00','33','75',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var check_2 = CreText('check_2',335,340,25,25,"",'#ffffff','#ffffff','#ff0000','#ffffff','',16,'Arial','Normal','center','middle',8,'0.00','33','75',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var Text_5 = CreText('Text_5',573,5,59,54,"CÂY XẤU HỔ\r\nBỗng dưng, gió ào ào nổi lên. Có tiếng động gì lạ lắm. Những chiếc lá khô lạt xạt lướt trên cỏ. Cây xấu hổ co rúm mình lại.\r\nNó bỗng thấy xung quanh xôn xao. Nó hé mắt nhìn: không có gì lạ cả. Bấy giờ, nó mới mở bừng những con mắt lá. Quả nhiên, không có gì lạ thật.\r\nNhưng những cây cỏ xung quanh vẫn cứ xôn xao. Thì ra, vừa có một con chim xanh biếc, toàn thân lóng lánh như tự toả sáng không biết từ đâu bay tới. Chim đậu một thoáng trên cành thanh mai rồi lại vội bay đi. Các cây cỏ xuýt xoa: biết bao nhiêu con chim đã bay qua đây, chưa có con nào đẹp đến thế.\r\nCàng nghe bạn bè trầm trồ, cây xấu hổ càng tiếc. Không biết bao giờ con chim xanh ấy quay trở lại?\r\n",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_IMAGE1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var text = GetText("","");
Speak(text,"VN");
  return;
}
 );
var b_4 = CreText('b_4',209,86,99,31,"xôn xao",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var a_3 = CreText('a_3',255,202,146,31,"mở bừng mắt lá",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var gr1_2 = CreText('gr1_2',482,413,92,27,"đẹp",'#ffffff','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
gr1_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUp3();
  return;
}
 );
var a_a = CreText('a_a',144,126,116,66,"cây xấu hổ",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',1,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var b_b = CreText('b_b',286,125,116,66,"cây cỏ xung quanh",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',1,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c_c = CreText('c_c',429,123,116,66,"con chim xanh",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',1,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var obj_paint = CreText('obj_paint',84,76,540,175,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'#7f7f7f',0,1.50);
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
var abc_3 = CreText('abc_3',409,300,83,52,"ào ào",'#ccffff','#ccffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',1,'0.00','0','0',1,'#0080ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_3 = CreText('check_3',438,341,25,25,"",'#ffffff','#ffffff','#ff0000','#ffffff','',16,'Arial','Normal','center','middle',8,'0.00','33','75',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var abc_4 = CreText('abc_4',512,300,83,52,"xanh biếc",'#ccffff','#ccffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',1,'0.00','0','0',1,'#0080ff','#ccffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_4 = CreText('check_4',544,340,25,25,"",'#ffffff','#ffffff','#ff0000','#ffffff','',16,'Arial','Normal','center','middle',8,'0.00','33','75',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var Text_1 = CreText('Text_1',59,611,21,21,"4.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var edit = CreText('edit',91,607,519,28,"Đóng vai cây xấu hổ viết tiếp để hoàn thiện câu",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var input_4 = CreText('input_4',101,641,533,24,"Mình rất tiếc ...",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Image_2 = CreText('Image_2',490,624,0,0,'','rgba(0,0,0,0)','','','','',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var Text_2 = CreText('Text_2',59,673,21,21,"5.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_6 = CreText('Text_6',91,673,446,39,"Nghe câu chuyện |chú đỗ con|, rồi sắp xếp hành trình trình của hạt đỗ trở thành cây đỗ con",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_7 = CreText('Text_7',558,652,59,54,"Một chú đỗ con ngủ khì trong cái chum khô ráo và tối om suốt một năm. Một hôm tỉnh dậy chú thấy mình nằm giữa những hạt đất li ti xôm xốp. Chợt có tiếng lộp độp bên ngoài.\r\n- Ai đó?\r\n- Cô đây.\r\nThì ra cô mưa xuân, đem nước đến cho đỗ con được tắm mát, chú lại ngủ khì.\r\nCó tiếng sáo vi vu trên mặt đất làm chú tỉnh giấc. Chú khẽ cựa mình hỏi:\r\n- Ai đó?\r\nTiếng thì thầm trả lời chú : “Chị đây mà, chị là gió xuân đây. Dậy đi em, mùa xuân đẹp lắm”. Đỗ con lại cựa mình. Chú thấy mình lớn phổng lên làm nứt cả chiếc áo ngoài.\r\nChị gió xuân bay đi. Có những tia nắng ấm áp khẽ lay chú đỗ con. Đỗ con hỏi:\r\n- Ai đó?\r\nMột giọng nói ồm ồm, âm ấm vang lên:\r\n- Bác đây! Bác là mặt trời đây, cháu dậy đi thôi, sáng lắm rồi. Các cậu học trò cắp sách tới trường rồi đấy.\r\nĐỗ con rụt rè nói:\r\n- Nhưng mà trên đấy lạnh lắm.\r\nBác mặt trời khuyên:\r\n- Cháu cứ vùng dậy đi nào. Bác sẽ sưởi ấm cho cháu, cựa mạnh vào.\r\nĐỗ con vươn vai một cái thật mạnh. Chú trồi lên khỏi mặt đất. Mặt đất sáng bừng ánh nắng xuân. Đỗ con xoè hai cánh tay nhỏ xíu hướng về phía mặt trời ấm áp.",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_IMAGE1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var text = GetText("","");
Speak(text,"VN");
  return;
}
 );
var xxx1 = CreText('xxx1',158,750,362,28,"Hạt đỗ được gieo xuống đất.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','10','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var xxx0 = CreText('xxx0',158,715,362,28,"Mặt trời sưởi ấm hạt đỗ.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','10','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var xxx2 = CreText('xxx2',158,820,362,28,"Mưa xuân làm hạt đỗ nảy mầm.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','10','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var xxx3 = CreText('xxx3',158,785,362,28,"Gió xuân khẽ lay lá mầm non nớt.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','10','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _3 = CreText('_3',121,785,26,24,"3",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickPlus();
  return;
}
 );
var _1 = CreText('_1',121,750,26,24,"1",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickPlus();
  return;
}
 );
var _4 = CreText('_4',121,715,26,24,"4",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickPlus();
  return;
}
 );
var _2 = CreText('_2',121,822,26,24,"2",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickPlus();
  return;
}
 );
Page_1.add(Page_1_Backrounnd,gr1,gr0,Text_11,Text_12,Text_13,Text_28,Text_29,a_0,c_6,a_1,msg,diem,Image_1,Text_3,Text_4,gr0_1,gr1_1,gr0_4,gr1_0,gr0_2,gr0_3,gr0_0,a_2,b_5,c_7,abc_0,abc_1,abc_2,check_0,check_1,check_2,Text_5,b_4,a_3,gr1_2,a_a,b_b,c_c,obj_paint,abc_3,check_3,abc_4,check_4,Text_1,edit,input_4,Image_2,Text_2,Text_6,Text_7,xxx1,xxx0,xxx2,xxx3,_3,_1,_4,_2);
stage.add(Page_1);
InitLacVietScript();
};
