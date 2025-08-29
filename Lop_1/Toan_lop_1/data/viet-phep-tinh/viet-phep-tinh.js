folder_Resource ='data/viet-phep-tinh';
var g_midiVol=32767;
var Play=0 ;
var b_showgroup=0;
var keyOldValue="";
var keyNewValue="";
var objectShowKey="";
var name_keyboard="Group_1";
function   GetKeyBoNumber(){
	keyNewValue = "_"+ GetText("",objectShowKey) + GetText("","");
	keyNewValue =rightStr(keyNewValue ,length(keyNewValue)-1);
	SetText("",objectShowKey,keyNewValue);
	InvalidateObj("",objectShowKey);
}
function   ShowKeyNum( namekey){
var x_to= GetLeft("","")+ GetWidth("","")- GetWidth("",namekey);
var y_to= GetTop("","")+ GetHeight("","");
if( y_to + GetHeight("",namekey) > GetTop("","footer"))
  y_to = GetTop("","") - GetHeight("",namekey);

MoveObjectTo("",namekey,x_to,y_to);
SetShowObject("",namekey,1);
InvalidateObj("",namekey);
keyOldValue= GetText("","");
objectShowKey= GetName("");
}

var m_limit=10;
var a_Kq=[0,0,0,0,0];
function TaoBai()
{
SetShowObject("","thong_bao_diem",0);
SetShowObject("","cham_diem",1);
//SetShowObject("","begin",0);
GetVer();
for(var i=0;i<6;i++)	
	{
		var a= Random(m_limit)+1;
		var b= Random(m_limit)+1;
		var phep= Random(2);
		var da=0;
		var text="";
		if(phep==0){ //+
			while(a+b>10)
			{
				a= Random(m_limit)+1;
				b= Random(m_limit)+1;
			}
			da=a+b;
			 var text = GetTextFromID("CONG_"+Random(5));
			text= replaceStr(text,"...",a, 0, 1);
			text= replaceStr(text,"...",b, 0, 1);
			a_Kq[i]=a+"+"+b+"="+da;
			}
		else //-
			{
			if(a<b){
			var ta=a;
			a=b;
			b=ta;
			}
			da=a-b;
			var text = GetTextFromID("TRU_"+Random(5));
			text= replaceStr(text,"...",a, 0, 1);
			text= replaceStr(text,"...",b, 0, 1);
			a_Kq[i]=a+"-"+b+"="+da;
			}
			SetText("","cau_"+i,text);
			SetText("","a"+i,"");
			SetText("","b"+i,"");
			SetText("","c"+i,"");
			SetText("","d"+i,"");
			SetText("","e"+i,"");
			SetFontColor("","a"+i,"#0000ff");
			SetFontColor("","b"+i,"#0000ff");
			SetFontColor("","c"+i,"#0000ff");
			SetFontColor("","d"+i,"#0000ff");
			SetFontColor("","e"+i,"#0000ff");
	}
  InvalidateObj("","");
}
function ChonSo(){
	ShowKeyNum(name_keyboard);
}
function Page_1()
{
PlaySound("ID_SOUND_HOME");
SetShowObject("","thong_bao_diem",0);
SetShowObject("","Group_1",0);
SetCursor("","Group_1","pointer");
TaoBai();
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
var Page1_Backrounnd = CreText('Page1_Backrounnd',0,0,640,480,'','#ffffe0','','','','ID_IMAGE8.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffe0','2','1','0','','0','0','0','0',0,0,'');
var cau_0 = CreText('cau_0',33,50,277,113,"Có ... cây kẹo\r\nĐã ăn hết ... cây kẹo\r\nCòn lại mấy cây kẹo?",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','top',3,'0.00','9','25',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'#c0c0c0',0,1.50);
var de_bai = CreText('de_bai',1,1,639,33,"Viết phép tính thích hợp:",'#005500','#ffffff','#ffff00','#ffffff','',20,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#00ff00','4','1','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var begin = CreText('begin',538,4,96,27,"Làm lại",'#ff6820','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','30','30',2,'#ffffff','#ff6820','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
begin.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TaoBai();
  return;
}
 );
var cham_diem = CreText('cham_diem',538,4,96,27,"Điểm",'#ff80ff','#ffffff','#ffffe0','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffe0','#ff00ff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cham_diem.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var m_diem=0;
for(var i=0; i< 6; i++)
		{
		var _a= GetText("","a"+i);
		var _b= GetText("","b"+i);
		var _c= GetText("","c"+i);
		var _d= GetText("","d"+i);
		var _e= GetText("","e"+i);
		var ex= _a+_b+_c+_d+_e;
    			if(a_Kq[i]== ex)
			{
		   	m_diem=m_diem+1;
			SetFontColor("","a"+i,"#00ff00");
			SetFontColor("","b"+i,"#00ff00");
			SetFontColor("","c"+i,"#00ff00");
			SetFontColor("","d"+i,"#00ff00");
			SetFontColor("","e"+i,"#00ff00");

			}
		else {			
			SetFontColor("","a"+i,"#ff0000");
			SetFontColor("","b"+i,"#ff0000");
			SetFontColor("","c"+i,"#ff0000");
			SetFontColor("","d"+i,"#ff0000");
			SetFontColor("","e"+i,"#ff0000");
			}		
	}
var diem = m_diem*10 / 6;
diem = ceil(diem);
SetText("","m_diem",diem+ " điểm.");
SetShowObject("","thong_bao_diem",1);
SetShowObject("","begin",1);
SetShowObject("","",0);
UpdateScore(diem);
InvalidateObj("","");
if(diem==10){
	 PlayWave("","","ID_SOUND_DUNG");
	}
else{
      PlayWave("","","ID_SOUND_SAI");
	}
  return;
}

 );
var a0 = CreText('a0',85,123,26,26,"1",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var b0 = CreText('b0',114,123,26,26,"1",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var c0 = CreText('c0',143,123,26,26,"1",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var d0 = CreText('d0',172,123,26,26,"1",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
d0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var e0 = CreText('e0',204,123,26,26,"1",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
e0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var cau_3 = CreText('cau_3',321,50,306,111,"Có ... quả bóng bay\r\nBị nổ hết ... quả bóng\r\nHỏi còn lại bao nhiêu quả bóng?",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','top',3,'0.00','9','25',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'#c0c0c0',0,1.50);
var a3 = CreText('a3',377,123,26,26,"1",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var b3 = CreText('b3',406,123,26,26,"1",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var c3 = CreText('c3',435,123,26,26,"1",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var d3 = CreText('d3',464,123,26,26,"1",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
d3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var e3 = CreText('e3',496,123,26,26,"1",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
e3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var cau_1 = CreText('cau_1',33,167,292,113,"Có ... cây kẹo\r\nĐã ăn hết ... cây kẹo\r\nCòn lại mấy cây kẹo?",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','top',3,'0.00','9','25',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'#c0c0c0',0,1.50);
var a1 = CreText('a1',89,240,26,26,"1",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var b1 = CreText('b1',118,240,26,26,"1",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var c1 = CreText('c1',147,240,26,26,"1",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var d1 = CreText('d1',176,240,26,26,"1",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
d1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var e1 = CreText('e1',208,240,26,26,"1",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
e1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var cau_4 = CreText('cau_4',321,167,306,111,"Có ... quả bóng bay\r\nBị nổ hết ... quả bóng\r\nHỏi còn lại bao nhiêu quả bóng?",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','top',3,'0.00','9','25',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'#c0c0c0',0,1.50);
var a4 = CreText('a4',369,240,26,26,"1",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var b4 = CreText('b4',398,240,26,26,"1",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var c4 = CreText('c4',427,240,26,26,"1",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var d4 = CreText('d4',456,240,26,26,"1",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
d4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var e4 = CreText('e4',488,240,26,26,"1",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
e4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var cau_2 = CreText('cau_2',33,299,292,113,"Có ... cây kẹo\r\nĐã ăn hết ... cây kẹo\r\nCòn lại mấy cây kẹo?",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','top',3,'0.00','9','25',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'#c0c0c0',0,1.50);
var a2 = CreText('a2',97,375,26,26,"1",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var b2 = CreText('b2',126,375,26,26,"1",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var c2 = CreText('c2',155,375,26,26,"1",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var d2 = CreText('d2',184,375,26,26,"1",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
d2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var e2 = CreText('e2',216,375,26,26,"1",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
e2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var cau_5 = CreText('cau_5',321,299,306,111,"Có ... quả bóng bay\r\nBị nổ hết ... quả bóng\r\nHỏi còn lại bao nhiêu quả bóng?",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','top',3,'0.00','9','25',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'#c0c0c0',0,1.50);
var a5 = CreText('a5',365,375,26,26,"1",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var b5 = CreText('b5',394,375,26,26,"1",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var c5 = CreText('c5',423,375,26,26,"1",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var d5 = CreText('d5',452,375,26,26,"1",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
d5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var e5 = CreText('e5',484,375,26,26,"1",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',18,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
e5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var footer = CreText('footer',-2,445,644,41,"https://gamechocon.com",'rgba(0,0,0,0)','#ffffff','#7f7f7f','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','1','0',1,'#ff0000','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_0 = CreText('bai_0',2,50,31,24,"a.",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Normal','center','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_1 = CreText('bai_1',2,167,31,24,"c.",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Normal','center','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_2 = CreText('bai_2',2,299,31,24,"e.",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Normal','center','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_3 = CreText('bai_3',292,50,31,24,"b.",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Normal','center','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_4 = CreText('bai_4',292,167,31,24,"d.",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Normal','center','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_5 = CreText('bai_5',292,299,31,24,"g.",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Normal','center','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bk_diem = CreText('bk_diem',440,51,223,244,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE1.PNG',36,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var m_diem = CreText('m_diem',440,47,187,64,"10 điểm",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var clear_one = CreText('clear_one',29,3,27,22,"←",'#ffc0cb','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffe4e1','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
clear_one.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
      keyNewValue = GetText("",objectShowKey);
	keyNewValue =leftStr(keyNewValue ,length(keyNewValue)-1);
	SetText("",objectShowKey,keyNewValue);
	InvalidateObj("",objectShowKey);
  return;
}
 );
var clear_all = CreText('clear_all',56,3,27,22,"C",'#ffc0cb','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffe4e1','3','1','rgba(0,0,0,0)','0','0','4','0',2,0, 'rgba(0,0,0,0)',0,1.50);
clear_all.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
      keyNewValue = "";
	SetText("",objectShowKey,"");
	InvalidateObj("",objectShowKey);;
  return;
}
 );
var dau_bang = CreText('dau_bang',29,91,27,22,"=",'#afeeee','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
dau_bang.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_be = CreText('dau_be',56,91,27,22,"-",'#afeeee','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','0','0',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
dau_be.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_lon = CreText('dau_lon',-2,91,31,22,"+",'#afeeee','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','0','0',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
dau_lon.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var ok = CreText('ok',38,114,45,22,"Đồng ý",'#98fb98','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#e0fee0','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
ok.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
var _0 = CreText('_0',-2,3,31,22,"0",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var huy = CreText('huy',-2,114,40,22,"Hủy",'#ffc0cb','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffe4e1','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
huy.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetText("",objectShowKey,keyOldValue);
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
var _9 = CreText('_9',56,69,27,22,"9",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',2,0, 'rgba(0,0,0,0)',0,1.50);
_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _8 = CreText('_8',29,69,27,22,"8",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _7 = CreText('_7',-2,69,31,22,"7",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _6 = CreText('_6',56,47,27,22,"6",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',2,0, 'rgba(0,0,0,0)',0,1.50);
_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _5 = CreText('_5',29,47,27,22,"5",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _4 = CreText('_4',-2,47,31,22,"4",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _3 = CreText('_3',56,25,27,22,"3",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',2,0, 'rgba(0,0,0,0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _2 = CreText('_2',29,25,27,22,"2",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _1 = CreText('_1',-2,25,31,22,"1",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var thong_bao_diem = new Kinetic.Group({name:'thong_bao_diem',x:0,y:0,width:227,height:252});
thong_bao_diem.add(bk_diem,m_diem);
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:89,height:137});
Group_1.add(_0,clear_one,clear_all,_1,_2,_3,_4,_5,_6,_9,_8,_7,dau_lon,dau_bang,dau_be,ok,huy);
Page_1.add(Page1_Backrounnd,cau_0,de_bai,begin,cham_diem,a0,b0,c0,d0,e0,cau_3,a3,b3,c3,d3,e3,cau_1,a1,b1,c1,d1,e1,cau_4,a4,b4,c4,d4,e4,cau_2,a2,b2,c2,d2,e2,cau_5,a5,b5,c5,d5,e5,footer,bai_0,bai_1,bai_2,bai_3,bai_4,bai_5,thong_bao_diem,Group_1);
stage.add(Page_1);
InitLacVietScript();
};
