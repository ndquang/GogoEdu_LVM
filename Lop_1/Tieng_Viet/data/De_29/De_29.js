folder_Resource ='data/De_29'
styteView = 'Ver';
var a_kq=["a","b","a","c"];
var a_tl=[0,0,0,0];
function  InitBaiHoc(){
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
GetVer();
}

function  ChonTL(){
	var name= GetName("Trang_1");
	var t=  GetTop("Trang_1",name);
	var l=  GetLeft("Trang_1",name);
	var cau = rightStr(name,1);
	a_tl[cau]= leftStr(name,1);
	SetText("Trang_1","check_"+cau,a_tl[cau]);
	MoveObjectTo("Trang_1","check_"+cau,l-3,t+3);
	SetShowObject("Trang_1","check_"+cau,1);
	InvalidateObj("Trang_1","");
	SpeakVN("","");
}
function  CheckKq(){
 var diem=0;
 for(var i=0;i<4;i++){
	if(a_tl[i]!=0)
	{
	if(a_kq[i] != a_tl[i])
	{
		SetFontColor("Trang_1",a_kq[i]+"_"+i,"#00ff00");
		SetFontColor("Trang_1",a_tl[i]+"_"+i,"#ff0000");
	}
	else {diem=diem+0.5;
		SetFontColor("Trang_1",a_kq[i]+"_"+i,"#00ff00");
}
	}
}
	InvalidateObj("Trang_1","");
return diem;
}
var aCau2=["Giang và Hằng ...ồi cùng bàn với Như.","Hai bạn ấy ...ịch ngợm,","nói chuyện huyên thuyên suốt ...ày. Còn Như thì im như thóc.\r\nMột hôm Giang hỏi Như:\r\n- Sao bạn kiệm lời thế?\r\nNhư cười tủm tỉm:\r\n","Mình chỉ có hai tai để ...e hai bạn nói. Nếu mình nói nữa lấy tai đâu mà nghe (?!)"];
var aCau2da=["ng","ngh","ng","ngh"];
var aCau2tl=["","","",""];
function InitBai2()
{
for(var i=0;i<4;i++){
	SetText("Trang_3","cau2_"+i,aCau2[i]);
	SetFontColor("Trang_3","cau2_"+i,"#ffffff");
}
}
var aCau3=["Tiếng con ve cơm trong veo","Cùng …ó đưa tre biếc","Bé dịu …àng thương yêu","Mang nhiều niềm tha thiết.", "Lời ve kim …a …iết","Xe sợi chỉ âm thanh."];
var aCau3da=["","gi","d","","d",""];
var aCau3tl=["","","","","",""];

function  InitBai3()
{
for(var s=0;s<6;s++)
	{
	   SetText("Trang_3","cau3_"+s,aCau3[s]);
	   SetFontColor("Trang_3","cau3_"+s,"#ffffff");
	}
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
function  Check2(){
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
	while(k<10 && !b_exit)
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
function  Check3(){
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
 height: 1190 
 });

 var Trang_2 = new Kinetic.Layer({name: 'Trang_2',callback:'Trang_2()',x:0,y:0});
var Trang_2_Backrounnd = CreText('Trang_2_Backrounnd',0,0,640,250,'','#004040','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#004040','0','0','0','','0','0','0','0',0,0,'');
var noi_dung = CreText('noi_dung',27,126,588,150,"Vua Mặt Trời có hai công chúa là Bình Minh và Hoàng Hôn.\r\nBình Minh bao giờ cũng dậy sớm, nhẹ bước trong vườn muôn hoa lá. Bình Minh tới, ánh sáng hồng lên, muôn vật thức dậy bắt đầu một ngày mới vui tươi và có ích.\r\nCòn Hoàng Hôn mải mê rong chơi, mãi đến chiều tối mới vội về nhà. Hoàng Hôn không biết thế nào là hạt sương long lanh, tiếng chim hót véo von buổi sớm,… Những thứ tươi xinh ngọt ngào ấy chỉ có thể tìm được khi cùng thức với Bình Minh.\r\n",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.70);
var title = CreText('title',140,90,350,29,"Công chúa Bình Minh",'rgba(0,0,0,0)','#ffffff','#00ffff','#ffffff','',18,'Arial','Bold','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_2 = CreText('DrawText_2',22,33,190,28,"A. KIỂM TRA ĐỌC\r\n",'rgba(0,0,0,0)','#ffffff','#ff6820','#ffffff','',16,'Arial','','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Drawtext_2 = CreText('Draw text_2',29,64,289,26,"1. ĐỌC ĐÚNG MẪU CHUYỆN SAU:",'rgba(0,0,0,0)','#ffffff','#00ff00','#ccffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Drawtext_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var Drawtext_1 = CreText('Draw text_1',17,5,614,31,"ĐỀ ÔN THI KIỂM TRA CUỐI HỌC KỲ II MÔN TIẾNG VIỆT LỚP 1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ff0000','',18,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var Drawtext_7 = CreText('Draw text_7',427,225,213,21,"(theo PHONG THU)",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',11,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Image_2 = CreText('Image_2',424,83,40,40,'','rgba(0,0,0,0)','','','','ID_IMAGE1.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
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

 var Trang_1 = new Kinetic.Layer({name: 'Trang_1',callback:'Trang_1()',x:0,y:250});
var Trang_1_Backrounnd = CreText('Trang_1_Backrounnd',0,0,640,440,'','#004040','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#004040','0','0','0','','0','0','0','0',0,0,'');
var Cau_hoi_0 = CreText('Cau_hoi_0',51,32,350,27,"1. Ai là người dậy sớm?",'rgba(0,0,0,0)','#ffffff','#ffff00','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Cau_hoi_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var Cau_hoi_1 = CreText('Cau_hoi_1',51,121,350,27,"2. Sau khi ngủ dậy Bình Minh làm gì?\r\n",'rgba(0,0,0,0)','#ffffff','#ffff00','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Cau_hoi_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var Cau_hoi_2 = CreText('Cau_hoi_2',51,211,350,28,"3. Khi Bình Minh tới mọi vật như thế nào?",'rgba(0,0,0,0)','#ffffff','#ffff00','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Cau_hoi_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var Cau_hoi_3 = CreText('Cau_hoi_3',51,313,508,23,"4. Tại sao Hoàng Hôn không biết giọt sương sớm, tiếng chim buổi sáng?",'rgba(0,0,0,0)','#ffffff','#ffff00','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Cau_hoi_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var a_0 = CreText('a_0',81,58,429,22,"a. Bình Minh.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_0 = CreText('b_0',81,81,429,22,"b. Hoàng Hôn.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_0 = CreText('c_0',81,102,429,22,"c. Vua Mặt Trời",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var a_1 = CreText('a_1',81,145,429,22,"a. Ánh sáng hồng lên.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_1 = CreText('b_1',80,167,429,22,"b. Bước nhẹ trong vườn.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_1 = CreText('c_1',81,188,429,22,"c. Bắt đầu một ngày mới.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var a_2 = CreText('a_2',81,244,429,22,"a. Thức dậy.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_2 = CreText('b_2',81,266,429,22,"b. Hồng lên.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_2 = CreText('c_2',81,287,429,22,"c. Vui mừng.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var a_3 = CreText('a_3',81,344,429,22,"a. Vì giọt sương long lanh khiến tiếng chim véo von",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_3 = CreText('b_3',81,366,479,22,"b. Vì đã có Bình Minh làm việc nhà.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_3 = CreText('c_3',81,387,550,37,"c. Vì giọt sương long lanh, tiếng chim véo von chỉ có vào buổi sáng, còn Hoàng Hôn\r\n    tối mới về.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var check_0 = CreText('check_0',75,59,14,15,"c",'#ffffff','#ffffff','#005555','#005555','',12,'Arial','Bold','center','middle',2,'0.00','30','30',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_1 = CreText('check_1',75,170,14,15,"b",'#ffffff','#ffffff','#005555','#005555','',12,'Arial','Bold','center','middle',2,'0.00','30','30',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_2 = CreText('check_2',78,290,14,15,"b",'#ffffff','#ffffff','#005555','#005555','',12,'Arial','Bold','center','middle',2,'0.00','30','30',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_3 = CreText('check_3',79,346,14,15,"a",'#ffffff','#ffffff','#005555','#005555','',12,'Arial','Bold','center','middle',2,'0.00','30','30',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var quang3 = CreText('quang3',33,6,606,23,"2. CHỌN CHỮ CÁI TRƯỚC Ý TRẢ LỜI ĐÚNG CHO TỪNG CÂU HỎI SAU:\r\n",'rgba(0,0,0,0)','#ffffff','#00ff00','#ffffff','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
quang3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
Trang_1.add(Trang_1_Backrounnd,Cau_hoi_0,Cau_hoi_1,Cau_hoi_2,Cau_hoi_3,a_0,b_0,c_0,a_1,b_1,c_1,a_2,b_2,c_2,a_3,b_3,c_3,check_0,check_1,check_2,check_3,quang3);
stage.add(Trang_1);

 var Trang_3 = new Kinetic.Layer({name: 'Trang_3',callback:'Trang_3()',x:0,y:690});
var Trang_3_Backrounnd = CreText('Trang_3_Backrounnd',0,0,640,500,'','#004040','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#004040','0','0','0','','0','0','0','0',0,0,'');
var chinh_ta = CreText('chinh_ta',69,59,173,81,"Mỗi sáng mai về \r\nGió lo dậy trước \r\nTay gió vuốt ve \r\nMát rờn mặt nước.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
chinh_ta.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var Drawtext_4 = CreText('Draw text_4',47,154,418,25,"2. Điền vào chỗ trống:        hay          ?",'rgba(0,0,0,0)','#ffffff','#ffff00','#ccffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Drawtext_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("2. Điền vào chỗ trống ngờ hay nghờ .","VN");
  return;
}
 );
var cau2_0 = CreText('cau2_0',80,203,271,25,"Giang và Hằng ...ồi cùng bàn với Như.",'rgba(0,0,0,0)','#004040','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Drawtext_3 = CreText('Draw text_3',47,320,425,27,"3. Điền vào chỗ trống        hay        ?",'rgba(0,0,0,0)','#ffffff','#ffff00','#ccffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Drawtext_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("3. Điền vào chỗ trống d hay gi.","VN");
  return;
}
 );
var Drawtext_7 = CreText('Draw text_7',223,482,186,21,"(theo NGUYỄN MINH NGUYÊN)",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',10,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Drawtext_8 = CreText('Draw text_8',306,135,169,22,"(Huy Cận)",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau2_1 = CreText('cau2_1',308,204,247,25,"Hai bạn ấy ...ịch ngợm,",'#004040','#004040','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau3_0 = CreText('cau3_0',79,347,230,21,"Bầy chim ríu rít trên cành\r\n",'rgba(0,0,0,0)','#004040','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cau3_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var cau3_1 = CreText('cau3_1',79,368,230,21,"",'rgba(0,0,0,0)','#004040','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cau3_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
cau3_1.on('mouseout ',function(evt)
{
m_pgObjCaller = this;
  return;
}
 );
var cau3_2 = CreText('cau3_2',79,389,230,21,"",'rgba(0,0,0,0)','#004040','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cau3_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
cau3_2.on('mouseout ',function(evt)
{
m_pgObjCaller = this;
  return;
}
 );
var cau3_3 = CreText('cau3_3',79,410,230,21,"",'rgba(0,0,0,0)','#004040','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cau3_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
cau3_3.on('mouseout ',function(evt)
{
m_pgObjCaller = this;
  return;
}
 );
var m_diem = CreText('m_diem',504,159,115,114,"",'rgba(0,0,0,0)','#ffffff','#ff0000','#ffffff','',72,'Arial','','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau3_4 = CreText('cau3_4',79,431,230,21,"",'rgba(0,0,0,0)','#004040','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cau3_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
cau3_4.on('mouseout ',function(evt)
{
m_pgObjCaller = this;
  return;
}
 );
var cau3_5 = CreText('cau3_5',79,453,230,21,"Bầy chim ríu rít trên cành\r\n",'rgba(0,0,0,0)','#004040','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cau3_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
cau3_5.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
  return;
}
 );
cau3_5.on('mouseout ',function(evt)
{
m_pgObjCaller = this;
  return;
}
 );
var lam_lai = CreText('lam_lai',508,462,119,32,"Làm Lại",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#ff0000','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var begin = CreText('begin',508,462,119,32,"Nộp Bài",'#ffe4e1','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#ffd700','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
begin.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var sumDiem = CheckKq()+Check2()+Check3();
SetShowObject("Trang_3","begin",0);
SetShowObject("Trang_3","lam_lai",1);
UpdateScore(sumDiem );
SetText("Trang_3","m_diem",sumDiem );
InvalidateObj("Trang_3","");
InvalidateObj("Trang_1","");
return;
}
 );
var chinh_ta_1 = CreText('chinh_ta_1',284,59,212,81,"Con sông thức tỉnh \r\nUốn mình vươn vai \r\nGiấc ngủ còn dính \r\nTrên mi sương dài.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
chinh_ta_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var cau2_2 = CreText('cau2_2',82,228,435,69,"nói chuyện huyên thuyên suốt ...ày. Còn Như thì im như thóc.\r\nMột hôm Giang hỏi Như:\r\n- Sao bạn kiệm lời thế?\r\nNhư cười tủm tỉm:",'rgba(0,0,0,0)','#004040','#ffffff','#ffffff','',12,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.70);
cau2_2.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
  return;
}
 );
cau2_2.on('mouseout ',function(evt)
{
m_pgObjCaller = this;
  return;
}
 );
var Drawtext_1 = CreText('Draw text_1',108,178,246,29,"Nghe cả hai tai (!)",'rgba(0,0,0,0)','#ffffff','#00ffff','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_1 = CreText('DrawText_1',343,311,169,22,"(theo TƯ RÂU)",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau2_3 = CreText('cau2_3',82,282,485,28,"Mình chỉ có hai tai để ...e hai bạn nói. Nếu mình nói nữa lấy tai đâu mà nghe (?!)",'rgba(0,0,0,0)','#004040','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cau2_3.on('mouseover touchmove dragmove',function(evt)
{
m_pgObjCaller = this;
  return;
}
 );
cau2_3.on('mouseout ',function(evt)
{
m_pgObjCaller = this;
  return;
}
 );
var obj_n = CreText('obj_n',253,153,28,25,"ngh",'#004040','#004040','#ffff00','#ffff00','',12,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj_n.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DropDown();
  return;
}
 );
var obj_l = CreText('obj_l',195,152,26,25,"ng",'#004040','#004040','#ffff00','#ffff00','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj_l.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DropDown();
  return;
}
 );
var obj_c = CreText('obj_c',192,318,26,25,"d",'#004040','#004040','#ffff00','#ffff00','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj_c.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DropDown3();
  return;
}
 );
var obj_k = CreText('obj_k',247,318,26,25,"gi",'#004040','#004040','#ffff00','#ffff00','',12,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj_k.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DropDown3();
  return;
}
 );
var kiem_tra_viet = CreText('kiem_tra_viet',11,6,249,25,"B. KIỂM TRA VIẾT",'rgba(0,0,0,0)','#ffffff','#ff6820','#ffffff','',16,'Arial','','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var de_chinh_ta = CreText('de_chinh_ta',41,36,453,28,"1. Chép đúng chính tả đoạn thơ sau:",'rgba(0,0,0,0)','#ffffff','#ffff00','#ccffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
de_chinh_ta.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
Trang_3.add(Trang_3_Backrounnd,chinh_ta,Drawtext_4,cau2_0,Drawtext_3,Drawtext_7,Drawtext_8,cau2_1,cau3_0,cau3_1,cau3_2,cau3_3,m_diem,cau3_4,cau3_5,lam_lai,begin,chinh_ta_1,cau2_2,Drawtext_1,DrawText_1,cau2_3,obj_n,obj_l,obj_c,obj_k,kiem_tra_viet,de_chinh_ta);
stage.add(Trang_3);
InitLacVietScript();
};
