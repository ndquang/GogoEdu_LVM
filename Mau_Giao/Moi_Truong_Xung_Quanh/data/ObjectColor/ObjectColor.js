folder_Resource ='data/ObjectColor';
var listColorVN="đen|xanh nước biển|nâu|xanh lá|cam|hồng|tím|đỏ|trắng|vàng";
var listColorEN="black|blue|brown|green|orange|pink|purple|red|white|yellow";
var listCount="5|6|3|4|5|3|4|2|4|3";
var la="VN";
var a_en="";
var a_vn="";
var iCount="";
var index=0;
var s_resurlt="";
var s_select="";
var bcheck =1;
var i_dem=0;
var i_cau_dung=0;
var b_finish=0;
/*
function InitGame()
{
	a_en = listColorEN.split("|");
	a_vn = listColorVN.split("|");
	iCount=listCount.split("|");
	lenword = a_en.length;
	if(la=="VN")
	SetText("","title","Đây là màu gì?");
	else SetText("","title","What color is this?");
	b_finish=0;
	bcheck=1;
	i_dem=0;
	i_cau_dung=0;
}
function NewItem()
{
	if(bcheck==1)
	{
		if(i_dem>=10){		
			UpdateScore(i_cau_dung);
			i_dem=0;
			if(la=="VN")
			SetText("","msg","Điểm: "+ i_cau_dung);
			else SetText("","msg","Scores: "+ i_cau_dung);
			SetFontColor("","msg","#00cc00");
			PlaySound("ID_S_TRUE");
			i_cau_dung=0;
			b_finish=1;
			SetShowObject("","msg",1);	
			return;
		}
		index= Random(lenword);
		var id_Image = a_en[index];
		SetRsc("","Image_1","ID_IMAGE_"+toUpperCase(id_Image)+Random(iCount[index]));
		var tem=  Random(lenword);
		while(tem==index)
			tem=  Random(lenword);
		
		k = Random(2);
		if(la=="VN")
		{
			if(k==1)
			{
			SetText("","r1",a_vn[index]);
			SetText("","r2",a_vn[tem]);
			}
			else
			{
			SetText("","r2",a_vn[index]);
			SetText("","r1",a_vn[tem]);
			}
			s_resurlt= a_vn[index];
		}
		else
		{
			if(k==1)
			{
			SetText("","r1",a_en[index]);
			SetText("","r2",a_en[tem]);
			}
			else
			{
			SetText("","r2",a_en[index]);
			SetText("","r1",a_en[tem]);
			}
			s_resurlt= a_en[index];
		}
		Spe();
		SetColorEx("","r1","#ffffff");
		SetColorEx("","r2","#ffffff");
		SetShowObject("","msg",0);		
		s_select="";
		bcheck=0;	
		i_dem++;
		if(i_dem==1)
		{
			GetVer();
			b_finish=0;
		}
		SetText("","cau",i_dem);
	}
}
function Spe()
{
	var str_sp= GetText("","title") + " " +GetText("","r1")+ ". " +  GetText("","r2");
	 Speak(str_sp,la);
}
function CheckItem()
{
	if(b_finish==1)
	{
		NewItem();
		return;
	}
	if(bcheck==0)
	{
		if(s_resurlt==s_select)
		{
			if(la=="VN")
			SetText("","msg","Đúng");
			else SetText("","msg","Well done!");
			SetFontColor("","msg","#00cc00");
			PlaySound("ID_S_TRUE");
			i_cau_dung++;
		}
		else
		{
			SetFontColor("","msg","#cc0000");
			if(la=="VN")
			SetText("","msg","Sai.");
			else SetText("","msg","Sorry, incorrect.");	
			PlaySound("ID_S_WRONG");		
		}
		SetShowObject("","msg",1);	
		bcheck=1;
		Delay("NewItem()",2000);
	}
}
function DownWork()
{
	SetColorEx("","r1","#ffffff");
	SetColorEx("","r2","#ffffff");
	SetColorEx("","","#66ffcc");
	s_select= GetText("","");
	InvalidateObj("", "");
}
*/
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
 width: 500,
 height: 300 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,500,300,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var title = CreText('title',55,1,345,37,"Hình phía dưới màu gì?",'rgba(0,0,0,0)','#ffffff','#32cd32','#ffffff','',22,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var r1 = CreText('r1',66,231,126,46,"black",'#ffffff','#ffffff','#000000','#ffffff','',26,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#00ffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
r1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DownWork();
  return;
}
 );
var r2 = CreText('r2',214,231,126,46,"white",'#ffffff','#ffffff','#000000','#ffffff','',26,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#00ffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
r2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DownWork();
  return;
}
 );
var Image_1 = CreText('Image_1',92,62,198,162,'','rgba(0,0,0,0)','','','','ID_IMAGE_BLACK0.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var ok = CreText('ok',361,148,121,41,"OK",'#80ff00','#ffffff','#000000','#ffffff','',22,'Arial','Bold','center','middle',3,'0.00','9','0',0,'rgba(0,0,0,0)','#80ff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
ok.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckItem();
  return;
}
 );
var Image_2 = CreText('Image_2',317,5,29,26,'','rgba(0,0,0,0)','','','','ID_IMAGE_SOUND.JPG',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
Image_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Spe();
  return;
}
 );
var lang = CreText('lang',438,2,58,32,"VN",'#008080','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#008080','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
lang.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if(la=="VN")
la="EN";
else la = "VN";
SetText("","",la);
InitGame();
NewItem();
  return;
}
 );
var msg = CreText('msg',42,38,323,40,"Đúng",'rgba(0,0,0,0)','#ffffff','#009300','#ffffff','',22,'Arial','Bold','center','middle',12,'0.00','2','2',1,'#009300','rgba(152,251,152,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau = CreText('cau',19,2,34,34,"1",'rgba(0,0,0,0)','#ffffff','#32cd32','#ffffff','',22,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(0,0,0,0)','rgba(255,255,128,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,title,r1,r2,Image_1,ok,Image_2,lang,msg,cau);
stage.add(Page_1);
InitLacVietScript();
};
