folder_Resource ='data/Vong_10_Toan_Lop3';
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
AddObjToCurentPage("Group_1");
var x_to= GetLeft("","")+ GetWidth("","")/2- GetWidth("",namekey)/2;
var y_to= GetTop("","")+ GetHeight("","")+5;
if (GetHeight("", namekey) + y_to > 480)
    y_to= GetTop("","")- GetHeight("",namekey)-5;
if (x_to<0) x_to=1;
if (x_to+ GetWidth("",namekey)>640) x_to=640-GetWidth("",namekey);
MoveObjectTo("",namekey,x_to,y_to);
SetShowObject("",namekey,1);
InvalidateObj("",namekey);
keyOldValue= GetText("","");
objectShowKey= GetName("");
}

var arNumber=[0,0,0,0,0];
var m_size=20;
var m_index=0;
var m_sai=0;
var b_stop=true;
var arPhep=[0,0,0,0,0];
var ar_View=[0,0,0,0,0];
var ardonvi=["km","hm","dam","m","dm","cm","mm"];
var ar_nn=[10,100];
var curDiem=0;
function  CreateRam(){
   var Count = 0;
   for (var i = 0; i < m_size/2; i++)
   {
    var bb = true;
    var iNN,a,b,dv1,dv2,tam,ketqua,ketqua2;
    while (bb)
    {
    a= Random(9)+1;
    b= Random(9)+1;
    dv1= Random(5);
    tam= Random(2);
    dv2= tam+dv1+1;
    ketqua=a+ardonvi[dv1]+" "+b+ardonvi[dv2];
    ketqua2=(a*ar_nn[tam]+b)+ardonvi[dv2];
    iNN = a*ar_nn[tam]+b;
    for (var j = 0 ; j < Count;j++)
    { 
      if (arNumber[j] == iNN)
         break;
    }
    if (j >= Count)
       bb = false;
    }
    ar_View[Count]=ketqua;
    ar_View[Count+10]=ketqua2;
    arNumber[Count] =iNN;
    arNumber[Count+10] =iNN;
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

 var tam=0;// tron
 for(var i = 0; i<10; i++)
	{
		var x= Random(m_size/2);
		var y= Random(m_size/2)+10;
      	tam= arNumber[x];
		arNumber[x]=arNumber[y];
		arNumber[y]=tam;
		tam= ar_View[x];
		ar_View[x]=ar_View[y];
		ar_View[y]=tam;
      }
 for (var k = 0; k < m_size; k++){
	SetText("","o_so_"+k,ar_View[k]);
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
b_stop= false;
curDiem = GetVer();
SetTimerPage(1000);
movex=GetLeft("","obj_view");
movey=GetTop("","obj_view");
InvalidateObj("","");
}
function FinishMove(){
	if(m_start!="" && m_end!=""){
	SetShowObject("",m_start,0);
	SetShowObject("",m_end,0);
	var kq = GetText("",m_start) + " = " + GetText("",m_end) ;
	SetText("","obj_view",kq);
	m_start="";
	m_end="";
	InvalidateObj("","");
	}
}
function  Check()
{
	if(m_start!="" && m_end!="" &&m_start!=m_end)
	{	
		if(arNumber[StringtoNumber(m_start)] == arNumber[StringtoNumber(m_end)])
		{
			transitionTo("",m_start,500,movex,movey,0.5,0,1,1);
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
		b_stop=true;
		SetText("","label","Điểm được cập nhật:");	
		var m_diem= m_index -  count_sai;
		SetText("","m_diem",m_diem);
		UpdateScore(curDiem + m_diem);
		SetShowObject("","bang_diem",1);
		}
	else if(m_sai>3)
		{
		KillTimerPage();
		 b_stop=true;
		SetText("","label","Bạn sai 3 lần, làm lại.");	
		SetText("","m_diem","");		
		SetShowObject("","bang_diem",1);
		}
	InvalidateObj("","");
}
function ClickNumber()
{
	if( b_stop==true)
		return;
	if(m_start=="")
	{
		m_start= GetName("");
		SetColor("","","#FF6600");
		SetText("","obj_view",GetText("",""));
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
   var a= Random(9)+1;
   var b= Random(9)+1;
    var dv1= Random(5);
    var tam= Random(2);
    var dv2= tam+dv1+1;
    var ketqua=a+ardonvi[dv1]+" "+b+ardonvi[dv2];
    akqbai2[0]=a*ar_nn[tam]+b;
	SetText("","cau_hoi_0",ketqua+ " = ..." +ardonvi[dv2]);
/*---*/
	a= Random(10)+1;
	b= Random(7)+1;
	SetText("","cau_hoi_1","Trên bãi cỏ có "+a*b+" con trâu, số bò bằng số trâu giảm đi "+b+" lần. Hỏi trên bãi cỏ có bao nhiêu con bò?");
	akqbai2[1]=a;

	a = Random(8)+1;
	SetText("","cau_hoi_2","Khi viết thêm chữ số "+a+" vào bên trái một số có hai chữ số thì số đó tăng lên bao nhiêu đơn vị?");
	akqbai2[2]=a*100;
	/*---*/
      a= Random(8)+2;
	b= Random(7)+1;
	SetText("","cau_hoi_3","Để tuyên dương "+a+" bạn được điểm tốt trong tháng, cô giáo tặng cho mỗi bạn "+b+" quyển vở và 12 cây bút chì. Hỏi cô giáo tặng hết bao nhiêu quyển vở?");
	akqbai2[3]= a*b;
	/*---*/
  	a= Random(9)+1;
  	b= Random(7)+1;
	SetText("","cau_hoi_4",a+"m + "+b+"dm =....cm");
	akqbai2[4]= a*100+b*10;
	/*---*/
	SetText("","cau_hoi_5","Một người nuôi 67 con gà, sau khi bán đi 19 con, người đó nhốt đều số gà vào 8 chuồng. Hỏi mỗi chuồng nhốt bao nhiêu con gà?");
	akqbai2[5]=6;
	/*---*/
a= Random(5)+1;
b= Random(40)+1;
var c= Random(80)+10;
SetText("","cau_hoi_6",a+"m "+b+"dm "+ c+"cm = ...cm");
       akqbai2[6]= a*100+b*10+c;

	SetText("","cau_hoi_7","Tìm số bị chia trong phép chia có số chia bằng 5, số dư bằng 3, thương số là số lớn nhất có hai chữ số chia hết cho 2.");
	akqbai2[7]= 493;
	/*---*/
	a= Random(7)+1;
	SetText("","cau_hoi_8","Một người thợ mỏ mỗi ngày đào được "+a+" mét hầm, biết người thợ mỏ đào thừ thứ sáu tuần trước đến thứ tư tuần này và chỉ nghỉ ngày chủ nhật. Hỏi người thợ mỏ đó đào được bao nhiêu mét hầm?");
	akqbai2[8]= a*5;
/*----*/
	SetText("","cau_hoi_9","Đoạn thẳng AB dài 1cm, đoạn thẳng AB bằng 1/2 lần đoạn thẳng BC và bằng 1/3 lần đoạn thẳng CD. Hỏi đoạn thẳng AD dài bao nhiêu xăng-ti-mét?");
       akqbai2[9]= 6;

	for(var i=0; i<10;i++){
		SetText("","so_"+i,"");
		AllowEditText("","so_"+i,1);
		SetBorder("","so_"+i,"#999999",1);
		SetColor("","so_"+i);

		SetShowObject("","so_"+i,1);
		SetShowObject("","cau_hoi_"+i,1);
		SetShowObject("","cau_so"+i,1);

	}

SetShowObject("","kiem_tra",1);
SetShowObject("","doan_thang",1);
	InvalidateObj("","");
}
var objfocus="";
function Click2()
{
if(objfocus!=GetName(""))
	SetBorder("",objfocus,"#999999",1);
SetBorder("","","#3399FF",1);
objfocus= GetName("");
ShowKeyNum(name_keyboard);
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
SetShowObject("","grTime",1);
CreateBai2();
curDiem = GetVer();
}
function  KiemTra2(){
var diem=0;
for(var i=0; i<10;i++)
	{
		if(GetText("","so_"+i)==akqbai2[i])
		{
		SetColorEx("","so_"+i,"#00ff00");
			diem++;
		}
		else {
		SetColorEx("","so_"+i,"#ff0000");
		}
	}
		KillTimerPage();		
		
		UpdateScore(diem + curDiem );		
		SetText("","m_diem",diem);	
		SetText("","label","Điểm được cập nhật:");	
		SetText("","bt_lam_lai","Làm Lại");
	      	SetShowObject("","msg",1);
		SetShowObject("","kiem_tra",0);
	      InvalidateObj("","");
}
function Page_1()
{
KillTimerPage();
b_stop=true;
SetText("","label","Em hãy tìm các cặp ô chứa độ dài bằng nhau trong bảng sau.");
SetShowObject("","bang_diem",1);
SetText("","m_diem","");
  return;
}
function Page_1_OnTimer()
{
StartTime();
  return;
}

function Page_2()
{
for(var i=0; i<10;i++){
		SetShowObject("","so_"+i,0);
		SetShowObject("","cau_hoi_"+i,0);
		SetShowObject("","cau_so"+i,0);
	}
SetText("","label","Hãy điền đáp số thích hợp vào ô trống để được bài toán đúng.");
SetShowObject("","kiem_tra",0);
SetShowObject("","doan_thang",0);
SetShowObject("","grTime",0);
SetShowObject("","msg",1);
InvalidateObj("","");
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
 height: 450 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,600,340,'','#8000ff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#8000ff','0','0','0','','0','0','0','0',0,0,'');
var Text_2 = CreText('Text_2',11,62,568,270,"",'#d9aa7f','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',8,'#bc7738','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var o_so_0 = CreText('o_so_0',18,66,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_1 = CreText('o_so_1',129,66,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_2 = CreText('o_so_2',240,66,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_3 = CreText('o_so_3',351,66,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_4 = CreText('o_so_4',463,66,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_5 = CreText('o_so_5',18,132,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_6 = CreText('o_so_6',129,132,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_7 = CreText('o_so_7',240,132,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_8 = CreText('o_so_8',351,132,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_9 = CreText('o_so_9',463,132,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_10 = CreText('o_so_10',18,197,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_11 = CreText('o_so_11',129,197,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_12 = CreText('o_so_12',240,197,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_13 = CreText('o_so_13',351,197,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_14 = CreText('o_so_14',463,197,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_15 = CreText('o_so_15',18,262,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_16 = CreText('o_so_16',129,262,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_17 = CreText('o_so_17',240,262,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_18 = CreText('o_so_18',351,262,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_19 = CreText('o_so_19',463,262,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var m_diem = CreText('m_diem',182,143,231,109,"",'rgba(236,217,255,1.11)','#ffffff','#ff0000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(236,217,255,1.11)','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_lam_lai = CreText('bt_lam_lai',265,224,80,25,"Bắt Đầu",'#400080','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#8000ff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitBai1();
SetShowObject("","bang_diem",0);
  return;
}
 );
var t_mess = CreText('t_mess',183,144,229,17,"Thông báo điểm",'rgba(64,0,128,1.11)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','bottom',0,'0.00','0','0',1,'#ffffff','rgba(128,0,255,1.11)','4','1','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var label = CreText('label',184,170,228,48,"Em hãy tìm các cặp 2 ô chứa độ dài bằng nhau trong bảng sau.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bang_diem = new Kinetic.Group({name:'bang_diem',x:0,y:0,width:235,height:113});
bang_diem.add(m_diem,bt_lam_lai,t_mess,label);
var Text_9 = CreText('Text_9',15,6,140,39,"Vòng 10",'#d9aa7f','#ffffff','#000000','#ffffff','',24,'Arial','Normal','center','middle',11,'0.00','10','0',2,'#bf7939','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','2',2,2,'#c0c0c0',0,1.50);
var obj_view = CreText('obj_view',182,6,215,39,"Bài 1",'#d9aa7f','#ffffff','#000000','#ffffff','',24,'Arial','Normal','center','middle',11,'0.00','10','0',2,'#bf7939','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','2',2,2,'#c0c0c0',0,1.50);
var Text_4 = CreText('Text_4',276,40,19,25,"",'#d9aa7f','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_5 = CreText('Text_5',405,6,140,39,":",'#d9aa7f','#ffffff','#000000','#ffffff','',24,'Arial','Normal','center','middle',11,'0.00','10','0',2,'#bf7939','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','2',2,2,'#c0c0c0',0,1.50);
var Text_6 = CreText('Text_6',468,40,19,24,"",'#d9aa7f','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var phut = CreText('phut',434,6,38,39,"0",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',26,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var giay = CreText('giay',476,6,38,39,"0",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',26,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_8 = CreText('Text_8',552,7,38,38,"››",'#d9aa7f','#ffffff','#000000','#ffff00','',20,'Arial','Bold','center','middle',2,'0.00','0','0',3,'#aa6b33','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
var Text_10 = CreText('Text_10',77,38,19,26,"",'#d9aa7f','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,Text_2,o_so_0,o_so_1,o_so_2,o_so_3,o_so_4,o_so_5,o_so_6,o_so_7,o_so_8,o_so_9,o_so_10,o_so_11,o_so_12,o_so_13,o_so_14,o_so_15,o_so_16,o_so_17,o_so_18,o_so_19,bang_diem,Text_9,obj_view,Text_4,Text_5,Text_6,phut,giay,Text_8,Text_10);
stage.add(Page_1);

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page_2_Backrounnd = CreText('Page_2_Backrounnd',0,0,600,450,'','#d2d2d2','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#d2d2d2','0','0','0','','0','0','0','0',0,0,'');
var cau_hoi_5 = CreText('cau_hoi_5',66,201,475,29,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi_9 = CreText('cau_hoi_9',66,358,475,35,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',0,-1,601,37,"Bài 2: Điền kết quả thích hợp vào ô vuông bên phải của mỗi bài toán.",'#8000ff','#fffe99','#ffffff','#ffffff','',12,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#8000ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_6 = CreText('Text_6',534,407,20,24,":",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',18,'Arial','Bold','center','middle',11,'0.00','10','0',0,'rgba(0,0,0,0)','rgba(0,0,0,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var phut = CreText('phut',507,409,38,24,"0",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',18,'Arial','Bold','center','middle',0,'0.00','10','0',0,'rgba(0,0,0,0)','rgba(0,0,0,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var giay = CreText('giay',549,409,38,24,"0",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',18,'Arial','Bold','center','middle',0,'0.00','10','0',0,'rgba(0,0,0,0)','rgba(0,0,0,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kiem_tra = CreText('kiem_tra',281,404,116,29,"Nộp Bài",'#d9aa7f','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#ffff00','#9f642f','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
kiem_tra.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
KiemTra2();
  return;
}
 );
var Text_2 = CreText('Text_2',474,405,34,29,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var cau_hoi_0 = CreText('cau_hoi_0',66,41,475,29,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi_1 = CreText('cau_hoi_1',66,73,475,29,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi_2 = CreText('cau_hoi_2',66,105,475,29,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi_3 = CreText('cau_hoi_3',66,137,475,29,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi_4 = CreText('cau_hoi_4',66,169,475,29,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi_6 = CreText('cau_hoi_6',66,233,475,29,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi_7 = CreText('cau_hoi_7',66,265,475,29,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi_8 = CreText('cau_hoi_8',66,297,475,58,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so0 = CreText('cau_so0',2,41,57,29,"Câu hỏi 1:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Bold','left','top',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so1 = CreText('cau_so1',2,73,57,29,"Câu hỏi 2:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Bold','left','top',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so2 = CreText('cau_so2',2,105,57,29,"Câu hỏi 3:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Bold','left','top',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so3 = CreText('cau_so3',2,137,57,29,"Câu hỏi 4:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Bold','left','top',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so4 = CreText('cau_so4',2,169,57,29,"Câu hỏi 5:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Bold','left','top',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so5 = CreText('cau_so5',2,201,57,29,"Câu hỏi 6:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Bold','left','top',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so6 = CreText('cau_so6',2,233,57,29,"Câu hỏi 7:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Bold','left','top',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so7 = CreText('cau_so7',2,265,57,29,"Câu hỏi 8:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Bold','left','top',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so8 = CreText('cau_so8',2,297,57,29,"Câu hỏi 9:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Bold','left','top',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so9 = CreText('cau_so9',3,358,68,17,"Câu hỏi 10:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Bold','left','top',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so_0 = CreText('so_0',549,41,39,29,"",'#f0f8ff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#f0f8ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_1 = CreText('so_1',549,73,39,29,"",'#f0f8ff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#f0f8ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_2 = CreText('so_2',549,105,39,29,"",'#f0f8ff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#f0f8ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_3 = CreText('so_3',549,137,39,29,"",'#f0f8ff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#f0f8ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_4 = CreText('so_4',549,169,39,29,"",'#f0f8ff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#f0f8ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_5 = CreText('so_5',549,201,39,29,"",'#f0f8ff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#f0f8ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_7 = CreText('so_7',549,265,39,29,"",'#f0f8ff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#f0f8ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_8 = CreText('so_8',549,297,39,58,"",'#f0f8ff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#f0f8ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_9 = CreText('so_9',549,358,39,35,"",'#f0f8ff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#f0f8ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_6 = CreText('so_6',549,233,39,29,"",'#f0f8ff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#f0f8ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var m_diem = CreText('m_diem',209,152,235,108,"",'#ecd9ff','#ffffff','#ff0000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#7f7f7f','#ecd9ff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_lam_lai = CreText('bt_lam_lai',291,232,77,23,"Bắt Đầu",'#8000ff','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#7f7f7f','#400080','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitBai2();
}
 );
var label = CreText('label',209,179,231,49,"Hãy điền đáp số thích hợp vào ô trống để được bài toán đúng.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var t_mess = CreText('t_mess',209,152,235,20,"Bài 2",'rgba(64,0,128,1.11)','#ffffff','#ffffff','#ffffff','',10,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#ffffff','rgba(128,0,255,1.11)','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var doan_thang = CreText('doan_thang',341,334,194,21,"  A             B                        C                                D",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE4.PNG',8,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var Text_8 = CreText('Text_8',15,408,34,34,"‹‹",'#d9aa7f','#ffffff','#000000','#ffff00','',20,'Arial','Bold','center','middle',2,'0.00','0','0',3,'#aa6b33','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
var msg = new Kinetic.Group({name:'msg',x:0,y:0,width:240,height:112});
msg.add(m_diem,label,bt_lam_lai,t_mess);
var grTime = new Kinetic.Group({name:'grTime',x:0,y:0,width:117,height:33});
grTime.add(Text_6,phut,giay,Text_2);
Page_2.add(Page_2_Backrounnd,cau_hoi_5,cau_hoi_9,Text_1,kiem_tra,cau_hoi_0,cau_hoi_1,cau_hoi_2,cau_hoi_3,cau_hoi_4,cau_hoi_6,cau_hoi_7,cau_hoi_8,cau_so0,cau_so1,cau_so2,cau_so3,cau_so4,cau_so5,cau_so6,cau_so7,cau_so8,cau_so9,so_0,so_1,so_2,so_3,so_4,so_5,so_7,so_8,so_9,so_6,doan_thang,Text_8,msg,grTime);
stage.add(Page_2);

 var PageKey = new Kinetic.Layer({name: 'PageKey'});
var PageKey_Backrounnd = CreText('PageKey_Backrounnd',0,0,80,100,'','#8000ff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#8000ff','0','0','0','','0','0','0','0',0,0,'');
var bg_key = CreText('bg_key',5,1,72,100,"0",'#e5e5e5','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#000000','#e5e5e5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _0 = CreText('_0',7,4,21,14,"0",'#eeeeee','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var clear_one = CreText('clear_one',30,4,21,14,"←",'#ffc0cb','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffe4e1','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
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
var clear_all = CreText('clear_all',53,4,21,14,"C",'#ffc0cb','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffe4e1','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
clear_all.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
      keyNewValue = "";
	SetText("",objectShowKey,"");
	InvalidateObj("",objectShowKey);;
  return;
}
 );
var _1 = CreText('_1',7,20,21,14,"1",'#eeeeee','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _2 = CreText('_2',30,20,21,14,"2",'#eeeeee','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _3 = CreText('_3',53,20,21,14,"3",'#eeeeee','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _4 = CreText('_4',7,36,21,14,"4",'#eeeeee','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _5 = CreText('_5',30,36,21,14,"5",'#eeeeee','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _6 = CreText('_6',53,36,21,14,"6",'#eeeeee','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _9 = CreText('_9',53,52,21,14,"9",'#eeeeee','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _8 = CreText('_8',30,52,21,14,"8",'#eeeeee','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _7 = CreText('_7',7,52,21,14,"7",'#eeeeee','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_lon = CreText('dau_lon',7,68,21,14,">",'#afeeee','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
dau_lon.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_bang = CreText('dau_bang',30,68,21,14,"<",'#afeeee','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
dau_bang.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_be = CreText('dau_be',53,68,21,14,"=",'#afeeee','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
dau_be.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var ok = CreText('ok',53,84,21,14,"OK",'#98fb98','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e0fee0','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
ok.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
var huy = CreText('huy',7,84,21,14,"Hủy",'#ffc0cb','#ffffff','#000000','#ffffff','',8,'Verdana','Normal','center','middle',3,'0.00','0','0',1,'#7f7f7f','#ffe4e1','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
huy.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetText("",objectShowKey,keyOldValue);
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
var Text_1 = CreText('Text_1',30,84,21,14,"+",'#afeeee','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:76,height:104});
Group_1.add(bg_key,_0,clear_one,clear_all,_1,_2,_3,_4,_5,_6,_9,_8,_7,dau_lon,dau_bang,dau_be,ok,huy,Text_1);
PageKey.add(PageKey_Backrounnd,Group_1);
stage.add(PageKey);
InitLacVietScript();
};
