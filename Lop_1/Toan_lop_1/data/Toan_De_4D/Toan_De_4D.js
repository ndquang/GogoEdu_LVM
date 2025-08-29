folder_Resource ='data/Toan_De_4D'
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
var arKq1=[6,7,4,7,10];
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
	for(var i=0;i<5;i++)	
	{
		SetText("Trang_1","so_"+i,"");
		SetFontColor("Trang_1","so_"+i,"#0000ff");
	}
	GetVer();
	InvalidateObj("Trang_1","");
}
function DiemBai1(){
	var diem=0;
	for(var i=0;i<5;i++)	
	if(GetText("Trang_1","so_"+i)==arKq1[i]){
		diem=diem+0.2;
		SetFontColor("Trang_1","so_"+i,"#00ff00",1);
	}
	else SetFontColor("Trang_1","so_"+i,"#ff0000",1);
	return diem;
}
function ChonSo(){
	var tt = GetText("Trang_1","");
	if(tt=="" || tt== "S")
		SetText("","","Đ");
	else SetText("","","S");
	InvalidateObj("","");
}
var m_limit=20;
var arKq2=[0,0,0,0,0];
function InitCur(){
SetCursor("","Group_1","pointer");
}
function Bai2()
{
  var limit=90;
  for(var i=0;i<6;i++)	
	{
		var a= Random(limit)+10;
		var b= Random(limit)+10;
		var phep= Random(2);
		var da=0;
		if(phep==0){ //+
			while(a+b>100 || a%10 + b%10>10)
			{
				a= Random(limit)+10;
				b= Random(limit*0.7)+10;
			}
			da=a+b;
			SetText("Trang_1","dau_"+i,"+");
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
			}
		phep= Random(3);
		if(phep==2)
			{
			da=da-1;
			arKq2[i]="S";
			}
		else arKq2[i]="Đ";
		SetText("Trang_1","bai2_"+i,a+"\r\n"+b + "\r\n"+da);
		SetText("Trang_1","chon2_"+i,"");
		SetBorder("Trang_1","chon2_"+i,"#0000ff",1);
		SetFontColor("Trang_1","chon2_"+i,"#000000");
	}
}


function DiemBai2(){
	var m_diem=0;
	for(var i=0; i< 6; i++)
		{
		if(arKq2[i]== GetText("Trang_1","chon2_"+i))
		{
		   	m_diem=m_diem+0.25;
			SetBorder("Trang_1","chon2_"+i,"#00ff00");
		}
		else	SetBorder("Trang_1","chon2_"+i,"#ff0000");
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
			while(a+b>100 || a%10 + b%10>=10)
			{
				a= Random(limit)+10;
				b= Random(limit)+10;
			}
			da=a+b;
			SetText("Trang_1","bai2a_"+i,a+" + "+b + " = ");
			}
		else //-
			{
			while(a<b || a%10 < b%10)
			{
				a= Random(limit)+10;
				b= Random(limit)+10;
			}
			da=a-b;
			SetText("Trang_1","bai2a_"+i,a+" - "+b + " = ");
			}
		SetText("Trang_1","kq2a_"+i,"");
		SetBorder("Trang_1","kq2a_"+i,"#000000",1);
		kq3a[i]=da;
	}
}
function Diem3a()
{
var diem=0;
for(var i=0;i<4;i++)
 if(kq3a[i]== GetText("Trang_1","kq2a_"+i))
	{
	diem=diem+0.25;
	SetBorder("Trang_1","kq2a_"+i,"#00ff00");
	}
 else SetBorder("Trang_1","kq2a_"+i,"#ff0000");
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
		SetText("Trang_1","bai2b_"+i,a + dau1 + b + dau2+ c + " = ");
		SetText("Trang_1","kq2b_"+i,"");
		SetBorder("Trang_1","kq2b_"+i,"#000000",1);
	}
}
function Diem3b()
{
var diem=0;
for(var i=0;i<4;i++)
 if(kq3b[i]== GetText("Trang_1","kq2b_"+i))
	{
	diem=diem+0.25;
	SetBorder("Trang_1","kq2b_"+i,"#00ff00");
	}
 else SetBorder("Trang_1","kq2b_"+i,"#ff0000");
return diem;
}

var kq4=[0,0,0,0];
function  Bai4(){
   	var text = "Mẹ và Lan ra vườn hái được ... quả cam, trong đó Lan hái được .... quả cam. Hỏi Mẹ hái được bao nhiêu quả cam?";
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
var kq5=[2,4];
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
        if(GetText("Trang_3","bai5_0")==kq5[0]){
		diem=diem+0.5;
	  	SetBorder("Trang_3","bai5_0","#00ff00",1);
		}
	  else SetBorder("Trang_3","bai5_0","#ff0000",1);	
//
   if(GetText("Trang_3","bai5_1")==kq5[1]){
		diem=diem+1;
	  	SetBorder("Trang_3","bai5_1","#00ff00",1);
		}
	  else SetBorder("Trang_3","bai5_1","#ff0000",1);	
 
return diem;
}
var kq6=[4,11,18,25];
var len6=0;
function Bai6(){
 var text ="Cho ba chữ số ... ; ... ; ... ; hãy viết tất cả các số có hai chữ số khác nhau được lập bởi ba chữ số đã cho?";
 var a= Random(10);
 var b= Random(10);
 var c= Random(10);
 while(a==b || a== c || b==c)
	{
		a= Random(10);
 		b= Random(10);
		c= Random(10);

	}
	text= replaceStr(text,"...",a, 0, 1);
	text= replaceStr(text,"...",b, 0, 1);
	text= replaceStr(text,"...",c, 0, 1);
	SetText("Trang_3","de_bai_6",text);
  
	var kq=[a,b,c];
	var l=0;
	for(var m=0;m<3;m++)
		for(var n=0;n<3;n++){
		if(m!=n && kq[m]!=0)
		{
		kq6[l]= kq[m]*10+kq[n];
		l++;
		}
	}
	 for(var i=0;i<l;i++){
        SetText("Trang_3","bai6_"+i,"");
	  SetBorder("Trang_3","bai6_"+i,"#000000",1);
	  SetShowObject("Trang_3","bai6_"+i,1);
	  }
	 for(i=l;i<6;i++){
        SetText("Trang_3","bai6_"+i,"");
	  SetShowObject("Trang_3","bai6_"+i,0);
	  }
	len6=l;
}
function DiemBai6(){
   var diem=0;//max 1diem
 for(var i=0;i<len6;i++){
	  var tt= GetText("Trang_3","bai6_"+i);
	  var x=0;
	  var b_exit= false;
		while(x<len6 && !b_exit)
			{
			if(tt==kq6[x]){
				diem=diem+0.25;
				SetBorder("Trang_3","bai6_"+i,"#00ff00",1);
				kq6[x]="";
				b_exit= true;
				}
			    x++;
			}
		if(b_exit== false)
			SetBorder("Trang_3","bai6_"+i,"#ff0000",1);
	  }
return diem;
}
function Trang_1()
{
SetShowObject("Trang_1","Group_1",0);
Bai1();
Bai2();
Bai3a();
Bai3b();
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
var cau1_4 = CreText('cau1_4',98,165,436,24,"e). Buổi tối em thường đi ngủ lúc   ......   giờ.",'rgba(0,0,0,0)','#ffffff','#282828','#282828','',16,'Arial','Normal','left','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var cau1_3 = CreText('cau1_3',96,134,436,24,"d). Buổi tối em thường học bài lúc   ......   giờ.",'rgba(0,0,0,0)','#ffffff','#282828','#282828','',16,'Arial','Normal','left','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var cau1_2 = CreText('cau1_2',96,105,436,24,"c). Buổi chiều trường em tan học vào lúc   ......   giờ.",'rgba(0,0,0,0)','#ffffff','#282828','#282828','',16,'Arial','Normal','left','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var cau1_1 = CreText('cau1_1',96,76,436,24,"b.) Buổi sáng trường em vào học lúc   ......  giờ.",'rgba(0,0,0,0)','#ffffff','#282828','#282828','',16,'Arial','Normal','left','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var cau1_0 = CreText('cau1_0',96,47,447,24,"a). Buổi sáng em thường ngủ dậy vào lúc  ......   giờ.",'rgba(0,0,0,0)','#ffffff','#282828','#282828','',16,'Arial','Normal','left','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var de_bai_1 = CreText('de_bai_1',61,21,453,26,"Viết số thích hợp vào dấu chấm?",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','bottom',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var de = CreText('de',0,-1,639,26,"ĐỀ THI CUỐI NĂM TOÁN LỚP 1",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','bottom',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so_0 = CreText('so_0',408,39,33,26,"21",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
so_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var so_1 = CreText('so_1',381,67,29,26,"32",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
so_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var so_2 = CreText('so_2',409,100,29,26,"43",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
so_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var so_3 = CreText('so_3',359,129,29,26,"54",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
so_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var so_4 = CreText('so_4',352,163,29,26,"65",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
so_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var de_bai = CreText('de_bai',72,194,391,25,"Đúng ghi Đ sai ghi S vào ô trống.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',3,'0.00','8','0',1,'#ffffff','rgba(102,102,102,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_1 = CreText('DrawText_1',6,194,54,25,"Bài 2:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Bold','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
DrawText_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Bai2();
InvalidateObj("Trang_1","");
  return;
}
 );
var bai2_1 = CreText('bai2_1',164,219,34,70,"42\r\n16\r\n58",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var gach_0 = CreText('gach_0',80,261,45,1,"",'#000000','#000000','#000000','#000000','',16,'Arial','Normal','right','bottom',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dau_0 = CreText('dau_0',78,237,23,21,"+",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dau_1 = CreText('dau_1',147,237,23,21,"+",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dau_2 = CreText('dau_2',216,237,23,21,"+",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dau_3 = CreText('dau_3',285,237,23,21,"+",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dau_4 = CreText('dau_4',354,237,23,21,"+",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dau_5 = CreText('dau_5',424,237,23,21,"+",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai2_0 = CreText('bai2_0',94,219,34,70,"42\r\n16\r\n58",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai2_2 = CreText('bai2_2',234,219,34,70,"42\r\n16\r\n58",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai2_3 = CreText('bai2_3',304,219,34,70,"42\r\n16\r\n58",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai2_4 = CreText('bai2_4',374,219,34,70,"42\r\n16\r\n58",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai2_5 = CreText('bai2_5',448,219,34,70,"42\r\n16\r\n58",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var gach_1 = CreText('gach_1',151,261,45,1,"",'#000000','#000000','#000000','#000000','',16,'Arial','Normal','right','bottom',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var gach_2 = CreText('gach_2',222,261,45,1,"",'#000000','#000000','#000000','#000000','',16,'Arial','Normal','right','bottom',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var gach_3 = CreText('gach_3',293,261,45,1,"",'#000000','#000000','#000000','#000000','',16,'Arial','Normal','right','bottom',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var gach_4 = CreText('gach_4',364,261,45,1,"",'#000000','#000000','#000000','#000000','',16,'Arial','Normal','right','bottom',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var gach_5 = CreText('gach_5',436,261,45,1,"",'#000000','#000000','#000000','#000000','',16,'Arial','Normal','right','bottom',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var chon2_0 = CreText('chon2_0',123,262,21,19,"Đ",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','bottom',0,'0.00','30','30',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
chon2_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var chon2_1 = CreText('chon2_1',193,262,21,19,"Đ",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
chon2_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var chon2_2 = CreText('chon2_2',263,262,21,19,"Đ",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
chon2_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var chon2_3 = CreText('chon2_3',333,262,21,19,"Đ",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
chon2_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var chon2_4 = CreText('chon2_4',403,262,21,19,"Đ",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
chon2_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var chon2_5 = CreText('chon2_5',476,262,21,19,"Đ",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
chon2_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonSo();
  return;
}
 );
var DrawText_18 = CreText('DrawText_18',6,296,139,28,"Bài 3. Tính?",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Bold','left','middle',3,'0.00','8','0',1,'#ffffff','rgba(102,102,102,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
DrawText_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Bai3a();
Bai3b();
InvalidateObj("Trang_1","");
  return;
}
 );
var bai2a_0 = CreText('bai2a_0',76,331,127,26,"0",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','right','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai2a_1 = CreText('bai2a_1',76,368,127,26,"0",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','right','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai2a_2 = CreText('bai2a_2',76,405,127,26,"0",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','right','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai2a_3 = CreText('bai2a_3',77,443,127,26,"0",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','right','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var kq2a_0 = CreText('kq2a_0',218,331,45,25,"0",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq2a_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var kq2a_1 = CreText('kq2a_1',218,368,45,25,"0",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq2a_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var kq2a_2 = CreText('kq2a_2',218,405,45,25,"...",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq2a_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var kq2a_3 = CreText('kq2a_3',219,444,45,25,"...",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq2a_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var bai2b_0 = CreText('bai2b_0',358,329,127,26,"0",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','right','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai2b_1 = CreText('bai2b_1',358,367,127,26,"0",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','right','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai2b_2 = CreText('bai2b_2',358,405,127,26,"0",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','right','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai2b_3 = CreText('bai2b_3',358,444,127,26,"0",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','right','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var kq2b_0 = CreText('kq2b_0',493,329,45,25,"0",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq2b_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var kq2b_1 = CreText('kq2b_1',493,367,45,25,"0",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq2b_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var kq2b_2 = CreText('kq2b_2',493,405,45,25,"...",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq2b_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var kq2b_3 = CreText('kq2b_3',493,444,45,25,"...",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq2b_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var _3a = CreText('_3a',63,322,38,30,"a).",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Verdana','Normal','left','top',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_3a.on('mouseup touchend dragend',function(evt)/*---dragend---*/
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
var _3b = CreText('_3b',327,325,37,30,"b).",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Verdana','Normal','left','top',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_3b.on('mouseup touchend dragend',function(evt)/*---dragend---*/
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
var DrawText_10 = CreText('DrawText_10',6,21,54,26,"Bài 1:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Bold','left','bottom',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var clear_one = CreText('clear_one',32,1,27,22,"←",'#ffc0cb','#ffffff','#000000','#ffffff','',14,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffe4e1','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
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
var clear_all = CreText('clear_all',59,1,27,22,"C",'#ffc0cb','#ffffff','#000000','#ffffff','',14,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffe4e1','3','1','rgba(0,0,0,0)','0','0','4','0',2,0, 'rgba(0,0,0,0)',0,1.50);
clear_all.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
      keyNewValue = "";
	SetText("",objectShowKey,"");
	InvalidateObj("",objectShowKey);;
  return;
}
 );
var dau_bang = CreText('dau_bang',32,89,27,22,"=",'#afeeee','#ffffff','#000000','#ffffff','',14,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
dau_bang.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_be = CreText('dau_be',59,89,27,22,"<",'#afeeee','#ffffff','#000000','#ffffff','',14,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
dau_be.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_lon = CreText('dau_lon',1,89,31,22,">",'#afeeee','#ffffff','#000000','#ffffff','',14,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
dau_lon.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var ok = CreText('ok',41,112,45,22,"Đồng ý",'#98fb98','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#e0fee0','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
ok.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
var _0 = CreText('_0',1,1,31,22,"0",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var huy = CreText('huy',1,112,40,22,"Hủy",'#ffc0cb','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffe4e1','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
huy.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetText("",objectShowKey,keyOldValue);
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
var _9 = CreText('_9',59,67,27,22,"9",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',2,0, 'rgba(0,0,0,0)',0,1.50);
_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _8 = CreText('_8',32,67,27,22,"8",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _7 = CreText('_7',1,67,31,22,"7",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _6 = CreText('_6',59,45,27,22,"6",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',2,0, 'rgba(0,0,0,0)',0,1.50);
_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _5 = CreText('_5',32,45,27,22,"5",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _4 = CreText('_4',1,45,31,22,"4",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _3 = CreText('_3',59,23,27,22,"3",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',2,0, 'rgba(0,0,0,0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _2 = CreText('_2',32,23,27,22,"2",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _1 = CreText('_1',1,23,31,22,"1",'#d8d8d8','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:89,height:137});
Group_1.add(_0,clear_one,clear_all,_1,_2,_3,_4,_5,_6,_7,_8,_9,dau_lon,dau_bang,dau_be,huy,ok);
Trang_1.add(Trang_1_Backrounnd,cau1_4,cau1_3,cau1_2,cau1_1,cau1_0,de_bai_1,de,so_0,so_1,so_2,so_3,so_4,de_bai,DrawText_1,bai2_1,gach_0,dau_0,dau_1,dau_2,dau_3,dau_4,dau_5,bai2_0,bai2_2,bai2_3,bai2_4,bai2_5,gach_1,gach_2,gach_3,gach_4,gach_5,chon2_0,chon2_1,chon2_2,chon2_3,chon2_4,chon2_5,DrawText_18,bai2a_0,bai2a_1,bai2a_2,bai2a_3,kq2a_0,kq2a_1,kq2a_2,kq2a_3,bai2b_0,bai2b_1,bai2b_2,bai2b_3,kq2b_0,kq2b_1,kq2b_2,kq2b_3,_3a,_3b,DrawText_10,Group_1);
stage.add(Trang_1);

 var Trang_3 = new Kinetic.Layer({name: 'Trang_3',callback:'Trang_3()',x:0,y:480});
var Trang_3_Backrounnd = CreText('Trang_3_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
var cau_hoi = CreText('cau_hoi',68,16,473,52,"Mẹ và Lan ra vườn hái được ... quả cam, trong đó Lan hái được .... quả cam. Hỏi Mẹ hái được bao nhiêu quả cam?",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','left','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_giai = CreText('bai_giai',215,58,71,27,"Bài giải:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Italic','left','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var text_tam = CreText('text_tam',64,95,307,102,"Số cam mẹ và Lan hái được:\r\n\r\nSố quả cam Lan hái được: \r\n\r\nSố quả cam mẹ hái được:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','left','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai4_1 = CreText('bai4_1',267,121,36,27,"Đáp số:",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai4_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var bai4_0 = CreText('bai4_0',283,85,36,27,"Đáp số:",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
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
var bai4_2 = CreText('bai4_2',263,158,139,27,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai4_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var bai_4 = CreText('bai_4',8,18,54,22,"Bài 4:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Bold','left','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_1 = CreText('DrawText_1',11,242,54,22,"Bài 5:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Bold','left','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_2 = CreText('DrawText_2',71,243,328,110,"Viết số thích hợp vào ô trống.\r\nHình vẽ bên có:\r\na). Có ........ hình vuông\r\n\r\nb). Có ........ hình tam giác",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','left','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Drawtext_1 = CreText('Draw text_1',396,248,100,86,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#282828','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai5_0 = CreText('bai5_0',127,273,37,25,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bai5_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var bai5_1 = CreText('bai5_1',125,309,37,25,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bai5_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var DrawText_3 = CreText('DrawText_3',11,360,54,22,"Bài 6:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Bold','left','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
DrawText_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Bai6();
InvalidateObj("Trang_3","");
  return;
}
 );
var de_bai_6 = CreText('de_bai_6',71,359,541,44,"Cho ba chữ số ... ; ... ; ... ; hãy viết tất cả các số có hai chữ số khác nhau được lập bởi ba chữ số đã cho?",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','left','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai6_0 = CreText('bai6_0',77,405,36,27,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai6_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var bai6_1 = CreText('bai6_1',127,405,36,27,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#000000','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai6_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var bai6_2 = CreText('bai6_2',177,405,36,27,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai6_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var bai6_3 = CreText('bai6_3',227,405,36,27,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai6_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var m_diem = CreText('m_diem',204,80,252,141,"8",'rgba(230,230,230,1.11)','#ffffff','#0080ff','#ffffff','',48,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','rgba(230,230,230,1.11)','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var label = CreText('label',225,106,201,24,"Bạn được",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_lam_lai = CreText('bt_lam_lai',265,179,125,31,"Làm Lại",'#0080c0','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#4fa7ff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
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
var nop_bai = CreText('nop_bai',291,446,89,29,"Nộp Bài",'#8b0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#ff0000','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
nop_bai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var diem= DiemBai1()+ DiemBai2()+Diem3a()+Diem3b()+DiemBai4()+DiemBai5()+DiemBai6();
if(diem>10) diem=10;
SetText("Trang_3","m_diem",diem);
SetShowObject("Trang_3","bang_diem",1);
SetShowObject("Trang_3","",0);
InvalidateObj("Trang_3","");
InvalidateObj("Trang_1","");
UpdateScore(diem);
  return;
}
 );
var t_mess = CreText('t_mess',204,80,252,21,"Thông báo điểm",'rgba(127,127,127,1.11)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',1,'#ffffff','rgba(40,40,40,1.11)','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_7 = CreText('DrawText_7',415,156,125,29,"(ví dụ: 10-5=5)",'rgba(0,0,0,0)','#ffffff','#7f7f7f','#7f7f7f','',12,'Arial','Italic','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_5 = CreText('DrawText_5',496,248,100,87,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#282828','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_6 = CreText('DrawText_6',396,249,200,86,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',4,'0.00','100','0',1,'#282828','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai6_4 = CreText('bai6_4',277,405,36,27,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai6_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var bai6_5 = CreText('bai6_5',327,405,36,27,"",'rgba(0,0,0,0)','#ffffff','#0000ff','#0000ff','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai6_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var bang_diem = new Kinetic.Group({name:'bang_diem',x:0,y:0,width:256,height:145});
bang_diem.add(m_diem,label,bt_lam_lai,t_mess);
Trang_3.add(Trang_3_Backrounnd,cau_hoi,bai_giai,text_tam,bai4_1,bai4_0,bai4_3,dap_so,bai4_2,bai_4,DrawText_1,DrawText_2,Drawtext_1,bai5_0,bai5_1,DrawText_3,de_bai_6,bai6_0,bai6_1,bai6_2,bai6_3,nop_bai,DrawText_7,DrawText_5,DrawText_6,bai6_4,bai6_5,bang_diem);
stage.add(Trang_3);
InitLacVietScript();
};
