folder_Resource ='data/Xem_dong_ho';
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
var x_to= GetLeft("","")+ GetWidth("","")/2- GetWidth("",namekey)/2;
var y_to= GetTop("","")+ GetHeight("","")+5;
if (GetHeight("", namekey) + y_to > 480)
    y_to= GetTop("","")- GetHeight("",namekey)-5;
if (x_to<0) x_to=1;
if (x_to+ GetWidth("",namekey)>640) x_to=640-GetWidth("",namekey);
MoveObjectTo("",namekey,x_to,y_to);
SetShowObject("",namekey,1);
InvalidateObj("",namekey);
keyOldValue= GetText("","");
objectShowKey= GetName("");
}

function QuayKimDongHo( m_gio, m_phut,  k)
{
		var do_phut= 360* m_phut/60;
		RotateObj("","kim_phut"+k, do_phut);
		var do_gio = 360* m_gio/12 + do_phut*30/360;
		RotateObj("","kim_gio"+k, do_gio);
		InvalidateObj("","");
}
var arNumber=[0,0,0,0,0];
var m_size=6;
function  CreateRam(){
   var Count = 0;
   for (var i = 0; i < m_size; i++)
   {
    var bb = true;
    var iNN ;
    while (bb)
    {
    iNN = (Random(12)+1)*60+ (Random(12)+1)*5;
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
var arGio=[0,0,0,0,0];
var arPhut=[0,0,0,0,0];
function InitBai1()
{
CreateRam();
 for (var k = 0; k < m_size; k++){
      arPhut[k]=arNumber[k];
	var gio= floor(arNumber[k]/60);
	var phut = floor(arNumber[k]%60);
	var kem= Random(2);
	MoveObjectTo("","m_"+k,-1,-1);
	QuayKimDongHo(gio,phut,k);
	if(kem==1 && phut>30){
		gio++;
		phut= 60-phut;
 		SetText("","o_so_"+k,"giờ kém        phút");
		SetRect("","m_"+k,GetLeft("","m_"+k)+32,-1,-1,-1);
		}
	else SetText("","o_so_"+k,"giờ        phút");

	SetText("","h_"+k,"");
	SetText("","m_"+k,"");
	SetFontColor("","h_"+k,"#0000ff");
	SetFontColor("","m_"+k,"#0000ff");
	SetCursor("","m_"+k,"pointer");
	if(gio>12)gio=1;
	arGio[k]=gio;
	arPhut[k]=phut;
	}
SetShowObject("","bang_diem",0);
SetMoveView("","bang_diem",1);
GetVer();
InvalidateObj("","");
}
function NopBai(){
var diem=0;
 for(var i=0;i<6;i++){
	if(arGio[i] == GetText("","h_"+i))
	{
		SetFontColor("","h_"+i,"#008000");
		diem=diem+1;
	}
	else 
		SetFontColor("","h_"+i,"#CC0000");
	if(arPhut[i] == GetText("","m_"+i))
	{
		SetFontColor("","m_"+i,"#008000");
		diem=diem+1;
	}
	else 
		SetFontColor("","m_"+i,"#CC0000");
	}
diem= round(diem*10/12);//27+7
if(diem>10) diem=10;
UpdateScore(diem);
SetText("","m_diem",diem);
SetShowObject("","bang_diem",1);
SetShowObject("","nop_bai",0);
InvalidateObj("","");
PlaySound("ID_TRUE");
}
var m_Gio=0;
var m_Phut=0;
var i_Gio=0;
var i_Phut=0;
var b_p=false;
var m_kem=0;
var curdiem=0;
function TaoBai2()
{
	if(b_p)
		return;
 	var xxx= (Random(12)+1)*60+ (Random(12)+1)*5;
	m_Gio= floor(xxx/60);
	m_Phut= floor(xxx%60);
	m_kem= Random(2);
	if(m_kem==1 && m_Phut>30){
		m_Gio++;
		m_Phut= 60-m_Phut;
 		SetText("","thoi_gian",m_Gio+" giờ kém "+ m_Phut+" phút");
		}
	else SetText("","thoi_gian",m_Gio+" giờ "+ m_Phut+" phút");
SpeakVN("","thoi_gian");
i_Gio=Hour()%12;
var cm=Mimute();
var du=cm%5;
i_Phut=cm-du;
if(du>2)
i_Phut=i_Phut+5;
QuayKimDongHo(i_Gio,i_Phut,7);
SetShowObject("","bang_diem",0);
SetMoveView("","bang_diem",1);
InvalidateObj("","");
 b_p=true;
curdiem=GetVer();
}

function QuayKimPhut()
{
if(!b_p)
return;
i_Phut+=5;
if(i_Phut>=60){
i_Phut=0;	
i_Gio++;
if(i_Gio>12)
i_Gio=1;
}
QuayKimDongHo(i_Gio,i_Phut,7);
InvalidateObj("","");
}
function QuayKimGio()
{
if(!b_p)
return;
i_Gio++;
if(i_Gio>12)
i_Gio=1;
QuayKimDongHo(i_Gio,i_Phut,7);
InvalidateObj("","");
}
function Show()
{
	SetShowObject("","bang_diem",0);
	InvalidateObj("","");
}
function NopBai2()
{
if(m_kem==1 && i_Phut>30){
		i_Gio++;
		i_Phut= 60-i_Phut;
		}

if(m_Gio==i_Gio&&m_Phut==i_Phut)
	{
		SetText("","m_diem","Đúng");
		SetShowObject("","bang_diem",1);
		PlaySound("ID_TRUE");
		UpdateScore(curdiem+1);
		b_p=false;
	}
else	{
		SetText("","m_diem","Sai!");
		SetShowObject("","bang_diem",1);
		PlaySound("ID_FALSE");
		Delay("Show()",1000);
	}
}
function Page_1()
{
InitBai1();
  return;
}

function Page_2()
{
TaoBai2();
SetCursor("","bt_2","pointer");
SetCursor("","bt_1","pointer");
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

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,600,400,'','#ffffff','','','','ID_IMAGE13.PNG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','2','2','0','','0','0','0','0',0,0,'');
var o_so_2 = CreText('o_so_2',452,178,147,23,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var o_so_5 = CreText('o_so_5',446,336,147,23,"giờ         phút",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var o_so_4 = CreText('o_so_4',265,338,147,23,"giờ          phút",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var o_so_3 = CreText('o_so_3',68,341,147,23,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var o_so_1 = CreText('o_so_1',255,179,147,23,"giờ          phút",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var o_so_0 = CreText('o_so_0',62,178,147,23,"giờ          phút",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var dong_ho0 = CreText('dong_ho0',35,67,111,111,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE8.PNG',16,'Arial','Normal','center','middle',2,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var kim_gio0 = CreText('kim_gio0',91,95,3,55,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE7.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var kim_phut0 = CreText('kim_phut0',91,83,2,78,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE7.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',86,117,11,11,"",'#ff0000','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#666666','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',1,1,598,26,"Học xem giờ, đồng hồ chỉ mấy giờ?",'rgba(0,128,255,0.67)','#ffffff','#ffffff','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(0,128,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_4 = CreText('Text_4',17,34,319,25,"Bài 1: Đồng hồ chỉ mấy giờ?",'rgba(0,0,0,0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_5 = CreText('Text_5',216,66,111,111,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE8.PNG',16,'Arial','Normal','center','middle',2,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var kim_gio1 = CreText('kim_gio1',272,94,3,55,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE7.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var kim_phut1 = CreText('kim_phut1',272,82,2,78,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE7.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var Text_8 = CreText('Text_8',268,116,11,11,"",'#ff0000','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#666666','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_9 = CreText('Text_9',412,62,111,111,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE8.PNG',16,'Arial','Normal','center','middle',2,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var kim_gio2 = CreText('kim_gio2',468,90,3,55,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE7.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var kim_phut2 = CreText('kim_phut2',468,78,2,78,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE7.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var Text_12 = CreText('Text_12',464,112,11,11,"",'#ff0000','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#666666','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_13 = CreText('Text_13',37,226,111,111,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE8.PNG',16,'Arial','Normal','center','middle',2,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var kim_gio3 = CreText('kim_gio3',93,254,3,55,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE7.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var kim_phut3 = CreText('kim_phut3',93,242,2,78,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE7.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var Text_16 = CreText('Text_16',88,277,11,11,"",'#ff0000','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#666666','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_17 = CreText('Text_17',227,222,111,111,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE8.PNG',16,'Arial','Normal','center','middle',2,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var kim_gio4 = CreText('kim_gio4',283,250,3,55,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE7.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var kim_phut4 = CreText('kim_phut4',283,238,2,78,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE7.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var Text_20 = CreText('Text_20',279,272,11,11,"",'#ff0000','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#666666','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_21 = CreText('Text_21',412,221,111,111,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE8.PNG',16,'Arial','Normal','center','middle',2,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var kim_gio5 = CreText('kim_gio5',468,249,3,55,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE7.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var kim_phut5 = CreText('kim_phut5',468,237,2,78,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE7.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','2','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var Text_24 = CreText('Text_24',463,272,11,11,"",'#ff0000','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',2,'0.00','0','0',1,'#666666','#ff0000','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var h_0 = CreText('h_0',34,179,26,22,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
h_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var h_1 = CreText('h_1',227,179,26,22,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
h_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var m_1 = CreText('m_1',279,179,26,22,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
m_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var h_2 = CreText('h_2',424,179,26,22,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
h_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var m_0 = CreText('m_0',85,180,26,22,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
m_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var m_2 = CreText('m_2',475,179,26,22,"",'rgba(0,0,0,0)','#ffffff','#000000','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
m_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var h_3 = CreText('h_3',41,341,26,22,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
h_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var m_3 = CreText('m_3',92,341,26,22,"",'rgba(0,0,0,0)','#ffffff','#000000','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
m_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var h_4 = CreText('h_4',238,339,26,22,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
h_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var m_4 = CreText('m_4',289,339,26,22,"",'rgba(0,0,0,0)','#ffffff','#000000','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
m_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var h_5 = CreText('h_5',418,337,26,22,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
h_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var m_5 = CreText('m_5',471,337,26,22,"",'rgba(0,0,0,0)','#ffffff','#000000','#0000ff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
m_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var nop_bai = CreText('nop_bai',247,370,87,25,"Nộp Bài",'#400080','#ffad5b','#fffe99','#fffe99','',14,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#000000','#8000ff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
nop_bai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NopBai();
  return;
}

 );
var m_diem = CreText('m_diem',157,127,214,121,"8",'rgba(236,217,255,1.11)','#ffffff','#8000ff','#ffffff','',48,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(236,217,255,1.11)','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var t_mess = CreText('t_mess',158,128,212,21,"Thông báo điểm",'rgba(64,0,128,1.11)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','30','30',1,'#ffffff','rgba(128,0,255,1.11)','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_lam_lai = CreText('bt_lam_lai',228,215,85,25,"® Làm Lại",'#400080','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#8000ff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitBai1();
SetShowObject("","bang_diem",0);
SetShowObject("","nop_bai",1);
  return;
}
 );
var label = CreText('label',158,149,212,24,"Bạn được",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',561,1,38,26,"››",'#0080ff','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
var Text_6 = CreText('Text_6',342,128,30,21,"x",'#ff0000','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#8b0000','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("","bang_diem",0);
  return;
}
 );
var Text_7 = CreText('Text_7',1,1,40,26,"®",'#400080','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','#8000ff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitBai1();
SetShowObject("","bang_diem",0);
SetShowObject("","nop_bai",1);
  return;
}
 );
var bang_diem = new Kinetic.Group({name:'bang_diem',x:0,y:0,width:219,height:125});
bang_diem.add(m_diem,label,bt_lam_lai,t_mess,Text_6);
Page_1.add(Page_1_Backrounnd,o_so_2,o_so_5,o_so_4,o_so_3,o_so_1,o_so_0,dong_ho0,kim_gio0,kim_phut0,Text_2,Text_3,Text_4,Text_5,kim_gio1,kim_phut1,Text_8,Text_9,kim_gio2,kim_phut2,Text_12,Text_13,kim_gio3,kim_phut3,Text_16,Text_17,kim_gio4,kim_phut4,Text_20,Text_21,kim_gio5,kim_phut5,Text_24,h_0,h_1,m_1,h_2,m_0,m_2,h_3,m_3,h_4,m_4,h_5,m_5,nop_bai,Text_1,Text_7,bang_diem);
stage.add(Page_1);

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page_2_Backrounnd = CreText('Page_2_Backrounnd',0,0,600,300,'','#ffffff','','','','ID_IMAGE13.PNG',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','2','2','0','','0','0','0','0',0,0,'');
var Text_3 = CreText('Text_3',93,132,107,17,"Chỉnh giờ.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','right','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
QuayKimGio();
  return;
}
 );
var Text_1 = CreText('Text_1',214,79,125,125,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE12.PNG',16,'Arial','Normal','center','middle',2,'0.00','0','0',0,'rgba(0,0,0,0)','#000000','2','0','rgba(0,0,0,0)','0','0','4','0',0,0, 'rgba(0,0,0,0)',0,1.50);
var bt_2 = CreText('bt_2',336,132,8,16,"",'#666666','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
QuayKimPhut();
}


 );
var text_bt_2 = CreText('text_bt_2',358,130,127,20,"Chỉnh phút.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
text_bt_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
QuayKimPhut();
  return;
}
 );
var Text_4 = CreText('Text_4',36,0,563,29,"    Bài 2: Quay kim đồng hồ để đồng hồ chỉ:",'rgba(0,128,255,0.67)','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#ffffff','rgba(0,128,255,0.67)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var thoi_gian = CreText('thoi_gian',127,32,324,40,"12 GIỜ 30 PHÚT",'rgba(255,255,255,0.44)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#ffffff','rgba(255,255,255,0.44)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
thoi_gian.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakVN("","thoi_gian");
  return;
}
 );
var Text_2 = CreText('Text_2',1,0,37,29,"‹‹",'#0080ff','#80ff00','#ffffff','#000000','',20,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','#0080ff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
var kim_gio7 = CreText('kim_gio7',273,110,7,63,'','rgba(0,0,0,0)','','','','ID_IMAGE6.PNG',0,'','','','',0,'0.00','32','32',1,'rgba(0,0,0,0)','','2','2','','0','0','4','1',0,0, '#808080');
var kim_phut7 = CreText('kim_phut7',273,100,6,83,'','rgba(0,0,0,0)','','','','ID_IMAGE4.PNG',0,'','','','',0,'0.00','32','32',1,'rgba(0,0,0,0)','','2','2','','0','0','4','1',0,0, '#808080');
var Image3 = CreText('Image 3',271,136,11,11,'','rgba(0,0,0,0)','','','','ID_IMAGE5.PNG',0,'','','','',2,'0.00','32','32',1,'rgba(0,0,0,0)','','2','2','','0','0','4','1',0,0, '#808080');
var bt_1 = CreText('bt_1',208,132,8,16,"",'#666666','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
QuayKimGio();
}


 );
var m_diem = CreText('m_diem',181,75,201,95,"Đúng",'rgba(236,217,255,1.11)','#ffffff','#005500','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','rgba(236,217,255,1.11)','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var t_mess = CreText('t_mess',182,76,200,21,"Thông báo",'rgba(64,0,128,1.11)','#ffffff','#ffffff','#ffffff','',10,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#ffffff','rgba(128,0,255,1.11)','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_lam_lai = CreText('bt_lam_lai',257,146,60,20,"Làm tiếp",'#400080','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ffffff','#8000ff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
TaoBai2();
SetShowObject("","bang_diem",0);
  return;
}
 );
var bang_diem = new Kinetic.Group({name:'bang_diem',x:0,y:0,width:205,height:99});
bang_diem.add(m_diem,t_mess,bt_lam_lai);
var nop_bai = CreText('nop_bai',236,205,87,25,"Nộp Bài",'#400080','#ffad5b','#fffe99','#fffe99','',14,'Arial','Normal','center','middle',11,'0.00','10','0',1,'#000000','#8000ff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
nop_bai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NopBai2();
  return;
}

 );
Page_2.add(Page_2_Backrounnd,Text_3,Text_1,bt_2,text_bt_2,Text_4,thoi_gian,Text_2,kim_gio7,kim_phut7,Image3,bt_1,bang_diem,nop_bai);
stage.add(Page_2);

 var PageKey = new Kinetic.Layer({name: 'PageKey'});
var PageKey_Backrounnd = CreText('PageKey_Backrounnd',0,0,90,110,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#ffffff','0','0','0','','0','0','0','0',0,0,'');
var bg_key = CreText('bg_key',0,-1,85,117,"0",'#e5e5e5','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#000000','#e5e5e5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _0 = CreText('_0',3,1,26,17,"0",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var clear_one = CreText('clear_one',30,1,26,17,"←",'#ffc0cb','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffe4e1','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
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
var clear_all = CreText('clear_all',57,1,26,17,"C",'#ffc0cb','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffe4e1','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
clear_all.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
      keyNewValue = "";
	SetText("",objectShowKey,"");
	InvalidateObj("",objectShowKey);;
  return;
}
 );
var _1 = CreText('_1',3,20,26,17,"1",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _2 = CreText('_2',30,20,26,17,"2",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _3 = CreText('_3',57,20,26,17,"3",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _4 = CreText('_4',3,39,26,17,"4",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _5 = CreText('_5',30,39,26,17,"5",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _6 = CreText('_6',57,39,26,17,"6",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _9 = CreText('_9',57,58,26,17,"9",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _8 = CreText('_8',30,58,26,17,"8",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _7 = CreText('_7',3,58,26,17,"7",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_lon = CreText('dau_lon',3,77,26,17,">",'#afeeee','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
dau_lon.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_bang = CreText('dau_bang',30,77,26,17,"<",'#afeeee','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
dau_bang.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_be = CreText('dau_be',57,77,26,17,"=",'#afeeee','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
dau_be.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var ok = CreText('ok',57,96,27,17,"OK",'#98fb98','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e0fee0','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
ok.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
var huy = CreText('huy',3,96,26,17,"Hủy",'#ffc0cb','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffe4e1','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
huy.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetText("",objectShowKey,keyOldValue);
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
var Text_1 = CreText('Text_1',30,96,26,17,"+",'#afeeee','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:89,height:121});
Group_1.add(bg_key,_0,clear_one,clear_all,_1,_2,_3,_4,_5,_6,_9,_8,_7,dau_lon,dau_bang,dau_be,ok,huy,Text_1);
PageKey.add(PageKey_Backrounnd,Group_1);
stage.add(PageKey);
InitLacVietScript();
};
