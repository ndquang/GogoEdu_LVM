folder_Resource ='data/De_27'
styteView = 'Ver';
var a_kq=["b","c","c","a"];
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
SetShowObject("Trang_1","begin",1);
SetShowObject("Trang_1","m_diem",0);
SetShowObject("Trang_1","lam_lai",0);
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
	if(a_kq[i] != a_tl[i]){
		SetFontColor("Trang_1",a_kq[i]+"_"+i,"#00ff00");
		SetFontColor("Trang_1",a_tl[i]+"_"+i,"#ff0000");
	}
	else diem=diem+0.5;
}
	return diem;
}
var aCau2=["Áo ...âu và áo tím","...úc thụt vào nhô ra","...àng cua trong bờ cỏ","Mỗi con xây một nhà","Tưởng mình ...à hiệp sĩ","Xách gươm đi dọc đồng."];
var aCau2da=["n","l","l","","l",""];
var aCau2tl=["","","","","",""];
function InitBai2()
{
for(var i=0;i<6;i++){
	SetText("Trang_3","cau2_"+i,aCau2[i]);
	SetFontColor("Trang_3","cau2_"+i,"#ffffff");
}
}
var aCau3=["Bầy chim ríu rít trên cành","S.´.. nâu tập nói, vàng anh tập ch.`..","Quả c... rời khỏi cây cao","Rủ lá trầu v.`.. mừng tuổi bà em"];
var aVan0=["ao","áo","ào","ảo","õa","ạo"];
var aVan1=["au","úa","ùa","ảu","ãu","ạu"];
var aDau=["...",".´..",".`..",". ̉..",".˜..","..̣."];
function  InitBai3()
{
for(var s=0;s<4;s++)
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
SetMoveView("Trang_3","obj_l",1);
SetMoveView("Trang_3","obj_n",1);
SetMoveView("Trang_3","obj_ao",1);
SetMoveView("Trang_3","obj_au",1);
SetCursor("Trang_3","cham_diem","pointer");
SetCursor("Trang_3","lam_lai","pointer");
SetShowObject("Trang_3","m_diem",0);
SetShowObject("Trang_3","toolTip",0);
SetShowObject("Trang_3","lam_lai",0);
}
function  DropDown()
{
	var k=0;
	var b_exit= false;
	var name= GetName("");
	var ch= GetText("Trang_3","");
	while(k<6 && !b_exit)
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
				}
			}
		k++;
	}
	MoveObjectTo("","",-1,-1);
	InvalidateObj("","");
}
function Check2(){
var diem=0;
 for(var i=0;i<6;i++){
	if(aCau2da[i]!=""){
	if(aCau2da[i] == aCau2tl[i]){
		SetFontColor("Trang_3","cau2_"+i,"#00ff00");
		diem=diem+1;
	}
	else SetFontColor("Trang_3","cau2_"+i,"#ff0000");
	}
}
return diem;
}
var aCau3tl=["","","","","",""];
var aCau3da=["","ao","au","ao","",""];
function  DropDown3()
{
	var k=0;
	var b_exit= false;
	var ch= GetText("","");
	while(k<4 && !b_exit)
	{
		if(RectInRect("Trang_3","","cau3_"+k))
			{
				var wo= GetText("","cau3_"+k);
			      var kqnew="";
                        var ix= ThayTu(wo);
				var ss= wo;
				while(ix>=0){
				if(ch=="au")
					kqnew= aVan1[ix];
				else if(ch=="ao")
					kqnew= aVan0[ix];
				    ss= replaceStr(ss,aDau[ix],kqnew);
				    aCau3tl[k]=ch;
				    ix= ThayTu(ss);
				}
				SetText("","cau3_"+k,ss);
			}
		k++;
	}
	MoveObjectTo("","",-1,-1);
	InvalidateObj("","");
}
function Check3(){
var diem=0;
 for(var i=0;i<4;i++){
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
	
function Trang_2()
{
LineHeight("Trang_2","quang2",2);
  return;
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
 height: 1250 
 });

 var Trang_2 = new Kinetic.Layer({name: 'Trang_2',callback:'Trang_2()',x:0,y:0});
var Trang_2_Backrounnd = CreText('Trang_2_Backrounnd',0,0,640,360,'','#004040','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#004040','0','0','0','','0','0','0','0',0,0,'');
var noi_dung = CreText('noi_dung',27,118,588,242,"Hổ và Voi thi tài. Chúng giao hẹn ai thua phải nộp mạng cho kẻ kia ăn thịt. Voi rầu rĩ vì bị thua. Khỉ thương Voi, bằng nghĩ cách cứu bạn.\r\nTới ngày hẹn, Khỉ ngồi trên lưng Voi đến nhà Hổ. Vừa tới cổng, Khỉ cầm roi quất lia lịa vào lưng Voi, quát lớn:\r\n- Hổ đâu? chỉ cho ta!\r\nVoi thưa:\r\n- Dạ, xin ngài đợi thêm chút nữa!\r\nKhỉ càn quát to hơn:\r\n- Nhanh lên ta đói rồi. Ta muốn ăn tươi nuốt sống nó ngay!\r\nNghe vậy Hổ sợ quá trốn biệt.\r\n				                                          \r\n                                                     (Truyện cổ dân tộc KHMER)",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.70);
var title = CreText('title',140,90,350,23,"Chú Khỉ mưu trí.",'rgba(0,0,0,0)','#ffffff','#00ffff','#ffffff','',22,'Arial','Bold','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_2 = CreText('DrawText_2',22,29,423,34,"A. KIỂM TRA ĐỌC\r\n",'rgba(0,0,0,0)','#ffffff','#ffad5b','#ffffff','',16,'Arial','','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Drawtext_2 = CreText('Draw text_2',31,60,289,26,"I. ĐỌC ĐÚNG MẪU CHUYỆN SAU:",'rgba(0,0,0,0)','#ffffff','#00ff00','#ccffff','',16,'Arial','Bold','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Drawtext_1 = CreText('Draw text_1',17,5,614,31,"ĐỀ ÔN THI KIỂM TRA CUỐI HỌC KỲ II MÔN TIẾNG VIỆT LỚP 1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ff0000','',18,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var Image_2 = CreText('Image_2',563,56,40,40,'','rgba(0,0,0,0)','','','','ID_IMAGE1.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
Image_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 var textSp = GetText("","title") + " \r\n "+   GetText("","noi_dung") ;
Speak(textSp,"VN");
  return;
}
 );
Trang_2.add(Trang_2_Backrounnd,noi_dung,title,DrawText_2,Drawtext_2,Drawtext_1,Image_2);
stage.add(Trang_2);

 var Trang_1 = new Kinetic.Layer({name: 'Trang_1',callback:'Trang_1()',x:0,y:360});
var Trang_1_Backrounnd = CreText('Trang_1_Backrounnd',0,0,640,420,'','#004040','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#004040','0','0','0','','0','0','0','0',0,0,'');
var Cau_hoi_0 = CreText('Cau_hoi_0',50,41,405,27,"1. Khi so tài Voi và Hổ hẹn điều gì?",'rgba(0,0,0,0)','#ffffff','#ffff00','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Cau_hoi_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var a_0 = CreText('a_0',77,68,350,22,"a. Ai thắng sẽ được là chúa tể.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_0 = CreText('b_0',77,91,350,22,"b. Ai thua phải nộp mạng.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_0 = CreText('c_0',77,112,350,22,"c. Ai thua cuộc sẽ được ăn thịt.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var Cau_hoi_1 = CreText('Cau_hoi_1',50,130,405,27,"2. Tới ngày hẹn, Khỉ và Voi làm gì?",'rgba(0,0,0,0)','#ffffff','#ffff00','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Cau_hoi_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var a_1 = CreText('a_1',77,155,350,22,"a. Đến nhà Hổ đua tài.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_1 = CreText('b_1',76,177,350,22,"b. Đến nhà Hổ để cùng ăn thị rừng.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_1 = CreText('c_1',77,198,350,22,"c. Đến nhà Hổ để thực hiện mưu kế.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var Cau_hoi_2 = CreText('Cau_hoi_2',54,218,405,30,"3. Khỉ làm gì khi tới cổng nhà Hổ?",'rgba(0,0,0,0)','#ffffff','#ffff00','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Cau_hoi_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var a_2 = CreText('a_2',80,243,350,22,"a. Khỉ quát Voi.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_2 = CreText('b_2',80,265,350,22,"b. Khỉ làm Voi sợ hãi.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_2 = CreText('c_2',77,289,557,22,"c. Khỉ giải đò quát Voi, ép buộc Voi.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var Cau_hoi_3 = CreText('Cau_hoi_3',53,315,405,27,"4.Tại sao Hổ trốn biệt?",'rgba(0,0,0,0)','#ffffff','#ffff00','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Cau_hoi_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var a_3 = CreText('a_3',80,343,350,22,"a. Vì nó mắc mưu của khỉ.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_3 = CreText('b_3',80,365,350,22,"b.Vì nó nhận ra tội lỗi.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_3 = CreText('c_3',80,386,350,22,"c. Vì nó rất sợ khỉ.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var check_0 = CreText('check_0',74,68,18,18,"c",'#ffffff','#ffffff','#005555','#005555','',14,'Arial','Bold','center','middle',2,'0.00','30','30',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_1 = CreText('check_1',74,179,18,18,"b",'#ffffff','#ffffff','#005555','#005555','',14,'Arial','Bold','center','middle',2,'0.00','30','30',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_2 = CreText('check_2',80,288,18,18,"b",'#ffffff','#ffffff','#005555','#005555','',14,'Arial','Bold','center','middle',2,'0.00','30','30',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_3 = CreText('check_3',81,347,18,18,"a",'#ffffff','#ffffff','#005555','#005555','',14,'Arial','Bold','center','middle',2,'0.00','30','30',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var quang3 = CreText('quang3',14,5,606,31,"2. CHỌN CHỮ CÁI TRƯỚC Ý TRẢ LỜI ĐÚNG CHO TỪNG CÂU HỎI SAU:",'rgba(0,0,0,0)','#ffffff','#00ff00','#ffffff','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
quang3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
Trang_1.add(Trang_1_Backrounnd,Cau_hoi_0,a_0,b_0,c_0,Cau_hoi_1,a_1,b_1,c_1,Cau_hoi_2,a_2,b_2,c_2,Cau_hoi_3,a_3,b_3,c_3,check_0,check_1,check_2,check_3,quang3);
stage.add(Trang_1);

 var Trang_3 = new Kinetic.Layer({name: 'Trang_3',callback:'Trang_3()',x:0,y:780});
var Trang_3_Backrounnd = CreText('Trang_3_Backrounnd',0,0,640,470,'','#004040','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#004040','0','0','0','','0','0','0','0',0,0,'');
var Drawtext_1 = CreText('Draw text_1',38,26,453,23,"1. Chép đúng chính tả đoạn văn sau:",'rgba(0,0,0,0)','#ffffff','#ffff00','#ccffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Drawtext_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var Drawtext_2 = CreText('Draw text_2',27,3,249,25,"B. KIỂM TRA VIẾT",'rgba(0,0,0,0)','#ffffff','#ffad5b','#ffffff','',16,'Arial','','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var chinh_ta = CreText('chinh_ta',60,54,547,91,"Tiếng chim sít âm âm giữa đồng lúa xanh um như tiếng trẻ con nghịch nói trong chum nước. Chú cuốc đánh hơi thấy mùa hè không còn xa nữa đã bắt đầu hắng  giọng.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.70);
var Drawtext_4 = CreText('Draw text_4',44,126,418,25,"2. Điền vào chỗ trống:      hay       ?",'rgba(0,0,0,0)','#ffffff','#ffff00','#ccffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Drawtext_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("2. Điền vào chỗ trống l hay n","VN");
  return;
}
 );
var cau2_0 = CreText('cau2_0',66,175,230,19,"Xách gươm đi dọc đồng.",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Tieu_de = CreText('Tieu_de',95,146,181,27,"Cua đồng",'rgba(0,0,0,0)','#ffffff','#00ffff','#ffffff','',16,'Arial','Bold','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Drawtext_3 = CreText('Draw text_3',47,324,294,27,"3. Điền vào chỗ trống:      hay        ?",'rgba(0,0,0,0)','#ffffff','#ffff00','#ccffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Drawtext_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("3. Điền vào chỗ trống ao hay au","VN")
  return;
}
 );
var Drawtext_7 = CreText('Draw text_7',178,442,186,21,"(Theo NGUYỄN ĐỨC MẬU)",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Drawtext_8 = CreText('Draw text_8',127,303,194,22,"(Theo NGÔ VĂN PHÚ)",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Drawtext_9 = CreText('Draw text_9',405,94,192,29,"(Theo VŨ TÚ NAM)",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau2_1 = CreText('cau2_1',66,196,230,19,"Áo ...âu và áo tím.",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cau2_2 = CreText('cau2_2',66,217,230,19,"",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cau2_3 = CreText('cau2_3',66,238,230,19,"",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cau2_4 = CreText('cau2_4',66,259,230,19,"",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cau2_5 = CreText('cau2_5',66,280,230,19,"",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cau3_0 = CreText('cau3_0',41,351,321,21,"Bầy chim ríu rít trên cành\r\n",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cau3_1 = CreText('cau3_1',41,373,321,21,"",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cau3_2 = CreText('cau3_2',41,395,321,21,"",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cau3_3 = CreText('cau3_3',41,419,321,21,"",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var obj_l = CreText('obj_l',212,126,25,25,"l",'#004040','#004040','#ffff00','#ffff00','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj_l.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DropDown();
  return;
}
 );
var obj_n = CreText('obj_n',271,126,25,25,"n",'#004040','#004040','#ffff00','#ffff00','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj_n.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DropDown();
  return;
}
 );
var obj_ao = CreText('obj_ao',214,326,25,25,"ao",'#004040','#004040','#ffff00','#ffff00','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj_ao.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DropDown3();
  return;
}
 );
var obj_au = CreText('obj_au',274,326,25,25,"au",'#004040','#004040','#ffff00','#ffff00','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj_au.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DropDown3();
  return;
}
 );
var lam_lai = CreText('lam_lai',487,361,119,32,"Làm Lại",'#98fb98','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#009300','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
GetVer();
  return;
}
 );
var begin = CreText('begin',487,361,119,32,"Nộp Bài",'#fff19f','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#ffff00','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
begin.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var plusDiem= CheckKq() + Check2() + Check3();
SetShowObject("Trang_3","begin",0);
SetShowObject("Trang_3","lam_lai",1);
SetText("Trang_3","m_diem",plusDiem);
SetShowObject("Trang_3","m_diem",1);
UpdateScore(plusDiem);
InvalidateObj("Trang_3","");
InvalidateObj("Trang_1","");
return;
}
 );
var m_diem = CreText('m_diem',469,164,133,121,"10",'rgba(0,0,0,0)','#ffffff','#ff0000','#ffffff','',72,'Arial','','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Image_2 = CreText('Image_2',584,15,40,40,'','rgba(0,0,0,0)','','','','ID_IMAGE1.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
Image_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 var textSp = GetText("","chinh_ta") ;
Speak(textSp,"VN");
  return;
}
 );
Trang_3.add(Trang_3_Backrounnd,Drawtext_1,Drawtext_2,chinh_ta,Drawtext_4,cau2_0,Tieu_de,Drawtext_3,Drawtext_7,Drawtext_8,Drawtext_9,cau2_1,cau2_2,cau2_3,cau2_4,cau2_5,cau3_0,cau3_1,cau3_2,cau3_3,obj_l,obj_n,obj_ao,obj_au,lam_lai,begin,m_diem,Image_2);
stage.add(Trang_3);
InitLacVietScript();
};
