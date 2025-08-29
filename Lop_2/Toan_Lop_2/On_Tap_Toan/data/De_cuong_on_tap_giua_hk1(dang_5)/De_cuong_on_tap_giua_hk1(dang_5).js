folder_Resource ='data/De_cuong_on_tap_giua_hk1(dang_5)'
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
var cau_dung="";
var kq1=[6,7,4];
var cau_tl=0;
function Bai1(){
		var a= Random(5)+5;
		var b= Random(a-1)+1;
		var c= Random(a+b-2)+1;
		SetText("Trang_1","y1_0",a+"kg");
		SetText("Trang_1","y1_1",b+"kg");
		SetText("Trang_1","y1_2",c+"kg");
		var m_kq1 = a+b-c;
		cau_dung= Random(3);
		kq1[cau_dung]=m_kq1;
			if(cau_dung==0){
			   kq1[1]= m_kq1+1;
			   kq1[2]= m_kq1+2;}
			else if(cau_dung==1){
			   kq1[0]= m_kq1-1;
			   kq1[2]= m_kq1+1;
			}
			else if(cau_dung==2){
			   kq1[0]= m_kq1-2;
			   kq1[1]= m_kq1-1;
			}
		var abc=["a. ","b. ","c. "];
		for(var i=0;i<3;i++){
		SetText("Trang_1","tl1_"+i,abc[i]+ kq1[i]+"kg");
		SetFontColor("Trang_1","tl1_"+i,"#000000");
		}
		SetShowObject("Trang_1","check_0",0);
		
		cau_tl="";
}

function ChonTL(){
	var name= GetName("Trang_1");
	var t=  GetTop("Trang_1",name);
	var l=  GetLeft("Trang_1",name);
	MoveObjectTo("Trang_1","check_0",l-3,t+3);
	SetText("Trang_1","check_0",leftStr(GetText("Trang_1",name),1));
	SetShowObject("Trang_1","check_0",1);
	InvalidateObj("Trang_1","");
	cau_tl=rightStr(name,1);
}
function DiemBai1(){
	var diem=0;
	
	if(cau_tl==cau_dung)
	{
		diem=diem+1;
		SetFontColor("Trang_1","tl1_"+cau_tl,"#00ff00");
	}
	else {
			SetFontColor("Trang_1","tl1_"+cau_tl,"#ff0000");
			SetFontColor("Trang_1","tl1_"+cau_dung,"#00ff00");
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
GetVer();
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
var Kq3=[0,0,0,0,0];
function Bai3()
{
  var limit=90;
  for(var i=0;i<8;i++)	
	{
		var a= Random(limit)+10;
		var b= Random(limit)+10;
		var phep= Random(2);
		var da=0;
		if(phep==0){ //+
			while(a+b>100)
			{
				a= Random(limit)+10;
				b= Random(limit*0.7)+10;
			}
			da=a+b;
			SetText("Trang_1","bai3_"+i,a+" + "+b+" = ");
			}
		else //-
			{
			while(a-b<9 || a%10 < b%10)
			{
				a= Random(limit)+10;
				b= Random(limit*0.7)+10;
			}
			da=a-b;
			SetText("Trang_1","bai3_"+i,a+" - "+b+" = ");
			}
		Kq3[i]=da;
		SetText("Trang_1","tl3_"+i,"");
		SetFontColor("Trang_1","tl3_"+i,"#000000");
	}
}

function DiemBai3(){
	var m_diem=0;
	for(var i=0; i< 8; i++)
		{
		if(Kq3[i]== GetText("Trang_1","tl3_"+i))
		{
		   	m_diem=m_diem+0.5;
			SetFontColor("Trang_1","tl3_"+i,"#00ff00");
		}
		else	SetFontColor("Trang_1","tl3_"+i,"#ff0000");
	}
	return m_diem;
}

var kq4=[0,0,0,0];
function  Bai4(){
   	var text = "Khối lớp Một có  ... học sinh. Khối lớp Hai ít hơn khối lớp Một ... học sinh. Hỏi khối lớp Hai có bao nhiêu học sinh?";
	var limit=50;
	var soa= Random(limit)+40;
	var sob= Random(soa/3)+10;
	while(soa + sob >= 100)
			{
				soa= Random(limit)+40;
				sob= Random(soa/3)+10;
			}
	text= replaceStr(text,"...",soa, 0, 1);
	text= replaceStr(text,"...",sob, 0, 1);
	kq4[0]= soa;
	kq4[1]= sob;
	kq4[3]= soa-sob;
	kq4[2]= soa + "-" + sob+"="+kq4[3];
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
var kq5=[3,5];
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
	var text = "Khi mẹ ... tuổi, thì con được ... tuổi. Hỏi lúc mẹ ... tuổi thì con mấy tuổi?";
	var soa= Random(30)+24;
      var sob= Random(soa-20)+4;
      var soc =soa - Random(sob);
     
	text= replaceStr(text,"...",soa, 0, 1);
	text= replaceStr(text,"...",sob, 0, 1);
	text= replaceStr(text,"...",soc, 0, 1);
	SetText("Trang_3","de_bai_6",text);
      var delta=soa-sob;
	kq6[0]=soa+"-"+sob+"="+delta;
	kq6[1]=soc;
	kq6[3]=soc-delta;
	kq6[2]=soc+"-"+delta+"="+kq6[3];

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
		diem=diem+0.25;
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
 height: 900 
 });

 var Trang_1 = new Kinetic.Layer({name: 'Trang_1',callback:'Trang_1()',x:0,y:0});
var Trang_1_Backrounnd = CreText('Trang_1_Backrounnd',0,0,640,420,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var tl1_2 = CreText('tl1_2',76,96,203,22,"c. 7 kg",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tl1_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var tl1_1 = CreText('tl1_1',76,75,203,22,"b. 6 kg",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tl1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var tl1_0 = CreText('tl1_0',76,52,203,22,"a. 5 kg",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tl1_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
var check_0 = CreText('check_0',73,56,14,15,"c",'#000000','#000000','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#ffffff','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_4 = CreText('Text_4',364,110,174,20,"",'rgba(0,0,0,0)','#ffffff','#282828','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','10','11',3,'#282828','#000000','0','1','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',481,98,113,21,"",'#ffad5b','#ffad5b','#000000','#ffffff','',16,'Arial','Normal','center','middle',1,'0.00','0','0',1,'#009300','#ffad5b','0','1','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var tl1a_0 = CreText('tl1a_0',308,98,113,21,"",'#ffad5b','#ffad5b','#000000','#ffffff','',16,'Arial','Normal','center','middle',1,'0.00','0','0',1,'#009300','#ffad5b','0','1','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var y1_1 = CreText('y1_1',492,73,35,35,"2kg",'#ffffff','#ffad5b','#000000','#ffffff','',14,'Arial','Normal','center','middle',8,'0.00','18','34',1,'#000000','#c0c0c0','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai1a = CreText('bai1a',14,21,556,26,"Bài 1: Cái cặp nặng bao nhiêu ki-lô-gam?",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','bottom',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var de = CreText('de',118,1,432,26,"ĐỀ THI KIỂM TRA GIỮA HỌC KỲ I, TOÁN LỚP 2",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var de_bai = CreText('de_bai',14,153,391,25,"Bài 2: Đặt rồi tính",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','8','0',0,'rgba(0,0,0,0)','rgba(102,102,102,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai2_1 = CreText('bai2_1',202,185,107,19,"42\r\n16\r\n58",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var gach_0 = CreText('gach_0',116,249,45,1,"",'#000000','#000000','#000000','#000000','',16,'Arial','Normal','right','bottom',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dau_0 = CreText('dau_0',110,213,23,21,"+",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dau_1 = CreText('dau_1',219,213,23,21,"+",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dau_2 = CreText('dau_2',324,213,23,21,"+",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dau_3 = CreText('dau_3',433,213,23,21,"+",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai2_0 = CreText('bai2_0',79,185,107,19,"3+21",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai2_2 = CreText('bai2_2',309,186,107,19,"42\r\n16\r\n58",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai2_3 = CreText('bai2_3',415,183,107,19,"42\r\n16\r\n58",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var gach_1 = CreText('gach_1',227,249,45,1,"",'#000000','#000000','#000000','#000000','',16,'Arial','Normal','right','bottom',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var gach_2 = CreText('gach_2',334,249,45,1,"",'#000000','#000000','#000000','#000000','',16,'Arial','Normal','right','bottom',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var gach_3 = CreText('gach_3',445,249,45,1,"",'#000000','#000000','#000000','#000000','',16,'Arial','Normal','right','bottom',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var thuong_so_0 = CreText('thuong_so_0',132,254,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','bottom',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
thuong_so_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var thuong_so_1 = CreText('thuong_so_1',237,254,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
thuong_so_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var thuong_so_2 = CreText('thuong_so_2',345,254,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
thuong_so_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var thuong_so_3 = CreText('thuong_so_3',455,254,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
thuong_so_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var so_bi_tru_3 = CreText('so_bi_tru_3',455,225,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_bi_tru_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var so_bi_tru_2 = CreText('so_bi_tru_2',345,225,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_bi_tru_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var so_bi_tru_1 = CreText('so_bi_tru_1',237,225,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_bi_tru_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var so_bi_tru_0 = CreText('so_bi_tru_0',132,225,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','bottom',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_bi_tru_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var so_tru_3 = CreText('so_tru_3',455,204,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_tru_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var so_tru_2 = CreText('so_tru_2',345,204,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_tru_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var so_tru_1 = CreText('so_tru_1',237,204,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_tru_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var so_tru_0 = CreText('so_tru_0',132,204,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','bottom',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_tru_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var cap = CreText('cap',305,41,73,73,"",'#ffad5b','#ffffff','#000000','#ffffff','ID_IMAGE3.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ff6820','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var y1_0 = CreText('y1_0',546,55,36,53,"3kg",'#ffffff','#0000ff','#000000','#ffffff','',14,'Arial','Normal','center','middle',8,'0.00','15','35',1,'#000000','#c0c0c0','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var y1_2 = CreText('y1_2',383,72,32,36,"1kg",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',8,'0.00','33','49',1,'#000000','#c0c0c0','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',433,129,38,27,"",'#666666','#009300','#000000','#ffffff','',16,'Arial','Normal','center','middle',4,'0.00','50','0',1,'#666666','#666666','0','1','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_15 = CreText('Text_15',14,302,139,25,"Bài 3: Tính:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Bai3();
InvalidateObj("Trang_1","");
  return;
}
 );
var bai3_0 = CreText('bai3_0',158,310,78,19,"3+21",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','right','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai3_1 = CreText('bai3_1',158,332,78,19,"42\r\n16\r\n58",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','right','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai3_2 = CreText('bai3_2',158,354,78,19,"42\r\n16\r\n58",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','right','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai3_3 = CreText('bai3_3',158,377,78,19,"42\r\n16\r\n58",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','right','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai3_4 = CreText('bai3_4',378,306,91,19,"3+21",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','right','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai3_5 = CreText('bai3_5',378,328,91,19,"42\r\n16\r\n58",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','right','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai3_6 = CreText('bai3_6',378,350,91,19,"42\r\n16\r\n58",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','right','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai3_7 = CreText('bai3_7',378,373,91,19,"42\r\n16\r\n58",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','right','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var tl3_0 = CreText('tl3_0',252,310,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','bottom',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tl3_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var tl3_1 = CreText('tl3_1',252,332,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tl3_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var tl3_2 = CreText('tl3_2',252,354,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tl3_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var tl3_3 = CreText('tl3_3',252,377,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tl3_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var tl3_4 = CreText('tl3_4',485,306,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','bottom',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tl3_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var tl3_5 = CreText('tl3_5',485,328,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tl3_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var tl3_6 = CreText('tl3_6',485,350,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tl3_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var tl3_7 = CreText('tl3_7',485,373,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tl3_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var bg_key = CreText('bg_key',0,-2,129,158,"0",'#e5e5e5','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#000000','#e5e5e5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _0 = CreText('_0',5,2,35,21,"0",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var clear_one = CreText('clear_one',47,2,35,21,"←",'#ffc0cb','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffe4e1','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
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
var clear_all = CreText('clear_all',89,2,35,21,"C",'#ffc0cb','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffe4e1','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
clear_all.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
      keyNewValue = "";
	SetText("",objectShowKey,"");
	InvalidateObj("",objectShowKey);;
  return;
}
 );
var _1 = CreText('_1',5,28,35,21,"1",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _2 = CreText('_2',47,28,35,21,"2",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _3 = CreText('_3',89,28,35,21,"3",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _4 = CreText('_4',5,54,35,21,"4",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _5 = CreText('_5',47,54,35,21,"5",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _6 = CreText('_6',89,54,35,21,"6",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _9 = CreText('_9',89,80,35,21,"9",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _8 = CreText('_8',47,80,35,21,"8",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _7 = CreText('_7',5,80,35,21,"7",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_lon = CreText('dau_lon',5,105,35,21,">",'#afeeee','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
dau_lon.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_bang = CreText('dau_bang',47,106,35,21,"=",'#afeeee','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
dau_bang.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_be = CreText('dau_be',88,106,35,21,"<",'#afeeee','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
dau_be.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var ok = CreText('ok',46,131,77,21,"Đồng ý",'#98fb98','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e0fee0','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
ok.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
var huy = CreText('huy',4,131,35,21,"Hủy",'#ffc0cb','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffe4e1','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
huy.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetText("",objectShowKey,keyOldValue);
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:133,height:162});
Group_1.add(bg_key,_0,clear_one,clear_all,_1,_2,_3,_4,_5,_6,_9,_8,_7,dau_lon,dau_bang,dau_be,ok,huy);
Trang_1.add(Trang_1_Backrounnd,tl1_2,tl1_1,tl1_0,check_0,Text_4,Text_2,tl1a_0,y1_1,bai1a,de,de_bai,bai2_1,gach_0,dau_0,dau_1,dau_2,dau_3,bai2_0,bai2_2,bai2_3,gach_1,gach_2,gach_3,thuong_so_0,thuong_so_1,thuong_so_2,thuong_so_3,so_bi_tru_3,so_bi_tru_2,so_bi_tru_1,so_bi_tru_0,so_tru_3,so_tru_2,so_tru_1,so_tru_0,cap,y1_0,y1_2,Text_1,Text_15,bai3_0,bai3_1,bai3_2,bai3_3,bai3_4,bai3_5,bai3_6,bai3_7,tl3_0,tl3_1,tl3_2,tl3_3,tl3_4,tl3_5,tl3_6,tl3_7,Group_1);
stage.add(Trang_1);

 var Trang_3 = new Kinetic.Layer({name: 'Trang_3',callback:'Trang_3()',x:0,y:420});
var Trang_3_Backrounnd = CreText('Trang_3_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
var Text_3 = CreText('Text_3',63,359,547,116,"Số tuổi mẹ hơn con:.....................tuổi (là số không đổi)\r\nKhi mẹ:......tuổi thì con là:.........................tuổi.\r\n\r\n                                       Đáp số:.....tuổi\r\n",'rgba(0,0,0,0)','#ffffff','#000000','#0000ff','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.70);
var Text_1 = CreText('Text_1',405,238,125,50,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#282828','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',405,238,125,50,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',4,'0.00','50','0',1,'#282828','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var text_tam = CreText('text_tam',65,77,502,126,"Khối lớp Một có: ...... học sinh\r\nKhối lớp Hai ít hơn khối lớp Một: ...... học sinh.\r\nVậy khối lớp Hai có  ........................... học sinh.(làm phép toán)\r\n\r\n                                           Đáp số: .......",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.70);
var DrawText_4 = CreText('DrawText_4',405,215,124,23,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','32','0',1,'#282828','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai4_3 = CreText('bai4_3',325,142,36,25,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','bottom',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai4_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var cau_hoi = CreText('cau_hoi',67,11,552,65,"Khối lớp Một có  ... học sinh. Khối lớp Hai ít hơn khối lớp Một ... học sinh. Hỏi khối lớp Hai có bao nhiêu học sinh?",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.70);
var bai_giai = CreText('bai_giai',216,50,101,27,"Bài giải:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Italic','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai4_1 = CreText('bai4_1',309,85,36,26,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','bottom',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai4_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var bai4_0 = CreText('bai4_0',187,68,36,25,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','bottom',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai4_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var bai4_2 = CreText('bai4_2',224,111,116,22,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','bottom',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai4_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var bai_4 = CreText('bai_4',8,10,54,22,"Bài 4:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','left','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bai_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Bai4();
InvalidateObj("Trang_3","");
  return;
}
 );
var DrawText_1 = CreText('DrawText_1',11,218,54,22,"Bài 5:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','left','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_2 = CreText('DrawText_2',71,219,328,90,"Viết số thích hợp vào dấu chấm.\r\nHình vẽ bên có:\r\na). Có ...... hình chữ nhật\r\nb). Có ...... hình tứ giác.\r\n",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','left','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai5_0 = CreText('bai5_0',120,254,37,20,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bai5_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var de_bai_6 = CreText('de_bai_6',65,312,627,27,"Khi mẹ ... tuổi, thì con được ... tuổi. Hỏi lúc mẹ ... tuổi thì con mấy tuổi?",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var tl6_0 = CreText('tl6_0',215,353,115,20,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','bottom',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
tl6_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var tl6_1 = CreText('tl6_1',118,373,33,20,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','bottom',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
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
var bai5_1 = CreText('bai5_1',120,273,37,20,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bai5_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var DrawText_6 = CreText('DrawText_6',200,336,130,21,"Bài giải:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Italic','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var vi_du = CreText('vi_du',213,246,125,29,"(ví dụ: 10-5=5)",'rgba(0,0,0,0)','#ffffff','#7f7f7f','#7f7f7f','',12,'Arial','Italic','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var m_diem = CreText('m_diem',213,175,252,141,"8",'rgba(230,230,230,1.11)','#ffffff','#0080ff','#ffffff','',48,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','rgba(230,230,230,1.11)','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var label = CreText('label',234,201,201,24,"Bạn được",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_lam_lai = CreText('bt_lam_lai',274,274,125,31,"Làm Lại",'#0080c0','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#4fa7ff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var t_mess = CreText('t_mess',213,175,252,21,"Thông báo điểm",'rgba(127,127,127,1.11)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',1,'#ffffff','rgba(40,40,40,1.11)','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bang_diem = new Kinetic.Group({name:'bang_diem',x:0,y:0,width:256,height:145});
bang_diem.add(vi_du,m_diem,label,bt_lam_lai,t_mess);
var tl6_2 = CreText('tl6_2',253,373,134,19,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','bottom',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
tl6_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var tl6_3 = CreText('tl6_3',298,411,33,20,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','bottom',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
tl6_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var bg_key = CreText('bg_key',-1,-1,129,158,"0",'#e5e5e5','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#000000','#e5e5e5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _0 = CreText('_0',4,3,35,21,"0",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var clear_one = CreText('clear_one',46,3,35,21,"←",'#ffc0cb','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffe4e1','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
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
var clear_all = CreText('clear_all',88,3,35,21,"C",'#ffc0cb','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffe4e1','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
clear_all.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
      keyNewValue = "";
	SetText("",objectShowKey,"");
	InvalidateObj("",objectShowKey);;
  return;
}
 );
var _1 = CreText('_1',4,29,35,21,"1",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _2 = CreText('_2',46,29,35,21,"2",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _3 = CreText('_3',88,29,35,21,"3",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _4 = CreText('_4',4,55,35,21,"4",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _5 = CreText('_5',46,55,35,21,"5",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _6 = CreText('_6',88,55,35,21,"6",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _9 = CreText('_9',88,81,35,21,"9",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _8 = CreText('_8',46,81,35,21,"8",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _7 = CreText('_7',4,81,35,21,"7",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_lon = CreText('dau_lon',4,107,35,21,"-",'#afeeee','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
dau_lon.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_bang = CreText('dau_bang',46,107,35,21,"=",'#afeeee','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
dau_bang.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_be = CreText('dau_be',87,107,35,21,"+",'#afeeee','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
dau_be.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var ok = CreText('ok',45,132,77,21,"Đồng ý",'#98fb98','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e0fee0','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
ok.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
var huy = CreText('huy',3,132,35,21,"Hủy",'#ffc0cb','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffe4e1','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
huy.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetText("",objectShowKey,keyOldValue);
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:133,height:162});
Group_1.add(bg_key,_0,clear_one,clear_all,_1,_2,_3,_4,_5,_6,_9,_8,_7,dau_lon,dau_bang,dau_be,ok,huy);
var Text_4 = CreText('Text_4',11,312,54,22,"Bài 6:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Trang_3.add(Trang_3_Backrounnd,Text_3,Text_1,Text_2,text_tam,DrawText_4,bai4_3,cau_hoi,bai_giai,bai4_1,bai4_0,bai4_2,bai_4,DrawText_1,DrawText_2,bai5_0,de_bai_6,tl6_0,tl6_1,nop_bai,bai5_1,DrawText_6,bang_diem,tl6_2,tl6_3,Group_1,Text_4);
stage.add(Trang_3);
InitLacVietScript();
};
