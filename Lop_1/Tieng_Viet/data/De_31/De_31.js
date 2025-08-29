folder_Resource ='data/De_31'
styteView = 'Ver';
var a_kq=["b","b","c","c"];
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
	InvalidateObj("Trang_1","");
		SpeakVN("","");
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
	SetShowObject("Trang_1","lam_lai",1);
	SpeakVN("","");
	InvalidateObj("Trang_1","");
	return diem;
}
var aCau2=["Bố hỏi Nam: \r\n- Năm ...ay con có gì mới ? \r\nNam thưa:","- Dạ. Cô giáo ...à cô giáo cũ của con.","Lớp học và sách các môn học cũng là ...ớp cũ."," Nhưng tất cả các bạn đều ...à bạn mới. "];
var aCau2da=["n","l","l","l"];
var aCau2tl=["","","",""];
function InitBai2()
{
for(var i=0;i<8;i++){
	SetText("Trang_3","cau2_"+i,aCau2[i]);
	SetFontColor("Trang_3","cau2_"+i,"#ffffff");
}
}
var aCau3=["Hễ …iếm được mồi","…iến tha về tổ","Xếp …ùng một chỗ","Làm của …ải chung", "Tới khi đói lòng","Cùng ăn vui sướng.","Từ quân đến tướng","Một dạ như nhau","Chẳng thấy ở đâu","…iến sống riêng lẻ."];
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
var aCau3da=["k","k","c","c","","","","","","k"];
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
				Speak(ss,"VN");
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
	SpeakVN("","");
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
				if(index==0)
				ss= replaceStr(ss,"…", toUpperCase(ch));
				else if(index>0) ss= replaceStr(ss,"…",ch);
				SetText("Trang_3","cau3_"+k,ss);
				aCau3tl[k]=ch;
				Speak(ss,"VN");
				b_exit=true;
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
LineHeight("Trang_3","chinh_ta",2);
LineHeight("Trang_3","chinh_ta_1",2);

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
 height: 1280 
 });

 var Trang_2 = new Kinetic.Layer({name: 'Trang_2',callback:'Trang_2()',x:0,y:0});
var Trang_2_Backrounnd = CreText('Trang_2_Backrounnd',0,0,640,320,'','#004040','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#004040','0','0','0','','0','0','0','0',0,0,'');
var noi_dung = CreText('noi_dung',27,126,588,197,"Chú lính nọ được quan sai đi việc gấp. Quan cấp ngựa để chú đi cho nhanh.\r\nDắt ngựa ra đường nhưng chú không cưỡi mà cứ nắm chặt dây cương rồi cắm cổ chạy theo. Người đi đường thấy lạ bèn hỏi:\r\n- Sao không cưỡi để đi cho mau?\r\nChú ta hổn hển trả lời:\r\n- Bác hỏi lạ thật ! Bốn chân mà chạy nhanh hơn sáu chân được à?!\r\n\r\n\r\n				",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.70);
var title = CreText('title',140,90,350,29,"Bốn chân và sáu chân",'rgba(0,0,0,0)','#ffffff','#00ffff','#ffffff','',22,'Arial','Bold','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_2 = CreText('DrawText_2',22,29,423,34,"A. KIỂM TRA ĐỌC\r\n",'rgba(0,0,0,0)','#ffffff','#ffad5b','#ffffff','',16,'Arial','','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Drawtext_2 = CreText('Draw text_2',30,60,289,26,"I. ĐỌC ĐÚNG MẪU CHUYỆN SAU:",'rgba(0,0,0,0)','#ffffff','#00ff00','#ccffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Drawtext_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var Drawtext_1 = CreText('Draw text_1',17,5,614,31,"ĐỀ ÔN THI KIỂM TRA CUỐI HỌC KỲ II MÔN TIẾNG VIỆT LỚP 1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ff0000','',18,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Drawtext_7 = CreText('Draw text_7',281,249,281,21,"(theo TRUYỆN CƯỜI DÂN GIAN VIỆT NAM)",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',11,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var quang3 = CreText('quang3',30,293,606,28,"2. CHỌNCHỮ CÁI TRƯỚC Ý TRẢ LỜI ĐÚNG CHO TỪNG CÂU HỎI SAU:\r\n",'rgba(0,0,0,0)','#ffffff','#00ff00','#ffffff','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
quang3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var Image_2 = CreText('Image_2',463,77,40,40,'','rgba(0,0,0,0)','','','','ID_IMAGE1.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
Image_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 var textSp = GetText("","title") + " \r\n "+   GetText("","noi_dung") ;
Speak(textSp,"VN");
  return;
}
 );
Trang_2.add(Trang_2_Backrounnd,noi_dung,title,DrawText_2,Drawtext_2,Drawtext_1,Drawtext_7,quang3,Image_2);
stage.add(Trang_2);

 var Trang_1 = new Kinetic.Layer({name: 'Trang_1',callback:'Trang_1()',x:0,y:320});
var Trang_1_Backrounnd = CreText('Trang_1_Backrounnd',0,0,640,480,'','#004040','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#004040','0','0','0','','0','0','0','0',0,0,'');
var Cau_hoi_0 = CreText('Cau_hoi_0',50,1,586,27,"1. Quan sai chú lính nọ đi làm gì?",'rgba(0,0,0,0)','#ffffff','#ffff00','#fffe99','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Cau_hoi_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var Cau_hoi_1 = CreText('Cau_hoi_1',50,90,586,27,"2. Sau khi dắt ngựa ra đường, chú lính nọ làm gì?\r\n",'rgba(0,0,0,0)','#ffffff','#ffff00','#fffe99','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Cau_hoi_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var Cau_hoi_2 = CreText('Cau_hoi_2',50,180,586,39,"3. Tại sao chú lính nọ không cưỡi ngựa để đi cho nhanh?",'rgba(0,0,0,0)','#ffffff','#ffff00','#fffe99','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Cau_hoi_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var Cau_hoi_3 = CreText('Cau_hoi_3',50,282,586,27,"4. Từ ngữ nào tả cảnh chú lính đi làm việc quan giao?",'rgba(0,0,0,0)','#ffffff','#ffff00','#fffe99','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Cau_hoi_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var a_0 = CreText('a_0',80,27,429,22,"a. Đi bắt ngựa.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_0 = CreText('b_0',80,50,429,22,"b. Đi công việc gấp.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_0 = CreText('c_0',80,71,429,22,"c. Dắt ngựa ra đường.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var a_1 = CreText('a_1',80,114,429,22,"a. Phi ngựa chạy như bay.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_1 = CreText('b_1',79,136,429,22,"b. Nắm dây cương và chạy theo.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_1 = CreText('c_1',80,157,429,22,"c. Cưỡi lên ngựa, cho nó chạy.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var a_2 = CreText('a_2',80,213,429,22,"a. Vì chú không biết cưỡi ngựa.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_2 = CreText('b_2',80,235,429,22,"b. Vì chú cho rằng ngựa đi chậm.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_2 = CreText('c_2',80,256,429,22,"c. Vì chú cho rằng sáu chân chạy nhanh hơn bốn chân.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var a_3 = CreText('a_3',80,313,429,22,"a. Nhờ bạn dắt ngựa ra đường, không cưỡi.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_3 = CreText('b_3',80,335,479,22,"b. Nhờ người nắm chặt dây cương, cắm cổ chạy theo.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_3 = CreText('c_3',80,356,429,22,"c. Dắt ngựa ra, không cưỡi, nắm dây cương, chạy theo.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var check_0 = CreText('check_0',74,28,18,18,"c",'#ffffff','#ffffff','#005555','#005555','',16,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_1 = CreText('check_1',74,139,18,18,"b",'#ffffff','#ffffff','#005555','#005555','',16,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_2 = CreText('check_2',77,259,18,18,"b",'#ffffff','#ffffff','#005555','#005555','',16,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_3 = CreText('check_3',78,318,18,18,"a",'#ffffff','#ffffff','#005555','#005555','',16,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kiem_tra_viet = CreText('kiem_tra_viet',35,413,249,25,"B. KIỂM TRA VIẾT",'rgba(0,0,0,0)','#ffffff','#ff6820','#ffffff','',16,'Arial','','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var de_chinh_ta = CreText('de_chinh_ta',50,449,453,28,"1. Chép đúng chính tả đoạn văn sau:",'rgba(0,0,0,0)','#ffffff','#ffff00','#ccffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
de_chinh_ta.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
Trang_1.add(Trang_1_Backrounnd,Cau_hoi_0,Cau_hoi_1,Cau_hoi_2,Cau_hoi_3,a_0,b_0,c_0,a_1,b_1,c_1,a_2,b_2,c_2,a_3,b_3,c_3,check_0,check_1,check_2,check_3,kiem_tra_viet,de_chinh_ta);
stage.add(Trang_1);

 var Trang_3 = new Kinetic.Layer({name: 'Trang_3',callback:'Trang_3()',x:0,y:800});
var Trang_3_Backrounnd = CreText('Trang_3_Backrounnd',0,0,640,480,'','#004040','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#004040','0','0','0','','0','0','0','0',0,0,'');
var chinh_ta = CreText('chinh_ta',69,3,212,95,"Mũ nâu giầy đỏ\r\nNghiêng ngó chà rào\r\nẤy là lão Trả\r\nChuyên rình cá ao.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
chinh_ta.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var Drawtext_4 = CreText('Draw text_4',47,134,418,25,"2. Điền vào dấu 3 chấm:      hay       ?",'rgba(0,0,0,0)','#ffffff','#ffff00','#ccffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Drawtext_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("Điền vào dấu 3 chấm l hay n","VN");
  return;
}
 );
var cau2_0 = CreText('cau2_0',69,175,540,62,"Bố hỏi Nam: /r/n\r\n- Năm ...ay con có gì mới ? /r/n\r\nNam thưa:/r/n",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Drawtext_3 = CreText('Draw text_3',47,296,425,27,"3. Điền vào dấu ...        hay       ?",'rgba(0,0,0,0)','#ffffff','#ffff00','#ccffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Drawtext_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak("Điền vào dấu 3 chấm c hay k","VN");
  return;
}
 );
var Drawtext_7 = CreText('Draw text_7',336,443,186,21,"(theo NAM HƯƠNG)",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',10,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Drawtext_8 = CreText('Draw text_8',387,91,169,22,"(theo TRẦN ĐẮC TRUNG)",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau2_1 = CreText('cau2_1',68,241,247,19,"- Dạ. Cô giáo ...à cô giáo cũ của con. ",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cau3_0 = CreText('cau3_0',79,327,230,21,"Bầy chim ríu rít trên cành\r\n",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cau3_1 = CreText('cau3_1',79,349,230,21,"",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cau3_2 = CreText('cau3_2',79,371,230,21,"",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cau3_3 = CreText('cau3_3',79,395,230,21,"",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var m_diem = CreText('m_diem',504,119,115,114,"",'rgba(0,0,0,0)','#ffffff','#ff0000','#ffffff','',72,'Arial','','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau3_4 = CreText('cau3_4',79,417,230,21,"",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cau3_5 = CreText('cau3_5',331,327,230,21,"Bầy chim ríu rít trên cành\r\n",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cau3_6 = CreText('cau3_6',331,349,230,21,"",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cau3_7 = CreText('cau3_7',331,371,230,21,"",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cau3_8 = CreText('cau3_8',331,393,230,21,"",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cau3_9 = CreText('cau3_9',331,417,230,21,"",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var lam_lai = CreText('lam_lai',508,377,119,32,"Làm Lại",'#ffc0cb','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#ff0000','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var begin = CreText('begin',508,377,119,32,"Nộp Bài",'#ffffb9','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#ffd700','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
begin.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var sumDiem = CheckKq()+Check2()+Check3();
UpdateScore(sumDiem );
SetText("Trang_3","m_diem",sumDiem );
SetShowObject("Trang_3","m_diem",1);
SetShowObject("Trang_3","begin",0);
SetShowObject("Trang_3","lam_lai",1);
InvalidateObj("Trang_3","");
InvalidateObj("Trang_1","");
return;
}
 );
var chinh_ta_1 = CreText('chinh_ta_1',284,3,212,95,"Cặp mắt lim dim\r\nĐảo nhanh như chớp\r\nCái mỏ to khoằm\r\nGiấu vào trước ngực.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
chinh_ta_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var cau2_3 = CreText('cau2_3',72,259,291,22," Nhưng tất cả các bạn đều ...à bạn mới. ",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cau2_2 = CreText('cau2_2',314,241,327,19,"Lớp học và sách các môn học cũng là ...ớp cũ.",'#004040','#004040','#ffffff','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var Drawtext_1 = CreText('Draw text_1',107,153,246,29,"Mới và cũ",'rgba(0,0,0,0)','#ffffff','#c0ffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_1 = CreText('DrawText_1',381,268,169,22,"(theo HỌC SINH CƯỜI)",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_2 = CreText('DrawText_2',69,108,564,22,"Chà rào: Cành cây có nhiều nhánh nhỏ, dùng thả dưới nước cho cá đến ở.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',10,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
DrawText_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var obj_l = CreText('obj_l',229,133,25,25,"l",'#004040','#004040','#ffff00','#ffff00','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj_l.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DropDown();
  return;
}
 );
var obj_n = CreText('obj_n',288,132,25,25,"n",'#004040','#004040','#ffff00','#ffff00','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj_n.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DropDown();
  return;
}
 );
var obj_c = CreText('obj_c',189,297,25,25,"c",'#004040','#004040','#ffff00','#ffff00','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj_c.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DropDown3();
  return;
}
 );
var obj_k = CreText('obj_k',250,297,25,25,"k",'#004040','#004040','#ffff00','#ffff00','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
obj_k.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DropDown3();
  return;
}
 );
Trang_3.add(Trang_3_Backrounnd,chinh_ta,Drawtext_4,cau2_0,Drawtext_3,Drawtext_7,Drawtext_8,cau2_1,cau3_0,cau3_1,cau3_2,cau3_3,m_diem,cau3_4,cau3_5,cau3_6,cau3_7,cau3_8,cau3_9,lam_lai,begin,chinh_ta_1,cau2_3,cau2_2,Drawtext_1,DrawText_1,DrawText_2,obj_l,obj_n,obj_c,obj_k);
stage.add(Trang_3);
InitLacVietScript();
};
