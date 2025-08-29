folder_Resource ='data/Vong_10_toan_lop_2';
var arNumber=[0,0,0,0,0];
var m_size=20;
var m_index=0;
var m_sai=0;
var bStart=0;
var arPhep=[0,0,0,0,0];
function  CreateRam(){
   var Count = 0;
   for (var i = 0; i < m_size/2; i++)
   {
    var bb = true;
    var iNN,x,y,z,nc;
    while (bb)
    {
    var x= Random(10)+1;
    var y= Random(4)+2;
    x= x*y;
    nc= Random(2);
    if(nc==0)
	{
	 z= Random(99)+1;
	 while(x/y+z>100)
		z= Random(99)+1;
       iNN = x/y+z;
	}
    else {
	 z= Random(x/y-1)+1;
       iNN = x/y-z;
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
    if(nc==0)
		arPhep[Count]=x +" : "+ y+" + "+ z;
    else arPhep[Count]=x +" : "+ y+" - "+ z;
    Count++;
  } 
}
var m_start="";
var m_end="";
var count_sai=0;
var movex=0;
var movey=0;
function InitBai1()
{
m_sai=0;
m_start="";
m_end="";
CreateRam();
var xx=m_size/2;// gan=
 for (var k = 0; k < m_size/2; k++){
	arNumber[xx]=arNumber[k];
	arPhep[xx]=arPhep[k];
	xx++;
	}
 var tam=0;// tron
 for(var i = 0; i<10; i++)
	{
		var x= Random(m_size);
		var y= Random(m_size);
		while(x==y)
			y= Random(m_size);
      	tam= arNumber[x];
		arNumber[x]=arNumber[y];
		arNumber[y]=tam;

		tam= arPhep[x];
		arPhep[x]=arPhep[y];
		arPhep[y]=tam;

      }
 for (k = 0; k < m_size; k++){
	var xxx= Random(2);
	if(xxx==0)
	{
	      SetText("","o_so_"+k,arPhep[k]);
	}
	else
	{
    		   var y= Random(3)+3;
		   var x= Random(8)+3;
		   x=x*y;	
		  if(x/y==arNumber[k])
			SetText("","o_so_"+k,x +" : "+ y);
		   if(x/y>arNumber[k])
			{
				var z= x/y - arNumber[k];
				SetText("","o_so_"+k,x +" : "+ y+" - "+ z);
			}
		  else {
				var z=  arNumber[k]-x/y;
				SetText("","o_so_"+k,x +" : "+ y+" + "+ z);
			}
	}
	SetShowObject("","o_so_"+k,1);
	SetColor("","o_so_"+k,-1,-1,-1);
	transitionTo("","o_so_"+k,100,-1,-1,1,0,1,1);
	}
SetText("","obj_view","");
SetText("","phut","20");
SetText("","giay","0");
m_index=0;
count_sai=0;
m_sai=0;
bStart=1;
SetTimerPage(1000);
movex=GetLeft("","obj_view");
movey=GetTop("","obj_view");
GetVer();
InvalidateObj("","");
}
function FinishMove(){
	if(m_start!="" && m_end!=""){
	SetText("","obj_view", GetText("",m_start)+" = "+ GetText("",m_end));
	SetShowObject("",m_start,0);
	SetShowObject("",m_end,0);
	m_start="";
	m_end="";	
	}
InvalidateObj("","");
}
function  Check()
{
	if(m_start!="" && m_end!="" &&m_start!=m_end)
	{	
		
		if(arNumber[StringtoNumber(m_start)] == arNumber[StringtoNumber(m_end)])
		{
			transitionTo("",m_start,500,movex,movey,0.5,0,1,1,"FinishMove()");
			transitionTo("",m_end,500,movex,movey,0.5,0,1,1,"FinishMove()");
			PlaySound("ID_TRUE");
			m_index++;
			m_sai=0;	
		}
		else {
			SetColor("",m_start);
			SetColor("",m_end);
			PlaySound("ID_FALSE");
			SetText("","obj_view","");
			m_sai++;
		      count_sai++;
			m_start="";
			m_end="";	
		}
			
	}
	if(m_index==m_size/2){
		KillTimerPage();
	     	 var diem = 100- count_sai*100/10;
		UpdateScore(diem);
		diem= "Điểm: " +diem +"/100 \n Thời gian: ";
		var g=60 - GetText("","giay");
		var ph= 19 - GetText("","phut");
		diem = diem +ph +":"+g;
		SetText("","label",diem);
		SetText("","bt_lam_lai","Làm Lại");
		SetShowObject("","bang_diem",1);
		bStart=0;
		}
	else if(m_sai>3)
		{
		InitBai1();
		}
	InvalidateObj("","");
}
function ClickNumber()
{
	
	if(bStart==0)
	return;
	if(m_start=="")
	{
		m_start= GetName("");
		SetColor("","","#FF6600");
		SetText("","obj_view",arNumber[StringtoNumber(m_start)]);
		m_end="";
	} 
	else m_end= GetName("");
	if(m_end!=m_start)
	{
		SetColor("","","#FF6600");
		Delay("Check()",200);
	}
	else m_end="";
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
//
var akqbai2=["","",""];
function CreateBai2()
{
	
	var a= Random(8)+3;
    	var b= Random(50)+5;
	var c= 3*a+b;
	SetText("","cau_hoi_0","Dũng có "+ c+ " viên bi gồm các màu: xanh, đỏ, tím, vàng. Trong đó bi xanh, bi đỏ, bi tím mỗi loại có "+a+" viên. Hỏi Dũng có bao nhiêu viên bi vàng?");
akqbai2[0]=b;
	/*---*/
        a= Random(3)+3;
	  b= Random(8)+3;
	  c= Random(50)+5;
SetText("","cau_hoi_1","Có một túi kẹo, sau khi chia cho "+ b + " em mỗi em "+ a+" cái thì còn lại "+c+" cái. Hỏi ban đầu túi kẹo có bao nhiêu chiếc?");
	akqbai2[1]= a*b+c;
	/*---*/
  a= Random(3)+3;
  b= Random(8)+3;
  var d= Random(4)+2;
   while(d==a)
	d= Random(4)+2;
  c= d- (a*b)%d;
	akqbai2[2]= (a*b+c)/d;
	SetText("","cau_hoi_2","Có một số gạo, nếu đem chia đều vào các túi mỗi túi " +a+"kg thì được "+ b +" túi và còn thừa " + c +"kg. Hỏi số gạo đó nếu đem đựng vào các túi "+d+ "kg thì được bao nhiêu túi?");
	/*---*/	
	SetText("","cau_hoi_3","Tìm tổng của số lớn nhất và số bé nhất có 2 chữ số khác nhau được lập từ các số 0, 2, 3, 7.");
	akqbai2[3]= 92;
	/*---*/
	 a= Random(50)+1;
  	 b= Random(50)+50;
	SetText("","cau_hoi_4","Em hãy cho biết có tất cả bao nhiêu số có 2 chữ số khác nhau lớn hơn "+a+" và nhỏ hơn "+b+"?");
	var dem=1;
	for(var j=a;j<b;j++){
	  if(j%10==floor(j/10))
		dem++;
	}
	akqbai2[4]= b-a-dem;
	/*---*/
SetText("","cau_hoi_5","Tùng có 30 viên bi, Tùng cho Toàn 5 viên bi; Rồi Toàn lại cho Nam 3 viên bi thì lúc này số bi của 3 bạn bằng nhau. Vậy lúc đầu Toàn có viên bi.");
	akqbai2[5]= 23;
	/*---*/
  	a= Random(15)+30;
      b= Random(10)+a+25;
	c=b-a;
SetText("","cau_hoi_6","Hiện nay Bố Hà "+a+" tuổi ,còn ông nội Hà "+b+" tuổi .Tính tổng số tuổi của ông nội Hà và Bố Hà khi tuổi Ông nội Hà bằng tuổi Bố Hà hiện nay.");
	akqbai2[6]= a+(a-c);
/*---*/
a= Random(9)+1;
SetText("","cau_hoi_7","Hãy cho biết có tất cả bao nhiêu số có 2 chữ số mà hiệu 2 chữ số của mỗi số đó bằng "+a);
dem=0;
	for(j=10;j<99;j++){
	  if(abs(j%10-floor(j/10))==a)
		dem++;
	}
akqbai2[7]=dem;
/*---*/
SetText("","cau_hoi_8","An và Bình chia nhau 24 chiếc nhãn vở. An lấy số nhãn vở nhiều hơn Bình và số nhãn vở của An nhỏ hơn 14. Vậy Bình đã lấy bao nhiêu cái nhãn vở?");
akqbai2[8]=11;
/*----*/
SetText("","cau_hoi_9","Trong hình bên có bao nhiêu hình tam giác?");
a= Random(4);
SetRsc("","image_10","ID_TG"+a);
if(a==0)
akqbai2[9]=6;
else if(a==1)
akqbai2[9]=7;
else if(a==2)
akqbai2[9]=7;
else if(a==3)
akqbai2[9]=10;
	for(var i=0; i<10;i++){
		SetText("","so_"+i,"");
		AllowEditText("","so_"+i,1);
		SetBorder("","so_"+i,"#999999",0.5);
		SetColor("","so_"+i);
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
		SetColorEx("","so_"+i,"#008000");
			diem++;
		}
		else {
		SetColorEx("","so_"+i,"#ff0000");
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
KillTimerPage();
SetShowObject("","bang_diem",1);
bStart=0;
  return;
}
function Page_1_OnTimer()
{
StartTime();
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
 height: 420 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,470,320,'','#8000ff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#8000ff','0','0','0','','0','0','0','0',0,0,'');
var Text_7 = CreText('Text_7',5,12,431,45,"Vòng 10, bài 1",'#d9aa7f','#000000','#000000','#ffffff','',16,'Arial','Bold','left','middle',12,'0.00','0','1',2,'#aa7c41','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',5,5,'#aa7c41',0,1.50);
var Text_6 = CreText('Text_6',309,22,79,24,":",'#a66831','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#a66831','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',7,70,457,237,"",'#d9aa7f','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',8,'#a66831','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var o_so_0 = CreText('o_so_0',14,79,110,42,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_1 = CreText('o_so_1',125,79,110,42,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_2 = CreText('o_so_2',236,79,110,42,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_3 = CreText('o_so_3',347,79,110,42,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_4 = CreText('o_so_4',14,256,110,42,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_5 = CreText('o_so_5',14,123,110,42,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_6 = CreText('o_so_6',125,123,110,42,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_7 = CreText('o_so_7',236,123,110,42,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_8 = CreText('o_so_8',347,123,110,42,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_9 = CreText('o_so_9',125,256,110,42,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_10 = CreText('o_so_10',14,167,110,42,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_11 = CreText('o_so_11',125,167,110,42,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_12 = CreText('o_so_12',236,167,110,42,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_13 = CreText('o_so_13',347,167,110,42,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_14 = CreText('o_so_14',236,256,110,42,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_15 = CreText('o_so_15',14,211,110,42,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_16 = CreText('o_so_16',125,211,110,42,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_17 = CreText('o_so_17',236,211,110,42,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_18 = CreText('o_so_18',347,211,110,42,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_19 = CreText('o_so_19',347,256,110,42,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var m_diem = CreText('m_diem',124,131,231,109,"",'rgba(236,217,255,1.11)','#ffffff','#ff0000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(236,217,255,1.11)','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_lam_lai = CreText('bt_lam_lai',207,212,80,25,"Bắt Đầu",'#400080','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#8000ff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitBai1();
SetShowObject("","bang_diem",0);
  return;
}
 );
var t_mess = CreText('t_mess',125,132,229,16,"Thông báo điểm",'rgba(64,0,128,1.11)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#ffffff','rgba(128,0,255,1.11)','4','1','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var label = CreText('label',126,149,228,57,"Em hãy tìm các cặp 2 ô chứa số, phép tính có kết quả bằng nhau.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var phut = CreText('phut',310,22,38,24,"0",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var giay = CreText('giay',352,22,38,24,"0",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_8 = CreText('Text_8',417,21,30,30,"››",'#a66831','#ffffff','#ffffff','#ffff00','',20,'Arial','Bold','center','middle',2,'0.00','0','0',3,'#ffffff','#a66831','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
var obj_view = CreText('obj_view',143,22,161,24,"",'#a66831','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',11,'0.00','10','0',2,'#ffffff','#a66831','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'#c0c0c0',0,1.50);
var bang_diem = new Kinetic.Group({name:'bang_diem',x:0,y:0,width:235,height:113});
bang_diem.add(m_diem,bt_lam_lai,t_mess,label);
var Text_1 = CreText('Text_1',28,51,23,25,"",'#d9aa7f','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',378,51,23,25,"",'#d9aa7f','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,Text_7,Text_6,Text_3,o_so_0,o_so_1,o_so_2,o_so_3,o_so_4,o_so_5,o_so_6,o_so_7,o_so_8,o_so_9,o_so_10,o_so_11,o_so_12,o_so_13,o_so_14,o_so_15,o_so_16,o_so_17,o_so_18,o_so_19,phut,giay,Text_8,obj_view,bang_diem,Text_1,Text_2);
stage.add(Page_1);

 var Page_2 = new Kinetic.Layer({name: 'Page_2'});
var Page_2_Backrounnd = CreText('Page_2_Backrounnd',0,0,470,420,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var cau_hoi_5 = CreText('cau_hoi_5',64,217,364,29,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','left','top',0,'0.00','0','1',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi_9 = CreText('cau_hoi_9',64,351,364,29,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','left','top',0,'0.00','0','1',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',-1,-1,470,37,"Bài 2: Điền kết quả thích hợp vào ô vuông bên phải của mỗi bài toán.",'#0080c0','#ffffff','#ffffff','#ffffff','',12,'Arial','Bold','left','middle',0,'0.00','0','0',1,'#0080ff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'#aa7c41',0,1.50);
var Text_6 = CreText('Text_6',414,6,20,24,":",'rgba(0,0,0,0)','#ffffff','#ff0000','#ffffff','',18,'Arial','Bold','center','middle',11,'0.00','10','0',0,'rgba(0,0,0,0)','rgba(0,0,0,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var phut = CreText('phut',387,8,38,24,"0",'rgba(0,0,0,0)','#ffffff','#ff0000','#ffffff','',18,'Arial','Bold','center','middle',0,'0.00','10','0',0,'rgba(0,0,0,0)','rgba(0,0,0,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var giay = CreText('giay',429,8,38,24,"0",'rgba(0,0,0,0)','#ffffff','#ff0000','#ffffff','',18,'Arial','Bold','center','middle',0,'0.00','10','0',0,'rgba(0,0,0,0)','rgba(0,0,0,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kiem_tra = CreText('kiem_tra',204,389,71,24,"Nộp Bài",'#005500','#ffffff','#ffff00','#ffffff','',10,'Arial','Normal','center','middle',3,'0.00','10','0',1,'#ffff00','#009300','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
kiem_tra.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
KiemTra2();
  return;
}
 );
var Text_10 = CreText('Text_10',8,391,28,28,"‹‹",'#0080ff','#ffffff','#ffffff','#ffff00','',16,'Arial','Bold','center','middle',2,'0.00','0','0',3,'#ffffff','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
var Text_2 = CreText('Text_2',363,4,34,29,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var cau_hoi_0 = CreText('cau_hoi_0',64,41,364,29,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','left','top',0,'0.00','0','1',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi_1 = CreText('cau_hoi_1',64,73,364,29,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','left','top',0,'0.00','0','1',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi_2 = CreText('cau_hoi_2',64,105,364,42,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','left','top',0,'0.00','0','1',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi_3 = CreText('cau_hoi_3',64,153,364,29,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','left','top',0,'0.00','0','1',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi_4 = CreText('cau_hoi_4',64,185,364,29,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','left','top',0,'0.00','0','1',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi_6 = CreText('cau_hoi_6',64,249,364,29,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','left','top',0,'0.00','0','1',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi_7 = CreText('cau_hoi_7',64,281,364,29,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','left','top',0,'0.00','0','1',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi_8 = CreText('cau_hoi_8',64,313,364,29,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','left','top',0,'0.00','0','1',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so0 = CreText('cau_so0',3,41,57,29,"Câu hỏi 1:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Bold','left','top',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so1 = CreText('cau_so1',3,73,57,29,"Câu hỏi 2:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Bold','left','top',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so2 = CreText('cau_so2',3,105,57,29,"Câu hỏi 3:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Bold','left','top',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so3 = CreText('cau_so3',3,153,57,29,"Câu hỏi 4:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Bold','left','top',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so4 = CreText('cau_so4',3,185,57,29,"Câu hỏi 5:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Bold','left','top',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so5 = CreText('cau_so5',3,217,57,29,"Câu hỏi 6:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Bold','left','top',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so6 = CreText('cau_so6',3,249,57,29,"Câu hỏi 7:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Bold','left','top',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so7 = CreText('cau_so7',3,281,57,29,"Câu hỏi 8:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Bold','left','top',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so8 = CreText('cau_so8',3,313,57,29,"Câu hỏi 9:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Bold','left','top',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so9 = CreText('cau_so9',3,351,68,29,"Câu hỏi 10:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Bold','left','top',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so_0 = CreText('so_0',429,41,39,29,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_1 = CreText('so_1',429,73,39,29,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_2 = CreText('so_2',429,105,39,42,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_3 = CreText('so_3',429,153,39,29,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_4 = CreText('so_4',429,185,39,29,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_5 = CreText('so_5',429,217,39,29,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_7 = CreText('so_7',429,281,39,29,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_8 = CreText('so_8',429,313,39,29,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_9 = CreText('so_9',429,351,39,29,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_6 = CreText('so_6',429,249,39,29,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var m_diem = CreText('m_diem',143,137,199,87,"Vòng 8",'#ecd9ff','#ffffff','rgba(0,0,0,0)','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ecd9ff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_lam_lai = CreText('bt_lam_lai',218,202,56,20,"Bắt Đầu",'#8b0000','#ffffff','#ffffff','#ffffff','',10,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#ffffff','#370000','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitBai2();
}
 );
var label = CreText('label',144,150,194,56,"Hãy điền số thích hợp vào ô trống để được phép tính đúng",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var t_mess = CreText('t_mess',144,137,198,15,"Bài 2",'rgba(64,0,128,1.11)','#ffffff','#ffffff','#ffffff','',10,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#ffffff','rgba(128,0,255,1.11)','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = new Kinetic.Group({name:'msg',x:0,y:0,width:203,height:91});
msg.add(m_diem,label,t_mess,bt_lam_lai);
var image_10 = CreText('image_10',282,346,114,62,"",'#ffffff','#ffffff','#000000','#ffffff','ID_TG1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','0','rgba(0,0,0,0)','0','0','4','0',1,1, '#ffffff',0,1.50);
Page_2.add(Page_2_Backrounnd,cau_hoi_5,cau_hoi_9,Text_1,Text_6,phut,giay,kiem_tra,Text_10,Text_2,cau_hoi_0,cau_hoi_1,cau_hoi_2,cau_hoi_3,cau_hoi_4,cau_hoi_6,cau_hoi_7,cau_hoi_8,cau_so0,cau_so1,cau_so2,cau_so3,cau_so4,cau_so5,cau_so6,cau_so7,cau_so8,cau_so9,so_0,so_1,so_2,so_3,so_4,so_5,so_7,so_8,so_9,so_6,msg,image_10);
stage.add(Page_2);
InitLacVietScript();
};
