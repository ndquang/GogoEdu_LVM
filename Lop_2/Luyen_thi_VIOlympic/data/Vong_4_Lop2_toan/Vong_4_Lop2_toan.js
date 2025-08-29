folder_Resource ='data/Vong_4_Lop2_toan';
var arNumber=[0,0,0,0,0];
var m_size=20;
var m_index=0;
var m_sai=0;
var count_sai=0;
var arPhepTinh=[0,0,0,0,0];
function  CreateRam(){
   var Count = 0;
   for (var i = 0; i < m_size; i++)
   {
    var bb = true;
    var iNN,a,b,dau;
    while (bb)
    {
	dau= Random(3);
	if(dau==0)
		 iNN = Random(70)+20;
	else if(dau==1)
		{
			a= Random(90)+10;
			b= Random(90)+10;
			while(a+b>99)
			{
				a= Random(90)+10;
				b= Random(90)+10;
			}
			iNN  = a+b;
		}
	else if(dau==2)
		{
			a= Random(90)+10;
			b= Random(90)+10;
			while(a-b<0 || a%10 - b%10<0)
			{
				a= Random(90)+10;
				b= Random(90)+10;
			}
			iNN = a-b;
		}
   
    for (var j = 0 ; j < Count;j++)
    { 
      if (arNumber[j] == iNN)
         break;
    }
    if (j >= Count)
       bb = false;
    }
    arNumber[Count] =iNN;
    if(dau==0)	
    arPhepTinh[Count]= iNN+"kg";
    else if(dau==1)
	arPhepTinh[Count]= a + "kg + " + b+"kg";
    else if(dau==2)
	arPhepTinh[Count]= a + "kg - " + b+"kg";
    Count++;
  } 
}
function InitBai1()
{

CreateRam();
for (var k = 0; k < m_size; k++)
	{
	SetText("","o_so_"+k,arPhepTinh[k]);
	SetShowObject("","o_so_"+k,1);
	SetColor("","o_so_"+k,-1,-1,-1);
	MoveObjectTo("","o_so_"+k,-1,-1,10,5,3);
	}
var tam= arNumber[0];
 for(var i = 0; i<m_size; i++)
      for(var j = m_size; j>i; j--)
      if(arNumber[j]<arNumber[j-1]){
		tam= arNumber[j];
		arNumber[j]=arNumber[j-1];
		arNumber[j-1]=tam;
       }
SetText("","obj_view","");
SetText("","phut","20");
SetText("","giay","0");
m_index=0;
m_sai=0;
count_sai=0;
GetVer();
SetTimerPage(1000);
InvalidateObj("","");
}
function FinishMove(){
	SetShowObject("","",0);
	SetText("","obj_view",arNumber[m_index-1]);
	InvalidateObj("","");
}
function ClickNumber()
{
	var kq= replaceStr(GetText("",""),"kg","");
		kq= ExecAsThread(kq);		
	if(arNumber[m_index]==kq){
		m_index++;
		m_sai=0;		
		MoveObjectTo("","",GetLeft("","obj_view"),GetTop("","obj_view"),400,2,1,"FinishMove()");
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
		UpdateScore(diem);
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
		InitBai1();
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
var akqbai2=["","",""];
function CreateBai2()
{
	
	var a= Random(90)+10;
	var b= Random(90)+10;
	while(a+b>99)
	{
	a= Random(90)+10;
	b= Random(90)+10;
	}
	akqbai2[0]= a+b;
	SetText("","cau_hoi_0","Điền số thích hợp vào chỗ trống "+a+" + "+b +"=");
	/*---*/
	a= Random(90)+10;
	b= Random(90)+10;
	while(a+b>99)
	{
	a= Random(90)+10;
	b= Random(90)+10;
	}
	var c= a+b;
	SetText("","cau_hoi_1","Điền số thích hợp vào chỗ trống       + "+b +" = "+c);
	akqbai2[1]= a;
	/*---*/
	a= Random(90)+10;
	b= Random(90)+10;
	while(a-b<0 || a%10 - b%10<0)
	{
		a= Random(90)+10;
		b= Random(90)+10;
	}
	c = a-b;
	SetText("","cau_hoi_2","Biết số trừ là "+b +" và số bị trừ là "+a+". Hiệu của hai số đó là:");
	akqbai2[2]= c;
	/*---*/
	a= Random(90)+10;
	b= Random(90)+10;
	while(a-b<0 || a%10 - b%10<0)
	{
		a= Random(90)+10;
		b= Random(90)+10;
	}
	c = a-b;
	SetText("","cau_hoi_3","Điền số thích hợp vào chỗ trống        - "+b +" = "+c);
	akqbai2[3]= a;
	/*---*/
	a= Random(90)+10;
	b= Random(90)+10;
	while(a+b>99)
	{
	a= Random(90)+10;
	b= Random(90)+10;
	}
	c= a+b;
	var x=floor(a/10);
	var y=a%10;
	SetText("","cau_hoi_4","Điền chữ số còn thiếu vào chỗ trống        "+y+" + "+ b +" = "+c);
	akqbai2[4]= x;
	/*---*/
	a= Random(90)+10;
	b= Random(90)+10;
	while(a-b<0 || a%10 - b%10<0)
	{
		a= Random(90)+10;
		b= Random(90)+10;
	}
	c = a-b;
	SetText("","cau_hoi_5","Một cửa hàng có "+a+"kg gạo. Bán đi  "+b+"kg. Khi đó cửa hàng đó còn lại         kg gạo.");
	akqbai2[5]= c;
	/*---*/
	a= Random(80)+20;
	b= Random(20)+10;
	while(a+b>99)
	{
	a= Random(90)+10;
	b= Random(20)+10;
	}
	c = a+b;
	SetText("","cau_hoi_6","Tuyến có "+a+" chiếc nhãn vở, Thảo có nhiều hơn Tuyến "+b+" chiếc. Như vậy số nhãn vở của Thảo có là:");
	akqbai2[6]= c;
	/*---*/
	a= Random(10)+10;
	b=  floor(a/10)+a%10;
	SetText("","cau_hoi_7","Số nhỏ nhất có 2 chữ số, mà tổng hai chữ số bằng "+b+" là số ");
	akqbai2[7]= a;
	/*---*/
	a= Random(90)+10;
	b= Random(10);
	c= Random(50)+1;
	while(a-b+c>99||a-b*10<0)
	{
		a= Random(90)+10;
		b= Random(9)+1;
		c= Random(50)+1;
	}
	akqbai2[8]= a-b+c;
	b=b*10;
	SetText("","cau_hoi_8",	"Điền số thích hợp vào chỗ trống:"+ a+"dm - " + b+"cm + "+c+"dm =        dm");
	/*---*/
	a= Random(90)+10;
	b= Random(90)+10;
	while(a-b<0 || a%10 - b%10<0)
	{
		a= Random(90)+10;
		b= Random(90)+10;
	}
	c=a-b;
	akqbai2[9]=c;
	x = floor(a/10)+"dm"+a%10+"cm -";
	SetText("","cau_hoi_9",	"Điền số thích hợp vào chỗ trống: "+ x+b+"cm =        cm");
	for(var i=0; i<10;i++){
		SetText("","so_"+i,"");
		AllowEditText("","so_"+i,1);
		SetBorder("","so_"+i,"#999999",0.5);
		SetText("","kq_"+i,"");
	}
	InvalidateObj("","");
}
var objfocus="";
function Click2()
{
if(objfocus!=GetName(""))
	SetBorder("",objfocus,"#999999",0.5);
SetBorder("","","#3399FF",0.5);
objfocus= GetName("");
}
function  InitBai2()
{
SetText("","obj_view","");
SetText("","phut","20");
SetText("","giay","0");
SetTimerPage(1000);
InvalidateObj("","");
SetShowObject("","kiem_tra",1);
SetShowObject("","msg",0);
GetVer();
CreateBai2();
}
function  KiemTra2(){
var diem=0;
for(var i=0; i<10;i++)
	{
		if(GetText("","so_"+i)==akqbai2[i])
		{
		SetFontColor("","kq_"+i,"#008000");;
		SetText("","kq_"+i,"Đúng.");
		diem++;
		}
		else {
		SetFontColor("","kq_"+i,"#ff0000");;
		SetText("","kq_"+i,"Sai.");
		}
	}
		KillTimerPage();
		diem=diem*10;
		UpdateScore(diem);
		diem= "Điểm: " +diem +"/100 \n Thời gian: ";
		var g=60 - GetText("","giay");
		var ph= 19 - GetText("","phut");
		diem = diem +ph +":"+g;
		SetText("","bt_lam_lai","Làm Lại");
		SetText("","label",diem);
	      SetShowObject("","msg",1);
		SetShowObject("","kiem_tra",0);
	      InvalidateObj("","");
}
function Page_1()
{
SetShowObject("","bang_diem",1);
KillTimerPage();

  return;
}
function Page_1_OnTimer()
{
StartTime();
  return;
}

function Page_2()
{
SetShowObject("","cau_tiep",0);
SetShowObject("","kiem_tra",0);
for(var i=0; i<10;i++){
		SetText("","so_"+i,"");
		SetText("","cau_hoi_"+i,"");
		SetText("","kq_"+i,"");
}
SetText("","label","Điền số thích hợp vào ____");
SetShowObject("","msg",1);
KillTimerPage();
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
 width: 470,
 height: 400 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,470,300,'','#8000ff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#8000ff','0','0','0','','0','0','0','0',0,0,'');
var Text_3 = CreText('Text_3',13,57,447,236,"",'rgba(217,170,127,1.11)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',8,'#804000','rgba(217,170,127,1.11)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',12,7,426,42,"          Vòng 4, bài 1",'#d9aa7f','#000000','#804000','#ffffff','',20,'Arial','Bold','left','middle',12,'0.00','0','1',2,'#aa7c41','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',5,5,'#aa7c41',0,1.50);
var obj_view = CreText('obj_view',16,12,37,35,"",'rgba(0,0,0,0)','#ffffff','#804000','#ffffff','',18,'Arial','Bold','center','middle',1,'0.00','0','0',3,'#804000','rgba(128,64,0,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'#c0c0c0',0,1.50);
obj_view.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var Text_6 = CreText('Text_6',222,16,79,24,":",'rgba(128,64,0,0.67)','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(128,64,0,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var o_so_0 = CreText('o_so_0',22,60,106,45,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_1 = CreText('o_so_1',129,60,106,45,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_2 = CreText('o_so_2',236,60,106,45,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_4 = CreText('o_so_4',22,244,106,45,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_5 = CreText('o_so_5',22,106,106,45,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_6 = CreText('o_so_6',129,106,106,45,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_7 = CreText('o_so_7',236,106,106,45,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_8 = CreText('o_so_8',345,106,106,45,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_9 = CreText('o_so_9',129,244,106,45,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_10 = CreText('o_so_10',22,152,106,45,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_11 = CreText('o_so_11',129,152,106,45,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_12 = CreText('o_so_12',236,152,106,45,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_13 = CreText('o_so_13',345,152,106,45,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_14 = CreText('o_so_14',236,244,106,45,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_15 = CreText('o_so_15',22,198,106,45,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_16 = CreText('o_so_16',129,198,106,45,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_17 = CreText('o_so_17',236,198,106,45,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_18 = CreText('o_so_18',345,198,106,45,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_19 = CreText('o_so_19',345,244,106,45,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var m_diem = CreText('m_diem',134,121,201,101,"",'rgba(236,217,255,1.11)','#ffffff','#ff0000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(236,217,255,1.11)','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_lam_lai = CreText('bt_lam_lai',206,202,65,18,"Bắt Đầu",'#ae0000','#ffffff','#ffffff','#ffffff','',10,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#ffffff','#510000','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitBai1();
SetShowObject("","bang_diem",0);
  return;
}
 );
var t_mess = CreText('t_mess',134,122,200,16,"Bài 1",'rgba(64,0,128,1.11)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#ffffff','rgba(128,0,255,1.11)','4','1','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var label = CreText('label',138,127,193,74,"Bạn chọn liên tiếp các ô có giá trị tăng dần, để các ô lần lượt bị xóa khoải bảng. Nếu chọn sai quá 3 lần thì bài thi sẽ kết thúc.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',11,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var phut = CreText('phut',223,18,38,24,"0",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var giay = CreText('giay',265,18,38,24,"0",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_8 = CreText('Text_8',401,12,30,30,"››",'rgba(0,0,0,0)','#ffffff','#804000','#ffff00','',20,'Arial','Bold','center','middle',2,'0.00','0','0',3,'#804000','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
var bang_diem = new Kinetic.Group({name:'bang_diem',x:0,y:0,width:205,height:105});
bang_diem.add(m_diem,label,t_mess,bt_lam_lai);
var Text_1 = CreText('Text_1',26,44,16,15,"",'#d9aa7f','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_4 = CreText('Text_4',344,41,16,24,"",'#d9aa7f','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var o_so_3 = CreText('o_so_3',345,60,106,45,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(Page_1_Backrounnd,Text_3,Text_2,obj_view,Text_6,o_so_0,o_so_1,o_so_2,o_so_4,o_so_5,o_so_6,o_so_7,o_so_8,o_so_9,o_so_10,o_so_11,o_so_12,o_so_13,o_so_14,o_so_15,o_so_16,o_so_17,o_so_18,o_so_19,phut,giay,Text_8,bang_diem,Text_1,Text_4,o_so_3);
stage.add(Page_1);

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page_2_Backrounnd = CreText('Page_2_Backrounnd',0,0,470,400,'','#efdbc9','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#efdbc9','0','0','0','','0','0','0','0',0,0,'');
var kq_3 = CreText('kq_3',68,136,55,14,"Câu hỏi 4:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Italic','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq_4 = CreText('kq_4',68,168,55,14,"Câu hỏi 5:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Italic','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq_5 = CreText('kq_5',68,200,55,14,"Câu hỏi 6:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Italic','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq_6 = CreText('kq_6',68,232,55,14,"Câu hỏi 7:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Italic','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',0,0,470,37,"           Bài 2: Điền kết quả thích hợp vào chỗ ____",'#d9aa7f','#000000','#804000','#ffffff','',12,'Arial','Bold','left','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'#aa7c41',0,1.50);
var Text_6 = CreText('Text_6',415,7,20,24,":",'rgba(0,0,0,0)','#ffffff','#804000','#ffffff','',18,'Arial','Bold','center','middle',11,'0.00','10','0',0,'rgba(0,0,0,0)','rgba(0,0,0,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var phut = CreText('phut',388,9,38,24,"0",'rgba(0,0,0,0)','#ffffff','#804000','#ffffff','',18,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','rgba(0,0,0,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var giay = CreText('giay',430,9,38,24,"0",'rgba(0,0,0,0)','#ffffff','#804000','#ffffff','',18,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','rgba(0,0,0,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kiem_tra = CreText('kiem_tra',203,374,69,22,"Nộp Bài",'#d9aa7f','#ffffff','#000000','#ffffff','',10,'Arial','Bold','center','middle',3,'0.00','10','0',2,'#804000','#804000','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
kiem_tra.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
KiemTra2();
  return;
}
 );
var Text_10 = CreText('Text_10',3,6,24,25,"‹‹",'#d9aa7f','#ffffff','#804000','#ffff00','',16,'Arial','Bold','center','middle',2,'0.00','0','0',3,'#804000','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
var Text_2 = CreText('Text_2',364,5,34,29,"",'#ffffff','#ffffff','#000000','#ffffff','ID_ITEM11.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var cau_hoi_0 = CreText('cau_hoi_0',23,50,447,25,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi_1 = CreText('cau_hoi_1',23,83,447,25,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi_2 = CreText('cau_hoi_2',22,116,447,25,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi_3 = CreText('cau_hoi_3',23,147,447,25,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi_4 = CreText('cau_hoi_4',24,179,447,25,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi_5 = CreText('cau_hoi_5',23,213,447,25,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi_6 = CreText('cau_hoi_6',23,244,447,25,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi_7 = CreText('cau_hoi_7',25,276,447,25,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi_8 = CreText('cau_hoi_8',24,308,447,25,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi_9 = CreText('cau_hoi_9',26,347,447,25,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so0 = CreText('cau_so0',10,41,72,14,"Câu hỏi 1:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so1 = CreText('cau_so1',10,73,72,14,"Câu hỏi 2:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so2 = CreText('cau_so2',10,105,72,14,"Câu hỏi 3:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so3 = CreText('cau_so3',10,137,72,14,"Câu hỏi 4:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so4 = CreText('cau_so4',10,169,72,14,"Câu hỏi 5:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so5 = CreText('cau_so5',10,201,72,14,"Câu hỏi 6:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so6 = CreText('cau_so6',10,233,72,14,"Câu hỏi 7:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so7 = CreText('cau_so7',10,265,58,14,"Câu hỏi 8:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so8 = CreText('cau_so8',10,297,72,14,"Câu hỏi 9:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so9 = CreText('cau_so9',8,336,72,14,"Câu hỏi 10:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so_0 = CreText('so_0',221,55,24,13,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_1 = CreText('so_1',173,88,24,13,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_2 = CreText('so_2',290,120,24,13,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_3 = CreText('so_3',179,153,24,13,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_4 = CreText('so_4',198,185,21,13,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_5 = CreText('so_5',346,220,24,13,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_7 = CreText('so_7',301,281,24,13,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_8 = CreText('so_8',281,314,24,13,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_9 = CreText('so_9',266,353,24,13,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var kq_0 = CreText('kq_0',68,40,55,14,"Câu hỏi 1:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Italic','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq_1 = CreText('kq_1',68,72,55,14,"Câu hỏi 2:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Italic','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq_2 = CreText('kq_2',68,104,55,14,"Câu hỏi 3:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Italic','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq_7 = CreText('kq_7',68,264,55,14,"Câu hỏi 8:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Italic','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq_8 = CreText('kq_8',68,296,55,14,"Câu hỏi 9:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Italic','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq_9 = CreText('kq_9',66,335,62,14,"Câu hỏi 10:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Italic','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so_6 = CreText('so_6',76,254,24,13,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var m_diem = CreText('m_diem',126,176,199,87,"",'#d9aa7f','#ffffff','rgba(0,0,0,0)','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#d9aa7f','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_lam_lai = CreText('bt_lam_lai',193,239,71,20,"Bắt Đầu",'#8b0000','#ffffff','#ffffff','#ffffff','',10,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#ffffff','#370000','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitBai2();
}
 );
var label = CreText('label',127,189,194,56,"Hãy điền số thích hợp vào ô trống để được phép tính đúng",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var t_mess = CreText('t_mess',127,176,198,15,"Bài 2",'rgba(128,64,0,1.11)','#ffffff','#ffffff','#ffffff','',10,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#ffffff','rgba(128,64,0,1.11)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = new Kinetic.Group({name:'msg',x:0,y:0,width:203,height:91});
msg.add(m_diem,label,bt_lam_lai,t_mess);
Page_2.add(Page_2_Backrounnd,kq_3,kq_4,kq_5,kq_6,Text_1,Text_6,phut,giay,kiem_tra,Text_10,Text_2,cau_hoi_0,cau_hoi_1,cau_hoi_2,cau_hoi_3,cau_hoi_4,cau_hoi_5,cau_hoi_6,cau_hoi_7,cau_hoi_8,cau_hoi_9,cau_so0,cau_so1,cau_so2,cau_so3,cau_so4,cau_so5,cau_so6,cau_so7,cau_so8,cau_so9,so_0,so_1,so_2,so_3,so_4,so_5,so_7,so_8,so_9,kq_0,kq_1,kq_2,kq_7,kq_8,kq_9,so_6,msg);
stage.add(Page_2);
InitLacVietScript();
};
