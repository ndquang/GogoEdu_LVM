folder_Resource ='data/Bai_toan_nhieu_hon_it_hon'
styteView = 'Ver';
var a_kq=["b","a","d","c","b","c"];
var a_tl=[0,0,0,0];
function InitBaiHoc(){
	for(var i=0;i<9;i++)
		{
		SetShowObject("Trang_1","check_"+i,0);
		SetFontColor("Trang_1","a_"+i,"#000000");
		SetFontColor("Trang_1","b_"+i,"#000000");
		SetFontColor("Trang_1","c_"+i,"#000000");
		SetFontColor("Trang_1","d_"+i,"#000000");
		SetText("Trang_1","check_"+i,"");
		a_tl[i]=0;
		}
SetShowObject("Trang_1","begin",1);
SetCursor("Trang_2","Group_1","pointer");
SetShowObject("Trang_1","m_diem",0);
SetShowObject("Trang_1","lam_lai",0);
SetText("Trang_1","m_diem","" );
InvalidateObj("Trang_1","");
//GetVer();
}

function ChonTL(){
	PlaySound("ID_CLICK");
	var name= GetName("Trang_1");
	var t=  GetTop("Trang_1",name)-2;
	var l=  GetLeft("Trang_1",name);
	var cau = rightStr(name,1);
	a_tl[cau]= leftStr(name,1);
	SetText("Trang_1","check_"+ cau,toUpperCase(a_tl[cau]));
	MoveObjectTo("Trang_1","check_"+cau,l-3,t+3);
	SetShowObject("Trang_1","check_"+cau,1);
	InvalidateObj("Trang_1","");
}
function Diem1(){
 var diem=0;
 for(var i=0;i<6;i++){
	if(toLowerCase(a_kq[i]) != toLowerCase(a_tl[i]))
	{
		SetFontColor("Trang_1",a_kq[i]+"_"+i,"#008000");
		SetFontColor("Trang_1",a_tl[i]+"_"+i,"#CC0000");
	}
	else {
		diem=diem+1;
		SetFontColor("Trang_1",a_kq[i]+"_"+i,"#008000");
	    }
	}
 return diem;
}

var g_midiVol=32767;
var Play=0 ;
var b_showgroup=0;
var keyOldValue="";
var keyNewValue="";
var objectShowKey="";
var name_keyboard="Group_1";
function   GetKeyBoNumber(){
	keyNewValue = "_"+ GetText("",objectShowKey) + GetText("","");
	keyNewValue =rightStr(keyNewValue ,length(keyNewValue)-1);
	SetText("",objectShowKey,keyNewValue);
	InvalidateObj("",objectShowKey);
}
function   ShowKeyNum( namekey){
SetShowObject("Trang_1","Group_1",0);
SetShowObject("Trang_2","Group_1",0);
SetShowObject("Trang_3","Group_1",0);
var x_to= GetLeft("","")+ GetWidth("","")- GetWidth("",namekey);
var y_to= GetTop("","")+ GetHeight("","");
if (GetHeight("", namekey) + y_to > 480)
    y_to= GetTop("","")- GetHeight("",namekey);
if (x_to<0) x_to=1;
MoveObjectTo("",namekey,x_to,y_to);
SetShowObject("",namekey,1);
InvalidateObj("Trang_1",namekey);
keyOldValue= GetText("","");
objectShowKey= GetName("");
}

function DS()
{
var ct= GetText("Trang_2","");
if(ct!= "Đ")
	SetText("Trang_2","","Đ");
else SetText("Trang_2","","S");
InvalidateObj("Trang_2","");
}
function CT()
{
var ct= GetText("Trang_2","");
SetText("Trang_2","tl2_3",ct);
InvalidateObj("Trang_2","");
}
var a_kq2=["36","61","6","Hoàng","2","1","56","42","60","Đ","S","Đ","S","S","Đ"];
function Bai2()
{
for(var i=0;i<15;i++){
	SetText("Trang_2","tl2_"+i,"");
	SetCursor("Trang_2","tl2_"+i,"pointer");
	SetFontColor("Trang_2","tl2_"+i,"#0000ff");
	}
}
function Diem2(){
 var diem=0;
 for(var i=0;i<15;i++){
	if(a_kq2[i] == GetText("Trang_2","tl2_"+i))
	{
		SetFontColor("Trang_2","tl2_"+i,"#008000");
		diem=diem+1;
	}
	else 
		SetFontColor("Trang_2","tl2_"+i,"#CC0000");
	}
 return diem;
}
function Trang_1()
{
LineHeight("Trang_1","noi_dung",1.8);
InitBaiHoc();
  return;
}
function Trang_1_OnTimer()
{
  return;
}

function Trang_2()
{
 for(var i=0; i<5; i++)
	LineHeight("Trang_2","de_"+i,1.8);
SetShowObject("Trang_2","Group_1",0);
SetShowObject("Trang_2","bang_diem",0);
SetMoveView("Trang_2","bang_diem",1);
SetShowObject("Trang_2","nop_bai",1);
Bai2();
InvalidateObj("Trang_2","");
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
 height: 1000 
 });

 var Trang_1 = new Kinetic.Layer({name: 'Trang_1',callback:'Trang_1()',x:0,y:0});
var Trang_1_Backrounnd = CreText('Trang_1_Backrounnd',0,0,640,520,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','3','0','','0','0','0','0',0,0,'');
Trang_1.add(Trang_1_Backrounnd);
var cau_2 = CreText('cau_2',11,179,587,84,"3. Bài toán có tóm tắt như sau:\r\n                 16 công nhân\r\nTổ một:                                  5 công nhân\r\nTổ hai:       \r\n                          ? công nhân\r\n\r\n",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','left','top',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(cau_2);
var cau_5 = CreText('cau_5',11,425,629,48,"6. Người ta chuyển 12 lít nước mắm từ thùng to vào các thùng loại 2 lít và 3 lít. Hỏi được\r\n    bao nhiêu thùng 2 lít? Bao nhiêu thùng 3 lít?",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','left','top',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(cau_5);
var cau_4 = CreText('cau_4',11,359,629,48,"5. Hộp thứ nhất có 48 viên kẹo, hộp thứ hai có ít hơn hộp thứ nhất 16 viên kẹo. Hỏi hộp\r\n    thứ hai có bao nhiêu viên kẹo?",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','left','top',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(cau_4);
var cau_0 = CreText('cau_0',11,32,624,37,"1. Hồng xếp được 17 phong bì, Lan xếp được nhiều hơn Hồng 6 phong bì.\r\n    Hỏi Lan xếp được bao nhiêu phong bì?",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(cau_0);
var cau_1 = CreText('cau_1',11,105,616,37,"2. Nhà An nuôi 26 con gà. Nhà An nuôi nhiều hơn nhà Hùng 4 con gà. Hỏi nhà Hùng\r\n     nuôi được bao nhiêu con gà?",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(cau_1);
var cau_3 = CreText('cau_3',11,290,627,39,"4. Lan có nhiều hơn Huệ 8 bông Hoa, Hồng có nhiều hơn Lan 14 bông hoa. Hỏi Hồng\r\n    có nhiều hơn Huệ bao nhiêu bông hoa?",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(cau_3);
var a_0 = CreText('a_0',36,73,114,22,"A. 11 phong bì",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(a_0);
var b_0 = CreText('b_0',178,73,114,23,"B. 23 phong bì",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(b_0);
var c_0 = CreText('c_0',320,73,114,22,"C. 77 phong bì",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(c_0);
var a_1 = CreText('a_1',36,145,114,19,"A. 22 con gà",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(a_1);
var b_1 = CreText('b_1',178,145,114,19,"B. 30 con gà",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(b_1);
var c_1 = CreText('c_1',320,145,114,19,"C. 66 con gà",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(c_1);
var a_2 = CreText('a_2',36,262,114,22,"A. 11 công nhân",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(a_2);
var b_2 = CreText('b_2',178,262,114,22,"B. 66 công nhân",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(b_2);
var c_2 = CreText('c_2',320,262,114,22,"C. 20 công nhân",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(c_2);
var a_3 = CreText('a_3',36,329,119,22,"A. 6 bông hoa",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(a_3);
var b_3 = CreText('b_3',178,329,119,22,"B. 20 bông hoa",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(b_3);
var c_3 = CreText('c_3',320,329,119,22,"C. 22 bông hoa",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(c_3);
var d_0 = CreText('d_0',462,72,114,22,"D. 22 phong bì",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(d_0);
var d_1 = CreText('d_1',462,145,114,19,"D. 29 con gà",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(d_1);
var d_2 = CreText('d_2',462,262,114,22,"D. 21 công nhân",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(d_2);
var d_3 = CreText('d_3',462,329,119,22,"D. 18 bông hoa",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(d_3);
var a_4 = CreText('a_4',36,392,119,22,"A. 64 viên kẹo",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(a_4);
var b_4 = CreText('b_4',174,392,119,22,"B. 32 viên kẹo",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(b_4);
var c_4 = CreText('c_4',312,392,119,22,"C. 54 viên kẹo",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(c_4);
var d_4 = CreText('d_4',462,392,119,22,"D. 22 viên kẹo",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(d_4);
var a_5 = CreText('a_5',36,462,233,22,"A. 1 thùng 3 lít 5 thùng 2 lít",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(a_5);
var b_5 = CreText('b_5',305,461,233,22,"B. 2 thùng 3 lít; 4 thùng 2 lít",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(b_5);
var c_5 = CreText('c_5',36,489,233,22,"C. 2 thùng 3 lít 3 thùng 2 lít",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(c_5);
var d_5 = CreText('d_5',305,487,233,22,"D. 3 thùng 3 lít; 2 thùng 2 lít",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(d_5);
var Text_1 = CreText('Text_1',1,1,637,25,"Bài 6: BÀI TOÁN VỀ NHIỀU HƠN, ÍT HƠN",'#f8f3ed','#ffffff','#000000','#ff0000','',12,'Arial','Bold','center','middle',0,'0.00','11','11',1,'#ffbc79','#f8f3ed','0','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_1);
var Image_2 = CreText('Image_2',71,204,188,66,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE5.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Trang_1.add(Image_2);
var check_0 = CreText('check_0',27,73,18,18,"c",'#000000','#000000','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#000000','#000000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(check_0);
var check_1 = CreText('check_1',27,145,18,18,"b",'#000000','#000000','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#000000','#000000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(check_1);
var check_2 = CreText('check_2',27,262,18,18,"b",'#000000','#000000','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#000000','#000000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(check_2);
var check_3 = CreText('check_3',27,330,18,18,"a",'#000000','#000000','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#000000','#000000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(check_3);
var check_4 = CreText('check_4',34,392,18,18,"a",'#000000','#000000','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#000000','#000000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(check_4);
var check_5 = CreText('check_5',31,464,18,18,"a",'#000000','#000000','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#000000','#000000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(check_5);
stage.add(Trang_1);

 var Trang_2 = new Kinetic.Layer({name: 'Trang_2',callback:'Trang_2()',x:0,y:520});
var Trang_2_Backrounnd = CreText('Trang_2_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','3','0','','0','0','0','0',0,0,'');
Trang_2.add(Trang_2_Backrounnd);
var de_0 = CreText('de_0',50,35,589,162,"a) Mẹ 36 tuổi, tuổi bố và tuổi mẹ bằng nhau. Vậy tuổi bố là ...... tuổi.\r\nb) Bà 58 tuổi, ông nhiều hơn bà 3 tuổi. Vậy tuổi ông là: ...... tuổi.\r\nc) Chị 9 tuổi, em 3 tuổi. Vậy chị hơn em số tuổi là: ...... tuổi.\r\n\r\na) Người cân nặng nhất là bạn: ......\r\nb)  Hoàng nặng hơn Hùng ...... kg\r\nc) Hùng nhẹ hơn Hậu ...... kg\r\n\r\n\r\n",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(de_0);
var Text_8 = CreText('Text_8',487,107,65,19,"Hậu",'#ffffe0','#ffffff','#0000ff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffe0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CT();
  return;
}
 );
Trang_2.add(Text_8);
var Text_6 = CreText('Text_6',411,107,65,19,"Hoàng",'#ffffe0','#ffffff','#0000ff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffe0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CT();
  return;
}
 );
Trang_2.add(Text_6);
var Text_5 = CreText('Text_5',336,107,65,19,"Hùng",'#ffffe0','#ffffff','#0000ff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffe0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CT();
  return;
}
 );
Trang_2.add(Text_5);
var Text_4 = CreText('Text_4',10,9,628,19,"7. Điền số thích hợp vào dấu ......",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_4);
var de_1 = CreText('de_1',53,200,432,82,"a) 32l + 19l + 5l = ...... l\r\nb) 28l + 36l - 22l = ...... l\r\nc) 45l - 14l + 29l = ...... l\r\n",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(de_1);
var de_3 = CreText('de_3',4,292,631,165,"a) Thùng thứ nhất có 28 lít dầu, nhiều hơn thùng thứ hai 6 lít dầu. Vậy thùng thứ\r\n     hai có 22 lít dầu.\r\nb) Hiện nay Lan ít hơn Huệ 2 tuổi. Vậy bốn năm nữa Lan ít hơn Huệ 6 tuổi.\r\nc) Nam có ít hơn Bảo 8 viên bi. Hùng cho Nam thêm 3 viên bi. Vậy Nam có ít hơn Bảo\r\n    5 viên bi.	\r\ne) 42dm + 39dm =71dm\r\ng) 18kg + 26kg =54kg\r\nh) 39l + 37l = 76l		",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(de_3);
var Text_2 = CreText('Text_2',8,89,628,19,"8. Hùng cân nặng 22kg. Hoàng cân nặng 24kg. Hậu cân nặng 23kg.",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_2);
var Text_3 = CreText('Text_3',8,175,362,19,"9. Điền số thích hợp vào dấu ......",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_3);
var Text_7 = CreText('Text_7',8,263,564,19,"10. Đúng ghi Đ sai ghi S vào ô trống:",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_7);
var tl2_0 = CreText('tl2_0',432,24,36,23,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','bottom',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl2_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_2.add(tl2_0);
var tl2_1 = CreText('tl2_1',407,46,36,23,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','bottom',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl2_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_2.add(tl2_1);
var tl2_2 = CreText('tl2_2',378,65,36,23,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','bottom',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl2_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_2.add(tl2_2);
var tl2_3 = CreText('tl2_3',263,101,69,23,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','left','bottom',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(tl2_3);
var tl2_4 = CreText('tl2_4',217,124,36,23,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','bottom',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl2_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_2.add(tl2_4);
var tl2_5 = CreText('tl2_5',189,142,36,23,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','bottom',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl2_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_2.add(tl2_5);
var tl2_6 = CreText('tl2_6',176,187,25,25,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl2_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_2.add(tl2_6);
var tl2_7 = CreText('tl2_7',172,209,25,25,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl2_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_2.add(tl2_7);
var tl2_8 = CreText('tl2_8',176,227,25,25,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl2_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_2.add(tl2_8);
var tl2_9 = CreText('tl2_9',133,306,21,17,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',12,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl2_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  DS();
  return;
}
 );
Trang_2.add(tl2_9);
var tl2_10 = CreText('tl2_10',498,329,21,17,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl2_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DS();
  return;
}
 );
Trang_2.add(tl2_10);
var tl2_11 = CreText('tl2_11',83,366,21,17,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl2_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DS();
  return;
}
 );
Trang_2.add(tl2_11);
var tl2_12 = CreText('tl2_12',178,388,21,17,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl2_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DS();
  return;
}
 );
Trang_2.add(tl2_12);
var tl2_13 = CreText('tl2_13',178,407,21,17,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl2_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DS();
  return;
}
 );
Trang_2.add(tl2_13);
var tl2_14 = CreText('tl2_14',178,425,21,17,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl2_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DS();
  return;
}
 );
Trang_2.add(tl2_14);
var m_diem = CreText('m_diem',168,138,252,141,"8",'rgba(236,217,255,0.98)','#ffffff','#8000ff','#ffffff','',48,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','rgba(236,217,255,0.98)','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(m_diem);
var label = CreText('label',189,163,201,24,"Bạn được",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(label);
var t_mess = CreText('t_mess',168,138,252,21,"Thông báo điểm",'rgba(64,0,128,0.98)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',1,'#ffffff','rgba(128,0,255,0.98)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(t_mess);
var bt_lam_lai = CreText('bt_lam_lai',241,238,95,25,"Làm Lại",'#400080','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#8000ff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitBaiHoc();
Bai2();
SetShowObject("Trang_2","bang_diem",0);
SetShowObject("Trang_2","nop_bai",1);
InvalidateObj("Trang_2","");
InvalidateObj("Trang_1","");
  return;
}
 );
Trang_2.add(bt_lam_lai);
var bg_key = CreText('bg_key',0,-1,129,158,"0",'#e5e5e5','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#000000','#e5e5e5','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(bg_key);
var _0 = CreText('_0',5,3,35,21,"0",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_2.add(_0);
var clear_one = CreText('clear_one',47,3,35,21,"←",'#ffc0cb','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffe4e1','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
clear_one.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
      keyNewValue = GetText("",objectShowKey);
   var tkeyNew = leftStr(keyNewValue ,Length(keyNewValue)-1);
	SetText("",objectShowKey,tkeyNew);
	InvalidateObj("",objectShowKey);
  return;
}
 );
Trang_2.add(clear_one);
var clear_all = CreText('clear_all',89,3,35,21,"C",'#ffc0cb','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffe4e1','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,0,'rgba(0, 0, 0, 0)',0,1.50);
clear_all.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
      keyNewValue = "";
	SetText("",objectShowKey,"");
	InvalidateObj("",objectShowKey);;
  return;
}
 );
Trang_2.add(clear_all);
var _1 = CreText('_1',5,29,35,21,"1",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_2.add(_1);
var _2 = CreText('_2',47,29,35,21,"2",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_2.add(_2);
var _3 = CreText('_3',89,29,35,21,"3",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,0,'rgba(0, 0, 0, 0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_2.add(_3);
var _4 = CreText('_4',5,55,35,21,"4",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_2.add(_4);
var _5 = CreText('_5',47,55,35,21,"5",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_2.add(_5);
var _6 = CreText('_6',89,55,35,21,"6",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,0,'rgba(0, 0, 0, 0)',0,1.50);
_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_2.add(_6);
var _9 = CreText('_9',89,81,35,21,"9",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,0,'rgba(0, 0, 0, 0)',0,1.50);
_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_2.add(_9);
var _8 = CreText('_8',47,81,35,21,"8",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_2.add(_8);
var _7 = CreText('_7',5,81,35,21,"7",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_2.add(_7);
var dau_lon = CreText('dau_lon',5,107,35,21,">",'#afeeee','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e4fafa','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,0,'rgba(0, 0, 0, 0)',0,1.50);
dau_lon.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_2.add(dau_lon);
var dau_bang = CreText('dau_bang',47,107,35,21,"<",'#afeeee','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e4fafa','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
dau_bang.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_2.add(dau_bang);
var dau_be = CreText('dau_be',88,107,35,21,"=",'#afeeee','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e4fafa','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,0,'rgba(0, 0, 0, 0)',0,1.50);
dau_be.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_2.add(dau_be);
var ok = CreText('ok',87,132,36,21,"OK",'#98fb98','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e0fee0','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,0,'rgba(0, 0, 0, 0)',0,1.50);
ok.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
Trang_2.add(ok);
var huy = CreText('huy',4,132,35,21,"Hủy",'#ffc0cb','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffe4e1','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,0,'rgba(0, 0, 0, 0)',0,1.50);
huy.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetText("",objectShowKey,keyOldValue);
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
Trang_2.add(huy);
var nop_bai = CreText('nop_bai',239,452,87,25,"Nộp Bài",'#400080','#ffad5b','#fffe99','#fffe99','',14,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#000000','#8000ff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
nop_bai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var diem= Diem1()+ Diem2();
diem= round(diem*10/21);
if(diem>10) diem=10;
//UpdateScore(diem);
SetText("Trang_2","m_diem",diem);
SetShowObject("Trang_2","bang_diem",1);
SetShowObject("Trang_2","nop_bai",0);
InvalidateObj("Trang_2","");
InvalidateObj("Trang_1","");
  return;
}

 );
Trang_2.add(nop_bai);
var Text_1 = CreText('Text_1',46,132,35,21,"+",'#afeeee','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e4fafa','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_2.add(Text_1);
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:133,height:162});
Group_1.add(bg_key);
Group_1.add(_0);
Group_1.add(clear_one);
Group_1.add(clear_all);
Group_1.add(_1);
Group_1.add(_2);
Group_1.add(_3);
Group_1.add(_4);
Group_1.add(_5);
Group_1.add(_6);
Group_1.add(_9);
Group_1.add(_8);
Group_1.add(_7);
Group_1.add(dau_lon);
Group_1.add(dau_bang);
Group_1.add(dau_be);
Group_1.add(ok);
Group_1.add(huy);
Group_1.add(Text_1);
Trang_2.add(Group_1);
var bang_diem = new Kinetic.Group({name:'bang_diem',x:0,y:0,width:256,height:145});
bang_diem.add(m_diem);
bang_diem.add(label);
bang_diem.add(t_mess);
bang_diem.add(bt_lam_lai);
Trang_2.add(bang_diem);
stage.add(Trang_2);
InitLacVietScript();
};
