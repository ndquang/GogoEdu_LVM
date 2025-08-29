folder_Resource ='data/Unit_8';
var g_midiVol=32767;
var Play=0 ;
var b_showgroup=0;
var keyOldValue="";
var keyNewValue="";
var objectShowKey="";
var name_keyboard="Group_1";
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
	SetShowObject("","Group_1",0);
	SetMoveView("","Group_1",1);
}
function   GetKeyBoNumber(){
	if(objectShowKey=="")
		return;
	var charxxx=  GetText("","");
	keyNewValue = "_"+ GetText("",objectShowKey) + GetText("","");
	keyNewValue = subString(keyNewValue,1,length(keyNewValue)-1);
	SetText("",objectShowKey,keyNewValue);
	InvalidateObj("",objectShowKey);
}
function   ShowKeyNum( namekey){
AddObjToCurentPage("Group_1");
var x_to= GetLeft("","")+ GetWidth("","")/2- GetWidth("",namekey)/2;
var y_to= GetTop("","")+ GetHeight("","");
if (GetHeight("", namekey) + y_to > 480)
    y_to= GetTop("","")- GetHeight("",namekey);
if (x_to<0) x_to=1;
if (x_to+ GetWidth("",namekey)>640) x_to=640-GetWidth("",namekey);
MoveObjectTo("",namekey,x_to,y_to);
SetShowObject("",namekey,1);
InvalidateObj("",namekey);
keyOldValue= GetText("","");
objectShowKey= GetName("");
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

function InitA1()
{
	SetMoveView("","Text_b",1);
	SetMoveView("","Text_h",1);
 	SetCursor("","Text_b","pointer");
      SetCursor("","Text_h","pointer");
	SetText("","a1_0");
	SetText("","a1_1");
}
function CheckA1( obj){
if(RectInRect("",obj,""))
{
  var tt = GetText("",obj);
  tt = replaceStr(tt,"_",GetText("",""));
  SetText("",obj,tt);
  SpeakEN("","",tt);
}
MoveObjectTo("","",-1,-1);
}
function  RemoveDot( texkq)
{
  if(texkq=="") return "";
 texkq= replaceStr(texkq,".","");
		texkq= replaceStr(texkq,",","");
		texkq= replaceStr(texkq,"?","");
		texkq= replaceStr(texkq,"'","");
		texkq= toLowerCase(texkq);
		texkq=trimStr(texkq);
return texkq;
}
var kq1=["BK","RR","PL","PS","RS"];
var kq1speak=["BOOK","RUBBER","PENCIL","PENS","RULERS"];
var kqa1="";
function InitA2()
{
SetPaint("","obj_paint",1);
PaintType("","obj_paint",5);
PaintColor("","obj_paint","#00ff00");
SetCursor("","obj_paint","pointer");
PaintWidth("","obj_paint",3);
for(var i=0;i<5;i++)
	SetShowObject("","a2word_"+i,0);
SetColor("","obj_paint",0,0,0,"ID_IMAGE9");
InvalidateObj("","");
}

function StartA2()
{
var i=0;
	var b_e= false;
	while(i<8 && b_e== false)
	{
		if(PosInObj("a2_"+i))
		{
			b_e= true;
			kqa1= GetText("","a2_"+i);
		}
		i=i+1;
	}

}
function EndA2()
{
	var i=0;
	var b_e= false;
	while(i<8 && b_e== false)
	{
		if(PosInObj("a2_"+i))
		{
			kqa1=kqa1+ GetText("","a2_"+i);
			for(var k=0;k<5;k++)
			if(kqa1==kq1[k])
			{
			SaveObject("","obj_paint");
			SpeakEN("","", kq1speak[k]);
			SetShowObject("","a2word_"+k,1);
			Delay("InvalidateObj('','');",500);
			return;
			}
			b_e== true;
		}
		i++;
	}
	InvalidateObj("","");
}
//
var akq3=["","","",""];
function InitA3()
{	
	for(var i=0; i<4;i++)
	{
	if(akq3[i]=="")
	 akq3[i]= GetText("","a3_"+i);
	SetText("","a3_"+i,"");
	SetFontColor("","a3_"+i,"#000000");
	SetCursor("","a3_"+i,"pointer");
	}
      InvalidateObj("","");
}

function CheckA3(){
	for(var i=0; i<4;i++)
	{
		if(RemoveDot(GetText("","a3_"+i)) ==  RemoveDot(akq3[i]))
		{
		SetText("","a3_"+i,akq3[i]);
		SetFontColor("","a3_"+i,"#00ff00");
		}
		else SetFontColor("","a3_"+i,"#ff0000");
	}
     InvalidateObj("","");
}
var asp3=["This is my book.","That is my pencil","These are my pens","Those are my rulers."];
function A3Click(){
	var name= GetName("");
	var i= rightStr(name,1);
	SpeakEN("","",asp3[i]);
}

function InitB1(){
for(var i=0; i<4;i++){
	SetMoveView("","b11_"+i,1);
      SetCursor("","b11_"+i,"pointer");
	SetShowObject("","b11_"+i,1);
	SetText("","b10_"+i);
	}

}
function CheckB1( objcheck)
{
if(RectInRect("",objcheck,""))
{
	var tt= GetText("",objcheck)+" "+ GetText("","");
	SpeakEN("","",tt);
	SetText("",objcheck,tt);
	SetShowObject("","",0);
}
  MoveObjectTo("","",-1,-1);
}
function InitB2(){
for(var i=0; i<4;i++){
	SetMoveView("","b21_"+i,1);
      SetCursor("","b21_"+i,"pointer");
	SetShowObject("","b21_"+i,1);
	SetText("","b2_"+i);
	}
InvalidateObj("","");
}
function CheckB2( objcheck)
{
if(RectInRect("",objcheck,""))
{
	var tt= GetText("",objcheck);
	tt= replaceStr(tt,"...",GetText("",""));
	SpeakEN("","",tt);
	SetText("",objcheck,tt);
	SetShowObject("","",0);
}
  MoveObjectTo("","",-1,-1);
}


var kqb3=["This is my ruler.","Is that your pencil case?","These are my notebooks","Are those your pens?"];
var countword=[4,4,4,4];
var countclick=[0,0,0,0];
function InitB3(){
for(var i=0; i<4;i++){
	for(var j= 0; j< countword[i];j++)
	{
      SetCursor("","b3"+i+"_"+j,"pointer");
	SetShowObject("","b3"+i+"_"+j,1);
	}
}
for(var j=0; j<4;j++){
		SetText("","kqb3_"+j);
		SetFontColor("","kqb3_"+j,"#0066FF");	
		countclick[j]=0;
	}
InvalidateObj("","");
}
function  EndFalse( obj)
{
	SetText("",obj,"");
	SetFontColor("",obj,"#0066FF");
	InvalidateObj("","");
}

function CheckB3( objcheck)
{
	var tt= GetText("",objcheck)+" "+ trimStr(replaceStr(GetText("","")," /",""));
	SetText("",objcheck,tt);
	SetShowObject("","",0);
	var xxx = rightStr(objcheck,1);
      countclick[xxx]=countclick[xxx]+1;
	if(countclick[xxx]==countword[xxx])
	{
		var texkq= replaceStr(kqb3[xxx],".","");
		texkq= replaceStr(texkq,",","");
		texkq= replaceStr(texkq,"?","");
		texkq= toLowerCase(texkq);
		if(texkq==trimStr(RemoveDot(GetText("",objcheck))))
		  {
		  SetText("",objcheck,kqb3[xxx]);
		  SpeakEN("","",kqb3[xxx]);
		  SetFontColor("",objcheck,"#008000");
		  }
		else{
			SetFontColor("",objcheck,"#FF0000");
			Delay("EndFalse('"+objcheck+"');",1000);
			for(var i=0 ;i < countword[xxx];i++)
			   SetShowObject("","b3"+xxx+"_"+i,1);
			countclick[xxx]=0;
		  }
	}
	InvalidateObj("","");
}

function InitD1()
{
	
	for(var i=0; i<5;i++){
	SetMoveView("","d1w_"+i,1);
	SetCursor("","d1w_"+i,"pointer");
	SetShowObject("","d1w_"+i,1);
	MoveObjectTo("","d1w_"+i,-1,-1);
	SetFontColor("","d1_"+i,-1);
     }
     InvalidateObj("","");
}

var d1speak=["This is  my classroom. It is big. This is my school bag.", "It is new. That is my pencil sharpener.","These are my pencils, they are short.","Those are my books","They are new."];
function CheckD1()
{
	var i=0;
	var b_e= false;
	while(i<5 && b_e== false)
	{
		if(PosInObj("d1_"+i))
		{ 
              	if(toLowerCase(GetText("",""))== toLowerCase(GetText("","d1_"+i))){
			SetFontColor("","d1_"+i,"#0000ff");
			SetShowObject("","",0);
			SpeakEN("","",d1speak[i]);
			InvalidateObj("","");
		}
			b_e== true;
		}
		i++;
	}
	MoveObjectTo("","",-1,-1);
	InvalidateObj("","");
}
function SpeakD1()
{
	var i= rightStr(GetName(""),1);
	SpeakEN("","",d1speak[i]);

}
var d2kq=[1,0,1,0,0];
var d2tl=["","","","",""];
function InitD2()
{
	for(var i=0; i<5;i++)
	{
	SetCursor("","yes"+i,"pointer");
	SetCursor("","no"+i,"pointer");
	SetText("","yes"+i,"");
	SetText("","no"+i,"");
	SetFontColor("","yes"+i,"#00ff00");
	SetFontColor("","no"+i,"#00ff00");
	d2tl[i]="";
     }
     InvalidateObj("","");
}
function D2Click(){
	var name= GetName("");
	var i= rightStr(name,1);
	if(leftStr(name,2)=="no")
	{
		SetText("","no"+i,"√");
		SetText("","yes"+i,"");
		d2tl[i]=0;
		SpeakEN("","","no");
	}
	else {
		SetText("","no"+i,"");
		SetText("","yes"+i,"√");
		d2tl[i]=1;
		SpeakEN("","","yes");
	}
 	InvalidateObj("","");
}
function CheckD2(){
	
	for(var i=0; i<5;i++)
	{
		if(d2kq[i] ==  d2tl[i])
		{
		SetFontColor("","yes"+i,"#00ff00");
		SetFontColor("","no"+i,"#00ff00");
		}
		else {
		SetFontColor("","yes"+i,"#ff0000");
		SetFontColor("","no"+i,"#ff0000");
		}
	}
	InvalidateObj("","");
}
var ae1=["","","","","","","",""];
var ae1spreak=["This is my book","This is my book","And that is my school bag","And that is my school bag","These are my pencils","These are my pencils","And Those are rulers.","And Those are rulers."];
function InitE1()
{	
	for(var i=0; i<8;i++)
	{
	if(ae1[i]=="")
	 ae1[i]= GetText("","e1_"+i);
	SetText("","e1_"+i,"");
	SetFontColor("","e1_"+i,"#000000");
	SetCursor("","e1_"+i,"pointer");
	}
      InvalidateObj("","");
}

function CheckE1(){
	for(var i=0; i<8;i++)
	{
		if(RemoveDot(GetText("","e1_"+i)) ==  RemoveDot(ae1[i]))
		{
		SetText("","e1_"+i,ae1[i]);
		SetFontColor("","e1_"+i,"#00ff00");
		}
		else SetFontColor("","e1_"+i,"#ff0000");
	}
     InvalidateObj("","");
}
function E1Click(){
	var name= GetName("");
	var i= rightStr(name,1);
	SpeakEN("","",ae1spreak[i]);
}
var ae2=["","","",""];
var ae2speak=["Is this a pen? Yes, it is.","Is that a pencil case? No, it isn't","Are these rulers? Yes, they are.","Are those books? No, they aren't."];
function InitE2()
{	
	for(var i=0; i<4;i++){
	if(ae2[i]=="")
	 ae2[i]= GetText("","e2_"+i);
	SetText("","e2_"+i,"");
	SetFontColor("","e2_"+i,"#0000ff");
	SetCursor("","e2_"+i,"pointer");
	}
      InvalidateObj("","");
}
function CheckE2(){
	for(var i=0; i<4;i++){
		if(RemoveDot(GetText("","e2_"+i)) ==  RemoveDot(ae2[i]))
		{
		SetText("","e2_"+i,ae2[i]);
		SetFontColor("","e2_"+i,"#00ff00");
		}
		else {
			 SetText("","e2_"+i,ae2[i]);
			 SetFontColor("","e2_"+i,"#ff0000");
		}
	}
InvalidateObj("","");
}
function E2Click(){
	var name= GetName("");
	var i= rightStr(name,1);
	SpeakEN("","",ae2speak[i]);
}
function InitE3()
{
for(var i=0; i<2;i++){
SetCursor("","e3_"+i,"pointer");
SetText("","e3_"+i,"");
}
SetPaint("","your_friend",1);
PaintType("","your_friend",6);
PaintColor("","your_friend","#000000");
SetCursor("","your_friend","pointer");
PaintWidth("","your_friend",3);
InvalidateObj("","");
}
function Trang_1()
{
InitA1();
InitA2();
  return;
}

function Trang_2()
{
InitA3();
InitB1();
  return;
}

function Trang_3()
{
InitB2();
InitB3();
  return;
}

function Trang_4()
{
InitD1();
  return;
}

function Trang_5()
{
InitD2();
InitE1();
  return;
}

function Page_2()
{
InitE2();
InitE3();
  return;
}

function PageKey()
{
InitKeyBoar();

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

 var Trang_1 = new Kinetic.Layer({name: 'Trang_1',callback:'Trang_1()'});
var Trang_1_Backrounnd = CreText('Trang_1_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
Trang_1.add(Trang_1_Backrounnd);
var Text_2 = CreText('Text_2',419,99,100,99,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE4.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_2);
var Text_6 = CreText('Text_6',227,122,127,81,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE6.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_6);
var Text_21 = CreText('Text_21',234,208,224,32,"a.                     b.",'rgba(0, 0, 0, 0)','#ffffff','#ff0000','#ff0000','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(Text_21);
var a1_0 = CreText('a1_0',259,208,99,32,"_ulers",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a1_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_1.add(a1_0);
var Text_32 = CreText('Text_32',0,1,640,63,"This is my pen",'#a8d3ff','#ffffff','#ff0000','#ffffff','',36,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#004080','#a8d3ff','0','3','#ffff00','0','0','4','1',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_32.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_1.add(Text_32);
var Text_1 = CreText('Text_1',-1,1,112,63,"Unit 8",'#0080ff','#ffffff','#ffffff','#ffffff','',20,'Arial','Bold','center','middle',12,'0.00','0','1',1,'#00008b','#0080ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'#c0c0c0',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_1.add(Text_1);
var Text_3 = CreText('Text_3',10,64,451,40,"A. PHONICS AND VOCABULARY",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',22,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_1.add(Text_3);
var Text_9 = CreText('Text_9',22,249,531,26,"2 . Find and circle the names of school things.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitA2();
SpeakEN("","");
  return;
}
 );
Trang_1.add(Text_9);
var Text_5 = CreText('Text_5',590,454,42,20,"›››",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Trang_1.add(Text_5);
var Text_4 = CreText('Text_4',18,98,273,26,"1 . Complate and say aloud.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitA1();
SpeakEN("","");
  return;
}
 );
Trang_1.add(Text_4);
var a1_1 = CreText('a1_1',399,208,174,32,"_ese are rubbers",'#ffffff','#ffffff','#000000','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_1.add(a1_1);
var Text_b = CreText('Text_b',56,140,44,32,"r",'rgba(255,128,0,0.78)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255,128,0,0.78)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_b.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckA1("a1_0");
  return;
}
 );
Text_b.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_1.add(Text_b);
var Text_h = CreText('Text_h',123,140,44,32,"th",'rgba(255,128,0,0.78)','#ffffff','#000000','#ffffff','',20,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','rgba(255,128,0,0.78)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_h.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckA1("a1_1");
  return;
}
 );
Text_h.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_1.add(Text_h);
var a2_0 = CreText('a2_0',321,318,22,22,"R",'#ffad5b','#ffad5b','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_0);
var a2_1 = CreText('a2_1',210,319,22,22,"R",'#ffad5b','#ffad5b','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_1);
var a2_2 = CreText('a2_2',210,296,22,21,"B",'#ffad5b','#ffad5b','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_2);
var a2_3 = CreText('a2_3',277,295,22,22,"K",'#ffad5b','#ffad5b','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_3);
var a2_4 = CreText('a2_4',211,362,22,22,"P",'#ffad5b','#ffad5b','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_4);
var a2_5 = CreText('a2_5',322,363,22,22,"L",'#ffad5b','#ffad5b','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_5);
var a2_6 = CreText('a2_6',321,430,22,22,"S",'#ffad5b','#ffad5b','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_6);
var a2_7 = CreText('a2_7',210,428,22,20,"S",'#ffad5b','#ffad5b','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a2_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Trang_1.add(a2_7);
var obj_paint = CreText('obj_paint',86,287,349,172,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE9.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
obj_paint.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
EndA2();
  return;
}
 );
obj_paint.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
StartA2();
  return;
}
 );
Trang_1.add(obj_paint);
var a2word_0 = CreText('a2word_0',95,345,69,19,"BOOK",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(a2word_0);
var a2word_1 = CreText('a2word_1',85,382,93,25,"RUBBER",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(a2word_1);
var a2word_2 = CreText('a2word_2',96,437,70,21,"PENCIL",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(a2word_2);
var a2word_3 = CreText('a2word_3',356,349,67,22,"PENS",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(a2word_3);
var a2word_4 = CreText('a2word_4',349,433,92,22,"RULERS",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_1.add(a2word_4);
stage.add(Trang_1);

 var Trang_2 = new Kinetic.Layer({name: 'Trang_2',callback:'Trang_2()'});
var Trang_2_Backrounnd = CreText('Trang_2_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
Trang_2.add(Trang_2_Backrounnd);
var Text_12 = CreText('Text_12',372,126,143,20,"2. That is my",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_12);
var Text_3 = CreText('Text_3',419,148,119,79,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE14.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_3);
var Text_6 = CreText('Text_6',19,272,451,40,"B. SENTENCE PATTERNS",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',22,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_2.add(Text_6);
var Text_7 = CreText('Text_7',33,302,273,26,"1 . Read and match.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','10','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
InitB1();
InvalidateObj("","");
  return;
}
 );
Trang_2.add(Text_7);
var b10_0 = CreText('b10_0',37,328,316,27,"1. Thit is my pencil",'#ffe0c1','#ffa8ff','#000000','#000000','',18,'Arial','Normal','left','middle',12,'0.00','0','1',1,'#ffad5b','#ffe0c1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b10_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_2.add(b10_0);
var b10_1 = CreText('b10_1',37,362,316,27,"2. It's",'#ffe0c1','#ffa8ff','#000000','#000000','',18,'Arial','Normal','left','middle',12,'0.00','0','1',1,'#ffad5b','#ffe0c1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b10_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_2.add(b10_1);
var b10_2 = CreText('b10_2',37,396,316,27,"3. These are my",'#ffe0c1','#ffa8ff','#000000','#000000','',18,'Arial','Normal','left','middle',12,'0.00','0','1',1,'#ffad5b','#ffe0c1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b10_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_2.add(b10_2);
var b11_2 = CreText('b11_2',395,396,177,27,"new.",'rgba(198,226,255,0.59)','#ffd700','#000000','#ffffff','',18,'Arial','Normal','center','middle',12,'0.00','2','0',1,'#0080c0','rgba(198,226,255,0.59)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b11_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB1("b10_1");
  return;
}
 );
Trang_2.add(b11_2);
var Text_2 = CreText('Text_2',21,5,515,26,"3 . Look and write.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
InitA3();
SpeakEN("","");
  return;
}
 );
Trang_2.add(Text_2);
var Text_1 = CreText('Text_1',542,454,42,20,"‹‹‹",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Trang_2.add(Text_1);
var Text_8 = CreText('Text_8',592,454,42,20,"›››",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Trang_2.add(Text_8);
var b10_3 = CreText('b10_3',37,431,316,27,"4. They're",'#ffe0c1','#ffa8ff','#000000','#000000','',18,'Arial','Normal','left','middle',12,'0.00','0','1',1,'#ffad5b','#ffe0c1','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b10_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_2.add(b10_3);
var b11_3 = CreText('b11_3',396,431,177,27,"case.",'rgba(198,226,255,0.59)','#ffd700','#000000','#ffffff','',18,'Arial','Normal','center','middle',12,'0.00','2','0',1,'#0080c0','rgba(198,226,255,0.59)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b11_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB1("b10_0");
  return;
}
 );
Trang_2.add(b11_3);
var b11_1 = CreText('b11_1',395,362,177,27,"notebooks.",'rgba(198,226,255,0.59)','#ffd700','#000000','#ffffff','',18,'Arial','Normal','center','middle',12,'0.00','2','0',1,'#0080c0','rgba(198,226,255,0.59)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b11_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB1("b10_2");
  return;
}
 );
Trang_2.add(b11_1);
var b11_0 = CreText('b11_0',395,328,177,27,"new too.",'rgba(198,226,255,0.59)','#ffd700','#000000','#ffffff','',18,'Arial','Normal','center','middle',12,'0.00','2','0',1,'#0080c0','rgba(198,226,255,0.59)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b11_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB1("b10_3");
  return;
}
 );
Trang_2.add(b11_0);
var a3_0 = CreText('a3_0',167,119,86,22,"book",'rgba(255,255,255,0.20)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a3_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
a3_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
A3Click();
  return;
}
 );
Trang_2.add(a3_0);
var a3_2 = CreText('a3_2',193,223,82,22,"pens",'rgba(255,255,255,0.20)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a3_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
a3_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
A3Click();
  return;
}
 );
Trang_2.add(a3_2);
var a3_3 = CreText('a3_3',504,229,76,22,"rulers",'rgba(255,255,255,0.20)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a3_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
a3_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
A3Click();
  return;
}
 );
Trang_2.add(a3_3);
var a3_1 = CreText('a3_1',472,122,84,22,"pencil",'rgba(255,255,255,0.20)','#ffffff','#000000','#000000','',16,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
a3_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
a3_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
A3Click();
  return;
}
 );
Trang_2.add(a3_1);
var Check2 = CreText('Check2',211,6,83,23,"√ Check",'rgba(0, 0, 0, 0)','#ffffff','#009300','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#009300','#004000','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Check2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckA3();
  return;
}
 );
Trang_2.add(Check2);
var Text_4 = CreText('Text_4',155,40,64,76,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE10.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_4);
var Text_5 = CreText('Text_5',447,45,77,73,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE11.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_5);
var Text_9 = CreText('Text_9',134,148,110,74,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE12.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_9);
var Text_10 = CreText('Text_10',66,124,116,20,"1. This is my",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_10);
var Text_11 = CreText('Text_11',66,224,129,20,"3. These are my",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_11);
var Text_13 = CreText('Text_13',372,230,143,20,"4. Those are my",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_2.add(Text_13);
stage.add(Trang_2);

 var Trang_3 = new Kinetic.Layer({name: 'Trang_3',callback:'Trang_3()'});
var Trang_3_Backrounnd = CreText('Trang_3_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
Trang_3.add(Trang_3_Backrounnd);
var Text_1 = CreText('Text_1',24,207,444,26,"3 . Put the words in order. Then read aloud.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
InitB3();
  return;
}
 );
Trang_3.add(Text_1);
var b30_0 = CreText('b30_0',91,269,42,27,"is /",'#ffffff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b30_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_0");
  return;
}
 );
Trang_3.add(b30_0);
var kqb3_0 = CreText('kqb3_0',90,243,313,25,"",'#ddffee','#8affc5','#0080ff','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#0080ff','#ddffee','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
kqb3_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_3.add(kqb3_0);
var b30_1 = CreText('b30_1',150,269,58,25,"ruler /",'#ffffff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b30_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_0");
  return;
}
 );
Trang_3.add(b30_1);
var b30_2 = CreText('b30_2',225,269,57,25,"my  /",'#ffffff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b30_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_0");
  return;
}
 );
Trang_3.add(b30_2);
var b31_0 = CreText('b31_0',91,325,56,25,"that /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b31_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_1");
  return;
}
 );
Trang_3.add(b31_0);
var b31_1 = CreText('b31_1',147,325,54,25,"your /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b31_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_1");
  return;
}
 );
Trang_3.add(b31_1);
var b31_2 = CreText('b31_2',216,325,118,25,"pencil case /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b31_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_1");
  return;
}
 );
Trang_3.add(b31_2);
var kqb3_1 = CreText('kqb3_1',90,295,313,25,"",'#ddffee','#8affc5','#0080ff','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#0080ff','#ddffee','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
kqb3_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_3.add(kqb3_1);
var b32_0 = CreText('b32_0',91,378,47,25,"are /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b32_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_2");
  return;
}
 );
Trang_3.add(b32_0);
var b32_1 = CreText('b32_1',148,378,62,25,"these /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b32_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_2");
  return;
}
 );
Trang_3.add(b32_1);
var b32_2 = CreText('b32_2',220,378,107,25,"notebooks /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b32_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_2");
  return;
}
 );
Trang_3.add(b32_2);
var b33_0 = CreText('b33_0',91,435,65,25,"your /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b33_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_3");
  return;
}
 );
Trang_3.add(b33_0);
var b33_1 = CreText('b33_1',170,435,58,25,"are /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b33_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_3");
  return;
}
 );
Trang_3.add(b33_1);
var kqb3_2 = CreText('kqb3_2',90,350,313,25,"",'#ddffee','#8affc5','#0080ff','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#0080ff','#ddffee','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
kqb3_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_3.add(kqb3_2);
var kqb3_3 = CreText('kqb3_3',90,405,313,25,"",'#ddffee','#8affc5','#0080ff','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',1,'#0080ff','#ddffee','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
kqb3_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_3.add(kqb3_3);
var b33_2 = CreText('b33_2',242,435,68,25,"those /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b33_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_3");
  return;
}
 );
Trang_3.add(b33_2);
var Text_2 = CreText('Text_2',593,458,42,20,"›››",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Trang_3.add(Text_2);
var Text_3 = CreText('Text_3',546,458,42,20,"‹‹‹",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Trang_3.add(Text_3);
var b2_0 = CreText('b2_0',318,10,310,43,"1. Is this your pencil?\r\n    ...",'#ffffe0','#ffffe0','#000000','#ffffff','',14,'Arial','Normal','left','middle',3,'0.00','0','0',1,'#ff00ff','#ffffe0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b2_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_3.add(b2_0);
var b2_1 = CreText('b2_1',318,59,310,43,"2. Is that your pen?\r\n    ...",'#ffffe0','#ffffe0','#000000','#ffffff','',14,'Arial','Normal','left','middle',3,'0.00','0','0',1,'#ff00ff','#ffffe0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b2_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_3.add(b2_1);
var b2_2 = CreText('b2_2',318,108,310,43,"3.Are these your rulers?\r\n    ...",'#ffffe0','#ffffe0','#000000','#ffffff','',14,'Arial','Normal','left','middle',3,'0.00','0','0',1,'#ff00ff','#ffffe0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b2_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_3.add(b2_2);
var b2_3 = CreText('b2_3',319,157,310,43,"4. Are those your rubbers?\r\n    ...",'#ffffe0','#ffffe0','#000000','#ffffff','',14,'Arial','Normal','left','middle',3,'0.00','0','0',1,'#ff00ff','#ffffe0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b2_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_3.add(b2_3);
var b32_3 = CreText('b32_3',339,378,67,25,"my /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b32_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_2");
  return;
}
 );
Trang_3.add(b32_3);
var b21_0 = CreText('b21_0',8,42,194,27,"Yes, they are.",'#fff0ff','#fff0ff','#000000','#ffffff','',14,'Arial','Normal','left','middle',12,'0.00','0','1',1,'#0080ff','#fff0ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b21_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB2("b2_2");
  return;
}
 );
Trang_3.add(b21_0);
var b21_1 = CreText('b21_1',8,74,288,27,"No, they aren't. Those are Peter's rubbers.",'#fff0ff','#fff0ff','#000000','#ffffff','',14,'Arial','Normal','left','middle',12,'0.00','0','1',1,'#0080ff','#fff0ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b21_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB2("b2_3");
  return;
}
 );
Trang_3.add(b21_1);
var b21_2 = CreText('b21_2',8,139,208,27,"No, it isn't. That is Mai's pen.",'#fff0ff','#fff0ff','#000000','#ffffff','',14,'Arial','Normal','left','middle',12,'0.00','0','1',1,'#0080ff','#fff0ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b21_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB2("b2_1");
  return;
}
 );
Trang_3.add(b21_2);
var b21_3 = CreText('b21_3',8,107,139,27,"Yes, it is.",'#fff0ff','#fff0ff','#000000','#ffffff','',14,'Arial','Normal','left','middle',12,'0.00','0','1',1,'#0080ff','#fff0ff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b21_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB2("b2_0");
  return;
}
 );
Trang_3.add(b21_3);
var b30_3 = CreText('b30_3',299,269,60,25,"this /",'#ffffff','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b30_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_0");
  return;
}
 );
Trang_3.add(b30_3);
var b33_3 = CreText('b33_3',326,435,59,25,"pens /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b33_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_3");
  return;
}
 );
Trang_3.add(b33_3);
var b31_3 = CreText('b31_3',353,325,48,25,"is /",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',18,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
b31_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckB3("kqb3_1");
  return;
}
 );
Trang_3.add(b31_3);
var Text_4 = CreText('Text_4',20,4,314,28,"2 . Match the sentences.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
InitB2();
  return;
}
 );
Trang_3.add(Text_4);
var Text_5 = CreText('Text_5',56,258,30,221,"1.\r\n\r\n\r\n2.\r\n\r\n\r\n3.\r\n\r\n\r\n4.",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#0000ff','',16,'Arial','Bold','center','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_3.add(Text_5);
stage.add(Trang_3);

 var Trang_4 = new Kinetic.Layer({name: 'Trang_4',callback:'Trang_4()'});
var Trang_4_Backrounnd = CreText('Trang_4_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
Trang_4.add(Trang_4_Backrounnd);
var Text_5 = CreText('Text_5',192,4,405,239,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE1.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_4.add(Text_5);
var Text_10 = CreText('Text_10',26,286,602,176,"\r\nThis is  my classroom. It is big. This is my                       .\r\n\r\nIt is new.                 is my pencil sharpener. \r\n\r\nThese are my pencils.                    are short.\r\n\r\nThose are my              .\r\n\r\nThey are              .\r\n",'#ffffe0','#ffffff','#000000','#ffffff','',14,'Arial','Normal','left','top',0,'0.00','0','0',1,'#ff6820','#ffffe0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',3,3,'#c0c0c0',0,1.50);
Trang_4.add(Text_10);
var Text_2 = CreText('Text_2',14,226,215,34,"D. READING",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',22,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_4.add(Text_2);
var c_0 = CreText('c_0',515,181,80,46,"Those are my books.",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#000000','',12,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_4.add(c_0);
var Text_8 = CreText('Text_8',451,10,97,47,"That is my pencil case.",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#000000','',12,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_4.add(Text_8);
var c_2 = CreText('c_2',249,43,108,38,"This is my pen.",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#000000','',12,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_4.add(c_2);
var c_1 = CreText('c_1',311,180,70,50,"These are my rulers.",'rgba(0, 0, 0, 0)','#ffffff','rgba(0, 0, 0, 0)','#000000','',12,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
c_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_4.add(c_1);
var Text_1 = CreText('Text_1',38,25,185,26,"Read anh reply.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_4.add(Text_1);
var Text_6 = CreText('Text_6',10,3,185,29,"C. SPEAKING",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',22,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_4.add(Text_6);
var d1_0 = CreText('d1_0',296,297,82,21,"school bag",'#ffffe0','#ffffff','rgba(0, 0, 0, 0)','#000000','',14,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0080ff','#ffffe0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d1_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakD1();
  return;
}
 );
Trang_4.add(d1_0);
var d1_1 = CreText('d1_1',87,328,58,23,"That",'#ffffe0','#ffffff','rgba(0, 0, 0, 0)','#000000','',14,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0080ff','#ffffe0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakD1();
  return;
}
 );
Trang_4.add(d1_1);
var d1_2 = CreText('d1_2',175,360,64,23,"They",'#ffffe0','#ffffff','rgba(0, 0, 0, 0)','#000000','',14,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0080ff','#ffffe0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d1_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakD1();
  return;
}
 );
Trang_4.add(d1_2);
var Text_13 = CreText('Text_13',20,255,220,26,"1. Read and complete",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
InitD1();
  return;
}
 );
Trang_4.add(Text_13);
var d1_3 = CreText('d1_3',121,395,49,23,"books",'#ffffe0','#ffffff','rgba(0, 0, 0, 0)','#000000','',14,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0080ff','#ffffe0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d1_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakD1();
  return;
}
 );
Trang_4.add(d1_3);
var d1w_2 = CreText('d1w_2',364,266,104,20,"school bag",'#ffad5b','#ffad5b','#000000','#000000','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff6820','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',-1,1,'#7f7f7f',0,1.50);
d1w_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckD1();
  return;
}
 );
Trang_4.add(d1w_2);
var d1w_3 = CreText('d1w_3',477,266,49,20,"that",'#ffad5b','#ffad5b','#000000','#000000','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff6820','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',-1,1,'#7f7f7f',0,1.50);
d1w_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckD1();
  return;
}
 );
Trang_4.add(d1w_3);
var d1w_1 = CreText('d1w_1',302,266,57,20,"books",'#ffad5b','#ffad5b','#000000','#000000','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff6820','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',-1,1,'#7f7f7f',0,1.50);
d1w_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckD1();
  return;
}
 );
Trang_4.add(d1w_1);
var d1_4 = CreText('d1_4',91,426,46,23,"new",'#ffffe0','#ffffff','rgba(0, 0, 0, 0)','#000000','',14,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0080ff','#ffffe0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
d1_4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakD1();
  return;
}
 );
Trang_4.add(d1_4);
var d1w_0 = CreText('d1w_0',243,266,55,20,"they",'#ffad5b','#ffad5b','#000000','#000000','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff6820','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',-1,1,'#7f7f7f',0,1.50);
d1w_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckD1();
  return;
}
 );
Trang_4.add(d1w_0);
var Text_3 = CreText('Text_3',407,288,221,174,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE17.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Trang_4.add(Text_3);
var Text_4 = CreText('Text_4',543,453,42,20,"‹‹‹",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Trang_4.add(Text_4);
var Text_12 = CreText('Text_12',591,453,42,20,"›››",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Trang_4.add(Text_12);
var d1w_4 = CreText('d1w_4',533,266,69,20,"new",'#ffad5b','#ffad5b','#000000','#000000','',14,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff6820','#ffad5b','0','0','rgba(0, 0, 0, 0)','0','0','4','0',-1,1,'#7f7f7f',0,1.50);
d1w_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckD1();
  return;
}
 );
Trang_4.add(d1w_4);
stage.add(Trang_4);

 var Trang_5 = new Kinetic.Layer({name: 'Trang_5',callback:'Trang_5()'});
var Trang_5_Backrounnd = CreText('Trang_5_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
Trang_5.add(Trang_5_Backrounnd);
var Text_15 = CreText('Text_15',147,218,374,272,"",'#ffffe0','#ffffff','#000000','#ffffff','ID_IMAGE18.PNG',14,'Arial','Normal','left','top',3,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffe0','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, '#c0c0c0',0,1.50);
Trang_5.add(Text_15);
var Text_11 = CreText('Text_11',128,313,191,23,"This         my",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(Text_11);
var Text_14 = CreText('Text_14',335,449,193,24,"And those               my",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(Text_14);
var Text_13 = CreText('Text_13',63,454,244,23,"These             my",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(Text_13);
var Text_1 = CreText('Text_1',21,237,451,27,"E. WRITING",'rgba(0, 0, 0, 0)','#ffffff','#004080','#ffffff','',22,'Arial','Bold','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
  return;
}
 );
Trang_5.add(Text_1);
var e1_5 = CreText('e1_5',197,451,86,22,"pencils",'rgba(255,255,255,0.20)','#ffffff','#000000','#000000','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e1_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
e1_5.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
E1Click();
  return;
}
 );
Trang_5.add(e1_5);
var e1_1 = CreText('e1_1',231,314,63,21,"book",'rgba(255,255,255,0.20)','#ffffff','#000000','#000000','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e1_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
e1_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
E1Click();
  return;
}
 );
Trang_5.add(e1_1);
var e1_6 = CreText('e1_6',434,449,50,22,"are",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,128,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e1_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
e1_6.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
E1Click();
  return;
}
 );
Trang_5.add(e1_6);
var Text_5 = CreText('Text_5',42,259,222,26,"1. Read and write.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
InitE1();
  return;
}
 );
Trang_5.add(Text_5);
var Check2 = CreText('Check2',63,283,83,23,"√ Check",'rgba(0, 0, 0, 0)','#ffffff','#009300','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffff00','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Check2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckE1();
  return;
}
 );
Trang_5.add(Check2);
var Text_7 = CreText('Text_7',590,423,42,20,"‹‹‹",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Trang_5.add(Text_7);
var Text_8 = CreText('Text_8',591,449,42,20,"›››",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
NextPage();
  return;
}
 );
Trang_5.add(Text_8);
var e1_4 = CreText('e1_4',116,452,49,21,"are",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,128,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e1_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
e1_4.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
E1Click();
  return;
}
 );
Trang_5.add(e1_4);
var Text_4 = CreText('Text_4',22,4,280,26,"2. Read and tick(√)",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
InitD2();
  return;
}
 );
Trang_5.add(Text_4);
var Text_2 = CreText('Text_2',66,27,424,191,"\r\n  1.\r\n\r\n  2. \r\n\r\n  3.\r\n\r\n  4.\r\n\r\n  5.\r\n",'#ffdfff','#ffffff','#0000a0','#0000a0','',16,'Arial','Bold','left','top',3,'0.00','0','0',1,'#ff00ff','#ffdfff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(Text_2);
var Text_3 = CreText('Text_3',116,27,284,191,"\r\nThe classroom is big.\r\n\r\nThe school bag is old.\r\n\r\nThe pencil sharpener is small.\r\n\r\nThe pencils are long..\r\n\r\nThe books are old.\r\n",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'#ffffff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(Text_3);
var yes0 = CreText('yes0',397,45,27,24,"√",'#ffffff','#ffffff','#005500','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
yes0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
D2Click();
  return;
}
 );
Trang_5.add(yes0);
var yes1 = CreText('yes1',397,79,27,24,"",'#ffffff','#ffffff','#005500','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
yes1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
D2Click();
  return;
}
 );
Trang_5.add(yes1);
var yes2 = CreText('yes2',397,113,27,24,"",'#ffffff','#ffffff','#005500','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
yes2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
D2Click();
  return;
}
 );
Trang_5.add(yes2);
var yes3 = CreText('yes3',397,147,27,24,"",'#ffffff','#ffffff','#005500','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
yes3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
D2Click();
  return;
}
 );
Trang_5.add(yes3);
var yes4 = CreText('yes4',397,183,27,24,"",'#ffffff','#ffffff','#005500','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
yes4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
D2Click();
  return;
}
 );
Trang_5.add(yes4);
var no0 = CreText('no0',448,46,27,24,"√",'#ffffff','#ffffff','#005500','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
no0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
D2Click();
  return;
}
 );
Trang_5.add(no0);
var no1 = CreText('no1',448,80,27,24,"",'#ffffff','#ffffff','#005500','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
no1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
D2Click();
  return;
}
 );
Trang_5.add(no1);
var no2 = CreText('no2',448,114,27,24,"",'#ffffff','#ffffff','#005500','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
no2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
D2Click();
  return;
}
 );
Trang_5.add(no2);
var no3 = CreText('no3',448,148,27,24,"",'#ffffff','#ffffff','#005500','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
no3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
D2Click();
  return;
}
 );
Trang_5.add(no3);
var no4 = CreText('no4',448,184,27,24,"",'#ffffff','#ffffff','#005500','#ffffff','',16,'Arial','Bold','center','middle',0,'0.00','0','0',1,'#0000ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
no4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
D2Click();
  return;
}
 );
Trang_5.add(no4);
var Text_6 = CreText('Text_6',385,24,102,26,"YES     NO",'rgba(0, 0, 0, 0)','#ffffff','#8b0000','#ffffff','',14,'Arial','Bold','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(Text_6);
var Text_9 = CreText('Text_9',490,27,83,32,"√ Check",'#ffdfff','#ffffff','#009300','#009300','',18,'Arial','Normal','center','middle',0,'0.00','0','0',1,'#ff00ff','#ffdfff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckD2();
  return;
}
 );
Trang_5.add(Text_9);
var e1_0 = CreText('e1_0',164,314,34,21,"is",'rgba(255,255,255,0.20)','#ffffff','#000000','#000000','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e1_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
e1_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
E1Click();
  return;
}
 );
Trang_5.add(e1_0);
var Text_16 = CreText('Text_16',331,312,220,23,"And that         my",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Trang_5.add(Text_16);
var e1_3 = CreText('e1_3',463,313,96,21,"school bag",'rgba(255,255,255,0.20)','#ffffff','#000000','#000000','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e1_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
e1_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
E1Click();
  return;
}
 );
Trang_5.add(e1_3);
var e1_2 = CreText('e1_2',400,313,34,21,"is",'rgba(255,255,255,0.20)','#ffffff','#000000','#000000','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e1_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
e1_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
E1Click();
  return;
}
 );
Trang_5.add(e1_2);
var e1_7 = CreText('e1_7',523,449,50,22,"rulers",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','center','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,128,255,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e1_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
e1_7.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
E1Click();
  return;
}
 );
Trang_5.add(e1_7);
stage.add(Trang_5);

 var Page_2 = new Kinetic.Layer({name: 'Page_2',callback:'Page_2()'});
var Page_2_Backrounnd = CreText('Page_2_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
Page_2.add(Page_2_Backrounnd);
var Text_4 = CreText('Text_4',79,66,329,218,"1. Is this a pen?\r\n\r\n\r\n     2. Is that a pencil case?\r\n\r\n\r\n         3. Are these rulers?\r\n\r\n\r\n                     4. Are those books?",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','top',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_4);
var Text_7 = CreText('Text_7',43,308,280,132,"\r\n\r\n\r\n This is my\r\n\r\n And these are my\r\n\r\n",'#ffff91','#ffffff','#000000','#ffffff','',16,'Arial','Normal','left','top',0,'0.00','10','0',1,'#009300','#ffff91','0','0','rgba(0, 0, 0, 0)','0','0','4','5',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_7);
var Text_6 = CreText('Text_6',29,277,444,26,"3. Write about your school things.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
InitE2();
  return;
}
 );
Text_6.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
SpeakEN("","");
InitE2();
  return;
}
 );
Page_2.add(Text_6);
var Text_2 = CreText('Text_2',590,455,42,20,"‹‹‹",'#005500','#ffffff','#00ff00','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',2,'#00ff00','#005500','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
PrevPage();
  return;
}
 );
Page_2.add(Text_2);
var e2_0 = CreText('e2_0',206,64,86,22,"Yes, it is.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,224,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e2_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
e2_0.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
E2Click();
  return;
}
 );
Page_2.add(e2_0);
var e2_1 = CreText('e2_1',289,120,85,22,"No, it isn't.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,224,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e2_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
e2_1.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
E2Click();
  return;
}
 );
Page_2.add(e2_1);
var Text_5 = CreText('Text_5',22,5,300,26,"2. Look and write the questions.",'rgba(0, 0, 0, 0)','#ffffff','#0080ff','#ffffff','',20,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#0080c0','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Text_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SpeakEN("","");
InitE2();
  return;
}
 );
Page_2.add(Text_5);
var e2_2 = CreText('e2_2',276,173,102,21,"Yes, they are.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,224,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e2_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
e2_2.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
E2Click();
  return;
}
 );
Page_2.add(e2_2);
var e3_1 = CreText('e3_1',181,392,130,25,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e3_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_2.add(e3_1);
var e3_0 = CreText('e3_0',140,356,172,25,"",'rgba(0, 0, 0, 0)','#ffffff','#0000ff','#ffffff','',16,'Arial','Normal','center','bottom',0,'0.00','0','1',1,'#0080ff','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e3_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
Page_2.add(e3_0);
var e2_3 = CreText('e2_3',346,229,113,21,"No, they aren't.",'rgba(0, 0, 0, 0)','#ffffff','#000000','#000000','',14,'Arial','Normal','left','middle',0,'0.00','0','1',1,'#0080ff','rgba(255,255,224,0.20)','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
e2_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
 ShowKeyNum(name_keyboard);
  return;
}
 );
e2_3.on('mousedown touchstart',function(evt)
{
m_pgObjCaller = this;
E2Click();
  return;
}
 );
Page_2.add(e2_3);
var Text_3 = CreText('Text_3',293,9,51,77,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE19.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_3);
var Text_1 = CreText('Text_1',375,70,68,69,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE11.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_1);
var Text_8 = CreText('Text_8',389,135,84,64,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE20.JPG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_8);
var Text_10 = CreText('Text_10',485,194,67,66,"",'#ffffff','#ffffff','#000000','#ffffff','ID_IMAGE4.PNG',16,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#000000','2','2','rgba(0, 0, 0, 0)','0','0','4','0',0,0, 'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_10);
var Check2 = CreText('Check2',20,33,83,23,"√ Check",'rgba(0, 0, 0, 0)','#ffffff','#009300','#ffffff','',18,'Arial','Normal','center','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffff00','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Check2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
CheckE2();
  return;
}
 );
Page_2.add(Check2);
var Text_9 = CreText('Text_9',55,313,240,40,"Draw your school bag and books in box.",'rgba(0, 0, 0, 0)','#ffffff','#8b0000','#ffffff','',16,'Arial','Normal','left','middle',0,'0.00','0','0',0,'rgba(0, 0, 0, 0)','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
Page_2.add(Text_9);
var your_friend = CreText('your_friend',344,308,237,165,"",'rgba(0, 0, 0, 0)','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',5,'#009300','#ffffff','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
your_friend.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SaveObject("","");
  return;
}
 );
Page_2.add(your_friend);
stage.add(Page_2);

 var PageKey = new Kinetic.Layer({name: 'PageKey',callback:'PageKey()'});
var PageKey_Backrounnd = CreText('PageKey_Backrounnd',0,0,640,480,'','#ffffff','','','','',12,'Times New Roman','','left','center',0,'0.00','0',0,'0',0,'#000000','0','0','0','','0','0','0','0',0,0,'');
PageKey.add(PageKey_Backrounnd);
var bg_key = CreText('bg_key',-2,-4,450,143,"0",'#666666','#ffffff','rgba(0, 0, 0, 0)','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#000000','#666666','0','0','rgba(0, 0, 0, 0)','0','0','4','0',0,0,'rgba(0, 0, 0, 0)',0,1.50);
PageKey.add(bg_key);
var char_0 = CreText('char_0',1,1,35,29,"Q",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#666666','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_0.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_0);
var char_1 = CreText('char_1',41,1,35,29,"W",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_1.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_1);
var char_4 = CreText('char_4',161,1,35,29,"T",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_4.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_4);
var char_7 = CreText('char_7',281,1,35,29,"I",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_7.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_7);
var char_2 = CreText('char_2',81,1,35,29,"E",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_2.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_2);
var char_5 = CreText('char_5',201,1,35,29,"Y",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_5.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_5);
var char_8 = CreText('char_8',321,1,35,29,"O",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_8.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_8);
var char_9 = CreText('char_9',361,1,35,29,"P",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_9.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_9);
var char_6 = CreText('char_6',241,1,35,29,"U",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_6.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_6);
var char_3 = CreText('char_3',121,1,35,29,"R",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_3.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_3);
var char_35 = CreText('char_35',401,1,43,29,"Esc",'#ffc0cb','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffe4e1','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
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
var char_10 = CreText('char_10',14,36,35,29,"A",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_10.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_10);
var char_11 = CreText('char_11',53,36,35,29,"S",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_11.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_11);
var char_14 = CreText('char_14',170,36,35,29,"G",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_14.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_14);
var char_17 = CreText('char_17',287,36,35,29,"K",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_17.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_17);
var char_12 = CreText('char_12',92,36,35,29,"D",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_12.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_12);
var char_15 = CreText('char_15',209,36,35,29,"H",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_15.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_15);
var char_18 = CreText('char_18',326,36,35,29,"L",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_18.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_18);
var char_16 = CreText('char_16',248,36,35,29,"J",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_16.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_16);
var char_13 = CreText('char_13',131,36,35,29,"F",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_13.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_13);
var char_32 = CreText('char_32',2,71,39,29,"Shift",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_32.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
LowerKey();
  return;
}
 );
PageKey.add(char_32);
var char_19 = CreText('char_19',45,71,35,29,"Z",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_19.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_19);
var char_22 = CreText('char_22',162,71,35,29,"V",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_22.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_22);
var char_25 = CreText('char_25',279,71,35,29,"M",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_25.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_25);
var char_20 = CreText('char_20',84,71,35,29,"X",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_20.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_20);
var char_23 = CreText('char_23',201,71,35,29,"B",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_23.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_23);
var char_26 = CreText('char_26',318,71,35,29,",",'#eeeeee','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_26.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_26);
var char_27 = CreText('char_27',357,71,35,29,".",'#eeeeee','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_27.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_27);
var char_24 = CreText('char_24',240,71,35,29,"N",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_24.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_24);
var char_21 = CreText('char_21',123,71,35,29,"C",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_21.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_21);
var char_34 = CreText('char_34',67,105,212,29," ",'#eeeeee','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',3,'0.00','0','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_34.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_34);
var char_28 = CreText('char_28',398,71,42,29,"!",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_28.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_28);
var char_29 = CreText('char_29',287,105,35,29,"?",'#eeeeee','#ffffff','#000000','#ffffff','',16,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_29.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_29);
var char_33 = CreText('char_33',3,105,56,29,".?123",'#eeeeee','#ffffff','#000000','#ffffff','',12,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',1,1,'#ffffff',0,1.50);
char_33.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
ChangKey();
  return;
}
 );
PageKey.add(char_33);
var char_36 = CreText('char_36',378,105,66,29,"Enter",'#98fb98','#ffffff','#000000','#ffffff','',10,'Verdana','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#e0fee0','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_36.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
SetShowObject("",name_keyboard,0);
b_showgroup="0";
  return;
}
 );
PageKey.add(char_36);
var char_30 = CreText('char_30',367,36,35,29,";",'#eeeeee','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_30.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_30);
var char_31 = CreText('char_31',330,104,35,29,":",'#eeeeee','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
char_31.on('mouseup touchend dragend',function(evt)/*---dragend---*/
{
m_pgObjCaller = this;
GetKeyBoNumber();
  return;
}
 );
PageKey.add(char_31);
var char_37 = CreText('char_37',408,36,36,29,"←",'#eeeeee','#ffffff','#000000','#ffffff','',18,'Arial','Normal','center','middle',3,'0.00','3','0',1,'#7f7f7f','#ffffff','4','0','rgba(0, 0, 0, 0)','0','0','4','0',2,1,'#ffffff',0,1.50);
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
var Group_1 = new Kinetic.Group({name:'Group_1',x:0,y:0,width:454,height:147});
Group_1.add(bg_key);
Group_1.add(char_0);
Group_1.add(char_1);
Group_1.add(char_4);
Group_1.add(char_7);
Group_1.add(char_2);
Group_1.add(char_5);
Group_1.add(char_8);
Group_1.add(char_9);
Group_1.add(char_6);
Group_1.add(char_3);
Group_1.add(char_35);
Group_1.add(char_10);
Group_1.add(char_11);
Group_1.add(char_14);
Group_1.add(char_17);
Group_1.add(char_12);
Group_1.add(char_15);
Group_1.add(char_18);
Group_1.add(char_16);
Group_1.add(char_13);
Group_1.add(char_32);
Group_1.add(char_19);
Group_1.add(char_22);
Group_1.add(char_25);
Group_1.add(char_20);
Group_1.add(char_23);
Group_1.add(char_26);
Group_1.add(char_27);
Group_1.add(char_24);
Group_1.add(char_21);
Group_1.add(char_34);
Group_1.add(char_28);
Group_1.add(char_29);
Group_1.add(char_33);
Group_1.add(char_36);
Group_1.add(char_30);
Group_1.add(char_31);
Group_1.add(char_37);
PageKey.add(Group_1);
stage.add(PageKey);
InitLacVietScript();
};
