folder_Resource ='data/De_cuong_on_tap_giua_hk1(dang_4)'
styteView = 'Ver';
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

var arTam=[0,0,0,0,0];
function  CreateRam( m_size){
   var Count = 0;
   for (var i = 0; i < 5 ; i++)
   {
    var bb = true;
    var iNN ;
    while (bb)
    {
    iNN = Random(m_size)+30;
    for (var j = 0 ; j < Count;j++)
    { 
      if (arTam[j] == iNN)
         break;
    }
    if (j >= Count)
       bb = false;
    }
    arTam[Count] =iNN;
    Count++;
  } 
}
var kq1_a=[6,7,4,7,10];
function Bai1a(){
var i=1;
var begin =Random(40)+10;
var sum=begin ;
kq1_a[0]=begin;
SetText("Trang_1","tl1a_0",begin);
while(i<4){
		var t1= Random(50)+10;
		SetText("Trang_1","y1a_"+i,"+"+t1);
		SetText("Trang_1","tl1a_"+i,"");
		SetFontColor("Trang_1","tl1a_"+i,"#0000ff");
		sum=sum+t1;
		kq1_a[i]=sum;
		if(sum>100){
			sum=begin ;
			i=1;
		}
		else i++;
	}
}
var kq1_b=[0,0,0,0];
function Bai1b(){
var i=1;
var begin =Random(40)+10;
var sum=begin ;
kq1_b[0]=begin;
SetText("Trang_1","tl1b_0",begin);
while(i<4){
		var t1= Random(50)+10;
		SetText("Trang_1","y1b_"+i,"+"+t1);
		SetText("Trang_1","tl1b_"+i,"");
		SetFontColor("Trang_1","tl1b_"+i,"#0000ff");
		sum=sum+t1;
		kq1_b[i]=sum;
		if(sum>100){
			i=1;
			sum=begin;
		}
		else i++;
	}
}
function Bai1(){
Bai1a();
Bai1b();
GetVer();
}
function DiemBai1(){
	var diem=0;
	for(var i=1;i<4;i++){
	if(GetText("Trang_1","tl1a_"+i)==kq1_a[i])
	{
		diem=diem+0.25;
		SetFontColor("Trang_1","tl1a_"+i,"#00ff00");
	}
	else SetFontColor("Trang_1","tl1a_"+i,"#ff0000");

	if(GetText("Trang_1","tl1b_"+i)==kq1_b[i])
	{
		diem=diem+0.25;
		SetFontColor("Trang_1","tl1b_"+i,"#00ff00");
	}
	else SetFontColor("Trang_1","tl1b_"+i,"#ff0000");

	}
	return diem;// max 2 
}
function ChonSo(){
	var tt = GetText("Trang_1","");
	if(tt=="" || tt== "S")
		SetText("","","Đ");
	else SetText("","","S");
	InvalidateObj("","");
}
var m_limit=20;
var aKq2=[0,0,0,0];
var bKq2=[0,0,0,0];
var Kq2=[0,0,0,0];
function Bai2()
{
  var limit=90;
  for(var i=0;i<4;i++)	
	{
		var a= Random(limit)+10;
		var b= Random(limit)+10;
		while(a+b>100)
			{
				a= Random(limit)+10;
				b= Random(limit)+10;
			}
		SetText("Trang_1","dau_"+i,"+");
		SetText("Trang_1","bai2_"+i,a+" và "+b);
		SetText("Trang_1","so_tru_"+i,"");
		SetText("Trang_1","so_bi_tru_"+i,"");
		SetText("Trang_1","thuong_so_"+i,"");
		SetBorder("Trang_1","thuong_so_"+i,"#000000",1);
		aKq2[i]=a;
		bKq2[i]=b;
		Kq2[i]=a+b;
	}
}
function DiemBai2(){
	var m_diem=0;
	for(var i=0; i< 4; i++)
		{
		if(bKq2[i]== GetText("Trang_1","so_bi_tru_"+i) && aKq2[i]== GetText("Trang_1","so_tru_"+i) &&  Kq2[i]== GetText("Trang_1","thuong_so_"+i))
		{
		   	m_diem=m_diem+0.5;
			SetBorder("Trang_1","thuong_so_"+i,"#00ff00");
		}
		else	SetBorder("Trang_1","thuong_so_"+i,"#ff0000");
	}
	return m_diem;
}
var kq3=[0,0,0,0,0];
function Bai3()
{
var limit=20;
for(var i=0;i<8;i++)	
	{
		var a= Random(limit);
		var b= Random(limit);
		var c= Random(limit);
		var phep1 = Random(2);
		var phep2 = Random(2);
		var kq=0;
		var ab=0;
		if(phep1==0 && phep2==0){//++
			while(a+b> limit)
			{
				a= Random(limit);
				b= Random(limit);
			}
			ab=a+b;
			c= Random(limit-ab);
			kq =ab+c;
		}
		if(phep1==0 && phep2 ==1){//+-
			while(a+b> limit)
			{
				a= Random(limit);
				b= Random(limit);
			}
			ab=a+b;
			c= Random(ab);
			kq =ab-c;
		}
		if(phep1==1 && phep2 ==0){//-+
			
			while(a<b)
				{
				a= Random(limit);
				b= Random(limit);
				}
			ab=a-b;
			c= Random(limit-ab);
			kq =ab+c;
		}
		if(phep1==1 && phep2 ==1){//--
			while(a<b)
				{
				a= Random(limit);
				b= Random(limit);
				}
			ab=a-b;
			c= Random(ab);
			kq =ab-c;
		}
		kq3[i]=kq;
            var dau1= " +";
		var dau2= " + ";
		if(phep1==1) dau1= " - ";
		if(phep2==1) dau2= " - "; 
		SetText("Trang_1","bai_"+i,a+dau1+b+dau2+c);
		SetFontColor("Trang_1","bai_"+i,"#000000");

}
  for(var t=0;t<8;t++)
	arTam[t]=kq3[t];
  for(var l=0;l<10;l++)
	{
		var a= Random(4);
		var b= Random(4);
		while(a==b)
		b= Random(4);
		var ta= arTam[a];
		arTam[a]=arTam[b];
		arTam[b]= ta;

		 a= Random(4)+4;
		 b= Random(4)+4;
		while(a==b)
		b= Random(4)+4;
		ta= arTam[a];
		arTam[a]=arTam[b];
		arTam[b]= ta;
	}
   for(var m=0;m<8;m++)
	SetText("Trang_1","ds_"+m,arTam[m]);
      SetColor("Trang_1","obj_paint",-1,-1,-1);
}

var arChon=[0,0,0,0,0];
var m_color="";
var i_start=0;
function StartObj()
{
	var i=0;
	var b_e= false;
	while(i<8 && b_e== false)
	{
		if(PosInObj("bai_"+i))
		{
			b_e= true;
			i_start=i;
			
		}
		i=i+1;
	}
}
function EndObj()
{
	var i=0;
	var b_e= false;
	while(i<8 && b_e== false)
	{
		if(PosInObj("ds_"+i))
		{
			b_e= true;
			SaveObject("","obj_paint");
			arChon[i_start]= GetText("","ds_"+i);
		}
		i++;
	}
	if(b_e== false)
		InvalidateObj("","");
}
function DiemBai3(){
	var m_diem=0;
	for(var i=0; i< 8; i++)
		{
		if(kq3[i]== arChon[i])
		{
		   	m_diem=m_diem+0.25;
			SetFontColor("Trang_1","bai_"+i,"#00ff00");
		}
		else	SetFontColor("Trang_1","bai_"+i,"#ff0000");
	}
	InvalidateObj("Trang_1","");
	return m_diem;
}
var kq4=[0,0,0,0];
function  Bai4(){
   	var text = "Mẹ hái được ... quả cam. Anh hái được ... quả cam. Hỏi cả hai người hái được bao nhiêu quả cam?";
	var limit=90;
	var soa= Random(limit)+10;
	var sob= Random(limit)+10;
	while(soa + sob >= 100)
			{
				soa= Random(limit)+10;
				sob= Random(limit)+10;
			}
	text= replaceStr(text,"...",soa, 0, 1);
	text= replaceStr(text,"...",sob, 0, 1);
	kq4[0]= soa;
	kq4[1]= sob;
	kq4[3]= soa+sob;
	kq4[2]= soa + "+" + sob+"="+kq4[3];
   SetText("Trang_3","cau_hoi",text);
   for(var i=0;i<4;i++){
        SetText("Trang_3","bai4_"+i,"");
	  SetBorder("Trang_3","bai4_"+i,"#000000",0);
	  }
}
function DiemBai4()
{
var diem=0;
 for(var i=0;i<4;i++){
        if(GetText("Trang_3","bai4_"+i)==kq4[i]){
		diem=diem+0.5;
	  	SetFontColor("Trang_3","bai4_"+i,"#00ff00");
		}
	  else SetFontColor("Trang_3","bai4_"+i,"#ff0000");	
	  }
return diem;
}
var kq5=[5,4];
function Bai5(){
	for(var i=0;i<2;i++){
	SetText("Trang_3","bai5_"+i,"");
	SetFontColor("Trang_3","bai5_"+i,"#0000ff");
		}	
}
function DiemBai5(){
   var diem=0;
for(var i=0;i<2;i++){
        if(GetText("Trang_3","bai5_"+i)==kq5[i]){
		diem=diem+1;
	  	SetFontColor("Trang_3","bai5_"+i,"#00ff00");
		}
	  else SetFontColor("Trang_3","bai5_"+i,"#ff0000");	
}
return diem;
}
var kq6=[4,11,18,25];
var len6=0;
function Bai6(){
	var text = "Tổng của hai số là số liền sau số ... . Số hạng thứ nhất là số bé nhất có hai chữ số. Số hạng thứ hai là số bao nhiêu?";
	var soa= Random(70)+30;
	text= replaceStr(text,"...",soa, 0, 1);
	SetText("Trang_3","de_bai_6",text);
	kq6[0]=soa+1;
	kq6[1]=10;
	kq6[3]=kq6[0]-10;
	kq6[2]=kq6[0]+"-"+10+"="+kq6[3];
    for(var i=0;i<4;i++){
        SetText("Trang_3","tl6_"+i,"");
	  SetFontColor("Trang_3","tl6_"+i,"#0000ff");
	  }
}
function DiemBai6(){
   var diem=0;//max 1diem
for(var i=0;i<4;i++)
{
  if(GetText("Trang_3","tl6_"+i)==kq6[i]){
		diem=diem+0.5;
	  	SetFontColor("Trang_3","tl6_"+i,"#00ff00");
		}
	  else SetFontColor("Trang_3","tl6_"+i,"#ff0000");	
	  }
return diem;
}
function Trang_1()
{
SetShowObject("Trang_1","Group_1",0);
SetPaint("Trang_1","obj_paint",1);
PaintType("Trang_1","obj_paint",5);
PaintColor("Trang_1","obj_paint","#0000ff");
SetCursor("Trang_1","obj_paint","pointer");
Bai1();
Bai2();
Bai3();
InvalidateObj("Trang_1","");
  return;
}

function Trang_3()
{
SetShowObject("Trang_3","Group_1",0);
SetShowObject("Trang_3","bang_diem",0);
SetMoveView("Trang_3","bang_diem",1);
SetShowObject("Trang_3","nop_bai",1);
Bai4();
Bai5();
Bai6();
InvalidateObj("Trang_3","");
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
var Trang_1_Backrounnd = CreText('Trang_1_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var Text_1 = CreText('Text_1',82,57,339,24,"a).        ---→          ---→          ---→",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_4 = CreText('Text_4',82,98,339,24,"b).        ---→          ---→          ---→",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var y1a_2 = CreText('y1a_2',217,45,35,27,"+9",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var y1a_3 = CreText('y1a_3',298,45,35,27,"+7",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai1a = CreText('bai1a',9,21,556,26,"Bài 1: Viết số thích hợp vào ô trống?",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','bottom',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var de = CreText('de',118,1,432,26,"ĐỀ THI KIỂM TRA GIỮA HỌC KỲ I, TOÁN LỚP 2",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var tl1a_3 = CreText('tl1a_3',343,55,29,26,"32",'#ffffff','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#282828','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
tl1a_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var tl1a_2 = CreText('tl1a_2',263,55,29,26,"54",'#ffffff','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#282828','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
tl1a_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var tl1a_1 = CreText('tl1a_1',179,55,29,26,"65",'#ffffff','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#282828','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
tl1a_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var de_bai = CreText('de_bai',12,136,391,25,"Bài 2: Đặt rồi tính tổng biết các số hạng là:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','8','0',1,'#ffffff','rgba(102,102,102,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai2_1 = CreText('bai2_1',187,165,102,19,"42\r\n16\r\n58",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var gach_0 = CreText('gach_0',88,229,45,1,"",'#000000','#000000','#000000','#000000','',16,'Arial','Normal','right','bottom',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dau_0 = CreText('dau_0',82,193,23,21,"+",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dau_1 = CreText('dau_1',199,193,23,21,"+",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dau_2 = CreText('dau_2',312,193,23,21,"+",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dau_3 = CreText('dau_3',429,193,23,21,"+",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai2_0 = CreText('bai2_0',78,165,102,19,"3+21",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai2_2 = CreText('bai2_2',302,165,102,19,"42\r\n16\r\n58",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai2_3 = CreText('bai2_3',414,165,102,19,"42\r\n16\r\n58",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var gach_1 = CreText('gach_1',207,229,45,1,"",'#000000','#000000','#000000','#000000','',16,'Arial','Normal','right','bottom',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var gach_2 = CreText('gach_2',322,229,45,1,"",'#000000','#000000','#000000','#000000','',16,'Arial','Normal','right','bottom',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var gach_3 = CreText('gach_3',441,229,45,1,"",'#000000','#000000','#000000','#000000','',16,'Arial','Normal','right','bottom',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var thuong_so_0 = CreText('thuong_so_0',104,234,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','bottom',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
thuong_so_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var thuong_so_1 = CreText('thuong_so_1',217,234,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
thuong_so_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var thuong_so_2 = CreText('thuong_so_2',333,234,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
thuong_so_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var thuong_so_3 = CreText('thuong_so_3',451,234,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
thuong_so_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var DrawText_18 = CreText('DrawText_18',9,260,598,28,"Bài 3. Nối phép tính trong hình chữ nhật với kết quả đúng trong hình tròn?",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','8','0',1,'#ffffff','rgba(102,102,102,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
DrawText_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Bai3();
InvalidateObj("Trang_1","");
  return;
}
 );
var so_bi_tru_3 = CreText('so_bi_tru_3',451,205,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_bi_tru_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var so_bi_tru_2 = CreText('so_bi_tru_2',333,205,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_bi_tru_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var so_bi_tru_1 = CreText('so_bi_tru_1',217,205,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_bi_tru_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var so_bi_tru_0 = CreText('so_bi_tru_0',104,205,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','bottom',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_bi_tru_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var so_tru_3 = CreText('so_tru_3',451,184,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_tru_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var so_tru_2 = CreText('so_tru_2',333,184,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_tru_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var so_tru_1 = CreText('so_tru_1',217,184,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_tru_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var so_tru_0 = CreText('so_tru_0',104,184,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','bottom',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_tru_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var bai_0 = CreText('bai_0',98,297,111,28,"1+2",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_1 = CreText('bai_1',98,341,111,28,"4+5",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_2 = CreText('bai_2',98,385,111,28,"3 +9",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_3 = CreText('bai_3',98,431,111,28,"4+1",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_4 = CreText('bai_4',411,296,104,28,"44 +43",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_5 = CreText('bai_5',411,341,104,28,"9",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_6 = CreText('bai_6',411,386,104,28,"6",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_7 = CreText('bai_7',411,431,104,28,"55",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ds_0 = CreText('ds_0',249,293,35,35,"1",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ds_1 = CreText('ds_1',249,337,35,35,"1",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ds_2 = CreText('ds_2',249,381,35,35,"1",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ds_3 = CreText('ds_3',249,425,35,35,"1",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ds_4 = CreText('ds_4',336,293,35,35,"1",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ds_5 = CreText('ds_5',336,336,35,35,"1",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ds_6 = CreText('ds_6',336,379,35,35,"1",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ds_7 = CreText('ds_7',336,424,35,35,"1",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var obj_paint = CreText('obj_paint',77,285,453,187,"",'rgba(255,255,255,0.00)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'rgba(0,0,0,0)','rgba(255,255,255,0.00)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'#7f7f7f',0,1.50);
obj_paint.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
EndObj();
  return;
}
 );
obj_paint.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
  StartObj();
  return;
}
 );
var _0 = CreText('_0',-2,0,31,22,"0",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var clear_one = CreText('clear_one',29,0,27,22,"←",'#ffc0cb','#ffffff','#000000','#ffffff','',14,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffe4e1','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
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
var clear_all = CreText('clear_all',56,0,27,22,"C",'#ffc0cb','#ffffff','#000000','#ffffff','',14,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffe4e1','3','1','rgba(0,0,0,0)','0','0','4','0',2,0, 'rgba(0,0,0,0)',0,1.50);
clear_all.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
      keyNewValue = "";
	SetText("",objectShowKey,"");
	InvalidateObj("",objectShowKey);;
  return;
}
 );
var _1 = CreText('_1',-2,22,31,22,"1",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _2 = CreText('_2',29,22,27,22,"2",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _3 = CreText('_3',57,22,27,22,"3",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',2,0, 'rgba(0,0,0,0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _4 = CreText('_4',-1,44,31,22,"4",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _5 = CreText('_5',30,44,27,22,"5",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _6 = CreText('_6',57,44,27,22,"6",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',2,0, 'rgba(0,0,0,0)',0,1.50);
_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _7 = CreText('_7',-1,66,31,22,"7",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _8 = CreText('_8',30,66,27,22,"8",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _9 = CreText('_9',57,66,27,22,"9",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',2,0, 'rgba(0,0,0,0)',0,1.50);
_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_lon = CreText('dau_lon',-1,88,31,22,">",'#afeeee','#ffffff','#000000','#ffffff','',14,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
dau_lon.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_bang = CreText('dau_bang',30,88,27,22,"=",'#afeeee','#ffffff','#000000','#ffffff','',14,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
dau_bang.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_be = CreText('dau_be',57,88,27,22,"<",'#afeeee','#ffffff','#000000','#ffffff','',14,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
dau_be.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var huy = CreText('huy',-1,111,40,22,"Hủy",'#ffc0cb','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffe4e1','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
huy.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetText("",objectShowKey,keyOldValue);
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
var ok = CreText('ok',39,111,45,22,"Đồng ý",'#98fb98','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#e0fee0','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
ok.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
var tl1a_0 = CreText('tl1a_0',111,54,29,26,"34",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var y1a_1 = CreText('y1a_1',141,45,35,27,"+9",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var y1b_2 = CreText('y1b_2',216,88,35,27,"+9",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var y1b_3 = CreText('y1b_3',293,88,35,27,"+7",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var tl1b_3 = CreText('tl1b_3',342,98,29,26,"32",'#ffffff','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#282828','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
tl1b_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var tl1b_2 = CreText('tl1b_2',262,98,29,26,"54",'#ffffff','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#282828','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
tl1b_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var tl1b_1 = CreText('tl1b_1',178,98,29,26,"65",'#ffffff','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#282828','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
tl1b_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var tl1b_0 = CreText('tl1b_0',110,97,29,26,"34",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var y1b_1 = CreText('y1b_1',140,88,35,27,"+9",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:90,height:137});
Group_1.add(_0,clear_one,clear_all,_1,_2,_3,_4,_5,_6,_7,_8,_9,dau_lon,dau_bang,dau_be,huy,ok);
Trang_1.add(Trang_1_Backrounnd,Text_1,Text_4,y1a_2,y1a_3,bai1a,de,tl1a_3,tl1a_2,tl1a_1,de_bai,bai2_1,gach_0,dau_0,dau_1,dau_2,dau_3,bai2_0,bai2_2,bai2_3,gach_1,gach_2,gach_3,thuong_so_0,thuong_so_1,thuong_so_2,thuong_so_3,DrawText_18,so_bi_tru_3,so_bi_tru_2,so_bi_tru_1,so_bi_tru_0,so_tru_3,so_tru_2,so_tru_1,so_tru_0,bai_0,bai_1,bai_2,bai_3,bai_4,bai_5,bai_6,bai_7,ds_0,ds_1,ds_2,ds_3,ds_4,ds_5,ds_6,ds_7,obj_paint,tl1a_0,y1a_1,y1b_2,y1b_3,tl1b_3,tl1b_2,tl1b_1,tl1b_0,y1b_1,Group_1);
stage.add(Trang_1);

 var Trang_3 = new Kinetic.Layer({name: 'Trang_3',callback:'Trang_3()',x:0,y:480});
var Trang_3_Backrounnd = CreText('Trang_3_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
var hv2 = CreText('hv2',447,214,43,43,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',2,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var hv4 = CreText('hv4',447,257,43,43,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var hv3 = CreText('hv3',404,257,43,43,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',63,385,346,95,"Tổng của hai số đó là:......\r\nSố hạng thứ nhất:......\r\nSố hạng thứ hai:..............................\r\n\r\n                                       Đáp số:.......\r\n",'rgba(0,0,0,0)','#ffffff','#000000','#0000ff','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.70);
var text_tam = CreText('text_tam',65,77,481,96,"Mẹ hái được: ...... quả cam\r\nAnh hái được: ...... quả cam\r\nMẹ và Anh hái được ........................... quả cam.\r\n\r\n                                           Đáp số: .......",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.70);
var hv1 = CreText('hv1',404,214,43,43,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai4_3 = CreText('bai4_3',325,142,36,25,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai4_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var cau_hoi = CreText('cau_hoi',68,16,552,65,"Mẹ hái được ... quả cam. Anh hái được ... quả cam. Hỏi cả hai người hái được bao nhiêu quả cam?",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','left','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_giai = CreText('bai_giai',216,50,101,27,"Bài giải:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Italic','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai4_1 = CreText('bai4_1',174,86,36,26,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai4_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var bai4_0 = CreText('bai4_0',168,66,36,22,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai4_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var bai4_2 = CreText('bai4_2',230,108,116,22,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai4_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var bai_4 = CreText('bai_4',8,18,54,22,"Bài 4:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','left','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_1 = CreText('DrawText_1',11,218,54,22,"Bài 5:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','left','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_2 = CreText('DrawText_2',71,219,328,90,"Viết số thích hợp vào dấu chấm.\r\nHình vẽ bên có:\r\na). Có ...... hình vuông\r\nb). Có ...... hình chữ nhật.\r\n",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.70);
var bai5_0 = CreText('bai5_0',120,251,37,19,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bai5_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var DrawText_3 = CreText('DrawText_3',12,317,54,22,"Bài 6:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','left','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
DrawText_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Bai6();
InvalidateObj("Trang_3","");
  return;
}
 );
var de_bai_6 = CreText('de_bai_6',67,315,541,58,"Tổng của hai số là số liền sau số ... . Số hạng thứ nhất là số bé nhất có hai chữ số. Số hạng thứ hai là số bao nhiêu?",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.70);
var tl6_0 = CreText('tl6_0',226,378,33,20,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','bottom',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
tl6_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var tl6_1 = CreText('tl6_1',194,399,33,20,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','bottom',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
tl6_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var nop_bai = CreText('nop_bai',444,447,89,29,"Nộp Bài",'#8b0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#ff0000','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
nop_bai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var diem= DiemBai1()+ DiemBai2()+DiemBai3()+DiemBai4()+DiemBai5()+DiemBai6();
UpdateScore(diem);
if(diem>10) diem=10;
SetText("Trang_3","m_diem",diem);
SetShowObject("Trang_3","bang_diem",1);
SetShowObject("Trang_3","nop_bai",0);
InvalidateObj("Trang_3","");
InvalidateObj("Trang_1","");
  return;
}
 );
var bai5_1 = CreText('bai5_1',120,269,37,20,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bai5_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var DrawText_6 = CreText('DrawText_6',201,355,130,21,"Bài giải:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Italic','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var vi_du = CreText('vi_du',156,213,125,29,"(ví dụ: 10-5=5)",'rgba(0,0,0,0)','#ffffff','#7f7f7f','#7f7f7f','',12,'Arial','Italic','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var m_diem = CreText('m_diem',156,142,252,141,"8",'rgba(230,230,230,1.11)','#ffffff','#0080ff','#ffffff','',48,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','rgba(230,230,230,1.11)','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var label = CreText('label',177,168,201,24,"Bạn được",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_lam_lai = CreText('bt_lam_lai',217,241,125,31,"Làm Lại",'#0080c0','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#4fa7ff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Bai1();
Bai2();
Bai3();
Bai4();
Bai5();
Bai6();
SetShowObject("Trang_3","bang_diem",0);
SetShowObject("Trang_3","nop_bai",1);
InvalidateObj("Trang_3","");
InvalidateObj("Trang_2","");
InvalidateObj("Trang_1","");
  return;
}
 );
var t_mess = CreText('t_mess',156,142,252,21,"Thông báo điểm",'rgba(127,127,127,1.11)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',1,'#ffffff','rgba(40,40,40,1.11)','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bang_diem = new Kinetic.Group({name:'bang_diem',x:0,y:0,width:256,height:145});
bang_diem.add(vi_du,m_diem,label,bt_lam_lai,t_mess);
var tl6_2 = CreText('tl6_2',185,417,134,19,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','bottom',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
tl6_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var tl6_3 = CreText('tl6_3',302,453,33,20,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','bottom',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
tl6_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var _0 = CreText('_0',1,1,31,22,"0",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var clear_one = CreText('clear_one',32,1,27,22,"←",'#ffc0cb','#ffffff','#000000','#000000','',14,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffe4e1','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
clear_one.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
      keyNewValue = GetText("",objectShowKey);
	keyNewValue =leftStr(keyNewValue ,length(keyNewValue)-1);
	SetText("",objectShowKey,keyNewValue);
	InvalidateObj("",objectShowKey);
  return;
}
 );
var clear_all = CreText('clear_all',59,1,27,22,"C",'#ffc0cb','#ffffff','#000000','#000000','',14,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffe4e1','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
clear_all.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
      keyNewValue = "";
	SetText("",objectShowKey,"");
	InvalidateObj("",objectShowKey);;
  return;
}
 );
var _1 = CreText('_1',1,23,31,22,"1",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _2 = CreText('_2',32,23,27,22,"2",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _3 = CreText('_3',59,23,27,22,"3",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _4 = CreText('_4',1,45,31,22,"4",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _5 = CreText('_5',32,45,27,22,"5",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _6 = CreText('_6',59,45,27,22,"6",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _7 = CreText('_7',1,67,31,22,"7",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _8 = CreText('_8',32,67,27,22,"8",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _9 = CreText('_9',59,67,27,22,"9",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_lon = CreText('dau_lon',1,89,31,22,"+",'#c0c0c0','#ffffff','#000000','#ffffff','',14,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
dau_lon.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_bang = CreText('dau_bang',32,89,27,22,"=",'#c0c0c0','#ffffff','#000000','#ffffff','',14,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
dau_bang.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_be = CreText('dau_be',59,89,27,22,"-",'#c0c0c0','#ffffff','#000000','#ffffff','',14,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
dau_be.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var huy = CreText('huy',1,111,31,22,"Hủy",'#ffc0cb','#ffffff','#000000','#ffffff','',11,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
huy.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetText("",objectShowKey,keyOldValue);
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
var ok = CreText('ok',32,111,54,22,"Đồng ý",'#98fb98','#ffffff','#000000','#ffffff','',11,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
ok.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:131,height:136});
Group_1.add(_0,clear_one,clear_all,_1,_2,_3,_4,_5,_6,_7,_8,_9,dau_lon,dau_bang,dau_be,huy,ok);
Trang_3.add(Trang_3_Backrounnd,hv2,hv4,hv3,Text_3,text_tam,hv1,bai4_3,cau_hoi,bai_giai,bai4_1,bai4_0,bai4_2,bai_4,DrawText_1,DrawText_2,bai5_0,DrawText_3,de_bai_6,tl6_0,tl6_1,nop_bai,bai5_1,DrawText_6,bang_diem,tl6_2,tl6_3,Group_1);
stage.add(Trang_3);
InitLacVietScript();
};
