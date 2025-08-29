folder_Resource ='data/Tap_doc_em_khong_giam_nhan_dau_a'
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
SetShowObject("Trang_1","begin",1);
SetShowObject("Trang_1","m_diem",0);
SetShowObject("Trang_1","lam_lai",0);
GetVer();
InvalidateObj("Trang_1","");
}

function ChonTL(){
	var name= GetName("Trang_1");
	var t=  GetTop("Trang_1",name);
	var l=  GetLeft("Trang_1",name);
	var cau = rightStr(name,1);
	a_tl[cau]= leftStr(name,1);
	MoveObjectTo("Trang_1","check_"+cau,l-3,t+3);
	SetShowObject("Trang_1","check_"+cau,1);
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
	UpdateScore(diem);
	SetShowObject("Trang_1","begin",0);
	SetShowObject("Trang_1","m_diem",1);
	SetShowObject("Trang_1","lam_lai",1);
	InvalidateObj("Trang_1","");
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
 height: 960 
 });

 var Trang_2 = new Kinetic.Layer({name: 'Trang_2',x:0,y:0});
var Trang_2_Backrounnd = CreText('Trang_2_Backrounnd',0,0,640,480,'','#004040','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#004040','0','0','0','','0','0','0','0',0,0,'');
var quang2 = CreText('quang2',39,114,598,333,"Lên sáu tuổi được học lớp 1, Nga thích lắm. Bài tập viết đầu tiên, Nga viết rất đẹp. Cô giáo đưa bài của Nga cho các bạn xem. Cô nói:\r\n-   Em viết đẹp lắm. Cô khen em và cho em 10 điểm.\r\nNga lễ phép trả lời:\r\n-   Thưa cô em không giám nhận điểm cô cho đâu ạ.\r\nCô giáo ngạc nhiên hỏi Nga:\r\n-   Ơ! Sao em lại không nhận?\r\n-   Dạ thưa cô, vì mẹ em dặn ai cho gì cũng không được lấy mà.\r\nCả lớp cười ồ!",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','left','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var quang1 = CreText('quang1',135,63,350,41,"Em không dám nhận đâu ạ !",'rgba(0,0,0,0)','#ffffff','#ffff00','#ffffff','',22,'Arial','Bold','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var quang0 = CreText('quang0',20,5,423,41,"I. ĐỌC ĐÚNG MẪU CHUYỆN SAU:",'rgba(0,0,0,0)','#ffffff','#ccffff','#ccffff','',16,'Arial','Bold','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var quang3 = CreText('quang3',41,372,566,79,"II. KHOANH TRÒN CHỮ CÁI TRƯỚC Ý TRẢ LỜI ĐÚNG CHO TỪNG CÂU HỎI SAU:",'rgba(0,0,0,0)','#ffffff','#ccffff','#ccffff','',16,'Arial','Bold','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Trang_2.add(Trang_2_Backrounnd,quang2,quang1,quang0,quang3);
stage.add(Trang_2);

 var Trang_1 = new Kinetic.Layer({name: 'Trang_1',callback:'Trang_1()',x:0,y:480});
var Trang_1_Backrounnd = CreText('Trang_1_Backrounnd',0,0,640,480,'','#004040','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#004040','0','0','0','','0','0','0','0',0,0,'');
var Cau_hoi_0 = CreText('Cau_hoi_0',42,9,473,27,"1. Lên 6 tuổi Nga được làm gì?",'rgba(0,0,0,0)','#ffffff','#fffe99','#fffe99','',16,'Arial','Bold Italic','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var a_0 = CreText('a_0',77,36,429,22,"a. Tập tô.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_0 = CreText('b_0',77,59,429,22,"b. Tập viết.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_0 = CreText('c_0',77,80,429,22,"c. Học lớp 1.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var Cau_hoi_1 = CreText('Cau_hoi_1',49,114,473,27,"2. Tại sao cô khen bé Nga?",'rgba(0,0,0,0)','#ffffff','#fffe99','#fffe99','',16,'Arial','Bold Italic','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var a_1 = CreText('a_1',77,143,429,22,"a. Vì Nga chăm học.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_1 = CreText('b_1',77,165,429,22,"b. Vì bé viết rất đẹp.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_1 = CreText('c_1',77,186,429,22,"c. Vì bé thích tập viết",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var Cau_hoi_2 = CreText('Cau_hoi_2',48,227,473,27,"3. Bé Nga nói gì khi cô khăn và cho bé 10 điểm?",'rgba(0,0,0,0)','#ffffff','#fffe99','#fffe99','',16,'Arial','Bold Italic','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var a_2 = CreText('a_2',77,258,429,22,"a. Bé không thích khen.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_2 = CreText('b_2',77,280,429,22,"b. Bé không nhận điểm 10.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_2 = CreText('c_2',77,301,429,22,"c. Bé không thích điểm 10.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var Cau_hoi_3 = CreText('Cau_hoi_3',50,346,473,27,"4. Tại sao cả lớp cười ồ?",'rgba(0,0,0,0)','#ffffff','#fffe99','#fffe99','',16,'Arial','Bold Italic','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var a_3 = CreText('a_3',77,378,429,22,"a. Bé Nga nhắc lại lời mẹ dặn.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_3 = CreText('b_3',77,400,429,22,"b. Vì bé Nga không nhận điểm 10.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_3 = CreText('c_3',77,421,429,22,"c. Vì bé Nga tưởng nhận điểm 10 là nhận quà",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var check_0 = CreText('check_0',74,36,18,18,"",'rgba(0,0,0,0)','#ffffff','#ff0000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#ffffff','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_1 = CreText('check_1',74,167,18,18,"",'rgba(0,0,0,0)','#ffffff','#ff0000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#ffffff','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_2 = CreText('check_2',77,303,18,18,"",'rgba(0,0,0,0)','#ffffff','#ff0000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#ffffff','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_3 = CreText('check_3',78,382,18,18,"x",'rgba(0,0,0,0)','#ffffff','#ff0000','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#ffffff','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var begin = CreText('begin',238,446,119,32,"Nộp Bài",'#004040','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',3,'0.00','6','0',1,'#ffffff','#00b3b3','4','1','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
begin.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckKq();
  return;
}
 );
var m_diem = CreText('m_diem',506,12,115,114,"8",'rgba(0,0,0,0)','#ffffff','#ff0000','#ffffff','',72,'Arial','','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var lam_lai = CreText('lam_lai',511,114,119,40,"Làm Lại",'#004040','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',3,'0.00','6','0',1,'#ffffff','#00b3b3','4','1','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitBaiHoc();
  return;
}
 );
Trang_1.add(Trang_1_Backrounnd,Cau_hoi_0,a_0,b_0,c_0,Cau_hoi_1,a_1,b_1,c_1,Cau_hoi_2,a_2,b_2,c_2,Cau_hoi_3,a_3,b_3,c_3,check_0,check_1,check_2,check_3,begin,m_diem,lam_lai);
stage.add(Trang_1);
InitLacVietScript();
};
