folder_Resource ='/data/mot_gio_hoc';
var m_color="";
var obj_down="";
var obj_up="";
var _score = 0;
var _reply = 0;
var array_a=["","✔",""];

// 
var  array_b=["lef_0","lef_1","lef_2","lef_3","rig_0","rig_1","rig_2","rig_3"];
var akq=[0,0,0,0];


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
	// Bài 3
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
	for(i=0;i<3;i++)
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
	for(i=0;i<4;i++)
	{
		if(akq[i]==1)
		{
		 _diem =_diem +1;
		}
	}
	// bài 3
	   _diem =_diem+ kq3/3;

	//bài 4
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
 height: 900 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,640,900,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var gr1 = CreText('gr1',380,489,214,100,"Từ ngữ chỉ đặc điểm",'rgba(0,0,0,0)','#ffffff','#c0c0c0','#ffffff','',20,'Arial','Normal','center','middle',3,'0.00','3','75',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var gr0 = CreText('gr0',110,490,237,98,"Từ ngữ chỉ bộ phận cơ thể",'rgba(0,0,0,0)','#ffffff','#c0c0c0','#ffffff','',20,'Arial','Normal','center','middle',3,'0.00','3','75',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var xxx1 = CreText('xxx1',118,133,506,27,"Thầy giáo và các bạn động viên, khích lệ Quang.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','10','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',77,46,519,41,"Sắp xếp các sự việc dưới đây theo đúng trình tự trong bài đọc (đánh số 1, 2, 3, 4 vào ô trống bên dưới). (2đ)",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',45,47,21,21,"1.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var xxx0 = CreText('xxx0',118,99,357,27,"Quang đã trở nên tự tin.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','10','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var xxx2 = CreText('xxx2',118,199,548,27,"Quang cảm thấy lúng túng, ngượng nghịu.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','10','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var xxx3 = CreText('xxx3',118,167,631,27,"Thầy giáo yêu cầu các bạn tập nói trước lớp về bất cứ điều gì mình thích.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','10','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _3 = CreText('_3',83,133,31,26,"3",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickPlus();
  return;
}
 );
var _1 = CreText('_1',83,199,31,26,"1",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickPlus();
  return;
}
 );
var _4 = CreText('_4',83,99,31,26,"4",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickPlus();
  return;
}
 );
var Text_11 = CreText('Text_11',120,3,388,37,"MỘT GIỜ HỌC",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_12 = CreText('Text_12',52,237,21,21,"2.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_13 = CreText('Text_13',85,234,566,44,"Theo em, điều gì khiến Quang trở nên tự tin? (đánh dấu ✔ vào ô trống trước những đáp án đúng) (1.5đ)",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_28 = CreText('Text_28',50,604,21,21,"4.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_29 = CreText('Text_29',82,600,519,28,"Nối theo thứ tự những việc em thường làm trước khi đi học.(4đ)",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var lef_0 = CreText('lef_0',102,639,99,31,"Trước tiên",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var lef_1 = CreText('lef_1',102,680,99,31,"Tiếp theo",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var lef_2 = CreText('lef_2',102,721,99,31,"Sau đó",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',0,829,637,68,"Bạn chưa hoàn thành câu 4",'#c0ffff','#ffffff','#ff0000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#c0ffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var diem = CreText('diem',237,805,155,40,"Chấm Điểm",'#afeeee','#ffffff','#ff0000','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','3','0',1,'#000000','#c0ffff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var gr1_3 = CreText('gr1_3',410,452,92,27,"đen láy",'#ffffff','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
gr1_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUp3();
  return;
}
 );
var gr1_1 = CreText('gr1_1',208,452,92,27,"sáng",'#ffffff','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
gr1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUp3();
  return;
}
 );
var gr0_0 = CreText('gr0_0',214,414,92,27,"khuôn mặt",'#ffffff','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
gr0_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUp3();
  return;
}
 );
var gr0_1 = CreText('gr0_1',321,414,92,27,"khuôn mặt",'#ffffff','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
gr0_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUp3();
  return;
}
 );
var gr1_0 = CreText('gr1_0',107,414,92,27,"mượt mà",'#ffffff','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
gr1_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUp3();
  return;
}
 );
var gr1_2 = CreText('gr1_2',309,452,92,27,"cao",'#ffffff','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
gr1_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUp3();
  return;
}
 );
var gr1_5 = CreText('gr1_5',428,412,92,27,"bầu bĩnh",'#ffffff','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
gr1_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUp3();
  return;
}
 );
var gr0_2 = CreText('gr0_2',107,452,92,27,"vầng trán",'#ffffff','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
gr0_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUp3();
  return;
}
 );
var rig_1 = CreText('rig_1',235,639,380,31," em sẽ chải tóc.",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var rig_0 = CreText('rig_0',235,680,380,31,"em rửa mặt đánh răng.",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var rig_3 = CreText('rig_3',235,721,380,31,"em sẽ ăn sáng cùng bố mẹ để đến lớp đúng giờ.",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var abc_0 = CreText('abc_0',117,286,500,27,"Vì Quang được mời lên nói đầu tiên.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','10','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var abc_1 = CreText('abc_1',117,318,500,27,"Vì Quang được thầy giáo và các bạn động viên, khích lệ.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','10','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var abc_2 = CreText('abc_2',120,350,500,27,"Vì Quang cố gắng vượt qua sự nhút nhát.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','10','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_0 = CreText('check_0',83,283,25,25,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',8,'0.00','33','75',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var check_1 = CreText('check_1',82,315,25,25,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',8,'0.00','33','75',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var check_2 = CreText('check_2',81,348,25,25,"",'rgba(0,0,0,0)','#ffffff','#ff0000','#ffffff','',16,'Arial','Normal','center','middle',8,'0.00','33','75',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var Text_5 = CreText('Text_5',573,5,59,54,"MỘT GIỜ HỌC\r\nThầy giáo nói: “Chúng ta cần học cách giao tiếp tự tin. Vì thế hôm nay chúng ta sẽ tập nói trước lớp về bất cứ điều gì mình thích.”.\r\nQuang được mời lên nói đầu tiên. Cậu lúng túng, đỏ mặt. Quang cảm thấy nói với bạn bên cạnh thì dễ, nhưng nói trước cả lớp thì sao mà khó thế. Thầy bảo: “Sáng nay ngủ dậy, em đã làm gì? Em cố nhớ xem.”.\r\nQuang ngập ngừng, vừa nói vừa gãi đầu: “Em...”.\r\nThầy giáo nhắc: “Rồi gì nữa?”.\r\nQuang lại gãi đầu: “À... ờ... Em ngủ dậy.”. Và cậu nói tiếp: “Rồi... ờ...”.\r\nThầy giáo mỉm cười, kiên nhẫn nghe Quang nói. Thầy bảo: “Thế là được rồi đấy!”.\r\nNhưng Quang chưa chịu về chỗ. Bỗng câu nói to: “Rồi sau đó... ờ... à...”. Quang thở mạnh một hơi rồi nói tiếp: “Mẹ... ờ... bảo: Con đánh răng đi. Thế là em đánh răng.”. Thầy giáo vỗ tay. Cả lớp vỗ tay theo. Cuối cùng, Quang nói với giọng rất tự tin: “Sau đó bố đưa em đi học.”.\r\nThầy giáo vỗ tay. Các bạn vỗ tay theo. Quang cũng vỗ tay. Cả lớp tràn ngập tiếng vỗ tay.",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_IMAGE1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var text = GetText("","");
Speak(text,"VN");
  return;
}
 );
var _2 = CreText('_2',83,167,31,26,"2",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickPlus();
  return;
}
 );
var lef_3 = CreText('lef_3',103,763,99,31,"Cuối cùng",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var rig_2 = CreText('rig_2',235,763,380,31,"em chuẩn bị đồng phục để đến trường.",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var obj_paint = CreText('obj_paint',91,625,540,180,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','rgba(255,255,255,0.00)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'#7f7f7f',0,1.50);
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
var gr0_3 = CreText('gr0_3',537,413,92,27,"mái tóc",'#ffffff','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
gr0_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUp3();
  return;
}
 );
var gr1_4 = CreText('gr1_4',513,452,92,27,"đen nhánh",'#ffffff','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
gr1_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUp3();
  return;
}
 );
Page_1.add(Page_1_Backrounnd,gr1,gr0,xxx1,Text_1,Text_2,xxx0,xxx2,xxx3,_3,_1,_4,Text_11,Text_12,Text_13,Text_28,Text_29,lef_0,lef_1,lef_2,msg,diem,Image_1,Text_3,Text_4,gr1_3,gr1_1,gr0_0,gr0_1,gr1_0,gr1_2,gr1_5,gr0_2,rig_1,rig_0,rig_3,abc_0,abc_1,abc_2,check_0,check_1,check_2,Text_5,_2,lef_3,rig_2,obj_paint,gr0_3,gr1_4);
stage.add(Page_1);
InitLacVietScript();
};
