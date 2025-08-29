folder_Resource ='/data/On_tap_cac_so_den_100000_tiep_theo';
var keyOldValue="";
var keyNewValue="";
var objectShowKey="";
var name_keyboard="Group_1";
function   GetKeyBoNumber(){
	keyNewValue = "_"+ GetText("",objectShowKey) + GetText("","");
	keyNewValue =rightStr(keyNewValue ,length(keyNewValue)-1);
	SetText("",objectShowKey,keyNewValue);
	SetShowObject("","check",1);
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
var kq=["0","0","0"];
var name_b2="";
function  CreateGame()
{
	/*------------------bai 1---------------------*/
	var a =  Random(90000)+10000;
	var b =  Random(90000)+10000;
	var k = Random(3);
	if(k==0){
		b=a;
		kq[0]="=";
	}
	else if(a>b) kq[0]=">";
	else if(a<b) kq[0]="<";
	SetText("","b1_0",a);
	SetText("","b1_1",b);
	/*------------------bai 2---------------------*/
	a =  Random(90000)+10000;
	b =  Random(90000)+10000;
	var c =  Random(90000)+10000;
	var d =  Random(90000)+10000;
	SetText("","b2_0",a);
	SetText("","b2_1",b);
	SetText("","b2_2",c);
	SetText("","b2_3",d);
	kq[1]=Math.max(a,b,c,d);

	/*------------------bai 3---------------------*/
	a =  Random(5)+1;
	b =  Random(5)+a+1;
	c =  Random(5)+1;
	d =  Random(5)+1;
	SetText("","b3_0",a+"cm");
	SetText("","b3_1",b+"cm");
	SetText("","b3_2",c+"cm");
	SetText("","b3_3",d+"cm");
	kq[2] = (a+b)*2;
	kq[3] = 3*c;
	kq[4] = 5*d;

	SetShowObject("","Group_1",0);
	SetShowObject("","msg",0);
	SetShowObject("","check",0);
	for(var i=0;i<5;i++)
	{
		SetText("","u_"+i,"");
		SetColor("","u_"+i,"#ffffff");
		SetColor("","b2_"+i,"#f2f2f2");
	}
	GetVer();
	name_b2="";
	InvalidateObj("","");
}

function  ChonMax()
{
  for(var n=0;n<4;n++)
	SetColor("","b2_"+n,"#f2f2f2");
	SetColor("","","#66ccff");
	SetText("","u_1",GetText("",""));
	name_b2 = GetName("");
	InvalidateObj("","");
}
function  CheckKQ()
{
	var _diem =0;
	var b = true;
	for(var i=0;i<5;i++)
	{
		if(kq[i]!=GetText("","u_"+i))
			{
			SetColor("","u_"+i,"#ff9999");
			 b = false;
			}
		else 
		{
		SetColor("","u_"+i,"#80ff80");
		_diem=_diem+2;
		}
		if(GetText("","b2_"+i)==kq[1]){
			SetColor("","b2_"+i,"#80ff80");
			_diem=_diem+2;
		}
	}
	if(kq[1]!=GetText("","u_1")){
		SetColor("",name_b2,"#ff9999");
		_diem=_diem+2;
		}

	if(b==true)
		{
			SetText("","t_mess","https://gamechocon.com");
			SetColor("","m_diem","#99ff33");
			Speak("Đúng","VN");
		}
	else {		
		SetColor("","m_diem","#ff9999");
		}
		UpdateScore(_diem);
		SetText("","m_diem", _diem + " Điểm");
		SetShowObject("","msg",1);
}
function Page_1()
{
CreateGame();
SetMoveView("","msg",1);
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
 width: 680,
 height: 530 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,680,530,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#e6e6fa','4','0','0','','0','0','0','0',0,0,'');
var u_1 = CreText('u_1',616,7,54,21,"",'rgba(0,0,0,0)','#ffffff','rgba(0,0,0,0)','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var title = CreText('title',70,77,40,97,">\r\n<\r\n=",'rgba(0,0,0,0)','#ffffff','#0080ff','#ffffff','',24,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_1 = CreText('Text_1',1,0,678,38,"ÔN TẬP CÁC SỐ ĐẾN 100000",'#0080c0','#ffffff','#ffffff','#ffffff','',24,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#6cb6ff','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var b1_0 = CreText('b1_0',139,101,110,42,"12345",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var u_0 = CreText('u_0',252,100,52,42,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
u_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var b1_1 = CreText('b1_1',306,100,110,42,"12345",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var check = CreText('check',305,491,110,36,"Kiểm tra",'#80ff00','#ffffff','#000000','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#0080ff','#b0ff62','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
check.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckKQ();
  return;
}
 );
var b2_0 = CreText('b2_0',94,211,110,42,"12345",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b2_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMax();
  return;
}
 );
var b2_1 = CreText('b2_1',220,211,110,42,"12345",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b2_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMax();
  return;
}
 );
var b2_2 = CreText('b2_2',349,211,110,42,"12345",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b2_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMax();
  return;
}
 );
var b2_3 = CreText('b2_3',478,211,110,42,"12345",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
b2_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonMax();
  return;
}
 );
var b3_1 = CreText('b3_1',87,323,165,96,"2",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','bottom',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_7 = CreText('Text_7',286,322,147,96,"các cạnh bằng nhau",'rgba(0,0,0,0)','#ffffff','#7f7f7f','#ffffff','',14,'Arial','Normal','center','bottom',4,'0.00','50','0',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_8 = CreText('Text_8',468,314,147,96,"các cạnh bằng nhau",'rgba(0,0,0,0)','#ffffff','#7f7f7f','#ffffff','',14,'Arial','Normal','center','middle',8,'0.00','33','75',1,'#000000','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var u_2 = CreText('u_2',124,431,53,42,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
u_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var u_3 = CreText('u_3',327,431,52,42,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
u_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var u_4 = CreText('u_4',516,431,52,42,"",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0080ff','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
u_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
var b3_0 = CreText('b3_0',30,359,78,30,"2cm",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'-90.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var b3_2 = CreText('b3_2',269,344,78,30,"2cm",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'-54.16','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var b3_3 = CreText('b3_3',463,301,78,30,"2cm",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'-24.44','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_16 = CreText('Text_16',24,45,188,34,"Bài 1: Điền dấu",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',24,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_17 = CreText('Text_17',23,173,395,34,"Bài 2: Chọn số lớn nhất.",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',24,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_18 = CreText('Text_18',25,264,466,34,"Bài 3: Tính chu vi các hình",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',24,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_2 = CreText('Text_2',184,435,71,34,"cm",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_3 = CreText('Text_3',386,434,58,34,"cm",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var Text_4 = CreText('Text_4',580,436,58,34,"cm",'rgba(0,0,0,0)','#ffffff','#000000','#ffffff','',28,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0,0,0,0)','#ffffff','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bg_key = CreText('bg_key',4,4,129,158,"0",'#e5e5e5','#ffffff','rgba(0,0,0,0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#000000','#e5e5e5','0','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var _0 = CreText('_0',9,8,35,21,"0",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var clear_one = CreText('clear_one',51,8,35,21,"←",'#ffc0cb','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffe4e1','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
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
var clear_all = CreText('clear_all',93,8,35,21,"C",'#ffc0cb','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffe4e1','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
clear_all.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
      keyNewValue = "";
	SetText("",objectShowKey,"");
	InvalidateObj("",objectShowKey);;
  return;
}
 );
var _1 = CreText('_1',9,34,35,21,"1",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _2 = CreText('_2',51,34,35,21,"2",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _3 = CreText('_3',93,34,35,21,"3",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _4 = CreText('_4',9,60,35,21,"4",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _5 = CreText('_5',51,60,35,21,"5",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _6 = CreText('_6',93,60,35,21,"6",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _9 = CreText('_9',93,86,35,21,"9",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _8 = CreText('_8',51,86,35,21,"8",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var _7 = CreText('_7',9,86,35,21,"7",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_lon = CreText('dau_lon',9,112,35,21,">",'#afeeee','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
dau_lon.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_bang = CreText('dau_bang',51,112,35,21,"<",'#afeeee','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
dau_bang.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var dau_be = CreText('dau_be',92,112,35,21,"=",'#afeeee','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
dau_be.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var ok = CreText('ok',91,137,36,21,"OK",'#98fb98','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e0fee0','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
ok.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
var huy = CreText('huy',8,137,35,21,"Hủy",'#ffc0cb','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffe4e1','4','0','rgba(0,0,0,0)','0','0','4','0',2,0,'rgba(0,0,0,0)',0,1.50);
huy.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetText("",objectShowKey,keyOldValue);
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
var Text_5 = CreText('Text_5',50,137,35,21,"+",'#afeeee','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e4fafa','4','0','rgba(0,0,0,0)','0','0','4','0',1,0,'rgba(0,0,0,0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
var m_diem = CreText('m_diem',219,225,308,146,"Sai.",'rgba(163,255,70,1.11)','#ffffff','#000000','#ffffff','',36,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#7f7f7f','rgba(163,255,70,1.11)','0','0','#ffffff','0','0','4','1',0,0,'rgba(0,0,0,0)',0,1.50);
var t_mess = CreText('t_mess',219,225,308,26,"https://gamechocon.com",'rgba(192,192,192,1.11)','#ffffff','#000000','#ffffff','',14,'Arial','Bold','left','middle',0,'0.00','0','0',1,'#666666','rgba(223,223,223,1.11)','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
var bt_lam_lai = CreText('bt_lam_lai',331,331,96,30,"Tiếp",'#c0c0c0','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#000000','#e5e5e5','4','0','rgba(0,0,0,0)','0','0','4','0',0,0,'rgba(0,0,0,0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateGame();
  return;
}
 );
var msg = new Kinetic.Group({name:'msg',x:0,y:0,width:327,height:150});
msg.add(m_diem,t_mess,bt_lam_lai);
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:133,height:162});
Group_1.add(bg_key,_0,clear_one,clear_all,_1,_2,_3,_4,_5,_6,_9,_8,_7,dau_lon,dau_bang,dau_be,ok,huy,Text_5);
Page_1.add(Page_1_Backrounnd,u_1,title,Text_1,b1_0,u_0,b1_1,check,b2_0,b2_1,b2_2,b2_3,b3_1,Text_7,Text_8,u_2,u_3,u_4,b3_0,b3_2,b3_3,Text_16,Text_17,Text_18,Text_2,Text_3,Text_4,msg,Group_1);
stage.add(Page_1);
InitLacVietScript();
};
