folder_Resource ='/data/Sau_Rieng';
var a_kq=["c","c","c","a"];
var a_tl=[0,0,0,0];
function InitBaiHoc(){
	for(var i=0;i<4;i++)
		{
		SetShowObject("Trang_1","check_"+i,0);		
		SetFontColor("Trang_1","a_"+i,"#000000");
		SetFontColor("Trang_1","b_"+i,"#000000");
		SetFontColor("Trang_1","c_"+i,"#000000");
		SetText("Trang_1","check_"+i,"");
		a_tl[i]=0;
		}
GetVer();
SetShowObject("","begin",1);
SetShowObject("","m_diem",0);
SetShowObject("","lam_lai",0);
SetText("","m_diem","" );
InvalidateObj("","");
}

function ChonTL(){
	PlaySound("ID_CLICK");
	var name= GetName("");
	var t=  GetTop("",name);
	var l=  GetLeft("",name);
	var cau = rightStr(name,1);
	a_tl[cau]= leftStr(name,1);
	SetText("","check_"+cau,a_tl[cau]);
	MoveObjectTo("","check_"+cau,l-3,t+3);
	SetShowObject("","check_"+cau,1);
	InvalidateObj("","");
}
function CheckKq(){
 var diem=0;
 for(var i=0;i<4;i++){
	if(a_kq[i] != a_tl[i])
	{
		SetFontColor("",a_kq[i]+"_"+i,"#008000");
		SetFontColor("",a_tl[i]+"_"+i,"#CC0000");
	}
	else {
		diem=diem+2.5;
		SetFontColor("",a_kq[i]+"_"+i,"#008000");

	    }
	
}
	SetText("","m_diem",diem);
	SetShowObject("","begin",0);
	SetShowObject("","m_diem",1);
	SetShowObject("","lam_lai",1);
	InvalidateObj("","");
	return diem;
}
var m_ngh= false;
function NgheDoc(){
	var tt= GetText("","tieu_de")+". "+ GetText("","noi_dung");
	Speak(tt,"VN");
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
 width: 600,
 height: 720 
 });

 var Trang_1 = new Kinetic.Layer({name: 'Trang_1',callback:'Trang_1()'});
var Trang_1_Backrounnd = CreText('Trang_1_Backrounnd',0,0,600,720,'','#fffff0','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#98fb98','3','0','0','','0','0','0','0',0,0,'');
var tieu_de = CreText('tieu_de',221,41,174,24,"SẦU RIÊNG",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',18,'Arial','Bold','left','middle',0,'0.00','30','30',0,'#ffffff','#cefdce','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tieu_de.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NgheDoc();
  return;
}
 );
var tac_gia = CreText('tac_gia',294,254,165,21,"PHẠM HỔ",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',11,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Cau_hoi_0 = CreText('Cau_hoi_0',92,298,437,31,"1. Những từ ngữ nào nói lên quả sầu riêng chín rất nhanh?",'rgba(0,0,0,0)','#ffffff','#8000ff','#8000ff','',14,'Arial','Bold','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Cau_hoi_1 = CreText('Cau_hoi_1',94,392,423,31,"2. Quả sầu riêng được tả như thế nào?",'rgba(0,0,0,0)','#ffffff','#8000ff','#8000ff','',14,'Arial','Bold','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Cau_hoi_2 = CreText('Cau_hoi_2',95,489,435,34,"3. Câu :“lá chiều ngủ khép ung dung” thuộc kiểu câu nào? ",'rgba(0,0,0,0)','#ffffff','#8000ff','#8000ff','',14,'Arial','Bold','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Cau_hoi_3 = CreText('Cau_hoi_3',94,589,425,23,"4. Từ “tưng bừng” thuộc loại từ nào dưới đây?",'rgba(0,0,0,0)','#ffffff','#8000ff','#8000ff','',14,'Arial','Bold','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var a_0 = CreText('a_0',118,329,348,22,"a. vừa chín, quả đầu, đã nghe",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_0 = CreText('b_0',118,351,386,23,"b. gió thổi, thơm lừng, vườn sau.",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_0 = CreText('c_0',118,376,348,22,"c. Cả a và b đều đúng.",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var a_1 = CreText('a_1',118,423,386,22,"a. Vỏ ngoài có gai nhọn.",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_1 = CreText('b_1',118,449,389,19,"b. Múi to và có vị ngọt.",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_1 = CreText('c_1',118,473,379,19,"c. Cả a và b đều đúng.",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var a_2 = CreText('a_2',119,523,348,22,"a. Ai là gì?",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_2 = CreText('b_2',118,544,348,22,"b. Ai làm gì?",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_2 = CreText('c_2',118,565,333,22,"c. Ai thế nào?",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var a_3 = CreText('a_3',119,611,348,22,"a. Từ chỉ trạng thái",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_3 = CreText('b_3',118,633,348,22,"b. Từ chỉ hoạt động.",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_3 = CreText('c_3',118,654,348,22,"c. Từ chỉ đặc điểm.",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var check_0 = CreText('check_0',118,327,18,18,"c",'#000000','#000000','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',2,'0.00','30','30',1,'#000000','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_1 = CreText('check_1',116,442,18,18,"b",'#000000','#000000','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',2,'0.00','30','30',1,'#000000','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_2 = CreText('check_2',116,518,18,18,"b",'#000000','#000000','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',2,'0.00','30','30',1,'#000000','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_3 = CreText('check_3',116,652,18,18,"a",'#000000','#000000','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',2,'0.00','30','30',1,'#000000','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_4 = CreText('Text_4',1,2,87,20,"Tiết 11:",'#8000ff','#8000ff','#ffffff','#ffffff','',12,'Arial','Bold','center','middle',6,'0.00','12','75',1,'#000000','#8000ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var lam_lai = CreText('lam_lai',375,679,87,25,"Làm Lại",'#400080','#ffad5b','#fffe99','#fffe99','',14,'Arial','Normal','center','middle',3,'0.00','9','75',1,'#000000','#8000ff','4','2','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitBaiHoc();
SetShowObject("Trang_1","begin",1);
SetShowObject("Trang_1","lam_lai",0);
InvalidateObj("Trang_1","");
  return;
}
 );
var begin = CreText('begin',375,680,87,25,"Nộp Bài",'#400080','#ffad5b','#fffe99','#fffe99','',14,'Arial','Normal','center','middle',3,'0.00','10','75',1,'#000000','#8000ff','4','2','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
begin.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PlaySound("ID_TEST");
var diem=0;
diem= CheckKq();
SetText("Trang_1","m_diem",diem + " điểm");
UpdateScore(diem);
SetShowObject("","begin",0);
SetShowObject("","lam_lai",1);
InvalidateObj("","");
return;
}
 );
var m_diem = CreText('m_diem',294,630,254,39,"điểm",'rgba(0,0,0,0)','#ffffff','#ff0000','#00ff00','',24,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var noi_dung = CreText('noi_dung',111,75,349,217,"Nhà ai vừa chín quả đầu\r\nĐã nghe gió thổi vườn sau thơm lừng\r\nLá chiều ngủ khép ung dung\r\nĐể cùng dậy với tưng bừng nắng mai\r\nVàng thơm sau lớp vỏ gai\r\nMúi to, mật ngọt cho ai thỏa lòng\r\nMời cô, mời bác ăn cùng\r\nSầu riêng mà hóa vui chung trăm nhà.\r\n",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','top',3,'0.00','6','0',0,'rgba(0,0,0,0)','rgba(255,255,224,0.67)','0','3','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,2.00);
var nghe_doc = CreText('nghe_doc',344,34,36,35,"",'#ffffff','#ffffff','#000000','#000000','ID_IMAGE1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
nghe_doc.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NgheDoc();
  return;
}
 );
var Text_1 = CreText('Text_1',14,27,135,35,"I. Đọc Hiểu",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',17,268,172,35,"II. Trả lời câu hỏi",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Trang_1.add(Trang_1_Backrounnd,tieu_de,tac_gia,Cau_hoi_0,Cau_hoi_1,Cau_hoi_2,Cau_hoi_3,a_0,b_0,c_0,a_1,b_1,c_1,a_2,b_2,c_2,a_3,b_3,c_3,check_0,check_1,check_2,check_3,Text_4,lam_lai,begin,m_diem,noi_dung,nghe_doc,Text_1,Text_2);
stage.add(Trang_1);
InitLacVietScript();
};
