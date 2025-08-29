folder_Resource ='data/de_kiem_tra_giua_ky_2B'
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
SetShowObject("Trang_1","Group1",0);
SetShowObject("Trang_2","Group1",0);
SetShowObject("Trang_3","Group1",0);

var x_to= GetLeft("","")+ GetWidth("","")- GetWidth("",namekey);
var y_to= GetTop("","")+ GetHeight("","");
if (GetHeight("", namekey) + y_to > 480)
    y_to= GetTop("","")- GetHeight("",namekey);
if (x_to<0) x_to=1;
MoveObjectTo("",namekey,x_to,y_to);
SetShowObject("",namekey,1);
InvalidateObj("",namekey);
keyOldValue= GetText("","");
objectShowKey= GetName("");
}
var m_limit=20;
var arKq=[0,0,0,0,0];
var arChon=[0,0,0,0,0];
function TaoBai1()
{
GetVer();
  for(var i=0;i<4;i++)	
	{
		var da=0;
		var phep= Random(2);
		if(phep==0){ //+
			var a= Random(m_limit);
			var b= Random(m_limit-a);
			da=a+b;
			SetText("","t_"+i,a+" + "+b);
			}
		else //-
			{
			var a= Random(m_limit-5)+5;
			var b= Random(a%10);
			da=a-b;
			SetText("","t_"+i,a+" - "+b);
			}
		arKq[i]=da;
		arChon[i]="";
		SetBorder("Trang_1","t_"+i,"#0000ff",1);
		phep= Random(2);
		if(phep==0){ //+
			var a= Random(arKq[i]);
			var b= arKq[i]-a;
			da=a+b;
			SetText("","p_"+i,a+" + "+b);
			}
		else //-
			{
			var a= Random(m_limit);
			var b= Random(a%10);
			var xxx= a-b;
			var dem=0;
			while(xxx != arKq[i] && dem< m_limit){
				a= Random(m_limit);
				b= Random(a%10);
				xxx= a-b;
				dem=dem+1;
			}
			if(dem>=m_limit){
				a= Random(arKq[i]);
				b= arKq[i]-a;
				SetText("","p_"+i,a+" + "+b);
			 }
			 else SetText("","p_"+i,a+" - "+b);
			}
		SetColor("","t_"+i,"#ffffff");
	}
 for(i=0;i<10;i++)	
	{
		var x= Random(4);
		var y= Random(4);
		while(x==y)
			y= Random(4);
		var tamx= GetText("Trang_1","p_"+x);
		var tamy= GetText("Trang_1","p_"+y);
		SetText("Trang_1","p_"+x,tamy);
		SetText("Trang_1","p_"+y,tamx);	
	}
Transparent("","obj_paint",255);
 SetColor("","obj_paint",-1,-1,-1);
 InvalidateObj("Trang_1","");
}
var i_start=0;
function StartObj()
{
	var i=0;
	var b_e= false;
	while(i<8 && b_e== false)
	{
		if(PosInObj("t_"+i))
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
		if(PosInObj("p_"+i))
		{
			b_e= true;
			SaveObject("","obj_paint");
			arChon[i_start]= eval(GetText("","p_"+i));
		}
		i++;
	}
	if(b_e== false)
		InvalidateObj("","");
}
function  Diem1()
{
 var diem=0;
 for(var i=0;i<4;i++){
	if(arKq[i] == arChon[i]){
		diem=diem+0.5;
		SetBorder("Trang_1","t_"+i,"#00ff00",1);
		}
	else SetBorder("Trang_1","t_"+i,"#ff0000",1);
}
InvalidateObj("Trang_1","");
return diem;
}
var kq2a=[0,0,0,0,0];
function TaoBai2a()
{
  for(var i=0;i<4;i++)	
	{
		var a= Random(10)+10;
		var b= Random(20-a);
		var phep= Random(2);
		var da=0;
		if(phep==0){ //+
			da=a+b;
			SetText("Trang_2","bai2a_"+i,a+" + "+b + " = ");
			}
		else //-
			{
			a= Random(8)+12;
			b= Random(a%10)+1;
			da=a-b;
			SetText("Trang_2","bai2a_"+i,a+" - "+b + " = ");
			}
		SetText("Trang_2","kq2a_"+i,"");
		SetColor("Trang_2","kq2a_"+i,-1,-1,-1);
		SetBorder("Trang_2","kq2a_"+i,"#000000",1);
		kq2a[i]=da;
	}
}
function Diem2a(){
 var diem=0;
 for(var i=0;i<4;i++){
	if(kq2a[i] == GetText("Trang_2","kq2a_"+i))
		{
		diem=diem+0.25;
		SetBorder("Trang_2","kq2a_"+i,"#00ff00",1);
		}
	else SetBorder("Trang_2","kq2a_"+i,"#ff0000",1);
}
return diem;
}
var kq2b=[0,0,0,0,0];
function TaoBai2b()
{
  for(var i=0;i<4;i++)	
	{
		var a= Random(10);
		var b= Random(10-a);
		var phep= Random(2);
		var da=0;
		if(phep==0){ //+
			a=a*10;
			b=b*10;
			da=a+b;
			SetText("Trang_2","bai2b_"+i,a+" + "+b + " = ");
			}
		else //-
			{
			a= Random(6)+4;
			b= Random(a)+1;
			a=a*10;
			b=b*10;
			da=a-b;
			SetText("Trang_2","bai2b_"+i,a+" - "+b + " = ");
			}
		SetText("Trang_2","kq2b_"+i,"");
		SetColor("Trang_2","kq2b_"+i,-1,-1,-1);
		SetBorder("Trang_2","kq2b_"+i,"#000000",1);
		kq2b[i]=da;
	}
}
function Diem2b(){
 var diem=0;
 for(var i=0;i<4;i++){
	if(kq2b[i] == GetText("Trang_2","kq2b_"+i))
		{
		diem=diem+0.25;
		SetBorder("Trang_2","kq2b_"+i,"#00ff00",1);
		}
	else SetBorder("Trang_2","kq2b_"+i,"#ff0000",1);
}
return diem;
}
var kq3a=[0,0,0,0,0];
function TaoBai3a()
{
	 for(var i=0;i<4;i++)	
	{
		var a= Random(10)+7;
		var b= Random(20-a);
		var c= Random(20);
		var phep= Random(2);
		var da=0;
		if(phep==0){ //+
			da=a+b;
			phep= Random(2);
			if(phep==0){
				c= Random(20-da);
				SetText("Trang_2","bai3a_"+i,a+" + "+b + " + "+ c+" = ");
				kq3a[i]=da+c;
			}
			else{
		 	c= Random(da%10);
			SetText("Trang_2","bai3a_"+i,a+" + "+b + " - "+ c + " = ");
			kq3a[i]=da-c;
			}
			}
		else //-
			{
			b=  Random(a%10);
			da=a-b;
			phep= Random(2);
			if(phep==0){
				c= Random(20-da);
				SetText("Trang_2","bai3a_"+i,a+" - "+b + " + "+ c+" = ");
				kq3a[i]=da+c;
			}
			else{
		 	c= Random(da);
			SetText("Trang_2","bai3a_"+i,a+" - "+b + " - "+ c + " = ");
			kq3a[i]=da-c;
			}
			}
		SetText("Trang_2","kq3a_"+i,"");
		SetColor("Trang_2","kq3a_"+i,-1,-1,-1);
		SetBorder("Trang_2","kq3a_"+i,"#000000",1);

	}
}
function Diem3a(){
 var diem=0;
 for(var i=0;i<4;i++){
	if(kq3a[i] == GetText("Trang_2","kq3a_"+i))
		{
		diem=diem+0.25;
		SetBorder("Trang_2","kq3a_"+i,"#00ff00",1);
		}
	else SetBorder("Trang_2","kq3a_"+i,"#ff0000",1);
}
return diem;
}
var kq3b=[0,0,0,0,0];
function TaoBai3b()
{
	 for(var i=0;i<4;i++)	
	{
		var a= Random(9)+1;
		var b= Random(10-a);
		var c= Random(9)+1;
		var phep= Random(2);
		var da=0;
		if(phep==0){ //+
			da=a+b;
			phep= Random(2);
			if(phep==0){
				c= Random(10-da);
				SetText("Trang_2","bai3b_"+i,a*10+" + "+b*10 + " + "+ c*10+" = ");
				kq3b[i]=(da+c)*10;
			}
			else{
		 	c= Random(da);
			SetText("Trang_2","bai3b_"+i,a*10+" + "+b*10 + " - "+ c*10 + " = ");
			kq3b[i]=(da-c)*10;
			}
			}
		else //-
			{
			b=  Random(a)+1;
			da=a-b;
			phep= Random(2);
			if(phep==0){
				c= Random(10-da)+1;
				SetText("Trang_2","bai3b_"+i,a*10+" - "+b*10 + " + "+ c*10+" = ");
				kq3b[i]=(da+c)*10;
			}
			else{
		 	c= Random(da);
			SetText("Trang_2","bai3b_"+i,a*10+" - "+b*10 + " - "+ c*10 + " = ");
			kq3b[i]=(da-c)*10;
			}
			}
		SetText("Trang_2","kq3b_"+i,"");
		SetColor("Trang_2","kq3b_"+i,-1,-1,-1);
		SetBorder("Trang_2","kq3b_"+i,"#000000",1);
	}
}
function Diem3b(){
 var diem=0;
 for(var i=0;i<4;i++){
	if(kq3b[i] == GetText("Trang_2","kq3b_"+i))
		{
		diem=diem+0.25;
		SetBorder("Trang_2","kq3b_"+i,"#00ff00",1);
		}
	else SetBorder("Trang_2","kq3b_"+i,"#ff0000",1);
}
return diem;
}
var kq4=[0,0,0,0,0];
function  Bai4BaiToan(){
   	var text = "Đoạn thẳng AB dài ...cm. Đoạn thẳng CD dài ...cm. Hỏi cả hai đoạn thẳng dài bao nhiêu cm?";
	var soa= Random(9)+10;
	var sob= Random(20-soa)+1;
	text= replaceStr(text,"...",soa, 0, 1);
	text= replaceStr(text,"...",sob, 0, 1);
	kq4[0]= soa;
	kq4[1]= sob;
	kq4[2]= soa;
	kq4[3]= sob;
	kq4[4]= soa+sob;
	kq4[5]= soa+sob;
   SetText("Trang_3","cau_hoi",text);
   for(var i=0;i<6;i++){
        SetText("Trang_3","bai4_"+i,"");
	  SetBorder("Trang_3","bai4_"+i,"#000000",1);
	  }
}
function  Diem4()
{
 var diem= false;
 for(var i=0;i<6;i++)	
	if(kq4[i]!= GetText("Trang_3","bai4_"+i)){
		SetBorder("Trang_3","bai4_"+i,"#ff0000",1);
		diem= true;
		}
	else SetBorder("Trang_3","bai4_"+i,"#00ff00",1);
if(diem== false)
return 2;
else return 0;
}
var kq5=[0,0,0,0,0];
function  Bai5(){
   	var text = "Vẽ 3 đoạn thẳng: Đoạn thẳng AB= ...cm; đọan thẳng CD= ...cm; đoạn thẳng MN =...cm.";
	var ab= Random(9)+1;
	var cd= Random(8)+1;
	var mn= Random(7)+1;
	text= replaceStr(text,"...",ab, 0, 1);
	text= replaceStr(text,"...",cd, 0, 1);
	text= replaceStr(text,"...",mn, 0, 1);
	kq5[0]= ab;
	kq5[1]= cd;
	kq5[2]= mn;
      SetText("Trang_3","bai_5",text);
}
function  Diem5()
{
return 1.5;
}
var kq6=[0,0,0,0,0];
function  Bai6(){
   	  for(var i=0;i<10;i++){
        SetText("Trang_3","kq6_"+i,"");
	  SetBorder("Trang_3","kq6_"+i,"#000000",1);
	  }
}

function  Diem6()
{
 var diem= false;
 for(var i=0;i<10;i++)	
	if((i+10)!= GetText("Trang_3","kq6_"+i)){
		SetBorder("Trang_3","kq6_"+i,"#ff0000",1);
		diem= true;
		}
	else SetBorder("Trang_3","kq6_"+i,"#00ff00",1);
if(diem== false)
return 1;
else return 0;
}
function Trang_1()
{
SetPaint("","obj_paint",1);
PaintWidth("Trang_1","obj_paint",2);
SetPaint("","obj_paint",1);
PaintType("","obj_paint",5);
PaintColor("","obj_paint","#ff0000");
SetCursor("","obj_paint","ID_PEN");
TaoBai1();
InvalidateObj("Trang_1","");
  return;
}

function Trang_2()
{
TaoBai2a();
TaoBai2b();
TaoBai3a();
TaoBai3b();
SetShowObject("Trang_2","Group_1",0);
InvalidateObj("Trang_2","");
  return;
}

function Trang_3()
{
SetPaint("Trang_3","obj_paint",1);
PaintType("Trang_3","obj_paint",5);
PaintWidth("Trang_3","obj_paint",2);
PaintColor("Trang_3","obj_paint","#0000ff");
SetCursor("Trang_3","obj_paint","ID_PEN");
Bai4BaiToan();
Bai5();
Bai6();
SetShowObject("Trang_3","Group_1",0);
SetShowObject("Trang_3","bang_diem",0);
SetMoveView("Trang_3","bang_diem",1);
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

 var Trang_1 = new Kinetic.Layer({name: 'Trang_1',callback:'Trang_1()',x:0,y:0});
var Trang_1_Backrounnd = CreText('Trang_1_Backrounnd',0,0,640,480,'','#cae4ff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#cae4ff','0','0','0','','0','0','0','0',0,0,'');
var ttt = CreText('ttt',47,15,507,49,"Bài 1:    Nối hai phép tính có kết quả bằng nhau:",'rgba(0,0,0,0)','#ffffff','#00005e','#ffffff','',20,'Arial','Bold','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'#7f7f7f',0,1.50);
var t_0 = CreText('t_0',116,97,127,40,"1+2",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',1,'0.00','30','30',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var t_1 = CreText('t_1',116,172,127,40,"4+5",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',1,'0.00','30','30',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var t_2 = CreText('t_2',116,247,127,40,"3 +9",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',1,'0.00','30','30',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var t_3 = CreText('t_3',116,323,127,40,"4+1",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',1,'0.00','30','30',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var p_0 = CreText('p_0',353,106,127,40,"44 +43",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',1,'0.00','30','30',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var p_1 = CreText('p_1',353,180,127,40,"9",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',1,'0.00','30','30',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var p_2 = CreText('p_2',353,254,127,40,"6",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',1,'0.00','30','30',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var p_3 = CreText('p_3',351,328,127,40,"55",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',1,'0.00','30','30',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var begin = CreText('begin',525,442,96,30,"Xóa",'#0080ff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#97ddff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
begin.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TaoBai1();
  return;
}
 );
var obj_paint = CreText('obj_paint',96,79,469,326,"Nối từ bên trái qua phải",'rgba(255,255,255,0.00)','#ffffff','#000000','#ffffff','',18,'Arial','Italic','center','bottom',0,'0.00','30','30',1,'rgba(0,0,0,0)','rgba(255,255,255,0.00)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'#7f7f7f',0,1.50);
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
Trang_1.add(Trang_1_Backrounnd,ttt,t_0,t_1,t_2,t_3,p_0,p_1,p_2,p_3,begin,obj_paint);
stage.add(Trang_1);

 var Trang_2 = new Kinetic.Layer({name: 'Trang_2',callback:'Trang_2()',x:0,y:480});
var Trang_2_Backrounnd = CreText('Trang_2_Backrounnd',0,0,640,480,'','#cae4ff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#cae4ff','0','0','0','','0','0','0','0',0,0,'');
var bai_2 = CreText('bai_2',32,13,126,27,"Bài 2. Tính:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Bold','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bai_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TaoBai2a();
TaoBai2b();
InvalidateObj("Trang_2","");
  return;
}
 );
var bai2a_0 = CreText('bai2a_0',90,46,140,33,"11\r\n1",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','right','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai2a_1 = CreText('bai2a_1',90,91,140,33,"11\r\n1",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','right','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai2a_2 = CreText('bai2a_2',90,136,140,33,"11\r\n1",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','right','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai2a_3 = CreText('bai2a_3',90,183,140,33,"11\r\n1",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','right','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var kq2a_0 = CreText('kq2a_0',237,46,53,32,"0",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','right','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq2a_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var kq2a_1 = CreText('kq2a_1',237,92,53,32,"0",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','right','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq2a_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var kq2a_2 = CreText('kq2a_2',237,138,53,32,"...",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','right','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq2a_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var kq2a_3 = CreText('kq2a_3',237,184,53,32,"...",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','right','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq2a_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var bai_3 = CreText('bai_3',32,246,126,27,"Bài 3. Tính:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Bold','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bai_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TaoBai3a();
TaoBai3b();
InvalidateObj("","");
  return;
}
 );
var bai3a_0 = CreText('bai3a_0',88,280,139,32,"1+2-3=",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','right','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai3a_1 = CreText('bai3a_1',88,324,139,32,"1+2-3=",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','right','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai3a_2 = CreText('bai3a_2',88,368,139,32,"1+2-3=",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','right','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai3a_3 = CreText('bai3a_3',88,410,139,32,"1+2-3=",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','right','bottom',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai3b_0 = CreText('bai3b_0',366,275,152,32,"1+2-3=",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','right','bottom',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai3b_1 = CreText('bai3b_1',366,319,152,32,"1+2-3=",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','right','bottom',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var kq3a_0 = CreText('kq3a_0',234,279,53,32,"...",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq3a_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var kq3a_1 = CreText('kq3a_1',234,323,53,32,"...",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq3a_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var kq3a_2 = CreText('kq3a_2',234,367,53,32,"...",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq3a_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var kq3a_3 = CreText('kq3a_3',236,409,53,32,"...",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq3a_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var kq3b_0 = CreText('kq3b_0',521,275,53,32,"...",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq3b_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var kq3b_1 = CreText('kq3b_1',521,319,53,32,"...",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq3b_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var bai3b_2 = CreText('bai3b_2',366,363,152,32,"1+2-3=",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','right','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var kq3b_2 = CreText('kq3b_2',521,363,53,32,"...",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq3b_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var bai3b_3 = CreText('bai3b_3',366,405,152,32,"1+2-3=",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','right','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var kq3b_3 = CreText('kq3b_3',521,405,53,32,"...",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq3b_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var DrawText_15 = CreText('DrawText_15',331,281,37,30,"b).",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',18,'Verdana','Normal','left','top',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
DrawText_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
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
var DrawText_1 = CreText('DrawText_1',59,278,38,30,"a).",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',18,'Verdana','Normal','left','top',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
DrawText_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
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
var bai2b_0 = CreText('bai2b_0',405,44,140,33,"11\r\n1",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','right','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai2b_1 = CreText('bai2b_1',405,89,140,33,"11\r\n1",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','right','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai2b_2 = CreText('bai2b_2',405,134,140,33,"11\r\n1",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','right','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai2b_3 = CreText('bai2b_3',405,181,140,33,"11\r\n1",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','right','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var kq2b_0 = CreText('kq2b_0',552,44,53,32,"0",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','right','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq2b_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var kq2b_1 = CreText('kq2b_1',552,90,53,32,"0",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','right','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq2b_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var kq2b_2 = CreText('kq2b_2',552,136,53,32,"...",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','right','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq2b_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var kq2b_3 = CreText('kq2b_3',552,182,53,32,"...",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','right','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq2b_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var DrawText_10 = CreText('DrawText_10',62,41,38,30,"a).",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',18,'Verdana','Normal','left','top',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
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
var DrawText_11 = CreText('DrawText_11',334,44,37,30,"b).",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',18,'Verdana','Normal','left','top',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
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
var clear_one = CreText('clear_one',30,1,27,22,"←",'#ffc0cb','#ffffff','#000000','#000000','',16,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffe4e1','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
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
var clear_all = CreText('clear_all',57,1,27,22,"C",'#ffc0cb','#ffffff','#000000','#000000','',16,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffe4e1','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
clear_all.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
      keyNewValue = "";
	SetText("",objectShowKey,"");
	InvalidateObj("",objectShowKey);;
  return;
}
 );
var dau_bang = CreText('dau_bang',30,89,27,22,"=",'#c0c0c0','#ffffff','#000000','#ffffff','',16,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
dau_bang.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_be = CreText('dau_be',57,89,27,22,"<",'#c0c0c0','#ffffff','#000000','#ffffff','',16,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
dau_be.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_lon = CreText('dau_lon',-1,89,31,22,">",'#c0c0c0','#ffffff','#000000','#ffffff','',16,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
dau_lon.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var ok = CreText('ok',30,111,54,22,"Đồng ý",'#98fb98','#ffffff','#000000','#ffffff','',11,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
ok.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
var _0 = CreText('_0',-1,1,31,22,"0",'#d8d8d8','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var huy = CreText('huy',-1,111,31,22,"Hủy",'#ffc0cb','#ffffff','#000000','#ffffff','',11,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
huy.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetText("",objectShowKey,keyOldValue);
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
var _9 = CreText('_9',57,67,27,22,"9",'#d8d8d8','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _8 = CreText('_8',30,67,27,22,"8",'#d8d8d8','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _7 = CreText('_7',-1,67,31,22,"7",'#d8d8d8','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _6 = CreText('_6',57,45,27,22,"6",'#d8d8d8','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _5 = CreText('_5',30,45,27,22,"5",'#d8d8d8','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _4 = CreText('_4',-1,45,31,22,"4",'#d8d8d8','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _3 = CreText('_3',57,23,27,22,"3",'#d8d8d8','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _2 = CreText('_2',30,23,27,22,"2",'#d8d8d8','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _1 = CreText('_1',-1,23,31,22,"1",'#d8d8d8','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:89,height:136});
Group_1.add(clear_one,clear_all,dau_bang,dau_be,dau_lon,ok,_0,huy,_9,_8,_7,_6,_5,_4,_3,_2,_1);
Trang_2.add(Trang_2_Backrounnd,bai_2,bai2a_0,bai2a_1,bai2a_2,bai2a_3,kq2a_0,kq2a_1,kq2a_2,kq2a_3,bai_3,bai3a_0,bai3a_1,bai3a_2,bai3a_3,bai3b_0,bai3b_1,kq3a_0,kq3a_1,kq3a_2,kq3a_3,kq3b_0,kq3b_1,bai3b_2,kq3b_2,bai3b_3,kq3b_3,DrawText_15,DrawText_1,bai2b_0,bai2b_1,bai2b_2,bai2b_3,kq2b_0,kq2b_1,kq2b_2,kq2b_3,DrawText_10,DrawText_11,Group_1);
stage.add(Trang_2);

 var Trang_3 = new Kinetic.Layer({name: 'Trang_3',callback:'Trang_3()',x:0,y:960});
var Trang_3_Backrounnd = CreText('Trang_3_Backrounnd',0,0,640,480,'','#cae4ff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#cae4ff','0','0','0','','0','0','0','0',0,0,'');
var bai_4 = CreText('bai_4',35,1,54,22,"Bài 4:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Bold','left','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi = CreText('cau_hoi',93,1,473,52,"Chị hái được ... quả cam. Em hái được ... quả cam. Hỏi hai người hái được bao nhiêu quả cam?",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','left','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_giai = CreText('bai_giai',240,43,71,27,"Bài giải:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Italic','left','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var text_tam = CreText('text_tam',89,80,462,102,"Đoạn thẳng AB dài:\r\n\r\nĐoạn thẳng CD dài: \r\n\r\nTổng hai đoạn thẳng dài là:          +          =   ",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','left','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var text_dap_so = CreText('text_dap_so',420,182,80,29,"Đáp số: ",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Italic','right','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai4_0 = CreText('bai4_0',264,70,36,27,"",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai4_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var bai4_1 = CreText('bai4_1',264,106,36,27,"",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai4_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var bai4_2 = CreText('bai4_2',298,145,36,27,"",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai4_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var bai4_3 = CreText('bai4_3',355,145,36,27,"",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai4_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var bai4_4 = CreText('bai4_4',416,145,36,27,"",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai4_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var bai_5 = CreText('bai_5',89,221,536,53,"Vẽ 3 đoạn thẳng: Đoạn thẳng AB= ...cm; đọan thẳng CD= ...cm; đoạn thẳng MN =...cm.",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','left','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bai_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TaoBai3a();
TaoBai3b();
InvalidateObj("","");
  return;
}
 );
var obj_paint = CreText('obj_paint',141,265,366,103,"AB: \r\n\r\nCD:\r\n\r\nMN:\r\n",'rgba(64,224,208,1.11)','#ffffff','#00008b','#ffffff','ID_IMAGE6.PNG',14,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','rgba(64,224,208,1.11)','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var DrawText_1 = CreText('DrawText_1',35,221,54,22,"Bài 5:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Bold','left','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
DrawText_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Bai5();
  return;
}
 );
var DrawText_2 = CreText('DrawText_2',94,379,536,23,"Viết tất cả các số có hai chữ số, có chữ số hàng chục là 1.",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Normal','left','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
DrawText_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TaoBai3a();
TaoBai3b();
InvalidateObj("","");
  return;
}
 );
var DrawText_3 = CreText('DrawText_3',36,378,54,22,"Bài 6:",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',16,'Arial','Bold','left','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
DrawText_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Bai5();
  return;
}
 );
var kq6_0 = CreText('kq6_0',81,412,36,27,"",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq6_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var kq6_1 = CreText('kq6_1',130,412,36,27,"",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq6_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var kq6_2 = CreText('kq6_2',179,412,36,27,"",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq6_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var kq6_3 = CreText('kq6_3',228,412,36,27,"",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq6_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var kq6_4 = CreText('kq6_4',277,412,36,27,"",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq6_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var kq6_5 = CreText('kq6_5',326,412,36,27,"",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq6_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var kq6_6 = CreText('kq6_6',375,412,36,27,"",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq6_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var kq6_7 = CreText('kq6_7',424,412,36,27,"",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq6_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var kq6_8 = CreText('kq6_8',473,412,36,27,"",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq6_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var kq6_9 = CreText('kq6_9',522,412,36,27,"",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq6_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var m_diem = CreText('m_diem',167,146,320,169,"8",'rgba(230,230,230,1.11)','#ffffff','#0080ff','#ffffff','',48,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','rgba(230,230,230,1.11)','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_lam_lai = CreText('bt_lam_lai',266,269,120,39,"Làm Lại",'#0080c0','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','30','30',1,'#ffffff','#4fa7ff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TaoBai1();
TaoBai2a();
TaoBai2b();
TaoBai3a();
TaoBai3b();
Bai4BaiToan();
Bai5();
Bai6();
SetShowObject("Trang_3","bang_diem",0);
SetShowObject("Trang_3","begin",1);
InvalidateObj("Trang_1","");
InvalidateObj("Trang_2","");
InvalidateObj("Trang_3","");
  return;
}
 );
var begin = CreText('begin',262,446,103,32,"Nộp Bài",'#8b0000','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#ff0000','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
begin.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var diem= Diem1()+Diem2a()+Diem2b()+Diem3a()+Diem3b()+Diem4()+Diem5()+Diem6();
SetText("Trang_3","m_diem",diem);
SetShowObject("","bang_diem",1);
SetShowObject("","",0);
InvalidateObj("Trang_1","");
InvalidateObj("Trang_2","");
InvalidateObj("Trang_3","");
UpdateScore(diem);
  return;
}
 );
var t_mess = CreText('t_mess',168,146,320,26,"http://gamechocon.com",'rgba(127,127,127,1.11)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','30','30',1,'#ffffff','rgba(40,40,40,1.11)','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var label = CreText('label',206,174,247,27,"Bạn được",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bang_diem = new Kinetic.Group({name:'bang_diem',x:0,y:0,width:325,height:173});
bang_diem.add(t_mess,label,m_diem,bt_lam_lai);
var clear_one = CreText('clear_one',33,0,27,22,"←",'#ffc0cb','#ffffff','#000000','#000000','',16,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffe4e1','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
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
var clear_all = CreText('clear_all',60,0,27,22,"C",'#ffc0cb','#ffffff','#000000','#000000','',16,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffe4e1','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
clear_all.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
      keyNewValue = "";
	SetText("",objectShowKey,"");
	InvalidateObj("",objectShowKey);;
  return;
}
 );
var dau_bang = CreText('dau_bang',33,88,27,22,"=",'#c0c0c0','#ffffff','#000000','#ffffff','',16,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
dau_bang.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_be = CreText('dau_be',60,88,27,22,"<",'#c0c0c0','#ffffff','#000000','#ffffff','',16,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
dau_be.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_lon = CreText('dau_lon',2,88,31,22,">",'#c0c0c0','#ffffff','#000000','#ffffff','',16,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
dau_lon.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var ok = CreText('ok',33,110,54,22,"Đồng ý",'#98fb98','#ffffff','#000000','#ffffff','',11,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
ok.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
var _0 = CreText('_0',2,0,31,22,"0",'#d8d8d8','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var huy = CreText('huy',2,110,31,22,"Hủy",'#ffc0cb','#ffffff','#000000','#ffffff','',11,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
huy.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetText("",objectShowKey,keyOldValue);
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
var _9 = CreText('_9',60,66,27,22,"9",'#d8d8d8','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _8 = CreText('_8',33,66,27,22,"8",'#d8d8d8','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _7 = CreText('_7',2,66,31,22,"7",'#d8d8d8','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _6 = CreText('_6',60,44,27,22,"6",'#d8d8d8','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _5 = CreText('_5',33,44,27,22,"5",'#d8d8d8','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _4 = CreText('_4',2,44,31,22,"4",'#d8d8d8','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _3 = CreText('_3',60,22,27,22,"3",'#d8d8d8','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _2 = CreText('_2',33,22,27,22,"2",'#d8d8d8','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _1 = CreText('_1',2,22,31,22,"1",'#d8d8d8','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#c0c0c0','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var bai4_5 = CreText('bai4_5',503,175,36,27,"",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai4_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:89,height:136});
Group_1.add(clear_one,clear_all,dau_bang,dau_be,dau_lon,ok,_0,huy,_9,_8,_7,_6,_5,_4,_3,_2,_1);
Trang_3.add(Trang_3_Backrounnd,bai_4,cau_hoi,bai_giai,text_tam,text_dap_so,bai4_0,bai4_1,bai4_2,bai4_3,bai4_4,bai_5,obj_paint,DrawText_1,DrawText_2,DrawText_3,kq6_0,kq6_1,kq6_2,kq6_3,kq6_4,kq6_5,kq6_6,kq6_7,kq6_8,kq6_9,begin,bang_diem,bai4_5,Group_1);
stage.add(Trang_3);
InitLacVietScript();
};
