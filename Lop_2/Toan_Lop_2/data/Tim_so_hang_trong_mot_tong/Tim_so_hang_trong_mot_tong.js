folder_Resource ='data/Tim_so_hang_trong_mot_tong'
styteView = 'Ver';
var count1= 9;
var a_kq=["c","a","b","a","c","d","c","b","d"];
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
	PlaySound("ID_CLICK");
	var name= GetName("Trang_1");
	var t=  GetTop("Trang_1",name)-2;
	var l=  GetLeft("Trang_1",name);
	var cau = rightStr(name,1);
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
var count2= 16;
var a_kq2=["13","32","40","44","48","41","1","0","10","Đ","S","Đ","Đ","Đ","S","S"];
function Bai2()
{
SetShowObject("Trang_2","Group_1",0);
SetShowObject("Trang_2","bang_diem",0);
for(var i=0;i<count2;i++){
	SetText("Trang_2","tl2_"+i,"");
	SetFontColor("Trang_2","tl2_"+i,"#0000ff");
	LineHeight("Trang_2","de_"+i,"1.8");
	}
GetVer();
}
function Diem2(){
 var diem=0;
 for(var i=0;i<count2;i++){
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
function NopBai()
{
var diem= Diem1()+ Diem2();
diem= round(diem*10/(count1+count2));
if(diem>10) diem=10;
UpdateScore(diem);
SetText("Trang_2","m_diem",diem);
SetShowObject("Trang_2","bang_diem",1);
SetShowObject("Trang_2","nop_bai",0);
InvalidateObj("Trang_2","");
InvalidateObj("Trang_1","");
  return;
}
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
 width: 640,
 height: 960 
 });

 var Trang_1 = new Kinetic.Layer({name: 'Trang_1',callback:'Trang_1()',x:0,y:0});
var Trang_1_Backrounnd = CreText('Trang_1_Backrounnd',0,0,640,480,'','#dfefff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#dfefff','0','3','0','','0','0','0','0',0,0,'');
var d_8 = CreText('d_8',474,454,129,22,"D. 14 học sinh",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
d_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var d_7 = CreText('d_7',366,406,76,22,"D. 40",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
d_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var d_6 = CreText('d_6',366,354,76,22,"D. y = 1",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
d_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var d_5 = CreText('d_5',465,310,96,22,"D. 14 đơn vị",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
d_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var d_4 = CreText('d_4',474,248,141,22,"D. 19 con gà mái.",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
d_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var d_3 = CreText('d_3',366,202,76,22,"D. 80",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
d_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var d_2 = CreText('d_2',366,154,76,22,"D. y = 1",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
d_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var d_1 = CreText('d_1',366,108,76,19,"D. x = 14",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
d_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var d_0 = CreText('d_0',366,61,76,22,"D. x = 27",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
d_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var Text_1 = CreText('Text_1',64,2,576,38,"TÌM SỐ HẠNG TRONG MỘT TỔNG",'rgba(0,0,0,0)','#ffffff','#000000','#ff0000','',16,'Arial','Bold','center','middle',0,'0.00','0','1',1,'#0080ff','#0080c0','0','2','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_0 = CreText('cau_0',11,43,538,17,"1. Tìm x biết x + 12 = 25",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_1 = CreText('cau_1',11,81,538,26,"2. Tìm x biết, 24 + x = 48.",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_2 = CreText('cau_2',11,130,587,20,"3. Tim y biết, y + 10 =10.",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_3 = CreText('cau_3',11,174,538,28,"4. Một số cộng với 24 thì được 56. Vậy số đó là:",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var a_0 = CreText('a_0',36,61,76,22,"A. x=37",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_0 = CreText('b_0',137,60,76,23,"B. x = 3",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_0 = CreText('c_0',255,61,76,22,"C. x = 13",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var a_1 = CreText('a_1',36,105,76,22,"A. x = 24",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_1 = CreText('b_1',137,108,76,19,"B. x = 62",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_1 = CreText('c_1',255,108,76,19,"C. x = 72",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var a_2 = CreText('a_2',36,154,76,22,"A. y = 20",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_2 = CreText('b_2',137,154,76,22,"B. y = 0",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_2 = CreText('c_2',255,154,76,22,"C. y = 10",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var a_3 = CreText('a_3',36,202,76,22,"A. 32",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_3 = CreText('b_3',137,202,76,22,"B. 22",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_3 = CreText('c_3',255,202,76,22,"C. 42",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var a_4 = CreText('a_4',36,248,141,22,"A. 41 con gà mái.",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_4 = CreText('b_4',182,248,141,22,"B. 9 con gà mái.",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_4 = CreText('c_4',328,248,141,22,"C. 11 con gà mái",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var cau_4 = CreText('cau_4',11,223,629,28,"5. Một đàn gà có 26 con, trong đó 15 con gà trống. Hỏi có bao nhiêu con gà mái?",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var a_5 = CreText('a_5',36,310,96,22,"A. 4 đơn vị",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_5 = CreText('b_5',179,310,96,22,"B. 18 đơn vị",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_5 = CreText('c_5',322,310,96,22,"C. 78 đơn vị",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var cau_5 = CreText('cau_5',11,272,629,35,"6. Hai số có tổng bằng 32. Nếu giữ nguyên số hạn thứ nhất và muốn có tổng bằng 46 thì phải thêm vào số hạng thứ hai bao nhiêu đơn vị?",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var a_6 = CreText('a_6',36,354,76,22,"A. y = 24",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_6 = CreText('b_6',137,354,76,22,"B. y = 48",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_6 = CreText('c_6',255,354,76,22,"C. y = 0",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var cau_6 = CreText('cau_6',11,329,538,28,"7. Tìm y, biết y + 24 = 24 - y",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var a_7 = CreText('a_7',36,406,76,22,"A. 29",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_7 = CreText('b_7',137,406,76,22,"B. 39",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_7 = CreText('c_7',255,406,76,22,"C. 46",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var cau_7 = CreText('cau_7',11,378,629,25,"8. 50 - 27 + 16 = ?",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var a_8 = CreText('a_8',35,454,129,22,"A. 24 học sinh.",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var b_8 = CreText('b_8',181,454,129,22,"B. 46 học sinh",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var c_8 = CreText('c_8',327,454,129,22,"C. 15 học sinh",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var cau_8 = CreText('cau_8',11,428,624,28,"9.  Lớp có 30 học sinh, trong đó có 16 học sinh nữ. Vậy học sinh nan của lớp là:",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',0,2,63,38,"Bài 7",'#0080c0','#ffffff','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','#0080c0','0','2','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_8 = CreText('check_8',27,454,18,18,"a",'#000000','#000000','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',2,'0.00','0','0',1,'#000000','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_7 = CreText('check_7',27,406,18,18,"a",'#000000','#000000','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',2,'0.00','0','0',1,'#000000','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_6 = CreText('check_6',27,354,18,18,"a",'#000000','#000000','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',2,'0.00','0','0',1,'#000000','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_5 = CreText('check_5',27,310,18,18,"a",'#000000','#000000','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',2,'0.00','0','0',1,'#000000','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_4 = CreText('check_4',27,250,18,18,"a",'#000000','#000000','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',2,'0.00','0','0',1,'#000000','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_3 = CreText('check_3',27,202,18,18,"a",'#000000','#000000','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',2,'0.00','0','0',1,'#000000','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_2 = CreText('check_2',27,154,18,18,"b",'#000000','#000000','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',2,'0.00','0','0',1,'#000000','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_1 = CreText('check_1',27,109,18,18,"b",'#000000','#000000','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',2,'0.00','0','0',1,'#000000','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check_0 = CreText('check_0',27,61,18,18,"c",'#000000','#000000','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',2,'0.00','0','0',1,'#000000','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Trang_1.add(Trang_1_Backrounnd,d_8,d_7,d_6,d_5,d_4,d_3,d_2,d_1,d_0,Text_1,cau_0,cau_1,cau_2,cau_3,a_0,b_0,c_0,a_1,b_1,c_1,a_2,b_2,c_2,a_3,b_3,c_3,a_4,b_4,c_4,cau_4,a_5,b_5,c_5,cau_5,a_6,b_6,c_6,cau_6,a_7,b_7,c_7,cau_7,a_8,b_8,c_8,cau_8,Text_2,check_8,check_7,check_6,check_5,check_4,check_3,check_2,check_1,check_0);
stage.add(Trang_1);

 var Trang_2 = new Kinetic.Layer({name: 'Trang_2',callback:'Trang_2()',x:0,y:480});
var Trang_2_Backrounnd = CreText('Trang_2_Backrounnd',0,0,640,480,'','#dfefff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#dfefff','0','3','0','','0','0','0','0',0,0,'');
var Text_0 = CreText('Text_0',8,6,362,19,"10. Điền số thích hợp vào chỗ chấm.",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var de_5 = CreText('de_5',245,251,185,65,"b) 17 + x = 30\r\n    =>  x    = 30 + 17\r\n           x    = 47 ",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var de_2 = CreText('de_2',33,104,273,66,"a) 50 - 6 =\r\nb) 70 - 22 =\r\nc) 60 -19 =",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var de_4 = CreText('de_4',37,317,594,89,"a) Trong phép trừ, nếu giữ nguyên số bị trừ và số trừ tăng thêm bao nhiêu đơn vị thì hiệu sẽ giảm bớt bấy nhiêu đơn vị.\r\nb) Trong phéo trừ, nếu giữ nguyên số trừ và số bị trừ tăng thêm bao nhiêu đơn vị thì hiệu sẽ tăng thâm bấy nhiêu đơn vị.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var de_3 = CreText('de_3',40,251,133,62,"a) x + 25 = 30\r\n    =>  x    = 30 - 25\r\n           x    = 5 ",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var de_6 = CreText('de_6',38,406,201,85,"a)  20 -17 + 14 = 17\r\nb) 40 - 28 + 22 = 24\r\nc) 52 +18 -32 = 48",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var de_0 = CreText('de_0',33,29,577,66,"a) Hai số có tổng bằng 20, số hạng thứ nhất là 7, vậy số hạng thứ hai là\r\nb) Hai số có tổng bằng 60, số hạng thứ nhất là 28, vậy số hạng thứ hai là\r\nc) Hai số có tổng bằng 80, số hạng thứ nhất là 40, vậy số hạng thứ hai là",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',8,81,362,19,"11. Điền số thích hợp vào dấu chấm",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',8,163,32,19,"12.",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var de_1 = CreText('de_1',42,170,399,71,"a) 30 + x = 31 vậy x =\r\nb) 40 + x = 40 vậy x =\r\nc) 50 + x = 60 vậy x =\r\n\r\n\r\n",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_7 = CreText('Text_7',6,224,362,19,"13. Đúng ghi Đ sai ghi S vào ô trống:",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var tl2_0 = CreText('tl2_0',519,19,30,17,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
tl2_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var tl2_1 = CreText('tl2_1',519,38,30,17,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
tl2_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var tl2_2 = CreText('tl2_2',519,57,30,17,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
tl2_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var tl2_3 = CreText('tl2_3',114,95,26,17,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
tl2_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var tl2_4 = CreText('tl2_4',114,117,26,17,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
tl2_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var tl2_5 = CreText('tl2_5',114,136,26,17,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
tl2_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var tl2_6 = CreText('tl2_6',187,158,26,19,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
tl2_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var tl2_7 = CreText('tl2_7',187,178,26,19,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
tl2_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var tl2_8 = CreText('tl2_8',187,199,26,19,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
tl2_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var tl2_9 = CreText('tl2_9',137,284,26,18,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
tl2_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DS();
  return;
}
 );
var tl2_10 = CreText('tl2_10',349,283,26,18,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
tl2_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DS();
  return;
}
 );
var tl2_11 = CreText('tl2_11',238,332,26,18,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
tl2_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DS();
  return;
}
 );
var tl2_12 = CreText('tl2_12',245,369,26,18,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
tl2_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DS();
  return;
}
 );
var tl2_13 = CreText('tl2_13',190,401,26,18,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
tl2_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DS();
  return;
}
 );
var tl2_14 = CreText('tl2_14',190,422,26,18,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
tl2_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DS();
  return;
}
 );
var tl2_15 = CreText('tl2_15',190,443,26,18,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
tl2_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 DS();
  return;
}
 );
var m_diem = CreText('m_diem',152,144,252,141,"8",'rgba(236,217,255,1.11)','#ffffff','#8000ff','#ffffff','',48,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','rgba(236,217,255,1.11)','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var label = CreText('label',174,170,201,24,"Bạn được",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var t_mess = CreText('t_mess',153,145,252,21,"Thông báo điểm",'rgba(64,0,128,1.11)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',1,'#ffffff','rgba(128,0,255,1.11)','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_lam_lai = CreText('bt_lam_lai',226,245,95,25,"Làm Lại",'#400080','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#8000ff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var bg_key = CreText('bg_key',0,-1,129,158,"0",'#e5e5e5','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#000000','#e5e5e5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _0 = CreText('_0',5,3,35,21,"0",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var clear_one = CreText('clear_one',47,3,35,21,"←",'#ffc0cb','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffe4e1','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
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
var clear_all = CreText('clear_all',89,3,35,21,"C",'#ffc0cb','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffe4e1','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
clear_all.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
      keyNewValue = "";
	SetText("",objectShowKey,"");
	InvalidateObj("",objectShowKey);;
  return;
}
 );
var _1 = CreText('_1',5,29,35,21,"1",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _2 = CreText('_2',47,29,35,21,"2",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _3 = CreText('_3',89,29,35,21,"3",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _4 = CreText('_4',5,55,35,21,"4",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _5 = CreText('_5',47,55,35,21,"5",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _6 = CreText('_6',89,55,35,21,"6",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _9 = CreText('_9',89,81,35,21,"9",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _8 = CreText('_8',47,81,35,21,"8",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _7 = CreText('_7',5,81,35,21,"7",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_lon = CreText('dau_lon',5,107,35,21,">",'#afeeee','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
dau_lon.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_bang = CreText('dau_bang',47,107,35,21,"<",'#afeeee','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
dau_bang.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_be = CreText('dau_be',88,107,35,21,"=",'#afeeee','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
dau_be.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var ok = CreText('ok',87,132,36,21,"OK",'#98fb98','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e0fee0','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
ok.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
var huy = CreText('huy',4,132,35,21,"Hủy",'#ffc0cb','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffe4e1','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
huy.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetText("",objectShowKey,keyOldValue);
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
var nop_bai = CreText('nop_bai',436,433,87,25,"Nộp Bài",'#400080','#ffad5b','#fffe99','#fffe99','',14,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#000000','#8000ff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
nop_bai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NopBai();
  return;
}

 );
var bang_diem = new Kinetic.Group({name:'bang_diem',x:0,y:0,width:257,height:145});
bang_diem.add(m_diem,label,t_mess,bt_lam_lai);
var Text_1 = CreText('Text_1',46,132,35,21,"+",'#afeeee','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var Text_12 = CreText('Text_12',8,313,40,19,"14.",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_13 = CreText('Text_13',8,404,40,19,"15.",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:136,height:162});
Group_1.add(bg_key,_0,clear_one,clear_all,_1,_2,_3,_4,_5,_6,_9,_8,_7,dau_lon,dau_bang,dau_be,ok,huy,Text_1);
Trang_2.add(Trang_2_Backrounnd,Text_0,de_5,de_2,de_4,de_3,de_6,de_0,Text_2,Text_3,de_1,Text_7,tl2_0,tl2_1,tl2_2,tl2_3,tl2_4,tl2_5,tl2_6,tl2_7,tl2_8,tl2_9,tl2_10,tl2_11,tl2_12,tl2_13,tl2_14,tl2_15,nop_bai,bang_diem,Text_12,Text_13,Group_1);
stage.add(Trang_2);
InitLacVietScript();
};
