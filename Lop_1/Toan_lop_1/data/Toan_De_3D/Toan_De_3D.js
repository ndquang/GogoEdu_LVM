folder_Resource ='data/Toan_De_3D'
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
AddObjToCurentPage("Group_1");
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
var arKq1=[0,0,0,0,0];
var arTam=[0,0,0,0,0];
function  CreateRam( m_size){
   var Count = 0;
   for (var i = 0; i < 5 ; i++)
   {
    var bb = true;
    var iNN ;
    while (bb)
    {
    iNN = Random(m_size)+1;
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

function Bai1()
{
	SetShowObject("Trang_1","Group_1",0);
	CreateRam(12);
	for(var i=0;i<5;i++)	
	{
		var a= arTam[i];
		RotateObj("Trang_1","kim_gio"+i,a*30);
		SetText("Trang_1","so_"+i,"");
		arKq1[i]=a;
		SetBorder("Trang_1","so_"+i,"#000000",1);
		SetFontColor("Trang_1","so_"+i,"#0000ff");
	}
	InvalidateObj("Trang_1","");
	GetVer();
}
function DiemBai1(){
	var diem=0;
	for(var i=0;i<5;i++)	
	if(GetText("Trang_1","so_"+i)==arKq1[i]){
		diem=diem+0.2;
		SetBorder("Trang_1","so_"+i,"#00ff00",1);
	}
	else SetBorder("Trang_1","so_"+i,"#ff0000",1);
	return diem;
}
var m_limit=20;
var arKq2=[0,0,0,0,0];

function Bai2()
{
  for(var i=0;i<8;i++)	
	{ 
		if(i<4)m_limit=20;
		else m_limit=10;
		var a= Random(m_limit)+1;
		var b= Random(m_limit)+1;
		var phep= Random(2);
		var da=0;
		if(phep==0){ //+
			while(a+b>m_limit)
			{
				a= Random(m_limit)+1;
				b= Random(m_limit)+1;
			}
			
			if(i>3){
			a=a*10;
			b=b*10;
			}
			da=a+b;
			SetText("Trang_2","bai_"+i,a+" + "+b);
			}
		else //-
			{
			while(a<b || a%10 < b%10)
			{
				a= Random(m_limit)+1;
				b= Random(m_limit)+1;
			}
			if(i>3) {
			a=a*10;
			b=b*10;
			}
			da=a-b;
			SetText("Trang_2","bai_"+i,a+" - "+b);
			}
		arKq2[i]=da;
		SetFontColor("Trang_2","bai_"+i,"#000000");
		SetBorder("Trang_2","bai_"+i,"#000000",1);
	}
  for(var t=0;t<8;t++)
	arTam[t]=arKq2[t];
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
	SetText("Trang_2","ds_"+m,arTam[m]);
      SetColor("Trang_2","obj_paint",-1,-1,-1);
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
function DiemBai2(){
	var m_diem=0;
	for(var i=0; i< 8; i++)
		{
		if(arKq2[i]== arChon[i])
		{
		   	m_diem=m_diem+0.25;
			SetBorder("Trang_2","bai_"+i,"#00ff00");
		}
		else	SetBorder("Trang_2","bai_"+i,"#ff0000");
	}
	return m_diem;
}
var kq3a=[0,0,0,0];
function Bai3a()
{
  var limit=90;
  for(var i=0;i<4;i++)	
	{
		var a= Random(limit)+10;
		var b= Random(limit)+10;
		var phep= Random(2);
		var da=0;
		if(phep==0){ //+
			while(a+b>100 || a%10 + b%10>10)
			{
				a= Random(limit)+10;
				b= Random(limit)+10;
			}
			da=a+b;
			SetText("Trang_2","bai2a_"+i,a+" + "+b + " = ");
			}
		else //-
			{
			while(a<b || a%10 < b%10)
			{
				a= Random(limit)+10;
				b= Random(limit)+10;
			}
			da=a-b;
			SetText("Trang_2","bai2a_"+i,a+" - "+b + " = ");
			}
		SetText("Trang_2","kq2a_"+i,"");
		SetColor("Trang_2","kq2a_"+i,-1,-1,-1);
		SetBorder("Trang_2","kq2a_"+i,"#000000",1);
		SetFontColor("Trang_2","kq2a_"+i,"#0000ff");
		kq3a[i]=da;
	}
}
function Diem3a()
{
var diem=0;
for(var i=0;i<4;i++)
 if(kq3a[i]== GetText("Trang_2","kq2a_"+i))
	{
	diem=diem+0.25;
	SetBorder("Trang_2","kq2a_"+i,"#00ff00");
	}
 else SetBorder("Trang_2","kq2a_"+i,"#ff0000");
return diem;
}
var kq3b=[0,0,0,0];
function Bai3b()
{
var limit=100;
for(var i=0;i<4;i++)	
	{
		var a= Random(limit);
		var b= Random(limit);
		var c= Random(limit);
		var phep1 = Random(2);
		var phep2 = Random(2);
		var kq=0;
		var ab=0;
		var k=0;
		if(phep1==0 && phep2==0){//++
			k= a%10 + b%10;
			while(a+b> limit || k>10 )
			{
				a= Random(limit);
				b= Random(limit);
			      k= a%10 + b%10;
			}
			ab=a+b;
			c= Random(limit-ab);
			k= ab%10 + c%10;
			while(k>10)
			{
			c= Random(limit-ab);
			k= ab%10 + c%10;
			}
			kq =ab+c;
		}
		if(phep1==0 && phep2 ==1){//+-
			k= a%10 + b%10;
			while(a+b> limit || k>10 )
			{
				a= Random(limit);
				b= Random(limit);
			      k= a%10 + b%10;
			}
			ab=a+b;
			c= Random(ab);
			var k= ab%10 - c%10;
			while(k<0)
				{
				c= Random(ab);
			      k= ab%10 - c%10;
				}
			kq =ab-c;
		}
		if(phep1==1 && phep2 ==0){//-+
			var k= a%10 - b%10;
			while(k<0 || a<b)
				{
				a= Random(limit);
				b= Random(limit);
			      k= a%10 - b%10;
				}
			ab=a-b;
			c= Random(limit-ab);
			k= ab%10 + c%10;
			while(k>10)
			{
			c= Random(limit-ab);
			k= ab%10 + c%10;
			}
			kq =ab+c;
		}
		if(phep1==1 && phep2 ==1){//--
			var k= a%10 - b%10;
			while(k<0 || a<b)
				{
				a= Random(limit);
				b= Random(limit);
			      k= a%10 - b%10;
				}
			ab=a-b;
			c= Random(ab);
			k= ab%10 - c%10;
			while(k<0)
				{
				c= Random(ab);
			      k= ab%10 - c%10;
				}
			kq =ab-c;
		}
		kq3b[i]=kq;
            var dau1= " +";
		var dau2= " + ";
		if(phep1==1) dau1= " - ";
		if(phep2==1) dau2= " - "; 
		SetText("Trang_2","bai2b_"+i,a + dau1 + b + dau2+ c + " = ");
		SetText("Trang_2","kq2b_"+i,"");
		SetBorder("Trang_2","kq2b_"+i,"#000000",1);
	}
}
function Diem3b()
{
var diem=0;
for(var i=0;i<4;i++)
 if(kq3b[i]== GetText("Trang_2","kq2b_"+i))
	{
	diem=diem+0.25;
	SetBorder("Trang_2","kq2b_"+i,"#00ff00");
	}
 else SetBorder("Trang_2","kq2b_"+i,"#ff0000");
return diem;
}

var kq4=[0,0,0,0];
function  Bai4(){
   	var text = "Một sợi dây dài ... cm được cắt ra ... cm. Hỏi sợi dây còn lại dài bao nhiêu xăng-ti-mét?";
	var limit=90;
	var soa= Random(limit)+10;
	var sob= Random(limit)+10;
	while(soa< sob||soa%10 < sob%10)
			{
				soa= Random(limit)+10;
				sob= Random(limit)+10;
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
	  SetBorder("Trang_3","bai4_"+i,"#000000",1);
	  }
}
function DiemBai4()
{
var diem=0;
 for(var i=0;i<4;i++){
        if(GetText("Trang_3","bai4_"+i)==kq4[i]){
		diem=diem+0.5;
	  	SetBorder("Trang_3","bai4_"+i,"#00ff00",1);
		}
	  else SetBorder("Trang_3","bai4_"+i,"#ff0000",1);	
	  }
return diem;
}
var kq5=[6,3];
function Bai5(){
	SetText("Trang_3","bai5_0","");
	SetText("Trang_3","bai5_1","");
	SetFontColor("Trang_3","bai5_1","#0000ff");
	SetFontColor("Trang_3","bai5_0","#0000ff");
	SetBorder("Trang_3","bai5_0","#ff0000",0);	
	SetBorder("Trang_3","bai5_1","#ff0000",0);	
}
function DiemBai5(){
   var diem=0;
 for(var i=0;i<2;i++){
        if(GetText("Trang_3","bai5_"+i)==kq5[i]){
		diem=diem+1;
	  	SetBorder("Trang_3","bai5_"+i,"#00ff00",1);
		}
	  else SetBorder("Trang_3","bai5_"+i,"#ff0000",1);	
	  }
return diem;
}
var kq6=[4,11,18,25];
function Bai6(){
  for(var i=0;i<4;i++){
        if(i!=1)
        SetText("Trang_3","bai6_"+i,"");
	  SetBorder("Trang_3","bai6_"+i,"#000000",1);
	  }

}
function DiemBai6(){
   var diem=0;
 for(var i=0;i<4;i++){
        if(GetText("Trang_3","bai6_"+i)==kq6[i]){
		diem=diem+0.25;
	  	SetBorder("Trang_3","bai6_"+i,"#00ff00",1);
		}
	  else SetBorder("Trang_3","bai6_"+i,"#ff0000",1);	
	  }
return diem;
}
function Trang_2()
{
SetShowObject("Trang_2","Group_1",0);
SetPaint("Trang_2","obj_paint",1);
PaintType("Trang_2","obj_paint",5);
PaintColor("Trang_2","obj_paint","#0000ff");
SetCursor("Trang_2","obj_paint","pointer");
Bai2();
Bai3a();
Bai3b();
  return;
}

function Trang_1()
{
SetShowObject("Trang_2","Group_1",0);
Bai1();
  return;
}

function Trang_3()
{
SetCursor("Trang_3","Group_1","pointer");
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
 height: 1440 
 });

 var Trang_2 = new Kinetic.Layer({name: 'Trang_2',callback:'Trang_2()',x:0,y:0});
var Trang_2_Backrounnd = CreText('Trang_2_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
var DrawText_2 = CreText('DrawText_2',16,29,54,25,"Bài 1:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Bold','left','bottom',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
DrawText_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Bai4BaiToan();
  return;
}
 );
var de_bai = CreText('de_bai',74,29,391,25,"Nối phép tính với kết quả đúng",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','bottom',3,'0.00','8','0',1,'#ffffff','rgba(102,102,102,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_0 = CreText('bai_0',142,73,67,28,"1+2",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_1 = CreText('bai_1',142,117,67,28,"4+5",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_2 = CreText('bai_2',142,161,67,28,"3 +9",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_3 = CreText('bai_3',142,207,67,28,"4+1",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_4 = CreText('bai_4',411,72,67,28,"44 +43",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_5 = CreText('bai_5',411,117,67,28,"9",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_6 = CreText('bai_6',411,162,67,28,"6",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_7 = CreText('bai_7',411,207,67,28,"55",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ds_0 = CreText('ds_0',238,69,56,35,"1",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',1,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ds_1 = CreText('ds_1',238,113,56,35,"1",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',1,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ds_2 = CreText('ds_2',238,157,56,35,"1",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',1,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ds_3 = CreText('ds_3',238,201,56,35,"1",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',1,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ds_4 = CreText('ds_4',325,69,56,35,"1",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',1,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ds_5 = CreText('ds_5',325,112,56,35,"1",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',1,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ds_6 = CreText('ds_6',325,155,56,35,"1",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',1,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var ds_7 = CreText('ds_7',325,200,56,35,"1",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',1,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var obj_paint = CreText('obj_paint',122,61,396,187,"",'rgba(255,255,255,0.00)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','rgba(255,255,255,0.00)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'#7f7f7f',0,1.50);
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
var DrawText_1 = CreText('DrawText_1',21,262,139,28,"Bài 2: Tính",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Bold','left','middle',3,'0.00','8','0',1,'#ffffff','rgba(102,102,102,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
DrawText_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TaoBai3a();
TaoBai3b();
InvalidateObj("Trang_2","");
  return;
}
 );
var bai2a_0 = CreText('bai2a_0',99,299,140,33,"",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','right','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai2a_1 = CreText('bai2a_1',99,344,140,33,"",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','right','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai2a_2 = CreText('bai2a_2',99,389,140,33,"",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','right','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai2a_3 = CreText('bai2a_3',99,436,140,33,"",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','right','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var kq2a_0 = CreText('kq2a_0',246,299,45,32,"0",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',20,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq2a_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var kq2a_1 = CreText('kq2a_1',246,345,45,32,"0",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',20,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq2a_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var kq2a_2 = CreText('kq2a_2',246,391,45,32,"...",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',20,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq2a_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var kq2a_3 = CreText('kq2a_3',246,437,45,32,"...",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',20,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq2a_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var bai2b_0 = CreText('bai2b_0',414,297,140,33,"",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','right','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai2b_1 = CreText('bai2b_1',414,342,140,33,"",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','right','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai2b_2 = CreText('bai2b_2',414,387,140,33,"",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','right','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai2b_3 = CreText('bai2b_3',414,434,140,33,"0",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','right','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var kq2b_0 = CreText('kq2b_0',561,297,45,32,"0",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',20,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq2b_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var kq2b_1 = CreText('kq2b_1',561,343,45,32,"0",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',20,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq2b_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var kq2b_2 = CreText('kq2b_2',561,389,45,32,"...",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',20,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq2b_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var kq2b_3 = CreText('kq2b_3',561,435,45,32,"...",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',20,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq2b_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var DrawText_10 = CreText('DrawText_10',71,294,38,30,"a).",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',18,'Verdana','Normal','left','top',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
DrawText_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  var name= GetText("","Text_tieu_de");
  if(name=="1. Tính :")
      PlayWave("","","ID_SOUND_Cau_1","");
  else if(name=="2. Tính nhẩm :")
     PlayWave("","","ID_SOUND_Cau_2","");
  else if(name=="3. Bài toán :")
     PlayWave("","","ID_SOUND_Cau_3","");
  else if(name=="4. Điền dấu thích hợp vào ô trống :")
     PlayWave("","","ID_SOUND_Cau_4","");
  return;
}



 );
var DrawText_11 = CreText('DrawText_11',343,297,37,30,"b).",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',18,'Verdana','Normal','left','top',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
DrawText_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  var name= GetText("","Text_tieu_de");
  if(name=="1. Tính :")
      PlayWave("","","ID_SOUND_Cau_1","");
  else if(name=="2. Tính nhẩm :")
     PlayWave("","","ID_SOUND_Cau_2","");
  else if(name=="3. Bài toán :")
     PlayWave("","","ID_SOUND_Cau_3","");
  else if(name=="4. Điền dấu thích hợp vào ô trống :")
     PlayWave("","","ID_SOUND_Cau_4","");
  return;
}



 );
var de = CreText('de',-1,1,641,28,"ĐỀ THI CUỐI NĂM TOÁN LỚP 1",'#0080ff','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Trang_2.add(Trang_2_Backrounnd,DrawText_2,de_bai,bai_0,bai_1,bai_2,bai_3,bai_4,bai_5,bai_6,bai_7,ds_0,ds_1,ds_2,ds_3,ds_4,ds_5,ds_6,ds_7,obj_paint,DrawText_1,bai2a_0,bai2a_1,bai2a_2,bai2a_3,kq2a_0,kq2a_1,kq2a_2,kq2a_3,bai2b_0,bai2b_1,bai2b_2,bai2b_3,kq2b_0,kq2b_1,kq2b_2,kq2b_3,DrawText_10,DrawText_11,de);
stage.add(Trang_2);

 var Trang_1 = new Kinetic.Layer({name: 'Trang_1',callback:'Trang_1()',x:0,y:480});
var Trang_1_Backrounnd = CreText('Trang_1_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var DrawText_10 = CreText('DrawText_10',1,6,54,26,"Bài 3:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
DrawText_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Bai4BaiToan();
  return;
}
 );
var dong_ho0 = CreText('dong_ho0',35,60,157,157,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE1.JPG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var dong_ho1 = CreText('dong_ho1',249,63,157,157,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE1.JPG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var dong_ho2 = CreText('dong_ho2',458,60,157,157,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE1.JPG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var dong_ho3 = CreText('dong_ho3',133,269,157,157,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE1.JPG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var dong_ho4 = CreText('dong_ho4',382,273,157,157,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE1.JPG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var de_bai_1 = CreText('de_bai_1',61,6,453,26,"Viết vào ô trống đồng hồ chỉ mấy giờ?",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kim_gio0 = CreText('kim_gio0',112,103,4,72,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE3.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var so_0 = CreText('so_0',95,221,33,26,"21",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#282828','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
so_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var so_1 = CreText('so_1',313,221,29,26,"32",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#282828','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
so_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var so_2 = CreText('so_2',521,221,29,26,"43",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#282828','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
so_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var so_3 = CreText('so_3',195,430,29,26,"54",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#282828','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
so_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var so_4 = CreText('so_4',446,430,29,26,"65",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#282828','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
so_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var Drawtext_2 = CreText('Draw text_2',112,85,3,57,"",'#000000','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_1 = CreText('DrawText_1',326,87,3,57,"",'#000000','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_2 = CreText('DrawText_2',535,84,3,57,"",'#000000','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_3 = CreText('DrawText_3',210,293,3,57,"",'#000000','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_4 = CreText('DrawText_4',459,297,3,57,"",'#000000','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kim_gio1 = CreText('kim_gio1',326,106,4,72,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE3.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var kim_gio2 = CreText('kim_gio2',535,103,4,72,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE3.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var kim_gio3 = CreText('kim_gio3',210,312,4,72,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE3.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var kim_gio4 = CreText('kim_gio4',459,315,4,72,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE3.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var DrawText_5 = CreText('DrawText_5',133,221,29,26,"giờ",'rgba(0,0,0,0)','#ffffff','#282828','#282828','',16,'Arial','Normal','left','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_6 = CreText('DrawText_6',345,221,29,26,"giờ",'rgba(0,0,0,0)','#ffffff','#282828','#282828','',16,'Arial','Normal','left','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_7 = CreText('DrawText_7',553,221,29,26,"giờ",'rgba(0,0,0,0)','#ffffff','#282828','#282828','',16,'Arial','Normal','left','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_8 = CreText('DrawText_8',230,430,29,26,"giờ",'rgba(0,0,0,0)','#ffffff','#282828','#282828','',16,'Arial','Normal','left','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_9 = CreText('DrawText_9',481,430,29,26,"giờ",'rgba(0,0,0,0)','#ffffff','#282828','#282828','',16,'Arial','Normal','left','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
Trang_1.add(Trang_1_Backrounnd,DrawText_10,dong_ho0,dong_ho1,dong_ho2,dong_ho3,dong_ho4,de_bai_1,kim_gio0,so_0,so_1,so_2,so_3,so_4,Drawtext_2,DrawText_1,DrawText_2,DrawText_3,DrawText_4,kim_gio1,kim_gio2,kim_gio3,kim_gio4,DrawText_5,DrawText_6,DrawText_7,DrawText_8,DrawText_9);
stage.add(Trang_1);

 var Trang_3 = new Kinetic.Layer({name: 'Trang_3',callback:'Trang_3()',x:0,y:960});
var Trang_3_Backrounnd = CreText('Trang_3_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
var cau_hoi = CreText('cau_hoi',81,16,544,52,"Một sợi dây dài ... cm được cắt ra ... cm. Hỏi sợi dây còn lại dài bao nhiêu xăng-ti-mét?",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','left','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_giai = CreText('bai_giai',215,58,71,27,"Bài giải:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Italic','left','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var text_tam = CreText('text_tam',64,95,307,102,"Sợi dây dài:\r\n\r\nBị cắt đi: \r\n\r\nSợi dây còn lại là:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','left','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai4_1 = CreText('bai4_1',239,121,36,27,"Đáp số:",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai4_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var bai4_0 = CreText('bai4_0',239,85,36,27,"Đáp số:",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai4_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var bai4_3 = CreText('bai4_3',478,190,36,27,"Đáp số:",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai4_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var dap_so = CreText('dap_so',395,193,80,29,"Đáp số:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Italic','right','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai4_2 = CreText('bai4_2',239,158,139,27,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai4_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var bai_4 = CreText('bai_4',11,15,54,22,"Bài 4:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Bold','left','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bai_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Bai4BaiToan();
  return;
}
 );
var DrawText_1 = CreText('DrawText_1',11,242,54,22,"Bài 5:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Bold','left','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
DrawText_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Bai4BaiToan();
  return;
}
 );
var DrawText_2 = CreText('DrawText_2',71,243,328,110,"Viết số thích hợp vào ô trống.\r\nHình vẽ bên có:\r\n\r\na). Có ........ đoạn thẳng\r\n\r\nb). Có ........ hình tam giác",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','left','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Drawtext_1 = CreText('Draw text_1',396,248,202,115,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE4.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var bai5_0 = CreText('bai5_0',125,287,37,25,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bai5_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var bai5_1 = CreText('bai5_1',125,323,37,25,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bai5_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var DrawText_3 = CreText('DrawText_3',11,380,54,22,"Bài 6:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Bold','left','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
DrawText_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Bai4BaiToan();
  return;
}
 );
var DrawText_4 = CreText('DrawText_4',71,379,541,44,"Cho biết ngày 11 của tháng là ngày chủ nhật. Vậy các ngày chủ nhật còn lại của tháng đó là những ngày nào?",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','left','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai6_0 = CreText('bai6_0',121,427,36,27,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai6_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var bai6_1 = CreText('bai6_1',171,427,36,27,"11",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai6_2 = CreText('bai6_2',224,427,36,27,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai6_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var bai6_3 = CreText('bai6_3',279,427,36,27,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai6_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var clear_one = CreText('clear_one',34,-1,27,22,"←",'#ffc0cb','#ffffff','#000000','#000000','',14,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffe4e1','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
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
var clear_all = CreText('clear_all',61,-1,27,22,"C",'#ffc0cb','#ffffff','#000000','#000000','',14,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffe4e1','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
clear_all.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
      keyNewValue = "";
	SetText("",objectShowKey,"");
	InvalidateObj("",objectShowKey);;
  return;
}
 );
var dau_bang = CreText('dau_bang',34,87,27,22,"=",'#c0c0c0','#ffffff','#000000','#ffffff','',14,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
dau_bang.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_be = CreText('dau_be',61,87,27,22,"-",'#c0c0c0','#ffffff','#000000','#ffffff','',14,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
dau_be.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_lon = CreText('dau_lon',3,87,31,22,"+",'#c0c0c0','#ffffff','#000000','#ffffff','',14,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
dau_lon.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var ok = CreText('ok',34,109,54,22,"Đồng ý",'#98fb98','#ffffff','#000000','#ffffff','',11,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
ok.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
var _0 = CreText('_0',3,-1,31,22,"0",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var huy = CreText('huy',3,109,31,22,"Hủy",'#ffc0cb','#ffffff','#000000','#ffffff','',11,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
huy.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetText("",objectShowKey,keyOldValue);
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
var _9 = CreText('_9',61,65,27,22,"9",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _8 = CreText('_8',34,65,27,22,"8",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _7 = CreText('_7',3,65,31,22,"7",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _6 = CreText('_6',61,43,27,22,"6",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _5 = CreText('_5',34,43,27,22,"5",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _4 = CreText('_4',3,43,31,22,"4",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _3 = CreText('_3',61,21,27,22,"3",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _2 = CreText('_2',34,21,27,22,"2",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _1 = CreText('_1',3,21,31,22,"1",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var m_diem = CreText('m_diem',206,194,252,141,"8",'rgba(230,230,230,1.11)','#ffffff','#0080ff','#ffffff','',48,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','rgba(230,230,230,1.11)','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var label = CreText('label',227,220,201,24,"Bạn được",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_lam_lai = CreText('bt_lam_lai',267,293,125,31,"Làm Lại",'#0080c0','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#4fa7ff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Bai1();
Bai2();
Bai3a();
Bai3b();
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
var nop_bai = CreText('nop_bai',507,435,120,37,"Nộp Bài",'#8b0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#ff0000','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
nop_bai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var diem= DiemBai1()+ DiemBai2()+Diem3a()+Diem3b()+DiemBai4()+DiemBai5()+DiemBai6();
SetText("Trang_3","m_diem",diem);
SetShowObject("Trang_3","bang_diem",1);
SetShowObject("Trang_3","",0);
InvalidateObj("Trang_3","");
InvalidateObj("Trang_2","");
InvalidateObj("Trang_1","");
UpdateScore(diem);
  return;
}
 );
var t_mess = CreText('t_mess',206,194,252,21,"Thông báo điểm",'rgba(127,127,127,1.11)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',1,'#ffffff','rgba(40,40,40,1.11)','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_5 = CreText('DrawText_5',282,83,32,29,"cm",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Italic','right','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_6 = CreText('DrawText_6',283,119,32,29,"cm",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Italic','right','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_7 = CreText('DrawText_7',391,156,125,29,"(ví dụ: 10-5=5)",'rgba(0,0,0,0)','#ffffff','#7f7f7f','#7f7f7f','',12,'Arial','Italic','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_8 = CreText('DrawText_8',518,189,32,29,"cm",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Italic','right','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:89,height:136});
Group_1.add(_0,clear_one,clear_all,_1,_2,_3,_4,_5,_6,_7,_8,_9,dau_lon,dau_bang,dau_be,huy,ok);
var bang_diem = new Kinetic.Group({name:'bang_diem',x:0,y:0,width:256,height:145});
bang_diem.add(m_diem,t_mess,label,bt_lam_lai);
Trang_3.add(Trang_3_Backrounnd,cau_hoi,bai_giai,text_tam,bai4_1,bai4_0,bai4_3,dap_so,bai4_2,bai_4,DrawText_1,DrawText_2,Drawtext_1,bai5_0,bai5_1,DrawText_3,DrawText_4,bai6_0,bai6_1,bai6_2,bai6_3,nop_bai,DrawText_5,DrawText_6,DrawText_7,DrawText_8,Group_1,bang_diem);
stage.add(Trang_3);
InitLacVietScript();
};
