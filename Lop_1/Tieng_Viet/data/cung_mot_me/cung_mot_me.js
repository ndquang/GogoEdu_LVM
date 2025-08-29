folder_Resource ='data/cung_mot_me'
styteView = 'Ver';
var a_kq=["c","b","c","b"];
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
		SetText("Trang_1","check_"+i,"x");
	}
	else diem=diem+2.5;
}
	SetText("Trang_1","m_diem",diem);
	SetShowObject("Trang_1","begin",0);
	SetShowObject("Trang_1","m_diem",1);
	SetShowObject("Trang_1","lam_lai",1);
	UpdateScore(diem);
	InvalidateObj("Trang_1","");
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
 height: 680 
 });

 var Trang_2 = new Kinetic.Layer({name: 'Trang_2',callback:'Trang_2()',x:0,y:0});
var Trang_2_Backrounnd = CreText('Trang_2_Backrounnd',0,0,640,200,'','#004040','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#004040','0','0','0','','0','0','0','0',0,0,'');
var noi_dung = CreText('noi_dung',19,78,621,149,"Minh và Dũng là hai anh em học cùng một lớp. Có lần cô giáo ra bài tập làm văn: “Hãy viết về mẹ của mình.” Minh viết xong, Dũng chép lại y nguyên.\r\nHôm sau khi trả bài, cô giáo hỏi?\r\n - Vì sao hai bài này giống hệt nhau?\r\nDũng trả lời:\r\n - Dạ thưa cô. Vì… chúng em  cùng một mẹ ạ!\r\n",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.80);
var title = CreText('title',136,38,350,26,"Cùng một mẹ",'rgba(0,0,0,0)','#ffffff','#ffff00','#ffffff','',22,'Arial','Bold','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var quang0 = CreText('quang0',20,1,423,41,"1. ĐỌC ĐÚNG MẪU CHUYỆN SAU:",'rgba(0,0,0,0)','#ffffff','#c0ffff','#ffffff','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
quang0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var Image_2 = CreText('Image_2',414,25,47,46,'','rgba(0,0,0,0)','','','','ID_IMAGE3.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
Image_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 var textSp = GetText("","title") + " \r\n "+   GetText("","noi_dung") ;
Speak(textSp,"VN");
  return;
}
 );
Trang_2.add(Trang_2_Backrounnd,noi_dung,title,quang0,Image_2);
stage.add(Trang_2);

 var Trang_1 = new Kinetic.Layer({name: 'Trang_1',callback:'Trang_1()',x:0,y:200});
var Trang_1_Backrounnd = CreText('Trang_1_Backrounnd',0,0,640,480,'','#004040','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#004040','0','0','0','','0','0','0','0',0,0,'');
var Cau_hoi_0 = CreText('Cau_hoi_0',45,38,473,27,"1. Câu chuyện kể về ai?",'rgba(0,0,0,0)','#ffffff','#fffe99','#fffe99','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Cau_hoi_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var a_0 = CreText('a_0',80,65,429,22,"a. Mẹ của em.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_0 = CreText('b_0',80,88,429,22,"b. Minh và Dũng.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_0 = CreText('c_0',80,109,429,22,"c. Hai anh em Minh và Dũng",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var Cau_hoi_1 = CreText('Cau_hoi_1',52,131,574,27,"2. Cô giáo yêu cầu học sinh viết về điều gì?",'rgba(0,0,0,0)','#ffffff','#fffe99','#fffe99','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Cau_hoi_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var a_1 = CreText('a_1',80,156,429,22,"a. Tập làm văn.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_1 = CreText('b_1',79,178,429,22,"b. Mẹ của mình.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_1 = CreText('c_1',80,199,429,22,"c. Lời bài giải.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var Cau_hoi_2 = CreText('Cau_hoi_2',49,222,592,33,"3. Dũng làm bài bằng cách nào?",'rgba(0,0,0,0)','#ffffff','#fffe99','#fffe99','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Cau_hoi_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var a_2 = CreText('a_2',80,255,429,22,"a. Tự mình làm.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_2 = CreText('b_2',80,277,429,22,"b. Trao đổi với Minh.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_2 = CreText('c_2',80,298,429,22,"c. Chép bài của Minh.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var Cau_hoi_3 = CreText('Cau_hoi_3',53,327,586,27,"4. Khi cô giáo hỏi, tại sao hai bài giống nhau, Dũng giải thích thế nào?",'rgba(0,0,0,0)','#ffffff','#fffe99','#fffe99','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Cau_hoi_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var a_3 = CreText('a_3',80,355,429,22,"a. Vì bài quá khó.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_3 = CreText('b_3',80,377,479,22,"b. Vì hai anh em cùng một mẹ.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_3 = CreText('c_3',80,398,429,22,"c. Vì Dũng đã chép bài của Minh.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var check_0 = CreText('check_0',77,65,18,18,"",'rgba(0,0,0,0)','#ffffff','#ff0000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','30','30',2,'#ffffff','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_1 = CreText('check_1',77,180,18,18,"",'rgba(0,0,0,0)','#ffffff','#ff0000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','30','30',2,'#ffffff','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_2 = CreText('check_2',80,300,18,18,"",'rgba(0,0,0,0)','#ffffff','#ff0000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','30','30',2,'#ffffff','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_3 = CreText('check_3',81,359,18,18,"x",'rgba(0,0,0,0)','#ffffff','#ff0000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','30','30',2,'#ffffff','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var m_diem = CreText('m_diem',507,47,115,114,"8",'rgba(0,0,0,0)','#ffffff','#ff0000','#ffffff','',72,'Arial','','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var lam_lai = CreText('lam_lai',501,156,119,32,"Làm Lại",'#98fb98','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#00b300','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitBaiHoc();
  return;
}
 );
var quang3 = CreText('quang3',27,5,606,31,"2. CHỌN CHỮ CÁI TRƯỚC Ý TRẢ LỜI ĐÚNG CHO TỪNG CÂU HỎI SAU:",'rgba(0,0,0,0)','#ffffff','#c0ffff','#ffffff','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
quang3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","");
  return;
}
 );
var begin = CreText('begin',233,437,119,32,"Nộp Bài",'#ffff97','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#ffd700','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
begin.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckKq();
  return;
}
 );
Trang_1.add(Trang_1_Backrounnd,Cau_hoi_0,a_0,b_0,c_0,Cau_hoi_1,a_1,b_1,c_1,Cau_hoi_2,a_2,b_2,c_2,Cau_hoi_3,a_3,b_3,c_3,check_0,check_1,check_2,check_3,m_diem,lam_lai,quang3,begin);
stage.add(Trang_1);
InitLacVietScript();
};
