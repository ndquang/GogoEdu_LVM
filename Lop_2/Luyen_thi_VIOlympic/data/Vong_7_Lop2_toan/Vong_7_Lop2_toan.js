folder_Resource ='data/Vong_7_Lop2_toan';
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
    iNN = Random(25);
    for (var j = 0 ; j < Count;j++)
    { 
      if (arNumber[j] == iNN)
         break;
    }
    if (j >= Count)
       bb = false;
    }
    arNumber[Count] =iNN;
    Count++;
  } 
}
function InitBai1()
{
CreateRam();
GetVer();
for (var k = 0; k < m_size; k++)
	{
	var dm= Random(2);
	if(arNumber[k]<11)
		SetText("","o_so_"+k,arNumber[k]+" giờ sáng");
	else if(arNumber[k]<13)
		SetText("","o_so_"+k,arNumber[k]+" giờ trưa");
	else if(arNumber[k]<18){
		if(dm==0)
		SetText("","o_so_"+k,arNumber[k]%12+" giờ chiều");
		else SetText("","o_so_"+k,arNumber[k]+" giờ");
		}
	else if(arNumber[k]<23)
		SetText("","o_so_"+k,arNumber[k]%12+" giờ tối");
	else if(arNumber[k]<25){
		if(arNumber[k]%12==0){
			if(dm==0)
			SetText("","o_so_"+k,arNumber[k]+" giờ");
				else SetText("","o_so_"+k,12+" giờ khuya");
		}
		else {
			if(dm==0)
		SetText("","o_so_"+k,arNumber[k]%12+" giờ khuya");
		else SetText("","o_so_"+k,arNumber[k]+" giờ");
		}
	}
	arPhepTinh[k]=arNumber[k];
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
	
	SetText("","obj_view", GetText("",""));
	InvalidateObj("","");
}
function ClickNumber()
{
	var kq= StringtoNumber(GetName(""));
	if(arNumber[m_index]==arPhepTinh[kq]){
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
	var x= a+b;
	var c= Random(90)+10;
	while(x-c<0)
	c= Random(90)+10;
	var d= x-c;
	akqbai2[0]= c;
	SetText("","cau_hoi_0",a+ " + "+b+" =        +"+d);
	/*---*/
	a= Random(90)+10;
	b= Random(90)+10;
	while(a+b>99)
	{
	a= Random(90)+10;
	b= Random(90)+10;
	}
	x= a+b;
	c= Random(90)+10;
	while(x-c<0)
	c= Random(90)+10;
	d= x-c;
	akqbai2[1]= b;
	SetText("","cau_hoi_1",a+ " +        = "+c+" + "+d);
	/*---*/
	a= Random(90)+10;
	b= Random(90)+10;
	while(a-b<0)
	{
	a= Random(90)+10;
	b= Random(90)+10;
	}
	x= a-b;
	c= Random(100-x)+x;
	while(c<x)
	c= Random(100-x)+x;
	d= c-x;
	akqbai2[2]= a;
	SetText("","cau_hoi_2","        - "+b +" = "+ c+ " - "+ d);
	/*---*/
	a= Random(90)+10;
	b= Random(90)+10;
	while(a-b<0)
	{
	a= Random(90)+10;
	b= Random(90)+10;
	}
	x= a-b;
	c= Random(100-x)+x;
	while(c<x)
	c= Random(100-x)+x;
	d= c-x;
	akqbai2[3]= c;
	SetText("","cau_hoi_3",a+" - "+b +" =        "+" - "+ d);
	/*---*/
	a= Random(10)+27;
	b= Random(20)+a;
	SetText("","cau_hoi_4","Ba hơn con "+a+" tuổi, hiện nay ba " + b +" tuổi. Tuổi con hiện nay là:");
	akqbai2[4]= b-a;
	/*---*/
	a= Random(20)+5;
	SetText("","cau_hoi_5","Anh cho em "+a+" cây kẹo thì số kẹo của hai anh em bằng nhau. Vậy trước khi cho anh nhiều hơn em bao nhiêu cây kẹo?");
	akqbai2[5]= a*2;
	/*---*/
	a= Random(40)+5;
	b= Random(10)+5;
SetText("","cau_hoi_6","Một cửa hàng buổi sáng bán được "+a+" kg gạo, buổi chiều bán ít hơn buổi sáng "+b+" kg gạo. Hỏi cả hai buổi cửa hàng bán được bao nhiêu ki-lô-gam gạo?");
	akqbai2[6]= a+(a-b);
/*---*/
	a = Random(20)+10;
	b = Random(a)+1;
SetText("","cau_hoi_7","Lan cho Huệ "+ a +" con tem thì bây giờ Lan vẫn còn nhiều hơn Huệ "+b+" con tem. Vậy trước khi cho, Lan nhiều hơn huệ bao nhiêu con tem?");
	akqbai2[7]= a*2+b;
/*---*/
	a = Random(24)+8;
	SetText("","cau_hoi_8","Hôm nay là ngày " +a+ " thì bằng giờ này tuần trước là ngày");
	akqbai2[8]= a-7;
/*---*/
	a = Random(4)+2;
	b = Random(6-a)+3;
	var ng= Random(24-a-b);
	SetText("","cau_hoi_9","Thứ "+a+" tuần trước là ngày "+ng+" thì thứ "+b+" tuần này là ngày");
	akqbai2[9]= ng+7+b-a;
	for(var i=0; i<10;i++){
		SetText("","so_"+i,"");
		AllowEditText("","so_"+i,1);
		SetBorder("","so_"+i,"#3399FF",0.5);
		SetText("","kq_"+i,"");
		SetShowObject("","so_"+i,1);
		SetShowObject("","cau_so"+i,1);
	}
	InvalidateObj("","");
}
var objfocus="";
function Click2()
{
if(objfocus!=GetName(""))
	SetBorder("",objfocus,"#3399FF",0.5);
SetBorder("","","#0000FF",0.5);
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
CreateBai2();
GetVer();
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
SetShowObject("","tra_loi",0);
SetShowObject("","msg",1);
for(var i=0; i<10;i++){
		SetShowObject("","so_"+i,0);
		SetShowObject("","cau_so"+i,0);
	}

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
var Text_3 = CreText('Text_3',43,58,381,233,"",'rgba(217,170,127,1.11)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',8,'#aa7c41','rgba(217,170,127,1.11)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',44,6,358,39,"Vòng 7, bài 1",'#d9aa7f','#000000','#000000','#ffffff','',18,'Arial','Bold','center','middle',12,'0.00','0','1',2,'#aa7c41','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',5,5,'#aa7c41',0,1.50);
var obj_view = CreText('obj_view',51,13,85,24,"",'rgba(170,124,65,0.67)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(170,124,65,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'#c0c0c0',0,1.50);
obj_view.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var Text_6 = CreText('Text_6',290,13,79,24,":",'rgba(170,124,65,0.67)','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(170,124,65,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var o_so_0 = CreText('o_so_0',50,66,92,43,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_1 = CreText('o_so_1',142,66,92,43,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_2 = CreText('o_so_2',234,66,92,43,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_3 = CreText('o_so_3',327,66,92,43,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_4 = CreText('o_so_4',50,240,92,43,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_5 = CreText('o_so_5',50,110,92,43,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_6 = CreText('o_so_6',142,110,92,43,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_7 = CreText('o_so_7',234,110,92,43,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_8 = CreText('o_so_8',327,109,92,43,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_9 = CreText('o_so_9',142,240,92,43,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_10 = CreText('o_so_10',50,153,92,43,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_11 = CreText('o_so_11',142,153,92,43,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_12 = CreText('o_so_12',234,153,92,43,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_13 = CreText('o_so_13',327,152,92,43,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_14 = CreText('o_so_14',234,240,92,43,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_15 = CreText('o_so_15',50,195,92,43,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_16 = CreText('o_so_16',142,195,92,43,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_17 = CreText('o_so_17',234,195,92,43,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_18 = CreText('o_so_18',327,195,92,43,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_19 = CreText('o_so_19',327,240,92,43,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var m_diem = CreText('m_diem',131,106,201,101,"",'rgba(236,217,255,1.11)','#ffffff','#ff0000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(236,217,255,1.11)','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_lam_lai = CreText('bt_lam_lai',203,187,65,18,"Bắt Đầu",'#ae0000','#ffffff','#ffffff','#ffffff','',10,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#ffffff','#510000','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitBai1();
SetShowObject("","bang_diem",0);
  return;
}
 );
var t_mess = CreText('t_mess',131,107,200,16,"Bài 1",'rgba(64,0,128,1.11)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#ffffff','rgba(128,0,255,1.11)','4','1','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var label = CreText('label',135,122,193,64,"Bạn chọn thứ tự các ô chứa thời gian của một ngày theo thứ tự tăng dần.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',11,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var phut = CreText('phut',291,13,38,24,"0",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var giay = CreText('giay',333,13,38,24,"0",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_8 = CreText('Text_8',374,10,30,30,"››",'#aa7c41','#ffffff','#ffffff','#ffff00','',20,'Arial','Bold','center','middle',2,'0.00','0','0',3,'#ffffff','#aa7c41','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
var Text_1 = CreText('Text_1',328,47,14,18,"|",'#d9aa7f','#ffffff','rgba(0,0,0,0)','#ffffff','',48,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_7 = CreText('Text_7',73,46,14,17,"|",'#d9aa7f','#ffffff','rgba(0,0,0,0)','#ffffff','',48,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_9 = CreText('Text_9',-68,-48,408,22,"Bạn chọn liên tiếp các ô có giá trị tăng dần theo thời gian trong một ngày.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',10,'Arial','Bold Italic','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bang_diem = new Kinetic.Group({name:'bang_diem',x:0,y:0,width:205,height:105});
bang_diem.add(m_diem,t_mess,label,bt_lam_lai);
Page_1.add(Page_1_Backrounnd,Text_3,Text_2,obj_view,Text_6,o_so_0,o_so_1,o_so_2,o_so_3,o_so_4,o_so_5,o_so_6,o_so_7,o_so_8,o_so_9,o_so_10,o_so_11,o_so_12,o_so_13,o_so_14,o_so_15,o_so_16,o_so_17,o_so_18,o_so_19,phut,giay,Text_8,Text_1,Text_7,Text_9,bang_diem);
stage.add(Page_1);

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page_2_Backrounnd = CreText('Page_2_Backrounnd',0,0,470,400,'','#ffffe0','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffe0','0','0','0','','0','0','0','0',0,0,'');
var kq_3 = CreText('kq_3',67,135,55,14,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Italic','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq_4 = CreText('kq_4',67,167,55,14,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Italic','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq_5 = CreText('kq_5',67,199,55,14,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Italic','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq_6 = CreText('kq_6',67,233,55,14,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Italic','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',-1,-1,470,37,"           Bài 2: Điền kết quả thích hợp vào chỗ ____",'#d9aa7f','#000000','#000000','#ffffff','',14,'Arial','Bold','left','middle',0,'0.00','11','11',1,'#804000','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'#aa7c41',0,1.50);
var Text_6 = CreText('Text_6',393,6,67,25,":",'rgba(193,122,57,0.67)','#ffffff','#ffffff','#ffffff','',18,'Arial','Bold','center','middle',11,'0.00','10','0',2,'#ffffff','rgba(193,122,57,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var phut = CreText('phut',387,8,38,24,"0",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Bold','center','middle',0,'0.00','10','0',0,'rgba(0,0,0,0)','rgba(0,0,0,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var giay = CreText('giay',429,8,38,24,"0",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Bold','center','middle',0,'0.00','10','0',0,'rgba(0,0,0,0)','rgba(0,0,0,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kiem_tra = CreText('kiem_tra',193,366,88,29,"Nộp Bài",'#005500','#ffffff','#ffff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','10','0',1,'#ffff00','#009300','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
kiem_tra.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
KiemTra2();
  return;
}
 );
var Text_10 = CreText('Text_10',3,4,29,29,"‹‹",'#c17a39','#ffffff','#ffffff','#ffff00','',16,'Arial','Bold','center','middle',2,'0.00','0','0',3,'#ffffff','#c17a39','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
var Text_2 = CreText('Text_2',357,3,34,29,"",'#ffffff','#ffffff','#000000','#ffffff','ID_ITEM11.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var cau_hoi_0 = CreText('cau_hoi_0',22,49,447,25,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi_1 = CreText('cau_hoi_1',22,82,447,25,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi_2 = CreText('cau_hoi_2',21,115,447,25,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi_3 = CreText('cau_hoi_3',22,146,447,25,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi_4 = CreText('cau_hoi_4',23,178,447,25,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi_5 = CreText('cau_hoi_5',22,206,447,25,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi_6 = CreText('cau_hoi_6',22,243,447,25,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi_7 = CreText('cau_hoi_7',24,279,447,25,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi_8 = CreText('cau_hoi_8',23,310,447,25,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi_9 = CreText('cau_hoi_9',25,334,447,25,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so0 = CreText('cau_so0',9,40,72,14,"Câu số 1:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so1 = CreText('cau_so1',9,72,72,14,"Câu hỏi 2:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so2 = CreText('cau_so2',9,104,72,14,"Câu hỏi 3:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so3 = CreText('cau_so3',9,136,72,14,"Câu hỏi 4:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so4 = CreText('cau_so4',9,168,72,14,"Câu hỏi 5:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so5 = CreText('cau_so5',9,196,72,14,"Câu hỏi 6:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so6 = CreText('cau_so6',9,233,72,14,"Câu hỏi 7:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so7 = CreText('cau_so7',9,269,58,14,"Câu hỏi 8:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so8 = CreText('cau_so8',9,305,72,14,"Câu hỏi 9:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so9 = CreText('cau_so9',7,328,72,14,"Câu hỏi 10:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so_0 = CreText('so_0',68,53,24,13,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_1 = CreText('so_1',44,87,24,13,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_2 = CreText('so_2',20,121,24,13,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_3 = CreText('so_3',66,152,24,13,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_4 = CreText('so_4',316,184,21,13,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_5 = CreText('so_5',151,219,24,13,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_7 = CreText('so_7',237,289,24,13,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_8 = CreText('so_8',288,315,24,13,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_9 = CreText('so_9',280,339,24,13,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var kq_0 = CreText('kq_0',67,39,55,14,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Italic','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq_1 = CreText('kq_1',67,71,55,14,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Italic','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq_2 = CreText('kq_2',67,103,55,14,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Italic','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq_7 = CreText('kq_7',67,269,55,14,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Italic','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq_8 = CreText('kq_8',67,305,55,14,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Italic','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq_9 = CreText('kq_9',77,328,62,14,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Italic','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so_6 = CreText('so_6',293,256,24,13,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var m_diem = CreText('m_diem',115,108,199,87,"",'#ecd9ff','#ffffff','rgba(0,0,0,0)','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ecd9ff','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_lam_lai = CreText('bt_lam_lai',190,171,60,22,"Bắt Đầu",'#8b0000','#ffffff','#ffffff','#ffffff','',10,'Arial','Bold','center','middle',3,'0.00','0','0',1,'#ffffff','#370000','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitBai2();
}
 );
var label = CreText('label',116,121,194,56,"Hãy điền số thích hợp vào ô trống để được phép tính đúng",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var t_mess = CreText('t_mess',116,108,198,15,"Bài 2",'rgba(64,0,128,1.11)','#ffffff','#ffffff','#ffffff','',10,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#ffffff','rgba(128,0,255,1.11)','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = new Kinetic.Group({name:'msg',x:0,y:0,width:203,height:91});
msg.add(m_diem,label,t_mess,bt_lam_lai);
Page_2.add(Page_2_Backrounnd,kq_3,kq_4,kq_5,kq_6,Text_1,Text_6,phut,giay,kiem_tra,Text_10,Text_2,cau_hoi_0,cau_hoi_1,cau_hoi_2,cau_hoi_3,cau_hoi_4,cau_hoi_5,cau_hoi_6,cau_hoi_7,cau_hoi_8,cau_hoi_9,cau_so0,cau_so1,cau_so2,cau_so3,cau_so4,cau_so5,cau_so6,cau_so7,cau_so8,cau_so9,so_0,so_1,so_2,so_3,so_4,so_5,so_7,so_8,so_9,kq_0,kq_1,kq_2,kq_7,kq_8,kq_9,so_6,msg);
stage.add(Page_2);
InitLacVietScript();
};
