folder_Resource ='data/Vong_6_Toan_Lop3';
var arNumber=[0,0,0,0,0];
var m_size=20;
var m_index=0;
var m_sai=0;
var b_stop=true;
var c_sai =0 ;
var arPhep=[0,0,0,0,0];
function  CreateRam(){
   var Count = 0;
   for (var i = 0; i < m_size/2; i++)
   {
    var bb = true;
    var iNN,x,y,nc;
    while (bb)
    {
    x= Random(50)+10;
    y =  Random(5)+2;
    nc= Random(2);
    if(nc==0)
    iNN = x*y;
    else {
	  while(x%y!=0)
		{
			x=  Random(90)+10;
			y =  Random(5)+2;
		}
	iNN = x/y;
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
    if(nc==0)arPhep[Count]="x"; else arPhep[Count]=":";
    Count++;
  } 
}
var m_start="";
var m_end="";

function InitBai1()
{
m_sai=0;
m_start="";
m_end="";
CreateRam();
var xx=m_size/2;// gan=
 for (var k = 0; k < m_size/2; k++){
	arNumber[xx]=arNumber[k];
	arPhep[xx]=arPhep[k];
	xx++;
	}
 var tam=0;// tron
 for(var i = 0; i<m_size; i++)
	{
		var x= Random(m_size);
		var y= Random(m_size);
		while(x==y)
			y= Random(m_size);
      	tam= arNumber[x];
		arNumber[x]=arNumber[y];
		arNumber[y]=tam;

		tam= arPhep[x];
		arPhep[x]=arPhep[y];
		arPhep[y]=tam;
      }
 for (k = 0; k < m_size; k++){
	var xxx= Random(3);
	if(xxx==0)
	   SetText("","o_so_"+k,+arNumber[k]);
	else {
	if(arPhep[k]=="x")
  	{
    		var y =  Random(5)+2;
		while(arNumber[k]%y!=0)
			y =  Random(5)+2;
		SetText("","o_so_"+k,+arNumber[k]/y+ " x "+y);
	 }
	else if(arPhep[k]==":")// chia
	  {
		var y =  Random(5)+2;
		SetText("","o_so_"+k,arNumber[k]*y+" : "+y);
	 }
	}
	SetShowObject("","o_so_"+k,1);
	SetColor("","o_so_"+k,-1,-1,-1);
	MoveObjectTo("","o_so_"+k,-1,-1,10,5,3);
	}
SetText("","obj_view","");
SetText("","phut","5");
SetText("","giay","0");
m_index=0;
b_stop= false;
GetVer();
c_sai =0 ;
SetShowObject("","bang_diem",0);
SetTimerPage(1000);
InvalidateObj("","");
}
function FinishMove(){
	SetShowObject("",m_start,0);
	SetShowObject("",m_end,0);
	var kq = GetText("",m_start) + " = " + GetText("",m_end) ;
	SetText("","obj_view",kq);
	m_start="";
	m_end="";
	InvalidateObj("","");
}
function  Check()
{
	if(m_start!="" && m_end!="" &&m_start!=m_end)
	{	
		var _s= replaceStr(GetText("",m_start),"x","*");
		_s= replaceStr(_s,":","/");

		var _e= replaceStr(GetText("",m_end),"x","*");
		    _e= replaceStr(_e,":","/");
		if(ExecAsThread(_s) == ExecAsThread(_e))
		{
			MoveObjectTo("",m_start,GetLeft("","obj_view"),GetTop("","obj_view"),300,2,1);
			MoveObjectTo("",m_end,GetLeft("","obj_view"),GetTop("","obj_view"),300,2,1,"FinishMove()");
			PlaySound("ID_TRUE");
			m_index++;
			m_sai=0;	
		}
		else {
			SetColor("",m_start);
			SetColor("",m_end);
			PlaySound("ID_FALSE");
			c_sai++;
			m_sai++;
			m_start="";
			m_end="";	
		}		
	}
	if(m_index==m_size/2){
		KillTimerPage();
		b_stop=true;
		SetText("","label","Điểm được cập nhật:");	
		var m_diem= m_index -  c_sai;
		SetText("","m_diem",m_diem);
		UpdateScore(m_diem);
		SetShowObject("","bang_diem",1);
		}
	else if(m_sai>=3)
		{
		KillTimerPage();
		 b_stop=true;
		SetText("","label","Bạn sai 3 lần, làm lại.");	
		SetText("","m_diem","");		
		SetShowObject("","bang_diem",1);
		}
	InvalidateObj("","");
}
function ClickNumber()
{
	if(b_stop==true)
		return;
	if(m_start=="")
	{
		m_start= GetName("");
		SetColor("","","#FF6600");
	} 
	else m_end= GetName("");
	if(m_end!=m_start)
	{
		SetColor("","","#FF6600");
		Delay("Check()",200);
	}
	else m_end="";
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
var curentpos=0;
var m_dapan="";
var nextpos=0;
var m_finish= false;
function InitBai3()
{
curentpos=0;
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
function Page_1()
{
KillTimerPage();
b_stop=true;
SetText("","label","Chọn cặp ô số hoặc phép tính có kết quả bằng nhau.");
SetShowObject("","bang_diem",1);
SetText("","m_diem","");
  return;
}
function Page_1_OnTimer()
{
StartTime();
  return;
}

function Page_2_OnKeyDown()
{
  var key= GetKeyDown("");
MoveTho(key);
  return;
}
function Page_2()
{	
InitBai3();
  return;
}
function Page_2_OnTimer()
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
 height: 380 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,600,350,'','#ffffb7','','','','ID_IMAGE1.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffb7','2','2','0','','0','0','0','0',0,0,'');
var Text_5 = CreText('Text_5',410,10,140,39,":",'#d9aa7f','#ffffff','#000000','#ffffff','',24,'Arial','Normal','center','middle',11,'0.00','10','0',2,'#bf7939','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','2',2,2,'#c0c0c0',0,1.50);
var Text_9 = CreText('Text_9',10,10,140,39,"Vòng 6",'#d9aa7f','#ffffff','#000000','#ffffff','',24,'Arial','Normal','center','middle',11,'0.00','10','0',2,'#bf7939','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','2',2,2,'#c0c0c0',0,1.50);
var obj_view = CreText('obj_view',176,10,215,39,"",'#d9aa7f','#ffffff','#000000','#ffffff','',24,'Arial','Normal','center','middle',11,'0.00','10','0',2,'#bf7939','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','2',2,2,'#c0c0c0',0,1.50);
var Text_2 = CreText('Text_2',15,61,570,271,"",'#d9aa7f','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',8,'#aa6b33','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var o_so_0 = CreText('o_so_0',22,66,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_1 = CreText('o_so_1',133,66,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_2 = CreText('o_so_2',244,66,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_3 = CreText('o_so_3',355,66,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_4 = CreText('o_so_4',467,66,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_5 = CreText('o_so_5',22,131,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_6 = CreText('o_so_6',133,131,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_7 = CreText('o_so_7',244,131,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_8 = CreText('o_so_8',355,131,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_9 = CreText('o_so_9',467,131,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_10 = CreText('o_so_10',22,195,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_11 = CreText('o_so_11',133,195,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_12 = CreText('o_so_12',244,195,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_13 = CreText('o_so_13',355,195,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_14 = CreText('o_so_14',467,195,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_15 = CreText('o_so_15',22,261,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_16 = CreText('o_so_16',133,261,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_17 = CreText('o_so_17',244,261,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_18 = CreText('o_so_18',355,261,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_19 = CreText('o_so_19',467,261,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var m_diem = CreText('m_diem',190,121,231,109,"",'rgba(236,217,255,1.11)','#ffffff','#ff0000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(236,217,255,1.11)','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_lam_lai = CreText('bt_lam_lai',273,202,80,25,"Bắt Đầu",'#400080','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#8000ff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitBai1();
  return;
}
 );
var t_mess = CreText('t_mess',191,122,229,16,"Thông báo điểm",'rgba(64,0,128,1.11)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#ffffff','rgba(128,0,255,1.11)','4','1','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var label = CreText('label',187,148,233,48,"Chọn cặp ô số hoặc phép tính có kết quả bằng nhau",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var phut = CreText('phut',439,10,38,39,"0",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',26,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var giay = CreText('giay',481,10,38,39,"0",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',26,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_8 = CreText('Text_8',553,14,30,30,"››",'#d9aa7f','#ffffff','#000000','#ffff00','',20,'Arial','Bold','center','middle',2,'0.00','0','0',3,'#ffffff','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
var Text_10 = CreText('Text_10',72,37,19,28,"",'#d9aa7f','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',284,37,19,28,"",'#d9aa7f','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_4 = CreText('Text_4',472,37,19,28,"",'#d9aa7f','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bang_diem = new Kinetic.Group({name:'bang_diem',x:0,y:0,width:238,height:113});
bang_diem.add(m_diem,label,bt_lam_lai,t_mess);
Page_1.add(Page_1_Backrounnd,Text_5,Text_9,obj_view,Text_2,o_so_0,o_so_1,o_so_2,o_so_3,o_so_4,o_so_5,o_so_6,o_so_7,o_so_8,o_so_9,o_so_10,o_so_11,o_so_12,o_so_13,o_so_14,o_so_15,o_so_16,o_so_17,o_so_18,o_so_19,phut,giay,Text_8,Text_10,Text_1,Text_4,bang_diem);
stage.add(Page_1);

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page_2_Backrounnd = CreText('Page_2_Backrounnd',0,0,600,380,'','#ffffb7','','','','ID_IMAGE2.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffb7','2','2','0','','0','0','0','0',0,0,'');
var Text_1 = CreText('Text_1',112,37,361,340,"",'rgba(255,255,255,0.89)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',5,'#0080ff','rgba(255,255,255,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var o_0 = CreText('o_0',117,42,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_1 = CreText('o_1',156,42,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_2 = CreText('o_2',195,42,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',36,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_3 = CreText('o_3',234,42,36,33,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var o_4 = CreText('o_4',273,42,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_5 = CreText('o_5',312,42,36,33,"Viết số gồm hai chục, năm đơn vị và tám trăm.|825",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_6 = CreText('o_6',351,42,36,33,"Người ta xếp 84 gói bánh vào các thùng, mỗi thùng 4 gói. Số thùng bánh xếp được là?|21",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_ITEM13.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_7 = CreText('o_7',390,42,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_8 = CreText('o_8',430,42,36,33,"-",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var o_9 = CreText('o_9',117,79,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_10 = CreText('o_10',156,79,36,33,"-",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var o_11 = CreText('o_11',195,79,36,33,"Tháng 10 có 4 tuần 3 ngày, Tháng 10 có số ngày là?|31",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_ITEM14.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_12 = CreText('o_12',234,79,36,33,"-",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_13 = CreText('o_13',273,79,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_14 = CreText('o_14',312,79,36,33,"-",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_15 = CreText('o_15',351,79,36,33,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var o_16 = CreText('o_16',390,79,36,33,"-",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_17 = CreText('o_17',430,79,36,33,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var o_18 = CreText('o_18',117,117,36,33,"Một phép chia có số chia là 6. Số dư lớn nhất có thể có trong phép chia đó là?|5",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_ITEM0.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_19 = CreText('o_19',156,117,36,33,"Bể thứ nhất chứa 256l nước. Bể thứ hai chứa được 212l nước. Hỏi cả hai bể chứa bao nhiêu lít nước?|468",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_20 = CreText('o_20',195,117,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_20.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_21 = CreText('o_21',234,117,36,33,"-",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var o_22 = CreText('o_22',273,117,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_22.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_23 = CreText('o_23',312,117,36,33,"-",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var o_24 = CreText('o_24',351,117,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_24.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_25 = CreText('o_25',390,117,36,33,"Một phép chia có số chia là 5, thương là 24, số dư là 3. Số bị chia của phép chia đó là:|123",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_ITEM11.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_25.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_26 = CreText('o_26',430,117,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_26.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_27 = CreText('o_27',117,154,36,33,"-",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_27.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_28 = CreText('o_28',156,154,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_28.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_29 = CreText('o_29',195,154,36,33,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var o_30 = CreText('o_30',234,154,36,33,"Khối lớp Bốn có 235 học sinh, khối lớp Ba có 216 học sinh. Hỏi hai khối có bao nhiêu học sinh?|451",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_30.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_31 = CreText('o_31',273,154,36,33,"Một phép chia có số chia là 6, thương là số lớn nhất có hai chữ số, số dư là số dư lớn nhất có thể có trong phép chia. Số bị chia của phép chia đó là?|599",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_ITEM2.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_31.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_32 = CreText('o_32',312,154,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_32.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_33 = CreText('o_33',351,154,36,33,"-",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_33.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_34 = CreText('o_34',390,154,36,33,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var o_35 = CreText('o_35',430,154,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_35.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_36 = CreText('o_36',117,191,36,33,"-",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var o_37 = CreText('o_37',156,191,36,33,"Một phép chia có số chia là 5, số dư là 1, để phép chia là phép chia hết, và thương tăng thêm 2 đơn vị. Thì cần thêm vào số bị chia bao nhiêu đơn vi?|9",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_ITEM3.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_37.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_38 = CreText('o_38',195,191,36,33,"-",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_38.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_39 = CreText('o_39',234,191,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_39.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_40 = CreText('o_40',273,191,36,33,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var o_41 = CreText('o_41',312,191,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_41.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_42 = CreText('o_42',351,191,36,33,"Người ta chia 79l dầu vào các can, mỗi can 5l. Vậy cần ít nhất bao nhiêu can để chứa hết số dầu trên?|16",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_ITEM4.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_42.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_43 = CreText('o_43',390,191,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_43.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_44 = CreText('o_44',430,191,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_44.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_45 = CreText('o_45',117,228,36,33,"Mai gấp được 145 ngôi sao. Mai tặng bạn 78 ngôi sao. Hỏi Mai còn lại bao nhiêu ngôi sao?|67",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_45.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_46 = CreText('o_46',156,228,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_46.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_47 = CreText('o_47',195,228,36,33,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var o_48 = CreText('o_48',234,228,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_48.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_49 = CreText('o_49',273,228,36,33,"-",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var o_50 = CreText('o_50',312,228,36,33,"-",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var o_51 = CreText('o_51',351,228,36,33,"-",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_51.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_52 = CreText('o_52',390,228,36,33,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var o_53 = CreText('o_53',430,228,36,33,"Có bao nhiêu số có hai chữ số mà tổng các chữ số bằng 9?|9",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_53.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_54 = CreText('o_54',117,265,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_54.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_55 = CreText('o_55',156,265,36,33,"-",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var o_56 = CreText('o_56',195,265,36,33,"-",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_56.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_57 = CreText('o_57',234,265,36,33,"Một số chia cho 4 thì được 16, lấy số đo chia cho 6 thì số dư là:|4",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_ITEM10.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var o_58 = CreText('o_58',273,265,36,33,"Có bao nhiêu số có hai chữ số mà tổng các chữ số bẳng 14?|5",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_58.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_59 = CreText('o_59',312,265,36,33,"-",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var o_60 = CreText('o_60',351,265,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_60.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_61 = CreText('o_61',390,265,36,33,"-",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_61.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_62 = CreText('o_62',430,265,36,33,"Một số chia cho 5 thì kết quả là 27. Nếu lấy số đó chia cho 3 thì kết quả là:|45",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_ITEM7.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_62.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_63 = CreText('o_63',117,302,36,33,"Một số chia cho 6 được bao nhiêu cộng với 24 thì được kết quả là 40. Số đó là:|96",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_ITEM8.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_63.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_64 = CreText('o_64',156,302,36,33,"Trong đợt thu hoạch vừa qua nhà bác Hùng và bác Mai thu hoạch được tất cả 456 bắp ngô. Biết nhà bác Mai thu hoạch 234 bắp. Tính số bắp ngô nhà bác Hùng thu được.|222",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_64.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_65 = CreText('o_65',195,302,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_65.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_66 = CreText('o_66',234,302,36,33,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var o_67 = CreText('o_67',273,302,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_67.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_68 = CreText('o_68',312,302,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_68.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_69 = CreText('o_69',351,302,36,33,"Mẹ mua 45 quả cam, mẹ mang biếu bà 15 quả, số còn lại mẹ bày lên các đĩa để tiếp khách, mỗi đĩa 6 quả. Hỏi mẹ bày lên được bao nhiêu đĩa?|5",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_ITEM9.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_69.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_70 = CreText('o_70',390,302,36,33,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var o_71 = CreText('o_71',430,302,36,33,"+",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_71.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_72 = CreText('o_72',117,339,36,33,"-",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var o_73 = CreText('o_73',156,339,36,33,"-",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_73.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_74 = CreText('o_74',195,339,36,33,"Năm nay mẹ 36 tuổi, tuổi con bằng 1/6 tuổi mẹ. Vậy hai năm sau con bao nhiêu tuổi?|8",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_ITEM14.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var o_75 = CreText('o_75',234,339,36,33,"Hình tam giác ABC có cạnh AB dài 25cm, cạnh BC dài 36cm; cạnh CA ngắn hơn cạnh BC 9cm. Tính chu vi tam giác ABC.|88",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_75.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_76 = CreText('o_76',273,339,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_76.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_77 = CreText('o_77',312,339,36,33,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var o_78 = CreText('o_78',351,339,36,33,"Tìm số có ba chữ số biết chữ số hàng trăm hơn chữ số hàng chục 6 đơn vị, chữ số hàng chục trừ đi chữ số hàng đơn vị bằng 3.|930",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_78.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_79 = CreText('o_79',390,339,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_79.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_80 = CreText('o_80',430,339,36,33,"-",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_CARROT.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_80.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var tho = CreText('tho',117,42,36,33,"",'#ff6820','#ffffff','#000000','#ffffff','ID_THO.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',0,'#0080ff','#ff6820','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, '#ccffcc',0,1.50);
var Text_8 = CreText('Text_8',77,44,30,30,"",'#0080ff','#ffffff','#ffffff','#ffff00','ID_IMAGE26.PNG',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080ff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, '#ffffff',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
var Text_3 = CreText('Text_3',478,341,30,30,"",'#666666','#666666','#ffffff','#ffff00','ID_IMAGE26.PNG',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#666666','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, '#ffffff',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
var cau_hoi = CreText('cau_hoi',113,136,364,90,"Số viên bi của Minh bằng 1/2 số viên bi của Tùng. Nếu Tùng cho Minh 4 viên bi thì số bi của hai bạn bằng nhau. Hỏi Tùng có bao nhiêu viên bi?|16",'#8000ff','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#400080','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var m_kq = CreText('m_kq',356,205,64,18,"642",'#ffffff','#ffffff','#0000ff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#666666','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
m_kq.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
var bt_ok = CreText('bt_ok',426,205,48,18,"OK",'#400080','#ffffff','#ffff00','#ffffff','',12,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','#8000ff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_ok.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
KiemTra();
  return;
}
 );
var title = CreText('title',113,136,364,18,"CÂU HỎI",'#400080','#ffffff','#ffff00','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#8000ff','4','1','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var close_msg = CreText('close_msg',450,136,27,18,"x",'#ff0000','#ffffff','#ffffff','#ffffff','',10,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','#8b0000','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
close_msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CloseMsg();
  return;
}
 );
var Text_4 = CreText('Text_4',1,1,600,27,"Bài 2: Bạn hãy di chuyển con thỏ đến củ cà rốt bằng các phím mủi tên (←↑→↓)",'rgba(255,255,255,0.67)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','rgba(255,255,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',7,344,30,30,"‹‹",'#d9aa7f','#ffffff','#000000','#ffff00','',20,'Arial','Bold','center','middle',2,'0.00','0','0',3,'#ffffff','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
var msg = new Kinetic.Group({name:'msg',x:0,y:0,width:368,height:94});
msg.add(cau_hoi,title,m_kq,bt_ok,close_msg);
Page_2.add(Page_2_Backrounnd,Text_1,o_0,o_1,o_2,o_3,o_4,o_5,o_6,o_7,o_8,o_9,o_10,o_11,o_12,o_13,o_14,o_15,o_16,o_17,o_18,o_19,o_20,o_21,o_22,o_23,o_24,o_25,o_26,o_27,o_28,o_29,o_30,o_31,o_32,o_33,o_34,o_35,o_36,o_37,o_38,o_39,o_40,o_41,o_42,o_43,o_44,o_45,o_46,o_47,o_48,o_49,o_50,o_51,o_52,o_53,o_54,o_55,o_56,o_57,o_58,o_59,o_60,o_61,o_62,o_63,o_64,o_65,o_66,o_67,o_68,o_69,o_70,o_71,o_72,o_73,o_74,o_75,o_76,o_77,o_78,o_79,o_80,tho,Text_8,Text_3,Text_4,Text_2,msg);
stage.add(Page_2);
InitLacVietScript();
};
