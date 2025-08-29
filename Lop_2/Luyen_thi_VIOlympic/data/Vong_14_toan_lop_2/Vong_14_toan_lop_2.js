folder_Resource ='data/Vong_14_toan_lop_2';
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
var arPhep=[0,0,0,0,0];
function  CreateRam(){
   var Count = 0;
   for (var i = 0; i < m_size/2; i++)
   {
    var bb = true;
    var iNN,x,y,z,nc;
    while (bb)
    {
    iNN = Random(900)+100;
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
var m_start="";
var m_end="";
var count_sai=0;
var movex=0;
var movey=0;
var bStart=0;
function InitBai1()
{
m_sai=0;
m_start="";
m_end="";
CreateRam();
var xx=m_size/2;// gan=
 for (var k = 0; k < m_size/2; k++){
	arNumber[xx]=arNumber[k];
	var tam = arNumber[k]%100;
	var tr= arNumber[k] - tam;
	var ch= tam - tam%10;
	var dv=tam%10;
	if(ch==0)
	     arNumber[xx]=tr +" + "+dv;
	else if(dv==0)
	     arNumber[xx]= tr +" + "+ch;
	 else arNumber[xx]= tr +" + "+ch+" + "+dv;
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
      }
 for (k = 0; k < m_size; k++){
	SetText("","o_so_"+k,arNumber[k]);
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
		
		if(ExecAsThread(GetText("",m_start)) == ExecAsThread(GetText("",m_end)))
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
		var a= (Random(6)+5);
		var b= Random(a/2)+1;
		a=a*4;
		akqbai2[0]=a-4*b;
	SetText("","cau_hoi_0","Chu vi của hình tứ giác là "+a+"cm, Nếu giảm mỗi cạch của tứ giác đi "+b+"cm. Thì chu vi tứ giác đó là bao nhiêu?" );
/*---*/
	a= Random(10)+1;
	b= Random(5)+1;
	SetText("","cau_hoi_1","Sau khi anh cho em "+a+" quyển vở thì anh vẫn còn nhiều hơn em "+b+" quyển vở. Vậy trước khi cho anh nhiều hơn em bao nhiêu quyển vở.");
	akqbai2[1]=a*2+b;

	a = Random(8)+2;
	SetText("","cau_hoi_2","Hãy cho biết có tất cả bao nhiêu số có hai chữ số mà hiệu hai chữ số của số đó bằng "+a+"?");
	var dem=0;
	for(var ii=10;ii<100;ii++)
	   {
		var ch= (ii-ii%10)/10;
		if(abs(ii%10 - ch)==a )
			dem++;
	   }
	akqbai2[2]=dem;
	/*---*/
      a= Random(15)+2;
	SetText("","cau_hoi_3","Số bé nhất có 2 chữ số mà tổng 2 chữ số của số đó bằng "+a+" là số?");
	dem=0; 
	 for(ii=10;ii<100;ii++)
	   {
		var ch= (ii-ii%10)/10;
		if(ii%10 + ch==a){
			dem=ii;
			break;
			}
	   }
	akqbai2[3]= dem;
	/*---*/
  	a= Random(800)+100;
	SetText("","cau_hoi_4","Hãy cho biết có tất cả bao nhiêu số có 3 chữ số nhỏ hơn "+a+"?");
	akqbai2[4]= a-100;
	/*---*/
	a = Random(4)+2;
 	b = Random(5)+5;
      var c = Random(a);
	dem=a*b+c;
	SetText("","cau_hoi_5","Hỏi cần ít nhất bao nhiêu chiếc túi, mỗi túi đựng được "+a+"kg gạo để đựng hết "+dem+"kg gạo?");
	akqbai2[5]= b+1;
	/*---*/
	a = Random(4)+2;
 	b = Random(5)+5;
      c = Random(b)+1;
	SetText("","cau_hoi_6","Có một số dầu, nếu thêm "+c+" lít nữa thì vừa đủ đựng vào "+b+" chiếc can, mỗi can "+a+" lít. Tính số dầu đó.");
	akqbai2[6]= a*b-c;
	/*---*/
	
	SetText("","cau_hoi_7","Tổng số bé nhất có ba chữ số và số lớn nhất có hai chữ số khác nhau là:");
	akqbai2[7]= 198;
/*----*/
	a= Random(12)+4;
	b= 20+Random(a);
	while(2*a+3*b>100){
	a= Random(12)+4;
	b= 20+Random(a);
	}
	SetText("","cau_hoi_8","Trong hình vẽ dưới có bao nhiêu đoạn thẳng?");
       akqbai2[8]= 10;
/*----*/
a = Random(4)+2;
SetText("","cau_hoi_9","Có bao nhiêu số có 3 chữ số mà tổng của các chữ số đó bằng "+a+"?");
dem=0;
 for(ii=100;ii<1000;ii++)
	   {
		var le= leftStr(ii,1);
		var ri= rightStr(ii,1);
		var su= subString(ii,1,1);
		if(le+ri+su==a)
			dem++;
	   }
akqbai2[9]=dem;
	for(var i=0; i<10;i++){
		SetText("","so_"+i,"");
		AllowEditText("","so_"+i,1);
		SetBorder("","so_"+i,"#999999",0.5);
		SetColor("","so_"+i);

		SetShowObject("","so_"+i,1);
		SetShowObject("","cau_hoi_"+i,1);
		SetShowObject("","cau_so"+i,1);

	}

SetShowObject("","kiem_tra",1);
SetShowObject("","doan_thang",1);
GetVer();
	InvalidateObj("","");
}
var objfocus="";
function Click2()
{
if(objfocus!=GetName(""))
	SetBorder("",objfocus,"#999999",0.5);
SetBorder("","","#3399FF",0.5);
objfocus= GetName("");
ShowKeyNum(name_keyboard);
}
function  InitBai2()
{
SetText("","obj_view","");
SetText("","phut","20");
SetText("","giay","0");
SetTimerPage(1000);
SetShowObject("","kiem_tra",1);
SetShowObject("","msg",0);
CreateBai2();
InvalidateObj("","");
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
bStart=0;
SetText("","bt_lam_lai","Làm Lại");
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
for(var i=0; i<10;i++){
		SetShowObject("","so_"+i,0);
		SetShowObject("","cau_hoi_"+i,0);
		SetShowObject("","cau_so"+i,0);
	}
SetText("","label","Hãy điền đáp số thích hợp vào ô trống để được bài toán đúng.");
SetShowObject("","kiem_tra",0);
SetShowObject("","doan_thang",0);
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
 width: 470,
 height: 380 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,470,320,'','#8000ff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#8000ff','0','0','0','','0','0','0','0',0,0,'');
var Text_7 = CreText('Text_7',13,6,433,39,"Vòng 14, bài 1",'#d9aa7f','#000000','#000000','#ffffff','',16,'Arial','Bold','left','middle',12,'0.00','0','1',2,'#aa7c41','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',5,5,'#aa7c41',0,1.50);
var Text_6 = CreText('Text_6',319,13,79,24,":",'#ac6c33','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#ac6c33','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',11,58,450,258,"",'#d9aa7f','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',8,'#ac6c33','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var o_so_0 = CreText('o_so_0',14,66,110,49,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_1 = CreText('o_so_1',125,66,110,49,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_2 = CreText('o_so_2',236,66,110,49,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_3 = CreText('o_so_3',347,66,110,49,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_4 = CreText('o_so_4',14,263,110,49,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_5 = CreText('o_so_5',14,115,110,49,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_6 = CreText('o_so_6',125,115,110,49,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_7 = CreText('o_so_7',236,115,110,49,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_8 = CreText('o_so_8',347,115,110,49,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_9 = CreText('o_so_9',126,263,110,49,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_10 = CreText('o_so_10',14,164,110,49,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_11 = CreText('o_so_11',125,164,110,49,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_12 = CreText('o_so_12',236,164,110,49,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_13 = CreText('o_so_13',347,164,110,49,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_14 = CreText('o_so_14',237,263,110,49,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_15 = CreText('o_so_15',14,213,110,49,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_16 = CreText('o_so_16',125,213,110,49,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_17 = CreText('o_so_17',236,213,110,49,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_18 = CreText('o_so_18',347,213,110,49,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_19 = CreText('o_so_19',347,263,110,49,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var m_diem = CreText('m_diem',121,124,231,109,"",'rgba(236,217,255,1.11)','#ffffff','#ff0000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(236,217,255,1.11)','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_lam_lai = CreText('bt_lam_lai',204,205,80,25,"Bắt Đầu",'#400080','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#8000ff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitBai1();
SetShowObject("","bang_diem",0);
  return;
}
 );
var t_mess = CreText('t_mess',122,125,229,16,"Thông báo điểm",'rgba(64,0,128,1.11)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#ffffff','rgba(128,0,255,1.11)','4','1','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var label = CreText('label',123,142,228,57,"Em hãy tìm các cặp 2 ô chứa số, phép tính có kết quả bằng nhau.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var phut = CreText('phut',319,14,38,24,"0",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var giay = CreText('giay',362,15,38,24,"0",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_8 = CreText('Text_8',418,11,30,30,"››",'#ac6c33','#ffffff','#ffffff','#ffff00','',20,'Arial','Bold','center','middle',2,'0.00','0','0',3,'#ffffff','#ac6c33','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
var obj_view = CreText('obj_view',145,12,128,24,"",'#ac6c33','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#ffffff','#ac6c33','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'#c0c0c0',0,1.50);
var bang_diem = new Kinetic.Group({name:'bang_diem',x:0,y:0,width:235,height:113});
bang_diem.add(m_diem,bt_lam_lai,t_mess,label);
var Text_1 = CreText('Text_1',22,37,19,25,"",'#d9aa7f','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',351,38,19,25,"",'#d9aa7f','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,Text_7,Text_6,Text_3,o_so_0,o_so_1,o_so_2,o_so_3,o_so_4,o_so_5,o_so_6,o_so_7,o_so_8,o_so_9,o_so_10,o_so_11,o_so_12,o_so_13,o_so_14,o_so_15,o_so_16,o_so_17,o_so_18,o_so_19,m_diem,bt_lam_lai,t_mess,label,phut,giay,Text_8,obj_view,bang_diem,Text_1,Text_2);
stage.add(Page_1);

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page_2_Backrounnd = CreText('Page_2_Backrounnd',0,0,470,380,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var cau_hoi_5 = CreText('cau_hoi_5',64,201,364,29,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','left','top',0,'0.00','0','1',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi_9 = CreText('cau_hoi_9',64,330,364,29,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','left','top',0,'0.00','0','1',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',0,-1,469,37,"Bài 2: Điền kết quả thích hợp vào ô vuông bên phải của mỗi bài toán.",'#0080ff','#ffffff','#ffffff','#ffffff','',10,'Arial','Bold','left','middle',0,'0.00','0','0',1,'#0080ff','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_6 = CreText('Text_6',414,6,20,24,":",'rgba(0,0,0,0)','#ffffff','#ff0000','#ffffff','',18,'Arial','Bold','center','middle',11,'0.00','10','0',0,'rgba(0,0,0,0)','rgba(0,0,0,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var phut = CreText('phut',387,8,38,24,"0",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Bold','center','middle',0,'0.00','10','0',0,'rgba(0,0,0,0)','rgba(0,0,0,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var giay = CreText('giay',429,8,38,24,"0",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Bold','center','middle',0,'0.00','10','0',0,'rgba(0,0,0,0)','rgba(0,0,0,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kiem_tra = CreText('kiem_tra',202,354,80,23,"Nộp Bài",'#005500','#ffffff','#ffff00','#ffffff','',10,'Arial','Normal','center','middle',3,'0.00','10','0',1,'#ffff00','#009300','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
kiem_tra.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
KiemTra2();
  return;
}
 );
var Text_10 = CreText('Text_10',16,348,26,26,"‹‹",'#0080ff','#ffffff','#ffffff','#ffff00','',16,'Arial','Bold','center','middle',2,'0.00','0','0',3,'#ffffff','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var cau_hoi_2 = CreText('cau_hoi_2',64,105,364,29,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','left','top',0,'0.00','0','1',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi_3 = CreText('cau_hoi_3',64,137,364,29,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','left','top',0,'0.00','0','1',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi_4 = CreText('cau_hoi_4',64,169,364,29,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','left','top',0,'0.00','0','1',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi_6 = CreText('cau_hoi_6',64,233,364,29,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','left','top',0,'0.00','0','1',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi_7 = CreText('cau_hoi_7',64,265,364,29,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','left','top',0,'0.00','0','1',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi_8 = CreText('cau_hoi_8',64,297,364,29,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','left','top',0,'0.00','0','1',1,'#c0c0c0','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so0 = CreText('cau_so0',3,41,57,29,"Câu hỏi 1:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Bold','left','top',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so1 = CreText('cau_so1',3,73,57,29,"Câu hỏi 2:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Bold','left','top',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so2 = CreText('cau_so2',3,105,57,29,"Câu hỏi 3:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Bold','left','top',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so3 = CreText('cau_so3',3,137,57,29,"Câu hỏi 4:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Bold','left','top',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so4 = CreText('cau_so4',3,169,57,29,"Câu hỏi 5:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Bold','left','top',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so5 = CreText('cau_so5',3,201,57,29,"Câu hỏi 6:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Bold','left','top',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so6 = CreText('cau_so6',3,233,57,29,"Câu hỏi 7:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Bold','left','top',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so7 = CreText('cau_so7',3,265,57,29,"Câu hỏi 8:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Bold','left','top',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so8 = CreText('cau_so8',3,297,57,29,"Câu hỏi 9:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Bold','left','top',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so9 = CreText('cau_so9',3,330,68,29,"Câu hỏi 10:",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',10,'Arial','Bold','left','top',0,'0.00','0','1',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so_0 = CreText('so_0',429,41,39,29,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_1 = CreText('so_1',429,73,39,29,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_2 = CreText('so_2',429,105,39,29,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_3 = CreText('so_3',429,137,39,29,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_4 = CreText('so_4',429,169,39,29,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_5 = CreText('so_5',429,201,39,29,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_7 = CreText('so_7',429,265,39,29,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_8 = CreText('so_8',429,297,39,29,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_9 = CreText('so_9',429,330,39,29,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var so_6 = CreText('so_6',429,233,39,29,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;Click2();}
 );
var m_diem = CreText('m_diem',139,143,199,87,"Vòng 8",'#ecd9ff','#ffffff','rgba(0,0,0,0)','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ecd9ff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_lam_lai = CreText('bt_lam_lai',214,209,56,19,"Bắt Đầu",'#8b0000','#ffffff','#ffffff','#ffffff','',10,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#ffffff','#370000','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitBai2();
}
 );
var label = CreText('label',140,156,194,56,"Hãy điền đáp số thích hợp vào ô trống để được bài toán đúng.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var t_mess = CreText('t_mess',140,143,198,15,"Bài 2",'rgba(64,0,128,1.11)','#ffffff','#ffffff','#ffffff','',10,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#ffffff','rgba(128,0,255,1.11)','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = new Kinetic.Group({name:'msg',x:0,y:0,width:203,height:91});
msg.add(m_diem,label,t_mess,bt_lam_lai);
var doan_thang = CreText('doan_thang',118,307,217,21,"  A               B                          C                                     D",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE4.PNG',8,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
Page_2.add(Page_2_Backrounnd,cau_hoi_5,cau_hoi_9,Text_1,Text_6,phut,giay,kiem_tra,Text_10,Text_2,cau_hoi_0,cau_hoi_1,cau_hoi_2,cau_hoi_3,cau_hoi_4,cau_hoi_6,cau_hoi_7,cau_hoi_8,cau_so0,cau_so1,cau_so2,cau_so3,cau_so4,cau_so5,cau_so6,cau_so7,cau_so8,cau_so9,so_0,so_1,so_2,so_3,so_4,so_5,so_7,so_8,so_9,so_6,msg,doan_thang);
stage.add(Page_2);

 var PageKey = new Kinetic.Layer({name: 'PageKey'});
var PageKey_Backrounnd = CreText('PageKey_Backrounnd',0,0,80,100,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
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
