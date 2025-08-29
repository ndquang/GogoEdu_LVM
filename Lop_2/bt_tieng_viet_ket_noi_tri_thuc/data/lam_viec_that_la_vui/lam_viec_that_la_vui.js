folder_Resource ='data/lam_viec_that_la_vui';
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
	
	// Bai 2
	var index = Random(24);
	for(var i=0;i<5;i++)
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
	SetMoveView("","img_"+i,1);
	MoveObjectTo("","img_"+i,-1,-1);
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
var right1 = rightStr(cur_name,1);
if(RectInRect("","box_"+right1,""))
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
		 _diem =_diem+ kq3;
	
	// bài 4
	for(var i=0;i<3;i++)
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
var Text_11 = CreText('Text_11',120,3,388,37,"LÀM VIỆC THẬT LÀ VUI",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_12 = CreText('Text_12',50,272,21,21,"2.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_13 = CreText('Text_13',77,267,519,28,"Điền chữ cái còn thiếu vào ô trống.(Theo thứ tự bảng chữ cái) (1đ)",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_28 = CreText('Text_28',53,49,21,21,"1.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_29 = CreText('Text_29',85,45,519,28,"Nối từ ngữ ở cột A với từ ngữ ở cột B, để tạo một câu giới thiệu. (3đ)\r\n",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var lef_0 = CreText('lef_0',97,120,104,31,"Con gà trống",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#00ccff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var lef_1 = CreText('lef_1',97,163,122,31,"Cành đào",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#00ccff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var lef_2 = CreText('lef_2',97,208,128,31,"Cái đồng hồ",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#00ccff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var so_0 = CreText('so_0',132,308,35,35,"1",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#0080ff','#00aeae','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so_1 = CreText('so_1',194,308,35,35,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#0080ff','#00aeae','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so_2 = CreText('so_2',256,308,35,35,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#0080ff','#00aeae','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so_3 = CreText('so_3',318,308,35,35,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#0080ff','#00aeae','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so_4 = CreText('so_4',380,308,35,35,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',2,'0.00','0','0',2,'#0080ff','#00aeae','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',48,370,21,21,"3.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_4 = CreText('Text_4',80,366,519,28,"Sắp sếp các cuốn sách sau đây theo thứ tự bảng chữ cái.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var img_0 = CreText('img_0',494,399,107,141,"mũ",'#ddffff','#ddffff','rgba(0,0,0,0)','#ffffff','ID_IMAGE2.JPEG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ddffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
img_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUp3();
  return;
}
 );
var img_2 = CreText('img_2',225,411,96,113,"cặp sách",'#ddffff','#ddffff','rgba(0,0,0,0)','#ffffff','ID_IMAGE4.JPEG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ddffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
img_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUp3();
  return;
}
 );
var img_3 = CreText('img_3',348,406,122,135,"đánh răng",'#ddffff','#ddffff','rgba(0,0,0,0)','#ffffff','ID_IMAGE5.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ddffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
img_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUp3();
  return;
}
 );
var img_1 = CreText('img_1',70,406,132,130,"chải đầu",'#ddffff','#ddffff','rgba(0,0,0,0)','#ffffff','ID_IMAGE3.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ddffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
img_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUp3();
  return;
}
 );
var rig_2 = CreText('rig_2',293,120,299,31,"tích tắc, tích tắc, báo phút báo giờ",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#00ccff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var rig_0 = CreText('rig_0',293,164,261,31,"gáy vang báo trời sắp sáng",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#00ccff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var rig_1 = CreText('rig_1',293,208,277,31,"nở hoa cho sắc xuân thêm rực rỡ",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#00ccff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_21 = CreText('Text_21',122,72,35,35,"A",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Bold','center','middle',2,'0.00','0','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_22 = CreText('Text_22',312,71,35,35,"B",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Bold','center','middle',2,'0.00','0','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var obj_paint = CreText('obj_paint',80,113,532,145,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','rgba(255,255,255,0.00)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'#7f7f7f',0,1.50);
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
var Text_5 = CreText('Text_5',552,14,59,54,"Làm việc thật là vui\r\nQuanh ta, mọi vật, mọi người đều làm việc.\r\nCái đồng hồ tích tắc, tích tắc, báo phút, báo giờ. Con gà trống gáy vang ò ó o, báo cho mọi người biết trời sắp sáng, mau mau thức dậy. Con tu hú kêu tu hú, tu hú. Thế là sắp đến mùa vải chín. Chim bắt sâu, bảo vệ mùa màng. Cành đào nở hoa cho sắc xuân thêm rực rỡ, ngày xuân thêm tưng bừng. Chim cú mèo chập tối đứng trong hốc cây rúc cú cú cũng làm việc có ích cho đồng ruộng.\r\nNhư mọi vật, mọi người, bé cũng làm việc. Bé làm bài. Bé đi học. Học xong, bé quét nhà, nhặt rau, chơi với em đỡ mẹ. Bé luôn luôn bận rộn mà lúc nào cũng vui.",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_IMAGE1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var text = GetText("","");
Speak(text,"VN");
  return;
}
 );
var box_0 = CreText('box_0',63,560,132,130,"mũ",'rgba(0,0,0,0)','#ddffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ddffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
box_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUp3();
  return;
}
 );
var box_2 = CreText('box_2',349,560,132,130,"cặp sách",'rgba(0,0,0,0)','#ddffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ddffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
box_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUp3();
  return;
}
 );
var box_3 = CreText('box_3',492,560,132,130,"đánh răng",'rgba(0,0,0,0)','#ddffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ddffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
box_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUp3();
  return;
}
 );
var box_1 = CreText('box_1',206,560,132,130,"chải đầu",'rgba(0,0,0,0)','#ddffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ddffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
box_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUp3();
  return;
}
 );
Page_1.add(Page_1_Backrounnd,Text_11,Text_12,Text_13,Text_28,Text_29,lef_0,lef_1,lef_2,msg,diem,Image_1,so_0,so_1,so_2,so_3,so_4,Text_3,Text_4,img_0,img_2,img_3,img_1,rig_2,rig_0,rig_1,Text_21,Text_22,obj_paint,Text_5,box_0,box_2,box_3,box_1);
stage.add(Page_1);
InitLacVietScript();
};
