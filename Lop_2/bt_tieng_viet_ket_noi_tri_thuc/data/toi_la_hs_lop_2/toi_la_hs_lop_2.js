folder_Resource ='/data/toi_la_hs_lop_2';
var m_color="";
var obj_down="";
var obj_up="";
var _score = 0;
var _reply = 0;
var array_a=["✔","✔","✔","","","","✔","","✔",""];
var  array_b=["img_0","img_1","img_2","txt_0","txt_1","txt_2"];
var akq=[0,0,0];
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
	for(var i=0;i<10;i++)
	{
		SetText("","check_"+i,"");
		if(i<3)
		akq[i]=0;
		SetFontColor("","check_"+i,"#000000");
		SetFontColor("","abc"+i,"#000000");
	}
	SetText("","msg","");
	 _reply =0;
	SetColorEx("","obj_paint",-1);
	_score =GetVer();
	SetText("","diem","Chấm Điểm");
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
			}
	}
}
function ChamDiem()
{
	var  _diem =3;
	for(var i=0;i<10;i++)
	{
		var isCheck = GetText("","check_"+i);
		if(isCheck =="✔")
		{
		if(array_a[i]=="✔")
		{
		_diem++;
		SetFontColor("","check_"+i,"#3b8b26");
		}
		else 
			{
			SetFontColor("","check_"+i,"#FF0000");
			_diem--;
			}

		}
				if(array_a[i]=="✔" )
			    SetFontColor("","abc"+i,"#3b8b26");

	}
	if(_diem>_score)
	{
	_score = _diem;
	SetText("","msg","✅  Điểm của bạn: "+ _score);
	UpdateScore(_score);
	}
	else
	{
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
SetCursor("","obj_paint","pen");
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
var Text_1 = CreText('Text_1',77,48,519,58,"Những chi tiết nào trong bài cho thấy bạn nhỏ rất háo hức đến trường vào ngày khai giảng? (đánh dấu ✔ vào ô trống trước đáp án đúng)",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',45,47,21,21,"1.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var abc0 = CreText('abc0',127,88,140,21,"vùng dậy",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var abc1 = CreText('abc1',127,115,208,21,"muốn đến sớm nhất lớp",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var abc2 = CreText('abc2',127,142,208,21,"chuẩn bị rất nhanh",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var abc3 = CreText('abc3',127,171,208,21,"thấy mình bổng lớn lên",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_0 = CreText('check_0',99,92,21,21,"✔",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var check_1 = CreText('check_1',99,117,21,21,"✔",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var check_2 = CreText('check_2',99,142,21,21,"✔",'rgba(0,0,0,0)','#ffffff','#ff0000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var check_3 = CreText('check_3',99,168,21,21,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var Text_11 = CreText('Text_11',120,3,388,37,"TÔI LÀ HỌC SINH LỚP 2",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_12 = CreText('Text_12',45,201,21,21,"2.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_13 = CreText('Text_13',77,198,519,28,"Từ nào nói về các em lớp 1 trong ngày khai trường?",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var abc4 = CreText('abc4',127,225,140,21,"ngạc nhiên",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var abc5 = CreText('abc5',127,253,208,21,"háo hức",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var abc6 = CreText('abc6',127,281,208,21,"rụt rè",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_4 = CreText('check_4',99,229,21,21,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var check_5 = CreText('check_5',99,254,21,21,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var check_6 = CreText('check_6',99,279,21,21,"✔",'rgba(0,0,0,0)','#ffffff','#009300','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var Text_20 = CreText('Text_20',45,314,21,21,"3.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var abc7 = CreText('abc7',127,342,140,21,"một lúc sau",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var abc8 = CreText('abc8',127,370,208,21,"trong chớp mắt",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var abc9 = CreText('abc9',127,398,208,21,"chẳng bao lâu",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_7 = CreText('check_7',99,346,21,21,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var check_8 = CreText('check_8',99,371,21,21,"✔",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var check_9 = CreText('check_9',99,396,21,21,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var Text_27 = CreText('Text_27',77,311,519,28," Từ ngữ nào có thể thay thế cho “loáng một cái”?",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_28 = CreText('Text_28',45,427,21,21,"4.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_29 = CreText('Text_29',77,423,519,28,"Nối câu với tranh tương ứng.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var img_2 = CreText('img_2',398,459,238,100,'','rgba(0,0,0,0)','','','','ID_IMAGE3.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var txt_2 = CreText('txt_2',101,587,142,124,"Mùa hè em được chơi đá bóng thỏa thích cùng các bạn.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#00ccff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var txt_0 = CreText('txt_0',287,587,142,124,"Nghỉ hè em thích nhất được về quê cùng cả nhà.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#00ccff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var txt_1 = CreText('txt_1',474,587,142,124,"Em nhớ nhất là lúc được xây lâu đài cát trên bãi biển.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#00ccff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var img_0 = CreText('img_0',101,451,142,124,'','rgba(0,0,0,0)','','','','ID_IMAGE1.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var img_1 = CreText('img_1',255,451,142,124,'','rgba(0,0,0,0)','','','','ID_IMAGE2.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var obj_paint = CreText('obj_paint',100,439,520,274,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','rgba(255,255,255,0.00)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'#7f7f7f',0,1.50);
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
var msg = CreText('msg',71,757,525,65,"Bạn chưa hoàn thành câu 4",'rgba(0,0,0,0)','#ffffff','#ff0000','#ffffff','',16,'Arial','Normal','center','bottom',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var diem = CreText('diem',256,728,155,49,"Chấm Điểm",'#e6e6fa','#ffffff','#0080ff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','3','0',1,'#000000','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
diem.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if( _reply==0)
{
for(var k =0; k< 3; k++)
{
if(akq[k]==0)
{
SetText("","msg","⚠ Bạn chưa hoàn thành bài tập");
  InvalidateObj("","");
  return;
}
}
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
Page_1.add(Page_1_Backrounnd,Text_1,Text_2,abc0,abc1,abc2,abc3,check_0,check_1,check_2,check_3,Text_11,Text_12,Text_13,abc4,abc5,abc6,check_4,check_5,check_6,Text_20,abc7,abc8,abc9,check_7,check_8,check_9,Text_27,Text_28,Text_29,img_2,txt_2,txt_0,txt_1,img_0,img_1,obj_paint,msg,diem,Image_1);
stage.add(Page_1);
InitLacVietScript();
};
