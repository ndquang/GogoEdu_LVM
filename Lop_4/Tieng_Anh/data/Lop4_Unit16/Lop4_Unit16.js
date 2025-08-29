folder_Resource ='data/Lop4_Unit16';
var keyOldValue="";
var keyNewValue="";
var objectShowKey="";
var name_keyboard="Group_key";
var achar= "qwertyuiopasdfghjklzxcvbnm.,;:!?";//32
var anum= "1234567890+-*/=><(){}[]@%&“”'#$\^";
function  InitKeyBoar()
{
	for(var i=0; i< 38; i++)
	{
	  SetCursor("","char_"+i,"pointer");
	  if(i<32)
	  SetText("","char_"+i,subString(achar,i,1));
	}
	SetShowObject("","Group_key",0);
}
function   GetKeyBoNumber(){
	if(objectShowKey=="")
		return;
	var charxxx=  GetText("","");
	keyNewValue = "_"+ GetText("",objectShowKey) + GetText("","");
	keyNewValue = rightStr(keyNewValue ,length(keyNewValue)-1);
	SetText("",objectShowKey,keyNewValue);
	InvalidateObj("",objectShowKey);
}
function LowerKey()
{
  for(var i=0; i<26;i++){
	var ch= GetText("","char_"+i);
	if(ch!=toLowerCase(ch))
	SetText("","char_"+i,toLowerCase(ch));
	else SetText("","char_"+i,toUpperCase(ch));
	}
InvalidateObj("","");
}
function   ShowKeyNum( namekey){
AddObjToCurentPage("Group_key");
SetShowObject("","Group_key",0);
InitKeyBoar();
var x_to= GetLeft("","")+ GetWidth("","")/2- GetWidth("",namekey)/2;
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

function ChangKey()
{
  for(var i=0; i<32;i++){
	var ch= GetText("","char_"+i);
	if(ch!=subString(anum,i,1))
	SetText("","char_"+i,subString(anum,i,1));
	else SetText("","char_"+i,subString(achar,i,1));
	}
InvalidateObj("","");
}
function DocTieuDe()
{
var title="";
for(var i=0;i<5;i++)
{
if(GetText("","title_"+i))
title=title+ GetText("","title_"+i)+ ". ";
}
Speak(title,"EN");
SetMoveView("","msg1",1);
SetShowObject("","msg1",0);
}
function InitLesson1()
{
DocTieuDe();
for(var i=0; i<4;i++){
		SetText("","l1_"+i,"");
		SetFontColor("","l1_"+i,"#0000ff");
}
SetShowObject("","msg1",0);
InvalidateObj("","");
  return;
}
var lesson1=["monkey","lion","giraffe","crocodile"];
function CheckLesson1(){
var diem=0;
	for(var i=0; i<4;i++){
		if(toLowerCase(GetText("","l1_"+i)) ==  toLowerCase(lesson1[i]))
		{
		SetText("","l1_"+i,lesson1[i]);
		SetFontColor("","l1_"+i,"#008000");
			diem=diem+1;
		}
		else SetFontColor("","l1_"+i,"#ff0000");
	}
	var dd= round(diem*100/4);
	SetText("","m_diem", "Complete "+ dd+ " %.");
	SetShowObject("","msg1",1);
      InvalidateObj("","");
	return diem;

}
var a_kq=["a","a","b","a","b","a","a"];
var a_tl=[0,0,0,0,0,0,0];
function InitBaiHoc(){
DocTieuDe();
	for(var i=0;i<7;i++)
		{
		SetShowObject("","check_"+i,0);
		SetCursor("","a_"+i,"pointer");
		SetCursor("","b_"+i,"pointer");
		SetCursor("","c_"+i,"pointer");
		SetFontColor("","a_"+i,"#000000");
		SetFontColor("","b_"+i,"#000000");
		SetFontColor("","c_"+i,"#000000");
		SetText("","check_"+i,"");
		a_tl[i]=0;
		}
InvalidateObj("","");
}

function ChonTL(){
	var name= GetName("");
	var t=  GetTop("",name);
	var l=  GetLeft("",name);
	var cau = rightStr(name,1);
	a_tl[cau]= leftStr(name,1);
	SetText("","check_"+cau,a_tl[cau]);
	MoveObjectTo("","check_"+cau,l-6,t+2);
	SetShowObject("","check_"+cau,1);
	Speak(GetText("",""),"EN");
	InvalidateObj("Trang_1","");
}
function CheckKq(){
 var diem=0;
 for(var i=0;i<7;i++)
{
	if(a_kq[i] != a_tl[i])
	{
		SetFontColor("",a_kq[i]+"_"+i,"#008000");
		SetFontColor("",a_tl[i]+"_"+i,"#800000");

	}
	else {
		SetFontColor("",a_kq[i]+"_"+i,"#008000");
		diem=diem+1;
	     }
}
	var dd= round(diem*100/7);
	SetText("","mess", "Complete "+ dd+ " %.");
	SetShowObject("","msg1",1);
      InvalidateObj("","");
	return diem;
}
////
////
var lesson2=["lovely","horses","eating","two legs","bulky","stand on a ball","fruit","eart"];
function InitLesson21()
{
for(var i=0; i<8;i++){
		SetText("","l21_"+i,"");
		SetFontColor("","l21_"+i,"#000080");

}
DocTieuDe();
}
function CheckLesson21(){
var diem=0;
	for(var i=0; i<8;i++){
		if(trimStr(toLowerCase(GetText("","l21_"+i)),'.') ==  toLowerCase(lesson2[i]))
		{
		SetText("","l21_"+i,lesson2[i]);
		SetFontColor("","l21_"+i,"#00ff00");
			diem=diem+1;
		}
		else SetFontColor("","l21_"+i,"#ff0000");
	}
      var dd= round(diem*100/8);
	SetText("","m_diem", "Complete "+ dd+ " %.");
	SetShowObject("","msg1",1);
      InvalidateObj("","");
	return diem;
}
function Speak21(){
var index= rightStr(GetName(""),2);
	index= StringtoNumber(index);
	Speak(lesson2[index],"EN");
}

///
var listen_22=[""];
var akq_22=["",""];
var atr_22=["",""];
function ClickL22(){
	var n= Name("");
	n = replaceStr(n,"c",'');
	atr_22[leftStr(n,1)]= rightStr(n,1);
	for(var i=0;i<3;i++)
		SetText("","c"+ leftStr(n,1)+"_"+i,"");
	SetText("","","x");
SetColor("","","#ffffff");
InvalidateObj("","");
}
function ListenL22(){
	Speak(listen_22[rightStr(Name(""),1)],"EN");
}
var aword_22=["","",""];
function InitLesson22()
{
	for(var i=0; i< 10;i++){
		var tt= GetText("","ls22_"+i);
			tt=replaceStr(tt,"\r\n",'');
		var charx='.';
		var Startdot= indexOf(tt,".",0)+1;
		var Enddot= indexOf(tt,".",Startdot);
		if(Enddot==-1) {
			charx="?";
			Enddot= indexOf(tt,"?",Startdot);
			}
		var j=0;
		while(Enddot!=-1){
			Enddot= indexOf(tt,charx,Startdot+1);
			if(Enddot!=-1)
 			aword_22[j]= trimStr(subString(tt,Startdot, Enddot-Startdot),' ');
			else aword_22[j]=trimStr(subString(tt,Startdot+1),' ');
			SetText("","c"+i+"_"+j,"");
			SetColor("","c"+i+"_"+j,"#ffffff");
			j++;
			Startdot=Enddot+1;
		} 
		   var abc=Random(j-1);
		   listen_22[i]= aword_22[abc];
		   akq_22[i]=abc;
		   atr_22[i]="-1";
	 	}
	DocTieuDe();
}
function CheckLesson22(){
	var diem=0;
	for(var i=0; i< 10;i++){
	 if(akq_22[i] == atr_22[i]){
	    SetColor("","c"+i+"_"+akq_22[i],"#00ff00");
	    diem++;
	    }
	  else {
		SetColor("","c"+i+"_"+akq_22[i],"#00ff00");
		SetColor("","c"+i+"_"+atr_22[i],"#ff0000");
		}
	}
	var dd= round(diem*100/10);
	SetText("","m_diem", "Complete "+ dd+ " %.");
	SetShowObject("","msg1",1);
      InvalidateObj("","");

}
//
var akq_31=["-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1"];
function Speak31(){
	var i = rightStr(GetName(""),1);
	//var tt = GetText("","") +". "+akq_31[i];
	Speak(akq_31[i],"EN");
}
function InitLesson31()
{
	DocTieuDe();
	for(var i=0; i< 20;i++){
		if(akq_31[i]==-1)
		akq_31[i]= GetText("","ls31_"+i);	
	 SetText("","ls31_"+i,"");
	 SetColor("","ls31_"+i,"#ffffff");
	}
	SetShowObject("","msg1",0);
	InvalidateObj("","");
}
function CheckLesson31(){
	var diem=0;
	for(var i=0; i<20;i++){
		if(toLowerCase(GetText("","ls31_"+i)) ==  toLowerCase(akq_31[i]))
		{
		SetText("","ls31_"+i,akq_31[i]);
		SetFontColor("","ls31_"+i,"#008000");
		diem=diem+1;
		}
		else SetFontColor("","ls31_"+i,"#ff0000");
	}
	var dd= round(diem*100/19);
	SetText("","m_diem", "Complete "+ dd+ " %.");
	SetShowObject("","msg1",1);
      InvalidateObj("","");
	return diem;
}
////

var tl32=["1. What animal is that?","2. What animal is that?","3. What animal is that?"];
var kq32=["It's a monkey.","It's an elephant.","It's a bear."];
function InitLesson32()
{
	for(var i=0; i< 3;i++){
	SetFontColor("","ls32_"+i,"#000000");
	SetText("","ls32_"+i,"");
	}
	SetShowObject("","msg1",0);
	InvalidateObj("","");
}
function  Speak32()
	{
	var index= rightStr(GetName(""),1);
	var tt = tl32[index]+". "+kq32[index];
		Speak(tt,"EN");
}
function   Click32(){
	var na = GetName("");
	tl32[rightStr(na,1)]= leftStr(na,1);
	SetFontColor("","","#008000");
	if(leftStr(na,1)=="a")
	SetFontColor("","b_"+rightStr(na,1),"#000000");
	else
	SetFontColor("","a_"+rightStr(na,1),"#000000");
	InvalidateObj("","");
}
function CheckLesson32(){
var diem=0;
	for(var i=0; i<3;i++){
		if(toLowerCase(kq32[i]) ==  toLowerCase(GetText("","l32_"+i)))
		{
		SetFontColor("","ls32_"+i,"#00ff00");
			diem=diem+1;
		}
		else SetFontColor("","ls32_"+i,"#ff0000");
	}
	var dd= round(diem*100/3);
	SetText("","m_diem", "Complete "+ dd+ " %.");
	SetShowObject("","msg1",1);
      InvalidateObj("","");
}
function Page_1()
{
DocTieuDe();
  return;
}

function Page_2()
{
InitLesson1();
  return;
}


function Page_3()
{
InitBaiHoc();
  return;
}

function Trang_1()
{
InitLesson21();
  return;
}

function Page_5()
{
InitLesson22();
  return;
}

function Page_6()
{

InitLesson31();
  return;
}

function Page_7()
{
DocTieuDe();
InitLesson32();
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
 height: 690 
 });

 var Page_1 = new Kinetic.Layer({name: 'Page_1',callback:'Page_1()'});
var Page_1_Backrounnd = CreText('Page_1_Backrounnd',0,0,600,450,'','#c4e1ff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#c4e1ff','0','0','0','','0','0','0','0',0,0,'');
Page_1.add(Page_1_Backrounnd);
var title_1 = CreText('title_1',108,-2,492,64,"Zoo Animals",'#004080','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page_1.add(title_1);
var title_0 = CreText('title_0',-1,-2,138,64,"Unit 16",'#ffd700','#ffffff','#000000','#ffffff','',22,'Arial','Bold','center','middle',12,'0.00','0','3',0,'rgba(0, 0, 0, 0)','#ffd700','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(title_0);
var title_2 = CreText('title_2',19,75,561,330,"\r\n     REMEMBER",'#ffffff','#ffffff','#009300','#ffffff','',16,'Arial','Bold','left','top',3,'0.00','14','0',2,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(title_2);
var Text_8 = CreText('Text_8',52,124,492,263,"Để hỏi kia là con vật gì em nói:\r\n\r\nKhi trả lời em nói:\r\n\r\nĐể nói lý do em thích con vật đó, em dùng mẫu câu:\r\n\r\nĐể nói lý do em không thích con vật đó, em dùng mẫu câu:\r\n\r\nKhi trả lời cho câu hỏi về lý do với từ Why em nói Because.\r\nVí dụ:\r\n\r\nTên một số con vật:\r\n\r\nMột số tính từ miêu tả con vật:",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_8);
var Text_3 = CreText('Text_3',56,139,196,16,"What animal is that?",'rgba(0, 0, 0, 0)','#ffffff','#00008b','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_1.add(Text_3);
var Text_5 = CreText('Text_5',56,168,183,21,"It's + TÊN CON VẬT",'rgba(0, 0, 0, 0)','#ffffff','#00008b','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_5);
var Text_18 = CreText('Text_18',56,237,406,16,"I don't like + TÊN CON VẬT + because + LÝ DO\r\n",'rgba(0, 0, 0, 0)','#ffffff','#00008b','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_18);
var next = CreText('next',481,391,69,27,"›››",'#0080ff','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',3,'0.00','0','0',1,'#000000','#0080ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
next.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_1.add(next);
var Text_1 = CreText('Text_1',96,267,379,22,"Why do you like monkey? - Because they are funny.",'rgba(0, 0, 0, 0)','#ffffff','#00008b','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_1.add(Text_1);
var Text_9 = CreText('Text_9',56,203,344,19,"I like + TÊN CON VẬT + because + LÝ DO",'rgba(0, 0, 0, 0)','#ffffff','#00008b','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_1.add(Text_9);
var Text_2 = CreText('Text_2',189,300,379,21,"tiger, giraffe, elephant, monkey, crocodile, bear.",'rgba(0, 0, 0, 0)','#ffffff','#00008b','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_1.add(Text_2);
var Text_4 = CreText('Text_4',255,333,280,21,"pertty, scary, funny, bulky.",'rgba(0, 0, 0, 0)','#ffffff','#00008b','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_1.add(Text_4);
stage.add(Page_1);

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page_2_Backrounnd = CreText('Page_2_Backrounnd',0,0,600,400,'','#c4e1ff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#c4e1ff','0','0','0','','0','0','0','0',0,0,'');
Page_2.add(Page_2_Backrounnd);
var title_1 = CreText('title_1',110,1,492,50,"Zoo Animals",'#004080','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page_2.add(title_1);
var Text_11 = CreText('Text_11',43,118,512,252,"",'#ffffff','#000000','#000000','#ffffff','',14,'Arial','Normal','center','middle',3,'0.00','10','0',1,'#009300','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_2.add(Text_11);
var l1_3 = CreText('l1_3',419,284,106,32,"",'#e6e6fa','#ffffff','#0000ff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0000ff','#e6e6fa','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l1_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(lesson1[3],"EN");
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_2.add(l1_3);
var Image_1 = CreText('Image_1',85,168,431,105,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE2.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_2.add(Image_1);
var l1_2 = CreText('l1_2',308,284,106,32,"",'#e6e6fa','#ffffff','#0000ff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0000ff','#e6e6fa','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l1_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 Speak(lesson1[2],"EN");
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_2.add(l1_2);
var l1_0 = CreText('l1_0',86,284,106,32,"",'#e6e6fa','#ffffff','#0000ff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0000ff','#e6e6fa','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l1_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(lesson1[0],"EN");
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_2.add(l1_0);
var l1_1 = CreText('l1_1',197,284,106,32,"Lesson 1",'#e6e6fa','#ffffff','#0000ff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0000ff','#e6e6fa','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(lesson1[1],"EN");
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_2.add(l1_1);
var title_2 = CreText('title_2',0,61,110,30,"Lesson 1",'#004080','#000000','#ffff00','#ffffff','',16,'Arial','Bold','center','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_2.add(title_2);
var title_3 = CreText('title_3',109,61,120,30," 1. Vocabulary",'#0061c1','#000000','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',12,'0.00','2','1',1,'rgba(0, 0, 0, 0)','#0061c1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_2.add(title_3);
var title_4 = CreText('title_4',70,109,319,24,"Look at the pictures and complete the words.",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#009300','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_2.add(title_4);
var Text_12 = CreText('Text_12',86,359,42,26,"‹‹‹",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','0','0',1,'#000000','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page_2.add(Text_12);
var Text_13 = CreText('Text_13',483,355,42,26,"›››",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','0','0',1,'#000000','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_2.add(Text_13);
var m_diem = CreText('m_diem',177,172,202,106,"Complete",'#ffff00','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#000000','#ffff80','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(m_diem);
var Text_5 = CreText('Text_5',177,172,202,19,"Message",'#ffff00','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#000000','#ffff80','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_5);
var btclose = CreText('btclose',235,252,84,19,"Close",'#ffff00','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#000000','#ffff80','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
btclose.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitLesson1();
  return;
}
 );
Page_2.add(btclose);
var begin = CreText('begin',444,110,60,22,"check",'#ff0000','#ffffff','#ffffff','#ffffff','',12,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#00ff00','#ff0000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
begin.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckLesson1();
  return;
}
 );
Page_2.add(begin);
var msg1 = new Kinetic.Group({name:'msg1',x:0,y:0,width:206,height:110});
msg1.add(m_diem);
msg1.add(Text_5);
msg1.add(btclose);
Page_2.add(msg1);
var title_0 = CreText('title_0',1,1,138,50,"Unit 16",'#ffd700','#ffffff','#000000','#ffffff','',22,'Arial','Bold','center','middle',12,'0.00','0','3',0,'rgba(0, 0, 0, 0)','#ffd700','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(title_0);
stage.add(Page_2);

 var Page_3 = new Kinetic.Layer({name: 'Page_3',callback:'Page_3()'});
var Page_3_Backrounnd = CreText('Page_3_Backrounnd',0,0,600,690,'','#c4e1ff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#c4e1ff','0','0','0','','0','0','0','0',0,0,'');
Page_3.add(Page_3_Backrounnd);
var title_4 = CreText('title_4',16,95,563,576,"Choose the best response. Circle a, b or c.",'#ffffff','#ffffff','#004080','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',5,1.50);
title_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_3.add(title_4);
var name_3 = CreText('name_3',44,355,525,163,"Peter:\r\nTom:\r\nPeter:\r\nTom:\r\nPeter:\r\nTom:\r\nPeter:\r\nTom:\r\n",'#ffffe0','#ffffff','#0080ff','#ffffff','',12,'Arial','Normal','left','top',0,'0.00','0','0',1,'#ffd700','#ffffe0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',10,1.80);
Page_3.add(name_3);
var Text_3 = CreText('Text_3',31,330,516,24,"Read and choose the best answer. Circle a, b or c.",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_3.add(Text_3);
var Cau_hoi_0 = CreText('Cau_hoi_0',30,117,222,20,"1. What animal is that?",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Cau_hoi_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_3.add(Cau_hoi_0);
var a_0 = CreText('a_0',80,137,147,20,"a. It's a lion.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(a_0);
var b_0 = CreText('b_0',256,136,132,20,"b. That is a animal.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(b_0);
var c_0 = CreText('c_0',423,137,170,20,"c. I like that Lion.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(c_0);
var Cau_hoi_1 = CreText('Cau_hoi_1',30,161,220,20,"2. Is that a bear?",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Cau_hoi_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_3.add(Cau_hoi_1);
var a_1 = CreText('a_1',80,179,145,19,"a. Yes, it is.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(a_1);
var b_1 = CreText('b_1',256,179,135,19,"b. It's a bear.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(b_1);
var c_1 = CreText('c_1',423,180,159,19,"c. That is a bear.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(c_1);
var Cau_hoi_2 = CreText('Cau_hoi_2',30,205,224,20,"3. What animal is this?",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Cau_hoi_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_3.add(Cau_hoi_2);
var a_2 = CreText('a_2',80,222,180,22,"a. This is an elephant.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(a_2);
var b_2 = CreText('b_2',256,223,147,22,"b. It's an elephant.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(b_2);
var c_2 = CreText('c_2',423,224,154,22,"c. That is an elephant.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(c_2);
var Cau_hoi_3 = CreText('Cau_hoi_3',31,244,370,27,"4. Is this a giraffe?",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Cau_hoi_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_3.add(Cau_hoi_3);
var a_3 = CreText('a_3',80,265,100,22,"a. No, it isn't.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(a_3);
var b_3 = CreText('b_3',256,266,157,22,"b. It's a crocodile.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(b_3);
var c_3 = CreText('c_3',423,267,151,22,"c. It's a giraffe, dear.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(c_3);
var check_0 = CreText('check_0',53,138,19,19,"c",'#000000','#ffffff','#ffffff','#005555','',14,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#000000','#000000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(check_0);
var check_1 = CreText('check_1',53,180,19,19,"b",'#000000','#ffffff','#ffffff','#005555','',14,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#000000','#000000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(check_1);
var check_2 = CreText('check_2',53,226,19,19,"b",'#000000','#ffffff','#ffffff','#005555','',14,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#000000','#000000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(check_2);
var check_3 = CreText('check_3',53,269,19,19,"a",'#000000','#ffffff','#ffffff','#005555','',14,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#000000','#000000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(check_3);
var Cau_hoi_4 = CreText('Cau_hoi_4',31,519,467,27,"1. The animal is ___________ .",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Cau_hoi_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_3.add(Cau_hoi_4);
var a_4 = CreText('a_4',67,540,150,22,"a. a monkey.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(a_4);
var b_4 = CreText('b_4',225,540,147,22,"b. an ape.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(b_4);
var c_4 = CreText('c_4',427,540,95,22,"c. a tail.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(c_4);
var check_4 = CreText('check_4',58,539,19,19,"a",'#000000','#ffffff','#ffffff','#005555','',14,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#000000','#000000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(check_4);
var begin = CreText('begin',262,658,93,26,"check",'#804000','#ffffff','#ffffff','#ffffff','',12,'Arial','Bold','center','middle',0,'0.00','0','0',2,'#fffe99','#804000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
begin.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckKq();
  return;
}
 );
Page_3.add(begin);
var cau_hoi_5 = CreText('cau_hoi_5',31,563,411,22,"2. The animal hasn't got  _________.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau_hoi_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_3.add(cau_hoi_5);
var a_5 = CreText('a_5',67,580,147,22,"a. a tail",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(a_5);
var b_5 = CreText('b_5',225,581,152,22,"b. a nail.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(b_5);
var c_5 = CreText('c_5',427,579,137,22,"c. a mail.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(c_5);
var check_5 = CreText('check_5',61,582,19,19,"a",'#000000','#ffffff','#ffffff','#005555','',14,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#000000','#000000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(check_5);
var name_4 = CreText('name_4',104,355,377,163,"Is that a monkey?\r\nNo, it isn't.\r\nWhat animal is that?\r\nIt's a ape.\r\nAn ape?\r\nYes. It hasn't got a tail.\r\nOh, I see. Do you like apes?\r\nYes, I do. You know, apes are very smart.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',10,1.80);
Page_3.add(name_4);
var Text_9 = CreText('Text_9',512,343,25,25,"Unit 16",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE14.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("","name_4"),"EN");
  return;
}
 );
Page_3.add(Text_9);
var title_2 = CreText('title_2',-1,61,107,30,"Lesson 1",'#004080','#000000','#ffff00','#ffffff','',16,'Arial','Bold','center','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_3.add(title_2);
var title_3 = CreText('title_3',112,61,179,30,"2. Sentence Patterns",'#0061c1','#000000','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',12,'0.00','2','1',1,'rgba(0, 0, 0, 0)','#0061c1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_3.add(title_3);
var Text_1 = CreText('Text_1',-1,298,244,30,"3. Reading and writing.",'#0061c1','#000000','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',12,'0.00','2','1',1,'rgba(0, 0, 0, 0)','#0061c1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_3.add(Text_1);
var mess = CreText('mess',195,305,202,106,"Complete",'#004080','#ffffff','#ffff00','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#c0c0c0','#0080ff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(mess);
var Text_5 = CreText('Text_5',195,305,203,19,"gamechocon.com",'rgba(0,64,128,0.78)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#ffffff','rgba(0,64,128,0.78)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(Text_5);
var btclose = CreText('btclose',254,385,84,19,"Close",'#c0c0c0','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#e8e8e8','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
btclose.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitBaiHoc();
  return;
}
 );
Page_3.add(btclose);
var Text_12 = CreText('Text_12',26,655,42,26,"‹‹‹",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','0','0',1,'#000000','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page_3.add(Text_12);
var Text_13 = CreText('Text_13',522,656,42,26,"›››",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','0','0',1,'#000000','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_3.add(Text_13);
var msg1 = new Kinetic.Group({name:'msg1',x:0,y:0,width:207,height:110});
msg1.add(mess);
msg1.add(Text_5);
msg1.add(btclose);
Page_3.add(msg1);
var cau_hoi_6 = CreText('cau_hoi_6',33,602,411,22,"3. The animal is  _________.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau_hoi_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_3.add(cau_hoi_6);
var a_6 = CreText('a_6',67,621,147,22,"a. smart",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(a_6);
var b_6 = CreText('b_6',225,623,152,22,"b. funny.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(b_6);
var c_6 = CreText('c_6',427,618,137,22,"c. stupid.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChonTL();
  return;
}
 );
Page_3.add(c_6);
var check_6 = CreText('check_6',63,623,19,19,"a",'#000000','#ffffff','#ffffff','#005555','',14,'Arial','Normal','center','middle',2,'0.00','30','30',1,'#000000','#000000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(check_6);
var title_1 = CreText('title_1',110,1,492,50,"Zoo Animals",'#004080','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page_3.add(title_1);
var title_0 = CreText('title_0',1,1,138,50,"Unit 16",'#ffd700','#ffffff','#000000','#ffffff','',22,'Arial','Bold','center','middle',12,'0.00','0','3',0,'rgba(0, 0, 0, 0)','#ffd700','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_3.add(title_0);
stage.add(Page_3);

 var Trang_1 = new Kinetic.Layer({name: 'Trang_1',callback:'Trang_1()'});
var Trang_1_Backrounnd = CreText('Trang_1_Backrounnd',0,0,600,600,'','#c4e1ff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#c4e1ff','0','0','0','','0','0','0','0',0,0,'');
Trang_1.add(Trang_1_Backrounnd);
var title_2 = CreText('title_2',1,60,109,30,"Lesson 2",'#004080','#000000','#ffff00','#ffffff','',16,'Arial','Bold','center','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Trang_1.add(title_2);
var title_3 = CreText('title_3',111,60,196,30,"1. Reading and Writing.",'#0061c1','#000000','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',12,'0.00','2','1',1,'rgba(0, 0, 0, 0)','#0061c1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Trang_1.add(title_3);
var br = CreText('br',17,101,567,462,"",'#ffffff','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',3,'0.00','4','0',1,'#009300','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(br);
var Text_10 = CreText('Text_10',38,167,541,400,"Zebras are very                                      . They look like\r\n\r\n\r\nbut they have got tripes. They like\r\n\r\n\r\n\r\nglass or leaves. They run very fast. Zebras can stand on \r\n\r\n\r\n\r\nElephants are very strong and                                              They look slow\r\n\r\n\r\nbut they are very smart. They can dance, they can\r\n\r\n\r\nor play ball with other elephants. Elephants like eating\r\n\r\n\r\nand vegetable. Their                                       are very big and long.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_10);
var Image_2 = CreText('Image_2',144,145,61,56,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE3.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Trang_1.add(Image_2);
var Image_1 = CreText('Image_1',400,130,61,57,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE4.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Trang_1.add(Image_1);
var l21_0 = CreText('l21_0',204,156,81,21,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l21_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak21();
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(l21_0);
var l21_1 = CreText('l21_1',473,157,80,21,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l21_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak21();
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(l21_1);
var l21_2 = CreText('l21_2',345,204,80,24,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l21_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak21();
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(l21_2);
var l21_3 = CreText('l21_3',469,273,95,24,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l21_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak21();
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(l21_3);
var l21_4 = CreText('l21_4',315,337,99,24,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l21_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak21();
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(l21_4);
var Check2 = CreText('Check2',266,550,74,29,"√ Check",'#ff6820','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ff6820','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Check2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckLesson21();
  return;
}
 );
Trang_1.add(Check2);
var l21_5 = CreText('l21_5',436,389,96,24,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l21_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak21();
ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(l21_5);
var Image_5 = CreText('Image_5',404,234,63,67,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE6.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Trang_1.add(Image_5);
var Text_2 = CreText('Text_2',38,551,56,26,"‹‹‹",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','0','0',1,'#000000','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Trang_1.add(Text_2);
var Text_13 = CreText('Text_13',513,550,52,26,"›››",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','0','0',1,'#000000','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Trang_1.add(Text_13);
var title_4 = CreText('title_4',26,112,562,30,"Look at the pictures. Write the answers with no more than four words.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Bold','left','top',3,'0.00','4','0',1,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Trang_1.add(title_4);
var Image_7 = CreText('Image_7',264,190,69,56,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE5.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Trang_1.add(Image_7);
var Image_3 = CreText('Image_3',240,313,74,61,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE7.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Trang_1.add(Image_3);
var Image_6 = CreText('Image_6',367,363,56,60,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE8.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Trang_1.add(Image_6);
var l21_6 = CreText('l21_6',464,440,96,24,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l21_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak21();
ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(l21_6);
var m_diem = CreText('m_diem',171,273,296,117,"Complete x%",'#0080c0','#ccffcc','#ffffff','#ffffff','',24,'Arial','Normal','center','top',0,'0.00','0','0',1,'#000000','#004080','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',20,1.80);
Trang_1.add(m_diem);
var title = CreText('title',171,246,296,27,"http://gamechocon.com",'#004f9d','#ffffff','#ffff00','#ffffff','',14,'Arial','Bold','left','middle',0,'0.00','0','0',1,'#ffff00','#004f9d','0','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(title);
var bt_start = CreText('bt_start',269,356,111,29,"Start",'#0080c0','#ffffff','#ffd700','#ffd700','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','#004080','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_start.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitLesson21();
  return;
}
 );
Trang_1.add(bt_start);
var msg1 = new Kinetic.Group({name:'msg1',x:0,y:0,width:300,height:148});
msg1.add(m_diem);
msg1.add(title);
msg1.add(bt_start);
Trang_1.add(msg1);
var Image_4 = CreText('Image_4',395,421,61,54,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE9.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Trang_1.add(Image_4);
var Image_8 = CreText('Image_8',176,462,61,52,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE10.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Trang_1.add(Image_8);
var l21_7 = CreText('l21_7',243,492,79,24,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
l21_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak21();
ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(l21_7);
var Text_1 = CreText('Text_1',33,133,106,25,"ZEBRAS",'rgba(0, 0, 0, 0)','#ffffff','#0080c0','#ffffff','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_1);
var Text_3 = CreText('Text_3',33,310,145,25,"ELEPHANTS",'rgba(0, 0, 0, 0)','#ffffff','#0080c0','#ffffff','',16,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_3);
var title_1 = CreText('title_1',109,0,492,50,"Zoo Animals",'#004080','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Trang_1.add(title_1);
var title_0 = CreText('title_0',0,0,138,50,"Unit 16",'#ffd700','#ffffff','#000000','#ffffff','',22,'Arial','Bold','center','middle',12,'0.00','0','3',0,'rgba(0, 0, 0, 0)','#ffd700','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(title_0);
stage.add(Trang_1);

 var Page_5 = new Kinetic.Layer({name: 'Page_5',callback:'Page_5()'});
var Page_5_Backrounnd = CreText('Page_5_Backrounnd',0,0,600,530,'','#c4e1ff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#c4e1ff','0','0','0','','0','0','0','0',0,0,'');
Page_5.add(Page_5_Backrounnd);
var ls22_3 = CreText('ls22_3',130,218,361,21,"4.         monkey.                      lucky.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls22_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_3);
var ls22_2 = CreText('ls22_2',130,188,403,21,"3.         likes.                           nice.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls22_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_2);
var title_4 = CreText('title_4',32,88,386,31,"1. Click to listen and tick true.",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',14,'Arial','Bold','left','middle',3,'0.00','13','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_5.add(title_4);
var ls22_0 = CreText('ls22_0',130,128,330,21,"1.         look.                           hook.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls22_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_0);
var c0_0 = CreText('c0_0',153,129,14,14,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c0_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c0_0);
var ls22_1 = CreText('ls22_1',130,158,397,21,"2.         led.                               net.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls22_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_1);
var ls22_4 = CreText('ls22_4',130,247,350,21,"5.         honey.                          funny.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls22_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_4);
var c0_1 = CreText('c0_1',300,129,14,14,"x",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c0_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c0_1);
var c1_0 = CreText('c1_0',153,160,14,14,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c1_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c1_0);
var c1_1 = CreText('c1_1',300,160,14,14,"x",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c1_1);
var c2_0 = CreText('c2_0',153,191,14,14,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c2_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c2_0);
var c2_1 = CreText('c2_1',300,191,14,14,"x",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c2_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c2_1);
var c3_0 = CreText('c3_0',153,219,14,14,"x",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c3_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c3_0);
var c3_1 = CreText('c3_1',300,219,14,14,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c3_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c3_1);
var c4_0 = CreText('c4_0',153,249,14,14,"x",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c4_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c4_0);
var c4_1 = CreText('c4_1',300,249,14,14,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c4_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c4_1);
var ls22_5 = CreText('ls22_5',130,274,351,21,"6.        good-looking.               hook knitting.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls22_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_5);
var c5_0 = CreText('c5_0',153,276,14,14,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c5_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c5_0);
var c5_1 = CreText('c5_1',300,275,14,14,"x",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c5_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c5_1);
var ls22_6 = CreText('ls22_6',130,296,351,21,"7.        play a led.                    make a net.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls22_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_6);
var c6_0 = CreText('c6_0',153,301,14,14,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c6_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c6_0);
var c6_1 = CreText('c6_1',300,301,14,14,"x",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c6_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c6_1);
var ls22_7 = CreText('ls22_7',130,330,351,57,"8.           She likes giraffes.\r\n              Her giraffe is nice.\r\n              Giraffes like nice leaves.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls22_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_7);
var c7_2 = CreText('c7_2',153,362,14,14,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c7_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c7_2);
var c7_1 = CreText('c7_1',153,344,14,14,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c7_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c7_1);
var c7_0 = CreText('c7_0',153,326,14,14,"x",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c7_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c7_0);
var ls22_8 = CreText('ls22_8',130,388,351,56,"9.          Monkeys are funny.\r\n             These monkeys are lucky.\r\n             These funny monkeys are happy.\r\n",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls22_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_8);
var c8_2 = CreText('c8_2',153,419,14,14,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c8_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c8_2);
var c8_1 = CreText('c8_1',153,401,14,14,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c8_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c8_1);
var c8_0 = CreText('c8_0',153,383,14,14,"x",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c8_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c8_0);
var ls22_9 = CreText('ls22_9',130,448,351,56,"10.         Does this bear like honey.\r\n              Is this bear funny?\r\n              Is this funny bear lucky?.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls22_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ListenL22();
  return;
}
 );
Page_5.add(ls22_9);
var c9_2 = CreText('c9_2',153,478,14,14,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c9_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c9_2);
var c9_1 = CreText('c9_1',153,461,14,14,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c9_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c9_1);
var c9_0 = CreText('c9_0',153,444,14,14,"",'#ffffff','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c9_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ClickL22();
  return;
}
 );
Page_5.add(c9_0);
var Check2 = CreText('Check2',436,91,70,23,"√ Check",'#ff6820','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#00ff00','#ff6820','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Check2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckLesson22();
  return;
}
 );
Page_5.add(Check2);
var title_2 = CreText('title_2',-2,55,110,30,"Lesson 2",'#004080','#000000','#ffff00','#ffffff','',16,'Arial','Bold','center','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_5.add(title_2);
var title_3 = CreText('title_3',109,55,117,30,"2. Listening",'#0061c1','#000000','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',12,'0.00','2','1',1,'rgba(0, 0, 0, 0)','#0061c1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_5.add(title_3);
var m_diem = CreText('m_diem',142,254,296,117,"Complete x%",'#0080c0','#ccffcc','#ffffff','#ffffff','',24,'Arial','Normal','center','top',0,'0.00','0','0',1,'#000000','#004080','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',20,1.80);
Page_5.add(m_diem);
var title = CreText('title',142,227,296,27,"http://gamechocon.com",'#004f9d','#ffffff','#ffff00','#ffffff','',14,'Arial','Bold','left','middle',0,'0.00','0','0',1,'#ffff00','#004f9d','0','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_5.add(title);
var bt_start = CreText('bt_start',240,337,111,29,"Start",'#0080c0','#ffffff','#ffd700','#ffd700','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','#004080','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_start.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitLesson22();
  return;
}
 );
Page_5.add(bt_start);
var Text_13 = CreText('Text_13',537,483,52,26,"›››",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','0','0',1,'#000000','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_5.add(Text_13);
var Text_2 = CreText('Text_2',11,480,56,26,"‹‹‹",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','0','0',1,'#000000','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page_5.add(Text_2);
var msg1 = new Kinetic.Group({name:'msg1',x:0,y:0,width:300,height:148});
msg1.add(m_diem);
msg1.add(title);
msg1.add(bt_start);
Page_5.add(msg1);
var title_1 = CreText('title_1',110,1,492,50,"Zoo Animals",'#004080','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page_5.add(title_1);
var title_0 = CreText('title_0',1,1,138,50,"Unit 16",'#ffd700','#ffffff','#000000','#ffffff','',22,'Arial','Bold','center','middle',12,'0.00','0','3',0,'rgba(0, 0, 0, 0)','#ffd700','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_5.add(title_0);
stage.add(Page_5);

 var Page_6 = new Kinetic.Layer({name: 'Page_6',callback:'Page_6()'});
var Page_6_Backrounnd = CreText('Page_6_Backrounnd',0,0,600,600,'','#c4e1ff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#c4e1ff','0','0','0','','0','0','0','0',0,0,'');
Page_6.add(Page_6_Backrounnd);
var Text_7 = CreText('Text_7',34,97,542,483,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_6.add(Text_7);
var Text_6 = CreText('Text_6',55,138,512,250,"FAVOURITE ANIMALS",'#c0ffff','#ffffff','#000000','#ffffff','',20,'Arial','Bold','center','top',0,'0.00','0','0',1,'#000000','#c0ffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',5,1.50);
Page_6.add(Text_6);
var cau31_0 = CreText('cau31_0',37,107,453,19,"1. Listen and fill in each blank with no more than three words.\r\n",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Bold','left','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#cee7ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',1,1.50);
Page_6.add(cau31_0);
var cau31_1 = CreText('cau31_1',57,183,128,77,"",'#0080ff','#ffffff','#000000','#fffe99','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#0080ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau31_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakL31();
  return;
}
 );
Page_6.add(cau31_1);
var cau31_2 = CreText('cau31_2',188,183,187,35,"Tigers",'#004080','#ffffff','#ffffff','#fffe99','',14,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#000000','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau31_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakL31();
  return;
}
 );
Page_6.add(cau31_2);
var cau31_3 = CreText('cau31_3',377,183,187,35,"Giraffes",'#004080','#ffffff','#ffffff','#fffe99','',14,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#000000','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau31_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakL31();
  return;
}
 );
Page_6.add(cau31_3);
var cau31_4 = CreText('cau31_4',57,262,128,124,"Nam\r\n\r\nTom\r\n\r\nMary",'#0080ff','#ffffff','#ffffff','#fffe99','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#0080ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
cau31_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakL31();
  return;
}
 );
Page_6.add(cau31_4);
var title_2 = CreText('title_2',-1,62,110,30,"Lesson 3",'#004080','#000000','#ffff00','#ffffff','',16,'Arial','Bold','center','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_6.add(title_2);
var title_3 = CreText('title_3',108,62,126,30,"1. Listening",'#0061c1','#000000','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',12,'0.00','2','1',1,'rgba(0, 0, 0, 0)','#0061c1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_6.add(title_3);
var ls31_0 = CreText('ls31_0',187,262,93,40,"likes",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls31_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
 ShowKeyNum(name_keyboard);
}
 );
Page_6.add(ls31_0);
var ls31_1 = CreText('ls31_1',187,304,93,40,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls31_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
 ShowKeyNum(name_keyboard);
}
 );
Page_6.add(ls31_1);
var ls31_2 = CreText('ls31_2',187,346,93,40,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls31_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
 ShowKeyNum(name_keyboard);
}
 );
Page_6.add(ls31_2);
var ls31_3 = CreText('ls31_3',282,262,93,40,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls31_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
 ShowKeyNum(name_keyboard);
}
 );
Page_6.add(ls31_3);
var ls31_4 = CreText('ls31_4',282,304,93,40,"doesn't like",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls31_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
 ShowKeyNum(name_keyboard);
}
 );
Page_6.add(ls31_4);
var ls31_5 = CreText('ls31_5',282,346,93,40,"doesn't like",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls31_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
 ShowKeyNum(name_keyboard);
}
 );
Page_6.add(ls31_5);
var Text_1 = CreText('Text_1',37,397,453,24,"2. Listen again and write the answers.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Bold','left','bottom',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#cee7ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',1,1.50);
Page_6.add(Text_1);
var Text_2 = CreText('Text_2',111,431,348,159,"1. Nam                           tigers because\r\n\r\n2. Tom                           tigers because\r\n\r\n3. Mary                          giraffes because\r\n\r\n4. Nam                          giraffes because\r\n\r\n",'rgba(0, 0, 0, 0)','#ffffff','#000000','#fffe99','',14,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#cee7ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_6.add(Text_2);
var ls31_6 = CreText('ls31_6',165,427,96,20,"likes",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls31_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
 ShowKeyNum(name_keyboard);
}
 );
Page_6.add(ls31_6);
var ls31_7 = CreText('ls31_7',374,426,172,20,"they are very strong",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls31_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
 ShowKeyNum(name_keyboard);
}
 );
Page_6.add(ls31_7);
var ls31_8 = CreText('ls31_8',165,461,96,20,"doesn't like",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls31_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
 ShowKeyNum(name_keyboard);
}
 );
Page_6.add(ls31_8);
var Check2 = CreText('Check2',262,566,92,26,"√ Check",'#804000','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#00ff00','#804000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Check2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckLesson31();
  return;
}
 );
Page_6.add(Check2);
var Text_12 = CreText('Text_12',51,567,42,26,"‹‹‹",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','0','0',1,'#000000','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page_6.add(Text_12);
var Text_13 = CreText('Text_13',509,566,42,26,"›››",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','0','0',1,'#000000','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Page_6.add(Text_13);
var ls31_9 = CreText('ls31_9',374,458,172,20,"they are scary",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls31_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
 ShowKeyNum(name_keyboard);
}
 );
Page_6.add(ls31_9);
var ls31_10 = CreText('ls31_10',377,262,93,40,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls31_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
 ShowKeyNum(name_keyboard);
}
 );
Page_6.add(ls31_10);
var ls31_11 = CreText('ls31_11',377,304,93,40,"likes",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls31_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
 ShowKeyNum(name_keyboard);
}
 );
Page_6.add(ls31_11);
var ls31_12 = CreText('ls31_12',377,346,93,40,"likes",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls31_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
 ShowKeyNum(name_keyboard);
}
 );
Page_6.add(ls31_12);
var ls31_13 = CreText('ls31_13',472,262,93,40,"doesn't like",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls31_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
 ShowKeyNum(name_keyboard);
}
 );
Page_6.add(ls31_13);
var ls31_14 = CreText('ls31_14',472,304,93,40,"doesn't like",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls31_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
 ShowKeyNum(name_keyboard);
}
 );
Page_6.add(ls31_14);
var ls31_15 = CreText('ls31_15',472,346,93,40,"doesn't like",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls31_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
 ShowKeyNum(name_keyboard);
}
 );
Page_6.add(ls31_15);
var Text_14 = CreText('Text_14',187,220,93,40,"Likes",'#0080c0','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
 ShowKeyNum(name_keyboard);
}
 );
Page_6.add(Text_14);
var Text_16 = CreText('Text_16',282,220,93,40,"Likes",'#0080c0','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
 ShowKeyNum(name_keyboard);
}
 );
Page_6.add(Text_16);
var Text_17 = CreText('Text_17',377,220,93,40,"Likes",'#0080c0','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
 ShowKeyNum(name_keyboard);
}
 );
Page_6.add(Text_17);
var Text_18 = CreText('Text_18',472,220,93,40,"Likes",'#0080c0','#ffffff','#ffffff','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
 ShowKeyNum(name_keyboard);
}
 );
Page_6.add(Text_18);
var ls31_16 = CreText('ls31_16',165,490,96,20,"likes",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls31_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
 ShowKeyNum(name_keyboard);
}
 );
Page_6.add(ls31_16);
var ls31_17 = CreText('ls31_17',165,522,96,20,"doesn't like",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls31_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
 ShowKeyNum(name_keyboard);
}
 );
Page_6.add(ls31_17);
var ls31_18 = CreText('ls31_18',374,490,172,20,"they are pretty",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls31_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
 ShowKeyNum(name_keyboard);
}
 );
Page_6.add(ls31_18);
var ls31_19 = CreText('ls31_19',374,524,172,20,"they are not strong",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls31_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak31();
 ShowKeyNum(name_keyboard);
}
 );
Page_6.add(ls31_19);
var m_diem = CreText('m_diem',232,289,202,106,"Complete",'#004080','#ffffff','#ffff00','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',2,'#c0c0c0','#0080ff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_6.add(m_diem);
var Text_3 = CreText('Text_3',231,289,203,19,"gamechocon.com",'rgba(0,64,128,0.78)','#ffffff','#ffffff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#ffffff','rgba(0,64,128,0.78)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_6.add(Text_3);
var btclose = CreText('btclose',290,369,84,19,"Close",'#c0c0c0','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#000000','#e8e8e8','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
btclose.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitLesson22();
  return;
}
 );
Page_6.add(btclose);
var msg1 = new Kinetic.Group({name:'msg1',x:0,y:0,width:207,height:110});
msg1.add(m_diem);
msg1.add(Text_3);
msg1.add(btclose);
Page_6.add(msg1);
var Text_9 = CreText('Text_9',511,87,25,25,"1. Nam likes tigers because they are very strong.\r\n2. Tom doesn't like tigers because they are scary.\r\n3. Mary likes giraffes because they are scary.\r\n4. Nam doesn't like giraffes because they are not strong.\r\n\r\n\r\n",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE14.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_6.add(Text_9);
var title_1 = CreText('title_1',109,0,492,50,"Zoo Animals",'#004080','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page_6.add(title_1);
var title_0 = CreText('title_0',0,0,138,50,"Unit 16",'#ffd700','#ffffff','#000000','#ffffff','',22,'Arial','Bold','center','middle',12,'0.00','0','3',0,'rgba(0, 0, 0, 0)','#ffd700','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_6.add(title_0);
stage.add(Page_6);

 var Page_7 = new Kinetic.Layer({name: 'Page_7',callback:'Page_7()'});
var Page_7_Backrounnd = CreText('Page_7_Backrounnd',0,0,600,690,'','#c0ffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#c0ffff','0','0','0','','0','0','0','0',0,0,'');
Page_7.add(Page_7_Backrounnd);
var Text_7 = CreText('Text_7',14,107,566,557,"",'#ffffff','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_7.add(Text_7);
var title_4 = CreText('title_4',34,106,346,24,"1. Lock at the pictures. Listen and say your answers.",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',14,'Arial','Normal','left','middle',3,'0.00','13','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_7.add(title_4);
var Image_1 = CreText('Image_1',87,137,382,284,'','rgba(0, 0, 0, 0)','','','','ID_IMAGE11.PNG',0,'','','','',0,'0.00','0','0',1,'rgba(0, 0, 0, 0)','','2','2','','0','0','4','0',0,0, '#808080');
Page_7.add(Image_1);
var Text_1 = CreText('Text_1',48,422,346,25,"2. Listen again  and write your answers.",'rgba(0, 0, 0, 0)','#ffffff','#00008b','#ffffff','',14,'Arial','Normal','left','middle',3,'0.00','13','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_7.add(Text_1);
var Text_4 = CreText('Text_4',70,440,29,138,"1.\r\n\r\n2.\r\n\r\n3.\r\n",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_7.add(Text_4);
var Text_5 = CreText('Text_5',54,546,346,25,"3. Talk about your favourite animals.",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',14,'Arial','Normal','left','middle',3,'0.00','13','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_7.add(Text_5);
var Text_6 = CreText('Text_6',85,573,330,122,"- Do you like tigers? Why?\r\n- Do you like lions? Why?\r\n- Do you like monkeys? Why?\r\n- What are your favourite zoo animal?",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',12,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_7.add(Text_6);
var ls32_0 = CreText('ls32_0',105,458,292,24,"Daisy is taller.",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls32_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak32();
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_7.add(ls32_0);
var ls32_1 = CreText('ls32_1',105,487,292,24,"Marry is slimmer.",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls32_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak32();
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_7.add(ls32_1);
var ls32_2 = CreText('ls32_2',105,516,292,24,"Daisy is stronger",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',12,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#000000','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
ls32_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak32();
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_7.add(ls32_2);
var title_2 = CreText('title_2',0,68,110,30,"Lesson 3",'#004080','#000000','#ffff00','#ffffff','',16,'Arial','Bold','center','middle',12,'0.00','0','1',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_7.add(title_2);
var title_3 = CreText('title_3',111,68,109,30,"2. Speaking",'#0061c1','#000000','#ffffff','#ffffff','',14,'Arial','Bold','center','middle',12,'0.00','2','1',1,'rgba(0, 0, 0, 0)','#0061c1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_7.add(title_3);
var Check2 = CreText('Check2',510,69,87,30,"√ Check",'#ff8000','#ffffff','#ffffff','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#00008b','#ff8000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Check2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckLesson32();
  return;
}
 );
Page_7.add(Check2);
var Text_9 = CreText('Text_9',276,171,25,25,"1. What animal is that?",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE14.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_7.add(Text_9);
var Text_3 = CreText('Text_3',282,264,25,25,"2. What animal is that?",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE14.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_7.add(Text_3);
var Text_8 = CreText('Text_8',285,361,25,25,"3. What animal is that?",'#ffffff','#ffffff','rgba(0, 0, 0, 0)','#ffffff','ID_IMAGE14.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
Speak(GetText("",""),"EN");
  return;
}
 );
Page_7.add(Text_8);
var Text_12 = CreText('Text_12',34,653,42,26,"‹‹‹",'#0080c0','#ffffff','#ffffff','#ffffff','',16,'Arial','Bold','center','middle',3,'0.00','0','0',1,'#000000','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page_7.add(Text_12);
var m_diem = CreText('m_diem',161,290,296,117,"Complete x%",'#0080c0','#ccffcc','#ffffff','#ffffff','',24,'Arial','Normal','center','top',0,'0.00','0','0',1,'#000000','#004080','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',20,1.80);
Page_7.add(m_diem);
var title = CreText('title',161,263,296,27,"http://gamechocon.com",'#004f9d','#ffffff','#ffff00','#ffffff','',14,'Arial','Bold','left','middle',0,'0.00','0','0',1,'#ffff00','#004f9d','0','1','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_7.add(title);
var bt_start = CreText('bt_start',259,373,111,29,"Start",'#0080c0','#ffffff','#ffd700','#ffd700','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#ffffff','#004080','4','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
bt_start.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitLesson32();
  return;
}
 );
Page_7.add(bt_start);
var msg1 = new Kinetic.Group({name:'msg1',x:0,y:0,width:371,height:148});
msg1.add(m_diem);
msg1.add(bt_start);
msg1.add(title);
Page_7.add(msg1);
var title_1 = CreText('title_1',109,1,492,50,"Zoo Animals",'#004080','#ffffff','#ffffff','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#004080','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
title_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
DocTieuDe();
  return;
}
 );
Page_7.add(title_1);
var title_0 = CreText('title_0',0,1,138,50,"Unit 16",'#ffd700','#ffffff','#000000','#ffffff','',22,'Arial','Bold','center','middle',12,'0.00','0','3',0,'rgba(0, 0, 0, 0)','#ffd700','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_7.add(title_0);
stage.add(Page_7);

 var PageKey = new Kinetic.Layer({name: 'PageKey'});
var PageKey_Backrounnd = CreText('PageKey_Backrounnd',0,0,450,150,'','#c4e1ff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#c4e1ff','0','0','0','','0','0','0','0',0,0,'');
PageKey.add(PageKey_Backrounnd);
var bg_key = CreText('bg_key',0,1,450,143,"0",'#666666','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#000000','#666666','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
PageKey.add(bg_key);
var char_0 = CreText('char_0',3,6,35,29,"Q",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#666666','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_0);
var char_1 = CreText('char_1',43,6,35,29,"W",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_1);
var char_4 = CreText('char_4',163,6,35,29,"T",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_4);
var char_7 = CreText('char_7',283,6,35,29,"I",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_7);
var char_2 = CreText('char_2',83,6,35,29,"E",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_2);
var char_5 = CreText('char_5',203,6,35,29,"Y",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_5);
var char_8 = CreText('char_8',323,6,35,29,"O",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_8);
var char_9 = CreText('char_9',363,6,35,29,"P",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_9);
var char_6 = CreText('char_6',243,6,35,29,"U",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_6);
var char_3 = CreText('char_3',123,6,35,29,"R",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_3);
var char_35 = CreText('char_35',403,6,43,29,"Esc",'#ffc0cb','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffe4e1','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_35.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetText("",objectShowKey,keyOldValue);
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
PageKey.add(char_35);
var char_10 = CreText('char_10',16,41,35,29,"A",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_10);
var char_11 = CreText('char_11',55,41,35,29,"S",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_11);
var char_14 = CreText('char_14',172,41,35,29,"G",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_14);
var char_17 = CreText('char_17',289,41,35,29,"K",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_17);
var char_12 = CreText('char_12',94,41,35,29,"D",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_12);
var char_15 = CreText('char_15',211,41,35,29,"H",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_15);
var char_18 = CreText('char_18',328,41,35,29,"L",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_18);
var char_16 = CreText('char_16',250,41,35,29,"J",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_16);
var char_13 = CreText('char_13',133,41,35,29,"F",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_13);
var char_32 = CreText('char_32',4,76,39,29,"Shift",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_32.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LowerKey();
  return;
}
 );
PageKey.add(char_32);
var char_19 = CreText('char_19',47,76,35,29,"Z",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_19);
var char_22 = CreText('char_22',164,76,35,29,"V",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_22.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_22);
var char_25 = CreText('char_25',281,76,35,29,"M",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_25.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_25);
var char_20 = CreText('char_20',86,76,35,29,"X",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_20.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_20);
var char_23 = CreText('char_23',203,76,35,29,"B",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_23.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_23);
var char_26 = CreText('char_26',320,76,35,29,",",'#eeeeee','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_26.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_26);
var char_27 = CreText('char_27',359,76,35,29,".",'#eeeeee','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_27.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_27);
var char_24 = CreText('char_24',242,76,35,29,"N",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_24.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_24);
var char_21 = CreText('char_21',125,76,35,29,"C",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_21.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_21);
var char_34 = CreText('char_34',69,110,212,29," ",'#eeeeee','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_34.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_34);
var char_28 = CreText('char_28',400,76,42,29,"!",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_28.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_28);
var char_29 = CreText('char_29',289,110,35,29,"?",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_29.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_29);
var char_33 = CreText('char_33',5,110,56,29,".?123",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_33.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangKey();
  return;
}
 );
PageKey.add(char_33);
var char_36 = CreText('char_36',380,110,66,29,"Enter",'#98fb98','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#e0fee0','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_36.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
PageKey.add(char_36);
var char_30 = CreText('char_30',369,41,35,29,";",'#eeeeee','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_30.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_30);
var char_31 = CreText('char_31',332,109,35,29,":",'#eeeeee','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_31.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_31);
var char_37 = CreText('char_37',410,41,36,29,"←",'#eeeeee','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_37.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
      keyNewValue = GetText("",objectShowKey);
   var tkeyNew = leftStr(keyNewValue ,Length(keyNewValue)-1);
	SetText("",objectShowKey,tkeyNew);
	InvalidateObj("",objectShowKey);
  return;
}

 );
PageKey.add(char_37);
var Group_key = new Kinetic.Group({name:'Group_key',x:0,y:0,width:454,height:147});
Group_key.add(bg_key);
Group_key.add(char_0);
Group_key.add(char_1);
Group_key.add(char_4);
Group_key.add(char_7);
Group_key.add(char_2);
Group_key.add(char_5);
Group_key.add(char_8);
Group_key.add(char_9);
Group_key.add(char_6);
Group_key.add(char_3);
Group_key.add(char_35);
Group_key.add(char_10);
Group_key.add(char_11);
Group_key.add(char_14);
Group_key.add(char_17);
Group_key.add(char_12);
Group_key.add(char_15);
Group_key.add(char_18);
Group_key.add(char_16);
Group_key.add(char_13);
Group_key.add(char_32);
Group_key.add(char_19);
Group_key.add(char_22);
Group_key.add(char_25);
Group_key.add(char_20);
Group_key.add(char_23);
Group_key.add(char_26);
Group_key.add(char_27);
Group_key.add(char_24);
Group_key.add(char_21);
Group_key.add(char_34);
Group_key.add(char_28);
Group_key.add(char_29);
Group_key.add(char_33);
Group_key.add(char_36);
Group_key.add(char_30);
Group_key.add(char_31);
Group_key.add(char_37);
PageKey.add(Group_key);
stage.add(PageKey);
InitLacVietScript();
};
