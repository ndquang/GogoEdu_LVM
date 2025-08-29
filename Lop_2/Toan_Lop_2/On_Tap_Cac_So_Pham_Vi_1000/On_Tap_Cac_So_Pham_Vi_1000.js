
var count1= 12;
var a_kq=["b","c","d","c","b","d","a","a","b","d","a","b"];
var a_tl=[0,0,0,0];
function Bai1(){
	for(var i=0;i<count1;i++)
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
}

function ChonTL(){
	Play=0;
	var name= GetName("Trang_1");
	var t=  GetTop("Trang_1",name)-2;
	var l=  GetLeft("Trang_1",name);
	var cau = StringtoNumber(name,1);
	a_tl[cau]= leftStr(name,1);
	SetText("Trang_1","check_"+cau,toUpperCase(a_tl[cau]));
	MoveObjectTo("Trang_1","check_"+cau,l-3,t+3);
	SetShowObject("Trang_1","check_"+cau,1);
	InvalidateObj("Trang_1","");
}
function Diem1(){
 var diem=0;
 for(var i=0;i<count1;i++){
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
if(ct!= "+")
	SetText("Trang_2","","+");
else SetText("Trang_2","","-");
InvalidateObj("Trang_2","");
}
var count2= 29;
var a_kq2=["","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
function Bai2()
{
PlaySound("","","ID_SOUND1");
SetShowObject("Trang_2","Group_1",0);
SetShowObject("Trang_2","bang_diem",0);
SetMoveView("Trang_2","bang_diem",1);
for(var i=0;i<count2;i++){
	if(a_kq2[i]=="")
	  a_kq2[i]= GetText("Trang_2","tl_"+i);
	SetText("Trang_2","tl_"+i,"");
	SetCursor("Trang_2","tl_"+i,"pointer");
	SetFontColor("Trang_2","tl_"+i,"#0000ff");
	LineHeight("Trang_2","de_"+i,"1.8");
	}
}
function Diem2(){
 var diem=0;
 for(var i=0;i<count2;i++){
	if(a_kq2[i] == GetText("Trang_2","tl_"+i))
	{
		SetFontColor("Trang_2","tl_"+i,"#008000");
		diem=diem+1;
	}
	else 
		SetFontColor("Trang_2","tl_"+i,"#CC0000");
	}
 return diem;
}
function NopBai()
{
PlaySound("","","ID_TEST");
var diem= Diem1()+ Diem2();
diem= round(diem*10/(count1+count2));
if(diem>10) diem=10;
SetText("Trang_2","m_diem",diem);
SetShowObject("Trang_2","bang_diem",1);
SetShowObject("Trang_2","nop_bai",0);
InvalidateObj("Trang_2","");
InvalidateObj("Trang_1","");
  return;
}
folder_Resource ='data/On_Tap_Cac_So_Pham_Vi_1000'

function Trang_1()
{
Bai1();
  return;
}

function Trang_2()
{
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
 width: 540,
 height: 660 
 });

 var Trang_1 = new Kinetic.Layer({name: 'Trang_1',callback:'Trang_1()'});
var Trang_1_Backrounnd = CreText('Trang_1_Backrounnd',0,0,540,660,'','rgba(223, 239, 255, 1.00)','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'rgba(223, 239, 255, 0)','0','3','0','','0','0','0','0',0,0,'');
Trang_1.add(Trang_1_Backrounnd);
var b_8 = CreText('b_8',131,493,88,18,"B. x = 135",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(b_8);
var cau_5 = CreText('cau_5',13,322,511,22,"6. Kết quả của phép cộng 48 + 37 là:",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(cau_5);
var cau_4 = CreText('cau_4',12,283,524,21,"5. Cho dãy số: 612; 616; 620; ... số thích hợp điền vào chỗ chấm là:",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(cau_4);
var cau_3 = CreText('cau_3',12,217,522,30,"4. Các số nào dưới đây được viết theo thứ tự từ bé đến lớn?",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(cau_3);
var cau_2 = CreText('cau_2',10,169,530,23,"3. Số 675 được viết thành tổng của trăm, chục và đơn vị là:",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(cau_2);
var cau_6 = CreText('cau_6',17,367,517,22,"7. Kết quả của phép trừ 82 - 34 là:",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(cau_6);
var d_6 = CreText('d_6',354,388,96,22,"D. 56",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(d_6);
var d_5 = CreText('d_5',354,343,96,22,"D. 85",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(d_5);
var d_4 = CreText('d_4',354,300,82,18,"D. 628",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(d_4);
var d_3 = CreText('d_3',261,259,183,22,"D. 534; 453; 345; 354",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(d_3);
var d_2 = CreText('d_2',261,205,134,22,"D. 600 + 70 + 5",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(d_2);
var d_1 = CreText('d_1',354,149,117,19,"D. 7 số",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(d_1);
var d_0 = CreText('d_0',261,96,183,19,"D. Tám trăm chín mươi",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(d_0);
var Text_1 = CreText('Text_1',63,2,477,38,"ÔN TẬP CÁC SỐ TRONG PHẠM VI 1000",'rgba(0, 128, 192, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 0, 0, 1.00)','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 128, 192, 1.00)','0','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_1);
var cau_0 = CreText('cau_0',10,59,538,22,"1. Số 908 đọc là:",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(cau_0);
var cau_1 = CreText('cau_1',10,114,523,33,"2. Từ ba số 7, 2, 5 có thể lập được bao nhiêu số có ba chữ số, sao cho mỗi số có các chữ số khác nhau?",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(cau_1);
var a_0 = CreText('a_0',45,78,183,19,"A. Chín trăm tám mươi",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(a_0);
var b_0 = CreText('b_0',261,78,183,19,"B. Chín trăm linh tám",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(b_0);
var c_0 = CreText('c_0',45,96,183,19,"C. Tám trăm linh chín",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(c_0);
var a_1 = CreText('a_1',40,149,85,22,"A. 4 số",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(a_1);
var b_1 = CreText('b_1',141,149,108,19,"B. 5 số",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(b_1);
var c_1 = CreText('c_1',238,149,76,19,"C. 6 số",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(c_1);
var a_2 = CreText('a_2',45,187,134,22,"A. 600 +  50 + 7",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(a_2);
var b_2 = CreText('b_2',261,187,134,22,"B. 700 + 60 + 5",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(b_2);
var c_2 = CreText('c_2',45,205,134,22,"C. 500 + 60 + 7",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(c_2);
var a_3 = CreText('a_3',45,240,166,22,"A. 345; 453; 543; 435",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(a_3);
var b_3 = CreText('b_3',261,240,183,22,"B. 435; 543; 345; 534",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(b_3);
var c_3 = CreText('c_3',45,259,166,22,"C. 345; 435; 453; 543",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(c_3);
var check_0 = CreText('check_0',7,85,18,18,"c",'rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(0, 0, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(check_0);
var check_1 = CreText('check_1',7,149,18,18,"b",'rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(0, 0, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(check_1);
var check_2 = CreText('check_2',7,188,18,18,"b",'rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(0, 0, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(check_2);
var check_3 = CreText('check_3',7,240,18,18,"a",'rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(0, 0, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(check_3);
var a_4 = CreText('a_4',40,300,82,18,"A. 622",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(a_4);
var b_4 = CreText('b_4',141,300,82,18,"B. 624",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(b_4);
var c_4 = CreText('c_4',238,300,82,18,"C. 626",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(c_4);
var check_4 = CreText('check_4',7,303,18,18,"a",'rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(0, 0, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(check_4);
var a_5 = CreText('a_5',40,343,99,22,"A. 75",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(a_5);
var b_5 = CreText('b_5',141,343,108,22,"B. 71",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(b_5);
var c_5 = CreText('c_5',242,343,109,22,"C. 81",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(c_5);
var check_5 = CreText('check_5',7,347,18,18,"a",'rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(0, 0, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(check_5);
var a_6 = CreText('a_6',40,388,99,22,"A. 48",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(a_6);
var c_6 = CreText('c_6',238,388,93,22,"C. 52",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(c_6);
var Text_2 = CreText('Text_2',0,2,63,38,"Bài 20",'rgba(0, 128, 192, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0, 128, 192, 1.00)','0','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_2);
var Text_4 = CreText('Text_4',2,40,451,25,"A. Chọn câu trả lời đúng:",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_4);
var Text_5 = CreText('Text_5',5,638,451,25,"B. Điền số hoặc dấu thích hợp vào ô trống:",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_5);
var b_6 = CreText('b_6',141,388,108,22,"B. 58",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(b_6);
var Text_3 = CreText('Text_3',15,406,523,37,"8. Một trại gà, người ta đã bán 224 con gà và còn lại 455 con gà. Hỏi lúc chưa bán trại gà có bao nhiêu con gà?",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_3);
var d_7 = CreText('d_7',354,443,110,22,"D. 671 con",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(d_7);
var a_7 = CreText('a_7',35,443,104,22,"A. 679 con",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(a_7);
var c_7 = CreText('c_7',246,443,89,22,"C. 239 con",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(c_7);
var check_7 = CreText('check_7',7,445,18,18,"a",'rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(0, 0, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(check_7);
var b_7 = CreText('b_7',141,443,102,22,"B. 231 con",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(b_7);
var d_8 = CreText('d_8',354,493,84,18,"D. x = 175",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(d_8);
var a_8 = CreText('a_8',36,493,90,18,"A. x = 379",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(a_8);
var c_8 = CreText('c_8',238,493,105,18,"C. x = 375",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(c_8);
var check_8 = CreText('check_8',7,493,18,18,"a",'rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(0, 0, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(check_8);
var Text_16 = CreText('Text_16',16,474,520,19,"9. Tìm x biết: 257 - x = 122",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_16);
var check_6 = CreText('check_6',7,386,18,18,"a",'rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(0, 0, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(check_6);
var b_9 = CreText('b_9',134,540,88,18,"B. 36",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(b_9);
var d_9 = CreText('d_9',357,540,84,18,"D. 18",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(d_9);
var a_9 = CreText('a_9',39,540,90,18,"A. 13",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(a_9);
var c_9 = CreText('c_9',241,540,105,18,"C. 49",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(c_9);
var check_9 = CreText('check_9',7,540,18,18,"a",'rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(0, 0, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(check_9);
var Text_11 = CreText('Text_11',19,521,520,19,"10. 4 x 3 + 6 = ?",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_11);
var b_10 = CreText('b_10',133,579,88,18,"B. 6",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(b_10);
var d_10 = CreText('d_10',356,579,84,18,"D. 2",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(d_10);
var a_10 = CreText('a_10',38,579,90,18,"A. 1",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(a_10);
var c_10 = CreText('c_10',240,579,105,18,"C. 8",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(c_10);
var check_10 = CreText('check_10',7,579,18,18,"a",'rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(0, 0, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(check_10);
var Text_18 = CreText('Text_18',18,560,520,19,"11. 12 : 4 - 2 = ?",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_18);
var b_11 = CreText('b_11',136,618,88,18,"B. 6 bạn",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(b_11);
var d_11 = CreText('d_11',359,618,84,18,"D. 4 bạn",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(d_11);
var a_11 = CreText('a_11',41,618,90,18,"A. 20 bạn",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(a_11);
var c_11 = CreText('c_11',243,618,105,18,"C. 8 bạn",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Trang_1.add(c_11);
var check_11 = CreText('check_11',7,618,18,18,"a",'rgba(0, 0, 0, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(0, 0, 0, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(check_11);
var Text_24 = CreText('Text_24',21,599,520,19,"12. Có 24 viên bi chia đều cho mỗi bạn 4 viên. Hỏi chia cho bao nhiêu bạn?",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_24);
stage.add(Trang_1);

 var Trang_2 = new Kinetic.Layer({name: 'Trang_2',callback:'Trang_2()'});
var Trang_2_Backrounnd = ;
Trang_2.add(Trang_2_Backrounnd);
var de_10 = CreText('de_10',378,455,137,64,"c) 52 - x = 39\r\n            x = 52 - 39\r\n            x = 13",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(de_10);
var de_7 = CreText('de_7',192,455,137,64,"b)  x - 17 = 46\r\n            x  = 46 -17\r\n            x  = 29",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(de_7);
var de_6 = CreText('de_6',41,455,137,64,"a) x + 48 = 74\r\n             x = 74 - 48\r\n             x = 36		",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','top',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(de_6);
var de_4 = CreText('de_4',81,132,209,70,"a) 325 + 1          326 - 1\r\nb) 437 + 0          437 - 0\r\nc) 508 + 2          580 - 2\r\n",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(de_4);
var Text_3 = CreText('Text_3',46,201,322,56,"a)          - 16 = 25\r\nb) 37 +         = 82\r\nc) 326 -        = 111\r\n",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_3);
var Text_8 = CreText('Text_8',207,266,26,26,"8",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_8);
var Text_16 = CreText('Text_16',9,63,39,22,"14.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_16);
var Text_4 = CreText('Text_4',9,130,43,19,"15.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_4);
var Text_5 = CreText('Text_5',47,129,27,55,">\r\n<\r\n=",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','top',0,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_5);
var de_3 = CreText('de_3',49,66,166,64,"a) 300 + 60 + 1 =\r\nb) 700 + 50       =\r\nc) 900 + 9         =\r\n",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(de_3);
var de_5 = CreText('de_5',43,318,247,65,"a) Số liền sau của số 489 là 490\r\nb) Số liền trước của số 349 là 350\r\nc) Số liền sau của số 811 là 810",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(de_5);
var Text_12 = CreText('Text_12',9,8,56,19,"13.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_12);
var nop_bai = CreText('nop_bai',360,542,87,25,"Nộp Bài",'rgba(64, 0, 128, 1.00)','rgba(255, 173, 91, 1.00)','rgba(255, 254, 153, 1.00)','rgba(255, 254, 153, 1.00)','',14,'Arial','Normal','center','middle',3,'0.00','0','0',1,'rgba(0, 0, 0, 255)','rgba(128, 0, 255, 1.00)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
nop_bai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NopBai();
  return;
}

 );
Trang_2.add(nop_bai);
var tl_7 = CreText('tl_7',151,146,32,18,"=",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'rgba(0, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_2.add(tl_7);
var tl_13 = CreText('tl_13',124,266,26,26,"24",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(0, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_2.add(tl_13);
var tl_8 = CreText('tl_8',151,166,32,18,"<",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'rgba(0, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_2.add(tl_8);
var de_0 = CreText('de_0',49,7,280,61,"a) Số liền sau của số 899 là số\r\nb) Số liền trước của số 709 là số\r\nc) Số liền trước của số 380 là số",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(de_0);
var tl_2 = CreText('tl_2',269,42,43,18,"379",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'rgba(0, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_2.add(tl_2);
var tl_9 = CreText('tl_9',67,197,27,18,"41",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'rgba(0, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_2.add(tl_9);
var tl_0 = CreText('tl_0',269,2,43,18,"900",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'rgba(0, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_2.add(tl_0);
var tl_1 = CreText('tl_1',269,22,43,18,"708",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'rgba(0, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_2.add(tl_1);
var tl_10 = CreText('tl_10',96,216,27,18,"45",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'rgba(0, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
   ShowKeyNum(name_keyboard);
}
 );
Trang_2.add(tl_10);
var tl_11 = CreText('tl_11',99,235,27,18,"215",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'rgba(0, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);}
 );
Trang_2.add(tl_11);
var Text_2 = CreText('Text_2',9,198,52,19,"16. ",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_2);
var tl_6 = CreText('tl_6',151,126,32,18,">",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_2.add(tl_6);
var tl_12 = CreText('tl_12',41,266,26,26,"6",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','center','middle',2,'0.00','0','0',1,'rgba(0, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_2.add(tl_12);
var tl_3 = CreText('tl_3',167,60,32,18,"361",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'rgba(0, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_2.add(tl_3);
var tl_4 = CreText('tl_4',167,81,32,18,"750",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'rgba(0, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_2.add(tl_4);
var tl_5 = CreText('tl_5',167,102,32,18,"909",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'rgba(0, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_2.add(tl_5);
var Text_13 = CreText('Text_13',9,264,43,19,"17.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_13);
var Text_24 = CreText('Text_24',4,291,451,25,"C. Đúng ghi Đ sai ghi S vào ô trống:",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_24);
var de_4 = CreText('de_4',354,314,216,65,"a) 300 + 7 = 370\r\nb) 800 + 80 + 8 = 808\r\nc) 900 + 30 + 3 = 933",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(de_4);
var de_8 = CreText('de_8',38,389,224,60,"a) 45 + 46 = 81\r\nb) 32 - 26 = 6\r\nc) 435 - 134 = 301",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(de_8);
var Text_31 = CreText('Text_31',317,314,40,19,"19.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_31);
var Text_33 = CreText('Text_33',6,315,40,19,"18.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_33);
var Text_34 = CreText('Text_34',6,390,40,19,"20.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_34);
var tl_14 = CreText('tl_14',277,316,18,18,"Đ",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DS();
  return;
}
 );
Trang_2.add(tl_14);
var tl_15 = CreText('tl_15',277,336,18,18,"S",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DS();
  return;
}
 );
Trang_2.add(tl_15);
var tl_16 = CreText('tl_16',277,357,18,18,"S",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DS();
  return;
}
 );
Trang_2.add(tl_16);
var tl_17 = CreText('tl_17',506,310,18,18,"S",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DS();
  return;
}
 );
Trang_2.add(tl_17);
var tl_18 = CreText('tl_18',506,329,18,18,"S",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DS();
  return;
}
 );
Trang_2.add(tl_18);
var tl_19 = CreText('tl_19',506,349,18,18,"Đ",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DS();
  return;
}
 );
Trang_2.add(tl_19);
var tl_20 = CreText('tl_20',167,384,18,18,"S",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'rgba(0, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl_20.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DS();
  return;
}
 );
Trang_2.add(tl_20);
var tl_21 = CreText('tl_21',167,404,18,18,"Đ",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'rgba(0, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl_21.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DS();
  return;
}
 );
Trang_2.add(tl_21);
var Text_14 = CreText('Text_14',6,455,40,19,"21.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_14);
var tl_22 = CreText('tl_22',167,424,18,18,"Đ",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'rgba(0, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl_22.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DS();
  return;
}
 );
Trang_2.add(tl_22);
var tl_23 = CreText('tl_23',143,491,18,21,"S",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl_23.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DS();
  return;
}
 );
Trang_2.add(tl_23);
var tl_24 = CreText('tl_24',312,490,18,21,"S",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl_24.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DS();
  return;
}
 );
Trang_2.add(tl_24);
var tl_25 = CreText('tl_25',476,489,18,21,"Đ",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl_25.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DS();
  return;
}
 );
Trang_2.add(tl_25);
var de_11 = CreText('de_11',47,523,170,50,"a)  4 x 2 + 6 = 4 x 8 = 32\r\nb) 12 : 2 + 2 = 12 : 4 = 3\r\nc) 5 x 5 - 3   = 25 - 3 = 22",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',12,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(de_11);
var Text_44 = CreText('Text_44',68,259,56,20,"x 4",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_44);
var Text_45 = CreText('Text_45',151,258,56,21,": 3",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'rgba(0, 0, 0, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_45);
var Text_1 = CreText('Text_1',5,526,40,19,"22.",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_1);
var tl_26 = CreText('tl_26',198,523,18,18,"S",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'rgba(0, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl_26.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DS();
  return;
}
 );
Trang_2.add(tl_26);
var tl_27 = CreText('tl_27',198,543,18,18,"S",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'rgba(0, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl_27.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DS();
  return;
}
 );
Trang_2.add(tl_27);
var tl_28 = CreText('tl_28',198,563,18,18,"Đ",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 255, 1.00)','rgba(0, 0, 255, 1.00)','',14,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'rgba(0, 0, 255, 255)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
tl_28.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DS();
  return;
}
 );
Trang_2.add(tl_28);
var m_diem = CreText('m_diem',150,188,252,141,"8",'rgba(236, 217, 255, 0.98)','rgba(255, 255, 255, 1.00)','rgba(128, 0, 255, 1.00)','rgba(255, 255, 255, 1.00)','',48,'Arial','Normal','center','middle',0,'0.00','30','30',1,'rgba(255, 255, 255, 255)','rgba(236, 217, 255, 0.00)','0','0','rgba(255, 255, 255, 255)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(m_diem);
var t_mess = CreText('t_mess',151,189,252,21,"Thông báo điểm",'rgba(64, 0, 128, 0.98)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',12,'Arial','Normal','left','middle',0,'0.00','30','30',1,'rgba(255, 255, 255, 255)','rgba(128, 0, 255, 0.00)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(t_mess);
var bt_lam_lai = CreText('bt_lam_lai',224,289,95,25,"Làm Lại",'rgba(64, 0, 128, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','rgba(255, 255, 255, 1.00)','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(255, 255, 255, 255)','rgba(128, 0, 255, 1.00)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Bai1();
Bai2();
SetShowObject("Trang_2","bang_diem",0);
SetShowObject("Trang_2","nop_bai",1);
InvalidateObj("Trang_2","");
InvalidateObj("Trang_1","");
  return;
}
 );
Trang_2.add(bt_lam_lai);
var label = CreText('label',172,214,201,24,"Bạn được",'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',20,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(label);
var bang_diem = new Kinetic.Group({name:'bang_diem',x:0,y:0,width:257,height:145});
Trang_2.add(bang_diem);
var bg_key = CreText('bg_key',-2,2,129,154,"0",'rgba(229, 229, 229, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 0)','rgba(255, 255, 255, 1.00)','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'rgba(0, 0, 0, 255)','rgba(229, 229, 229, 1.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(bg_key);
var _0 = CreText('_0',3,6,35,21,"0",'rgba(238, 238, 238, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'rgba(127, 127, 127, 255)','rgba(255, 255, 255, 1.00)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_2.add(_0);
var clear_one = CreText('clear_one',45,6,35,21,"←",'rgba(255, 192, 203, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'rgba(127, 127, 127, 255)','rgba(255, 228, 225, 1.00)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var clear_all = CreText('clear_all',87,6,35,21,"C",'rgba(255, 192, 203, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'rgba(127, 127, 127, 255)','rgba(255, 228, 225, 1.00)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var _1 = CreText('_1',3,31,35,21,"1",'rgba(238, 238, 238, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'rgba(127, 127, 127, 255)','rgba(255, 255, 255, 1.00)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_2.add(_1);
var _2 = CreText('_2',45,31,35,21,"2",'rgba(238, 238, 238, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'rgba(127, 127, 127, 255)','rgba(255, 255, 255, 1.00)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_2.add(_2);
var _3 = CreText('_3',87,31,35,21,"3",'rgba(238, 238, 238, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'rgba(127, 127, 127, 255)','rgba(255, 255, 255, 1.00)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,0,'rgba(0, 0, 0, 0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_2.add(_3);
var _4 = CreText('_4',3,56,35,21,"4",'rgba(238, 238, 238, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'rgba(127, 127, 127, 255)','rgba(255, 255, 255, 1.00)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_2.add(_4);
var _5 = CreText('_5',45,56,35,21,"5",'rgba(238, 238, 238, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'rgba(127, 127, 127, 255)','rgba(255, 255, 255, 1.00)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_2.add(_5);
var _6 = CreText('_6',87,56,35,21,"6",'rgba(238, 238, 238, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'rgba(127, 127, 127, 255)','rgba(255, 255, 255, 1.00)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,0,'rgba(0, 0, 0, 0)',0,1.50);
_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_2.add(_6);
var _9 = CreText('_9',87,81,35,21,"9",'rgba(238, 238, 238, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'rgba(127, 127, 127, 255)','rgba(255, 255, 255, 1.00)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,0,'rgba(0, 0, 0, 0)',0,1.50);
_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_2.add(_9);
var _8 = CreText('_8',45,81,35,21,"8",'rgba(238, 238, 238, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'rgba(127, 127, 127, 255)','rgba(255, 255, 255, 1.00)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_2.add(_8);
var _7 = CreText('_7',3,81,35,21,"7",'rgba(238, 238, 238, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'rgba(127, 127, 127, 255)','rgba(255, 255, 255, 1.00)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_2.add(_7);
var dau_lon = CreText('dau_lon',3,106,35,21,">",'rgba(175, 238, 238, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'rgba(127, 127, 127, 255)','rgba(228, 250, 250, 1.00)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,0,'rgba(0, 0, 0, 0)',0,1.50);
dau_lon.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_2.add(dau_lon);
var dau_bang = CreText('dau_bang',45,106,35,21,"<",'rgba(175, 238, 238, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'rgba(127, 127, 127, 255)','rgba(228, 250, 250, 1.00)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
dau_bang.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_2.add(dau_bang);
var dau_be = CreText('dau_be',86,106,35,21,"=",'rgba(175, 238, 238, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'rgba(127, 127, 127, 255)','rgba(228, 250, 250, 1.00)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,0,'rgba(0, 0, 0, 0)',0,1.50);
dau_be.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_2.add(dau_be);
var ok = CreText('ok',85,131,36,21,"OK",'rgba(152, 251, 152, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',10,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'rgba(127, 127, 127, 255)','rgba(224, 254, 224, 1.00)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,0,'rgba(0, 0, 0, 0)',0,1.50);
ok.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
Trang_2.add(ok);
var huy = CreText('huy',44,131,35,21,"Hủy",'rgba(255, 192, 203, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',10,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'rgba(127, 127, 127, 255)','rgba(255, 228, 225, 1.00)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,0,'rgba(0, 0, 0, 0)',0,1.50);
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
var cong = CreText('cong',3,131,35,21,"+",'rgba(175, 238, 238, 1.00)','rgba(255, 255, 255, 1.00)','rgba(0, 0, 0, 1.00)','rgba(255, 255, 255, 1.00)','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'rgba(127, 127, 127, 255)','rgba(228, 250, 250, 1.00)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
cong.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_2.add(cong);
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:133,height:158});
Trang_2.add(Group_1);
stage.add(Trang_2);
InitLacVietScript();
};
