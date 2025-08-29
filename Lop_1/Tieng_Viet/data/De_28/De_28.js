folder_Resource ='data/De_28'
styteView = 'Ver';
var a_kq=["c","b","b","c"];
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
GetVer();
InvalidateObj("Trang_1","");
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
var aCau2=["Trời (đa) tối rồi","Muôn loài đi (ngu)","Chỉ có bông hồng","Cứ thơm thơm (mai)","Hoa có (ngu) không","Mà Thơm mê (mai)"];

var aCau3tu=["đa","ngu","","mai","ngu","mai"];
var aCau3Hoi=["đả","ngủ","","mải","ngủ","mải"];
var aCau3Nga=["đã","ngũ","","mãi","ngũ","mãi"];
var aCau2da=["đã","ngủ","","mãi","ngủ","mải"];
var aCau2tl=["","","",""];
function ClickHoiNga()
{
	var name = GetName("");
	var i= rightStr(name,1);
	if(aCau3tu[i]==""){
	SpeakVN("","");
		return;}
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
	SpeakVN("","");
	InvalidateObj("","");
}
function InitBai2()
{
for(var i=0;i<6;i++){
	SetText("Trang_3","cau2_"+i,aCau2[i]);
	SetFontColor("Trang_3","cau2_"+i,"#ffffff");
}
}
var aCau3=["Quả gấc nào mà …ín","Cũng gặp được mặt …ời","Quả khế …ắp bao cánh","Bay tới những vì sao.","Còn bưởi cam ngọt ngào","Là em vầng …ăng ấy","Có thêm cả trái thị","Cho đông đủ mùa thu."];
var aCau3da=["ch","tr","ch","","","tr","",""];
var aCau3tl=["","","","","",""];

function  InitBai3()
{
for(var s=0;s<8;s++)
	{
	   SetText("Trang_3","cau3_"+s,aCau3[s]);
	   SetFontColor("Trang_3","cau3_"+s,"#ffffff");
	}
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
	while(k<8 && !b_exit)
	{
		if(RectInRect("Trang_3",name,"cau2_"+k))
			{
				var wo= GetText("Trang_3","cau2_"+k);
				var idex=ThayTu(wo);
				var ss="";
				if(idex>=0){
				if(indexOf(wo,"...")==0)ss= replaceStr(wo,"...",toUpperCase(ch));
				else ss= replaceStr(wo,"...",ch);
				SetText("Trang_3","cau2_"+k,ss);
				aCau2tl[k]=ch;
				b_exit=true;
				Speak(ss,"VN");
				}
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
var noi_dung = CreText('noi_dung',28,126,588,189,"Thỏ Con, Dê Con và Lợn Con rủ nhau chơi cầu trượt. Lợn Con ụt ịt cười tít mắt, trượt bừa, làm Dê Con rơi xuống đất, Dê con lóp ngóp ngồi dậy, sờ tay lên đầu, kêu thất thanh:\r\n-	Tôi bị bươi đầu rồi\r\nLợn Con ân hận:\r\n-	Mình xin lỗi bạn.\r\nHôm sau Lợn Con và Chó Con mang một bó củ cải non đến thăm dê con. Tới nhà, chúng thấy Dê Con có cặp sừng mới nhú rất đẹp.\r\nÀ hóa ra Dê Con mọc sừng ! cả ba cùng reo và cười như nắc nẻ.\r\n",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,2.00);
var title = CreText('title',140,90,350,29,"Ba người bạn tốt",'rgba(0,0,0,0)','#ffffff','#00ffff','#ffffff','',18,'Arial','Bold','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_2 = CreText('DrawText_2',22,29,423,34,"A. KIỂM TRA ĐỌC\r\n",'rgba(0,0,0,0)','#ffffff','#ffad5b','#ffffff','',16,'Arial','','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Drawtext_2 = CreText('Draw text_2',31,60,289,26,"I. ĐỌC ĐÚNG MẪU CHUYỆN SAU:",'rgba(0,0,0,0)','#ffffff','#00ff00','#ccffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Drawtext_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var Drawtext_1 = CreText('Draw text_1',17,5,614,31,"ĐỀ ÔN THI KIỂM TRA CUỐI HỌC KỲ II MÔN TIẾNG VIỆT LỚP 1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ff0000','',18,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var Drawtext_7 = CreText('Draw text_7',450,270,190,21,"(theo NGUYỄN TIẾN CHIÊM)",'rgba(0,0,0,0)','#ffffff','#c0c0c0','#ffffff','',11,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Image_2 = CreText('Image_2',421,82,40,40,'','rgba(0,0,0,0)','','','','ID_IMAGE1.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
Image_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 var textSp = GetText("","title") + " \r\n "+   GetText("","noi_dung") ;
Speak(textSp,"VN");
  return;
}
 );
Trang_2.add(Trang_2_Backrounnd,noi_dung,title,DrawText_2,Drawtext_2,Drawtext_1,Drawtext_7,Image_2);
stage.add(Trang_2);

 var Trang_1 = new Kinetic.Layer({name: 'Trang_1',callback:'Trang_1()',x:0,y:300});
var Trang_1_Backrounnd = CreText('Trang_1_Backrounnd',0,0,640,450,'','#004040','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#004040','0','0','0','','0','0','0','0',0,0,'');
var Cau_hoi_0 = CreText('Cau_hoi_0',47,29,586,27,"1.Những từ ngữ nào miêu tả cảnh Lợn Con chơi cầu trượt?",'rgba(0,0,0,0)','#ffffff','#ffff00','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Cau_hoi_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var Cau_hoi_1 = CreText('Cau_hoi_1',47,118,586,27,"2. Tại sao Dê Con rơi xuống đất?",'rgba(0,0,0,0)','#ffffff','#ffff00','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Cau_hoi_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var Cau_hoi_2 = CreText('Cau_hoi_2',47,208,586,28,"3. Tại sao Dê Con kêu thất thanh?",'rgba(0,0,0,0)','#ffffff','#ffff00','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Cau_hoi_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var Cau_hoi_3 = CreText('Cau_hoi_3',47,302,586,27,"4. Sau hôm chơi cầu trượt, Lợn Con và Chó Con làm gì?",'rgba(0,0,0,0)','#ffffff','#ffff00','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Cau_hoi_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var a_0 = CreText('a_0',78,55,429,22,"a. Lóp ngóp bò dậy.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_0 = CreText('b_0',78,78,429,22,"b. Rủ Chó Con chơi cầu trượt.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_0 = CreText('c_0',77,99,429,22,"c. Ụt ịt cười hít mắt, trượt bừa, làm Dê Con bị rơi.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var a_1 = CreText('a_1',77,142,429,22,"a. Vì Dê Con trượt bừa.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_1 = CreText('b_1',76,164,429,22,"b. Vì Lợn Con trượt bừa.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_1 = CreText('c_1',77,185,429,22,"c. Vì nó không biết chơi cầu trượt.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var a_2 = CreText('a_2',77,233,429,22,"a. Vì Dê con lóp ngóp bò dậy.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_2 = CreText('b_2',77,255,429,22,"b. Vì Dê Con rờ lên đầu thấy cục u.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_2 = CreText('c_2',77,276,429,22,"c. Vì Dê Con rơi xuống đất đau quá.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var a_3 = CreText('a_3',77,329,429,22,"a. Đến nhà Dê Con xin lỗi Dê Con.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_3 = CreText('b_3',77,351,479,22,"b. Mang cỏ non, củ cải non đến cho Dê Con.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_3 = CreText('c_3',77,372,550,22,"c. Mang một bó củ cải non đến thăm Dê Con.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var check_0 = CreText('check_0',71,60,14,15,"c",'#ffffff','#ffffff','#005555','#005555','',12,'Arial','Bold','center','middle',2,'0.00','30','30',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_1 = CreText('check_1',71,171,14,15,"b",'#ffffff','#ffffff','#005555','#005555','',12,'Arial','Bold','center','middle',2,'0.00','30','30',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_2 = CreText('check_2',74,287,14,15,"b",'#ffffff','#ffffff','#005555','#005555','',12,'Arial','Bold','center','middle',2,'0.00','30','30',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_3 = CreText('check_3',75,339,14,15,"a",'#ffffff','#ffffff','#005555','#005555','',12,'Arial','Bold','center','middle',2,'0.00','30','30',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kiem_tra_viet = CreText('kiem_tra_viet',35,398,249,25,"B. KIỂM TRA VIẾT",'rgba(0,0,0,0)','#ffffff','#ff6820','#ffffff','',16,'Arial','','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var de_chinh_ta = CreText('de_chinh_ta',50,424,453,22,"1. Chép đúng chính tả đoạn thơ sau:",'rgba(0,0,0,0)','#ffffff','#ffff00','#ccffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
de_chinh_ta.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var quang3 = CreText('quang3',20,2,606,30,"II. CHỌN CHỮ CÁI TRƯỚC Ý TRẢ LỜI ĐÚNG CHO TỪNG CÂU HỎI SAU:\r\n",'rgba(0,0,0,0)','#ffffff','#00ff00','#ffffff','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
quang3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
Trang_1.add(Trang_1_Backrounnd,Cau_hoi_0,Cau_hoi_1,Cau_hoi_2,Cau_hoi_3,a_0,b_0,c_0,a_1,b_1,c_1,a_2,b_2,c_2,a_3,b_3,c_3,check_0,check_1,check_2,check_3,kiem_tra_viet,de_chinh_ta,quang3);
stage.add(Trang_1);

 var Trang_3 = new Kinetic.Layer({name: 'Trang_3',callback:'Trang_3()',x:0,y:750});
var Trang_3_Backrounnd = CreText('Trang_3_Backrounnd',0,0,640,480,'','#004040','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#004040','0','0','0','','0','0','0','0',0,0,'');
var chinh_ta = CreText('chinh_ta',69,6,212,99,"Ngọn lửa từ đâu ra\r\nBếp nhà ai cũng đỏ.\r\nLửa bao nhiêu tuổi rồi\r\nMà vẫn như còn nhỏ\r\nReo bập bùng trước gió\r\nNhư chơi trò ú tim.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.70);
chinh_ta.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var Drawtext_4 = CreText('Draw text_4',47,106,418,25,"2. Chữ trong dấu () là dấu   ?   hay dấu  ~.",'rgba(0,0,0,0)','#ffffff','#ffff00','#ccffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Drawtext_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("2. Chữ trong dấu ngoặc là dấu hỏi hay dấu ngã.","VN")
  return;
}
 );
var Drawtext_3 = CreText('Draw text_3',47,280,425,27,"3. Điền vào chỗ trống        hay        ?",'rgba(0,0,0,0)','#ffffff','#ffff00','#ccffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Drawtext_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("3. Điền vào chỗ trống chờ hay trờ","VN")
  return;
}
 );
var Drawtext_7 = CreText('Draw text_7',370,419,186,21,"(theo NGUYỄN ĐỨC QUANG)",'rgba(0,0,0,0)','#ffffff','#c0c0c0','#ffffff','',10,'Arial','Bold','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Drawtext_8 = CreText('Draw text_8',221,72,169,22,"(VŨ QUẦN PHƯƠNG)",'rgba(0,0,0,0)','#ffffff','#c0c0c0','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau3_0 = CreText('cau3_0',79,327,230,21,"Bầy chim ríu rít trên cành\r\n",'#004040','#004040','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cau3_1 = CreText('cau3_1',79,349,230,21,"",'#004040','#004040','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cau3_2 = CreText('cau3_2',79,371,230,21,"",'#004040','#004040','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cau3_3 = CreText('cau3_3',79,393,230,21,"",'#004040','#004040','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cau3_4 = CreText('cau3_4',330,327,230,21,"",'#004040','#004040','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cau3_5 = CreText('cau3_5',330,350,230,21,"Bầy chim ríu rít trên cành\r\n",'#004040','#004040','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var lam_lai = CreText('lam_lai',228,448,119,28,"Làm Lại",'#ff0000','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#ffffff','#ffe4e1','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitBaiHoc();
InitBai2();
InitBai3();
SetShowObject("Trang_3","begin",1);
SetShowObject("Trang_3","lam_lai",0);
SetShowObject("Trang_3","m_diem",0);
InvalidateObj("Trang_3","");
InvalidateObj("Trang_1","");
  return;
}
 );
var begin = CreText('begin',228,448,119,28,"Nộp Bài",'#ffffe0','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#ffffff','#ffff00','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
begin.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var sumDiem = CheckKq()+Check2()+Check3();
SetText("Trang_3","m_diem",sumDiem );
SetShowObject("Trang_3","begin",0);
SetShowObject("Trang_3","lam_lai",1);
SetShowObject("Trang_3","m_diem",1);
UpdateScore(sumDiem );
InvalidateObj("Trang_3","");
InvalidateObj("Trang_1","");
return;
}
 );
var cau2_0 = CreText('cau2_0',94,138,277,21,"Bầy chim ríu rít trên cành\r\n",'#004040','#004040','#ffffff','#ffffff','',12,'Arial','Normal','left','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cau2_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickHoiNga();
  return;
}
 );
cau2_0.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
ShowTip();
  return;
}
 );
cau2_0.on('mouseout ',function(evt)
{
m_pgObjCaller = this;
HideTip();
  return;
}
 );
var cau2_1 = CreText('cau2_1',94,160,277,21,"",'#004040','#004040','#ffffff','#ffffff','',12,'Arial','Normal','left','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cau2_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickHoiNga();
  return;
}
 );
cau2_1.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
ShowTip();
  return;
}
 );
cau2_1.on('mouseout ',function(evt)
{
m_pgObjCaller = this;
HideTip();
  return;
}
 );
var cau2_2 = CreText('cau2_2',94,182,277,21,"",'#004040','#004040','#ffffff','#ffffff','',12,'Arial','Normal','left','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cau2_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickHoiNga();
  return;
}
 );
cau2_2.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
ShowTip();
  return;
}
 );
cau2_2.on('mouseout ',function(evt)
{
m_pgObjCaller = this;
HideTip();
  return;
}
 );
var cau2_3 = CreText('cau2_3',94,206,277,21,"",'#004040','#004040','#ffffff','#ffffff','',12,'Arial','Normal','left','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cau2_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickHoiNga();
  return;
}
 );
cau2_3.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
ShowTip();
  return;
}
 );
cau2_3.on('mouseout ',function(evt)
{
m_pgObjCaller = this;
HideTip();
  return;
}
 );
var cau2_4 = CreText('cau2_4',94,228,277,21,"",'#004040','#004040','#ffffff','#ffffff','',12,'Arial','Normal','left','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cau2_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickHoiNga();
  return;
}
 );
cau2_4.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
ShowTip();
  return;
}
 );
cau2_4.on('mouseout ',function(evt)
{
m_pgObjCaller = this;
HideTip();
  return;
}
 );
var cau2_5 = CreText('cau2_5',94,253,277,21,"",'#004040','#004040','#ffffff','#ffffff','',12,'Arial','Normal','left','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cau2_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickHoiNga();
  return;
}
 );
cau2_5.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
ShowTip();
  return;
}
 );
cau2_5.on('mouseout ',function(evt)
{
m_pgObjCaller = this;
HideTip();
  return;
}
 );
var cau3_6 = CreText('cau3_6',330,373,230,21,"Bầy chim ríu rít trên cành\r\n",'#004040','#004040','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cau3_7 = CreText('cau3_7',330,395,230,21,"Bầy chim ríu rít trên cành\r\n",'#004040','#004040','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var quang1 = CreText('quang1',163,301,246,29,"Quả mùa thu",'rgba(0,0,0,0)','#ffffff','#00ffff','#ffffff','',18,'Arial','Bold','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_1 = CreText('DrawText_1',313,257,169,22,"(NGÔ QUÂN MIỆN)",'rgba(0,0,0,0)','#ffffff','#c0c0c0','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var obj_c = CreText('obj_c',192,282,26,21,"ch",'#004040','#004040','#ffff00','#ffff00','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj_c.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DropDown3();
  return;
}
 );
var obj_k = CreText('obj_k',249,282,26,21,"tr",'#004040','#004040','#ffff00','#ffff00','',12,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj_k.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DropDown3();
  return;
}
 );
Trang_3.add(Trang_3_Backrounnd,chinh_ta,Drawtext_4,Drawtext_3,Drawtext_7,Drawtext_8,cau3_0,cau3_1,cau3_2,cau3_3,m_diem,cau3_4,cau3_5,lam_lai,begin,cau2_0,cau2_1,cau2_2,cau2_3,cau2_4,cau2_5,cau3_6,cau3_7,quang1,DrawText_1,obj_c,obj_k);
stage.add(Trang_3);
InitLacVietScript();
};
