folder_Resource ='data/be_hoc_toan';
var m_limit= 10;
var pheptinh= "cong";
var m_kq=0;
var m_doi="B";
 var objSelect = "";
var soCau =0;
 var ww=0;
 var hh=  0;

function  MoveCheck( name,  check){
var objphep= name;
var l= GetLeft("",objphep)+ GetWidth("",objphep)/2 - GetWidth("",check)/2;
var t= GetTop("",objphep) - GetHeight("",check);
MoveObjectTo("",check,l,t);
InvalidateObj("","");
}
function  ChonGioiHan(){
	 m_limit= GetText("","");
	 var name= GetName("");
	MoveCheck(name,"check1");
}

function  ChonPhepTinh(){
 pheptinh= GetName("");
MoveCheck(pheptinh,"check2");
}
function  TaoBaiToan(){
PlaySound("ID_CLICK");
SetShowObject("","Group_1",0);
SetShowObject("","boom1",0);
SetShowObject("","boom2",0);
MoveObjectTo("","doi_1",-1,-1);
MoveObjectTo("","doi_2",-1,-1);
soCau = soCau +1;
SetText("","dot",soCau);
if(m_doi=="A")
	m_doi= "B";
else m_doi= "A";

for(var j=0;j<5;j++)
{
	SetShowObject("","chon_"+j,1);
	var le= GetLeft("","chon_"+j);
	var to= GetTop("","chon_"+j)-100;
	MoveObjectTo("","chon_"+j,le,to);
}
	var a_phep=["+","-","x",":","a"];
	if(pheptinh=="a")
    	 var phep= a_phep[Random(4)];
	else phep = pheptinh;
	var a,b;
	switch(phep){
		case "cong":
		{
		   a = Random(m_limit);
		   b = Random(m_limit);
		   m_kq=a+b;
		   var khong_nho= a%10 + b%10;	  
		   while(m_kq>m_limit || khong_nho>10){
			a=  Random(m_limit);
			b = Random(m_limit);
			m_kq=a+b;	
			khong_nho= a%10 + b%10	;
			}
			SetText("","cau_hoi", a+" + "+ b+ " = ");
		   break;
		}
		case "tru":
		{
		   a = Random(m_limit);
		   b = Random(m_limit);
		   m_kq=a-b;
		   var khong_nho= a%10 - b%10;
		  while(m_kq<0 || khong_nho<0){
			a=  Random(m_limit);
			b = Random(m_limit);
			m_kq=a-b;	
			khong_nho= a%10 - b%10	;
			}
			m_kq=a-b;
			SetText("","cau_hoi", a+" - "+ b+ " = ");
		   break;
		}
		case "nhan":
		{
 		   a = Random(m_limit);
		   b = Random(m_limit);
		   m_kq=a*b;			  
		   while(m_kq>m_limit){
			a=  Random(m_limit);
			b = Random(m_limit);
			m_kq=a*b;	
			}
			SetText("","cau_hoi", a+" x "+ b+ " = ");
		   break;
		}
		case "chia":
		{
  		   a = Random(m_limit);
		   b = Random(m_limit);
		   m_kq=a%b;			  
		   while(m_kq!= 0){
			a=  Random(m_limit);
			b = Random(m_limit);
			m_kq=a%b;	
			}
		   	m_kq=a/b;	
			SetText("","cau_hoi", a+" : "+ b+ " = ");
		   break;
		}
	}
/* doc so*/
SpeakVN("","cau_hoi",GetText("","cau_hoi"));
var m_checkkq= false;
var Arr=["","","","",""];
  var Count = 0;
  for (var i = 0; i < 5 ; i++)
  {
    var bb = true;
    var iImagef ;
    while (bb)
    {
    iImagef = Random(m_limit);
    for (var itest = 0 ; itest < Count; itest++)
    { 
      if (Arr[itest] == iImagef)
       {
         break;
       }
     }
    if (itest >= Count)
       bb = false;
    }
    Arr[Count] = iImagef;
    if(iImagef==m_kq)
	m_checkkq= true;
    Count++;
  }
//
	if(m_checkkq== false)
		Arr[Random(5)]=m_kq;
	for(var k=0;k<5;k++){
		SetText("","chon_"+k,Arr[k]);
		transitionTo("","chon_"+k,1000,-1,-1,1,0,1);
	}
	InvalidateObj("","");
}

var ds= true;
var m_ban= false;
var m_boom="";
function  MoveBoomToDot( m_bom){
	  var x= GetLeft("","dot");
	  var y= GetTop("","dot");
	  SetShowObject("",m_bom,1);
        	  var ii= "ID_ITEM_"+ Random(5);
	  SetRsc("",m_bom,ii);
	  RotateObj("",m_bom,0);
	  m_boom= m_bom;
	  transitionTo("",m_bom,500,x,y,1,360,1,1,"FromDot()");
}
function  MoveBoom(){
	PlayWave("","","ID_BOOM");
	SetShowObject("",objSelect,0);
	SetText("","cau_hoi",GetText("","cau_hoi")+" "+m_kq );
	if(ds== true)
	 {
       	 if(m_doi=="A") 
			MoveBoomToDot("boom1");
	  else MoveBoomToDot("boom2");
	}
	else
	{
       	 if(m_doi=="A") MoveBoomToDot("boom2");
	  else MoveBoomToDot("boom1");
	}
}
function CheckDapAn(){
var l= GetLeft("","cau_hoi")+GetWidth("","cau_hoi")/2+50;
var t= GetTop("","cau_hoi");	
if(GetText("","")==m_kq)
	{
		objSelect  = GetName("");
		ds= true;
		PlaySound("ID_RIGHT");
		transitionTo("","",2000,l,t,1,0,1,1,"MoveBoom()");		
	}
      else
	{
		ds= false;
		PlaySound("ID_TEST_FALSE");
		for(var i=0;i<5;i++)
		{
			if(GetText("","chon_"+i)!= m_kq)
			{
			  var x= GetLeft("","chon_"+i);
			  var y= GetTop("","chon_"+i)-100;
				 transitionTo("","chon_"+i,1000,x,y,1,360,0);
			}
			else 
			{
				objSelect = "chon_"+i;
				transitionTo("","chon_"+i,2000,l,t,1,0,1,1,"MoveBoom()");		
			}
		 }
	}
}

function  MoveEnd(){
	  SetShowObject("","boom1",0);
	  SetShowObject("","boom2",0);
	  MoveObjectTo("","boom1",-1,-1);
	  MoveObjectTo("","boom2",-1,-1);
 	  var dan= "dan";
	  if(ds== true)
		{
			if(m_doi=="A") 
			{
				SetText("","diem1",GetText("","diem1")+1);
				dan="doi_2";
			}
		  else 
			{
				SetText("","diem2",GetText("","diem2")+1);
				dan="doi_1";
			}
		}
   	  else
		{ 
			if(m_doi=="A")
				dan="doi_1";
			else dan="doi_2";
		}
	if(soCau < 20)
	 	{
		  transitionTo("",dan,1000,-1,GetTop("",dan)+hh,1,0,1,5,"TaoBaiToan()");
		}
	else 
	  {
		var diem1 = GetText("","diem1");
		var diem2 = GetText("","diem2");
		var ts= diem1 + " ᴥᴥᴥ "+  diem2;

		var iPhep=1;
		if(pheptinh=="cong") iPhep=1;
		else if(pheptinh=="tru") iPhep=2;
		else if(pheptinh=="nhan") iPhep=3;
		else if(pheptinh=="chia") iPhep=4;
		var upDiem = ((m_limit*10+iPhep)*10+ diem1)*10+diem2;
		UpdateScore(upDiem);
		PlaySound("ID_TEST_TRUE");
		SetText("","message",ts);
		SetShowObject("","Group_1",1);
	  	transitionTo("","Group_1",1000,-1,-1,1,0,1);
		soCau = 0;
	  }
}
function  FromDot(){

	if(m_boom== "boom1")
	 {
	  var x= GetLeft("","boom2");
	  var y= GetTop("","boom2");
	  transitionTo("","boom1",500,x,y,1,720,1,1,"MoveEnd()");
	}
	else
	{
	  var x= GetLeft("","boom1");
	  var y= GetTop("","boom1");
	  transitionTo("","boom2",500,x,y,1,720,1,1,"MoveEnd()");
	}
}
function EffectThuyen( object,  nghien){
  	  var x= GetLeft("",object);
	  var y= GetTop("",object);
	  transitionTo("",object,3000,x,y,1,nghien,1,1,"EffectThuyen('"+object+"',"+nghien*-1+");");
}
function Page_2()
{
PlaySound("ID_NEWGAME");
MoveCheck(pheptinh,"check2");
	 var name= "_"+m_limit;
	MoveCheck(name,"check1");
  return;
}

function Page_1()
{
 TaoBaiToan();
 StopSound();
ww= GetWidth("","doi_do")/2;
hh= GetHeight("","doi_xanh")/2;
soCau =0;
GetVer();
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
 height: 480 
 });

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page2_Backrounnd = CreText('Page2_Backrounnd',0,0,640,480,'','#ffffff','','','','ID_IMAGE13.PNG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','2','2','0','','0','0','0','0',0,0,'');
var _10 = CreText('_10',22,183,56,56,"10",'#ffad5b','#ffffff','#000000','#000000','',30,'Arial','Bold','center','bottom',8,'0.00','33','75',1,'#ffffff','#ffad5b','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonGioiHan();
  return;
}
 );
var _20 = CreText('_20',82,183,56,56,"20",'#ff0000','#ffffff','#000000','#000000','',30,'Arial','Bold','center','bottom',8,'0.00','33','75',1,'#ffffff','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_20.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonGioiHan();
  return;
}
 );
var _30 = CreText('_30',142,183,56,56,"30",'#ffff00','#ffffff','#000000','#000000','',30,'Arial','Bold','center','bottom',8,'0.00','33','75',1,'#ffffff','#ffff00','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_30.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonGioiHan();
  return;
}
 );
var _40 = CreText('_40',202,183,56,56,"40",'#00ff00','#ffffff','#000000','#000000','',30,'Arial','Bold','center','bottom',8,'0.00','33','75',1,'#ffffff','#00ff00','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_40.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonGioiHan();
  return;
}
 );
var _50 = CreText('_50',262,183,56,56,"50",'#c0ffff','#ffffff','#000000','#000000','',30,'Arial','Bold','center','bottom',8,'0.00','33','75',1,'#ffffff','#c0ffff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_50.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonGioiHan();
  return;
}
 );
var _60 = CreText('_60',322,183,56,56,"60",'#ff80ff','#ffffff','#000000','#000000','',30,'Arial','Bold','center','bottom',8,'0.00','33','75',1,'#ffffff','#ff80ff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_60.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonGioiHan();
  return;
}
 );
var _70 = CreText('_70',382,182,56,56,"70",'#0080ff','#ffffff','#000000','#000000','',30,'Arial','Bold','center','bottom',8,'0.00','33','75',1,'#ffffff','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_70.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonGioiHan();
  return;
}
 );
var _80 = CreText('_80',442,182,56,56,"80",'#c0c0c0','#ffffff','#000000','#000000','',30,'Arial','Bold','center','bottom',8,'0.00','33','75',1,'#ffffff','#c0c0c0','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_80.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonGioiHan();
  return;
}
 );
var _90 = CreText('_90',502,182,56,56,"90",'#8b0000','#ffffff','#000000','#000000','',30,'Arial','Bold','center','bottom',8,'0.00','33','75',1,'#ffffff','#8b0000','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_90.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonGioiHan();
  return;
}
 );
var _100 = CreText('_100',564,182,68,56,"100",'#ffffe0','#ffffff','#000000','#000000','',30,'Arial','Bold','center','bottom',8,'0.00','33','75',1,'#ffffff','#ffffe0','0','0','rgba(0,0,0,0)','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
_100.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonGioiHan();
  return;
}
 );
var cong = CreText('cong',155,285,71,77,"+",'#0080ff','#ffffff','#ffffff','#ffffff','',48,'Comic Sans MS','Bold','center','middle',8,'0.00','33','75',2,'#ffffff','#0080ff','0','0','#000000','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
cong.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonPhepTinh();

  return;
}
 );
var tru = CreText('tru',240,285,71,77,"-",'#ff0000','#ffffff','#ffffff','#ffffff','',48,'Comic Sans MS','Bold','center','middle',8,'0.00','33','75',2,'#ffffff','#ff0000','0','0','#000000','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
tru.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonPhepTinh();
  return;
}
 );
var nhan = CreText('nhan',325,285,71,77,"x",'#004040','#ffffff','#ffffff','#ffffff','',48,'Comic Sans MS','Bold','center','middle',8,'0.00','33','75',2,'#ffffff','#004040','0','0','#000000','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
nhan.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonPhepTinh();
  return;
}
 );
var chia = CreText('chia',410,285,71,77,":",'#000000','#ffffff','#ffffff','#ffffff','',48,'Comic Sans MS','Bold','center','middle',8,'0.00','33','75',2,'#ffffff','#000000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
chia.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonPhepTinh();
  return;
}
 );
var start = CreText('start',191,386,268,59,"Sẵn Sàn",'#009300','#ffffff','#ffffff','#ffffff','',24,'Arial','Bold','center','middle',3,'0.00','30','30',1,'#ffffff','#00ff00','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
start.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
var Drawtext_4 = CreText('Draw text_4',53,79,577,85,"BÉ VUI HỌC TOÁN",'rgba(0,0,0,0)','#ffffff','#ffff00','#ffffff','',48,'Comic Sans MS','Bold','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','0','0','#ffffff','0','0','4','2',0,0,'rgba(0,0,0,0)',0,1.50);
var check1 = CreText('check1',37,152,32,31,'','rgba(0,0,0,0)','','','','ID_IMAGE26.PNG',0,'','','','',0,'0.00','30','30',0,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var check2 = CreText('check2',189,255,32,31,'','rgba(0,0,0,0)','','','','ID_IMAGE26.PNG',0,'','','','',0,'0.00','30','30',0,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_2.add(Page2_Backrounnd,_10,_20,_30,_40,_50,_60,_70,_80,_90,_100,cong,tru,nhan,chia,start,Drawtext_4,check1,check2);
stage.add(Page_2);

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page1_Backrounnd = CreText('Page1_Backrounnd',0,0,640,480,'','#ffffff','','','','ID_IMAGE16.JPG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','2','2','0','','0','0','0','0',0,0,'');
var dot = CreText('dot',275,94,60,28,"20",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','bottom',8,'0.00','33','75',2,'#ffffff','#0080c0','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var cau_hoi = CreText('cau_hoi',161,186,322,53,"99 + 92 =",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',40,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var thuyen_do = CreText('thuyen_do',74,104,108,164,"Đội 1",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_THUYEN_RED.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var Image_3 = CreText('Image_3',42,407,83,61,'','rgba(0,0,0,0)','','','','ID_IMAGE8.PNG',0,'','','','',0,'0.00','30','30',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var Image_4 = CreText('Image_4',163,409,82,59,'','rgba(0,0,0,0)','','','','ID_IMAGE9.PNG',0,'','','','',0,'0.00','30','30',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var Image_5 = CreText('Image_5',283,408,82,60,'','rgba(0,0,0,0)','','','','ID_IMAGE10.PNG',0,'','','','',0,'0.00','30','30',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var Image_6 = CreText('Image_6',403,408,83,60,'','rgba(0,0,0,0)','','','','ID_IMAGE11.PNG',0,'','','','',0,'0.00','30','30',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var Image_7 = CreText('Image_7',527,407,83,61,'','rgba(0,0,0,0)','','','','ID_IMAGE12.PNG',0,'','','','',0,'0.00','30','30',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var chon_4 = CreText('chon_4',537,378,66,53,"50",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',40,'Arial','Bold','center','middle',0,'0.00','33','75',0,'rgba(0,0,0,0)','#005500','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
chon_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckDapAn();
  return;
}
 );
var chon_3 = CreText('chon_3',409,379,66,53,"40",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',40,'Arial','Bold','center','middle',0,'0.00','33','75',0,'rgba(0,0,0,0)','#005500','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
chon_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckDapAn();
  return;
}
 );
var chon_2 = CreText('chon_2',293,378,66,53,"30",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',40,'Arial','Bold','center','middle',0,'0.00','33','75',0,'rgba(0,0,0,0)','#005500','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
chon_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckDapAn();
  return;
}
 );
var chon_1 = CreText('chon_1',175,379,66,53,"20",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',40,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#005500','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
chon_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckDapAn();
  return;
}
 );
var chon_0 = CreText('chon_0',50,378,66,53,"10",'rgba(0,0,0,0)','#ffffff','#ffffff','#ffffff','',40,'Arial','Bold','center','middle',0,'0.00','33','75',0,'rgba(0,0,0,0)','#005500','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
chon_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckDapAn();
  return;
}
 );
var thuyen_xanh = CreText('thuyen_xanh',463,108,107,151,"Đội 2",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_THUYEN_BLUE.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var doi_xanh = CreText('doi_xanh',477,186,79,38,"Đội 1",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_DOI2.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var back = CreText('back',10,7,67,61,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE5.PNG',16,'Arial','Normal','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
back.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 PrevPage();
  return;
}
 );
var doi_2 = new Kinetic.Group({name:'doi_2',x:0,y:0,width:111,height:155});
doi_2.add(thuyen_xanh,doi_xanh);
var diem2 = CreText('diem2',569,113,69,76,"0",'#ffffff','#ffffff','#ffffff','#ffffff','ID_IMAGE21.PNG',42,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var diem1 = CreText('diem1',2,181,69,75,"0",'#ffffff','#ffffff','#ffffff','#ffffff','ID_IMAGE21.PNG',42,'Arial','Bold','center','middle',0,'0.00','30','30',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var doi_do = CreText('doi_do',86,189,86,39,"Đội 1",'#ffffff','#ffffff','rgba(0,0,0,0)','#ffffff','ID_DOI1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var doi_1 = new Kinetic.Group({name:'doi_1',x:0,y:0,width:112,height:168});
doi_1.add(thuyen_do,doi_do);
var Message = CreText('Message',153,133,363,199,"10  ᴥᴥᴥ  6",'#b0ffff','#ffffff','#ff6820','#ffffff','',48,'Arial','Bold','center','middle',3,'0.00','10','0',4,'#ffffff','#00ffff','4','1','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var Image_1 = CreText('Image_1',170,146,145,58,'','rgba(0,0,0,0)','','','','ID_DOI1.PNG',0,'','','','',0,'0.00','30','30',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var Image_2 = CreText('Image_2',350,145,145,58,'','rgba(0,0,0,0)','','','','ID_DOI2.PNG',0,'','','','',0,'0.00','30','30',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var start = CreText('start',259,272,151,46,"Chơi Lại",'#0080ff','#ffffff','#000000','#000000','',24,'Arial','Bold','center','middle',3,'0.00','6','0',2,'#ffffff','#00ffff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
start.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
  GetVer();
  SetText("","diem1",0);
  SetText("","diem2",0);
  transitionTo("","Group_1",1000,-500,-500,1,360,1,4,"TaoBaiToan()");
  return;
}
 );
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:367,height:203});
Group_1.add(Message,Image_1,Image_2,start);
var boom2 = CreText('boom2',502,170,37,37,'','rgba(0,0,0,0)','','','','ID_ITEM_0.PNG',0,'','','','',0,'0.00','30','30',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
var boom1 = CreText('boom1',116,169,41,43,'','rgba(0,0,0,0)','','','','ID_ITEM_1.PNG',0,'','','','',0,'0.00','30','30',1,'rgba(0,0,0,0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_1.add(Page1_Backrounnd,dot,cau_hoi,Image_3,Image_4,Image_5,Image_6,Image_7,chon_4,chon_3,chon_2,chon_1,chon_0,back,doi_2,diem2,diem1,doi_1,Group_1,boom2,boom1);
stage.add(Page_1);
InitLacVietScript();
};
