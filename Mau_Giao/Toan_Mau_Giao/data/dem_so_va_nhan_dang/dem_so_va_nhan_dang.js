folder_Resource ='data/dem_so_va_nhan_dang';
var count=0;
var item=0;
var arrImage=["",""];
var arrText=["quả chuối","cà chua","chùm nho","quả ớt","quả xoài","xe ô tô","quả thơm","quả dâu tây","con dê","con cá","con hươu cao cổ","con bọ","con gấu","bông hoa","cái nơ","viên kẹo","quả bắp","củ cà rốt","tên lửa","chiếc máy bay"];
var dem=0;
var m_diem=0;
function  FinisMove( objBong)
{
	SetShowObject("","bong_"+objBong,0);
	
	if(dem==count){
		PlaySound("ID_SOUND_WIN");
		SetShowObject("","Group_1",1);
		m_diem++;
		UpdateScore(m_diem);
	}
}
function  ClickItem()
{
	if(GetText("","")==-1)
		return;
	if(GetText("","")==item)
	{
		PlaySound("ID_SOUND_TRUE");
		transitionTo("","",500,GetLeft("","bong_"+dem)+24,GetTop("","bong_"+dem)+24,1,360,1,0,"FinisMove("+dem+")");		
		SetText("","","-1");
		var xx =dem+1;
		SetText("","Text_so",xx);	
		SpeakVN("","",xx +" "+arrText[item]);
		dem++;
	}
	else{
	 PlaySound("ID_SOUND_SAI");
	}
}

function  CreateItem()
{
 count= Random(10)+1;
  var xt=  Random(20);
  while(xt==item)
		xt=  Random(20);
 item = xt;
 for(var i=0; i< count;i++)
 {
	arrImage[i]=item;
	SetColor("","bong_"+i,"","","","ID_BONG_"+item);
	SetShowObject("","bong_"+i,1);
}
 for(i=count; i< 16;i++)
  {
	var not_item = Random(20);
	while(not_item==item)
		not_item = Random(20);
	arrImage[i]=not_item;
	SetShowObject("","bong_"+i,0);
  }
 for(i=0; i< 20;i++)
	{
		var m= Random(15);
		var n= Random(15);
		var tam= arrImage[m];
		arrImage[m]=arrImage[n];
		arrImage[n]= tam;
	}
 for(i=0; i< 15;i++){
	SetColor("","hinh_"+i,"","","","ID_HINH_"+arrImage[i]);
	SetText("","hinh_"+i,arrImage[i]);
	MoveObjectTo("","hinh_"+i,-1,-1);
	RotateObj("","hinh_"+i,0);
	}
	dem=0;
	GetVer();
	SetText("","Text_so","");
	SetShowObject("","Group_1",0);
}
function Page_1()
{
CreateItem();
  return;
}
function Page_1_OnTimer()
{
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
 width: 720,
 height: 450 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,720,450,'','#00ff00','','','','ID_IMAGE1.PNG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#005500','2','2','0','','0','0','0','0',0,0,'');
var Text_5 = CreText('Text_5',30,328,661,66,"",'#d8b0ff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',8,'#8000ff','#d8b0ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_so = CreText('Text_so',286,43,147,121,"",'rgba(0,0,0,0)','#ffffff','#5edbff','#ffffff','',72,'Arial','Bold','center','middle',0,'0.00','0','0',8,'rgba(0,0,0,0)','#ffffe0','0','0','#0000ff','0','0','4','2',0,0,'rgba(0,0,0,0)',0,1.50);
var bong_9 = CreText('bong_9',617,337,48,48,"1",'#ffb0ff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_BONG_0.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffb0ff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
bong_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickItem();
  return;
}
 );
var bong_8 = CreText('bong_8',549,337,48,48,"1",'#ffb0ff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_BONG_0.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffb0ff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
bong_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickItem();
  return;
}
 );
var bong_7 = CreText('bong_7',486,337,48,48,"1",'#ffb0ff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_BONG_0.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffb0ff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
bong_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickItem();
  return;
}
 );
var bong_6 = CreText('bong_6',423,337,48,48,"1",'#ffb0ff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_BONG_0.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffb0ff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
bong_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickItem();
  return;
}
 );
var bong_5 = CreText('bong_5',360,337,48,48,"1",'#ffb0ff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_BONG_0.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffb0ff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
bong_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickItem();
  return;
}
 );
var bong_4 = CreText('bong_4',297,337,48,48,"1",'#ffb0ff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_BONG_0.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffb0ff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
bong_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickItem();
  return;
}
 );
var bong_3 = CreText('bong_3',234,337,48,48,"1",'#ffb0ff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_BONG_0.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffb0ff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
bong_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickItem();
  return;
}
 );
var bong_2 = CreText('bong_2',171,337,48,48,"1",'#ffb0ff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_BONG_0.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffb0ff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
bong_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickItem();
  return;
}
 );
var bong_1 = CreText('bong_1',108,337,48,48,"1",'#ffb0ff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_BONG_0.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffb0ff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
bong_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickItem();
  return;
}
 );
var bong_0 = CreText('bong_0',45,337,48,48,"1",'#ffb0ff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_BONG_0.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffb0ff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
bong_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickItem();
  return;
}
 );
var hinh_0 = CreText('hinh_0',355,185,48,48,"1",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_HINH_0.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
hinh_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickItem();
  return;
}
 );
var hinh_1 = CreText('hinh_1',211,87,48,48,"1",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_HINH_0.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
hinh_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickItem();
  return;
}
 );
var hinh_2 = CreText('hinh_2',558,267,48,48,"1",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_HINH_0.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
hinh_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickItem();
  return;
}
 );
var hinh_3 = CreText('hinh_3',200,227,48,48,"1",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_HINH_0.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
hinh_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickItem();
  return;
}
 );
var hinh_4 = CreText('hinh_4',422,153,48,48,"1",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_HINH_0.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
hinh_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickItem();
  return;
}
 );
var hinh_5 = CreText('hinh_5',505,98,48,48,"1",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_HINH_0.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
hinh_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickItem();
  return;
}
 );
var hinh_6 = CreText('hinh_6',129,97,48,48,"1",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_HINH_0.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
hinh_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickItem();
  return;
}
 );
var hinh_7 = CreText('hinh_7',37,136,48,48,"1",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_HINH_0.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
hinh_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickItem();
  return;
}
 );
var hinh_8 = CreText('hinh_8',214,161,48,48,"1",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_HINH_0.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
hinh_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickItem();
  return;
}
 );
var hinh_9 = CreText('hinh_9',71,235,48,48,"1",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_HINH_0.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
hinh_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickItem();
  return;
}
 );
var hinh_10 = CreText('hinh_10',332,262,48,48,"1",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_HINH_0.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
hinh_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickItem();
  return;
}
 );
var hinh_11 = CreText('hinh_11',658,121,48,48,"1",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_HINH_0.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
hinh_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickItem();
  return;
}
 );
var hinh_12 = CreText('hinh_12',498,193,48,48,"1",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_HINH_0.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
hinh_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickItem();
  return;
}
 );
var hinh_13 = CreText('hinh_13',451,258,48,48,"1",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_HINH_0.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
hinh_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickItem();
  return;
}
 );
var hinh_14 = CreText('hinh_14',590,138,48,48,"1",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_HINH_0.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
hinh_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickItem();
  return;
}
 );
var Text_3 = CreText('Text_3',233,164,264,143,"Đúng rồi.",'rgba(255,255,255,0.89)','#ffffff','#000000','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff8000','rgba(255,255,255,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',311,267,110,29,"Chơi Lại",'#ff8000','#ffffff','#000000','#ffffff','',16,'Arial','Bold','center','middle',11,'0.00','10','0',1,'#282828','#ffff00','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateItem();
  return;
}
 );
var Image_1 = CreText('Image_1',246,207,54,54,'','rgba(0,0,0,0)','','','','ID_HINH_13.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var Text_4 = CreText('Text_4',232,164,264,22,"game cho con",'#ff6820','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ff6820','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:269,height:147});
Group_1.add(Text_3,Image_1,Text_4,Text_2);
Page_1.add(Page_1_Backrounnd,Text_5,Text_so,bong_9,bong_8,bong_7,bong_6,bong_5,bong_4,bong_3,bong_2,bong_1,bong_0,hinh_0,hinh_1,hinh_2,hinh_3,hinh_4,hinh_5,hinh_6,hinh_7,hinh_8,hinh_9,hinh_10,hinh_11,hinh_12,hinh_13,hinh_14,Group_1);
stage.add(Page_1);
InitLacVietScript();
};
