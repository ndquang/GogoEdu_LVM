folder_Resource ='data/De_26'
styteView = 'Ver';
var a_kq=["b","c","a","c"];
var a_tl=[0,0,0,0];
function InitBaiHoc(){
	for(var i=0;i<4;i++)
		{
		SetShowObject("Trang_1","check_"+i,0);
		SetFontColor("Trang_1","a_"+i,"#ffffff");
		SetFontColor("Trang_1","b_"+i,"#ffffff");
		SetFontColor("Trang_1","c_"+i,"#ffffff");
		SetText("Trang_1","check_"+i,"");
		a_tl[i]=0;
		}
SetShowObject("Trang_3","begin",1);
SetShowObject("Trang_3","m_diem",0);
SetShowObject("Trang_3","lam_lai",0);
InvalidateObj("Trang_1","");
GetVer();
}

function ChonTL(){
	var name= GetName("Trang_1");
	var t=  GetTop("Trang_1",name);
	var l=  GetLeft("Trang_1",name);
	var cau = rightStr(name,1);
	a_tl[cau]= leftStr(name,1);
	SetText("Trang_1","check_"+cau,a_tl[cau]);
	MoveObjectTo("Trang_1","check_"+cau,l-3,t+3);
	SetShowObject("Trang_1","check_"+cau,1);
	SpeakVN("","");
	InvalidateObj("Trang_1","");
}
function CheckKq(){
 var diem=0;
 for(var i=0;i<4;i++){
	if(a_tl[i]!=0){
	if(a_kq[i] != a_tl[i]){
		SetFontColor("Trang_1",a_kq[i]+"_"+i,"#00ff00");
		SetFontColor("Trang_1",a_tl[i]+"_"+i,"#ff0000");
	}
	else {
		SetFontColor("Trang_1",a_kq[i]+"_"+i,"#00ff00");
		diem=diem+0.5;
	     }
	}
}
	InvalidateObj("Trang_1","");
return diem;
}
var aCau2=["Đại Bàng …ộp được một con cáo con. Nó nghĩ:","Tổ của ta ở tít …ên cây tùng. Cáo không thể làm gì được.","Thế rồi nó cắp con cáo con đi. Cáo mẹ bằn chạy ra cánh đồng,"," lấy một thanh củi đang …áy dở của người tiều phu, tha về. Nó định đốt cháy cây tùng.","Đại bàng bèn phải lên tiếng van xin và mang cáo con …ả cho cáo mẹ."];
var aCau3tu=["đa","ngu","","mai","ngu","mai"];
var aCau3Hoi=["đả","ngủ","","mải","ngủ","mải"];
var aCau3Nga=["đã","ngũ","","mãi","ngũ","mãi"];
var aCau2da=["ch","tr","","ch","tr"];
var aCau2tl=["","","",""];
function ClickHoiNga()
{
	var name = GetName("");
	var i= rightStr(name,1);
	if(aCau3tu[i]==""){
		SpeakVN("","");
		return;
	}
	var tt= GetText("","");
	if(indexOf(tt, aCau3tu[i])>=0){
	  tt= replaceStr(tt,aCau3tu[i],aCau3Hoi[i]);
	  aCau2tl[i]=aCau3Hoi[i];
	}
	else if(indexOf(tt, aCau3Hoi[i])>=0)
	{
 	  tt= replaceStr(tt,aCau3Hoi[i],aCau3Nga[i]);
	  aCau2tl[i]=aCau3Nga[i];
	}
	else if(indexOf(tt, aCau3Nga[i])>=0)
	{
 	  tt= replaceStr(tt,aCau3Nga[i],aCau3tu[i]);
	  aCau2tl[i]=aCau3tu[i];
	}
	SetText("","",tt);
	InvalidateObj("","");
	SpeakVN("","");

}
function InitBai2()
{
for(var i=0;i<6;i++){
	SetText("Trang_3","cau2_"+i,aCau2[i]);
	SetFontColor("Trang_3","cau2_"+i,"#ffffff");
}
}
var aCau3=["Mặt trời lên","Chú …ượn đen","…én lá xanh","“Thú, thú, thú”","Khỉ mủi đỏ","…ậy vươn vai","Ngáy rõ …ài","Tắm cái đã."];
var aCau3da=["","v","v","","","d","d",""];
var aCau3tl=["","","","","",""];

/*var aVan0=["ao","áo","ào","ảo","õa","ạo"];
var aVan1=["au","úa","ùa","ảu","ãu","ạu"];
var aDau=["...",".´..",".`..",". ̉..",".˜..","..̣."];*/
function  InitBai3()
{
for(var s=0;s<8;s++)
	{
	   SetText("Trang_3","cau3_"+s,aCau3[s]);
	   SetFontColor("Trang_3","cau3_"+s,"#ffffff");
	}
InvalidateObj("Trang_3","");
}

function ClickBai2(){
}
function ShowTip(){
}
function HideTip(){
}
function ThayTu( source)
{
	if(indexOf(source,"...",0)>=0)
	   return 0;
	if(indexOf(source,".´..",0)>=0)
	   return 1;
	if(indexOf(source,".`..",0)>=0)
	   return 2;
	if(indexOf(source,". ̉..",0)>=0)
	   return 3;
	if(indexOf(source,".˜..",0)>=0)
	   return 4;
	if(indexOf(source,"..̣.",0)>=0)
	   return 5;
	else return -1;
}
function InitCur(){

SetMoveView("Trang_3","obj_ao",1);
SetMoveView("Trang_3","obj_au",1);
SetCursor("Trang_3","cham_diem","pointer");
SetCursor("Trang_3","lam_lai","pointer");
SetShowObject("Trang_3","m_diem",0);
SetShowObject("Trang_3","toolTip",0);
SetShowObject("Trang_3","lam_lai",0);

SetMoveView("Trang_3","obj_l",1);
SetMoveView("Trang_3","obj_n",1);
SetMoveView("Trang_3","obj_c",1);
SetMoveView("Trang_3","obj_k",1);
}
function  DropDown()
{
	var k=0;
	var b_exit= false;
	var name= GetName("");
	var ch= GetText("Trang_3","");
	while(k<5 && !b_exit)
	{
		if(RectInRect("Trang_3",name,"cau2_"+k))
			{
				var ss = GetText("Trang_3","cau2_"+k);
				var index= indexOf(ss,"…",0);
				while(index>=0)
				{
				if(index==0)
				ss= replaceStr(ss,"…", toUpperCase(ch));
				else if(index>0) ss= replaceStr(ss,"…",ch);
				index= indexOf(ss,"…",0);
				}
				SetText("Trang_3","cau2_"+k,ss);
				aCau2tl[k]=ch;
				b_exit=true;
				Speak(ss,"VN");
			}
		k++;
	}
	MoveObjectTo("","",-1,-1);
	InvalidateObj("","");
}
function Check2(){
var diem=0;
 for(var i=0;i<8;i++){
	if(aCau2da[i]!=""){
	if(aCau2da[i] == aCau2tl[i]){
		SetFontColor("Trang_3","cau2_"+i,"#00ff00");
		diem=diem+0.5;
	}
	else SetFontColor("Trang_3","cau2_"+i,"#ff0000");
	}
}
return diem;
}
function  DropDown3()
{
	var k=0;
	var b_exit= false;
	var name= GetName("");
	var ch= GetText("Trang_3","");
	while(k<8 && !b_exit)
	{
		if(RectInRect("Trang_3",name,"cau3_"+k))
			{
				var ss = GetText("Trang_3","cau3_"+k);
				var index= indexOf(ss,"…",0);
				while(index>=0)
				{
				if(index==0)
				ss= replaceStr(ss,"…", toUpperCase(ch));
				else if(index>0) ss= replaceStr(ss,"…",ch);
				index= indexOf(ss,"…",0);
				}
				SetText("Trang_3","cau3_"+k,ss);
				aCau3tl[k]=ch;
				b_exit=true;
				Speak(ss,"VN");
				}
				
		k++;
	}
	MoveObjectTo("","",-1,-1);
	InvalidateObj("","");
}
function Check3(){
var diem=0;
 for(var i=0;i<10;i++){
	if(aCau3da[i]!=""){
	if(aCau3da[i] == aCau3tl[i]){
		SetFontColor("Trang_3","cau3_"+i,"#00ff00");
		diem=diem+0.5;
	}
	else SetFontColor("Trang_3","cau3_"+i,"#ff0000");
	}
}
return diem;
}
	

function Trang_1()
{
InitBaiHoc();
  return;
}

function Trang_3()
{
InitBai2();
InitBai3();
InitCur();
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
 height: 1230 
 });

 var Trang_2 = new Kinetic.Layer({name: 'Trang_2',x:0,y:0});
var Trang_2_Backrounnd = CreText('Trang_2_Backrounnd',0,0,640,300,'','#004040','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#004040','0','0','0','','0','0','0','0',0,0,'');
var noi_dung = CreText('noi_dung',28,126,588,173,"Từ hôm nghỉ hè, Ly luôn nghe Ve Kim, nhạc sĩ của mùa hè dạo nhạc. Nhưng hai ngày qua, Ly cảm cúm, chẳng nghe tiếng đàn. Hôm nay hết bệnh, Ly vội chạy ra gốc phượng. Ly gọi:\r\n-	Ve Kim ơi ! sao bạn quên dạo nhạc ? Ly nhớ bạn lắm !\r\n-	Bạn hết đau rồi ư ? Mình lại đàn ca đây. Mình đâu có quên. Mình muốn giữ yên lặng để bạn nằm nghỉ cho nhanh hết bệnh !\r\n-	Rồi những nốt nhạc nhè nhẹ, vút cao dần. Bông phượng như đỏ thắm hơn lên, làm hồng cả đôi má bé Ly.\r\n",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,2.00);
var title = CreText('title',140,90,350,29,"Chú ve quên dạo nhạc",'rgba(0,0,0,0)','#ffffff','#00ffff','#ffffff','',18,'Arial','Bold','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_2 = CreText('DrawText_2',2,29,423,34,"A. KIỂM TRA ĐỌC\r\n",'rgba(0,0,0,0)','#ffffff','#ffad5b','#ffffff','',16,'Arial','','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Drawtext_2 = CreText('Draw text_2',31,60,289,26,"1. ĐỌC ĐÚNG MẪU CHUYỆN SAU:",'rgba(0,0,0,0)','#ffffff','#00ff00','#ccffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Drawtext_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var Drawtext_1 = CreText('Draw text_1',17,5,614,31,"ĐỀ ÔN THI KIỂM TRA CUỐI HỌC KỲ II MÔN TIẾNG VIỆT LỚP 1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ff0000','',18,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var Drawtext_7 = CreText('Draw text_7',419,257,204,21,"(theo PHONG THU)",'rgba(0,0,0,0)','#ffffff','#c0c0c0','#ffffff','',11,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_1 = CreText('DrawText_1',54,270,508,29,"----------------------------------------------------------------\r\n(1) Ve Kim : một loại ve mình nhỏ như chiếc kim",'rgba(0,0,0,0)','#ffffff','#c0c0c0','#ffffff','',11,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Drawtext_3 = CreText('Draw text_3',233,118,15,9,"(1)",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',8,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Image_2 = CreText('Image_2',444,81,40,40,'','rgba(0,0,0,0)','','','','ID_IMAGE1.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
Image_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 var textSp = GetText("","title") + " \r\n "+   GetText("","noi_dung") ;
Speak(textSp,"VN");
  return;
}
 );
Trang_2.add(Trang_2_Backrounnd,noi_dung,title,DrawText_2,Drawtext_2,Drawtext_1,Drawtext_7,DrawText_1,Drawtext_3,Image_2);
stage.add(Trang_2);

 var Trang_1 = new Kinetic.Layer({name: 'Trang_1',callback:'Trang_1()',x:0,y:300});
var Trang_1_Backrounnd = CreText('Trang_1_Backrounnd',0,0,640,450,'','#004040','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#004040','0','0','0','','0','0','0','0',0,0,'');
var Cau_hoi_0 = CreText('Cau_hoi_0',50,29,454,21,"1. Từ khi nghỉ hè, Ly thường nghe ai dạo nhạc?",'rgba(0,0,0,0)','#ffffff','#ffff00','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Cau_hoi_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var Cau_hoi_1 = CreText('Cau_hoi_1',50,118,454,21,"2. Khi khỏi bệnh, Ly hỏi Ve Kim điều gì? ",'rgba(0,0,0,0)','#ffffff','#ffff00','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Cau_hoi_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var Cau_hoi_2 = CreText('Cau_hoi_2',50,208,454,21,"3. Tại sao Ve Kim không dạo nhạc?",'rgba(0,0,0,0)','#ffffff','#ffff00','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Cau_hoi_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var Cau_hoi_3 = CreText('Cau_hoi_3',50,302,454,21,"4. Tiếng nhạc của Ve Kim khiến hoa phượng và Ly như thế nào?",'rgba(0,0,0,0)','#ffffff','#ffff00','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Cau_hoi_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var a_0 = CreText('a_0',80,51,429,22,"a. Ve Sầu.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_0 = CreText('b_0',80,74,429,22,"b. Ve Kim.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_0 = CreText('c_0',80,95,429,22,"c. Các nhạc sĩ.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var a_1 = CreText('a_1',80,138,429,22,"a. Ve Kim có khỏe không?",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_1 = CreText('b_1',79,160,429,22,"b. Ve Kim có nhớ Ly không?",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_1 = CreText('c_1',80,181,429,22,"c. Tại sao Ve Kim quên dạo nhạc?",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var a_2 = CreText('a_2',80,229,429,22,"a. Vì Ve Kim giữ yên lặng cho Ly nghỉ.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_2 = CreText('b_2',80,251,429,22,"b. Vì Ve Kim quên dạo nhạc.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_2 = CreText('c_2',80,272,429,22,"c. Vì Ve Kim bị cảm cúm.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var a_3 = CreText('a_3',80,325,429,22,"a. Chỉ làm cho bông phượng thắm đỏ.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_3 = CreText('b_3',80,347,429,22,"b. Chỉ làm cho đôi má Ly hồng lên.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_3 = CreText('c_3',80,368,429,22,"c. Làm cho bông phượng thêm đỏ, má Ly thêm hồng.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var check_0 = CreText('check_0',74,52,14,15,"c",'#ffffff','#ffffff','#005555','#005555','',12,'Arial','Bold','center','middle',2,'0.00','30','30',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_1 = CreText('check_1',74,163,14,15,"b",'#ffffff','#ffffff','#005555','#005555','',12,'Arial','Bold','center','middle',2,'0.00','30','30',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_2 = CreText('check_2',77,275,14,15,"b",'#ffffff','#ffffff','#005555','#005555','',12,'Arial','Bold','center','middle',2,'0.00','30','30',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_3 = CreText('check_3',78,327,14,15,"a",'#ffffff','#ffffff','#005555','#005555','',12,'Arial','Bold','center','middle',2,'0.00','30','30',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var quang3 = CreText('quang3',23,3,606,26,"2. CHỌN CHỮ CÁI TRƯỚC Ý TRẢ LỜI ĐÚNG CHO TỪNG CÂU HỎI SAU:\r\n",'rgba(0,0,0,0)','#ffffff','#00ff00','#ffffff','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
quang3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var kiem_tra_viet = CreText('kiem_tra_viet',4,394,249,25,"B. KIỂM TRA VIẾT",'rgba(0,0,0,0)','#ffffff','#ff6820','#ffffff','',16,'Arial','','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var de_chinh_ta = CreText('de_chinh_ta',54,422,453,25,"1. Chép đúng chính tả đoạn thơ sau:",'rgba(0,0,0,0)','#ffffff','#ffff00','#ccffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
de_chinh_ta.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
Trang_1.add(Trang_1_Backrounnd,Cau_hoi_0,Cau_hoi_1,Cau_hoi_2,Cau_hoi_3,a_0,b_0,c_0,a_1,b_1,c_1,a_2,b_2,c_2,a_3,b_3,c_3,check_0,check_1,check_2,check_3,quang3,kiem_tra_viet,de_chinh_ta);
stage.add(Trang_1);

 var Trang_3 = new Kinetic.Layer({name: 'Trang_3',callback:'Trang_3()',x:0,y:750});
var Trang_3_Backrounnd = CreText('Trang_3_Backrounnd',0,0,640,480,'','#004040','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#004040','0','0','0','','0','0','0','0',0,0,'');
var chinh_ta = CreText('chinh_ta',69,-1,173,79,"Cánh diều no gió\r\nSáo nó thổi vang\r\nSao trời trôi qua\r\nDiều thành trăng vàng.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.70);
chinh_ta.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var Drawtext_4 = CreText('Draw text_4',47,98,418,25,"2. Điền vào chỗ trống:        hay          ?",'rgba(0,0,0,0)','#ffffff','#ffff00','#ccffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Drawtext_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("2. Điền vào chỗ trống chờ hay trờ","VN");
  return;
}
 );
var Drawtext_3 = CreText('Draw text_3',47,280,425,27,"3. Điền vào chỗ trống        hay        ?",'rgba(0,0,0,0)','#ffffff','#ffff00','#ccffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Drawtext_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("3. Điền vào chỗ trống dờ hay vờ","VN");
  return;
}
 );
var Drawtext_7 = CreText('Draw text_7',306,401,186,21,"(theo TRƯƠNG VĨNH TUẤN)",'rgba(0,0,0,0)','#ffffff','#c0c0c0','#ffffff','',10,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Drawtext_8 = CreText('Draw text_8',221,72,169,22,"(thơ TRẦN ĐĂNG KHOA)",'rgba(0,0,0,0)','#ffffff','#c0c0c0','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau3_0 = CreText('cau3_0',79,311,152,21,"Bầy chim ríu rít trên cành\r\n",'#004040','#004040','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cau3_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickHoiNga();
  return;
}
 );
cau3_0.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
ShowTip();
  return;
}
 );
cau3_0.on('mouseout ',function(evt)
{
m_pgObjCaller = this;
HideTip();
  return;
}
 );
var cau3_1 = CreText('cau3_1',79,333,152,21,"",'#004040','#004040','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cau3_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickHoiNga();
  return;
}
 );
cau3_1.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
ShowTip();
  return;
}
 );
cau3_1.on('mouseout ',function(evt)
{
m_pgObjCaller = this;
HideTip();
  return;
}
 );
var cau3_2 = CreText('cau3_2',79,355,152,21,"",'#004040','#004040','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cau3_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickHoiNga();
  return;
}
 );
cau3_2.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
ShowTip();
  return;
}
 );
cau3_2.on('mouseout ',function(evt)
{
m_pgObjCaller = this;
HideTip();
  return;
}
 );
var cau3_3 = CreText('cau3_3',79,377,152,21,"",'#004040','#004040','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cau3_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickHoiNga();
  return;
}
 );
cau3_3.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
ShowTip();
  return;
}
 );
cau3_3.on('mouseout ',function(evt)
{
m_pgObjCaller = this;
HideTip();
  return;
}
 );
var m_diem = CreText('m_diem',504,103,115,114,"",'rgba(0,0,0,0)','#ffffff','#ff0000','#ffffff','',72,'Arial','','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau3_4 = CreText('cau3_4',236,311,152,21,"",'#004040','#004040','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cau3_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickHoiNga();
  return;
}
 );
cau3_4.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
ShowTip();
  return;
}
 );
cau3_4.on('mouseout ',function(evt)
{
m_pgObjCaller = this;
HideTip();
  return;
}
 );
var cau3_5 = CreText('cau3_5',236,334,152,21,"Bầy chim ríu rít trên cành\r\n",'#004040','#004040','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cau3_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickHoiNga();
  return;
}
 );
cau3_5.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
ShowTip();
  return;
}
 );
cau3_5.on('mouseout ',function(evt)
{
m_pgObjCaller = this;
HideTip();
  return;
}
 );
var lam_lai = CreText('lam_lai',235,425,119,28,"Làm Lại",'#ffffe0','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#ffffff','#ff0000','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitBaiHoc();
InitBai2();
InitBai3();
SetShowObject("Trang_3","begin",1);
SetShowObject("Trang_3","lam_lai",0);
InvalidateObj("Trang_3","");
InvalidateObj("Trang_1","");
  return;
}
 );
var begin = CreText('begin',235,425,119,28,"Nộp Bài",'#ffd700','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#ffffff','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
begin.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var sumDiem = CheckKq()+Check2()+Check3();
SetText("","m_diem",sumDiem );
SetShowObject("Trang_3","begin",0);
SetShowObject("Trang_3","lam_lai",1);
SetShowObject("Trang_3","m_diem",1);
InvalidateObj("Trang_3","");
InvalidateObj("Trang_1","");
UpdateScore(sumDiem );
return;
}
 );
var cau3_6 = CreText('cau3_6',236,357,152,21,"Bầy chim ríu rít trên cành\r\n",'#004040','#004040','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cau3_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickHoiNga();
  return;
}
 );
cau3_6.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
ShowTip();
  return;
}
 );
cau3_6.on('mouseout ',function(evt)
{
m_pgObjCaller = this;
HideTip();
  return;
}
 );
var cau3_7 = CreText('cau3_7',236,379,152,21,"Bầy chim ríu rít trên cành\r\n",'#004040','#004040','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cau3_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickHoiNga();
  return;
}
 );
cau3_7.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
ShowTip();
  return;
}
 );
cau3_7.on('mouseout ',function(evt)
{
m_pgObjCaller = this;
HideTip();
  return;
}
 );
var chinh_ta_1 = CreText('chinh_ta_1',252,-1,173,79,"Cánh diều no gió\r\nTiếng nó trong ngần\r\nDiều hay chiếc thuyền\r\nTrôi trên sông Ngân ?",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.70);
chinh_ta_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var cau2_0 = CreText('cau2_0',64,125,524,26,"Giang và Hằng ...ồi cùng bàn với Như.",'rgba(0,0,0,0)','#004040','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau2_1 = CreText('cau2_1',64,152,524,26,"Hai bạn ấy ...ịch ngợm,",'rgba(0,0,0,0)','#004040','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cau2_1.on('mouseout ',function(evt)
{
m_pgObjCaller = this;
HideTip();
  return;
}
 );
var cau2_2 = CreText('cau2_2',64,179,524,26,"",'rgba(0,0,0,0)','#004040','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cau2_2.on('mouseout ',function(evt)
{
m_pgObjCaller = this;
HideTip();
  return;
}
 );
var DrawText_1 = CreText('DrawText_1',358,260,169,22,"(theo LÉP TÔN XTÔI)",'rgba(0,0,0,0)','#ffffff','#c0c0c0','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau2_3 = CreText('cau2_3',64,206,524,26,"Mình chỉ có hai tai để ...e hai bạn nói. Nếu mình nói nữa lấy tai đâu mà nghe (?!)",'rgba(0,0,0,0)','#004040','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cau2_3.on('mouseout ',function(evt)
{
m_pgObjCaller = this;
HideTip();
  return;
}
 );
var cau2_4 = CreText('cau2_4',64,233,524,26,"Mình chỉ có hai tai để ...e hai bạn nói. Nếu mình nói nữa lấy tai đâu mà nghe (?!)",'rgba(0,0,0,0)','#004040','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cau2_4.on('mouseout ',function(evt)
{
m_pgObjCaller = this;
HideTip();
  return;
}
 );
var obj_l = CreText('obj_l',196,98,26,21,"ch",'#004040','#004040','#ffff00','#ffff00','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj_l.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DropDown();
  return;
}
 );
var obj_n = CreText('obj_n',252,98,26,21,"tr",'#004040','#004040','#ffff00','#ffff00','',12,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj_n.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DropDown();
  return;
}
 );
var obj_c = CreText('obj_c',192,282,26,21,"d",'#004040','#004040','#ffff00','#ffff00','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj_c.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DropDown3();
  return;
}
 );
var obj_k = CreText('obj_k',249,282,26,21,"v",'#004040','#004040','#ffff00','#ffff00','',12,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj_k.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DropDown3();
  return;
}
 );
var DrawText_2 = CreText('DrawText_2',21,449,593,29,"----------------------------------------------------------------\r\n(2) Cây Tùng : loại cây cùng họ với cây thông",'rgba(0,0,0,0)','#ffffff','#c0c0c0','#ffffff','',11,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Trang_3.add(Trang_3_Backrounnd,chinh_ta,Drawtext_4,Drawtext_3,Drawtext_7,Drawtext_8,cau3_0,cau3_1,cau3_2,cau3_3,m_diem,cau3_4,cau3_5,lam_lai,begin,cau3_6,cau3_7,chinh_ta_1,cau2_0,cau2_1,cau2_2,DrawText_1,cau2_3,cau2_4,obj_l,obj_n,obj_c,obj_k,DrawText_2);
stage.add(Trang_3);
InitLacVietScript();
};
