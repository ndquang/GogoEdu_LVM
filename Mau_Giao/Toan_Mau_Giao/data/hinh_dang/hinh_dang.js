folder_Resource ='data/hinh_dang';
var m_dem =0;
function ClickObjPage1(){
 var n = GetName("");
 if(RectInRect("","","hv")==1)
	{
		if(ShapeType("","")== ShapeType("","hv")){
			SetMoveView("","",0);
			m_dem++;
			PlaySound("ID_S_CLICK");
			}
		else MoveObjectTo("","",-1,-1,10,3);
	}
else if(RectInRect("","","ht")==1)
	{
		if(ShapeType("","")== ShapeType("","ht")){
			SetMoveView("","",0);
			m_dem++;
			PlaySound("ID_S_CLICK");
		}
		else MoveObjectTo("","",-1,-1,10,3);
	}
else {
	MoveObjectTo("","",-1,-1,10,3);
}
 if(m_dem==10){
	PlaySound("ID_S_BONGHOA");
	SetShowObject("","bong_hoa",1);
	MoveObjectTo("","bong_hoa",150,100,50,3,8);
	//UpdateScore(3);
		}
}
var aShape=["Circle","Rect","Triangula","Rect","Triangula"];
var aColor=["#ff0000","#00ff00","#0000ff","#00FFFF","#FF00FF","#800080","#FFFF00","#008080"];
function InitPage1(){
PlaySound("ID_S_BAI1");
m_dem=0;
for(var i=0;i<10;i++){
	var s = Random(2);
	ShapeType("","hinh_"+i,aShape[s]);
	var c = Random(8);
	SetColorEx("","hinh_"+i,aColor[c]);
	SetMoveView("","hinh_"+i,1);
	MoveObjectTo("","hinh_"+i,-1,-1,10,3);
	SetCursor("","hinh_"+i,"pointer");
}
m_dem=0;
MoveObjectTo("","bong_hoa",-1,-1,10,5,8);
SetShowObject("","bong_hoa",0);
InvalidateObj("","");
//GetVer();
}
//Page 2
var count2=0;
var m_type="Rect";

function InitPage2(){
m_dem=0;
count2=0;
for(var i=0;i<10;i++){
	var s = Random(5);
	if(aShape[s]== m_type) 
		count2++;
	ShapeType("","hinh_"+i,aShape[s]);
	var c = Random(8);
	SetText("","hinh_"+i,"");
	SetColorEx("","hinh_"+i,aColor[c]);
	MoveObjectTo("","hinh_"+i,-1,-1,10,3);	
}
MoveObjectTo("","bong_hoa",-1,-1,10,5,8);
SetShowObject("","bong_hoa",0);
InvalidateObj("","");
//GetVer();
if(count2==0) return false;
else return true;
}
function Click2(){
	if(GetText("","")!="")
	return; 
		if(ShapeType("","")== ShapeType("","hv")){
                  var le = GetLeft("","hv");
			var top = GetTop("","hv");
			var x = le + Random(GetWidth("","hv")-GetWidth("","")); 
			var y = top + Random(GetHeight("","hv")-GetHeight("","")); 
			MoveObjectTo("","",x,y,10,3,4);
			SetText("","","1");
			m_dem++;
			PlaySound("ID_S_DUNG");
		}
		else {
			MoveObjectTo("","",-1,-1,10,3,7);
			var k= Random(4);
			 PlaySound("ID_S_SAI_"+k);
			return;
			}
	
 if(m_dem==count2){
	PlaySound("ID_S_BONGHOA");
	SetShowObject("","bong_hoa",1);
	MoveObjectTo('','bong_hoa',150,100,50,3,2);
//	UpdateScore(6)
	}
}
// 
var countObj=0;
function InitPage3(){
m_dem=0;
for(var i=0;i<=countObj;i++){
	            var le = GetLeft("","hv");
		      var top = GetTop("","hv");
			var x = le + Random(GetWidth("","hv")-GetWidth("","")); 
			var y = top + Random(GetHeight("","hv")-GetHeight("","")); 
			MoveObjectTo("","hinh_"+i,x,y,10,3,1);
			SetText("","hinh_"+i,"");
			
}
MoveObjectTo("","bong_hoa",-1,-1,10,5,8);
SetShowObject("","bong_hoa",0);
//GetVer();
InvalidateObj("","");
}

function Click3()
{
if(GetText("","")!="")
	return;
MoveObjectTo("","",-1,-1,10,3,3);
SetText("","","1");
m_dem++;
if(m_dem>countObj){
	PlaySound("ID_S_BONGHOA");
	SetShowObject("","bong_hoa",1);
	MoveObjectTo("","bong_hoa",170,100,100,3,8);
//	UpdateScore(10)
	}

}
function Page_1()
{
PlayWave("","","ID_SOUND8");
  return;
}

function Page_2()
{
InitPage1();
  return;
}

function Page_3()
{
PlaySound("ID_S_CHON_HCN");
m_type="Rect";
var k= InitPage2();
while(k== false)
   k = InitPage2();
  return;
}

function Page_7()
{
PlaySound("ID_S_CHON_HTG");
m_type="Triangula";
var k= InitPage2();
while(k== false)
   k = InitPage2();
  return;
}

function Page_4()
{
PlaySound("ID_S_CAYTHONG");
countObj=6;
Delay("InitPage3();",2000);
  return;
}

function Page_5()
{
PlaySound("ID_S_XEP_BONG_HOA");
countObj=16;
Delay("InitPage3();",2000);
  return;
}

function Page_6()
{
PlaySound("ID_S_DOAN_TAU");
countObj=13;
Delay("InitPage3();",2000);
  return;
}


function Page_8()
{
PlaySound("ID_QUETINH_HCN");
countObj=7;
Delay("InitPage3();",2000);
  return;
}


function Page_9()
{
PlaySound("ID_S_QUETINH_HV");
countObj=7;
Delay("InitPage3();",2000);
  return;
}



function Page_10()
{
PlaySound("ID_HET_BAI");
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
 height: 480 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page1_Backrounnd = CreText('Page1_Backrounnd',0,0,640,480,'','#ffffff','','','','ID_IMAGE17.PNG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','2','2','0','','0','0','0','0',0,0,'');
Page_1.add(Page1_Backrounnd);
var Drawtext_1 = CreText('Draw text_1',89,111,500,155,"BÉ VUI HỌC TOÁN",'#00000000','#ffffff','#ff0000','#ffffff','',48,'Arial','Bold','center','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#ffffff','0','0','4','2',0,0,'#00000000',0,1.50);
Page_1.add(Drawtext_1);
var Image_1 = CreText('Image_1',267,244,83,81,'','#00000000','','','','ID_IMAGE2.PNG',0,'','','','',0,'0.00','30','30',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
Image_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
StopSound();
NextPage();
  return;
}
 );
Page_1.add(Image_1);
stage.add(Page_1);

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page2_Backrounnd = CreText('Page2_Backrounnd',0,0,640,480,'','#ffffff','','','','ID_IMAGE17.PNG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','2','2','0','','0','0','0','0',0,0,'');
Page_2.add(Page2_Backrounnd);
var hv = CreText('hv',16,9,314,291,"Hình Vuông",'#ffffff64','#ffffff','#000000','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','30','30',1,'#000000','#ffffff64','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_2.add(hv);
var ht = CreText('ht',343,10,291,291,"Hình Tròn",'#ffffff64','#ffffff','#000000','#ffffff','',36,'Arial','Bold','center','middle',2,'0.00','30','30',1,'#000000','#ffffff64','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_2.add(ht);
var hinh_0 = CreText('hinh_0',12,397,79,69,"",'#005500','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#005500','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObjPage1();
  return;
}
 );
Page_2.add(hinh_0);
var hinh_1 = CreText('hinh_1',115,397,79,69,"",'#005500','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#005500','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObjPage1();
  return;
}
 );
Page_2.add(hinh_1);
var hinh_2 = CreText('hinh_2',218,397,79,69,"",'#005500','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#005500','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObjPage1();
  return;
}
 );
Page_2.add(hinh_2);
var hinh_3 = CreText('hinh_3',321,397,79,69,"",'#005500','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#005500','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObjPage1();
  return;
}
 );
Page_2.add(hinh_3);
var hinh_4 = CreText('hinh_4',424,397,79,69,"",'#ffff00','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#ffff00','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObjPage1();
  return;
}
 );
Page_2.add(hinh_4);
var hinh_5 = CreText('hinh_5',12,320,79,69,"",'#005500','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#005500','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObjPage1();
  return;
}
 );
Page_2.add(hinh_5);
var hinh_6 = CreText('hinh_6',115,320,79,69,"",'#005500','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#005500','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObjPage1();
  return;
}
 );
Page_2.add(hinh_6);
var hinh_7 = CreText('hinh_7',218,320,79,69,"",'#005500','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#005500','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObjPage1();
  return;
}
 );
Page_2.add(hinh_7);
var hinh_8 = CreText('hinh_8',321,320,79,69,"",'#005500','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#005500','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObjPage1();
  return;
}
 );
Page_2.add(hinh_8);
var hinh_9 = CreText('hinh_9',424,320,79,69,"",'#005500','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#005500','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickObjPage1();
  return;
}
 );
Page_2.add(hinh_9);
var Tiep = CreText('Tiep',555,345,83,81,'','#00000000','','','','ID_IMAGE2.PNG',0,'','','','',0,'0.00','30','30',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
Tiep.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
StopSound();
NextPage();
  return;
}
 );
Page_2.add(Tiep);
var bong_hoa = CreText('bong_hoa',-227,105,173,181,"",'#ffffff','#ffffff','#ff0000','#ffffff','ID_IMAGE5.PNG',20,'Arial','Normal','center','bottom',0,'0.00','30','30',0,'#00000000','#000000','2','2','#ffffff','0','0','4','1',0,0, '#00000000',0,1.50);
bong_hoa.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitPage1();
  return;
}
 );
Page_2.add(bong_hoa);
stage.add(Page_2);

 var Page_3 = new Kinetic.Layer({name: 'Page_3',callback:'Page_3()'});
var Page3_Backrounnd = CreText('Page3_Backrounnd',0,0,640,480,'','#ffffff','','','','ID_IMAGE17.PNG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','2','2','0','','0','0','0','0',0,0,'');
Page_3.add(Page3_Backrounnd);
var hv = CreText('hv',132,95,385,215,"Hình Chữ Nhật",'#ffffff64','#ffffff','#000000','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','30','30',1,'#000000','#ffffff64','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_3.add(hv);
var hinh_0 = CreText('hinh_0',18,209,104,69,"",'#005500','#ffffff','#00000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#005500','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click2();
  return;
}
 );
Page_3.add(hinh_0);
var hinh_1 = CreText('hinh_1',529,122,100,69,"",'#005500','#ffffff','#00000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#005500','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click2();
  return;
}
 );
Page_3.add(hinh_1);
var hinh_2 = CreText('hinh_2',264,15,117,69,"",'#005500','#ffffff','#00000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#005500','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click2();
  return;
}
 );
Page_3.add(hinh_2);
var hinh_3 = CreText('hinh_3',131,17,117,69,"",'#005500','#ffffff','#00000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#005500','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click2();
  return;
}
 );
Page_3.add(hinh_3);
var hinh_4 = CreText('hinh_4',398,14,117,69,"",'#005500','#ffffff','#00000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#005500','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click2();
  return;
}
 );
Page_3.add(hinh_4);
var hinh_5 = CreText('hinh_5',18,109,104,69,"",'#005500','#ffffff','#00000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#005500','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click2();
  return;
}
 );
Page_3.add(hinh_5);
var hinh_6 = CreText('hinh_6',530,203,98,69,"",'#005500','#ffffff','#00000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#005500','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click2();
  return;
}
 );
Page_3.add(hinh_6);
var hinh_7 = CreText('hinh_7',133,328,117,69,"",'#005500','#ffffff','#00000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#005500','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click2();
  return;
}
 );
Page_3.add(hinh_7);
var hinh_8 = CreText('hinh_8',271,328,117,69,"",'#005500','#ffffff','#00000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#005500','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click2();
  return;
}
 );
Page_3.add(hinh_8);
var hinh_9 = CreText('hinh_9',399,328,117,69,"",'#005500','#ffffff','#00000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#005500','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click2();
  return;
}
 );
Page_3.add(hinh_9);
var Tiep = CreText('Tiep',540,377,83,81,'','#00000000','','','','ID_IMAGE2.PNG',0,'','','','',0,'0.00','30','30',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
Tiep.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
StopSound();
NextPage();
  return;
}
 );
Page_3.add(Tiep);
var bong_hoa = CreText('bong_hoa',-212,112,146,143,"",'#ffffff','#ffffff','#ffff00','#ffffff','ID_IMAGE7.PNG',20,'Arial','Normal','center','bottom',0,'0.00','30','30',0,'#00000000','#000000','2','2','#ffffff','0','0','4','1',0,0, '#00000000',0,1.50);
bong_hoa.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PlaySound("ID_S_CHON_HCN");
m_type="Rect";
var k= InitPage2();
while(k== false)
   k = InitPage2();
  return;
}
 );
Page_3.add(bong_hoa);
stage.add(Page_3);

 var Page_7 = new Kinetic.Layer({name: 'Page_7',callback:'Page_7()'});
var Page7_Backrounnd = CreText('Page7_Backrounnd',0,0,640,480,'','#ffffff','','','','ID_IMAGE17.PNG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','2','2','0','','0','0','0','0',0,0,'');
Page_7.add(Page7_Backrounnd);
var hv = CreText('hv',135,110,385,215,"Chọn hình tam giác",'#ffffff64','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','bottom',4,'0.00','50','0',1,'#000000','#ffffff64','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_7.add(hv);
var hinh_0 = CreText('hinh_0',21,224,104,69,"",'#005500','#ffffff','#00000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#005500','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click2();
  return;
}
 );
Page_7.add(hinh_0);
var hinh_1 = CreText('hinh_1',532,137,100,69,"",'#005500','#ffffff','#00000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#005500','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click2();
  return;
}
 );
Page_7.add(hinh_1);
var hinh_2 = CreText('hinh_2',267,30,117,69,"",'#005500','#ffffff','#00000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#005500','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click2();
  return;
}
 );
Page_7.add(hinh_2);
var hinh_3 = CreText('hinh_3',134,32,117,69,"",'#005500','#ffffff','#00000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#005500','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click2();
  return;
}
 );
Page_7.add(hinh_3);
var hinh_4 = CreText('hinh_4',401,29,117,69,"",'#005500','#ffffff','#00000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#005500','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click2();
  return;
}
 );
Page_7.add(hinh_4);
var hinh_5 = CreText('hinh_5',21,124,104,69,"",'#005500','#ffffff','#00000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#005500','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click2();
  return;
}
 );
Page_7.add(hinh_5);
var hinh_6 = CreText('hinh_6',533,218,98,69,"",'#005500','#ffffff','#00000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#005500','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click2();
  return;
}
 );
Page_7.add(hinh_6);
var hinh_7 = CreText('hinh_7',136,343,117,69,"",'#005500','#ffffff','#00000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#005500','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click2();
  return;
}
 );
Page_7.add(hinh_7);
var hinh_8 = CreText('hinh_8',274,343,117,69,"",'#005500','#ffffff','#00000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#005500','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click2();
  return;
}
 );
Page_7.add(hinh_8);
var hinh_9 = CreText('hinh_9',402,343,117,69,"",'#005500','#ffffff','#00000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#005500','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click2();
  return;
}
 );
Page_7.add(hinh_9);
var Tiep = CreText('Tiep',543,392,83,81,'','#00000000','','','','ID_IMAGE2.PNG',0,'','','','',0,'0.00','30','30',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
Tiep.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
StopSound();
NextPage();
  return;
}
 );
Page_7.add(Tiep);
var bong_hoa = CreText('bong_hoa',-163,97,155,159,"",'#ffffff','#ffffff','#ffff00','#ffffff','ID_IMAGE7.PNG',20,'Arial','Normal','center','bottom',0,'0.00','30','30',0,'#00000000','#000000','2','2','#ffffff','0','0','4','1',0,0, '#00000000',0,1.50);
bong_hoa.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PlaySound("ID_S_CHON_HTG");
m_type="Triangula";
var k= InitPage2();
while(k == false)
   k = InitPage2();
  return;
}
 );
Page_7.add(bong_hoa);
stage.add(Page_7);

 var Page_4 = new Kinetic.Layer({name: 'Page_4',callback:'Page_4()'});
var Page4_Backrounnd = CreText('Page4_Backrounnd',0,0,640,480,'','#ffffff','','','','ID_IMAGE17.PNG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','2','2','0','','0','0','0','0',0,0,'');
Page_4.add(Page4_Backrounnd);
var hv = CreText('hv',29,12,582,443,"Bé hãy xếp cây thông nào",'#00000000','#ffffff','#000000','#ffffff','',26,'Arial','Normal','center','top',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_4.add(hv);
var Drawtext_1 = CreText('Draw text_1',200,313,61,117,"",'#532900','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#00000000','#804000','4','1','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_4.add(Drawtext_1);
var hinh_0 = CreText('hinh_0',115,248,233,69,"",'#005500','#ffffff','#00000000','#ffffff','',16,'Arial','Normal','center','middle',4,'0.00','50','-41',1,'#ffffff','#005500','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_4.add(hinh_0);
var DrawText_1 = CreText('DrawText_1',417,352,61,78,"",'#532900','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#00000000','#804000','4','1','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_4.add(DrawText_1);
var hinh_1 = CreText('hinh_1',132,182,190,69,"",'#007d00','#ffffff','#00000000','#ffffff','',16,'Arial','Normal','center','middle',4,'0.00','50','-41',1,'#ffffff','#007d00','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_4.add(hinh_1);
var hinh_2 = CreText('hinh_2',159,113,132,69,"",'#00b000','#ffffff','#00000000','#ffffff','',16,'Arial','Normal','center','middle',4,'0.00','50','-41',1,'#ffffff','#00b000','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_4.add(hinh_2);
var hinh_3 = CreText('hinh_3',185,45,80,69,"",'#00ff00','#ffffff','#00000000','#ffffff','',16,'Arial','Normal','center','middle',4,'0.00','50','-41',1,'#ffffff','#00ff00','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_4.add(hinh_3);
var hinh_4 = CreText('hinh_4',354,282,190,69,"",'#005500','#ffffff','#00000000','#ffffff','',16,'Arial','Normal','center','middle',4,'0.00','50','-41',1,'#ffffff','#005500','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_4.add(hinh_4);
var hinh_5 = CreText('hinh_5',381,213,132,69,"",'#009300','#ffffff','#00000000','#ffffff','',16,'Arial','Normal','center','middle',4,'0.00','50','-41',1,'#ffffff','#009300','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_4.add(hinh_5);
var hinh_6 = CreText('hinh_6',407,145,80,69,"",'#00ff00','#ffffff','#00000000','#ffffff','',16,'Arial','Normal','center','middle',4,'0.00','50','-41',1,'#ffffff','#00ff00','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_4.add(hinh_6);
var Tiep = CreText('Tiep',549,392,83,81,'','#00000000','','','','ID_IMAGE2.PNG',0,'','','','',0,'0.00','30','30',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
Tiep.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
StopSound();
NextPage();
  return;
}
 );
Page_4.add(Tiep);
var bong_hoa = CreText('bong_hoa',-156,101,133,150,"",'#ffffff','#ffffff','#0000ff','#ffffff','ID_IMAGE9.PNG',20,'Arial','Normal','center','bottom',0,'0.00','30','30',0,'#00000000','#000000','2','2','#ffffff','0','0','4','1',0,0, '#00000000',0,1.50);
bong_hoa.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PlaySound("ID_S_CAYTHONG");
countObj=6;
InitPage3();
  return;
}
 );
Page_4.add(bong_hoa);
stage.add(Page_4);

 var Page_5 = new Kinetic.Layer({name: 'Page_5',callback:'Page_5()'});
var Page5_Backrounnd = CreText('Page5_Backrounnd',0,0,640,480,'','#ffffff','','','','ID_IMAGE17.PNG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','2','2','0','','0','0','0','0',0,0,'');
Page_5.add(Page5_Backrounnd);
var hv = CreText('hv',7,7,622,467,"Bé hãy xếp cây bông hoa nào",'#00000000','#ffffff','#000000','#ffffff','',26,'Arial','Normal','center','top',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_5.add(hv);
var hinh_0 = CreText('hinh_0',333,149,57,123,"",'#ff0000','#ffffff','#00000000','#000000','',16,'Arial','Normal','center','middle',4,'45.48','50','-74',1,'#ffffff','#ff0000','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_5.add(hinh_0);
var hinh_1 = CreText('hinh_1',357,224,34,122,"",'#009300','#ffffff','#00000000','#000000','',16,'Arial','Normal','center','middle',1,'-39.93','50','-46',1,'#00ff00','#009300','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_5.add(hinh_1);
var hinh_2 = CreText('hinh_2',438,138,34,122,"",'#009300','#ffffff','#00000000','#000000','',16,'Arial','Normal','center','middle',1,'-146.11','50','-46',1,'#00ff00','#009300','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_5.add(hinh_2);
var hinh_3 = CreText('hinh_3',102,227,34,122,"",'#009300','#ffffff','#00000000','#000000','',16,'Arial','Normal','center','middle',4,'147.17','50','-74',1,'#00ff00','#009300','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_5.add(hinh_3);
var hinh_4 = CreText('hinh_4',179,185,34,122,"",'#009300','#ffffff','#00000000','#000000','',16,'Arial','Normal','center','middle',4,'-146.11','50','-73',1,'#00ff00','#009300','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_5.add(hinh_4);
var Drawtext_1 = CreText('Draw text_1',151,229,12,186,"",'#005500','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#00000000','#005500','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_5.add(Drawtext_1);
var hinh_6 = CreText('hinh_6',176,127,70,70,"",'#ffff00','#ff6820','#00000000','#000000','',16,'Arial','Normal','center','middle',2,'0.00','30','30',4,'#ffad5b','#ffff00','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_5.add(hinh_6);
var hinh_7 = CreText('hinh_7',147,63,70,70,"",'#ffff00','#ff6820','#00000000','#000000','',16,'Arial','Normal','center','middle',2,'0.00','30','30',4,'#ffad5b','#ffff00','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_5.add(hinh_7);
var hinh_8 = CreText('hinh_8',77,63,70,70,"",'#ffff00','#ff6820','#00000000','#000000','',16,'Arial','Normal','center','middle',2,'0.00','30','30',4,'#ffad5b','#ffff00','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_5.add(hinh_8);
var hinh_9 = CreText('hinh_9',66,132,70,70,"",'#ffff00','#ff6820','#00000000','#000000','',16,'Arial','Normal','center','middle',2,'0.00','30','30',4,'#ffad5b','#ffff00','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_5.add(hinh_9);
var hinh_10 = CreText('hinh_10',124,168,70,70,"",'#ffff00','#ff6820','#00000000','#000000','',16,'Arial','Normal','center','middle',2,'0.00','30','30',4,'#ffad5b','#ffff00','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_5.add(hinh_10);
var hinh_11 = CreText('hinh_11',438,154,57,124,"",'#ff0000','#ffffff','#00000000','#000000','',16,'Arial','Normal','center','middle',4,'-32.85','50','-75',1,'#ffffff','#ff0000','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_5.add(hinh_11);
var hinh_12 = CreText('hinh_12',307,72,57,123,"",'#ff0000','#ffffff','#00000000','#000000','',16,'Arial','Normal','center','middle',4,'99.21','50','-74',1,'#ffffff','#ff0000','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_5.add(hinh_12);
var hinh_13 = CreText('hinh_13',482,94,57,123,"",'#ff0000','#ffffff','#00000000','#000000','',16,'Arial','Normal','center','middle',4,'-86.59','50','-73',1,'#ffffff','#ff0000','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_5.add(hinh_13);
var hinh_14 = CreText('hinh_14',358,13,57,123,"",'#ff0000','#ffffff','#00000000','#000000','',16,'Arial','Normal','center','middle',4,'157.96','50','-73',1,'#ffffff','#ff0000','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();  return;
}
 );
Page_5.add(hinh_14);
var hinh_15 = CreText('hinh_15',443,18,58,122,"",'#ff0000','#ffffff','#00000000','#000000','',16,'Arial','Normal','center','middle',4,'-142.07','50','-73',1,'#ffffff','#ff0000','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_5.add(hinh_15);
var DrawText_14 = CreText('DrawText_14',412,168,12,221,"",'#005500','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#00000000','#005500','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_5.add(DrawText_14);
var hinh_16 = CreText('hinh_16',388,115,63,65,"",'#ffff00','#ffffff','#00000000','#000000','',16,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#ffffff','#ffff00','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_5.add(hinh_16);
var Tiep = CreText('Tiep',555,397,83,81,'','#00000000','','','','ID_IMAGE2.PNG',0,'','','','',0,'0.00','30','30',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
Tiep.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
StopSound();
NextPage();
  return;
}
 );
Page_5.add(Tiep);
var hinh_5 = CreText('hinh_5',115,107,76,76,"",'#ff0000','#ffffff','#00000000','#000000','',16,'Arial','Normal','center','middle',2,'0.00','30','30',2,'#ffad5b','#ff0000','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_5.add(hinh_5);
var bong_hoa = CreText('bong_hoa',-167,106,139,136,"",'#ffffff','#ffffff','#ff0000','#ffffff','ID_IMAGE11.PNG',20,'Arial','Normal','center','bottom',0,'0.00','30','30',1,'#00000000','#000000','2','2','#ffffff','0','0','4','1',0,0, '#00000000',0,1.50);
bong_hoa.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PlaySound("ID_S_XEP_BONG_HOA");
countObj=16;
InitPage3();
  return;
}
 );
Page_5.add(bong_hoa);
stage.add(Page_5);

 var Page_6 = new Kinetic.Layer({name: 'Page_6',callback:'Page_6()'});
var Page6_Backrounnd = CreText('Page6_Backrounnd',0,0,640,480,'','#ffffff','','','','ID_IMAGE17.PNG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','2','2','0','','0','0','0','0',0,0,'');
Page_6.add(Page6_Backrounnd);
var hv = CreText('hv',14,2,622,467,"Bé hãy xếp đoàn tàu nào",'#00000000','#ffffff','#000000','#ffffff','',26,'Arial','Normal','center','top',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_6.add(hv);
var hinh_0 = CreText('hinh_0',549,341,48,48,"",'#000000','#ff6820','#00000000','#000000','',16,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#ffffff','#666666','3','1','#00000000','0','0','4','0',0,0, '#00000000',0,1.50);
hinh_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_6.add(hinh_0);
var hinh_1 = CreText('hinh_1',475,341,48,48,"",'#000000','#ff6820','#00000000','#000000','',16,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#ffffff','#666666','3','1','#00000000','0','0','4','0',0,0, '#00000000',0,1.50);
hinh_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_6.add(hinh_1);
var hinh_2 = CreText('hinh_2',408,343,48,48,"",'#000000','#ff6820','#00000000','#000000','',16,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#ffffff','#666666','3','1','#00000000','0','0','4','0',0,0, '#00000000',0,1.50);
hinh_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_6.add(hinh_2);
var hinh_3 = CreText('hinh_3',333,344,48,48,"",'#000000','#ff6820','#00000000','#000000','',16,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#ffffff','#666666','3','1','#00000000','0','0','4','0',0,0, '#00000000',0,1.50);
hinh_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_6.add(hinh_3);
var hinh_4 = CreText('hinh_4',258,343,48,48,"",'#000000','#ff6820','#00000000','#000000','',16,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#ffffff','#666666','3','1','#00000000','0','0','4','0',0,0, '#00000000',0,1.50);
hinh_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_6.add(hinh_4);
var hinh_5 = CreText('hinh_5',176,343,48,48,"",'#000000','#ff6820','#00000000','#000000','',16,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#ffffff','#666666','3','1','#00000000','0','0','4','0',0,0, '#00000000',0,1.50);
hinh_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_6.add(hinh_5);
var hinh_6 = CreText('hinh_6',102,343,48,48,"",'#000000','#ff6820','#00000000','#000000','',16,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#ffffff','#666666','3','1','#00000000','0','0','4','0',0,0, '#00000000',0,1.50);
hinh_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_6.add(hinh_6);
var hinh_7 = CreText('hinh_7',31,341,48,48,"",'#000000','#ff6820','#00000000','#000000','',16,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#ffffff','#666666','3','1','#00000000','0','0','4','0',0,0, '#00000000',0,1.50);
hinh_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_6.add(hinh_7);
var hinh_8 = CreText('hinh_8',33,256,22,62,"",'#666666','#ff6820','#00000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#00000000','#666666','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_6.add(hinh_8);
var hinh_9 = CreText('hinh_9',99,241,70,105,"",'#ff0000','#ff6820','#00000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',2,'#ffffff','#ff0000','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_6.add(hinh_9);
var hinh_10 = CreText('hinh_10',18,285,115,62,"",'#ff0000','#ff6820','#00000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#00000000','#ff0000','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_6.add(hinh_10);
var hinh_11 = CreText('hinh_11',470,285,139,62,"",'#ffff00','#ff6820','#00000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',4,'#ffffff','#ffff00','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_6.add(hinh_11);
var hinh_12 = CreText('hinh_12',327,285,132,62,"",'#0000ff','#ff6820','#00000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',4,'#ffffff','#0000ff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_6.add(hinh_12);
var hinh_13 = CreText('hinh_13',179,285,133,62,"",'#009300','#ff6820','#00000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',4,'#ffffff','#009300','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_6.add(hinh_13);
var Tiep = CreText('Tiep',549,395,83,81,'','#00000000','','','','ID_IMAGE2.PNG',0,'','','','',0,'0.00','30','30',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
Tiep.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
StopSound();
NextPage();
  return;
}
 );
Page_6.add(Tiep);
var bong_hoa = CreText('bong_hoa',-149,180,117,114,"",'#ffffff','#ffffff','#ff0000','#ffffff','ID_IMAGE11.PNG',20,'Arial','Normal','center','bottom',0,'0.00','30','30',1,'#00000000','#000000','2','2','#ffffff','0','0','4','1',0,0, '#00000000',0,1.50);
bong_hoa.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PlaySound("ID_S_DOAN_TAU");
countObj=13;
InitPage3();
  return;
}

 );
Page_6.add(bong_hoa);
stage.add(Page_6);

 var Page_8 = new Kinetic.Layer({name: 'Page_8',callback:'Page_8()'});
var Page8_Backrounnd = CreText('Page8_Backrounnd',0,0,640,480,'','#ffffff','','','','ID_IMAGE17.PNG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','2','2','0','','0','0','0','0',0,0,'');
Page_8.add(Page8_Backrounnd);
var hv = CreText('hv',12,15,622,467,"Bé hãy chọn que tính xếp hình chữ nhật.",'#00000000','#ffffff','#000000','#ffffff','',26,'Arial','Normal','center','top',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_8.add(hv);
var hcn_1 = CreText('hcn_1',62,143,201,105,"123",'#ffffff64','#ffffff','#00000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',5,'#ffffff','#ffffff64','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_8.add(hcn_1);
var hcn2 = CreText('hcn2',364,86,128,257,"123",'#ffffff64','#ffffff','#00000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',5,'#ffffff','#ffffff64','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_8.add(hcn2);
var hinh_0 = CreText('hinh_0',59,240,206,9,"",'#cc6600','#ff6820','#00000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#00000000','#cc6600','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_8.add(hinh_0);
var hinh_1 = CreText('hinh_1',59,141,206,9,"",'#cc6600','#ff6820','#00000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#00000000','#cc6600','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_8.add(hinh_1);
var hinh_2 = CreText('hinh_2',59,147,9,93,"",'#cc6600','#ff6820','#00000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#00000000','#cc6600','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_8.add(hinh_2);
var hinh_3 = CreText('hinh_3',255,147,9,93,"",'#cc6600','#ff6820','#00000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#00000000','#cc6600','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_8.add(hinh_3);
var hinh_4 = CreText('hinh_4',359,84,9,261,"",'#cc6600','#ff6820','#00000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#00000000','#cc6600','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_8.add(hinh_4);
var hinh_5 = CreText('hinh_5',487,84,9,261,"",'#cc6600','#ff6820','#00000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#00000000','#cc6600','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_8.add(hinh_5);
var hinh_6 = CreText('hinh_6',360,84,136,9,"",'#cc6600','#ff6820','#00000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#00000000','#cc6600','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_8.add(hinh_6);
var hinh_7 = CreText('hinh_7',360,336,136,9,"",'#cc6600','#ff6820','#00000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#00000000','#cc6600','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_8.add(hinh_7);
var Tiep = CreText('Tiep',551,398,83,81,'','#00000000','','','','ID_IMAGE2.PNG',0,'','','','',0,'0.00','30','30',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
Tiep.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
StopSound();
NextPage();
  return;
}
 );
Page_8.add(Tiep);
var bong_hoa = CreText('bong_hoa',-138,144,120,127,"",'#ffffff','#ffffff','#ff0000','#ffffff','ID_IMAGE15.PNG',20,'Arial','Normal','center','bottom',0,'0.00','30','30',0,'#00000000','#000000','2','2','#ffffff','0','0','4','1',0,0, '#00000000',0,1.50);
bong_hoa.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PlaySound("ID_QUETINH_HCN");
countObj=7;
Delay("InitPage3();",2000);
  return;
}

 );
Page_8.add(bong_hoa);
stage.add(Page_8);

 var Page_9 = new Kinetic.Layer({name: 'Page_9',callback:'Page_9()'});
var Page9_Backrounnd = CreText('Page9_Backrounnd',0,0,640,480,'','#ffffff','','','','ID_IMAGE17.PNG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','2','2','0','','0','0','0','0',0,0,'');
Page_9.add(Page9_Backrounnd);
var hv = CreText('hv',11,6,622,467,"Bé hãy chọn que tính xếp hình vuông.",'#00000000','#ffffff','#000000','#ffffff','',26,'Arial','Normal','center','top',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_9.add(hv);
var hcn_1 = CreText('hcn_1',109,134,105,105,"123",'#ffffff64','#ffffff','#00000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',5,'#ffffff','#ffffff64','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_9.add(hcn_1);
var hcn2 = CreText('hcn2',339,115,172,172,"123",'#ffffff64','#ffffff','#00000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',5,'#ffffff','#ffffff64','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Page_9.add(hcn2);
var hinh_0 = CreText('hinh_0',104,231,112,9,"",'#cc6600','#ff6820','#00000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#00000000','#cc6600','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_9.add(hinh_0);
var hinh_1 = CreText('hinh_1',104,130,112,9,"",'#cc6600','#ff6820','#00000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#00000000','#cc6600','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_9.add(hinh_1);
var hinh_2 = CreText('hinh_2',104,138,9,93,"",'#cc6600','#ff6820','#00000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#00000000','#cc6600','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_9.add(hinh_2);
var hinh_3 = CreText('hinh_3',207,138,9,93,"",'#cc6600','#ff6820','#00000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#00000000','#cc6600','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_9.add(hinh_3);
var hinh_4 = CreText('hinh_4',335,115,9,178,"",'#cc6600','#ff6820','#00000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#00000000','#cc6600','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_9.add(hinh_4);
var hinh_5 = CreText('hinh_5',505,110,9,184,"",'#cc6600','#ff6820','#00000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#00000000','#cc6600','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_9.add(hinh_5);
var hinh_6 = CreText('hinh_6',338,111,174,9,"",'#cc6600','#ff6820','#00000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#00000000','#cc6600','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_9.add(hinh_6);
var hinh_7 = CreText('hinh_7',337,284,174,9,"",'#cc6600','#ff6820','#00000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#00000000','#cc6600','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
hinh_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
Page_9.add(hinh_7);
var Tiep = CreText('Tiep',550,389,83,81,'','#00000000','','','','ID_IMAGE2.PNG',0,'','','','',0,'0.00','30','30',1,'#00000000','','2','2','','0','0','4','0',0,0, '#808080');
Tiep.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
StopSound();
NextPage();
  return;
}
 );
Page_9.add(Tiep);
var bong_hoa = CreText('bong_hoa',-141,188,120,127,"",'#ffffff','#ffffff','#ff0000','#ffffff','ID_IMAGE15.PNG',20,'Arial','Normal','center','bottom',0,'0.00','30','30',0,'#00000000','#000000','2','2','#00000000','0','0','4','1',0,0, '#00000000',0,1.50);
bong_hoa.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PlaySound("ID_S_QUETINH_HV");
countObj=7;
Delay("InitPage3();",2000);
  return;
}

 );
Page_9.add(bong_hoa);
stage.add(Page_9);

 var Page_10 = new Kinetic.Layer({name: 'Page_10',callback:'Page_10()'});
var Page10_Backrounnd = CreText('Page10_Backrounnd',0,0,640,480,'','#ffffff','','','','ID_IMAGE17.PNG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','2','2','0','','0','0','0','0',0,0,'');
Page_10.add(Page10_Backrounnd);
var Drawtext_3 = CreText('Draw text_3',182,301,284,40,"CHƠI LẠI TỪ ĐẦU NHÉ",'#00000000','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',3,'0.00','30','30',2,'#00000000','#ffff00','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Drawtext_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GoToPage("Page 1");
  return;
}

 );
Page_10.add(Drawtext_3);
var Drawtext_1 = CreText('Draw text_1',17,104,104,98,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE5.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#00000000','#000000','2','2','#00000000','0','0','4','0',0,0, '#00000000',0,1.50);
Page_10.add(Drawtext_1);
var DrawText_1 = CreText('DrawText_1',148,107,104,98,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE7.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#00000000','#000000','2','2','#00000000','0','0','4','0',0,0, '#00000000',0,1.50);
Page_10.add(DrawText_1);
var DrawText_2 = CreText('DrawText_2',279,102,104,98,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE9.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#00000000','#000000','2','2','#00000000','0','0','4','0',0,0, '#00000000',0,1.50);
Page_10.add(DrawText_2);
var DrawText_3 = CreText('DrawText_3',408,104,104,98,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE11.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#00000000','#000000','2','2','#00000000','0','0','4','0',0,0, '#00000000',0,1.50);
Page_10.add(DrawText_3);
var DrawText_4 = CreText('DrawText_4',526,97,104,98,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE15.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#00000000','#000000','2','2','#00000000','0','0','4','0',0,0, '#00000000',0,1.50);
Page_10.add(DrawText_4);
var Drawtext_2 = CreText('Draw text_2',296,256,46,44,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE4.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#00000000','#000000','2','2','#00000000','0','0','4','0',0,0, '#00000000',0,1.50);
Drawtext_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GoToPage("Page 1");
  return;
}
 );
Page_10.add(Drawtext_2);
var DrawText_5 = CreText('DrawText_5',180,13,284,40,"BÉ ĐƯỢC 5 BÔNG HOA",'#00000000','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',3,'0.00','30','30',2,'#00000000','#ffff00','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
DrawText_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GoToPage("Page 1");
  return;
}

 );
Page_10.add(DrawText_5);
stage.add(Page_10);
InitLacVietScript();
};
