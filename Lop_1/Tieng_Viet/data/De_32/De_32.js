folder_Resource ='data/De_32'
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
	if(a_kq[i] != a_tl[i]){
		SetFontColor("Trang_1",a_kq[i]+"_"+i,"#00ff00");
		SetFontColor("Trang_1",a_tl[i]+"_"+i,"#ff0000");
	}
	else diem=diem+0.5;
}
	SetShowObject("Trang_1","begin",0);
	SetShowObject("Trang_1","m_diem",1);
	SetShowObject("Trang_1","lam_lai",1);
	InvalidateObj("Trang_1","");
	return diem;
}
var aCau2=["Hạt sương nho nhỏ","...inh từ trong đêm","...ớm mai lặng yên","Tiếng chim lanh lảnh","Hạt ...ương lấp lánh","Ngó nghiên bầu trời","Cánh chim ...a ...ôi","Đám mây hừng đỏ."];
var aCau2da=["","s","s","","s","","x",""];
var aCau2tl=["","","","","",""];
function InitBai2()
{
for(var i=0;i<8;i++){
	SetText("Trang_3","cau2_"+i,aCau2[i]);
	SetFontColor("Trang_3","cau2_"+i,"#ffffff");
}
}
var aCau3=["Bà ơi cháu (ve)","Khuôn mặt của bà","Đôi mắt thật to","Để khi nhìn cháu", "(Chăng) cần phải nheo","Bà ơi cháu (ve)","Cái (vong) bà nằm","Toàn làm bằng tơ","(Đê) khi bà ngủ","Êm ái như mơ."];
var aVan0=["ao","áo","ào","ảo","õa","ạo"];
var aVan1=["au","úa","ùa","ảu","ãu","ạu"];
var aDau=["...",".´..",".`..",". ̉..",".˜..","..̣."];
function  InitBai3()
{
for(var s=0;s<10;s++)
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
var aCau3tl=["","","","","",""];
var aCau3tu=["ve","","","","Chăng","ve","vong","","Đê",""];
var aCau3Hoi=["vẻ","","","","Chẳng","vẻ","vỏng","","Để",""];
var aCau3Nga=["vẽ","","","","Chẵng","vẽ","võng","","Đễ",""];
var aCau3da=["vẽ","","","","Chẳng","vẽ","võng","","Để",""];
function InitCur(){
SetMoveView("Trang_3","obj_l",1);
SetMoveView("Trang_3","obj_n",1);
SetMoveView("Trang_3","obj_ao",1);
SetMoveView("Trang_3","obj_au",1);
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

function ClickHoiNga()
{
	var name = GetName("");
	var i= rightStr(name,1);
	if(aCau3tu[i]=="")
	{
SpeakVN("","");
		return;
}
	var tt= GetText("","");
	if(indexOf(tt, aCau3tu[i])>=0){
	  tt= replaceStr(tt,aCau3tu[i],aCau3Hoi[i]);
	  aCau3tl[i]=aCau3Hoi[i];
	}
	else if(indexOf(tt, aCau3Hoi[i])>=0)
	{
 	  tt= replaceStr(tt,aCau3Hoi[i],aCau3Nga[i]);
	  aCau3tl[i]=aCau3Nga[i];
	}
	else if(indexOf(tt, aCau3Nga[i])>=0)
	{
 	  tt= replaceStr(tt,aCau3Nga[i],aCau3tu[i]);
	  aCau3tl[i]=aCau3tu[i];
	}
	SetText("","",tt);
	SpeakVN("","");
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
 height: 1290 
 });

 var Trang_2 = new Kinetic.Layer({name: 'Trang_2',callback:'Trang_2()',x:0,y:0});
var Trang_2_Backrounnd = CreText('Trang_2_Backrounnd',0,0,640,360,'','#004040','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#004040','0','0','0','','0','0','0','0',0,0,'');
var noi_dung = CreText('noi_dung',27,126,588,278,"Dòng suối nhỏ chảy đến hồ nước và nói :\r\n- Anh cho tôi theo với!\r\nHồ nước khinh khỉnh bảo :\r\n- Ta cần gì đến con suối nhỏ xíu như ngươi!\r\nDòng suối tiếp tục chảy mãi. Rồi một ngày kia, thấy biển cả mênh mông trước mặt, nó khẩn khoản nói :\r\n- Biển ơi, xin ông nhận cháu với!\r\nBiển cả ân cần đáp:\r\n- Nhanh lên, ta đang chờ cháu!\r\nSuối nhỏ mừng rỡ ùa vào biển cả.\r\nHè đến, hồ nước cô độc, khô cạn tới đáy còn biển cả thì luôn dạt dào sóng vỗ.\r\n",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.70);
var title = CreText('title',140,90,350,29,"Suối nhỏ, hồ nước và biển cả",'rgba(0,0,0,0)','#ffffff','#00ffff','#ffffff','',22,'Arial','Bold','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_2 = CreText('DrawText_2',22,29,423,34,"A. KIỂM TRA ĐỌC\r\n",'rgba(0,0,0,0)','#ffffff','#ffad5b','#ffffff','',16,'Arial','','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Drawtext_2 = CreText('Draw text_2',31,60,289,26,"1. ĐỌC ĐÚNG MẪU CHUYỆN SAU:",'rgba(0,0,0,0)','#ffffff','#00ff00','#ccffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Drawtext_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var Drawtext_1 = CreText('Draw text_1',17,5,614,31,"ĐỀ ÔN THI KIỂM TRA CUỐI HỌC KỲ II MÔN TIẾNG VIỆT LỚP 1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ff0000','',18,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var Image_2 = CreText('Image_2',496,84,40,40,'','rgba(0,0,0,0)','','','','ID_IMAGE1.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
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
var Trang_1_Backrounnd = CreText('Trang_1_Backrounnd',0,0,640,450,'','#004040','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#004040','0','0','0','','0','0','0','0',0,0,'');
var Cau_hoi_0 = CreText('Cau_hoi_0',50,44,586,27,"1. Suối nhỏ xin hồ nước điều gì?",'rgba(0,0,0,0)','#ffffff','#ffff00','#fffe99','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Cau_hoi_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var Cau_hoi_1 = CreText('Cau_hoi_1',50,133,586,27,"2. Tại sao hồ nước không đồng ý yêu cầu của suối nhỏ?\r\n",'rgba(0,0,0,0)','#ffffff','#ffff00','#fffe99','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Cau_hoi_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var Cau_hoi_2 = CreText('Cau_hoi_2',50,223,586,39,"3. Biển cả như thế nào trước lời đề nghị của suối nhỏ?",'rgba(0,0,0,0)','#ffffff','#ffff00','#fffe99','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Cau_hoi_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var Cau_hoi_3 = CreText('Cau_hoi_3',50,325,586,27,"4. Tại sao hè đến hồ nước cạn khô còn biển cả vẫn mênh mông?",'rgba(0,0,0,0)','#ffffff','#ffff00','#fffe99','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Cau_hoi_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var quang3 = CreText('quang3',27,5,606,32,"2. CHỌN CHỮ CÁI TRƯỚC Ý TRẢ LỜI ĐÚNG CHO TỪNG CÂU HỎI SAU:",'rgba(0,0,0,0)','#ffffff','#00ff00','#ffffff','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
quang3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var a_0 = CreText('a_0',80,70,429,22,"a. Đi chơi.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_0 = CreText('b_0',80,93,429,22,"b. Theo hồ nước.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_0 = CreText('c_0',80,114,429,22,"c. Cho nó một ít nước.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var a_1 = CreText('a_1',80,157,429,22,"a. Vì nó rất keo kiệt.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_1 = CreText('b_1',79,179,429,22,"b. Vì nó rất khó tính.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_1 = CreText('c_1',80,200,429,22,"c. Vì nó xem thường suối nhỏ.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var a_2 = CreText('a_2',80,256,429,22,"a. Mừng vui đón chào suối nhỏ.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_2 = CreText('b_2',80,278,429,22,"b. Xem thường và đuổi suối nhỏ.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_2 = CreText('c_2',80,299,429,22,"c. Giận dữ, chê trách suối nhỏ chậm trễ.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var a_3 = CreText('a_3',80,356,429,22,"a. Vì biển cả đón nhận muôn vàn suối nhỏ.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_3 = CreText('b_3',80,378,479,22,"b. Vì hồ nước đón nhận suối nhỏ.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_3 = CreText('c_3',80,399,429,22,"c. Vì biển nhận sông suối, còn hồ thì ích kỉ.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var check_0 = CreText('check_0',74,71,18,18,"c",'#ffffff','#ffffff','#005555','#005555','',16,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_1 = CreText('check_1',74,182,18,18,"b",'#ffffff','#ffffff','#005555','#005555','',16,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_2 = CreText('check_2',77,302,18,18,"b",'#ffffff','#ffffff','#005555','#005555','',16,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_3 = CreText('check_3',78,361,18,18,"a",'#ffffff','#ffffff','#005555','#005555','',16,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Trang_1.add(Trang_1_Backrounnd,Cau_hoi_0,Cau_hoi_1,Cau_hoi_2,Cau_hoi_3,quang3,a_0,b_0,c_0,a_1,b_1,c_1,a_2,b_2,c_2,a_3,b_3,c_3,check_0,check_1,check_2,check_3);
stage.add(Trang_1);

 var Trang_3 = new Kinetic.Layer({name: 'Trang_3',callback:'Trang_3()',x:0,y:810});
var Trang_3_Backrounnd = CreText('Trang_3_Backrounnd',0,0,640,480,'','#004040','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#004040','0','0','0','','0','0','0','0',0,0,'');
var chinh_ta = CreText('chinh_ta',49,57,588,52,"Từ xưa các loại cây đều hẹn nhau chín vào mùa hè. Những tháng còn lại cây cối chỉ là cành với lá. Gió lao xao trên cành cây.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.70);
chinh_ta.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var de_chinh_ta = CreText('de_chinh_ta',47,25,453,28,"1. Chép đúng chính tả đoạn văn sau:",'rgba(0,0,0,0)','#ffffff','#ffff00','#ccffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
de_chinh_ta.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var kiem_tra_viet = CreText('kiem_tra_viet',26,3,249,25,"B. KIỂM TRA VIẾT",'rgba(0,0,0,0)','#ffffff','#ffad5b','#ffffff','',16,'Arial','','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Drawtext_4 = CreText('Draw text_4',47,98,418,25,"2. Điền vào chỗ trống:      hay       ?",'rgba(0,0,0,0)','#ffffff','#ffff00','#ccffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Drawtext_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("2. Điền vào chỗ trống S hay  X","VN");
  return;
}
 );
var cau2_0 = CreText('cau2_0',71,123,230,19,"Xách gươm đi dọc đồng.",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Drawtext_3 = CreText('Draw text_3',47,308,425,27,"3. Chữ trong dấu () là dấu   ?   hay dấu  ~",'rgba(0,0,0,0)','#ffffff','#ffff00','#ccffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Drawtext_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("Chữ trong dấu  ngoặc là dấu hỏi hay dấu ngã","VN");
  return;
}
 );
var Drawtext_7 = CreText('Draw text_7',336,455,186,21,"(TỪ NGUYÊN THẠCH)",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',10,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Drawtext_8 = CreText('Draw text_8',162,279,96,22,"(Ngân Vịnh)",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau2_1 = CreText('cau2_1',71,143,230,19,"Áo ...âu và áo tím.",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cau2_2 = CreText('cau2_2',71,163,230,19,"",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cau2_3 = CreText('cau2_3',71,183,230,19,"",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cau2_4 = CreText('cau2_4',71,203,230,19,"",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cau2_5 = CreText('cau2_5',71,223,230,19,"",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cau3_0 = CreText('cau3_0',79,339,230,21,"Bầy chim ríu rít trên cành\r\n",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cau3_1 = CreText('cau3_1',79,361,230,21,"",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cau3_2 = CreText('cau3_2',79,383,230,21,"",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cau3_3 = CreText('cau3_3',79,407,230,21,"",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var m_diem = CreText('m_diem',504,123,115,114,"",'rgba(0,0,0,0)','#ffffff','#ff0000','#ffffff','',72,'Arial','','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau2_6 = CreText('cau2_6',71,243,230,19,"",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cau2_6.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
ShowTip();
  return;
}
 );
cau2_6.on('mouseout ',function(evt)
{
m_pgObjCaller = this;
HideTip();
  return;
}
 );
var cau2_7 = CreText('cau2_7',71,263,230,19,"",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cau2_7.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
ShowTip();
  return;
}
 );
cau2_7.on('mouseout ',function(evt)
{
m_pgObjCaller = this;
HideTip();
  return;
}
 );
var cau3_4 = CreText('cau3_4',79,429,230,21,"",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cau3_5 = CreText('cau3_5',331,339,230,21,"Bầy chim ríu rít trên cành\r\n",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cau3_6 = CreText('cau3_6',331,361,230,21,"",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cau3_7 = CreText('cau3_7',331,383,230,21,"",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cau3_8 = CreText('cau3_8',331,405,230,21,"",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cau3_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickHoiNga();
  return;
}
 );
cau3_8.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
ShowTip();
  return;
}
 );
cau3_8.on('mouseout ',function(evt)
{
m_pgObjCaller = this;
HideTip();
  return;
}
 );
var cau3_9 = CreText('cau3_9',331,429,230,21,"",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cau3_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickHoiNga();
  return;
}
 );
cau3_9.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
ShowTip();
  return;
}
 );
cau3_9.on('mouseout ',function(evt)
{
m_pgObjCaller = this;
HideTip();
  return;
}
 );
var obj_n = CreText('obj_n',272,96,25,25,"x",'#004040','#004040','#ffff00','#ffff00','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj_n.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DropDown();
  return;
}
 );
var obj_l = CreText('obj_l',217,97,25,25,"s",'#004040','#004040','#ffff00','#ffff00','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj_l.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DropDown();
  return;
}
 );
var lam_lai = CreText('lam_lai',508,377,119,32,"Làm Lại",'#ff0000','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#ffc0cb','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var begin = CreText('begin',508,377,119,32,"Nộp Bài",'#ffffcc','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#ffd700','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
begin.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var sumDiem = CheckKq()+Check2()+Check3();
SetText("Trang_3","m_diem",sumDiem );
SetShowObject("Trang_3","m_diem",1 );
SetShowObject("Trang_3","begin",0);
SetShowObject("Trang_3","begin",0);
SetShowObject("Trang_3","lam_lai",1);
UpdateScore(sumDiem );
InvalidateObj("Trang_3","");
InvalidateObj("Trang_1","");
return;
}
 );
Trang_3.add(Trang_3_Backrounnd,chinh_ta,de_chinh_ta,kiem_tra_viet,Drawtext_4,cau2_0,Drawtext_3,Drawtext_7,Drawtext_8,cau2_1,cau2_2,cau2_3,cau2_4,cau2_5,cau3_0,cau3_1,cau3_2,cau3_3,m_diem,cau2_6,cau2_7,cau3_4,cau3_5,cau3_6,cau3_7,cau3_8,cau3_9,obj_n,obj_l,lam_lai,begin);
stage.add(Trang_3);
InitLacVietScript();
};
