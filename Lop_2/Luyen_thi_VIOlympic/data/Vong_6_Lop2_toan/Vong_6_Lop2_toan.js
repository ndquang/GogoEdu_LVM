folder_Resource ='data/Vong_6_Lop2_toan';
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
    iNN = Random(80)+10;
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
GetVer();
CreateRam();
for (var k = 0; k < m_size; k++)
	{
	var dm= Random(2);
	if(dm==0)
	SetText("","o_so_"+k,arNumber[k]+"cm");
	else {
		if(arNumber[k]%10==0)
			SetText("","o_so_"+k,floor(arNumber[k]/10)+"dm");
		else
		SetText("","o_so_"+k,floor(arNumber[k]/10)+"dm"+arNumber[k]%10+"cm");
	     }
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
	SetText("","obj_view",arNumber[m_index-1]);
	InvalidateObj("","");
}
function ClickNumber()
{
	var kq= replaceStr(GetText("",""),"dm","");
	if(length(kq)==1) kq=kq*10;
	kq= replaceStr(kq,"cm","");
	if(arNumber[m_index]==kq){
		m_index++;
		m_sai=0;		
		MoveObjectTo("","",GetLeft("","obj_view"),GetTop("","obj_view"),200,4,1,"FinishMove()");
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
var akqcau_hoi=["","",""];
var m_size2=0;
var dap_so="";
function CreateBai2()
{
	SetShowObject("","cau_tiep",0);
	InvalidateObj("","");
	var ch= akqcau_hoi[m_size2];
	switch(m_size2)
	{
		case 0:
			{
			  var tuoibo =  Random(25)+27;
			  var tuoime = tuoibo- Random(8)+4;
			  var tong= tuoibo+tuoime;
			  	ch= replaceStr(ch,"...",tong,0,1);
				ch= replaceStr(ch,"...",tuoibo,0,1);
				dap_so= tuoime;
			  break;
			}
			case 1:
			{
			  var ga =  Random(25)+35;
			  ch= replaceStr(ch,"...",ga,0,1);
			  dap_so= 100-ga;
			  break;
			}
			case 2:
			{
			  var be =  Random(25)+25;
			  ch= replaceStr(ch,"...",be,0,1);
			  var to =  Random(25)+10;
			  ch= replaceStr(ch,"...",to,0,1);
			  dap_so= be+to;
			  break;
			}
			case 3:
			{
			  var be =  Random(10);			  	
			  ch= replaceStr(ch,"...",be,0,1);
			  var dem=0;	
			  for(var k=10; k<100;k++)
				{
				var a = floor(k/10);
				if(abs(k%10 - a)==be)
					dem++;
			  }
			  dap_so= dem;
			  break;
			}
			case 4:
			{
			  var be =  Random(10)+9;		
			  ch= replaceStr(ch,"...",be,0,1);
			  for(var k=99; k>=90 ;k--)
				{
				var a = floor(k/10);
				if(abs(k%10 + a)==be)
					dap_so=k;
			  }
			  break;
			}
			case 5:
			{
			  var be =  Random(15)+2;		
			  ch= replaceStr(ch,"...",be,0,1);
			  var dem =0;
			  for(var k=10; k<100;k++)
				{
				var a = floor(k/10);
				if(abs(k%10 + a)==be)
					dem++;
			  }
 			  dap_so= dem;
			  break;
			}
			case 6:
			{

			  var be =  Random(10)+1;		
			  ch= replaceStr(ch,"...",be,0,1);
			  for(var k=10; k<20;k++)
				{
				var a = floor(k/10);
				if((k%10 + a)==be)
					dap_so=k;
			  }
			  break;
			}
			case 7:
			{
			  var be =  Random(10)+1;		
			  ch= replaceStr(ch,"...",be,0,1);
			  var hieu="";
			  for(var k=10; k<20;k++)
				{
				var a = floor(k/10);
				if(abs(k%10 - a)==be)
					hieu=k;
			  }
			  var sotru = Random(50)+10;	
 			  ch= replaceStr(ch,"...",sotru,0,1);
			  dap_so=hieu+sotru;
			  break;
			}
			case 8:
			{
			  var be =  Random(49);		
			  ch= replaceStr(ch,"...",be,0,1);
			  dap_so=98-be;
			  break;
			}
			case 9:
			{
			  var be =  Random(2);
			  if(be==0){		
			  ch= replaceStr(ch,"...","0 ; 1; 2",0,1);
			  dap_so=63;}
			  else {
 			  ch= replaceStr(ch,"...","0 ; 1; 3",0,1);
			  dap_so=84;
                    }
			  break;
			}

	}
		PlaySound("ID_GAME");
	      SetText("","cau",ch);
		var caux=m_size2+1;
		SetText("","cau_so","Câu số: " +caux);
            SetText("","tra_loi","");
		SetShowObject("","kiem_tra",1);
		SetShowObject("","tra_loi",1);
		SetText("","thong_bao");
	      MoveObjectTo("","thong_bao",-1,-1,30,5,4);
	      MoveObjectTo("","obj_view",-1,-1,30,5,4);
		
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
	akqcau_hoi[0]="Hiện nay tổng số tuổi của bố An và mẹ An là ..., biết bố An ... tuổi. Hỏi mẹ An mấy tuổi?";
	akqcau_hoi[1]="Nhà bác Ba nuôi tất cả 100 con cả gà và vịt, trong đó có ... con gà. Hỏi nhà bác Ba nuôi bao nhiêu con vịt?";
	akqcau_hoi[2]="Bao gạo bé nặng ...kg, bao gạo lớn nặng hơn bao gạo bé ...kg. Hỏi bao gạo lớn nặng bao nhiêu ki-lô-gam?";
	akqcau_hoi[3]="Có tất cả bao nhiêu số có hai chữ số, mà 2 chữ số của mỗi số đó kém nhau ... đơn vị?";
	akqcau_hoi[4] ="Tìm số lớn nhất có hai chữ số mà tổng của hai chữ số đó bằng ...";
	akqcau_hoi[5] ="Có bao nhiêu số có hai chữ số mà tổng của nó bằng ...";
	akqcau_hoi[6] ="Tìm số bé nhất có 2 chữ số mà tổng hai chữ số đó bằng ...";
	akqcau_hoi[7] ="Trong một phép trừ biết hiệu là số bé nhất có hai chữ số, mà hiệu hai chữ số của nó bằng ..., số trừ bằng ... Tìm số bị trừ";
	akqcau_hoi[8] ="Hai số có tổng là số lớn nhất có hai chữ số khác nhau, biết số bé là ..., số lớn là?";
	akqcau_hoi[9] ="Tổng các số có hai chữ số khác nhau viết bởi các chữ số ... là";
m_size2=0;
SetText("","obj_view");
SetText("","phut","20");
SetText("","giay","0");
SetTimerPage(1000);
SetShowObject("","kiem_tra",1);
AllowEditText("","tra_loi",1);
SetShowObject("","msg",0);
LineHeight("","cau",1.8);
InvalidateObj("","");
CreateBai2();
GetVer();
}
function  KiemTra2(){
    if(GetText("","tra_loi")==dap_so)
		{
		PlaySound("ID_TRUE");
		var diem= StringtoNumber(GetText("","obj_view"))+10;
		SetText("","obj_view","Điểm \n"+diem);
		SetText("","thong_bao","Đúng.");
           }
     else {
		var diem= StringtoNumber(GetText("","obj_view"))-5;
		if(diem<0) diem=0;
		SetText("","obj_view","Điểm \n"+diem);
		SetText("","thong_bao","Sai");
		PlaySound("ID_FALSE");
          }
	    var y_to= GetTop("","thong_bao")+ GetHeight("","thong_bao")-10;
	    MoveObjectTo("","thong_bao",-1,y_to,50,5,5);
	    y_to= GetTop("","obj_view")+ GetHeight("","obj_view")-10;
	    MoveObjectTo("","obj_view",-1,y_to,50,5,5);
		m_size2++;
		if(m_size2>9)
		{
		KillTimerPage();
		var diem= GetText("","obj_view");
		UpdateScore(StringtoNumber(diem));
		diem= "Điểm: " +diem +"\n Thời gian: ";
		var g=60 - GetText("","giay");
		var ph= 19 - GetText("","phut");
		diem = diem +ph +":"+g;
		SetText("","bt_lam_lai","Làm Lại");
		SetText("","label",diem);
	      	SetShowObject("","msg",1);
		SetShowObject("","cau_tiep",0);
		} else SetShowObject("","cau_tiep",1);
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
 width: 400,
 height: 300 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,400,300,'','#8000ff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#8000ff','0','0','0','','0','0','0','0',0,0,'');
var Text_3 = CreText('Text_3',10,53,383,239,"",'rgba(217,170,127,1.11)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',8,'#aa7c41','rgba(217,170,127,1.11)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',8,4,363,36,"Vòng 6, bài 1",'#d9aa7f','#000000','#000000','#ffffff','',16,'Arial','Bold','center','middle',12,'0.00','0','1',2,'#aa7c41','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',5,5,'#aa7c41',0,1.50);
var Text_6 = CreText('Text_6',265,10,79,24,":",'#aa7c41','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#aa7c41','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var o_so_0 = CreText('o_so_0',18,63,91,44,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_1 = CreText('o_so_1',111,63,91,44,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_2 = CreText('o_so_2',204,63,91,44,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_3 = CreText('o_so_3',297,63,91,44,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_4 = CreText('o_so_4',18,243,91,44,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_5 = CreText('o_so_5',18,108,91,44,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_6 = CreText('o_so_6',111,108,91,44,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_7 = CreText('o_so_7',204,108,91,44,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_8 = CreText('o_so_8',297,108,91,44,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_9 = CreText('o_so_9',111,243,91,44,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_10 = CreText('o_so_10',18,153,91,44,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_11 = CreText('o_so_11',111,153,91,44,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_12 = CreText('o_so_12',204,153,91,44,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_13 = CreText('o_so_13',297,153,91,44,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_14 = CreText('o_so_14',204,243,91,44,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_15 = CreText('o_so_15',18,198,91,44,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_16 = CreText('o_so_16',111,198,91,44,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_17 = CreText('o_so_17',204,198,91,44,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_18 = CreText('o_so_18',297,198,91,44,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_19 = CreText('o_so_19',297,243,91,44,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var m_diem = CreText('m_diem',100,106,201,101,"",'rgba(236,217,255,1.11)','#ffffff','#ff0000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(236,217,255,1.11)','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_lam_lai = CreText('bt_lam_lai',172,187,65,18,"Bắt Đầu",'#ae0000','#ffffff','#ffffff','#ffffff','',10,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#ffffff','#510000','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitBai1();
SetShowObject("","bang_diem",0);
  return;
}
 );
var t_mess = CreText('t_mess',100,107,200,16,"Bài 1",'rgba(64,0,128,1.11)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#ffffff','rgba(128,0,255,1.11)','4','1','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var label = CreText('label',104,122,193,64,"Bạn chọn liên tiếp các ô có giá trị tăng dần theo số đo độ dài. Nếu chọn sai quá 3 lần thì bài thi sẽ kết thúc.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',11,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var phut = CreText('phut',266,10,38,24,"0",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var giay = CreText('giay',308,10,38,24,"0",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_8 = CreText('Text_8',343,7,30,30,"››",'#aa7c41','#ffffff','#ffffff','#ffff00','',20,'Arial','Bold','center','middle',2,'0.00','0','0',1,'#ffffff','#aa7c41','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
var bang_diem = new Kinetic.Group({name:'bang_diem',x:0,y:0,width:205,height:105});
bang_diem.add(m_diem,label,t_mess,bt_lam_lai);
var Text_1 = CreText('Text_1',31,30,16,27,"",'#d9aa7f','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_4 = CreText('Text_4',297,36,16,21,"",'#d9aa7f','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var obj_view = CreText('obj_view',22,4,37,35,"",'#aa7c41','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',1,'0.00','0','0',1,'#ffffff','#aa7c41','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'#c0c0c0',0,1.50);
obj_view.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(Page_1_Backrounnd,Text_3,Text_2,Text_6,o_so_0,o_so_1,o_so_2,o_so_3,o_so_4,o_so_5,o_so_6,o_so_7,o_so_8,o_so_9,o_so_10,o_so_11,o_so_12,o_so_13,o_so_14,o_so_15,o_so_16,o_so_17,o_so_18,o_so_19,phut,giay,Text_8,bang_diem,Text_1,Text_4,obj_view);
stage.add(Page_1);

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page_2_Backrounnd = CreText('Page_2_Backrounnd',0,0,400,220,'','#8000ff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#8000ff','0','0','0','','0','0','0','0',0,0,'');
var cau = CreText('cau',12,48,380,168,"",'#004040','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','11','11',2,'#ffffff','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_so = CreText('cau_so',12,48,380,31,"\r\nCâu hỏi",'rgba(0,0,0,0)','#ffffff','#ffff00','#ffffff','',10,'Arial','Bold','center','middle',0,'0.00','0','1',1,'#ffffff','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',28,8,365,33,"Vòng 6, bài 2",'#d9aa7f','#000000','#000000','#ffffff','',14,'Arial','Bold','center','middle',12,'0.00','1','0',2,'#aa7c41','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',5,5,'#aa7c41',0,1.50);
var Text_9 = CreText('Text_9',346,24,5,64,"",'#d9aa7f','#ffffff','rgba(0,0,0,0)','#ffffff','',48,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',316,13,62,24,":",'#aa7c41','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#aa7c41','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_6 = CreText('Text_6',282,11,33,25,"",'#804000','#ffffff','#ffff00','#ffffff','ID_ITEM11.PNG',18,'Arial','Normal','center','middle',0,'0.00','10','0',0,'rgba(0,0,0,0)','#804000','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var kiem_tra = CreText('kiem_tra',298,187,50,17,"Nộp Bài",'#ff6820','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#ffff00','#ffad5b','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
kiem_tra.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
KiemTra2();
  return;
}
 );
var tra_loi = CreText('tra_loi',224,187,66,17,"",'#ffffff','#ffffff','#0000ff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tra_loi.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
var m_diem = CreText('m_diem',120,82,157,84,"",'#ecd9ff','#ffffff','rgba(0,0,0,0)','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ecd9ff','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var label = CreText('label',122,99,153,45,"Nhập đáp số đúng cho mỗi bài toán.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',11,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var t_mess = CreText('t_mess',120,82,157,15,"Bài 2",'rgba(64,0,128,1.11)','#ffffff','#ffffff','#ffffff','',11,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#ffffff','rgba(128,0,255,1.11)','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_lam_lai = CreText('bt_lam_lai',170,143,56,18,"Bắt Đầu",'#8b0000','#ffffff','#ffffff','#ffffff','',10,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#ffffff','#370000','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitBai2();
SetShowObject("","msg",0);
  return;
}
 );
var cau_tiep = CreText('cau_tiep',298,187,50,17,"Câu Tiếp",'#0080c0','#ffffff','#ffffff','#ffffff','',10,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#ffffff','#005177','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cau_tiep.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateBai2();
  return;
}
 );
var Text_7 = CreText('Text_7',50,33,4,61,"",'#d9aa7f','#ffffff','rgba(0,0,0,0)','#ffffff','',48,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var obj_view = CreText('obj_view',29,51,45,45,"Điểm\r\n0",'#d9aa7f','#ffffff','#000000','#ffffff','',10,'Arial','Bold','center','middle',5,'0.00','0','0',0,'#aa7c41','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',2,4,'#aa7c41',0,1.50);
var Text_13 = CreText('Text_13',40,12,26,26,"‹‹",'#aa7c41','#ffffff','#ffffff','#ffff00','',20,'Arial','Bold','center','middle',2,'0.00','0','0',1,'#ffffff','#aa7c41','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
var msg = new Kinetic.Group({name:'msg',x:0,y:0,width:161,height:88});
msg.add(m_diem,label,t_mess,bt_lam_lai);
var phut = CreText('phut',317,13,30,24,"19",'rgba(0,0,0,0)','#ffffff','#ffffff','#000000','',16,'Arial','Normal','center','bottom',0,'0.00','11','11',0,'rgba(0,0,0,0)','#aa7c41','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var giay = CreText('giay',348,13,30,24,"00",'rgba(0,0,0,0)','#ffffff','#ffffff','#000000','',16,'Arial','Normal','center','bottom',0,'0.00','11','11',0,'rgba(0,0,0,0)','#aa7c41','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var thong_bao = CreText('thong_bao',326,49,45,45,"kết quả",'#d9aa7f','#ffffff','#000000','#ffffff','',10,'Arial','Bold','center','middle',5,'0.00','0','0',0,'#aa7c41','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',2,4,'#aa7c41',0,1.50);
Page_2.add(Page_2_Backrounnd,cau,cau_so,Text_1,Text_9,Text_2,Text_6,kiem_tra,tra_loi,cau_tiep,Text_7,obj_view,Text_13,msg,phut,giay,thong_bao);
stage.add(Page_2);
InitLacVietScript();
};
