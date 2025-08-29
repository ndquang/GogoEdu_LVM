folder_Resource ='data/Hinh_anh_doi_lap';
var str_en ="bad_good|black_white|cry_laugh|dark_light|dirty_clear|full_empty|glad_mad|hard_soft|here_there|last_first|long_short|low_hight|near_far|night_day|no_yes|old_new|on_off|outside_inside|push_pull|run_walk|sad_happy|small_large|stand_sit|under_over|wet_dry|young_old1|big_little";
var str_vn="xấu_tốt|đen_trắng|khóc_cười|tối_sáng|bẩn_sạch|đầy_rỗng|vui_buồn|cứng_mềm|ở đây_ở đó|sau_trước|dài_ngắn|thấp_cao|gần_xa|đêm_ngày|không_đồng ý|cũ_mới|bật_tắc|bên ngoài_bên trong|đẩy_kéo|chạy_đi|buồn_vui|nhỏ_to|đứng_ngồi|dưới_trên|ẩm ướt_khô ráo|trẻ_già|to lớn_nhỏ bé";
var a_en="";
var a_vn="";
var lenword=0;
var a_Item="";
var bcheck=0;
var objIn="";
var la="VN";
var c_check=0;
var c_true=0;

function InitGame()
{
	a_en = str_en.split("|");
	a_vn = str_vn.split("|");
	lenword = a_en.length;
	SetMoveView("","w1",1);
	SetMoveView("","w2",1);
	c_check=0;
	c_true=0;
	bcheck=2;
	GetVer();
}
function NewItem()
{
	if(bcheck==0)
		return;
	
	if(c_check==10){
		UpdateScore(c_true);
		SetFontColor("","msg","#00cc00");
		if(la=="VN")
		SetText("","msg","Kết quả: "+c_true+" điểm");
		else SetText("","msg","Result: "+c_true+" points");
		InitGame();
		SetShowObject("","msg",1);	
		return;
	}
	var index= Random(lenword);
	var str_Item= a_en[index];
	a_Item= str_Item.split("_");
	var k = Random(2);
	if(k==0)
	{
		var tem = a_Item[0] ;
		a_Item[0] = a_Item[1];
		a_Item[1] =  tem;
	}
	SetRsc("","i1","ID_IMAGE_"+toUpperCase(a_Item[0]));
	SetRsc("","i2","ID_IMAGE_"+toUpperCase(a_Item[1]));

	if(la=="VN"){
		str_Item= a_vn[index];
		a_Item= str_Item.split("_");
		if(k==0)
		{
		var tem = a_Item[0] ;
		a_Item[0] = a_Item[1];
		a_Item[1] =  tem;
		}
	}
	
	SetText("","b1",a_Item[0]);
	SetText("","b2",a_Item[1]);

 	k = Random(2);
	if(k==1){
		var tem = a_Item[0] ;
		a_Item[0] = a_Item[1];
		a_Item[1] =  tem;
	}
	SetText("","w1",a_Item[0]);
	SetText("","w2",a_Item[1]);
	c_check++;
	Spe();
	SetText("","r1","");
	SetText("","r2","");
	SetText("","cau",c_check);
	SetShowObject("","msg",0);
	MoveObjectTo("","w1",-1,-1);
	MoveObjectTo("","w2",-1,-1);
	objIn="";
	bcheck=0;	
}
function Spe()
{
	var str_sp= GetText("","w1")+ " " +  GetText("","w2");
	 Speak(str_sp,la);
}

function CheckItem()
{
	if(bcheck==2)
	{
		NewItem();
		return;
	}
	if(bcheck==0)
	{
		if(IntersectRect("","w1","b1"))
			SetText("","r1",GetText("","w1"));
		
		if(IntersectRect("","w2","b1"))
			SetText("","r1",GetText("","w2"));
		
		if(IntersectRect("","w1","b2"))
			SetText("","r2",GetText("","w1"));
		
		if(IntersectRect("","w2","b2"))
			SetText("","r2",GetText("","w2"));
		
		if(GetText("","r1")=="" || GetText("","r2")=="")
			return;
		
		if(GetText("","r1") == GetText("","b1") && GetText("","r2") == GetText("","b2"))
		{
			if(la=="VN")
			SetText("","msg","Đúng");
			else SetText("","msg","Well done!");
			SetFontColor("","msg","#00cc00");
			PlaySound("ID_S_TRUE");
			c_true++;
		}
		else
		{
			SetFontColor("","msg","#cc0000");
			if(la=="VN")
			SetText("","msg","Sai.");
			else SetText("","msg","Sorry, incorrect.");	
			PlaySound("ID_S_FALSE");		
		}
		SetShowObject("","msg",1);	
		bcheck=1;
		Delay("NewItem()",2000);	
	}
}

function DownWork()
{
	if(RectInRect("","","b1"))
	{
		SetText("","r1","");					
	}
	else if(RectInRect("","","b2"))
	{
		SetText("","r2","");
	}
}

function UpWork()
{
	var na= GetName();
	if(RectInRect("","","b1"))
	{
		var le= GetLeft("","r1");
		var top= GetTop("","r1");
		MoveObjectTo("","",le,top,200,2,0);
		if(GetText("","r1")!="")
			{
				if(objIn!=na)
				MoveObjectTo("",objIn,-1,-1,200,2,0);
			}
		SetText("","r1",GetText("",""));					
		objIn= na;
	}
	else if(RectInRect("","","b2"))
	{
		var le= GetLeft("","r2");
		var top= GetTop("","r2");
		MoveObjectTo("","",le,top,200,2,0);	
		if(GetText("","r2")!="")
			{
				if(objIn!=na)
				MoveObjectTo("",objIn,-1,-1,200,2,0);
			}	
		SetText("","r2",GetText("",""));
		objIn= na;
	}
	else {
		MoveObjectTo("","",-1,-1,200,2,0);
		objIn="";	
	}
	
}

function Page_1()
{
InitGame();
NewItem();
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
 width: 800,
 height: 450 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,800,450,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
var title = CreText('title',27,8,755,37,"Những hình ảnh cho thấy sự đối lập. Ghép từ phù hợp cho bức ảnh.",'rgba(0,0,0,0)','#ffffff','#32cd32','#ffffff','',22,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var sound = CreText('sound',618,61,29,27,'','rgba(0,0,0,0)','','','','ID_IMAGE_SOUND.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
sound.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Spe();
  return;
}
 );
var i2 = CreText('i2',433,109,219,203,'','rgba(0,0,0,0)','','','','ID_IMAGE_BLACK.JPG',0,'','','','',0,'0.00','0','0',0,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var i1 = CreText('i1',163,109,219,203,'','rgba(0,0,0,0)','','','','ID_IMAGE_WHITE.JPG',0,'','','','',0,'0.00','0','0',0,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var r1 = CreText('r1',210,322,126,46,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#00ffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var r2 = CreText('r2',478,322,126,46,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#00ffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var ok = CreText('ok',659,108,137,41,"OK",'#80ff00','#ffffff','#ffffff','#ffffff','',22,'Arial','Normal','center','middle',3,'0.00','9','0',0,'rgba(0,0,0,0)','#80ff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ok.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckItem();
}
 );
var lang = CreText('lang',662,407,135,39,"Tiếng Việt",'#8080ff','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',3,'0.00','5','0',0,'rgba(0,0,0,0)','#8080ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
lang.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if(la=="VN")
{
la="EN";
SetText("","","Tiếng Việt");
}
else 
{
la = "VN";
SetText("","","English");
}
 InitGame()
NewItem();
  return;
}
 );
var b1 = CreText('b1',162,108,219,278,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#00ffff','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var b2 = CreText('b2',433,108,219,278,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#00ffff','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var w1 = CreText('w1',251,51,126,46,"black",'#00ffff','#ffffff','#000000','#ffffff','',24,'Arial','Normal','center','middle',3,'0.00','5','0',0,'rgba(0,0,0,0)','#00ffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
w1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpWork();
  return;
}
 );
w1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownWork();
  return;
}
 );
var w2 = CreText('w2',433,52,126,46,"black",'#00ffff','#ffffff','#000000','#ffffff','',24,'Arial','Normal','center','middle',3,'0.00','5','0',0,'rgba(0,0,0,0)','#00ffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
w2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
UpWork();
  return;
}
 );
w2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownWork();
  return;
}
 );
var cau = CreText('cau',386,108,41,41,"1",'rgba(128,255,0,0.89)','#ffffff','#000000','#ffffff','',18,'Arial','Bold','center','middle',2,'0.00','0','0',0,'rgba(0,0,0,0)','rgba(128,255,0,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',280,206,290,58,"Đúng",'#ffffff','#ffffff','#009300','#ffffff','',28,'Arial','Bold','center','middle',12,'0.00','2','2',1,'#32cd32','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,title,sound,i2,i1,r1,r2,ok,lang,b1,b2,w1,w2,cau,msg);
stage.add(Page_1);
InitLacVietScript();
};
