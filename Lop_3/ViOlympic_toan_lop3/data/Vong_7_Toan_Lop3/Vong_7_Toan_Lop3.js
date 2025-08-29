folder_Resource ='data/Vong_7_Toan_Lop3';
var arNumber=[0,0,0,0,0];
var m_size=20;
var m_index=0;
var m_sai=0;
var count_sai=0;
var b_begin= false;
var arPhepTinh=[0,0,0,0,0];
function  CreateRam(){
   var Count = 0;
   for (var i = 0; i < m_size; i++)
   {
    var bb = true;
    var iNN,x,y,z,chon;
    while (bb)
    {
    chon= Random(4);
    if(chon<2)	
    {
    x= 7;
    y= Random(9)+2;
    iNN =x*y;
    }
    else if(chon==2)
	{
		z= Random(4)+4;
 		x= 7;
		y= Random(9)+2;
		iNN =x*y + z;
	}
    else if(chon==3)
	{
		z= Random(50)+40;
		while(z%2!=0)
			z= Random(50)+40;
		iNN =z/2;
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
    if(chon<2)	
    arPhepTinh[Count]= y + " x " + x;
    else if(chon==2)
	arPhepTinh[Count]= y + " x " + x +" + "+ z;
    else if(chon==3)
	arPhepTinh[Count]= z + " : 2";
    Count++;
  } 
}
function InitBai1()
{
m_sai=0;
CreateRam();
 for (var k = 0; k < m_size; k++){
	SetText("","o_so_"+k,arPhepTinh[k]);
	SetShowObject("","o_so_"+k,1);
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
		KillTimerPage();
SetText("","obj_view","");
SetText("","phut","20");
SetText("","giay","0");
m_index=0;
count_sai=0;
m_index=0;
b_begin= true;
GetVer();
SetTimerPage(1000);
InvalidateObj("","");
}
function FinishMove(){
	var tt= GetText("","");
	SetShowObject("","",0);
	SetText("","obj_view",tt+" = " + arNumber[m_index-1]);
	InvalidateObj("","");
}
function ClickNumber()
{
	if(b_begin==false)
		return;
	var kq=replaceStr(GetText("",""),"x","*");
	    kq=replaceStr(kq,":","/");
	    kq= ExecAsThread(kq);
	if(arNumber[m_index]==kq){
		m_index++;
		m_sai=0;		
		MoveObjectTo("","",GetLeft("","obj_view"),GetTop("","obj_view"),300,2,1,"FinishMove()");
		PlaySound("ID_TRUE");
	}
	else{
		m_sai++;
		count_sai++;
		PlaySound("ID_FALSE");
		SetColor("","","#FF0000");
		Delay("SetColor('','')",200);
	}
	if(m_index==m_size){
		KillTimerPage();
		SetText("","label","Điểm của bạn");
		var diem = (m_size - count_sai)/2;
		SetText("","m_diem",diem);
		UpdateScore(diem);
		b_begin=false;
		SetShowObject("","bang_diem",1);
		}
	else if(m_sai>=3)
		{
		KillTimerPage();
		b_begin=false;
		SetText("","label","Bạn làm sai quá 3 lần, làm lại.");
		SetShowObject("","bang_diem",1);
		SetText("","m_diem","");
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
function InitBai2()
{
	  SetShowObject("", "ch", 0);
        SetShowObject("", "a", 0);
        SetShowObject("", "b", 0);
        SetShowObject("", "c", 0);
        SetShowObject("", "d", 0);
	  a_ch[0]="Một ngày có 24 giờ. Vậy 6 ngày có:|4 giờ|124 giờ|134 giờ|144 giờ|d";
	  a_ch[1]="Năm nay bố 36 tuổi, tuổi bố gấp 4 lần tuổi con. Tuổi con trong hai năm nữa là:|9 tuổi|10 tuổi|11 tuổi|12 tuổi|c";
	  a_ch[2]="Năm nay con 6 tuổi, tuổi bố gấp 6 lần tuổi con. 3 năm nữa tuổi bố là:|36 tuổi|37 tuổi|38 tuổi|39 tuổi|d";
	  a_ch[3]="Mẹ đi chợ bán 48 quả lê. Sau khi bán số lê còn lại bằng 1/4 số lê mang đi bán. Hỏi mẹ còn lại mấy quả lê?|44 quả|36 quả|12 quả|10 quả|c";
	  a_ch[4]="Một số khi nhân với 7 được kết quả là 35, lấy số đó nhân với 6 thì được kết quả là:|5|30|35|42|b";
	  a_ch[5]="Một số khi chia cho 7 thì dư 3. Để được một số chia hết cho 7 và thương tăng thêm 1 đơn vị thì phải tăng số đó lên:|7 đơn vị|6 đơn vị|5 đơn vị|4 đơn vị|d";
	a_ch[6]="Một số chia hết cho 7, và khi chia có thương là 8. Lấy số đó chia cho 6 thì số dư là:|2|3|4|5|a";
	a_ch[7]="Một phép chia có thương 8, số chia là 6, số dư là số lớn nhất có thể có, số bị chia của phép chia đó là:|48|50|52|53|d";
	a_ch[8]="Một số nhân với 5 rồi cộng thêm 24 được kết quả là 59. Số đó là:|7|10|29|35|a";
	a_ch[9]="Bác Loan nuôi một số gà, vịt, ngan. Số gà gấp đôi số vịt, số vịt gấp đôi số ngan. Biết nhà bác Loan muôi 24 con vịt. Vậy số gà và số ngan là:|48 con gà, 24 con ngan|48 con gà, 12 con ngan|12 con gà, 48 con ngan|24 con gà, 12 con ngan|b";
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
if(i2==0)
SetTimerPage(1000);
i2++;
b_begin=true;
InvalidateObj("","");
}
function Click2(){

if(b_begin==false)
		return;

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
		var diem = (10 - count_sai)*10;
		UpdateScore(diem);
		SetText("","msg","Điểm của bạn: "+diem);
		b_begin = false;
		}
      b_begin=false;
       SetShowObject("","msg",1);
       InvalidateObj("","");
}
var curentpos=0;
var m_dapan="";
var nextpos=0;
var m_finish= false;
function InitBai3()
{
curentpos=72;
nextpos=0;
SetShowObject("","msg",0);
InvalidateObj("","");
AllowEditText("","m_kq",1);
MoveObjectTo("","tho",-1,-1);
SetShowObject("","m_kq",1);
m_finish= false;
GetVer();
}
function KiemTraViTri( obj){
	if(FindObj("",obj)!="")
	{		
		var cl= GetColor("",obj,"xxxx");
		if(cl=="rgba(0,0,0,0)"||cl=="ID_FOOT"){
		MoveObjectTo("","tho",GetLeft("",obj),GetTop("",obj));
		curentpos=nextpos;
		}
		else if(cl=="ID_STOP")
			return;
		else if(cl=="ID_CARROT")
			{
			SetShowObject("","m_kq",0);
			SetText("","m_kq","");
			MoveObjectTo("","tho",GetLeft("",obj),GetTop("",obj));
			SetText("","cau_hoi","Bạn đã hoàn thành!");
			SetShowObject("","msg",1);
			UpdateScore(100);
			m_finish=true;
		}
		else{
			var text= GetText("",obj);
			var idx= indexOf(text,"|",0);
			if(idx==-1) idx= indexOf(text,"?",0);
			if(idx!="-1"){
			SetText("","cau_hoi",subString(text,0,idx));
			m_dapan= subString(text,idx+1);
			SetText("","m_kq","");
			SetShowObject("","msg",1);
		   }
		}
		InvalidateObj("","");
	}	

}
function MoveTho( key)
{
  
  switch(key){
	case "&":
	{
		nextpos= curentpos;
		nextpos=nextpos-9;
		break; //len
	}
	case "(": //xuong
	{
		nextpos= curentpos;
		nextpos=nextpos+9;
		break;
	}
	case "%": //trai
	{
		nextpos= curentpos;
		nextpos=nextpos-1;
		break;
	}
	case "'": //phai
	{
		nextpos= curentpos;
		nextpos=nextpos+1;
		break;
	}
	default:
		return;
  }
  var obj= "o_"+nextpos;
	KiemTraViTri(obj);
}
function KiemTra()
{
	if(m_finish==true)
	{
	  var diem2=0;
	  for(var i=0; i< 64; i++)
		{
		if(GetColor("","o_"+i)=="ID_FOOT")
			diem2++;
		SetColor("","o_"+i);
		}
	 UpdateScore(diem2*10);
	 InitBai3();
	 return;	
	}
	else if(GetText("","m_kq")==m_dapan){
		var obj= "o_"+nextpos;
		SetShowObject("","msg",0);
		MoveObjectTo("","tho",GetLeft("",obj),GetTop("",obj));
		curentpos=nextpos;
		SetColor("",obj,1,1,1,"ID_FOOT");
		InvalidateObj("","");
	}
}

function Click3()
{
	var name = GetName("");
	var ii= indexOf(name,"_")+1;
	var next = subString(name,ii);
	if(next == curentpos+1 || next == curentpos-1 || next == curentpos+9 || next == curentpos-9){
		nextpos=next;
		 var obj= "o_"+nextpos;
			KiemTraViTri(obj);
	}
}
function CloseMsg()
{
	SetShowObject("","msg",0);

}
function Bai_1()
{
KillTimerPage();
b_begin=false;
SetText("","label","Chọn các ô số hoặc kết quả phép tính theo giá trị tăng dần.");
SetShowObject("","bang_diem",1);
SetText("","m_diem","");
  return;
}
function Bai_1_OnTimer()
{
StartTime();
  return;
}

function Bai_2()
{
InitBai2();
  return;
}
function Bai_2_OnTimer()
{
StartTime();
  return;
}

function Bai_3_OnKeyDown()
{
  var key= GetKeyDown("");
MoveTho(key);
  return;
}
function Bai_3()
{	
InitBai3();
  return;
}
function Bai_3_OnTimer()
{
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
 height: 400 
 });

 var Bai_1 = new Kinetic.Layer({name: 'Bai_1',callback:'Bai_1()'});
var Bai_1_Backrounnd = CreText('Bai_1_Backrounnd',0,0,600,350,'','#5e2f00','','','','ID_IMAGE6.PNG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#5e2f00','2','2','0','','0','0','0','0',0,0,'');
var Text_2 = CreText('Text_2',22,64,570,271,"",'#d9aa7f','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',8,'#aa6b33','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var o_so_0 = CreText('o_so_0',28,69,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_1 = CreText('o_so_1',139,69,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_2 = CreText('o_so_2',250,69,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_3 = CreText('o_so_3',361,69,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_4 = CreText('o_so_4',473,69,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_5 = CreText('o_so_5',28,134,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_6 = CreText('o_so_6',139,134,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_7 = CreText('o_so_7',250,134,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_8 = CreText('o_so_8',361,134,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_9 = CreText('o_so_9',473,134,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_10 = CreText('o_so_10',28,199,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_11 = CreText('o_so_11',139,199,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_12 = CreText('o_so_12',250,199,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_13 = CreText('o_so_13',361,199,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_14 = CreText('o_so_14',473,199,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_15 = CreText('o_so_15',28,265,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_16 = CreText('o_so_16',139,265,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_17 = CreText('o_so_17',250,265,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_18 = CreText('o_so_18',361,265,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_19 = CreText('o_so_19',473,265,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var m_diem = CreText('m_diem',183,135,231,109,"",'rgba(236,217,255,1.11)','#ffffff','#ff0000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(236,217,255,1.11)','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_lam_lai = CreText('bt_lam_lai',266,216,80,22,"Bắt Đầu",'#8b0000','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#ffffff','#370000','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitBai1();
SetShowObject("","bang_diem",0);
  return;
}
 );
var t_mess = CreText('t_mess',184,136,229,16,"Bài 1",'rgba(64,0,128,1.11)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#ffffff','rgba(128,0,255,1.11)','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var label = CreText('label',184,153,229,62,"Bạn chọn liên tiếp các ô có giá trị tăng dần, để các ô lần lượt bị xóa khoải bảng. Nếu chọn sai quá 3 lần thì bài thi sẽ kết thúc.\r\n",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',11,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bang_diem = new Kinetic.Group({name:'bang_diem',x:0,y:0,width:235,height:113});
bang_diem.add(m_diem,label,t_mess,bt_lam_lai);
var obj_view = CreText('obj_view',185,10,215,39,"",'#d9aa7f','#ffffff','#000000','#ffffff','',24,'Arial','Normal','center','middle',11,'0.00','10','0',2,'#bf7939','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','2',2,2,'#c0c0c0',0,1.50);
var Text_1 = CreText('Text_1',408,10,140,39,":",'#d9aa7f','#ffffff','#000000','#ffffff','',24,'Arial','Normal','center','middle',11,'0.00','10','0',2,'#bf7939','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','2',2,2,'#c0c0c0',0,1.50);
var phut = CreText('phut',437,15,38,39,"0",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',26,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var giay = CreText('giay',479,15,38,39,"0",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',26,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_8 = CreText('Text_8',555,11,36,38,"››",'#d9aa7f','#ffffff','#000000','#ffff00','',20,'Arial','Bold','center','middle',2,'0.00','0','0',3,'#aa6b33','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
var Text_4 = CreText('Text_4',470,42,19,24,"",'#d9aa7f','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_9 = CreText('Text_9',18,10,140,39,"Vòng 7",'#d9aa7f','#ffffff','#000000','#ffffff','',24,'Arial','Normal','center','middle',11,'0.00','10','0',2,'#bf7939','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','2',2,2,'#c0c0c0',0,1.50);
var Text_10 = CreText('Text_10',80,42,19,23,"",'#d9aa7f','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',279,41,19,24,"",'#d9aa7f','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Bai_1.add(Bai_1_Backrounnd,Text_2,o_so_0,o_so_1,o_so_2,o_so_3,o_so_4,o_so_5,o_so_6,o_so_7,o_so_8,o_so_9,o_so_10,o_so_11,o_so_12,o_so_13,o_so_14,o_so_15,o_so_16,o_so_17,o_so_18,o_so_19,bang_diem,obj_view,Text_1,phut,giay,Text_8,Text_4,Text_9,Text_10,Text_3);
stage.add(Bai_1);

 var Bai_2 = new Kinetic.Layer({name: 'Bai_2',callback:'Bai_2()'});
var Bai_2_Backrounnd = CreText('Bai_2_Backrounnd',0,0,600,388,'','#ffffff','','','','ID_IMAGE7.PNG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','2','2','0','','0','0','0','0',0,0,'');
var a = CreText('a',49,303,226,31,"TLA",'rgba(0,0,0,0.89)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#ffffff','rgba(40,40,40,0.89)','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
a.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;
Click2();
  return;
}
 );
var b = CreText('b',331,304,226,31,"TLb",'rgba(0,0,0,0.89)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#ffffff','rgba(40,40,40,0.89)','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;
Click2();
  return;
}
 );
var c = CreText('c',49,344,226,31,"TKC",'rgba(0,0,0,0.89)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#ffffff','rgba(40,40,40,0.89)','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
c.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;
Click2();
  return;
}
 );
var d = CreText('d',331,344,226,31,"TLD",'rgba(0,0,0,0.89)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#ffffff','rgba(40,40,40,0.89)','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
d.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;
Click2();
  return;
}
 );
var ch = CreText('ch',33,192,539,78,"Câu hỏi",'#000000','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#ffffff','#282828','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = CreText('msg',192,143,239,44,"BẮT ĐẦU",'#d9aa7f','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',11,'0.00','10','0',3,'#a46731','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/{
m_pgObjCaller = this;
if(i2<10)
ShowCauHoi();
  return;
}
 );
var Text_6 = CreText('Text_6',513,2,79,24,":",'rgba(0,0,0,0.67)','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#ffffff','rgba(0,0,0,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var phut = CreText('phut',514,2,38,24,"0",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var giay = CreText('giay',556,2,38,24,"0",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',152,5,312,28,"Bài 2: Ai là triệu phú",'rgba(0,0,0,0)','#ffffff','#ffff00','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',561,323,36,38,"››",'#d9aa7f','#ffffff','#000000','#ffff00','',20,'Arial','Bold','center','middle',2,'0.00','0','0',3,'#aa6b33','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
var Text_4 = CreText('Text_4',6,321,36,38,"‹‹",'#d9aa7f','#ffffff','#000000','#ffff00','',20,'Arial','Bold','center','middle',2,'0.00','0','0',3,'#aa6b33','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Bai_2.add(Bai_2_Backrounnd,a,b,c,d,ch,msg,Text_6,phut,giay,Text_1,Text_3,Text_4);
stage.add(Bai_2);

 var Bai_3 = new Kinetic.Layer({name: 'Bai_3',callback:'Bai_3()'});
var Bai_3_Backrounnd = CreText('Bai_3_Backrounnd',0,0,600,400,'','#b0d8ff','','','','ID_IMAGE9.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#b0d8ff','2','2','0','','0','0','0','0',0,0,'');
var Text_1 = CreText('Text_1',112,35,361,340,"",'rgba(255,255,255,0.67)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',5,'#0080ff','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var o_0 = CreText('o_0',117,40,36,33,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_1 = CreText('o_1',156,40,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_2 = CreText('o_2',195,40,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',36,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_3 = CreText('o_3',234,40,36,33,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_4 = CreText('o_4',273,40,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_5 = CreText('o_5',312,40,36,33,"Viết số gồm hai chục, năm đơn vị và tám trăm.|825",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_6 = CreText('o_6',351,40,36,33,"Một sợi dây dài 600cm được cắt thành 6 đoạn dài bằng nhau. Hỏi mỗi đoạn dài bao nhiêu xăng-ti-mét?|100",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_7 = CreText('o_7',390,40,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_8 = CreText('o_8',430,40,36,33,"-",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_CARROT.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_9 = CreText('o_9',117,77,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_10 = CreText('o_10',156,77,36,33,"-",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_11 = CreText('o_11',195,77,36,33,"Mẹ mua 48 quả táo, như vậy số táo mẹ mua gấp 3 lần số táo chị mua. Hỏi chị mua bao nhiêu quả táo?|12",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_ITEM14.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_12 = CreText('o_12',234,77,36,33,"-",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_13 = CreText('o_13',273,77,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_14 = CreText('o_14',312,77,36,33,"-",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_15 = CreText('o_15',351,77,36,33,"Tìm số bị chia trong phép chia có thương là 15, số chia là 7, số dư là số dư lớn nhất có thể có trong phép chia đó.|111",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_ITEM0.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_16 = CreText('o_16',390,77,36,33,"-",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_17 = CreText('o_17',430,77,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_18 = CreText('o_18',117,115,36,33,"Cô giáo dùng 42 quyển vở để thưởng cho các học sinh giỏi lớp 3A, mỗi bạn được thưởng 6 quyển. Hỏi lớp 3A có bao nhiêu học sinh giỏi?|7",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_19 = CreText('o_19',156,115,36,33,"Bể thứ nhất chứa 256l nước. Bể thứ hai chứa được 212l nước. Hỏi cả hai bể chứa bao nhiêu lít nước?|468",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_20 = CreText('o_20',195,115,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_20.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_21 = CreText('o_21',234,115,36,33,"-",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_21.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_22 = CreText('o_22',273,115,36,33,"Một số chia cho 7 thì được 9, số đó chia cho 6 thì dư bao nhiêu?|3",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_ITEM1.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_22.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_23 = CreText('o_23',312,115,36,33,"-",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_23.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_24 = CreText('o_24',351,115,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_24.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_25 = CreText('o_25',390,115,36,33,"Nhà trường cần chuẩn bị 87 bộ bàn ghế cho các bạn học sinh khối lớp 3. Biết mỗi bàn có hai học sinh ngồi. Hỏi khối lớp 3 của trường có bao nhiêu bạn học sinh?|174",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_25.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_26 = CreText('o_26',430,115,36,33,"Gói kẹo của Mai có 42 cái kẹo. Sau khi Mai chia cho các bạn thì còn lại 1/3 số kẹo. Tìm số kẹo còn lại của Mai?|14",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_ITEM2.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_26.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_27 = CreText('o_27',117,152,36,33,"-",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_27.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_28 = CreText('o_28',156,152,36,33,"Cô giáo chia 56 quyển vở cho các bạn học sinh, mỗi bạn học sinh được 7 quyển. Hỏi số học sinh được cô giáo chia vở là bao nhiêu bạn?|8",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_ITEM9.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_28.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_29 = CreText('o_29',195,152,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_29.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_30 = CreText('o_30',234,152,36,33,"Khối lớp Bốn có 235 học sinh, khối lớp Ba có 216 học sinh. Hỏi hai khối có bao nhiêu học sinh?|451",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_30.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_31 = CreText('o_31',273,152,36,33,"Một đội công nhân cần sữa quảng đường dài 480m. Đội đó đã sữa được 1/6 quãng đường. Hỏi đội đó đã sữa được quãng đường dài bao nhiêu mét?|80",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_31.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_32 = CreText('o_32',312,152,36,33,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_32.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_33 = CreText('o_33',351,152,36,33,"-",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_33.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_34 = CreText('o_34',390,152,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_34.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_35 = CreText('o_35',430,152,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_35.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_36 = CreText('o_36',117,188,36,33,"-",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_36.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_37 = CreText('o_37',156,189,36,33,"Lớp 3A1 có tất cả 32 học sinh, số học sinh giỏi chiếm 1/2 tổng số học sinh cả lớp. Hỏi lớp 3A1 có bao nhiêu học sinh giỏi?|16",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_37.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_38 = CreText('o_38',195,189,36,33,"-",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_38.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_39 = CreText('o_39',234,189,36,33,"Trong tuần vừa qua Lan được  7 điểm 10, số điểm 10 của Loan bằng 2 lần số điểm 10 của Lan. Hỏi Loan được bao nhiêu điểm 10?|14",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_ITEM13.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_39.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_40 = CreText('o_40',273,189,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_40.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_41 = CreText('o_41',314,189,33,33,"-",'#ff0000','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',48,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ff0000','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_41.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_42 = CreText('o_42',351,189,36,33,"Cho hai số có tổng bằng 5 và tích bằng 6. Số lớn là:|3",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_42.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_43 = CreText('o_43',390,189,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_43.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_44 = CreText('o_44',430,189,36,33,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_44.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_45 = CreText('o_45',117,226,36,33,"Mai gấp được 145 ngôi sao. Mai tặng bạn 78 ngôi sao. Hỏi Mai còn lại bao nhiêu ngôi sao?|67",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_45.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_46 = CreText('o_46',156,226,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_46.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_47 = CreText('o_47',195,226,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_47.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_48 = CreText('o_48',234,226,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_48.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_49 = CreText('o_49',273,226,36,33,"-",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_49.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_50 = CreText('o_50',312,226,36,33,"-",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_50.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_51 = CreText('o_51',351,226,36,33,"Năm nay có 4 tuổi, 3 năm nữa bố gấp 7 lần tuổi con. Hỏi năm nay bố bao nhiêu tuổi?|46",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_ITEM14.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_51.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_52 = CreText('o_52',390,226,36,33,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_52.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_53 = CreText('o_53',430,226,36,33,"Có bao nhiêu số có hai chữ số mà tổng các chữ số bằng 9?|9",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_53.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_54 = CreText('o_54',117,263,36,33,"Đoạn thẳng AB dài 8cm. Đoạn thẳng CD gấp 7 lần đoạn thẳng AB. Tính độ dài đoạn thẳng CD.|56",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_ITEM12.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_54.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_55 = CreText('o_55',156,263,36,33,"-",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_55.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_56 = CreText('o_56',195,263,36,33,"-",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_56.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_57 = CreText('o_57',234,263,36,33,"Khối lớp 3 trường tiểu học Đoàn Kết có 96 em, trong đó có 1/3 số học sinh là học sinh giỏi. Hỏi khối lớp 3 trường đó có bao nhiêu học sinh giỏi?|32",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_ITEM4.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_57.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_58 = CreText('o_58',273,263,36,33,"Có bao nhiêu số có hai chữ số mà tổng các chữ số bẳng 14?|5",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_58.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_59 = CreText('o_59',312,263,36,33,"-",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_59.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_60 = CreText('o_60',351,263,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_60.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_61 = CreText('o_61',390,263,36,33,"-",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_61.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_62 = CreText('o_62',430,263,36,33,"Số viên bi của Minh bằng 1/2 số viên bi của Tùng. Nếu Tùng cho Minh 4 viên bi thì số bi của hai bạn bằng nhau. Hỏi Minh có bao nhiêu viên bi?|8",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_62.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_63 = CreText('o_63',117,300,36,33,"Một cửa hàng có 84kg gạo, đã bán được 1/2 số gạo đó. Hỏi cửa hàng đã bán được bao nhiêu ki-lô-gam gạo?|42",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_63.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_64 = CreText('o_64',156,300,36,33,"Trong đợt thu hoạch vừa qua nhà bác Hùng và bác Mai thu hoạch được tất cả 456 bắp ngô. Biết nhà bác Mai thu hoạch 234 bắp. Tính số bắp ngô nhà bác Hùng thu được.|222",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_64.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_65 = CreText('o_65',195,300,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_65.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_66 = CreText('o_66',234,300,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_66.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_67 = CreText('o_67',273,300,36,33,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_67.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_68 = CreText('o_68',312,300,36,33,"Hiện nay bố 40 tuổi và tuổi con bằng 1/4 tuổi bố. Tính tuổi con sau hai năm nữa?|12",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_ITEM9.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_68.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_69 = CreText('o_69',351,300,36,33,"Số viên bi của Minh bằng 1/2 số viên bi của Tùng. Nếu Tùng cho Minh 4 viên bi thì số bi của hai bạn bằng nhau. Hỏi Tùng có bao nhiêu viên bi?|16\r\n",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_69.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_70 = CreText('o_70',390,300,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_70.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_71 = CreText('o_71',430,300,36,33,"+",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_71.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_72 = CreText('o_72',117,337,36,33,"-",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_72.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_73 = CreText('o_73',156,337,36,33,"-",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_73.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_74 = CreText('o_74',195,337,36,33,"Ngày thứ nhất cửa hàng bán được 12m vải. Ngày thứ hai cửa hàng bán được số vải gấp 3 lần ngày thứ nhất. Hỏi ngày thứ 2 cửa hàng bán được bao nhiêu mét vải?|36",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_ITEM14.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_74.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_75 = CreText('o_75',234,337,36,33,"Hình tam giác ABC có cạnh AB dài 25cm, cạnh BC dài 36cm; cạnh CA ngắn hơn cạnh BC 9cm. Tính chu vi tam giác ABC.|88",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_75.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_76 = CreText('o_76',273,337,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_76.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_77 = CreText('o_77',312,337,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_77.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_78 = CreText('o_78',351,337,36,33,"Tìm số có ba chữ số biết chữ số hàng trăm hơn chữ số hàng chục 6 đơn vị, chữ số hàng chục trừ đi chữ số hàng đơn vị bằng 3.|930",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_78.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_79 = CreText('o_79',390,337,36,33,"Cho phép tính 15 x 5 nếu thêm vào thừa số thứ hai 2 đơn vị, thì tích mới bằng bao nhiêu?105",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_ITEM6.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_79.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_80 = CreText('o_80',430,337,36,33,"-",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_80.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var Text_8 = CreText('Text_8',69,339,30,30,"",'#0080ff','#ffffff','#ffffff','#ffff00','ID_IMAGE26.PNG',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080ff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, '#ffffff',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
var Text_3 = CreText('Text_3',476,40,30,30,"",'#666666','#666666','#ffffff','#ffff00','ID_IMAGE26.PNG',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#666666','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, '#ffffff',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
var cau_hoi = CreText('cau_hoi',112,112,364,90,"Số viên bi của Minh bằng 1/2 số viên bi của Tùng. Nếu Tùng cho Minh 4 viên bi thì số bi của hai bạn bằng nhau. Hỏi Tùng có bao nhiêu viên bi?|16",'#8000ff','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#400080','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var m_kq = CreText('m_kq',355,181,64,18,"642",'#ffffff','#ffffff','#0000ff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#666666','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
m_kq.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
var bt_ok = CreText('bt_ok',425,181,48,18,"OK",'#400080','#ffffff','#ffff00','#ffffff','',12,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','#8000ff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_ok.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
KiemTra();
  return;
}
 );
var title = CreText('title',112,112,364,18,"CÂU HỎI",'#400080','#ffffff','#ffff00','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#8000ff','4','1','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var close_msg = CreText('close_msg',453,112,23,18,"x",'#ff0000','#ffffff','#ffffff','#ffffff','',10,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','#8b0000','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
close_msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CloseMsg();
  return;
}
 );
var Text_4 = CreText('Text_4',1,1,599,27,"Bài 3: Bạn hãy di chuyển con thỏ đến củ cà rốt bằng các phím mủi tên (←↑→↓)",'#0080ff','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_5 = CreText('Text_5',13,341,36,38,"‹‹",'#d9aa7f','#ffffff','#000000','#ffff00','',20,'Arial','Bold','center','middle',2,'0.00','0','0',3,'#aa6b33','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
var tho = CreText('tho',117,337,36,33,"",'#ff6820','#ffffff','#000000','#ffffff','ID_THO.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',0,'#0080ff','#ff6820','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, '#ccffcc',0,1.50);
var msg = new Kinetic.Group({name:'msg',x:0,y:0,width:368,height:94});
msg.add(cau_hoi,title,m_kq,bt_ok,close_msg);
Bai_3.add(Bai_3_Backrounnd,Text_1,o_0,o_1,o_2,o_3,o_4,o_5,o_6,o_7,o_8,o_9,o_10,o_11,o_12,o_13,o_14,o_15,o_16,o_17,o_18,o_19,o_20,o_21,o_22,o_23,o_24,o_25,o_26,o_27,o_28,o_29,o_30,o_31,o_32,o_33,o_34,o_35,o_36,o_37,o_38,o_39,o_40,o_41,o_42,o_43,o_44,o_45,o_46,o_47,o_48,o_49,o_50,o_51,o_52,o_53,o_54,o_55,o_56,o_57,o_58,o_59,o_60,o_61,o_62,o_63,o_64,o_65,o_66,o_67,o_68,o_69,o_70,o_71,o_72,o_73,o_74,o_75,o_76,o_77,o_78,o_79,o_80,Text_8,Text_3,Text_4,Text_5,tho,msg);
stage.add(Bai_3);
InitLacVietScript();
};
