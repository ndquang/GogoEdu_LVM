folder_Resource ='data/Tim_X';
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
var kq = ["","","","","","","",""];
var m_bien = "y";
function  CreateGame()
{
	/*------------------ cong ---------------------*/
	var a =  Random(10000)+100;
	var b =  Random(a)+1;
	var c = a+b;

	var ta= "a) " +  m_bien + " + " +  b + " = " + c;
	SetText("","a",ta);
	kq[0]= m_bien + " = " + c + " - " + b;
	kq[1]= m_bien + " = " + a;

	/*------------------ tru ---------------------*/
	a =  Random(10000)+100;
	b =  Random(a)+1;
	c = a-b;

	ta= "b) " +  m_bien + " - " +  b + " = " + c;
	SetText("","b",ta);
	kq[2]= m_bien + " = " + c + " + " + b;
	kq[3]= m_bien + " = " + a;

	/*------------------ nhan ---------------------*/	
	a =  Random(10000)+100;
	b =  Random(10)+1;
	c = a*b;
	ta= "c) " +  m_bien + " x " +  b + " = " + c;
	SetText("","c",ta);
	kq[4]= m_bien + " = " + c + " : " + b;
	kq[5]= m_bien + " = " + a;

	/*------------------ chia  ---------------------*/
	
	a =  Random(10000)+100;
	b =  Random(10)+1;
	while(a%b!=0)
	{
		a =  Random(10000)+100;
		b =  Random(10)+1;
	}
	c = a/b;
	ta= "c) " +  m_bien + " : " +  b + " = " + c;
	SetText("","d",ta);
	kq[6]= m_bien + " = " + c + " x " + b;
	kq[7]= m_bien + " = " + a;
	SetShowObject("","Group_1",0);
	SetShowObject("","msg",0);
	for(var i=0;i<8;i++)
	{
	SetText("","kq"+i,"");
	SetFontColor("","kq"+i,"#0000ff");
	}
	InvalidateObj("","");
}


function  CheckKQ()
{
	var b = true;
	for(var i=0;i<8;i++)
	{
		var input= GetText("","kq"+i);
		if(replaceStr(kq[i]," ",'') != replaceStr(input," ",''))
			{
			SetFontColor("","kq"+i,"#ff9999");
			 b = false;
			}
		else SetFontColor("","kq"+i,"#80ff80");

	}
		if(b==true)
		{
			SetText("","t_mess","https://gamechocon.com");
			SetText("","m_diem","Đúng");
			SetColor("","m_diem","#99ff33");
			Speak("Đúng","VN");
		}
	  else {
		SetText("","m_diem","Sai");
		SetColor("","m_diem","#ff9999");
		}
		SetShowObject("","msg",1);
		InvalidateObj("","");
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
 width: 600,
 height: 400 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,600,400,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#e6e6fa','4','0','0','','0','0','0','0',0,0,'');
Page_1.add(Page_1_Backrounnd);
var kq4 = CreText('kq4',57,274,211,27,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',24,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
kq4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Page_1.add(kq4);
var kq6 = CreText('kq6',343,274,211,27,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',24,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
kq6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Page_1.add(kq6);
var u_1 = CreText('u_1',616,7,54,21,"",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',28,'Arial','Normal','center','middle',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(u_1);
var Text_1 = CreText('Text_1',1,0,600,38,"ÔN TẬP CÁC SỐ ĐẾN 100000",'#0080c0','#ffffff','#ffffff','#ffffff','',26,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#6cb6ff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_1);
var a = CreText('a',25,106,279,27,"a)  y + 257 = 1982",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',24,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(a);
var kq0 = CreText('kq0',58,142,211,27,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',24,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
kq0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Page_1.add(kq0);
var d = CreText('d',301,236,253,27,"d) y : 5 = 178",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',24,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(d);
var check = CreText('check',268,360,110,36,"Kiểm tra",'#80ff00','#ffffff','#000000','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#0080ff','#b0ff62','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
check.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckKQ();
  return;
}
 );
Page_1.add(check);
var kq1 = CreText('kq1',59,179,211,27,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',24,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
kq1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Page_1.add(kq1);
var kq2 = CreText('kq2',344,142,211,27,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',24,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
kq2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Page_1.add(kq2);
var kq3 = CreText('kq3',344,179,211,27,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',24,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
kq3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Page_1.add(kq3);
var Text_16 = CreText('Text_16',14,47,276,34,"Bài 1: Tìm y; Biết:",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',24,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_16);
var c = CreText('c',25,236,316,27,"c) y x 5 = 1085",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',24,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(c);
var bg_key = CreText('bg_key',0,1,129,181,"0",'#e5e5e5','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#000000','#e5e5e5','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(bg_key);
var _0 = CreText('_0',6,5,35,21,"0",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Page_1.add(_0);
var clear_one = CreText('clear_one',47,5,35,21,"←",'#ffc0cb','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffe4e1','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
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
Page_1.add(clear_one);
var clear_all = CreText('clear_all',87,5,35,21,"C",'#ffc0cb','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffe4e1','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,0,'rgba(0, 0, 0, 0)',0,1.50);
clear_all.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
      keyNewValue = "";
	SetText("",objectShowKey,"");
	InvalidateObj("",objectShowKey);;
  return;
}
 );
Page_1.add(clear_all);
var _1 = CreText('_1',6,30,35,21,"1",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Page_1.add(_1);
var _2 = CreText('_2',47,30,35,21,"2",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Page_1.add(_2);
var _3 = CreText('_3',87,30,35,21,"3",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,0,'rgba(0, 0, 0, 0)',0,1.50);
_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Page_1.add(_3);
var _4 = CreText('_4',6,55,35,21,"4",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Page_1.add(_4);
var _5 = CreText('_5',47,55,35,21,"5",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Page_1.add(_5);
var _6 = CreText('_6',87,55,35,21,"6",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,0,'rgba(0, 0, 0, 0)',0,1.50);
_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Page_1.add(_6);
var _9 = CreText('_9',87,80,35,21,"9",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,0,'rgba(0, 0, 0, 0)',0,1.50);
_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Page_1.add(_9);
var _8 = CreText('_8',47,80,35,21,"8",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Page_1.add(_8);
var _7 = CreText('_7',6,80,35,21,"7",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Page_1.add(_7);
var dau_lon = CreText('dau_lon',47,105,35,21,"+",'#afeeee','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e4fafa','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,0,'rgba(0, 0, 0, 0)',0,1.50);
dau_lon.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Page_1.add(dau_lon);
var dau_bang = CreText('dau_bang',87,105,35,21,"-",'#afeeee','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e4fafa','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
dau_bang.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Page_1.add(dau_bang);
var dau_be = CreText('dau_be',47,130,35,21,"x",'#afeeee','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e4fafa','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,0,'rgba(0, 0, 0, 0)',0,1.50);
dau_be.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Page_1.add(dau_be);
var ok = CreText('ok',86,155,36,21,"OK",'#98fb98','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e0fee0','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,0,'rgba(0, 0, 0, 0)',0,1.50);
ok.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
Page_1.add(ok);
var huy = CreText('huy',47,155,35,21,"Hủy",'#ffc0cb','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#ffe4e1','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,0,'rgba(0, 0, 0, 0)',0,1.50);
huy.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetText("",objectShowKey,keyOldValue);
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
Page_1.add(huy);
var Text_5 = CreText('Text_5',87,130,35,21,":",'#afeeee','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e4fafa','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Page_1.add(Text_5);
var b = CreText('b',301,106,262,27,"b)  y - 257 = 1982",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',24,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(b);
var kq5 = CreText('kq5',57,313,211,27,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',24,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
kq5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Page_1.add(kq5);
var kq7 = CreText('kq7',343,313,211,27,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',24,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
kq7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ShowKeyNum(name_keyboard);
  return;
}
 );
Page_1.add(kq7);
var Text_2 = CreText('Text_2',6,155,35,21,"=",'#afeeee','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e4fafa','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Page_1.add(Text_2);
var Text_3 = CreText('Text_3',6,130,35,21," ",'#afeeee','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e4fafa','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Page_1.add(Text_3);
var Text_4 = CreText('Text_4',6,105,35,21,"y",'#afeeee','#ffffff','#000000','#ffffff','',12,'Verdana','Normal','center','middle',3,'0.00','5','0',1,'#7f7f7f','#e4fafa','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
Page_1.add(Text_4);
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:133,height:185});
Group_1.add(bg_key);
Group_1.add(_0);
Group_1.add(clear_one);
Group_1.add(clear_all);
Group_1.add(_1);
Group_1.add(_2);
Group_1.add(_3);
Group_1.add(_4);
Group_1.add(_5);
Group_1.add(_6);
Group_1.add(_9);
Group_1.add(_8);
Group_1.add(_7);
Group_1.add(dau_lon);
Group_1.add(dau_bang);
Group_1.add(dau_be);
Group_1.add(ok);
Group_1.add(huy);
Group_1.add(Text_5);
Group_1.add(Text_2);
Group_1.add(Text_3);
Group_1.add(Text_4);
Page_1.add(Group_1);
var m_diem = CreText('m_diem',197,160,308,146,"Sai.",'rgba(163,255,70,0.98)','#ffffff','#000000','#ffffff','',36,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#7f7f7f','rgba(163,255,70,0.98)','0','0','#ffffff','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(m_diem);
var bt_lam_lai = CreText('bt_lam_lai',308,267,96,30,"Tiếp",'#c0c0c0','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','middle',3,'0.00','5','0',1,'#000000','#e5e5e5','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_lam_lai.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CreateGame();
  return;
}
 );
Page_1.add(bt_lam_lai);
var t_mess = CreText('t_mess',197,160,308,26,"https://gamechocon.com",'rgba(192,192,192,0.98)','#ffffff','#000000','#ffffff','',14,'Arial','Bold','left','middle',0,'0.00','0','0',1,'#666666','rgba(223,223,223,0.98)','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(t_mess);
var msg = new Kinetic.Group({name:'msg',x:0,y:0,width:314,height:150});
msg.add(m_diem);
msg.add(bt_lam_lai);
msg.add(t_mess);
Page_1.add(msg);
stage.add(Page_1);
InitLacVietScript();
};
