folder_Resource ='/data/cuon_sach_cua_em';
var m_color="";
var obj_down="";
var obj_up="";
var _score = 0;
var _reply = 0;
var array_a=["✔","","","","","","✔"];
//
var array_input=["Tên sách được đặt ở giữa bìa sách","Tên tác giả đặt ở phía trên bìa sách","Xương rồng","Thông","Đước","25","Chúng tớ được sinh ra và lớn lên như thế nào?","Trần Diệu Linh","Giáo dục Việt Nam"];
var array_input_init=["Tên sách được đặt ở ...","Tên tác giả đặt ở ...","","","","","","",""];
// 
var  a_paint_obj=["a_0","a_a","b_1","b_b","c_2","c_c","d_3","d_d"];
var a_paint=[0,0,0,0];

var  a_drag_obj=["x_0","x_1","x_2","y_3","y_4"];
var a_drag=[0,0,0,0,0];


function MoveUp3()
{

if(GetMoveView("","")==0)
	return;
var cur_name = GetName("");
var left = leftStr(cur_name,1);
if((RectInRect("","x_x","") && left=="x") || (RectInRect("","y_y","") && left=="y"))
	{
	SetMoveView("","",0);
	var index = rightStr(cur_name,1);
	a_drag[index]=1;
	PlaySound("MOVE_OK");
	}

else 
	{
	     MoveObjectTo("","",-1,-1);
	     PlaySound("MOVE_ERROR");
	}
}


function  InitTracNghiem()
{

	// bai 3
	
	// paint
	for(var i=0;i<4;i++)
	{
	a_paint[i]=0;
	}
	SetColorEx("","obj_paint",-1);

	// drag
	for(i=0;i<5;i++)
	{
	a_drag[i]=0;
	SetMoveView("",a_drag_obj[i],1);
	MoveObjectTo("",a_drag_obj[i],-1,-1);
	}
	

	for(i=0;i<9;i++)
	{
	AllowEditText("","input_"+i,1);
	SetFontColor("","input_"+i,"#000000");
	SetText("","input_"+i,array_input_init[i]);
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
		if(PosInObj(a_paint_obj[i]))
		{
			b_e= true;
			 obj_down=a_paint_obj[i];	
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
		if(PosInObj(a_paint_obj[i]))
		{
			b_e= true;
			obj_up=a_paint_obj[i];
		}
		i++;
	}
	if(b_e== true && obj_down !=obj_up)
	{
		var _d = leftStr(obj_down,1);
		var _u = leftStr(obj_up,1);
		var _index = StringtoNumber(obj_down+obj_up);
		if(_d==_u && a_paint[_index ]==0)
			{
			SaveObject("","obj_paint");
			a_paint[_index]=1;
			PlaySound("MOVE_OK");
			return;
			}
	}
	PlaySound("MOVE_ERROR");

}
function ChamDiem()
{
	var  _diem =0;
	//paint	
	for(var i=0;i<4;i++)
	{
		if(a_paint[i]==1)
		{
		 _diem =_diem +0.5;
		}
	}
	
	for(i=0;i<6;i++)
	{
		if(a_drag[i]==1)
		{
		 _diem =_diem +0.5;
		}
	}

	// bai nhap text
	for(i=0;i<9;i++)
	{
	var txt = GetText("","input_"+i);
	if(toLowerCase(txt) == (array_input[i]))
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
 height: 1070 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,640,1070,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var Text_15 = CreText('Text_15',72,750,519,28,"b. Để tìm hiểu về cây xương rồng, em đọc trang ",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Image_3 = CreText('Image_3',408,606,141,137,'','rgba(0,0,0,0)','','','','ID_IMAGE6.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var Text_11 = CreText('Text_11',120,15,388,37,"CUỐN SÁCH CỦA EM",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_28 = CreText('Text_28',34,52,21,21,"1.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_29 = CreText('Text_29',61,48,668,28,"Nối từ ngữ ở cột A với nội dung thích hợp ở cột B",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var a_0 = CreText('a_0',83,122,182,31,"tên sách",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c_2 = CreText('c_2',83,208,182,31,"nhà xuất bản",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',1,1005,638,68,"Bạn chưa hoàn thành câu 4",'#c0ffff','#ffffff','#ff0000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#c0ffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var diem = CreText('diem',239,981,155,40,"Chấm Điểm",'#afeeee','#ffffff','#ff0000','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','3','0',1,'#000000','#c0ffff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var Text_3 = CreText('Text_3',34,487,21,21,"3.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_5 = CreText('Text_5',459,9,47,44,"CUỐN SÁCH CỦA EM\r\nMỗi cuốn sách có một tên gọi. Tên sách là hàng chữ lớn ở khoảng giữa bìa sách, thường chứa đựng rất nhiều ý nghĩa. Qua tên sách, em có thể biết được sách viết về điều gì.\r\nNgười viết cuốn sách được gọi là tác giả. Tên tác giả thường được ghi vào phía trên của bìa sách.\r\nNơi các cuốn sách ra đời được gọi là nhà xuất bản. Tên nhà xuất bản thường được ghi ở phía dưới bìa sách.\r\nPhần lớn các cuốn sách đều có mục lục thể hiện các mục chính và vị trí của chúng trong cuốn sách. Mục lục thường được đặt ở ngay sau trang bìa, cũng có khi được đặt ở cuối sách.\r\nMỗi lần đọc một cuốn sách mới, đừng quên những điều này em nhé.\r\n",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_IMAGE1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var text = GetText("","");
Speak(text,"VN");
  return;
}
 );
var b_1 = CreText('b_1',83,165,183,31,"tác giả",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c_c = CreText('c_c',302,121,262,31,"nơi cuốn sách ra đời",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var a_a = CreText('a_a',302,162,262,31,"thường chứa đựng nhiều ý nghĩa",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var b_b = CreText('b_b',301,204,262,31,"người viết sách báo",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Image_2 = CreText('Image_2',490,624,0,0,'','rgba(0,0,0,0)','','','','',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var Text_4 = CreText('Text_4',62,483,519,28,"Viết tiếp để hoàn thành câu",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var input_0 = CreText('input_0',89,517,493,26,"a. Tên sách được đặt ở ...",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#c0c0c0','rgba(230,230,250,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',114,73,36,36,"A",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Bold','center','middle',2,'0.00','0','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_6 = CreText('Text_6',382,73,36,36,"B",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Bold','center','middle',2,'0.00','0','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var d_3 = CreText('d_3',85,252,182,31,"mục lục",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var d_d = CreText('d_d',302,247,262,43,"thể hiện các mục đích và vị trí của chúng trong cuốn sách",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','5','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var obj_paint = CreText('obj_paint',45,104,547,196,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'#7f7f7f',0,1.50);
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
var abc_6 = CreText('abc_6',61,587,522,28,"Đọc mục lục ở tranh bên và điền thông tin vào chỗ trống.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var y_y = CreText('y_y',352,372,225,84,"Từ ngữ chỉ hoạt động",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',20,'Arial','Normal','center','middle',3,'0.00','3','75',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var x_x = CreText('x_x',93,373,237,81,"Từ ngữ chỉ người, chỉ vật",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',20,'Arial','Normal','center','middle',3,'0.00','3','75',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',34,308,21,21,"2.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_7 = CreText('Text_7',61,304,519,28,"Xếp các từ ngữ dưới đây vào nhóm thích hợp.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var y_3 = CreText('y_3',188,336,63,27,"ghi",'#ffffff','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
y_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUp3();
  return;
}
 );
var y_4 = CreText('y_4',264,336,90,27,"đọc sách",'#ffffff','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
y_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUp3();
  return;
}
 );
var x_0 = CreText('x_0',90,336,92,27,"tác giả",'#ffffff','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
x_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUp3();
  return;
}
 );
var x_2 = CreText('x_2',468,337,104,27,"cuốn sách",'#ffffff','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
x_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUp3();
  return;
}
 );
var x_1 = CreText('x_1',364,336,92,27,"bìa sách",'#ffffff','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
x_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveUp3();
  return;
}
 );
var input_1 = CreText('input_1',89,549,493,26,"b. Tên tác giả được đặt ở ...",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#c0c0c0','rgba(230,230,250,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_9 = CreText('Text_9',34,591,21,21,"4.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_10 = CreText('Text_10',72,618,519,28,"a. Phần 2 có những mục:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var input_3 = CreText('input_3',104,675,275,26,"b. Tên tác giả được đặt ở ...",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#c0c0c0','rgba(230,230,250,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var input_2 = CreText('input_2',104,644,275,26,"a. Tên sách được đặt ở ...",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#c0c0c0','rgba(230,230,250,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var input_4 = CreText('input_4',104,706,275,26,"b. Tên tác giả được đặt ở ...",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#c0c0c0','rgba(230,230,250,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var input_5 = CreText('input_5',439,751,52,26,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#c0c0c0','rgba(230,230,250,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_17 = CreText('Text_17',34,798,21,21,"5.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_18 = CreText('Text_18',61,794,522,28,"Dựa vào bìa sách sau, điền thông tin vào chỗ trống",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Image_4 = CreText('Image_4',476,784,151,206,'','rgba(0,0,0,0)','','','','ID_IMAGE7.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var Text_19 = CreText('Text_19',88,827,79,28,"Tên sách:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_20 = CreText('Text_20',67,890,95,28,"Tên tác giả:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_21 = CreText('Text_21',-14,931,171,28,"Tên nhà xuất bản:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var input_6 = CreText('input_6',175,834,293,45,"a. Tên sách được đặt ở ...",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',1,'#c0c0c0','rgba(230,230,250,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var input_7 = CreText('input_7',175,893,293,26,"a. Tên sách được đặt ở ...",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#c0c0c0','rgba(230,230,250,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var input_8 = CreText('input_8',174,934,293,26,"a. Tên sách được đặt ở ...",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#c0c0c0','rgba(230,230,250,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,Text_15,Image_3,Text_11,Text_28,Text_29,a_0,c_2,msg,diem,Image_1,Text_3,Text_5,b_1,c_c,a_a,b_b,Image_2,Text_4,input_0,Text_2,Text_6,d_3,d_d,obj_paint,abc_6,y_y,x_x,Text_1,Text_7,y_3,y_4,x_0,x_2,x_1,input_1,Text_9,Text_10,input_3,input_2,input_4,input_5,Text_17,Text_18,Image_4,Text_19,Text_20,Text_21,input_6,input_7,input_8);
stage.add(Page_1);
InitLacVietScript();
};
