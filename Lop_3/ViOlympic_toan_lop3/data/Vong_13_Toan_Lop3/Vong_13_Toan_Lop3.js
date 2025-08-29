folder_Resource ='data/Vong_13_Toan_Lop3';
var arNumber=[0,0,0,0,0];
var m_size=20;
var m_index=0;
var m_sai=0;
var count_sai=0;
var cur_Diem=0;
var b_begin= false;
var arPhepTinh=[0,0,0,0,0];
function  CreateRam(){
   var Count = 0;
   for (var i = 0; i < m_size; i++)
   {
    var bb = true;
    var iNN,x,y,z,chon;
    while (bb)
    {
    chon= Random(4);
    if(chon<2)	
    {
    x= 9;
    y= Random(17)+2;
    iNN =x*y;
    }
    else if(chon==2)
	{
		z= Random(4)+4;
 		x= 9;
		y= Random(17)+2;
		iNN =x*y + z;
	}
    else if(chon==3)
	{
		z= Random(10)+4;
 		x= 9;
		y= Random(17)+2;
		iNN =x*y - z;
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
    if(chon<2)	
    arPhepTinh[Count]= y + " x " + x;
    else if(chon==2)
	arPhepTinh[Count]= y + " x " + x +" + "+ z;
    else if(chon==3)
	arPhepTinh[Count]= y + " x " + x +" - "+ z;
    Count++;
  } 
}
function InitBai1()
{
m_sai=0;
CreateRam();
 for (var k = 0; k < m_size; k++){
	SetText("","o_so_"+k,arPhepTinh[k]);
	SetShowObject("","o_so_"+k,1);
	MoveObjectTo("","o_so_"+k,-1,-1,10,5,3);
	}
var tam= arNumber[0];
 for(var i = 0; i<m_size; i++)
      for(var j = m_size; j>i; j--)
      if(arNumber[j]<arNumber[j-1]){
		tam= arNumber[j];
		arNumber[j]=arNumber[j-1];
		arNumber[j-1]=tam;
       }
		KillTimerPage();
SetText("","obj_view","");
SetText("","phut","20");
SetText("","giay","0");
m_index=0;
count_sai=0;
b_begin= true;
cur_Diem=GetVer();
SetTimerPage(1000);
InvalidateObj("","");
}
function FinishMove(){
	var tt= GetText("","");
	SetShowObject("","",0);
	SetText("","obj_view", tt+" = "+arNumber[m_index-1]);
	InvalidateObj("","");
}
function ClickNumber()
{
	if(b_begin==false)
		return;
	var kq=replaceStr(GetText("",""),"x","*");
	    kq=replaceStr(kq,":","/");
	    kq= ExecAsThread(kq);
	if(arNumber[m_index]==kq){
		m_index++;
		m_sai=0;		
		MoveObjectTo("","",GetLeft("","obj_view"),GetTop("","obj_view"),300,2,1,"FinishMove()");
		PlaySound("ID_TRUE");
	}
	else{
		m_sai++;
		count_sai++;
		PlaySound("ID_FALSE");
		SetColor("","","#FF0000");
		Delay("SetColor('','')",200);
	}
	if(m_index==m_size){
		KillTimerPage();
		SetText("","label","Điểm của bạn");
		var diem = (m_size - count_sai)/2;
		UpdateScore(cur_Diem+diem);
		SetText("","m_diem",diem);
		SetShowObject("","bang_diem",1);		
		b_begin=false;
		}
	else if(m_sai>3)
		{
		KillTimerPage();
		b_begin=false;
		SetText("","label","Bạn làm sai quá 3 lần, làm lại.");
		SetText("","m_diem","");
		SetShowObject("","bang_diem",1);
		SetText("","m_diem","");
		m_sai=0;
		}
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
var dau1,dau2;
var m_size2=0;
var m_sai2=0;
function CreateBai2()
{
	var akq=["","",""];	
  	dau1= Random(2);
	if(dau1==0) // nhan
	{
	akq[0]= Random(100)+1;
	akq[1]= Random(8)+2;
	dau1="x";
	}
	else
      {
	akq[0]= Random(20)+1;
	akq[1]= Random(8)+2;
	akq[0]= akq[0]*akq[1];
	dau1=":";
	}
  	dau2= Random(2);
	if(dau2==0) // cong
	{
	akq[2] = Random(100)+1;
	dau2="+";
	}
	else
      {
	akq[2] = Random(akq[0]/akq[0])+1;// tao so nho hon thuong
	dau2="-";
	}
	var ttt= akq[0]+dau1+akq[1]+dau2+akq[2];
	ttt= replaceStr(ttt,"x","*");
	ttt= replaceStr(ttt,":","/");
	akq[3]= ExecAsThread(ttt);
	for(var i=0;i< 5;i++)
	{
		var a= Random(4);
		var b= Random(4);
		while(a==b)
			b=Random(3);
		var tam = akq[a];
		akq[a]=akq[b];
		akq[b]=tam;
	}
	for(var j=0;j< 4;j++){
	SetText("","s_"+j,akq[j]);
	SetText("","so_"+j,"");
	SetMoveView("","s_"+j,1);
	MoveObjectTo("","s_"+j,-1,-1,20,2);
	}
	SetText("","dau1",dau1);
	SetText("","dau2",dau2);

	SetText("","thong_bao","");
	SetShowObject("","cau_tiep",0);
	SetShowObject("","kiem_tra",1);
	m_size2++;
	SetText("","cau","Câu "+ m_size2+"/10");
	InvalidateObj("","");
}
function  InitBai2()
{
SetText("","obj_view","");
SetText("","phut","20");
SetText("","giay","0");
m_size2=0;
m_sai2=0;
SetTimerPage(1000);
InvalidateObj("","");
SetShowObject("","cau_tiep",0);
SetShowObject("","kiem_tra",0);
SetShowObject("","msg",0);
cur_Diem=GetVer();
CreateBai2();
}
function  UpObject(){
	for(var j=0;j< 4;j++)
	{
	if(RectInRect("","so_"+j,""))
	{
		SetText("","so_"+j, GetText("",""));
		MoveObjectTo("","",GetLeft("","so_"+j),GetTop("","so_"+j));
		break;
	}
	}
}
function  DownObject(){
	for(var j=0;j< 4;j++)
	{
	if(RectInRect("","so_"+j,""))
	{
		SetText("","so_"+j, "");
		break;
	}
	}
}
function  KiemTra2(){
	var a= GetText("","so_0");
	var b= GetText("","so_1");
	var c= GetText("","so_2");
	var d= GetText("","so_3");
	if(a=="" || b=="" || c=="" || d=="")
		{
		SetFontColor("","thong_bao","#FFC300");
		SetText("","thong_bao","Bạn chưa hoàn thành bài toán.");
		InvalidateObj("","");
		return;
		}
	var dau1= GetText("","dau1");
	var dau2= GetText("","dau2");
	var st= a+dau1+b+dau2+c;
	st= replaceStr(st,"x","*");
	st= replaceStr(st,":","/");

	if(ExecAsThread(st)==d)
		{
			SetFontColor("","thong_bao","#B8FF33");
			SetText("","thong_bao","Bạn giỏi quá. Đúng rồi.");
			PlaySound("ID_TRUE");
		}
	else {
		SetFontColor("","thong_bao","#FF5733");
		SetText("","thong_bao","Sai, câu tiếp đi bạn");
		PlaySound("ID_FALSE");
		m_sai2++;
		}
	
	if(m_size2>9)
		{
		KillTimerPage();
		var diem = 10- m_sai2;
		UpdateScore(cur_Diem+diem);
		SetText("","label","Điểm của bạn:");
		SetText("","m_diem",diem);
	            SetShowObject("","msg",1);
	            SetShowObject("","cau_tiep",0);
		SetShowObject("","kiem_tra",0);
	            InvalidateObj("","");
		return;
		}
	 SetShowObject("","cau_tiep",1);
	 SetShowObject("","kiem_tra",0);
       InvalidateObj("","");
}
//
var curentpos=0;
var m_dapan="";
var nextpos=0;
var m_finish= false;
var m_count3=0;
function InitBai3()
{
curentpos=72;
nextpos=0;
SetShowObject("","msg",0);
InvalidateObj("","");
AllowEditText("","m_kq",1);
MoveObjectTo("","tho",-1,-1);
SetShowObject("","m_kq",1);
m_finish= false;
m_count3=0;
cur_Diem=GetVer();
KillTimerPage();
}
function KiemTraViTri( obj){
	if(FindObj("",obj)!="")
	{
		if(GetShowObject("","msg")==1)
			return;
		var cl= GetColor("",obj,"xxxx");
		if(cl=="rgba(0,0,0,0)"||cl=="ID_FOOT"){
		MoveObjectTo("","tho",GetLeft("",obj),GetTop("",obj));
		curentpos=nextpos;
		}
		else if(cl=="ID_STOP")
			return;
		else if(cl=="ID_CARROT" && m_count3>7)
			{
			SetShowObject("","m_kq",0);
			SetText("","m_kq","");
			MoveObjectTo("","tho",GetLeft("",obj),GetTop("",obj));
			SetText("","cau_hoi","Bạn đã hoàn thành!");
			SetShowObject("","msg",1);
			m_finish=true;
		}
		else if(cl=="ID_CAU_HOI"){
			var text= GetText("",obj);
			var idx= indexOf(text,"|",0);
			if(idx==-1) idx= indexOf(text,"?",0);
			if(idx!="-1"){
			SetText("","cau_hoi","\n"+subString(text,0,idx));
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
	 UpdateScore(diem2+cur_Diem);
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
function Bai_1()
{
KillTimerPage();
b_begin=false;
SetText("","label","Bạn chọn liên tiếp các ô có giá trị tăng dần.");
SetText("","m_diem","");
SetShowObject("","bang_diem",1);
  return;
}
function Bai_1_OnTimer()
{
StartTime();
  return;
}

function Bai_2()
{
 InitBai2();
  return;
}
function Bai_2_OnTimer()
{
StartTime();
  return;
}

function Bai_3_OnKeyDown()
{
  var key= GetKeyDown("");
MoveTho(key);
  return;
}
function Bai_3()
{	
InitBai3();
  return;
}
function Bai_3_OnTimer()
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
 height: 400 
 });

 var Bai_1 = new Kinetic.Layer({name: 'Bai_1',callback:'Bai_1()'});
var Bai_1_Backrounnd = CreText('Bai_1_Backrounnd',0,0,600,360,'','#c0ffff','','','','ID_IMAGE1.PNG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#c0ffff','2','2','0','','0','0','0','0',0,0,'');
var Text_1 = CreText('Text_1',13,62,573,280,"",'#d9aa7f','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',8,'#bc7738','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var o_so_0 = CreText('o_so_0',18,70,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_1 = CreText('o_so_1',131,70,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_2 = CreText('o_so_2',242,70,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_3 = CreText('o_so_3',355,70,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_4 = CreText('o_so_4',468,70,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_5 = CreText('o_so_5',18,137,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_6 = CreText('o_so_6',131,137,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_7 = CreText('o_so_7',242,137,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_8 = CreText('o_so_8',355,137,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_9 = CreText('o_so_9',468,137,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_10 = CreText('o_so_10',18,205,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_11 = CreText('o_so_11',131,205,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_12 = CreText('o_so_12',242,205,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_13 = CreText('o_so_13',355,205,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_14 = CreText('o_so_14',468,205,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_15 = CreText('o_so_15',18,273,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_16 = CreText('o_so_16',130,273,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_17 = CreText('o_so_17',242,273,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_18 = CreText('o_so_18',355,273,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_19 = CreText('o_so_19',468,273,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var m_diem = CreText('m_diem',162,116,268,131,"",'rgba(236,217,255,1.11)','#ffffff','#ff0000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(236,217,255,1.11)','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_lam_lai = CreText('bt_lam_lai',249,211,106,32,"Bắt Đầu",'#8b0000','#ffffff','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#ffffff','#370000','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitBai1();
SetShowObject("","bang_diem",0);
  return;
}
 );
var t_mess = CreText('t_mess',163,117,265,16,"Bài 1",'rgba(64,0,128,1.11)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#ffffff','rgba(128,0,255,1.11)','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var label = CreText('label',162,145,266,65,"Bạn chọn liên tiếp các ô có giá trị tăng dần, để các ô lần lượt bị xóa khoải bảng. Nếu chọn sai quá 3 lần thì bài thi sẽ kết thúc.\r\n",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','top',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',19,7,140,39,"Vòng 13",'#d9aa7f','#ffffff','#000000','#ffffff','',24,'Arial','Normal','center','middle',11,'0.00','10','0',2,'#bf7939','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','2',2,2,'#c0c0c0',0,1.50);
var obj_view = CreText('obj_view',174,7,215,39,"Bảng nhân 9",'#d9aa7f','#ffffff','#000000','#ffffff','',24,'Arial','Normal','center','middle',11,'0.00','10','0',2,'#bf7939','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','2',2,2,'#c0c0c0',0,1.50);
var Text_4 = CreText('Text_4',268,41,19,25,"",'#d9aa7f','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_7 = CreText('Text_7',405,7,140,39,":",'#d9aa7f','#ffffff','#000000','#ffffff','',24,'Arial','Normal','center','middle',11,'0.00','10','0',2,'#bf7939','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','2',2,2,'#c0c0c0',0,1.50);
var phut = CreText('phut',434,9,38,39,"0",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',26,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var giay = CreText('giay',493,9,38,39,"0",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',26,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_6 = CreText('Text_6',468,41,19,24,"",'#d9aa7f','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_9 = CreText('Text_9',556,8,36,38,"››",'#d9aa7f','#ffffff','#000000','#ffff00','',20,'Arial','Bold','center','middle',2,'0.00','0','0',3,'#aa6b33','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
var Text_3 = CreText('Text_3',71,41,19,25,"",'#d9aa7f','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bang_diem = new Kinetic.Group({name:'bang_diem',x:0,y:0,width:272,height:135});
bang_diem.add(m_diem,label,t_mess,bt_lam_lai);
Bai_1.add(Bai_1_Backrounnd,Text_1,o_so_0,o_so_1,o_so_2,o_so_3,o_so_4,o_so_5,o_so_6,o_so_7,o_so_8,o_so_9,o_so_10,o_so_11,o_so_12,o_so_13,o_so_14,o_so_15,o_so_16,o_so_17,o_so_18,o_so_19,Text_2,obj_view,Text_4,Text_7,phut,giay,Text_6,Text_9,Text_3,bang_diem);
stage.add(Bai_1);

 var Bai_2 = new Kinetic.Layer({name: 'Bai_2',callback:'Bai_2()'});
var Bai_2_Backrounnd = CreText('Bai_2_Backrounnd',0,0,600,300,'','#c0ffff','','','','ID_IMAGE1.PNG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#c0ffff','2','2','0','','0','0','0','0',0,0,'');
var Text_1 = CreText('Text_1',20,65,566,225,"\r\nKéo thả các số cho trước phía trên vào các ô trống thích hợp phía dưới, để được dãy tính đúng.\r\n",'#004040','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','top',0,'0.00','0','0',8,'#d2b48c','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so_0 = CreText('so_0',148,178,46,42,"\r\nKéo thả các số cho trước phía trên vào các ô trống thích hợp phía dưới, để được dãy tính đúng.\r\n",'#004040','#ffffff','#ffffff','#ffffff','',22,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
var so_1 = CreText('so_1',240,178,46,42,"\r\nKéo thả các số cho trước phía trên vào các ô trống thích hợp phía dưới, để được dãy tính đúng.\r\n",'#004040','#ffffff','#ffffff','#ffffff','',22,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
var so_2 = CreText('so_2',332,178,46,42,"\r\nKéo thả các số cho trước phía trên vào các ô trống thích hợp phía dưới, để được dãy tính đúng.\r\n",'#004040','#ffffff','#ffffff','#ffffff','',22,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
var so_3 = CreText('so_3',426,178,46,42,"",'#004040','#ffffff','#ffffff','#ffffff','',22,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
var dau1 = CreText('dau1',194,178,46,42,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','center','middle',0,'0.00','0','0',0,'#ffffff','#ffff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kiem_tra = CreText('kiem_tra',463,258,64,24,"Kiểm Tra",'#8b0000','#ffffff','#ffffff','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#370000','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
kiem_tra.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
KiemTra2();
  return;
}
 );
var thong_bao = CreText('thong_bao',65,260,392,25,"Câu Tiếp",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','right','middle',0,'0.00','0','0',0,'#ffffff','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_tiep = CreText('cau_tiep',463,258,64,24,"Câu Tiếp",'#0080c0','#ffffff','#ffffff','#ffffff','',10,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#ffffff','#005177','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cau_tiep.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateBai2();
  return;
}
 );
var dau2 = CreText('dau2',286,178,46,42,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','center','middle',0,'0.00','0','0',0,'#ffffff','#ffff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_11 = CreText('Text_11',378,178,46,42,"=",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','center','middle',0,'0.00','0','0',0,'#ffffff','#ffff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var s_0 = CreText('s_0',135,109,46,42,"",'#d9aa7f','#000000','#000000','#ffffff','',22,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',1,1,'#aa7c41',0,1.50);
s_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 UpObject();
  return;
}
 );
s_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownObject();
  return;
}
 );
var s_1 = CreText('s_1',238,109,46,42,"",'#d9aa7f','#000000','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',1,1,'#aa7c41',0,1.50);
s_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 UpObject();
  return;
}
 );
s_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownObject();
  return;
}
 );
var s_2 = CreText('s_2',341,109,46,42,"",'#d9aa7f','#000000','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',1,1,'#aa7c41',0,1.50);
s_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 UpObject();
  return;
}
 );
s_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownObject();
  return;
}
 );
var s_3 = CreText('s_3',446,109,46,42,"Kéo thả các số cho trước phía trên vào các ô trống thích hợp phía dưới, để được dãy tính đúng.",'#d9aa7f','#000000','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',1,1,'#aa7c41',0,1.50);
s_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 UpObject();
  return;
}
 );
s_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
DownObject();
  return;
}
 );
var m_diem = CreText('m_diem',205,133,211,94,"",'#ecd9ff','#ffffff','rgba(0,0,0,0)','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ecd9ff','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var label = CreText('label',211,142,203,53,"Kéo thả các số cho trước phía trên vào các ô trống thích hợp phía dưới, để được dãy tính đúng.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',11,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var t_mess = CreText('t_mess',206,125,210,15,"Bài 2",'rgba(64,0,128,1.11)','#ffffff','#ffffff','#ffffff','',11,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#ffffff','rgba(128,0,255,1.11)','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_lam_lai = CreText('bt_lam_lai',287,195,56,20,"Bắt Đầu",'#8b0000','#ffffff','#ffffff','#ffffff','',10,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#ffffff','#370000','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitBai2();
SetShowObject("","msg",0);
  return;
}
 );
var Text_2 = CreText('Text_2',4,6,140,39,"Vòng 13",'#d9aa7f','#ffffff','#000000','#ffffff','',24,'Arial','Normal','center','middle',11,'0.00','10','0',2,'#bf7939','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','2',2,2,'#c0c0c0',0,1.50);
var cau = CreText('cau',159,6,215,39,"Bảng nhân 9",'#d9aa7f','#ffffff','#000000','#ffffff','',24,'Arial','Normal','center','middle',11,'0.00','10','0',2,'#bf7939','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','2',2,2,'#c0c0c0',0,1.50);
var Text_4 = CreText('Text_4',253,40,19,25,"",'#d9aa7f','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_7 = CreText('Text_7',390,6,140,39,":",'#d9aa7f','#ffffff','#000000','#ffffff','',24,'Arial','Normal','center','middle',11,'0.00','10','0',2,'#bf7939','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','2',2,2,'#c0c0c0',0,1.50);
var phut = CreText('phut',419,8,38,39,"0",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',26,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var giay = CreText('giay',478,8,38,39,"0",'rgba(0,0,0,0)','#ffffff','#000000','#000000','',26,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_6 = CreText('Text_6',453,40,19,24,"",'#d9aa7f','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_9 = CreText('Text_9',548,8,36,38,"››",'#d9aa7f','#ffffff','#000000','#ffff00','',20,'Arial','Bold','center','middle',2,'0.00','0','0',3,'#aa6b33','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
var Text_5 = CreText('Text_5',26,248,36,38,"‹‹",'#d9aa7f','#ffffff','#000000','#ffff00','',20,'Arial','Bold','center','middle',2,'0.00','0','0',3,'#aa6b33','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
var Text_3 = CreText('Text_3',56,40,19,25,"",'#d9aa7f','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = new Kinetic.Group({name:'msg',x:0,y:0,width:215,height:106});
msg.add(m_diem,label,t_mess,bt_lam_lai);
Bai_2.add(Bai_2_Backrounnd,Text_1,so_0,so_1,so_2,so_3,dau1,kiem_tra,thong_bao,cau_tiep,dau2,Text_11,s_0,s_1,s_2,s_3,Text_2,cau,Text_4,Text_7,phut,giay,Text_6,Text_9,Text_5,Text_3,msg);
stage.add(Bai_2);

 var Bai_3 = new Kinetic.Layer({name: 'Bai_3',callback:'Bai_3()'});
var Bai_3_Backrounnd = CreText('Bai_3_Backrounnd',0,0,600,400,'','#c0ffff','','','','ID_IMAGE1.PNG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#c0ffff','2','2','0','','0','0','0','0',0,0,'');
var Text_1 = CreText('Text_1',115,45,361,344,"",'rgba(255,255,255,0.89)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',8,'#d9aa7f','rgba(255,255,255,0.89)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var o_0 = CreText('o_0',120,54,36,33,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
Click3();
  return;
}
 );
var o_1 = CreText('o_1',159,54,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_2 = CreText('o_2',198,54,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_3 = CreText('o_3',237,54,36,33,"Một hình chữ nhật có chiều dài 174cm, chiều dài gấp 3 lần chiều rộng. Tổng chiều dài và chiều rộng là.....|232",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_CAU_HOI.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_4 = CreText('o_4',276,54,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_5 = CreText('o_5',315,54,36,33,"Viết số gồm hai chục, năm đơn vị và tám trăm.|825",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_6 = CreText('o_6',354,54,36,33,"Một tờ giấy hình chữ nhật có chu vi là 128cm. Chiều rộng bằng 8cm. Chiều rộng tờ giấy bằng một phần .... chiều dài?|7",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_CAU_HOI.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_7 = CreText('o_7',393,54,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_8 = CreText('o_8',433,54,36,33,"-",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_CARROT.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_9 = CreText('o_9',120,91,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_10 = CreText('o_10',159,91,36,33,"-",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_11 = CreText('o_11',198,91,36,33,"Mẹ mua 48 quả táo, như vậy số táo mẹ mua gấp 3 lần số táo chị mua. Hỏi chị mua bao nhiêu quả táo?|12",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_12 = CreText('o_12',237,91,36,33,"-",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_13 = CreText('o_13',276,91,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_14 = CreText('o_14',315,91,36,33,"-",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_15 = CreText('o_15',354,91,36,33,"Tìm số bị chia trong phép chia có thương là 15, số chia là 7, số dư là số dư lớn nhất có thể có trong phép chia đó.|111",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_16 = CreText('o_16',393,91,36,33,"-",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_17 = CreText('o_17',433,91,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_18 = CreText('o_18',120,129,36,33,"Một phép chia có số bị chia là 80, thương là 8 số dư là 8. Số chia của phép chia đó là.....|9",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_CAU_HOI.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_19 = CreText('o_19',159,129,36,33,"Bể thứ nhất chứa 256l nước. Bể thứ hai chứa được 212l nước. Hỏi cả hai bể chứa bao nhiêu lít nước?|468",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_20 = CreText('o_20',198,129,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_20.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_21 = CreText('o_21',237,129,36,33,"-",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_21.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_22 = CreText('o_22',276,129,36,33,"Có 45l dầu được đều vào 5 thùng. Vậy nếu có thêm 108l dầu nữa thì có tất cả .... thùng thư thế?17",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_CAU_HOI.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_22.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_23 = CreText('o_23',315,129,36,33,"-",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_23.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_24 = CreText('o_24',354,129,36,33,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_24.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_25 = CreText('o_25',393,129,36,33,"Một thửa ruộng hình chữ nhật có chiều dài bằng 36m chiều dài gấp 4 lần chiều rộng. Hỏi chu vi của thửa ruộng đó là....?|90",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_CAU_HOI.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_25.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_26 = CreText('o_26',433,129,36,33,"Gói kẹo của Mai có 42 cái kẹo. Sau khi Mai chia cho các bạn thì còn lại 1/3 số kẹo. Tìm số kẹo còn lại của Mai?|14",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_26.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_27 = CreText('o_27',120,166,36,33,"-",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_27.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_28 = CreText('o_28',159,166,36,33,"Cô giáo chia 56 quyển vở cho các bạn học sinh, mỗi bạn học sinh được 7 quyển. Hỏi số học sinh được cô giáo chia vở là bao nhiêu bạn?|8",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_28.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_29 = CreText('o_29',198,166,36,33,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_29.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_30 = CreText('o_30',237,166,36,33,"Khối lớp Bốn có 235 học sinh, khối lớp Ba có 216 học sinh. Hỏi hai khối có bao nhiêu học sinh?|451",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_30.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_31 = CreText('o_31',276,166,36,33,"Một đội công nhân cần sữa quảng đường dài 480m. Đội đó đã sữa được 1/6 quãng đường. Hỏi đội đó đã sữa được quãng đường dài bao nhiêu mét?|80",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_31.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_32 = CreText('o_32',315,166,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_32.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_33 = CreText('o_33',354,166,36,33,"-",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_33.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_34 = CreText('o_34',393,166,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_34.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_35 = CreText('o_35',433,166,36,33,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_35.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_36 = CreText('o_36',120,202,36,33,"-",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_36.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_37 = CreText('o_37',159,203,36,33,"Lớp 3A1 có tất cả 32 học sinh, số học sinh giỏi chiếm 1/2 tổng số học sinh cả lớp. Hỏi lớp 3A1 có bao nhiêu học sinh giỏi?|16",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_37.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_38 = CreText('o_38',198,203,36,33,"Lan có 56 ngôi sao, Hồng có 72 ngôi sao. Số sao của hai bạn xếp đều vào 8 hộp. Vậy mỗi hộp có bao nhiêu ngôi sao?|16",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_CAU_HOI.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_38.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_39 = CreText('o_39',237,203,36,33,"Trong tuần vừa qua Lan được  7 điểm 10, số điểm 10 của Loan bằng 2 lần số điểm 10 của Lan. Hỏi Loan được bao nhiêu điểm 10?|14",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_39.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_40 = CreText('o_40',276,203,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_40.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_41 = CreText('o_41',317,203,33,33,"-",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_41.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_42 = CreText('o_42',354,203,36,33,"Cho hai số có tổng bằng 5 và tích bằng 6. Số lớn là:|3",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_42.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_43 = CreText('o_43',393,203,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_43.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_44 = CreText('o_44',433,203,36,33,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_44.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_45 = CreText('o_45',120,240,36,33,"Mai gấp được 145 ngôi sao. Mai tặng bạn 78 ngôi sao. Hỏi Mai còn lại bao nhiêu ngôi sao?|67",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_45.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_46 = CreText('o_46',159,240,36,33,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_46.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_47 = CreText('o_47',198,240,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_47.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_48 = CreText('o_48',237,240,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_48.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_49 = CreText('o_49',276,240,36,33,"Hiện nay mẹ 35 tuổi, tuổi con bằng 1/7 tuổi mẹ. Vậy 5 năm nữa tuổi mẹ gấp mấy lần tuổi con?|4",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_CAU_HOI.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_49.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_50 = CreText('o_50',315,240,36,33,"-",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_50.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_51 = CreText('o_51',354,240,36,33,"Năm nay có 4 tuổi, 3 năm nữa bố gấp 7 lần tuổi con. Hỏi năm nay bố bao nhiêu tuổi?|46",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_51.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_52 = CreText('o_52',393,240,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_52.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_53 = CreText('o_53',433,240,36,33,"Có bao nhiêu số có hai chữ số mà tổng các chữ số bằng 9?|9",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_53.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_54 = CreText('o_54',120,277,36,33,"Giá trị của biểu thức: 326 + 936 : 9 x 2 là.....|534",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_CAU_HOI.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_54.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_55 = CreText('o_55',159,277,36,33,"-",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_55.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_56 = CreText('o_56',198,277,36,33,"-",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_56.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_57 = CreText('o_57',237,277,36,33,"Khối lớp 3 trường tiểu học Đoàn Kết có 96 em, trong đó có 1/3 số học sinh là học sinh giỏi. Hỏi khối lớp 3 trường đó có bao nhiêu học sinh giỏi?|32",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_57.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_58 = CreText('o_58',276,277,36,33,"Có bao nhiêu số có hai chữ số mà tổng các chữ số bẳng 14?|5",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_58.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_59 = CreText('o_59',315,277,36,33,"-",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_59.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_60 = CreText('o_60',354,277,36,33,"Có 2 túi kẹo, túi thứ nhất có 65 cái, túi thứ 2 có nhiều hơn túi thứ nhất 5 cái. Số kẹo đó đem chia đều cho 9 bạn. Vậy mỗi bạn được chia .... cái kẹo?|15",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_CAU_HOI.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_60.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_61 = CreText('o_61',393,277,36,33,"-",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_61.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_62 = CreText('o_62',433,277,36,33,"Một phép chia có số chia là 9, thương là 79 và số dư là 8. Vậy số bị chia của phép chia đó là......|719",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_CAU_HOI.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_62.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_63 = CreText('o_63',120,314,36,33,"Một cửa hàng có 84kg gạo, đã bán được 1/2 số gạo đó. Hỏi cửa hàng đã bán được bao nhiêu ki-lô-gam gạo?|42",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_63.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_64 = CreText('o_64',159,314,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_64.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_65 = CreText('o_65',198,314,36,33,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_65.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_66 = CreText('o_66',237,314,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_66.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_67 = CreText('o_67',276,314,36,33,"",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_67.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_68 = CreText('o_68',315,314,36,33,"Hiện nay bố 40 tuổi và tuổi con bằng 1/4 tuổi bố. Tính tuổi con sau hai năm nữa?|12",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_68.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_69 = CreText('o_69',354,314,36,33,"Số viên bi của Minh bằng 1/2 số viên bi của Tùng. Nếu Tùng cho Minh 4 viên bi thì số bi của hai bạn bằng nhau. Hỏi Tùng có bao nhiêu viên bi?|16\r\n",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_69.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_70 = CreText('o_70',393,314,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_70.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_71 = CreText('o_71',433,314,36,33,"+",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_71.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_72 = CreText('o_72',120,351,36,33,"-",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_72.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_73 = CreText('o_73',159,351,36,33,"-",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_73.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_74 = CreText('o_74',198,351,36,33,"Ngày thứ nhất cửa hàng bán được 12m vải. Ngày thứ hai cửa hàng bán được số vải gấp 3 lần ngày thứ nhất. Hỏi ngày thứ 2 cửa hàng bán được bao nhiêu mét vải?|36",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_74.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_75 = CreText('o_75',237,351,36,33,"Tính giá trị của biểu thức: 700 - 25 x 7 là.....|525",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_CAU_HOI.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_75.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_76 = CreText('o_76',276,351,36,33,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_76.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_77 = CreText('o_77',315,351,36,33,"Một hộp bánh nặng 225g, 1 gói mì nặng 80g. Vậy 2 hộp bánh và 4 gói mì nặng tất cả ....g?|770",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_CAU_HOI.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_77.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_78 = CreText('o_78',354,351,36,33,"Tìm số có ba chữ số biết chữ số hàng trăm hơn chữ số hàng chục 6 đơn vị, chữ số hàng chục trừ đi chữ số hàng đơn vị bằng 3.|930",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_78.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_79 = CreText('o_79',393,351,36,33,"Cho phép tính 15 x 5 nếu thêm vào thừa số thứ hai 2 đơn vị, thì tích mới bằng bao nhiêu?105",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
o_79.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var o_80 = CreText('o_80',433,351,36,33,"-",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_STOP.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
o_80.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Click3();
  return;
}

 );
var tho = CreText('tho',121,352,36,33,"",'#ff6820','#ffffff','#000000','#ffffff','ID_THO.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',0,'#0080ff','#ff6820','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, '#ccffcc',0,1.50);
var Text_8 = CreText('Text_8',76,353,30,30,"",'#0080ff','#ffffff','#ffffff','#ffff00','ID_IMAGE26.PNG',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#0080ff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, '#ffffff',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
var Text_3 = CreText('Text_3',487,54,30,30,"",'#666666','#666666','#ffffff','#ffff00','ID_IMAGE26.PNG',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#666666','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, '#ffffff',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
var cau_hoi = CreText('cau_hoi',115,154,361,97,"\r\nSố viên bi của Minh bằng 1/2 số viên bi của Tùng. Nếu Tùng cho Minh 4 viên bi thì số bi của hai bạn bằng nhau. Hỏi Tùng có bao nhiêu viên bi?|16",'#8000ff','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','top',0,'0.00','0','0',2,'#ffffff','#400080','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var m_kq = CreText('m_kq',352,223,64,23,"642",'#ffffff','#ffffff','#0000ff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#666666','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
m_kq.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
AllowEditText("","",1);
  return;
}
 );
var bt_ok = CreText('bt_ok',422,223,48,23,"OK",'#400080','#ffffff','#ffff00','#ffffff','',12,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','#8000ff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_ok.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
KiemTra();
  return;
}
 );
var title = CreText('title',115,137,361,18,"CÂU HỎI",'#400080','#ffffff','#ffff00','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#8000ff','4','1','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var close_msg = CreText('close_msg',449,137,28,18,"x",'#ff0000','#ffffff','#ffffff','#ffffff','',10,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','#8b0000','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
close_msg.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CloseMsg();
  return;
}
 );
var Text_5 = CreText('Text_5',-8,176,37,32,"",'#ffffff','#ffffff','#ffff00','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',11,351,36,38,"‹‹",'#d9aa7f','#ffffff','#000000','#ffff00','',20,'Arial','Bold','center','middle',2,'0.00','0','0',3,'#aa6b33','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
var Text_6 = CreText('Text_6',1,-1,598,46,"Bài 3: Bạn hãy di chuyển con thỏ đến củ cà rốt bằng các phím mủi tên (←↑→↓)",'#d9aa7f','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',5,'rgba(0,0,0,0)','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var msg = new Kinetic.Group({name:'msg',x:0,y:0,width:366,height:118});
msg.add(title,close_msg,cau_hoi,m_kq,bt_ok);
Bai_3.add(Bai_3_Backrounnd,Text_1,o_0,o_1,o_2,o_3,o_4,o_5,o_6,o_7,o_8,o_9,o_10,o_11,o_12,o_13,o_14,o_15,o_16,o_17,o_18,o_19,o_20,o_21,o_22,o_23,o_24,o_25,o_26,o_27,o_28,o_29,o_30,o_31,o_32,o_33,o_34,o_35,o_36,o_37,o_38,o_39,o_40,o_41,o_42,o_43,o_44,o_45,o_46,o_47,o_48,o_49,o_50,o_51,o_52,o_53,o_54,o_55,o_56,o_57,o_58,o_59,o_60,o_61,o_62,o_63,o_64,o_65,o_66,o_67,o_68,o_69,o_70,o_71,o_72,o_73,o_74,o_75,o_76,o_77,o_78,o_79,o_80,tho,Text_8,Text_3,Text_5,Text_2,Text_6,msg);
stage.add(Bai_3);
InitLacVietScript();
};
