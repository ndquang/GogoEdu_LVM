folder_Resource ='data/de_kiem_tra_giua_ky_2'
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

function   ShowKeyNum( namekey)
{
AddObjToCurentPage(name_keyboard);
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

var arTam=[0,0,0,0,0];
function  CreateRam( m_size){
   var Count = 0;
   for (var i = 0; i < 8 ; i++)
   {
    var bb = true;
    var iNN ;
    while (bb)
    {
    iNN = Random(m_size)+10;
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
var kq1a=[0,0,0,0,0];
function TaoBai1_a()
{
GetVer();
CreateRam(90);
  for(var i=0;i<4;i++)	
	{
		    var c= leftStr(arTam[i],1);
		    var dv= arTam[i]%10;
		    if(c==dv)
			kq1a[i]="Đ";
		    else {
			var x= Random(3);
			if(x<2)
				kq1a[i]="Đ";
			else kq1a[i]="S";
		    }
		    var tt="";
		    if(kq1a[i]=="Đ")	
		    tt= "Số " + arTam[i] + " gồm " + c + " chục và " + dv + " đơn vị";
		    else tt= "Số " + arTam[i] + " gồm " + dv + " chục và " + c + " đơn vị";	
		    SetText("Trang_1","a1_"+i,tt);
		    SetText("Trang_1","kq1a_"+i,"");
		    SetBorder("Trang_1","kq1a_"+i,"#ffffff",1);

		 	}
}
var kq1b=[0,0,0,0,0];
function TaoBai1_b()
{
CreateRam(10);
  for(var i=0;i<2;i++)	
	{
		      var x= Random(3);
			if(x<2)
				kq1b[i]="Đ";
			else kq1b[i]="S";
                var tr_sau= Random(2);
		    var tt="";
		    if(tr_sau==0)
			{
			if(kq1b[i]=="Đ"){
				var so= arTam[i]-1;
		    		tt= "Số liền trước của số " + arTam[i] +" là " +so;
				}
		    	else {
				var so= arTam[i]+1;
				tt= "Số liền trước của số " + arTam[i] +" là " +so;
				}
			}
		    else if(tr_sau==1)
			{
			if(kq1b[i]=="Đ"){
				var so= arTam[i]+1;
		    		tt= "Số liền sau của số " + arTam[i] +" là " +so;
				}
		    	else {
				var so= arTam[i]-1;
				tt= "Số liền sau của số " + arTam[i] +" là " +so;
				}
			}
		    SetText("Trang_1","b1_"+i,tt);
		    SetText("Trang_1","kq1b_"+i,"");
		    SetBorder("Trang_1","kq1b_"+i,"#ffffff",1);
		 	}
}

function  InPut(){
var tt = GetText("","");
 if(tt!="Đ")
	SetText("","","Đ");
 else SetText("","","S");
 InvalidateObj("","");
}
var m_limit=20;
var kq2=[0,0,0,0,0];
function TaoBai2()
{
  for(var i=0;i<6;i++)	
	{
		var a= Random(10)+10;
		var b= Random(20-a);
		var phep= Random(2);
		var da=0;
		if(phep==0){ //+
			da=a+b;
			SetText("Trang_1","bai2_"+i,a+"\n"+b);
			SetText("Trang_1","dau_"+i,"+");
			}
		else //-
			{
			a= Random(8)+12;
			b= Random(a%10)+1;
			da=a-b;
			SetText("Trang_1","bai2_"+i,a+"\n"+b);
			SetText("Trang_1","dau_"+i,"-");
			}
		SetText("Trang_1","kq_"+i,"");
		SetColor("Trang_1","kq_"+i,-1,-1,-1);
		SetBorder("Trang_1","kq_"+i,"#ffffff",1);
		kq2[i]=da;
	}
 InvalidateObj("","");
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
		SetBorder("Trang_2","kq3a_"+i,"#ffffff",1);

	}
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
		SetBorder("Trang_2","kq3b_"+i,"#ffffff",1);
	}
}


var kq4=[0,0,0,0,0];
function  Bai4BaiToan(){
   var text = "Chị hái được ... quả cam. Em hái được ... quả cam. Hỏi hai người hái được bao nhiêu quả cam?";
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
   SetText("Trang_2","cau_hoi",text);
   for(var i=0;i<6;i++){
        SetText("Trang_2","bai4_"+i,"");
	  SetBorder("Trang_2","bai4_"+i,"#ffffff",1);
	  }
}

function  CreateRamLine( m_size){
   var Count = 0;
   for (var i = 0; i < 3 ; i++)
   {
    var bb = true;
    var iNN ;
    while (bb)
    {
    iNN = Random(m_size);
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
var kq5=[0,0,0,0,0];
function Bai5()
{
	CreateRamLine(7);
      kq5[0]=arTam[0]+1;
      kq5[1]=arTam[1]+1;
      kq5[2]=arTam[2]+1;
	SetMoveView("Trang_3","thuoc",1);
	var la= GetLeft("Trang_3","a");
	var ta= GetTop("Trang_3","a");
	var wa= GetWidth("Trang_3","a");
	MoveObjectTo("Trang_3","b",la+kq5[0]*wa,ta);
	SetRect("Trang_3","line0",-1,-1,kq5[0]*wa,1);

	var lc= GetLeft("Trang_3","c");
	var tc= GetTop("Trang_3","c");
	MoveObjectTo("Trang_3","d",lc+kq5[1]*wa,tc);
	SetRect("Trang_3","line1",-1,-1,kq5[1]*wa,1);

	var lm= GetLeft("Trang_3","m");
	var tm= GetTop("Trang_3","m");
	MoveObjectTo("Trang_3","n",lm+kq5[2]*wa,tm);
	SetRect("Trang_3","line2",-1,-1,kq5[2]*wa,1);
	for (var i = 0; i < 3 ; i++){
	 SetBorder("Trang_3","kq5_"+i,"#ffffff",1);
	SetText("Trang_3","kq5_"+i,"");
	}
}

var kq6=[0,0,0,0,0];
function Bai6()
{
     var a_start= Random(20)+1;
	kq6[0]= a_start;
	var phep=0;
	for(var i=0;i<4;i++)	
	{
		phep= Random(2);
		if(phep==0){ //+
			var n= Random(20- kq6[i]);
			SetText("Trang_3","bai6_"+i,"+"+n);
			kq6[i+1]=kq6[i]+n;
			}
		else //-
			{
			var n= Random(kq6[i]%10);
			SetText("Trang_3","bai6_"+i,"-"+n);
			kq6[i+1]=kq6[i]-n;
			}
		SetBorder("Trang_3","kq6_"+i,"#ffffff",1);
		SetText("Trang_3","kq6_"+i,"");
	}
	SetText("Trang_3","kq6_"+i,kq6[i]);
}
function  Diem1()
{
 var diem=0;
 for(var i=0;i<4;i++)
	if(kq1a[i]== GetText("Trang_1","kq1a_"+i)){
		diem=diem+0.25;
		SetBorder("Trang_1","kq1a_"+i,"#00ff00",1);
		}
	else SetBorder("Trang_1","kq1a_"+i,"#ff0000",1);
for(i=0;i<2;i++)	
	if(kq1b[i]== GetText("Trang_1","kq1b_"+i)){
		diem=diem+0.25;
	SetBorder("Trang_1","kq1b_"+i,"#00ff00",1);
	}
	else SetBorder("Trang_1","kq1b_"+i,"#ff0000",1);

return diem;
}

function  Diem2()
{
 var diem=0;
 for(var i=0;i<6;i++)	
	if(kq2[i]== GetText("Trang_1","kq_"+i)){
		diem=diem+0.25;
		SetBorder("Trang_1","kq_"+i,"#00ff00",1);
	}
	else SetBorder("Trang_1","kq_"+i,"#ff0000",1);
return diem;
}
function  Diem3()
{
 var diem=0;
 for(var i=0;i<4;i++){
	if(kq3a[i]== GetText("Trang_2","kq3a_"+i)){
		diem=diem+0.375;
	SetBorder("Trang_2","kq3a_"+i,"#00ff00",1);
	}
	else SetBorder("Trang_2","kq3a_"+i,"#ff0000",1);
}
for(i=0;i<4;i++){
	if(kq3b[i]== GetText("Trang_2","kq3b_"+i)){
		diem=diem+0.25;
	SetBorder("Trang_2","kq3b_"+i,"#00ff00",1);
	}
	else SetBorder("Trang_2","kq3b_"+i,"#ff0000",1);
}

return diem;
}
function  Diem4()
{
 var diem= false;
 for(var i=0;i<6;i++)	
	if(kq4[i]!= GetText("Trang_2","bai4_"+i)){
		SetBorder("Trang_2","bai4_"+i,"#ff0000",1);
		diem= true;
		}
	else SetBorder("Trang_2","bai4_"+i,"#00ff00",1);
if(diem== false)
return 2;
else return 0;
}
function  Diem5()
{
 var diem= 0;
 for(var i=0;i<3;i++)	
	if(kq5[i]== GetText("Trang_3","kq5_"+i)){
		diem= diem+0.5;
		SetBorder("Trang_3","kq5_"+i,"#00ff00",1);
	}
	else SetBorder("Trang_3","kq5_"+i,"#ff0000",1);
return diem;
}

function  Diem6()
{
 var diem= 0;
 for(var i=0;i<4;i++)	
	if(kq6[i]== GetText("Trang_3","kq6_"+i)){
		diem= diem+0.25;
		SetBorder("Trang_3","kq6_"+i,"#00ff00",1);
	}
else SetBorder("Trang_3","kq6_"+i,"#ff0000",1);

return diem;
}
function Trang_1()
{
TaoBai1_a();
TaoBai1_b();
TaoBai2();
SetShowObject("Trang_1","Group_1",0);
SetMoveView("Trang_1","Group_1",1);
InvalidateObj("Trang_1","");
SetCursor("Trang_3", "Group_1", "pointer");
  return;
}


function Trang_2()
{
TaoBai3a();
TaoBai3b();
Bai4BaiToan();
SetShowObject("Trang_2","Group_1",0);
InvalidateObj("Trang_2","");
  return;
}

function Trang_3()
{
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
var Trang_1_Backrounnd = CreText('Trang_1_Backrounnd',0,0,640,480,'','#005151','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#005151','0','0','0','','0','0','0','0',0,0,'');
var Bai_1 = CreText('Bai_1',41,44,426,27,"Bài 1. Câu đúng chữ Đ, câu sai chữ S vào ô trống:",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var a1_0 = CreText('a1_0',100,76,302,31,"a)",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq1a_0 = CreText('kq1a_0',411,76,35,31,"Đ",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
kq1a_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InPut();
  return;
}
 );
var a1_1 = CreText('a1_1',100,113,302,31,"b)",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var a1_2 = CreText('a1_2',100,150,302,31,"c)",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var a1_3 = CreText('a1_3',100,187,302,31,"d)",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var b1_0 = CreText('b1_0',101,224,302,31,"e)",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var b1_1 = CreText('b1_1',101,261,302,31,"g)",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq1a_1 = CreText('kq1a_1',411,112,35,31,"Đ",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
kq1a_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InPut();
  return;
}
 );
var kq1a_2 = CreText('kq1a_2',411,148,35,31,"Đ",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
kq1a_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InPut();
  return;
}
 );
var kq1a_3 = CreText('kq1a_3',411,184,35,31,"Đ",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
kq1a_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InPut();
  return;
}
 );
var kq1b_0 = CreText('kq1b_0',411,225,35,31,"Đ",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
kq1b_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InPut();
  return;
}
 );
var kq1b_1 = CreText('kq1b_1',411,261,35,31,"Đ",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
kq1b_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InPut();
  return;
}
 );
var Tieu_de = CreText('Tieu_de',28,4,604,37,"ĐỀ THI KIỂM TRA GIỮA HỌC KỲ II",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_2 = CreText('bai_2',41,310,126,27,"Bài 2. Tính:",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai2_0 = CreText('bai2_0',91,343,53,66,"11\r\n1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','right','middle',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai2_1 = CreText('bai2_1',179,343,53,66,"11\r\n1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','right','middle',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai2_2 = CreText('bai2_2',274,343,53,66,"11\r\n1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','right','middle',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai2_3 = CreText('bai2_3',361,343,53,66,"11\r\n1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','right','middle',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai2_4 = CreText('bai2_4',454,343,53,66,"11\r\n1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','right','middle',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var kq_0 = CreText('kq_0',91,419,53,32,"0",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','right','bottom',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var kq_1 = CreText('kq_1',179,419,53,32,"0",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','right','bottom',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var kq_2 = CreText('kq_2',274,419,53,32,"...",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','right','bottom',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var kq_3 = CreText('kq_3',361,419,53,32,"...",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','right','bottom',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var kq_4 = CreText('kq_4',454,419,53,32,"...",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','right','bottom',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var dau_0 = CreText('dau_0',75,359,43,31,"-",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial CE','Normal','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var dau_1 = CreText('dau_1',171,359,43,31,"-",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial CE','Normal','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var dau_2 = CreText('dau_2',270,359,43,31,"-",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial CE','Normal','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var dau_3 = CreText('dau_3',355,359,43,31,"-",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial CE','Normal','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var dau_4 = CreText('dau_4',450,359,43,31,"-",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial CE','Normal','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var gach_0 = CreText('gach_0',96,407,48,3,"",'#ffffff','#ffffff','#ffffff','#ffffff','',26,'Arial CE','Normal','center','middle',0,'0.00','30','30',0,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var gach_1 = CreText('gach_1',184,407,48,3,"",'#ffffff','#ffffff','#ffffff','#ffffff','',26,'Arial CE','Normal','center','middle',0,'0.00','30','30',0,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var gach_2 = CreText('gach_2',279,407,48,3,"",'#ffffff','#ffffff','#ffffff','#ffffff','',26,'Arial CE','Normal','center','middle',0,'0.00','30','30',0,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var gach_3 = CreText('gach_3',366,407,48,3,"",'#ffffff','#ffffff','#ffffff','#ffffff','',26,'Arial CE','Normal','center','middle',0,'0.00','30','30',0,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var gach_4 = CreText('gach_4',459,407,48,3,"",'#ffffff','#ffffff','#ffffff','#ffffff','',26,'Arial CE','Normal','center','middle',0,'0.00','30','30',0,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai2_5 = CreText('bai2_5',547,343,53,66,"11\r\n1",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','right','middle',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var dau_5 = CreText('dau_5',525,359,43,31,"_",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial CE','Normal','center','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var gach_5 = CreText('gach_5',552,407,48,3,"",'#ffffff','#ffffff','#ffffff','#ffffff','',26,'Arial CE','Normal','center','middle',0,'0.00','30','30',0,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var kq_5 = CreText('kq_5',547,419,53,32,"...",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','right','bottom',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(Trang_1_Backrounnd,Bai_1,a1_0,kq1a_0,a1_1,a1_2,a1_3,b1_0,b1_1,kq1a_1,kq1a_2,kq1a_3,kq1b_0,kq1b_1,Tieu_de,bai_2,bai2_0,bai2_1,bai2_2,bai2_3,bai2_4,kq_0,kq_1,kq_2,kq_3,kq_4,dau_0,dau_1,dau_2,dau_3,dau_4,gach_0,gach_1,gach_2,gach_3,gach_4,bai2_5,dau_5,gach_5,kq_5);
stage.add(Trang_1);

 var Trang_2 = new Kinetic.Layer({name: 'Trang_2',callback:'Trang_2()',x:0,y:480});
var Trang_2_Backrounnd = CreText('Trang_2_Backrounnd',0,0,640,480,'','#005151','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#005151','0','0','0','','0','0','0','0',0,0,'');
var bai_3 = CreText('bai_3',42,8,126,27,"Bài 3. Tính:",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai3a_0 = CreText('bai3a_0',98,42,139,32,"1+2-3=",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','right','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai3a_1 = CreText('bai3a_1',98,86,139,32,"1+2-3=",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','right','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai3a_2 = CreText('bai3a_2',98,130,139,32,"1+2-3=",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','right','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai3a_3 = CreText('bai3a_3',98,172,139,32,"1+2-3=",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','right','bottom',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai3b_0 = CreText('bai3b_0',376,37,152,32,"1+2-3=",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','right','bottom',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai3b_1 = CreText('bai3b_1',376,81,152,32,"1+2-3=",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','right','bottom',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var kq3a_0 = CreText('kq3a_0',244,41,41,32,"...",'rgba(0,0,0,0)','#ffffff','#ffffff','#0000ff','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq3a_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var kq3a_1 = CreText('kq3a_1',244,85,41,32,"...",'rgba(0,0,0,0)','#ffffff','#ffffff','#0000ff','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq3a_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var kq3a_2 = CreText('kq3a_2',244,129,41,32,"...",'rgba(0,0,0,0)','#ffffff','#ffffff','#0000ff','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq3a_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var kq3a_3 = CreText('kq3a_3',246,171,41,32,"...",'rgba(0,0,0,0)','#ffffff','#ffffff','#0000ff','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq3a_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var kq3b_0 = CreText('kq3b_0',531,37,41,32,"...",'rgba(0,0,0,0)','#ffffff','#ffffff','#0000ff','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq3b_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var kq3b_1 = CreText('kq3b_1',531,81,41,32,"...",'rgba(0,0,0,0)','#ffffff','#ffffff','#0000ff','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq3b_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var bai3b_2 = CreText('bai3b_2',376,125,152,32,"1+2-3=",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','right','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var kq3b_2 = CreText('kq3b_2',531,125,41,32,"...",'rgba(0,0,0,0)','#ffffff','#ffffff','#0000ff','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq3b_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var bai3b_3 = CreText('bai3b_3',376,167,152,32,"1+2-3=",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','right','middle',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var kq3b_3 = CreText('kq3b_3',531,167,41,32,"...",'rgba(0,0,0,0)','#ffffff','#ffffff','#0000ff','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq3b_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var DrawText_15 = CreText('DrawText_15',341,43,37,30,"b).",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Verdana','Normal','left','top',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
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
var DrawText_1 = CreText('DrawText_1',69,40,38,30,"a).",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Verdana','Normal','left','top',0,'0.00','32','32',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
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
var bai_4 = CreText('bai_4',42,231,66,27,"Bài 4:",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi = CreText('cau_hoi',96,225,473,52,"Chị hái được ... quả cam. Em hái được ... quả cam. Hỏi hai người hái được bao nhiêu quả cam?",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_giai = CreText('bai_giai',243,273,71,27,"Bài giải:",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var text_tam = CreText('text_tam',92,308,462,102,"Số quả cam chị hái là:\r\n\r\nSố quả cam em hái là: \r\n\r\nTổng số quả cam chị và em hái được là:          +          =   ",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','top',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var text_dap_so = CreText('text_dap_so',277,422,234,29,"Đáp số: ",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Italic','right','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai4_0 = CreText('bai4_0',267,298,36,27,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#0000ff','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai4_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var bai4_1 = CreText('bai4_1',267,334,36,27,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#0000ff','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai4_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var bai4_5 = CreText('bai4_5',514,415,36,27,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#0000ff','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai4_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var bai4_2 = CreText('bai4_2',403,369,36,27,"12",'rgba(0,0,0,0)','#ffffff','#ffffff','#0000ff','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai4_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var bai4_3 = CreText('bai4_3',461,369,36,27,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#0000ff','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai4_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var bai4_4 = CreText('bai4_4',514,369,36,27,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#0000ff','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
bai4_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_2.add(Trang_2_Backrounnd,bai_3,bai3a_0,bai3a_1,bai3a_2,bai3a_3,bai3b_0,bai3b_1,kq3a_0,kq3a_1,kq3a_2,kq3a_3,kq3b_0,kq3b_1,bai3b_2,kq3b_2,bai3b_3,kq3b_3,DrawText_15,DrawText_1,bai_4,cau_hoi,bai_giai,text_tam,text_dap_so,bai4_0,bai4_1,bai4_5,bai4_2,bai4_3,bai4_4);
stage.add(Trang_2);

 var Trang_3 = new Kinetic.Layer({name: 'Trang_3',callback:'Trang_3()',x:0,y:960});
var Trang_3_Backrounnd = CreText('Trang_3_Backrounnd',0,0,640,480,'','#005151','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#005151','0','0','0','','0','0','0','0',0,0,'');
var mui_ten = CreText('mui_ten',169,364,349,41,"→        →        →        →\r\n",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',24,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai_4 = CreText('bai_4',50,11,86,29,"Bài 5:",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var thuoc = CreText('thuoc',79,256,399,41,'','rgba(0,0,0,0)','','','','ID_IMAGE1.JPG',0,'','','','',0,'0.00','32','32',1,'rgba(0,0,0,0)','','2','2','','0','0','4','1',0,0, '#808080');
thuoc.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
MoveObjectTo("","",-1,-1);
  return;
}
 );
var line0 = CreText('line0',82,78,406,2,"",'#ffffff','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var c = CreText('c',63,104,38,47,"C\r\n●",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var a = CreText('a',63,44,38,47,"A\r\n●",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var b = CreText('b',236,44,38,47,"B\r\n●",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var d = CreText('d',236,104,38,47,"D\r\n●",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var m = CreText('m',63,168,38,47,"M\r\n●",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var n = CreText('n',236,168,38,47,"N\r\n●",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var line1 = CreText('line1',81,138,406,2,"",'#ffffff','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var line2 = CreText('line2',80,202,406,2,"",'#ffffff','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var begin = CreText('begin',251,426,120,37,"Nộp Bài",'#8b0000','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#ff0000','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
begin.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
var diem= Diem1()+Diem2()+Diem3()+Diem4()+Diem5()+Diem6();
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
var DrawText_1 = CreText('DrawText_1',93,89,165,34,"AB=           cm",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_2 = CreText('DrawText_2',93,157,165,34,"CD=           cm",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_3 = CreText('DrawText_3',93,223,165,34,"MN=           cm",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','30','30',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq5_0 = CreText('kq5_0',160,88,41,32,"3",'rgba(0,0,0,0)','#ffffff','#ffffff','#0000ff','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq5_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var kq5_1 = CreText('kq5_1',160,151,41,32,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#0000ff','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq5_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var kq5_2 = CreText('kq5_2',160,215,41,32,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#0000ff','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq5_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var Drawtext_1 = CreText('Draw text_1',121,9,373,33,"Đo độ dài đoạn thẳng rồi viết số đo.",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_4 = CreText('DrawText_4',50,310,86,34,"Bài 6:",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var DrawText_5 = CreText('DrawText_5',121,310,373,33,"Viết số thích hợp vào ô trống",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kq6_0 = CreText('kq6_0',122,365,41,32,"3",'rgba(0,0,0,0)','#ffffff','#ffffff','#0000ff','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq6_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var kq6_1 = CreText('kq6_1',203,365,41,32,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#0000ff','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq6_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var kq6_2 = CreText('kq6_2',284,365,41,32,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#0000ff','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq6_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var kq6_3 = CreText('kq6_3',365,365,41,32,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#0000ff','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
kq6_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
var kq6_4 = CreText('kq6_4',446,365,41,32,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#0000ff','',20,'Arial','Normal','center','bottom',0,'0.00','32','32',1,'#ffffff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bai6_0 = CreText('bai6_0',165,358,32,26,"+3",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','bottom',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai6_1 = CreText('bai6_1',248,358,32,26,"+3",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','bottom',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai6_2 = CreText('bai6_2',329,358,32,26,"+3",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','bottom',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bai6_3 = CreText('bai6_3',409,358,32,26,"+3",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','bottom',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var clear_one = CreText('clear_one',30,-3,27,22,"←",'#ffc0cb','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffe4e1','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
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
var clear_all = CreText('clear_all',57,-3,27,22,"C",'#ffc0cb','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffe4e1','3','1','rgba(0,0,0,0)','0','0','4','0',2,0, 'rgba(0,0,0,0)',0,1.50);
clear_all.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
      keyNewValue = "";
	SetText("",objectShowKey,"");
	InvalidateObj("",objectShowKey);;
  return;
}
 );
var dau_bang = CreText('dau_bang',30,85,27,22,"=",'#afeeee','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
dau_bang.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_be = CreText('dau_be',57,85,27,22,"<",'#afeeee','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
dau_be.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_lon = CreText('dau_lon',-1,85,31,22,">",'#afeeee','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
dau_lon.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var ok = CreText('ok',39,107,45,22,"Đồng ý",'#98fb98','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#e0fee0','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
ok.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
var _0 = CreText('_0',-1,-3,31,22,"0",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var huy = CreText('huy',-1,107,40,22,"Hủy",'#ffc0cb','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffe4e1','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
huy.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetText("",objectShowKey,keyOldValue);
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
var _9 = CreText('_9',57,63,27,22,"9",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',2,0, 'rgba(0,0,0,0)',0,1.50);
_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _8 = CreText('_8',30,63,27,22,"8",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _7 = CreText('_7',-1,63,31,22,"7",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _6 = CreText('_6',57,41,27,22,"6",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',2,0, 'rgba(0,0,0,0)',0,1.50);
_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _5 = CreText('_5',30,41,27,22,"5",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _4 = CreText('_4',-1,41,31,22,"4",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _3 = CreText('_3',57,19,27,22,"3",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',2,0, 'rgba(0,0,0,0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _2 = CreText('_2',30,19,27,22,"2",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _1 = CreText('_1',-1,19,31,22,"1",'#d8d8d8','#ffffff','#000000','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#7f7f7f','#ffffff','3','1','rgba(0,0,0,0)','0','0','4','0',1,0, 'rgba(0,0,0,0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var m_diem = CreText('m_diem',180,128,320,169,"8",'rgba(230,230,230,1.11)','#ffffff','#0080ff','#ffffff','',48,'Arial','Normal','center','middle',0,'0.00','30','30',1,'#ffffff','rgba(230,230,230,1.11)','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var t_mess = CreText('t_mess',180,128,320,26,"http://gamechocon.com",'rgba(127,127,127,1.11)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','30','30',1,'#ffffff','rgba(40,40,40,1.11)','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var label = CreText('label',218,156,247,27,"Bạn được",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_lam_lai = CreText('bt_lam_lai',279,251,120,39,"Làm Lại",'#0080c0','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','30','30',1,'#ffffff','#4fa7ff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TaoBai1_a();
TaoBai1_b();
TaoBai2();
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
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:89,height:136});
Group_1.add(clear_one,clear_all,dau_bang,dau_be,dau_lon,ok,_0,huy,_9,_8,_7,_6,_5,_4,_3,_2,_1);
var bang_diem = new Kinetic.Group({name:'bang_diem',x:0,y:0,width:324,height:173});
bang_diem.add(m_diem,label,t_mess,bt_lam_lai);
Trang_3.add(Trang_3_Backrounnd,mui_ten,bai_4,thuoc,line0,c,a,b,d,m,n,line1,line2,begin,DrawText_1,DrawText_2,DrawText_3,kq5_0,kq5_1,kq5_2,Drawtext_1,DrawText_4,DrawText_5,kq6_0,kq6_1,kq6_2,kq6_3,kq6_4,bai6_0,bai6_1,bai6_2,bai6_3,Group_1,bang_diem);
stage.add(Trang_3);
InitLacVietScript();
};
