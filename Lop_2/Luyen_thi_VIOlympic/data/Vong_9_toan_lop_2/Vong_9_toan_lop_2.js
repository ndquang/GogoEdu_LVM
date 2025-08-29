folder_Resource ='data/Vong_9_toan_lop_2';
var arNumber=[0,0,0,0,0];
var m_size=20;
var m_index=0;
var m_sai=0;
var arPhep=[0,0,0,0,0];
var bStart=0;
function  CreateRam(){
   var Count = 0;
   for (var i = 0; i < m_size/2; i++)
   {
    var bb = true;
    var iNN,x,y,z,nc;
    while (bb)
    {
    var x= Random(10)+1;
    var y= Random(4)+2;
    nc= Random(2);
    if(nc==0)
	{
	 z= Random(99)+1;
	 while(x*y+z>100)
		z= Random(99)+1;
       iNN = x*y+z;
	}
    else {
	 z= Random(x*y-1)+1;
       iNN = x*y-z;
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
    if(nc==0)
		arPhep[Count]=y +" x "+ x+" + "+ z;
    else arPhep[Count]=y +" x "+ x+" - "+ z;
    Count++;
  } 
}
var m_start="";
var m_end="";
var count_sai=0;
var movex=0;
var movey=0;
function InitBai1()
{
m_sai=0;
m_start="";
m_end="";
CreateRam();
var xx=m_size/2;// gan=
 for (var k = 0; k < m_size/2; k++){
	arNumber[xx]=arNumber[k];
	arPhep[xx]=arNumber[k];
	xx++;
	}
 var tam=0;// tron
 for(var i = 0; i<10; i++)
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
	var xxx= Random(2);
	if(xxx==0)
	{
	      SetText("","o_so_"+k,arPhep[k]);
	}
	else
	{
    		   var x= Random(3)+3;
		   var y= Random(8)+3;
		   if(x*y>arNumber[k])
			{
				var z= x*y - arNumber[k];
				SetText("","o_so_"+k,x +" x "+ y+" - "+ z);
			}
		  else {
				var z=  arNumber[k]-x*y;
				SetText("","o_so_"+k,x +" x "+ y+" + "+ z);
			}
	}
	SetShowObject("","o_so_"+k,1);
	SetColor("","o_so_"+k,-1,-1,-1);
	transitionTo("","o_so_"+k,100,-1,-1,1,0,1,1);
	}
SetText("","obj_view","");
SetText("","phut","20");
SetText("","giay","0");
m_index=0;
count_sai=0;
m_sai=0;
SetTimerPage(1000);
movex=GetLeft("","obj_view");
movey=GetTop("","obj_view");
GetVer();
bStart=1;
InvalidateObj("","");
}
function FinishMove(){
	if(m_start!="" && m_end!=""){
	SetText("","obj_view", GetText("",m_start)+" = "+ GetText("",m_end));
	SetShowObject("",m_start,0);
	SetShowObject("",m_end,0);
	m_start="";
	m_end="";	
	}
InvalidateObj("","");
}
function  Check()
{
	if(m_start!="" && m_end!="" &&m_start!=m_end)
	{	
		
		if(arNumber[StringtoNumber(m_start)] == arNumber[StringtoNumber(m_end)])
		{
			transitionTo("",m_start,500,movex,movey,0.5,0,1,1,"FinishMove()");
			transitionTo("",m_end,500,movex,movey,0.5,0,1,1,"FinishMove()");
			PlaySound("ID_TRUE");
			m_index++;
			m_sai=0;	
		}
		else {
			SetColor("",m_start);
			SetColor("",m_end);
			PlaySound("ID_FALSE");
			SetText("","obj_view","");
			m_sai++;
		      count_sai++;
			m_start="";
			m_end="";	
		}
			
	}
	if(m_index==m_size/2){
		KillTimerPage();
	      	var diem = 100- count_sai*100/10;
		UpdateScore(diem);
		diem= "Điểm: " +diem +"/100 \n Thời gian: ";
		var g=60 - GetText("","giay");
		var ph= 19 - GetText("","phut");
		diem = diem +ph +":"+g;
		SetText("","label",diem);
		SetText("","bt_lam_lai","Làm Lại");
		SetShowObject("","bang_diem",1);
		bStart=0;
		}
	else if(m_sai>3)
		{
		InitBai1();
		}
	InvalidateObj("","");
}
function ClickNumber()
{
	if(bStart==0)
		return;
	if(m_start=="")
	{
		m_start= GetName("");
		SetColor("","","#FF6600");
		SetText("","obj_view",arNumber[StringtoNumber(m_start)]);
		m_end="";
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
KillTimerPage();
}
function KiemTraViTri( obj){
	if(FindObj("",obj)!="")
	{
		
		var cl= GetColor("",obj,"xxxx");
		if(cl=="rgba(0,0,0,0)"||cl=="ID_FOOT")
		{
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
			UpdateScore(200);
			SetShowObject("","msg",1);
			m_finish=true;
		}
		else if(cl=="ID_CAU_HOI"){
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
		nextpos=nextpos-8;
		break; //len
	}
	case "(": //xuong
	{
		nextpos= curentpos;
		nextpos=nextpos+8;
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
	if(GetText("","m_kq")==m_dapan){
		var obj= "o_"+nextpos;
		SetShowObject("","msg",0);
		MoveObjectTo("","tho",GetLeft("",obj),GetTop("",obj));
		curentpos=nextpos;
		SetColor("",obj,1,1,1,"ID_FOOT");
		InvalidateObj("","");
	}
	if(m_finish==true)
		InitBai3();	
}
function Click3()
{
	var name = GetName("");
	var ii= indexOf(name,"_")+1;
	var next = subString(name,ii);
	if(next == curentpos+1 || next == curentpos-1 || next == curentpos+8 || next == curentpos-8){
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
SetShowObject("","bang_diem",1);
 bStart=0;
KillTimerPage();
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
 width: 470,
 height: 350 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,470,320,'','#8000ff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#8000ff','0','0','0','','0','0','0','0',0,0,'');
var Text_7 = CreText('Text_7',14,10,427,45,"Vòng 9, bài 1",'#d9aa7f','#000000','#000000','#ffffff','',16,'Arial','Bold','left','middle',12,'0.00','0','1',2,'#aa7c41','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',5,5,'#aa7c41',0,1.50);
var Text_6 = CreText('Text_6',292,19,79,24,":",'#865528','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#865528','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',13,68,449,241,"",'#d9aa7f','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',8,'#865528','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var o_so_0 = CreText('o_so_0',16,72,110,50,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_1 = CreText('o_so_1',127,72,110,50,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_2 = CreText('o_so_2',238,72,110,50,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_3 = CreText('o_so_3',349,72,110,50,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_4 = CreText('o_so_4',16,256,110,50,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_5 = CreText('o_so_5',16,116,110,50,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_6 = CreText('o_so_6',127,116,110,50,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_7 = CreText('o_so_7',238,116,110,50,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_8 = CreText('o_so_8',349,116,110,50,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_9 = CreText('o_so_9',127,256,110,50,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_10 = CreText('o_so_10',16,160,110,50,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_11 = CreText('o_so_11',127,160,110,50,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_12 = CreText('o_so_12',238,160,110,50,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_13 = CreText('o_so_13',349,160,110,50,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_14 = CreText('o_so_14',238,256,110,50,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_15 = CreText('o_so_15',16,204,110,50,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_16 = CreText('o_so_16',127,204,110,50,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_17 = CreText('o_so_17',238,204,110,50,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_18 = CreText('o_so_18',349,204,110,50,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_19 = CreText('o_so_19',349,256,110,50,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var m_diem = CreText('m_diem',120,131,231,109,"",'rgba(236,217,255,1.11)','#ffffff','#ff0000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(236,217,255,1.11)','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_lam_lai = CreText('bt_lam_lai',203,212,80,25,"Bắt Đầu",'#400080','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#8000ff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitBai1();
SetShowObject("","bang_diem",0);
  return;
}
 );
var t_mess = CreText('t_mess',121,132,229,16,"Thông báo điểm",'rgba(64,0,128,1.11)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#ffffff','rgba(128,0,255,1.11)','4','1','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var label = CreText('label',122,149,228,57,"Em hãy tìm các cặp 2 ô chứa số, phép tính có kết quả bằng nhau.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var phut = CreText('phut',293,21,38,24,"0",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var giay = CreText('giay',335,21,38,24,"0",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_8 = CreText('Text_8',407,17,30,30,"››",'#865528','#ffffff','#ffffff','#ffff00','',20,'Arial','Bold','center','middle',2,'0.00','0','0',3,'#ffffff','#865528','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
var obj_view = CreText('obj_view',128,20,156,24,"",'#865528','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',11,'0.00','10','0',2,'#ffffff','#865528','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'#c0c0c0',0,1.50);
var Text_15 = CreText('Text_15',379,47,19,25,"|",'#d9aa7f','#ffffff','rgba(0,0,0,0)','#ffffff','',48,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bang_diem = new Kinetic.Group({name:'bang_diem',x:0,y:0,width:235,height:113});
bang_diem.add(m_diem,bt_lam_lai,t_mess,label);
var Text_1 = CreText('Text_1',81,49,19,22,"|",'#d9aa7f','#ffffff','rgba(0,0,0,0)','#ffffff','',48,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,Text_7,Text_6,Text_3,o_so_0,o_so_1,o_so_2,o_so_3,o_so_4,o_so_5,o_so_6,o_so_7,o_so_8,o_so_9,o_so_10,o_so_11,o_so_12,o_so_13,o_so_14,o_so_15,o_so_16,o_so_17,o_so_18,o_so_19,phut,giay,Text_8,obj_view,Text_15,bang_diem,Text_1);
stage.add(Page_1);

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page_2_Backrounnd = CreText('Page_2_Backrounnd',0,0,470,350,'','#009300','','','','ID_IMAGE3.PNG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#009300','2','2','0','','0','0','0','0',0,0,'');
var Text_1 = CreText('Text_1',64,49,312,286,"",'rgba(255,255,255,0.44)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',5,'#804000','rgba(255,255,255,0.44)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var o_0 = CreText('o_0',69,54,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_1 = CreText('o_1',107,54,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_2 = CreText('o_2',145,54,36,33,"Tìm a biết: 100 - a = 86|14",'#ff0000','#ffffff','rgba(0,0,0,0)','#ffffff','ID_CAU_HOI.PNG',36,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ff0000','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_3 = CreText('o_3',183,54,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_4 = CreText('o_4',221,54,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_5 = CreText('o_5',259,54,36,33,"Hiện nay bố 40 tuổi, con 9 tuổi. Hỏi khi bố 52 tuổi thì con bao nhiêu tuổi?|21",'#ff0000','#ffffff','rgba(0,0,0,0)','#ffffff','ID_CAU_HOI.PNG',36,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ff0000','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_6 = CreText('o_6',297,54,36,33,"Người ta xếp 84 gói bánh vào các thùng, mỗi thùng 4 gói. Số thùng bánh xếp được là?|21",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_7 = CreText('o_7',335,54,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_8 = CreText('o_8',69,89,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_9 = CreText('o_9',107,89,36,33,"Giá trị của a thỏa mãn là: a + 58 = 82|24",'#ff0000','#ffffff','rgba(0,0,0,0)','#ffffff','ID_CAU_HOI.PNG',36,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ff0000','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_10 = CreText('o_10',145,89,36,33,"-",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_11 = CreText('o_11',183,89,36,33,"Tháng 10 có 4 tuần 3 ngày, Tháng 10 có số ngày là?|31",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_12 = CreText('o_12',221,89,36,33,"-",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_13 = CreText('o_13',259,89,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_14 = CreText('o_14',297,89,36,33,"-",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_15 = CreText('o_15',335,89,36,33,"Tìm x biết: a + x = 52 + a|52",'#ff0000','#ffffff','rgba(0,0,0,0)','#ffffff','ID_CAU_HOI.PNG',36,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ff0000','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_16 = CreText('o_16',69,124,36,33,"Tìm a biết 91- a= 32|59",'#ff0000','#ffffff','rgba(0,0,0,0)','#ffffff','ID_CAU_HOI.PNG',36,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ff0000','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_17 = CreText('o_17',107,124,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_18 = CreText('o_18',145,124,36,33,"Một phép chia có số chia là 6. Số dư lớn nhất có thể có trong phép chia đó là?|5",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_19 = CreText('o_19',183,124,36,33,"Một cửa hàng buổi sáng bán được 10kg gạo, buổi chiều bán được nhiều gấp 5 lần buổi sáng. Hỏi cả hai buổi cửa hàng đó bán được bao nhiêu ki-lô-gam gạo?60",'#ff0000','#ffffff','rgba(0,0,0,0)','#ffffff','ID_CAU_HOI.PNG',36,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ff0000','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_20 = CreText('o_20',221,124,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_20.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_21 = CreText('o_21',259,124,36,33,"Nhà Minh nuôi 5 con thỏ, số gà nhà Minh nuôi gấp 8 lần số thỏ. Hỏi nhà Minh nuôi bao nhiêu con gà?40",'#ff0000','#ffffff','rgba(0,0,0,0)','#ffffff','ID_CAU_HOI.PNG',36,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ff0000','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_21.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_22 = CreText('o_22',297,124,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_22.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_23 = CreText('o_23',335,124,36,33,"-",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_23.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_24 = CreText('o_24',69,159,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_24.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_25 = CreText('o_25',107,159,36,33,"Một phép chia có số chia là 5, thương là 24, số dư là 3. Số bị chia của phép chia đó là:|123",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_25.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_26 = CreText('o_26',145,159,36,33,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_26.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_27 = CreText('o_27',183,159,36,33,"-",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_27.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_28 = CreText('o_28',221,159,36,33,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_28.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_29 = CreText('o_29',259,159,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_29.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_30 = CreText('o_30',297,159,36,33,"Khối lớp Bốn có 235 học sinh, khối lớp Ba có 216 học sinh. Hỏi hai khối có bao nhiêu học sinh?|451",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_30.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_31 = CreText('o_31',335,159,36,33,"Một bao kẹo chia đều cho 5 bạn, mỗi bạn được 4 cây kẹo, còn lại trong bao 2 cây kẹo. Hỏi trước khi chia bao kẹo có mấy cây?|22\r\n",'#ff0000','#ffffff','rgba(0,0,0,0)','#ffffff','ID_CAU_HOI.PNG',36,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ff0000','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_31.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var tho = CreText('tho',69,53,36,33,"",'#ff6820','#ffffff','#000000','#ffffff','ID_THO.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',0,'#804000','#ff6820','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, '#ccffcc',0,1.50);
var Text_8 = CreText('Text_8',18,57,30,30,"",'#0080ff','#ffffff','#ffffff','#ffff00','ID_IMAGE26.PNG',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080ff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, '#ffffff',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
var Text_3 = CreText('Text_3',377,302,30,30,"",'#666666','#666666','#ffffff','#ffff00','ID_IMAGE26.PNG',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#666666','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, '#ffffff',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
var Text_4 = CreText('Text_4',1,1,469,45,"              Bài 2: Bạn hãy di chuyển con thỏ đến củ cà rốt bằng các phím mủi tên (←↑→↓)",'rgba(255,255,255,0.44)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','11','10',1,'#ffffff','rgba(255,255,255,0.44)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',6,7,30,30,"‹‹",'#0080ff','#ffffff','#ffffff','#ffff00','',20,'Arial','Bold','center','middle',2,'0.00','0','0',3,'#ffffff','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
var o_32 = CreText('o_32',69,194,36,33,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_CAU_HOI.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_32.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_33 = CreText('o_33',107,194,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_33.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_34 = CreText('o_34',145,194,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_34.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_35 = CreText('o_35',183,194,36,33,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_CAU_HOI.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_35.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_36 = CreText('o_36',221,194,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_36.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_37 = CreText('o_37',259,194,36,33,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_CAU_HOI.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_37.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_38 = CreText('o_38',297,194,36,33,"Người ta xếp 84 gói bánh vào các thùng, mỗi thùng 4 gói. Số thùng bánh xếp được là?|21",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_38.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_39 = CreText('o_39',335,194,36,33,"-",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_39.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_40 = CreText('o_40',69,229,36,33,"-",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_40.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_41 = CreText('o_41',107,229,36,33,"-",'#ff0000','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',36,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ff0000','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_41.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_42 = CreText('o_42',145,229,36,33,"-",'#ff0000','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',36,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ff0000','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_42.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_43 = CreText('o_43',183,229,36,33,"Tháng 10 có 4 tuần 3 ngày, Tháng 10 có số ngày là?|31",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_43.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_44 = CreText('o_44',221,229,36,33,"-",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_44.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_45 = CreText('o_45',259,229,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_45.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_46 = CreText('o_46',297,229,36,33,"-",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_46.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_47 = CreText('o_47',335,229,36,33,"Thứ sáu tuần này là ngày 27. Hỏi thứ bảy tuần trước là ngày bao nhiêu?21",'#ff0000','#ffffff','rgba(0,0,0,0)','#ffffff','ID_CAU_HOI.PNG',36,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ff0000','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_47.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_48 = CreText('o_48',69,264,36,33,"Có một số ki-lô-gam gạo, nếu đựng vào mỗi túi 3kg thì được 8 túi còn thừa 2 kg. Hỏi số gạo đó là bao nhiêu ki-lô-gam?|26",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_CAU_HOI.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_48.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_49 = CreText('o_49',107,264,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_49.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_50 = CreText('o_50',145,264,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_50.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_51 = CreText('o_51',183,264,36,33,"Người ta cắt một sợi dây thành 5 đoạn dài bằng nhau, mỗi đoạn dài 4dm. Hỏi trước khi cắt sợi dây dài bao nhiêu đề-xi-mét?|20",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_CAU_HOI.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_51.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_52 = CreText('o_52',221,264,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_52.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_53 = CreText('o_53',259,264,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_53.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_54 = CreText('o_54',297,264,36,33,"Số học sinh lớp 2A là số tự nhiên lớn nhất có hai chữ số mà tổng 2 số của nó là 5. Biết số bạn học sinh Nam là 28. Hỏi lớp 2A có bao nhiêu bạn Nữ?\r\nTrả lời: Số bạn nữ lớp 2A là ... bạn|22",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_CAU_HOI.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_54.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_55 = CreText('o_55',335,264,36,33,"Số học sinh lớp 2A là số tự nhiên lớn nhất có hai chữ số mà tổng 2 số của nó là 5. Biết số bạn học sinh Nam là 28. Hỏi lớp 2A có bao nhiêu bạn Nữ?\r\nTrả lời: Số bạn nữ lớp 2A là ... bạn|22",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_55.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_56 = CreText('o_56',69,299,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_56.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_57 = CreText('o_57',107,299,36,33,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_57.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_58 = CreText('o_58',145,299,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_58.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_59 = CreText('o_59',183,299,36,33,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_59.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_60 = CreText('o_60',221,299,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_60.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_61 = CreText('o_61',259,299,36,33,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_CAU_HOI.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_61.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_62 = CreText('o_62',297,299,36,33,"Khối lớp Bốn có 235 học sinh, khối lớp Ba có 216 học sinh. Hỏi hai khối có bao nhiêu học sinh?|451",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_62.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_63 = CreText('o_63',335,299,36,33,"Một phép chia có số chia là 6, thương là số lớn nhất có hai chữ số, số dư là số dư lớn nhất có thể có trong phép chia. Số bị chia của phép chia đó là?|599",'#ff0000','#ffffff','rgba(0,0,0,0)','#ffffff','ID_CARROT.PNG',36,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#804000','#ff0000','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_63.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var cau_hoi = CreText('cau_hoi',42,121,364,90,"Số viên bi của Minh bằng 1/2 số viên bi của Tùng. Nếu Tùng cho Minh 4 viên bi thì số bi của hai bạn bằng nhau. Hỏi Tùng có bao nhiêu viên bi?|16",'#8000ff','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#400080','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var m_kq = CreText('m_kq',285,190,64,18,"642",'#ffffff','#ffffff','#0000ff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#666666','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
m_kq.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
var bt_ok = CreText('bt_ok',355,190,48,18,"OK",'#400080','#ffffff','#ffff00','#ffffff','',12,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','#8000ff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_ok.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
KiemTra();
  return;
}
 );
var title = CreText('title',42,121,364,18,"CÂU HỎI",'#400080','#ffffff','#ffff00','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#8000ff','4','1','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var close_msg = CreText('close_msg',389,121,17,18,"x",'#400080','#ffffff','#ffffff','#ffffff','',10,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','#8000ff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
close_msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CloseMsg();
  return;
}
 );
var msg = new Kinetic.Group({name:'msg',x:0,y:0,width:368,height:94});
msg.add(cau_hoi,m_kq,bt_ok,title,close_msg);
Page_2.add(Page_2_Backrounnd,Text_1,o_0,o_1,o_2,o_3,o_4,o_5,o_6,o_7,o_8,o_9,o_10,o_11,o_12,o_13,o_14,o_15,o_16,o_17,o_18,o_19,o_20,o_21,o_22,o_23,o_24,o_25,o_26,o_27,o_28,o_29,o_30,o_31,tho,Text_8,Text_3,Text_4,Text_2,o_32,o_33,o_34,o_35,o_36,o_37,o_38,o_39,o_40,o_41,o_42,o_43,o_44,o_45,o_46,o_47,o_48,o_49,o_50,o_51,o_52,o_53,o_54,o_55,o_56,o_57,o_58,o_59,o_60,o_61,o_62,o_63,msg);
stage.add(Page_2);
InitLacVietScript();
};
