folder_Resource ='data/De_cuong_on_tap_giua_hk1(dang_3)'
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
var m_limit=20;
var arKq1=[0,0,0,0,0];

function ChonSo(){
	var tt = GetText("Trang_1","");
	if(tt=="" || tt== "S")
		SetText("","","Đ");
	else SetText("","","S");
	InvalidateObj("","");
}
function Bai1()
{
  var limit=90;
GetVer();
  for(var i=0;i<6;i++)	
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
			SetText("Trang_1","dau1_"+i,"+");
			}
		else //-
			{
			while(a-b<9 || a%10 < b%10)
			{
				a= Random(limit)+10;
				b= Random(limit*0.7)+10;
			}
			da=a-b;
			SetText("Trang_1","dau1_"+i,"-");
			}
		phep= Random(3);
		if(phep==2)
			{
			da=da-1;
			arKq1[i]="S";
			}
		else arKq1[i]="Đ";
		SetText("Trang_1","bai1_"+i,a+"\n"+b + "\n"+da);
		SetText("Trang_1","tl1_"+i,"");
		SetBorder("Trang_1","tl1_"+i,"#0000ff",1);
		SetFontColor("Trang_1","tl1_"+i,"#000000");
	}
}


function DiemBai1(){
	var m_diem=0;
	for(var i=0; i< 6; i++)
		{
		if(arKq1[i]== GetText("Trang_1","tl1_"+i))
		{
		   	m_diem=m_diem+0.25;
			SetBorder("Trang_1","tl1_"+i,"#00ff00");
		}
		else	SetBorder("Trang_1","tl1_"+i,"#ff0000");
	}
	return m_diem;
}
var aKq2=[0,0,0,0,0];
var bKq2=[0,0,0,0,0];
var Kq2=[0,0,0,0,0];
function Bai2()
{
  var limit=90;
  for(var i=0;i<4;i++)	
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
			SetText("Trang_1","dau2_"+i,"+");
			SetText("Trang_1","bai2_"+i,a+" + "+b);
			}
		else //-
			{
			while(a-b<9 || a%10 < b%10)
			{
				a= Random(limit)+10;
				b= Random(limit*0.7)+10;
			}
			da=a-b;
			SetText("Trang_1","dau2_"+i,"-");
			SetText("Trang_1","bai2_"+i,a+" - "+b);
			}
		aKq2[i]=a;
		bKq2[i]=b;
		Kq2[i]=da;
		SetText("Trang_1","so_tru_"+i,"");
		SetText("Trang_1","so_bi_tru_"+i,"");
		SetText("Trang_1","thuong_so_"+i,"");
		SetBorder("Trang_1","thuong_so_"+i,"#000000",1);
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
		SetBorder("Trang_1","tl3_"+i,"#0000ff",1);
		SetBorder("Trang_1","bai3_"+i,"#000000",0);
	}
}

function DiemBai3(){
	var m_diem=0;
	for(var i=0; i< 8; i++)
		{
		if(Kq3[i]== GetText("Trang_1","tl3_"+i))
		{
		   	m_diem=m_diem+0.5;
			SetBorder("Trang_1","tl3_"+i,"#00ff00",1);
		}
		else	SetBorder("Trang_1","tl3_"+i,"#ff0000",1);
	}
	return m_diem;
}
var kq4=[4,11,18,25];
function Bai4(){
	
	var limit=90;
	var soa= Random(limit)+10;
	var sob= Random(limit*0.3)+1;
	SetText("Trang_2","so_a",soa+" người");
	SetText("Trang_2","so_b",sob+ " người");
kq4[0]=soa;	
kq4[1]=sob;	
kq4[3]=soa+sob;	
kq4[2]=soa+"+"+sob+"="+kq4[3];
    for(var i=0;i<4;i++){
        SetText("Trang_2","tl4_"+i,"");
	  SetFontColor("Trang_2","tl4_"+i,"#0000ff");
	  }
}
function DiemBai4(){
   var diem=0;//max 1diem
for(var i=0;i<4;i++)
{
  if(GetText("Trang_2","tl4_"+i)==kq4[i]){
		diem=diem+0.5;
	  	SetFontColor("Trang_2","tl4_"+i,"#00ff00",1);
		}
	  else SetFontColor("Trang_2","tl4_"+i,"#ff0000",1);	
	  }
return diem;
}

var kq5=[2,4];
function Bai5(){
	SetText("Trang_2","tl5_0","");
	SetText("Trang_2","tl5_1","");
	SetFontColor("Trang_2","tl5_0","#0000ff");
	SetFontColor("Trang_2","tl5_1","#0000ff");		
}
function DiemBai5(){
   var diem=0;
        if(GetText("Trang_2","tl5_0")==kq5[0]){
		diem=diem+0.5;
	  	SetFontColor("Trang_2","bai5_0","#00ff00");
		}
	  else SetFontColor("Trang_2","bai5_0","#ff0000");	
  if(GetText("Trang_2","tl5_1")==kq5[1]){
		diem=diem+1;
	  	SetFontColor("Trang_2","bai5_1","#00ff00");
		}
	  else SetFontColor("Trang_2","bai5_1","#ff0000");	

return diem;
}
function Bai6(){
	for(var i=0;i<6;i++){
	SetText("Trang_2","tl6_"+i,"");
	SetFontColor("Trang_2","tl6_"+i,"#0000ff");
	}
	SetShowObject("Trang_2","help",0);

}
function DiemBai6(){
var kq6=[0,0,0,0,0];
var b= true;
var s=0;
for(var i=0;i<6;i++)
	{
	kq6[i]= GetText("Trang_2","tl6_"+i);
	 if(kq6[i]>6)
		b= false;
	s=s+kq6[i];
	}

   if(b== true && s==21 && kq6[0]+kq6[1]+kq6[2]==9 && kq6[2]+kq6[3]+kq6[4]==9 && kq6[4]+kq6[5]+kq6[0]==9)
	{
	for(var i=0;i<6;i++)
	SetFontColor("Trang_2","tl6_"+i,"#00ff00");
	return 1;
	}
   else {
	for(var i=0;i<6;i++)
	SetFontColor("Trang_2","tl6_"+i,"#ff0000");
	SetShowObject("Trang_2","help",1);
	return 0;
	}
}
function Trang_1()
{
SetShowObject("Trang_1","Group_1",0);
Bai1();
Bai2();
Bai3();
InvalidateObj("Trang_1","");
  return;
}

function Trang_2()
{
SetShowObject("Trang_2","Group_1",0);
SetShowObject("Trang_2","bang_diem",0);
SetMoveView("Trang_2","bang_diem",1);
SetShowObject("Trang_2","nop_bai",1);
Bai4();
Bai5();
Bai6();
InvalidateObj("Trang_2","");
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
var Trang_1_Backrounnd = CreText('Trang_1_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
var Text_3 = CreText('Text_3',32,438,54,25,"Bài 4:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Bold','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Bai2();
InvalidateObj("Trang_1","");
  return;
}
 );
var Text_5 = CreText('Text_5',88,438,391,25,"Giải bài toán theo sơ đồ sau:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','8','0',1,'#ffffff','rgba(102,102,102,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai1_1 = CreText('bai1_1',179,62,29,70,"42\r\n16\r\n58",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','right','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var gach_0 = CreText('gach_0',111,104,45,1,"",'#000000','#000000','#000000','#000000','',16,'Arial','Normal','right','bottom',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dau1_0 = CreText('dau1_0',101,80,23,21,"+",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','bottom',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dau1_1 = CreText('dau1_1',170,80,23,21,"+",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','bottom',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dau1_2 = CreText('dau1_2',239,80,23,21,"+",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','bottom',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dau1_3 = CreText('dau1_3',308,80,23,21,"+",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','bottom',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dau1_4 = CreText('dau1_4',377,80,23,21,"+",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','bottom',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dau1_5 = CreText('dau1_5',447,80,23,21,"+",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','bottom',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai1_0 = CreText('bai1_0',114,62,29,70,"42\r\n16\r\n58",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','right','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai1_2 = CreText('bai1_2',249,62,29,70,"42\r\n16\r\n58",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','right','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai1_3 = CreText('bai1_3',319,62,29,70,"42\r\n16\r\n58",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','right','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai1_4 = CreText('bai1_4',389,62,29,70,"42\r\n16\r\n58",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','right','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai1_5 = CreText('bai1_5',463,62,29,70,"42\r\n16\r\n58",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','right','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var gach_1 = CreText('gach_1',182,104,45,1,"",'#000000','#000000','#000000','#000000','',16,'Arial','Normal','right','bottom',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var gach_2 = CreText('gach_2',253,104,45,1,"",'#000000','#000000','#000000','#000000','',16,'Arial','Normal','right','bottom',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var gach_3 = CreText('gach_3',324,104,45,1,"",'#000000','#000000','#000000','#000000','',16,'Arial','Normal','right','bottom',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var gach_4 = CreText('gach_4',395,104,45,1,"",'#000000','#000000','#000000','#000000','',16,'Arial','Normal','right','bottom',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var gach_5 = CreText('gach_5',467,104,45,1,"",'#000000','#000000','#000000','#000000','',16,'Arial','Normal','right','bottom',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var tl1_0 = CreText('tl1_0',147,112,21,19,"Đ",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','bottom',0,'0.00','30','30',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tl1_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var tl1_1 = CreText('tl1_1',214,112,21,19,"Đ",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tl1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var tl1_2 = CreText('tl1_2',282,112,21,19,"Đ",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tl1_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var tl1_3 = CreText('tl1_3',352,112,21,19,"Đ",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tl1_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var tl1_4 = CreText('tl1_4',422,112,21,19,"Đ",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tl1_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var tl1_5 = CreText('tl1_5',495,112,21,19,"Đ",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tl1_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var DrawText_1 = CreText('DrawText_1',22,34,54,25,"Bài 1:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Bold','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
DrawText_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Bai1();
InvalidateObj("Trang_1","");
  return;
}
 );
var de_bai = CreText('de_bai',81,35,391,25,"Đúng ghi Đ sai ghi S vào ô trống.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','8','0',1,'rgba(0,0,0,0)','rgba(102,102,102,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var de = CreText('de',200,8,393,26,"ĐỀ KIỂM TRA GIỮA HỌC KỲ 1, TOÁN LỚP 2",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',82,148,391,25,"Đặt rồi tính:",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','8','0',1,'#ffffff','rgba(102,102,102,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',23,147,54,25,"Bài 2:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Bold','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Bai2();
InvalidateObj("Trang_1","");
  return;
}
 );
var bai2_1 = CreText('bai2_1',265,166,73,19,"42\r\n16\r\n58",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_4 = CreText('Text_4',161,230,45,1,"",'#000000','#282828','#000000','#000000','',16,'Arial','Normal','right','bottom',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dau2_0 = CreText('dau2_0',155,194,23,21,"+",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dau2_1 = CreText('dau2_1',268,194,23,21,"+",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dau2_2 = CreText('dau2_2',373,194,23,21,"+",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dau2_3 = CreText('dau2_3',490,194,23,21,"+",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai2_0 = CreText('bai2_0',159,166,73,19,"3+21",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai2_2 = CreText('bai2_2',366,166,73,19,"42\r\n16\r\n58",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai2_3 = CreText('bai2_3',491,166,73,19,"42\r\n16\r\n58",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_12 = CreText('Text_12',276,230,45,1,"",'#000000','#282828','#000000','#000000','',16,'Arial','Normal','right','bottom',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_13 = CreText('Text_13',383,230,45,1,"",'#000000','#282828','#000000','#000000','',16,'Arial','Normal','right','bottom',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_14 = CreText('Text_14',502,230,45,1,"",'#000000','#282828','#000000','#000000','',16,'Arial','Normal','right','bottom',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var thuong_so_0 = CreText('thuong_so_0',177,235,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','bottom',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
thuong_so_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var thuong_so_1 = CreText('thuong_so_1',286,235,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
thuong_so_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var thuong_so_2 = CreText('thuong_so_2',394,235,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
thuong_so_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var thuong_so_3 = CreText('thuong_so_3',512,235,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
thuong_so_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var so_bi_tru_3 = CreText('so_bi_tru_3',512,206,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_bi_tru_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var so_bi_tru_2 = CreText('so_bi_tru_2',394,206,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_bi_tru_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var so_bi_tru_1 = CreText('so_bi_tru_1',286,206,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_bi_tru_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var so_bi_tru_0 = CreText('so_bi_tru_0',177,206,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','bottom',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_bi_tru_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var so_tru_3 = CreText('so_tru_3',512,185,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_tru_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var so_tru_2 = CreText('so_tru_2',394,185,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_tru_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var so_tru_1 = CreText('so_tru_1',286,185,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_tru_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var so_tru_0 = CreText('so_tru_0',177,185,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','bottom',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_tru_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var Text_15 = CreText('Text_15',27,287,139,25,"Bài 3: Tính:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Bold','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Bai3();
InvalidateObj("Trang_1","");
  return;
}
 );
var bai3_0 = CreText('bai3_0',143,295,78,19,"3+21",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','right','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai3_1 = CreText('bai3_1',143,317,78,19,"42\r\n16\r\n58",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','right','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai3_2 = CreText('bai3_2',143,339,78,19,"42\r\n16\r\n58",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','right','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai3_3 = CreText('bai3_3',143,362,78,19,"42\r\n16\r\n58",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','right','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai3_4 = CreText('bai3_4',363,291,91,19,"3+21",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','right','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai3_5 = CreText('bai3_5',363,313,91,19,"42\r\n16\r\n58",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','right','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai3_6 = CreText('bai3_6',363,335,91,19,"42\r\n16\r\n58",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','right','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai3_7 = CreText('bai3_7',363,358,91,19,"42\r\n16\r\n58",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','right','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var tl3_0 = CreText('tl3_0',237,295,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','bottom',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tl3_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var tl3_1 = CreText('tl3_1',237,317,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tl3_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var tl3_2 = CreText('tl3_2',237,339,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tl3_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var tl3_3 = CreText('tl3_3',237,362,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tl3_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var tl3_4 = CreText('tl3_4',470,291,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','bottom',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tl3_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var tl3_5 = CreText('tl3_5',470,313,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tl3_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var tl3_6 = CreText('tl3_6',470,335,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tl3_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var tl3_7 = CreText('tl3_7',470,358,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tl3_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var DrawText_10 = CreText('DrawText_10',3,18,54,26,"Bài 1:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Bold','left','bottom',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
DrawText_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Bai1();
InvalidateObj("Trang_1","");
  return;
}
 );
var _0 = CreText('_0',0,-3,31,22,"0",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var clear_one = CreText('clear_one',31,-3,27,22,"←",'#ffc0cb','#ffffff','#000000','#ffffff','',14,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffe4e1','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
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
var clear_all = CreText('clear_all',58,-3,27,22,"C",'#ffc0cb','#ffffff','#000000','#ffffff','',14,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffe4e1','3','1','rgba(0,0,0,0)','0','0','4','0',2,0, 'rgba(0,0,0,0)',0,1.50);
clear_all.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
      keyNewValue = "";
	SetText("",objectShowKey,"");
	InvalidateObj("",objectShowKey);;
  return;
}
 );
var _1 = CreText('_1',0,19,31,22,"1",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _2 = CreText('_2',31,19,27,22,"2",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _3 = CreText('_3',58,19,27,22,"3",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',2,0, 'rgba(0,0,0,0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _4 = CreText('_4',0,41,31,22,"4",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _5 = CreText('_5',31,41,27,22,"5",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _6 = CreText('_6',58,41,27,22,"6",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',2,0, 'rgba(0,0,0,0)',0,1.50);
_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _7 = CreText('_7',0,63,31,22,"7",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _8 = CreText('_8',31,63,27,22,"8",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _9 = CreText('_9',58,63,27,22,"9",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',2,0, 'rgba(0,0,0,0)',0,1.50);
_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_lon = CreText('dau_lon',0,85,31,22,">",'#afeeee','#ffffff','#000000','#ffffff','',14,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
dau_lon.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_bang = CreText('dau_bang',31,85,27,22,"=",'#afeeee','#ffffff','#000000','#ffffff','',14,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
dau_bang.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_be = CreText('dau_be',58,85,27,22,"<",'#afeeee','#ffffff','#000000','#ffffff','',14,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
dau_be.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var huy = CreText('huy',0,108,40,22,"Hủy",'#ffc0cb','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffe4e1','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
huy.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetText("",objectShowKey,keyOldValue);
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
var ok = CreText('ok',40,108,45,22,"Đồng ý",'#98fb98','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#e0fee0','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
ok.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:89,height:137});
Group_1.add(DrawText_10,_0,clear_one,clear_all,_1,_2,_3,_4,_5,_6,_7,_8,_9,dau_lon,dau_bang,dau_be,huy,ok);
Trang_1.add(Trang_1_Backrounnd,Text_3,Text_5,bai1_1,gach_0,dau1_0,dau1_1,dau1_2,dau1_3,dau1_4,dau1_5,bai1_0,bai1_2,bai1_3,bai1_4,bai1_5,gach_1,gach_2,gach_3,gach_4,gach_5,tl1_0,tl1_1,tl1_2,tl1_3,tl1_4,tl1_5,DrawText_1,de_bai,de,Text_1,Text_2,bai2_1,Text_4,dau2_0,dau2_1,dau2_2,dau2_3,bai2_0,bai2_2,bai2_3,Text_12,Text_13,Text_14,thuong_so_0,thuong_so_1,thuong_so_2,thuong_so_3,so_bi_tru_3,so_bi_tru_2,so_bi_tru_1,so_bi_tru_0,so_tru_3,so_tru_2,so_tru_1,so_tru_0,Text_15,bai3_0,bai3_1,bai3_2,bai3_3,bai3_4,bai3_5,bai3_6,bai3_7,tl3_0,tl3_1,tl3_2,tl3_3,tl3_4,tl3_5,tl3_6,tl3_7,Group_1);
stage.add(Trang_1);

 var Trang_2 = new Kinetic.Layer({name: 'Trang_2',callback:'Trang_2()',x:0,y:480});
var Trang_2_Backrounnd = CreText('Trang_2_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
var Text_5 = CreText('Text_5',87,115,492,73,"Đội 1 có : ...... người.\r\nĐội 2 nhiều hơn đội 1: ...... người.\r\nCả hai đội có ......................... người.\r\n                                                 Đáp số:......",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var help = CreText('help',80,338,279,71,"- Tổng các số đã cho là 21\r\n- Tổng các số ở ba cạnh tam giác là 27\r\n- Các số ở đỉnh được tính 2 lần(27-21=6)\r\n- Vậy tổng các số ở đỉnh là 1+2+3=6\r\n- Ta có: 1+6+2=1+5+3=2+4+3\r\n",'rgba(0,0,0,0)','#ffffff','#009300','#ffffff','',12,'Arial','Italic','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Image_1 = CreText('Image_1',80,13,235,64,'','rgba(0,0,0,0)','','','','ID_IMAGE1.JPG',0,'','','','',0,'0.00','30','30',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var so_a = CreText('so_a',153,0,108,18,"27 người",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so_b = CreText('so_b',271,28,66,18,"27 người",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_4 = CreText('Text_4',120,85,139,25,"Bài giải",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var tl4_0 = CreText('tl4_0',153,107,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tl4_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var tl4_1 = CreText('tl4_1',238,125,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tl4_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var tl4_2 = CreText('tl4_2',178,142,97,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tl4_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var tl4_3 = CreText('tl4_3',338,161,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tl4_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var Text_3 = CreText('Text_3',31,184,54,25,"Bài 5:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Bold','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Bai2();
InvalidateObj("Trang_1","");
  return;
}
 );
var Text_6 = CreText('Text_6',85,189,273,74,"Viết số vào dấu chấm:\r\nHình vẽ bên có: ...... hình tứ giác\r\nHình vẽ bên có: ...... hình tam giác\r\n\r\n",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',3,'0.00','8','0',1,'#ffffff','rgba(102,102,102,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_7 = CreText('Text_7',382,188,175,73,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',6,'0.00','18','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_8 = CreText('Text_8',414,189,111,72,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',4,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var tl5_0 = CreText('tl5_0',192,201,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','bottom',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tl5_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var tl5_1 = CreText('tl5_1',192,216,27,19,"Đ",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tl5_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var Text_9 = CreText('Text_9',31,265,54,25,"Bài 6:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Bold','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Bai2();
InvalidateObj("Trang_1","");
  return;
}
 );
var Text_10 = CreText('Text_10',83,270,234,67,"Viết các số 1; 2; 3; 4; 5; 6. vào mỗi ô trống trên hình tam giác bên dưới sao cho tổng các số trên mỗi cạnh của hình tam giác đều bằng 9.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',3,'0.00','8','0',1,'#ffffff','rgba(102,102,102,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_11 = CreText('Text_11',345,285,142,97,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',4,'0.00','49','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var tl6_0 = CreText('tl6_0',406,278,24,25,"1",'#ffffff','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','bottom',2,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tl6_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var tl6_1 = CreText('tl6_1',371,324,24,25,"6",'#ffffff','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tl6_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var tl6_2 = CreText('tl6_2',341,369,24,25,"2",'#ffffff','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tl6_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var tl6_5 = CreText('tl6_5',439,324,24,25,"5",'#ffffff','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tl6_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var tl6_3 = CreText('tl6_3',402,369,24,25,"4",'#ffffff','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','bottom',2,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tl6_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var tl6_4 = CreText('tl6_4',473,369,24,25,"3",'#ffffff','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
tl6_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var _0 = CreText('_0',3,2,31,22,"0",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var clear_one = CreText('clear_one',34,2,27,22,"←",'#ffc0cb','#ffffff','#000000','#000000','',14,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffe4e1','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
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
var clear_all = CreText('clear_all',61,2,27,22,"C",'#ffc0cb','#ffffff','#000000','#000000','',14,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffe4e1','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
clear_all.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
      keyNewValue = "";
	SetText("",objectShowKey,"");
	InvalidateObj("",objectShowKey);;
  return;
}
 );
var _1 = CreText('_1',3,24,31,22,"1",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _2 = CreText('_2',34,24,27,22,"2",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _3 = CreText('_3',61,24,27,22,"3",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _4 = CreText('_4',3,46,31,22,"4",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _5 = CreText('_5',34,46,27,22,"5",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _6 = CreText('_6',61,46,27,22,"6",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _7 = CreText('_7',3,68,31,22,"7",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _8 = CreText('_8',34,68,27,22,"8",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _9 = CreText('_9',61,68,27,22,"9",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_lon = CreText('dau_lon',3,90,31,22,"+",'#c0c0c0','#ffffff','#000000','#ffffff','',14,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
dau_lon.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_bang = CreText('dau_bang',34,90,27,22,"=",'#c0c0c0','#ffffff','#000000','#ffffff','',14,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
dau_bang.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_be = CreText('dau_be',61,90,27,22,"-",'#c0c0c0','#ffffff','#000000','#ffffff','',14,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
dau_be.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var huy = CreText('huy',3,112,31,22,"Hủy",'#ffc0cb','#ffffff','#000000','#ffffff','',11,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
huy.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetText("",objectShowKey,keyOldValue);
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
var ok = CreText('ok',34,112,54,22,"Đồng ý",'#98fb98','#ffffff','#000000','#ffffff','',11,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
ok.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:89,height:136});
Group_1.add(_0,clear_one,clear_all,_1,_2,_3,_4,_5,_6,_7,_8,_9,dau_lon,dau_bang,dau_be,huy,ok);
var m_diem = CreText('m_diem',177,182,252,141,"8",'rgba(230,230,230,1.11)','#ffffff','#0080ff','#ffffff','',48,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','rgba(230,230,230,1.11)','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_lam_lai = CreText('bt_lam_lai',237,281,125,31,"Làm Lại",'#0080c0','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#4fa7ff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Bai1();
Bai2();
Bai3();
Bai4();
Bai5();
Bai6();
SetShowObject("Trang_2","bang_diem",0);
SetShowObject("Trang_2","nop_bai",1);
InvalidateObj("Trang_2","");
InvalidateObj("Trang_2","");
InvalidateObj("Trang_2","");
  return;
}
 );
var label = CreText('label',197,208,201,24,"Bạn được",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var t_mess = CreText('t_mess',177,182,252,21,"Thông báo điểm",'rgba(127,127,127,1.11)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',1,'#ffffff','rgba(40,40,40,1.11)','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var nop_bai = CreText('nop_bai',293,436,89,29,"Nộp Bài",'#8b0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#ff0000','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
nop_bai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var diem= DiemBai1()+ DiemBai2()+DiemBai3()+DiemBai4()+DiemBai5()+DiemBai6();
UpdateScore(diem);
if(diem>10) diem=10;
SetText("Trang_2","m_diem",diem);
SetShowObject("Trang_2","bang_diem",1);
SetShowObject("Trang_2","nop_bai",0);
InvalidateObj("Trang_2","");
InvalidateObj("Trang_1","");
  return;
}
 );
var bang_diem = new Kinetic.Group({name:'bang_diem',x:0,y:0,width:256,height:145});
bang_diem.add(m_diem,t_mess,label,bt_lam_lai);
Trang_2.add(Trang_2_Backrounnd,Text_5,help,Image_1,so_a,so_b,Text_4,tl4_0,tl4_1,tl4_2,tl4_3,Text_3,Text_6,Text_7,Text_8,tl5_0,tl5_1,Text_9,Text_10,Text_11,tl6_0,tl6_1,tl6_2,tl6_5,tl6_3,tl6_4,Group_1,nop_bai,bang_diem);
stage.add(Trang_2);
InitLacVietScript();
};
