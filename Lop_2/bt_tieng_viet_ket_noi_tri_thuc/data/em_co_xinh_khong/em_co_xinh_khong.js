folder_Resource ='data/em_co_xinh_khong';
var m_color="";
var obj_down="";
var obj_up="";
var _score = 0;
var _reply = 0;
var array_a=["✔","✔","","","✔"];
var  array_b=["lef_0","lef_1","lef_2","lef_3","rig_0","rig_1","rig_2","rig_3"];
var akq=[0,0,0,0,0,0];
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
	for(i=0;i<8;i++)
	{
		var cl = SetColor("","bai3_"+i,"#ffffff");
	}
	// Bai 4
	for(i=0;i<6;i++)
	{
		SetText("","check_"+i,"");
		SetFontColor("","check_"+i,"#000000");
		SetFontColor("","abc"+i,"#000000");
	}

	SetText("","msg","");
	 _reply =0;
	_score =GetVer();
	SetText("","diem","Chấm Điểm");
	PlaySound("SND_CREATE");
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

function FillColor()
{
	var cl = GetColor("","","cls");
	if(cl=="#ffffff")
		SetColor("","","#3398f4");
	else SetColor("","","#ffffff");
	InvalidateObj("","");
	PlaySound("MOVE_OK");
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
	for(i=0;i<3;i++)
	{
		if(akq[i]==1)
		{
		 _diem =_diem +0.5;
		}
	}
	// bài 3
	for(i=0;i<8;i++)
	{
		var cl = GetColor("","bai3_"+i,"cls");
		if(cl=="#ffffff" && akq3[i]==0)
		{
		    _diem =_diem +0.5;
		}
		if(cl=="#3398f4" && akq3[i]==1)
		{
		    _diem =_diem +0.5;
		}
	}
	//bài 4
	var _dunghet = true;
	var chuachon = false;
	for(i=0;i<6;i++)
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
		 SetText("","msg","⚠ Bạn chưa hoàn thành bài 4");
		return;
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
 height: 880 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,640,880,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var xxx1 = CreText('xxx1',222,98,127,132,"Nghe hươu nói, voi em liền gài sừng giả lên đầu.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','10','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',77,46,519,41,"Sắp xếp các sự việc dưới đây theo đúng trình tự trong bài đọc (đánh số 1, 2, 3, 4 vào ô trống bên dưới). (2đ)",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',45,47,21,21,"1.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var xxx0 = CreText('xxx0',88,98,127,132,"Sau khi nói chuyện với dê, voi em nhổ khóm cỏ dại và gắn lên cằm làm râu.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','10','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var xxx2 = CreText('xxx2',356,98,127,132,"Voi em luôn hỏi anh và nhận được câu trả lời: “Em xinh lắm!”",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','10','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var xxx3 = CreText('xxx3',490,98,127,132,"Voi em nhận ra mình chỉ xinh đẹp khi đúng là voi.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','10','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _3 = CreText('_3',138,219,31,26,"3",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickPlus();
  return;
}
 );
var _1 = CreText('_1',273,219,31,26,"1",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickPlus();
  return;
}
 );
var _4 = CreText('_4',408,219,31,26,"4",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickPlus();
  return;
}
 );
var Text_11 = CreText('Text_11',120,3,388,37,"EM CÓ XINH KHÔNG",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_12 = CreText('Text_12',52,605,21,21,"4.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_13 = CreText('Text_13',85,602,519,44,"Những từ ngữ nào dưới đây chỉ hành động của voi em? (đánh dấu vào ô trống dưới đáp án đúng).",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_28 = CreText('Text_28',45,255,21,21,"2.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_29 = CreText('Text_29',77,251,519,28,"Dựa vào bài đọc, nối câu thoại phù hợp với nhân vật.  (2đ)\r\n",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var lef_0 = CreText('lef_0',97,290,386,31,"Chưa xinh lắm vì em không có đôi sừng giống anh",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var lef_1 = CreText('lef_1',97,333,386,31,"Em có xinh không?",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var lef_2 = CreText('lef_2',97,378,386,31,"Em xinh lắm!",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',-2,811,637,68,"Bạn chưa hoàn thành câu 4",'#c0ffff','#ffffff','#ff0000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#c0ffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var diem = CreText('diem',235,787,155,40,"Chấm Điểm",'#afeeee','#ffffff','#ff0000','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','3','0',1,'#000000','#c0ffff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var Text_3 = CreText('Text_3',54,480,21,21,"3.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_4 = CreText('Text_4',86,476,519,28,"Tô màu những từ ngữ chỉ bộ phận cơ thể",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai3_0 = CreText('bai3_0',464,555,92,33,"cành cây",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',11,'0.00','10','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bai3_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
FillColor();
  return;
}
 );
var bai3_1 = CreText('bai3_1',228,555,92,33,"đầu",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',11,'0.00','10','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bai3_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
FillColor();
  return;
}
 );
var bai3_2 = CreText('bai3_2',228,509,92,33,"đầu",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',11,'0.00','10','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bai3_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
FillColor();
  return;
}
 );
var bai3_3 = CreText('bai3_3',346,509,92,33,"râu",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',11,'0.00','10','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bai3_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
FillColor();
  return;
}
 );
var bai3_4 = CreText('bai3_4',110,509,92,33,"cỏ dại",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',11,'0.00','10','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bai3_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
FillColor();
  return;
}
 );
var bai3_5 = CreText('bai3_5',346,555,92,33,"cằm",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',11,'0.00','10','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bai3_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
FillColor();
  return;
}
 );
var bai3_6 = CreText('bai3_6',464,507,92,33,"tai",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',11,'0.00','10','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bai3_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
FillColor();
  return;
}
 );
var bai3_7 = CreText('bai3_7',110,555,92,33,"gương",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',11,'0.00','10','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bai3_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
FillColor();
  return;
}
 );
var rig_3 = CreText('rig_3',507,290,86,31,"dê",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var rig_0 = CreText('rig_0',507,334,86,31,"hươu",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var rig_2 = CreText('rig_2',507,378,86,31,"voi anh",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var abc_0 = CreText('abc_0',111,654,144,42,"nhặc cành cây",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','10','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var abc_1 = CreText('abc_1',280,653,144,42,"nhổ khóm cỏ dại",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','10','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var abc_2 = CreText('abc_2',437,651,144,42,"lắc đầu",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','10','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_0 = CreText('check_0',104,683,25,25,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',4,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var check_1 = CreText('check_1',273,682,25,25,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',4,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var check_2 = CreText('check_2',434,680,25,25,"",'#ffffff','#ffffff','#ff0000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',4,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var Text_5 = CreText('Text_5',573,5,59,54,"EM CÓ XINH KHÔNG?\r\nVoi em thích mặc đẹp và thích được khen xinh. Ở nhà, voi em luôn hỏi anh: “Em có xinh không?”. Voi anh bao giờ cũng khen: “Em xinh lắm!”.\r\nMột hôm, gặp hươu, voi em hỏi:\r\n- Em có xinh không?\r\nHươu ngắm voi rồi lắc đầu:\r\n- Chưa xinh lắm vì em không có đôi sững giống anh.\r\nNghe vậy, voi nhặt vài cành cây khô, gài lên đầu rồi đi tiếp.\r\nGặp dê, voi hỏi:\r\n- Em có xinh không?\r\n- Không, vì cậu không có bộ râu giống tôi.\r\nVoi liền nhổ một khóm cỏ dại bên đường, gắn vào cằm rồi về nhà.\r\nVề nhà với đôi sừng và bộ râu giả, voi em hớn hở hỏi anh:\r\n- Em có xinh hơn không?\r\nVoi anh nói:\r\n- Trời ơi, sao em lại thêm sừng và râu thế này? Xấu lắm!\r\nVoi em ngắm mình trong gương và thấy xấu thật. Sau khi bỏ sừng và râu đi, voi em thấy mình xinh đẹp hẳn lên. Giờ đây, voi em hiểu rằng mình chỉ xinh đẹp khi đúng là voi.",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_IMAGE1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var text = GetText("","");
Speak(text,"VN");
  return;
}
 );
var _2 = CreText('_2',544,219,31,26,"2",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickPlus();
  return;
}
 );
var lef_3 = CreText('lef_3',98,426,386,31,"Không, vì cậu không có bộ râu giống tôi",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var rig_1 = CreText('rig_1',507,426,86,31,"voi em",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var abc_3 = CreText('abc_3',177,716,144,42,"khen",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','10','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var abc_4 = CreText('abc_4',345,715,144,42,"ngắm mình trong gương",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','10','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_3 = CreText('check_3',169,743,25,25,"",'#ffffff','#ffffff','#ff0000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',4,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var check_4 = CreText('check_4',340,742,25,25,"",'#ffffff','#ffffff','#ff0000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',4,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var obj_paint = CreText('obj_paint',84,284,538,186,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','rgba(255,255,255,0.00)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'#7f7f7f',0,1.50);
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
Page_1.add(Page_1_Backrounnd,xxx1,Text_1,Text_2,xxx0,xxx2,xxx3,_3,_1,_4,Text_11,Text_12,Text_13,Text_28,Text_29,lef_0,lef_1,lef_2,msg,diem,Image_1,Text_3,Text_4,bai3_0,bai3_1,bai3_2,bai3_3,bai3_4,bai3_5,bai3_6,bai3_7,rig_3,rig_0,rig_2,abc_0,abc_1,abc_2,check_0,check_1,check_2,Text_5,_2,lef_3,rig_1,abc_3,abc_4,check_3,check_4,obj_paint);
stage.add(Page_1);
InitLacVietScript();
};
