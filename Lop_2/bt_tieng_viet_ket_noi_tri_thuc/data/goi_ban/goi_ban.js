folder_Resource ='/data/goi_ban';
var m_color="";
var obj_down="";
var obj_up="";
var _score = 0;
var _reply = 0;
var array_check=["✔","",""];
var array_input=["đi tìm cỏ","lang thang","","chạy","tìm","gọi","Mẹ gọi em dậy sớm học bài","Một ngày nọ, khi đang đứng bên bờ suối, bê vàng nghe thấy tiếng gọi “Bê! Bê!” quen thuộc. Bê vàng đi theo tiếng gọi đó và gặp được dê trắng. Hai người bạn gặp lại nhau vô cùng mừng rỡ. Kể từ đó, bê vàng và dê trắng không bao giờ xa nhau nữa."];

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
	if(tt ==""||tt==5)
		tt=1;
	else tt++;
	SetText("","",tt);
	PlaySound("MOVE_OK");
	InvalidateObj("","");
}

function  InitTracNghiem()
{
	for(var i=1;i<=5;i++)
	{
		SetText("","_"+i,"");
		SetFontColor("","_"+i,"#000000");
	}


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


function ChamDiem()
{
	var  _diem =0;
	for(var i=1;i<=5;i++)
	{
		if(GetText("","_"+i)==i)
		{
		_diem=_diem+0.5;
		SetFontColor("","_"+i,"#3b8b26");

		}
		else SetFontColor("","_"+i,"#ff0000");
	}

	var _dunghet = true;
	var chuachon = false;
	for(i=0;i<3;i++)
	{
		var isCheck = GetText("","check_"+i);
		if(isCheck=="✔")
			chuachon = true;
		if(array_check[i]==isCheck)
		{
 		SetFontColor("","check_"+i,"#3b8b26");
		    _diem =_diem +0.5;
		}
		else 
		{
		   SetFontColor("","check_"+i,"#FF0000");
		    _dunghet = false;
		}
		if(array_check[i]=="✔" )
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
		  _diem =_diem +1;
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
	UpdateScore(_score,GetText("","input_6"));
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
 height: 890 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,640,890,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var Text_20 = CreText('Text_20',103,454,197,28,"Bê vàng",'#afeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#808080','#afeeee','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_11 = CreText('Text_11',108,15,388,37,"GỌI BẠN",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_16 = CreText('Text_16',154,183,133,66,"Bê vàng đi tìm cỏ",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',1,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_15 = CreText('Text_15',465,109,133,66,"Đôi bạn sống bên nhau",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',1,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_14 = CreText('Text_14',244,108,133,66,"Bê vàng lạc đường",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',1,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_7 = CreText('Text_7',53,108,144,66,"Trời hạn hán, có héo khô",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',1,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_12 = CreText('Text_12',44,274,21,21,"2.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_13 = CreText('Text_13',71,274,547,35,"Đánh dấu vào ô trống trước các từ ngữ chỉ tình cảm của dê trắng dành cho bê vàng.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_28 = CreText('Text_28',44,584,21,21,"4.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_29 = CreText('Text_29',71,580,519,28,"Viết một câu có sử dụng từ ngữ vừa tìm được ở bài tập 3.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',2,825,636,66,"Bạn chưa hoàn thành câu 4",'#c0ffff','#ffffff','#ff0000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#c0ffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var diem = CreText('diem',240,801,155,40,"Chấm Điểm",'#afeeee','#ffffff','#ff0000','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','3','0',1,'#000000','#c0ffff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var abc_0 = CreText('abc_0',124,318,250,27,"lo lắng, thương, nhớ",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var abc_1 = CreText('abc_1',124,350,250,27,"quý mếm, lo lắng, giúp đỡ",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var abc_2 = CreText('abc_2',124,382,250,27,"che chở, chia sẻ, nhớ",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_0 = CreText('check_0',93,319,25,25,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var check_1 = CreText('check_1',93,350,25,25,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var check_2 = CreText('check_2',93,381,25,25,"",'#ffffff','#ffffff','#ff0000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickCheck();
  return;
}
 );
var Text_5 = CreText('Text_5',446,12,45,38,"Gọi bạn\r\nTự xa xưa thuở nào\r\nTrong rừng xanh sâu thẳm\r\nĐôi bạn sống bên nhau\r\nBê vàng và dê trắng.\r\n\r\nMột năm, trời hạn hán\r\nSuối cạn, cỏ héo khô\r\nLấy gì nuôi đôi bạn\r\nChờ mưa đến bao giờ?\r\n\r\nBê vàng đi tìm cỏ\r\nLang thang quên đường về\r\nDê trắng thương bạn quá\r\nChạy khắp nẻo tìm bê\r\n\r\nĐến bây giờ dê trắng\r\nVẫn gọi hoài: “Bê! Be!”.",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_IMAGE1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var text = GetText("","");
Speak(text,"VN");
  return;
}
 );
var input_0 = CreText('input_0',103,487,197,24,"Lớp học thoáng mát.",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#808080','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Image_2 = CreText('Image_2',490,624,0,0,'','rgba(0,0,0,0)','','','','',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var Text_2 = CreText('Text_2',44,65,21,21,"1.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_6 = CreText('Text_6',71,65,537,39,"Sắp xếp các sự việc dưới đây theo trình tự câu chuyện trong bài đọc. (đánh số 1, 2, 3, 4, 5 vào ô trống bên dưới)",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _3 = CreText('_3',199,234,38,24,"3",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',1,'0.00','0','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickPlus();
  return;
}
 );
var _4 = CreText('_4',297,162,38,24,"4",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',1,'0.00','0','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickPlus();
  return;
}
 );
var _2 = CreText('_2',98,162,38,24,"2",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',1,'0.00','0','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickPlus();
  return;
}
 );
var Text_8 = CreText('Text_8',71,412,579,49,"Viết lại những từ ngữ chỉ hoạt động của bê vàng và dê trắng trong khổ thơ cuối.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_9 = CreText('Text_9',44,416,21,21,"3.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var input_1 = CreText('input_1',103,516,197,24,"Lớp học nghiêm túc.",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#808080','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_17 = CreText('Text_17',353,183,133,66,"Dê trắng tìm bạn khắp nơi",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',1,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var input_2 = CreText('input_2',103,546,197,24,"Lớp học nghiêm túc.",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#808080','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var input_3 = CreText('input_3',346,485,197,24,"Lớp học thoáng mát.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#808080','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var input_4 = CreText('input_4',346,514,197,24,"Lớp học nghiêm túc.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#808080','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var input_5 = CreText('input_5',346,544,197,24,"Lớp học nghiêm túc.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#808080','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_21 = CreText('Text_21',346,454,197,28,"Dê trắng",'#afeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#808080','#afeeee','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var input_6 = CreText('input_6',105,615,445,24,"Lớp học nghiêm túc.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#808080','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',43,659,21,21,"5.",'rgba(0,0,0,0)','#ffffff','#0080ff','#0080ff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_4 = CreText('Text_4',70,655,569,28,"Viết 2 – 3 câu cho đoạn kết của câu chuyện trong bài thơ Gọi bạn theo ý của em.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var input_7 = CreText('input_7',101,689,482,96,"Lớp học nghiêm túc.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','top',0,'0.00','0','0',1,'#808080','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _5 = CreText('_5',398,235,38,24,"3",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',1,'0.00','0','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickPlus();
  return;
}
 );
var _1 = CreText('_1',510,161,38,24,"3",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',1,'0.00','0','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickPlus();
  return;
}
 );
Page_1.add(Page_1_Backrounnd,Text_20,Text_11,Text_16,Text_15,Text_14,Text_7,Text_12,Text_13,Text_28,Text_29,msg,diem,Image_1,abc_0,abc_1,abc_2,check_0,check_1,check_2,Text_5,input_0,Image_2,Text_2,Text_6,_3,_4,_2,Text_8,Text_9,input_1,Text_17,input_2,input_3,input_4,input_5,Text_21,input_6,Text_3,Text_4,input_7,_5,_1);
stage.add(Page_1);
InitLacVietScript();
};
