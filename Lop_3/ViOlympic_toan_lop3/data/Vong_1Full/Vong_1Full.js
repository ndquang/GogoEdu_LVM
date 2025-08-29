folder_Resource ='data/Vong_1Full';
var arNumber=[0,0,0,0,0];
var m_size=20;
var m_index=0;
var m_sai=0;

function  CreateRam(){
   var Count = 0;
   for (var i = 0; i < m_size; i++)
   {
    var bb = true;
    var iNN ;
    while (bb)
    {
    iNN = Random(899)+100;
    for (var j = 0 ; j < Count;j++)
    { 
      if (arNumber[j] == iNN)
         break;
    }
    if (j >= Count)
       bb = false;
    }
    arNumber[Count] =iNN;
    Count++;
  } 
}
function InitBai1()
{
m_sai=0;
CreateRam();
 for (var k = 0; k < m_size; k++){
	SetText("","o_so_"+k,arNumber[k]);
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
SetText("","obj_view","");
SetText("","phut","2");
SetText("","giay","0");
m_index=0;
SetTimerPage(1000);
	InvalidateObj("","");
}
function FinishMove(){
	var tt= GetText("","");
	SetShowObject("","",0);
	SetText("","obj_view",tt);
		InvalidateObj("","");

}
function ClickNumber()
{
	if(arNumber[m_index]==GetText("","")){
		m_index++;
		m_sai=0;		
		MoveObjectTo("","",GetLeft("","obj_view"),GetTop("","obj_view"),10,2,1,"FinishMove()");
		PlaySound("ID_TRUE");
	}
	else{
		m_sai++;
		PlaySound("ID_FALSE");
	}
	if(m_index==m_size){
		KillTimerPage();
		SetText("","label","Tốt");
		var g=60 - GetText("","giay");
		var ph= 1 - GetText("","phut");
		SetText("","m_diem",ph +":"+g);
		SetShowObject("","bang_diem",1);
		}
	else if(m_sai>=3)
		{
		InitBai1();
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
var curentpos=0;
var m_dapan="";
function InitBai3()
{
curentpos=0;
SetShowObject("","msg",0);
InvalidateObj("","");
}
function MoveTho( key)
{
  var nextpos= curentpos;
  switch(key){
	case "&":
	{
		nextpos=nextpos-9;
		break; //len
	}
	case "(": //xuong
	{
		nextpos=nextpos+9;
		break;
	}
	case "%": //trai
	{
		nextpos=nextpos-1;
		break;
	}
	case "'": //phai
	{
		nextpos=nextpos+1;
		break;
	}
	default:
		break;
  }
  var obj= "o_"+nextpos;
	if(FindObj("",obj)!="")
	{
		var text= GetText("",obj);
		if(text==""){
		MoveObjectTo("","tho",GetLeft("",obj),GetTop("",obj));
		curentpos=nextpos;
		}
		else if(text=="-")
			return;
		else{
			var idx= indexOf(text,"|",0);
			SetText("","cau_hoi",subString(text,0,idx));
			m_dapan=subString(text,idx);
			SetText("","m_kq","");
			SetShowObject("","msg",1);
		}
		InvalidateObj("","");;
	}	
}
var count1= 12;
var a_kq=["b","c","d","c","b","d","a","a","b","d","a","b"];
var a_tl=[0,0,0,0];
function InitBai2(){
	for(var i=0;i<count1;i++)
		{
		SetShowObject("","check_"+i,0);
		SetCursor("","a_"+i,"pointer");
		SetCursor("","b_"+i,"pointer");
		SetCursor("","c_"+i,"pointer");
		SetCursor("","d_"+i,"pointer");
		SetFontColor("","a_"+i,"#000000");
		SetFontColor("","b_"+i,"#000000");
		SetFontColor("","c_"+i,"#000000");
		SetFontColor("","d_"+i,"#000000");
		SetText("","check_"+i,"");
		a_tl[i]=0;
		}
SetShowObject("","begin",1);
SetCursor("","begin","pointer");
SetCursor("","nghe_doc","pointer");
SetCursor("","lam_lai","pointer");
SetShowObject("","m_diem",0);
SetShowObject("","lam_lai",0);
SetText("","m_diem","" );
InvalidateObj("","");
}

function ChonTL(){
	PlaySound("","","ID_CLICK");
	var name= GetName("Trang_1");
	var t=  GetTop("Trang_1",name)-2;
	var l=  GetLeft("Trang_1",name);
	var cau = StringtoNumber(name,1);
	a_tl[cau]= leftStr(name,1);
	SetText("Trang_1","check_"+cau,toUpperCase(a_tl[cau]));
	MoveObjectTo("Trang_1","check_"+cau,l-3,t+3);
	SetShowObject("Trang_1","check_"+cau,1);
	InvalidateObj("Trang_1","");
}
function Diem1(){
 var diem=0;
 for(var i=0;i<count1;i++){
	if(toLowerCase(a_kq[i]) != toLowerCase(a_tl[i]))
	{
		SetFontColor("Trang_1",a_kq[i]+"_"+i,"#008000");
		SetFontColor("Trang_1",a_tl[i]+"_"+i,"#CC0000");
	}
	else {
		diem=diem+1;
		SetFontColor("Trang_1",a_kq[i]+"_"+i,"#008000");
	    }
	}
 return diem;
}
var a22=[0,0,0,0,0];
var b22=[0,0,0,0];
function TaoBai2_2()
{
	var x= Random(7)+1;
	var y = x+1;
	var z = y+ 1;
	a22[0]=x*100+y*10+z;
	a22[1]=x*100+z*10+y;
	a22[2]=y*100+x*10+z;
	a22[3]=y*100+z*10+x;
	a22[4]=z*100+x*10+y;
	a22[5]=z*100+y*10+x;
	for(var k=0;k<4;k++)
	{
		var h=0;
		while(h<6){
		   var x= Random(6);
		   var y= Random(6);
		   while(x==y)
			y= Random(6);
		   var tam= a22[x];
			 a22[x]=a22[y];
			 a22[y]=tam;
		  	 h++;
		}
		var hhh="";
		for(var cc=0;cc<6;cc++)
		  hhh=hhh+a22[cc]+"; ";
	}
	//var a= s1+"; "+s2 + "; " + s3 +"; "+ s4 +"; "+ s5 + "; "+s6;
}
function Page_1()
{
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
 width: 640,
 height: 400 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,640,400,'','#ffffb7','','','','ID_IMAGE7.PNG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffb7','2','2','0','','0','0','0','0',0,0,'');
Page_1.add(Page_1_Backrounnd);
var Text_6 = CreText('Text_6',290,375,79,24,":",'rgba(0,0,0,0.59)','#ffffff','#ffff00','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(0,0,0,0.59)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_6);
var Text_7 = CreText('Text_7',480,-5,92,33,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',4,'0.00','50','0',2,'#ffffff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_7);
var Text_4 = CreText('Text_4',1,53,510,45,"Bài 1: Chọn các ô theo thứ tự từ nhỏ đến lớn",'rgba(40,40,40,0.39)','#ffffff','#ffffff','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(40,40,40,0.39)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_4);
var obj_view = CreText('obj_view',470,25,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
obj_view.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(obj_view);
var Text_3 = CreText('Text_3',47,103,562,265,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',8,'#ffffe0','rgba(255,255,0,0.59)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_3);
var o_so_0 = CreText('o_so_0',50,106,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(o_so_0);
var o_so_1 = CreText('o_so_1',161,106,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(o_so_1);
var o_so_2 = CreText('o_so_2',272,106,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(o_so_2);
var o_so_3 = CreText('o_so_3',383,106,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(o_so_3);
var o_so_4 = CreText('o_so_4',495,106,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(o_so_4);
var o_so_5 = CreText('o_so_5',50,171,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(o_so_5);
var o_so_6 = CreText('o_so_6',161,171,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(o_so_6);
var o_so_7 = CreText('o_so_7',272,171,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(o_so_7);
var o_so_8 = CreText('o_so_8',383,171,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(o_so_8);
var o_so_9 = CreText('o_so_9',495,171,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(o_so_9);
var o_so_10 = CreText('o_so_10',50,235,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(o_so_10);
var o_so_11 = CreText('o_so_11',161,235,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(o_so_11);
var o_so_12 = CreText('o_so_12',272,235,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(o_so_12);
var o_so_13 = CreText('o_so_13',383,235,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(o_so_13);
var o_so_14 = CreText('o_so_14',495,235,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(o_so_14);
var o_so_15 = CreText('o_so_15',50,301,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(o_so_15);
var o_so_16 = CreText('o_so_16',161,301,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(o_so_16);
var o_so_17 = CreText('o_so_17',272,301,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(o_so_17);
var o_so_18 = CreText('o_so_18',383,301,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(o_so_18);
var o_so_19 = CreText('o_so_19',495,301,110,64,"",'#0080c0','#ffffff','#ffffff','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffffff','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',2,2,'#c0c0c0',0,1.50);
o_so_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ClickNumber();
  return;
}
 );
Page_1.add(o_so_19);
var Text_2 = CreText('Text_2',117,0,66,68,"1",'rgba(0,85,0,0.39)','#ffffff','#ff0000','#ffffff','',48,'Arial','Bold','center','middle',2,'0.00','0','0',2,'#ffffff','rgba(0,85,0,0.39)','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_2);
var Text_1 = CreText('Text_1',2,9,114,45,"Vòng",'rgba(0, 0, 0, 0)','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(0,0,0,0.39)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_1);
var Text_5 = CreText('Text_5',7,57,37,32,"",'#ffffff','#ffffff','#ffff00','#ffffff','ID_IMAGE4.PNG',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_5);
var m_diem = CreText('m_diem',191,159,252,141,"",'rgba(236,217,255,0.98)','#ffffff','#8000ff','#ffffff','',48,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(236,217,255,0.98)','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(m_diem);
var bt_lam_lai = CreText('bt_lam_lai',268,262,95,25,"Bắt Đầu",'#400080','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#8000ff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitBai1();
SetShowObject("","bang_diem",0);
  return;
}
 );
Page_1.add(bt_lam_lai);
var t_mess = CreText('t_mess',192,160,252,21,"Thông báo điểm",'rgba(64,0,128,0.98)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',1,'#ffffff','rgba(128,0,255,0.98)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(t_mess);
var label = CreText('label',196,185,242,24,"Làm Bài",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(label);
var bang_diem = new Kinetic.Group({name:'bang_diem',x:0,y:0,width:257,height:145});
bang_diem.add(m_diem);
bang_diem.add(label);
bang_diem.add(t_mess);
bang_diem.add(bt_lam_lai);
Page_1.add(bang_diem);
var phut = CreText('phut',291,377,38,24,"0",'rgba(0, 0, 0, 0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(phut);
var giay = CreText('giay',333,377,38,24,"0",'rgba(0, 0, 0, 0)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(giay);
var Text_8 = CreText('Text_8',606,369,30,30,"››",'#009300','#ffffff','#ffffff','#ffff00','',20,'Arial','Bold','center','middle',2,'0.00','0','0',3,'#ffffff','#009300','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_1.add(Text_8);
stage.add(Page_1);

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page_2_Backrounnd = CreText('Page_2_Backrounnd',0,0,640,400,'','#ffffff','','','','ID_IMAGE34.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','2','2','0','','0','0','0','0',0,0,'');
Page_2.add(Page_2_Backrounnd);
var Text_1 = CreText('Text_1',108,53,361,340,"",'rgba(255,255,255,0.47)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',5,'#0080ff','rgba(255,255,255,0.47)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_1);
var o_0 = CreText('o_0',113,58,36,33,"1",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_0);
var o_1 = CreText('o_1',152,58,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_1);
var o_2 = CreText('o_2',191,58,36,33,"Viết số gồm sáu trăm, bốn chục và hai đơn vị.|642",'#ff0000','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE11.PNG',36,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ff0000','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_2);
var o_3 = CreText('o_3',230,58,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_3);
var o_4 = CreText('o_4',269,58,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_4);
var o_5 = CreText('o_5',308,58,36,33,"Viết số gồm hai chục, năm đơn vị và tám trăm.|825",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE18.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_5);
var o_6 = CreText('o_6',347,58,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_6);
var o_7 = CreText('o_7',386,58,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_7);
var o_8 = CreText('o_8',426,58,36,33,"-",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE32.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_8);
var o_9 = CreText('o_9',113,95,36,33,"1",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_9);
var o_10 = CreText('o_10',152,95,36,33,"-",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE32.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_10);
var o_11 = CreText('o_11',191,95,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_11);
var o_12 = CreText('o_12',230,95,36,33,"-",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE32.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_12);
var o_13 = CreText('o_13',269,95,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_13);
var o_14 = CreText('o_14',308,95,36,33,"-",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE32.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_14);
var o_15 = CreText('o_15',347,95,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_15);
var o_16 = CreText('o_16',386,95,36,33,"-",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE32.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_16);
var o_17 = CreText('o_17',426,95,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_17);
var o_18 = CreText('o_18',113,133,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_18);
var o_19 = CreText('o_19',152,133,36,33,"Bể thứ nhất chứa 256l nước. Bể thứ hai chứa được 212l nước. Hỏi cả hai bể chứa bao nhiêu lít nước?|468",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE29.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_19);
var o_20 = CreText('o_20',191,133,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_20);
var o_21 = CreText('o_21',230,133,36,33,"-",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE32.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_21);
var o_22 = CreText('o_22',269,133,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_22);
var o_23 = CreText('o_23',308,133,36,33,"-",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE32.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_23);
var o_24 = CreText('o_24',347,133,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_24);
var o_25 = CreText('o_25',386,133,36,33,"Kho thứ nhất chứa 356kg thóc, kho thứ hai chứa 262kg thóc. Hỏi hai kho chứa bao nhiêu ki-lô-gam thóc?|618",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE22.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_25);
var o_26 = CreText('o_26',426,133,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_26);
var o_27 = CreText('o_27',113,170,36,33,"-",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE32.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_27);
var o_28 = CreText('o_28',152,170,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_28);
var o_29 = CreText('o_29',191,170,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_29);
var o_30 = CreText('o_30',230,170,36,33,"Khối lớp Bốn có 235 học sinh, khối lớp Ba có 216 học sinh. Hỏi hai khối có bao nhiêu học sinh?|451",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE10.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_30);
var o_31 = CreText('o_31',269,170,36,33,"-",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE32.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_31);
var o_32 = CreText('o_32',308,170,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_32);
var o_33 = CreText('o_33',347,170,36,33,"-",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE32.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_33);
var o_34 = CreText('o_34',386,170,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_34);
var o_35 = CreText('o_35',426,170,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_35);
var o_36 = CreText('o_36',113,206,36,33,"-",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE32.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_36);
var o_37 = CreText('o_37',152,207,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_37);
var o_38 = CreText('o_38',191,207,36,33,"-",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE32.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_38);
var o_39 = CreText('o_39',230,207,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_39);
var o_40 = CreText('o_40',269,207,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_40);
var o_41 = CreText('o_41',308,207,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_41);
var o_42 = CreText('o_42',347,207,36,33,"Có bao nhiêu số có hai chữ số mà hiệu các chữ số bằng 5?|9",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE15.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_42);
var o_43 = CreText('o_43',386,207,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_43);
var o_44 = CreText('o_44',426,207,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_44);
var o_45 = CreText('o_45',113,244,36,33,"Mai gấp được 145 ngôi sao. Mai tặng bạn 78 ngôi sao. Hỏi Mai còn lại bao nhiêu ngôi sao?|67",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE23.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_45);
var o_46 = CreText('o_46',152,244,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_46);
var o_47 = CreText('o_47',191,244,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_47);
var o_48 = CreText('o_48',230,244,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_48);
var o_49 = CreText('o_49',269,244,36,33,"-",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE32.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_49);
var o_50 = CreText('o_50',308,244,36,33,"-",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE32.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_50);
var o_51 = CreText('o_51',347,244,36,33,"-",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE32.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_51);
var o_52 = CreText('o_52',386,244,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_52);
var o_53 = CreText('o_53',426,244,36,33,"Có bao nhiêu số có hai chữ số mà tổng các chữ số bằng 9?|9",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE25.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_53);
var o_54 = CreText('o_54',113,281,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_54);
var o_55 = CreText('o_55',152,281,36,33,"-",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE32.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_55);
var o_56 = CreText('o_56',191,281,36,33,"-",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE32.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_56);
var o_57 = CreText('o_57',230,281,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_57);
var o_58 = CreText('o_58',269,281,36,33,"Có bao nhiêu số có hai chữ số mà tổng các chữ số bẳng 14?|5",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE19.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_58);
var o_59 = CreText('o_59',308,281,36,33,"-",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE32.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_59);
var o_60 = CreText('o_60',347,281,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_60);
var o_61 = CreText('o_61',386,281,36,33,"-",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE32.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_61);
var o_62 = CreText('o_62',426,281,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_62);
var o_63 = CreText('o_63',113,318,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_63);
var o_64 = CreText('o_64',152,318,36,33,"Trong đợt thu hoạch vừa qua nhà bác Hùng và bác Mai thu hoạch được tất cả 456 bắp ngô. Biết nhà bác Mai thu hoạch 234 bắp. Tính số bắp ngô nhà bác Hùng thu được.|222",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE20.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_64);
var o_65 = CreText('o_65',191,318,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_65);
var o_66 = CreText('o_66',230,318,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_66);
var o_67 = CreText('o_67',269,318,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_67);
var o_68 = CreText('o_68',308,318,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_68);
var o_69 = CreText('o_69',347,318,36,33,"-",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE32.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_69);
var o_70 = CreText('o_70',386,318,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_70);
var o_71 = CreText('o_71',426,318,36,33,"F",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE28.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_71);
var o_72 = CreText('o_72',113,355,36,33,"-",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE32.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_72);
var o_73 = CreText('o_73',152,355,36,33,"-",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE32.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_73);
var o_74 = CreText('o_74',191,355,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_74);
var o_75 = CreText('o_75',230,355,36,33,"Hình tam giác ABC có cạnh AB dài 25cm, cạnh BC dài 36cm; cạnh CA ngắn hơn cạnh BC 9cm. Tính chu vi tam giác ABC.|88",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE16.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_75);
var o_76 = CreText('o_76',269,355,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_76);
var o_77 = CreText('o_77',308,355,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_77);
var o_78 = CreText('o_78',347,355,36,33,"Tìm số có ba chữ số biết chữ số hàng trăm hơn chữ số hàng chục 6 đơn vị, chữ số hàng chục trừ đi chữ số hàng đơn vị bằng 3.|930",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE13.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_78);
var o_79 = CreText('o_79',386,355,36,33,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_79);
var o_80 = CreText('o_80',426,355,36,33,"-",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE32.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0080ff','#ffffff','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(o_80);
var tho = CreText('tho',113,58,36,33,"",'#ff6820','#ffffff','#000000','#ffffff','ID_IMAGE27.PNG',16,'Arial','Normal','center','middle',3,'0.00','0','0',0,'#0080ff','#ff6820','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(tho);
var Text_8 = CreText('Text_8',73,60,30,30,"",'#0080ff','#ffffff','#ffffff','#ffff00','ID_IMAGE26.PNG',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080ff','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_2.add(Text_8);
var Text_3 = CreText('Text_3',474,318,30,30,"",'#0080ff','#ffffff','#ffffff','#ffff00','ID_IMAGE26.PNG',20,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080ff','2','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_2.add(Text_3);
var cau_hoi = CreText('cau_hoi',107,166,365,86,"Viết số gồm sáu trăm, bốn chục và hai đơn vị.|642\r\n",'#8000ff','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#ffff00','#400080','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(cau_hoi);
var m_kq = CreText('m_kq',350,230,64,18,"642",'#ffffff','#ffffff','#0000ff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#666666','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(m_kq);
var bt_ok = CreText('bt_ok',420,230,48,18,"OK",'#400080','#ffffff','#ffff00','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#8000ff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(bt_ok);
var title = CreText('title',108,167,363,18,"Bạn phải trả lời câu hỏi sau:",'rgba(0,0,0,0.39)','#ffffff','#ffff00','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#ffffff','rgba(0,0,0,0.39)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(title);
var msg = new Kinetic.Group({name:'msg',x:0,y:0,width:369,height:90});
msg.add(cau_hoi);
msg.add(title);
msg.add(m_kq);
msg.add(bt_ok);
Page_2.add(msg);
stage.add(Page_2);
InitLacVietScript();
};
