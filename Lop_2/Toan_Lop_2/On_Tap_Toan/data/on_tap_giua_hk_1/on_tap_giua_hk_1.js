folder_Resource ='data/on_tap_giua_hk_1'
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
var Kq1a=[6,7,4,7,10];
function Bai1a()
{
	var text= "a). Viết số ...; ...; ...; ...; ... vào ô trống theo thứ tự từ bé đến lớn:";
	CreateRam(70);
	for(var i=0;i<5;i++)	
	{
		text= replaceStr(text,"...",arTam[i], 0, 1);
		SetText("Trang_1","so1a_"+i,"");
		SetFontColor("Trang_1","so1a_"+i,"#0000ff");
		Kq1a[i]=arTam[i];
	}
	for(i=0;i<5;i++)	
  	  for(var j=i+1;j<5;j++)
		{
			if(Kq1a[j]<Kq1a[i])
			{
				var tam= Kq1a[j];
				Kq1a[j]=Kq1a[i];
				Kq1a[i]= tam;
			}
		}	
	SetText("Trang_1","bai1a",text);
}
var Kq1b=[6,7,4,7,10];
function Bai1b()
{
	var text= "b). Viết số ...; ...; ...; ...; ... vào ô trống theo thứ tự giảm dần:";
	CreateRam(70);
	for(var i=0;i<5;i++)	
	{
		text= replaceStr(text,"...",arTam[i], 0, 1);
		SetText("Trang_1","so1b_"+i,"");
		SetFontColor("Trang_1","so1b_"+i,"#0000ff");
		Kq1b[i]=arTam[i];
	}
	for(i=0;i<5;i++)	
  	  for(var j=i+1;j<5;j++)
		{
			if(Kq1b[j]>Kq1b[i])
			{
				var tam= Kq1b[j];
				Kq1b[j]=Kq1b[i];
				Kq1b[i]= tam;
			}
		}
	SetText("Trang_1","bai1b",text);
}
function Bai1(){
	Bai1a();
	Bai1b();
}
function DiemBai1(){
	var diem=0;
	for(var i=0;i<5;i++){
	if(GetText("Trang_1","so1a_"+i)==Kq1a[i])
	{
		diem=diem+0.2;
		SetFontColor("Trang_1","so1a_"+i,"#00ff00",1);
	}
	else SetFontColor("Trang_1","so1a_"+i,"#ff0000",1);
	
	if(GetText("Trang_1","so1b_"+i)==Kq1b[i])
	{
		diem=diem+0.2;
		SetFontColor("Trang_1","so1b_"+i,"#00ff00",1);
	}
	else SetFontColor("Trang_1","so1b_"+i,"#ff0000",1);

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
function InitCur(){
SetCursor("","cham_diem","pointer");
SetCursor("","nop_bai","pointer");
for(var i=0;i<8;i++){
  SetCursor("Trang_1","so1a_"+i,"pointer");
  SetCursor("Trang_1","so1b_"+i,"pointer");

  SetCursor("Trang_1","so_tru_"+i,"pointer");
  SetCursor("Trang_1","so_bi_tru_"+i,"pointer");
  SetCursor("Trang_1","thuong_so_"+i,"pointer");

  SetCursor("Trang_1","kq2a_"+i,"pointer");
  SetCursor("Trang_1","kq2b_"+i,"pointer");

  SetCursor("Trang_3","bai4_"+i,"pointer");
  SetCursor("Trang_3","bai5_"+i,"pointer");
  SetCursor("Trang_3","bai6_"+i,"pointer");

 }
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
			SetText("Trang_1","dau_"+i,"+");
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
			SetText("Trang_1","dau_"+i,"-");
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
		kq3[i]=kq;
            var dau1= " +";
		var dau2= " + ";
		if(phep1==1) dau1= " - ";
		if(phep2==1) dau2= " - "; 
		SetText("Trang_1","bai_"+i,a+dau1+b+dau2+c);
		SetBorder("Trang_1","bai_"+i,"#000000",0);

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
			SetBorder("Trang_1","bai_"+i,"#00ff00");
		}
		else	SetBorder("Trang_1","bai_"+i,"#ff0000");
	}
	return m_diem;
}
var kq4=[0,0,0,0];
function  Bai4(){

   	var text = "Bao lớn có ... kg gạo. Bao bé có ... kg gạo. Hỏi 2 bao có bao nhiêu ki-lô-gam gạo?";
	var limit=90;
	var soa= Random(limit)+10;
	var sob= Random(limit)+10;
	while(soa + sob >= 100 || soa%10 + sob%10 >=10)
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
	  	SetBorder("Trang_3","bai4_"+i,"#00ff00",1);
		}
	  else SetBorder("Trang_3","bai4_"+i,"#ff0000",1);	
	  }
return diem;
}
var kq5=[6,3];
function Bai5(){
	SetText("Trang_3","bai5_0","");
	SetFontColor("Trang_3","bai5_0","#0000ff");
	SetBorder("Trang_3","bai5_0","#ff0000",0);		
}
function DiemBai5(){
   var diem=0;
        if(GetText("Trang_3","bai5_0")==kq5[0]){
		diem=diem+1.5;
	  	SetBorder("Trang_3","bai5_0","#00ff00",1);
		}
	  else SetBorder("Trang_3","bai5_0","#ff0000",1);	
return diem;
}
var kq6=[4,11,18,25];
var len6=0;
function Bai6(){
kq6[0]=90;
kq6[1]=10;
kq6[2]=99;
    for(var i=0;i<3;i++){
        SetText("Trang_3","bai6_"+i,"");
	  SetFontColor("Trang_3","bai6_"+i,"#0000ff");
	  SetBorder("Trang_3","bai6_"+i,"#000000",0);
	  }
}
function DiemBai6(){
   var diem=0;//max 1diem
for(var i=0;i<3;i++)
{
  if(GetText("Trang_3","bai6_"+i)==kq6[i]){
		diem=diem+0.5;
	  	SetBorder("Trang_3","bai6_"+i,"#00ff00",1);
		}
	  else SetBorder("Trang_3","bai6_"+i,"#ff0000",1);	
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
InitCur();
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
Trang_1.add(Trang_1_Backrounnd);
var bai1a = CreText('bai1a',61,21,556,26,"a). Viết số ..., ..., ..., ..., ..., vào ô trống theo thứ tự từ bé đến lớn:",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','bottom',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(bai1a);
var de = CreText('de',118,1,432,26,"ĐỀ THI KIỂM TRA GIỮA HỌC KỲ I, TOÁN LỚP 2",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(de);
var so1a_3 = CreText('so1a_3',266,51,33,26,"21",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#282828','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
so1a_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(so1a_3);
var so1a_2 = CreText('so1a_2',237,51,29,26,"32",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#282828','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
so1a_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(so1a_2);
var so1a_4 = CreText('so1a_4',299,51,29,26,"43",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#282828','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
so1a_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(so1a_4);
var so1a_1 = CreText('so1a_1',208,51,29,26,"54",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#282828','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
so1a_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(so1a_1);
var so1a_0 = CreText('so1a_0',179,51,29,26,"65",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#282828','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
so1a_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(so1a_0);
var de_bai = CreText('de_bai',72,146,391,25,"Đặt rồi tính:",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','8','0',1,'#ffffff','rgba(102,102,102,0.78)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(de_bai);
var DrawText_1 = CreText('DrawText_1',6,146,54,25,"Bài 2:",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',16,'Arial','Bold','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
DrawText_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Bai2();
InvalidateObj("Trang_1","");
  return;
}
 );
Trang_1.add(DrawText_1);
var bai2_1 = CreText('bai2_1',224,165,61,19,"42\r\n16\r\n58",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(bai2_1);
var gach_0 = CreText('gach_0',144,229,45,1,"",'#000000','#000000','#000000','#000000','',16,'Arial','Normal','right','bottom',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#000000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(gach_0);
var dau_0 = CreText('dau_0',138,193,23,21,"+",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(dau_0);
var dau_1 = CreText('dau_1',227,193,23,21,"+",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(dau_1);
var dau_2 = CreText('dau_2',312,193,23,21,"+",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(dau_2);
var dau_3 = CreText('dau_3',385,193,23,21,"+",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(dau_3);
var bai2_0 = CreText('bai2_0',142,165,61,19,"3+21",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(bai2_0);
var bai2_2 = CreText('bai2_2',305,165,61,19,"42\r\n16\r\n58",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(bai2_2);
var bai2_3 = CreText('bai2_3',386,165,61,19,"42\r\n16\r\n58",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(bai2_3);
var gach_1 = CreText('gach_1',235,229,45,1,"",'#000000','#000000','#000000','#000000','',16,'Arial','Normal','right','bottom',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#000000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(gach_1);
var gach_2 = CreText('gach_2',322,229,45,1,"",'#000000','#000000','#000000','#000000','',16,'Arial','Normal','right','bottom',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#000000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(gach_2);
var gach_3 = CreText('gach_3',397,229,45,1,"",'#000000','#000000','#000000','#000000','',16,'Arial','Normal','right','bottom',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#000000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(gach_3);
var thuong_so_0 = CreText('thuong_so_0',160,234,27,19,"Đ",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','bottom',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
thuong_so_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(thuong_so_0);
var thuong_so_1 = CreText('thuong_so_1',245,234,27,19,"Đ",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
thuong_so_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(thuong_so_1);
var thuong_so_2 = CreText('thuong_so_2',333,234,27,19,"Đ",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
thuong_so_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(thuong_so_2);
var thuong_so_3 = CreText('thuong_so_3',407,234,27,19,"Đ",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
thuong_so_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(thuong_so_3);
var DrawText_18 = CreText('DrawText_18',9,260,434,28,"Bài 3. Nối phép tính với kết quả đúng?",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Bold','left','middle',3,'0.00','8','0',1,'#ffffff','rgba(102,102,102,0.78)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
DrawText_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Bai3();
InvalidateObj("Trang_1","");
  return;
}
 );
Trang_1.add(DrawText_18);
var DrawText_10 = CreText('DrawText_10',6,21,54,26,"Bài 1:",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',16,'Arial','Bold','left','bottom',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
DrawText_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Bai1();
InvalidateObj("Trang_1","");
  return;
}
 );
Trang_1.add(DrawText_10);
var bai1b = CreText('bai1b',70,82,556,26,"b). Viết số ..., ..., ..., ..., ..., vào ô trống theo thứ tự từ lớn đến bé:",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','bottom',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(bai1b);
var so1b_0 = CreText('so1b_0',180,116,29,26,"65",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#282828','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
so1b_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(so1b_0);
var so1b_1 = CreText('so1b_1',209,116,29,26,"54",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#282828','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
so1b_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(so1b_1);
var so1b_2 = CreText('so1b_2',238,116,29,26,"32",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#282828','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
so1b_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(so1b_2);
var so1b_3 = CreText('so1b_3',267,116,33,26,"21",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#282828','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
so1b_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(so1b_3);
var so1b_4 = CreText('so1b_4',300,116,29,26,"43",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#282828','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
so1b_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(so1b_4);
var so_bi_tru_3 = CreText('so_bi_tru_3',407,205,27,19,"Đ",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
so_bi_tru_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(so_bi_tru_3);
var so_bi_tru_2 = CreText('so_bi_tru_2',333,205,27,19,"Đ",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
so_bi_tru_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(so_bi_tru_2);
var so_bi_tru_1 = CreText('so_bi_tru_1',245,205,27,19,"Đ",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
so_bi_tru_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(so_bi_tru_1);
var so_bi_tru_0 = CreText('so_bi_tru_0',160,205,27,19,"Đ",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','bottom',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
so_bi_tru_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(so_bi_tru_0);
var so_tru_3 = CreText('so_tru_3',407,184,27,19,"Đ",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
so_tru_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(so_tru_3);
var so_tru_2 = CreText('so_tru_2',333,184,27,19,"Đ",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
so_tru_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(so_tru_2);
var so_tru_1 = CreText('so_tru_1',245,184,27,19,"Đ",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
so_tru_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(so_tru_1);
var so_tru_0 = CreText('so_tru_0',160,184,27,19,"Đ",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',14,'Arial','Normal','center','bottom',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
so_tru_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(so_tru_0);
var bai_0 = CreText('bai_0',98,297,111,28,"1+2",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(bai_0);
var bai_1 = CreText('bai_1',98,341,111,28,"4+5",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(bai_1);
var bai_2 = CreText('bai_2',98,385,111,28,"3 +9",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(bai_2);
var bai_3 = CreText('bai_3',98,431,111,28,"4+1",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(bai_3);
var bai_4 = CreText('bai_4',411,296,104,28,"44 +43",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(bai_4);
var bai_5 = CreText('bai_5',411,341,104,28,"9",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(bai_5);
var bai_6 = CreText('bai_6',411,386,104,28,"6",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(bai_6);
var bai_7 = CreText('bai_7',411,431,104,28,"55",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(bai_7);
var ds_0 = CreText('ds_0',238,293,56,35,"1",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',1,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(ds_0);
var ds_1 = CreText('ds_1',238,337,56,35,"1",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',1,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(ds_1);
var ds_2 = CreText('ds_2',238,381,56,35,"1",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',1,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(ds_2);
var ds_3 = CreText('ds_3',238,425,56,35,"1",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',1,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(ds_3);
var ds_4 = CreText('ds_4',325,293,56,35,"1",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',1,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(ds_4);
var ds_5 = CreText('ds_5',325,336,56,35,"1",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',1,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(ds_5);
var ds_6 = CreText('ds_6',325,379,56,35,"1",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',1,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(ds_6);
var ds_7 = CreText('ds_7',325,424,56,35,"1",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',1,'0.00','30','30',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(ds_7);
var obj_paint = CreText('obj_paint',77,285,453,187,"",'rgba(255,255,255,0.00)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'rgba(0, 0, 0, 0)','rgba(255,255,255,0.00)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'#7f7f7f',0,1.50);
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
Trang_1.add(obj_paint);
var _0 = CreText('_0',3,0,31,22,"0",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0, 0, 0, 0)','0','0','4','0',1,0, 'rgba(0, 0, 0, 0)',0,1.50);
_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_1.add(_0);
var clear_one = CreText('clear_one',34,0,27,22,"←",'#ffc0cb','#ffffff','#000000','#ffffff','',14,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffe4e1','3','1','rgba(0, 0, 0, 0)','0','0','4','0',1,0, 'rgba(0, 0, 0, 0)',0,1.50);
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
Trang_1.add(clear_one);
var clear_all = CreText('clear_all',61,0,27,22,"C",'#ffc0cb','#ffffff','#000000','#ffffff','',14,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffe4e1','3','1','rgba(0, 0, 0, 0)','0','0','4','0',2,0, 'rgba(0, 0, 0, 0)',0,1.50);
clear_all.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
      keyNewValue = "";
	SetText("",objectShowKey,"");
	InvalidateObj("",objectShowKey);;
  return;
}
 );
Trang_1.add(clear_all);
var _1 = CreText('_1',3,22,31,22,"1",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0, 0, 0, 0)','0','0','4','0',1,0, 'rgba(0, 0, 0, 0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_1.add(_1);
var _2 = CreText('_2',34,22,27,22,"2",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0, 0, 0, 0)','0','0','4','0',1,0, 'rgba(0, 0, 0, 0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_1.add(_2);
var _3 = CreText('_3',61,22,27,22,"3",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0, 0, 0, 0)','0','0','4','0',2,0, 'rgba(0, 0, 0, 0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_1.add(_3);
var _4 = CreText('_4',3,44,31,22,"4",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0, 0, 0, 0)','0','0','4','0',1,0, 'rgba(0, 0, 0, 0)',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_1.add(_4);
var _5 = CreText('_5',34,44,27,22,"5",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0, 0, 0, 0)','0','0','4','0',1,0, 'rgba(0, 0, 0, 0)',0,1.50);
_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_1.add(_5);
var _6 = CreText('_6',61,44,27,22,"6",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0, 0, 0, 0)','0','0','4','0',2,0, 'rgba(0, 0, 0, 0)',0,1.50);
_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_1.add(_6);
var _7 = CreText('_7',3,66,31,22,"7",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0, 0, 0, 0)','0','0','4','0',1,0, 'rgba(0, 0, 0, 0)',0,1.50);
_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_1.add(_7);
var _8 = CreText('_8',34,66,27,22,"8",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0, 0, 0, 0)','0','0','4','0',1,0, 'rgba(0, 0, 0, 0)',0,1.50);
_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_1.add(_8);
var _9 = CreText('_9',61,66,27,22,"9",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0, 0, 0, 0)','0','0','4','0',2,0, 'rgba(0, 0, 0, 0)',0,1.50);
_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_1.add(_9);
var dau_lon = CreText('dau_lon',3,88,31,22,">",'#afeeee','#ffffff','#000000','#ffffff','',14,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#e4fafa','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,0,'rgba(0, 0, 0, 0)',0,1.50);
dau_lon.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_1.add(dau_lon);
var dau_bang = CreText('dau_bang',34,88,27,22,"=",'#afeeee','#ffffff','#000000','#ffffff','',14,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#e4fafa','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
dau_bang.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_1.add(dau_bang);
var dau_be = CreText('dau_be',61,88,27,22,"<",'#afeeee','#ffffff','#000000','#ffffff','',14,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#e4fafa','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,0,'rgba(0, 0, 0, 0)',0,1.50);
dau_be.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_1.add(dau_be);
var huy = CreText('huy',3,111,40,22,"Hủy",'#ffc0cb','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffe4e1','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,0,'rgba(0, 0, 0, 0)',0,1.50);
huy.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetText("",objectShowKey,keyOldValue);
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
Trang_1.add(huy);
var ok = CreText('ok',43,111,45,22,"Đồng ý",'#98fb98','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#e0fee0','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,0,'rgba(0, 0, 0, 0)',0,1.50);
ok.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
Trang_1.add(ok);
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:89,height:137});
Group_1.add(_0);
Group_1.add(clear_one);
Group_1.add(clear_all);
Group_1.add(_1);
Group_1.add(_2);
Group_1.add(_3);
Group_1.add(_4);
Group_1.add(_5);
Group_1.add(_6);
Group_1.add(_7);
Group_1.add(_8);
Group_1.add(_9);
Group_1.add(dau_lon);
Group_1.add(dau_bang);
Group_1.add(dau_be);
Group_1.add(huy);
Group_1.add(ok);
Trang_1.add(Group_1);
stage.add(Trang_1);

 var Trang_3 = new Kinetic.Layer({name: 'Trang_3',callback:'Trang_3()',x:0,y:480});
var Trang_3_Backrounnd = CreText('Trang_3_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
Trang_3.add(Trang_3_Backrounnd);
var Drawtext_1 = CreText('Draw text_1',368,210,166,101,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE6.JPG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_3.add(Drawtext_1);
var vi_du = CreText('vi_du',357,161,125,29,"(ví dụ: 10-5=5)",'rgba(0, 0, 0, 0)','#ffffff','#7f7f7f','#7f7f7f','',12,'Arial','Italic','left','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_3.add(vi_du);
var dap_so = CreText('dap_so',235,191,130,29,"Đáp số: ......",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',16,'Arial','Italic','right','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_3.add(dap_so);
var bai4_3 = CreText('bai4_3',334,190,36,22,"Đáp số: ......",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bai4_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_3.add(bai4_3);
var cau_hoi = CreText('cau_hoi',68,16,473,52,"Bao lớn có ... kg gạo. Bao bé có ... kg gạo. Hỏi 2 bao có bao nhiêu ki-lô-gam gạo?",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',16,'Arial','Normal','left','top',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_3.add(cau_hoi);
var bai_giai = CreText('bai_giai',215,58,71,27,"Bài giải:",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',16,'Arial','Italic','left','top',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_3.add(bai_giai);
var text_tam = CreText('text_tam',64,95,307,102,"Bao lớn có: ...... kg\r\n\r\nBao bé có: ...... kg \r\n\r\nCả hai bao có ........................... kg",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',16,'Arial','Normal','left','top',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_3.add(text_tam);
var bai4_1 = CreText('bai4_1',148,126,36,22,"Đáp số: ......",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bai4_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_3.add(bai4_1);
var bai4_0 = CreText('bai4_0',155,87,36,22,"Đáp số: ......",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bai4_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_3.add(bai4_0);
var bai4_2 = CreText('bai4_2',179,155,116,22,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bai4_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_3.add(bai4_2);
var bai_4 = CreText('bai_4',8,18,54,22,"Bài 4:",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',16,'Arial','Bold','left','top',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_3.add(bai_4);
var DrawText_1 = CreText('DrawText_1',11,218,54,22,"Bài 5:",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',16,'Arial','Bold','left','top',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_3.add(DrawText_1);
var DrawText_2 = CreText('DrawText_2',71,219,328,110,"Viết số thích hợp vào ô trống.\r\nHình vẽ bên có ........ hình tam giác",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',16,'Arial','Normal','left','top',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_3.add(DrawText_2);
var bai5_0 = CreText('bai5_0',191,229,37,25,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bai5_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_3.add(bai5_0);
var DrawText_3 = CreText('DrawText_3',12,317,54,22,"Bài 6:",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',16,'Arial','Bold','left','top',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
DrawText_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Bai6();
InvalidateObj("Trang_3","");
  return;
}
 );
Trang_3.add(DrawText_3);
var de_bai_6 = CreText('de_bai_6',71,317,541,103,"Có bao nhiêu số có hai chữ số: ....... chữ số.\r\n\r\nSố bé nhất có hai chữ số là: ...... \r\n\r\nSố lớn nhất có hai chữ số là ......\r\n",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',16,'Arial','Normal','left','top',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_3.add(de_bai_6);
var bai6_0 = CreText('bai6_0',307,308,33,23,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','bottom',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bai6_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_3.add(bai6_0);
var bai6_1 = CreText('bai6_1',284,345,33,23,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','bottom',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bai6_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_3.add(bai6_1);
var bai6_2 = CreText('bai6_2',283,380,33,23,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','bottom',0,'0.00','32','32',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bai6_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_3.add(bai6_2);
var m_diem = CreText('m_diem',186,127,252,141,"8",'rgba(230,230,230,0.98)','#ffffff','#0080ff','#ffffff','',48,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','rgba(230,230,230,0.98)','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_3.add(m_diem);
var label = CreText('label',207,153,201,24,"Bạn được",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_3.add(label);
var bt_lam_lai = CreText('bt_lam_lai',247,226,125,31,"Làm Lại",'#0080c0','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#4fa7ff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
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
Trang_3.add(bt_lam_lai);
var nop_bai = CreText('nop_bai',291,442,89,29,"Nộp Bài",'#8b0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',2,'#ffffff','#ff0000','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
nop_bai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var diem= DiemBai1()+ DiemBai2()+DiemBai3()+DiemBai4()+DiemBai5()+DiemBai6();
if(diem>10) diem=10;
SetText("Trang_3","m_diem",diem);
SetShowObject("Trang_3","bang_diem",1);
SetShowObject("Trang_3","nop_bai",0);
InvalidateObj("Trang_3","");
InvalidateObj("Trang_1","");
  return;
}
 );
Trang_3.add(nop_bai);
var t_mess = CreText('t_mess',186,127,252,21,"Thông báo điểm",'rgba(127,127,127,0.98)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',1,'#ffffff','rgba(40,40,40,0.98)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_3.add(t_mess);
var bang_diem = new Kinetic.Group({name:'bang_diem',x:0,y:0,width:256,height:145});
bang_diem.add(m_diem);
bang_diem.add(label);
bang_diem.add(t_mess);
bang_diem.add(bt_lam_lai);
Trang_3.add(bang_diem);
var _0 = CreText('_0',2,2,31,22,"0",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_3.add(_0);
var clear_one = CreText('clear_one',33,2,27,22,"←",'#ffc0cb','#ffffff','#000000','#000000','',14,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffe4e1','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
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
Trang_3.add(clear_one);
var clear_all = CreText('clear_all',60,2,27,22,"C",'#ffc0cb','#ffffff','#000000','#000000','',14,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffe4e1','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,0,'rgba(0, 0, 0, 0)',0,1.50);
clear_all.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
      keyNewValue = "";
	SetText("",objectShowKey,"");
	InvalidateObj("",objectShowKey);;
  return;
}
 );
Trang_3.add(clear_all);
var _1 = CreText('_1',2,24,31,22,"1",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_3.add(_1);
var _2 = CreText('_2',33,24,27,22,"2",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_3.add(_2);
var _3 = CreText('_3',60,24,27,22,"3",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,0,'rgba(0, 0, 0, 0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_3.add(_3);
var _4 = CreText('_4',2,46,31,22,"4",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_3.add(_4);
var _5 = CreText('_5',33,46,27,22,"5",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_3.add(_5);
var _6 = CreText('_6',60,46,27,22,"6",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,0,'rgba(0, 0, 0, 0)',0,1.50);
_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_3.add(_6);
var _7 = CreText('_7',2,68,31,22,"7",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_3.add(_7);
var _8 = CreText('_8',33,68,27,22,"8",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_3.add(_8);
var _9 = CreText('_9',60,68,27,22,"9",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,0,'rgba(0, 0, 0, 0)',0,1.50);
_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_3.add(_9);
var dau_lon = CreText('dau_lon',2,90,31,22,"+",'#c0c0c0','#ffffff','#000000','#ffffff','',14,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,0,'rgba(0, 0, 0, 0)',0,1.50);
dau_lon.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_3.add(dau_lon);
var dau_bang = CreText('dau_bang',33,90,27,22,"=",'#c0c0c0','#ffffff','#000000','#ffffff','',14,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
dau_bang.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_3.add(dau_bang);
var dau_be = CreText('dau_be',60,90,27,22,"-",'#c0c0c0','#ffffff','#000000','#ffffff','',14,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,0,'rgba(0, 0, 0, 0)',0,1.50);
dau_be.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Trang_3.add(dau_be);
var huy = CreText('huy',2,112,31,22,"Hủy",'#ffc0cb','#ffffff','#000000','#ffffff','',11,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,0,'rgba(0, 0, 0, 0)',0,1.50);
huy.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetText("",objectShowKey,keyOldValue);
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
Trang_3.add(huy);
var ok = CreText('ok',33,112,54,22,"Đồng ý",'#98fb98','#ffffff','#000000','#ffffff','',11,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,0,'rgba(0, 0, 0, 0)',0,1.50);
ok.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
Trang_3.add(ok);
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:89,height:136});
Group_1.add(_0);
Group_1.add(clear_one);
Group_1.add(clear_all);
Group_1.add(_1);
Group_1.add(_2);
Group_1.add(_3);
Group_1.add(_4);
Group_1.add(_5);
Group_1.add(_6);
Group_1.add(_7);
Group_1.add(_8);
Group_1.add(_9);
Group_1.add(dau_lon);
Group_1.add(dau_bang);
Group_1.add(dau_be);
Group_1.add(huy);
Group_1.add(ok);
Trang_3.add(Group_1);
stage.add(Trang_3);
InitLacVietScript();
};
