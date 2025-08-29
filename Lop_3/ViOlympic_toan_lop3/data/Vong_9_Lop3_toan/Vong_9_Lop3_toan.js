folder_Resource ='data/Vong_9_Lop3_toan';
var arNumber=[0,0,0,0,0];
var m_size=20;
var m_index=0;
var m_sai=0;
var count_sai=0;
var ar_View=[0,0,0,0,0];
var ardonvi=["km","hm","dam","m","dm","cm","mm"];
var ar_mm=[1000000,100000,10000,1000,100,10,1];
function  CreateRam(){
   var Count = 0;
   for (var i = 0; i < m_size; i++)
   {
    var bb = true;
    var iNN,a,b,dv1,dv2,tam,ketqua;
    while (bb)
    {
    a= Random(9)+1;
    b= Random(9)+1;
    dv1= Random(7);
    dv2= Random(7);
    while(dv1==dv2)
		dv2= Random(7);
    if(dv1>dv2)
	{
		tam=dv1;
		dv1=dv2;
		dv2=tam;
	}
    ketqua=a+ardonvi[dv1]+" "+b+ardonvi[dv2];
    iNN = a*ar_mm[dv1]+ b*ar_mm[dv2];
    for (var j = 0 ; j < Count;j++)
    { 
      if (arNumber[j] == iNN)
         break;
    }
    if (j >= Count)
       bb = false;
    }
    ar_View[Count]=ketqua;
    arNumber[Count] =iNN;
    Count++;
  } 
}
function InitBai1()
{
CreateRam();
for (var k = 0; k < m_size; k++)
	{
	SetText("","o_so_"+k,ar_View[k]);
	SetShowObject("","o_so_"+k,1);
	SetColor("","o_so_"+k,-1,-1,-1);
	MoveObjectTo("","o_so_"+k,-1,-1);
	}
var tam= arNumber[0];
 for(var i = 0; i<m_size; i++)
      for(var j = m_size; j>i; j--)
      if(arNumber[j]<arNumber[j-1]){
		tam= arNumber[j];
		arNumber[j]=arNumber[j-1];
		arNumber[j-1]=tam;
		//
		tam=  ar_View[j];
		 ar_View[j]= ar_View[j-1];
		 ar_View[j-1]=tam;

       }
SetText("","obj_view","");
SetText("","phut","20");
SetText("","giay","0");
m_index=0;
m_sai=0;
count_sai=0;
SetTimerPage(1000);
InvalidateObj("","");
}
function FinishMove(){
	SetShowObject("","",0);
	SetText("","obj_view",ar_View[m_index-1]);
	InvalidateObj("","");
}
function ClickNumber()
{
	var kq= GetText("","");
	if(ar_View[m_index]==kq){
		m_index++;
		m_sai=0;		
		MoveObjectTo("","",GetLeft("","obj_view"),GetTop("","obj_view"),500,2,1,"FinishMove()");
		PlaySound("ID_TRUE");
	}
	else{
		m_sai++;
		SetColor("","","#ff0000");
		Delay("SetColor('','')",500);
		PlaySound("ID_FALSE");
		count_sai++;
	}
	if(m_index==m_size){
		KillTimerPage();
		  var diem = 100- count_sai*100/20;
		diem= "Điểm: " +diem +"/100 \n Thời gian: ";
		var g=60 - GetText("","giay");
		var ph= 19 - GetText("","phut");
		diem = diem +ph +":"+g;
		SetText("","label",diem);
		SetText("","bt_lam_lai","Làm Lại");
		SetShowObject("","bang_diem",1);
		}
	else if(m_sai>3)
		{
		SetText("","label","Bạn chọn sai quá 3 lần kết quả đúng là:");
		SetText("","m_diem",ar_View[m_index]);
		SetText("","bt_lam_lai","Làm Lại");
		SetShowObject("","bang_diem",1);
		}
	InvalidateObj("","");
}
function StartTime()
{
	var s= GetText("","giay");
	if(s==0){
		var p= GetText("","phut");
		s= 60;
		p--;
		if(p==-1)
		{
		SetText("","label","Hết thời gian.");
		SetText("","m_diem","0:0");
		SetShowObject("","bang_diem",1);
		KillTimerPage();
		return;
		}
	      SetText("","phut",p);
	}
	s--;
	SetText("","giay",s);
	InvalidateObj("","");
}
//
var a_ch=["",""];
var i2=0;
var a_cau=[""];
var m_has_click= false;
function InitBai2()
{
	  SetShowObject("", "ch", 0);
        SetShowObject("", "a", 0);
        SetShowObject("", "b", 0);
        SetShowObject("", "c", 0);
        SetShowObject("", "d", 0);
	  a_ch[0]="Một đoạn dây đồng dài 38dam được cắt thành hai đoạn, đoạn thứ nhất dì 15dam. Hỏi đoạn thứ hai dài bao nhiêu dma?|17dam|19dam|21dam|23dam|d";
	  a_ch[1]="Một hình tam giác có độ dài 3 cạnh lần lượt là 2dm 3cm; 15cm; 1dm 2cm. Chu vi tam giác đó là:|23cm|41cm|50dm|50cm|d";
	  a_ch[2]="2km giảm đi bao nhiêu lần thì được 5hm?|1 lần|4 lần|5 lần|10 lần|b";
	  a_ch[3]="5dam 5dm = .....dm. Số thích hợp để điền vào chỗ chấm là:|55|550|505|5005|c";
	  a_ch[4]="Đoạn thẳng AB dài 2dm 4cm, đoạn thẳng CD gấp hai lần đoạn thẳng AB và bớt đi 3cm. Vậy độ dài đoạn thẳng CD là:|12cm|45cm|48cm|51cm|b";
	  a_ch[5]="Một hình tam giác có độ dài hai cạnh lần lượt là 6dm 3cm; 1m 5cm và chu vi tam giác đó là 215cm. Hỏi cạnh còn lại dài bao nhiêu?|4dm 7cm|1m 8cm|16dm 3cm|200cm|a";
	a_ch[6]="Cái bàn dài khoản?|2km|2m|2cm|2hm|b";
	a_ch[7]="Số bi của Tùng bằng 1/3 số bi của Dũng. Nếu Tùng cho Dũng 8 viên bi thì số bi của hai bạn bằng nhau. Hỏi số bi của mỗi bạn?|Tùng có 8 viên, Dũng có 24 viên|Tùng có 16 viên bi, Dũng có 16 viên bi|Tùng có 24 viên bi, Dũng có 8 viên bi|Tùng có 20 viên bi, Dũng có 12 viên bi|a";
	a_ch[8]="Tìm x, biết 96 : x - 3 = 5.|x = 6|x = 12|x = 16 | x= 24|b";
	a_ch[9]="Một hình tam giác cho độ dài ba cạnh bằng nhau, và có chu vi là 90cm. Độ dài của mỗi cạnh là:|3cm|3dm|3m|3km|b";
	i2=0;
count_sai=0;
SetText("","phut","20");
SetText("","giay","0");
SetText("","msg","Bắt Đầu");
SetShowObject("","msg",1);
InvalidateObj("","");
KillTimerPage();
}
function ShowCauHoi()
{
	var cau_hoi= a_ch[i2];
	var idx0=0;
	var idx= indexOf(cau_hoi,"|",idx0);
	var kk=0;
	while(idx!=-1&&kk<6)
	{
	  a_cau[kk]= subString(cau_hoi,idx0,idx-idx0);
	  idx0=idx+1;
	  idx= indexOf(cau_hoi,"|",idx0);
	  kk++;
	}
  a_cau[5]=subString(cau_hoi,idx0);
SetColor("","a");
SetColor("","b");
SetColor("","c");
SetColor("","d");
	 SetText("","ch", a_cau[0]);
	 SetText("","a", a_cau[1]);
	 SetText("","b", a_cau[2]);
	 SetText("","c", a_cau[3]);
	 SetText("","d", a_cau[4]);
 	 SetShowObject("", "ch", 1);
       SetShowObject("", "a", 1);
       SetShowObject("", "b", 1);
       SetShowObject("", "c", 1);
       SetShowObject("", "d", 1);
MoveObjectTo("","a",-1,-1,100,3,7);
MoveObjectTo("","b",-1,-1,100,3,7);
MoveObjectTo("","c",-1,-1,100,3,7);
MoveObjectTo("","d",-1,-1,100,3,7);
SetShowObject("","msg",0);
m_has_click= false;
if(i2==0)
SetTimerPage(1000);
i2++;
InvalidateObj("","");
}
function Click2(){
 if(m_has_click) return;
 var n= GetName("");
  var iii=i2+1;
  if(n==toLowerCase(a_cau[5])){
	SetColorEx("","","#008000");
	PlaySound("ID_TRUE");
	SetText("","msg","Đúng! Câu "+iii);
	}
  else {
		SetColorEx("","","#800000");
       	SetColorEx("",a_cau[5],"#008000");
		count_sai++;
		PlaySound("ID_FALSE");
		SetText("","msg","Sai rồi. Câu "+iii);
	}

if(i2>9){
		KillTimerPage();
		var diem = 100- count_sai*100/10;
		diem= "Điểm: " +diem +"/100 \n Thời gian: ";
		var g=60 - GetText("","giay");
		var ph= 19 - GetText("","phut");
		diem = diem +ph +":"+g;
		SetText("","msg",diem);
		}
       SetShowObject("","msg",1);
	 m_has_click= true;
       InvalidateObj("","");
}
function Page_1()
{
  return;
}
function Page_1_OnTimer()
{
StartTime();
  return;
}

function Page_2()
{
InitBai2();
  return;
}
function Page_2_OnTimer()
{
StartTime();
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
 height: 388 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,470,250,'','#8000ff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#8000ff','0','0','0','','0','0','0','0',0,0,'');
Page_1.add(Page_1_Backrounnd);
var Text_3 = CreText('Text_3',13,58,442,170,"",'rgba(255,255,0,0.98)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',8,'#ffd700','rgba(255,255,0,0.98)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_3);
var Text_4 = CreText('Text_4',400,59,13,13,"",'#8000ff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#ffffff','#8000ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_4);
var Text_2 = CreText('Text_2',46,3,372,33,"Vòng 9, bài 1",'#d9aa7f','#000000','#000000','#ffffff','',18,'Arial','Bold','center','middle',11,'0.00','10','0',2,'#aa7c41','#d9aa7f','0','0','rgba(0, 0, 0, 0)','0','0','4','0',5,5,'#aa7c41',0,1.50);
Page_1.add(Text_2);
var obj_view = CreText('obj_view',74,9,79,24,"",'rgba(0,0,0,0.59)','#ffffff','#ffffff','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(0,0,0,0.59)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'#c0c0c0',0,1.50);
obj_view.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(obj_view);
var Text_6 = CreText('Text_6',317,9,79,24,":",'rgba(0,0,0,0.59)','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(0,0,0,0.59)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_6);
var o_so_0 = CreText('o_so_0',18,75,85,36,"",'#0080c0','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(o_so_0);
var o_so_1 = CreText('o_so_1',106,75,85,36,"",'#0080c0','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(o_so_1);
var o_so_2 = CreText('o_so_2',191,75,85,36,"",'#0080c0','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(o_so_2);
var o_so_3 = CreText('o_so_3',277,75,85,36,"",'#0080c0','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(o_so_3);
var o_so_4 = CreText('o_so_4',365,75,85,36,"",'#0080c0','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(o_so_4);
var o_so_5 = CreText('o_so_5',18,112,85,36,"",'#0080c0','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(o_so_5);
var o_so_6 = CreText('o_so_6',106,112,85,36,"",'#0080c0','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(o_so_6);
var o_so_7 = CreText('o_so_7',191,112,85,36,"",'#0080c0','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(o_so_7);
var o_so_8 = CreText('o_so_8',277,112,85,36,"",'#0080c0','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(o_so_8);
var o_so_9 = CreText('o_so_9',365,112,85,36,"",'#0080c0','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(o_so_9);
var o_so_10 = CreText('o_so_10',18,149,85,36,"",'#0080c0','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(o_so_10);
var o_so_11 = CreText('o_so_11',106,149,85,36,"",'#0080c0','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(o_so_11);
var o_so_12 = CreText('o_so_12',191,149,85,36,"",'#0080c0','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(o_so_12);
var o_so_13 = CreText('o_so_13',277,149,85,36,"",'#0080c0','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(o_so_13);
var o_so_14 = CreText('o_so_14',365,149,85,36,"",'#0080c0','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(o_so_14);
var o_so_15 = CreText('o_so_15',18,186,85,36,"",'#0080c0','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(o_so_15);
var o_so_16 = CreText('o_so_16',106,186,85,36,"",'#0080c0','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(o_so_16);
var o_so_17 = CreText('o_so_17',191,186,85,36,"",'#0080c0','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(o_so_17);
var o_so_18 = CreText('o_so_18',277,186,85,36,"",'#0080c0','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(o_so_18);
var o_so_19 = CreText('o_so_19',365,186,85,36,"",'#0080c0','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(o_so_19);
var m_diem = CreText('m_diem',136,89,201,99,"",'rgba(236,217,255,0.98)','#ffffff','#ff0000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(236,217,255,0.98)','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(m_diem);
var bt_lam_lai = CreText('bt_lam_lai',208,170,65,16,"Bắt Đầu",'#ae0000','#ffffff','#ffffff','#ffffff','',10,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#ffffff','#510000','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
if(m_sai<3)
InitBai1();
SetShowObject("","bang_diem",0);
  return;
}
 );
Page_1.add(bt_lam_lai);
var t_mess = CreText('t_mess',136,88,200,16,"Bài 1",'rgba(64,0,128,0.98)','#ffffff','#ffffff','#ffffff','',8,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#ffffff','rgba(128,0,255,0.98)','4','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(t_mess);
var label = CreText('label',140,106,193,61,"Bạn chọn liên tiếp các ô có giá trị tăng dần theo số đo độ dài. Nếu chọn sai quá 3 lần thì bài thi sẽ kết thúc.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',9,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(label);
var phut = CreText('phut',318,11,38,24,"0",'rgba(0, 0, 0, 0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(phut);
var giay = CreText('giay',360,11,38,24,"0",'rgba(0, 0, 0, 0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(giay);
var Text_8 = CreText('Text_8',435,216,30,30,"››",'#0080ff','#ffffff','#ffffff','#ffff00','',20,'Arial','Bold','center','middle',2,'0.00','0','0',3,'#ffffff','#0080ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_1.add(Text_8);
var Text_12 = CreText('Text_12',399,11,13,13,"",'#8000ff','#ffffff','#c0c0c0','#ffffff','',16,'Arial','Bold','left','middle',2,'0.00','0','0',2,'#ffffff','#8000ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_12);
var Text_10 = CreText('Text_10',54,59,13,13,"",'#8000ff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#ffffff','#8000ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_10);
var Text_1 = CreText('Text_1',404,23,4,38,"|",'#ff6820','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',48,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffff00','#ff6820','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_1);
var Text_5 = CreText('Text_5',54,12,13,13,"",'#8000ff','#ffffff','#c0c0c0','#ffffff','',16,'Arial','Bold','left','middle',2,'0.00','0','0',2,'#ffffff','#8000ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_5);
var Text_7 = CreText('Text_7',58,24,4,37,"|",'#ff6820','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',48,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffff00','#ff6820','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_7);
var Text_9 = CreText('Text_9',51,234,354,16,"Bạn chọn liên tiếp các ô có giá trị tăng dần theo số đo độ dài",'rgba(0, 0, 0, 0)','#ffffff','#ffffff','#ffffff','',10,'Arial','Bold Italic','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_9);
var bang_diem = new Kinetic.Group({name:'bang_diem',x:0,y:0,width:205,height:104});
bang_diem.add(m_diem);
bang_diem.add(t_mess);
bang_diem.add(t_mess);
bang_diem.add(bt_lam_lai);
Page_1.add(bang_diem);
stage.add(Page_1);

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page_2_Backrounnd = CreText('Page_2_Backrounnd',0,0,600,388,'','#8000ff','','','','ID_IMAGE3.PNG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#8000ff','2','2','0','','0','0','0','0',0,0,'');
Page_2.add(Page_2_Backrounnd);
var a = CreText('a',48,306,226,31,"TLA",'rgba(0,0,0,0.78)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#ffffff','rgba(40,40,40,0.78)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;
Click2();
  return;
}
 );
Page_2.add(a);
var b = CreText('b',330,307,226,31,"TLb",'rgba(0,0,0,0.78)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#ffffff','rgba(40,40,40,0.78)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;
Click2();
  return;
}
 );
Page_2.add(b);
var c = CreText('c',48,347,226,31,"TKC",'rgba(0,0,0,0.78)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#ffffff','rgba(40,40,40,0.78)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;
Click2();
  return;
}
 );
Page_2.add(c);
var d = CreText('d',330,347,226,31,"TLD",'rgba(0,0,0,0.78)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#ffffff','rgba(40,40,40,0.78)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;
Click2();
  return;
}
 );
Page_2.add(d);
var ch = CreText('ch',32,195,539,78,"Câu hỏi",'#000000','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#ffffff','#282828','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(ch);
var msg = CreText('msg',191,146,239,44,"BẮT ĐẦU",'#004080','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#ffffff','#0080c0','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;
if(i2>9)
i2=0;
ShowCauHoi();
  return;
}
 );
Page_2.add(msg);
var Text_6 = CreText('Text_6',512,5,79,24,":",'rgba(0,0,0,0.59)','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#ffffff','rgba(0,0,0,0.59)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_6);
var phut = CreText('phut',513,5,38,24,"0",'rgba(0, 0, 0, 0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(phut);
var giay = CreText('giay',555,5,38,24,"0",'rgba(0, 0, 0, 0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(giay);
var Text_1 = CreText('Text_1',151,8,312,28,"Bài 2: Ai là triệu phú",'rgba(0, 0, 0, 0)','#ffffff','#ffff00','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_1);
var Text_2 = CreText('Text_2',5,327,30,30,"‹‹",'#0080ff','#ffffff','#ffffff','#ffff00','',20,'Arial','Bold','center','middle',2,'0.00','0','0',3,'#ffffff','#0080ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page_2.add(Text_2);
stage.add(Page_2);
InitLacVietScript();
};
