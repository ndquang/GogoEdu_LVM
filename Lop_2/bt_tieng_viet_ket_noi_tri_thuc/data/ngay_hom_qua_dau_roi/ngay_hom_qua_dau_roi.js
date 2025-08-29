folder_Resource ='/data/ngay_hom_qua_dau_roi';
var m_color="";
var obj_down="";
var obj_up="";
var _score = 0;
var _reply = 0;
var array_a=["","","✔"];
var chu_cai=["a","ă","â","b","c","d","đ","e","ê","g","h","i","k","l","m","n","o","ô","ơ","p","q","r","s","t","u","ư","v","x","y"];
var  array_b=["lef_0","lef_1","lef_2","rig_0","rig_1","rig_2"];
var akq=[0,0,0];
var idx2 = 0;
var kq2="";
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
	InvalidateObj("","");

}
function  InitTracNghiem()
{
	// Bai 1
	for(var i=0;i<3;i++)
	{
		SetText("","check_"+i,"");
		SetFontColor("","check_"+i,"#000000");
		SetFontColor("","abc"+i,"#000000");
	}

	// Bai 2
	var index = Random(24);
	for(i=0;i<5;i++)
	{
	SetText("","so_"+i, chu_cai[index ]);
	AllowEditText("","so_"+i,0);
	SetFontColor("","so_"+i,"#000000");
	index++;
	}
	idx2  = Random(5);
	kq2= GetText("","so_"+idx2  );
	SetText("","so_"+idx2 , "");
	AllowEditText("","so_"+idx2  ,1);

	// Bài 3
	for(i=0;i<4;i++)
	{
	SetMoveView("","gr0_"+i,1);
	SetMoveView("","gr1_"+i,1);
	MoveObjectTo("","gr0_"+i,-1,-1);
	MoveObjectTo("","gr1_"+i,-1,-1);
	//bai 4
	akq[i]=0;
	}
	kq3=0;

	SetText("","msg","");
	 _reply =0;
	SetColorEx("","obj_paint",-1);
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
		var _d = rightStr(obj_down,1);
		var _u = rightStr(obj_up,1);
		if(_d==_u && akq[_u]==0)
			{
			SaveObject("","obj_paint");
			akq[_d]=1;
			PlaySound("MOVE_OK");
			return;
			}
	}
	else PlaySound("MOVE_ERROR");

}
function ChamDiem()
{
	var  _diem =0;
	var _dunghet = true;
	var chuachon = false;
	for(var i=0;i<3;i++)
	{
		var isCheck = GetText("","check_"+i);
		if(isCheck=="✔")
			chuachon = true;
		if(array_a[i]==isCheck)
 		SetFontColor("","check_"+i,"#3b8b26");
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
		 SetText("","msg","⚠ Bạn chưa hoàn thành bài 1");
		return;
		}

	if( _dunghet)
		_diem =2;
	// bai 2
	var tl2=GetText("","so_"+idx2);
	
	if(tl2=="")
		{
		 SetText("","msg","⚠ Bạn chưa hoàn thành bài 2");
		return;
		}
	 if(tl2==kq2)
		_diem++;
	else SetFontColor("",idx2,"#FF0000");

	// bai 3
	if(kq3==8)
	   _diem =_diem+ kq3/2;
	
	// bài 4
	for(i=0;i<3;i++)
	{
		if(akq[i]==1)
		{
		 _diem =_diem +1;
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
 height: 840 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,640,840,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var gr1 = CreText('gr1',370,342,214,135,"Nhóm từ ngữ chỉ hoạt động",'#ffffff','#ccffcc','#c0c0c0','#ffffff','',20,'Arial','Normal','center','middle',3,'0.00','3','75',4,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var gr0 = CreText('gr0',100,343,237,135,"Nhóm từ ngữ chỉ đồ vật",'#ffffff','#ccffcc','#c0c0c0','#ffffff','',20,'Arial','Normal','center','middle',3,'0.00','3','75',4,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',77,48,519,26,"Trong khổ thơ cuối bài, bố đã dặn bạn nhỏ làm gì để “ngày qua vẫn còn”? (2đ)",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',45,47,21,21,"1.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var abc0 = CreText('abc0',127,76,294,21,"Cất tờ lịch vào trong vở",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var abc1 = CreText('abc1',127,103,208,21,"Giữ sách vở sạch đẹp",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var abc2 = CreText('abc2',127,130,208,21,"Học hành chăm chỉ",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_0 = CreText('check_0',99,76,21,21,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var check_1 = CreText('check_1',99,101,21,21,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var check_2 = CreText('check_2',99,126,21,21,"",'rgba(0,0,0,0)','#ffffff','#ff0000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var Text_11 = CreText('Text_11',120,3,388,37,"NGÀY HÔM QUA ĐÂU RỒI",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_12 = CreText('Text_12',45,165,21,21,"2.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_13 = CreText('Text_13',77,162,519,28,"Điền chữ cái còn thiếu vào ô trống.(Theo thứ tự bảng chữ cái) (1đ)",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_28 = CreText('Text_28',45,499,21,21,"4.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_29 = CreText('Text_29',77,495,519,28,"Nối từ ngữ ở cột A với từ ngữ ở cột B, để tạo một câu giới thiệu. (3đ)\r\n",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var lef_0 = CreText('lef_0',113,570,104,31,"Bạn Hà",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#00ccff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var lef_1 = CreText('lef_1',113,613,122,31,"Bố em",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#00ccff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var lef_2 = CreText('lef_2',113,658,128,31,"Trường em",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#00ccff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',71,757,525,65,"Bạn chưa hoàn thành câu 4",'rgba(0,0,0,0)','#ffffff','#ff0000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var diem = CreText('diem',257,716,155,40,"Chấm Điểm",'#e6e6fa','#ffffff','#0080ff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','3','0',1,'#000000','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var so_0 = CreText('so_0',127,201,35,35,"1",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#0080ff','#00aeae','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so_1 = CreText('so_1',189,201,35,35,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#0080ff','#00aeae','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so_2 = CreText('so_2',251,201,35,35,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#0080ff','#00aeae','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so_3 = CreText('so_3',313,201,35,35,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#0080ff','#00aeae','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so_4 = CreText('so_4',375,201,35,35,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#0080ff','#00aeae','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',45,251,21,21,"3.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_4 = CreText('Text_4',77,247,519,28,"Sắp sếp các từ sau vào nhóm thích hợp (4đ)",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var gr0_0 = CreText('gr0_0',99,281,35,21,"mũ",'#ddffff','#ddffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ddffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
gr0_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUp3();
  return;
}
 );
var gr0_1 = CreText('gr0_1',195,310,83,21,"cặp sách",'#ddffff','#ddffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ddffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
gr0_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUp3();
  return;
}
 );
var gr0_2 = CreText('gr0_2',228,282,78,21,"cặp sách",'#ddffff','#ddffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ddffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
gr0_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUp3();
  return;
}
 );
var gr1_2 = CreText('gr1_2',312,281,94,21,"đánh răng",'#ddffff','#ddffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ddffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
gr1_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUp3();
  return;
}
 );
var gr1_0 = CreText('gr1_0',140,281,82,21,"chải đầu",'#ddffff','#ddffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ddffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
gr1_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUp3();
  return;
}
 );
var gr1_1 = CreText('gr1_1',289,310,78,21,"đi học",'#ddffff','#ddffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ddffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
gr1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUp3();
  return;
}
 );
var gr1_3 = CreText('gr1_3',415,280,77,21,"ăn sáng",'#ddffff','#ddffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ddffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
gr1_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUp3();
  return;
}
 );
var gr0_3 = CreText('gr0_3',101,310,82,21,"quần áo",'#ddffff','#ddffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ddffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
gr0_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUp3();
  return;
}
 );
var rig_1 = CreText('rig_1',309,570,104,31,"là bác sĩ",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#00ccff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var rig_2 = CreText('rig_2',309,614,261,31,"là Trường Tiểu Học Lê Quý Đôn",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#00ccff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var rig_0 = CreText('rig_0',309,658,147,31,"là học sinh lớp 2A",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#00ccff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_21 = CreText('Text_21',138,522,35,35,"A",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Bold','center','middle',2,'0.00','0','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_22 = CreText('Text_22',328,521,35,35,"B",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Bold','center','middle',2,'0.00','0','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var obj_paint = CreText('obj_paint',73,561,532,145,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','rgba(255,255,255,0.00)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'#7f7f7f',0,1.50);
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
var Text_5 = CreText('Text_5',563,93,59,54,"Em cầm tờ lịch cũ:\r\n– Ngày hôm qua đâu rồi\r\nRa ngoài sân hỏi bố\r\nXoa đầu em, bố cười.\r\n\r\n– Ngày hôm qua ở lại\r\nTrên cành hoa trong vườn\r\nNụ hồng lớn lên mãi\r\nĐợi đến ngày tỏa hương.\r\n\r\n– Ngày hôm qua ở lại\r\nTrong hạt lúa mẹ trồng\r\nCánh đồng chờ gặt hái\r\nChín vàng màu ước mong.\r\n\r\n– Ngày hôm qua ở lại\r\nTrong vở hồng của con\r\nCon học hành chăm chỉ\r\nLà ngày qua vẫn còn.",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_IMAGE1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var text = GetText("","");
Speak(text,"VN");
  return;
}
 );
Page_1.add(Page_1_Backrounnd,gr1,gr0,Text_1,Text_2,abc0,abc1,abc2,check_0,check_1,check_2,Text_11,Text_12,Text_13,Text_28,Text_29,lef_0,lef_1,lef_2,msg,diem,Image_1,so_0,so_1,so_2,so_3,so_4,Text_3,Text_4,gr0_0,gr0_1,gr0_2,gr1_2,gr1_0,gr1_1,gr1_3,gr0_3,rig_1,rig_2,rig_0,Text_21,Text_22,obj_paint,Text_5);
stage.add(Page_1);
InitLacVietScript();
};
