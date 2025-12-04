folder_Resource ='/data/tim_hinh_khac_biet_nhat';
var DA=[3,3,4,4,1,3,2,4,1,4,2,4,4,1,4,1,2,2,4,3,4,2,1,4,1];
var k = 0;
function  InitGame()
{
	SetText("","m_diem",k);
	PlaySound("ID_SOUND_NEW");
	for(var i=1;i<5;i++)
	{
	var id=k+"_"+i;
	SetRsc("","img_"+i,id);
	}
	InvalidateObj("", "");
}
function  ClickObject()
{
var id = GetRsc("","");
if(DA[k]==rightStr(id,1))
{
k++;
PlaySound("ID_SOUND_TRUE");
UpdateScore(k);
if(k==25)
{
SetShowObject("","msg",1);
InvalidateObj("", "");
return;
}
InitGame();
}
else
PlaySound("ID_SOUND_FALSE");
  return;
}
function Page_1()
{
GetVer("callBackGetVer");
SetShowObject("","msg",0);

  return;
}
 window.callBackGetVer = function callBackGetVer(diem,_note)
{
	if (typeof diem !== "undefined") {
   k = diem;
}
	 InitGame();
	
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
 height: 480 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page1_Backrounnd = CreText('Page1_Backrounnd',0,0,640,480,'','#ffffff','','','','ID_IMAGE1.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','2','2','0','','0','0','0','0',0,0,'');
var Drawtext1 = CreText('Draw text 1',81,22,450,58,"Tìm hình khác biệt nhất",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',28,'Verdana','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','-1','3','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
Drawtext1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("Tìm hình khác biệt nhất","VN");
  return;
}
 );
var img_1 = CreText('img_1',34,167,102,102,'','rgba(0,0,0,0)','','','','1_1.GIF',0,'','','','',0,'0.00','32','32',2,'rgba(0,0,0,0)','','2','2','','0','0','4','1',0,0, '#808080');
img_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickObject();
}

 );
var img_4 = CreText('img_4',501,157,102,102,'','rgba(0,0,0,0)','','','','1_4.GIF',0,'','','','',0,'0.00','32','32',2,'rgba(0,0,0,0)','','2','2','','0','0','4','1',0,0, '#808080');
img_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickObject();
}


 );
var img_2 = CreText('img_2',190,186,102,102,'','rgba(0,0,0,0)','','','','1_2.GIF',0,'','','','',0,'0.00','32','32',2,'rgba(0,0,0,0)','','2','2','','0','0','4','1',0,0, '#808080');
img_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickObject();
}

 );
var img_3 = CreText('img_3',343,176,102,102,'','rgba(0,0,0,0)','','','','1_3.GIF',0,'','','','',0,'0.00','32','32',2,'rgba(0,0,0,0)','','2','2','','0','0','4','1',0,0, '#808080');
img_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickObject();
}

 );
var m_diem = CreText('m_diem',580,10,43,43,"1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',2,'0.00','0','0',2,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',13,297,627,81,"BẠN ĐÃ HOÀN THÀNH BÀI HỌC",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','#666666','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page1_Backrounnd,Drawtext1,img_1,img_4,img_2,img_3,m_diem,msg);
stage.add(Page_1);
InitLacVietScript();
};
