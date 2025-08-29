folder_Resource ='data/De_So_1'
styteView = 'Ver';
var a_kq=["a","b","c","a"];
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
}
function CheckKq(){
 var diem=0;
 for(var i=0;i<4;i++){
	if(a_kq[i] != a_tl[i])
	{
		SetFontColor("Trang_1",a_kq[i]+"_"+i,"#00ff00");
		SetFontColor("Trang_1",a_tl[i]+"_"+i,"#ff0000");
	}
	else {
		diem=diem+1;
		SetFontColor("Trang_1",a_kq[i]+"_"+i,"#00ff00");

	    }
	
}
	SetText("Trang_1","m_diem",diem);
	SetShowObject("Trang_1","begin",0);
	SetShowObject("Trang_1","m_diem",1);
	SetShowObject("Trang_1","lam_lai",1);
	InvalidateObj("Trang_1","");
	return diem;
}

var a_kq4=["c","b","c","a"];
var a_tl4=[0,0,0,0];
function InitBaiHoc4(){
	for(var i=0;i<3;i++)
		{
		SetShowObject("Trang_4","check_"+i,0);
		SetFontColor("Trang_4","a_"+i,"#ffffff");
		SetFontColor("Trang_4","b_"+i,"#ffffff");
		SetFontColor("Trang_4","c_"+i,"#ffffff");
		SetText("Trang_4","check_"+i,"");
		a_tl4[i]=0;
		}
SetShowObject("Trang_4","begin",1);
SetShowObject("Trang_4","m_diem",0);
SetShowObject("Trang_4","lam_lai",0);
InvalidateObj("Trang_4","");
}

function ChonTL4(){
	var name= GetName("Trang_4");
	var t=  GetTop("Trang_4",name);
	var l=  GetLeft("Trang_4",name);
	var cau = rightStr(name,1);
	a_tl4[cau]= leftStr(name,1);
	SetText("Trang_4","check_"+cau,a_tl4[cau]);
	MoveObjectTo("Trang_4","check_"+cau,l-3,t+3);
	SetShowObject("Trang_4","check_"+cau,1);
	InvalidateObj("Trang_4","");
}
function CheckKq4(){
 var diem=0;
 for(var i=0;i<3;i++){
	if(a_kq4[i] != a_tl4[i]){
		SetFontColor("Trang_4",a_kq4[i]+"_"+i,"#00ff00");
		SetFontColor("Trang_4",a_tl4[i]+"_"+i,"#ff0000");
	}
	else {
		diem=diem+1;
		SetFontColor("Trang_4",a_kq[i]+"_"+i,"#00ff00");
	    }

}
	SetText("Trang_4","m_diem",diem);
	SetShowObject("Trang_4","begin",0);
	SetShowObject("Trang_4","m_diem",1);
	SetShowObject("Trang_4","lam_lai",1);
	InvalidateObj("Trang_4","");
	return diem;
}
////
var doan_van="";
var cau_van="";
var Startdot= 0;
var Enddot= 0;
var myString="";
var laplai=2;
function KhoiTao(){
	myString= GetText("","chinh_ta");
	Startdot= 0;
 	Enddot= 0;
      }
function  OnStartSpeak(){
	//Message("stare");
}
var dem_doc=0;
var m_delay=1000;
function  OnEndSpeak(){
     if(Enddot==-1){
	SetText("","Text_1",myString);
	KhoiTao();
      InvalidateObj("","");
      return;
	}
     if(dem_doc>laplai){
         Startdot=Enddot+1;
	   dem_doc=0;
	}
      Delay("DocViet()",m_delay);
}

function DocViet() {
dem_doc++;
Enddot= indexOf(myString,"\n",Startdot);
var Enddot1= indexOf(myString,".",Startdot);
if(Enddot1!=-1)
Enddot= min(Enddot,Enddot1);
if(Enddot==-1){
 cau_van=myString;
 Speak("Hết bài. Nghe và dò lại. "+cau_van,"VN","{pitch: 1,rate: 0.8, volume: 1,onstart: OnStartSpeak, onend: OnEndSpeak}");
}
 else{
 cau_van= subString(myString,Startdot, Enddot-Startdot+1);
 Speak(cau_van,"VN","{pitch: 1,rate: 0.8, volume: 1,onstart: OnStartSpeak, onend: OnEndSpeak}");
	}
m_delay = wordCountStr(cau_van)*1500;
SetText("","Text_1",cau_van);
SetText("","msg","Đang đọc lần "+dem_doc);
InvalidateObj("","");
}

////
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
KhoiTao();
  return;
}

function Trang_4()
{
SetText("Trang_4","m_diem","" );
InitBaiHoc4();

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
 height: 1770 
 });

 var Trang_2 = new Kinetic.Layer({name: 'Trang_2',callback:'Trang_2()',x:0,y:0});
var Trang_2_Backrounnd = CreText('Trang_2_Backrounnd',0,0,640,350,'','#004040','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#004040','0','0','0','','0','0','0','0',0,0,'');
Trang_2.add(Trang_2_Backrounnd);
var quang2 = CreText('quang2',52,146,545,216,"Trốn học đi chơi, Ếch Xanh gặp nạn. May mà mẹ nó tới kịp thời để cứu.\r\nẾch Xanh hỏi mẹ:\r\n- Mẹ ơi, mặt đất rộng lắm, trời cao lắm phải không ạ? Trời không phải là cái vung đúng không mẹ?\r\n- Con muốn biết mặt đất như thế nào, trời là cái gì thì con phải đi học.\r\nẾch Xanh theo mẹ đến trường. Chú không trốn học nữa. Kìa chú đang ngồi trong lớp của thầy giáo Cóc. Thầy đứng trên bục, tay cầm thước chỉ vào từng chữ trên bảng. Cả lớp đọc theo thầy, giọng Ếch đồng thanh nghe rất to và rất vang.\r\n",'#00000000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.70);
Trang_2.add(quang2);
var quang1 = CreText('quang1',140,90,350,29,"Ếch Xanh đi học",'#00000000','#ffffff','#ffffff','#ffffff','',22,'Arial','Bold','center','middle',0,'0.00','30','30',0,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Trang_2.add(quang1);
var DrawText_2 = CreText('DrawText_2',2,28,423,34,"A. KIỂM TRA ĐỌC\r\n",'#00000000','#ffffff','#ffff00','#ffff00','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Trang_2.add(DrawText_2);
var Drawtext_2 = CreText('Draw text_2',31,60,289,26,"I. ĐỌC THÀNH TIẾNG:",'#00000000','#ffffff','#80ffff','#80ffff','',14,'Arial','Bold','left','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Trang_2.add(Drawtext_2);
var Drawtext_1 = CreText('Draw text_1',17,5,614,31,"BÀI TẬP TIẾNG VIỆT LỚP HAI",'#00000000','#ffffff','#0080ff','#ff0000','',18,'Arial','Bold','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#ffffff','0','0','4','1',0,0,'#00000000',0,1.50);
Trang_2.add(Drawtext_1);
var Drawtext_7 = CreText('Draw text_7',331,319,281,28,"(NGUYỄN KIÊN)",'#00000000','#ffffff','#ffffff','#ffffff','',11,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Trang_2.add(Drawtext_7);
var Text_9 = CreText('Text_9',431,90,25,25,"",'#ffffff','#ffffff','#00000000','#ffffff','ID_IMAGE1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','2','2','#00000000','0','0','4','0',0,0, '#00000000',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("","quang1") +". "+ GetText("","quang2")  ,"VN");
  return;
}
 );
Trang_2.add(Text_9);
stage.add(Trang_2);

 var Trang_1 = new Kinetic.Layer({name: 'Trang_1',callback:'Trang_1()',x:0,y:350});
var Trang_1_Backrounnd = CreText('Trang_1_Backrounnd',0,0,640,430,'','#004040','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#004040','0','0','0','','0','0','0','0',0,0,'');
Trang_1.add(Trang_1_Backrounnd);
var Cau_hoi_0 = CreText('Cau_hoi_0',50,33,586,27,"1. Điều gì xãy ra khi Ếch Xanh trốn học đi chơi?",'#00000000','#ffffff','#ffff00','#fffe99','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Trang_1.add(Cau_hoi_0);
var Cau_hoi_1 = CreText('Cau_hoi_1',50,122,586,27,"2. Tại sao Ếch Xanh theo mẹ đến trường?\r\n",'#00000000','#ffffff','#ffff00','#fffe99','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Trang_1.add(Cau_hoi_1);
var Cau_hoi_2 = CreText('Cau_hoi_2',50,212,586,39,"3. Thái độ học tập của Ếch Xanh như thế nào?",'#00000000','#ffffff','#ffff00','#fffe99','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Trang_1.add(Cau_hoi_2);
var Cau_hoi_3 = CreText('Cau_hoi_3',50,314,586,27,"4. Câu nào dưới đây thuộc câu kể? (Ai hoặc con gì, cái gì, làm gì)",'#00000000','#ffffff','#ffff00','#fffe99','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Trang_1.add(Cau_hoi_3);
var a_0 = CreText('a_0',80,59,429,22,"a. Ếch Xanh gặp nạn.",'#00000000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
a_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(a_0);
var b_0 = CreText('b_0',80,82,429,22,"b. Ếch Xanh bị mẹ mắng.",'#00000000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
b_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(b_0);
var c_0 = CreText('c_0',80,103,429,22,"c. Ếch xanh ở lại lớp.",'#00000000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
c_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(c_0);
var a_1 = CreText('a_1',80,146,429,22,"a. Ếch Xanh trốn học đi chơi gặp nạn.",'#00000000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
a_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(a_1);
var b_1 = CreText('b_1',79,168,429,22,"b. Ếch Xanh muốn hiểu biết về trời đất và mọi điều.",'#00000000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
b_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(b_1);
var c_1 = CreText('c_1',80,189,429,22,"c. Thầy giáo Cóc dạy rất hay, Ếch xanh rất quý thầy.",'#00000000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
c_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(c_1);
var a_2 = CreText('a_2',80,245,429,22,"a. Chán nản.",'#00000000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
a_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(a_2);
var b_2 = CreText('b_2',80,267,429,22,"b. Bình thường.",'#00000000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
b_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(b_2);
var c_2 = CreText('c_2',80,288,429,22,"c. Chăm chú, hăng say.",'#00000000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
c_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(c_2);
var a_3 = CreText('a_3',80,345,429,22,"a. Chú Ếch Xanh tinh nghịch.",'#00000000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
a_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(a_3);
var b_3 = CreText('b_3',80,367,479,22,"b. Bầu trời bao la lắm phải không ạ?",'#00000000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
b_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(b_3);
var c_3 = CreText('c_3',80,388,429,22,"c. Mẹ hỏi Ếch Xanh",'#00000000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
c_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(c_3);
var check_0 = CreText('check_0',74,60,18,18,"c",'#ffffff','#ffffff','#005555','#005555','',14,'Arial','Bold','center','middle',2,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Trang_1.add(check_0);
var check_1 = CreText('check_1',74,171,18,18,"b",'#ffffff','#ffffff','#005555','#005555','',14,'Arial','Bold','center','middle',2,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Trang_1.add(check_1);
var check_2 = CreText('check_2',77,291,18,18,"b",'#ffffff','#ffffff','#005555','#005555','',14,'Arial','Bold','center','middle',2,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Trang_1.add(check_2);
var check_3 = CreText('check_3',78,350,18,18,"a",'#ffffff','#ffffff','#005555','#005555','',14,'Arial','Bold','center','middle',2,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Trang_1.add(check_3);
var quang3 = CreText('quang3',29,3,606,29,"II. KHOANH TRÒN CHỮ CÁI TRƯỚC Ý TRẢ LỜI ĐÚNG CHO TỪNG CÂU HỎI SAU:\r\n",'#00000000','#ffffff','#80ffff','#80ffff','',14,'Arial','Bold','left','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Trang_1.add(quang3);
stage.add(Trang_1);

 var Trang_3 = new Kinetic.Layer({name: 'Trang_3',callback:'Trang_3()',x:0,y:780});
var Trang_3_Backrounnd = CreText('Trang_3_Backrounnd',0,0,640,570,'','#004040','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#004040','0','0','0','','0','0','0','0',0,0,'');
Trang_3.add(Trang_3_Backrounnd);
var chinh_ta = CreText('chinh_ta',147,80,313,136,"Em đến trường học bao điều lạ\r\nMôi mỉm cười là những nụ hoa.\r\nEm thấy mình là hoa hồng nhỏ\r\nTrời mênh mông đất hiền hòa.\r\nBàn chân em đi nhà nhẹ\r\nĐưa em vào tình người bao la.",'#00000000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Trang_3.add(chinh_ta);
var Drawtext_4 = CreText('Draw text_4',41,237,418,25,"1. Điền vào chỗ trống để hoàn chỉnh bản tự thuật.",'#00000000','#ffffff','#ffffff','#ffffff','',14,'Arial','Bold','left','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Trang_3.add(Drawtext_4);
var chinh_ta_1 = CreText('chinh_ta_1',55,285,549,331,"Họ và tên: ............................................................................................\r\nNam, nữ: ..............................................................................................\r\nNgày sinh: ............................................................................................\r\nNơi sinh: ..............................................................................................\r\nQuên quán: ..........................................................................................\r\nChổ ở hiện nay: ...................................................................................\r\nHọc sinh lớp: ......................Trường....................................................\r\nHọ và tên Bố...........................................................Tuổi:.....................\r\nHọ và tên Mẹ...........................................................Tuổi:.....................\r\n\r\n                                              ..........., ngày.........tháng.........năm........\r\n                                                                  Người viết\r\n\r\n\r\n\r\n                                                        .................................................\r\n\r\n\r\n\r\n\r\n",'#00000000','#004040','#ffffff','#ffffff','',12,'Arial','Normal','left','top',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.70);
Trang_3.add(chinh_ta_1);
var Drawtext_8 = CreText('Draw text_8',359,198,169,22,"(TRỊNH CÔNG SƠN)",'#00000000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Trang_3.add(Drawtext_8);
var Drawtext_1 = CreText('Draw text_1',124,259,246,29,"BẢN TỰ THUẬT",'#00000000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Trang_3.add(Drawtext_1);
var Text_2 = CreText('Text_2',32,209,453,28,"II. TẬP LÀM VĂN",'#00000000','#ffffff','#80ffff','#80ffff','',14,'Arial','Bold','left','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Trang_3.add(Text_2);
var kiem_tra_viet = CreText('kiem_tra_viet',3,5,249,25,"B. KIỂM TRA VIẾT",'#00000000','#ffffff','#ffff00','#ffff00','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Trang_3.add(kiem_tra_viet);
var de_chinh_ta = CreText('de_chinh_ta',34,25,453,28,"I. CHÍNH TẢ - NGHE - VIẾT",'#00000000','#ffffff','#80ffff','#80ffff','',14,'Arial','Bold','left','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Trang_3.add(de_chinh_ta);
var title = CreText('title',181,47,282,29,"Em là hoa hồng nhỏ",'#00000000','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Trang_3.add(title);
var Text_9 = CreText('Text_9',229,23,25,25,"",'#ffffff','#ffffff','#00000000','#ffffff','ID_IMAGE1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','2','2','#00000000','0','0','4','0',0,0, '#00000000',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocViet();
  return;
}
 );
Trang_3.add(Text_9);
var msg = CreText('msg',419,80,194,85,"Nhấn vào hình cái loa, nghe và viết lại",'#00000000','#ffffff','#ffff00','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Trang_3.add(msg);
stage.add(Trang_3);

 var Trang_4 = new Kinetic.Layer({name: 'Trang_4',callback:'Trang_4()',x:0,y:1350});
var Trang_4_Backrounnd = CreText('Trang_4_Backrounnd',0,0,640,420,'','#004040','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#004040','0','0','0','','0','0','0','0',0,0,'');
Trang_4.add(Trang_4_Backrounnd);
var b_1 = CreText('b_1',70,167,429,22,"b. Em đi học về rồi à?",'#00000000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
b_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL4();
  return;
}
 );
Trang_4.add(b_1);
var Cau_hoi_0 = CreText('Cau_hoi_0',41,32,586,27,"1. Em chào bà cụ hàng xóm, khi em gặp bà ở ngoài đường:",'#00000000','#ffffff','#ffff00','#fffe99','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Trang_4.add(Cau_hoi_0);
var Cau_hoi_1 = CreText('Cau_hoi_1',41,121,586,27,"2. Chào em bé, khi em bé đi học mẫu giáo về:\r\n",'#00000000','#ffffff','#ffff00','#fffe99','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Trang_4.add(Cau_hoi_1);
var Cau_hoi_2 = CreText('Cau_hoi_2',41,211,586,39,"3. Chào bố mẹ khi em đi học về:",'#00000000','#ffffff','#ffff00','#fffe99','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Trang_4.add(Cau_hoi_2);
var a_0 = CreText('a_0',71,58,429,22,"a. Chào bà",'#00000000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
a_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL4();
  return;
}
 );
Trang_4.add(a_0);
var b_0 = CreText('b_0',71,81,429,22,"b. Xin chào bà",'#00000000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
b_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL4();
  return;
}
 );
Trang_4.add(b_0);
var c_0 = CreText('c_0',71,102,429,22,"c. Cháu chào bà ạ.",'#00000000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
c_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL4();
  return;
}
 );
Trang_4.add(c_0);
var a_1 = CreText('a_1',71,145,429,22,"a. Chào em ạ.",'#00000000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
a_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL4();  return;
}
 );
Trang_4.add(a_1);
var c_1 = CreText('c_1',71,188,429,22,"c. Anh/Chị chào em ạ.",'#00000000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
c_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL4();
  return;
}
 );
Trang_4.add(c_1);
var a_2 = CreText('a_2',71,244,429,22,"a. Bố mẹ ạ.",'#00000000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
a_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL4();
  return;
}
 );
Trang_4.add(a_2);
var b_2 = CreText('b_2',71,266,429,22,"b. Con chào bố mẹ.",'#00000000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
b_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL4();
  return;
}
 );
Trang_4.add(b_2);
var c_2 = CreText('c_2',71,287,429,22,"c. Chào bố mẹ, con đã về.",'#00000000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
c_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL4();
  return;
}
 );
Trang_4.add(c_2);
var check_0 = CreText('check_0',65,59,18,18,"c",'#ffffff','#ffffff','#005555','#005555','',14,'Arial','Bold','center','middle',2,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Trang_4.add(check_0);
var check_1 = CreText('check_1',65,170,18,18,"b",'#ffffff','#ffffff','#005555','#005555','',14,'Arial','Bold','center','middle',2,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Trang_4.add(check_1);
var check_2 = CreText('check_2',68,290,18,18,"b",'#ffffff','#ffffff','#005555','#005555','',14,'Arial','Bold','center','middle',2,'0.00','30','30',1,'#ffffff','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Trang_4.add(check_2);
var Text_1 = CreText('Text_1',30,-4,466,36,"2. Khoanh tròn chữ cái trước lời chào phù hợp nhất.",'#00000000','#ffffff','#ffffff','#ffff00','',14,'Arial','Bold','left','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Trang_4.add(Text_1);
var lam_lai = CreText('lam_lai',258,360,119,32,"Làm Lại",'#004040','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#00b3b3','4','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitBaiHoc();
InitBaiHoc4();
SetShowObject("Trang_4","begin",1);
SetShowObject("Trang_4","lam_lai",0);
InvalidateObj("Trang_4","");
InvalidateObj("Trang_1","");
GetVer();
  return;
}
 );
Trang_4.add(lam_lai);
var begin = CreText('begin',258,360,119,32,"Nộp Bài",'#004040','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#00b3b3','4','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
begin.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var diem=0;
diem= CheckKq();
diem=diem+CheckKq4();
SetText("Trang_4","m_diem","Bạn đã làm đúng " +diem+"/7 câu" );
SetShowObject("Trang_4","begin",0);
SetShowObject("Trang_4","lam_lai",1);
InvalidateObj("Trang_4","");
InvalidateObj("Trang_1","");
UpdateScore(diem);
return;
}
 );
Trang_4.add(begin);
var m_diem = CreText('m_diem',138,311,382,45,"Bạn đã làm đúng 4/7 câu.",'#00000000','#ffffff','#00ff00','#00ff00','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'#00000000','#ffffff','0','0','#00000000','0','0','4','0',0,0,'#00000000',0,1.50);
Trang_4.add(m_diem);
stage.add(Trang_4);
InitLacVietScript();
};
