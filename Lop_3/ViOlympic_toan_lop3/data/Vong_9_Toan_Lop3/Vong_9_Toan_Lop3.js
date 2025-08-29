folder_Resource ='data/Vong_9_Toan_Lop3';
var arNumber=[0,0,0,0,0];
var m_size=20;
var m_index=0;
var m_sai=0;
var count_sai=0;
var b_begin= false;
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
b_begin= true;
GetVer();
SetTimerPage(1000);
SetShowObject("","bang_diem",0);
InvalidateObj("","");
}
function FinishMove(){
	SetShowObject("","",0);
	SetText("","obj_view",ar_View[m_index-1]);
	InvalidateObj("","");
}
function ClickNumber()
{
	if(b_begin==false)
		return;
	var kq= GetText("","");
	if(ar_View[m_index]==kq){
		m_index++;
		m_sai=0;		
		MoveObjectTo("","",GetLeft("","obj_view"),GetTop("","obj_view"),200,2,1,"FinishMove()");
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
		SetText("","label","Điểm của bạn");
		var diem = (m_size - count_sai)/2;
		UpdateScore(diem);
		SetText("","m_diem",diem);
		SetShowObject("","bang_diem",1);		
		b_begin=false;
		}
	else if(m_sai>3)
		{
		KillTimerPage();
		b_begin=false;
		SetText("","label","Bạn làm sai quá 3 lần, làm lại.");
		SetShowObject("","bang_diem",1);
		SetText("","m_diem","");
		m_sai=0;
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
	  a_ch[0]="Một đoạn dây đồng dài 38dam được cắt thành hai đoạn, đoạn thứ nhất dài 15dam. Hỏi đoạn thứ hai dài bao nhiêu dam?|17dam|19dam|21dam|23dam|d";
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
GetVer();
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
		SetColorEx("","","#ff0000");
       		SetColorEx("",a_cau[5],"#00ff00");
		count_sai++;
		PlaySound("ID_FALSE");
		SetText("","msg","Sai rồi. Câu "+iii);
	}

if(i2>9){
		KillTimerPage();
		var diem = 100 - count_sai*100/10;
		UpdateScore(diem);
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
KillTimerPage();
b_begin=false;
SetText("","label","Chọn các ô có giá trị tăng dần theo độ dài.");
SetText("","m_diem","");
SetShowObject("","bang_diem",1);
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
 height: 350 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,600,350,'','#8000ff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#8000ff','0','0','0','','0','0','0','0',0,0,'');
var Text_6 = CreText('Text_6',411,6,140,39,":",'#d9aa7f','#ffffff','#000000','#ffffff','',24,'Arial','Normal','center','middle',11,'0.00','10','0',2,'#bf7939','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','2',2,2,'#c0c0c0',0,1.50);
var Text_1 = CreText('Text_1',17,62,568,271,"",'#d9aa7f','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',8,'#bc7738','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var o_so_0 = CreText('o_so_0',20,71,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_1 = CreText('o_so_1',133,71,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_2 = CreText('o_so_2',246,71,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_3 = CreText('o_so_3',359,71,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_4 = CreText('o_so_4',472,71,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_5 = CreText('o_so_5',20,136,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_6 = CreText('o_so_6',133,136,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_7 = CreText('o_so_7',246,136,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_8 = CreText('o_so_8',359,136,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_9 = CreText('o_so_9',472,136,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_10 = CreText('o_so_10',20,201,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_11 = CreText('o_so_11',133,201,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_12 = CreText('o_so_12',246,201,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_13 = CreText('o_so_13',359,201,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_14 = CreText('o_so_14',472,201,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_15 = CreText('o_so_15',20,266,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_16 = CreText('o_so_16',133,266,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_17 = CreText('o_so_17',246,266,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_18 = CreText('o_so_18',359,266,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_19 = CreText('o_so_19',472,266,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var m_diem = CreText('m_diem',174,140,249,115,"1",'rgba(236,217,255,1.11)','#ffffff','#ff0000','#ffffff','',24,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(236,217,255,1.11)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_lam_lai = CreText('bt_lam_lai',247,230,105,23,"Bắt Đầu",'#ae0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#ffffff','#510000','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitBai1();
}
 );
var t_mess = CreText('t_mess',174,136,249,21,"Bài 1",'rgba(64,0,128,1.11)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(128,0,255,1.11)','4','1','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var label = CreText('label',178,164,244,64,"Bạn chọn liên tiếp các ô có giá trị tăng dần theo số đo độ dài. Nếu chọn sai quá 3 lần thì bài thi sẽ kết thúc.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',21,6,140,39,"Vòng 9",'#d9aa7f','#ffffff','#000000','#ffffff','',24,'Arial','Normal','center','middle',11,'0.00','10','0',2,'#bf7939','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','2',2,2,'#c0c0c0',0,1.50);
var obj_view = CreText('obj_view',188,6,215,39,"Bài 1",'#d9aa7f','#ffffff','#000000','#ffffff','',24,'Arial','Normal','center','middle',11,'0.00','10','0',2,'#bf7939','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','2',2,2,'#c0c0c0',0,1.50);
var Text_4 = CreText('Text_4',282,40,19,25,"",'#d9aa7f','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var phut = CreText('phut',436,8,38,39,"0",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',26,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var giay = CreText('giay',495,8,38,39,"0",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',26,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_7 = CreText('Text_7',558,7,36,38,"››",'#d9aa7f','#ffffff','#000000','#ffff00','',20,'Arial','Bold','center','middle',2,'0.00','0','0',3,'#aa6b33','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
var Text_5 = CreText('Text_5',474,40,19,24,"",'#d9aa7f','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',73,40,19,25,"",'#d9aa7f','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bang_diem = new Kinetic.Group({name:'bang_diem',x:0,y:0,width:253,height:120});
bang_diem.add(m_diem,t_mess,label,bt_lam_lai);
Page_1.add(Page_1_Backrounnd,Text_6,Text_1,o_so_0,o_so_1,o_so_2,o_so_3,o_so_4,o_so_5,o_so_6,o_so_7,o_so_8,o_so_9,o_so_10,o_so_11,o_so_12,o_so_13,o_so_14,o_so_15,o_so_16,o_so_17,o_so_18,o_so_19,Text_2,obj_view,Text_4,phut,giay,Text_7,Text_5,Text_3,bang_diem);
stage.add(Page_1);

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page_2_Backrounnd = CreText('Page_2_Backrounnd',0,0,600,300,'','#8000ff','','','','ID_IMAGE4.PNG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#8000ff','2','2','0','','0','0','0','0',0,0,'');
var a = CreText('a',12,229,265,31,"TLA",'rgba(0,0,0,0.89)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#ffffff','rgba(40,40,40,0.89)','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;
Click2();
  return;
}
 );
var b = CreText('b',321,230,265,31,"TLb",'rgba(0,0,0,0.89)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#ffffff','rgba(40,40,40,0.89)','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;
Click2();
  return;
}
 );
var c = CreText('c',12,266,265,31,"TKC",'rgba(0,0,0,0.89)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#ffffff','rgba(40,40,40,0.89)','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;
Click2();
  return;
}
 );
var d = CreText('d',321,267,265,31,"TLD",'rgba(0,0,0,0.89)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#ffffff','rgba(40,40,40,0.89)','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
d.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;
Click2();
  return;
}
 );
var ch = CreText('ch',11,130,576,78,"Câu hỏi",'#000000','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#ffffff','#282828','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',179,77,239,44,"BẮT ĐẦU",'#004080','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#ffffff','#0080c0','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;
if(i2>9)
i2=0;
ShowCauHoi();
  return;
}
 );
var Text_6 = CreText('Text_6',510,5,79,24,":",'rgba(0,0,0,0.67)','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#ffffff','rgba(0,0,0,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var phut = CreText('phut',511,5,38,24,"0",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var giay = CreText('giay',553,5,38,24,"0",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',162,2,312,28,"Bài 2: Ai là triệu phú",'rgba(0,0,0,0)','#ffffff','#ffff00','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_7 = CreText('Text_7',6,3,36,38,"‹‹",'#d9aa7f','#ffffff','#000000','#ffff00','',20,'Arial','Bold','center','middle',2,'0.00','0','0',3,'#aa6b33','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page_2.add(Page_2_Backrounnd,a,b,c,d,ch,msg,Text_6,phut,giay,Text_1,Text_7);
stage.add(Page_2);
InitLacVietScript();
};
