folder_Resource ='data/Vong_11_toan_lop_2';
var arNumber=[0,0,0,0,0];
var m_size=20;
var m_index=0;
var m_sai=0;
var bStart=0;
var arPhep=[0,0,0,0,0];
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
    if(nc==0)iNN = x;
    else iNN = y;	
    for (var j = 0 ; j < Count;j++)
    { 
      if (arNumber[j] == iNN)
         break;
    }
    if (j >= Count)
       bb = false;
    }
    arNumber[Count] =iNN;
    if(nc==0) arPhep[Count]="a x "+ y+" = "+ x*y;
    else arPhep[Count]=x +" x a"+ " = "+ x*y;
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
	var id = indexOf(arPhep[k],"=",0,1);
	arPhep[xx]= subString(arPhep[k],id+1) +" = " + subString(arPhep[k],0,id);
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
	SetText("","o_so_"+k,"a = "+arNumber[k]);
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
bStart=1;
GetVer();
SetTimerPage(1000);
movex=GetLeft("","obj_view");
movey=GetTop("","obj_view");
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
var phep="";
var m_size2=0;
var m_sai2=0;
function CreateBai2()
{
	var akq=["","",""];	
  	akq[0]= Random(10)+1;
	akq[1]= Random(4)+2;
	akq[0]=akq[0]*akq[1];
	akq[2]= Random(90)+10;
	phep= Random(2);
	if(phep==0)
	{
	while(akq[0]/akq[1]+akq[2]>100)
		akq[2]= Random(90)+10;
	akq[3]= akq[0]/akq[1]+akq[2];
	phep="+";
	}
	else
      {
	akq[2]= Random(akq[0]/akq[1]);
	akq[3]= akq[0]/akq[1]- akq[2];
	phep="-";
	}
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
	SetText("","dau",phep);
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
GetVer();
CreateBai2();
}
function  UpObject(){
	for(var j=0;j< 4;j++)
	{
		if(RectInRect("","so_"+j,""))
		{
		SetText("","so_"+j, GetText("",""));
		MoveObjectTo("","",GetLeft("","so_"+j),GetTop("","so_"+j));
		return;
		}
	}
		MoveObjectTo("","",-1,-1,20,2);
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
		SetFontColor("","thong_bao","#ffffff");
		SetText("","thong_bao","Bạn chưa hoàn thành bài toán.");
		InvalidateObj("","");
		return;
		}
	var st= a+"/"+b+phep+c;
	if(ExecAsThread(st)==GetText("","so_3"))
		{
			SetFontColor("","thong_bao","#00ff00");
			SetText("","thong_bao","Bạn giỏi quá. Đúng rồi.");
			PlaySound("ID_TRUE");
		}
	else {
		SetFontColor("","thong_bao","#ff0000");
		SetText("","thong_bao","Sai, câu tiếp đi bạn");
		PlaySound("ID_FALSE");
		m_sai2++;
		}
	
	if(m_size2>9)
		{
		KillTimerPage();
		var diem = 100- m_sai2*100/10;
		UpdateScore(diem);
		diem= "Điểm: " +diem +"/100 \n Thời gian: ";
		var g=60 - GetText("","giay");
		var ph= 19 - GetText("","phut");
		diem = diem +ph +":"+g;
		SetText("","label",diem);
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
function Page_1()
{
KillTimerPage();
SetText("","bt_lam_lai","Làm Lại");
SetShowObject("","bang_diem",1);
  return;
}
function Page_1_OnTimer()
{
StartTime();
  return;
}

function Page_2_OnTimer()
{
StartTime();
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
 height: 300 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,470,300,'','#8000ff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#8000ff','0','0','0','','0','0','0','0',0,0,'');
var Text_7 = CreText('Text_7',9,2,440,45,"Vòng 11, bài 1",'#d9aa7f','#000000','#000000','#ffffff','',16,'Arial','Bold','left','middle',12,'0.00','0','1',2,'#aa7c41','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',5,5,'#aa7c41',0,1.50);
var Text_6 = CreText('Text_6',319,11,79,24,":",'rgba(142,90,43,0.67)','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','rgba(142,90,43,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',7,60,457,235,"",'#d9aa7f','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',8,'#8e5a2b','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var o_so_0 = CreText('o_so_0',14,67,110,44,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_1 = CreText('o_so_1',125,67,110,44,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_2 = CreText('o_so_2',236,67,110,44,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_3 = CreText('o_so_3',347,67,110,44,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_4 = CreText('o_so_4',14,247,110,44,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_5 = CreText('o_so_5',14,112,110,44,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_6 = CreText('o_so_6',125,112,110,44,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_7 = CreText('o_so_7',236,112,110,44,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_8 = CreText('o_so_8',347,112,110,44,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_9 = CreText('o_so_9',124,247,110,44,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_10 = CreText('o_so_10',14,157,110,44,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_11 = CreText('o_so_11',125,157,110,44,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_12 = CreText('o_so_12',236,157,110,44,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_13 = CreText('o_so_13',347,157,110,44,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_14 = CreText('o_so_14',235,247,110,44,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_15 = CreText('o_so_15',14,202,110,44,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_16 = CreText('o_so_16',125,202,110,44,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_17 = CreText('o_so_17',236,202,110,44,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_18 = CreText('o_so_18',347,202,110,44,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var o_so_19 = CreText('o_so_19',347,247,110,44,"",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
var m_diem = CreText('m_diem',120,107,231,109,"",'rgba(236,217,255,1.11)','#ffffff','#ff0000','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(236,217,255,1.11)','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_lam_lai = CreText('bt_lam_lai',203,188,80,25,"Bắt Đầu",'#400080','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#8000ff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitBai1();
SetShowObject("","bang_diem",0);
  return;
}
 );
var t_mess = CreText('t_mess',121,108,229,16,"Thông báo điểm",'rgba(64,0,128,1.11)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#ffffff','rgba(128,0,255,1.11)','4','1','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var label = CreText('label',122,125,228,57,"Em hãy tìm 2 cặp ô chứa số có chứa giá trị a bằng nhau.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var phut = CreText('phut',320,13,38,24,"0",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var giay = CreText('giay',362,13,38,24,"0",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_8 = CreText('Text_8',412,10,30,30,"››",'rgba(142,90,43,0.67)','#ffffff','#ffffff','#ffff00','',20,'Arial','Bold','center','middle',2,'0.00','0','0',3,'#ffffff','rgba(142,90,43,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
var obj_view = CreText('obj_view',152,11,161,24,"",'rgba(142,90,43,0.67)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',11,'0.00','10','0',2,'#ffffff','rgba(142,90,43,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'#c0c0c0',0,1.50);
var bang_diem = new Kinetic.Group({name:'bang_diem',x:0,y:0,width:235,height:113});
bang_diem.add(m_diem,bt_lam_lai,t_mess,label);
var Text_1 = CreText('Text_1',36,42,19,24,"",'#d9aa7f','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',366,43,19,24,"",'#d9aa7f','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_1.add(Page_1_Backrounnd,Text_7,Text_6,Text_3,o_so_0,o_so_1,o_so_2,o_so_3,o_so_4,o_so_5,o_so_6,o_so_7,o_so_8,o_so_9,o_so_10,o_so_11,o_so_12,o_so_13,o_so_14,o_so_15,o_so_16,o_so_17,o_so_18,o_so_19,phut,giay,Text_8,obj_view,bang_diem,Text_1,Text_2);
stage.add(Page_1);

 var Page_2 = new Kinetic.Layer({name: 'Page_2'});
var Page_2_Backrounnd = CreText('Page_2_Backrounnd',0,0,470,250,'','#8000ff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#8000ff','0','0','0','','0','0','0','0',0,0,'');
var Text_3 = CreText('Text_3',13,47,441,184,"",'#004040','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',8,'#d2b48c','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',28,5,400,33,"Vòng 11, bài 2",'#d9aa7f','#000000','#000000','#ffffff','',14,'Arial','Bold','center','middle',12,'0.00','1','0',2,'#aa7c41','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',5,5,'#aa7c41',0,1.50);
var Text_6 = CreText('Text_6',311,9,79,24,":",'rgba(142,90,43,0.67)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',11,'0.00','10','0',2,'#ffffff','rgba(142,90,43,0.67)','0','0','rgba(0,0,0,0)','0','0','4','2',0,0,'rgba(0,0,0,0)',0,1.50);
var phut = CreText('phut',312,11,38,24,"0",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#282828','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var giay = CreText('giay',354,11,38,24,"0",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var so_0 = CreText('so_0',70,146,37,37,"",'#004040','#ffffff','#ffffff','#ffffff','',22,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
var so_1 = CreText('so_1',166,146,37,37,"",'#004040','#ffffff','#ffffff','#ffffff','',22,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
var so_2 = CreText('so_2',262,146,37,37,"",'#004040','#ffffff','#ffffff','#ffffff','',22,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
var so_3 = CreText('so_3',361,146,37,37,"",'#004040','#ffffff','#ffffff','#ffffff','',22,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#004040','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
so_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  return;
}
 );
var phep = CreText('phep',119,145,47,38,":",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','center','middle',0,'0.00','0','0',0,'#ffffff','#ffff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var kiem_tra = CreText('kiem_tra',390,199,59,17,"Kiểm Tra",'#8b0000','#ffffff','#ffffff','#ffffff','',10,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#370000','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
kiem_tra.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
KiemTra2();
  return;
}
 );
var thong_bao = CreText('thong_bao',16,196,306,21,"",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','right','middle',0,'0.00','0','0',0,'#ffffff','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_tiep = CreText('cau_tiep',327,199,59,17,"Câu Tiếp",'#0080c0','#ffffff','#ffffff','#ffffff','',10,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#ffffff','#005177','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
cau_tiep.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateBai2();
  return;
}
 );
var Text_13 = CreText('Text_13',29,9,26,26,"‹‹",'rgba(142,90,43,0.67)','#ffffff','#ffffff','#ffff00','',20,'Arial','Bold','center','middle',2,'0.00','0','0',3,'#ffffff','rgba(142,90,43,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
var dau = CreText('dau',215,145,47,38,"+",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','center','middle',0,'0.00','0','0',0,'#ffffff','#ffff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_11 = CreText('Text_11',311,145,47,38,"=",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','center','middle',0,'0.00','0','0',0,'#ffffff','#ffff00','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau = CreText('cau',168,47,141,21,"",'rgba(0,0,0,0)','#ffffff','#ffff00','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',-1,-1,'rgba(0,0,0,0)',0,1.50);
var s_0 = CreText('s_0',104,76,37,37,"",'#d9aa7f','#000000','#000000','#ffffff','',22,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',1,1,'#aa7c41',0,1.50);
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
var s_1 = CreText('s_1',177,76,37,37,"",'#d9aa7f','#000000','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',1,1,'#aa7c41',0,1.50);
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
var s_2 = CreText('s_2',249,76,37,37,"",'#d9aa7f','#000000','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',1,1,'#aa7c41',0,1.50);
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
var s_3 = CreText('s_3',323,76,37,37,"",'#d9aa7f','#000000','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',1,1,'#aa7c41',0,1.50);
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
var m_diem = CreText('m_diem',143,99,211,94,"",'#ecd9ff','#ffffff','rgba(0,0,0,0)','#ffffff','',28,'Arial','Bold','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ecd9ff','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var label = CreText('label',149,116,203,53,"Kéo thả các số cho trước phía trên vào các ô trống thích hợp phía dưới, để được dãy tính đúng.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',11,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var t_mess = CreText('t_mess',144,99,210,15,"Bài 2",'rgba(64,0,128,1.11)','#ffffff','#ffffff','#ffffff','',11,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#ffffff','rgba(128,0,255,1.11)','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_lam_lai = CreText('bt_lam_lai',225,169,56,20,"Bắt Đầu",'#8b0000','#ffffff','#ffffff','#ffffff','',10,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#ffffff','#370000','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitBai2();
SetShowObject("","msg",0);
  return;
}
 );
var msg = new Kinetic.Group({name:'msg',x:0,y:0,width:215,height:98});
msg.add(m_diem,label,t_mess,bt_lam_lai);
var Text_2 = CreText('Text_2',53,34,19,13,"",'#d9aa7f','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_4 = CreText('Text_4',345,36,19,11,"",'#d9aa7f','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#d9aa7f','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Page_2.add(Page_2_Backrounnd,Text_3,Text_1,Text_6,phut,giay,so_0,so_1,so_2,so_3,phep,kiem_tra,thong_bao,cau_tiep,Text_13,dau,Text_11,cau,s_0,s_1,s_2,s_3,msg,Text_2,Text_4);
stage.add(Page_2);
InitLacVietScript();
};
